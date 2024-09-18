/*1. Comprobación de Número Positivo, Negativo o Cero
Escribe una función que tome un número como argumento y determine si es positivo, 
negativo o cero. Muestra el resultado en la consola.*/ 

function tipo(num:number){String
    if(num==0){
        console.log(`${num} es cero`)

    }else if(num>0){
        console.log(`${num} es mayor a cero`)

    }else if(num<0){
        console.log(`${num} es menor a cero`)

    }

}

let num = tipo(7)
console.log(num)