let dirt
let sun
let blocks = []
let camX = 0
let camY = 0
let camZ = 1
let viewX = 0
let viewY = 0
let viewSensibility = 5
let q = 0
let xRot = 0
let yRot = 0

let jump = false
let jumpS = 0
let onGround = false

let inScene = 1

document.addEventListener('contextmenu', event => rightClick(event))
function rightClick() {
  if(inScene == 1)
    event.preventDefault()
}

function preload() {
  dirt = loadImage('img/dirt.jpg')
  sun = loadImage('img/sun.png')
}

function setup() {
  createCanvas(windowWidth-20,windowHeight-100, WEBGL)
  blocks.push(new Block('sun'))
  // camZ = (height / 2) / tan(PI / 6)
  camZ = -1000
}

function mousePressed() {
  blocks.push(new Block('block'))
  c = []
  c[0] = mouseX
  f = []
  f[0] = mouseY
  d = c.find(seuil)
  g = f.find(seuil2)
  if(d != undefined && g != undefined) {
    console.log('Sun destroyed')
  }
}

function seuil(e) {
  return e <= width/2+(camX+widthSun/2) && e >= width/2+(camX-widthSun/2);
}

function seuil2(e) {
  return e <= height/2+(camY+heightSun/2) && e >= height/2+(camY-heightSun/2);
}

function draw() {
  background(0)

  // Lumières
  pointLight(255, 255, 200, 0, 0, 0)
  ambientLight(50,50,50)

  if (keyIsDown(68)) { // D
    camX -= 20
  }
  if (keyIsDown(81)) { // Q
    camX += 20
  }
  if (keyIsDown(90)) { // Z
    camZ += 20
    // camX += tan(viewX)*20
    // camY += tan(viewY)*20
  }
  if (keyIsDown(83)) { // S
    camZ -= 20
    // camX -= tan(viewX)*20
    // camY -= tan(viewY)*20
  }
  if (keyIsDown(32)) { // ESPACE
    camY -= 20
  }
  if (keyIsDown(SHIFT)) {
    camY += 20
  }
  if (keyIsDown(LEFT_ARROW)) {
    viewX += viewSensibility
  }
  if (keyIsDown(RIGHT_ARROW)) {
    viewX -= viewSensibility
    // xRot = cos(viewX)-sin(viewY)
  }
  if (keyIsDown(UP_ARROW)) {
    viewY -= viewSensibility
  }
  if (keyIsDown(DOWN_ARROW)) {
    viewY += viewSensibility
  }
  if (keyIsDown(77) && onGround == true) { // M
    jump = true
  }

  // Empêcher la valeur camY d'aller dans les négatifs
  // camY = abs(camY)

  // console.log('camX:' + camX + ' camY:' + camY + ' camZ:' + camZ)

  // Position & angle de la caméra
  // camera(camX, camY, camZ, camX, camY, camZ+0.01, 0, 1, 0)
  camera(frameCount, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0)

  widthSun = abs(width/(camZ/0.033)*width)
  heightSun = abs(height/(camZ/0.033)*height)
  // console.log(width/2+(camX+widthSun/2))

  blocks.forEach((block) => {
    block.draw()
  })

  push()
  fill(100)
  noStroke()
  translate(0,100,0)
  rotateX(HALF_PI)
  plane(2000,2000)
  pop()

  if(camY <= 100 - 80) {
    camY += 8
  }

  if(camY >= 20) {
    onGround = true
  } else {
    onGround = false
  }

  if(jump) {
    jumpS += 5
    camY -= jumpS
    if(jumpS >= 60) {
      jump = false
      jumpS = 0
    }
  }

}

function exportMap() {
  inScene = 0
  document.body.innerHTML = JSON.stringify(blocks)
}

function importMap() {
  importInput = document.getElementById('importInput')
  importInput = JSON.parse(importInput.value)
  tmpBlocks = []
  importInput.forEach((block) => {
    b = new Block()
    b.import(block.x, block.y, block.z, block.angle, block.type)
    tmpBlocks.push(b)
  })
  blocks = tmpBlocks
}

class Block {
  constructor(t) {
    push()
    // Position du block à poser
    // this.x = camX + mouseX - width/2
    // this.y = camY - 800
    // this.z = camZ - mouseY + height/2

    this.x = camX
    this.y = camY
    this.z = camZ

    this.angle = 0
    this.type = t
    noStroke()
    pop()
  }
  draw() {
    push()
    if(this.type == 'block') {
      texture(dirt)
      translate(Math.round(this.x/100)*100, Math.round(this.y/100)*100, Math.round(this.z/100)*100)
    }
    else if(this.type == 'sun') {
      texture(sun)
      translate(0, 0, 0)
      // translate(mouseX - width / 2, mouseY - height / 2)
    }
    // rotateX(this.angle)
    // rotateY(this.angle*0.8)
    this.angle += 0.01
    box(100)
    pop()
  }
  import(x, y, z, a, t) {
    this.x = x
    this.y = y
    this.z = z
    this.angle = a
    this.type = t
  }
}
