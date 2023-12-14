//API (APPLICATION PROGRAMMING INTERFACE)
// ES UN SERVICIO EL CUAL NOS PROVEE INFORMACION O TAMBIEN PODEMOS CREAR INFORMACION
// CONSUMIENO EL API DE GITHUB DATOS DE USURAIOS
// FETCH - PETICION AL API
// USA UN FUNCION ASINCRONA
//ASYNC  --  AWAIT
// TRY / CATCH  =  MANEJO DE ERRORES

// FUNCIONES ASYNC
//  ES SOLAMENTE USADA PARA LAS PETICIONES

// CAPTUREMOS LOS ELEMENTO A USAR DESDE MI HTML

const imageProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUserName = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubFollower = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubRepos = document.querySelector("#github-repos");

// esto seon los principales que generaran la busqueda

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

// aca ejecutamos la funcion con el eveto onclick
githubActionSearch.onclick = () => {
  const username = githubInputSearch.value;
  githubInputSearch.value = "";
  //aca usamos la alerta
  if (username === "") {
    Swal.fire({
      title: "Error?",
      text: "Debes llenar los campos usuario",
      icon: "error",
    });
    return;
  }

  obtenerDatosGithub(username);
};

// ejecutamos la funcion con el evento keyup{levantar tecla}
githubInputSearch.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    obtenerDatosGithub(event.target.value);
  }
});

// funcion de peticion a API con fecth y async await
const obtenerDatosGithub = async (username = "guillermosifu") => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data);

  setDataUser(data);
};

const formatDate = (fecha) => {
  let date = new Date(fecha);
  return date.toISOString().split("T")[0];
};

// funcion paa insertar propiedades a cada elemento capturado en nuestro HTML
const setDataUser = (data) => {
  imageProfile.src = data.avatar_url;
  githubName.textContent = data.login;
  githubBio.innerHTML = data.bio;
  githubUserName.innerHTML = `@${data.login}`;
  githubJoined.innerHTML =formatDate(data.created_at) ;
};

obtenerDatosGithub();
