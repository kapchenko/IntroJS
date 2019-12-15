// Exercise 3

connst = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'f', year: 2019, rating: 3.9},
]

let c  = connst.sort((a, b) => (a.rating > b.rating) ? 1 : -1) ; 
console.log(c);
function SortingByYear () {
    if (connst.year == 2019 ){
        console.log("test");
    }
    
}
console.log(SortingByYear());



// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] */