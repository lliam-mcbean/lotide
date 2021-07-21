const without = (arr1, arr2) => {
    let filtered = arr1.slice(0)

    for(let i = 0; i < arr2.length; i++) {
        for(let j = 0; j < filtered.length; j++) {
            if(arr2[i] === filtered[j]) {
                filtered.splice(j, 1)
                j -= 1
            }
        }
    }
    console.log(arr1)
    return filtered
}

const assertArraysEqual = (arr1, arr2) => {
    if(arr1.length != arr2.length) {
        return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
        }
        return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
    }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));