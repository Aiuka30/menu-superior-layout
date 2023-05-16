// selecionando elementos do DOM e criando variáveis para manipulá-los posteriormente
const botao = document.querySelector('#botao');
const menu = document.querySelector('#menu');

// adicionando um listener de evento de clique no botão para exibir o menu
botao.addEventListener('click', function() {
  menu.classList.toggle('exibir-menu'); // adiciona ou remove a classe "exibir-menu" no elemento
});

// adicionando uma função para exibir um alerta ao clicar em um botão
function exibirMensagem() {
  alert('Botão clicado!');
}

// adicionando um listener de evento de clique em um botão para chamar a função exibirMensagem
const botaoMensagem = document.querySelector('#botao-mensagem');
botaoMensagem.addEventListener('click', exibirMensagem);