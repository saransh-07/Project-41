class Drop{
    constructor(x,y){
      var options = {
          isStatic : false,
          density : 1.2,
          friction : 0.3,
          restitution : 0.4
      } 
      this.body = Bodies.circle(x,y,10,options);
      this.x = x;
      this.y = y;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill(0,0,100);
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,10);
        pop();
        
    }
}