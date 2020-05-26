window.onload = function() {
    setNavbar();
    setMobileNavbar();
    setFooter();
    list_element = document.getElementById("listdiv");
    mediatype = new URLSearchParams(window.location.search).get("t");
    if (mediatype == undefined) {
        window.location.href = "/";
        return;
    }
    if (mediatype === "m") {
        target = movies;
    } else if (mediatype === "s") {
        target = shows;
    } else {
        window.location.href = "/";
        return;
    }
    renderList();
    document.getElementById("searchbtn").onclick = function() {
        renderFilteredList();
    }
}

var target;
var mediatype;
var list_element;
var allgenres = [];

function generateCard(id) {
    if (mediatype === "m") {
        src = `assets/img/movies/${id}.jpg`;
        href = `movieinfo.html?id=${id}`;
    } else {
        src = `assets/img/shows/${id}.jpg`;
        href = `showinfo.html?id=${id}`;
    }
    list_element.innerHTML += `<a class="flex-col ms_ss_panel" id="li${id}" href="${href}">
    <img class="ms_ss_img" src="${src}">
    <div>
        ${target[id].name}
    </div>
    <div>
        ${new Date(target[id].premiere * 1000).getFullYear()}
    </div>
    </a>`;
}

function renderList() {
    for (const [i, v] of Object.entries(target)) {
        for (genre of v.genres) {
            if (!(allgenres.includes(genre))) {
                console.log(genre);
                allgenres.push(genre);
            }
        }
        generateCard(i);
    }
    allgenres = allgenres.sort();
    for (genre of allgenres) {
        option = document.createElement("option");
        option.value = genre;
        option.innerHTML = genre;
        document.getElementById("Genre").add(option);
    }
    console.log(allgenres);
}

function renderFilteredList() {
    let namefilter = document.getElementById("txt_pesquisa").value.toLowerCase();
    let genrefilter = document.getElementById("Genre").value;
    let excluded = [];
    if (namefilter !== "") {
        for (const [i, v] of Object.entries(target)) {
            if (!(v.name.toLowerCase().includes(namefilter))) {
                excluded.push(i);
            }
        }
    }
    if (genrefilter !== "all") {
        for (const [i, v] of Object.entries(target)) {
            if (excluded.includes(i)) {
                continue;
            }
            if (!(target[i].genres.includes(genrefilter))) {
                excluded.push(i)
            }
        }
    }
    for (const [i, v] of Object.entries(target)) {
       if (excluded.includes(i)) {
           document.getElementById(`li${i}`).style.display = "none";
       } else {
            document.getElementById(`li${i}`).style.display = "";
       }
    }
}