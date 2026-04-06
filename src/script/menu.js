// @ts-nocheck
function esconderTodasAsTelas() {
    const todasAsSessoes= document.querySelectorAll('.content-section');
    todasAsSessoes.forEach(sessao => sessao.classList.add('hidden'));
};

const limparBotoesMenu = () => {
    const botoes = document.querySelectorAll('.menu-function');
    botoes.forEach(botao => botao.classList.remove('active'));
};

const trocarDeTela = (idDaSessao, elementoClicado) => {
    esconderTodasAsTelas();
    limparBotoesMenu();

    const telaAlvo = document.getElementById(idDaSessao);
    if (telaAlvo) {
        telaAlvo.classList.remove('hidden');
    }

    elementoClicado.classList.add('active');
};

const botoesMenu = document.querySelectorAll('.menu-function');
botoesMenu.forEach(botao => {
    botao.addEventListener('click', () => {
        const idSessao = botao.getAttribute('data-target');
        trocarDeTela(idSessao, botao);
    });
});

const botaoLogin = document.getElementById('loginIcon');
const botaoCarrinho = document.getElementById('carrinhoIcon');

[botaoLogin, botaoCarrinho].forEach(botao => {
    botao.addEventListener('click', () => {
        const idSessao = botao.getAttribute('data-target');
        trocarDeTela(idSessao, botao);
    });
});


const iconeCarrinho = document.getElementById('carrinhoIcon');


iconeCarrinho.onclick = function() {
    
    const alvo = iconeCarrinho.getAttribute('data-target');
    
    
    trocarDeTela(alvo, iconeCarrinho);
    
    console.log("Clique no carrinho funcionou!"); 
};

