function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
let seed = 0;
let increment = 0.005;

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

  let mColor = color1;

  background(color2);
  for (let x = 50; x < width - 50; x += 20) {
    for (let y = 50; y < height - 50; y += 20) {
      noStroke();

      fill(mColor);

      rect(x, y, 9, 9, 2);
      // rect(x, y, 20);
      // rotate(frameCount);
    }
  }
}
function mouseClicked() {
  if (mColor === color1) {
    mColor = color3;
  } else {
    mColor = 255;
  }
}

// for (let x = 0; x < width; x += 50) {
//   for (let y = 25; y < height; y += 50) {
//     noStroke();

//     fill(color2);

//     rect(x, y, 25);
//     // rect(x, 50, 20);
//     // rotate(frameCount);
//   }
// }
// for (let x = 25; x < width; x += 50) {
//   for (let y = 0; y < height; y += 50) {
//     noStroke();

//     fill(color3);

//     rect(x, y, 25);
//     // rect(x, 50, 20);
//     // rotate(frameCount);
//   }
// }
// for (let x = 25; x < width; x += 50) {
//   for (let y = 25; y < height; y += 50) {
//     noStroke();

//     fill(color4);

//     rect(x, y, 25);
//     // rect(x, 50, 20);
//     // rotate(frameCount);
//   }
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
