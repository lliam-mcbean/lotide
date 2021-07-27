const takeUntil = (filter, callback) => {
    let arr = []
    for(let i = 0; i < filter.length; i++) {
        if(!callback(filter[i])) {
            arr.push(filter[i])
        } else {
            break
        }
    }
    return arr
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);