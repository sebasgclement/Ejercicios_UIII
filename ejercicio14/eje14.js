function sumarArreglo(numeros, inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += numeros[i];
    }
    return suma;
}


console.log(sumarArreglo([1, 2, 3, 4, 5], 1, 3));
console.log(sumarArreglo([10, 20, 30, 40, 50], 0, 2));
console.log(sumarArreglo([5, 15, 25, 35], 1, 3));
