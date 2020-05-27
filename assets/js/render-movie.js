window.onload = function (){
    setNavbar();
    setMobileNavbar();
    setFooter();
    renderMovie();
    setBackBtn();
}

function renderMovie() {
    let id = new URLSearchParams(window.location.search).get("id");
    if (id === null) {
        window.location.href = "/";
    }
    let movie = getMovieById(Number(id));
    document.getElementById("pageTitle").innerHTML += movie.name;
    document.getElementById("info-picture").src = `assets/img/movies/${id}.jpg`;
    document.getElementById("info-title").innerHTML = movie.name;
    document.getElementById("info-rating").innerHTML += movie.score + "/10";
    document.getElementById("info-genres").innerHTML += movie.genres.join(", ");
    document.getElementById("info-premiere").innerHTML += getPremiereDate(movie.premiere);
    document.getElementById("info-directors").innerHTML += movie.directors.join(", ")
    document.getElementById("info-agerating").innerHTML += movie.age;
    document.getElementById("info-duration").innerHTML += movie.duration;
    document.getElementById("info-language").innerHTML += movie.lang;
    document.getElementById("yt-embed").src = "https://www.youtube.com/embed/" + movie.trailer;
    

}