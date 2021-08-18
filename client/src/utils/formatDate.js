import moment from 'moment';
export const formattedItemsUtil = (data) =>
  data?.map((item) => {
    const formattedWakeTime = moment(item.wakeTime).format('HH:mm');
    const formattedSleepTime = moment(item.sleepTime).format('HH:mm');
    const momentWakeTime = moment(item.wakeTime);
    const momentSleepTime = moment(item.sleepTime);
    const momentDate = moment(item.sleepTime).format('DD MM YYYY');
    const momentTime = moment(item.sleepTime).format('HH:mm');
    const userName = item.userName;
    const userEmail = item.userEmail;

    const diffTotalSleep = momentWakeTime.diff(momentSleepTime, 'hours');
    console.log('---caclulate----');
    console.log(`${momentWakeTime} DIFF ${momentSleepTime} =${diffTotalSleep}`);
    console.log('-----------');

    const newItem = {
      ...item,
      wakeTime: formattedWakeTime,
      sleepTime: formattedSleepTime,
      totalSleep: diffTotalSleep,
      time: momentTime,
      date: momentDate,
      name: userName,
      email: userEmail,
    };
    return newItem;
  });
