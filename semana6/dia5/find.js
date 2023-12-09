// find determina su uso al anjera solo un dato
// es muy parecido aun buvcle llamado filter
// retorna el primer dato de una condicion

const edades = [10, 11, 12, 30, 45];

const mayores30 = edades.find((edad) => edad > 12);
//recordemos que find solo devuelve un dato
// em este caso find esta buscando en el arreglo edades la eda sea mayor a 30

console.log(mayores30);

const finder = edades.find((edad, index) => console.log(edad));

//////////////////////////////////////////////////

const productos = [
  { nombre: "laptop", categoria: "computo" },

  { nombre: "celular", categoria: "tecnologia" },

  { nombre: "tv", categoria: "linea" },
];

const filtro = productos.find((product) => product.categoria);

console.log(filtro);

// dado un array de numeros encuentra el primer numero que sea mayor a 10

const numbers = [2, 6, 5, 9, 12, 20, 11];

const resultado = numbers.find((num) => num > 10);

console.log(resultado);

// dado un array de objetos que representen con  nombre y edad , encuentra la primera persona que tengas mas de 20 anios

const personas = [
      
  { nombre: "brandon", edad: 50 },
  { nombre: "marco", edad: 25 },
  { nombre: "antonhy", edad: 70 },

];

const resultadoPersona = personas.find((persona)=>persona.edad > 20)
console.log(resultadoPersona)

// dado un array de strings , encuentra el primer string que tenga mas de 5 caracteres

const palabras=["manzana","pera",'banana','fresa']
const resultadoPalabra = palabras.find((palabra)=>palabra.length > 5);
console.log(resultadoPalabra)

// dado un array de objetos que representen libros con titulo ya autor , encuentra el orimero libro escrito por una autor en especifico

const libros = [
    {titulo:"js" , autor :'jhon doe'},
    {titulo:"html" , autor :'smith'},
    {titulo:"css" , autor :'jhon doe'}
]

const autorBuscado ='jhon doe'
const resultadoAutor = libros.find((libro)=> libro.autor === autorBuscado)

console.log(resultadoAutor)