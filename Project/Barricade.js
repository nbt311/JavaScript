class Barricade{
    x;
    y;
    width;
    height;
    canvas;
    ctx;
    image;


    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.image = document.getElementById('cactus1')
        this.ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
        this.ctx.closePath();
        // let img = new Image();
        // img.onload = () => {
        //     this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        // };
        // img.src = 'images/cactus_1.png';
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    move(){
        this.ctx.fillStyle = "white";
        //this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height )
        let x = setInterval(() => {
            if (this.x + this.width >= 0){
                this.moveLeft();
                this.draw()

            }
        },2000)

    }

    moveLeft(){
        this.x -= 3;
    }
}