const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  var options={
    isStatic:true
  }
object = Bodies.rectangle(200,390,400,20,options);
World.add(world,object);

var ball_options={
  restitution:1.0
}
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);

}

function draw() {
  Engine.update(engine);
  background(0);  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}