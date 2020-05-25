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
    },
    6: {
        name: "1917",
        score: 8.3,
        genres: ["Drama", "War"],
        premiere: 1579737600,
        directors: ["Sam Mendes"],
        age: "14+",
        duration: "1h 59min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    7: {
        name: "Knives Out",
        score: 7.9,
        genres: ["Comedy", "Crime", "Drama"],
        premiere: 1574899200,
        directors: ["Rian Johnson"],
        age: "12+",
        duration: "2h 11min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    8: {
        name: "Joker",
        score: 8.5,
        genres: ["Thriller", "Crime", "Drama"],
        premiere: 1570060800,
        directors: ["Todd Phillips"],
        age: "14+",
        duration: "2h 2min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    9: {
        name: "John Wick 3 - Parabellum",
        score: 7.5,
        genres: ["Action", "Crime", "Thriller"],
        premiere: 1557964800,
        directors: ["Chad Stahelski"],
        age: "16+",
        duration: "2h 11min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    },
    10: {
        name: "I Am Mother",
        score: 6.7,
        genres: ["Drama", "Mystery", "Sci-Fi"],
        premiere: 1563408000,
        directors: ["Grant Sputore"],
        age: "None",
        duration: "1h 53min",
        lang: "English",
        trailer: "qLFBcdd6Qw0"
    }
}

const shows = {
    1: {
        name: "Game of Thrones",
        score: 9.3,
        genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance"],
        premiere: 1318809600,
        directors: ["David Nutter", "Alan Taylor"],
        age: "16+",
        lang: "English",
        seasons: 8,
        episodes: [10, 10, 10, 10, 10, 10, 7, 6],
        trailer: "qLFBcdd6Qw0"
    },
    2: {
        name: "Rick and Morty",
        score: 9.2,
        genres: ["Animation", "Adventure", "Comedy"],
        premiere: 1386028800,
        directors: ["Dan Harmon", "Justin Roiland"],
        age: "None",
        lang: "English",
        seasons: 4,
        episodes: [11, 10, 10, 10],
        trailer: "qLFBcdd6Qw0"
    },
    3: {
        name: "Westworld",
        score: 8.7,
        genres: ["Drama", "Mystery", "Sci-Fi"],
        premiere: 1475366400,
        directors: ["Lisa Joy", "Jonathan Nolan"],
        age: "None",
        lang: "English",
        seasons: 3,
        episodes: [10, 10, 8],
        trailer: "qLFBcdd6Qw0"
    },
    4: {
        name: "The Walking Dead",
        score: 8.2,
        genres: ["Drama", "Horror", "Thriller"],
        premiere: 1288656000,
        directors: ["Frank Darabont", "Angela Kang"],
        age: "16+",
        lang: "English",
        seasons: 10,
        episodes: [6, 13, 16, 16, 16, 16, 16, 16, 16, 16],
        trailer: "qLFBcdd6Qw0"
    },
    5: {
        name: "Vikings",
        score: 8.5,
        genres: ["Drama", "Action", "Adventure"],
        premiere: 1362268800,
        directors: ["Michael Hirst"],
        age: "None",
        lang: "English",
        seasons: 6,
        episodes: [9, 10, 10, 20, 20, 20],
        trailer: "qLFBcdd6Qw0"
    },
    6: {
        name: "The Mandalorian",
        score: 8.7,
        genres: ["Adventure", "Action", "Sci-Fi"],
        premiere: 1573516800,
        directors: ["Jon Favreau"],
        age: "None",
        lang: "English",
        seasons: 1,
        episodes: [8],
        trailer: "qLFBcdd6Qw0"
    },
    7: {
        name: "Breaking Bad",
        score: 9.5,
        genres: ["Crime", "Drama", "Thriller"],
        premiere: 1200787200,
        directors: ["Vince Gilligan"],
        age: "16+",
        lang: "English",
        seasons: 5,
        episodes: [7, 13, 13, 13, 16],
        trailer: "qLFBcdd6Qw0"
    },
    8: {
        name: "Chernobyl",
        score: 9.4,
        genres: ["Drama", "History", "Thriller"],
        premiere: 1557100800,
        directors: ["Craig Mazin"],
        age: "None",
        lang: "English",
        seasons: 1,
        episodes: [5],
        trailer: "qLFBcdd6Qw0"
    },
    9: {
        name: "Dark",
        score: 8.7,
        genres: ["Crime", "Drama", "Mystery"],
        premiere: 1512086400,
        directors: ["Baran bo Odar", "Jantje Friese"],
        age: "None",
        lang: "English",
        seasons: 2,
        episodes: [10, 8],
        trailer: "qLFBcdd6Qw0"
    },
    10: {
        name: "Mr. Robot",
        score: 8.5,
        genres: ["Crime", "Drama", "Triller"],
        premiere: 1435104000,
        directors: ["Sam Esmail"],
        age: "None",
        lang: "English",
        seasons: 4,
        episodes: [10, 12, 10, 13],
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