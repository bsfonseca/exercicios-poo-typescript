import { Ingresso, IngressoCamarote, IngressoNormal, IngressoVip } from "./pilares/ex01";
import { ImovelNovo, ImovelVelho } from "./pilares/ex02";
import { Animal, Cachorro, Cavalo, Gato } from "./pilares/ex03";

//Exercício 1

const ingresso = new IngressoNormal(500);
ingresso.imprimeValor();

const ingressoVip = new IngressoVip(500, 200);
ingressoVip.imprimeValor();

const camarote = new IngressoCamarote(200, 300);
camarote.imprimeValor();
