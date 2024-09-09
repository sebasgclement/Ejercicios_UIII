function transcribir(amino = "") {
    let palabra = amino.toLowerCase();
    let nuevaPalabra = "";
    for(i=0; i<palabra.length; i++){
        
        switch (palabra[i]) {
            case "g":
                nuevaPalabra.concat("c");
                break;
            case "c":
                nuevaPalabra.concat("g");
                break;
            case "t":
                nuevaPalabra.concat("a");
                break;
            case "a":
                nuevaPalabra.concat("u");
                break;
            default:
                nuevaPalabra.concat(palabra[i]);
                break;
        }
    }
    return nuevaPalabra.toUpperCase();
}

let word = prompt("Ingrese la cadena de aminoácidos");
let newWord = transcribir(word);

alert(newWord);