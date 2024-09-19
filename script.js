let url = "https://rickandmortyapi.com/api/character"

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        crearCard(data.results)
    });

let container = document.getElementById("container")

function crearCard(data) {
    let cardsHTML = ""

    data.forEach((personaje) => {
        cardsHTML += `
        <div class="card">
            <p class="nombre_card">${personaje.name}</p>
            <img src="${personaje.image}" alt="${personaje.name}">
                     
        </div>
        `
    })

    container.innerHTML = cardsHTML
}
