const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    }
    return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
};

const middle = function(arr) {
  let middleNumber = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return middleNumber;
  }
  if (arr.length % 2 === 0) {
    middleNumber.push(arr[(arr.length / 2) - 1]);
    middleNumber.push(arr[arr.length / 2]);
  } else {
    middleNumber.push(arr[Math.floor(arr.length / 2)]);
  }
  return middleNumber;
};

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));