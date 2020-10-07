
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope3, rope4, rope5;

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(500,100,500,40);
	bob1 = new Bob(300,500);
	bob2 = new Bob(400,500);
	bob3 = new Bob(500,500);
	bob4 = new Bob(600,500);
	bob5 = new Bob(700,500);
	rope1 = new Rope(bob1.body, {x:300, y:100}, -95*2, 0);
	rope2 = new Rope(bob2.body, {x:400, y:100}, -95*2, 0);
	rope3 = new Rope(bob3.body, {x:500, y:100}, -95*2, 0);
	rope4 = new Rope(bob4.body, {x:600, y:100}, -95*2, 0);
	rope5 = new Rope(bob5.body, {x:700, y:100}, -95*2, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("skyblue");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 }

 function keyPressed() {
	 if(keyCode === "UP_ARROW"){
	 Matter.body.applyForce(bob.body,bob.body.position) }
 }