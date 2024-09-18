/**4. Clasificación de Calificaciones
Crea una función que tome una calificación numérica (entre 0 y 100) como argumento y clasifique la calificación como "Sobresaliente",
"Notable", "Aprobado" o "Reprobado". Muestra el resultado en la consola.

Pista: Puedes usar una combinación de if y else if para manejar
 diferentes rangos de calificaciones. Considera el uso de una función
 de mapeo o de un objeto para simplificar la lógica de clasificación. */
function notas(num) {
    String;
    var mensaje = "";
    if (num >= 90) {
        mensaje = "Sobresaliente";
    }
    else if (num >= 70 && num < 90) {
        mensaje = "Notable";
    }
    else if (num >= 50 && num < 70) {
        mensaje = "Aprobado";
    }
    else {
        mensaje = "Suspenso";
    }
    return mensaje;
}
msg = notas(75);
console.log(msg);
