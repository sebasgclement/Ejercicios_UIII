function distancia(str1, str2) {
    
    const longitudDiferencia = Math.abs(str1.length - str2.length);

    
    let contadorDiferentes = 0;

    
    const longitudMinima = Math.min(str1.length, str2.length);
    for (let i = 0; i < longitudMinima; i++) {
        if (str1[i] !== str2[i]) {
            contadorDiferentes++;
        }
    }

    
    return contadorDiferentes + longitudDiferencia;
}


console.log(distancia("abc", "abd"));
console.log(distancia("abcde", "abxyz"));
console.log(distancia("abc", "ab"));
console.log(distancia("abcd", "ab"));
