let b
let s = 1

function preload() {
  b = PI
}

function setup() {
  createCanvas(800,800)
}

function mousePressed() {
}

function draw() {
  background(0)
  translate(200,200)
  stroke(255)
  noFill()
  beginShape()
  for(let a = 0; a < PI*2; a += b) {
    vertex(100*sin(a),100*cos(a))
  }
  endShape(CLOSE)
  if(b <= PI/16 || b >= PI) {
    s = (s%2) + 1
  }
  if(s == 1) {
    b = b*1.01
  } else {
    b = b/1.01
  }
}
