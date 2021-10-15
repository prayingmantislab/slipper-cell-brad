import moment from 'moment';
export const formattedItemsUtil = (data, avg) =>
  data?.map((item) => {
    const formattedWakeTime = moment(item.wakeTime).format('HH:mm');
    const formattedSleepTime = moment(item.sleepTime).format('HH:mm');
    const formattedDeepSleep = moment(item.deepSleep).format('HH:mm');
    const formattedLightSleep = moment(item.lightSleep).format('HH:mm');

    const momentWakeTime = moment(item.wakeTime);
    const momentSleepTime = moment(item.sleepTime);
    const momentDate = moment(item.sleepTime).format('DD MM YYYY');
    const momentTime = moment(item.sleepTime).format('HH:mm');
    const userName = item.userName;
    const userEmail = item.userEmail;

    //avarage
    let averageNoise, averageLight;
    const getAvrage = avg.find((itemAvg) => itemAvg._id === item.userEmail);
    if (getAvrage?.dailySound) averageNoise = getAvrage.dailySound;
    if (getAvrage?.dailyLight) averageLight = getAvrage.dailyLight;

    const diffTotalSleep = momentWakeTime.diff(momentSleepTime, 'hours');
    console.log('---caclulate----');
    console.log(`${momentWakeTime} DIFF ${momentSleepTime} =${diffTotalSleep}`);
    console.log('-----------');

    const newItem = {
      ...item,
      wakeTime: formattedWakeTime,
      sleepTime: formattedSleepTime,
      totalSleep: diffTotalSleep,
      deepSleep: formattedDeepSleep,
      lightSleep: formattedLightSleep,
      time: momentTime,
      date: momentDate,
      name: userName,
      email: userEmail,
      averageNoise,
      averageLight,
    };
    return newItem;
  });
