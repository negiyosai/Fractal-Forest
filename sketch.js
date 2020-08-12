/*var tree0 = [];
var tree1 = [];
var tree2 = [];
var tree3 = [];
var tree4 = [];
var tree5 = [];
var tree6 = [];
var tree7 = [];
var tree8 = [];
var tree9 = []; */

var leaves = [];
var counter = 0;

var starX = [];
var starY = [];
var stars = [];


function setup() {

    createCanvas(windowWidth, windowHeight);



    initStars();

    //create tree array variables 
    for (let i = 0; i < 10; i++) {
        this['tree' + i] = [];
    }

    for (let i = 0; i < 10; i++) {
        createTree(i);
    }

}

function initStars() {
    for (let i = 0; i < 50; i++) {
        stars[i] = new Star();
    }

}


function createTree(num) {

    widthVal = random(1, width)

    if (widthVal > width / 2) {
        endRootVal = widthVal - (widthVal / random(0, 100));
    }
    else {
        endRootVal = widthVal + (widthVal / random(0, 100));
    }

    let a = createVector(widthVal, height);
    let b = createVector(endRootVal, height - random(120, 180));
    let root = new Branch(a, b);

    this['tree' + num][0] = root;

    let branchEnd = random(4, 7);
    for (let i = 0; i < branchEnd; i++) {

        for (let i = this['tree' + num].length - 1; i >= 0; i--) {
            if (!this['tree' + num][i].finished) {
                this['tree' + num].push(this['tree' + num][i].branchLeft());
                this['tree' + num].push(this['tree' + num][i].branchRight());
            }
            this['tree' + num][i].finished = true;
        }

        counter++;
        if (counter == branchEnd) {
            for (let i = 0; i < tree0.length; i++) {
                if (!this['tree' + num][i].finished) {
                    let leaf = this['tree' + num][i].end.copy();
                    leaves.push(leaf);
                }
            }
        }
    }

}


function draw() {

    drawGradient();
    drawStars();
    for (let i = 0; i < 10; i++) {
        drawTree(i);
    }
}

function drawTree(num) {

    //Show Tree
    for (let i = 0; i < this['tree' + num].length; i++) {
        this['tree' + num][i].show();
    }

    //Show Leaves
    for (let i = 0; i < leaves.length; i++) {
        fill(7, 11, 52);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 25, 25);
    }
}


function drawStars() {

    for (let i = 0; i < stars.length; i++) {
        stars[i].draw();
    }

    //moon
    noStroke();
    fill(230, 230, 230, 50);
    ellipse(200, 150, 170, 170);
    fill(230, 230, 230, 150);
    ellipse(200, 150, 130, 130);
    fill(230, 230, 230, 200);
    ellipse(200, 150, 110, 110);
    fill(230, 230, 230);
    ellipse(200, 150, 70, 70);
}

//draw Gradient
function drawGradient() {
    let color1 = color(7, 11, 52);  //top
    let color2 = color(133, 89, 136); //bottom
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

}


//Setting Gradient
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") {  // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + (h * 1.3), 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
}

// Stars //
class Star {
    constructor() {
        this.x = random(windowWidth);
        this.y = random(windowHeight - 250);
        this.size = random(0.25, 4);
        this.t = random(TAU);
    }

    draw() {
        this.t += 0.1;
        let scale = this.size + sin(this.t) * 0.8;
        noStroke();
        fill(255, 255, 255);

        ellipse(this.x, this.y, scale, scale);
    }
}
