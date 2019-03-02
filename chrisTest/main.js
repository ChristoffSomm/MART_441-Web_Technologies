


var firstPunch = 0;

var firstHalfPunch = 0;
var secondPunch = 0;
var thirdPunch = 0;
var fourthPunch = 0;
var fithPunch = 0;




function attckRoll () {
	var roll = Math.floor( (Math.random() * 20) + 1 );
	if (roll === 1 ){
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll1").style.display = "block";
	}
	else if (roll === 2) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll2").style.display = "block";
	}
	else if (roll === 3) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll3").style.display = "block";
	}
	else if (roll === 4) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll4").style.display = "block";
	}
	else if (roll === 5) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll5").style.display = "block";
	}
	else if (roll === 6) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll6").style.display = "block";
	}
	else if (roll === 7) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll7").style.display = "block";
	}
	else if (roll === 8) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll8").style.display = "block";
	}
	else if (roll === 9) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll9").style.display = "block";
	}
	else if (roll === 10) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll10").style.display = "block";
	}
	else if (roll === 11) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll11").style.display = "block";
	}
	else if (roll === 12) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll12").style.display = "block";
	}
	else if (roll === 13) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll13").style.display = "block";
	}
	else if (roll === 14) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll14").style.display = "block";
	}
	else if (roll === 15) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll15").style.display = "block";
	}
	else if (roll === 16) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll16").style.display = "block";
	}
	else if (roll === 17) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll17").style.display = "block";
	}
	else if (roll === 18) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll18").style.display = "block";
	}
	else if (roll === 19) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll19").style.display = "block";
	}
	else if (roll === 20) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll20").style.display = "block";
	}
	else if (roll === 12) {
		document.getElementById("headLars").style.display = "none";
		document.getElementById("attack").style.display = "none";
		document.getElementById("roll12").style.display = "block";
	}
}

function punch1() {
	var onePunch = Math.floor( (Math.random() * 2) + 1 );
	if (onePunch === 2) {
		do {
		firstPunch++;
		firstPunch++;
		var a = Math.floor( (Math.random() * 2) + 1 );
		}
		while (a != 1);
		firstPunch++;
		firstPunch++;
		firstPunch++;
		firstPunch++;
		document.getElementById("punch1").innerHTML = firstPunch;
		document.getElementById("results1").style.display = "inline-block";
	}

	else if (onePunch === 1) {
		firstPunch++;
		firstPunch++;
		firstPunch++;
		firstPunch++;
		document.getElementById("punch1").innerHTML = firstPunch;
		document.getElementById("results1").style.display = "inline-block";

	}


}



function punch15() {
	var onetwoPunch = Math.floor( (Math.random() * 2) + 1 );
	if (onetwoPunch === 2) {
		do {
		firstHalfPunch++;
		firstHalfPunch++;
		var g = Math.floor( (Math.random() * 2) + 1 );
		}
		while (g != 1);
		firstHalfPunch++;
		firstHalfPunch++;
		firstHalfPunch++;
		firstHalfPunch++;
		document.getElementById("punch15").innerHTML = firstHalfPunch;

	}

	else if (onetwoPunch === 1) {
		firstHalfPunch++;
		firstHalfPunch++;
		firstHalfPunch++;
		firstHalfPunch++;
		document.getElementById("punch15").innerHTML = firstHalfPunch;
	}


}

function punch2() {
	var twoPunch = Math.floor( (Math.random() * 2) + 1 );

	if (twoPunch === 2) {
		do {
		secondPunch++;
		secondPunch++;
		var b = Math.floor( (Math.random() * 2) + 1 );
		}
		while (b != 1);
		secondPunch++;
		secondPunch++;
		secondPunch++;
		secondPunch++;
		document.getElementById("punch2").innerHTML = secondPunch;
	}

	else if (twoPunch === 1) {
		secondPunch++;
		secondPunch++;
		secondPunch++;
		secondPunch++;
		document.getElementById("punch2").innerHTML = secondPunch;

	}
}

function punch3() {
	var threePunch = Math.floor( (Math.random() * 2) + 1 );

	if (threePunch === 2) {
		do {
		thirdPunch++;
		thirdPunch++;
		var c = Math.floor( (Math.random() * 2) + 1 )
		}
		while (c != 1);
		thirdPunch++;
		thirdPunch++;
		thirdPunch++;
		thirdPunch++;
		document.getElementById("punch3").innerHTML = thirdPunch;
	}

	else if (threePunch === 1) {
		thirdPunch++;
		thirdPunch++;
		thirdPunch++;
		thirdPunch++;
		document.getElementById("punch3").innerHTML = thirdPunch;

	}
}

function punch4() {
	var fourPunch = Math.floor( (Math.random() * 2) + 1 );

	if (fourPunch === 2) {
		do {
		fourthPunch++;
		fourthPunch++;
		var d = Math.floor( (Math.random() * 2) + 1 )
		}
		while (d != 1);
		fourthPunch++;
		fourthPunch++;
		fourthPunch++;
		fourthPunch++;
		document.getElementById("punch4").innerHTML = fourthPunch;
	}

	else if (fourPunch === 1) {
		fourthPunch++;
		fourthPunch++;
		fourthPunch++;
		fourthPunch++;
		document.getElementById("punch4").innerHTML = fourthPunch;
	}
}


function punch5() {
	var fivePunch = Math.floor( (Math.random() * 2) + 1 );

	if (fivePunch === 2) {
		do {
		fithPunch++;
		fithPunch++;
		var e = Math.floor( (Math.random() * 2) + 1 )
		}
		while (e != 1);
		fithPunch++;
		fithPunch++;
		fithPunch++;
		fithPunch++;
		document.getElementById("punch5").innerHTML = fithPunch;
		document.getElementById("results2").style.display = "inline-block";



	}

	else if (fivePunch === 1) {
		fithPunch++;
		fithPunch++;
		fithPunch++;
		fithPunch++;
		document.getElementById("punch5").innerHTML = fithPunch;
		document.getElementById("results2").style.display = "inline-block";
	}
}




function reload () {
	window.location.reload();
}
