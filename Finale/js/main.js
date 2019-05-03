var firebenderImgArray = ["../img/FB/fb1.jpg", "../img/FB/fb2.jpg", "../img/FB/fb3.jpg", "../img/FB/fb4.jpg", "../img/FB/fb5.jpg", "../img/FB/fb6.jpg", "../img/FB/fb7.jpg", "../img/FB/fb8.jpg", "../img/FB/fb9.jpg", "../img/FB/fb10.jpg", "../img/FB/fb11.jpg", "../img/FB/fb12.jpg", "../img/FB/fb13.jpg" ];

var airbenderImgArray = ["../img/AB/ab1.jpg", "../img/AB/ab2.jpg", "../img/AB/ab3.jpg", "../img/AB/ab4.jpg", "../img/AB/ab5.jpg", "../img/AB/ab6.jpg", "../img/AB/ab7.jpg", "../img/AB/ab8.jpg", "../img/AB/ab9.jpg", "../img/AB/ab10.jpg", "../img/AB/ab11.jpg", "../img/AB/ab12.jpg", "../img/AB/ab13.jpg",  "../img/AB/ab14.jpg" ];

var waterbenderImgArray = ["../img/WB/wb1.jpg", "../img/WB/wb2.jpg", "../img/WB/wb3.jpg", "../img/WB/wb4.jpg", "../img/WB/wb5.jpg", "../img/WB/wb6.jpg", "../img/WB/wb7.jpg", "../img/WB/wb8.jpg", "../img/WB/wb9.jpg", "../img/WB/wb10.jpg", "../img/WB/wb11.jpg", "../img/WB/wb12.jpg", "../img/WB/wb13.jpg", "../img/WB/wb14.jpg", "../img/WB/wb15.jpg"];

var earthbenderImgArray = ["../img/EB/eb1.jpg", "../img/EB/eb2.jpg", "../img/EB/eb3.jpg", "../img/EB/eb4.jpg", "../img/EB/eb5.jpg", "../img/EB/eb6.jpg", "../img/EB/eb7.jpg", "../img/EB/eb8.jpg", "../img/EB/eb9.jpg", "../img/EB/eb10.jpg", "../img/EB/eb11.jpg", "../img/EB/eb12.jpg" ];





var level = 1;
var enemies = 1;


var npcScores = [];
var npcMod = [];

var count = 0;
var counter = 0;
var counters = 0;


var npcHP = [];
var benderTypes = [];
var fullNames = [];
var imgTypeArray = [];
var ammorClass = [];
var attackRolls = [];
var movesKnow = [];
var benderAttacksFire = [];
var benderAttacksAir = [];
var benderAttacksWater =[];
var benderAttacksEarth = [];
var moveName = [];
var moveDamg = [];

//DP for display
var NPC0score = [];
var NPC0modDP = [];
var NPC0mod = [];

var NPC1score = [];
var NPC1modDP = [];
var NPC1mod = [];

var NPC2score = [];
var NPC2modDP = [];
var NPC2mod = [];

var NPC3score = [];
var NPC3modDP = [];
var NPC3mod = [];

var NPC4score = [];
var NPC4modDP = [];
var NPC4mod = [];

var NPC5score = [];
var NPC5modDP = [];
var NPC5mod = [];




