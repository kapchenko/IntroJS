// Exercise 1
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    const output = [];
    do {
    output.push(min);
    min++;
 }
    while (min <= max)
    return output;
    // your code
}


const numbers = arrayFromRange(1, 4);


console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]


