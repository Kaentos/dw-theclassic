function register () {
    let nu_username = document.getElementById("nu_username");
    let nu_email = document.getElementById("nu_email");
    let nu_password = document.getElementById("nu_password");
    let nu_cpassword = document.getElementById("nu_cpassword");
    showErrorTxt([nu_username, nu_email, nu_password, nu_cpassword]);
}

function checkPasswords(){
    let pw1 = document.getElementById("nu_password");
    let pw2 = document.getElementById("nu_cpassword");
    let cpw_error = document.getElementById("cpw_error");
    cpw_error.style.visibility = "Hidden";
    if(pw1.value != pw2.value) {
        cpw_error.style.visibility = null;
        console.log("don't match");
    } else {
        pw1.style.borderColor = "green";
        pw2.style.borderColor = "green";
        cpw_error.style.visibility = "hidden";
        console.log("match");
    }
}