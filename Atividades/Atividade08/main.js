//Medidor de velocidade.

//Velocidade maxima de ate 70
//A cada 5km acima do limite vc ganha 1 ponto na carteira.
//caso pontos maior que 12 -> carteira suspendida.
velocidadeMaxima(71);
function velocidadeMaxima(velocidade) {
    if (velocidade <= 70) {
        console.log('OK');
    } else {
        let pontos = velocidade - 70 / 5;
        if (pontos >= 12) {
            console.log('Carteira suspensa');
        } else {
            console.log(`Voce recebeu ${pontos}`)
        }
    }
}