let img;
let p;
let e;
let sitting = 0
let gravity = 0

function preload(){
	img = loadImage('hippo.jpg');

}

function setup() {
 createCanvas(800, 800); // put setup code here
 p = new Player(255, 20,100, 100)
 e = new Enemy(0, 20, 20, 20, 20)
}


function draw() {
  // put drawing code here
  background( 9, 192, 252);
  image(img,0,0);

  gravity+=1
  p.show()
  p.move()
  e.draw(0)
  e.move()
}

class Player {
	constructor(color, radius, x, y) {
		this.color = color
		this.radius = radius
		this.y = y
		this.x = x
	}

	show() {
		fill(this.color)
		ellipse(this.x, this.y, this.radius)
	}

	move() {
		if (keyIsDown(LEFT_ARROW)){
			this.x-= 10

		}
		if (keyIsDown(RIGHT_ARROW)){
			this.x+= 10
		}
	}
}

class Enemy{

	constructor(color, x, y, height, width){
		this.color = color
		this.x = x
		this.y = y
		this.height = height
		this.width = width
	}

	draw(new_color){
		fill(this.color)
		stroke(new_color)
		rect(this.x, this.y, this.height, this.width)
	}
	move(){
		if (p.x + 20 == this.x + 20 && p.y + 20 == this.y + 20) {
			this.x += 10
			this.y += 10
		}
	}
}



