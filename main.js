var stone = 0;
var earth = 0;
var metal = 0;

function refresh(){
	document.getElementById("earth").innerHTML = earth;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("metal").innerHTML = metal;
}

function gainEarth(){
	earth += 1;
	refresh();
}

function gainStone(){
	stone += 1;
	refresh();
}

function gainMetal(){
	metal += 1;
	refresh();
}