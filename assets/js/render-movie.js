let movie_id = -1;

function showActionsBtns() {
    let user = getUserObj();
    let action_divs = document.getElementById("action-btn-div");
    action_divs.innerHTML += `
        <button id="toWatchBtn" class="action-btns" title="Planning to watch">
            <img id="toWatchIMG" src="assets/img/towatch.png" alt="To Watch">
        </button>
        <button id="watchedBtn" class="action-btns" title="Watched">
            <img id="watchedIMG" src="assets/img/watched.png" alt="Watched">
        </button>
        <button id="favBtn" class="action-btns" title="Mark as Favorite">
            <img id="favIMG" src="assets/img/fav.png" alt="Favorite">
        </button>
    `;
    let toWatchBtn = document.getElementById("toWatchBtn");
    let watchedBtn = document.getElementById("watchedBtn");
    let favBtn = document.getElementById("favBtn");
    if (getToWatchMovies(user).includes(movie_id)) {
        activateThisBtn(toWatchBtn , "toWatch");
        toWatchBtn.addEventListener("click", function() { 
            removeMovieIDFrom(user, "toWatch", movie_id); 
        });
    } else {
        toWatchBtn.addEventListener("click", function() { 
            addMovieIDTo(user, "toWatch", movie_id);
        });
    }
    if (getWatchedMovies(user).includes(movie_id)) {
        activateThisBtn(watchedBtn, "watched");
        watchedBtn.addEventListener("click", function() { 
            removeMovieIDFrom(user, "watched", movie_id); 
        });
    } else {
        watchedBtn.addEventListener("click", function() {
            addMovieIDTo(user, "watched", movie_id);
        });
    }
    if (getFavMovies(user).includes(movie_id)) {
        activateThisBtn(favBtn , "fav");
        favBtn.addEventListener("click", function() { 
            removeMovieIDFrom(user, "fav", movie_id); 
        });
    } else {
        favBtn.addEventListener("click", function() {
            addMovieIDTo(user, "fav", movie_id);
        });
    }
}

function activateThisBtn(btn, type) {
    document.getElementById(type+"IMG").src = "assets/img/" + type + "_active.png";
    btn.style.backgroundColor = "black";
}

function addMovieIDTo(user, type, id) {
    switch(type) {
        case "toWatch":
            addToWatchMovie(user, id);
            break;
        case "watching":
            addWatchingMovie(user, id);
            break;
        case "watched":
            addWatchedMovie(user, id);
            break;
        case "fav":
            addFavMovie(user, id);
            break;
        default:
            console.log("Wrong type");
            return;
    }
    updateUserObj(user);
}
function removeMovieIDFrom(user, type, id) {
    switch(type) {
        case "toWatch":
            removeToWatchMovie(user, id);
            break;
        case "watching":
            removeWatchingMovie(user, id);
            break;
        case "watched":
            removeWatchedMovie(user, id);
            break;
        case "fav":
            removeFavMovie(user, id);
            break;
        default:
            console.log("Wrong type");
            return;
    }
    updateUserObj(user);
}


function renderMovie() {
    let id = new URLSearchParams(window.location.search).get("id");
    if (id === null) {
        window.location.href = "/";
    }
    movie_id = Number(id);
    let movie = getMovieById(movie_id);
    document.getElementById("pageTitle").innerHTML += movie.name;
    document.getElementById("info-picture").src = `assets/img/movies/${id}.jpg`;
    document.getElementById("info-title").innerHTML = movie.name;
    document.getElementById("info-rating").innerHTML += movie.score + "/10";
    document.getElementById("info-genres").innerHTML += movie.genres.join(", ");
    document.getElementById("info-premiere").innerHTML += getPremiereDate(movie.premiere);
    document.getElementById("info-directors").innerHTML += movie.directors.join(", ")
    document.getElementById("info-agerating").innerHTML += movie.age;
    document.getElementById("info-duration").innerHTML += movie.duration;
    document.getElementById("info-language").innerHTML += movie.lang;
    document.getElementById("yt-embed").src = "https://www.youtube.com/embed/" + movie.trailer;
}

window.onload = function (){
    basicSetup();
    renderMovie();
    
    if (isLogged()) {
        showActionsBtns();
    }
}