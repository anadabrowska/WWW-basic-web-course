let canv, g;

let triangle;
let gamePoint;

let pointsCount = 0;
let maxPointsCount = 20000;

let structure = [];

$(document).ready(function() {
    canv = document.getElementById("gc");
    g = canv.getContext("2d");

    triangle = new Triangle(
        new Point(-Math.sqrt(3)/2, -1/2),
        new Point( Math.sqrt(3)/2, -1/2),
        new Point(0, 1)
    );

    gamePoint = new Point(0, 0);
    generatePoints();
    draw();

    $("#slider").slider({
        min: 0,
        max: maxPointsCount,
        range: 1,
        slide: function( event, ui ) {
            pointsCount = ui.value;
            draw();
        }
    });
});

function generatePoints() {
    var temp = new Point(gamePoint.x, gamePoint.y);

    for(var i = 0; i < maxPointsCount; i++){
        structure.push(temp);
        let toss = Math.floor(Math.random() * 3);
        if(toss == 0){
            temp = temp.t1();
        }else if(toss == 1){
            temp = temp.t2();
        }else if(toss == 2){
            temp = temp.t3();
        }
    }
}

function draw() {
    g.fillStyle = "#000000";
    g.fillRect(0, 0, canv.width, canv.height);

    g.strokeStyle = "#FFFFFF";
    g.fillStyle = "#FF00FF";

    for(var i = 0; i < pointsCount; i++)
        g.drawDot(structure[i].x, structure[i].y);

    g.drawTriangle(triangle);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Point.prototype.t1 = function() {
    return new Point(this.x/2, this.y/2 + 1/2);
}

Point.prototype.t2 = function() {
    return new Point(this.x/2 - Math.sqrt(3)/4, this.y/2 - 1/4);
}

Point.prototype.t3 = function() {
    return new Point(this.x/2 + Math.sqrt(3)/4, this.y/2 - 1/4);
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

CanvasRenderingContext2D.prototype.drawDot = function(x, y) {
    this.fillRect(x.map(-1, 1, 0, canv.width), y.map(1, -1, 0, canv.height) + 50, 1, 1);
}

CanvasRenderingContext2D.prototype.drawTriangle = function(t) {
    this.beginPath();
    this.moveTo(t.a.x.map(-1, 1, 0, canv.width), t.a.y.map(1, -1, 0, canv.height) + 50);
    this.lineTo(t.b.x.map(-1, 1, 0, canv.width), t.b.y.map(1, -1, 0, canv.height) + 50);
    this.lineTo(t.c.x.map(-1, 1, 0, canv.width), t.c.y.map(1, -1, 0, canv.height) + 50);
    this.closePath();
    this.stroke();
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
