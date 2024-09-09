function removerCeros(nums=[]) {
    sinCero = [];
    sinCero = nums.filter((element) => {
        return element != 0;
    });
    return sinCero;
    }

let arreglo = [3, 4, 0, 2, 0, 1, 0];

let nuevoArreglo = removerCeros(arreglo);

nuevoArreglo.forEach(element => {
    console.log(element);
    
});

let h1 = document.getElementById("pr");
h1.textContent = nuevoArreglo;

