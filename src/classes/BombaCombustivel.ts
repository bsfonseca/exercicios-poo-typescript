export class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valor: number) {
        const litrosAbastecidos = valor / this.valorLitro;
        if (litrosAbastecidos <= this.quantidadeCombustivel) {
            console.log(`Abasteceu: ${litrosAbastecidos} litros.`);
            this.quantidadeCombustivel -= litrosAbastecidos;
        } else {
            console.log(`Não há combustível suficiente`);
        }
    }

    abastecerPorLitro(litros: number) {
        const valorPago = this.valorLitro * litros;
        if (litros <= this.quantidadeCombustivel) {
            console.log(`Abasteceu: ${litros} litros. Pagou: ${valorPago}`);
            this.quantidadeCombustivel -= litros;
        } else {
            console.log(`Não há combustível suficiente`);
        }
    }
    alterarValor(novoValor: number) {
        this.valorLitro = novoValor;
    }
    alterarCombustivel(novoCombustivel: string) {
        this.tipoCombustivel = novoCombustivel;
    }
    alterarQuantidadeCombustivel(novaQuantidade: number) {
        this.quantidadeCombustivel = novaQuantidade;
    }
}

//Testes
const newBomba = new BombaCombustivel("Gasolina", 5.99, 500);
console.log(newBomba.abastecerPorValor(5.99));
console.log(newBomba.abastecerPorLitro(1));
console.log(newBomba.quantidadeCombustivel);
console.log(newBomba.alterarQuantidadeCombustivel(500));
console.log(newBomba.quantidadeCombustivel);
console.log(newBomba);
newBomba.alterarValor(4.5);
newBomba.alterarCombustivel("Etanol");
console.log(newBomba);
