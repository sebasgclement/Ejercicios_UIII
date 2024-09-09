function numAsteriscos(arr) {
    let contador = 0;

    for (let elemento of arr) {
        if (elemento === '*') {
            contador++;
        }
    }

    return contador;
}

// Código de prueba
console.log(numAsteriscos(['.', '*', '.', '*'])); // 2
console.log(numAsteriscos(['*', '*', '*'])); // 3
console.log(numAsteriscos([])); // 0
