document.addEventListener("DOMContentLoaded", function () {
    const data = {
        recetas: [
            {
                id: "pisto-manchego",
                nombre: "Pisto Manchego",
                descripcion: "Delicioso plato tradicional de la cocina española.",
                imagen: "./images/pisto-manchego.jpg",
                audio: "./audios/pisto-manchego.mp3",
                ingredientes: [
                    "4 tomates hermosos",
                    "250 g de cebolla picada",
                    "200 g de pimiento verde",
                    "200 g de pimiento rojo",
                    "2 dientes de ajo",
                    "300 g de calabacín",
                    "Aceite de oliva virgen extra",
                    "Pimienta negra molida",
                    "Sal"
                ],
                pasos: [
                    "Lava y corta todas las verduras en trozos pequeños.",
                    "Calienta aceite de oliva en una sartén grande a fuego medio.",
                    "Añade la cebolla y los ajos picados y sofríe hasta que estén transparentes.",
                    "Incorpora los pimientos y el calabacín. Cocina durante 10 minutos.",
                    "Añade los tomates pelados y troceados. Cocina a fuego lento hasta que se reduzca el líquido y las verduras estén tiernas.",
                    "Añade sal y pimienta al gusto. Sirve caliente."
                ]
            },
            {
                id: "patatas-fritas",
                nombre: "Patatas Fritas",
                descripcion: "Receta clásica de patatas fritas caseras.",
                imagen: "./images/patatas-fritas.jpg",
                audio: "./audios/patatas-fritas.mp3",
                ingredientes: [
                    "3 ó 4 patatas",
                    "Aceite de oliva",
                    "Sal"
                ],
                pasos: [
                    "Pela las patatas y córtalas en tiras.",
                    "Calienta aceite en una sartén a fuego medio-alto.",
                    "Fríe las patatas hasta que estén doradas y crujientes.",
                    "Escurre el exceso de aceite y añade sal al gusto.",
                    "Sirve como acompañamiento o snack."
                ]
            }
        ]
    };

    const currentPage = window.location.pathname;

    if (currentPage.includes("index.html") || currentPage === "/") {
        mostrarGaleria(data.recetas);
    } else if (currentPage.includes("receta.html")) {
        const queryParams = new URLSearchParams(window.location.search);
        const recetaId = queryParams.get("id");
        const receta = data.recetas.find(r => r.id === recetaId);
        if (receta) mostrarDetalle(receta);
    }
});

function mostrarGaleria(recetas) {
    const container = document.getElementById("content");

    recetas.forEach(receta => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.setAttribute("src", receta.imagen);
        image.setAttribute("alt", receta.nombre);
        image.classList.add("card-image");
        card.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = receta.nombre;
        card.appendChild(title);

        card.addEventListener("click", () => {
            window.location.href = `receta.html?id=${receta.id}`;
        });

        container.appendChild(card);
    });
}

function mostrarDetalle(receta) {
    document.getElementById("receta-titulo").textContent = receta.nombre;

    const container = document.getElementById("content");

    const image = document.createElement("img");
    image.setAttribute("src", receta.imagen);
    image.setAttribute("alt", receta.nombre);
    image.classList.add("detalle-imagen");
    container.appendChild(image);

    const audioLink = document.createElement("a");
    audioLink.setAttribute("href", receta.audio);
    audioLink.classList.add("audio-link");
    audioLink.innerHTML = `<img src="./images/play-icon.png" alt="Icono de Play" class="audio-icon"> Escucha la receta`;
    container.appendChild(audioLink);

    const ingredientesTitle = document.createElement("h2");
    ingredientesTitle.textContent = "Ingredientes";
    container.appendChild(ingredientesTitle);

    const ingredientesList = document.createElement("ul");
    receta.ingredientes.forEach(ingrediente => {
        const li = document.createElement("li");
        li.textContent = ingrediente;
        ingredientesList.appendChild(li);
    });
    container.appendChild(ingredientesList);

    const pasosTitle = document.createElement("h2");
    pasosTitle.textContent = "Elaboración";
    container.appendChild(pasosTitle);

    const pasosList = document.createElement("ol");
    receta.pasos.forEach(paso => {
        const li = document.createElement("li");
        li.textContent = paso;
        pasosList.appendChild(li);
    });
    container.appendChild(pasosList);
}
