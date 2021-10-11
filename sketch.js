function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
}
let seed = 0;
let increment = 0.005;
let c1 = true;

function draw() {
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

  for (let x = 50; x < width - 50; x += 20) {
    for (let y = 50; y < height - 50; y += 20) {
      if (c1 === true) {
        fill(color3);
        // background(color4);
      } else {
        fill(color1);
        // background(color2);
      }

      push();
      noStroke();
      rect(x, y, 9, 9, 2);
      pop();
    }
  }
}
function mouseClicked() {
  if (c1 === true) {
    c1 = false;
  } else {
    c1 = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
