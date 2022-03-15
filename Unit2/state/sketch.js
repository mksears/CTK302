let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
    //text("0", 100, 100);

    for (let j = 0 ; j < 100; j++) {
      for (let i = 0 ; i < 100; i++) {
        fill('white');
        rect(i*20, j*20, 10, 10) ;
      }
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

      break;

    case 3:
      background('green') ;
    //  text("case 3", 100, 100);

    for (let j = 0 ; j < 100; j++) {
      for (let i = 0 ; i < 100; i++) {
        fill('yellow');
        rect(i*10, j*10, 10, 10) ;
      }
    }

      break;

    case 4:
    //  text("case 4", 100, 100);
    for (let j = 0 ; j < 100; j++) {
      for (let i = 0 ; i < 100; i++) {
        fill('white');
        ellipse(i*30, j*10, 10, 5) ;
      }
    }

      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
