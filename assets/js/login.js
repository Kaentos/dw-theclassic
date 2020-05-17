const valid_emails = ["admin@mplist.com", "teste@gmail.com"];
const valid_passwords = ["admin", "teste"];
var invalid_txt = null;

window.onload = function() {
    invalid_txt = document.getElementById("invalid_txt");
    console.log(this.localStorage.getItem("logged"));
    localStorage.removeItem("logged");

    let back_btn = document.getElementById('back_btn');
    if (document.referrer === "") {
        back_btn.setAttribute( "onClick", "goHome()" );
        back_btn.innerText = "Home";
    } else {
        back_btn.setAttribute( "onClick", "goBack()" );
    }
}

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
            invalid_txt.style.visibility = null;
        }
    } else {
        console.log("Invalid email");
        email_input.style.borderColor = "red";
        pw_input.style.borderColor = "red";
        invalid_txt.style.display = "block";
    }
}

function checkEmail(email) {
    let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email));
}

function goBack() {
    window.history.back();
}
function goHome() {
    window.location.href = "/";
}