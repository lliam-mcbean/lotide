const tail = (arr) => {
  let bar = [];
  for (let i = 1; i < arr.length; i++) {
    bar.push(arr[i]);
  }
  return bar;
};

module.exports = tail