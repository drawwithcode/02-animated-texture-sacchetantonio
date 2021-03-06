function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}
let seed1 = 0;
let increment1 = 0.01;
let seed2 = 0;
let increment2 = 0.05;
let c1 = true;

function draw() {
  noStroke;
  seed1 += increment1;
  seed2 += increment2;
  let color1 = color(
    noise(seed1) * 255,
    noise(seed1 + 20) * 255,
    noise(seed1 + 40) * 255,
    noise(seed1 + 60) * 255
  );
  let color2 = color(
    noise(seed1 + 60) * 255,
    noise(seed1 + 80) * 255,
    noise(seed1 + 100) * 255
  );
  let color3 = color(
    noise(seed1 + 120) * 255,
    noise(seed1 + 140) * 255,
    noise(seed1 + 160) * 255
  );
  let color4 = color(
    noise(seed1 + 180) * 255,
    noise(seed1 + 200) * 255,
    noise(seed1 + 220) * 255
  );

  let d = noise(seed2);
  let mD = map(d, 0, 1, 1, 20);

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
      rect(x, y, mD);
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
