let numberOfFilms = +prompt("How much films did you watch?")

const pmDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [], privat: false
}


if (pmDB<10){console.log("Not so impressive!")}
else if ((30>=pmDB>10)){console.log("Well, that's something...")}
else{console.log("Error!")}

for (let i = 0, i <2, i++){const a = prompt("One of the latest films?")
    b = prompt("How would you rate it?")

        if (a != null && b != null && a != '' && a.length < 50) {
            pmDB.movies[a] = b;
        } else {
            i--;
        }

    }




