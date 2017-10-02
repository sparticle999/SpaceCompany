// globally accessible convenience wrapper for Game.resources.getResource()
function getResource(id) {
	return Game.resources.getResource(id);
}

// globally accessible convenience wrapper for Game.resources.getStorage()
function getStorage(id) {
	return Game.resources.getStorage(id);
}

// globally accessible convenience wrapper for Game.resources.getProduction()
function getProduction(id) {
	return Game.resources.getProduction(id);
}

function checkStorages(){
	if(!Game.activeNotifications.storage || Game.activeNotifications.storage.state === "closed"){

		if (Game.constants.enableStorageNotifications === false){
			return;
		}

		var resourcesFull = 0;
		for (var id in Game.resources.entries){

			if(Game.resources.getResourceData(id).current >= Game.resources.getResourceData(id).capacity){
				resourcesFull += 1;
			}
		}
		if(resourcesFull >= Game.statistics.get("resourcesUnlocked")){
			Game.notifyStorage();
		}
	}
}

function gainResources(delta) {
	for (var id in RESOURCE) {
		Game.resources.addResource(RESOURCE[id], getProduction(RESOURCE[id]) * delta);
	}
	antimatter += antimatterps * delta;
}

function getMaxPlasma() {
	return 100000 + (50000 * PSU) + (500000 * PSUT2);
}

function getMaxEnergy() {
	return (100000 + (50000 * battery) + (500000 * batteryT2) + (5000000 * batteryT3) + (50000000*batteryT4)) * ((Game.tech.entries.batteryEfficiencyResearch.current/100)+1);
}

// Gain Buttons

function gainResource(resource){
	if(resource === RESOURCE.Plasma){
		if(getResource(RESOURCE.Energy) >= 1000 * gainNum && getResource(RESOURCE.Hydrogen) >= 10 * gainNum && getResource(RESOURCE.Plasma) < getMaxPlasma()){
			Game.resources.addResource(RESOURCE.Plasma, gainNum);
			Game.resources.takeResource(RESOURCE.Energy, 1000 * gainNum);
			Game.resources.takeResource(RESOURCE.Hydrogen, 10 * gainNum);
			Game.statistics.add('manualResources', gainNum);
		}
	} else if(resource === RESOURCE.Charcoal){
		if(getResource(RESOURCE.Charcoal) < getStorage(RESOURCE.Charcoal) && getResource(RESOURCE.Wood) >= 2 * gainNum){
			Game.resources.addResource(RESOURCE.Charcoal, gainNum);
			Game.resources.takeResource(RESOURCE.Wood, 2 * gainNum);
			Game.statistics.add('manualResources', gainNum);
		}
	} else if(resource === RESOURCE.Meteorite){
		if(getResource(RESOURCE.Meteorite) < getStorage(RESOURCE.Meteorite)){
			if(getResource(RESOURCE.Plasma) >= 3 * gainNum){
				Game.resources.addResource(RESOURCE.Meteorite, gainNum);
				Game.resources.takeResource(RESOURCE.Plasma, 3 * gainNum);
				Game.statistics.add('manualResources', gainNum);
			}
		}
	} else {
		if(getResource(resource) < getStorage(resource)){
			Game.resources.addResource(resource, gainNum);
			Game.statistics.add('manualResources', gainNum);
		}
	}
}

// Resources Tab

function upgradeStorage(resource) {
	Game.resources.upgradeStorage(resource);
}

function toggleCharcoal(){
	charcoalToggled = !charcoalToggled;
	Game.buildings.setActiveByResource(RESOURCE.Charcoal, charcoalToggled);
}

function toggleHeater(){
	heaterToggled = !heaterToggled;
	Game.buildings.setActive(BUILDING.Heater, heaterToggled);
}

function togglePlasmatic(){
	plasmaticToggled = !plasmaticToggled;
	Game.buildings.setActive(BUILDING.Plasmatic, plasmaticToggled);
}

function toggleBath(){
	bathToggled = !bathToggled;
	Game.buildings.setActive(BUILDING.Bath, bathToggled);
}

function toggleRocketFuel(){
	rocketFuelToggled = !rocketFuelToggled;
	Game.buildings.setActiveByResource(RESOURCE.RocketFuel, rocketFuelToggled);
}

function toggleMeteorite(){
	meteoriteToggled = !meteoriteToggled;
	Game.buildings.setActiveByResource(RESOURCE.Meteorite, meteoriteToggled);
}

function toggleAntimatter(){
	antimatterToggled = !antimatterToggled;
}

