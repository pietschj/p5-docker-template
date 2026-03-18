// Hello World — a simple noise flow field sketch
// Duplicate this folder to start a new sketch

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(240, 30, 10, 20);
  particles.forEach(p => {
    p.update();
    p.show();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.hue = random(160, 280);
    this.size = random(4, 14);
    this.alpha = random(40, 80);
  }

  update() {
    let angle = noise(this.pos.x * 0.003, this.pos.y * 0.003) * TWO_PI * 2;
    let flow = p5.Vector.fromAngle(angle).mult(0.4);
    this.vel.add(flow).limit(2.5);
    this.pos.add(this.vel);

    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  }

  show() {
    noStroke();
    fill(this.hue, 70, 90, this.alpha);
    circle(this.pos.x, this.pos.y, this.size);
  }
}
