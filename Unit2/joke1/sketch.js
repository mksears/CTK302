let myState = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch (myState) {
    case 0:
    background('orange');
    fill('black');
    textSize(30);
    text("why did the bike fall over?", width/2, height/2);
    break;

    case 1:
    background('red');
    fill('black');
    textSize(30);
    text("because it was two tired!", width/2, height/2);
    break;

  }

}


function mouseReleased() {
  myState = (myState + 1) % 2;
}
