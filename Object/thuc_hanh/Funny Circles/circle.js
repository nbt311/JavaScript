class Circle {
    x;
    y;
    radius;
    ctx;
    direction;

    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.radius = Math.floor(Math.random() * 80);
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.direction = 'top';
    }

    getRandomHex(){
        return Math.floor(Math.random()*255);
    }
    getRandomColor(){
        let red = this.getRandomHex();
        let green = this.getRandomHex();
         let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }

    drawCircle(){
        this.ctx.beginPath();
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.radius = Math.floor(Math.random() * 80);
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        //this.ctx.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.floor(Math.random() * 80) , 0, Math.PI * 2);
        this.ctx.fillStyle =  this.getRandomColor()
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveCircle(){
        // xoa het man hinh canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(this.y - this.radius <= 0){
            this.direction = "down";
        }else if(this.y + this.radius >= this.canvas.height){
            this.direction = "up";
        }
        switch (this.direction){
            case "down":
                this.moveBottom();
                break;
            default:
                this.moveTop();
        }
    }

    moveTop(){
        this.y -= 5;
    }
    moveBottom(){
        this.y += 5;
    }


}