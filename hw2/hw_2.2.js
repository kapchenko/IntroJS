let salaries = {  John: 250, 
    Ann: 250, 
    Peter: 500
    };



function sumSal (obj){
    var sum = 0 ; 

    for (let key in obj) {
        sum += obj[key];

      }
      return sum;

      return 0;

    }

    console.log(sumSal(salaries));

// TASK 2.2

  function biggestSal (obj){

    for (let key in obj) {
      const max = Math.max.apply(null, Object.values(obj));
      return console.log(key+ " " + max) ; 
    }     

  }
console.log(biggestSal(salaries));

 