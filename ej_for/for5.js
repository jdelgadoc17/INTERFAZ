/**5. Bucle for...in para Contar Propiedades de un Objeto
Crea un objeto que contenga algunas propiedades simples, como a, b y c. Usa un bucle for...in para contar el número total de propiedades en el objeto e imprimir el resultado. */
var instituto = {
    nombre: "norba",
    alumnos: 600,
    cuidad: "caceres"
};
var contt = 0;
for (var dato in instituto) {
    contt++;
}
console.log(contt);