$(document).ready(function () {
	
	
	

	
	
	$("#GenButn").click(function () {	
		var enemies = $( "#npcNumer" ).val();
		var level = $( "#NPClevels" ).val();
		
		getHP(level, enemies);
			
		for(x = 0; x < enemies; x++){
			rollScores();
			getMod();
			setModToNPCdp();
			setModToNPC();
			getName();
			getAC();
			}	
		
		$('#topBar').hide();
		$('#btn-Attack').css("display", "block");
		showCards(enemies);	
		displayNames();
		displayImg();
		displayStats();
		displayHP();
		displayAC();
		
		
	});	

			  
	$("#btn-Attack").click(function () {
		var enemies = $( "#npcNumer" ).val();
		var level = $( "#NPClevels" ).val();
		
		$("#hidMe").show();
		showAttacksText(enemies);
		displayNamesOnattack();
		getAttakRoll(enemies);
		displayAttackRollsk();
		
		getAttacks(level, enemies);
		
		Attack(enemies);
		
		displayMoves();
		displayDamage();
		checkHP();
	});
	
	//HP Change HP
	$("#changeHP1").click(function () {
	var HPchange = $( "#HPInput1" ).val();
	var	NewHP = npcHP[0]  - HPchange;
	npcHP[0] = NewHP;
	displayHP();
	});
	$("#changeHP2").click(function () {
	var HPchange = $( "#HPInput2" ).val();
	var	NewHP = npcHP[1]  - HPchange;
	npcHP[1] = NewHP;
	displayHP();
	});
	$("#changeHP3").click(function () {
	var HPchange = $( "#HPInput3" ).val();
	var	NewHP = npcHP[2]  - HPchange;
	npcHP[2] = NewHP;
	displayHP();
	});
	$("#changeHP4").click(function () {
	var HPchange = $( "#HPInput4" ).val();
	var	NewHP = npcHP[3]  - HPchange;
	npcHP[3] = NewHP;
	displayHP();
	});
	$("#changeHP5").click(function () {
	var HPchange = $( "#HPInput5" ).val();
	var	NewHP = npcHP[4]  - HPchange;
	npcHP[4] = NewHP;
	displayHP();
	});
	$("#changeHP6").click(function () {
	var HPchange = $( "#HPInput6" ).val();
	var	NewHP = npcHP[5]  - HPchange;
	npcHP[5] = NewHP;
	displayHP();
	});
	
	//Change AC
	$("#ChangeAC1").click(function (){
	var ACchange = $("#ACInput1").val();
	var	NewAC = ammorClass[0]  - ACchange;
	ammorClass[0] = NewAC;
	displayAC();
	});
	$("#ChangeAC2").click(function (){
	var ACchange = $("#ACInput2").val();
	var	NewAC = ammorClass[1]  - ACchange;
	ammorClass[1] = NewAC;
	displayAC();
	});
	$("#ChangeAC3").click(function (){
	var ACchange = $("#ACInput3").val();
	var	NewAC = ammorClass[2]  - ACchange;
	ammorClass[2] = NewAC;
	displayAC();
	});
	$("#ChangeAC4").click(function (){
	var ACchange = $("#ACInput4").val();
	var	NewAC = ammorClass[3]  - ACchange;
	ammorClass[3] = NewAC;
	displayAC();
	});
	$("#ChangeAC5").click(function (){
	var ACchange = $("#ACInput5").val();
	var	NewAC = ammorClass[4]  - ACchange;
	ammorClass[4] = NewAC;
	displayAC();
	});
	$("#ChangeAC6").click(function (){
	var ACchange = $("#ACInput6").val();
	var	NewAC = ammorClass[5]  - ACchange;
	ammorClass[5] = NewAC;
	displayAC();
	});
	
	
	
	
	
 });

$(function() {
	$.getJSON("../JSON/benderMovesFirebender.json", function(fire){
		$.each(fire.Firebender, function(x, item){
			benderAttacksFire.push(item);
		   }); 
	});
	$.getJSON("../JSON/benderMovesWater.json", function(water){
		$.each(water.Waterbender, function(y, move){
			benderAttacksWater.push(move);
		   }); 
	});
	$.getJSON("../JSON/benderMovesEarth.json", function(earth){
		$.each(earth.Earthbender, function(x, thing){
			benderAttacksEarth.push(thing);
		   }); 
	});
	$.getJSON("../JSON/benderMovesAir.json", function(air){
		$.each(air.Airbender, function(z, stuff){
			benderAttacksAir.push(stuff);
		   }); 
	});
});



//ROLL 6 Dice Push to arrrey
function rollScores() {
	npcScores.length = 0;
	for(i = 0; i < 6; i++) {	
	var roll1 = Math.floor(Math.random() * 6) + 1;
	var roll2 = Math.floor(Math.random() * 6) + 1;
	var roll3 = Math.floor(Math.random() * 6) + 1;
	var roll4 = Math.floor(Math.random() * 6) + 1;
	if (roll1 <= roll2 && roll1 <= roll3 && roll1 <= roll4 ){
		var roll1 = 0;}
	else if (roll2 <= roll1 && roll2 <= roll3 && roll2 <= roll4 ){
		var roll2 = 0;}
	else if (roll3 <= roll1 && roll3 <= roll2 && roll3 <= roll4 ){
		var roll3 = 0;}	
	else if (roll4 <= roll1 && roll4 <= roll2 && roll4 <= roll3 ){
		var roll4 = 0;}
	var score = roll1 + roll2 + roll3 + roll4;

	npcScores.push(score);
	}
	determineBender();
	setScoresToNPC();
	
}

//Math to Get Mod Scores
function getMod() {
	npcMod.length = 0;
	for(i = 0; i < npcScores.length; i++){
		
		var mod = Math.floor((npcScores[i] - 10)/2);
		if (mod > 0){
			var mod = "+" + mod;
		}
		else if (mod === 0 ){
			var mod = "-" + mod;
		}
		npcMod.push(mod);
	}	
}

