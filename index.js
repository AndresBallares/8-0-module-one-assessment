/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
const movies = require("./__tests__/fixtures/alternative-movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
    if (movies.length === 0){
    return [];
}
let moviesArr = [];
  for (let i = 0; i < movies.length; i++){
    if (movies[i].title){
      moviesArr.push(movies[i].title);
    }
    
  }

  return moviesArr;

}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if (movies.length === 0){
    return 0;
  }
  let highestMet = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].metascore > highestMet){
      highestMet = movies[i].metascore;
    }

  }
  return Number(highestMet);

}

// let highest = Number(movies[0].metascore);
//for (const movie of movies) {
// const metascore = Number(movie.metascore)
// if (movie.metascore > highest){
//  highest = movie.metascore
//}  
//}
//return Number(highest)






/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

function getAverageIMDBRating(movies) {
  if (movies.length === 0){
    return 0;
  }
   // let newArr = [];
    let ave = 0;
    
    for (let i = 0; i < movies.length; i++){
      let rating = Number(movies[i].imdbRating);
      if (rating){
        ave += rating;
      }
      
    }
    return ave / movies.length;

  // for (let i = 0; i < movies.length; i++) {
  //     let vam = movies[i].imdbRating
  //     if (vam.length > 0)
  //     newArr.push(vam);
  //   }    
  // }
  //   let intArr = [];
  // for (let i = 0; i < newArr.length; i++){
  //   if (newArr[i].length > 0){
  //     intArr.push(parseFloat(newArr[i]));
  //   }
  //  }
  //  let i = 0;
  //  while (intArr[i] <= intArr.length){
  //    ave += intArr[i];
  //    i++;
  //  }

  // return ave / intArr.length;
}
getAverageIMDBRating(exampleMovies);

// let sum = 0;
// for (const movie of movies){
//   sum = sum + Number(movie.imdbRating);
// }
// return sum / movies.length;


/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  if (movies === 0){
    return {}; 
  }

  let counts = {};


for (const movie of movies){
  if (counts[movie.rated] !== undefined){
    counts[movie.rated] = counts[movie.rated] + 1;
  } else {
    counts [movie.rated] = 1;
  }
}
return counts;
 
}
//countByRating(exampleMovies);

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (movies.length === 0) {
    return null;
  }
  for (let i = 0; i < movies.length; i++){
    if (movies[i].imdbID === id){ 
     return movies[i];
    }
  }
  return null;
}
//findById(exampleMovies, "tt3606756");
// for (const movie of movies){
//   if (movie.imdbID === id){
//     return movie;
//   }
// }
// return null;


//or


// let found = null
// for (const movie of movies){
//   if (movie.imdbI/d === id){
//     found = movie;
//   }
// }
// return found;


/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
let newArr = [];

  if (movies.length === 0) {
    return [];
  }
 genre = genre.toLowerCase();
  
  for (const movie of movies){
    let genText = movie.genre.toLowerCase();
 
    if (genText.includes(genre)){
     newArr.push(movie);
    }
  }
  return newArr;    
}
//console.log(filterByGenre(exampleMovies, "Mystery"));
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */

  function getYear (movie){
  const movieReleasedWords = movie.released.split(" ") //gives us an array ['August', '16', '2021']
  const year = movieReleasedWords[2]; //year
  return year;

}




function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let newArr = [];

  for (const movie of movies) {
  const currentYear = getYear(movie);
  if (currentYear <= year) {
    newArr.push(movie);
  }
}
  return newArr;

}


/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */

function getBoxOffice (movie){
  let result = '';
  for (const char of movie.boxOffice){
    if (char !== '$' && char !== ','){
      result = result + char;
    }
  }
  return Number(result);
}
console.log(getBoxOffice({boxOffice: '$5000,000'}));

function getBiggestBoxOfficeMovie(movies) {
  if (movies.length === 0){ // also reads the same (!movies.length)
    return null;
  }

  let highest = movies[0];
  for (const movie of movies){
     if (getBoxOffice(movie) > getBoxOffice(highest)){
        highest = movie;
    }
  }
  return highest.title;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
