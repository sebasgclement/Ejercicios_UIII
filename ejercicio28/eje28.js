function palabrasANumeros(palabras) {
    const numeros = {
        'cero': 0,
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'siete': 7,
        'ocho': 8,
        'nueve': 9
    };

    return palabras.map(palabra => numeros[palabra.toLowerCase()] !== undefined ? numeros[palabra.toLowerCase()] : -1);
}


const palabrasEjemplo = ['uno', 'tres', 'diez', 'seis', 'nueve'];
const resultado = palabrasANumeros(palabrasEjemplo);
console.log(resultado); 

