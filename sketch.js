const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

function preload(){

  polygonImage=loadImage("polygon.png")
  

}



function setup() {
  createCanvas(3000,800);



engine=Engine.create();
world=engine.world

ground=new Ground(600,600,1200,20)
ground2=new Ground(385,300,300,20)

box1=new Box(480,275,30,40)
box2=new Box(300,275,30,40)
box3=new Box(330,275,30,40)
box4=new Box(360,275,30,40)
box5=new Box(390,275,30,40)
box6=new Box(420,275,30,40)
box7=new Box(450,275,30,40)
box8=new Box(330,235,30,40)
box9=new Box(360,235,30,40)
box10=new Box(390,235,30,40)
box11=new Box(420,235,30,40)
box12=new Box(450,235,30,40)
box13=new Box(360,195,30,40)
box14=new Box(390,195,30,40)
box15=new Box(420,195,30,40)
box16=new Box(390,155,30,40)

polygon = Bodies.circle(50,200,20)

World.add(world,polygon)



slingshot1=new SlingShot(this.polygon,{x:100,y:200});


}


function draw() {
  background(255,255,255); 
  Engine.update(engine)
  ground.display();
  ground2.display()
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
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
polygon.display();
slingshot1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}














