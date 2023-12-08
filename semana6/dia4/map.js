// map  es un bucle que sirve para poder leer un arreglo
//lo que hace especial un map . es que te devuelve un array

const productos = [
  {
    name: "laptop",
    price: 1500,
  },
  {
    name: "celular",
    price: 1800,
  },
];

productos.map((producto, index) => {
  console.log("indice", index);
  console.log("producto", producto.name);
});

const nombres = ["guillermo", "pepe", "cesar", "cristhian"];

nombres.map((nombre, indicador) => {
  console.log("indices", indicador);
  console.log("nombres", nombre);
  // if(indicador >= 0){
  //     console.log(nombre)
  // }
});

//quiero un array donde pueda obtener el doble de cada elemento

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeroDoble = numero.map((numerito) => {
  return numerito * 2;
});

console.log(numeroDoble);
