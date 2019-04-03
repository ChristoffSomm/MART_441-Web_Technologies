// JavaScript Document
var speed = 100;

//color
var canvasBoarder = 'black';
var canvasBG = ["#DCDCDC", "#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969", "#778899", "#708090", "#2F4F4F", "#000000"];
var snakeColor = ["#800000", "#8B0000", "#FF0000", "#B22222", "#DC143C", "#CD5C5C", "#F08080", "#E9967A", "#FA8072", "#FFA07A"];
var snakeBoarderColor = 'black';
var snakeColor2 = ["#000080", "#00008B", "#483D8B", "#7B68EE", "#5F9EA0", "#1E90FF", "#00BFFF", "#87CEFA", "#B0E0E6", "#F0F8FF"];
var snakeBoarderColor2 = 'black';
var foodColor = "#FFD700";
var foodBoaderColor = 'darkred';

var colorRandom = 0;
	
//Snake Arreies
var snake = [
	{x: 150, y: 150},
	{x: 140, y: 150},
	{x: 130, y: 150},
	{x: 120, y: 150},
	{x: 110, y: 150}
    ];
	
var snake2 = [
	{x: 150, y: 450},
	{x: 140, y: 450},
	{x: 130, y: 450},
	{x: 120, y: 450},
	{x: 110, y: 450}
    ];


// The score
var score = 0;
var score2 = 0;

// if ture change direction
var changingDirection = false;
var changingDirection2 = false;

//Food on y and x
var fx;
var fy;

//y and x snake Movement 
var dx = 10;
var dy = 0;
 
var d1x = 10;
var d1y = 0;

var gameCanvas = document.getElementById("game");
var ctx = gameCanvas.getContext("2d");

//Start Game and create first food
startGame();
createFood();

//Google help me find and this Event Listener
document.addEventListener("keydown", changeDirection);
document.addEventListener("keydown", changeDirection2);


function startGame() {
	if (endGame() || endGame2() || endGame3() || endGame4()) return;
		setTimeout(function loopIfNotEnded() {
        changingDirection = false;
		changingDirection2 = false;
        clearCanvas();
        drawFood();
        snakeMovement();
		snakeMovement2();
        drawSnake();
		drawSnake2();
			console.log(colorRandom);

        startGame()
      }, speed)
	}

