function login () {
    let email_input = document.getElementById("u_email");
    let email = email_input.value.replace(/ /g, "").toLowerCase();
    let pw_input = document.getElementById("u_password");
    let pw = pw_input.value;

    if (checkEmail(email) && valid_emails.includes(email)) {
        console.log("valid email");
        let idx = valid_emails.indexOf(email);
        if(valid_passwords[idx] === pw) {
            console.log("valid pw");
            localStorage.setItem("logged", true);
        } else {
            console.log("invalid pw");
            showErrorTxt([email_input, pw_input]);
        }
    } else {
        console.log("Invalid email");
        showErrorTxt([email_input, pw_input]);
    }
}