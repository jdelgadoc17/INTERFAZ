/**2. Cuadrado de Asteriscos
Dibuja un cuadrado de n x n asteriscos. Cada fila debe tener exactamente n asteriscos.

Ejemplo para n = 4:

****
****
****
**** */
function triangulo2(num) {
    for (var i = 0; i < num; i++) {
        var fila = '';
        for (var j = 0; j < num; j++) {
            fila += '*';
        }
        console.log(fila);
    }
}
triangulo2(6);
