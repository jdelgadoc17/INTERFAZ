/**6. Juego Automático de Piedra, Papel o Tijera
Crea una función que simule un juego de "Piedra, Papel o Tijera" entre dos participantes, donde ambos seleccionan su opción de forma aleatoria. Genera un número aleatorio entre 0 y 2 para cada jugador y determina el ganador. Muestra el resultado del juego en la consola.

Pista: Utiliza Math.random() para generar dos números aleatorios entre 0 y 2, donde cada número corresponde a una opción: 0 para "Piedra", 1 para "Papel", 2 para "Tijera". Usa una función para convertir estos números en sus equivalentes de "Piedra", "Papel" o "Tijera" para facilitar la legibilidad del código. Luego, implementa una estructura condicional if-else o switch para comparar las opciones de ambos jugadores y determinar el resultado del juego. */

const jug1={
    nombre:"javier",
    eleccion :Math.floor(Math.random()*2)

}

const jug2={
    nombre:"irene",
    eleccion :Math.floor(Math.random()*2)

}

const piedra={
    nombre:"piedra",
    numero:0
}

const papel={
    nombre:"papel",
    numero:1
}

const tijera={
    nombre:"tijera",
    numero:2
}

function jugar(num_jug1:number, num_jug2:number):string{
    let mensaje:string="";
    if(num_jug1==num_jug2){
        mensaje="EMPATE";


    }else if(num_jug1==0 && num_jug2==2){
        mensaje=`Gana ${jug2.nombre}`;

    }else if(num_jug1==0 && num_jug2==1){
        mensaje=`Gana ${jug2.nombre}`;


    }else if(num_jug1==1&&num_jug2==2){
        mensaje=`Gana ${jug2.nombre}`;


    }else if(num_jug1==1&&num_jug2==0){
        mensaje=`Gana ${jug1.nombre}`;

    }else if(num_jug1==2&&num_jug2==0){
        mensaje=`Gana ${jug2.nombre}`;

    }else if(num_jug1==2&&num_jug2==1){
        mensaje=`Gana ${jug1.nombre}`;


    }

    return mensaje;


}

let juego=jugar(jug1.eleccion, jug2.eleccion);
console.log(`Jugador: ${jug1.nombre} Eleccion: ${jug1.eleccion}`)
console.log(`Jugador: ${jug2.nombre} Eleccion: ${jug2.eleccion}`)

console.log(juego);