const getMergedArrayByUser = (statsArray, formStatsArray) => {
  let resultArray = [];

  for (let i = 0; i < statsArray.length; i++) {
    const statsArrayItem = statsArray[i];

    const formStatsArrayItem = formStatsArray.find(
      (i) => i.id === statsArrayItem.id
    );

    const newMergedItem = { ...statsArrayItem, ...formStatsArrayItem };
    
    resultArray.push(newMergedItem);
  }

  return resultArray
};

module.exports = { getMergedArrayByUser };
