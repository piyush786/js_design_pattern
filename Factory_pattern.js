class Shape {
	draw() {
  	console.log("drawing shape")
  }
}

class Circle extends Shape {
	draw() {
  	console.log("drawing Circle")
  }
}


class Rect extends Shape {
	draw() {
  	console.log("drawing Rectangle")
  }
}



class ShapeFactory {

	drawShape(type){
 
  	switch(type) {
 			case 'circle':
      	let circle = new Circle();
       	circle.draw();
				break;
 			case 'rect':
      	let rect = new Rect();
       	rect.draw();
			break;
 			default:
      	let obj = new Circle();
       	obj.draw();
				break;	
    }
  }
}



let sf = new ShapeFactory()
sf.drawShape('circle')
sf.drawShape('square')
sf.drawShape('rect')
