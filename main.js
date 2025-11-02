 function saludar() {
      const input = document.getElementById("nombreInput");
      const saludo = document.getElementById("nombre");
      saludo.textContent = "Hola, " + input.value;
    }
