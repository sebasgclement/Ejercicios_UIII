function capitalizar(palabra) {
    if (palabra.length === 0) {
        return palabra; 
    }
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

console.log(capitalizar("hola"));
console.log(capitalizar("mundo"));
console.log(capitalizar("javascript"));
