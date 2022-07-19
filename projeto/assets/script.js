console.log('Carrega o javascript aqui');

// variaveis globais

let moveSelecionado = '';
let moveset = [];
const movesDisponiveis = ['Water Pulse', 'Avalanche', 'Dragon Pulse', 'Ice Beam'];
const li = document.createElement("li")

// componentes
const btnAdd = document.querySelector('.add')
const select = document.querySelector("#seletor")


// add eventos
btnAdd.addEventListener("click", adicionaGolpe)


// métodosz
function goToBulbapedia() {
    open("https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)")
}

function carregaGolpes() {
    let html = ""
    movesDisponiveis.forEach((move) => {
        html += `<option value='${move}'>${move}</option>`
    })
    select.innerHTML = html
}

carregaGolpes()


function adicionaGolpe() {
    //Utilizar includes e Arrays
    moveSelecionado = select.value
    let li = document.createElement('li')
    li.id = moveSelecionado
    li.innerHTML = `${moveSelecionado} <button id = "delete${moveSelecionado}">Deletar</button>`

    document.getElementById("listMoves").appendChild(li)

    document.getElementById(`delete${moveSelecionado}`).addEventListener("click", deletar(li))


    li.forEach(function (elemento) {
        let botao = elemento.querySelector(`button`)
        botao.addEventListener('click', function (evento) {
            evento.target.parentNode.remove()
            })
        })

}
 //Dando Erro




