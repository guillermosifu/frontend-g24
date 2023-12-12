const display = document.getElementById("display");

function limpiarDisplay() {
  display.value = "";
}

function agregarDisplay(valor) {
  display.value += valor;
}

function calcular() {
    const expression = display.value;
  
  
      const result = new Function('return ' + expression)();
      display.value = result;
   
  }

  function mostrarError() {
    display.value = 'Error';
  }
