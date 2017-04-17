// Sol Center Tab

function unlockPlasma(){
	if(hydrogen >= 1500 && uranium >= 1500 && oil >= 15000 && wood >= 15000){
		hydrogen -= 1500;
		uranium -= 1500;
		oil -= 15000;
		wood -= 15000;
		document.getElementById("researchPlasma").className = "hidden";
		document.getElementById("plasmaNav").className = "";
		buttonsHidden.push("researchPlasma");
		resourcesUnlocked.push("plasmaNav");
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
		document.getElementsByClassName("emcAmount")[i].innerHTML = emcAmount;
	}
}

function convertEnergy(resource, resourceName){
	if(energy >= emcAmount*window[resourceName + "EmcVal"]){
		energy -= emcAmount*window[resourceName + "EmcVal"];
		window[resourceName] += emcAmount;
	}
}