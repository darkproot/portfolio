var container = document.querySelector(".container");
const PROJETS = [
    {
        "name": "C-Learning",
        "small-description": "Une application pour apprendre a programmer en C",
        "icon": "../assets/images/C-Learning.png",
        "entreprise": "X-verse",
        "big-description": "C'est un application fait pour revoir les bases de la programmation en C avec des resume de cours et des exercices.",
        "OS": ["windows", "Linux"],
        "images": [
            "../assets/images/C-Learning/1.jpg",
            "../assets/images/C-Learning/2.jpg",
            "../assets/images/C-Learning/3.jpg",
            "../assets/images/C-Learning/4.jpg",
            "../assets/images/C-Learning/5.jpg",
        ],
        "url-download": "https://github.com/darkproot/C-Learning-",
    },
    {
        "name": "Preparix",
        "small-description": "Une application pour apprendre a programmer en Python",
        "icon": "../assets/images/preparix.png",
        "entreprise": "X-verse",
        "big-description": "C'est une application pour les debutant qui voudrait apprendre les bases du language Python sans aucune configuration.",
        "OS": ["windows", "macOS"],
        "images": [
            "../assets/images/Preparix/1.jpg",
            "../assets/images/Preparix/2.jpg",
            "../assets/images/Preparix/3.jpg",
            "../assets/images/Preparix/4.jpg",
        ],
        "url-download": "https://github.com/darkproot/Preparix",
    },
    {
        "name": "Chatx",
        "small-description": "Une application pour faire communiquer localement deux machines",
        "icon": "../assets/images/chatx.png",
        "entreprise": "X-verse",
        "big-description": "C'est une application pour permettre les echanges (Message, Fichiers) entre deux machine localement connecter a un meme reseau",
        "OS": ["windows"],
        "images": [
            "../assets/images/Chatx/1.jpg",
            "../assets/images/Chatx/2.jpg",
            "../assets/images/Chatx/3.jpg",
            "../assets/images/Chatx/4.jpg",
            "../assets/images/Chatx/5.jpg",
            "../assets/images/Chatx/6.jpg",
        ],
        "url-download": "https://github.com/darkproot/Chatx",
    },
];

let buttons = [];

container.innerHTML = "";
PROJETS.forEach((projet) => {
    container.innerHTML += `
        <div class="card">
            <div class="image">
                <img src="${projet.icon}">
            </div>
            <p id="name">${projet.name}</p>
            <p id="description">${projet["small-description"]}.</p>
            <div class="see_more_btn">
                <button id="${projet.name}">Voir plus</button>
            </div>
        </div>

    `;
    buttons.push(projet.name);
});

for (let i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i]).addEventListener('click', () => {
        const name = buttons[i];
        change_page(name);
    });
}

function change_page(name) {
    let idx;
    for (let i = 0; i < PROJETS.length; i++) {
        if (PROJETS[i].name === name) {
            idx = i;
            break;
        }
    }

    const PROJET = PROJETS[idx];
    sessionStorage.setItem('projets', JSON.stringify(PROJETS));
    sessionStorage.setItem('projet', idx);

    const page = `
    <!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>X-verse (${PROJET.name})</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/projet.css">
    <link rel="shortcut icon" href="../assets/images/xverse.jpg" type="image/x-icon">
</head>
<body>
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
                <img src="${PROJET.icon}" alt="C-Learning">
            </div>
            <div class="app-name-container">
                <p class="app-name">${PROJET.name}</p>
                <a href="#" class="app-entreprise">${PROJET.entreprise}</a>
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
            <video controls loop autoplay>
                <source src="../assets/videos/C-Learning/1.mp4">
            </video>
        </div>

        <!-- Application Description -->
        <div class="app-description-container">
            <p class="title">A propos de l'application</p>
            <p class="description">${PROJET["big-description"]}</p>
        </div>
    </main>

    <footer></footer>
    <script src="../javascript/main.js"></script>
    <script src="../javascript/projet.js"></script>
</body>
</html>
    `;
    const win = window.open('../pages/projets.html', '_blank');
    win.document.write(page);
}