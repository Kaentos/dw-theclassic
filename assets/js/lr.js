const user_obj = {
    id: null,
    email: null,
    username: null,
    password: null,
    creationDate: null,
    fav_movies: [],
    toWatch_movies: [],
    watched_movies: [],
    fav_shows: [],
    watching_shows: [],
    toWatch_shows: [],
    watched_shows: []
}
function setUserID(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.id = id;
    } else {
        console.log("More than 2 argument or arguments non object or non string");
    }
}
function setEmail(obj, email) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(email) === "string") {
        obj.email = email;
    } else {
        console.log("More than 2 argument or arguments non object or non string");
    }
}
function setUsername(obj, username) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(username) === "string") {
        obj.username = username;
    } else {
        console.log("More than 2 argument or arguments non object or non string");
    }
}
function setPassword(obj, password) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(password) === "string") {
        obj.password = password;
        return;
    } else {
        console.log("More than 2 argument or arguments non object or non string");
    }
    
}
function setCreationDate(obj) {
    if(arguments.length === 1 && typeof(obj) === "object") {
        obj.creationDate = new Date().getTime();
    } else {
        console.log("More than 1 argument or argument non object");
    }
}
function addFavMovie(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.fav_movies.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function addToWatchMovie(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.toWatch_movies.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function addWatchedMovie(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.watched_movies.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function addFavShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.fav_shows.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function addWatchingShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.watching_shows.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function addToWatchShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.toWatch_shows.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function addWatchedShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.watched_shows.push(id);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}

function getID(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.id;
    }
    console.log("More than 1 argument or argument non object");
}
function getEmail(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.email;
    }
    console.log("More than 1 argument or argument non object");
}
function getUsername(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.username;
    }
    console.log("More than 1 argument or argument non object");
}
function getPassword(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.password;
    }
    console.log("More than 1 argument or argument non object");
}
function getCreationDate(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.creationDate;
    }
    console.log("More than 1 argument or argument non object");
}
function getFavMovies(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.fav_movies;
    }
    console.log("More than 1 argument or argument non object");
}
function getFavShows(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.fav_shows;
    }
    console.log("More than 1 argument or argument non object");
}
function getWatchingShows(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.watching_shows;
    }
    console.log("More than 1 argument or argument non object");
}
function getToWatchMovies(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.toWatch_movies;
    }
    console.log("More than 1 argument or argument non object");
}
function getToWatchShows(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.toWatch_shows;
    }
    console.log("More than 1 argument or argument non object");
}
function getWatchedMovies(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.watched_movies;
    }
    console.log("More than 1 argument or argument non object");
}
function getWatchedShows(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.watched_shows;
    }
    console.log("More than 1 argument or argument non object");
}

function getUserObjWithID(id) {
    for (let i = 0; i < users_info.length; i++) {
        if (getID(users_info[i]) === id)
            return users_info[i];
    }
}
function removeFavMovie(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.fav_movies.splice(obj.fav_movies.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function removeToWatchMovie(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.toWatch_movies.splice(obj.toWatch_movies.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function removeWatchedMovie(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.watched_movies.splice(obj.watched_movies.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function removeFavShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.fav_shows.splice(obj.fav_shows.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function removeToWatchShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.toWatch_shows.splice(obj.toWatch_shows.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function removeWatchingShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.watching_shows.splice(obj.watching_shows.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}
function removeWatchedShow(obj, id) {
    if(arguments.length === 2 && typeof(obj) === "object" && typeof(id) === "number") {
        obj.watched_shows.splice(obj.watched_shows.indexOf(id), 1);
    } else {
        console.log("More than 2 argument or argument non object or number");
    }
}

function getUserObj() {
    if (localStorage.getItem("login_info") !== null) {
        return JSON.parse(localStorage.getItem("login_info"));
    } else if(sessionStorage.getItem("login_info") !== null) {
        return JSON.parse(sessionStorage.getItem("login_info"));
    } else {
        return false;
    }
}

function updateUserObj(new_user_info) {
    if (localStorage.getItem("login_info") !== null) {
        localStorage.setItem("login_info", JSON.stringify(new_user_info));
    } else if(sessionStorage.getItem("login_info") !== null) {
        sessionStorage.setItem("login_info", JSON.stringify(new_user_info));
    }
    for (let i in users_info) {
        if (getID(users_info[i]) === getID(new_user_info)) {
            users_info[i] = new_user_info;
            break;
        }
    }
    localStorage.setItem("users_info", JSON.stringify(users_info));
    location.reload();
}

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (localStorage.getItem("users_info") === null) {
    const user1 = Object.assign({}, user_obj);
    setUserID(user1, 0);
    setEmail(user1, "admin@mypopcornlist.com");
    setUsername(user1, "Admin");
    setPassword(user1, "admin");
    setCreationDate(user1);
    user1.fav_movies = [1, 2];
    user1.watched_movies = [4, 5];
    user1.toWatch_movies = [3, 9];
    user1.toWatch_shows = [6, 7];
    const user2 = Object.assign({}, user_obj);
    setUserID(user2 , 1);
    setEmail(user2, "normal_user@hotmail.com");
    setUsername(user2, "Normal_User");
    setPassword(user2, "normal");
    setCreationDate(user2);
    user2.fav_movies = [3, 2, 10];
    user2.watching_shows = [7, 8];
    user2.watched_movies = [4, 5];
    user2.toWatch_movies = [3, 9];
    user2.toWatch_shows = [10, 9];
    var users_info = [user1, user2];
    localStorage.setItem("users_info", JSON.stringify(users_info));
} else {
    var users_info = JSON.parse(localStorage.getItem("users_info"));
}

console.log("Current users: ");
console.log(users_info);

console.log(JSON.parse(localStorage.getItem("login_info")));
console.log(JSON.parse(sessionStorage.getItem("login_info")));
//localStorage.removeItem("login_info");
//sessionStorage.removeItem("login_info");

// Functions
function borderRed(input) {
    input.style.borderColor = "red";
}