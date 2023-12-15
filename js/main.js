//Navbar toggle button
function toggler(x) {
    x.classList.toggle("change");
    var sidenav = document.getElementById("mySidenav");
    var opacity = document.getElementById("opacity");
    sidenav.classList.toggle("open");
    opacity.classList.toggle("opa");
    document.body.classList.toggle("opa");
}
//Profile button
function profile() {
    var profileMenu = document.getElementById("profileMenu");
    profileMenu.classList.toggle("active");
    var svg = document.querySelector(".profile-title svg");
    svg.classList.toggle("transform");
}