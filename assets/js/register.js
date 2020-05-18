function register () {
    let nu_username = document.getElementById("nu_username");
    let nu_email = document.getElementById("nu_email");
    let nu_password = document.getElementById("nu_password");
    let nu_cpassword = document.getElementById("nu_cpassword");

    let username = nu_username.value.trim();
    if (checkUsername(username) && !valid_usernames.includes(username)) {
        console.log("Username: " + username);
        nu_username.style.borderColor = "green";
    } else {
        console.log("Invalid Username: " + username);
        showErrorTxt([nu_username]);
        return;
    }
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
}

function checkPasswords(){
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/;
    let pw1 = document.getElementById("nu_password");
    let pw2 = document.getElementById("nu_cpassword");
    let cpw_error = document.getElementById("cpw_error");
    console.log(pw1.value.length);
    console.log("I'm running");
    if(pw1.value !== pw2.value) {
        console.log("not matching");
        cpw_error.style.visibility = "block";
        pw2.style.borderColor = "red";
    } else if (regex.test(pw1.value) && pw1.value.length >= 6 && pw1.value.length <= 16) {
        pw1.style.borderColor = "green";
        pw2.style.borderColor = "green";
        cpw_error.style.visibility = "hidden";
        console.log("match");
        return true;
    } else if (pw1.value.length === 0) {
        pw1.style.borderColor = "red";
    }
    return false;
}

function checkUsername(username) {
    let regex = /^[a-zA-Z0-9_]{6,16}$/;
    if (regex.test(username))
        return true;
    else
        return false;
}