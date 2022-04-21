
let state = 0;
let timer = 0;

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER);
    rectMode(CENTER);
    textSize(20);
}

function draw() {

    switch (state) {
        case 0:
            background("green");
            text("why did the golfer bring two pairs of pants?", width / 2, height / 2);

            timer++ ;
            if (timer > 3*60){
              timer = 0 ;
              state = 1 ;
            }
            break;

        case 1:
            background("red");
            text("in case he got a hole in one! HAHAHAHA", width / 2, height / 2);

            timer++ ;
            if (timer > 3*60){
              timer = 0 ;
              state = 1 ;
            }
            break;
    }
}
