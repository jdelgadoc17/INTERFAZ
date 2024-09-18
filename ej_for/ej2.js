"use strict";
/**2. Cuadrado de Asteriscos
Dibuja un cuadrado de n x n asteriscos. Cada fila debe tener exactamente n asteriscos.

Ejemplo para n = 4:

****
****
****
**** */
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Dime el número de asteriscos: ', function (input) {
    var num = parseInt(input);
    triangulo2(num);
    rl.close();
});
function triangulo2(num) {
    for (var i = 0; i < num; i++) {
        var fila = '';
        for (var j = 0; j < num; j++) {
            fila += '*';
        }
        console.log(fila);
    }
}
