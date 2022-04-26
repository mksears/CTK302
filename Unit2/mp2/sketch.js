let space;
let travel;
let arrive;
let state = 0;
let timer = 0;



function setup() {
  createCanvas(600, 600);
  space = loadImage("assets/state1.jpg");
  travel = loadImage("assets/state 2.jpg");
  arrive = loadImage("assets/state 3.jpg");

}

function draw() {
  background(600);

  switch (state) {

    case 0:
      image(space , 0, 0, 600, 600);

      break;

    case 1:
      image(travel, 0, 0, 600, 600);

      if (timer > 3*60){
        timer = 0 ;
        state = 2 ;
      }
      break;

    case 2:
      image(arrive, 0, 0, 600, 600);

      break;
  }

  function mouseReleased() {
    state++;
    if (state > 2) state = 0;

  }
