class Inimigo extends Personagem {
  constructor(imagem, coordenadas, velocidade, especie) {
    super(imagem, coordenadas);
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.posicaoX = coordenadas.x;
    this.posicaoY = coordenadas.y;
    this.especie = especie;
  }

  exiba() {
    super.exiba();
    this._mova();
    this.bateuNo(protagonista);
  }

  _mova() {
    this.posicaoX -= this.velocidade;
    if (this.posicaoX <= -this.imagem.width) {
      this.transporta();
    }
  }

  transporta() {
    this.posicaoX = random(width, width * 3);
    this.posicaoY = random(this.imagem.height / 6, height - this.imagem.height / 6);
  }

  bateuNo(protagonista) {
    return collideCircleCircle(
      this.posicaoX + this.imagem.width / 6,
      this.posicaoY + this.imagem.height / 10,
      40,
      protagonista.posicaoX + protagonista.imagem.width / 6,
      protagonista.posicaoY + protagonista.imagem.height / 10,
      40
    );
  }
}
