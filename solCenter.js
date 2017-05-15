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
    emcAmount *= 10;
    if(emcAmount > getMaxEnergy())
    {
        emcAmount = 1;
    }

	for(var i = 0; i < document.getElementsByClassName("emcAmount").length; i++){
		document.getElementsByClassName("emcAmount")[i].innerHTML = commafy(emcAmount);
	}

    refreshConversionDisplay();
}

function refreshConversionDisplay() {
    var maxEnergy = getMaxEnergy();
    for(var i = 0; i < resources.length; i++){
        var element = $('#' + resources[i] + "EmcVal");
        var buttonElement = $('#' + resources[i] + "Conv");

        var value = window[resources[i]+"EmcVal"];
        var emcValue = value * emcAmount;
        var current = window[resources[i]];
        var capacity = window[resources[i]+"Storage"];
        element.text(commafy(emcValue));

        var disabled = false;
        if(maxEnergy < emcValue) {
            buttonElement.addClass('red');
            disabled = true;
        } else {
            buttonElement.removeClass('red');
        }

        if(emcAmount > capacity || current >= capacity){
            buttonElement.addClass('green');
            disabled = true;
        }
        else{
            buttonElement.removeClass('green');
        }

        buttonElement.prop('disabled', disabled);
    }

    refreshPlasmaConversionDisplay();
}

function refreshPlasmaConversionDisplay() {
    // special case for plasma
    var disabled = false;
    var meteoriteConvElement = $('#meteoriteConv');
    var meteoriteEmcValue = emcAmount * meteoriteEmcVal;
    if (plasma < meteoriteEmcValue) {
        meteoriteConvElement.addClass('red');
        disabled = true;
    } else {
        meteoriteConvElement.removeClass('red');
    }

    if(meteorite >= meteoriteStorage) {
        meteoriteConvElement.addClass('green');
        disabled = true;
    } else {
        meteoriteConvElement.removeClass('green');
    }

    meteoriteConvElement.prop('disabled', disabled);
}

function convertEnergy(resource, resourceName){
	var current = window[resourceName];
	var capacity = window[resourceName+"Storage"];

	var amount = Math.floor(Math.min(emcAmount, capacity - current));
	var requiredEnergy = amount * window[resourceName + "EmcVal"];

	if(amount > 0 && energy >= requiredEnergy){
		energy -= requiredEnergy;
		window[resourceName] += amount;

		Game.notifyInfo('Energy Conversion', 'Gained ' + amount + ' ' + resourceName);

        refreshConversionDisplay();
	}
}

function convertPlasma(resource, resourceName){
	if(plasma >= emcAmount*window[resourceName + "EmcVal"]){
		plasma -= emcAmount*window[resourceName + "EmcVal"];
		window[resourceName] += emcAmount;

        refreshPlasmaConversionDisplay();
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