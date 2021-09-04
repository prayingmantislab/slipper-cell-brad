const moment = require('moment');
const { MongoClient } = require('mongodb');

const dailyAverage = async (req, res) => {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/drivers/node/ for more details
   */
  const uri =
    'mongodb+srv://mantis123:mantis123@sleepercell.j3kkb.mongodb.net/SleeperCell?retryWrites=true&w=majority';

  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
   * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
   * pass option { useUnifiedTopology: true } to the MongoClient constructor.
   */
  //   const client = new MongoClient(uri);
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls

    // Print the 10 cheapest suburbs in the Sydney, Australia market
    const zeroTime = moment(JSON.parse(req.body.selectedDate));
    zeroTime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const dayAfter = moment(zeroTime).add(1, 'days');

    const dAvg = await createDailyAverage(client, zeroTime, dayAfter);
    res.status(200).send(dAvg);
  } catch (err) {
    res.status(500).json(err);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
};

/**
 * Print the cheapest suburbs for a given market
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the stat database
 * @param {String} country The country for the given market
 */
async function createDailyAverage(client, zeroTime, dayAfter) {
  const pipeline = [
    {
      $match: {
        dateTime: {
          $gte: new Date(zeroTime),
          $lt: new Date(dayAfter),
        },
        light: {
          $gt: 0,
        },
        sound: {
          $gt: 0,
        },
      },
    },
    {
      $group: {
        _id: '$userEmail',
        dailyLight: {
          $avg: '$sound',
        },
        dailySound: {
          $avg: '$light',
        },
      },
    },
  ];

  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#aggregate for the aggregate() docs
  const aggCursor = await client
    .db('SleeperCell')
    .collection('stats')
    .aggregate(pipeline)
    .toArray();

  return aggCursor;
}

module.exports = {
  dailyAverage,
};
