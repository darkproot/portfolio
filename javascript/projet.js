const PROJETS = JSON.parse(sessionStorage.getItem('projets'));
const PROJET = PROJETS[sessionStorage.getItem('projet')];
const OS = document.getElementById("OS-selection");
const IMAGES = document.querySelector(".app-galerie-container");

OS.innerHTML = '';
IMAGES.innerHTML = '';

// Ajout des differents OS disponible
PROJET.OS.forEach(element => {
    OS.innerHTML += `<option value="${PROJET.name}">${element}</option></br>`
});

// Ajout des differents images du projet
PROJET.images.forEach(element => {
    IMAGES.innerHTML += `<img src="${element}" alt="app-image"></img>`
});