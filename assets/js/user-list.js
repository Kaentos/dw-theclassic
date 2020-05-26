const max = 10;
let userToList = false;

window.onload = function() {
    setNavbar();
    setMobileNavbar();
    setFooter();
    setBackBtn();

    let url = new URL(window.location.href);
    let user_id = url.searchParams.get("id");

    // Vai buscar o utilizador com o id do url se tiver e se não tiver mas o utilizador estiver logado vai buscar o utilizador logado
    if (user_id !== null && user_id.length > 0) {
        user_id = Number(user_id);
        if (user_id !== NaN && user_id > -1 && user_id < users_info.length) {
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
    if (initial_filter !== null && ["fav", "watching", "toWatch", "watched"].includes(initial_filter))
        document.getElementById("search-listOf").value = initial_filter;
    let initial_type = url.searchParams.get("type");
    if (initial_type !== null && initial_type === "series")
        document.getElementById("search-type").value = "shows"
    showList();

    document.getElementById("search-btn").addEventListener("click", showList);
    document.getElementById("search-name").addEventListener("submit", showList);
}

function showList() {
    document.getElementById("pageTitle").innerHTML += getUsername(userToList);
    document.getElementById("username").innerHTML = getUsername(userToList);
    let name = document.getElementById("search-name").value;
    let genre = document.getElementById("search-genre").value;
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
                console.log("There is no watching in movies")
                return;
            case "toWatch":
                list = getToWatchMovies(userToList);
                break;
            case "watched":
                list = getSeenMovies(userToList);
                break;
            default:
                list = getFavMovies(userToList);
        }
        if (list.length === 0) {
            showNothing();
            return;
        }
        showListOf(list, movies, ref, name, type, genre);
    } else {
        switch(listOf) {
            case "fav":
                list = getFavSeries(userToList);
                break;
            case "watching":
                list = getWatchingSeries(userToList);
                break;
            case "toWatch":
                list = getToWatchSeries(userToList);
                break;
            case "watched":
                list = getSeenSeries(userToList);
                break;
            default:
                list = getFavSeries(userToList);
        }
        if (list.length === 0) {
            showNothing();
            return;
        }
        for (let id of list) {
            console.log(id);
        }
        showListOf(list, shows, ref, name, type, genre);
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

function showListOf(list, obj, ref, name, type, genre) {
    let content = document.getElementById("content-zone");
    content.innerHTML = "";
    for (let id of list) {
        if (obj[id].name.toLowerCase().includes(name)) {
            if (genre === "all") {
                content.innerHTML += getHTMLOf(obj[id], id, ref, type);
            } else if (obj[id].genres.toLowerCase().includes(genre)) {
                content.innerHTML += getHTMLOf(obj[id], id, ref, type);
            }
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
            ${new Date(obj.premiere * 1000).getFullYear()}
        </div>
    </a>
    `;
}