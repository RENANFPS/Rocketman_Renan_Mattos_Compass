//Faixa de preco

//Primeira Opcao
let faixas = [
    {tooltip: 'ate R$700' , minimo: 0, maximo:700},
    {tooltip:'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo:1000, maximo: 999999}
];

// Segunda opcao ( Factory function)

function criaFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000,10000),

]
console.log(faixas);
console.log(faixas2);

//fim