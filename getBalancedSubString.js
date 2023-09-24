const prompt = require("prompt-sync")({ sigint: true });

function getBalancedSubstrings() {
    let getStringInput = prompt("Enter string  to get substring Array= ");
    let result = [];
    let maxLen = 0;
    let initialValue = 0;
    //map data type is used to store the key value in order
    let mapStore = new Map();
    mapStore.set(0, -1);
    for (let iteratorValue = 0; iteratorValue < getStringInput.length; iteratorValue++) {
        initialValue += getStringInput[iteratorValue] === 'a' ? 1 : -1;
        if (mapStore.has(initialValue)) {
            if (iteratorValue - mapStore.get(initialValue) > maxLen) {
                maxLen = iteratorValue - mapStore.get(initialValue);
                result = [getStringInput.substring(mapStore.get(initialValue) + 1, iteratorValue + 1)];
            } else if (iteratorValue - mapStore.get(initialValue) === maxLen) {
                result.push(getStringInput.substring(mapStore.get(initialValue) + 1, iteratorValue + 1));
            }
        } else {
            mapStore.set(initialValue, iteratorValue);
        }
    }
    return result;
}

console.log(getBalancedSubstrings()); 

