var angle = 0;
var divideValue = 0.7;

function setup() {
    createCanvas(500, 500);
    slider = createSlider(0, TWO_PI, PI / 4, 0.001);
}

function draw() {
    background(51);
    angle = slider.value();
    stroke(255);
    translate(250, height);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, - len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * divideValue)
        pop();
        push();
        rotate(-angle);
        branch(len * divideValue);
        pop();
    }
}