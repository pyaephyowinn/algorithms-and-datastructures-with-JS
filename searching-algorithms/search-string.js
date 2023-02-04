//  my naive way !
const searchString = (string, targetStr) => {
  if (targetStr.length > string.length) return -1;
  let count = 0;
  for (
    let i = 0, targetLen = targetStr.length;
    i < string.length - (targetLen - 1);
    i++
  ) {
    if (string.slice(i, i + targetLen) === targetStr) {
      count++;
    }
  }
  return count > 0 ? count : -1;
};

console.log(searchString("zomomgomg", "omge"));
