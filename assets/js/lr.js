var users_info_json = {
    "username" : ["admin_admin", "teste_teste", "bomdia"],
    "email": ["admin@mplist.com", "teste@gmail.com", "bomdia@gmail.com"],
    "password": ["admin", "teste", "bomdia"]
}
var users_info = null; // var that stores the local

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