// NECESITO REALIZAR LA FUNCION QUE CONSUMA LA DATA DEL API POKEMON

//PASO 1 CREAMOS LA FUNCION ASINCRONA

const pokemonContainer = document.querySelector("#row-pokemons");

const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await response.json();
  console.log(data.results);
  setPokemonsView(data.results);
};

obtenerPokemones();

// vamo a crea una funcion que pinte lo pokemones en el navegador

const setPokemonsView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  results.map(async (result, index) => {
    const html = `
    <div class = "col-md-3 mt-3">
    <div class ='card'>
    <img class = 'card-img-top mt-2'
    width = '200'
    height = '200'
    src='${imgUrl}${index + 1}.svg'>
    <div class = 'card-body text-center'>
    <h6 class ='text-title'>N. ${index + 1}</h6>
    <h4 class ='text-title'>${result.name}</h4>
      </div>
      </div>
    `;

    pokemonContainer.innerHTML += html;
  });
};

obtenerPokemones();
