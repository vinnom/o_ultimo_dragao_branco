class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.posicaoX1 = 0;
    this.posicaoX2 = this.imagem.width;
    this.posicaoY = 0;
  }

  exiba() {
    image(this.imagem, this.posicaoX1, this.posicaoY, this.imagem.width, this.imagem.height);
    image(this.imagem, this.posicaoX2, this.posicaoY, this.imagem.width, this.imagem.height);
    this._mova();
  }

  _mova() {
    this.posicaoX1 -= this.velocidade;
    this.posicaoX1 = this._encaixe(this.posicaoX1);

    this.posicaoX2 -= this.velocidade;
    this.posicaoX2 = this._encaixe(this.posicaoX2);
  }

  _encaixe(posicaoX) {
    if (posicaoX < -this.imagem.width) {
      return this.imagem.width - 3;
    }
    return posicaoX;
  }
}
