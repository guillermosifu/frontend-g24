// document.getElementById("btn").addEventListener("click", cambiar_texto);function cambiar_texto(){
// document.getElementById('')
// }

// function cambiar_texto() {
//   //acceder al elemento
//   const parrafo = document.getElementById("parrafo");

//   //cambie el contenido
//   parrafo.textContent = "hola bienvenido";
// }

function cambiarFondo() {
  const cuerpo = document.querySelector("#cuerpo");
  cuerpo.style.backgroundColor = "red";
}

// creamo desde el DOM ELEMENTOS

function crearElemento() {
  //crea el nuevo elemnto
  const nuevoElemento = document.createElement("li");

  // agregamos texto al elemento

  const textoNuevoElemento = document.createTextNode("hola");
  nuevoElemento.appendChild(textoNuevoElemento);

  // capturo el elemento existente
  const miLista = document.getElementById("lista");

  miLista.appendChild(nuevoElemento);
}

/////////////////////////////////////

function crearParrafo() {
  const nuevoParrafo = document.createElement("p");

  const textoParrafo = document.createTextNode("soy cris");
  nuevoParrafo.appendChild(textoParrafo);
  const contenedor = document.getElementById("contenedor");

  contenedor.appendChild(nuevoParrafo);
}
