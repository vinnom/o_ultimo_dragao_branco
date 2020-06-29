function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  jogo = new Jogo("teste");
  jogo.inicializa();
}

function draw() {
  jogo.exibaCenario();
  jogo.exibaProtagonista();
}

function keyPressed() {}
