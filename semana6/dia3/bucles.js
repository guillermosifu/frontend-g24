// bucles  loop / repetitivo
// lo bucles son usados para poder leer arrays , porque un bucle me va permitir leer cada elemento dentro del array

// for  es u bucle el ams concido y el mas antiguo

// iterador => indice del bucle
// i++
// // i = i+1

// for (let i = 0; i <= 10; i = i + 4) {
//   console.log("iterador", i);
// }

//ejercicio nivel pollito

// escribe un bucle que recorra e imprima cada elememto en consola de un array

// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// nivel medio
//calcular la suma de todo los elemtnos de un array

// const numeros2 = [8, 10, 5];
// let suma = 0;

// for (let i = 0; i < numeros2.length; i++) {
//   suma += numeros2[i];
// }

// console.log("la suma es ", suma);

//

// const alumnos =["pepito","juancito","fulanito","sofia",'makanaki']

//quiero que recorran  el array y den la cantidad de elementos que este tiene

// for(let j = 0; j < alumnos.length; j++){
//   console.log(alumnos[j])
// }

// recorrer un array de numeros pero quiwro imrpimir en consola solo los numeros pares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let j = 0; j < numbers.length; j++) {
  //como hariamos para imprimir en cos=nsola solo los numeros pares
  if (numbers[j] % 2 === 0) {
    console.log(numbers[j]);
  }
}
