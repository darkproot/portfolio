var container = document.querySelector(".container");
const PROJETS = [
    {
        "name": "C Learning",
        "description": "Une application pour apprendre a programmer en C",
        "icon": "../assets/images/C-Learning.png",
        "url": "https://github.com/darkproot/C-Learning-"
    },
    {
        "name": "Preparix",
        "description": "Une application pour apprendre a programmer en Python",
        "icon": "../assets/images/preparix.png",
        "url": "https://github.com/darkproot/portfolio"
    },
    {
        "name": "Chatx",
        "description": "Une application pour faire communiquer localement deux machines",
        "icon": "../assets/images/chatx.png",
        "url": "https://github.com/darkproot/Chatx"
    },
];

container.innerHTML = "";
PROJETS.forEach((projet) => {
    container.innerHTML += `
        <div class="card">
            <div class="image">
                <img src="${projet.icon}">
            </div>
            <p id="name">${projet.name}</p>
            <p id="description">${projet.description}.</p>
            <div class="see_more_btn">
                <button><a href="${projet.url}">Voir plus</a></button>
            </div>
        </div>

    `;
});