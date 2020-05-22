function setBackBtn() {
    let back_btn = document.getElementById('back_btn');
    if (document.referrer === "") {
        back_btn.setAttribute( "onClick", "goHome()" );
        back_btn.innerText = "Home";
    } else {
        back_btn.setAttribute( "onClick", "goBack()" );
    }
}

function goBack() {
    window.history.back();
}
function goHome() {
    window.location.href = "/";
}

function setNavbar() {
    let navbar = document.getElementById("navbar");
    navbar.classList.add("flex-line");
    navbar.classList.add("flex-spaced");
    navbar.innerHTML = `
        <div class="flex-line">
            <a class="navbar-img-a" href="/">
                <picture>
                    <img class="navbar-img" src="assets/img/logo.png" alt="logo">
                </picture>
            </a>
            <a id="home_ref" class="navbar-links" href="/">Home</a>
            <a id="movies_ref" class="navbar-links" href="#">Movies</a>
            <a id="series_ref" class="navbar-links" href="#">TV Shows</a>
            <a id="users_ref" class="navbar-links" href="#">Users</a>
            <a id="contact_ref" class="navbar-links" href="#">Contact</a>
        </div> 
    `;
    let nonlogged = `
        <div class="flex-line">
            <a id="login_ref" class="l-link" href="login.html">Login</a>
            <a id="register_ref" class="r-link" href="register.html">Register</a>
        </div>
    </nav>
    `;
    let logged = `
        <div class="flex-line">
            <a id="list_ref" class="navbar-link" href="#">My List</a>
            <a id="settings_ref" class="navbar-link" href="#">Settings</a>
            <a id="logout-btn" class="navbar-link" href="#">Logout</a>
        </div>
    </nav>
    `;
    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        navbar += logged;
        document.body.prepend(navbar);
        return;
    }
    navbar.innerHTML += nonlogged;
    document.body.prepend(navbar);
}