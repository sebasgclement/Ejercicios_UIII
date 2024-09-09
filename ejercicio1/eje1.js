function contraseniaValida(contrasena) {
    try {
            if (contrasena === "2Fj(jjbFsuj" || contrasena=== "eoZiugBf&g9"){
                return true;
            } else{
                return false;
            }
        }
    catch (error) {
        console.error("Error de tipo");
    }   
}

let pass = parseInt(prompt("Ingrese la contraseña"));

console.log(contraseniaValida(pass));