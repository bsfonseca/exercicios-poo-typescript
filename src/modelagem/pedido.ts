class Item {
    constructor(public valor: number, public nome: string, public descricao: string) {}
}

export class Pedido {
    public itens: Item[];
    constructor(public valorTotal: number) {
        this.itens = [];
    }
}

//Testes

const item = new Item(10, "Arroz", "Origem vegetal");

const item1 = new Item(5, "Carne", "Origem animal");

const item2 = new Item(7, "Leite Pasteurizado", "Origem animal");

const pedido = new Pedido(10);

pedido.itens.push(item);

console.log(pedido);
