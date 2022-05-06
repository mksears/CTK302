// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let description = 0;

function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Schaumburg,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US


  // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=0e48e87ffd8f59884cbd6f2b151da682";

  let myTotalString = myCityString + myIDString;


  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.weather[0].description;

}

function draw() {
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background("blue");
      fill("white");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temperature, 20, 60);
      text("humidity is " + humidity, 20, 80);

      //thermomether
      fill("red");
      y = map(temperature, -10, 110, 5, height-10) ;
      //rect(width-30, height-10, 10, -temperature);
      rect(width-30, height-10, 10, -y);

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 250,100, 50, 30);
      ellipse(x, 235, 50, 50, 30);
      ellipse(x, 265,50, 50, 30);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
