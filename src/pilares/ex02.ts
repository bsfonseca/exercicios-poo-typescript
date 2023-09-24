export class Imovel {
    constructor(public endereco: string, public preco: number) {}

    public obterPreco() {
        return this.preco;
    }
}

export class ImovelNovo extends Imovel {
    constructor(endereco: string, preco: number, private adicional: number) {
        super(endereco, preco);
    }

    public exibirValorAdicional() {
        console.log(`O valor adicional é ${this.adicional}`);
    }

    public obterPreco() {
        return this.preco + this.adicional;
    }
}

export class ImovelVelho extends Imovel {
    constructor(endereco: string, preco: number, private desconto: number) {
        super(endereco, preco);
    }

    public exibirDesconto() {
        console.log(`O valor do desconto é ${this.desconto}`);
    }

    public obterPreco() {
        return this.preco - this.desconto;
    }
}

//Testes

const imNovo = new ImovelNovo("Rua Assis", 10000, 500);
imNovo.exibirValorAdicional();

console.log(imNovo.obterPreco());

const desconto = new ImovelVelho("Rua Jari", 900, 400);
desconto.exibirDesconto();

console.log(`O valor final é ${desconto.obterPreco()}`);
