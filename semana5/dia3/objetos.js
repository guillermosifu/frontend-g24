// objetos en js
// identificar ds partes del objeto KEY / VALUE
// PROPIEDAD Y ATRIBUTO

// CARRO {
// MARCA: "AUDI",
// COLOR: "AZUL",
// MOTOR: 4.0,
//}

// PERSONA{EDAD:35,SEXO:"MASCULINO",TALLA:}

const persona = {
  edad: 35,
  nacionalidad: "peruano",
  sexo: "masculino",
  talla: 1.78,
  peso: 80,
  raza: "morenos",
  casado: true,
};

console.log(persona.casado);

// como accedo a un key del objeto
//  para ingresar solo debo colocar el nombre del object seguido de un punto y el nombre del key a capturar

console.log(persona.casado);
console.log(persona);
// quiero crear un nuevo key y value para insertarlo a un objeto
persona.apellido = "sifuentes";
persona.telefono = 987654321;
persona["profesion"] = "ingeniero";

// como puedo modificar el value deun key??
persona.edad = 25;
persona.profesion = "masajista";

// se podra hacer un array de objetos ?

const personas = [
  { nombre: "juan", edad: 20, peso: 90 },
  { nombre: "sofia", edad: 20, peso: 90 },
  { nombre: "diego", edad: 30, peso: 70 },
];

console.log(personas);

console.log(personas[0].nombre);
console.log(personas[1].peso);
console.log(personas[2].edad, "anios");
