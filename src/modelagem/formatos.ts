interface FormatoDeElemento {
    desenhar: () => void;

    redimensionar: () => void;
}

class Circulo implements FormatoDeElemento {
    constructor(public raio: number) {}

    desenhar() {
        console.log("Desenhando um circulo...");
    }

    redimensionar() {
        console.log("Redimensionando o circulo...");
    }
}

class Retangulo implements FormatoDeElemento {
    constructor(public comprimento: number, public altura: number) {}
    desenhar() {
        console.log("Desenhando um circulo...");
    }

    redimensionar() {
        console.log("Redimensionando o circulo...");
    }
}

//Testes
const tamRetangulo = new Retangulo(12, 15);
console.log(tamRetangulo);

const tamCirculo = new Circulo(50);
console.log(tamCirculo);
