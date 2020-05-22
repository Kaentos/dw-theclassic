function register () {
    if (!checkUsername() || !checkEmail() || !checkPasswords())
        return;

    let email = document.getElementById("nu_email").value.toLowerCase();
    let username = document.getElementById("nu_username").value;
    let password = document.getElementById("nu_password").value;
    
    const new_user = Object.assign({}, user_obj);
    setEmail(new_user, email);
    setUsername(new_user, username);
    setPassword(new_user, password);
    setCreationDate(new_user);
    users_info.push(new_user);
    localStorage.setItem("users_info", JSON.stringify(users_info));
    let login_info = {
        user: new_user,
        loginDate: new Date().getTime()
    };
    sessionStorage.setItem("login_info", JSON.stringify(login_info));
    location.reload();
}

function checkPasswords(){
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,16})$/;
    let pw1 = document.getElementById("nu_password");
    let pw2 = document.getElementById("nu_cpassword");
    let pw_error = document.getElementById("pw-info");
    
    if (!regex.test(pw1.value) || pw1.value.length === 0){
        pw1.style.borderColor = "red";
    } else if (pw1.value !== pw2.value) {
        pw1.style.borderColor = "green";
        pw2.style.borderColor = "red";
    } else {
        pw1.style.borderColor = "green";
        pw2.style.borderColor = "green";
        pw_error.classList.remove("invalid");
        pw_error.classList.add("valid");
        return true;
    }
    pw_error.classList.remove("valid");
    pw_error.classList.add("invalid");
    return false;
}

function checkUsername() {
    let regex = /^[a-z0-9_]{6,16}$/;
    let username_input = document.getElementById("nu_username");
    let username = username_input.value.toLowerCase();
    let username_info = document.getElementById("username-info");
    if (regex.test(username)) {
        for (let obj of users_info){
            if (username === getUsername(obj).toLowerCase()) {
                borderRed(username_input);
                username_info.classList.remove("valid");
                username_info.classList.add("invalid");
                return false;
            }
        }
        username_info.classList.remove("invalid");
        username_info.classList.add("valid");
        username_input.style.borderColor = "green";
        return true;
    }
    borderRed(username_input);
    username_info.classList.remove("valid");
    username_info.classList.add("invalid");
    return false;
}

function checkEmail() {
    let email_input = document.getElementById("nu_email");
    let email = email_input.value.toLowerCase();
    if (email_regex.test(email)) {
        for (let obj of users_info){
            if (email === getEmail(obj)) {
                borderRed(email_input);
                return false;
            }
        }
        email_input.style.borderColor = "green";
        return true;
    }
    borderRed(email_input);
    return false;
}

window.onload = function() {
    setNavbar();
    document.getElementById("register_ref").classList.add("active");
    setFooter();

    setBackBtn();
    document.getElementById("register_btn").addEventListener("click", register);
    document.getElementById("nu_username").addEventListener("keyup", this.checkUsername);
    document.getElementById("nu_email").addEventListener("keyup", this.checkEmail);
    document.getElementById("nu_password").addEventListener("keyup", this.checkPasswords);
    document.getElementById("nu_cpassword").addEventListener("keyup", this.checkPasswords);
}