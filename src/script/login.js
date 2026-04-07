
class Login {

    constructor() {
        this.email = document.getElementById("email");
        this.senha = document.getElementById("senha");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const botaoLogin = document.getElementById('botaoLogin');
    botaoLogin.addEventListener('click', function() {
        window.location.href = './index.html';
    });
});


const formLogin = document.querySelector('#formLogin');

if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#emailLogin').value;
    const senha = document.querySelector('#senhaLogin').value;

    const lista = JSON.parse(localStorage.getItem("cadastros") || "[]");

    // procura usuário
    const usuarioEncontrado = lista.find(user => 
      user.email === email && user.senha === senha
    );

    if (usuarioEncontrado) {
      alert("Login realizado com sucesso!");

      // opcional: salvar sessão
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

      // redireciona
      window.location.href = "./index.html";

    } else {
      alert("E-mail ou senha incorretos!");
    }
  });
}