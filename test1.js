

let numberOfFilms;

function start 
start ();


const pmDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
    start() => {numberOfFilms = +prompt("How much films did you watch?")
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) )
    numberOfFilms = +prompt("How much films did you watch?");
    }
    
}

function SavePersonalFilms (){
  for (let i = 0; i < 2; i++) {
    const a = prompt("One of the latest films?"),
    b = prompt("How would you rate it?");

    if(a != null && b != null && a !== '' && a.length < 50){
    pmDB.movies[a] = b;
    console.log('Done');
    } else {
      console.log('Erroe');
    i--
    }
}

SavePersonalFilms();

function DetectPersonalLevel() {

    if(pmDB < 10)
{console.log("Not so impressive!")}
else if (30 >= pmDB && pmDB > 10)
{console.log("Well, that's something...")}
else
{console.log("Error!")}

}

DetectPersonalLevel();

function ShowMyDb (hidden) {
if(!hidden){
  console.log(pmDB);
}
ShowMyDb (pmDB.privat);
}

ShowMyDb ();

function WriteYourGenres (){
  for (let i = 1; i => 3; i++){
    pmDB.genres[i-1] = prompt(`Your fav genre ${i}`);
  }
}

WriteYourGenres ();

}






