let hyper;
let stars;
let arrive;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(600, 600);

  hyper = loadImage("assets/resting.jpg");
  stars = loadImage("assets/flying.jpg");
  arrive = loadImage("assets/arrive.jpg");
}

function draw() {

  background(255);

  switch (state) {

    case 0:
      image(hyper, 0, 0, 600, 600);


      break;

    case 1:
      image(stars, 0, 0, 600, 600);

      //timer code
      timer++ ;
      if(timer > 3*60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      image(arrive, 0, 0, 600, 600);

      //timer code
      timer++ ;
      if(timer > 5*60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
