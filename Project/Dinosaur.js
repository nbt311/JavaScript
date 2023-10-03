class Dinosaur{
    x;
    y;
    color;
    width;
    height;
    canvas;
    ctx;
    flag;

    constructor(x, y,width,height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.flag = 'top'
    }

    draw() {
        this.ctx.beginPath();
        this.image = document.getElementById('Dino1')
        this.ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
        this.ctx.closePath();
        // let img = new Image();
        // img.onload = () => {
        //     this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        // };
        // img.src = 'images/standing_still_eye_closed.png';
    }

    moveTop(){
        this.y -= 5;

        this.draw();
        if (this.y <= this.canvas.height / 3) {
            this.flag = "down";
        }
    }

    moveBottom(){
        if (this.y + this.height < this.canvas.height) {
            this.y += 5;

            this.draw();
        } else {
            this.flag = "top";
        }
    }

    move(){
        let x = setInterval(()=> {
           switch (this.flag){
               case "down":
                   this.moveBottom();
                   break;
               case "top":
                   this.moveTop();
                   break;
           }

           if (this.y + this.height >= this.canvas.height) {
               this.flag = "top";
               clearInterval(x)
           }

        }, 1)

    }

}