function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  jogo = new Jogo("teste");
  jogo.inicializa();
}

function draw() {
  jogo.exibaCenario();
  jogo.exibaProtagonista();
  jogo.exibaPoder();
  jogo.exibaObstaculos();
}

function keyPressed() {
  if (keyCode === ESPACO) {
    protagonista.atira();
  }
}
