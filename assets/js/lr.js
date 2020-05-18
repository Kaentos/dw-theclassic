var valid_usernames = ["admin_admin", "teste_teste"];
var valid_emails = ["admin@mplist.com", "teste@gmail.com"];
var valid_passwords = ["admin", "teste"];
var invalid_txt = null;



window.onload = function () {
    invalid_txt = document.getElementById("invalid_txt");
}

function showErrorTxt(inputs) {
    for (let i of inputs) {
        i.style.borderColor = "red";
    }
    invalid_txt.style.display = "block";
}

function checkEmail(email) {
    let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email));
}