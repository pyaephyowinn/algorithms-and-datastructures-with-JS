// My way of implementing bubble sort
const bubbleSort = (arr) => {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// Colt's way of implementing
const bubbleSort1 = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (j = 0; j < i - 1; j++) {
      console.log("check", arr[j], arr[j + 1], arr[j] > arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

// console.log(bubbleSort([3, 1, 2, 5, 4]));
// console.log(bubbleSort1([2, 12, 8, 1, 3, 5, 3, 9, 11]));
console.log(bubbleSort1([8, 1, 2, 3, 4, 5, 6, 7]));
