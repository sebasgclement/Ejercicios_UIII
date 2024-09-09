function multiplicarArreglo(numeros) {
    return numeros.reduce((producto, numero) => producto * numero, 1);
}

console.log(multiplicarArreglo([1, 2, 3, 4]));
console.log(multiplicarArreglo([5, 10, 2]));
console.log(multiplicarArreglo([7, 8, 9]));
