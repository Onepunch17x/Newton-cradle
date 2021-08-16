class rope{
	constructor(bodyA,bodyB,pointA,pointB)
	{

		this.pointA=pointA
		this.pointB=pointB

		var options={
		
			bodyA:bodyA,
			bodyB:bodyB,
			pointB:{x:this.pointA, y:this.pointB}
		}
	//create rope constraint here
	this.Con=Matter.Constraint.create({
		bodyA:bodyA,
		bodyB:bodyB,
		length:200,
		stiffness:0.1
	
	})
	World.add(world,this.Con)
	}


    //create display() here 
	display(){
		line(this.Con.bodyA.position.x,this.Con.bodyA.position.y,this.Con.bodyB.position.x+this.pointA,this.Con.bodyB.position.y+this.pointB);

		strokeWeight(2);
	}
}
