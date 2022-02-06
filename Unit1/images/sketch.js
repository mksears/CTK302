let box ;
let cat ;
let forest ;


function setup() {
  createCanvas(500, 500);

  box = loadImage("assets/box.jpg") ;
  cat = loadImage("assets/cat.jpg") ;
  forest = loadImage("assets/forestmc.jpg") ;


}

function draw() {
  image(box, width/2, 50, 150, 150) ;
  image(cat, width/2, 210, 150, 150) ;
  image(forest, width/2, 370, 150, 150) ;


}
