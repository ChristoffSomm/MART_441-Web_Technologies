
//3 Var img tag, blank card (link) and new array 
var imgTag = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20" ];

var imgBlankGaming = "./imgs/blankGaming.jpg";

var imgActual = new Array();

var number1 = -1;
var number2 = -1;

var attemps = 0;
var changePage = 9;

//add JSON
var playerInfo = {"firstname": "", "lastname":"", "Age":"", "Score":""};


//print blank function.... for loop img tag.lenght
function printimgBlankGaming(){
	randomImg();
    for(var i = 0; i < imgTag.length; i++){
        document.getElementById(imgTag[i]).src= imgBlankGaming;
    }
}

//Random Img function 
function randomImg(){
    //Img link
    var imgLink = ['./imgs/Ezio-Auditore-De-Firenze.jpg', './imgs/Geralt-of-Rivia.jpg', './imgs/Mario.jpg', './imgs/Master-Chief.jpg',  "./imgs/McCree.jpg",  "./imgs/Subzero.jpg", "./imgs/Pikachu.jpg", "./imgs/Pit-of-Kid-Icarus.jpg", "./imgs/Princess-Zelda.jpg", "./imgs/Sonic-the-Hedgehog.jpg"];
    //Count try 10
    var count = [0,0,0,0,0,0,0,0,0,0];
    //lenght 20 While loop 
    while(imgActual.length < 20){
        //random number * img.length
        var randomNumber = Math.floor(Math.random() * imgLink.length);
        //if statement 
        if(count[randomNumber] < 2){
            imgActual.push(imgLink[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}
//flip Img    
function flipImg(number){
    //get Element by ID

    if (number1 >= 0){
        number2 = number;
        document.getElementById(imgTag[number]).src= imgActual[number2];
    }
    else if (number1 < 0){
        number1 = number;
        document.getElementById(imgTag[number1]).src= imgActual[number1];
    }
    if (imgActual[number1] != imgActual[number2] && number1 >= 0 && number2 >= 0){
        setTimeout(imgDisappear, 400);
        attemps++;
        return attemps;
    }
    else if (imgActual[number1] == imgActual[number2] && number1 >= 0 && number2 >= 0) {
        number1 = -1;
        number2 = -2;
        attemps++;
        changePage--;
        console.log(changePage);
        return attemps;

    }
    if (changePage === 0){

        console.log("work");
        setTimeout(finalPage, 2000);
    }
}

function imgDisappear(){
    document.getElementById(imgTag[number1]).src= imgBlankGaming;
    document.getElementById(imgTag[number2]).src= imgBlankGaming;
    number1 = -1;
    number2 = -2;
}

function addInfo(){
	var firstName = document.getElementById("firName").value;
	var lastName = document.getElementById("lasName").value;
	var age = document.getElementById("txtage").value;
    
    playerInfo.firstname = firstName;
    playerInfo.lastname = lastName;
    playerInfo.Age = age;

    localStorage.setItem("player", JSON.stringify(playerInfo));
    window.location = "game.html";
}

function player(){
    playerInformation = localStorage.getItem("player");
    playerInfo = JSON.parse(playerInformation);
}

function finalPage() {
    playerInfo.Score = attemps;

    localStorage.setItem("player", JSON.stringify(playerInfo));
    window.location = "winner.html";
}


function loadScore (){
    document.getElementById('fNames').innerHTML = playerInfo.firstname + " " + playerInfo.lastname;
    document.getElementById('age').innerHTML = "Age: " + playerInfo.Age;
    document.getElementById('score').innerHTML = "Your Score: " + playerInfo.Score; 
} 