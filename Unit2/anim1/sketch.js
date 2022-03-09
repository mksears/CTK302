let x = 0;
let font1, font2 ;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/notosans.ttf") ;
  font2 = loadFont("assets/super.ttf") ;
}

function draw() {
  background("black");
  fill("white");

//  rect(x, height/2, 50, 10) ;

  x+=5;
  if (x > width) {
    x = 0;
  }

  textFont(font1, 80) ;
  text("hello", width/2, x) ;
}
