// <!-- ## Variables #1
// 1. Crea las variables "firstName" y "last_name".
// 2. Asigna tus valores.
// 3. Crea la variable "address" y asígnale el valor "main street".
// 4. Reasigna la dirección a "first street" más tarde.
// 5. Registra todos los valores en la constantes aplique a la consola    -->

const firstName = "guillermo";
const last_name = "sifuentes";

let address = "main street ";
address = "first estreet";

console.log(firstName, last_name, address);

/*
## Concatenate Strings #2
1. Crea las variables "street" y "country".
2. Asigna tus valores.
3. Crea la variable "fullMailingAddress" y asígnale
   el resultado de "street + country".
4. Recuerda agregar el espacio.
5. Registra "fullMailingAddress" en la consola.
*/

const street = "lima";
const country = "peru";

const fullMailingAddress = street + "" + country;

console.log(fullMailingAddress);

// ## Numbers #3

// 1. crear las variables "puntuación1", "puntuación2", "puntuación3" y
//    asignar valores (0-100)
// 2. calcular la puntuación total y la puntuación media, y asignarlas a las variables.
// 3. registre la puntuación total y la puntuación media

// 4. crea la variable "platos" y asigna 20
// 5. crea la variable "personas" y asigna 7
// 6. calcular placas restantes y asignar a la variable
// 7. agregue uno a las placas restantes
// 8. cree una variable de mensaje y muestre 'Hay (su valor va aquí) placas disponibles' - concatenación de cadenas
// 9. mensaje de registro

// */

const puntuación1 = 98;
const puntuación2 = 75;
const puntuación3 = 45;

const sumaTotal = puntuación1 + puntuación2 + puntuación3;
const promedio = sumaTotal / 3;

console.log(promedio);

const platos = 20;
const personas = 7;

let residual = 20 % 7;

residual++;

const mensaje = "hay " + residual + "su valor aqui";

console.log(mensaje);

//  ## Arrays #4

// 1. cree una matriz arrays de "frutas" y almacene algunos valores de frutas
// 2. configure el último elemento como número (aleatorio)
// 3. asignar primicias a la variable
// 4. reasignar el último elemento de la matriz a la fruta real
// 5. registrar tanto la variable de la primera fruta como la matriz de frutas completa
// */

const frutas = ["manzan", "naranja", "arandano", 50];

const primerFruta = frutas[0];
frutas[3] = "melon";

console.log(primerFruta, frutas);

// ## Functions #5

// 1. crear la función "calcularTotal"
// 2. agregue dos parámetros subTotal, impuestos
// 3. devolver la suma de parámetros

const calcularTotal = (subTotal, impuestos) => {
  return subTotal + impuestos;
};

// */// 4. crear 3 vars "pedido1","pedido2","pedido3"
// 5. Llame a CalcularResultado, pase algunos valores y asigne el resultado a cada pedido.
// 6. registrar los tres pedidos
// 7. refactorizar "calculateTotal" a expresión de función

const orden1 = calcularTotal(100, 100);
const orden2 = calcularTotal(50, 10);
const orden3 = calcularTotal(40, 10);

console.log(orden1, orden2, orden3);

const calcularTotal2 = function (subTotal, impuestos) {
  return subTotal + impuestos;
};

//esribe una funcionque determine si un numero dado es par

const numeroPar = (numero) => {
  return numero % 2 === 0;
};

console.log(numeroPar(11));

// escribe una funcion que calcule el area de un circulo dado su radio

function calcularAreaRadio(radio) {
  const pi = 3.1416;
  return pi * radio * radio;
}

console.log(calcularAreaRadio(5));


//esirbe una funcion que tome dos cadenas (string) como parametos y los concatene

function concatenarTexto(texto1,texto2){
    return texto1 + " " + texto2
}

console.log(concatenarTexto("hola","g24"))

//escribe una funcion que calcule el factoril de un numero 

function calcularFactorial (numero){
 if(numero === 0 || numero === 1){
    return 1
 }else{
    return numero * calcularFactorial(numero -1)
 }
}

console.log(calcularFactorial(5))