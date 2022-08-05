// Velocidade maxima de ate 70
// a cada 5km acima do limite voce ganha 1 ponto
//Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspensa"

verificarVelocidade(70);


function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
    console.log('ok');
    else {
        const pontos = Math.floor ((velocidade - velocidadeMaxima) / kmPorPonto);
        if ( pontos >= 12 )
            console.log('Carteira supensa');
        else
            console.log('Pontos' , pontos);

    }
}

//fim