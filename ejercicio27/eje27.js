function numerosAPalabras(numeros) {
    const palabras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

    return numeros.map(numero => palabras[numero]);
}


const numerosEjemplo = [0, 2, 3, 5, 7, 9];
const resultado = numerosAPalabras(numerosEjemplo);
console.log(resultado); 

