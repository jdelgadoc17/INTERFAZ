/**1. Triángulo Rectángulo
Dibuja un triángulo rectángulo con * de n filas. Cada fila debe contener un número creciente de asteriscos, comenzando con 1 en la primera fila y aumentando en 1 en cada fila subsiguiente.

Ejemplo para n = 5: */
function triangulo1(num_filas) {
    for (var i = 0; i < num_filas; i++) {
        console.log("* ");
    }
}
triangulo1(5);
