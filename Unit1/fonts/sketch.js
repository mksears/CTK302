let font1, font2 ;


function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/notosans.ttf") ;
  font2 = loadFont("assets/super.ttf") ;

  textAlign(CENTER) ; 
}

function draw() {

  background(100);

  textSize(80) ;
  textFont(font1) ;
  text("hello", width/2, 100) ;

  textFont(font2) ;
  text("how are you", width/2, 200)
}
