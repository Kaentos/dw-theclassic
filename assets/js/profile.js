window.onload = function() {
    setNavbar();
    setFooter();

    let url = new URL(window.location.href);
    let user = getUserObj();
    let user_id = url.searchParams.get("id");

    if (user_id !== null) {
        user_id = Number(user_id);
        if (user_id !== NaN && user_id > -1 && user_id <= users_info.length) {
            if (user && getUsername(users_info[user_id]) !== getUsername(user)){
                document.getElementById("username-follow-zone").innerHTML += '<button class="follow-btn" id="follow-btn">Follow</button>';
            }
            showThisUser(users_info[user_id]);
        } else {
            window.location.href = "/";
        }
    } else if(user) {
        showThisUser(user);
    } else {
        window.location.href = "/";
    }

    let user_list = document.getElementById("user-list"); // meter lista
}

function showThisUser(user) {
    console.log("CARALHO2");
    console.log(user);
    document.getElementById("username").innerHTML = getUsername(user);
    document.getElementById("total_followers").innerHTML = getFollowers(user).length;
    document.getElementById("total_fav_movies").innerHTML = getFavMovies(user).length;
    document.getElementById("total_fav_series").innerHTML = getFavSeries(user).length;
    document.getElementById("total_watching_series").innerHTML = getWatchingSeries(user).length;
    document.getElementById("total_toSee_movies").innerHTML = getToWatchMovies(user).length;
    document.getElementById("total_toSee_series").innerHTML = getToWatchSeries(user).length;
    document.getElementById("total_watched_movies").innerHTML = getSeenMovies(user).length;
    document.getElementById("total_watched_series").innerHTML = getSeenMovies(user).length;
}

let t = `<button class="follow-btn" id="follow-btn">Follow</button>`;