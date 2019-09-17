function setup() {
  createCanvas(500, 400);
 trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  vitoria();
  
  if(!(pontos1 >= 10 || pontos2 >= 10)){
    jogo();
  }
}
function jogo() {
  mostraAtor();
  mostraCarros();
  movimentaCarro();
  movimentaVaca1();
  movimentaVaca2();
  verificaColisao1();
  verificaColisao2();
  mostraPlacar1();
  mostraPlacar2();
}

function vitoria() {
  if(pontos1 >= 10){
  textAlign(CENTER);
  textSize(45);
  fill(color(0, 0, 255));
  text("JOGADOR 1 VENCEU", 250, 250);
  }
  
  if(pontos2 >= 10){
  textAlign(CENTER);
  textSize(45);
  fill(color(255, 0, 0));
  text("JOGADOR 2 VENCEU", 250, 250);
  }
}