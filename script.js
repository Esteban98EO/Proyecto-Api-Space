// URL de la API de la NASA para obtener imágenes del cosmos
const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

// Función asincrónica para obtener y mostrar imágenes desde la API de la NASA
async function listaImagenes() {
    try {
        // Realiza una solicitud GET a la API de la NASA y espera la respuesta
        let fetchImage = await fetch(url);
        
        // Convierte la respuesta a formato JSON
        let datosImagenes = await fetchImage.json();

        // Selecciona el elemento HTML donde se mostrarán las imágenes
        const card = document.querySelector("[data-ul]");

        // Itera sobre cada objeto de imagen en datosImagenes y crea HTML dinámico para cada imagen
        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>`;

            // Agrega el contenido generado al elemento HTML seleccionado
            card.innerHTML = card.innerHTML + contenido;
        });
    } catch (error) {
        // Manejo de errores: muestra el error en la consola si la solicitud falla
        console.log(error);
    }
}

// Llama a la función listaImagenes para iniciar la carga de imágenes al cargar la página
listaImagenes();







/* 
//then y catch
// Función para obtener y mostrar las imágenes desde la API de la NASA
function listaImagenes() {
    // Realizamos una solicitud fetch a la URL especificada
    fetch(url)
        // Cuando la respuesta es recibida, la convertimos a JSON
        .then(response => response.json())
        // Una vez que obtenemos los datos en formato JSON, procedemos
        .then(datosImagenes => {
            // Mostramos los datos recibidos en la consola por propósitos de prueba
            console.log(datosImagenes);
            
            // Seleccionamos el elemento HTML donde mostraremos las imágenes
            const card = document.querySelector("[data-ul]");

            // Iteramos sobre cada elemento de datosImagenes
            datosImagenes.forEach(elemento => {
                // Creamos el contenido HTML para cada imagen utilizando los datos recibidos
                const contenido = `<li class="card">
                    <img class="card__image" src="${elemento.url}" alt="imagen">
                    <h3 class="card__title">${elemento.title}</h3>
                </li>`;
                
                // Agregamos el contenido generado al elemento HTML seleccionado
                card.innerHTML = card.innerHTML + contenido;
            });
        })
        // Capturamos cualquier error que pueda ocurrir durante la solicitud o procesamiento
        .catch(error => console.log(error));
}

// Llamamos a la función listaImagenes para ejecutarla cuando se carga la página
listaImagenes();
 */