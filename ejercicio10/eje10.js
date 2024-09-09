function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(numeroDeCaracteres("programacion", "a"));
console.log(numeroDeCaracteres("javascript", "j"));
console.log(numeroDeCaracteres("hola mundo", "o"));
