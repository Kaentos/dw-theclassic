window.onload = function() {
    setNavbar();
    setMobileNavbar();
    document.getElementById("users_ref").classList.add("active");
    setFooter();
    setBackBtn();
    
    showAllUsers();
    document.getElementById("search-btn").addEventListener("click", showAllUsers);
}

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
            <img class="ms_ss_img" src="assets/img/Users/1.jpg">
            <div class="user-details flex-col">
                <div class='username'>
                    ${getUsername(user)}
                </div>
                <div class="other-details">
                    Total Favourites: ${getFavMovies(user).length + getFavSeries(user).length}
                </div>
                <div>
                    Total Watched: ${getSeenMovies(user).length + getSeenSeries(user).length}
                </div>
            </div>
        </a>
    `;
}

function showNothing(div) {
    div.innerHTML = "<div class='needToFollow'>You don't follow anyone... maybe follow some users?</div>";
}