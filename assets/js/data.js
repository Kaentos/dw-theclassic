const movies = {
    1: {
        name: "Avengers 4: Endgame",
        score: 8,
        genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
        premiere: 1556150400,
        directors: ["Anthony Russo", "Joe Russo"],
        age: "12+",
        duration: "3h 1min",
        lang: "English",
        trailer: "TcMBFSGVi1c"
    },
    2: {
        name: "Star Wars Episode VIII - The Last Jedi",
        score: 7,
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        premiere: 1513123200,
        directors: ["Rian Johnson"],
        age: "12+",
        duration: "2h 32min",
        lang: "English",
        trailer: "Q0CbN8sfihY"
    },
    3: {
        name: "Star Wars Episode IX - The Rise of Skywalker",
        score: 7,
        genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        premiere: 1576713600,
        directors: ["J.J. Abrams"],
        age: "12+",
        duration: "2h 22min",
        lang: "English",
        trailer: "8Qn_spdM5Zg"
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
        trailer: "WHXxVmeGQUc"
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
        trailer: "zSWdZVtXT7E"
    },
    6: {
        name: "1917",
        score: 8,
        genres: ["Drama", "War"],
        premiere: 1579737600,
        directors: ["Sam Mendes"],
        age: "14+",
        duration: "1h 59min",
        lang: "English",
        trailer: "gZjQROMAh_s"
    },
    7: {
        name: "Knives Out",
        score: 8,
        genres: ["Comedy", "Crime", "Drama"],
        premiere: 1574899200,
        directors: ["Rian Johnson"],
        age: "12+",
        duration: "2h 11min",
        lang: "English",
        trailer: "1NchUqMA"
    },
    8: {
        name: "Joker",
        score: 9,
        genres: ["Thriller", "Crime", "Drama"],
        premiere: 1570060800,
        directors: ["Todd Phillips"],
        age: "14+",
        duration: "2h 2min",
        lang: "English",
        trailer: "zAGVQLHvwOY"
    },
    9: {
        name: "John Wick 3 - Parabellum",
        score: 8,
        genres: ["Action", "Crime", "Thriller"],
        premiere: 1557964800,
        directors: ["Chad Stahelski"],
        age: "16+",
        duration: "2h 11min",
        lang: "English",
        trailer: "pU8-7BX9uxs"
    },
    10: {
        name: "I Am Mother",
        score: 7,
        genres: ["Drama", "Mystery", "Sci-Fi"],
        premiere: 1563408000,
        directors: ["Grant Sputore"],
        age: "None",
        duration: "1h 53min",
        lang: "English",
        trailer: "N5BKctcZxrM"
    }
}

const shows = {
    1: {
        name: "Game of Thrones",
        score: 9,
        genres: ["Action", "Adventure", "Drama", "Fantasy", "Romance"],
        premiere: 1555286400,
        directors: ["David Nutter", "Alan Taylor"],
        age: "16+",
        lang: "English",
        seasons: 8,
        episodes: [10, 10, 10, 10, 10, 10, 7, 6],
        trailer: "rlR4PJn8b8I"
    },
    2: {
        name: "Rick and Morty",
        score: 9,
        genres: ["Animation", "Adventure", "Comedy"],
        premiere: 1573344000,
        directors: ["Dan Harmon", "Justin Roiland"],
        age: "None",
        lang: "English",
        seasons: 4,
        episodes: [11, 10, 10, 10],
        trailer: "qPDqQDTnJKE"
    },
    3: {
        name: "Westworld",
        score: 9,
        genres: ["Drama", "Mystery", "Sci-Fi"],
        premiere: 1584230400,
        directors: ["Lisa Joy", "Jonathan Nolan"],
        age: "None",
        lang: "English",
        seasons: 3,
        episodes: [10, 10, 8],
        trailer: "9BqKiZhEFFw"
    },
    4: {
        name: "The Walking Dead",
        score: 8,
        genres: ["Drama", "Horror", "Thriller"],
        premiere: 1582416000,
        directors: ["Frank Darabont", "Angela Kang"],
        age: "16+",
        lang: "English",
        seasons: 10,
        episodes: [6, 13, 16, 16, 16, 16, 16, 16, 16, 16],
        trailer: "R1v0uFms68U"
    },
    5: {
        name: "Vikings",
        score: 9,
        genres: ["Drama", "Action", "Adventure"],
        premiere: 1575417600,
        directors: ["Michael Hirst"],
        age: "None",
        lang: "English",
        seasons: 6,
        episodes: [9, 10, 10, 20, 20, 20],
        trailer: "1j2sXLbzm9U"
    },
    6: {
        name: "The Mandalorian",
        score: 9,
        genres: ["Adventure", "Action", "Sci-Fi"],
        premiere: 1573516800,
        directors: ["Jon Favreau"],
        age: "None",
        lang: "English",
        seasons: 1,
        episodes: [8],
        trailer: "XmI7WKrAtqs"
    },
    7: {
        name: "Breaking Bad",
        score: 10,
        genres: ["Crime", "Drama", "Thriller"],
        premiere: 1342310400,
        directors: ["Vince Gilligan"],
        age: "16+",
        lang: "English",
        seasons: 5,
        episodes: [7, 13, 13, 13, 16],
        trailer: "HhesaQXLuRY"
    },
    8: {
        name: "Chernobyl",
        score: 9,
        genres: ["Drama", "History", "Thriller"],
        premiere: 1557100800,
        directors: ["Craig Mazin"],
        age: "None",
        lang: "English",
        seasons: 1,
        episodes: [5],
        trailer: "s9APLXM9Ei8"
    },
    9: {
        name: "Dark",
        score: 9,
        genres: ["Crime", "Drama", "Mystery"],
        premiere: 1561075200,
        directors: ["Baran bo Odar", "Jantje Friese"],
        age: "None",
        lang: "English",
        seasons: 2,
        episodes: [10, 8],
        trailer: "rrwycJ08PSA"
    },
    10: {
        name: "Mr. Robot",
        score: 9,
        genres: ["Crime", "Drama", "Triller"],
        premiere: 1570320000,
        directors: ["Sam Esmail"],
        age: "None",
        lang: "English",
        seasons: 4,
        episodes: [10, 12, 10, 13],
        trailer: "xIBiJ_SzJTA"
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

function getYear(unixtimestamp) {
    return new Date(unixtimestamp * 1000).getFullYear()
}

function getIDMostRecentDateObj(obj) {
    let max = 0;
    for (let i in obj) {
        if (obj[i].premiere > max) {
            max = obj[i].premiere;
        }
    }
    return max;
}

function getIDsByRecentDateOf(obj) {
    let id_dateArray = [];
    for (let i in obj) {
        id_dateArray.push({id: i, date: obj[i].premiere});
    }
    id_dateArray.sort((a,b) => b.date - a.date);
    let idArray = [];
    for (i of id_dateArray) {
        idArray.push(Number(i.id))
    }
    return idArray;
}

function getIDsByRateOf(obj) {
    let id_rateArray = [];
    for (let i in obj) {
        id_rateArray.push({id: i, rate: obj[i].score});
    }
    id_rateArray.sort((a,b) => b.rate - a.rate);
    let idArray = [];
    for (i of id_rateArray) {
        idArray.push(Number(i.id))
    }
    return idArray;
}
