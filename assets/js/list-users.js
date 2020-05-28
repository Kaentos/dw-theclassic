function showAllUsers() {
    let name = document.getElementById("search-name").value.toLowerCase();
    let user_list = document.getElementById("user_list");
    user_list.innerHTML = "";
    for (let i in users_info) {
        let user = users_info[i];
        if (getUsername(user).toLowerCase().includes(name)){
            showThisUser(user_list, user, i);
        }
    }
}

function showThisUser(list, user, id) {
    list.innerHTML += `
        <a href="profile.html?id=${id}" class="flex-line ms_ss_panel">
            <img class="ms_ss_img" src="assets/img/Users/${getID(user)}.jpg">
            <div class="user-details flex-col">
                <div class='username'>
                    ${getUsername(user)}
                </div>
                <div class="other-details">
                    Total Favorites: ${getFavMovies(user).length + getFavShows(user).length}
                </div>
                <div>
                    Total Watched: ${getWatchedMovies(user).length + getWatchedShows(user).length}
                </div>
            </div>
        </a>
    `;
}

window.onload = function() {
    basicSetup();
    setActive("users_ref");
    showAllUsers();
    document.getElementById("search-name").addEventListener("keyup", showAllUsers);
}