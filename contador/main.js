// Perceba que para a operação foi necessário recuperar o texto atual da página e usar o método parseInt do JavaScript. Isso é necessário pelo fato do valor vir em formato de texto e não ser possível realizar a soma numérica entre um texto e um número. O parseInt converte o texto em número. O mesmo processo ocorre para a função onDecrement. Entretanto, em vez de acrescentar o valor 1 ao valor atual, subtraímos.


// captar o valor do span (que será afetado pela ação)
const contador = document.querySelector('span')

// captar o valor dos botões (para acrescentar um evento)
const botaoAcrescenta = document.querySelector('.acrescentar')
const botaoDecrementar = document.querySelector('.decrementar')


// funções para acrescentar a decrementar

function acrescentar(){

    // Capta o contador e acessa o seu conteúdo HTML, depois acrescenta mais um quando clica 
    contador.innerHTML ++
}

function decrementar(){
    contador.innerHTML --
}

// Evento dos botões
botaoAcrescenta.addEventListener('click', acrescentar)
botaoDecrementar.addEventListener('click', decrementar)