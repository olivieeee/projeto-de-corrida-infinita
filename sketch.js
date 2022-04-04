var iniciar=1;
var perdeu=0;
var garoto, garotocorrendo, garotocolidindo;
var fundoimagem, fundo;
var nuvensGroup, nuvens1, nuvens2;
var obstaculosGroupo, bstaculo, obstaculo1; 
var gameState=iniciar;
var pontuação;
var rejogarImg, gameoverimg;
var pulandoSom, checkPointSom, morreuSom;
var chaoinv;
var gameState=iniciar;


function preload(){
fundoimagem=loadImage("chao.png")
garotocorrendo=loadAnimation("correndo 1.png","correndo 2.png")
garotocolidindo=loadImage("perdeu.png")
obstaculo1=loadAnimation("obstaculo01.png","obstaculoso2.png","obstaculos03.png","obstaculos04.png")
obstaculo=loadAnimation("verde1.png", "verde2.png", "verde3.png", "verde4.png")
nuvem1=loadImage("nuvens 1.png")
nuvem2=loadImage("nuvens 2.png");
pulandoSom=loadSound("hammer.mp3");
checkPointSom=loadSound("zelda-fairy.mp3");
morreuSom=loadSound("fireworks.mp3");
rejogarImg= loadImage("reset.png");
gameoverimg= loadImage("gameover.png");
}
function setup() {
createCanvas(700,350);

garoto= createSprite(50,310,22,51);
  garoto.addAnimation("correndo", garotocorrendo);
  garoto.addImage("colidindo", garotocolidindo);
chaoinv=createSprite(300, 330, 700, 35)
chaoinv.visible=false
  garoto.scale=0.09
  garoto.setCollider("rectangle",0,0,100,100);
garoto.debug = false
fundo=createSprite(200, 340)
fundo.addImage(fundoimagem)
fundo.scale=2.5
obstaculosGroupo=new Group()
nuvensGroup = new Group()
fundo.velocityX = -4
}
function draw() {

  garoto.changeAnimation("", garotocolidindo);
  

  if(gameState==iniciar){
if(keyDown ("space")){
    garoto.velocityY=-10
  }
  garoto.velocityY = garoto.velocityY + 0.7
Obstaculos();
Nuvem();
if (garoto.isTouching(obstaculosGroupo))
gameState=perdeu
  }
else {
garoto.changeAnimation("colidindo", garotocolidindo);
var gameover=createSprite(350, 137)
gameover.addImage(gameoverimg)
gameover.scale=0.5
fundo.velocityX=0
obstaculosGroupo.setVelocityXEach(0)
nuvensGroup.setVelocityXEach(0)
var rejogar =createSprite(350, 300 )
rejogar.addImage(rejogarImg)
rejogar.scale=0.8
if(mousePressedOver(rejogar)) {
  reset();}
}
background("lightBlue");
 drawSprites();

garoto.collide(chaoinv)
}
function Obstaculos(){
if(frameCount%98==0){
var obstaculo00=createSprite(700, 309)
if(Math.round(random(1,2))==1){
obstaculo00.addAnimation("fantasma", obstaculo1)
obstaculo00.velocityX=-4
}
else{
    obstaculo00.addAnimation("monstro", obstaculo)
    obstaculo00.velocityX=-4


}
obstaculo00.scale=0.5
obstaculosGroupo.add(obstaculo00)

fundo.x = width/3


}
}
function Nuvem(){
  if(frameCount%180==0){  
  var nuvem00=createSprite(700, 70)
  if (Math.round(random(7, 9))==7){
  nuvem00.addImage("nuvenzinha", nuvem1)
  nuvem00.velocityX=-5
  nuvem00.scale=0.400
  }
  else{
  nuvensGroup.add(nuvem00)
  nuvem00.addImage("nuvenzinha1", nuvem2)  
  nuvem00.velocityX=-3
  nuvem00.scale=0.450
  nuvem00.lifetime=400
  }
}



}