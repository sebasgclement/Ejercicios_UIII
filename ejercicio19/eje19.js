function min(arr) {
    if (arr.length === 0) return undefined;

    let minimo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimo) {
            minimo = arr[i];
        }
    }

    return minimo;
}


console.log(min([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(min([-10, 0, 5, 3]));
console.log(min([]));