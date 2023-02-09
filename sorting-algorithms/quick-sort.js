const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swpIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swpIdx++;
      swap(arr, swpIdx, i);
    }
  }
  swap(arr, swpIdx, start);
  return swpIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([52, 12, 32, 1, 23, 1113, 12, 123, -100, 84, 521, 83]));
