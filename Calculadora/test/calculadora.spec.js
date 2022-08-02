import assert from 'assert'
import chai, { expect } from 'chai'
import Calculadora from '../src/Calculadora.js'

describe('Testes de soma',() => {
    it('Deve somar 4 e 5 resultando em 9',() => {
        let resultado = Calculadora.soma(4,5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1',() => {
        let resultado = Calculadora.soma(-4,5)
        expect(resultado).to.be.eq(1)
    })

})

describe('Testes de subtracao',() => {
    it('Deve subtrair 4 e 5 resultando em -1',() => {
        let resultado = Calculadora.sub(4,5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair 10 e 8 resultando em 2',() => {
        let resultado = Calculadora.sub(10,8)
        expect(resultado).to.be.eq(2)
    })



})

describe('Testes de multiplicação',() => {
    it('Deve multiplicar 2 e 9 resultando em 18',() => {
        let resultado = Calculadora.mult(2,9)
        expect(resultado).to.be.eq(18)
    })
    it('Deve multiplicar -2 e 9 resultando em -18',() => {
        let resultado = Calculadora.mult(-2,9)
        expect(resultado).to.be.eq(-18)
    })


})

describe('Testes de Divisao',() => {
    it('Deve dividir 80 por 10 resultando em 8',() => {
        let resultado = Calculadora.div(80,10)
        expect(resultado).to.be.eq(8)
    })
    it('Deve dividir 100 por 80 resultando em 1.25',() => {
        let resultado = Calculadora.div(100,80)
        expect(resultado).to.be.eq(1.25)
    })

})




    describe('Testes de string',() => {
        it('Deve verificar se existe letra na operacao', () => {
            let resultado = Calculadora.soma(80,'a')
            expect(resultado).to.have.string
        })
       
        it('Deve verificar se existe letra na operacao',() => {
            let resultado = Calculadora.sub(100,'b')
            expect(resultado).to.have.string
        })
    
        it('Deve verificar se existe letra na operacao',() => {
            let resultado = Calculadora.div(100,'c')
            expect(resultado).to.have.string
        })
    
        it('Deve verificar se existe letra na operacao',() => {
            let resultado = Calculadora.mult('d',80)
            expect(resultado).to.have.string;
        })

    })



