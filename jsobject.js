var movie = [{
        title: "\"One punch man\"",
        rating: "5 stars",
        hasWatched: "seen"
    },
    {
        title: "\"Naruto\"",
        rating: "4.5 stars",
        hasWatched: "not seen"
    },
    {
        title: "\"Mob phyco 100\"",
        rating: "5 stars",
        hasWatched: "seen"
    },
    {
        title: "\"Tokyo ghoul\"",
        rating: "3.5 stars",
        hasWatched: "not seen",

    }
];


for (var i = 0; i < movie.length; i++) {

    console.log("you have" + " " + movie[i].hasWatched + " " + movie[i].title + " - " + movie[i].rating);


}