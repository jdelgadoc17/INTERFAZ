/**3. Verificación de Año Bisiesto
Escribe una función que tome un año como argumento y determine si es un año bisiesto. Muestra el resultado en la consola.

Pista: La lógica para determinar un año bisiesto implica el uso de operadores lógicos (&&, ||). Considera encapsular la verificación en una función separada para mejorar la legibilidad y reutilización del código. */


function comprobar_bisiesto(year:number):boolean{
    return year%4==0?true:false;
}

let bool:boolean = comprobar_bisiesto(2024);
let mensaje__:string = bool ? console.log(`El año ${2024} SI bisiesto`) : console.log(`El año ${2024} NO es bisiesto`);
console.log(mensaje__);