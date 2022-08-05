// Javascript - Objeto Endereco

//Criar um objeto endereco que contem
//Rua; Cidade; CEP; exibirEndereco(endereco)

let endereco = {
    Rua: 'Av suburbana',
    Cidade: 'Rio de Janeiro',
    CEP: '500000'
};

function exibirEndereco(endereco) {
    for(let chave in endereco)
        console.log(chave,endereco[chave]);
}
 
exibirEndereco(endereco);


//fim