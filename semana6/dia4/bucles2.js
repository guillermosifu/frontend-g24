//como recorremos un array de objetos?

const laptops = [
  {
    marca: "mac",
    nombre: "appleton",
    precio: 4500,
    precioOferta: 4499,
    califacion: 2,
  },
  {
    marca: "msi",
    nombre: "dk9512",
    precio: 6500,
    precioOferta: 4500,
    califacion: 4,
  },
  {
    marca: "acer",
    nombre: "dk9512",
    precio: 6400,
    precioOferta: 4500,
    califacion: 4,
  },
];

for (i = 0; i < laptops.length; i++) {
  console.log(laptops[i].precio);
}


//  crear dos array de objetos uno de cosasdel hogar / oficina