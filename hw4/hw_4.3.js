connst = [
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    
    {title: 'f', year: 2019, rating: 3.9},
] 

//function sortFilm (connst) {
    let sortedYear = [];
    sortedYear = connst.filter(function(item) {
        return item.year == 2019 && item.rating > 4 }  ) ;
    let newSort = sortedYear.sort((a, b) => a.title.localeCompare(b.title));
     console.log(newSort);
         
    


// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 