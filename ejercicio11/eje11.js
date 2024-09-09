function sumarArreglo(numeros) {
    return numeros.reduce((suma, numero) => suma + numero, 0);
}

console.log(sumarArreglo([1, 2, 3, 4, 5]));
console.log(sumarArreglo([10, 20, 30]));
console.log(sumarArreglo([7, 8, 9]));
