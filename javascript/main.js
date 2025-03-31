const nav_bar_projets = document.getElementById("projets");
const nav_bar_home = document.getElementById("home");
const github_btn = document.querySelector("#btn-container button");

github_btn.addEventListener('click', () => {
    window.open("https://github.com/darkproot", '_blank');
});

nav_bar_home.addEventListener('click', () => {
    window.location.replace("../index.html");
});

nav_bar_projets.addEventListener('click', () => {
    window.location.replace("../pages/projets.html");
});