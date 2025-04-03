const page = document.querySelector("body");
const PROJET = JSON.parse(sessionStorage.getItem('projet'));
const content = `
<header>
        <nav>
            <label for="pseudo">X-verse</label>
            <ul>
                <li><a href="../index.html" id="home">Home</a></li>
                <li><a href="../pages/projets.html" class="active" id="projets">Projets</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Application information -->
        <div class="app-head-container">
            <div class="image-container">
                <img src="${PROJET.icon}" alt="${PROJET.name}-logo">
            </div>
            <div class="app-name-container">
                <p class="app-name">${PROJET.name}</p>
                <a href="${PROJET["url-entreprise"]}" class="app-entreprise">${PROJET.entreprise}</a>
            </div>
        </div>

        <!-- Application actions -->
        <div class="app-actions-container">
            <select name="OS" id="OS-selection">
                <option value="window">Window</option>
                <option value="macOS">macOS</option>
                <option value="linux">Linux</option>
            </select>
            <button><a href="${PROJET["url-download"]}">Telecharger</a></button>
        </div>

        <!-- Application Galerie -->
        <div class="app-galerie-container">
            <img src="../assets/images/C-Learning/1.jpg" alt="app-image">
            <img src="../assets/images/C-Learning/2.jpg" alt="app-image">
            <img src="../assets/images/C-Learning/3.jpg" alt="app-image">
            <img src="../assets/images/C-Learning/4.jpg" alt="app-image">
        </div>

        <!-- Application Description -->
        <div class="app-description-container">
            <p class="title">A propos de l'application</p>
            <p class="description">${PROJET["big-description"]}</p>
        </div>
    </main>

    <footer></footer>
    <script src="javascript/main.js"></script>
`;
page.innerHTML = content;

const PAGE_NAME = document.querySelector("title");
const OS = document.getElementById("OS-selection");
const IMAGES = document.querySelector(".app-galerie-container");

OS.innerHTML = '';
IMAGES.innerHTML = '';

// Changement du titre de l'onglet
PAGE_NAME.innerText = `X-verse (${PROJET.name})`;

// Ajout des differents OS disponible
PROJET.OS.forEach(element => {
    OS.innerHTML += `<option value="${PROJET.name}">${element}</option></br>`
});

// Ajout des differents images du projet
PROJET.images.forEach(element => {
    IMAGES.innerHTML += `<img src="${element}" alt="app-image"></img>`
});