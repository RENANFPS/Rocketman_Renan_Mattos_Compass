## Informações do projeto:

Esse projeto é uma calculadora básica que foi projetada para efetuar alguns testes de acordo com nosso aprendizado na Sprint 4 da trilha de Rocketman da Compass.uol .

## Calculadora 

Foram criadas as seguintes funções: 

 - Soma
 - Subtração 
 - Divisão 
 - Multiplicação
 - Exponencial
 - Porcentagem
 - Raiz quadrada
 - Raiz Cúbica

# Testes

Cada método passou por um bloco de testes onde o último teste de cada bloco deve apresentar falha.



 ## Pré requisitos para execução dos testes

- Download Git [Aqui](https://git-scm.com)
- Dowload vscode[Aqui](https://code.visualstudio.com/download) 
- Clonar o repositório[Rocketman_Renan_Mattos_Compass](https://github.com/RENANFPS/Rocketman_Renan_Mattos_Compass.git)


##  Execução dos testes

Iniciando o Git Bash na pasta Calculadora, você deve digitar o seguintes comandos:
// Para iniciar o repositório

npm init -y  

// Para iniciar a IDE dentro da mesma pasta do reposirótio

code .

Já na IDE no arquivo package.json , você deve editar o arquivo adicionando :

// Para ativar o uso da estrutura do ECMA SCRIPT 6

"type":"module"

Agora no terminal integrado da IDE , você deve dar o seguinte comando:

// Para instalar as bibliotecas Mocha e Chai

npm i -D mocha chai


Ainda no arquivo package.json , você deve alterar a linha do "test" para :

"test":"mocha"

Depois de ter preparado a estrutura, podemos dar início aos testes que estão descritos no arquivo calculadora.spec.js

Para executar os testes, através do terminal execute o seguinte comando:

npm test




## Agradecimentos:

COMPASS UOL. 

Tech lead Larissa Campos

A toda turma Rocketman04 (Cleo, Eric, Gabriel, Larissa, Leonardo, Amanda e Tamara )

## Créditos

- https://github.com/Ewertonalex/Rocketman_Ewerton_Alexander_Compass/blob/main/mocha-chai/src/Calculadora.js
- https://www.google.com.br
- Canais no youtube : Rafaella Ballerini e Dev Aprender 

//fim

