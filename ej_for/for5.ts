/**5. Bucle for...in para Contar Propiedades de un Objeto
Crea un objeto que contenga algunas propiedades simples, como a, b y c. Usa un bucle for...in para contar el número total de propiedades en el objeto e imprimir el resultado. */

const instituto={
    nombre:"norba",
    alumnos:600,
    cuidad:"caceres"
}

let contt=0;

for(let dato in instituto){
    contt++;
}
console.log(contt)
