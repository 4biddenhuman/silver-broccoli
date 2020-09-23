
const pmDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,

    start: function() { pmDB.count = +prompt("How much films did you watch?")
    while ( pmDB.count === '' ||  pmDB.count == null || isNaN(pmDB.count) )
    numberOfFilms = +prompt("How much films did you watch?")},
     
    SavePersonalFilms: function (){
      for (let i = 0; i < 2; i++) {
        const a = prompt("One of the latest films?"),
        b = prompt("How would you rate it?");
      }
        if(a != null && b != null && a !== '' && a.length < 50){
        pmDB.movies[a] = b;
        console.log('Done');
        } else {
          console.log('Erroe');
        i--
        }
    },

    ShowMyDb: function(hidden) {
      if(!hidden){
        console.log(pmDB);
      }
      ShowMyDb (pmDB.privat);
      },

    DetectPersonalLevel: function () {
      if(pmDB < 10) {
        console.log("Not so impressive!")}
       else if (30 >= pmDB && pmDB > 10)
  {console.log("Well, that's something...")}
  else
  {console.log("Error!")}
  
  }
}


    


















