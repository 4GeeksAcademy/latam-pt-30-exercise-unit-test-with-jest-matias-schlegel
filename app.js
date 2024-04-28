// ejercicio 3
// console.log("Hello World")

// ejercicio 4
function sum (a, b) {
    return a + b;
}
//console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollars) {
    // Convertir dólares a euros
    let valueInEuro = valueInDollars / 1.07; // la cant. de dolares se divide por el valor de 1 euro en dólares (1.07)
    // Convertir euros a yenes japoneses
    let valueInYen = valueInEuro * 156.5; // se multiplica por el valor de 1 euro en yenes japoneses (156.5)
    return valueInYen;
}

const fromYenToPound = function(amountInYen) {
    // Convertir yenes a euros
    let amountInEuro = amountInYen / 156.5;
    // Convertir euros a libras esterlinas
    let amountInPound = amountInEuro * 0.87;
    return amountInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };