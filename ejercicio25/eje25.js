function terminanConS(arr) {
    return arr.filter(palabra => palabra.charAt(palabra.length - 1).toLowerCase() === 's');
}


console.log(terminanConS(['Amigos', 'sol', 'Casas', 'perros', 'coche']));
console.log(terminanConS(['Gatos', 'luz', 'lentes', 'ratón']));
console.log(terminanConS(['Luna', 'estrella', 'piedra']));
