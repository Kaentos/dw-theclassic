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

function showFollowedUsers() {
    let name = document.getElementById("search-name").value.toLowerCase();
    let show_followers = document.getElementById("only_followers").checked;
    let user_list = document.getElementById("user_list");
    let followed_users = getFollows(logged_user);
    let count = 0;
    user_list.innerHTML = "";
    if (show_followers && followed_users.length > 0) {
        for (let i in followed_users) {
            let user = getUserObjWithID(i);
            if (getUsername(user).toLowerCase().includes(name)) {
                count++;
                showThisUser(user_list, user, id);
            }
            
        }
        if (count === 0) {
            showNothing(user_list);
        }
    } else if (show_followers && followed_users.length === 0) {
        showNothing(user_list);
    } else {
        showAllUsers();
    }
    console.log(count);
}

function showThisUser(list, user, id) {
    list.innerHTML += `
        <a href="profile.html?id=${id}" class="flex-line ms_ss_panel">
            <img class="ms_ss_img" src="assets/img/Users/1.jpg">
            <div class="user-details flex-col">
                <div class='username'>
                    ${getUsername(user)}
                </div>
                <div>
                    Followers:
                    <span id="u_tf">${getFollowers(user).length}</span>
                </div>
            </div>
        </a>
    `;
}

function showNothing(div) {
    div.innerHTML = "<div class='needToFollow'>You don't follow anyone... maybe follow some users?</div>";
}