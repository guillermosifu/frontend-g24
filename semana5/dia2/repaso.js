// cuanto tipos cde console

console.log;
console.error;
console.warn;

// como declaramos variables que solo almacena tipo dato

var global = 20;
let alumno = "guillermo";
const pi = 3.14164;

// crar nuestra calculadore en js

let valor1 = prompt("ingresa el numero 1");
const operacion = prompt("ingresa tu operacion puedes ser : +  -  *  /");

let valor2 = prompt("ingresa el numero 2");

let resultadoCalculadora = 0;

//para poder hacer calculos debo conbertir mi variable de string a number
// ParseInt : convierte el texto en number
//  +  delante de la variable
//template string  `texto ${nombrevarible}`

// if (operacion === "+") {
//   resultadoCalculadora = +valor1 + +valor2;
//   alert(`el resultado es : ${resultadoCalculadora}`)
//   console.log("el resultado ", resultadoCalculadora);
// } else if (operacion === "-") {
//   resultadoCalculadora = +valor1 - +valor2;
//   alert(`el resultado es : ${resultadoCalculadora}`)
//   console.log("el resultado :", resultadoCalculadora);
// }

//optimazion al codigo  y aniadirle la opcionde campos vacios

if (valor1 === "" || valor2 === ""|| operacion ==='') {
  alert("ingresa valores correctoS");
} else {
  resultadoCalculadora;
  if (operacion === "+") {
    resultadoCalculadora = +valor1 + +valor2
  } else if (operacion === "-") {
    resultadoCalculadora = +valor1 - +valor2
  }

  if (resultadoCalculadora !== undefined) {
    alert(`el resultado es : ${resultadoCalculadora}`);
    console.log("el resultado ", resultadoCalculadora);
  }
}
 
