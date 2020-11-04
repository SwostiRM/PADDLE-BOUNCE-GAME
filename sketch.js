var ball,paddle,ballimg,paddleimg;

function preload() {
ballimg=loadImage("ball.png") 
paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200,20,20) 
   ball.addImage("ball",ballimg)
   ball.velocityX=5
   
   paddle=createSprite(380,200,20,20)
   paddle.addImage("paddle",paddleimg)
}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites()
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  if(ball.bounceOff(paddle)){
  randomVelocity();
  }
  paddle.bounceOff(edges[2])
  paddle.bounceOff(edges[3])
  
paddle.velocityY=0;
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-6
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=6;
  }
  drawSprites();
  
}

function randomVelocity(){
ball.velocityY=-5
}

