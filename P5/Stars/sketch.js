let inc = 0.1
let scl = 5
let cols
let rows

let camX = 0
let camY = 0
let camZ = 1

let stars = []
let starDepth = 10000

function preload() {
  dog = loadImage('dogs/1.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  for(var i = 0; i < 3000; i++) {
    stars.push(new Star())
  }
}

function mousePressed() {
}

function draw() {
  background(0)

  if (mouseIsPressed) {
    camZ += 300
  }

  if (keyIsDown(68)) { // D
    camX -= 80
  }
  if (keyIsDown(81)) { // Q
    camX += 80
  }
  if (keyIsDown(LEFT_ARROW)) {

  }
  else if (keyIsDown(90)) { // Z
    camZ += 80
  }
  else if (keyIsDown(83)) { // S
    camZ -= 80
  } else {
    camZ += 50
  }
  if (keyIsDown(32)) { // ESPACE
    camY -= 80
  }
  if (keyIsDown(SHIFT)) {
    camY += 80
  }
  camera(camX, camY, camZ, camX, camY, camZ+0.01, 0, 1, 0)

  stars.forEach((star) => {
    star.draw()
  })

}

class Star {
  constructor() {
    this.x = random(-starDepth, starDepth)
    this.y = random(-starDepth, starDepth)
    this.z = random(0, starDepth)
  }
  draw() {
    if(this.z <= camZ) {
      this.z += starDepth
    }
    if(this.z > camZ + starDepth) {
      this.z -= starDepth
    }
    if(this.x <= camX) {
      this.x += starDepth
    }
    if(this.x > camX + starDepth/2) {
      this.x -= starDepth
    }
    if(this.y <= camY) {
      this.y += starDepth
    }
    if(this.y > camY + starDepth/2) {
      this.y -= starDepth
    }
    push()
    translate(this.x, this.y, this.z)
    noStroke()
    sphere(2)
    pop()
  }
}
