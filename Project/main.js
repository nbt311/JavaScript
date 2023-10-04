const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const GAME_SPEED_START = 1;
const GAME_SPEED_INCREMENT = 0.00001;
let previousTime = null;
let gameSpeed = GAME_SPEED_START;
let gameOver = false;
let hasAddedEventListenersForRestart = false;
let waitingToStart = true;


let dino = new Dinosaur(50,210,56,62)
let barri = new Barricade( 800,205,30,70)
let barri2 = new Barricade(820,200,30,80)
let barri3 = new Barricade(780,200,30,80)
let ground = new Ground();
let score = new Scores();


function clearScreen() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function showGameOver(){
    const fontSize = 70;
    ctx.font = `${fontSize}px Verdana`;
    ctx.fillStyle = "grey";
    const x = canvas.width / 4.5;
    const y = canvas.height / 2;
    ctx.fillText("GAME OVER", x, y);
}

function setupGameReset() {
    if (!hasAddedEventListenersForRestart) {
        hasAddedEventListenersForRestart = true;

        setTimeout(() => {
            window.addEventListener("keyup", reset, { once: true });
        }, 1000);
    }
}
function reset() {
    hasAddedEventListenersForRestart = false;
    gameOver = false;
    waitingToStart = false;
    ground.reset();
    barri.reset();
    score.reset();
    gameSpeed = GAME_SPEED_START;
}


function showStartGameText() {
    const fontSize = 40 ;
    ctx.font = `${fontSize}px Verdana`;
    ctx.fillStyle = "grey";
    const x = canvas.width / 8;
    const y = canvas.height / 2;
    ctx.fillText("Press Space To Start", x, y);
}
function Play(){
    // if (previousTime === null){
    //  previousTime = currentTime;
    //  requestAnimationFrame(Play);
    //  return;
    // }
    // const frameTimeDelta = currentTime - previousTime;
    // previousTime = currentTime;
    //clearScreen()
    if (!gameOver && !waitingToStart) {
        ground.update(gameSpeed);
        //dino.update(gameSpeed);
        score.update();

    }
    if (barri.collide(dino) === true) {
            gameOver = true;
            setupGameReset();
    }
        clearScreen()
        barri.move();
        barri.draw()

        // barri2.move();
        // barri3.move();
        ground.draw();
        dino.draw();
        score.draw()
    if (gameOver){
        showGameOver()
    }
    if (waitingToStart) {
        showStartGameText();
    }

        requestAnimationFrame(Play);
}
Play();

window.addEventListener('keyup', (evt) => {
    if (evt.code === 'Space') {
        dino.move();
    }
})
window.addEventListener("keyup", reset, { once: true });
