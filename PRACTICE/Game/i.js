
let canvas = document.querySelector('canvas');
let pen = canvas.getContext("2d");

let cell = 20;

let arr = [[100, 100]];

let direction = "RIGHT";

let fruit = {
    x: 200,
    y: 100
};

let score = 0;
let gameOver = false;


// Draw snake and fruit
function shape() {

    pen.clearRect(0, 0, 600, 400);

    // Draw snake
    pen.fillStyle = "red";

    for (let i of arr) {
        pen.fillRect(i[0], i[1], cell, cell);
    }

    // Draw fruit
    pen.fillStyle = "lime";

    pen.fillRect(fruit.x, fruit.y, cell, cell);
}


// Generate random fruit
function generateFruit() {

    fruit.x = Math.floor(Math.random() * 30) * cell;
    fruit.y = Math.floor(Math.random() * 20) * cell;

}


// Update snake position
function update() {

    let headX = arr[arr.length - 1][0];
    let headY = arr[arr.length - 1][1];

    let newX = headX;
    let newY = headY;

    if (direction === "RIGHT") newX += cell;
    if (direction === "LEFT") newX -= cell;
    if (direction === "UP") newY -= cell;
    if (direction === "DOWN") newY += cell;

    let newHead = [newX, newY];

    // Wall collision
    if (
        newX < 0 ||
        newY < 0 ||
        newX >= 600 ||
        newY >= 400
    ) {
        endGame();
        return;
    }

    // Self collision
    for (let i = 0; i < arr.length; i++) {

        if (newX === arr[i][0] && newY === arr[i][1]) {
            endGame();
            return;
        }

    }

    // Add new head
    arr.push(newHead);

    // Fruit collision
    if (newX === fruit.x && newY === fruit.y) {

        score++;

        document.querySelector("#score").innerText = score;

        generateFruit();

    } else {

        // Remove tail if fruit not eaten
        arr.shift();

    }

}


// Keyboard controls
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }

    if (event.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    }

    if (event.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    }

    if (event.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    }

});


// Game over
function endGame() {

    gameOver = true;

    clearInterval(gameLoop);

    pen.fillStyle = "white";
    pen.font = "40px Arial";
    pen.textAlign = "center";

    pen.fillText("GAME OVER", 300, 190);

    pen.font = "20px Arial";

    pen.fillText("Final Score: " + score, 300, 230);

}


// Main game loop
function game() {

    if (gameOver) return;

    shape();

    update();

}

let gameLoop = setInterval(game, 150);
