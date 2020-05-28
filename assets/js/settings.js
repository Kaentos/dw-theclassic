window.onload = function() {
    ifNotLoggedGoIndex();
    
    setNavbar();
    setMobileNavbar();
    setFooter();
    setLogoutBtn();
    setActive("settings_ref")
    setBackBtn();

    let user = getUserObj();
    document.getElementById("current_email").innerHTML += getEmail(user);
    document.getElementById("current_username").innerHTML += getUsername(user);
}