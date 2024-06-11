document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const contactButton = document.getElementById("contactButton");

  contactButton.addEventListener("click", () => {
    showModal(
      "Guilherme Rossi Kirsten - RM95230",
      "Gabriel Coghi Barbosa - RM: 93501",
      "Ronaldo Otsuka Ribeiro Mira - RM: 95595",
      "Gabriel Gino Jorge Dallape - RM:94862",
      "Mikael Pocker Fonseca - RM: 95564",
      "Felipe Bazana Cardoso Sousa - RM: 94817"
    );
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function showModal(msg1, msg2, msg3, msg4, msg5) {
    const modal = document.getElementById("modal");
    const modalMessage = modal.querySelector("p");
    modalMessage.innerHTML = "";
    modalMessage.appendChild(document.createTextNode(msg1));
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(document.createTextNode(msg2));
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(document.createTextNode(msg3));
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(document.createTextNode(msg4));
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(document.createTextNode(msg5));
    modal.style.display = "block";
  }
});

/*
Gabriel Coghi Barbosa - RM: 93501 
Mikael Pocker Fonseca - RM: 95564 
Guilherme Rossi Kirsten - RM: 95230
Gabriel Gino Jorge Dallape – RM:94862
Ronaldo Otsuka Ribeiro Mira - RM: 95595 
Felipe Bazana Cardoso Sousa – RM: 94817
*/
