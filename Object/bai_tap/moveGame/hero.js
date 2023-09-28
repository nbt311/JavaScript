class Hero{
  image;
  top;
  left;

  size;
  //direction;

  constructor(image,top,left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    //this.bottom = bottom;
    //this.direction;

  }

  getHeroElement(){
    return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  move() {
      if (this.left < window.innerWidth - this.size && this.top <= 20) {
          this.moveRight();
      } else if (this.top < window.innerHeight - this.size && this.left > 30) {
          this.moveBottom();
      } else if (this.left > 30) {
          this.moveLeft();
      } else if (this.top > 20) {
          this.moveTop();
      }
  }


  moveRight(){
    this.left += 100;
    console.log('ok: ' + this.left);
  }
  moveLeft(){
    this.left -= 100;
  }

  moveTop(){
    this.top -= 100;
  }

  moveBottom(){
    this.top += 100;
  }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

 function start(){
     hero.move()
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();