const getDigit = (num, index) => {
  return Number(num.toString().charAt(num.toString().length - (index + 1)));
};

const digitCount = (num) => {
  let count = 0;
  for (let i = 1; i < Math.abs(num); ) {
    i *= 10;
    count++;
  }
  return count;
};

const mostDigit = (arr) => {
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let curCount = digitCount(arr[i]);
    if (curCount > maxCount) {
      maxCount = curCount;
    }
  }
  return maxCount;
};

const radixSort = (arr) => {
  const biggest = mostDigit(arr);

  for (let i = 0; i < biggest; i++) {
    let buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      let index = getDigit(arr[j], i);
      buckets[index].push(arr[j]);
    }

    let tempArr = [];
    for (let j = 0; j < buckets.length; j++) {
      tempArr.push(...buckets[j]);
    }
    console.log(tempArr);
    arr = tempArr;
  }
};

radixSort([12, 34, 222, 56, 74, 23, 122]);
