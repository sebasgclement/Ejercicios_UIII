function posiciones(arr) {
    let posicionesPares = [];
    arr.forEach((num, index) => {
        if (num % 2 === 0) {
            posicionesPares.push(index);
        }
    });
    return posicionesPares;
}


console.log(posiciones([1, 2, 3, 4, 5, 6]));
console.log(posiciones([10, 15, 20, 25, 30]));
console.log(posiciones([7, 9, 11]));
