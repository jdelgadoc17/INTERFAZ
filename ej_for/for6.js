/**6. Método forEach para Sumar Elementos de un Arreglo
Dado un array de números, usa el método forEach para calcular y mostrar la suma de todos los números.

Pista: Usa el método forEach() en TypeScript para iterar sobre los elementos de un array y ejecutar una función para cada elemento. */
var numeros = [4, 45, 26, 12, 0, 458];
var totall = 0;
numeros.forEach(function (element) {
    totall = totall + element;
});
console.log("La suma total es de: ".concat(totall));
