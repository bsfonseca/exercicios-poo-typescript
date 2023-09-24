export abstract class Ingresso {
    constructor(protected valor: number) {}

    imprimeValor() {
        console.log(`O valor é ${this.valor}`);
    }
}

export class IngressoNormal extends Ingresso {}

export class IngressoVip extends Ingresso {
    constructor(valor: number, public adicional: number) {
        super(valor);
    }
    imprimeValor(): void {
        console.log(`O novo valor é ${this.valor + this.adicional}`);
    }
}
export class IngressoCamarote extends IngressoVip {}

//Testes

const ingresso = new IngressoNormal(500);
ingresso.imprimeValor();

const ingressoVip = new IngressoVip(500, 200);
ingressoVip.imprimeValor();

const camarote = new IngressoCamarote(200, 300);
camarote.imprimeValor();
