// Sol Center Tab

function unlockPlasma(){
	if(hydrogen >= 1500 && uranium >= 1500 && oil >= 15000 && wood >= 15000){
		hydrogen -= 1500;
		uranium -= 1500;
		oil -= 15000;
		wood -= 15000;
		document.getElementById("researchPlasma").className = "hidden";
		document.getElementById("plasmaNav").className = "";
		for(var i = 0; i < 4; i++){
			document.getElementById("energyNav" + [i]).style.border = "";
		}
		noBorder.push("energyNav");
		buttonsHidden.push("researchPlasma");
		resourcesUnlocked.push("plasmaNav");
		newUnlock("resources");
	}
}

function unlockEmc(){
	if(energy >= 75000 && plasma >= 100){
		energy -= 75000;
		plasma -= 100;
		document.getElementById("researchEmc").className = "hidden";
		document.getElementById("emcPage").className = "";
		buttonsHidden.push("researchEmc");
		resourcesUnlocked.push("emcPage");
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