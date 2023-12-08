// while es un bucle que cumple una accion un numero determinado de veces

// la estrauctura de l while va siempre acompaniado de un contador

// let contador = 0

// while (contador <= 15){
//     console.log("contador",contador)
//     contador++
// }

//  eescribir un programa que pida al usuario una palabra y la muestra por panatalla 10 veces .

const imprimirDiezVeces = (palabra) => {
  let contador = 0;

  while (contador < 10) {
    console.log(palabra);
    contador++;
  }
};

imprimirDiezVeces("hola g24");

// escribi un programa que muestrepor panaala la tabla de multiplicar del 1 al 10

const imprimirTabla = (numero) => {
  let contador = 0;

  while (contador <= 10) {
    console.log(numero * contador);
    contador++;
  }
};

imprimirTabla(4)