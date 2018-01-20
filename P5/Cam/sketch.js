let capture
let camW = 320
let camH = 240

function preload() {
}

function setup() {
  createCanvas(camW, camH)
  pixelDensity(1)
  frameRate(60);

  capture = createCapture(VIDEO)
  capture.size(camW, camH)
  capture.hide()
}

function mousePressed() {
}

function draw() {
  background(0)

  image(capture, 0, 0, 320, 240)

}
