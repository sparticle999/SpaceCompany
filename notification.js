function newUnlock(tab){
	document.getElementById(tab + "TabGlyph").className = "glyphicon glyphicon-exclamation-sign";
}

function tabClicked(tab){
	document.getElementById(tab + "TabGlyph").className = "glyphicon glyphicon-exclamation-sign hidden";
}

function activeResourceTab(tab){
	document.getElementById("plasmaNav").className = "";
	document.getElementById("energyNav").className = "";
	for(var i = 0; i < resources.length; i++){
		document.getElementById(resources[i] + "Nav").className = "";
	}
	document.getElementById(tab).className = "info";
}

function activeResearchTab(tab){
	document.getElementById("scienceNav").className = "";
	document.getElementById("technologiesNav").className = "";
	document.getElementById(tab).className = "info";
}

function activeSolarTab(tab){
	document.getElementById("rocketFuelNav").className = "";
	if(rocketLaunched === false){
		document.getElementById("spaceRocket").className = "";
	}
	for(var i = 0; i < explored.length; i++){
		document.getElementById(explored[i]).className = "";
	}
	document.getElementById("mercury").className = "";
	document.getElementById("uranus").className = "";
	document.getElementById("neptune").className = "";
	document.getElementById(tab).className = "info";
}

function activeWonderTab(tab){
	document.getElementById("theWonderStation").className = "";
	if(document.getElementById("preciousWonderNav").className != "hidden"){
		document.getElementById("preciousWonderNav").className = "";
	}
	if(document.getElementById("energeticWonderNav").className != "hidden"){
		document.getElementById("energeticWonderNav").className = "";
	}
	if(document.getElementById("techWonderNav").className != "hidden"){
		document.getElementById("techWonderNav").className = "";
	}
	document.getElementById(tab).className = "info";
}

function activeSolCenterTab(tab){
	document.getElementById("unlockPlasmaNav").className = "";
	document.getElementById("unlockEmcNav").className = "";
	// document.getElementById("unlockDysonNav").className = "";
	document.getElementById(tab).className = "info";
}