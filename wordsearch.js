const transpose = function(matrix) {
    let outputArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      outputArray.push([]);
    }
    for (let subArray of matrix) {
      for (let k = 0; k < subArray.length; k++) {
        outputArray[k].push(subArray[k]);
      }
    }
    return outputArray;
  };
  
  const wordSearch = (letters, word) => { 
      if (!letters.length) {
          return false;
      }
      const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
          if (l.includes(word)) return true
      }
      const verticalJoin = transpose(letters).map(ls => ls.join(''));
      for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
      return false;
  }
  
  module.exports = wordSearch;
  