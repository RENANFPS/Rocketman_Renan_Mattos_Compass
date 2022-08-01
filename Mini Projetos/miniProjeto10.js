// Criar funcao para mostrar os numeros primos

//Primos
// Compostos

//Ex: 10,11

exibirNumerosprimos(15);

function exibirNumerosprimos(limite){
    for(let numero = 2; numero <= limite; numero++){
         let ehprimo = true;

         for (let divisor = 2; divisor < numero ; divisor++){
              if(numero % divisor === 0) {
                    ehprimo = false;
                    break;
              }
         }
         if (ehprimo) console.log(numero);
}
}