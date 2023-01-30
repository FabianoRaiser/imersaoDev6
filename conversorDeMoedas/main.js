let inputValor;
const btnConvert = document.getElementById('converter')
const resultadoConvert = document.getElementById('resultado')
const anoLuzMetro = 9.461e+15;
const anoLuzKm = 9.461e+12;
const carroMaisRapido = 'o Hennessey Venom F5'
const velocidadeCarro = 500;

btnConvert.addEventListener('click', () => {
    inputValor = parseInt(document.getElementById('anosLuz').value);

    let resultadoKm = (inputValor * anoLuzKm) / velocidadeCarro;
    resultadoKm = resultadoKm.toFixed(2);
    
    resultadoConvert.innerHTML = `
    <p class="letreiro">Resultado:</p>
    <p class="resultado-conversor">A distancia de ${inputValor} Anos-luz equivale a ${inputValor * anoLuzMetro} metros! Ou seja, utilizando o carro mais rápido do mundo, ${carroMaisRapido}, levariamos ${resultadoKm} horas, ou ${resultadoKm / 24} dias, o que significa que demorariamos cerca de ${(resultadoKm / 24) / 365} anos! </p>
    `
});

