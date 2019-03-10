var movieList = new Array();

class movieOrganizer {
    constructor (title, description, linkPath){
        this.title = title;
        this.description = description;
        this.linkPath = linkPath;
    }
    toStringTitle(){
        return this.title;
    }
    toStringDescription(){
        return this.description;
    }
    get theImgLink() {
        return this.linkPath;
    }
    
}

function initializeArray() {

    var movie1 = new movieOrganizer("Spider-Man: Into the Spider-Verse", "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from another dimensions to stop a threat for all realities.", "./img/spiderMan.jpg");
    var movie2 = new movieOrganizer("Avengers: Infinity War", "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.", "./img/infinityWars.jpg");
    var movie3 = new movieOrganizer("Ready Player One", "When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune.", "./img/readyPlayerOne.jpeg");
    var movie4 = new movieOrganizer("Black Panther", "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.", "./img/blackPanter.jpg");
    var movie5 = new movieOrganizer("A Quiet Place", "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.", "./img/quietPlace.jpeg");
    var movie6 = new movieOrganizer("Ant-Man and the Wasp", "Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don the Ant-Man suit and fight alongside the Wasp. The urgent mission soon leads to secret revelations from the past as the dynamic duo finds itself in an epic battle against a powerful new enemy.", "./img/antManAndWasp.jpg");
    var movie7 = new movieOrganizer("Deadpool 2", "Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Russell becomes the target of Cable -- a genetically enhanced soldier from the future -- Deadpool realizes that he'll need some help saving the boy from such a superior enemy. He soon joins forces with Bedlam, Shatterstar, Domino and other powerful mutants to protect young Russell from Cable and his advanced weaponry.", "./img/deadPool2.jpg");
    var movie8 = new movieOrganizer("Solo: A Star Wars Story", "Young Han Solo finds adventure when he joins forces with a gang of galactic smugglers and a 190-year-old Wookie named Chewbacca. Indebted to the gangster Dryden Vos, the crew devises a daring plan to travel to the mining planet Kessel to steal a batch of valuable coaxium. In need of a fast ship, Solo meets Lando Calrissian, the suave owner of the perfect vessel for the dangerous mission -- the Millennium Falcon.", "./img/solo.jpeg");
    var movie9 = new movieOrganizer("Incredibles 2", "Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life. It’s a tough transistion for everyone, made tougher by the fact that the family is still unaware of baby Jack-Jack’s emerging superpowers. When a new villain hatches a brilliant and dangerous plot, the family and Frozone must find a way to work together again—which is easier said than done, even when they’re all Incredible.", "./img/incredibles2.jpg");
    var movie10 = new movieOrganizer("Spider-Man: Into the Spider-Verse", "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from another dimensions to stop a threat for all realities.", "./img/spiderMan.jpg");
    movieList.push(movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10);
}

var x = 0;
var xx = 7;
var xxx = 8;
var xxxx = 1;
var xxxxx = 3;


$(function () {
    $("#title").html(movieList[x].toStringTitle());
    $("#description").html(movieList[x].toStringDescription());
    $("#movieCenter").attr("src", movieList[x].theImgLink);
    $("#movieR").attr("src", movieList[xx].theImgLink);
    $("#movieOutR").attr("src", movieList[xxx].theImgLink);
    $("#movieL").attr("src", movieList[xxxx].theImgLink);
    $("#movieOutL").attr("src", movieList[xxxxx].theImgLink);

    $(".answer5").fadeOut("slow");
    $(".answer4").fadeOut("slow");
    $(".answer3").fadeOut("slow");
    $(".answer2").fadeOut("slow");
    $(".answer1").fadeOut("slow");
    



    $("button").click(function(){

        $("#movieOutR").animate({
            left: '920px',
            height: '+=120px',
            width: '+=80px',
            top: "350px",
            opacity: 0.7,}); 
        $("#movieCenter").animate({
            left: '280px',
            height: '-=120px',
            width: '-=80px',
            top: "350px",
            opacity: 0.7,});
        $("#movieL").animate({
            left: '560px',
            height: '+=120px',
            width: '+=80px',
            top: "270px",
            opacity: 1,});
        $("#movieR").animate({
            left: '90px',
            height: '-=120px',
            width: '-=80px',
            top: "400px",
            opacity: 0.2,});

       


    
            counterX1();
            counterX2();
            counterX3();
            counterX4();
            counterX5();

            $("#movieCenter").attr("src", movieList[x].theImgLink).delay( 800 );
            $("#movieR").attr("src", movieList[xx].theImgLink).delay( 800 );
            $("#movieOutR").attr("src", movieList[xxx].theImgLink).delay( 800 );
            $("#movieL").attr("src", movieList[xxxx].theImgLink).delay( 800 );
            $("#movieOutL").attr("src", movieList[xxxxx].theImgLink).delay( 800 );
            $("#title").html(movieList[x].toStringTitle());
            $("#description").html(movieList[x].toStringDescription());

            timeRestart();

            $(".answer5").fadeOut("slow");
            $(".answer4").fadeOut("slow");
            $(".answer3").fadeOut("slow");
            $(".answer2").fadeOut("slow");
            $(".answer1").fadeOut("slow");
      });
});

function counterX1(){
    x++;
    if (x === 9){
        x = 0; 
    }
    return x; 
}
function counterX2(){
    xx++;
    if (xx === 9){
        xx = 0; 
    }
    return xx; 
}
function counterX3(){
    xxx++;
    if (xxx === 9){
        xxx = 0; 
    }
    return xxx; 
}
function counterX4(){
    xxxx++;
    if (xxxx === 9){
        xxxx = 0; 
    }
    return xxxx; 
}
function counterX5(){
    xxxxx++;
    if (xxxxx === 9){
        xxxxx = 0; 
    }
    return xxxxx; 
}



function timeRestart(){
        $("#movieOutL").animate({opacity: '0'},"slow");
        $("#movieOutL").animate({left: '90px'},"fast");
        $("#movieOutL").animate({opacity: '0.2'},"fast");

        $("#movieCenter").animate({opacity: '0'},"slow");
        $("#movieCenter").animate({left: '560px', height: '+=120px',
        width: '+=80px', top: '270px'},"fast");
        $("#movieCenter").animate({opacity: '1'},"fast");

        $("#movieOutR").animate({opacity: '0'},"slow");
        $("#movieOutR").animate({left: '1200px', top: '400px',  height: '-=120px',
        width: '-=80px'},"fast");
        $("#movieOutR").animate({opacity: '0.2'},"fast");

        $("#movieL").animate({opacity: '0'},"slow");
        $("#movieL").animate({left: '920px', top: "350px", height: '-=120px',
        width: '-=80px'},"fast");
        $("#movieL").animate({opacity: '0.7'},"fast");

        $("#movieR").animate({opacity: '0'},"slow");
        $("#movieR").animate({left: '280px', height: '+=120px',
        width: '+=80px', top: "350px"},"fast");
        $("#movieR").animate({opacity: '0.7'},"fast");

}


function answer5(){
    $(".answer5").html("Awesome!!").fadeIn();
}
function answer4(){
    $(".answer4").html("Cool").fadeIn();
}
function answer3(){
    $(".answer3").html("Nice").fadeIn();
}
function answer2(){
    $(".answer2").html("OK").fadeIn();
}
function answer1(){
    $(".answer1").html("Darn").fadeIn();
}



