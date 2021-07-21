const countLetters = function(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }
  return count;
};

console.log(countLetters('hellobabybird'));