emailjs.init("4Yh6sftJf-YW7IWM-");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .send("service_x1qak48", "template_eqxszuq", {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value,
        to: this.email.value,
      })
      .then(
        function (response) {
          console.log("Success!", response.status, response.text);
          alert("Email enviado com sucesso");
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.error("Erro:", error);
          alert("Ocorreu um erro ao enviar o email");
        }
      );
    console.log(this.email.value);
  });
