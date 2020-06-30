function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  jogo = new Jogo(estagio.inicio);
  inicie();
}

function draw() {
  jogo.exiba();
}

function keyPressed() {
  if (keyCode === ESPACO) {
    protagonista.atira();
  }
  if (jogo.estagio === estagio.inicio && keyCode === ENTER) {
    jogo.estagio = estagio.fase;
    inicie();
  }
  if (jogo.estagio === estagio.fase) {
    if (keyCode === SHIFT) {
      noLoop();
    } else {
      loop();
    }
  }
}

function inicie() {
  if (botaoJogar != undefined) {
    botaoJogar.remove();
  }
  jogo.inicializa();
}

function reinicie() {
  inimigo.length = 0;
  nuvem.length = 0;
  bolaDeFogo.length = 0;

  inicie();
  redraw();
  loop();
}
