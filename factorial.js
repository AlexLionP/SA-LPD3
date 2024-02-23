/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes entradas para asegurarte que 
funcione correctamente:
5
120.
6
720.
Entrada: 
Salida:
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran.
*/
//Solución
//Se llama a prompt para solicitar al usuario introducir un número
const prompt  = require('prompt-sync')();
//Se crea una función que verifique que que el dato ingresado sea un número
function getInput() {
    let num = prompt("Ingrese un numero ");
    //Verificamos que sea un número por medio de la función "isNaN(),
    //esta da como resultado "true" si el dato es "NaN" y "false" si  no lo es
    if (isNaN(num)) {
        console.log("Error: El valor ingresado no es un número.");
        return getInput();
    } else {
        return Number(num);
    }
}
//Aquí se elabora la funció factorial que funciona por medio de recursividad
function factorial(n) {
    //Base de la recursividad
    if (n == 0 || n == 1) {
        return 1;
    } else {
        //Parte que funciona con recursividad
        return n * factorial(n - 1);
    }
}
let num = getInput();
console.log(`El factorial de ${num} es: ` + factorial(num));