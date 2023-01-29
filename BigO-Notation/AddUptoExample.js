// Why Big O Notation MATTERS **

// Approach One
const addUptoNum = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

// Approach Two
const addUptoNumV2 = (num) => {
  return (num * (num + 1)) / 2;
};

/**
 * What does better mean?
 * - Faster ( ** measure using timing func like performance.now() is not a good idea. **)
 *
 * - Less memory-intensive
 * - More readable
 */

const TargetNumber = 100_000_000;

const t1 = performance.now();
const total = addUptoNum(TargetNumber);
const t2 = performance.now();

const t3 = performance.now();
const total2 = addUptoNumV2(TargetNumber);
const t4 = performance.now();

console.log("addUptoNum takes", (t2 - t1) / 1000, "second");
console.log("addUptoNumV2 takes", (t4 - t3) / 1000, "second");
