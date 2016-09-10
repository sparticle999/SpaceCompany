var stone = 0;
var wood = 0;
var metal = 0;

function refresh(){
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("metal").innerHTML = metal;
}

function gainWood(){
	wood += 1;
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
