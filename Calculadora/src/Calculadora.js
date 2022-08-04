export default class Calculadora {

    static soma(a,b) {
        return a + b
    }

    static sub(a,b) {
        return a - b
    }

    static mult(a,b) {
        return a * b
    }

    static div(a,b) {
        return a / b
    }

    static porcent(a,b) {
        return (a/100) * b
    }


    static expon(a,b) {
        return a ** b
    }

    static raizq(a) {
        return Math.sqrt(a)
    }

    static raizc(a) {
        return Math.cbrt(a)
    }

}

