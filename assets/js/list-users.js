window.onload = function() {
    setNavbar();
    document.getElementById("users_ref").classList.add("active");
    setFooter();
    setBackBtn();

    let user_list = document.getElementById("user_list");
    let isLogged = false;
    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        isLogged = true;
    }

    for (let i in users_info) {
        let user = users_info[i];
        user_list.innerHTML += `
            <a href=profile.html?id=` + i + ` class="flex-line ms_ss_panel">
                <img class="ms_ss_img" src="assets/img/Users/1.jpg">
                <div class="user-details flex-col">
                    <div class='username'>`
                        + getUsername(user) +
                    `</div>
                    <div>
                        Followers:
                        <span id="u_tf">` + getTotalFollowers(user) + `</span>
                    </div>` + (isLogged ?
                    `<div class="f_by_me">
                        <span>Following</span>
                    </div>` : "") + `
                </div>
            </a>
        `
    }

    
}