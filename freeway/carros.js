//CARRO v
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 98, 150, 210, 260, 315]
let velocidadesCarros = [4, 3, 5, 2, 3.5, 4.5];
let alturaCarro = 40;
let comprimentoCarro = [50, 60, 80, 50, 80, 60];

function mostraCarros() {
  for(let i=0; i < imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro[i], alturaCarro);
}
}

function movimentaCarro() {
  for(let i=0; i < imagensCarros.length; i++){
  xCarros[i] -= velocidadesCarros[i];
  if(xCarros[i] < -50){xCarros[i] = 480}
}
}
