var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;
var points1, points2, points3;
var direction;
var questions;
var squareArray = [];
var pointsGoal = 0; 



$(document).ready(function(){
	setup();  
    $(this).keypress(function(event){
        getKey(event);
    });
});


function setup(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(200,20,50,50,"#29276c");
	
	points1 = new Square(350, 150, 20,20,"#ffd700");
	points2 = new Square(50,550,20,20,"#ffd700");
	points3 = new Square(50,390,20,20,"#ffd700");
	
    $.getJSON("JSON/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++){
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });
}


function getKey(event){
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter === "w"){
        moveUp();
        direction = "up";
    }
    if(actualLetter === "s"){
        moveDown();
        direction = "down";
    }
    if(actualLetter === "a"){
        moveLeft();
        direction = "left";
    }
    if(actualLetter === "d"){
        moveRight();
        direction = "right";
    }
	
    var check = false;
    for(var i = 0; i < squareArray.length; i++){

        check = hasCollided(square1,squareArray[i]);
        if(check === true){
            break;
        }
    }
	
	
	 var pointOne = false;
        pointOne = hasCollided(square1,points1);
        if(pointOne === true){
			pointsGoal++;
			points1 = new Square(0, 0, 0,0,"#ffd700");
			console.log("One");

        }
  
	
	 var pointTwo = false;
        pointTwo = hasCollided(square1,points3);
        if(pointTwo === true){
			pointsGoal++;
			points3 = new Square(0, 0, 0,0,"#ffd700");
			console.log("Two");
  
        }
	
	 var pointThree = false;
        pointThree = hasCollided(square1,points2);
        if(pointThree === true){
			pointsGoal++;
			points2 = new Square(0, 0, 0,0,"#ffd700");
			console.log("Three");
  
		}
	
	
	
    if(check){
        if(direction === "left"){moveRight();}
        else if(direction === "right"){moveLeft();}
        else if(direction === "up"){moveDown();}
        else if(direction === "down"){moveUp();}
    }
    drawSquare(); 
    
}

function moveUp(){square1.y-=10;}
function moveDown(){square1.y+=10;}
function moveRight(){square1.x+=10;}
function moveLeft(){square1.x-=10;}

function drawSquare(){
	
    ctx.clearRect(0,0,1200,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
	
	ctx.fillStyle = points1.mainColor;
    ctx.fillRect(points1.x, points1.y, points1.width, points1.height);
	
	ctx.fillStyle = points2.mainColor;
    ctx.fillRect(points2.x, points2.y, points2.width, points2.height);
	
	ctx.fillStyle = points3.mainColor;
    ctx.fillRect(points3.x, points3.y, points3.width, points3.height);
	
    for(var i = 0; i < squareArray.length; i++){
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }   
	
	ctx.font = "30px Arial";
	ctx.fillText("Points: " + pointsGoal, 40, 50); 
      
}



function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}