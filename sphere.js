//  Sphere
//
//  Implementation for Sphere Object
//  A sphere has a 3D vector as its center, a value for the radius, and a 3-element array for the ambient light
//
//  Author: Xueheng Wan

class Sphere {
	constructor(...args) {
		this.type = "sphere";
		this.center = new Vec3(0,0,0);
		this.radius = 0;
		this.ambient = [0,0,0]; // NOTE: ambient is RGB color, not 3D vector
		// json sphere object
		if(args.length == 1){
			this.center = new Vec3(args[0].center);
			this.radius = args[0].radius;
			this.ambient = args[0].ambient;
		}else{
			// center point, radius and ambient color
			if(args.length == 3){
				this.center = new Vec3(args[0]);
				this.radius = args[1];
				this.ambient = args[2];
			}
			else{
  			// error
  		}
  	}
  }
  // the function calculates whether the given ray hits the sphere
  hit(o, d){

  }
}