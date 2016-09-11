var gas = 0; var gasGain = 1;
var oil = 0; var oilGain = 1;
var metal = 0; var metalGain = 1;
var stone = 0; var stoneGain = 1;
var wood = 0; var woodGain = 1;
var science = 0; var scienceGain = 1;

function refresh(){
	document.getElementById("gas").innerHTML = gas;
	document.getElementById("oil").innerHTML = oil;
	document.getElementById("metal").innerHTML = metal;
	document.getElementById("stone").innerHTML = stone;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("science").innerHTML = science;
}

function gainGas(){
	gas += gasGain;
	refresh();
}

function gainOil(){
	oil += oilGain;
	refresh();
}

function gainMetal(){
	metal += metalGain;
	refresh();
}

function gainStone(){
	stone += stoneGain;
	refresh();
}

function gainWood(){
	wood += woodGain;
	refresh();
}

function gainScience(){
	science += scienceGain;
	refresh();
}

function buildLab(){
	if(science >= 20){
		if(metal >= 20){
			science -= 20;
			metal -= 20;
			scienceGain *= 2;
			document.getElementById("scienceGain").innerHTML = scienceGain;
			refresh();
			document.getElementById("labTab").className = "hidden";
		}
		else{
			alert("Not Enough Metal");
		}
	}
	else{
		alert("Not Enough Science");
	}
}

function unlockGas(){
	if(science >= 100){
		science -= 100;
		gasUnlock = true;
		document.getElementById("unlockGas").className = "hidden";
		document.getElementById("gasNav").className = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
	}
	else{
		alert("Not enough Science");
	}
}

function unlockOil(){
	if(science >= 50){
		science -= 50;
		oilUnlock = true;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
	}
	else{
		alert("Not enough Science");
	}
}
