function likes(numero) {
    if (numero >= 1000000) {
        return (numero / 1000000).toFixed(1).replace('.0', '') + 'M';
    } else if (numero >= 1000) {
        return (numero / 1000).toFixed(1).replace('.0', '') + 'K';
    } else {
        return numero.toString();
    }
}

console.log(likes(1400));
console.log(likes(34567));
console.log(likes(7456345));
console.log(likes(999));
