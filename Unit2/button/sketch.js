let state = 0;

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(25);
}

function draw() {
    switch (state) {
        case 0:
            background("red");
            text("why did the scarecrow win an award?", width / 2, height / 2);
            break;
        case 1:
            background("orange");
            text("because he was outstanding in his field!", width / 2, height / 2, 400, 500);
            break;
    }
    push();
    fill("green");
    rectMode(CORNER);
    rect(100, 100, 100, 100);
    pop();
}

function mouseReleased() {
    if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
        state = (state + 1) % 2;
    }
}
