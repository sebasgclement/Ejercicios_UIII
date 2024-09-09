function password(str) {
    return str
        .toLowerCase()
        .replace(/\s/g, '')
        .replace(/a/g, '4')
        .replace(/e/g, '3')
        .replace(/i/g, '1')
        .replace(/o/g, '0');
}


console.log(password("Contraseña Ejemplo"));
console.log(password("Hola Mundo!"));
console.log(password("Password123"));
