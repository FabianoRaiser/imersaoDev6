const paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};
const rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};
const gui = {
    nome: "Gui",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};
const fabiano = {
    nome: "Fabiano",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

const listaJogadores = [paulo, rafa, gui, fabiano];

const elementoTabela = document.getElementById('tabelaJogadores');

atualizaTela();

function atualizaTela() {
    elementoTabela.innerHTML = '';
    for (let i = 0; i < listaJogadores.length; i++) {
        // console.log(listaJogadores[i]);
        elementoTabela.innerHTML = `${elementoTabela.innerHTML}
                    <tr>
                        <td>${listaJogadores[i].nome}</td>
                        <td>${listaJogadores[i].vitorias}</td>
                        <td>${listaJogadores[i].empates}</td>
                        <td>${listaJogadores[i].derrotas}</td>
                        <td>${listaJogadores[i].pontos}</td>
                        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
                    </tr>
        `
    }
}


function adicionarVitoria(jogador) {
    listaJogadores[jogador].vitorias++;
    listaJogadores[jogador].pontos += 3;
    atualizaTela();
}

function adicionarEmpate(jogador) {
    listaJogadores[jogador].empates++;
    listaJogadores[jogador].pontos++;
    atualizaTela();
}

function adicionarDerrota(jogador) {
    listaJogadores[jogador].derrotas++;
    atualizaTela();
}