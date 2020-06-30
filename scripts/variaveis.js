const caminhoImagem = {
  fundo: "../imagens/cenario/fundo.png",
  meio: "../imagens/cenario/meio.png",
  frente: "../imagens/cenario/frente.png",
  protagonista: "../imagens/personagem/protagonista/dragao.png",
  verde: "../imagens/personagem/inimigos/verde.png",
  vermelho: "../imagens/personagem/inimigos/vermelho.png",
  preto: "../imagens/personagem/inimigos/preto.png",
  nuvemPequena: "../imagens/obstáculos/nuvempequena.png",
  nuvemMedia: "../imagens/obstáculos/nuvemmedia.png",
  nuvemGrande: "../imagens/obstáculos/nuvemgrande.png",
  nuvemGigante: "../imagens/obstáculos/nuvemgigante.png",
  bolaDeFogo: "../imagens/personagem/protagonista/boladefogo.png",
  gameover: "../imagens/recurso/gameover.png",
};
const imagem = {
  fundo: undefined,
  meio: undefined,
  frente: undefined,
  protagonista: undefined,
  verde: undefined,
  vermelho: undefined,
  preto: undefined,
  nuvemPequena: undefined,
  nuvemMedia: undefined,
  nuvemGrande: undefined,
  nuvemGigante: undefined,
  bolaDeFogo: undefined,
  gameover: undefined,
};
const velocidade = {
  cenarioFundo: 1,
  cenarioMeio: 2,
  cenarioFrente: 3,
  verde: 5,
  vermelho: 7,
  preto: 9,
  nuvemPequena: 10,
  nuvemMedia: 8,
  nuvemGrande: 6,
  nuvemGigante: 4,
  bolaDeFogo: 6,
};

const ESPACO = 32;

const matrizProtagonista = [
  [0, 0],
  [0, 223],
];
const matrizInimigo = [
  [0, 0],
  [0, 224],
];
const matrizBolaDeFogo = [
  [0, 0],
  [115, 0],
  [230, 0],
  [345, 0],
  [0, 25],
  [115, 25],
  [230, 25],
  [345, 25],
  [0, 50],
  [115, 50],
  [230, 50],
  [345, 50],
  [0, 75],
];
const bolaDeFogo = [];
const nuvem = [];
const inimigo = [];

const estagio = {
  inicio: "tela inicial",
  fase: "fase",
};

let coordenadasProtagonista;
let coordenadasInimigo;
let cenarioFundo;
let cenarioMeio;
let cenarioFrente;
let protagonista;

let botaoJogar;
let placar;
let jogo;
