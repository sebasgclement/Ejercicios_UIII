function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}


const matrizEjemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimirMatriz(matrizEjemplo);

