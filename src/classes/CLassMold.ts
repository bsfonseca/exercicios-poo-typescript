export class Bola {
    cor: string;
    circunferencia: number;
    material: string;

    constructor(cor: string, circunferencia: number, material: string) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    trocarCor(novaCor: string) {
        this.cor = novaCor;
    }
}

//Testes
const bolinha = new Bola("Preta", 100, "Polietileno");
console.log(bolinha);
bolinha.trocarCor("Rosa");
console.log(bolinha.cor);
