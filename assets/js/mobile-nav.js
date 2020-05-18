window.onload = function(){
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