window.onload = function () {
    setNavbar();
    setMobileNavbar();
    setFooter();
}

function renderShow() {
    let id = new URLSearchParams(window.location.search).get("id");
    let show = getShowById(parseInt(id));
    if (show == undefined) {
        window.location.href = "/";
        return;
    }
    document.getElementById("info-picture").src = `assets/img/shows/${id}.jpg`;
    document.getElementById("info-title").innerHTML = show.name;
    document.getElementById("info-rating").innerHTML = `Score Rating: ${show.score}`;
    document.getElementById("info-genres").innerHTML = `Genres: ${show.genres.join(", ")}`;
    document.getElementById("info-premiere").innerHTML = `Premiere Date: ${getPremiereDate(show.premiere)}`;
    document.getElementById("info-directors").innerHTML = `Directors: ${show.directors.join(", ")}`;
    // document.getElementById("info-yourrating").innerHTML = ``
    document.getElementById("info-agerating").innerHTML = `Age rating: ${show.age}`;
    document.getElementById("info-language").innerHTML = `Language: ${show.lang}`;
    document.getElementById("info-seasons").innerHTML = `Seasons: ${show.seasons}`;
    let eps = [];
    let selectbox = document.getElementById("info-episodes-select")
    for (const [i, v] of show.episodes.entries()) {
        let option = document.createElement("option");
        option.innerHTML = `S${i+1}`;
        option.value = v;
        selectbox.add(option);
    }
    selectbox.onchange = function() {
        document.getElementById("info-episodes").innerHTML = `Episodes: ${this.value}`;
    }
    document.getElementById("info-episodes").innerHTML = `Episodes: ${show.episodes[0]}`;
    document.getElementById("yt-embed").src = `https://www.youtube.com/embed/${show.trailer}`;
}