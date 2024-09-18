/**3. Pirámide de Asteriscos
Dibuja una pirámide de n filas. La primera fila tiene un asterisco centrado, y cada fila subsiguiente tiene dos asteriscos más, formando una pirámide.

Ejemplo para n = 5:

    *
   ***
  *****
 *******
********* */

function triangulo3(num:number):void {
    for (let i = 0; i < num; i++) {
        let fila = '';

        for (let j = 0; j < num - i - 1; j++) {
            fila += ' '; 
        }

        
        for (let j = 0; j < (2 * i + 1); j++) {
            fila += '*'; 
        }

        console.log(fila); 
    }
}

triangulo3(5);
