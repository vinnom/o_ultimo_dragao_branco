const caminhoImagem = {
  fundo: "../imagens/cenario/fundo.png",
  meio: "../imagens/cenario/meio.png",
  frente: "../imagens/cenario/frente.png",
  protagonista: "../imagens/personagem/protagonista/dragao.png",
  nuvemPequena: "../imagens/obstáculos/nuvempequena.png",
  nuvemMedia: "../imagens/obstáculos/nuvemmedia.png",
  nuvemGrande: "../imagens/obstáculos/nuvemgrande.png",
  nuvemGigante: "../imagens/obstáculos/nuvemgigante.png",
  bolaDeFogo: "../imagens/personagem/protagonista/boladefogo.png",
};
const imagem = {
  fundo: undefined,
  meio: undefined,
  frente: undefined,
  protagonista: undefined,
  nuvemPequena: undefined,
  nuvemMedia: undefined,
  nuvemGrande: undefined,
  nuvemGigante: undefined,
  bolaDeFogo: undefined,
};
const velocidade = {
  cenarioFundo: 1,
  cenarioMeio: 2,
  cenarioFrente: 3,
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

let coordenadasProtagonista;
let cenarioFundo;
let cenarioMeio;
let cenarioFrente;
let protagonista;

let jogo;
