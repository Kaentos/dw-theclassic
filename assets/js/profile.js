window.onload = function() {
    setNavbar();
    setFooter();

    let user_list = document.getElementById("user-list");

    let url = new URL(window.location.href);
    let user_id = url.searchParams.get("id");
    if (user_id === null) {
        window.location.href = "/";
    } else {
        user_id = Number(user_id);
    }
    
    if (user_id !== NaN && user_id > -1 && user_id <= users_info.length) {
        showThisUser(users_info[user_id]);
    } else {
        showThisUser(getUserObj());
    }
}

function showThisUser(user) {
    if (!user) {
        window.location.href = "/";
    }
    console.log("im running");
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