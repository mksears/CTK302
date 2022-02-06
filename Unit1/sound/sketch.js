let song1 ;

function preload() {

song1 = loadSound("assets/what.mp3") ;
}

function setup() {
  createCanvas(500, 500);
  song1.play() ;
}

function draw() {
  background(100) ;
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause() ;
  } else {
    song1.play() ;
  }
}



// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
