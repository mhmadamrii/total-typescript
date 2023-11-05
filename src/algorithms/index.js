// doubling the values
const dVal = (arr) => {
  const newVal = arr.map((item) => item * 2);
  return newVal;
};

console.log(dVal([1, 2, 3]));

// filtering positive numbers
const pNum = (arr) => {
  const filteredVal = arr.filter((item) => item > 0);
  return filteredVal;
};

console.log("positive numbers" + " " + pNum([-1, 3, 6, -2, 0]));

// sum of array elements
const sumArr = (arr) => {
  const sumWithReduce = arr.reduce((acc, currentVal) => acc + currentVal);
  return sumWithReduce;
};

console.log("sum with reduce", sumArr([1, 2, 3]));

// finding the longest word
const findLongestWord = (arr) => {
  const longest = arr.reduce((a, b) => (a.length < b.length ? b : a));
  return longest;
};

console.log("find longest word", findLongestWord(["word", "arr", "story"]));

// flattening an array
const flatteningArr = (arr) => {
  return null;
};

console.log("flattening", flatteningArr());

// finding unique values
const findUniquesVal = (arr) => {};

// reverse string
const revString = (str) => {
  const v1 = str.split("");
  const rev = v1.reverse();
  const v2 = rev.join("");

  return str + " should be " + v2;
};

console.log(revString("apple"));
console.log(revString("mouse"));

console.log("\n##########################\n");

const isPalindrome = (str) => {
  const splited = str.split("");
  const reversed = splited.reverse();
  const newVal = reversed.join("");

  const finalVal = str === newVal ? "is palindrome" : "isn't palindrome";

  return finalVal;
};

console.log("check is palindrome ", isPalindrome("kasu"));

// palindrome integer

const isPalindromeInt = (x) => {
  const numToStr = x.toString();
  const splited = numToStr.split("");
  const reversed = splited.reverse();
  const j = reversed.join("");
  const isPalindromeX = parseInt(j) === x ? true : false;

  return isPalindromeX;
};

console.log("is palindrome int", isPalindromeInt(144));

// find the longest common prefix string
const findLongestCommonPrefix = (strs) => {
  for (let i = 0; i < strs[0].length; i++) {
    console.log(i);
  }
};

// every method
const agesInt = [12, 22, 33];
console.log(
  "every method",
  agesInt.every((age) => age >= 5)
);

// bubble sort
const bubbleSort = (val) => {
  const n = val.length;
  let swaped;

  do {
    swaped = false;
    for (let i = 0; i < n; i++) {
      if (val[i] > val[i + 1]) {
        const temp = val[i];

        // assignning element with current index to next index (swap)
        val[i] = val[i + 1];

        // place the the smaller value back
        val[i + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped);

  return val;
};

console.log("bubble sort", bubbleSort([3, 2, 1]));
