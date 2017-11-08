// condition method
function evenNumbers(number) {
    return number % 2 === 0;
}

function findNumber(number, findNumber) {
    return number === findNumber;
}

//-------------------------------
var numbers = [1,2,4,5,6,7,8,9,10];
var numberToFind = 10;

// Filtering algorithm
var filtered = [];

for(var i=0;i<numbers.length;i++) {
    if(findNumber(numbers[i], numberToFind)) {
        filtered.push(numbers[i]);
    }
}

console.log(filtered);