function setLogoutBtn() {
    if (isLogged()) {
        let btn = document.getElementById("logout_btn")
        if (sessionStorage.getItem("login_info") !== null) {
            btn.addEventListener("click", function() {sessionStorage.removeItem("login_info"); location.reload()})
        } else if (localStorage.getItem("login_info") !== null) {
            btn.addEventListener("click", function() {localStorage.removeItem("login_info"); location.reload();})
        } else {
            return;
        }
    }
}

function setActive(id_name) {
    document.getElementById(id_name).classList.add("active");
}

function setBackBtn() {
    let back_btn = document.getElementById('back_btn');
    if (document.referrer === "") {
        back_btn.addEventListener("click", goHome);
        back_btn.innerText = "Home";
    } else {
        back_btn.addEventListener("click", goBack);
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
        <div class="flex-line navbar-linksdiv">
            <a href="#" id="opennav"><img src="assets/img/bars.png" alt="Open Navigation Menu"></a>
            <a class="navbar-img-a" href="/">
                <img class="navbar-img" src="assets/img/logo.png" alt="logo">
            </a>
            <a id="home_ref" class="navbar-links" href="/">Home</a>
            <a id="movies_ref" class="navbar-links" href="list-content.html?t=m">Movies</a>
            <a id="series_ref" class="navbar-links" href="list-content.html?t=s">TV Shows</a>
            <a id="users_ref" class="navbar-links" href="users.html">Users</a>
            <a id="contact_ref" class="navbar-links" href="contact.html">Contact</a>
        </div>
        <div id="navbar-content" class="flex-line navbar-linksdiv"></div>
    </nav>`;
    if (isLogged()) {
        document.getElementById("navbar-content").innerHTML = `
            <a class="navbar-img-a" href="#">
                <img class="navbar-img navbar-userLogo" src="assets/img/Users/${getID(getUserObj())}.jpg" alt="logo">
            </a>
            <a id="profile_ref" class="navbar-links" href="profile.html">Profile</a>
            <a id="list_ref" class="navbar-links" href="user-list.html">My List</a>
            <a id="settings_ref" class="navbar-links" href="settings.html">Settings</a>
            <a id="logout_btn" class="navbar-links logout-link" href="#">Logout</a>
        `;
        return;
    }
    document.getElementById("navbar-content").innerHTML = `
        <a id="login_ref" class="navbar-links l-link" href="login.html">Login</a>
        <a id="register_ref" class="navbar-links r-link" href="register.html">Register</a>
    `;
}

function setMobileNavbar(){
    document.getElementById("opennav").onclick = function() {
        let navbar = document.getElementById("navbar");
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
        } else {
            navbar.classList.add("active");
        }
        return false;
    }
}

function setFooter() {
    let footer = document.getElementById("footer");
    footer.innerHTML = `
        <div class="flex-line flex-center">
            <div class="flex-col footer-content">
                <h2>
                    My Popcorn List
                </h2>
                <picture>
                    <img src="assets/img/logo.png" alt="" width="100px">
                </picture>
            </div>
            <div class="flex-col footer-content">
                <h2>Site links</h2>
                <ul id="footer-links" class="footer-ul">
                    <li>
                        <a href="list-content.html?t=m">Movies</a>
                    </li>
                    <li>
                        <a href="list-content.html?t=s">TV Shows</a>
                    </li>
                    <li>
                        <a href="users.html">Users</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="flex-col footer-content">
                <h2>Follow us!</h2>
                <ul class="footer-ul">
                    <li>
                        <a href="https://www.twitter.com" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/r/all" target="_blank">Reddit</a>
                    </li>
                </ul>
            </div>
            <div class="flex-col footer-content">
                <h2>Related websites</h2>
                <ul class="footer-ul">
                    <li>
                        <a href="https://www.imdb.com" target="_blank">IMDB</a>
                    </li>
                    <li>
                        <a href="https://www.themoviedb.org/" target="_blank">Posters</a>
                    </li>
                    <li>
                        <a href="https://www.flaticon.com" target="_blank">Icons</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-credits flex-line flex-spaced">
            <div class="footer-credits-txt">
                Website created by: André Salvado & Miguel Magueijo
            </div>
            <div class="footer-credits-txt">
                <a href="https://github.com/Kaentos/dw-theclassic" target="_blank">
                    <img src="assets/img/GitHub/GitHub-Mark-32px.png" alt="logo" width="24px">
                </a>
            </div>
            <div class="footer-credits-txt">
                Icons made by
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                    Freepik
                </a>
                from
                <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    `;

    if (isLogged()) {
        document.getElementById("footer-links").innerHTML += `
            <li>
                <a href="profile.html">Profile</a>
            </li>
            <li>
                <a href="user-list.html">My List</a>
            </li>
            <li>
                <a href="settings.html">Settings</a>
            </li>
        `;
        return;
    }

    document.getElementById("footer-links").innerHTML += `
        <li>
            <a href="/login.html">Login</a>
        </li>
        <li>
            <a href="/register.html">Register</a>
        </li>
    `;
}

function isLogged() {
    if (localStorage.getItem("login_info") !== null || sessionStorage.getItem("login_info") !== null) {
        return true;
    }
    return false;
}

function ifLoggedGoIndex() {
    if (isLogged()) {
        location.href="/";
    }
}

function ifNotLoggedGoIndex() {
    if (!isLogged()) {
        location.href="/";
    }
}

function basicSetup() {
    setNavbar();
    setMobileNavbar();
    setFooter();
    setLogoutBtn();
    setBackBtn();
}