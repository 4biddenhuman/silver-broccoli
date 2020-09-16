

let numberOfFilms;

function start (){numberOfFilms = +prompt("How much films did you watch?")
while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) )
numberOfFilms = +prompt("How much films did you watch?")
}


const pmDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false
}

function DetectPersonalLevel() {

  for(i = 0, i < 2, i++) {
    const a = prompt("One of the latest films?"),
    b = prompt("How would you rate it?");

    if(a != null && b != null && a != '' && a.length < 50){
    pmDB.movies[a] = b;
    console.log('Done');
    else
    {i--};

    if(pmDB < 10)
{console.log("Not so impressive!")}
else
if((30 >= pmDB > 10))
{console.log("Well, that's something...")}
else
{console.log("Error!")}

}


}
}


DetectPersonalLevel()



