
//3 Var img tag, blank card (link) and new array 
var imgTag = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20" ];

var imgBlankGaming = "./imgs/blankGaming.jpg";

var imgActual = new Array();

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
        var randomNumber = Math.floor(Math.random() * imgLink.length)
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
    document.getElementById(imgTag[number]).src= imgActual[number];
}