const botao = document.getElementById('btnAdicionarFilme');


botao.addEventListener('click', () => {
    adicionarFilme();
})


function adicionarFilme() {
    const imgFilme = document.getElementById('imgFilme').value;
    const linkFilme = document.getElementById('linkFilme').value;
    const nomeFilme = document.getElementById('nomeFilme').value;

    const listaFilmes = document.getElementById('listaFilmes');

    listaFilmes.innerHTML = `${listaFilmes.innerHTML}
        <div class="lista-filmes__item">
            <a href="${linkFilme}">
                <img src="${imgFilme}"><p class="lista-filmes__nome">${nomeFilme}</p>
            </a> 
        </div>
    `
}