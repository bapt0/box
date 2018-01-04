let inc = 0.1
let scl = 5
let cols
let rows

function preload() {
}

function setup() {
  createCanvas(600, 400)
  pixelDensity(1)

  cols = floor(width / scl)
  rows = floor(height / scl)
}

function mousePressed() {
}

function draw() {
  background(0)

  var yoff = 0

  for(var x = 0; x < cols; x++) {
    var xoff = 0
    for(var y = 0; y < rows; y++) {
      var index = (x + y*width) * 4
      var r = noise(xoff, yoff) * 255
      fill(random(255), random(255), random(255), r)
      rect(x*scl, y*scl, scl, scl)
      xoff += inc
    }
    yoff += inc
  }

  noiseSeed()

}
