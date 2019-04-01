var pokemonArry = new Array();
var i = 0;
var x = 1;

class pokemon {
  constructor(id, name, num, img, type) {
    this.id = id;
    this.name = name;
	this.num = num;
    this.img = img;
	this.type = type;
  }
    toStringId(){
        return this.id;
    }
    toStringName(){
        return this.name;
    }
	toStringNum(){
        return this.num;
    }
	toStringType(){
        return this.type;
    }
    get theImgLink() {
        return this.img;
    }
}

$(function() {
	$.getJSON("data/pokedex.json", function(pokedex){
		$.each(pokedex.pokemon, function(x, item){
			pokemonArry.push(item);
		   }); 
		showPokemon();
	});
});



function showPokemon(){
	
	for (i = 0; i < pokemonArry.length; i++) {
				$("#img" + [i]).attr("src", pokemonArry[i].img);
				$("#name" + [i]).append(pokemonArry[i].name);
				$("#num" + [i]).append("No. " + pokemonArry[i].num);	
				$("#type" + [i]).append("<br> Type -  " + pokemonArry[i].type[0]);
			}
}



function battleMode() {
	$(".col-lg-2").battleMode();
};




//Plugin

$.fn.battleMode = function(){
	
$(this).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  }).animate({
    opacity: 0.25,
    height: "toggle"
  }).animate({
    opacity: 1,
    height: "toggle"
  });

};


