const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos=[];
var particles = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,600);
   engine = Engine.create();
   world = engine.world;

   for ( var k = 0; k<= width ; k= k+80){
     divisions.push( new Division( k , height-divisionHeight/2, 10 , divisionHeight ))
   }
   
    for ( var k = 40; k<= width ; k= k+50){
      for(var j = 75; j<= 370 ; j= j+100 )
     plinkos.push( new Plinko(k,j,10));
   }

   for ( var k = 15; k<= width-10 ; k= k+50){
      for(var j = 125; j<= 270 ; j= j+100 )
     plinkos.push( new Plinko(k,j,10));
   }

  g1 = new Ground(240,598,570,4);
  g2 = new Ground(240,2,570,4);
  g3 = new Ground(2,300,4,600);
  g4 = new Ground(478,300,4,600);

  d1 = new Division(240,594,470,5);
  
  
}

function draw() {
  background(0); 
  Engine.update(engine);

  if(frameCount%60==0){
    particles.push(new Particle( random(width/2-10,width/2+10), 10,  10))
  }
  
  for( var i= 0; i<plinkos.length ; i++ ){
  plinkos[i].display();
} 

 for( var i= 0; i<particles.length ; i++ ){
 particles[i].display();
} 

  for( var i= 0; i<divisions.length ; i++ ){
  divisions[i].display();
}
  g1.display();
  g2.display();
  g3.display();
  g4.display();

  d1.display();
}