//Background and Color
function clearCanvas() {
	ctx.fillStyle = canvasBG[colorRandom];
	ctx.strokestyle = canvasBoarder;
	ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
	ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

//Food and color
function drawFood() {
	ctx.fillStyle = foodColor;
	ctx.strokestyle = foodBoaderColor;
	ctx.fillRect(fx, fy, 10, 10);
	ctx.strokeRect(fx, fy, 10, 10);
}

//Eating and Movement 2
function snakeMovement() {
	var head = {x: snake[0].x + dx, y: snake[0].y + dy};
	snake.unshift(head);
	
	var didEatFood = snake[0].x === fx && snake[0].y === fy;
      if (didEatFood) {
        score += 1;
        document.getElementById('score').innerHTML = score;
        createFood();
		changColor();
} 
	 	
	else {
        snake.pop();
      }
    }

//Eating and Movement 2
 function snakeMovement2() {
	var head = {x: snake2[0].x + d1x, y: snake2[0].y + d1y};
	snake2.unshift(head);
	
	var didEatFood = snake2[0].x === fx && snake2[0].y === fy;
      if (didEatFood) {
        score2 += 1;
        document.getElementById('score2').innerHTML = score2;
        createFood();
		changColor();
} 
	 	
	else {
        snake2.pop();
      }
    }  

//Change Color
function changColor(){
	colorRandom = Math.round(Math.random() * 10)
	console.log(colorRandom);
	return colorRandom;
}




// Ways to end the game
function endGame() {
	for (var i = 4; i < snake.length; i++) {
		if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
	}
	var hitLeftWall = snake[0].x < 0;
	var hitRightWall = snake[0].x > gameCanvas.width - 10;
	var hitToptWall = snake[0].y < 0;
	var hitBottomWall = snake[0].y > gameCanvas.height - 10;
	return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}


function endGame2() {
	for (var i = 4; i < snake2.length; i++) {
		if (snake2[i].x === snake2[0].x && snake2[i].y === snake2[0].y) return true
	}
	var hitLeftWall = snake2[0].x < 0;
	var hitRightWall = snake2[0].x > gameCanvas.width - 10;
	var hitToptWall = snake2[0].y < 0;
	var hitBottomWall = snake2[0].y > gameCanvas.height - 10;
	return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function endGame3(){
	for (var i = 4; i < snake2.length; i++) {
		if (snake[0].x === snake2[i].x && snake[0].y === snake2[i].y) return true
}
}

function endGame4(){
	for (var i = 4; i < snake.length; i++) {
		if (snake2[0].x === snake[i].x && snake2[0].y === snake[i].y) return true	
}
}




// Random Gen Food
function randomHight() {
	
	return Math.round((Math.random() * 600) / 10) * 10;
	
}
 
function randomWidth() {
	
	return Math.round((Math.random() * 1000) / 10) * 10;
	
}

function createFood() {
	fy = randomHight();
	fx = randomWidth();
		
	snake.forEach(function isFoodOnSnake(part) {
	var foodIsoNsnake = part.x == fx && part.y == fy;
		if (foodIsoNsnake) createFood();
		
	});
}



//Draw Snake 1
function drawSnake() {
	snake.forEach(drawSnakePart)
}
function drawSnakePart(snakePart) {
	ctx.fillStyle = snakeColor[colorRandom];
	ctx.strokestyle = snakeBoarderColor;
	ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
	ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

   
//Draw Snakes 2
function drawSnake2() {
	snake2.forEach(drawSnakePart2)
}
function drawSnakePart2(snakePart2) {
	ctx.fillStyle = snakeColor2[colorRandom];
	ctx.strokestyle = snakeBoarderColor2;
	ctx.fillRect(snakePart2.x, snakePart2.y, 10, 10);
	ctx.strokeRect(snakePart2.x, snakePart2.y, 10, 10);
}
  






// ASDW Key Movements
function changeDirection(event) {
	
	  var leftKey = 65;
      var rightKey = 68;
      var upKey = 87;
      var downKey = 83;
      
      if (changingDirection) return;
      changingDirection = true;
      
      var keyPressed = event.keyCode;
      var goingUp = dy === -10;
      var goingDown = dy === 10;
      var goingRight = dx === 10;
      var goingLeft = dx === -10;
		
      if (keyPressed === leftKey && !goingRight) {
        dx = -10;
        dy = 0;
      }
      
      if (keyPressed === upKey && !goingDown) {
        dx = 0;
        dy = -10;
      }
      
      if (keyPressed === rightKey && !goingLeft) {
        dx = 10;
        dy = 0;
      }
      
      if (keyPressed === downKey && !goingUp) {
        dx = 0;
        dy = 10;
      }
    }



// right left side  Keys movement
function changeDirection2(event) {
	
	  var leftKey = 37;
      var rightKey = 39;
      var upKey = 38;
      var downKey = 40;
      
      if (changingDirection2) return;
      changingDirection2 = true;
      
      var keyPressed = event.keyCode;
      var goingUp = d1y === -10;
      var goingDown = d1y === 10;
      var goingRight = d1x === 10;
      var goingLeft = d1x === -10;
		
      if (keyPressed === leftKey && !goingRight) {
        d1x = -10;
        d1y = 0;
      }
      
      if (keyPressed === upKey && !goingDown) {
        d1x = 0;
        d1y = -10;
      }
      
      if (keyPressed === rightKey && !goingLeft) {
        d1x = 10;
        d1y = 0;
      }
      
      if (keyPressed === downKey && !goingUp) {
        d1x = 0;
        d1y = 10;
      }
    }
