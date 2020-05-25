const movies = {
    1: {
        name: "Endgame",
        score: 8,
        genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
        premiere: 1556150400,
        directors: ["Anthony Russo", "Joe Russo"],
        age: "12+",
        duration: "3h 1min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    2: {
        name: "Star Wars Episode VIII - The Last Jedi",
        score: 4,
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        premiere: 1513123200,
        directors: ["Rian Johnson"],
        age: "12+",
        duration: "2h 32min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    3: {
        name: "Star Wars Episode IX - The Rise of Skywalker",
        score: 6,
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        premiere: 1576713600,
        directors: ["J.J. Abrams"],
        age: "12+",
        duration: "2h 22min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    4: {
        name: "The Irishman",
        score: 8,
        genres: ["Biography", "Crime", "Drama"],
        premiere: 1574812800,
        directors: ["Martin Scorsese"],
        age: "R (16+)",
        duration: "3h 29min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    5: {
        name: "Interstellar",
        score: 9,
        genres: ["Adventure", "Drama", "Sci-Fi", "Thriller"],
        premiere: 1415232000,
        directors: ["Christopher Nolan"],
        age: "12+",
        duration: "2h 49min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    }
}

const shows = {
    1: {
        name: "Game of Thrones",
        score: 7,
        genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance"],
        premiere: 1318809600,
        directors: ["David Nutter", "Alan Taylor"],
        age: "16+",
        lang: "English",
        seasons: 8,
        episodes: [10, 10, 10, 10, 10, 10, 7, 6],
        trailer: "qLFBcdd6Qw0"
    }
}

function getMovieById(id) {
    return movies[id];
}

function getShowById(id) {
    return shows[id];
}

function getPremiereDate(unixtimestamp) {
    return new Date(unixtimestamp * 1000).toLocaleDateString();
}