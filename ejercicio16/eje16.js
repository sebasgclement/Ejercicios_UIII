function capitalizar(str) {
    if (str.length === 0) return str;

    return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(capitalizar("hola"));
console.log(capitalizar("mundo"));
console.log(capitalizar(""));
