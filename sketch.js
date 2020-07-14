var packageIMG,package,helicopter,helicopterIMG;
var packageBody,groundSprite;
var Wall1,Wall2,Wall3;

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload ()
{
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(1000,700);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  

  package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale = 0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.8;

	Wall1 = new Wall(400,650,300,20);
	Wall2 = new Wall(250,615,20,90);
	Wall3 = new Wall(550,615,20,90);

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  
  drawSprites();
  Wall1.display();
  Wall2.display();
  Wall3.display();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	    
	 }
   }
