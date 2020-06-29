const caminhoImagem = {
  fundo: "../imagens/cenario/fundo.png",
  meio: "../imagens/cenario/meio.png",
  frente: "../imagens/cenario/frente.png",
  protagonista: "../imagens/personagem/protagonista/dragao.png",
  nuvemPequena: "../imagens/obstáculos/nuvempequena.png",
  nuvemMedia: "../imagens/obstáculos/nuvemmedia.png",
  nuvemGrande: "../imagens/obstáculos/nuvemgrande.png",
  nuvemGigante: "../imagens/obstáculos/nuvemgigante.png",
};
const imagem = {
  fundo: undefined,
  meio: undefined,
  frente: undefined,
  protagonista: undefined,
};
const velocidade = {
  cenarioFundo: 1,
  cenarioMeio: 2,
  cenarioFrente: 3,
};

const matrizProtagonista = [
  [0, 0],
  [0, 223],
];

let coordenadasProtagonista;
let cenarioFundo;
let cenarioMeio;
let cenarioFrente;
let protagonista;

let jogo;
