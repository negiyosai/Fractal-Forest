var tree = [];
var leaves = [];
var counter = 0;



function setup() {
    createCanvas(windowWidth, windowHeight);

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
    var color1 = color(0, 0, 153);
    var color2 = color(204, 51, 0);
    setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

    //Show Tree
    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
        //tree[i].jitter();
    }

    for (var i = 0; i < leaves.length; i++) {
        fill(6, 6, 150, 255);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 20, 20);
    }
}

//Setting Gradient

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") {  // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
    else if (axis == "X") {  // Left to right gradient
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            stroke(d);
            line(j, y, j, y + h);
        }
    }
}
