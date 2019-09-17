let imagemDaEstrada;
let imagemDoAtor1;
let imagemDoAtor2;
let imagensCarros = [];

let trilhaSonora;
let somColidiu;
let somPonto;

function preload(){
  trilhaSonora = loadSound("Sons/trilha.mp3");
  somColidiu = loadSound("Sons/colidiu.mp3");
  somPonto = loadSound("Sons/pontos.wav");
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor1 = loadImage("imagens/ator-1.png");
  imagemDoAtor2 = loadImage("imagens/ator-1.png");
  imagensCarros[0] = loadImage("imagens/carro-1.png");
  imagensCarros[1] = loadImage("imagens/carro-2.png");
  imagensCarros[2] = loadImage("imagens/carro-3.png");
  imagensCarros[3] = loadImage("imagens/carro-1.png");
  imagensCarros[4] = loadImage("imagens/carro-2.png");
  imagensCarros[5] = loadImage("imagens/carro-3.png");
}