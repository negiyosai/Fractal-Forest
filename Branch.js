function Branch(begin, end) {

    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.show = function () {
        stroke(7, 11, 52);
        strokeWeight(5)
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchLeft = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / random(2, 20));
        dir.mult(random(0.3, 0.8));
        var newEnd = p5.Vector.add(this.end, dir);
        var left = new Branch(this.end, newEnd);
        return left;
    }

    this.branchRight = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI / random(2, 20));
        dir.mult(random(0.3, 0.8));

        var newEnd = p5.Vector.add(this.end, dir);

        var right = new Branch(this.end, newEnd);

        return right;
    }
}