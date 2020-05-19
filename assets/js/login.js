function login () {
    let email_input = document.getElementById("l_email");
    let pw_input = document.getElementById("l_password");
    let pw = pw_input.value;

    if (checkEmail()) {
        let idx = valid_emails.indexOf(email_input.value);
        if (valid_passwords[idx] === pw) {
            console.log("Valid credentials!");
            document.getElementById("login-info").classList.add("display-none");
            email_input.style.borderColor = "green";
            pw_input.style.borderColor = "green";
            // Login
            return;
        } else {
            console.log("Invalid credentials!");
        }
    }
    borderRed(email_input);
    borderRed(pw_input);
    document.getElementById("login-info").classList.remove("display-none");
}

function checkEmail() {
    let email_input = document.getElementById("l_email");
    let email = email_input.value.toLowerCase();
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email) && valid_emails.includes(email)) {
        return true;
    }
    borderRed(email_input);
    return false;
}