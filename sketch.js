var tree = [];
var leaves = [];
var counter = 0;

var starX = [];
var starY = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    getStarPositions();

    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    var root = new Branch(a, b);

    tree[0] = root;

}

function mousePressed() {

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

    //Gradient Show
    var color1 = color(7, 11, 52);  //top
    var color2 = color(133, 89, 136); //bottom
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

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
        fill(color1);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 25, 25);
    }
}


function getStarPositions() {
    for (let i = 0; i < 50; i++) {
        starX[i] = random(windowWidth);
        starY[i] = random(windowHeight - 250);
    }
}

function drawStars() {

    for (let i = 0; i < 50; i++) {
        noStroke();
        fill(255, 255, 0);
        ellipse(starX[i], starY[i], 2, 2);
    }
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
