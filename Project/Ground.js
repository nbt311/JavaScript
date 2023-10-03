class Ground {
    x;
    y;
    width;
    height;
    canvas;
    ctx;

    constructor() {
        this.x = 0;
        this.y = 260;
        this.width = 800;
        this.height = 20;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        this.ctx.beginPath();
        this.image = document.getElementById('ground');
        this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        this.ctx.closePath();
    }
}