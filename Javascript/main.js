// Perceba que para a operação foi necessário recuperar o texto atual da página e usar o método parseInt do JavaScript. Isso é necessário pelo fato do valor vir em formato de texto e não ser possível realizar a soma numérica entre um texto e um número. O parseInt converte o texto em número. O mesmo processo ocorre para a função onDecrement. Entretanto, em vez de acrescentar o valor 1 ao valor atual, subtraímos.


// captar o valor do span (que será afetado pela ação)
let counterNumber = document.querySelector('#counter-number')

// captar o valor dos botões (para acrescentar um evento)
let upBottom = document.querySelector('#up')
let decrementButton = document.querySelector('#decrement')


// funções para acrescentar a decrementar

function up(){
    // Capta o contador e acessa o seu conteúdo HTML, depois acrescenta mais um quando clica 
    counterNumber.innerHTML ++
}

function decrement(){
    counterNumber.innerHTML --
}

// Evento dos botões
upBottom.addEventListener('click', up)
decrementButton.addEventListener('click', decrement)