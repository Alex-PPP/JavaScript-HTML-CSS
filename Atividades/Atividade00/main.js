function calcular() {
    let fnum = document.querySelector('#fnum');
    let result = document.querySelector('#res');
    if (fnum.value.length === 0 || Number(fnum.value) === 0) {
        alert('[ERRO] Insira novos dados e tente novamente')
    } else if (fnum.value > 50) {
        alert('Peso Maximo excedido, sera cobrada uma taxa de $R4,00 por quilo excedido.')
        let excesso = 0;
        let peso = Number(fnum.value);
        for (let c = 50; c < peso; c++) {
            excesso++
        }
        let multa = excesso  * 4;
        result.innerHTML = `Sua cota de peixes ultrapassou ${excesso}kgs entao sera cobrado R$${multa.toFixed(2)}`
    } else {
        result.innerHTML = `Parabens vc recebeu ${fnum.value}kgs de peixes.`
    }
    setInterval(function(){
        result.innerHTML = ''
        fnum.value = ''
    }, 20 * 1000);
}
