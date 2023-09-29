export class Livro {
    constructor(public nome: string, public autor: string, public dtLancamento: Date, public valor: number) {}
}

class Romance extends Livro {
    constructor(
        nome: string,
        autor: string,
        dtLancamento: Date,
        valor: number,
        public personagem: string,
        public avaliacao: number
    ) {
        super(nome, autor, dtLancamento, valor);
    }
}

class Ficcao extends Livro {
    constructor(
        nome: string,
        autor: string,
        dtLancamento: Date,
        valor: number,
        public qtdPaginas: number,
        public classificacao: number
    ) {
        super(nome, autor, dtLancamento, valor);
    }
}

class Pedido {
    public livros: Livro[];

    constructor() {
        this.livros = [];
    }

    fecharPedido() {
        const soma = this.livros.reduce((atual, proximo) => {
            return atual + proximo.valor;
        }, 0);

        console.log(`Pedido fechado. Valor R$ ${soma}`);
    }
}

// Livros Romances
const livroRomance1 = new Romance(
    "Como se fosse a primeira vez",
    "Adam Sandler",
    new Date("2018-10-28"),
    258,
    "Adam Sandler",
    10
);

const livroRomance2 = new Romance("Admirável mundo novo", "Aldous", new Date("1930-01-15"), 30, "Foster", 8);

// Livros ficção
const got = new Ficcao("Game of thrones", "George RR Martin", new Date("2009-10-15"), 147, 900, 18);

// Pedido
const pedido = new Pedido();

// Adiciona os livros no pedido
pedido.livros.push(got, livroRomance1, livroRomance2);
console.log(pedido);
pedido.fecharPedido();

// const lista = [1, 3, 5, 7, 99];

// let soma = 0;
// for (let item of lista) {
//     soma = soma + item;
// }

// const somaReduce = lista.reduce((atual, proximo) => {
//     return atual + proximo;
// }, 0);

// //     1   3   5   7   99

// //  0  1   4   9   16   115
