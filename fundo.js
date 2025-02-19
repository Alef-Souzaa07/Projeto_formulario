document.addEventListener("DOMContentLoaded", function () {
    const numFlakes = 100; // Agora temos 100 flocos de neve!
    const body = document.body;
  
    function createSnowflake() {
      let flake = document.createElement("div");
      flake.classList.add("snowflake");
      flake.innerHTML = "❄"; // Floco de neve
  
      let size = Math.random() * 15 + 10; // Tamanho entre 10px e 25px
      let position = Math.random() * window.innerWidth; // Posição horizontal aleatória
      let duration = Math.random() * 5 + 3; // Duração entre 3s e 8s
  
      flake.style.left = position + "px";
      flake.style.fontSize = size + "px";
      flake.style.animationDuration = duration + "s";
  
      body.appendChild(flake);
  
      // Remove o floco quando ele termina de cair
      setTimeout(() => {
        flake.remove();
      }, duration * 1000);
    }
  
    // Criando os flocos iniciais
    for (let i = 0; i < numFlakes; i++) {
      createSnowflake();
    }
  
    // Adiciona neve continuamente
    setInterval(() => {
      for (let i = 0; i < 10; i++) {
        createSnowflake();
      }
    }, 500); // A cada meio segundo, mais 10 flocos aparecem
  });
  