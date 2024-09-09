function bmi(peso, altura) {
    const bmiValue = peso / (altura * altura);

    if (bmiValue < 18.5) {
        return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

console.log(bmi(60, 1.70)); // "Normal"
console.log(bmi(50, 1.75)); // "Bajo de peso"
console.log(bmi(80, 1.75)); // "Sobrepeso"
console.log(bmi(95, 1.75)); // "Obeso"
