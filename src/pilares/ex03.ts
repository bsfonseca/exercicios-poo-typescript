import { v4 } from "uuid";

export class Animal {
    private id: string;

    constructor(
        public nome: string,
        public idade: number,
        public raca: string,
        public especie: string,
        public velocidade: number
    ) {
        this.id = v4();
    }
    andar() {
        console.log("Andando como um animal qualquer");
    }
}

export class Cachorro extends Animal {
    constructor(nome: string, idade: number, raca: string, especie: string, velocidade: number) {
        super(nome, idade, raca, especie, velocidade);
    }

    latir() {
        console.log("Auau");
    }
    andar(): void {
        console.log(`Corre em velocidade: ${this.velocidade}km/h`);
    }
}

export class Cavalo extends Animal {
    constructor(nome: string, idade: number, raca: string, especie: string, velocidade: number) {
        super(nome, idade, raca, especie, velocidade);
    }

    relinchar() {
        console.log("Ihuhuhu");
    }
    andar(): void {
        console.log(`Corre em velocidade: ${this.velocidade}km/h`);
    }
}
export class Gato extends Animal {
    constructor(nome: string, idade: number, raca: string, especie: string, velocidade: number) {
        super(nome, idade, raca, especie, velocidade);
    }

    miar() {
        console.log("Miauu");
    }
    andar(): void {
        console.log(`Corre em velocidade: ${this.velocidade}km/h`);
    }
}

//Testes
const cachorro = new Cachorro("Daphne", 3, "Vira lata", "Mamífero", 30);
console.log(cachorro);
cachorro.andar();
cachorro.latir();

const cavalo = new Cavalo("Bojack", 15, "Appalooza", "Mamífero", 80);
console.log(cavalo);
cavalo.andar();
cavalo.relinchar();

const gato = new Gato("Bandit", 6, "Persa", "Mamífero", 40);
console.log(gato);
gato.andar();
gato.miar();
