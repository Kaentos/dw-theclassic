const user_obj = {
    email: null,
    username: null,
    password: null,
    creationDate: null
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

const user1 = Object.assign({}, user_obj);
setEmail(user1, "admin@mypopcornlist.com");
setUsername(user1, "Admin");
setPassword(user1, "admin");
setCreationDate;
const user2 = Object.assign({}, user_obj);
setEmail(user2, "normal_user@hotmail.com");
setUsername(user2, "Normal_User");
setPassword(user2, "normal");
setCreationDate;

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


var users = [user1, user2];
// If users_info_json already in localStorage gets the item from localStorege if not creates the item in localStorage
if (localStorage.getItem("users_info") === null) {
    localStorage.setItem("users_info", JSON.stringify(users_info_json));
}
users_info = JSON.parse(localStorage.getItem("users_info"));

// Debug functions
function resetUsers() {
    localStorage.removeItem("users_info");
}

if (sessionStorage.getItem("login_info")) {
    console.log("Session, removing");
    sessionStorage.removeItem("login_info");
} else if (localStorage.getItem("login_info")) {
    console.log("Perma, removing");
    localStorage.removeItem("login_info");
}

// Functions
function borderRed(input) {
    input.style.borderColor = "red";
}