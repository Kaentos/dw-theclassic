let show_id = -1;

function showActionsBtns() {
    let user = getUserObj();
    let action_divs = document.getElementById("action-btn-div");
    action_divs.innerHTML += `
        <button id="toWatchBtn" class="action-btns" title="Planning to watch">
            <img id="toWatchIMG" src="assets/img/towatch.png" alt="To Watch">
        </button>
        <button id="watchingBtn" class="action-btns" title="Watching">
            <img id="watchingIMG" src="assets/img/watching.png" alt="Watching">
        </button>
        <button id="watchedBtn" class="action-btns" title="Watched">
            <img id="watchedIMG" src="assets/img/watched.png" alt="Watched">
        </button>
        <button id="favBtn" class="action-btns" title="Mark as Favorite">
            <img id="favIMG" src="assets/img/fav.png" alt="Favorite">
        </button>
    `;
    let toWatchBtn = document.getElementById("toWatchBtn");
    let watchingBtn = document.getElementById("watchingBtn");
    let watchedBtn = document.getElementById("watchedBtn");
    let favBtn = document.getElementById("favBtn");
    if (getToWatchShows(user).includes(show_id)) {
        activateThisBtn(toWatchBtn , "toWatch");
        toWatchBtn.addEventListener("click", function() { 
            removeShowIDFrom(user, "toWatch", show_id); 
        });
    } else {
        toWatchBtn.addEventListener("click", function() { 
            addShowIDTo(user, "toWatch", show_id);
        });
    }
    if (getWatchingShows(user).includes(show_id)) {
        activateThisBtn(watchingBtn , "watching");
        watchingBtn.addEventListener("click", function() { 
            removeShowIDFrom(user, "watching", show_id); 
        });
    } else {
        watchingBtn.addEventListener("click", function() { 
            addShowIDTo(user, "watching", show_id);
        });
    }
    if (getWatchedShows(user).includes(show_id)) {
        activateThisBtn(watchedBtn, "watched");
        watchedBtn.addEventListener("click", function() { 
            removeShowIDFrom(user, "watched", show_id); 
        });
    } else {
        watchedBtn.addEventListener("click", function() {
            addShowIDTo(user, "watched", show_id);
        });
    }
    if (getFavShows(user).includes(show_id)) {
        activateThisBtn(favBtn , "fav");
        favBtn.addEventListener("click", function() { 
            removeShowIDFrom(user, "fav", show_id); 
        });
    } else {
        favBtn.addEventListener("click", function() {
            addShowIDTo(user, "fav", show_id);
        });
    }
}

function activateThisBtn(btn, type) {
    document.getElementById(type+"IMG").src = "assets/img/" + type + "_active.png";
    btn.style.backgroundColor = "black";
}

function addShowIDTo(user, type, id) {
    switch(type) {
        case "toWatch":
            addToWatchShow(user, id);
            break;
        case "watching":
            addWatchingShow(user, id);
            break;
        case "watched":
            addWatchedShow(user, id);
            break;
        case "fav":
            addFavShow(user, id);
            break;
        default:
            console.log("Wrong type");
            return;
    }
    updateUserObj(user);
}
function removeShowIDFrom(user, type, id) {
    switch(type) {
        case "toWatch":
            removeToWatchShow(user, id);
            break;
        case "watching":
            removeWatchingShow(user, id);
            break;
        case "watched":
            removeWatchedShow(user, id);
            break;
        case "fav":
            removeFavShow(user, id);
            break;
        default:
            console.log("Wrong type");
            return;
    }
    updateUserObj(user);
}

function renderShow() {
    let id = new URLSearchParams(window.location.search).get("id");
    if (id === null) {
        window.location.href = "/";
    }
    show_id = Number(id);
    let show = getShowById(show_id);
    document.getElementById("pageTitle").innerHTML += show.name;
    document.getElementById("info-picture").src = `assets/img/shows/${id}.jpg`;
    document.getElementById("info-title").innerHTML = show.name;
    document.getElementById("info-rating").innerHTML += show.score + "/10";
    document.getElementById("info-genres").innerHTML += show.genres.join(", ");
    document.getElementById("info-premiere").innerHTML += getPremiereDate(show.premiere);
    document.getElementById("info-directors").innerHTML += show.directors.join(", ");
    document.getElementById("info-agerating").innerHTML += show.age;
    document.getElementById("info-language").innerHTML += show.lang;
    document.getElementById("info-seasons").innerHTML += show.seasons;
    let eps = [];
    let selectbox = document.getElementById("info-episodes-select")
    for (const [i, v] of show.episodes.entries()) {
        let option = document.createElement("option");
        option.innerHTML = `Season: ${i+1}`;
        option.value = v;
        selectbox.add(option);
    }
    selectbox.onchange = function() {
        document.getElementById("info-episodes").innerHTML = this.value;
    }
    document.getElementById("info-episodes").innerHTML = show.episodes[0];
    document.getElementById("yt-embed").src = `https://www.youtube.com/embed/${show.trailer}`;
}

window.onload = function () {
    setNavbar();
    setMobileNavbar();
    setFooter();
    renderShow();
    setLogoutBtn();
    setBackBtn();

    
    if (isLogged()) {
        showActionsBtns();
    }
}