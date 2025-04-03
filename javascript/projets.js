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
        "url-entreprise": "https://github.com/darkproot",
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
        "url-entreprise": "https://github.com/darkproot",
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
        "url-entreprise": "https://github.com/darkproot",
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
    sessionStorage.setItem('projet', JSON.stringify(PROJET));

    window.location.href = "../pages/projet.html";
}