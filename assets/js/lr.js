const user_obj = {
    email: null,
    username: null,
    password: null,
    creationDate: null,
    setEmail: function(email) {
        this.email = email;
    },
    setUsername: function(name) {
        this.username = name;
    },
    setPassword: function(password) {
        this.password = password;
    },
    setCreationDate: function() {
        this.creationDate = new Date().getTime();
    },
    getEmail: function() {
        return this.email;
    },
    getUsername: function() {
        return this.username;
    },
    getPassword: function() {
        return this.password;
    },
    getCreationDate: function() {
        return this.creationDate;
    }
}

const user1 = Object.assign({}, user_obj);
const user2 = Object.assign({}, user_obj);
user1.setEmail("admin@mypopcornlist.com");
user1.setUsername("Admin");
user1.setPassword("admin");
user1.setCreationDate;
user2.setEmail("normal_user@hotmail.com");
user2.setUsername("Normal_User");
user2.setPassword("normal");
user2.setCreationDate;


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