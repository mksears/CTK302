let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow")
    for (let j = 0 ; j < 100; j++) {
      for (let i = 0 ; i < 100; i++) {
        fill('white');
        rect(i*20, j*20, 10, 10) ;
      }
    }
    //timer code
      timer++ ;
      if (timer > 3*60){
        timer = 0 ;
        state = 1 ;
      }
      break;

    case 1:
      background('red') ;
      //text("1", 100, 100);

      for (let j = 0 ; j < 100; j++) {
        for (let i = 0 ; i < 100; i++) {
          fill('black');
          rect(i*20, j*10, 5, 10) ;
        }
      }
      timer++ ;
      if (timer > 3*60){
        timer = 0 ;
        state = 2 ;
      }
      break;

    case 2:
      background('blue') ;
      //text("2", 100, 100);

      for (let j = 0 ; j < 100; j++) {
        for (let i = 0 ; i < 100; i++) {
          fill('purple');
          rect(i*10, j*10, 10, 5) ;
        }
      }
      timer++ ;
      if (timer > 3*60){
        timer = 0 ;
        state = 0 ;
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
