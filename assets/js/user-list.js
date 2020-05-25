window.onload = function() {
    setNavbar();
    setMobileNavbar();
    setFooter();
    setBackBtn();

    let url = new URL(window.location.href);
    let user = getUserObj();
    let user_id = url.searchParams.get("id");
    console.log(user_id);
    if (user_id !== null && user_id.length > 0) {
        user_id = Number(user_id);
        if (user_id !== NaN && user_id > -1 && user_id <= users_info.length) {
            console.log("shows id info");
            showListOf(users_info[user_id]);
        } else {
            window.location.href = "/";
        }
    } else if(user) {
        showThisUser(user);
    } else {
        window.location.href = "/";
    }
}

function showListOf(user) {
    document.getElementById("pageTitle").innerHTML += getUsername(user);
    document.getElementById("username").innerHTML = getUsername(user);

    console.log(user);
}