function pares(arr) {
    return arr.filter(num => num % 2 === 0);
}


console.log(pares([1, 2, 3, 4, 5, 6]));
console.log(pares([10, 15, 20, 25, 30]));
console.log(pares([7, 9, 11]));
