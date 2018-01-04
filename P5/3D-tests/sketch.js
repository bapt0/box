let viewX = 0
let viewSensibility = 10

let x = 10;
let y = 10;
let angle = 0;

function setup() {
  createCanvas(windowWidth-20,windowHeight-100, WEBGL)
  angle = PI
}

function mousePressed() {
  angle += PI/32
}

function draw() {
  background(0)

  if (keyIsDown(LEFT_ARROW)) {
    viewX += viewSensibility
  }
  if (keyIsDown(RIGHT_ARROW)) {
    viewX -= viewSensibility
  }

  // Lumières
  pointLight(255, 255, 200, 0, 0, 0)
  ambientLight(50,50,50)

  camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), viewX, 0, viewX, 0, 1, 0)

  // if(viewX >= width) {
  //   angle = PI
  //   translate(0*cos(angle)-1000*sin(angle), 0, 1000*cos(angle)+0*sin(angle))
  //   console.log('translation')
  //   viewX = -viewX
  // }

  // Rotation autour de la caméra
  angle += PI/128
  x = (height/2.0) / tan(PI*30.0 / 180.0);
  y = (height/2.0) / tan(PI*30.0 / 180.0);
  translate(0+x*cos(angle)-y*sin(angle), 0, -1000+y*cos(angle)+x*sin(angle))
  console.log(x + ' ' + y + ' ' + angle)

  box(200)

  push()
  translate(0,0,1500)
  sphere(200)
  pop()

  push()
  translate(1500,0,0)
  sphere(100)
  pop()

}
