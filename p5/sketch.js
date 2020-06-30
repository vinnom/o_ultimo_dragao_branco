function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  jogo = new Jogo("teste");
  inicie();
}

function draw() {
  jogo.exiba();
}

function keyPressed() {
  if (keyCode === ESPACO) {
    protagonista.atira();
  }
}

function inicie() {
  jogo.inicializa();
}

function reinicie() {
  botaoReiniciar.remove();
  inimigo.length = 0;
  nuvem.length = 0;
  bolaDeFogo.length = 0;

  inicie();
  redraw();
  loop();
}
