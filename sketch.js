var tree = [];
var leaves = [];
var counter = 0;
function setup() {
    createCanvas(500, 500);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    var root = new Branch(a, b);

    tree[0] = root;

}

function mousePressed() {

    /*counter++;
    if (counter > 3) {
        clear();
        counter = 0;
    } */

    for (var i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
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

function draw() {

    background(4, 178, 253);
    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
        //tree[i].jitter();

    }

    for (var i = 0; i < leaves.length; i++) {
        fill(0, 255, 0, 255);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 25, 25);
    }
}
