function login() {
    let email_input = document.getElementById("l_email");
    let password_input = document.getElementById("l_password");
    let keepLogin_input = document.getElementById("l_keepLogin");

    let user = getUserByEmail(email_input.value);
    if (user && getPassword(user) === password_input.value) {
        document.getElementById("login-info").classList.add("display-none");
        console.log("Can login");
        //set_login(user_idx, keepLogin_input.checked);
        return;
    }
    borderRed(email_input);
    borderRed(password_input);
    document.getElementById("login-info").classList.remove("display-none");
}

function set_login(id, keepLogin) {
    let login_info = [id, users_info["username"][id], users_info["email"][id], new Date().getTime()];
    if (keepLogin) {
        localStorage.setItem("login_info", login_info);
    } else {
        sessionStorage.setItem("login_info", login_info);
    }
    location.reload()
}

function getUserByEmail(email) {
    if (email_regex.test(email)) {
        for (let obj of users){
            if (email === getEmail(obj)) {
                return obj;
            }
        }
    }

    return false;
}

window.onload = function() {
    setBackBtn();
    document.getElementById("login_btn").addEventListener("click", login);
}