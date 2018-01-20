let s = 20;
let f = [];
let sliders = [];
let xoff = 0.5

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);

  f[0] = new Fun('red');
  f[1] = new Fun('blue');
  // f[2] = new Fun('pink');
  f['tot'] = new Fun('white');

  for(var i = 0; i < f.length; i++) {
    f[i].decalageY = (500/f.length)*i;
    f['tot'].decalageY = 300;
    sliders[i] = createSlider(0, 1000, 0);
    sliders[i].position(400, 20+(20*i));
  }
}

function draw() {
  background(0)
  translate(0, windowHeight/3);

  for(var i = 0; i < width; i += xoff) {

    f.forEach((f, index) => {
      f.draw(sin(sliders[index].value()/100+f.x), i)
    })

    // f[0].draw(sin(sliders[0].value()/100+f[0].x), i);
    // f[1].draw(sin(sliders[1].value()/100+f[1].x), i);
    // f[2].draw(cos(sliders[2].value()/100*f[2].x), i);

    var total = 0;
    f.forEach((a) => {
      total += a.y;
    });

    f['tot'].draw(total, i);
  }

}

class Fun {
  constructor(c) {
    this.x = 0;
    this.y = 0;
    this.color = c;
    this.decalageY = 0;

    this.decalageY = (500/f.length)*f.length;
    if(f.color != 'white') {
      sliders[f.length] = createSlider(0, 1000, 0);
      sliders[f.length].position(400, 20+(20*f.length));
    }

    for(var i = 0; i < f.length; i++) {
      f[i].decalageY = (500/f.length)*i;
    }
  }
  draw(y, i) {
    stroke(this.color);
    line((this.x)*s, (this.y)*s+this.decalageY, (this.x+xoff)*s, (-y)*s+this.decalageY)
    point(this.x*s, this.y*s+this.decalageY);
    this.x = i;
    this.y = -y;
  }
}
