//Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//felicitaciones y decirle en cuantos intentos lo ha realizado. /*/

let numeroincognito = 50;
let usuario;
let intentos = 0;

while (usuario != 50) {
    usuario = Number(prompt("Ingrese un numero"));
    if (usuario > 50) {
        console.log("El numero ingresado es mayor.");
    } else if (usuario < 50) {
        console.log("El numero ingresado es menor.");
    } else if (usuario == 50) {
        console.log("Felicitaciones, acertaste al numero incognito.");
    }

    intentos++;
    console.log("Estas en el intento " + intentos);
}

// ejercicio 5. 
//Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let numero = 4;

for (divisores = 1; divisores <= numero; divisores++) {
    let resto = numero % divisores;
    if (resto == 0) {
        console.log(divisores + " es divisor de " + numero);
    }
}

//let objetos = ["vaso1", "vaso2", "vaso3", "vaso4", "vaso5", "vaso6", "vaso7", "vaso8", "vaso9", "vaso10"]

//for (let i = 0; i <= objetos.length; i++) {
  //  console.log(objetos[i]);
//}

// Ejercicio 9

//Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//muestre los numeros impares.


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for (i = 0; i < numeros.length; i++) {
  //  let impares = numeros[i] % 2;
    //if (impares !== 0) {
      //  console.log("Los siguientes numeros del array son: " + numeros[i]);{
    //}
