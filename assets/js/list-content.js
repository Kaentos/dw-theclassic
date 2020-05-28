let target;
let mediatype;
let list_element;
let allgenres = [];
let idarray = [];

function generateCard(id) {
    if (mediatype === "m") {
        src = `assets/img/movies/${id}.jpg`;
        href = `movieinfo.html?id=${id}`;
    } else {
        src = `assets/img/shows/${id}.jpg`;
        href = `showinfo.html?id=${id}`;
    }
    list_element.innerHTML += `
        <a class="flex-col ms_ss_panel" id="li${id}" href="${href}">
            <img class="ms_ss_img" src="${src}">
            <div>
                ${target[id].name}
            </div>
            <div>
                ${getYear(target[id].premiere)}
            </div>
        </a>
    `;
}

function renderList() {
    let sorttype = document.getElementById("order_type").value
    idarray = [];
    if (sorttype === "all") {
        for (i in target) {
            idarray.push(i)
        }
    } else if (sorttype === "new") {
        idarray = getIDsByRecentDateOf(target);
    } else {
        idarray = getIDsByRateOf(target);
    }
    list_element.innerHTML = "";
    for (i of idarray) {
        generateCard(i);
    }
    renderFilteredList();
}

function renderFilteredList() {
    let namefilter = document.getElementById("search_name").value.toLowerCase();
    let genrefilter = document.getElementById("search_genre").value;
    let excluded = [];
    if (namefilter !== "") {
        for (i of idarray) {
            if (!(target[i].name.toLowerCase().includes(namefilter))) {
                excluded.push(i);
            }
        }
    }
    if (genrefilter !== "all") {
        for (i of idarray) {
            if (excluded.includes(i)) {
                continue;
            }
            if (!(target[i].genres.includes(genrefilter))) {
                excluded.push(i)
            }
        }
    }
    for (i of idarray) {
       if (excluded.includes(i)) {
           document.getElementById(`li${i}`).style.display = "none";
       } else {
            document.getElementById(`li${i}`).style.display = "";
       }
    }
}

window.onload = function() {
    setNavbar();
    setLogoutBtn();
    setMobileNavbar();
    setFooter();
    setBackBtn();
    list_element = document.getElementById("listdiv");
    mediatype = new URLSearchParams(window.location.search).get("t");
    if (mediatype === null) {
        window.location.href = "/";
    }
    if (mediatype === "m") {
        target = movies;
        setActive("movies_ref");
        document.getElementById("type_title").innerHTML = "Movies";
    } else if (mediatype === "s") {
        target = shows;
        setActive("series_ref");
        document.getElementById("type_title").innerHTML = "TV Shows";
    } else {
        window.location.href = "/";
        return;
    }
    for (let [i, v] of Object.entries(target)) {
        for (genre of v.genres) {
            if (!(allgenres.includes(genre))) {
                allgenres.push(genre);
            }
        }
    }
    allgenres = allgenres.sort();
    for (genre of allgenres) {
        option = document.createElement("option");
        option.value = genre;
        option.innerHTML = genre;
        document.getElementById("search_genre").add(option);
    }
    renderList();
    document.getElementById("search_name").addEventListener("keyup", renderFilteredList);
    document.getElementById("search_genre").addEventListener("change", renderFilteredList);
    document.getElementById("order_type").addEventListener("change", renderList);
}