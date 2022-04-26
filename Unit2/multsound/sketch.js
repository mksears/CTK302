let song1;
let song2;
let song3;
let songState = 0;

function preload() {
  song1 = loadSound('assets/coldlofi.wav');
  song2 = loadSound('assets/smiles.wav');
  song3 = loadSound('assets/tawmloop.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  switch (songState) {
    case 0:
      song1.loop();
      songState++;
      break;
    case 1:
      background('black');
      fill("white");
      text("Loop 1", width / 2, height / 2);
      break;
    case 2:
      song2.loop();
      songState++;
      break;
    case 3:
      background('black');
      fill("white");
      text("Loop 2", width / 2, height / 2);
      break;
    case 4:
      song3.loop();
      songState++;
      break;
    case 5:
      background('black');
      fill("white");
      text("Loop 3", width / 2, height / 2);
      break;
  }

}

function mouseReleased() {
  songState++;

  if (songState > 5) state = 0;
  song1.pause();
  song2.pause();
  song3.pause();
  songState = songState % 6


}
