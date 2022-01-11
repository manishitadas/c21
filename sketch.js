var zombie, zombieImg;
var girl, girlImg;
var forest, forestImg;
var gameState = "play";
var rock, rockImg, rocksGroup;
var ground;

function preload(){
  forestImg = loadImage("forest.png");
  zombieImg = loadImage("zombie.png");
  girlImg = loadAnimation("running.png");
  rockImg = loadImage("rock.png");
}

function setup() {
  createCanvas(600, 600);
  forest = createSprite(0, 190, 600, 600);
  forest.addImage("forest", forestImg);
  forest.velocityX = -5;
  forest.scale = 0.5;
  forest.x = forest.width/8;

  girl = createSprite(200, 300);
  girl.addAnimation("girl", girlImg);

  zombie = createSprite(50, 300);
  zombie.addAnimation("zombie", zombieImg);
  zombie.scale = 0.1;

  rocksGroup = new Group();

  ground = createSprite(300, 375, 600, 25);
  ground.visible = false;
}
//
function draw() {
  background(255);
  if(forest.x < 0) {
    forest.x = forest.width/8;
  }
  drawSprites();
  spawnRocks();

  girl.collide(ground); 
  if(keyDown("SPACE")){
  
    girl.velocityY = -10;
  }
  girl.velocityY = girl.velocityY + 0.8;
}

function spawnRocks() {
  if(frameCount % 240 === 0) {
    var rock = createSprite(-450, 200);
    rock.velocityX = -5;
    rock.lifetime = 800;

    rocksGroup.add(rock);
  }
}