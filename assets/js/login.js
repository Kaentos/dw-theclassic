function login() {
    let email_input = document.getElementById("l_email");
    let password_input = document.getElementById("l_password");
    let keepLogin_input = document.getElementById("l_keepLogin");

    let user = getUserByEmail(email_input.value);
    if (user && getPassword(user) === password_input.value) {
        set_login(user, keepLogin_input.checked);
        return;
    }
    borderRed(email_input);
    borderRed(password_input);
    document.getElementById("login-info").classList.remove("display-none");
}

function set_login(user_obj, keepLogin) {
    if (keepLogin) {
        localStorage.setItem("login_info", JSON.stringify(user_obj));
    } else {
        sessionStorage.setItem("login_info", JSON.stringify(user_obj));
    }
    location.reload()
}

function getUserByEmail(email) {
    for (let obj of users_info){
        if (email === getEmail(obj)) {
            return obj;
        }
    }
    return false;
}

window.onload = function() {
    ifLoggedGoIndex();
    basicSetup();
    document.getElementById("login_ref").classList.add("active");
    document.getElementById("login_btn").addEventListener("click", login);
}