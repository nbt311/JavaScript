let dino = new Dinosaur(0,220,80,80)
let barri = new Barricade( 500,220,50,80)
// let barri2 = new Barricade(600,220,50,80)
// let barri3 = new Barricade(800,220,50,80)
let ground = new Ground()
function Play(){

    barri.move();
    //barri2.move();
    //barri3.move();
    ground.draw();
    dino.draw();

    requestAnimationFrame(Play);
}


window.addEventListener('keyup', (evt) => {
    if (evt.code === 'Space') {
        dino.move();
    }
})
Play();
