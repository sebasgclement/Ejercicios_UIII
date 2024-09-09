function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.40;
    } else {
        return 0;
    }
}

console.log(calcularImpuestos(25, 2000));
console.log(calcularImpuestos(17, 1500));
console.log(calcularImpuestos(19, 800)); 
