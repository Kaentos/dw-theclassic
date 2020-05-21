function login() {
    let email_input = document.getElementById("l_email");
    let password_input = document.getElementById("l_password");
    let keepLogin_input = document.getElementById("l_keepLogin");

    let user = getUserByEmail(email_input.value);
    if (user && user.getPassword() === password_input.value) {
        document.getElementById("login-info").classList.add("display-none");
        set_login(user_idx, keepLogin_input.checked);
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
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex.test(email)) {
        for (let obj of users){
            if (email === obj.getEmail()) {
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