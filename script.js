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
                    { nombre: "Tomates hermosos", cantidad: "4" },
                    { nombre: "Cebolla picada", cantidad: "250 g" },
                    { nombre: "Pimiento verde", cantidad: "200 g" },
                    { nombre: "Pimiento rojo", cantidad: "200 g" },
                    { nombre: "Dientes de ajo", cantidad: "2" },
                    { nombre: "Calabacín", cantidad: "300 g" },
                    { nombre: "Aceite de oliva virgen extra", cantidad: "" },
                    { nombre: "Pimienta negra molida", cantidad: "" },
                    { nombre: "Sal", cantidad: "" }
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
                    { nombre: "Patatas", cantidad: "3 ó 4" },
                    { nombre: "Aceite de oliva", cantidad: "" },
                    { nombre: "Sal", cantidad: "" }
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
                    { nombre: "Tomates maduros", cantidad: "1 kg" },
                    { nombre: "Pepino", cantidad: "1" },
                    { nombre: "Pimiento verde", cantidad: "1" },
                    { nombre: "Diente de ajo", cantidad: "1" },
                    { nombre: "Pan duro", cantidad: "50 g" },
                    { nombre: "Aceite de oliva virgen extra", cantidad: "100 ml" },
                    { nombre: "Vinagre de vino", cantidad: "30 ml" },
                    { nombre: "Sal", cantidad: "al gusto" }
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
                    { nombre: "Patatas medianas", cantidad: "5" },
                    { nombre: "Huevos", cantidad: "6" },
                    { nombre: "Cebolla (opcional)", cantidad: "1" },
                    { nombre: "Aceite de oliva", cantidad: "" },
                    { nombre: "Sal", cantidad: "al gusto" }
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

    // Imagen de la receta
    const image = document.createElement("img");
    image.setAttribute("src", receta.imagen);
    image.setAttribute("alt", receta.nombre);
    image.classList.add("detalle-imagen");
    container.appendChild(image);

    // Botón de audio (SVG personalizado)
    // Reproductor de audio en la página para que no vaya a otra página
    const audioPlayer = document.createElement("audio");
audioPlayer.setAttribute("controls", ""); // Añade controles para reproducir el audio
audioPlayer.setAttribute("src", receta.audio); // Enlace al archivo de audio
audioPlayer.classList.add("audio-player");
container.appendChild(audioPlayer);


    // Línea morada antes de "Ingredientes"
    const hr = document.createElement("hr");
    hr.classList.add("linea-morada");
    container.appendChild(hr);

    // Título "Ingredientes" en negritas
    const ingredientesTitle = document.createElement("h2");
    ingredientesTitle.textContent = "Ingredientes";
    ingredientesTitle.classList.add("negrita");
    container.appendChild(ingredientesTitle);

    // Tabla de ingredientes con puntos y alineación
    const ingredientesTable = document.createElement("table");
    ingredientesTable.classList.add("ingredientes-tabla");

    receta.ingredientes.forEach(ingrediente => {
        const row = document.createElement("tr");
    
        const descripcion = document.createElement("td");
        descripcion.textContent = ingrediente.nombre; // Nombre del ingrediente
        descripcion.classList.add("descripcion");
        row.appendChild(descripcion);
    
        const cantidad = document.createElement("td");
        cantidad.textContent = ingrediente.cantidad; // Cantidad o unidades
        cantidad.classList.add("cantidad");
        row.appendChild(cantidad);
    
        ingredientesTable.appendChild(row);
    });
    
    

    container.appendChild(ingredientesTable);

    // Pasos de elaboración
    const pasosTitle = document.createElement("h2");
    pasosTitle.textContent = "Elaboración";
    pasosTitle.classList.add("negrita");
    container.appendChild(pasosTitle);

    const pasosList = document.createElement("ol");
    receta.pasos.forEach(paso => {
        const li = document.createElement("li");
        li.textContent = paso;
        pasosList.appendChild(li);
    });
    container.appendChild(pasosList);
}
