class Protagonista extends Personagem {
  constructor(imagem, coordenadas) {
    super(imagem, coordenadas);
    this.imagem = imagem;
    this.posicaoX = coordenadas.x;
    this.posicaoY = coordenadas.y;
    this.linha = 0;
    this.atrasoInicial = 10;
    this.atraso = this.atrasoInicial;
  }

  exiba() {
    super.exiba();
    this._mova();
  }

  _mova() {
    if (keyIsDown(UP_ARROW)) {
      this._suba();
    }
    if (keyIsDown(DOWN_ARROW)) {
      this._desca();
    }
  }

  atira() {
    const coordenadasBolaDeFogo = new Coordenadas(this.posicaoX + this.largura, this.posicaoY + this.altura / 2);
    bolaDeFogo.push(new Poder(imagem.bolaDeFogo, coordenadasBolaDeFogo, velocidade.bolaDeFogo));
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
