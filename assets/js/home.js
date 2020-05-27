const max = 7;
const isLogged = false;

window.onload = function () {
    setNavbar();
    setLogoutBtn();
    setActive("home_ref");
    setMobileNavbar();
    setFooter();

    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        removeWelcome();
    }
    setupCarouselBtns();

    showThisType("movies");
    showThisType("shows");
}

function showThisType(type) {
    showLast(type);
    showTopRated(type);
}

function showLast(type) {
    const data = type === "movies" ? movies : shows;
    let lastMoviesIDS = getIDsByRecentDateOf(data);
    let content = document.getElementById("last_"+type);
    for (let i = 0; i < max; i++) {
        let id = lastMoviesIDS[i]
        showThisObj(content, id, data[id], type);
    }
    content.innerHTML += "<div></div>";
}

function showTopRated(type) {
    const data = type === "movies" ? movies : shows;
    let lastMoviesIDS = getIDsByRateOf(data);
    let content = document.getElementById("top_"+type);
    for (let i = 0; i < max; i++) {
        let id = lastMoviesIDS[i]
        showThisObj(content, id, data[id], type);
    }
    content.innerHTML += "<div></div>";
}

function showThisObj(target, id, obj, type) {
    target.innerHTML += `
        <a class="flex-col ms_ss_panel text-center" href="movieinfo.html?id=${id}">
            <img class="ms_ss_img" src="assets/img/${type}/${id}.jpg">
            <div>
                ${obj.name}
            </div>
            <div>
                ${getYear(obj.premiere)}
            </div>
        </a>
    `;
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
    document.getElementById("last_shows-next").addEventListener("click", function() {
        carousel_next(document.getElementById("last_shows"));
    });
    document.getElementById("last_shows-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("last_shows"));
    });
    document.getElementById("top_movies-next").addEventListener("click", function() {
        carousel_next(document.getElementById("top_movies"));
    });
    document.getElementById("top_movies-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("top_movies"));
    });
    document.getElementById("top_shows-next").addEventListener("click", function() {
        carousel_next(document.getElementById("top_shows"));
    });
    document.getElementById("top_shows-prev").addEventListener("click", function() {
        carousel_prev(document.getElementById("top_shows"));
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