// exste dentro de js el document , este atributo de js me va permitiri obtener elemento de html

// podemos hacer de diferentes formas
// porel nombre de si etijeta
//por el nombfe una clase
// por el id

// los selectores del dom
// aca esta los 3 selectore por etiwueta , class y id


document.write('hola como estan ')

const inputs = document.getElementsByTagName("input");
console.log(inputs);
//recordar que si nosotrosqueremos iterar un elemento teneps que cponverti esta html collection a un array normal

const newInputs = Array.from(inputs);

console.log(newInputs);
// un map a los inputs

newInputs.map((newinput) => {
  console.log(newinput);
});

/////////////////////////////////////

const form = document.getElementsByTagName("form");
console.log(form);

const button = document.getElementsByTagName("button");
console.log(button);

///////////////////////////////////
// vamos autilizar un nuevo selector
const inputEmail = document.getElementById("input_email");
//con este dato podemosmanipular cambios en el elemento
inputEmail.style.backgroundColor = "red";
inputEmail.style.color = "#fff";

////////////////////////////

const inputName = document.getElementsByClassName("input_name");
console.log(inputName);

const newsInputName = Array.from(inputName);

newsInputName.forEach((input) => {
  console.log(input);
});
/// cmabiando datos de un elemtno html\

const parrafo = document.getElementById("parrafo").innerText = 'hola soy el g24 hoal,estoy jugando';

