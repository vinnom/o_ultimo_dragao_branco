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

    coordenadasProtagonista = new Coordenadas(30, height / 2);
    protagonista = new Protagonista(imagem.protagonista, coordenadasProtagonista);
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

  exibaProtagonista() {
    protagonista.exiba();
  }

  exibaPoder() {
    for (let index = 0; index < bolaDeFogo.length; index++) {
      if (bolaDeFogo[index].lancado) {
        bolaDeFogo[index].exiba();
      }
    }
  }
}
