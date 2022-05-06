var bubbles = [];
let url = "";

function setup() {
//  let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

  let key = "13ghbDP4Pjyyd__Dcb3EfBFsoH5sM8bOJvJGO8_ejS2o";

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(900, 900);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Are you a cat or dog person?"],
        data[i]["Which is your favorite Minecraft mob?"],
        data[i]["Batman or Superman?"],
        data[i]["What is your name?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("#fcba03");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}



// my Bubble class
class Bubble {
  constructor(animal, minecraft, hero, name) {
    // only the order of these parameters matters!
    this.animal = animal;
    this.minecraft = minecraft;
    this.hero = hero;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(4, 1), 0);
  }

  display() {
    stroke("blue");
    noFill();
    rect(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    text(
      this.name + "\n" + this.animal + "\n" + this.minecraft + "\n" + this.hero,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;

  }


}
