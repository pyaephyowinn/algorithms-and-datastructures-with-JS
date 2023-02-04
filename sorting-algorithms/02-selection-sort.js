// My way of implenting selection sort
const selectionSort = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([2, 23, 12, 3, 1, 4, 99, 1, 18, 5]));
