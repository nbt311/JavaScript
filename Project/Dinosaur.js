class Dinosaur{
    x;
    y;
    width;
    height;
    canvas;
    ctx;
    flag;
    dinoRunImage = [];
    WALK_ANIMATION = 200;
    walkAnimation = this.WALK_ANIMATION;

    constructor(x, y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx
        this.canvas = ctx.canvas
        // const dinoRunImage1 = new Image();
        // dinoRunImage1.src = '/Images/dino_run1.png';
        // const dinoRunImage2 = new Image();
        // dinoRunImage2.src = '/Images/dino_run2.png';
        this.image = document.getElementById('Dino1')
        this.dinoRunImage1 = document.getElementById('dinorun1');
        this.dinoRunImage2 = document.getElementById('dinorun2');
        this.dinoRunImage.push(this.image)
        this.dinoRunImage.push(this.dinoRunImage1);
        this.dinoRunImage.push(this.dinoRunImage2);

        this.flag = 'top'
    }

    // update(gameSpeed,frameTimeDelta) {
    //     this.run(gameSpeed, frameTimeDelta);
    // }

    // run(){
    //     let a = setInterval( () => {
    //         if (this.image === this.dinoRunImage[0]){
    //             this.image = this.dinoRunImage[1]
    //         }else {
    //             this.image = this.dinoRunImage[2]
    //         }
    //     },1)



    // run(gameSpeed, frameTimeDelta) {
    //     if (this.walkAnimation <= 0){
    //         if (this.image === this.dinoRunImage[0]){
    //             this.image = this.dinoRunImage[1];
    //         }
    //         else {
    //                 this.image = this.dinoRunImage[0];
    //         }
    //         this.walkAnimation = this.WALK_ANIMATION;
    //     }
    //     this.walkAnimation -= frameTimeDelta * gameSpeed;
    // }

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
        if (this.y <= this.canvas.height / 4) {
            this.flag = "down";
        }
    }

    moveBottom(){
        if (this.y + this.height < this.canvas.height - 20) {
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

           if (this.y + this.height >= this.canvas.height - 20) {
               this.flag = "top";
               clearInterval(x)
           }

        }, 10)

    }

}