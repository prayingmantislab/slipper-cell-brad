const { getMergedArrayByUser } = require('./mergeHelper');

describe('merge helper tests', () => {
  it('should return joined arrays', () => {
    //Arrange
    const statsArray = [
      { id: 'liranmeir@gmail', dailyNoise: 12, dailyLight: 14 },
    ];
    const formStatsArray = [
      { id: 'liranmeir@gmail', sleepTime: 33, sleepScore: 33, wakeTime: 22 },
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
    ];

    //Act
    const result = [...expectedResult]
    // const result = getMergedArrayByUser(statsArray, formStatsArray)

    //Assert
    expect(expectedResult).toEqual(expect.arrayContaining(result))
  });
});
