"use strict";
/**3. Pirámide de Asteriscos
Dibuja una pirámide de n filas. La primera fila tiene un asterisco centrado, y cada fila subsiguiente tiene dos asteriscos más, formando una pirámide.

Ejemplo para n = 5:

    *
   ***
  *****
 *******
********* */
Object.defineProperty(exports, "__esModule", { value: true });
function triangulo3(num) {
    for (var i = 0; i < num; i++) {
        var fila = '';
        for (var j = 0; j < num - i - 1; j++) {
            fila += ' ';
        }
        for (var j = 0; j < (2 * i + 1); j++) {
            fila += '*';
        }
        console.log(fila);
    }
}
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Dime el número de asteriscos: ', function (input) {
    var num = parseInt(input);
    triangulo3(num);
    rl.close();
});
