class Bob {
    constructor (x,y) {
        var option = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.4,
            density: 1
        }
        this.body = Bodies.circle(x,y,95,option);
        this.radius = 95
        World.add(world,this.body);
    }
    display () {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill ("pink");
        circle(pos.x,pos.y,this.radius);
    }
}