"use strict";
/**3. Bucle do...while para Entrada de Usuario
Escribe un programa que use un bucle do...while para pedir al usuario un número entre 1 y 10. Continúa solicitando hasta que el usuario introduzca un número válido.

Pista: Utiliza la instrucción prompt() para solicitar datos al usuario en TypeScript. Esta función abre un cuadro de diálogo que permite al usuario introducir una cadena de texto. Para obtener datos numéricos, convierte la entrada del usuario usando parseInt() o parseFloat() según sea necesario. Asegúrate de manejar posibles entradas no válidas mediante condicionales if o un bucle while para solicitar repetidamente la entrada hasta que sea correcta. */
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var correcto = false;
do {
    rl.question('Dame un numero entre el 1 y 10', function (input) {
        var num = parseInt(input);
        if (num <= 1 && num <= 10) {
            correcto = true;
            console.log('CORRECTO');
        }
        else {
            console.log('Intentalo de nuevo');
        }
        rl.close();
    });
} while (correcto = false);
