const valid_emails = ["admin@mplist.com", "teste@gmail.com"];
const valid_passwords = ["admin", "teste"];

window.onload = function () {
    let back_btn = document.getElementById('back_btn');
    if (document.referrer === "") {
        back_btn.setAttribute( "onClick", "goHome()" );
        back_btn.innerText = "Home";
    } else {
        back_btn.setAttribute( "onClick", "goBack()" );
    }
    // adicionar aqui a verificação se está logado, dá para aceder a outras vars presentes noutro ficheiro (mas precisa de ser importado)
}

function goBack() {
    window.history.back();
}
function goHome() {
    window.location.href = "/";
}