class Jogo {
  constructor(estagio) {
    this.estagio = estagio;
  }

  inicializa() {
    cenarioFundo = new Cenario(imagem.fundo, velocidade.cenarioFundo);
    cenarioMeio = new Cenario(imagem.meio, velocidade.cenarioMeio);
    cenarioFrente = new Cenario(imagem.frente, velocidade.cenarioFrente);

    coordenadasProtagonista = new Coordenadas(30, height / 2);
    protagonista = new Protagonista(imagem.protagonista, coordenadasProtagonista);
  }

  exibaCenario() {
    cenarioFundo.exiba();
    cenarioMeio.exiba();
    cenarioFrente.exiba();
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
