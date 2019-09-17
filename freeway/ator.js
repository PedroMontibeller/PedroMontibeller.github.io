let yAtor1 = 366;
let yAtor2 = 366;
let colidiu = false;
let xAtor1 = 100;
let xAtor2 = 180;
let pontos1 = 0;
let pontos2 = 0;

function mostraPlacar1(){
  if(yAtor1 < 15){ 
      pontos1 +=1; voltarPosicao1(); somPonto.play();
  }
  textAlign(CENTER);
  textSize(25);
  fill(color(0, 0, 255));
  text(pontos1, 150, 30);
}

function mostraPlacar2(){
  if(yAtor2 < 15){ pontos2 +=1; voltarPosicao2(); somPonto.play();}
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 0));
  text(pontos2, 230, 30);
}

function verificaColisao1(){
  for(let i=0; i < imagensCarros.length; i++){
    colidiu1 = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro[i], alturaCarro, xAtor1, yAtor1, 15);
    if(colidiu1){voltarPosicao1(); somColidiu.play();}
  }
}
    
    function verificaColisao2(){
  for(let i=0; i < imagensCarros.length; i++){
    colidiu2 = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro[i], alturaCarro, xAtor2, yAtor2, 15);
    if(colidiu2){voltarPosicao2(); somColidiu.play();}
    
    //if(pontos > 0){ pontos -=  1; }
  }
}

function voltarPosicao1(){yAtor1 = 366;}
function voltarPosicao2(){yAtor2 = 366;}

function movimentaVaca1(){
  if(keyIsDown(87)){
    if(yAtor1 > 5)
    yAtor1 -= 2;
  }
  if(keyIsDown(83)){
    if(yAtor1 < 365)
    yAtor1 += 2;
  }
}

function movimentaVaca2(){
  if(keyIsDown(UP_ARROW)){
    if(yAtor2 > 5){
      yAtor2 -= 2;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor2 < 365){
    yAtor2 += 2;
    }
  }
}

function mostraAtor() {
  image(imagemDoAtor1, xAtor1, yAtor1, 30, 30);               
  image(imagemDoAtor2, xAtor2, yAtor2, 30, 30);
}