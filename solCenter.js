// Sol Center Tab

function unlockPlasmaResearch(){
	if(getResource(RESOURCE.HYDROGEN) >= 1500 && getResource(RESOURCE.URANIUM) >= 1500 && getResource(RESOURCE.OIL) >= 15000 && getResource(RESOURCE.WOOD) >= 15000){
		Game.resources.takeResource(RESOURCE.HYDROGEN, 1500);
		Game.resources.takeResource(RESOURCE.URANIUM, 1500);
		Game.resources.takeResource(RESOURCE.OIL, 15000);
		Game.resources.takeResource(RESOURCE.WOOD, 15000);
		document.getElementById("researchPlasma").className = "hidden";
		document.getElementById("unlockPlasma").className = "";
		Game.tech.unlockTech("unlockPlasma");
		newUnlock("research");
		buttonsHidden.push("researchPlasma");
	}
}

function unlockEmcResearch(){
	if(getResource(RESOURCE.ENERGY) >= 75000 && getResource(RESOURCE.PLASMA) >= 100){
		Game.resources.takeResource(RESOURCE.ENERGY, 75000);
		Game.resources.takeResource(RESOURCE.PLASMA, 100);
		document.getElementById("researchEmc").className = "hidden";
		document.getElementById("unlockEmc").className = "";
		Game.tech.unlockTech("unlockEmc");
		newUnlock("research");
		buttonsHidden.push("researchEmc");
	}
}

function unlockDysonResearch(){
	if(getResource(RESOURCE.ENERGY) >= 100000 && getResource(RESOURCE.PLASMA) >= 10000){
		Game.resources.takeResource(RESOURCE.ENERGY, 100000);
		Game.resources.takeResource(RESOURCE.PLASMA, 10000);
		document.getElementById("researchDyson").className = "hidden";
		document.getElementById("unlockDyson").className = "";
		Game.tech.unlockTech("unlockDyson");
		newUnlock("research");
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
	var maxPlasma = getMaxPlasma();
	for (var i = 0; i < resources.length; i++) {
		var amountElement = $('#' + resources[i] + 'EmcAmount');
		var costElement = $('#' + resources[i] + 'EmcVal');
		var storageElement = $('#' + resources[i] + 'Conv');

		// meteorites are a special case because the conversion uses plasma
		var emcCostResource;
		var emcCostMax;
		if (resources[i] === 'meteorite') {
			emcCostResource = getResource(RESOURCE.PLASMA);
			emcCostMax = maxPlasma;
		} else {
			emcCostResource = getResource(RESOURCE.ENERGY);
			emcCostMax = maxEnergy;
		}

		var value = window[resources[i] + 'EmcVal'];
		var current = getResource(resources[i]);
		var capacity = getStorage(resources[i]);
		var emcValue;
		if (emcAmount === 'Max') {
			emcValue = Math.floor(emcCostResource / value);
			costElement.text(Game.settings.format(Math.floor(emcValue * value)));
			amountElement.text(Game.settings.format(emcValue));
		} else {
			emcValue = value * emcAmount;
			costElement.text(Game.settings.format(emcValue));
			amountElement.text(Game.settings.format(emcAmount));
		}

		storageElement.removeClass('green');
		storageElement.removeClass('red');
		if (emcAmount > capacity || current >= capacity) {
			storageElement.addClass('green');
		} else if (emcCostMax < emcValue) {
			storageElement.addClass('red');
		}
	}

	var emcAmountBtn = $('#emcButton');
	if (emcAmount === 'Max') {
		emcAmountBtn.text('Max');
	} else {
		emcAmountBtn.text(Game.settings.format(emcAmount));
	}
}

function convertEnergy(resourceName){
	var current = getResource(resourceName);
	var capacity = getStorage(resourceName);
	var emcValue = window[resourceName + "EmcVal"];
	var amount;
	if(emcAmount === "Max"){
		amount = Math.floor(Math.min(Math.floor(getResource(RESOURCE.ENERGY)/emcValue), capacity - current));
	}
	else{
		amount = Math.floor(Math.min(emcAmount, capacity - current));
	}
	
	var requiredEnergy = amount * emcValue;

	if(amount > 0 && getResource(RESOURCE.ENERGY) >= requiredEnergy){
		Game.resources.takeResource(RESOURCE.ENERGY, requiredEnergy);
		Game.resources.addResource(resourceName, amount);
		Game.notifyInfo('Energy Conversion', 'Gained ' + Game.settings.format(amount) + ' ' + Game.utils.capitaliseFirst(resourceName));

		refreshConversionDisplay();
	}
}

function convertPlasma(resourceName){
	var current = getResource(resourceName);
	var capacity = getStorage(resourceName);
	var emcValue = window[resourceName + "EmcVal"];
	var amount;
	if(emcAmount === "Max"){
		amount = Math.floor(Math.min(Math.floor(getResource(RESOURCE.PLASMA)/emcValue), capacity - current));
	}
	else{
		amount = Math.floor(Math.min(emcAmount, capacity - current));
	}

	var requiredPlasma = amount*emcValue;

	if(amount > 0 && getResource(RESOURCE.PLASMA) >= requiredPlasma){
		Game.resources.takeResource(RESOURCE.PLASMA, requiredPlasma);
		Game.resources.addResource(resourceName, amount);
		Game.notifyInfo('Plasma Conversion', 'Gained ' + Game.settings.format(parseFloat(amount)) + ' ' + Game.utils.capitaliseFirst(resourceName));

		refreshConversionDisplay();
	}
}

var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;

function updateDysonCost(){
	dysonTitaniumCost = Math.floor(300000 * Math.pow(1.02,dyson));
	dysonGoldCost = Math.floor(100000 * Math.pow(1.02,dyson));
	dysonSiliconCost = Math.floor(200000 * Math.pow(1.02,dyson));
	dysonMeteoriteCost = Math.floor(1000 * Math.pow(1.02,dyson));
	dysonIceCost = Math.floor(100000 * Math.pow(1.02,dyson));
}

function getDyson(){
	if (getResource(RESOURCE.TITANIUM) >= dysonTitaniumCost && getResource(RESOURCE.GOLD) >= dysonGoldCost && getResource(RESOURCE.SILICON) >= dysonSiliconCost && getResource(RESOURCE.METEORITE) >= dysonMeteoriteCost && getResource(RESOURCE.ICE) >= dysonIceCost) {
		Game.resources.takeResource(RESOURCE.TITANIUM, dysonTitaniumCost);
		Game.resources.takeResource(RESOURCE.GOLD, dysonGoldCost);
		Game.resources.takeResource(RESOURCE.SILICON, dysonSiliconCost);
		Game.resources.takeResource(RESOURCE.METEORITE, dysonMeteoriteCost);
		Game.resources.takeResource(RESOURCE.ICE, dysonIceCost);
		dyson += 1;

		updateDysonCost();

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

		updateDysonCost();
	}
}

function buildSwarm(){
	if(dyson >= 100 && rocketFuel >= 250000){
		dyson -= 100;
		rocketFuel -= 250000;
		swarm += 1;

		updateDysonCost();
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

		updateDysonCost();

		Game.stargazeUI.initialise();
		newUnlock('stargaze');
	}
}