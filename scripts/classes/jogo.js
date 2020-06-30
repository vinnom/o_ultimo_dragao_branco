class Jogo {
  constructor(estagio) {
    this.estagio = estagio;
  }

  inicializa() {
    cenarioFundo = new Cenario(imagem.fundo, velocidade.cenarioFundo);
    cenarioMeio = new Cenario(imagem.meio, velocidade.cenarioMeio);
    cenarioFrente = new Cenario(imagem.frente, velocidade.cenarioFrente);

    nuvem.push(new Nuvem(imagem.nuvemPequena, velocidade.nuvemPequena));
    nuvem.push(new Nuvem(imagem.nuvemMedia, velocidade.nuvemMedia));
    nuvem.push(new Nuvem(imagem.nuvemGrande, velocidade.nuvemGrande));
    nuvem.push(new Nuvem(imagem.nuvemGigante, velocidade.nuvemGigante));

    coordenadasInimigo = new Coordenadas(
      random(width, width * 3),
      random(imagem.verde.height / 6, height - imagem.verde.height / 6)
    );
    inimigo.push(new Inimigo(imagem.verde, coordenadasInimigo, velocidade.verde));

    coordenadasInimigo = new Coordenadas(
      random(width, width * 3),
      random(imagem.vermelho.height / 6, height - imagem.vermelho.height / 6)
    );
    inimigo.push(new Inimigo(imagem.vermelho, coordenadasInimigo, velocidade.vermelho));

    coordenadasInimigo = new Coordenadas(
      random(width, width * 3),
      random(imagem.preto.height / 6, height - imagem.preto.height / 6)
    );
    inimigo.push(new Inimigo(imagem.preto, coordenadasInimigo, velocidade.preto));

    coordenadasProtagonista = new Coordenadas(30, height / 2);
    protagonista = new Protagonista(imagem.protagonista, coordenadasProtagonista);

    placar = new Placar();
  }

  exibaCenario() {
    cenarioFundo.exiba();
    cenarioMeio.exiba();
    cenarioFrente.exiba();
  }

  exibaObstaculos() {
    for (let index = 0; index < nuvem.length; index++) {
      nuvem[index].exiba();
      if (nuvem[index].bateuNo(protagonista)) {
        noLoop();
      }
    }
  }

  exibaPlacar(){
    placar.exiba();
  }

  exibaProtagonista() {
    protagonista.exiba();
  }

  exibaInimigos() {
    for (let index = 0; index < inimigo.length; index++) {
      inimigo[index].exiba();
      if (inimigo[index].bateuNo(protagonista)) {
        noLoop();
      }
    }
  }

  exibaPoder() {
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
              placar.pontua();
              break;
            }
          }
        }
      }
    }
  }
}
