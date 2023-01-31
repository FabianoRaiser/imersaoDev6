const menorNumero = 1;
const maiorNumero = 1000;

var numeroSecreto = parseInt(Math.random() * maiorNumero + 1);
let tentativa = 1;
let chances = 10;

console.log(numeroSecreto);

const chuteInput = document.getElementById('chute');
const btn = document.getElementById('btn-chute');
const intervalo = document.getElementById('intervalo');
const resultado = document.getElementById('resultado');

intervalo.innerHTML = `O número está entre ${menorNumero} e ${maiorNumero}.`

btn.addEventListener('click', () => {
    verificaResultado();
})

function verificaResultado() {
    let chute = chuteInput.value;
    if (chute == numeroSecreto) {
        resultado.innerHTML = `
        <div class="resultado">
        <h3 class="resultado__titulo">Parabens, você acertou!</h3>
        <p class="resultado__dica">O Número secreto era ${numeroSecreto}!</p>
        <input type="button" value="Jogar Novamente" class="botao-chute" id="btn-jogarNovamente">
        </div>`;
        jogarNovamente();
    }

    if (chute != numeroSecreto && tentativa < chances) {
        if (chute < numeroSecreto ) {
            resultado.innerHTML = `
            <div class="resultado">
            <h3 class="resultado__titulo">Errou! Você tem mais ${chances - tentativa} tentaivas.</h3>
            <p class="resultado__dica">O número secreto é Maior <i class="fa-solid fa-arrow-up"></i></p>
            </div>`
            tentativa++;
        } else if (chute > numeroSecreto) {
            resultado.innerHTML = `
            <div class="resultado">
            <h3 class="resultado__titulo">Errou! Você tem mais ${chances - tentativa} tentaivas.</h3>
            <p class="resultado__dica">O número secreto é Menor <i class="fa-solid fa-arrow-down"></i></p>
            </div>`
            tentativa++;
        }} else if (chute != numeroSecreto && tentativa == chances) {
            resultado.innerHTML = `
        <div class="resultado">
            <h3 class="resultado__titulo">Você está sem chances</h3>
            <p class="resultado__dica">O Número secreto era ${numeroSecreto}!</p>
            <input type="button" value="Jogar Novamente" class="botao-chute" id="btn-jogarNovamente">
        </div>`;
            jogarNovamente();
        }
    }

function jogarNovamente() {
    let btnJogarNovamente = document.getElementById('btn-jogarNovamente');

    btnJogarNovamente.addEventListener('click', () => {
        window.location.reload();
    });
}