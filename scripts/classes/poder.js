class Poder {
  constructor(imagem, coordenadas, velocidade) {
    this.imagem = imagem;
    this.posicaoX = coordenadas.x;
    this.posicaoY = coordenadas.y;
    this.coordenadas = coordenadas;
    this.velocidade = velocidade;
    this.largura = this.imagem.width / 4;
    this.altura = this.imagem.height / 4;
    this.lancado = true;
    this.linha = 0;
    this.coluna = 0;
    this.m = 0;
    this.n = 1;
    this.indice = 0;
  }

  exiba() {
    image(
      this.imagem,
      this.posicaoX,
      this.posicaoY,
      this.largura,
      this.altura,
      matrizBolaDeFogo[this.coluna][this.m],
      matrizBolaDeFogo[this.linha][this.n],
      this.largura,
      this.altura
    );
    this._mova();
    this._anima();
    this._naTela();
  }

  _anima() {
    if (this.indice < matrizBolaDeFogo.length) {
      this.coluna++;
      if (this.coluna === 3) {
        this.linha++;
        this.coluna = 0;
      }
      this.indice++;
    }
  }

  _mova() {
    if (this.lancado) {
      this.posicaoX += this.velocidade;
    }
  }

  _naTela() {
    if (this.posicaoX > width) {
      this.lancado = false;
    }
  }

  bateuNa(obstaculo) {
    return collideRectCircle(
      obstaculo.posicaoX + 10,
      obstaculo.posicaoY + 5,
      obstaculo.imagem.width * 0.8,
      obstaculo.imagem.height * 0.8,
      this.posicaoX + 35,
      this.posicaoY + 12,
      15
    );
  }
}
