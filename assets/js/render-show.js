window.onload = function () {
    setNavbar();
    setMobileNavbar();
    setFooter();
    renderShow();
    setBackBtn();
}

function renderShow() {
    let id = new URLSearchParams(window.location.search).get("id");
    if (id === null) {
        window.location.href = "/";
    }
    let show = getShowById(Number(id));
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