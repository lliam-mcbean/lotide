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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
  //LOOP THROUGH THE OBJECT KEYS
  for (const item of Object.keys(object1)) {
    // CHECK IF ITEM IS ARRAY, IF ARRAY RUN EQARRAYS. HAD TROUBLE WITH RETURN STATEMENT SO USED A VARIABLE AND A CONDITIONAL INSTEAD
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      let truth = eqArrays(object1[item], object2[item]);
      if (!truth) {
        return `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
      } else {
        void(0);
      }
    } else if (object1[item] !== object2[item]) {
      return `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
    }
  }
  return `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2), false);