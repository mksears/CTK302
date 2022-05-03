let cars = []; //declare / init an array
let netPos;
let state = 0;
let timer = 0;
let maxCars = 10;
let maxTimer = 10;
let score = 0;

let gem;

let rat;
let cat;
let room;
let lose;
let win;
//let welcome

function setup() {
  createCanvas(800, 600);

  gem =loadFont('assets/Gemstone.ttf');

  rat =loadImage('assets/rat.png');
  net =loadImage('assets/bestcat.png');
  room =loadImage('assets/room.jpg');
  lose =loadImage('assets/lose.jpg');
  win =loadImage('assets/win.jpg');
  //welcome =loadImage('assets/welcome.png');


  // Spawn objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
  netPos = createVector(width / 2, height - 100);
}


function draw() {
  switch (state) {
    case 0: //starting
      //background("grey");
      image(room, 0,0);
      fill("white");
      textFont(gem);
      text("welcome! collect 10 rats to win!", 150, 100);
      break;

    case 1: //game
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //win
      image(win, 0, 0);
      fill("black");
      text("you win! click to play again!", 230, 100);

      break;

    case 3: //lose
      image(lose, 0, 0);
      fill("white");
      text("you lose! click to play again!", 200, 100);
      break;
  }
    //show the score
  fill('white');
  textSize(24);
  text("score ="+ score, 30, 30);
}



function game() {
  //background("white");
image(room, 0, 0);
  //iterating through cars array
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    //check distance between car and frog
    if (cars[i].pos.dist(netPos) < 50) {
      cars.splice(i, 1); //take out car
      score++;
    }
  }

  if (cars.length == 10) {
    //win, code will only be hit once
    state = 2;
  }

  //net
  image(net, netPos.x, netPos.y, 50, 50);
  checkForKeys();
}



class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    this.v = createVector(random(-3, 3), random(-3, 3));
  }

  // methods

  display() {
    image(rat, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {

  if (keyIsDown(LEFT_ARROW)) netPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) netPos.x += 5;
  if (keyIsDown(UP_ARROW)) netPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) netPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;
    case 2:
      state = 0; //win
      resetTheGame();
      break;
    case 3:
      state = 0; //lose
      resetTheGame();
      break;
  }
}

function resetTheGame() {
  timer = 0;
  cars = [];
  score = 0;
    // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}
