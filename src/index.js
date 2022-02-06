
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || arguments[0] === []) {
    return [];
  }

  let result = [];
  matrix.forEach((row, i) => {
      if (i % 2 === 0) {
          row.forEach(item => result.push(item))
      } else {
          for (let j = row.length -1; j >= 0; j--) {
              result.push(row[j]);
          }
      }
  });
  return result;
}
