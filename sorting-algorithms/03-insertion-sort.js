const insertionSort = (arr) => {
  for (let i = 1, len = arr.length; i < len; i++) {
    let selectedVal = arr[i];
    for (j = i - 1; j >= 0 && selectedVal < arr[j]; j--) {
      console.log(selectedVal, arr[j], selectedVal < arr[j]);
      arr[i] = arr[j];
      arr[j] = selectedVal;
    }
  }
  return arr;
};

console.log(insertionSort([5, 1, 4, 2, 1, 11, 66, 3, 2, 19, 63, 52]));

// 3, _, 2, 4 ;  1
// 1, 3, _, 4 ;  2
// 1, 2, 3, 4 ;  4
// 1, 2, 3, 4 ;  4
