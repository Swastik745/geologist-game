
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer,stone,rubber,iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//code here
	ground = new Ground(600,390,1200,20);
	rubber = new Rubber(1000,160,50,50);
	hammer = new Hammer(100,100);
    stone = new Stone(810,160,70,70); 
    iron = new Iron(410,160,80,50);
    sand1 = new Sand(310,160,15,15);
	sand2 = new Sand(115,160,15,15);
	sand3 = new Sand(510,160,15,15);
	sand4 = new Sand(570,160,15,15);
	sand5 = new Sand(605,160,15,15);
	sand6 = new Sand(650,160,15,15);
	sand7 = new Sand(170,160,15,15);
	sand8 = new Sand(140,160,15,15);
	//Engine.run(engine);
  
}


function draw() {
   background("lightBlue");

   sand1.display();
   sand2.display();
   sand3.display();
   sand4.display();
   sand5.display();
   sand6.display();
   sand7.display();
   sand8.display();
   iron.display();
   Engine.update(engine);
   stone.display();
   rubber.display();
   ground.display();
   hammer.display();
   rubber.display();
   

}



