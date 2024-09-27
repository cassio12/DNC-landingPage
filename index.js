let backArrow = document.getElementById("back");
let fireCard = document.getElementById("card-1");
let lastCard = document.getElementById("card-3");
let nextArrow = document.getElementById("next");

let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTelefone = document.getElementById("tel");

let form = document.getElementById("form");

function next() {
  nextArrow.addEventListener("click", function () {
    nextArrow.style.display = "none";
    backArrow.style.display = "block";
    lastCard.style.display = "flex";
    fireCard.style.display = "none";
  });
}

function back() {
  backArrow.addEventListener("click", function () {
    nextArrow.style.display = "block";
    backArrow.style.display = "none";
    lastCard.style.display = "none";
    fireCard.style.display = "flex";
  });
}

function savedata() {
  let nome;
  let email;
  let telefone;

  inputNome.addEventListener("change", function (e) {
    nome = e.target.value;
  });

  inputEmail.addEventListener("change", function (e) {
    email = e.target.value;
  });

  inputTelefone.addEventListener("change", function (e) {
    telefone = e.target.value;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      `Os dados foram salvos com sucesso nome: ${nome}; email: ${email}; telefone: ${telefone}`
    );
    inputNome.value = "";
    inputEmail.value = "";
    inputTelefone.value = "";
  });
}

function main() {
  // savedata();
  next();
  back();
}

main();
