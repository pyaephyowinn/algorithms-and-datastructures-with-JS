/**
 * Helper method cursion is used when we need bigger scoped variable
 */

const collectOddValues = (arr) => {
  result = [];
  const helper = (helperInput) => {
    if (helperInput.length === 0) return null;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };
  helper(arr);
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 21, 34, 35, 43]));
