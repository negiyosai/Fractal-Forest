var tree = [];
var leaves = [];
var counter = 0;

var starX = [];
var starY = [];
var stars = [];


function setup() {

    createCanvas(windowWidth, windowHeight);

    //create stars
    for (var i = 0; i < 50; i++) {
        stars[i] = new Star();
    }

    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    var root = new Branch(a, b);

    tree[0] = root;

    createForest();

}

function createForest() {

    for (var i = 0; i < 3; i++) {

        for (var i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished) {
                tree.push(tree[i].branchLeft());
                tree.push(tree[i].branchRight());
            }
            tree[i].finished = true;
        }

        counter++;
        if (counter == 5) {
            for (var i = 0; i < tree.length; i++) {
                if (!tree[i].finished) {
                    var leaf = tree[i].end.copy();
                    leaves.push(leaf);
                }
            }
        }
    }

}


function draw() {

    drawGradient();

    drawTree();

    drawStars();

}

function drawTree() {

    //Show Tree
    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
        //tree[i].jitter();
    }

    //Show Leaves
    for (var i = 0; i < leaves.length; i++) {
        fill(7, 11, 52);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 25, 25);
    }
}


function drawStars() {

    for (var i = 0; i < stars.length; i++) {
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

//Show Gradient
function drawGradient() {
    var color1 = color(7, 11, 52);  //top
    var color2 = color(133, 89, 136); //bottom
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

}


//Setting Gradient
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") {  // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + (h * 1.3), 0, 1);
            var c = lerpColor(c1, c2, inter);
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
        var scale = this.size + sin(this.t) * 0.8;
        noStroke();
        fill(255, 255, 255);

        ellipse(this.x, this.y, scale, scale);
    }
}
