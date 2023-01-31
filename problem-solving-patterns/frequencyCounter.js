/**
 * Frequency counter pattern uses object or sets to avoid nestes loop or O(N^2) operations
 */

const anagram = (str1, str2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    // check keys
    if (!(key in frequencyCounter2)) {
      return false;
    }

    // check values
    if (!(frequencyCounter1[key] === frequencyCounter2[key])) {
      return false;
    }
  }

  return true;
};

console.log(anagram("aaz", "zza"));
console.log(anagram("anagram", "nagaram"));
console.log(anagram("awesome", "awesom"));
console.log(anagram("qwerty", "qertwy"));
