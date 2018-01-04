let s = 4;
let f = [];
let sliders = [];

function preload() {

}

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);

  f[0] = new Fun('red');
  f[1] = new Fun('blue');
  // f[2] = new Fun('pink');
  // f[3] = new Fun('tellow');
  f['tot'] = new Fun('white');

  for(var i = 0; i < f.length; i++) {
    f[i].decalageY = (200/f.length)*i;
    f['tot'].decalageY = 200;
    sliders[i] = createSlider(0, 25);
    sliders[i].position(400, 20+(20*i));
  }
}

function mousePressed() {
}


function draw() {
  // background(0);
  translate(0, windowHeight/3);

  f[0].draw(sin(2*PI*sliders[0].value()/100*f[0].x));
  f[1].draw(sin(2*PI*sliders[1].value()/100*f[1].x));
  // f[2].draw(sin(2*PI*0.15*f[2].x));
  // f[3].draw(sin(2*PI*Math.random()*f[3].x));
  f['tot'].draw(sum());
}

function sum() {
  var total = 0;
  f.forEach((a) => {
    total += a.y;
  });
  return total;
}

class Fun {
  constructor(c) {
    this.x = 0;
    this.y = 0;
    this.color = c;
    this.decalageY = 0;
  }
  draw(y) {
    stroke(this.color);
    line((this.x)*s, (this.y)*s+this.decalageY, (this.x+1)*s, (-y)*s+this.decalageY)
    point(this.x*s, this.y*s+this.decalageY);
    this.x += 1;
    this.y = -y;
    if(this.x >= windowWidth/s) {
      background(0);
      this.x = 0;
    }
  }
}
