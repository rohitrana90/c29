class Box{

    constructor(x,y,width,height){
    var options={
    restitution:0.5,
    friction:0.3,
    density:0.04,
    
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    }
    display(){
    
        var pos = this.body.position
        var angle=this.body.angle
        push();
        
        rotate(angle)
          rectMode(CENTER)
          fill("red")
          strokeWeight(4);
          rect(pos.x,pos.y,this.width,this.height)
          pop();
    }    
}    