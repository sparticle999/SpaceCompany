// Sol Center Tab

function unlockPlasmaResearch(){
	if(hydrogen >= 1500 && uranium >= 1500 && oil >= 15000 && wood >= 15000){
		hydrogen -= 1500;
		uranium -= 1500;
		oil -= 15000;
		wood -= 15000;
		document.getElementById("researchPlasma").className = "hidden";
		document.getElementById("unlockPlasma").className = "";
		available.push("unlockPlasma");
		buttonsHidden.push("researchPlasma");
	}
}

function unlockEmcResearch(){
	if(energy >= 75000 && plasma >= 100){
		energy -= 75000;
		plasma -= 100;
		document.getElementById("researchEmc").className = "hidden";
		document.getElementById("unlockEmc").className = "";
		available.push("unlockEmc");
		buttonsHidden.push("researchEmc");
	}
}

function unlockDysonResearch(){
	if(energy >= 100000 && plasma >= 10000){
		energy -= 100000;
		plasma -= 10000;
		document.getElementById("researchDyson").className = "hidden";
		document.getElementById("unlockDyson").className = "";
		available.push("unlockDyson");
		buttonsHidden.push("researchDyson");
	}
}

function changeEmcAmount(){
	if(emcAmount === 1){
		emcAmount = 100;
	}
	else if(emcAmount === 100){
		emcAmount = 1000;
	}
	else if(emcAmount === 1000){
		emcAmount = 10000;
	}
	else{
		emcAmount = 1;
	}
	for(var i = 0; i < document.getElementsByClassName("emcAmount").length; i++){
		document.getElementsByClassName("emcAmount")[i].innerHTML = commafy(emcAmount);
	}
	for(var i = 0; i < resources.length; i++){
		document.getElementById(resources[i] + "EmcVal").innerHTML = commafy(window[resources[i]+"EmcVal"]*emcAmount);
		if(window[resources[i]+"EmcVal"]*emcAmount > window[resources[i]+"Storage"]){
			document.getElementById(resources[i] + "Conv").className = "btn btn-default green";
		}
		else{
			document.getElementById(resources[i] + "Conv").className = "btn btn-default";
		}
	}
}

function convertEnergy(resource, resourceName){
	if(energy >= emcAmount*window[resourceName + "EmcVal"]){
		energy -= emcAmount*window[resourceName + "EmcVal"];
		window[resourceName] += emcAmount;
	}
}

function convertPlasma(resource, resourceName){
	if(plasma >= emcAmount*window[resourceName + "EmcVal"]){
		plasma -= emcAmount*window[resourceName + "EmcVal"];
		window[resourceName] += emcAmount;
	}
}

var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;

function getDyson(){
	if(titanium >= dysonTitaniumCost && gold >= dysonGoldCost && silicon >= dysonSiliconCost && meteorite >= dysonMeteoriteCost && ice >= dysonIceCost){
		titanium -= dysonTitaniumCost;
		gold -= dysonGoldCost;
		silicon -= dysonSiliconCost;
		meteorite -= dysonMeteoriteCost;
		ice -= dysonIceCost;
		dyson += 1;
		dysonTitaniumCost = Math.floor(300000 * Math.pow(1.02,dyson));
		dysonGoldCost = Math.floor(100000 * Math.pow(1.02,dyson));
		dysonSiliconCost = Math.floor(200000 * Math.pow(1.02,dyson));
		dysonMeteoriteCost = Math.floor(1000 * Math.pow(1.02,dyson));
		dysonIceCost = Math.floor(100000 * Math.pow(1.02,dyson));
		document.getElementById("dyson").innerHTML = dyson;
		document.getElementById("dysonPieces").innerHTML = dyson;
		document.getElementById("dysonPieces2").innerHTML = dyson;
		document.getElementById("dysonTitaniumCost").innerHTML = commafy(dysonTitaniumCost);
		document.getElementById("dysonGoldCost").innerHTML = commafy(dysonGoldCost);
		document.getElementById("dysonSiliconCost").innerHTML = commafy(dysonSiliconCost);
		document.getElementById("dysonMeteoriteCost").innerHTML = commafy(dysonMeteoriteCost);
		document.getElementById("dysonIceCost").innerHTML = commafy(dysonIceCost);
	}
}

function buildSwarm(){
	if(dyson >= 100 && rocketFuel >= 250000){
		dyson -= 100;
		rocketFuel -= 250000;
		swarm += 1;
		document.getElementById("swarm").innerHTML = swarm;
		document.getElementById("dyson").innerHTML = dyson;
		document.getElementById("dysonPieces").innerHTML = dyson;
		document.getElementById("dysonPieces2").innerHTML = dyson;
	}
}

function buildSphere(){
	if(dyson >= 250 && rocketFuel >= 1000000){
		dyson -= 250;
		rocketFuel -= 1000000;
		sphere += 1;
		document.getElementById("sphere").innerHTML = sphere;
		document.getElementById("dyson").innerHTML = dyson;
		document.getElementById("dysonPieces").innerHTML = dyson;
		document.getElementById("dysonPieces2").innerHTML = dyson;
	}
}