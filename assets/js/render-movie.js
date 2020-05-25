window.onload = function (){
    setNavbar();
    setMobileNavbar();
    setFooter();
}

function renderMovie() {
    let id = new URLSearchParams(window.location.search).get("id");
    let movie = getMovieById(parseInt(id));
    if (show == undefined) {
        window.location.href = "/";
        return;
    }
    document.getElementById("info-picture").src = `assets/img/movies/${id}.jpg`;
    document.getElementById("info-title").innerHTML = movie.name;
    document.getElementById("info-rating").innerHTML = `Score Rating: ${movie.score}`;
    document.getElementById("info-genres").innerHTML = `Genres: ${movie.genres.join(", ")}`;
    document.getElementById("info-premiere").innerHTML = `Premiere Date: ${getPremiereDate(movie.premiere)}`;
    document.getElementById("info-directors").innerHTML = `Directors: ${movie.directors.join(", ")}`;
    // document.getElementById("info-yourrating").innerHTML = ``
    document.getElementById("info-agerating").innerHTML = `Age rating: ${movie.age}`;
    document.getElementById("info-duration").innerHTML = `Duration: ${movie.duration}`;
    document.getElementById("info-language").innerHTML = `Language: ${movie.lang}`;
    document.getElementById("yt-embed").src = `https://www.youtube.com/embed/${movie.trailer}`;

}