const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies

var Pengine,world,ground,ball



function setup() {
  createCanvas(800,400);
 Pengine=Engine.create() 
 world=Pengine.world
var groundoption = {
isStatic:true

}
 ground=Bodies.rectangle(400,390,800,10,groundoption)
 World.add(world,ground)
var balloption ={
  restitution:1.5
}
ball=Bodies.circle(400,30,40,balloption)
 World.add(world,ball)
}

function draw() {
  background('red');  
  Engine.update(Pengine)
rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,40,40)
}











