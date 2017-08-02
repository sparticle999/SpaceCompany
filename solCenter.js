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

function changeEmcAmount(event){
	if (event.button === 2) {
		emcAmount /= 10;
		
		if (emcAmount < 1) {
			emcAmount = "Max";
		}
		if(emcAmount !== emcAmount){
			emcAmount = Math.pow(10, Math.floor(Math.log10(getMaxEnergy())));
		}
		
	} else {
		emcAmount *= 10;
		if(emcAmount > getMaxEnergy()){
			emcAmount = "Max";
		}
		if(emcAmount !== emcAmount){
			emcAmount = 1;
		}
		
	}

    refreshConversionDisplay();
}

function refreshConversionDisplay() {
    var maxEnergy = getMaxEnergy();
    if(emcAmount === "Max"){
    	for(var i = 0; i < resources.length; i++){
			var element = $('#' + resources[i] + "EmcVal");
			var buttonElement = $('#' + resources[i] + "Conv");

			var value = window[resources[i]+"EmcVal"];

			var emcValue = Math.floor(energy/value);

			var current = window[resources[i]];
			var capacity = window[resources[i]+"Storage"];

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
			document.getElementById("emcButton").innerHTML = "Max";
			if(resources[i] == "meteorite"){
				document.getElementById(resources[i] + "EmcAmount").innerHTML = Game.settings.format(Math.floor(plasma/value));
				element.text(Game.settings.format(Math.floor(plasma/value)*value));
			}
			else{
				document.getElementById(resources[i] + "EmcAmount").innerHTML = Game.settings.format(emcValue);
				element.text(Game.settings.format(emcValue*value));
			}

			buttonElement.prop('disabled', disabled);
    	}
    }
    else{
    	for(var i = 0; i < resources.length; i++){
			var element = $('#' + resources[i] + "EmcVal");
			var buttonElement = $('#' + resources[i] + "Conv");

			var value = window[resources[i]+"EmcVal"];
			var emcValue = value * emcAmount;
			var current = window[resources[i]];
			var capacity = window[resources[i]+"Storage"];
			element.text(Game.settings.format(emcValue));

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
			document.getElementById("emcButton").innerHTML = "X" + Game.settings.format(emcAmount);
			document.getElementById(resources[i] + "EmcAmount").innerHTML = Game.settings.format(emcAmount);


			buttonElement.prop('disabled', disabled);
    	}
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

function convertEnergy(resourceName){
	var current = window[resourceName];
	var capacity = window[resourceName+"Storage"];
	var emcValue = window[resourceName + "EmcVal"];
	if(emcAmount === "Max"){
		var amount = Math.floor(Math.min(Math.floor(energy/emcValue), capacity - current));
	}
	else{
		var amount = Math.floor(Math.min(emcAmount, capacity - current));
	}
	
	var requiredEnergy = amount * emcValue;

	if(amount > 0 && energy >= requiredEnergy){
		energy -= requiredEnergy;
		window[resourceName] += amount;
		Game.notifyInfo('Energy Conversion', 'Gained ' + Game.settings.format(amount) + ' ' + resourceName);

        refreshConversionDisplay();
	}
}

function convertPlasma(resourceName){
    var current = window[resourceName];
    var capacity = window[resourceName+"Storage"];
    var emcValue = window[resourceName + "EmcVal"];
    if(emcAmount === "Max"){
        var amount = Math.floor(Math.min(Math.floor(plasma/emcValue), capacity - current));
    }
    else{
        var amount = Math.floor(Math.min(emcAmount, capacity - current));
    }

    var requiredPlasma = amount*emcValue;

	if(amount > 0 && plasma >= requiredPlasma){
		plasma -= requiredPlasma;
		window[resourceName] += amount;

		Game.notifyInfo('Plasma Conversion', 'Gained ' + Game.settings.format(parseFloat(amount)) + ' ' + resourceName);

        refreshPlasmaConversionDisplay();
	}
}

var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;

function refreshDyson(){
	dysonTitaniumCost = Math.floor(300000 * Math.pow(1.02,dyson));
	dysonGoldCost = Math.floor(100000 * Math.pow(1.02,dyson));
	dysonSiliconCost = Math.floor(200000 * Math.pow(1.02,dyson));
	dysonMeteoriteCost = Math.floor(1000 * Math.pow(1.02,dyson));
	dysonIceCost = Math.floor(100000 * Math.pow(1.02,dyson));
}

function getDyson(){
	if(titanium >= dysonTitaniumCost && gold >= dysonGoldCost && silicon >= dysonSiliconCost && meteorite >= dysonMeteoriteCost && ice >= dysonIceCost){
		titanium -= dysonTitaniumCost;
		gold -= dysonGoldCost;
		silicon -= dysonSiliconCost;
		meteorite -= dysonMeteoriteCost;
		ice -= dysonIceCost;
		dyson += 1;

		refreshDyson()

		return true;
	}
	else{
		return false;
	}
}

function buildDysonTo(n) {
	while (dyson < n && getDyson()){}
}

function buildRing(){
	if(dyson >= 50 && rocketFuel >= 50000){
		dyson -= 50;
		rocketFuel -= 50000;
		ring += 1;

		refreshDyson();
	}
}

function buildSwarm(){
	if(dyson >= 100 && rocketFuel >= 250000){
		dyson -= 100;
		rocketFuel -= 250000;
		swarm += 1;

		refreshDyson();
	}
}

function buildSphere(){
	if(sphere > 0){
		return;
	}

	if(dyson >= 250 && rocketFuel >= 1000000){
		dyson -= 250;
		rocketFuel -= 1000000;
		sphere += 1;

		refreshDyson();

		Game.stargaze.initialise();

	}
}