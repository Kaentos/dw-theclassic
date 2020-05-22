const isLogged = false;

window.onload = function () {
    setNavbar();
    document.getElementById("home_ref").classList.add("active");
    setMobileNavbar();

    setFooter();

    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        console.log("logged");
    } else {

    }

    document.getElementById("featured-next").addEventListener("click", carousel_next);
    document.getElementById("featured-prev").addEventListener("click", carousel_prev);
}

function carousel_next() {
    console.log("running");
    let div = document.getElementById("featured");
    div.scrollLeft += 217;
}
function carousel_prev() {
    console.log("running");
    let div = document.getElementById("featured");
    div.scrollLeft -= 217;
}

function setLoggedInfo() {

}