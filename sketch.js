
var trex ,trex_running, edges;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;
  trex.x=50;

  edges=createEdgeSprites();
 
}

function draw(){
  //set the background white
  background("white");

  console.log(trex.y);
  
  //jump the trex
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  //Given  the gravity
  trex.velocityY=trex.velocityY+0.5;

  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites()
}
