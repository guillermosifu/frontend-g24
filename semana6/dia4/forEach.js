// foreach es como una mezcla entre el map (bucle) y el for
// la diferencia es for each no retorna nada
// sirve para interar un arreglo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero) => {
  console.log(numero * 4);
});

//segundo formao de for each

const productos = [
  {
    name: "laptop",
    price: 1500,
  },
  {
    name: "celular",
    price: 2500,
  },
  {
    name: "monitor",
    price: 1900,
  },
];

productos.forEach((producto) => {
  console.log(producto.name);
});

productos.forEach((producto) => console.log(producto.price));

// suman los elemento de un array uno x uno

const numbers = [3, 4, 5];
let suma = 0;

numbers.forEach((numerito) => {
  suma += numerito;
});

console.log("la suma es :", suma);

//  imprimir solo los numeros pares

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros2.forEach((pares) => {
  if (pares % 2 === 0) {
    console.log(pares);
  }
});

// como podemos contar la cantidad de numeros mayores a 3

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8];
let contador = 0;

numeros3.forEach((tres) => {
  if (tres > 3) {
    contador++;
  }
});

console.log("camtida de numeros mayores a 3 ", contador);

// crear un nuevo array con el doble de cada elemento del array original
 const numeros4=[1,2,3,4,5,6]
const numeroDobles=[]

numeros4.forEach((dobles)=>{
 numeroDobles.push(dobles *2)
})

console.log("original",numeros4)
console.log("nuevo",numeroDobles)
