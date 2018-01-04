let p = [];

function preload() {

}

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
  pos = new Text('');
  dist = new Text('');
}

function mousePressed() {
  if(p.length < 3) {
    p.push(new Point(mouseX, mouseY));
  }
}


function draw() {
  background(0);

  pos.setText(mouseX + '; ' + mouseY);
  pos.move(20, 20);
  pos.show();

  p.forEach((i) => {
    i.show();
  });

  if(p.length > 0 && p.length < 3) {
    dist.setText(round(sqrt(pow(mouseX - p[p.length-1].x,2)+pow(mouseY - p[p.length-1].y,2))) + 'px');
    dist.move((mouseX + p[p.length-1].x) / 2, (mouseY + p[p.length-1].y) / 2);
    dist.show();
  }

  if(p.length >= 2) {
    stroke(255);
    line(p[0].x, p[0].y, p[1].x, p[1].y);
    fill(255);
    stroke(0);
    text(round(sqrt(pow(p[1].x-p[0].x,2)+pow(p[1].y-p[0].y,2))) + 'px', (p[1].x + p[0].x) / 2, (p[1].y + p[0].y) / 2);
  }
  if(p.length >= 3) {
    fill(255);
    stroke(0);
    text(round(sqrt(pow(p[2].x-p[1].x,2)+pow(p[2].y-p[1].y,2))) + 'px', (p[2].x + p[1].x) / 2, (p[2].y + p[1].y) / 2);
    text(round(sqrt(pow(p[2].x-p[0].x,2)+pow(p[2].y-p[0].y,2))) + 'px', (p[2].x + p[0].x) / 2, (p[2].y + p[0].y) / 2);

    stroke(255);
    line(p[1].x, p[1].y, p[2].x, p[2].y);
    stroke(0,0,255);
    let l = line(p[0].x, p[0].y, p[2].x, p[2].y);
  }

}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.point = true;
  }
  show() {
    stroke(255);
    point(this.x, this.y);
  }
}

class Text {
  constructor(t) {
    this.text = t;
    this.x = 0;
    this.y = 0;
  }
  setText(t) {
    this.text = t;
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    fill(255);
    stroke(0);
    text(this.text, this.x, this.y);
  }
}