//Math to Get HP
function getHP(level, enemies){
	var level = parseInt(level);
	var enemies = parseInt(enemies);
	var HP = 0;
	
	for (x = 0; x < enemies; x++){
		if (level === 1){
			var HP = 12;
		}
		else {
			var HP = 12;
			for(i = 0; i < level; i++){
				var randomNum = (Math.floor(Math.random() * 12) + 1);
					if (randomNum < 6){
						var HP = HP + 6;
					}
					else{
						var HP = HP + randomNum;
					}
			}
		}
		npcHP.push(HP);
	}
}

//Best score = bender
function determineBender(){
	var benderType;
	var imgType;
	
	if (npcScores[0] > npcScores[3] && npcScores[0] > npcScores[4] && npcScores[0] > npcScores[5]){
		var benderType = "Earthbender";
			var earthRandomIMG = Math.floor(Math.random() * earthbenderImgArray.length);
			var imgType = earthbenderImgArray[earthRandomIMG];
				
			
	}
	else if (npcScores[3] > npcScores[0] && npcScores[3] > npcScores[4] && npcScores[3] > npcScores[5]){
		var benderType = "Waterbender";
			var waterRandomIMG = Math.floor(Math.random() * waterbenderImgArray.length);
			var imgType = waterbenderImgArray[waterRandomIMG];
				
	
	}
	else if (npcScores[4] > npcScores[0] && npcScores[4] > npcScores[3] && npcScores[4] > npcScores[5]){
		var benderType = "Airbender";
			var airRandomIMG = Math.floor(Math.random() * airbenderImgArray.length);
			var imgType = airbenderImgArray[airRandomIMG];
			
			
	}
	else if (npcScores[5] > npcScores[0] && npcScores[5] > npcScores[3] && npcScores[5] > npcScores[4]){
		var benderType = "Firebender";
			var fireRandomIMG = Math.floor(Math.random() * firebenderImgArray.length);
			var imgType = firebenderImgArray[fireRandomIMG];
			
			
	}
	
	else {
		var randomNumber = Math.floor(Math.random() * 4) + 1;
		if(randomNumber === 1){
			var benderType = "Earthbender";
				var earthRandomIMG1 = Math.floor(Math.random() * earthbenderImgArray.length);
				var imgType = earthbenderImgArray[earthRandomIMG1];
				
		}
		else if (randomNumber === 2){
			var benderType = "Waterbender";
				var waterRandomIMG1 = Math.floor(Math.random() * waterbenderImgArray.length);
				var imgType = waterbenderImgArray[waterRandomIMG1];
			
		}
		else if (randomNumber === 3){
			var benderType = "Airbender";
				var airRandomIMG1 = Math.floor(Math.random() * airbenderImgArray.length);
				var imgType = airbenderImgArray[airRandomIMG1];
				
		}
		else if (randomNumber === 4){
			var benderType = "Firebender";
				var fireRandomIMG1 = Math.floor(Math.random() * firebenderImgArray.length);
				var imgType = firebenderImgArray[fireRandomIMG1];
				
		}
		
	}
	
	imgTypeArray.push(imgType);
	benderTypes.push(benderType);
	
}

//push scores to Each bender
function setScoresToNPC(){

	if (count === 0){
		NPC0score.push(npcScores[0], npcScores[1], npcScores[2], npcScores[3], npcScores[4], npcScores[5]);
	}
	else if (count === 1){
		NPC1score.push(npcScores[0], npcScores[1], npcScores[2], npcScores[3], npcScores[4], npcScores[5]);
	}
	else if (count === 2){
		NPC2score.push(npcScores[0], npcScores[1], npcScores[2], npcScores[3], npcScores[4], npcScores[5]);
	}
	else if (count === 3){
		NPC3score.push(npcScores[0], npcScores[1], npcScores[2], npcScores[3], npcScores[4], npcScores[5]);
	}
	else if (count === 4){
		NPC4score.push(npcScores[0], npcScores[1], npcScores[2], npcScores[3], npcScores[4], npcScores[5]);
	}
	else if (count === 5){
		NPC5score.push(npcScores[0], npcScores[1], npcScores[2], npcScores[3], npcScores[4], npcScores[5]);
	}
	
	
	
	
	count++;
	return count;
}

