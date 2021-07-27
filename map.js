const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {

  console.log('arr');
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
console.log(results1);