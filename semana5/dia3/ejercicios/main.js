//Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.

function sumarDosNumeros(num1, num2) {
  //realizo la suma
  let resultado = num1 + num2;

  //imprimir el resultado en la console
  console.log("el resultado es " + resultado);
}

sumarDosNumeros(100, 20);

//Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.

function calcularNotas(not1, not2, not3, not4) {
  let sumarNotas = not1 + not2 + not3 + not4;
  //calcular promedio
  let promedio = sumarNotas / 4;
  return promedio;
}

console.log("el promedio es ",calcularNotas(12,14,15,10))
