const max = 10;
let userToList = false;
const filters = ["fav", "watching", "toWatch", "watched"];

function showList() {
    let name = document.getElementById("search-name").value.toLowerCase();
    let type = document.getElementById("search-type").value;
    let listOf = document.getElementById("search-listOf").value;
    let ref = type === "movies" ? "movieinfo.html?id=" : "showinfo.html?id=";
    let list = null;
    if (type === "movies") {
        switch(listOf) {
            case "fav":
                list = getFavMovies(userToList);
                break;
            case "watching":
                showNothing();
                return;
            case "toWatch":
                list = getToWatchMovies(userToList);
                break;
            case "watched":
                list = getWatchedMovies(userToList);
                break;
            default:
                list = getFavMovies(userToList);
        }
        if (list === null || list.length === 0) {
            showNothing();
            return;
        }
        showListOf(list, movies, ref, name, type);
    } else {
        switch(listOf) {
            case "fav":
                list = getFavShows(userToList);
                break;
            case "watching":
                list = getWatchingShows(userToList);
                break;
            case "toWatch":
                list = getToWatchShows(userToList);
                break;
            case "watched":
                list = getWatchedShows(userToList);
                break;
            default:
                list = getFavShows(userToList);
        }
        if (list === null || list.length === 0) {
            showNothing();
            return;
        }
        showListOf(list, shows, ref, name, type);
    }
}

function showNothing() {
    let content = document.getElementById("content-zone");
    content.innerHTML = `
        <div class="no-content">
            There isn't any movies or TV shows to display, please change filters;
        </div>
    `;
}

function showListOf(list, obj, ref, name, type) {
    let content = document.getElementById("content-zone");
    content.innerHTML = "";
    for (let id of list) {
        if (obj[id].name.toLowerCase().includes(name)) {
            content.innerHTML += getHTMLOf(obj[id], id, ref, type);
        }
    }
}

function getHTMLOf(obj, id, ref, type) {
    return `
    <a href="${ref}${id}" class="flex-col ms_ss_panel">
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

window.onload = function() {
    setNavbar();
    setMobileNavbar();
    setFooter();
    setLogoutBtn();
    setBackBtn();

    let url = new URL(window.location.href);
    let user_id = url.searchParams.get("id");

    if (user_id !== null && user_id.length > 0) {
        user_id = Number(user_id);
        if (user_id !== NaN && user_id >= 0 && user_id < users_info.length) {
            userToList = getUserObjWithID(user_id);
        } else {
            window.location.href = "/";
        }
    } else if (user_id === null && getUserObj()) {
        userToList = getUserObj();
    } else {
        window.location.href = "/";
    }
    
    let initial_filter = url.searchParams.get("filter");
    if (initial_filter !== null && filters.includes(initial_filter))
        document.getElementById("search-listOf").value = initial_filter;
    let initial_type = url.searchParams.get("type");
    if (initial_type !== null && initial_type === "shows")
        document.getElementById("search-type").value = "shows";

    document.getElementById("pageTitle").innerHTML += getUsername(userToList);
    document.getElementById("username").innerHTML = getUsername(userToList);
    document.getElementById("username").href = "profile.html?id=" + getID(userToList);
    showList();

    document.getElementById("search-name").addEventListener("keyup", showList);
    document.getElementById("search-type").addEventListener("change", showList);
    document.getElementById("search-listOf").addEventListener("change", showList);
}