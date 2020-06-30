class Jogo {
  constructor(estagio) {
    this.estagio = estagio;
  }

  inicializa() {
    instancia();
  }

  interrompe() {
    image(imagem.gameover, width / 2 - imagem.gameover.width / 2, height / 3 - imagem.gameover.height / 2);
    botaoReiniciar = createButton("Reiniciar");
    botaoReiniciar.size(100, 80);
    botaoReiniciar.position(width / 2 - 80, height / 3 - imagem.gameover.height / 2 + 200);
    botaoReiniciar.mousePressed(reinicie);
    noLoop();
  }

  exiba() {
    this._exibaCenario();
    this._exibaProtagonista();
    this._exibaInimigos();
    this._exibaObstaculos();
    this._exibaPoder();
    this._exibaPlacar();
  }

  _exibaCenario() {
    cenarioFundo.exiba();
    cenarioMeio.exiba();
    cenarioFrente.exiba();
  }

  _exibaObstaculos() {
    for (let index = 0; index < nuvem.length; index++) {
      nuvem[index].exiba();
      if (nuvem[index].bateuNo(protagonista)) {
        this.interrompe();
      }
    }
  }

  _exibaPlacar() {
    if (placar.pontuacao >= 0) {
      placar.exiba();
    } else {
      this.interrompe();
    }
  }

  _exibaProtagonista() {
    protagonista.exiba();
  }

  _exibaInimigos() {
    for (let index = 0; index < inimigo.length; index++) {
      inimigo[index].exiba();
      if (inimigo[index].bateuNo(protagonista)) {
        this.interrompe();
      }
      if (inimigo[index].posicaoX <= 0) {
        placar.despontua(inimigo[index]);
        inimigo[index].transporta();
      }
    }
  }

  _exibaPoder() {
    for (let i = 0; i < bolaDeFogo.length; i++) {
      if (bolaDeFogo[i].lancado) {
        bolaDeFogo[i].exiba();
        for (let j = 0; j < nuvem.length; j++) {
          if (bolaDeFogo[i].bateuNa(nuvem[j])) {
            bolaDeFogo.splice(i, 1);
            break;
          }
        }
        if (bolaDeFogo[i] != undefined) {
          for (let j = 0; j < inimigo.length; j++) {
            if (bolaDeFogo[i].bateuNo(inimigo[j])) {
              bolaDeFogo.splice(i, 1);
              inimigo[j].transporta();
              placar.pontua(inimigo[j]);
              break;
            }
          }
        }
      }
    }
  }
}
