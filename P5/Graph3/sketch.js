let x = 10;
let y = 10;
let angle = 0;

function preload() {

}

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
}

function mousePressed() {
}


function draw() {
  // background(0);
  translate(300, 300);

  angle += PI/32;

  point(100,0)

  x = 50;
  y = 50;

  stroke(255);
  ellipse(100+x*cos(angle)-y*sin(angle), y*cos(angle)+x*sin(angle), 5);
}
