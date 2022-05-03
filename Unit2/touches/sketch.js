let numberOfTouches;
let circleSize;
function setup() {
    circleSize = 200;
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    numberOfTouches = touches.length;
    text(numberOfTouches + ' touches', 5, 10);
    if (touches.length > 0) {
        for (let i = 0; i < (touches.length); i++) {
            text("" + touches[i].x + ", " + touches[i].y, 50, 50);
            fill("black");
            circle(touches[i].x,touches[i].y, circleSize);
        }
    }


    switch (numberOfTouches) {
        case 0:
            text("no one is touching the screen", 5, 22);
            break;

        case 1:
            text("it's kind of lonely here", 5, 22);
            // put a picture here
            break;

        case 2:
            text("two fingers are touching the screen", 5, 22);
            // put a picture here
            break;

        case 3:
            text("three are touching the screen", 5, 22);
            // put a picture here
            break;
        default:
            text("wow, there is " + numberOfTouches + " touching!", 5, 22);
            break;
            foreach()

    }

}
