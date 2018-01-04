let dogs = [];
let dogNum = 250;

function preload() {
  for (let i = 1; i < dogNum; i++) {
    dogs[i] = new Dog((i%5)+1)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (let i = 1; i < dogNum; i++) {
    dogs[i].click(mouseX, mouseY);
  }
}


function draw() {
  background(0);
  for (let i = 1; i < dogNum; i++) {
    dogs[i].move();
    dogs[i].show();
  }
}

class Dog {
  constructor(id) {
    this.id = id;
    this.img = loadImage(`dogs/${this.id}.png`);
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.width = 150;
    this.height = 150;
  }
  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  size() {
    this.width = random(-100, 200);
    this.height = random(-100, 200);
  }
  click(px, py) {
    if (px > this.x && px < this.x + this.width && py > this.y && py < this.y + this.height) {
      this.id = (this.id % 6) + 1;
      this.img = loadImage(`dogs/${this.id}.png`);
    }
  }
  show() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
