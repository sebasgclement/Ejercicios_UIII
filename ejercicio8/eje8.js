function sumarRango(nI, nF) {
    acu = 0;
    for (let i = nI; i <= nF; i++) {
        acu += i;
    }
    return `La suma del rango entre ${nI} y ${nF} es ${acu}`
}

try {
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    var resultado;

    if (num1 > num2){
        resultado = sumarRango(num2, num1);
    } else{
        resultado = sumarRango(num1, num2);
    }

    let h1 = document.getElementById("pr");
    h1.textContent = resultado;
    
} catch (error) {
    console.error("Error de tipo");
}

//alert(resultado);