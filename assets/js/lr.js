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
setCreationDate(user1);
const user2 = Object.assign({}, user_obj);
setEmail(user2, "normal_user@hotmail.com");
setUsername(user2, "Normal_User");
setPassword(user2, "normal");
setCreationDate(user2);

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (localStorage.getItem("users_info") === null) {
    var users_info = [user1, user2];
    localStorage.setItem("users_info", JSON.stringify(users_info));
} else {
    var users_info = JSON.parse(localStorage.getItem("users_info"));
}
console.log("Current users: ");
console.log(users_info);

console.log(JSON.parse(localStorage.getItem("login_info")));
console.log(JSON.parse(sessionStorage.getItem("login_info")));
localStorage.removeItem("login_info");
sessionStorage.removeItem("login_info");

// Functions
function borderRed(input) {
    input.style.borderColor = "red";
}