function Mensagem() {

    const nome = document.querySelector('#MNome').value;
    const empresa = document.querySelector('#MEmpresa').value;
    const mensagem = document.querySelector('#MMensagem').value;

    if (!nome || !empresa || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    alert(`Obrigado pela mensagem, ${nome}!`);
}

document.querySelector('#BtnEnviar').addEventListener('click', Mensagem);