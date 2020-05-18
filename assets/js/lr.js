var valid_usernames = ["admin_admin", "teste_teste", "bomdia"];
var valid_emails = ["admin@mplist.com", "teste@gmail.com", "bomdia@gmail.com"];
var valid_passwords = ["admin", "teste", "bomdia"];
var invalid_txt = null;



window.onload = function () {
    invalid_txt = document.getElementById("invalid_txt");
}

function borderRed(input) {
    input.style.borderColor = "red";
}

function checkEmail2(email) {
    let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(email));
}