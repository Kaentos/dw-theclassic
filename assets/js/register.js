function register () {
    let nu_username = document.getElementById("nu_username");
    let nu_email = document.getElementById("nu_email");
    let nu_password = document.getElementById("nu_password");

    let username = nu_username.value.trim();
    if (!checkUsername()) {
        console.log("Invalid Username: " + username);
        document.getElementById("username-info").classList.remove("valid");
        document.getElementById("username-info").classList.add("invalid");
        showErrorTxt([nu_username]);
        return;
    }
    console.log("Username: " + username);
    if (checkEmail(nu_email.value) && !valid_emails.includes(nu_email.value)) {
        console.log("Email: " + nu_email.value);
        nu_email.style.borderColor = "green";
    } else {
        console.log("Invalid Email: " + nu_email.value);
        showErrorTxt([nu_email]);
        return;
    }
    if (checkPasswords())
        console.log("Password: " + nu_password.value);
    else
        return;

    // efetuar registo (adicionar às vars)
    console.log("Efetuar registo");
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
    let regex = /^[a-zA-Z0-9_]{6,16}$/;
    let username = document.getElementById("nu_username");
    let username_info = document.getElementById("username-info");
    
    if (regex.test(username.value) && !valid_usernames.includes(username.value)) {
        username_info.classList.remove("invalid");
        username_info.classList.add("valid");
        nu_username.style.borderColor = "green";
        return true;
    }
    nu_username.style.borderColor = "red";
    username_info.classList.remove("valid");
    username_info.classList.add("invalid");
    return false;
}

function checkEmail() {
    let email = document.getElementById("nu_email");
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email.value) && !valid_emails.includes(email.value)) {
        email.style.borderColor = "green";
        return true;
    } else {
        email.style.borderColor = "red";
    }
}