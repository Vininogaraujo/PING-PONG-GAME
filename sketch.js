//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let velocidadeYOponente

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xRaqueteOponente = 585
let yRaqueteOponente = 150;

let colidiu = false;

 // placar do jogo
 let meusPontos = 0
 let pontosOponente = 0
function setup() {
  createCanvas(600, 400);
} 

function draw() {
  background("pink");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  colisaoOponenteRaqueteBiblioteca()
  incluiPlacar();
  marcaPontos();
}

function mostraBolinha() {
  fill("purple")
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoOponenteRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}
function movimentaRaqueteOponete(){
 if(KeyIsDown(87)) {
   yRaqueteOponente -=10;
 }
 if(KeyIsdown(83)) {
   yRaqueteOponente += 10;
   }
 }

function incluiPlacar (){
  textAlign(CENTER)
  fill(0)
  textSize(18)
  rect(235, 15, 30, 20)
  fill(255)
  text(meusPontos, 250, 30)
  fill(0)
  rect(315, 15, 30, 20)
  fill(255)
  text(pontosOponente, 328, 30);

}
  function marcaPontos(){
  if(xBolinha > 590){
    meusPontos += 1
  }
 if (xBolinha < 11){
     PontosOponente =+ 1
  }
}