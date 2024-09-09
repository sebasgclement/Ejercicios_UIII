function fizzBuzz(num) {
    try {
        if (num % 3 ==0 && num %5 ==0){
            return "fizzBuzz";
        } else if (num % 5 == 0){
            return "buzz";
        } else if(num % 3==0){
            return "fizz";
        } else{
            return num;
        }
        }
        
    catch (error) {
        console.error("Error de tipo", error.message);
    }
    
}

let numero = parseInt(prompt("Ingrese un número"));
let resultado = fizzBuzz(numero);

let h1 = document.getElementById("pr");

h1.textContent = resultado;