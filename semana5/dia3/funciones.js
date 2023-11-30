// que es una funcion??
// una funcion es un conjunto de soluciones parapoder realizar un tarea

function nombreFuncion() {
  // una ves declarada la funcion todo el codigo que ahaga dentro
  // solo estara en su ambito SCOPE

  console.log("nombrefuncion ");
}

// invoquemos  la funcion
nombreFuncion();

//funcion declarativa

function sumar(a, b, c) {
  return a + b - c;
}

console.log("sumar", sumar(100, 20, 10));

//funcion expresiva /anonima

let sumar2 = function(a,b){
    return a+b
}

// arrow funcion / funcion flecha

const sumar3 =(a,b)=>{
  return a+b
}

//hay caso que las funcons flecha no va a necesiatr usar llaves

//como hacemos una funcion que salue o=con tu nombre 
const saludar =(nombre,apellido)=>{
return  "hola mi nombes es :",nombre,"t mi  apellido es",apellido;
}


console.log(saludar("guillermo","sifuentes"))

const hello =()=>"hola grupo 24"

console.log(hello())