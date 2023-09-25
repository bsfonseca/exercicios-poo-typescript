export class Calculadora {
    historico: string[] = [];

    armazenarHistorico(op: string, resultado: number) {
        this.historico.push(`${op}: ${resultado}`);
    }

    somar(a: number, b: number): number {
        const resultado = a + b;
        this.armazenarHistorico(`O resultado de: ${a} + ${b} é:`, resultado);
        return resultado;
    }

    multi(a: number, b: number): number {
        const resultado = a * b;
        this.armazenarHistorico(`O resultado de: ${a} * ${b} é:`, resultado);
        return resultado;
    }

    dividir(a: number, b: number): number {
        const resultado = a / b;
        this.armazenarHistorico(`O resultado de: ${a} / ${b} é:`, resultado);
        return resultado;
    }

    subtrair(a: number, b: number): number {
        const resultado = a - b;
        this.armazenarHistorico(`O resultado de: ${a} - ${b} é:`, resultado);
        return resultado;
    }

    funcHistorico() {
        for (const x of this.historico) {
            console.log(x);
        }
    }
}

// Testes
const calc = new Calculadora();

calc.multi(10, 5);
calc.somar(15, 5);
calc.dividir(10, 100);
calc.subtrair(10, 50);
console.log(calc.funcHistorico());
