function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}
let seed = 0;
let increment = 0.01;
let c1 = true;

function draw() {
  noStroke;
  seed += increment;
  let color1 = color(
    noise(seed) * 255,
    noise(seed + 20) * 255,
    noise(seed + 40) * 255,
    noise(seed + 60) * 255
  );
  let color2 = color(
    noise(seed + 60) * 255,
    noise(seed + 80) * 255,
    noise(seed + 100) * 255
  );
  let color3 = color(
    noise(seed + 120) * 255,
    noise(seed + 140) * 255,
    noise(seed + 160) * 255
  );
  let color4 = color(
    noise(seed + 180) * 255,
    noise(seed + 200) * 255,
    noise(seed + 220) * 255
  );
  if (c1 === true) {
    background(color4);
  } else {
    background(color2);
  }

  for (let x = width / 20; x < width - width / 20; x += 20) {
    for (let y = height / 20; y < height - height / 20; y += 20) {
      if (c1 === true) {
        fill(color3);
        // background(color4);
      } else {
        fill(color1);
        // background(color2);
      }

      push();
      noStroke();
      rect(x, y, 5, 5);
      pop();
    }
  }
  push();
  stroke(color("rgba(255, 255, 255, 0.5)"));
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  fill(color("rgba(255, 255, 255, 0.3)"));
  rect(width / 2, height - height / 6, 250, 40);
  fill(color("rgba(255, 255, 255, 1)"));
  textSize(12);
  text("PRESS KEY TO CHANGE COLOR", width / 2, height - height / 6);

  pop();
}

function keyPressed() {
  if (c1 === true) {
    c1 = false;
  } else {
    c1 = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
