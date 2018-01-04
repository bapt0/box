// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
var lifespan = 100;
var lifeP;
var count = 0;
var target;
var maxforce = 30;

var mutationNB = 0;

var rx = 50;
var ry = 150;
var rw = 200;
var rh = 10;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(document.getElementById('width').value, document.getElementById('height').value);

}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    //population = new Population();
    count = 0;

    mutationNB++;
    document.getElementById('mutationNB').innerHTML = 'Mutation: ' + mutationNB;
  }

  fill(255);
  // rect(rx, ry, rw, rh);

  ellipse(target.x, target.y, 16, 16);
}
