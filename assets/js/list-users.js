var logged_user = false;
window.onload = function() {
    setNavbar();
    document.getElementById("users_ref").classList.add("active");
    setFooter();
    setBackBtn();

    let search = document.getElementById("search");
    logged_user = getUserObj();
    if (logged_user) {
        search.innerHTML += `
            <div class="search-followers" class="flex-line">
                <label>
                    Users that I follow:
                    <input id="only_followers" class="follow_check" type="checkbox" name="" id="">
                </label>
            </div>
        `;
        document.getElementById("only_followers").addEventListener("click", showFollowedUsers);
    }
    
    showAllUsers();
}

function showAllUsers() {
    let user_list = document.getElementById("user_list");
    user_list.innerHTML = "";
    for (let i in users_info) {
        let user = users_info[i];
        user_list.innerHTML += `
            <a href="profile.html?id=${i}" class="flex-line ms_ss_panel">
                <img class="ms_ss_img" src="assets/img/Users/1.jpg">
                <div class="user-details flex-col">
                    <div class='username'>
                        ${getUsername(user)}
                    </div>
                    <div>
                        Followers:
                        <span id="u_tf">${getTotalFollowers(user)}</span>
                    </div>
                </div>
            </a>
        `
    }
}

function showFollowedUsers() {
    let show_followers = document.getElementById("only_followers").checked;
    let user_list = document.getElementById("user_list");
    let followed_users = getFollows(logged_user);
    user_list.innerHTML = "";
    if (show_followers && followed_users.length > 0) {
        for (let i in followed_users) {
            let user = users_info[i];
            user_list.innerHTML += `
                <a href="profile.html?id=${i}" class="flex-line ms_ss_panel">
                    <img class="ms_ss_img" src="assets/img/Users/1.jpg">
                    <div class="user-details flex-col">
                        <div class='username'>
                            ${getUsername(user)}
                        </div>
                        <div>
                            Followers:
                            <span id="u_tf">${getTotalFollowers(user)}</span>
                        </div>
                    </div>
                </a>
            `;
        }
    } else if (show_followers && followed_users.length === 0) {
        user_list.innerHTML = "<div class='needToFollow'>You don't follow anyone... maybe follow some users?</div>";
    } else {
        showAllUsers();
    }
}