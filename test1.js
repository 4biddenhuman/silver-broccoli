let numberOfFilms = +prompt("How much films did you watch?")

const pmDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [], privat: false
}

const a = prompt("One of the latest films?");
const b = prompt("How would you rate it?")

pmDB.movies[a]=b;

