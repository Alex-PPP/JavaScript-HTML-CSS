function calcular() {
    let metrosQ = document.querySelector('#fnum').value;
    let result = document.querySelector('#res');
    let tinta = metrosQ / 6;
    if (metrosQ.length === 0 || Number(metrosQ) === 0) {
        alert('[ERRO] Preencha os dados e tente novamente!')
        zerarTd();
    } else {
        if (tinta < 3.6) {
            alert('As tintas so sao vendidas apartir de galoes com 18 litros.')
            let conf = confirm('Gostaria de adquerir?')
            if (conf === true) {
                tinta = 3.6
                document.querySelector('#fnum').value = tinta * 6;
                calcular();
            } else {
                zerarTd();
            }
        } else {
            let valor = 80 * tinta / 18;
            let valor2 = 25 * tinta / 3.6;
            let mistura = valor + valor2 * 10 / 100;
            result.innerHTML = `Sao necessarios ${tinta} litros de tinta para pintar uma area de ${metrosQ}m²<br>`;
            let obj = {
                'galao grande': valor,
                'galao pequeno': valor2,
                'promocao': mistura
            };
                
        }
    }
    setInterval(function(){
        zerarTd();
    }, 20 * 1000);
}

function zerarTd() {
    document.querySelector('#fnum').value = '';
    document.querySelector('#res').innerHTML = '';
};