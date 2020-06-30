class Jogo {
  constructor(estagio) {
    this.estagio = estagio;
  }

  inicializa() {
    if (this.estagio === estagio.inicio) {
      cenarioFundo = new Cenario(imagem.fundo, velocidade.cenarioFundo);
      cenarioMeio = new Cenario(imagem.meio, velocidade.cenarioMeio);
      cenarioFrente = new Cenario(imagem.frente, velocidade.cenarioFrente);
    } else {
      instancia();
    }
  }

  interrompe() {
    image(imagem.gameover, width / 2 - imagem.gameover.width / 2, height / 3 - imagem.gameover.height / 2);
    botaoJogar = createButton("Reiniciar");
    botaoJogar.size(100, 80);
    botaoJogar.position(width / 2 - 80, height / 3 - imagem.gameover.height / 2 + 200);
    botaoJogar.mousePressed(reinicie);
    noLoop();
  }

  exiba() {
    if (this.estagio === estagio.inicio) {
      this._exibaCenario();
      fill("#ffffff");
      stroke("#000000");
      textAlign(CENTER);
      textSize(width / 15);
      text("O Último Dragão Branco", width / 2, height / 3);
      textSize(width / 60);
      text("Ajude o último dragão branco contra uma horda de dragões!", width / 2, height / 3 + 50);
      textSize(width / 60);
      text("Aperte ENTER para começar", width / 2, height / 3 + 100);
      textSize(width / 60);
      text("SHIFT - pausa", width / 2, height / 3 + 200);
      text("ESPAÇO - atira", width / 2, height / 3 + 250);
    } else {
      this._exibaCenario();
      this._exibaProtagonista();
      this._exibaInimigos();
      this._exibaObstaculos();
      this._exibaPoder();
      this._exibaPlacar();
    }
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