//Display Mod Scores
function setModToNPCdp(){
	if (counter === 0){
		NPC0modDP.push(npcMod[0], npcMod[1], npcMod[2], npcMod[3], npcMod[4], npcMod[5]);
	}
	else if (counter === 1){
		NPC1modDP.push(npcMod[0], npcMod[1], npcMod[2], npcMod[3], npcMod[4], npcMod[5]);
	}
	else if (counter === 2){
		NPC2modDP.push(npcMod[0], npcMod[1], npcMod[2], npcMod[3], npcMod[4], npcMod[5]);
	}
	else if (counter === 3){
		NPC3modDP.push(npcMod[0], npcMod[1], npcMod[2], npcMod[3], npcMod[4], npcMod[5]);
	}
	else if (counter === 4){
		NPC4modDP.push(npcMod[0], npcMod[1], npcMod[2], npcMod[3], npcMod[4], npcMod[5]);
	}
	else if (counter === 5){
		NPC5modDP.push(npcMod[0], npcMod[1], npcMod[2], npcMod[3], npcMod[4], npcMod[5]);
	}
	counter++;
	return counter;
}

//Math Mod Scores
function setModToNPC(){
	if (counters === 0){
		NPC0mod.push(parseInt(npcMod[0]), parseInt(npcMod[1]), parseInt(npcMod[2]), parseInt(npcMod[3]), parseInt(npcMod[4]), parseInt(npcMod[5]));
	}
	else if (counters === 1){
		NPC1mod.push(parseInt(npcMod[0]), parseInt(npcMod[1]), parseInt(npcMod[2]), parseInt(npcMod[3]), parseInt(npcMod[4]), parseInt(npcMod[5]));
	}
	else if (counters === 2){
		NPC2mod.push(parseInt(npcMod[0]), parseInt(npcMod[1]), parseInt(npcMod[2]), parseInt(npcMod[3]), parseInt(npcMod[4]), parseInt(npcMod[5]));
	}
	else if (counters === 3){
		NPC3mod.push(parseInt(npcMod[0]), parseInt(npcMod[1]), parseInt(npcMod[2]), parseInt(npcMod[3]), parseInt(npcMod[4]), parseInt(npcMod[5]));
	}
	else if (counters === 4){
		NPC4mod.push(parseInt(npcMod[0]), parseInt(npcMod[1]), parseInt(npcMod[2]), parseInt(npcMod[3]), parseInt(npcMod[4]), parseInt(npcMod[5]));
	}
	else if (counters === 5){
		NPC5mod.push(parseInt(npcMod[0]), parseInt(npcMod[1]), parseInt(npcMod[2]), parseInt(npcMod[3]), parseInt(npcMod[4]), parseInt(npcMod[5]));
	}
	counters++;
	return counters;
}

//Get Random Name
function getName(){
	var FRN = Math.floor(Math.random() * firstName.length);
	var LRN = Math.floor(Math.random() * lastName.length);
	
	var fullName = firstName[FRN] + " " + lastName[LRN];
	
	fullNames.push(fullName);
	
}

//Math to find AC
function getAC(){
	
	var modDex =  parseInt(npcMod[1]);
		if (modDex < 0){
			modDex = 0;
		}
	
	var ACnumber = 8 + modDex + (Math.floor(Math.random() * 6) + 1);
	
	ammorClass.push(ACnumber);
}

//Display cards
function showCards(enemies){
 var showCount = parseInt(enemies);
	if (showCount === 1){
		$('#genC1').show();
	}
	else if (showCount === 2){
		$('#genC1').show();
		$('#genC2').show();
	}
	else if (showCount === 3){
		$('#genC1').show();
		$('#genC2').show();
		$('#genC3').show();
	}
	else if (showCount === 4){
		$('#genC1').show();
		$('#genC2').show();
		$('#genC3').show();
		$('#genC4').show();
	}
	else if (showCount === 5){
		$('#genC1').show();
		$('#genC2').show();
		$('#genC3').show();
		$('#genC4').show();
		$('#genC5').show();
	}
	else if (showCount === 6){
		$('#genC1').show();
		$('#genC2').show();
		$('#genC3').show();
		$('#genC4').show();
		$('#genC5').show();
		$('#genC6').show();
	}
}

//Display Names
function displayNames(){
	$("#nameCGen1").text(fullNames[0] + " (" + benderTypes[0] + ")");
	$("#nameCGen2").text(fullNames[1] + " (" + benderTypes[1] + ")");
	$("#nameCGen3").text(fullNames[2] + " (" + benderTypes[2] + ")");
	$("#nameCGen4").text(fullNames[3] + " (" + benderTypes[3] + ")");
	$("#nameCGen5").text(fullNames[4] + " (" + benderTypes[4] + ")");
	$("#nameCGen6").text(fullNames[5] + " (" + benderTypes[5] + ")");
		
}

