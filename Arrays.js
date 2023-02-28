const myarr = ['Avenegers' , 12.324 , Math];

const movies = ['Iron man' , 'Avengers' , 'In-Time' , 'Yoru'];


//indexing
console.log(movies);
console.log(movies[2]);
console.log(movies.length);
console.log(movies.at(-1));

//slicing
console.log(movies.slice(0,4));
console.log(movies.slice(2,-1));
console.log(movies.slice(1));


//adding elements
movies.push('Captain America'); //adds element end of an array.
console.log(movies);
movies.unshift('Dhol'); //adds array start of an array
console.log(movies);

console.log([...movies.slice(0,2) ,  'KGF' ,movies.slice(3)] );

movies.pop(); //removes last element from the array.
movies.shift(); //removes element from the start.

movies.splice(2,2) //remove specific elements




movies.splice(movies.indexOf('Avengers'), 1)