// Crea una nueva promesa
const solicitud = new Promise((resolve, reject) => {
    // Define una constante llamada 'responde' y le asigna el valor "resolve"
    const responde = "resolve";

    // Verifica si el valor de 'responde' es igual a "resolve"
    if (responde === "resolve") {
        // Si la condición es verdadera, llama a la función 'resolve' con el mensaje "La promesa se cumplió"
        resolve("La promesa se cumplió");
    } else {
        // Si la condición es falsa, llama a la función 'reject' con el mensaje "La promesa no se cumplió"
        reject("La promesa no se cumplió");
    }
});

// Maneja el resultado de la promesa y muestra el mensaje correspondiente en la consola
solicitud
    .then(mensaje => {
        // Se ejecuta si la promesa se resuelve exitosamente
        console.log(mensaje);
    })
    .catch(error => {
        // Se ejecuta si la promesa es rechazada
        console.log(error);
    });
