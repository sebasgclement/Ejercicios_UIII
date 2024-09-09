function empiezanConA(arr) {
    return arr.filter(palabra => palabra.charAt(0).toLowerCase() === 'a');
}


console.log(empiezanConA(['Amigo', 'amor', 'Casa', 'auto', 'árbol']));
console.log(empiezanConA(['Gato', 'Aire', 'sol', 'arena']));
console.log(empiezanConA(['Perro', 'luz', 'estrella']));
