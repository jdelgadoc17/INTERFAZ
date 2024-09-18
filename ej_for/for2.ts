/**2. Bucle while para Factorial
Usa un bucle while para imprimir el factorial de un número entero dado. El factorial de 5 (5!) es 5×4×3×2×1=120. */
let num=5;
let total=1;
let cont=0;
while(cont<num){
    cont++;
    total=total*cont


}

console.log(`El factorial de ${num} es: ${total}`);