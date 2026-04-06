
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