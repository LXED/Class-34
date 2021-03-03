const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var ground,round;



function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world

  ground = new Ground(600,600,1200,20);
  box1 = new Box(900,100,50,50);
  box2 = new Box(900,50,50,50);
  box3 = new Box(900,0,50,50);
  box4 = new Box(900,-50,50,50);
  box5 = new Box(900,-100,50,50);
  box6 = new Box(850,100,50,50);
  box7 = new Box(850,50,50,50);
  box8 = new Box(850,0,50,50);
  box9 = new Box(800,-50,50,50);
  box10 = new Box(850,-100,50,50);

  //ball
  ball1 = new Ball(700,200,80,80)

  chain1 = new Chain(ball1.body,{x:700,y:200})
  

 
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ball1.display();
  chain1.display();



 
}

function mouseDragged(){

  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

  
}