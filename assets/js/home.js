const isLogged = false;

window.onload = function () {
    setNavbar();
    document.getElementById("home_ref").classList.add("active");
    setMobileNavbar();

    setFooter();

    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        removeWelcome();
    }
    setupCarouselBtns();
}

function setupCarouselBtns() {
    document.getElementById("featured-next").addEventListener("click", function() {
        carousel_next(document.getElementById("featured"));
    });
    document.getElementById("featured-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("featured"));
    });
    document.getElementById("last_movies-next").addEventListener("click", function() {
        carousel_next(document.getElementById("last_movies"));
    });
    document.getElementById("last_movies-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("last_movies"));
    });
    document.getElementById("last_series-next").addEventListener("click", function() {
        carousel_next(document.getElementById("last_series"));
    });
    document.getElementById("last_series-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("last_series"));
    });
    document.getElementById("top_movies-next").addEventListener("click", function() {
        carousel_next(document.getElementById("top_movies"));
    });
    document.getElementById("top_movies-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("top_movies"));
    });
    document.getElementById("top_series-next").addEventListener("click", function() {
        carousel_next(document.getElementById("top_series"));
    });
    document.getElementById("top_series-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("top_series"));
    });
}

function carousel_next(carousel) {
    console.log(carousel);
    carousel.scrollLeft += 217;
}
function carousel_prev(carousel) {
    carousel.scrollLeft -= 217;
}

function removeWelcome() {
    document.getElementById("welcome-zone").remove()
}