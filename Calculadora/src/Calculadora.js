export default class Calculadora {

    static soma(a,b) {
        if (a === ' ' || b === ' '){
            return (undefined)
                       }
        return a + b
    }
   
    static sub(a,b) {
        if (a === ' ' || b === ' '){
            return (undefined)
                       }
        return a - b
    }

    static mult(a,b) {
        if (a === ' ' || b === ' '){
            return (undefined)
                       }
        return a * b
    }

    static div(a,b) {
        if (a === ' ' || b === ' '){
            return (undefined)
                       }
        return a / b
    }

    static porcent(a,b) {
        if (a === ' ' || b === ' '){
            return (undefined)
                       }
        return (a/100) * b
    }


    static expon(a,b) {
        if (a === ' ' || b === ' '){
            return (undefined)
                       }
        return a ** b
    }

    static raizq(a,numeroraiz) {
         numeroraiz = Math.sqrt(a)
        let resultado = numeroraiz
        if (resultado >= 0) {
            return (numeroraiz)
        } else (resultado < 0) 
            return (undefined)

        }
        
           

        static raizc(a,numeroraizc) {
            numeroraizc = Math.cbrt(a)
           let resultado = numeroraizc
           if (resultado >= 0) {
               return (numeroraizc)
           } else (resultado < 0) 
               return (undefined)

}
}

//fim
