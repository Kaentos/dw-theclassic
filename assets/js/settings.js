window.onload = function() {
    ifNotLoggedGoIndex();
    basicSetup();
    setActive("settings_ref");

    let user = getUserObj();
    document.getElementById("current_email").innerHTML += getEmail(user);
    document.getElementById("current_username").innerHTML += getUsername(user);
}