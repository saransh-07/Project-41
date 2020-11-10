const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var world,engine,canvas, drops;
var maxDrops,drop,man;
var lightning, lightning2, lightning3 , lightning4;
var imager = 0;
 var lref;
function preload(){
   lightning = loadImage("../images/thunderbolt/1.png");
   lightning2 = loadImage("../images/thunderbolt/2.png");
   lightning3 = loadImage("../images/thunderbolt/3.png");
   lightning4 = loadImage("../images/thunderbolt/4.png");

}

function setup(){
    canvas = createCanvas(500,900) ;
    engine = Engine.create();
    world = engine.world;
    drop = new Drop(20,-10);
    drops = [drop];
    maxDrops = 100;
man = new Umbrella();
lref = 0;
}

function draw(){
   
     background(0);
     Engine.update(engine); 
     if(drops.length<maxDrops){
        if(frameCount%15===0){
            drops.push(new Drop(random(0,300),-10));
        }
     }
    
    man.display();
    
        for(var i=0;i<drops.length;i++){
            drops[i].display();
        }
     
    imager +=1;
      lref +=1;
      if(lref>4*60){
          lref=1*60;
      }
      switch (lref){
          case 1*60 : image(lightning,random(250,275),0,300,300);  
          break;
          case 2*60 : image(lightning2,random(250,275),0,300,300);
          break;
          case 3*60 : image(lightning3,random(250,275),0,300,300);
          break;
          case 4*60 : image(lightning4,random(250,275),0,300,300);
          break;
          default : break;
      }
 
     
}   

