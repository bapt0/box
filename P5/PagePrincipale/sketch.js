let scene

let command_block
let planks
let unicorn
let angle = 0
let x = 0
let y = 0

let unicornSprite

function alertt() {
  alert('cc')
}

function preload() {
  // command_block = loadImage('img/cb.png')
  planks = loadImage('img/planks.png')
  unicorn = loadImage('img/unicorn.png')
}

function setup() {
  scene = createCanvas(windowWidth, windowHeight, WEBGL).parent('canvasHolder')

  unicornSprite = new Unicorn()
  blockSprite = new Block()

  $('.boxTxt').css('top', height/2 + width/10 - 200 + 'px')

  setInterval(function () {
    $('canvas').css('width', windowWidth)
    $('canvas').css('height', windowHeight)
    resizeCanvas(windowWidth, windowHeight)

    $('.boxTxt').css('top', height/2 + width/10 - 200 + 'px')

  }, 1000);
}

function mousePressed() {
  if(blockSprite.x-(blockSprite.size+200)/2 < mouseX-width/2 && mouseX-width/2 < blockSprite.x+(blockSprite.size+200)/2 && blockSprite.y-(blockSprite.size+200)/2 < mouseY-height/2 && mouseY-height/2 < blockSprite.y+(blockSprite.size+200)/2) {
    location.href = "http://chamalotbis.byethost17.com/box.php"
  }
}

function draw() {
  background(45, 62, 80)

  unicornSprite.draw()
  blockSprite.draw()
}

class Unicorn {
  constructor() {
    this.size = width/5
    this.x = width+this.size/2
    this.y = random(height)
  }
  draw() {
    push()
    translate(this.x,sin((PI/256)*this.x)*30-(height/2)+this.y,-200)
    texture(unicorn)
    plane(this.size,this.size)
    if(this.x < -width/2-100) {
      var r = round(random(200))
      if(r == 200) {
        this.x = width/2+300
        this.y = random(height)
      }
    }
    this.x -= 5
    pop()
  }
}

class Block {
  constructor() {
    this.size = width/10
    this.x = 0
    this.y = 0
    this.angle = 0
  }
  draw() {
    push()
    this.size = width/10
    if(this.x-(this.size+200)/2 < mouseX-width/2 && mouseX-width/2 < this.x+(this.size+200)/2 && this.y-(this.size+200)/2 < mouseY-height/2 && mouseY-height/2 < this.y+(this.size+200)/2) {
      rotateX(map(mouseY, 0, width, 0, PI))
      rotateY(map(mouseX, 0, height, 0, PI))

      $('.boxTxt').css('opacity', '1')
      $('html').css('cursor', 'pointer')
    } else {
      this.angle += PI/256

      $('.boxTxt').css('opacity', '0')
      $('html').css('cursor', 'default')
    }
    texture(planks)
    rotateX(this.angle)
    rotateY(this.angle)
    rotateZ(this.angle)
    box(this.size)
    pop()
  }
}
