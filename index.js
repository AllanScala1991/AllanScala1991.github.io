// Funcao que controla o conteudo que sera exibido
function showContent(content) {
  var about_me = document.getElementById("about_me");
  var training = document.getElementById("training");
  var portifolio = document.getElementById("portifolio");
  var contact = document.getElementById("contact");

  if (content == "about_me") {
    about_me.style.visibility = "visible";
    about_me.style.zIndex = "0";
    training.style.visibility = "hidden";
    training.style.zIndex = "-1";
    portifolio.style.visibility = "hidden";
    portifolio.style.zIndex = "-1";
    contact.style.visibility = "hidden";
    contact.style.zIndex = "-1";
  }

  if (content == "training") {
    about_me.style.visibility = "hidden";
    about_me.style.zIndex = "-1";
    training.style.visibility = "visible";
    training.style.zIndex = "0";
    portifolio.style.visibility = "hidden";
    portifolio.style.zIndex = "-1";
    contact.style.visibility = "hidden";
    contact.style.zIndex = "-1";
  }

  if (content == "portifolio") {
    about_me.style.visibility = "hidden";
    about_me.style.zIndex = "-1";
    training.style.visibility = "hidden";
    training.style.zIndex = "-1";
    portifolio.style.visibility = "visible";
    portifolio.style.zIndex = "0";
    contact.style.visibility = "hidden";
    contact.style.zIndex = "-1";
  }

  if (content == "contact") {
    about_me.style.visibility = "hidden";
    about_me.style.zIndex = "-1";
    training.style.visibility = "hidden";
    training.style.zIndex = "-1";
    portifolio.style.visibility = "hidden";
    portifolio.style.zIndex = "-1";
    contact.style.visibility = "visible";
    contact.style.zIndex = "0";
  }
}
// funcao que controla o form de enviar a mensagem
function sendMessage() {
    alert("Mensagem enviada com sucesso.")
    showContent("contact")
    document.getElementById("form-message").reset()
}