//Display IMG
function displayImg(){
	$('#img1').attr("src",imgTypeArray[0]);
	$('#img2').attr("src",imgTypeArray[1]);
	$('#img3').attr("src",imgTypeArray[2]);
	$('#img4').attr("src",imgTypeArray[3]);
	$('#img5').attr("src",imgTypeArray[4]);
	$('#img6').attr("src",imgTypeArray[5]);
}

//Display Stats
function displayStats(){
	$("#scoreCGen1").text("Str: " + NPC0score[0] + " (" + NPC0modDP[0] + ")" + " Dex: " + NPC0score[1] + " (" + NPC0modDP[1] + ")" + " Con: " + NPC0score[2] + " (" + NPC0modDP[2] + ")" + " Int: " + NPC0score[3] + " (" + NPC0modDP[3] + ")" + " Wis: " + NPC0score[4] + " (" + NPC0modDP[4] + ")" + " Cha: " + NPC0score[5] + " (" + NPC0modDP[5] + ")");
	
	$("#scoreCGen2").text("Str: " + NPC1score[0] + " (" + NPC1modDP[0] + ")" + " Dex: " + NPC1score[1] + " (" + NPC1modDP[1] + ")" + " Con: " + NPC1score[2] + " (" + NPC1modDP[2] + ")" + " Int: " + NPC1score[3] + " (" + NPC1modDP[3] + ")" + " Wis: " + NPC1score[4] + " (" + NPC1modDP[4] + ")" + " Cha: " + NPC1score[5] + " (" + NPC1modDP[5] + ")");
	
	$("#scoreCGen3").text("Str: " + NPC2score[0] + " (" + NPC2modDP[0] + ")" + " Dex: " + NPC2score[1] + " (" + NPC2modDP[1] + ")" + " Con: " + NPC2score[2] + " (" + NPC2modDP[2] + ")" + " Int: " + NPC2score[3] + " (" + NPC2modDP[3] + ")" + " Wis: " + NPC2score[4] + " (" + NPC2modDP[4] + ")" + " Cha: " + NPC2score[5] + " (" + NPC2modDP[5] + ")");
	
	$("#scoreCGen4").text("Str: " + NPC3score[0] + " (" + NPC3modDP[0] + ")" + " Dex: " + NPC3score[1] + " (" + NPC3modDP[1] + ")" + " Con: " + NPC3score[2] + " (" + NPC3modDP[2] + ")" + " Int: " + NPC3score[3] + " (" + NPC3modDP[3] + ")" + " Wis: " + NPC3score[4] + " (" + NPC3modDP[4] + ")" + " Cha: " + NPC3score[5] + " (" + NPC3modDP[5] + ")");
	
	$("#scoreCGen5").text("Str: " + NPC4score[0] + " (" + NPC4modDP[0] + ")" + " Dex: " + NPC4score[1] + " (" + NPC4modDP[1] + ")" + " Con: " + NPC4score[2] + " (" + NPC4modDP[2] + ")" + " Int: " + NPC4score[3] + " (" + NPC4modDP[3] + ")" + " Wis: " + NPC4score[4] + " (" + NPC4modDP[4] + ")" + " Cha: " + NPC4score[5] + " (" + NPC4modDP[5] + ")");
	
	$("#scoreCGen6").text("Str: " + NPC5score[0] + " (" + NPC5modDP[0] + ")" + " Dex: " + NPC5score[1] + " (" + NPC5modDP[1] + ")" + " Con: " + NPC5score[2] + " (" + NPC5modDP[2] + ")" + " Int: " + NPC5score[3] + " (" + NPC5modDP[3] + ")" + " Wis: " + NPC5score[4] + " (" + NPC5modDP[4] + ")" + " Cha: " + NPC5score[5] + " (" + NPC5modDP[5] + ")");
}

//Display HP
function displayHP(){
	$("#HPCGen1").text(npcHP[0]);
	$("#HPCGen2").text(npcHP[1]);
	$("#HPCGen3").text(npcHP[2]);
	$("#HPCGen4").text(npcHP[3]);
	$("#HPCGen5").text(npcHP[4]);
	$("#HPCGen6").text(npcHP[5]);
	
	checkHP();
}

