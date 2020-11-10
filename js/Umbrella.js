class Umbrella{
    constructor(){
 
 var options = {
 isStatic : true
 }  
 this.body = Bodies.rectangle(100,700,200,500,options);
 this.image1 = loadImage("../images/Walking Frame/walking_1.png");     
 this.image2 = loadImage("../images/Walking Frame/walking_2.png");
 this.image3 = loadImage("../images/Walking Frame/walking_3.png");
 this.image4 = loadImage("../images/Walking Frame/walking_4.png");
 this.image5 = loadImage("../images/Walking Frame/walking_5.png");
 this.image6 = loadImage("../images/Walking Frame/walking_6.png");
 this.image7 = loadImage("../images/Walking Frame/walking_7.png");
 this.image8 = loadImage("../images/Walking Frame/walking_8.png");

World.add(world,this.body);
    }
    
    display(){
var pos = this.body.position;





if(imager>8){
    imager = 1;
}
console.log(imager);
imageMode(CENTER);
switch(imager){
    case 1 : image(this.image1,pos.x,pos.y,400,400);
    break;
    case 2 : image(this.image2,pos.x,pos.y,400,400);
    break;
    case 3 : image(this.image3,pos.x,pos.y,400,400);
    break;
    case 4 : image(this.image4,pos.x,pos.y,400,400);
    break;
    case 5 : image(this.image5,pos.x,pos.y,400,400);
    break;
    case 6 : image(this.image6,pos.x,pos.y,400,400);
    break;
    case 7 : image(this.image7,pos.x,pos.y,400,400);
    break;
    case 8 : image(this.image8,pos.x,pos.y,400,400);
    break;  
    default : break;  
}
/*rectMode(CENTER)
rect(100,800,200,500);*/

    }
}