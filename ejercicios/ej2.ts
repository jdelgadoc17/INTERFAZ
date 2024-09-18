/**2. Verificación de Contenido de Texto
Crea una función que tome una cadena como argumento y verifique si contiene una palabra específica (por ejemplo, "typescript"). 
Muestra "Contiene la palabra 'typescript'" o "No contiene la palabra 'typescript'" en la consola según corresponda.

Pista: Utiliza el método includes() de las cadenas de texto para verificar 
si la palabra deseada está presente. Recuerda que includes() 
es sensible a mayúsculas y minúsculas, así que podrías usar toLowerCase() para manejar ambos casos. */


function comprobar(palabra: string): boolean {
    return palabra.toLowerCase().includes('typescript');
}

let contiene: boolean = comprobar("programar");

let msg: string = contiene ? "La frase contiene 'typescript'" : "La frase no contiene 'typescript'";
console.log(msg);