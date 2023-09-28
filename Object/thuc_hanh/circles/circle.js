class Circle{
    x;
    y;
    radius;
    color;
    canvas;
    ctx;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawCircle(){
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        this.ctx.fillStyle = this.color
        this.ctx.fill();
        this.ctx.closePath();
    }
}