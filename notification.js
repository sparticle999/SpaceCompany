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
	if(document.getElementById("plasmaNav").className != "sideTab hidden"){
		document.getElementById("plasmaNav").className = "sideTab";
	}
	if(document.getElementById("energyNav").className != "sideTab hidden"){
		document.getElementById("energyNav").className = "sideTab";
	}
	if(document.getElementById("uraniumNav").className === "sideTab info"){
		document.getElementById("uraniumNav").className = "sideTab";
	}
	if(document.getElementById("lavaNav").className === "sideTab info"){
		document.getElementById("lavaNav").className = "sideTab";
	}
	for(var i = 0; i < resources.length; i++){
		if(document.getElementById(resources[i] + "Nav").className === "earth sideTab info"){
			document.getElementById(resources[i] + "Nav").className = "earth sideTab";
		}
		if(document.getElementById(resources[i] + "Nav").className === "innerPlanet sideTab info"){
			document.getElementById(resources[i] + "Nav").className = "innerPlanet sideTab";
		}
		if(document.getElementById(resources[i] + "Nav").className === "outerPlanet sideTab info"){
			document.getElementById(resources[i] + "Nav").className = "outerPlanet sideTab";
		}
	}
	document.getElementById(tab).className += " info";
}

function activeResearchTab(tab){
	document.getElementById("scienceNav").className = "sideTab";
	document.getElementById("technologiesNav").className = "sideTab";
	document.getElementById(tab).className += " info";
}

function activeSolarTab(tab){
	document.getElementById("rocketFuelNav").className = "sideTab";
	if(rocketLaunched === false){
		document.getElementById("spaceRocket").className = "sideTab";
	}
	else{
		if(document.getElementById("mercury").className != "inner sideTab hidden"){
			document.getElementById("mercury").className = "inner sideTab";
		}
		if(document.getElementById("moon").className != "inner sideTab hidden"){
			document.getElementById("moon").className = "inner sideTab";
		}
		if(document.getElementById("venus").className != "inner sideTab hidden"){
			document.getElementById("venus").className = "inner sideTab";
		}
		if(document.getElementById("mars").className != "inner sideTab hidden"){
			document.getElementById("mars").className = "inner sideTab";
		}
		if(document.getElementById("asteroidBelt").className != "inner sideTab hidden"){
			document.getElementById("asteroidBelt").className = "inner sideTab";
		}
	}
	if(contains(explored, "asteroidBelt")){
		if(document.getElementById("wonderStation").className != "inner sideTab hidden"){
			document.getElementById("wonderStation").className = "inner sideTab";
		}
		if(document.getElementById("jupiter").className != "outer sideTab hidden"){
			document.getElementById("jupiter").className = "outer sideTab";
		}
		if(document.getElementById("saturn").className != "outer sideTab hidden"){
			document.getElementById("saturn").className = "outer sideTab";
		}
		if(document.getElementById("uranus").className != "outer sideTab hidden"){
			document.getElementById("uranus").className = "outer sideTab";
		}
		if(document.getElementById("neptune").className != "outer sideTab hidden"){
			document.getElementById("neptune").className = "outer sideTab";
		}
		if(document.getElementById("pluto").className != "outer sideTab hidden"){
			document.getElementById("pluto").className = "outer sideTab";
		}
		if(document.getElementById("kuiperBelt").className != "outer sideTab hidden"){
			document.getElementById("kuiperBelt").className = "outer sideTab";
		};
	}
	if(contains(explored, "kuiperBelt")){
		if(document.getElementById("kuiperBelt").className != "outer sideTab hidden"){
			document.getElementById("solCenter").className = "outer sideTab";
		}
	}
	document.getElementById(tab).className += " info";
}

function activeWonderTab(tab){
	document.getElementById("theWonderStation").className = "sideTab";
	if(document.getElementById("preciousWonderNav").className != "sideTab hidden"){
		document.getElementById("preciousWonderNav").className = "sideTab";
	}
	if(document.getElementById("energeticWonderNav").className != "sideTab hidden"){
		document.getElementById("energeticWonderNav").className = "sideTab";
	}
	if(document.getElementById("techWonderNav").className != "sideTab hidden"){
		document.getElementById("techWonderNav").className = "sideTab";
	}
	if(document.getElementById("meteoriteWonderNav").className != "sideTab hidden"){
		document.getElementById("meteoriteWonderNav").className = "sideTab";
	}
	if(document.getElementById("portalRoomNav").className != "sideTab hidden"){
		document.getElementById("portalRoomNav").className = "sideTab";
	}
	if(document.getElementById("stargateNav").className != "sideTab hidden"){
		document.getElementById("stargateNav").className = "sideTab";
	}
	document.getElementById(tab).className += " info";
}

function activeSolCenterTab(tab){
	document.getElementById("unlockPlasmaNav").className = "sideTab";
	document.getElementById("unlockEmcNav").className = "sideTab";
	document.getElementById("unlockDysonNav").className = "sideTab";
	document.getElementById(tab).className = "info";
}
