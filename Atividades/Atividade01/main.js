function calcular() {
    let fnum = document.querySelector('#fnum');
    let fnum2 = document.querySelector('#fnum2');
    let result = document.querySelector('#res');
    if (fnum.value.length === 0 || fnum2.value.length === 0) {
        alert('[ERRO] Preencha os dados e tente novamente.');
        zerarTd();
    } else {
        let salarioHora = Number(fnum.value);
        let horasMes = Number(fnum2.value);
        let salarioBrt = salarioHora * horasMes;
        let impRenda = salarioBrt * 11 / 100;
        let impInss = salarioBrt * 8 / 100;
        let sindicato = salarioBrt * 5 / 100;
        let salarioLiq = salarioBrt - impRenda - impInss - sindicato;
        let objTotal = {
            'Salario bruto': salarioBrt,
            'IR': impRenda,
            'INSS': impInss,
            'Sindicato da categoria': sindicato,
            'Salario liquido': salarioLiq,
        };

        let resultado = '';

        for (let c in objTotal) {
            if(objTotal.hasOwnProperty(c)) {
            resultado += c + ' = ' + ' R$' + objTotal[c].toFixed(2) + '<br>';
            }
        }
        result.innerHTML = resultado;
    }
    setInterval(function(){
        zerarTd();
    }, 20 * 1000);
}

function zerarTd() {
   document.querySelector('#fnum').value = '';
   document.querySelector('#fnum2').value = '';
   document.querySelector('#res').innerHTML = '';
};
