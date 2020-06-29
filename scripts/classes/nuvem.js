class Nuvem {
  constructor(imagemObstaculo, velocidade) {
    this.imagem = imagemObstaculo;
    this.velocidade = velocidade;
    this.posicaoX = random(width, width * 3);
    this.posicaoY = random(this.imagem.height, height - 450);
  }

  exiba() {
    image(this.imagem, this.posicaoX, this.posicaoY);
    this._mova();
  }

  _mova() {
    this.posicaoX -= this.velocidade;
    if (this.posicaoX <= -this.imagem.width) {
      this.posicaoX = random(width, width * 5);
      this.posicaoY = random(this.imagem.height, height - 450);
    }
  }

  bateuNo(protagonista) {
    return collideRectCircle(
      this.posicaoX + 10,
      this.posicaoY + 5,
      this.imagem.width * 0.8,
      this.imagem.height * 0.8,
      protagonista.posicaoX + protagonista.imagem.width / 6,
      protagonista.posicaoY + protagonista.imagem.height / 10,
      40
    );
  }
}
