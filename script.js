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
            },
            {
                id: "gazpacho",
                nombre: "Gazpacho",
                descripcion: "Una sopa fría refrescante y saludable, perfecta para el verano.",
                imagen: "./images/gazpacho.jpg",
                audio: "./audios/gazpacho.mp3",
                ingredientes: [
                    "1 kg de tomates maduros",
                    "1 pepino",
                    "1 pimiento verde",
                    "1 diente de ajo",
                    "50 g de pan duro",
                    "100 ml de aceite de oliva virgen extra",
                    "30 ml de vinagre de vino",
                    "Sal al gusto"
                ],
                pasos: [
                    "Lava los tomates, el pepino y el pimiento.",
                    "Pela el ajo y trocea todos los ingredientes.",
                    "Añade el pan duro remojado en agua y tritúralo todo con una batidora.",
                    "Incorpora el aceite, el vinagre y la sal, y mezcla hasta obtener una textura homogénea.",
                    "Enfría en la nevera durante al menos 2 horas antes de servir."
                ]
            },
            {
                id: "tortilla-patatas",
                nombre: "Tortilla de Patatas",
                descripcion: "Un clásico de la cocina española, sencillo y delicioso.",
                imagen: "./images/tortilla-patatas.jpg",
                audio: "./audios/tortilla-patatas.mp3",
                ingredientes: [
                    "5 patatas medianas",
                    "6 huevos",
                    "1 cebolla (opcional)",
                    "Aceite de oliva",
                    "Sal al gusto"
                ],
                pasos: [
                    "Pela las patatas y córtalas en rodajas finas.",
                    "Pica la cebolla (si la usas).",
                    "Fríe las patatas y la cebolla en abundante aceite caliente hasta que estén tiernas.",
                    "Bate los huevos en un bol grande, añade sal y mezcla con las patatas y la cebolla.",
                    "Vierte la mezcla en una sartén con un poco de aceite y cocina a fuego medio.",
                    "Dale la vuelta con un plato y cocina por el otro lado hasta que esté dorada.",
                    "Sirve caliente o a temperatura ambiente."
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
