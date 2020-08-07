//constructor function
function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    /*this.jitter = function () {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
    }*/

    this.show = function () {
        stroke(7, 27, 52);
        strokeWeight(5)
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchLeft = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / 4);
        dir.mult(0.3);
        var newEnd = p5.Vector.add(this.end, dir);
        var left = new Branch(this.end, newEnd);
        return left;
    }

    this.branchRight = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI / 4);
        dir.mult(0.67);

        var newEnd = p5.Vector.add(this.end, dir);

        var right = new Branch(this.end, newEnd);

        return right;
    }
}