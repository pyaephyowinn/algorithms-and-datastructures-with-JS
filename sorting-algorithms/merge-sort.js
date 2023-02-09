// my way of implementing merge
const mergeArrays = (arr1, arr2) => {
  let newArr = [];
  let i = 0,
    j = 0;
  let count = 0;

  while (true) {
    count++;
    if (newArr.length === arr1.length + arr2.length) break;
    if (i === arr1.length) {
      newArr.push(...arr2.slice([j]));
      break;
    }
    if (j === arr2.length) {
      newArr.push(...arr1.slice([i]));
      break;
    }
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i++]);
    } else {
      newArr.push(arr2[j++]);
    }
  }
  // console.log("count", count);
  return newArr;
};

// const splitArray = (arr) => {
//   if (arr.length === 1) return [arr];
//   const midpoint = Math.floor(arr.length / 2);
//   const left = arr.slice(0, midpoint);
//   const right = arr.slice(midpoint);
//   return [...splitArray(left), ...splitArray(right)];
// };

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // console.log("left", left);
  // console.log("right", right);
  return mergeArrays(left, right);
};

console.log(mergeSort([1, 4, 3, 2, -1 , 100, 23, 12, 11, 9, 10]));
// console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(mergeArrays([1, 3, 5, 6, 8, 10, 88, 100, 234], [2, 4, 7]));
