function instancia() {
  _criaCenario();
  _criaObstaculos();
  _criaInimigos();
  _criaProtagonista();
  _criaPlacar();
}

function _criaCenario() {
  cenarioFundo = new Cenario(imagem.fundo, velocidade.cenarioFundo);
  cenarioMeio = new Cenario(imagem.meio, velocidade.cenarioMeio);
  cenarioFrente = new Cenario(imagem.frente, velocidade.cenarioFrente);
}

function _criaObstaculos() {
  nuvem.push(new Nuvem(imagem.nuvemPequena, velocidade.nuvemPequena));
  nuvem.push(new Nuvem(imagem.nuvemMedia, velocidade.nuvemMedia));
  nuvem.push(new Nuvem(imagem.nuvemGrande, velocidade.nuvemGrande));
  nuvem.push(new Nuvem(imagem.nuvemGigante, velocidade.nuvemGigante));
}

function _criaInimigos() {
  coordenadasInimigo = new Coordenadas(
    random(width, width * 3),
    random(imagem.verde.height / 6, height - imagem.verde.height / 6)
  );
  inimigo.push(new Inimigo(imagem.verde, coordenadasInimigo, velocidade.verde, "verde"));

  coordenadasInimigo = new Coordenadas(
    random(width, width * 3),
    random(imagem.vermelho.height / 6, height - imagem.vermelho.height / 6)
  );
  inimigo.push(new Inimigo(imagem.vermelho, coordenadasInimigo, velocidade.vermelho, "vermelho"));

  coordenadasInimigo = new Coordenadas(
    random(width, width * 3),
    random(imagem.preto.height / 6, height - imagem.preto.height / 6)
  );
  inimigo.push(new Inimigo(imagem.preto, coordenadasInimigo, velocidade.preto, "preto"));
}

function _criaProtagonista() {
  coordenadasProtagonista = new Coordenadas(30, height / 2);
  protagonista = new Protagonista(imagem.protagonista, coordenadasProtagonista);
}

function _criaPlacar() {
  placar = new Placar();
}
