var backGround,backGroundImage;
var fairy,fairyImage;
var music;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var star,starImage;
var engine, world;
var ground;
var starsprite;
function preload()
{
   //preload the images here
   backGroundImage = loadImage("starnight.png");
   fairyImage = loadAnimation("fairy1.png","fairy2.png");
   music=loadSound("JoyMusic.mp3");
   starImage = loadImage("star.png");
}

function setup() {
  createCanvas(600, 600);
  engine = Engine.create(); 
  world = engine.world;
  backGround = createSprite(200,200,20,20);
  backGround.addImage(backGroundImage);

  fairy = createSprite(150,270,20,20);
  fairy.addAnimation("flying",fairyImage);
  fairy.scale=0.2;
  music.play();
  var star_options =  {restitution: 1.0 };
  
  star =Bodies.circle(200,100,20,star_options);
  World.add(world,star);
  starsprite.addImage(starImage);
  

}


function draw() {
  background("white");
  Engine.update(engine); 
  rectMode(RADIUS);
  rect(star.position.x,star.position.y,20,20);
  drawSprites();
}
