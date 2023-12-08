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

const numbers =[3,4,5]
 let suma = 0;

 numbers.forEach((numerito)=>{
 suma +=numerito

 })

 console.log("la suma es :", suma)