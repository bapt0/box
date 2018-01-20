let inc = 0.1
let scl = 10
let cols
let rows
let cellColor = []

let moveX = 0
let moveY = 0

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  pixelDensity(1)

  cols = floor(width*1.01 / scl)
  rows = floor(height*1.01 / scl)
}

function mousePressed() {
}

function draw() {
  background(0)
	noStroke()

  var yoff = 0
  for(var x = 0; x < cols; x++) {
    var xoff = 0
    for(var y = 0; y < rows; y++) {
      var index = (x + y*width) * 4
      var r = noise(xoff + moveX, yoff + moveY) * 255
      if(r <= 100) {
        cellColor = [100,100,250] // Bleu (eau)
      } else if(r >= 190) {
        cellColor = [200,200,200] // Gris (montagnes)
      } else if(r >= 90 && r <= 120) {
        cellColor = [150,150,100] // Vert jaunâtre (bords de mer)
      } else {
        cellColor = [100,150,100] // Vert (terrain)
      }
      fill(cellColor, r)
      rect(x*scl, y*scl, scl, scl)
      xoff += inc
    }    yoff += inc
  }

	moveX += 0.2
	// moveY = map(mouseX, 0, windowWidth, -5, 5)
	// moveX = map(mouseY, 0, windowHeight, -5, 5)

  // noiseSeed()

}
