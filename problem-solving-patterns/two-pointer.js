/**
 * Two Pointer Patterns use sorted array
 */

const countUniqueValues = (arr) => {
  let left = 0;
  let right = arr.length;
  let count = 0;
  const lookup = {};

  while (left++ <= right--) {
    lookup[arr[left]] = "";
    lookup[arr[right]] = "";
    count++;
  }

  console.log(lookup);
  console.log("count", count);
};

countUniqueValues([1, 1, 2, 4, 5, 6, 6, 8, 7, 8]);
