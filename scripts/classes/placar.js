class Placar {
  constructor() {
    this.pontuacao = 0;
    this.branco = "#ffffff";
  }

  exiba() {
    fill(this.branco);
    text(this.pontuacao, width - 100, 100);
    textSize(50);
    textAlign(RIGHT, TOP);
  }

  pontua() {
    this.pontuacao++;
  }
}
