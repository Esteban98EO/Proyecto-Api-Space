/**
 * Función que imprime "uno" en la consola y luego ejecuta otra función después de 2 segundos.
 * @param {function} dos - La función que se ejecutará después de 2 segundos.
 */
function uno(dos) {
    console.log("uno");  // Imprime "uno" en la consola.
    setTimeout(dos, 2000);  // Ejecuta la función 'dos' después de 2 segundos.
}

/**
 * Función que imprime "dos" en la consola.
 */
function dos() {
    console.log("dos");  // Imprime "dos" en la consola.
}

// Ejecuta la función 'uno' pasando 'dos' como argumento después de 5 segundos.
setTimeout(() => uno(dos), 5000);

// Ejecuta la función 'dos' inmediatamente.
dos();

// Define una función anónima y la asigna a la constante 'nombre'.
const nombre = function() {
    console.log("nombre");  // Imprime "nombre" en la consola.
};

// Ejecuta la función asignada a 'nombre'.
nombre();

// Define una función flecha y la asigna a la constante 'persona'.
const persona = () => console.log("Hola");  // Imprime "Hola" en la consola.

// Ejecuta la función flecha asignada a 'persona'.
persona();
