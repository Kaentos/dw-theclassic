function login () {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let email_input = document.getElementById("l_email");
    let email = email_input.value.toLowerCase();
    let pw_input = document.getElementById("l_password");
    let pw = pw_input.value;
    let keepLogin_input = document.getElementById("l_keepLogin");

    let user_idx = users_info["email"].indexOf(email);
    if (regex.test(email) && user_idx !== -1) {
        if (users_info["password"][user_idx] === pw) {
            document.getElementById("login-info").classList.add("display-none");
            email_input.style.borderColor = "green";
            pw_input.style.borderColor = "green";
            
            set_login(user_idx, keepLogin_input.checked);
            return;
        }
    }
    borderRed(email_input);
    borderRed(pw_input);
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