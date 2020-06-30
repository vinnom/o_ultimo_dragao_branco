class Placar {
  constructor() {
    this.pontuacao = 0;
    this.branco = "#ffffff";
    this.preto = "#000000";
  }

  exiba() {
    fill(this.branco);
    stroke(this.preto);
    text(this.pontuacao, width - 100, 100);
    textSize(50);
    textAlign(RIGHT, TOP);
  }

  pontua(inimigo) {
    switch (inimigo.especie) {
      case "verde":
        this.pontuacao++;
        break;
      case "vermelho":
        this.pontuacao += 2;
        break;
      case "preto":
        this.pontuacao += 5;
        break;
      default:
        break;
    }
  }

  despontua(inimigo) {
    switch (inimigo.especie) {
      case "verde":
        this.pontuacao--;
        break;
      case "vermelho":
        this.pontuacao -= 2;
        break;
      case "preto":
        this.pontuacao -= 5;
        break;
      default:
        break;
    }
  }
}