//Check if HP = 0 
function checkHP(){
	if (npcHP[0] <= 0){
		$("#genC1").css("color", "#bb0a1e");
		$("#ak1").hide();
	}
	if (npcHP[1] <= 0){
		$("#genC2").css("color", "#bb0a1e");
		$("#ak2").hide();
	}
	if (npcHP[2] <= 0){
		$("#genC3").css("color", "#bb0a1e");
		$("#ak3").hide();
	}
	if (npcHP[3] <= 0){
		$("#genC4").css("color", "#bb0a1e");
		$("#ak4").hide();
	}
	if (npcHP[4] <= 0){
		$("#genC5").css("color", "#bb0a1e");
		$("#ak5").hide();
	}
	if (npcHP[5] <= 0){
		$("#genC6").css("color", "#bb0a1e");
		$("#ak6").hide();
	}
	
	if (npcHP[0] <= 0 && npcHP[1] <= 0 && npcHP[2] <= 0 && npcHP[3] <= 0 && npcHP[4] <= 0 && npcHP[5] <= 0){
		$("#hidMe").hide();
	}
	
}

//Display AC
function displayAC(){
	$("#ACCGen1").text(ammorClass[0]);
	$("#ACCGen2").text(ammorClass[1]);
	$("#ACCGen3").text(ammorClass[2]);
	$("#ACCGen4").text(ammorClass[3]);
	$("#ACCGen5").text(ammorClass[4]);
	$("#ACCGen6").text(ammorClass[5]);
	
}

//Display Names On attack Card
function displayNamesOnattack(){
	$("#name1").text(fullNames[0]);
	$("#name2").text(fullNames[1]);
	$("#name3").text(fullNames[2]);
	$("#name4").text(fullNames[3]);
	$("#name5").text(fullNames[4]);
	$("#name6").text(fullNames[5]);
}

//Math to get attakrolls
function getAttakRoll(enemies){
	attackRolls.length = 0;
for(x = 0; x < enemies; x++){
	var attackRoll = Math.floor(Math.random() * 20) + 1;

	if (attackRoll === 1 || attackRoll === 20){
		attackRolls.push (attackRoll + "*");
	}
	
	else{ 
		if (benderTypes[x] === "Earthbender"){
			if (x === 0){
			var attackRoll = attackRoll + NPC0mod[0];
				attackRolls.push (attackRoll);
			}
			else if(x === 1){
			var attackRoll = attackRoll + NPC1mod[0];
				attackRolls.push (attackRoll);
			}
			else if(x === 2){
			var attackRoll = attackRoll + NPC2mod[0];
				attackRolls.push (attackRoll);
			}
			else if(x === 3){
			var attackRoll = attackRoll + NPC3mod[0];
				attackRolls.push (attackRoll);
			}
			else if(x === 4){
			var attackRoll = attackRoll + NPC4mod[0];
				attackRolls.push (attackRoll);
			}
			else if(x === 5){
			var attackRoll = attackRoll + NPC5mod[0];
				attackRolls.push (attackRoll);
			}
		}
		else if (benderTypes[x] === "Waterbender"){
			if (x === 0){
			var attackRoll = attackRoll + NPC0mod[3];
				attackRolls.push (attackRoll);
			}
			else if(x === 1){
			var attackRoll = attackRoll + NPC1mod[3];
				attackRolls.push (attackRoll);
			}
			else if(x === 2){
			var attackRoll = attackRoll + NPC2mod[3];
				attackRolls.push (attackRoll);
			}
			else if(x === 3){
			var attackRoll = attackRoll + NPC3mod[3];
				attackRolls.push (attackRoll);
			}
			else if(x === 4){
			var attackRoll = attackRoll + NPC4mod[3];
				attackRolls.push (attackRoll);
			}
			else if(x === 5){
			var attackRoll = attackRoll + NPC5mod[3];
				attackRolls.push (attackRoll);
			}
		}
		else if (benderTypes[x] === "Airbender"){
			if (x === 0){
			var attackRoll = attackRoll + NPC0mod[4];
				attackRolls.push (attackRoll);
			}
			else if(x === 1){
			var attackRoll = attackRoll + NPC1mod[4];
				attackRolls.push (attackRoll);
			}
			else if(x === 2){
			var attackRoll = attackRoll + NPC2mod[4];
				attackRolls.push (attackRoll);
			}
			else if(x === 3){
			var attackRoll = attackRoll + NPC3mod[4];
				attackRolls.push (attackRoll);
			}
			else if(x === 4){
			var attackRoll = attackRoll + NPC4mod[4];
				attackRolls.push (attackRoll);
			}
			else if(x === 5){
			var attackRoll = attackRoll + NPC5mod[4];
				attackRolls.push (attackRoll);
			}
		}
		else if (benderTypes[x] === "Firebender"){
			if (x === 0){
			var attackRoll = attackRoll + NPC0mod[5];
				attackRolls.push (attackRoll);
			}
			else if(x === 1){
			var attackRoll = attackRoll + NPC1mod[5];
				attackRolls.push (attackRoll);
			}
			else if(x === 2){
			var attackRoll = attackRoll + NPC2mod[5];
				attackRolls.push (attackRoll);
			}
			else if(x === 3){
			var attackRoll = attackRoll + NPC3mod[5];
				attackRolls.push (attackRoll);
			}
			else if(x === 4){
			var attackRoll = attackRoll + NPC4mod[5];
				attackRolls.push (attackRoll);
			}
			else if(x === 5){
			var attackRoll = attackRoll + NPC5mod[5];
				attackRolls.push (attackRoll);
			}
		}
		
	}
		
		
	}
}

