class Ball {
    x;
    y;
    radius;
    color;
    ctx;
    direction;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.ctx.getContext('2d');
        this.direction
    }


    draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.closePath();
    }

    move(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.y - this.radius <= 0){
            this.direction = 'down';
        }else if (this.y + this.radius >= this.canvas.height) {
            this.direction = 'up';
        }
    }

    moveTop(){

        this.y -= 5;
    }


    moveBottom(){
        this.y += 5;
    }
}