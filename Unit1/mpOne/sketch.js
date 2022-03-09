function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}

  function draw() {

  background(64, 70, 255);
  noStroke();

  //sun and clouds
    fill("#ffe17d");
    circle(80, 80, 100);

  //mountain
  fill(204);
  triangle(360,18, 360, 360, 100, 360);
  triangle(360,18, 360, 360, 660, 360);
  fill("white");
  triangle(305, 90, 422, 89, 359, 18 );

   // grass
  fill("green");
  rect(0, 360, 720, 40);

  fill('white') ;
  text(mouseX + ', ' + mouseY, 20, 20) ;

  //head and arms
    fill("#FDE1D9");
    circle(360, 200, 100);
    rect(308, 275, 15, 60, 20);
    rect(398, 275, 15, 60, 20);


  //eyes
    fill("#298f59");
    circle(335, 220, 20);
    circle(383, 220, 20);

    //hair
       push();
       translate(340, 175);
       rotate(45);
       fill("black");
       ellipse(0, 0, 50, 80);
       pop();

       push();
       translate(380, 175);
       rotate(90);
       fill("black");
       ellipse(0, 0, 50, 80);
       pop();


  //clothes
    fill("#cf3232");
    rect(320, 250, 80, 110, 10);
    fill("#324ecf")
    rect(325, 355, 20, 60, 20);
    rect(375, 355, 20, 60, 20);


 if (mouseIsPressed) {

   //skybox
   background("#4849a3");

   //moon and smoke
     fill("#faa7a7");
     circle(80, 80, 100);

      fill('#9e9696');
     circle(140, 130, 100);
     circle(190, 80, 85);
     circle(220, 160, 105);
     circle(270, 90, 100);

     circle(525, 60, 95);
     circle(590, 90, 70);
     circle(490, 100, 110);
     circle(535, 130, 80);

   //mountain
   fill("#858585");
    triangle(360,18, 360, 360, 100, 360);
    triangle(360,18, 360, 360, 660, 360);
  fill("#b0b0b0");
    triangle(305, 90, 422, 89, 359, 18 );



      // grass
  fill("#1d6e42");
  rect(0, 360, 720, 40);

  fill('white') ;
  text(mouseX + ', ' + mouseY, 20, 20) ;



   //vampire
    fill("#FDE1D9");
    circle(360, 200, 100);

    push();
    fill("#FDE1D9");
    translate(329, 245) ;
    rotate(90);
    rect(0, 0, 15, 80, 20);
    pop();

    push();
    fill("#FDE1D9");
    translate(401, 259);
    rotate(180);
    rect(0, 0, 15, 80, 20);
    pop() ;

    //eyes
     fill("#ff6430");
     circle(335, 220, 20);
     circle(383, 220, 20);

     //hair
        push();
        translate(340, 175);
        rotate(45);
        fill("black");
        ellipse(0, 0, 50, 80);
        pop();

        push();
        translate(380, 175);
        rotate(90);
        fill("black");
        ellipse(0, 0, 50, 80);
        pop();

  //clothes night
  fill("#941e1e");
  rect(320, 250, 80, 110, 10);
    fill("#1e3082")
    rect(325, 355, 20, 60, 20);
    rect(375, 355, 20, 60, 20);









 }



}