function updateCost(){
	PSUSilverCost = Math.floor(770000 * Math.pow(1.1,PSU));
	PSUGoldCost = Math.floor(770000 * Math.pow(1.1,PSU));
	PSUUraniumCost = Math.floor(550000 * Math.pow(1.1,PSU));

	PSUT2SilverCost = Math.floor(9300000 * Math.pow(1.1,PSUT2));
	PSUT2GoldCost = Math.floor(9300000 * Math.pow(1.1,PSUT2));
	PSUT2UraniumCost = Math.floor(6800000 * Math.pow(1.1,PSUT2));

	batteryMetalCost = Math.floor(50000 * Math.pow(1.1,battery));
	batteryGemCost = Math.floor(50000 * Math.pow(1.1,battery));
	batteryLunariteCost = Math.floor(30000 * Math.pow(1.1,battery));

	batteryT2MetalCost = Math.floor(550000 * Math.pow(1.1,batteryT2));
	batteryT2GemCost = Math.floor(550000 * Math.pow(1.1,batteryT2));
	batteryT2LunariteCost = Math.floor(330000 * Math.pow(1.1,batteryT2));

	batteryT3MetalCost = Math.floor(5500000 * Math.pow(1.1,batteryT3));
	batteryT3GemCost = Math.floor(5500000 * Math.pow(1.1,batteryT3));
	batteryT3LunariteCost = Math.floor(3300000 * Math.pow(1.1,batteryT3));

	batteryT4MetalCost = Math.floor(55000000 * Math.pow(1.1,batteryT4));
	batteryT4GemCost = Math.floor(55000000 * Math.pow(1.1,batteryT4));
	batteryT4LunariteCost = Math.floor(33000000 * Math.pow(1.1,batteryT4));
}

function getPSU(){
	if(getResource(RESOURCE.Silver) >= PSUSilverCost * T1Price && getResource(RESOURCE.Gold) >= PSUGoldCost * T1Price && getResource(RESOURCE.Uranium) >= PSUUraniumCost * T1Price){
		Game.resources.takeResource(RESOURCE.Silver, PSUSilverCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gold, PSUGoldCost * T1Price);
		Game.resources.takeResource(RESOURCE.Uranium, PSUUraniumCost * T1Price);
		PSU += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPSUT2(){
	if(getResource(RESOURCE.Silver) >= PSUT2SilverCost && getResource(RESOURCE.Gold) >= PSUT2GoldCost && getResource(RESOURCE.Uranium) >= PSUT2UraniumCost){
		Game.resources.takeResource(RESOURCE.Silver, PSUT2SilverCost);
		Game.resources.takeResource(RESOURCE.Gold, PSUT2GoldCost);
		Game.resources.takeResource(RESOURCE.Uranium, PSUT2UraniumCost);
		PSUT2 += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBattery(){
	if(getResource(RESOURCE.Metal) >= batteryMetalCost * T1Price && getResource(RESOURCE.Gem) >= batteryGemCost * T1Price && getResource(RESOURCE.Lunarite) >= batteryLunariteCost * T1Price){
		Game.resources.takeResource(RESOURCE.Metal, batteryMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, batteryGemCost * T1Price);
		Game.resources.takeResource(RESOURCE.Lunarite, batteryLunariteCost * T1Price);
		battery += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getBatteryT2(){
	if(getResource(RESOURCE.Metal) >= batteryT2MetalCost && getResource(RESOURCE.Gem) >= batteryT2GemCost && getResource(RESOURCE.Lunarite) >= batteryT2LunariteCost ){
		Game.resources.takeResource(RESOURCE.Metal, batteryT2MetalCost);
		Game.resources.takeResource(RESOURCE.Gem, batteryT2GemCost);
		Game.resources.takeResource(RESOURCE.Lunarite, batteryT2LunariteCost);
		batteryT2 += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBatteryT3(){
	if(getResource(RESOURCE.Metal) >= batteryT3MetalCost && getResource(RESOURCE.Gem) >= batteryT3GemCost && getResource(RESOURCE.Lunarite) >= batteryT3LunariteCost ){
		Game.resources.takeResource(RESOURCE.Metal, batteryT3MetalCost);
		Game.resources.takeResource(RESOURCE.Gem, batteryT3GemCost);
		Game.resources.takeResource(RESOURCE.Lunarite, batteryT3LunariteCost);
		batteryT3 += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getBatteryT4(){
	if(metal>=batteryT4MetalCost && gem>=batteryT4GemCost && lunarite>=batteryT4LunariteCost){
		metal-=batteryT4MetalCost;
		gem-=batteryT4GemCost;
		lunarite-=batteryT4LunariteCost;
		batteryT4+=1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}