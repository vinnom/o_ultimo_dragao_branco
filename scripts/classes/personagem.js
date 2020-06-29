class Personagem {
  constructor(imagem, coordenadas) {
    this.imagem = imagem;
    this.posicaoX = coordenadas.x;
    this.posicaoY = coordenadas.y;
    this.linha = 0;
    this.atrasoInicial = 10;
    this.atraso = this.atrasoInicial;
    this.largura = this.imagem.width / 4;
    this.altura = this.imagem.height / 6;
    this.larguraSprite = this.imagem.width;
    this.alturaSprite = this.imagem.height / 2;
  }

  exiba() {
    image(
      this.imagem,
      this.posicaoX,
      this.posicaoY,
      this.largura,
      this.altura,
      matrizProtagonista[this.linha][0],
      matrizProtagonista[this.linha][1],
      this.larguraSprite,
      this.alturaSprite
    );
    this._anime();
  }

  _anime() {
    this.atraso--;
    if (this.atraso === this.atrasoInicial / 2) {
      if (this.linha === 0) {
        this.linha++;
      }
    } else if (this.atraso === 0) {
      if (this.linha === 1) {
        this.linha--;
        this.atraso = this.atrasoInicial;
      }
    }
  }
}
