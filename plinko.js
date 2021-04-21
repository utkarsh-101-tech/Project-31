class Plinko{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
        }
     
        this.y = y;
        this.x = x;
        this.r =r;
        this.body = Bodies.circle(x, y, r, options); 
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,this.r)
        pop();
      }
}