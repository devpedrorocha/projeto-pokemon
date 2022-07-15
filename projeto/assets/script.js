console.log('Carrega o javascript aqui');

// variaveis globais

let moveSelecionado = '';
let moveset = [];
const movesDisponiveis = ['Water Pulse', 'Avalanche', 'Dragon Pulse', 'Ice Beam'];
const linhas = document.querySelectorAll('li');
let select = document.querySelector("select")
let option = document.querySelectorAll('option')
console.log(select.value)

/* option.forEach(function (elemento){
    movesDisponiveis.push(elemento.value) 
})
console.log(movesDisponiveis) */

function carregarGolpes() {
    movesDisponiveis.forEach(function (elemento) {
        let select = document.querySelector('select')
        let option = document.createElement('option')
        option.textContent = elemento
        option.id = elemento
        select.innerHTML = `${option}`

    })
}

console.log(select)
carregarGolpes()

// componentes

// add eventos

// métodosz

function goToBulbapedia() {
    open("https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)")
}


function deletar(elemento) {
    elemento.parentNode.remove()
}

/* 
linhas.forEach(function (elemento) {
    let botao = elemento.querySelector('.delete')
    botao.addEventListener('click', function (evento) {
        evento.target.parentNode.remove()
    })
}) */

