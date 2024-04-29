var drawing = false;
var h = 0;
var circleDiameter = 0;

function setup() {
    var canvas = createCanvas(600, 600); // Dimensions should match those of the border
    canvas.parent('canvas-container');
    colorMode(HSB, 255); 
    noFill();
}

function draw() {
  if (drawing) {
    // Use the current hue and fixed circle diameter
    stroke(h, 255, 255);
    ellipse(mouseX, mouseY, circleDiameter, circleDiameter);
  }
}

function mousePressed() {
  if (!drawing) {
    // Start drawing, change color, and calculate diameter
    drawing = true;
    h = random(256);
    circleDiameter = dist(mouseX, mouseY, width / 2, height / 2) * 2;
  } else {
    // Stop drawing
    drawing = false;
  }
}

function mouseReleased() {
  // Optional: Use if you need any actions on mouse release, currently no action is needed here
}

// function stop() {
  
// }