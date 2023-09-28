let circle = new Circle()
for (let i = 0; i < 3; i++){
    circle.drawCircle();
}
function play() {

    circle.moveCircle();
    circle.drawCircle();
    requestAnimationFrame(play)
}
play()



