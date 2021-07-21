const assertArraysEqual = (arr1, arr2) => {
    if(arr1.length != arr2.length) {
        return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        }
        return `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
}