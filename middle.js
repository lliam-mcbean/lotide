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

module.exports = middle

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));