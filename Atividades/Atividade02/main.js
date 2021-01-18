function calcular() {
    let metrosQ = document.querySelector('#fnum').value;
    let result = document.querySelector('#res');
    let tinta = metrosQ / 3;
    if (metrosQ.length === 0 || Number(metrosQ) === 0) {
        alert('[ERRO] Preencha os dados e tente novamente!')
        zerarTd();
    } else {
        if (tinta < 18) {
            alert('As tintas so sao vendidas apartir de galoes com 18 litros.')
            let conf = confirm('Gostaria de adquerir?')
            if (conf === true) {
                tinta = 18
                document.querySelector('#fnum').value = tinta * 3;
                calcular();
            } else {
                zerarTd();
            }
        } else {
            let valor = 80 * tinta / 18;
            result.innerHTML = `Sao necessarios ${tinta} litros de tinta para pintar uma area de ${metrosQ}m²<br>`;
            result.innerHTML += `Valor do investimento: R$${valor.toFixed(2)}`;
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

 