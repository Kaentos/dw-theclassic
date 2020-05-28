let userToList = false;
const max = 5;

function showThisUser(user) {
    document.getElementById("userIMG").src="assets/img/Users/" + getID(user) + ".jpg ";
    document.getElementById("username").innerHTML = getUsername(user);
    document.getElementById("pageTitle").innerHTML += getUsername(user);
    document.getElementById("total_fav_movies").innerHTML = getFavMovies(user).length;
    document.getElementById("total_fav_shows").innerHTML = getFavShows(user).length;
    document.getElementById("total_watching_shows").innerHTML = getWatchingShows(user).length;
    document.getElementById("total_toSee_movies").innerHTML = getToWatchMovies(user).length;
    document.getElementById("total_toSee_shows").innerHTML = getToWatchShows(user).length;
    document.getElementById("total_watched_movies").innerHTML = getWatchedMovies(user).length;
    document.getElementById("total_watched_shows").innerHTML = getWatchedShows(user).length;
    showFavourites(user);
    showWatching(user);
    showToWatch(user);
}

function showFavourites(user) {
    document.getElementById("moreFav").href = "user-list.html?id=" + getID(user);
    let content = document.getElementById("fav");
    let count = max;
    let list = getFavMovies(user);
    for (let id of list) {
        if (count === 0) {
            return;
        }
        content.innerHTML += getHTMLOf(movies[id], id, "movies");
        count--;
    }
    list = getFavShows(user);
    if (list.length === 0) {
        if (count === 5) {
            showNothing(content, document.getElementById("moreFav"));
        }
        return;
    }
    for (let id of list) {
        if (count === 0) {
            return;
        }
        content.innerHTML += getHTMLOf(shows[id], id, "shows");
        count--;
    }
    if (count === 5) {
        showNothing();
    }
}
function showWatching(user) {
    document.getElementById("moreWatching").href = "user-list.html?id=" + getID(user) + "&filter=watching&type=shows";
    let content = document.getElementById("watching");
    let count = max;
    let list = getWatchingShows(user);
    if (list.length === 0) {
        if (count === 5) {
            showNothing(content, document.getElementById("moreWatching"));
        }
        return;
    }
    for (let id of list) {
        if (count === 0) {
            return;
        }
        content.innerHTML += getHTMLOf(shows[id], id, "shows");
        count--;
    }
}
function showToWatch(user) {
    document.getElementById("moreToWatch").href = "user-list.html?id=" + getID(user) + "&filter=toWatch";
    let content = document.getElementById("toWatch");
    let count = max;
    let list = getToWatchMovies(user);
    for (let id of list) {
        if (count === 0) {
            return;
        }
        content.innerHTML += getHTMLOf(movies[id], id, "movies");
        count--;
    }
    list = getToWatchShows(user);
    if (list.length === 0) {
        if (count === 5) {
            showNothing(content, document.getElementById("moreToWatch"));
        }
        return;
    }
    for (let id of list) {
        if (count === 0) {
            return;
        }
        content.innerHTML += getHTMLOf(shows[id], id, "shows");
        count--;
    }
    
}

function getHTMLOf(obj, id, type) {
    let ref = type === "movies" ? "movieinfo.html?id="+id : "showinfo.html?id="+id;
    return `
    <a href="${ref}" class="flex-col ms_ss_panel">
        <img class="ms_ss_img" src="assets/img/${type}/${id}.jpg">
        <div class="ms_ss_desc">
            <div>
                ${obj.name}
            </div>
            <div>
                ${getYear(obj.premiere)}
            </div>
        </div>
    </a>
    `;
}

function showNothing(content, button) {
    button.style.display = "none";
    content.innerHTML = `
        <div class="no-content">
            This user doesn't have any movies or TV Shows in this category.
        </div>
    `;
}

window.onload = function() {
    basicSetup();

    let user_id = new URLSearchParams(window.location.search).get("id");
    if (user_id !== null && user_id.length > 0 && user_id >= 0 && user_id < users_info.length) {
        userToList = getUserObjWithID(Number(user_id));
    } else if (user_id === null && getUserObj()) {
        userToList = getUserObj();
        setActive("profile_ref");
    } else {
        window.location.href = "/";
    }
    showThisUser(userToList);

    let user_list = document.getElementById("user-list");
    user_list.href="user-list.html?id=" + getID(userToList);
}