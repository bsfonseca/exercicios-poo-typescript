export class Carro {
    consumo: number;
    nivelCombustivel!: number;

    constructor(consumo: number) {
        this.consumo = consumo;
        this.nivelCombustivel = 0;
    }
    andar(distanciaKm: number) {
        const consumo = distanciaKm / this.consumo;
        this.nivelCombustivel -= consumo;
        return consumo;
    }
    obterNiveCombustivel() {
        return this.nivelCombustivel;
    }
    abastecer(abastecer: number) {
        return (this.nivelCombustivel += abastecer);
    }
}

//Teste
const hb20 = new Carro(10);
console.log(`Nivel de combustivel atual: ${hb20.obterNiveCombustivel()}`);
console.log(`Abastecer: ${hb20.abastecer(20)}`);
console.log(`Nivel de combustivel atual: ${hb20.obterNiveCombustivel()}`);
console.log(`Andou e consumiu: ${hb20.andar(60)} litros`);
console.log(`Nivel de combustivel atual: ${hb20.obterNiveCombustivel()}`);
console.log(hb20);
