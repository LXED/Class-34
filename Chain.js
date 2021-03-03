class Chain{

constructor(bodyA,pointB){

    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 1,
        length: 250
    }

    this.pointB = pointB
    this.Chain = Constraint.create(options)

    World.add(world,this.Chain);
}

attach(body) { this.Chain.bodyA = body; 
} 

fly() { 
this.Chain.bodyA = null; }




display(){

    if(this.Chain.bodyA){
        var pointA = this.Chain.bodyA.position
        var pointB = this.pointB

        push()
        stroke(25,32,43)
        strokeWeight(4)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop()

    }






}






}