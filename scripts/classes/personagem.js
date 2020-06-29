class Personagem {
  constructor(imagem, coordenadas) {
    this.imagem = imagem;
    this.posicaoX = coordenadas.x;
    this.posicaoY = coordenadas.y;
    this.linha = 0;
    this.atrasoInicial = 10;
    this.atraso = this.atrasoInicial;
  }

  exiba() {
    image(
      this.imagem,
      this.posicaoX,
      this.posicaoY,
      this.imagem.width / 4,
      this.imagem.height / 6,
      matrizProtagonista[this.linha][0],
      matrizProtagonista[this.linha][1],
      this.imagem.width,
      this.imagem.height / 2
    );
    this._anime();
    this.mova();
  }

  _anime() {
    this.atraso--;
    if (this.atraso === this.atrasoInicial / 2) {
      if (this.linha === 0) {
        this.linha++;
      }
    }
    if (this.atraso === 0) {
      if (this.linha === 1) {
        this.linha--;
        this.atraso = this.atrasoInicial;
      }
    }
  }

  mova() {
    if (keyIsDown(UP_ARROW)) {
      this._suba();
    }
    if (keyIsDown(DOWN_ARROW)) {
      this._desca();
    }
  }

  _suba() {
    if (this.posicaoY > height / 40) {
      this.posicaoY -= height / 40;
    }
  }

  _desca() {
    if (this.posicaoY < height - this.imagem.height / 6) {
      this.posicaoY += height / 40;
    }
  }
}
