var car, wall, wallImg, carW, carR, carY, carG;
var backgroundImg;
var speed, weight;

function preload(){
  carW = loadImage("carW.png");
  carR = loadImage("carR.png");
  carY = loadImage("carY.png");
  carG = loadImage("carG.png");

  wallImg = loadImage("wall.png");

  backgroundImg = loadImage("bg.png");
}

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)

 car=createSprite(50, 270, 50, 50);
car.velocityX = speed;
car.addImage(carW);
car.scale=2.5;
wall=createSprite(1500,200,60,height/2);
wall.addImage(wallImg);
wall.scale=3;

}

function draw() {
  background(backgroundImg);  

  if(wall.x-car.x <= (car.width+wall.width)/5){
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;

      if(deformation>180){
        car.addImage(carR);
      }

      if(deformation<180 && deformation>100){
        car.addImage(carY); 
      }

      if(deformation<100){
        car.addImage(carG);
      }
  }

  
  drawSprites();
}