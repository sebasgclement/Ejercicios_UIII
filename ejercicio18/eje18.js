function max(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let maxNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    return maxNum;
}

console.log(max([3, 7, 2, 9, 4]));
console.log(max([-5, -2, -10, -1]));
console.log(max([15]));
console.log(max([]));
