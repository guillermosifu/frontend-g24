// vamos  conocer metodos de arrays

//metodo push : aniade uno o mas elementoss al final de array

let fruits = ["manzana", "fresa"];

fruits.push("naranja", "banana");

console.log(fruits);

// pop() : eliminar un elemento del array

let fruits2 = ["manzana", "pera", "fresa"];

fruits2.pop();

console.log(fruits2);

//shift(), elimina el primero elemeto de un array

let fruits3=["fresa",'mandarina','melon']

fruits3.shift();
console.log(fruits3)

//unshift() aniade  uno o mas elemtnos al inicio del array

let fruits4= ['toronja','kiwi','higo']

fruits4.unshift('sandia','melocoton')

console.log(fruits4)

//splice()  cambia el contenido de un arrar , eliminando o reemplazando el elemento

let fruits5= ['pera','durazno','granadilla']

fruits5.splice(1,2,'kiwi','guayaba')
console.log(fruits5)

// slice(): devuelve  una parte del aarray ,sin modificar del array original 


let fruits6=["pera",'mango ','higo','mora','fresa']
 
let sliceFruits = fruits6.slice(2,3)

console.log(sliceFruits)
