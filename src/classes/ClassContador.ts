export class Contador {
    valor: number;
    constructor() {
        this.valor = 0;
    }
    zerar(): void {
        this.valor = 0;
    }
    incrementar(): void {
        this.valor++;
    }
    retornarValor(): number {
        return this.valor;
    }
}

//Testes

const contador = new Contador();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.retornarValor());
contador.zerar();
console.log(contador.retornarValor());
