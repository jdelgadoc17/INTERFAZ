/**2. Cuadrado de Asteriscos
Dibuja un cuadrado de n x n asteriscos. Cada fila debe tener exactamente n asteriscos.

Ejemplo para n = 4:

****
****
****
**** */

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function triangulo2(num:number):void {
    for (let i = 0; i < num; i++) {
        let fila = '';
        for (let j = 0; j < num; j++) {
            fila += '*'; 
        }
        console.log(fila); 
    }
}

rl.question('Dime el número de asteriscos: ', (input: string) => {
    let num = parseInt(input); 
    triangulo2(num);

    rl.close(); 
});





