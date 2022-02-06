function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  if (mouseIsPressed){
    background("#32a852");
  } else {
    background("#355fb8");
  }
  rect(width/2, height/2, 200, 100);
}
