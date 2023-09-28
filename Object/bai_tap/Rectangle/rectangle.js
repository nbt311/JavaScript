class Rectangle {
    x;
    y;
    height;
    width;
    color;
    canvas;
    ctx;


    constructor(x,y,height,width,color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.width,this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();

    }

    changeSize(){
        this.width = +prompt("Nhập chiều dài mong muốn");
        this.height = +prompt("Nhập chiều rộng mong muốn")
    }


    areaRectangle(){
        let area = this.width * this.height;
        alert("Diện tích hình chữ nhật là: " + area);
    }

    perimeterRectangle(){
        let perimeter = (this.width + this.height) * 2;
        alert("Chu vi hình chữ nhật là: " + perimeter);
    }
}