class Ground {
    x;
    y;
    width;
    height;
    canvas;
    ctx;

    constructor() {
        this.x = 0;
        this.y = 250;
        this.width = 2400;
        this.height = 24;
        this.ctx = ctx;
        this.canvas = ctx.canvas;

    }

    update() {
        this.x -= 7 ;
    }
    draw() {

        this.ctx.beginPath();
        this.image = document.getElementById('ground');
        this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        this.ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height);
        this.ctx.closePath();

        if (this.x < -this.width){
            this.x = 0;
        }
    }

    reset(){
        this.x += 0;
    }
}