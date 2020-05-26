const user_obj = {
    id: null,
    email: null,
    username: null,
    password: null,
    creationDate: null,
    fav_movies: [],
    toWatch_movies: [],
    seen_movies: [],
    fav_series: [],
    watching_series: [],
    toWatch_series: [],
    seen_series: []
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
function getFavSeries(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.fav_series;
    }
    console.log("More than 1 argument or argument non object");
}
function getWatchingSeries(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.watching_series;
    }
    console.log("More than 1 argument or argument non object");
}
function getToWatchMovies(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.toWatch_movies;
    }
    console.log("More than 1 argument or argument non object");
}
function getToWatchSeries(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.toWatch_series;
    }
    console.log("More than 1 argument or argument non object");
}
function getSeenMovies(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.seen_movies;
    }
    console.log("More than 1 argument or argument non object");
}
function getSeenSeries(obj) {
    if (arguments.length === 1 && typeof(obj) === "object") {
        return obj.seen_series;
    }
    console.log("More than 1 argument or argument non object");
}

function getUserObjWithID(id) {
    return users_info[id];
}

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (localStorage.getItem("users_info") === null) {
    const user1 = Object.assign({}, user_obj);
    setUserID(user1, 1);
    setEmail(user1, "admin@mypopcornlist.com");
    setUsername(user1, "Admin");
    setPassword(user1, "admin");
    setCreationDate(user1);
    user1.fav_movies = [1, 2, 10];
    user1.seen_movies = [4, 5];
    user1.toWatch_movies = [3, 9];
    const user2 = Object.assign({}, user_obj);
    setUserID(user2 , 2);
    setEmail(user2, "normal_user@hotmail.com");
    setUsername(user2, "Normal_User");
    setPassword(user2, "normal");
    setCreationDate(user2);
    user2.follows = [1];
    user2.fav_movies = [3, 2, 10];
    user2.watching_series = [7, 8];
    user2.seen_movies = [4, 5];
    user2.toWatch_movies = [3, 9];
    var users_info = [user1, user2];
    localStorage.setItem("users_info", JSON.stringify(users_info));
} else {
    var users_info = JSON.parse(localStorage.getItem("users_info"));
}

function ifLoggedGoIndex() {
    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        location.href="/";
    }
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