//Display Attack rolls On attack Card
function displayAttackRollsk(){
	$("#AR1").text("Attack-Roll: " + attackRolls[0]);
	$("#AR2").text("Attack-Roll: " + attackRolls[1]);
	$("#AR3").text("Attack-Roll: " + attackRolls[2]);
	$("#AR4").text("Attack-Roll: " + attackRolls[3]);
	$("#AR5").text("Attack-Roll: " + attackRolls[4]);
	$("#AR6").text("Attack-Roll: " + attackRolls[5]);
}

//Display Attack cards depending on enemies
function showAttacksText(enemies){
 var showCounter = parseInt(enemies);
	
	if (showCounter === 1){
		$('#ak1').show();
	}
	else if (showCounter === 2){
		$('#ak1').show();
		$('#ak2').show();
	}
	else if (showCounter === 3){
		$('#ak1').show();
		$('#ak2').show();
		$('#ak3').show();
	}
	else if (showCounter === 4){
		$('#ak1').show();
		$('#ak2').show();
		$('#ak3').show();
		$('#ak4').show();
	}
	else if (showCounter === 5){
		$('#ak1').show();
		$('#ak2').show();
		$('#ak3').show();
		$('#ak4').show();
		$('#ak5').show();
	}
	else if (showCounter === 6){
		$('#ak1').show();
		$('#ak2').show();
		$('#ak3').show();
		$('#ak4').show();
		$('#ak5').show();
		$('#ak6').show();
	}
}

//Get attack they can do
function getAttacks(level, enemies){
movesKnow.length = 0;
	
var level =	parseInt(level);

	
for (x = 0; x < enemies; x++){
	if (benderTypes[x] ===  "Firebender"){
		
		if (level === 1){
			var knownAttacks = 2;
			movesKnow.push(knownAttacks);
		}
		else if (level === 2){
			var knownAttacks = 4;
			movesKnow.push(knownAttacks);
		}
		else if (level === 3){
			var knownAttacks = 6;
			movesKnow.push(knownAttacks);
		}
		else if (level === 4){
			var knownAttacks = 7;
			movesKnow.push(knownAttacks);
		}
		else if (level === 5){
			var knownAttacks = 8;
			movesKnow.push(knownAttacks);
		}
		else if (level === 6){
			var knownAttacks = 9;
			movesKnow.push(knownAttacks);
		}
		else if (level === 7){
			var knownAttacks = 10;
			movesKnow.push(knownAttacks);
		}
		else if (level === 8){
			var knownAttacks = 11;
			movesKnow.push(knownAttacks);
		}
		else if (level === 9){
			var knownAttacks = 12;
			movesKnow.push(knownAttacks);
		}
		else if (level === 10){
			var knownAttacks = 13;
			movesKnow.push(knownAttacks);
		}
	}
	else if (benderTypes[x] ===  "Airbender") {
		if (level === 1){
			var knownAttacks = 2;
			movesKnow.push(knownAttacks);
		}
		else if (level === 2){
			var knownAttacks = 4;
			movesKnow.push(knownAttacks);
		}
		else if (level === 3){
			var knownAttacks = 6;
			movesKnow.push(knownAttacks);
		}
		else if (level === 4){
			var knownAttacks = 7;
			movesKnow.push(knownAttacks);
		}
		else if (level === 5){
			var knownAttacks = 8;
			movesKnow.push(knownAttacks);
		}
		else if (level === 6){
			var knownAttacks = 9;
			movesKnow.push(knownAttacks);
		}
		else if (level === 7){
			var knownAttacks = 10;
			movesKnow.push(knownAttacks);
		}
		else if (level === 8){
			var knownAttacks = 11;
			movesKnow.push(knownAttacks);
		}
		else if (level === 9){
			var knownAttacks = 12;
			movesKnow.push(knownAttacks);
		}
		else if (level === 10){
			var knownAttacks = 13;
			movesKnow.push(knownAttacks);
		}
	}
	else if (benderTypes[x] ===  "Waterbender"){
		if (level === 1){
			var knownAttacks = 2;
			movesKnow.push(knownAttacks);
		}
		else if (level === 2){
			var knownAttacks = 4;
			movesKnow.push(knownAttacks);
		}
		else if (level === 3){
			var knownAttacks = 6;
			movesKnow.push(knownAttacks);
		}
		else if (level === 4){
			var knownAttacks = 7;
			movesKnow.push(knownAttacks);
		}
		else if (level === 5){
			var knownAttacks = 9;
			movesKnow.push(knownAttacks);
		}
		else if (level === 6){
			var knownAttacks = 11;
			movesKnow.push(knownAttacks);
		}
		else if (level === 7){
			var knownAttacks = 13;
			movesKnow.push(knownAttacks);
		}
		else if (level === 8){
			var knownAttacks = 15;
			movesKnow.push(knownAttacks);
		}
		else if (level === 9){
			var knownAttacks = 16;
			movesKnow.push(knownAttacks);
		}
		else if (level === 10){
			var knownAttacks = 17;
			movesKnow.push(knownAttacks);
		}
	}
	else if (benderTypes[x] ===  "Earthbender"){
		if (level === 1){
			var knownAttacks = 2;
			movesKnow.push(knownAttacks);
		}
		else if (level === 2){
			var knownAttacks = 4;
			movesKnow.push(knownAttacks);
		}
		else if (level === 3){
			var knownAttacks = 6;
			movesKnow.push(knownAttacks);
		}
		else if (level === 4){
			var knownAttacks = 7;
			movesKnow.push(knownAttacks);
		}
		else if (level === 5){
			var knownAttacks = 8;
			movesKnow.push(knownAttacks);
		}
		else if (level === 6){
			var knownAttacks = 9;
			movesKnow.push(knownAttacks);
		}
		else if (level === 7){
			var knownAttacks = 11;
			movesKnow.push(knownAttacks);
		}
		else if (level === 8){
			var knownAttacks = 12;
			movesKnow.push(knownAttacks);
		}
		else if (level === 9){
			var knownAttacks = 14;
			movesKnow.push(knownAttacks);
		}
		else if (level === 10){
			var knownAttacks = 16;
			movesKnow.push(knownAttacks);
		}
	}
} 
}

