function setBackBtn() {
    let back_btn = document.getElementById('back_btn');
    if (document.referrer === "") {
        back_btn.setAttribute( "onClick", "goHome()" );
        back_btn.innerText = "Home";
    } else {
        back_btn.setAttribute( "onClick", "goBack()" );
    }
}

function goBack() {
    window.history.back();
}
function goHome() {
    window.location.href = "/";
}