function newUnlock(tab){
	document.getElementById(tab + "TabGlyph").className = "glyphicon glyphicon-exclamation-sign";
}

function tabClicked(tab){
	document.getElementById(tab + "TabGlyph").className = "glyphicon glyphicon-exclamation-sign hidden";
}

function activeResourceTab(tab){
	if(document.getElementById("plasmaNav").className != "hidden"){
		document.getElementById("plasmaNav").className = "";
	}
	if(document.getElementById("energyNav").className != "hidden"){
		document.getElementById("energyNav").className = "";
	}
	if(document.getElementById("uraniumNav").className === " info"){
		document.getElementById("uraniumNav").className = "";
	}
	if(document.getElementById("lavaNav").className === " info"){
		document.getElementById("lavaNav").className = "";
	}
	for(var i = 0; i < resources.length; i++){
		if(document.getElementById(resources[i] + "Nav").className === "earth info"){
			document.getElementById(resources[i] + "Nav").className = "earth";
		}
		if(document.getElementById(resources[i] + "Nav").className === "innerPlanet info"){
			document.getElementById(resources[i] + "Nav").className = "innerPlanet";
		}
		if(document.getElementById(resources[i] + "Nav").className === "outerPlanet info"){
			document.getElementById(resources[i] + "Nav").className = "outerPlanet";
		}
	}
	document.getElementById(tab).className += " info";
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
	else{
		document.getElementById("mercury").className = "inner";
	}
	for(var i = 0; i < explored.length; i++){
		if(document.getElementById(explored[i]).className === "inner info"){
			document.getElementById(explored[i]).className = "inner";
		}
		if(document.getElementById(explored[i]).className === "outer info"){
			document.getElementById(explored[i]).className = "outer";
		}
	}
	if(contains(explored, "asteroidBelt")){
		document.getElementById("uranus").className = "outer";
		document.getElementById("neptune").className = "outer";
	}
	document.getElementById(tab).className += " info";
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
