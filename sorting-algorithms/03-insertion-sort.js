const insertionSort = (arr) => {
  for (let i = 1, len = arr.length; i < len; i++) {
    let selectedVal = arr[i];
    for (var j = i - 1; j >= 0 && selectedVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
      // arr[j] = selectedVal;
    }
    arr[j + 1] = selectedVal;
  }
  return arr;
};

console.log(insertionSort([4, 1, 3, 2, 5, 44, -1]));
