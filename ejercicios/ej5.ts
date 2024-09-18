/**5. Conversión de Temperatura
Escribe una función que tome una temperatura en grados Celsius como argumento
y la convierta a grados Fahrenheit. Si la temperatura es mayor a 30 °C, muestra "Hace calor", 
si es menor o igual a 10 °C, muestra "Hace frío", de lo contrario, muestra "Temperatura moderada".

Pista: Usa la fórmula de conversión de Celsius a Fahrenheit y toFixed() 
para limitar el número de decimales en la salida. Para clasificar la temperatura, 
utiliza condicionales y considera funciones auxiliares que manejen diferentes mensajes de salida según los rangos de temperatura. */

function conversion(temp:number):number{

    let temp_fanh = temp*1.8+32;
    return temp_fanh;

}

function comprobar_(temp:number):string{
    let mensaje:string="";
    
    if(temp>30){
        mensaje="Hace calor";
    }else if(temp<=10){
        mensaje="Hace frio";
    }else{
        mensaje="Temperatura moderada";
    
    }
    return mensaje;


}


let temp_f=conversion(25);
console.log(`Celsius: ${25} | Fanhrenheit: ${temp_f}`)
let mensaje=comprobar_(25);
console.log(mensaje)

