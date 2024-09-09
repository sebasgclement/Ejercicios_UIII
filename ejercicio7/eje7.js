function contarRango(li, ls) {
    a=0;
    for (let i = li + 1; i < ls; i++) {
        a++;
    }
    return "La cantidad de números entre estos rangos es: " + a;
}

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let resultado;

if( num1 > num2){
    resultado = contarRango(num2, num1);
} else{
    resultado = contarRango(num1, num2);
}
console.log(resultado);

let h1 = document.getElementById("pr");
h1.textContent = resultado;