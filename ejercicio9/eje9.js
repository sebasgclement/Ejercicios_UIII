function numeroDeAes (palabra = ""){
    c=0;

    for(let i=0; i < palabra.length; i++){
        if (palabra[i] === "a" || palabra[i] === "A"){
            c++;
        }
    }
    return "La cantidad de letras 'a' en la palabra es: " + c;
}


try {

    let word = prompt("Ingrese una palabra");
    
    let resultado = numeroDeAes(word);

    alert(resultado);

} catch (error) {
    console.error("Error");
}

