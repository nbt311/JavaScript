class Barricade{
    x;
    y;
    width;
    height;
    canvas;
    ctx;
    image;
    cactus = [];


    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.canvas = ctx.canvas;

    }

    draw() {
        this.ctx.beginPath();
        this.image = document.getElementById('cactus1')
        this.ctx.drawImage(this.image,this.x, this.y, this.width, this.height);

        this.ctx.closePath();
        // let img = new Image();
        // img.onload = () => {
        //     this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        // };
        // img.src = 'images/cactus_1.png';
    }

    // getRandomNumber(min, max) {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }

    move(){
        this.ctx.fillStyle = "white";
        this.moveLeft();
            if (this.x + this.width > 0){
                //this.draw()

            }else{
                this.x = 800;
                this.y = 205;
            }
            //this.collideWith() ;
    }

    moveLeft(){
        this.x -= 10;
    }

    // collideWith(Sprite){
    //     if (this.collide() === true){
    //         return this.showGameOver();
    //     }
    // }


    collide() {

        if (this.x + this.width > dino.x / 1.4 && this.x < (dino.x + dino.width) / 1.4
            && this.y < (dino.y + dino.height)) {
            return true;
        }
    }

    reset(){
        this.draw()
    }


}

