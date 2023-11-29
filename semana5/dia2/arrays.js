//arrays  indice  - lista
// array puede lamacenar diferntes tipos de datos a comp[aacion de una variable]
// declarar un array o arreglo []

const alumnos = ["guillermo", "peter", "tony", 40, true, 3.1416];
console.log(alumnos);

const laptop = ["macbook"];

console.log(laptop);

//puede tener difentes tipos de datos

let variosTipo = [true, false, 3.12, 100, "guille"];

// como podemos acceder dentro de un arreglo a un dato especicfico

console.log(alumnos[3]);

//como podemos alteras los datos de un array

alumnos[2] = "strange";
console.log(alumnos);

// asi como puedo reasignar un valor en el indiice tambien puedo crear datos 

alumnos[6]="cesar"
alumnos[10]=true

// como podemos saber cuantos elementos tiene un array ?

console.log(`la cantidad del array es de : ${alumnos.length} "alumnos`)
console.log("la cantidad del aray es de ",alumnos.length)


// crear 3 arrays de diferentes datos /  van a modifcar los elementos
// vas declara de cada array la cantide elemenro usando los string par identificar qu tipo de elemento 