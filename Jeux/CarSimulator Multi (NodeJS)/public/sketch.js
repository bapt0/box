// socket = io.connect('http://localhost:3000/');
var socket = io();

socket.on('getID', getID); // Lorsqu'on reçoit l'information, exécuter la fonction updateMulti
socket.on('update', updateMulti); // Lorsqu'on reçoit l'information, exécuter la fonction updateMulti

let id
function getID(data) {
  if(!id) {
    id = data
    console.log('Ton ID: ' + id)
  }
}

let car2

function updateMulti(data) {
  console.log(data.length)
  otherCars = data
}

let car
let angle = 0
let bg
let carImage

let otherCars = []
let otherCarsData = {}
let pg

function setup() {
  createCanvas(1200, 800)
  pg = createGraphics(1200, 1200)
  frameRate(60)
  bg = loadImage('./bg.png')
  carImage = loadImage('./car2.png')
  carImage2 = loadImage('./car.png')

  car = new Car('white')

  setInterval(function () {
    var data = {
      carX: car.loc.x,
      carY: car.loc.y,
      angle: angle
    }
    socket.emit('update', data);
  }, 10);
}

function draw() {
  // background(frameCount%255*random(2), frameCount%255*random(2), frameCount%255*random(2))
  background(bg)

  car.move()
  car.update()
  car.show()

  // Autres voitures
  pg.clear()
  otherCars.forEach((otherCar) => {
    if(otherCar.id != id) { // Si ce n'est pas notre voiture
      pg.push()
      pg.translate(otherCar.carX, otherCar.carY)
      pg.rotate(otherCar.angle)
      pg.rectMode(CENTER)
      pg.image(carImage2, -30, -15, 60, 30)
      pg.pop()
    }
  })

  image(pg, 0, 0)

}

class Car {
  constructor(c) {
    this.loc = createVector(width/2, height/2)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.angle = 0
    this.speed = 0
    this.color = c
  }
  move() {
    if (keyIsDown(68)) { // D
      angle += PI/64
      if(this.speed < 0.3) {
        // this.speed += 0.006
      }
    }
    if (keyIsDown(81)) { // Q
      angle -= PI/64
      if(this.speed < 0.3) {
        // this.speed += 0.006
      }
    }
    if(keyIsDown(90)) {
      if(this.speed < 0.3) {
        this.speed += 0.02
      }
    }
    if (keyIsDown(90)) { // Z
      this.acc.x = cos(this.angle)*this.speed
      this.acc.y = sin(this.angle)*this.speed
    }
    if(!keyIsDown(90) && this.speed > 0) {
      this.speed -= 0.006
      this.vel.div(1.04)
      this.acc.div(1.04)
    }
    if(!keyIsDown(90)) {
      if(abs(this.vel.x) < 0.2 && abs(this.vel.y) < 0.2) {
        this.vel = createVector(0, 0)
      }
    }
  }
  update() {
    if(this.loc.x < 0 || this.loc.x > width) {
      this.vel.x *= -1.5
      this.speed = 0.01
      angle = this.vel.heading()
    }
    if(this.loc.y < 0 || this.loc.y > height) {
      this.vel.y *= -1.5
      this.speed = 0.01
      angle = this.vel.heading()
    }
    this.acc.div(1.02)
    this.vel.div(1.02)

    this.vel.add(this.acc)
    this.vel.limit(6)
    this.loc.add(this.vel)

    this.angle = angle
  }
  show() {
    push()
    stroke(this.color)
    strokeWeight(2)
    fill(200)
    translate(this.loc.x, this.loc.y)
    rotate(this.angle)
    rectMode(CENTER)
    // rect(0, 0, 50, 20)
    image(carImage, -30, -15, 60, 30)
    pop()
    fill(255)
    // line(this.loc.x, this.loc.y, this.loc.x+cos(this.angle)*50, this.loc.y+sin(this.angle)*50)
  }
}

class otherCar {
  constructor(x, y, a) {
    this.x = x
    this.y = y
    this.a = a
  }
  show() {
    pg.push()
    pg.translate(otherCarsData.carX, otherCarsData.carY)
    pg.rotate(otherCarsData.angle)
    pg.rectMode(CENTER)
    pg.image(carImage2, -30, -15, 60, 30)
    pg.pop()
  }
}
