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
	}
}

function convertEnergy(resource, resourceName){
	if(energy >= emcAmount*window[resourceName + "EmcVal"]){
		energy -= emcAmount*window[resourceName + "EmcVal"];
		window[resourceName] += emcAmount;
	}
}