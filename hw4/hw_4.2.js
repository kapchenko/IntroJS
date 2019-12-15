// Exercise 2
// Need to create function which display the max number from the array
const numbers = [52, 2, 7, 4, 5];

const maxNumber = getMax(numbers);

console.log(maxNumber) // should display max number from the array

function getMax(array) {
    let sortedArray = [] ;
     sortedArray = array.sort((a, b) => b - a) ; 
     let maxNum = sortedArray[0];
     return maxNum;
    
}