//Math to pick moves and damage
function Attack(enemies){
moveName.length = 0;
moveDamg.length = 0;
	console.log(movesKnow);
	for(x = 0; x < enemies; x++){
	if (benderTypes[x] === "Airbender"){
		var RN = Math.floor(Math.random() * movesKnow[x]);
		 var theAttack = benderAttacksAir[RN].Moves;
		
		var Damage = Math.floor(Math.random() * benderAttacksAir[RN].Damage) +1
		
		moveName.push(theAttack);
		moveDamg.push(Damage);
		
		
	}
	if (benderTypes[x] === "Earthbender"){
		var RN = Math.floor(Math.random() * movesKnow[x]);
		 var theAttack = benderAttacksEarth[RN].Moves;
		
		var Damage = Math.floor(Math.random() * benderAttacksEarth[RN].Damage) +1
		
		moveName.push(theAttack);
		moveDamg.push(Damage);
		
	}
	if (benderTypes[x] === "Waterbender"){
		var RN = Math.floor(Math.random() * movesKnow[x]);
		 var theAttack = benderAttacksWater[RN].Moves;
		
		var Damage = Math.floor(Math.random() * benderAttacksWater[RN].Damage) +1
		
		moveName.push(theAttack);
		moveDamg.push(Damage);
		
	}
	if (benderTypes[x] === "Firebender"){
		var RN = Math.floor(Math.random() * movesKnow[x]);
		 var theAttack = benderAttacksFire[RN].Moves;
		
		var Damage = Math.floor(Math.random() * benderAttacksFire[RN].Damage) +1
		
		moveName.push(theAttack);
		moveDamg.push(Damage);
		
		}
	}
	console.log(moveName);
	console.log(moveDamg);
}

//Display Moves
function displayMoves(){
	$("#MT1").text(moveName[0]);
	$("#MT2").text(moveName[1]);
	$("#MT3").text(moveName[2]);
	$("#MT4").text(moveName[3]);
	$("#MT5").text(moveName[4]);
	$("#MT6").text(moveName[5]);
}

//Display Damage
function displayDamage(){
	$("#DD1").text(moveDamg[0]);
	$("#DD2").text(moveDamg[1]);
	$("#DD3").text(moveDamg[2]);
	$("#DD4").text(moveDamg[3]);
	$("#DD5").text(moveDamg[4]);
	$("#DD6").text(moveDamg[5]);
}
