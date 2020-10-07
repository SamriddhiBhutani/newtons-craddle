class Rope{
    constructor(body1, pointB, offsetX, offsetY) {
        var options = {
            bodyA: body1,
            pointB: pointB,
        }
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.rope = Constraint.create(options);
    
        World.add(world,this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight (5);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}