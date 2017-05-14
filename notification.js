function newUnlock(tab){
	document.getElementById(tab + "TabGlyph").className = "glyphicon glyphicon-exclamation-sign";
	if(tab === "more"){
		document.getElementById("achievementsTabGlyph").className = "pull-right glyphicon glyphicon-exclamation-sign";
	}
}

function tabClicked(tab){
	document.getElementById(tab + "TabGlyph").className = "pull-right glyphicon glyphicon-exclamation-sign hidden";
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
		if(document.getElementById("mercury").className != "inner hidden"){
			document.getElementById("mercury").className = "inner";
		}
		if(document.getElementById("moon").className != "inner hidden"){
			document.getElementById("moon").className = "inner";
		}
		if(document.getElementById("venus").className != "inner hidden"){
			document.getElementById("venus").className = "inner";
		}
		if(document.getElementById("mars").className != "inner hidden"){
			document.getElementById("mars").className = "inner";
		}
		if(document.getElementById("asteroidBelt").className != "inner hidden"){
			document.getElementById("asteroidBelt").className = "inner";
		}
	}
	if(contains(explored, "asteroidBelt")){
		if(document.getElementById("wonderStation").className != "inner hidden"){
			document.getElementById("wonderStation").className = "inner";
		}
		if(document.getElementById("jupiter").className != "outer hidden"){
			document.getElementById("jupiter").className = "outer";
		}
		if(document.getElementById("saturn").className != "outer hidden"){
			document.getElementById("saturn").className = "outer";
		}
		if(document.getElementById("uranus").className != "outer hidden"){
			document.getElementById("uranus").className = "outer";
		}
		if(document.getElementById("neptune").className != "outer hidden"){
			document.getElementById("neptune").className = "outer";
		}
		if(document.getElementById("pluto").className != "outer hidden"){
			document.getElementById("pluto").className = "outer";
		}
		if(document.getElementById("kuiperBelt").className != "outer hidden"){
			document.getElementById("kuiperBelt").className = "outer";
		};
	}
	if(contains(explored, "kuiperBelt")){
		if(document.getElementById("kuiperBelt").className != "outer hidden"){
			document.getElementById("solCenter").className = "outer";
		}
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
	if(document.getElementById("meteoriteWonderNav").className != "hidden"){
		document.getElementById("meteoriteWonderNav").className = "";
	}
	if(document.getElementById("portalRoomNav").className != "hidden"){
		document.getElementById("portalRoomNav").className = "";
	}
	if(document.getElementById("stargateNav").className != "hidden"){
		document.getElementById("stargateNav").className = "";
	}
	document.getElementById(tab).className = "info";
}

function activeSolCenterTab(tab){
	document.getElementById("unlockPlasmaNav").className = "";
	document.getElementById("unlockEmcNav").className = "";
	document.getElementById("unlockDysonNav").className = "";
	document.getElementById(tab).className = "info";
}
