import assert from 'assert'
import chai, { expect } from 'chai'
import Calculadora from '../src/Calculadora.js'

// Testes de soma

describe('Testes de soma',() => {
    it('Deve somar 4 e 5 resultando em 9',() => {
        let resultado = Calculadora.soma(4,5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1',() => {
        let resultado = Calculadora.soma(-4,5)
        expect(resultado).to.be.eq(1)
    })

    it('Deve somar -10 e 4 resultando em -6',() => {
        let resultado = Calculadora.soma(-10,4)
        expect(resultado).to.be.eq(-6)
    })

    it('Deve somar 0.5 e 0.6 resultando em 1.1',() => {
        let resultado = Calculadora.soma(0.5,0.6)
        expect(resultado).to.be.eq(1.1)
    })

})

// Testes de Subtração

describe('Testes de subtracao',() => {
    it('Deve subtrair 4 e 5 resultando em -1',() => {
        let resultado = Calculadora.sub(4,5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair 10 e 8 resultando em 2',() => {
        let resultado = Calculadora.sub(10,8)
        expect(resultado).to.be.eq(2)
    })
    it('Deve subtrair 10 e 80 resultando em -70',() => {
        let resultado = Calculadora.sub(10,80)
        expect(resultado).to.be.eq(-70)
    })
    it('Deve subtrair 5 e 2.5 resultando em 2.5',() => {
        let resultado = Calculadora.sub(5,2.5)
        expect(resultado).to.be.eq(2.5)
    })
    it('Deve subtrair 2 e 2.5 resultando em -0.5',() => {
        let resultado = Calculadora.sub(2,2.5)
        expect(resultado).to.be.eq(-0.5)
    })


})

//Testes de Multiplicação

describe('Testes de multiplicação',() => {
    it('Deve multiplicar 2 e 9 resultando em 18',() => {
        let resultado = Calculadora.mult(2,9)
        expect(resultado).to.be.eq(18)
    })
    it('Deve multiplicar -2 e 9 resultando em -18',() => {
        let resultado = Calculadora.mult(-2,9)
        expect(resultado).to.be.eq(-18)
    })
    it('Deve multiplicar -2 e -10 resultando em 20',() => {
        let resultado = Calculadora.mult(-2,-10)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar 10 e 200 resultando em 2000',() => {
        let resultado = Calculadora.mult(10,200)
        expect(resultado).to.be.eq(2000)
    })
    it('Deve multiplicar 2 e 1.5 resultando em 3',() => {
        let resultado = Calculadora.mult(2,1.5)
        expect(resultado).to.be.eq(3)
    })



})

// Testes de Divisão

describe('Testes de Divisao',() => {
    it('Deve dividir 80 por 10 resultando em 8',() => {
        let resultado = Calculadora.div(80,10)
        expect(resultado).to.be.eq(8)
    })
    it('Deve dividir 100 por 80 resultando em 1.25',() => {
        let resultado = Calculadora.div(100,80)
        expect(resultado).to.be.eq(1.25)
    })
    it('Deve dividir -8 por 2 resultando em -4',() => {
        let resultado = Calculadora.div(-8,2)
        expect(resultado).to.be.eq(-4)
    })

})

//Testes de Porcentagem

describe('Testes de Porcentagem',() => {
    it('Deve achar 10% de 50, resultando em 5',() => {
        let resultado = Calculadora.porcent(10,50)
        expect(resultado).to.be.eq(5)
    })
    it('Deve achar 5% de 1000, resultando em 50',() => {
        let resultado = Calculadora.porcent(5,1000)
        expect(resultado).to.be.eq(50)
    })
    it('Deve achar 10% de 1, resultando em 0.1',() => {
        let resultado = Calculadora.porcent(10,1)
        expect(resultado).to.be.eq(0.1)
    })
    it('Deve achar 200% de 100, resultando em 200',() => {
        let resultado = Calculadora.porcent(200,100)
        expect(resultado).to.be.eq(200)
    })
})

    // Teste de exponencial onde a(base) e b o expoente

    describe('Testes de exponencial',() => {
        it('Deve achar 2 elevado a 3, resultando em 8',() => {
            let resultado = Calculadora.expon(2,3)
            expect(resultado).to.be.eq(8)
        })
        it('Deve achar 10 elevado a 2, resultando em 100',() => {
            let resultado = Calculadora.expon(10,2)
            expect(resultado).to.be.eq(100)
        })
        it('Deve achar -5 elevado a 5, resultando em -3125',() => {
            let resultado = Calculadora.expon(-5,5)
            expect(resultado).to.be.eq(-3125)
        })
        it('Deve achar 1.5 elevado a 2, resultando em 2.25',() => {
            let resultado = Calculadora.expon(1.5,2)
            expect(resultado).to.be.eq(2.25)
        })

})


// Teste de Raiz Quadrada

describe('Testes de Raiz quadrada',() => {
    it('Deve achar raiz quadrada de 4, resultando em 2',() => {
        let resultado = Calculadora.raizq(4)
        expect(resultado).to.be.eq(2)
    })
    it('Deve achar raiz quadrada de 100, resultando em 10',() => {
        let resultado = Calculadora.raizq(100)
        expect(resultado).to.be.eq(10)
    })
    it('Deve achar raiz quadrada de 16, resultando em 4',() => {
        let resultado = Calculadora.raizq(16)
        expect(resultado).to.be.eq(4)
    })
    it('Deve achar raiz quadrada de 0.25, resultando em 0.5',() => {
        let resultado = Calculadora.raizq(0.25)
        expect(resultado).to.be.eq(0.5)
    })

})

// Teste de Raiz Cubica

describe('Testes de Raiz cubica',() => {
    it('Deve achar raiz cubica de 27, resultando em 3',() => {
        let resultado = Calculadora.raizc(27)
        expect(resultado).to.be.eq(3)
    })
    it('Deve achar raiz cubica de 1000, resultando em 10',() => {
        let resultado = Calculadora.raizc(1000)
        expect(resultado).to.be.eq(10)
    })
    it('Deve achar raiz cubica de 64, resultando em 4',() => {
        let resultado = Calculadora.raizc(64)
        expect(resultado).to.be.eq(4)
    })
    it('Deve achar raiz cubica de 0.064, resultando em 0.4',() => {
        let resultado = Calculadora.raizc(0.064)
        expect(resultado).to.be.eq(0.4)
    })

})





    
         
        //Deve ocorrer falha caso não tenha string na operação
        describe('Testes de string que devem falhar',() => {
        it('Deve verificar se existe string na operacao',() => {
            let resultado = Calculadora.soma(800,80)
            expect(resultado).and.to.be.a('string')
        })

        it('Deve verificar se existe string na operacao',() => {
            let resultado = Calculadora.sub(20,19)
            expect(resultado).and.to.be.a('string')
        })
        it('Deve verificar se existe string na operacao',() => {
            let resultado = Calculadora.div(40,10)
            expect(resultado).and.to.be.a('string')
        })
        it('Deve verificar se existe string na operacao',() => {
            let resultado = Calculadora.mult(8,80)
            expect(resultado).and.to.be.a('string')
        })
        it('Deve verificar se existe string na operacao',() => {
            let resultado = Calculadora.porcent(20,80)
            expect(resultado).and.to.be.a('string')
        })

    })
    

      



