//LOCAL STORAGE
const CHAVE_ANDAMENTO = "cadastro_em_andamento";
const CHAVE_LISTA = "cadastros";

function lerAndamento() {
  return JSON.parse(localStorage.getItem(CHAVE_ANDAMENTO) || "{}");
}

function salvarAndamento(parcial) {
  const atual = lerAndamento();
  const novo = { ...atual, ...parcial };
  localStorage.setItem(CHAVE_ANDAMENTO, JSON.stringify(novo));
  return novo;
}

function finalizarCadastro() {
  const cadastro = lerAndamento();

  const lista = JSON.parse(localStorage.getItem(CHAVE_LISTA) || "[]");
  lista.push(cadastro);

  localStorage.setItem(CHAVE_LISTA, JSON.stringify(lista));
  localStorage.removeItem(CHAVE_ANDAMENTO);
}

//TRÊS ETAPAS DO CADASTRO
const form = document.querySelector('#formularioCadastro');

if(form){
    form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = document.querySelector('#nomeUsuarioDigitar').value;
    const email = document.querySelector('#emailUsuarioDigitar').value;

    salvarAndamento({ usuario, email });



    window.location.href = "./cadastresesenha.html";
});
}

const formSegundo = document.querySelector('#formularioCadastroEtapaDois');

if(formSegundo){
formSegundo.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const senha = document.querySelector('#senhaUsuarioDigitar').value;

    salvarAndamento({ senha });

    window.location.href = "./cadastresedados.html";
   
});
}

const formTerceiro = document.querySelector('#formularioCadastroEtapaTres');

if(formTerceiro){
formTerceiro.addEventListener('submit', (e) => {
    e.preventDefault(); 


    const cep = document.querySelector('#cepUsuarioDigitar').value;
    const endereço = document.querySelector('#numeroEnderecoDigitar').value;
    const complemento = document.querySelector('#complementoEnderecoDigitar').value;
    const estado = document.querySelector('#estadoEnderecoDigitar').value;
    const cidade = document.querySelector('#cidadeEndereco').value;
    const logradouro = document.querySelector('#ruaLogradouroDigitar').value;


    salvarAndamento({
      cep,
      numeroEndereco,
      complemento,
      estado,
      cidade,
      logradouro
    });

    finalizarCadastro();

    const lista = JSON.parse(localStorage.getItem("cadastros") || "[]");
    console.log("Cadastros salvos:", lista);

    window.location.href = "./login.html";


   
});
}
