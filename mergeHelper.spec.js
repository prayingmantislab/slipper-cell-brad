const { getMergedArrayByUser } = require('./mergeHelper');

describe('merge helper tests', () => {
  it('should return joined arrays', () => {
    //Arrange
    const statsArray = [
      { id: 'liranmeir@gmail', dailyNoise: 12, dailyLight: 14 },
      { id: 'asi@gmail', dailyNoise: 22, dailyLight: 22 },
    ];
    const formStatsArray = [
      { id: 'liranmeir@gmail', sleepTime: 33, sleepScore: 33, wakeTime: 22 },
      { id: 'asi@gmail', sleepTime: 11, sleepScore: 11, wakeTime: 11 },
    ];
    const expectedResult = [
      {
        id: 'liranmeir@gmail',
        dailyNoise: 12,
        dailyLight: 14,
        sleepTime: 33,
        sleepScore: 33,
        wakeTime: 22,
      },
      {
        id: 'asi@gmail',
        dailyNoise: 22,
        dailyLight: 22,
        sleepTime: 11,
        sleepScore: 11,
        wakeTime: 11,
      },
    ];

    //Act
    const result = getMergedArrayByUser(statsArray, formStatsArray);

    //Assert
    expect(expectedResult).toEqual(expect.arrayContaining(result));
  });
});
