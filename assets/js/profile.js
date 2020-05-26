let userToList = false;
let follow_ID = -1;
const max = 5;

window.onload = function() {
    setNavbar();
    setMobileNavbar();
    setFooter();

    let url = new URL(window.location.href);
    let user = getUserObj();
    let user_id = url.searchParams.get("id");

    if (user_id !== null && user_id.length > 0) {
        user_id = Number(user_id);
        if (user_id !== NaN && user_id > -1 && user_id < users_info.length) {
            let current_user = getUserObj();
            userToList = getUserObjWithID(user_id);
        } else {
            window.location.href = "/";
        }
    } else if (user_id === null && getUserObj()) {
        userToList = getUserObj();
    } else {
        window.location.href = "/";
    }
    showThisUser(userToList);

    let user_list = document.getElementById("user-list"); // meter lista
}

function showThisUser(user) {
    document.getElementById("username").innerHTML = getUsername(user);
    document.getElementById("pageTitle").innerHTML += getUsername(user);
    document.getElementById("total_followers").innerHTML = getFollowers(user).length;
    document.getElementById("total_fav_movies").innerHTML = getFavMovies(user).length;
    document.getElementById("total_fav_series").innerHTML = getFavSeries(user).length;
    document.getElementById("total_watching_series").innerHTML = getWatchingSeries(user).length;
    document.getElementById("total_toSee_movies").innerHTML = getToWatchMovies(user).length;
    document.getElementById("total_toSee_series").innerHTML = getToWatchSeries(user).length;
    document.getElementById("total_watched_movies").innerHTML = getSeenMovies(user).length;
    document.getElementById("total_watched_series").innerHTML = getSeenMovies(user).length;
    showFavourites(user);
    showWatching(user);
    showToWatch(user);
}

function showFavourites(user) {
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
    list = getFavSeries(user);
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
    let content = document.getElementById("watching");
    let count = max;
    let list = getWatchingSeries(user);
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
    list = getToWatchSeries(user);
    console.log(count)
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
        <div>
            ${obj.name}
        </div>
        <div>
            ${new Date(obj.premiere * 1000).getFullYear()}
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