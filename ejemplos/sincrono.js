/**
 * Función que imprime "cuatro" en la consola.
 */
function cuatro () {
    console.log("cuatro");  // Imprime "cuatro" en la consola.
}

/**
 * Función que imprime "tres" en la consola y luego llama a la función 'cuatro'.
 */
function tres () {
    console.log("tres");  // Imprime "tres" en la consola.
    cuatro();  // Llama a la función 'cuatro'.
}

/**
 * Función que imprime "dos" en la consola y luego llama a la función 'tres'.
 */
function dos () {
    console.log("dos");  // Imprime "dos" en la consola.
    tres();  // Llama a la función 'tres'.
}

/**
 * Función que imprime "uno" en la consola y luego llama a la función 'dos'.
 */
function uno () {
    console.log("uno");  // Imprime "uno" en la consola.
    dos();  // Llama a la función 'dos'.
}

// Llama a la función 'uno'.
uno();
