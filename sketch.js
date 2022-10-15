var fundo;
var player, playerIMG, playerladoIMG, playercostasIMG;
var idleside, idleback, idle;
var hitbox1, hitbox2, hitbox3, hitbox4
var esqueleto, esqueletoIMG, esqueletoladoIMG, esqueletocostasIMG

function preload() {
  fundo = loadImage("Fundo.png");
  playerIMG = loadImage("character/frontGif.gif");
  playerladoIMG = loadImage("character/sideGif.gif");
  playercostasIMG = loadImage("character/backGif.gif");
  idle = loadImage("character/idle.png");
  idleback = loadImage("character/idleback.png");
  idleside = loadImage("character/idleside.png");
  esqueletoIMG = loadImage('frontgif.gif')
  esqueletoladoIMG = loadImage('sidegif.gif')
  esqueletocostasIMG = loadImage('backgif.gif')
}

function setup() {
  createCanvas(1280, 870);
  player = createSprite(897, 572);
  player.addImage("frente", playerIMG);
  player.addImage("costas", playercostasIMG);
  player.addImage("lado", playerladoIMG);
  player.addImage("idle", idle);
  player.addImage("idleback", idleback);
  player.addImage("idleside", idleside);
  hitbox1 = createSprite(742, 462, 130)
  hitbox2 = createSprite(702, 622, 130)
  hitbox3 = createSprite(1062, 462, 130)
  hitbox4 = createSprite(1062, 622, 130)
  hitbox1.visible = false
  hitbox2.visible = false
  hitbox3.visible = false
  hitbox4.visible = false
}

function draw() {
  background("black");

  image(fundo, 0, 0, 1800, 1600);

  player.collide(hitbox1);
  player.collide(hitbox2);
  player.collide(hitbox3);
  player.collide(hitbox4);

  if (keyDown("A") && player.x > 300) {
    player.x -= 5;
    player.changeImage("lado");
    player.mirrorX(1);
  }

  if (keyDown("S") && player.y < 1312) {
    player.y += 10;
    player.changeImage("frente");
  }

  if (keyDown("D") && player.x < 1767) {
    player.x += 5;
    player.changeImage("lado");
    player.mirrorX(-1);
  }

  if (keyDown("W") && player.y > 42) {
    player.y -= 10;
    player.changeImage("costas");
  }

  if (player.y < 447) {
    camera.position.y = 447;
  } else if (player.y > 1162) {
    camera.position.y = 1162;
  } else {
    camera.position.y = player.y;
  }

  if (player.x < 642) {
    camera.position.x = 642;
  } else if (player.x > 1157) {
    camera.position.x = 1157;
  } else {
    camera.position.x = player.x;
  }

  spawn();

  console.log("x:" + player.x + "y:" + player.y);
  drawSprites();
}

function keyReleased() {
  if (keyCode === 65) {
    player.changeImage("idleside");
  }
  //a
  if (keyCode === 83) {
    player.changeImage("idle");
  }
  //s
  if (keyCode === 68) {
    player.changeImage("idleside");
  }
  //d
  if (keyCode === 87) {
    player.changeImage("idleback");
  }
  //w
}

function spawn(){
if(frameCount % 60 === 0 ){
  var randomposition = Math.round(random(1,4))
  if(randomposition === 1 ){
    esqueleto = createSprite(random (100,1700),0)
    esqueleto.addImage(esqueletoIMG)
    //esqueleto.velocityY = 7
  }
  else if(randomposition === 2 ){
    esqueleto = createSprite(random (100,1700),1600)
    esqueleto.addImage(esqueletocostasIMG)
   // esqueleto.velocityY = -7
  }
  else if(randomposition === 3 ){
    esqueleto = createSprite(0,random(100, 1600))
    esqueleto.addImage(esqueletoladoIMG)
    esqueleto.mirrorX(-1)
   // esqueleto.velocityX = 7
  }
  else if(randomposition === 4 ){
    esqueleto = createSprite(1700,random(100, 1600))
    esqueleto.addImage(esqueletoladoIMG)
    esqueleto.mirrorX(1)
    //esqueleto.velocityX = -7
  }

  esqueleto.attractionPoint(7, player.x, player.y)

}
}






