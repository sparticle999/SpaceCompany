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

function getResourceAfterTick(id, delta) {
	return getResource(id) + getProduction(id) * delta;
}

function checkStorages(){
	if(!Game.activeNotifications.storage || Game.activeNotifications.storage.state == "closed"){

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
	return (100000 + (50000 * battery) + (500000 * batteryT2) + (5000000 * batteryT3) + (50000000*batteryT4) + (500000000*batteryT5)) * ((Game.tech.entries.batteryEfficiencyResearch.current/100)+1);
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

function upgradeUraniumStorage(){
	if(getResource(RESOURCE.Uranium) >= getStorage(RESOURCE.Uranium)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Uranium)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Uranium, getStorage(RESOURCE.Uranium)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Uranium)/2.5*storagePrice);
		uraniumStorage = uraniumNextStorage;
		uraniumNextStorage *= 2;
	}
}

function upgradeOilStorage(){
	if(getResource(RESOURCE.Oil) >= getStorage(RESOURCE.Oil)*storagePrice && getResource(RESOURCE.Metal) >= getStorage(RESOURCE.Oil)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Oil, getStorage(RESOURCE.Oil)*storagePrice);
		Game.resources.takeResource(RESOURCE.Metal, getStorage(RESOURCE.Oil)/2.5*storagePrice);
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
	}
}

function upgradeMetalStorage(){
	if(getResource(RESOURCE.Metal) >= getStorage(RESOURCE.Metal)*storagePrice){
		Game.resources.takeResource(RESOURCE.Metal, getStorage(RESOURCE.Metal)*storagePrice);
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
	}
}

function upgradeGemStorage(){
	if(getResource(RESOURCE.Gem) >= getStorage(RESOURCE.Gem)*storagePrice && getResource(RESOURCE.Metal) >= getStorage(RESOURCE.Gem)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Gem, getStorage(RESOURCE.Gem)*storagePrice);
		Game.resources.takeResource(RESOURCE.Metal, getStorage(RESOURCE.Gem)/2.5*storagePrice);
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
	}
}

function upgradeCharcoalStorage(){
	if(getResource(RESOURCE.Charcoal) >= getStorage(RESOURCE.Charcoal)*storagePrice && getResource(RESOURCE.Metal) >= getStorage(RESOURCE.Charcoal)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Charcoal, getStorage(RESOURCE.Charcoal)*storagePrice);
		Game.resources.takeResource(RESOURCE.Metal, getStorage(RESOURCE.Charcoal)/2.5*storagePrice);
		charcoalStorage = charcoalNextStorage;
		charcoalNextStorage *= 2;
	}
}

function upgradeWoodStorage(){
	if(getResource(RESOURCE.Wood) >= getStorage(RESOURCE.Wood)*storagePrice && getResource(RESOURCE.Metal) >= getStorage(RESOURCE.Wood)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Wood, getStorage(RESOURCE.Wood)*storagePrice);
		Game.resources.takeResource(RESOURCE.Metal, getStorage(RESOURCE.Wood)/2.5*storagePrice);
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
	}
}

function upgradeLunariteStorage(){
	if(getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Lunarite)*storagePrice && getResource(RESOURCE.Metal) >= getStorage(RESOURCE.Lunarite)*4*storagePrice){
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Lunarite)*storagePrice);
		Game.resources.takeResource(RESOURCE.Metal, getStorage(RESOURCE.Lunarite)*4*storagePrice);
		lunariteStorage = lunariteNextStorage;
		lunariteNextStorage *= 2;
	}
}

function upgradeMethaneStorage(){
	if(getResource(RESOURCE.Methane) >= getStorage(RESOURCE.Methane)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Methane)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Methane, getStorage(RESOURCE.Methane)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Methane)/2.5*storagePrice);
		methaneStorage = methaneNextStorage;
		methaneNextStorage *= 2;
	}
}

function upgradeTitaniumStorage(){
	if(getResource(RESOURCE.Titanium) >= getStorage(RESOURCE.Titanium)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Titanium)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Titanium, getStorage(RESOURCE.Titanium)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Titanium)/2.5*storagePrice);
		titaniumStorage = titaniumNextStorage;
		titaniumNextStorage *= 2;
	}
}

function upgradeGoldStorage(){
	if(getResource(RESOURCE.Gold) >= getStorage(RESOURCE.Gold)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Gold)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Gold, getStorage(RESOURCE.Gold)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Gold)/2.5*storagePrice);
		goldStorage = goldNextStorage;
		goldNextStorage *= 2;
	}
}

function upgradeSilverStorage(){
	if(getResource(RESOURCE.Silver) >= getStorage(RESOURCE.Silver)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Silver)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Silver, getStorage(RESOURCE.Silver)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Silver)/2.5*storagePrice);
		silverStorage = silverNextStorage;
		silverNextStorage *= 2;
	}
}

function upgradeSiliconStorage(){
	if(getResource(RESOURCE.Silicon) >= getStorage(RESOURCE.Silicon)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Silicon)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Silicon, getStorage(RESOURCE.Silicon)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Silicon)/2.5*storagePrice);
		siliconStorage = siliconNextStorage;
		siliconNextStorage *= 2;
	}
}

function upgradeLavaStorage(){
	if(getResource(RESOURCE.Lava) >= getStorage(RESOURCE.Lava)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Lava)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Lava, getStorage(RESOURCE.Lava)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Lava)/2.5*storagePrice);
		lavaStorage = lavaNextStorage;
		lavaNextStorage *= 2;
	}
}

function upgradeHydrogenStorage(){
	if(getResource(RESOURCE.Hydrogen) >= getStorage(RESOURCE.Hydrogen)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Hydrogen)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Hydrogen, getStorage(RESOURCE.Hydrogen)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Hydrogen)/2.5*storagePrice);
		hydrogenStorage = hydrogenNextStorage;
		hydrogenNextStorage *= 2;
	}
}

function upgradeHeliumStorage(){
	if(getResource(RESOURCE.Helium) >= getStorage(RESOURCE.Helium)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Helium)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Helium, getStorage(RESOURCE.Helium)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Helium)/2.5*storagePrice);
		heliumStorage = heliumNextStorage;
		heliumNextStorage *= 2;
	}
}

function upgradeIceStorage(){
	if(getResource(RESOURCE.Ice) >= getStorage(RESOURCE.Ice)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Ice)/2.5*storagePrice){
		Game.resources.takeResource(RESOURCE.Ice, getStorage(RESOURCE.Ice)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Ice)/2.5*storagePrice);
		iceStorage = iceNextStorage;
		iceNextStorage *= 2;
	}
}

function upgradeMeteoriteStorage(){
	if(getResource(RESOURCE.Meteorite) >= getStorage(RESOURCE.Meteorite)*storagePrice && getResource(RESOURCE.Lunarite) >= getStorage(RESOURCE.Meteorite)*4*storagePrice){
		Game.resources.takeResource(RESOURCE.Meteorite, getStorage(RESOURCE.Meteorite)*storagePrice);
		Game.resources.takeResource(RESOURCE.Lunarite, getStorage(RESOURCE.Meteorite)*4*storagePrice);
		meteoriteStorage = meteoriteNextStorage;
		meteoriteNextStorage *= 2;
	}
}

function toggleCharcoal(){
	charcoalToggled = !charcoalToggled;
}

function toggleHeater(){
	heaterToggled = !heaterToggled;
}

function togglePlasmatic(){
	plasmaticToggled = !plasmaticToggled;
}

function toggleBath(){
	bathToggled = !bathToggled;
}

function toggleRocketFuel(){
	rocketFuelToggled = !rocketFuelToggled;
}

function toggleMeteorite(){
	meteoriteToggled = !meteoriteToggled;
}

function toggleAntimatter(){
	antimatterToggled = !antimatterToggled;
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

function getHeater(){
	if(getResource(RESOURCE.Lunarite) >= heaterLunariteCost * T1Price && getResource(RESOURCE.Gem) >= heaterGemCost * T1Price && getResource(RESOURCE.Silicon) >= heaterSiliconCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, heaterLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, heaterGemCost * T1Price);
		Game.resources.takeResource(RESOURCE.Silicon, heaterSiliconCost * T1Price);
		heater += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPlasmatic(){
	if(getResource(RESOURCE.Lunarite) >= plasmaticLunariteCost && getResource(RESOURCE.Silicon) >= plasmaticSiliconCost && getResource(RESOURCE.Meteorite) >= plasmaticMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, plasmaticLunariteCost);
		Game.resources.takeResource(RESOURCE.Silicon, plasmaticSiliconCost);
		Game.resources.takeResource(RESOURCE.Meteorite, plasmaticMeteoriteCost);
		plasmatic += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBath(){
	if(getResource(RESOURCE.Lava) >= bathLavaCost && getResource(RESOURCE.Gold) >= bathGoldCost && getResource(RESOURCE.Meteorite) >= bathMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lava, bathLavaCost);
		Game.resources.takeResource(RESOURCE.Gold, bathGoldCost);
		Game.resources.takeResource(RESOURCE.Meteorite, bathMeteoriteCost);
		bath += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
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
	if(getResource(RESOURCE.Metal)>=batteryT4MetalCost && getResource(RESOURCE.Gem)>=batteryT4GemCost && getResource(RESOURCE.Lunarite)>=batteryT4LunariteCost){
		Game.resources.takeResource(RESOURCE.Metal, batteryT4MetalCost);
		Game.resources.takeResource(RESOURCE.Gem, batteryT4GemCost);
		Game.resources.takeResource(RESOURCE.Lunarite, batteryT4LunariteCost);
		batteryT4+=1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getBatteryT5(){
	if(getResource(RESOURCE.Metal)>=batteryT5MetalCost && getResource(RESOURCE.Gem)>=batteryT5GemCost && getResource(RESOURCE.Lunarite)>=batteryT5LunariteCost){
		Game.resources.takeResource(RESOURCE.Metal, batteryT5MetalCost);
		Game.resources.takeResource(RESOURCE.Gem, batteryT5GemCost);
		Game.resources.takeResource(RESOURCE.Lunarite, batteryT5LunariteCost);
		batteryT5+=1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getCharcoalEngine(){
	if(getResource(RESOURCE.Metal) >= charcoalEngineMetalCost * T1Price && getResource(RESOURCE.Gem) >= charcoalEngineGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Metal, charcoalEngineMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, charcoalEngineGemCost * T1Price);
		charcoalEngine += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSolarPanel(){
	if(getResource(RESOURCE.Metal) >= solarPanelMetalCost && getResource(RESOURCE.Gem) >= solarPanelGemCost){
		Game.resources.takeResource(RESOURCE.Metal, solarPanelMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, solarPanelGemCost);
		solarPanel += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getMethaneStation(){
	if(getResource(RESOURCE.Lunarite) >= methaneStationLunariteCost && getResource(RESOURCE.Titanium) >= methaneStationTitaniumCost){
		Game.resources.takeResource(RESOURCE.Lunarite, methaneStationLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, methaneStationTitaniumCost);
		methaneStation += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getNuclearStation(){
	if(getResource(RESOURCE.Lunarite) >= nuclearStationLunariteCost && getResource(RESOURCE.Titanium) >= nuclearStationTitaniumCost){
		Game.resources.takeResource(RESOURCE.Lunarite, nuclearStationLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, nuclearStationTitaniumCost);
		nuclearStation += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getMagmatic(){
	if(getResource(RESOURCE.Lunarite) >= magmaticLunariteCost && getResource(RESOURCE.Gem) >= magmaticGemCost && getResource(RESOURCE.Silver) >= magmaticSilverCost){
		Game.resources.takeResource(RESOURCE.Lunarite, magmaticLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, magmaticGemCost);
		Game.resources.takeResource(RESOURCE.Silver, magmaticSilverCost);
		magmatic += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getFusionReactor(){
	if(getResource(RESOURCE.Lunarite) >= fusionReactorLunariteCost && getResource(RESOURCE.Titanium) >= fusionReactorTitaniumCost && getResource(RESOURCE.Silicon) >= fusionReactorSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, fusionReactorLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, fusionReactorTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, fusionReactorSiliconCost);
		fusionReactor += 1;
		updateCost();
		Game.statistics.add('tierOwned6');
	}
}

function getGrinder(){
	if(getResource(RESOURCE.Titanium) >= grinderTitaniumCost * T1Price && getResource(RESOURCE.Lunarite) >= grinderLunariteCost * T1Price && getResource(RESOURCE.Gold) >= grinderGoldCost * T1Price){
		Game.resources.takeResource(RESOURCE.Titanium, grinderTitaniumCost * T1Price);
		Game.resources.takeResource(RESOURCE.Lunarite, grinderLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gold, grinderGoldCost * T1Price);
		grinder += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getCubic(){
	if(getResource(RESOURCE.Uranium) >= cubicUraniumCost && getResource(RESOURCE.Lunarite) >= cubicLunariteCost && getResource(RESOURCE.Oil) >= cubicOilCost){
		Game.resources.takeResource(RESOURCE.Uranium, cubicUraniumCost);
		Game.resources.takeResource(RESOURCE.Lunarite, cubicLunariteCost);
		Game.resources.takeResource(RESOURCE.Oil, cubicOilCost);
		cubic += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getEnricher(){
	if(getResource(RESOURCE.Lunarite) >= enricherLunariteCost && getResource(RESOURCE.Titanium) >= enricherTitaniumCost && getResource(RESOURCE.Silicon) >= enricherSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, enricherLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, enricherTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, enricherSiliconCost);
		enricher += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getRecycler(){
	if(getResource(RESOURCE.Lunarite) >= recyclerLunariteCost && getResource(RESOURCE.Methane) >= recyclerMethaneCost && getResource(RESOURCE.Meteorite) >= recyclerMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, recyclerLunariteCost);
		Game.resources.takeResource(RESOURCE.Methane, recyclerMethaneCost);
		Game.resources.takeResource(RESOURCE.Meteorite, recyclerMeteoriteCost);
		recycler += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getPump(){
	if(getResource(RESOURCE.Metal) >= pumpMetalCost * T1Price && getResource(RESOURCE.Gem) >= pumpGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Metal, pumpMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, pumpGemCost * T1Price);
		pump += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPumpjack(){
	if(getResource(RESOURCE.Metal) >= pumpjackMetalCost && getResource(RESOURCE.Gem) >= pumpjackGemCost && getResource(RESOURCE.Oil) >= pumpjackOilCost){
		Game.resources.takeResource(RESOURCE.Metal, pumpjackMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, pumpjackGemCost);
		Game.resources.takeResource(RESOURCE.Oil, pumpjackOilCost);
		pumpjack += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getOilField(){
	if(getResource(RESOURCE.Lunarite) >= oilFieldLunariteCost && getResource(RESOURCE.Titanium) >= oilFieldTitaniumCost && getResource(RESOURCE.Silicon) >= oilFieldSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, oilFieldLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, oilFieldTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, oilFieldSiliconCost);
		oilField += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getOilRig(){
	if(getResource(RESOURCE.Lunarite) >= oilRigLunariteCost && getResource(RESOURCE.Titanium) >= oilRigTitaniumCost && getResource(RESOURCE.Meteorite) >= oilRigMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, oilRigLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, oilRigTitaniumCost);
		Game.resources.takeResource(RESOURCE.Meteorite, oilRigMeteoriteCost);
		oilRig += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getMiner(){
	if(getResource(RESOURCE.Metal) >= minerMetalCost * T1Price && getResource(RESOURCE.Wood) >= minerWoodCost){
		Game.resources.takeResource(RESOURCE.Metal, minerMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Wood, minerWoodCost * T1Price);
		miner += 1;
		updateCost();
		if(Game.tech.tabUnlocked === false){
			if(miner >= 1){
				Game.tech.tabUnlocked = true;
				newUnlock("research");
				Game.notifySuccess("New Tab!", "You've unlocked the Research Tab!");
			}
		}

		Game.statistics.add('tierOwned1');
	}
}

function getHeavyDrill(){
	if(getResource(RESOURCE.Metal) >= heavyDrillMetalCost && getResource(RESOURCE.Gem) >= heavyDrillGemCost && getResource(RESOURCE.Oil) >= heavyDrillOilCost){
		Game.resources.takeResource(RESOURCE.Metal, heavyDrillMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, heavyDrillGemCost);
		Game.resources.takeResource(RESOURCE.Oil, heavyDrillOilCost);
		heavyDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getGigaDrill(){
	if(getResource(RESOURCE.Lunarite) >= gigaDrillLunariteCost && getResource(RESOURCE.Gem) >= gigaDrillGemCost && getResource(RESOURCE.Silicon) >= gigaDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, gigaDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, gigaDrillGemCost);
		Game.resources.takeResource(RESOURCE.Silicon, gigaDrillSiliconCost);
		gigaDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getQuantumDrill(){
	if(getResource(RESOURCE.Lunarite) >= quantumDrillLunariteCost && getResource(RESOURCE.Gold) >= quantumDrillGoldCost && getResource(RESOURCE.Meteorite) >= quantumDrillMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, quantumDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gold, quantumDrillGoldCost);
		Game.resources.takeResource(RESOURCE.Meteorite, quantumDrillMeteoriteCost);
		quantumDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getGemMiner(){
	if(getResource(RESOURCE.Metal) >= gemMinerMetalCost * T1Price && getResource(RESOURCE.Gem) >= gemMinerGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Metal, gemMinerMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, gemMinerGemCost * T1Price);
		gemMiner += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getAdvancedDrill(){
	if(getResource(RESOURCE.Metal) >= advancedDrillMetalCost && getResource(RESOURCE.Gem) >= advancedDrillGemCost && getResource(RESOURCE.Oil) >= advancedDrillOilCost){
		Game.resources.takeResource(RESOURCE.Metal, advancedDrillMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, advancedDrillGemCost);
		Game.resources.takeResource(RESOURCE.Oil, advancedDrillOilCost);
		advancedDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDiamondDrill(){
	if(getResource(RESOURCE.Lunarite) >= diamondDrillLunariteCost && getResource(RESOURCE.Gem) >= diamondDrillGemCost && getResource(RESOURCE.Silicon) >= diamondDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, diamondDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, diamondDrillGemCost);
		Game.resources.takeResource(RESOURCE.Silicon, diamondDrillSiliconCost);
		diamondDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getCarbyneDrill(){
	if(getResource(RESOURCE.Lunarite) >= carbyneDrillLunariteCost && getResource(RESOURCE.Gem) >= carbyneDrillGemCost && getResource(RESOURCE.Meteorite) >= carbyneDrillMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, carbyneDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, carbyneDrillGemCost);
		Game.resources.takeResource(RESOURCE.Meteorite, carbyneDrillMeteoriteCost);
		carbyneDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getWoodburner(){
	if(getResource(RESOURCE.Metal) >= woodburnerMetalCost * T1Price && getResource(RESOURCE.Wood) >= woodburnerWoodCost * T1Price){
		Game.resources.takeResource(RESOURCE.Metal, woodburnerMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Wood, woodburnerWoodCost * T1Price);
		woodburner += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getFurnace(){
	if(getResource(RESOURCE.Metal) >= furnaceMetalCost && getResource(RESOURCE.Wood) >= furnaceWoodCost && getResource(RESOURCE.Oil) >= furnaceOilCost){
		Game.resources.takeResource(RESOURCE.Metal, furnaceMetalCost);
		Game.resources.takeResource(RESOURCE.Wood, furnaceWoodCost);
		Game.resources.takeResource(RESOURCE.Oil, furnaceOilCost);
		furnace += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getKiln(){
	if(getResource(RESOURCE.Lunarite) >= kilnLunariteCost && getResource(RESOURCE.Gem) >= kilnGemCost && getResource(RESOURCE.Silicon) >= kilnSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, kilnLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, kilnGemCost);
		Game.resources.takeResource(RESOURCE.Silicon, kilnSiliconCost);
		kiln += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getFryer(){
	if(getResource(RESOURCE.Lunarite) >= fryerLunariteCost && getResource(RESOURCE.Lava) >= fryerLavaCost && getResource(RESOURCE.Meteorite) >= fryerMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, fryerLunariteCost);
		Game.resources.takeResource(RESOURCE.Lava, fryerLavaCost);
		Game.resources.takeResource(RESOURCE.Meteorite, fryerMeteoriteCost);
		fryer += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getWoodcutter(){
	if(getResource(RESOURCE.Metal) >= woodcutterMetalCost * T1Price && getResource(RESOURCE.Wood) >= woodcutterWoodCost * T1Price){
		Game.resources.takeResource(RESOURCE.Metal, woodcutterMetalCost * T1Price);
		Game.resources.takeResource(RESOURCE.Wood, woodcutterWoodCost * T1Price);
		woodcutter += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getLaserCutter(){
	if(getResource(RESOURCE.Metal) >= laserCutterMetalCost && getResource(RESOURCE.Gem) >= laserCutterGemCost && getResource(RESOURCE.Oil) >= laserCutterOilCost){
		Game.resources.takeResource(RESOURCE.Metal, laserCutterMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, laserCutterGemCost);
		Game.resources.takeResource(RESOURCE.Oil, laserCutterOilCost);
		laserCutter += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDeforester(){
	if(getResource(RESOURCE.Lunarite) >= deforesterLunariteCost && getResource(RESOURCE.Titanium) >= deforesterTitaniumCost && getResource(RESOURCE.Silicon) >= deforesterSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, deforesterLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, deforesterTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, deforesterSiliconCost);
		deforester += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getInfuser(){
	if(getResource(RESOURCE.Lunarite) >= infuserLunariteCost && getResource(RESOURCE.Oil) >= infuserOilCost && getResource(RESOURCE.Meteorite) >= infuserMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, infuserLunariteCost);
		Game.resources.takeResource(RESOURCE.Oil, infuserOilCost);
		Game.resources.takeResource(RESOURCE.Meteorite, infuserMeteoriteCost);
		infuser += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getMoonWorker(){
	if(getResource(RESOURCE.Gem) >= moonWorkerGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Gem, moonWorkerGemCost * T1Price);
		moonWorker += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getMoonDrill(){
	if(getResource(RESOURCE.Metal) >= moonDrillMetalCost && getResource(RESOURCE.Gem) >= moonDrillGemCost && getResource(RESOURCE.Oil) >= moonDrillOilCost){
		Game.resources.takeResource(RESOURCE.Metal, moonDrillMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, moonDrillGemCost);
		Game.resources.takeResource(RESOURCE.Oil, moonDrillOilCost);
		moonDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getMoonQuarry(){
	if(getResource(RESOURCE.Lunarite) >= moonQuarryLunariteCost && getResource(RESOURCE.Gem) >= moonQuarryGemCost && getResource(RESOURCE.Silicon) >= moonQuarrySiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, moonQuarryLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, moonQuarryGemCost);
		Game.resources.takeResource(RESOURCE.Silicon, moonQuarrySiliconCost);
		moonQuarry += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getPlanetExcavator(){
	if(getResource(RESOURCE.Titanium) >= planetExcavatorTitaniumCost && getResource(RESOURCE.Ice) >= planetExcavatorIceCost && getResource(RESOURCE.Meteorite) >= planetExcavatorMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Titanium, planetExcavatorTitaniumCost);
		Game.resources.takeResource(RESOURCE.Ice, planetExcavatorIceCost);
		Game.resources.takeResource(RESOURCE.Meteorite, planetExcavatorMeteoriteCost);
		planetExcavator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getVacuum(){
	if(getResource(RESOURCE.Lunarite) >= vacuumLunariteCost * T1Price && getResource(RESOURCE.Gem) >= vacuumGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, vacuumLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, vacuumGemCost * T1Price);
		vacuum += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSuctionExcavator(){
	if(getResource(RESOURCE.Lunarite) >= suctionExcavatorLunariteCost && getResource(RESOURCE.Gem) >= suctionExcavatorGemCost && getResource(RESOURCE.Oil) >= suctionExcavatorOilCost){
		Game.resources.takeResource(RESOURCE.Lunarite, suctionExcavatorLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, suctionExcavatorGemCost);
		Game.resources.takeResource(RESOURCE.Oil, suctionExcavatorOilCost);
		suctionExcavator += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getSpaceCow(){
	if(getResource(RESOURCE.Lunarite) >= spaceCowLunariteCost && getResource(RESOURCE.Titanium) >= spaceCowTitaniumCost && getResource(RESOURCE.Silicon) >= spaceCowSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, spaceCowLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, spaceCowTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, spaceCowSiliconCost);
		spaceCow += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getVent(){
	if(getResource(RESOURCE.Lunarite) >= ventLunariteCost && getResource(RESOURCE.Helium) >= ventHeliumCost && getResource(RESOURCE.Meteorite) >= ventMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, ventLunariteCost);
		Game.resources.takeResource(RESOURCE.Helium, ventHeliumCost);
		Game.resources.takeResource(RESOURCE.Meteorite, ventMeteoriteCost);
		vent += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getExplorer(){
	if(getResource(RESOURCE.Gem) >= explorerGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Gem, explorerGemCost * T1Price);
		explorer += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getLunariteDrill(){
	if(getResource(RESOURCE.Lunarite) >= lunariteDrillLunariteCost && getResource(RESOURCE.Gem) >= lunariteDrillGemCost && getResource(RESOURCE.Oil) >= lunariteDrillOilCost){
		Game.resources.takeResource(RESOURCE.Lunarite, lunariteDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, lunariteDrillGemCost);
		Game.resources.takeResource(RESOURCE.Oil, lunariteDrillOilCost);
		lunariteDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getPentaDrill(){
	if(getResource(RESOURCE.Lunarite) >= pentaDrillLunariteCost && getResource(RESOURCE.Gem) >= pentaDrillGemCost && getResource(RESOURCE.Silicon) >= pentaDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, pentaDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, pentaDrillGemCost);
		Game.resources.takeResource(RESOURCE.Silicon, pentaDrillSiliconCost);
		pentaDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getTitanDrill(){
	if(getResource(RESOURCE.Lunarite) >= titanDrillLunariteCost && getResource(RESOURCE.Gold) >= titanDrillGoldCost && getResource(RESOURCE.Meteorite) >= titanDrillMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, titanDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Gold, titanDrillGoldCost);
		Game.resources.takeResource(RESOURCE.Meteorite, titanDrillMeteoriteCost);
		titanDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getDroid(){
	if(getResource(RESOURCE.Lunarite) >= droidLunariteCost * T1Price && getResource(RESOURCE.Methane) >= droidMethaneCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, droidLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Methane, droidMethaneCost * T1Price);
		droid += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getDestroyer(){
	if(getResource(RESOURCE.Lunarite) >= destroyerLunariteCost && getResource(RESOURCE.Gem) >= destroyerGemCost && getResource(RESOURCE.Oil) >= destroyerOilCost){
		Game.resources.takeResource(RESOURCE.Lunarite, destroyerLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, destroyerGemCost);
		Game.resources.takeResource(RESOURCE.Oil, destroyerOilCost);
		destroyer += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDeathStar(){
	if(getResource(RESOURCE.Lunarite) >= deathStarLunariteCost && getResource(RESOURCE.Silver) >= deathStarSilverCost && getResource(RESOURCE.Silicon) >= deathStarSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, deathStarLunariteCost);
		Game.resources.takeResource(RESOURCE.Silver, deathStarSilverCost);
		Game.resources.takeResource(RESOURCE.Silicon, deathStarSiliconCost);
		deathStar += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getActuator(){
	if(getResource(RESOURCE.Lunarite) >= actuatorLunariteCost && getResource(RESOURCE.Helium) >= actuatorHeliumCost && getResource(RESOURCE.Meteorite) >= actuatorMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, actuatorLunariteCost);
		Game.resources.takeResource(RESOURCE.Helium, actuatorHeliumCost);
		Game.resources.takeResource(RESOURCE.Meteorite, actuatorMeteoriteCost);
		actuator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getScout(){
	if(getResource(RESOURCE.Lunarite) >= scoutLunariteCost * T1Price && getResource(RESOURCE.Titanium) >= scoutTitaniumCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, scoutLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Titanium, scoutTitaniumCost * T1Price);
		scout += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSpaceLaser(){
	if(getResource(RESOURCE.Lunarite) >= spaceLaserLunariteCost && getResource(RESOURCE.Gem) >= spaceLaserGemCost && getResource(RESOURCE.Oil) >= spaceLaserOilCost){
		Game.resources.takeResource(RESOURCE.Lunarite, spaceLaserLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, spaceLaserGemCost);
		Game.resources.takeResource(RESOURCE.Oil, spaceLaserOilCost);
		spaceLaser += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBertha(){
	if(getResource(RESOURCE.Lunarite) >= berthaLunariteCost && getResource(RESOURCE.Titanium) >= berthaTitaniumCost && getResource(RESOURCE.Silicon) >= berthaSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, berthaLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, berthaTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, berthaSiliconCost);
		bertha += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getCannon(){
	if(getResource(RESOURCE.Lunarite) >= cannonLunariteCost && getResource(RESOURCE.Oil) >= cannonOilCost && getResource(RESOURCE.Meteorite) >= cannonMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, cannonLunariteCost);
		Game.resources.takeResource(RESOURCE.Oil, cannonOilCost);
		Game.resources.takeResource(RESOURCE.Meteorite, cannonMeteoriteCost);
		cannon += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getBlowtorch(){
	if(getResource(RESOURCE.Lunarite) >= blowtorchLunariteCost * T1Price && getResource(RESOURCE.Titanium) >= blowtorchTitaniumCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, blowtorchLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Titanium, blowtorchTitaniumCost * T1Price);
		blowtorch += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getScorcher(){
	if(getResource(RESOURCE.Lunarite) >= scorcherLunariteCost && getResource(RESOURCE.Gem) >= scorcherGemCost && getResource(RESOURCE.Oil) >= scorcherOilCost){
		Game.resources.takeResource(RESOURCE.Lunarite, scorcherLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, scorcherGemCost);
		Game.resources.takeResource(RESOURCE.Oil, scorcherOilCost);
		scorcher += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getAnnihilator(){
	if(getResource(RESOURCE.Lunarite) >= annihilatorLunariteCost && getResource(RESOURCE.Gem) >= annihilatorGemCost && getResource(RESOURCE.Silver) >= annihilatorSilverCost){
		Game.resources.takeResource(RESOURCE.Lunarite, annihilatorLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, annihilatorGemCost);
		Game.resources.takeResource(RESOURCE.Silver, annihilatorSilverCost);
		annihilator += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getDesert(){
	if(getResource(RESOURCE.Lunarite) >= desertLunariteCost && getResource(RESOURCE.Silicon) >= desertSiliconCost && getResource(RESOURCE.Meteorite) >= desertMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, desertLunariteCost);
		Game.resources.takeResource(RESOURCE.Silicon, desertSiliconCost);
		Game.resources.takeResource(RESOURCE.Meteorite, desertMeteoriteCost);
		desert += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getCrucible(){
	if(getResource(RESOURCE.Lunarite) >= crucibleLunariteCost * T1Price && getResource(RESOURCE.Gem) >= crucibleGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, crucibleLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, crucibleGemCost * T1Price);
		crucible += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getExtractor(){
	if(getResource(RESOURCE.Lunarite) >= extractorLunariteCost && getResource(RESOURCE.Titanium) >= extractorTitaniumCost && getResource(RESOURCE.Silicon) >= extractorSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, extractorLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, extractorTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, extractorSiliconCost);
		extractor += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getExtruder(){
	if(getResource(RESOURCE.Lunarite) >= extruderLunariteCost && getResource(RESOURCE.Titanium) >= extruderTitaniumCost && getResource(RESOURCE.Silicon) >= extruderSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, extruderLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, extruderTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, extruderSiliconCost);
		extruder += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getVeluptuator(){
	if(getResource(RESOURCE.Lunarite) >= veluptuatorLunariteCost && getResource(RESOURCE.Gold) >= veluptuatorGoldCost && getResource(RESOURCE.Meteorite) >= veluptuatorMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, veluptuatorLunariteCost);
		Game.resources.takeResource(RESOURCE.Gold, veluptuatorGoldCost);
		Game.resources.takeResource(RESOURCE.Meteorite, veluptuatorMeteoriteCost);
		veluptuator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getCollector(){
	if(getResource(RESOURCE.Lunarite) >= collectorLunariteCost * T1Price && getResource(RESOURCE.Titanium) >= collectorTitaniumCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, collectorLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Titanium, collectorTitaniumCost * T1Price);
		collector += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getMagnet(){
	if(getResource(RESOURCE.Lunarite) >= magnetLunariteCost && getResource(RESOURCE.Titanium) >= magnetTitaniumCost && getResource(RESOURCE.Gold) >= magnetGoldCost){
		Game.resources.takeResource(RESOURCE.Lunarite, magnetLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, magnetTitaniumCost);
		Game.resources.takeResource(RESOURCE.Gold, magnetGoldCost);
		magnet += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getECell(){
	if(getResource(RESOURCE.Silver) >= eCellSilverCost && getResource(RESOURCE.Silicon) >= eCellSiliconCost && getResource(RESOURCE.Gold) >= eCellGoldCost){
		Game.resources.takeResource(RESOURCE.Silver, eCellSilverCost);
		Game.resources.takeResource(RESOURCE.Silicon, eCellSiliconCost);
		Game.resources.takeResource(RESOURCE.Gold, eCellGoldCost);
		eCell += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getHindenburg(){
	if(getResource(RESOURCE.Lunarite) >= hindenburgLunariteCost && getResource(RESOURCE.Methane) >= hindenburgMethaneCost && getResource(RESOURCE.Meteorite) >= hindenburgMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, hindenburgLunariteCost);
		Game.resources.takeResource(RESOURCE.Methane, hindenburgMethaneCost);
		Game.resources.takeResource(RESOURCE.Meteorite, hindenburgMeteoriteCost);
		hindenburg += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getDrone(){
	if(getResource(RESOURCE.Lunarite) >= droneLunariteCost * T1Price && getResource(RESOURCE.Silicon) >= droneSiliconCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, droneLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Silicon, droneSiliconCost * T1Price);
		drone += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getTanker(){
	if(getResource(RESOURCE.Lunarite) >= tankerLunariteCost && getResource(RESOURCE.Titanium) >= tankerTitaniumCost && getResource(RESOURCE.Silicon) >= tankerSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, tankerLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, tankerTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, tankerSiliconCost);
		tanker += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getCompressor(){
	if(getResource(RESOURCE.Lunarite) >= compressorLunariteCost && getResource(RESOURCE.Titanium) >= compressorTitaniumCost && getResource(RESOURCE.Silicon) >= compressorSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, compressorLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, compressorTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, compressorSiliconCost);
		compressor += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getSkimmer(){
	if(getResource(RESOURCE.Lunarite) >= skimmerLunariteCost && getResource(RESOURCE.Titanium) >= skimmerTitaniumCost && getResource(RESOURCE.Meteorite) >= skimmerMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, skimmerLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, skimmerTitaniumCost);
		Game.resources.takeResource(RESOURCE.Meteorite, skimmerMeteoriteCost);
		skimmer += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getIcePick(){
	if(getResource(RESOURCE.Lunarite) >= icePickLunariteCost * T1Price && getResource(RESOURCE.Gem) >= icePickGemCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, icePickLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Gem, icePickGemCost * T1Price);
		icePick += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getIceDrill(){
	if(getResource(RESOURCE.Lunarite) >= iceDrillLunariteCost && getResource(RESOURCE.Titanium) >= iceDrillTitaniumCost && getResource(RESOURCE.Silicon) >= iceDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, iceDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, iceDrillTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, iceDrillSiliconCost);
		iceDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getFreezer(){
	if(getResource(RESOURCE.Lunarite) >= freezerLunariteCost && getResource(RESOURCE.Titanium) >= freezerTitaniumCost && getResource(RESOURCE.Silicon) >= freezerSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, freezerLunariteCost);
		Game.resources.takeResource(RESOURCE.Titanium, freezerTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, freezerSiliconCost);
		freezer += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getMrFreeze(){
	if(getResource(RESOURCE.Wood) >= mrFreezeWoodCost && getResource(RESOURCE.Helium) >= mrFreezeHeliumCost && getResource(RESOURCE.Meteorite) >= mrFreezeMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Wood, mrFreezeWoodCost);
		Game.resources.takeResource(RESOURCE.Helium, mrFreezeHeliumCost);
		Game.resources.takeResource(RESOURCE.Meteorite, mrFreezeMeteoriteCost);
		mrFreeze += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getPrinter(){
	if(getResource(RESOURCE.Lunarite) >= printerLunariteCost * T1Price && getResource(RESOURCE.Silicon) >= printerSiliconCost * T1Price){
		Game.resources.takeResource(RESOURCE.Lunarite, printerLunariteCost * T1Price);
		Game.resources.takeResource(RESOURCE.Silicon, printerSiliconCost * T1Price);
		printer += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getWeb(){
	if(getResource(RESOURCE.Lunarite) >= webLunariteCost && getResource(RESOURCE.Uranium) >= webUraniumCost && getResource(RESOURCE.Silicon) >= webSiliconCost){
		Game.resources.takeResource(RESOURCE.Lunarite, webLunariteCost);
		Game.resources.takeResource(RESOURCE.Uranium, webUraniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, webSiliconCost);
		web += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getSmasher(){
	if(getResource(RESOURCE.Silicon) >= smasherSiliconCost && getResource(RESOURCE.Silver) >= smasherSilverCost && getResource(RESOURCE.Gem) >= smasherGemCost){
		Game.resources.takeResource(RESOURCE.Silicon, smasherSiliconCost);
		Game.resources.takeResource(RESOURCE.Silver, smasherSilverCost);
		Game.resources.takeResource(RESOURCE.Gem, smasherGemCost);
		smasher += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getNebulous(){
	if(getResource(RESOURCE.Lunarite) >= nebulousLunariteCost && getResource(RESOURCE.Lava) >= nebulousLavaCost && getResource(RESOURCE.Gold) >= nebulousGoldCost){
		Game.resources.takeResource(RESOURCE.Lunarite, nebulousLunariteCost);
		Game.resources.takeResource(RESOURCE.Lava, nebulousLavaCost);
		Game.resources.takeResource(RESOURCE.Gold, nebulousGoldCost);
		nebulous += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}


/********************
** Tier 5 Machines **
********************/

function getPlanetNuke(){
	if(getResource(RESOURCE.Titanium) >= planetNukeTitaniumCost && getResource(RESOURCE.Silicon) >= planetNukeSiliconCost && getResource(RESOURCE.Ice) >= planetNukeIceCost){
		Game.resources.takeResource(RESOURCE.Titanium, planetNukeTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, planetNukeSiliconCost);
		Game.resources.takeResource(RESOURCE.Ice, planetNukeIceCost);
		planetNuke += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getCondensator(){
	if(getResource(RESOURCE.Lunarite) >= condensatorLunariteCost && getResource(RESOURCE.Gem) >= condensatorGemCost && getResource(RESOURCE.Ice) >= condensatorIceCost){
		Game.resources.takeResource(RESOURCE.Lunarite, condensatorLunariteCost);
		Game.resources.takeResource(RESOURCE.Gem, condensatorGemCost);
		Game.resources.takeResource(RESOURCE.Ice, condensatorIceCost);
		condensator += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getFossilator(){
	if(getResource(RESOURCE.Uranium) >= fossilatorUraniumCost && getResource(RESOURCE.Charcoal) >= fossilatorCharcoalCost && getResource(RESOURCE.Lava) >= fossilatorLavaCost){
		Game.resources.takeResource(RESOURCE.Uranium, fossilatorUraniumCost);
		Game.resources.takeResource(RESOURCE.Charcoal, fossilatorCharcoalCost);
		Game.resources.takeResource(RESOURCE.Lava, fossilatorLavaCost);
		fossilator += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getMultiDrill(){
	if(getResource(RESOURCE.Titanium) >= multiDrillTitaniumCost && getResource(RESOURCE.Gold) >= multiDrillGoldCost && getResource(RESOURCE.Oil) >= multiDrillOilCost){
		Game.resources.takeResource(RESOURCE.Titanium, multiDrillTitaniumCost);
		Game.resources.takeResource(RESOURCE.Gold, multiDrillGoldCost);
		Game.resources.takeResource(RESOURCE.Oil, multiDrillOilCost);
		multiDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getDiamondChamber(){
	if(getResource(RESOURCE.Uranium) >= diamondChamberUraniumCost && getResource(RESOURCE.Charcoal) >= diamondChamberCharcoalCost && getResource(RESOURCE.Meteorite) >= diamondChamberMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Uranium, diamondChamberUraniumCost);
		Game.resources.takeResource(RESOURCE.Charcoal, diamondChamberCharcoalCost);
		Game.resources.takeResource(RESOURCE.Meteorite, diamondChamberMeteoriteCost);
		diamondChamber += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getMicroPollutor(){
	if(getResource(RESOURCE.Metal) >= microPollutorMetalCost && getResource(RESOURCE.Wood) >= microPollutorWoodCost && getResource(RESOURCE.Lava) >= microPollutorLavaCost){
		Game.resources.takeResource(RESOURCE.Metal, microPollutorMetalCost);
		Game.resources.takeResource(RESOURCE.Wood, microPollutorWoodCost);
		Game.resources.takeResource(RESOURCE.Lava, microPollutorLavaCost);
		microPollutor += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getForest(){
	if(getResource(RESOURCE.Metal) >= forestMetalCost && getResource(RESOURCE.Gem) >= forestGemCost && getResource(RESOURCE.Hydrogen) >= forestHydrogenCost){
		Game.resources.takeResource(RESOURCE.Metal, forestMetalCost);
		Game.resources.takeResource(RESOURCE.Gem, forestGemCost);
		Game.resources.takeResource(RESOURCE.Hydrogen, forestHydrogenCost);
		forest += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getTardis(){
	if(getResource(RESOURCE.Titanium) >= tardisTitaniumCost && getResource(RESOURCE.Silicon) >= tardisSiliconCost && getResource(RESOURCE.Meteorite) >= tardisMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Titanium, tardisTitaniumCost);
		Game.resources.takeResource(RESOURCE.Silicon, tardisSiliconCost);
		Game.resources.takeResource(RESOURCE.Meteorite, tardisMeteoriteCost);
		tardis += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getCloner(){
	if(getResource(RESOURCE.Titanium) >= clonerTitaniumCost && getResource(RESOURCE.Gold) >= clonerGoldCost && getResource(RESOURCE.Methane) >= clonerMethaneCost){
		Game.resources.takeResource(RESOURCE.Titanium, clonerTitaniumCost);
		Game.resources.takeResource(RESOURCE.Gold, clonerGoldCost);
		Game.resources.takeResource(RESOURCE.Methane, clonerMethaneCost);
		cloner += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getInterCow(){
	if(getResource(RESOURCE.Lunarite) >= interCowLunariteCost && getResource(RESOURCE.Gold) >= interCowGoldCost && getResource(RESOURCE.Hydrogen) >= interCowHydrogenCost){
		Game.resources.takeResource(RESOURCE.Lunarite, interCowLunariteCost);
		Game.resources.takeResource(RESOURCE.Gold, interCowGoldCost);
		Game.resources.takeResource(RESOURCE.Hydrogen, interCowHydrogenCost);
		interCow += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getClub(){
	if(getResource(RESOURCE.Uranium) >= clubUraniumCost && getResource(RESOURCE.Wood) >= clubWoodCost && getResource(RESOURCE.Helium) >= clubHeliumCost){
		Game.resources.takeResource(RESOURCE.Uranium, clubUraniumCost);
		Game.resources.takeResource(RESOURCE.Wood, clubWoodCost);
		Game.resources.takeResource(RESOURCE.Helium, clubHeliumCost);
		club += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getPhilosopher(){
	if(getResource(RESOURCE.Metal) >= philosopherMetalCost && getResource(RESOURCE.Silver) >= philosopherSilverCost && getResource(RESOURCE.Meteorite) >= philosopherMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Metal, philosopherMetalCost);
		Game.resources.takeResource(RESOURCE.Silver, philosopherSilverCost);
		Game.resources.takeResource(RESOURCE.Meteorite, philosopherMeteoriteCost);
		philosopher += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getWerewolf(){
	if(getResource(RESOURCE.Uranium) >= werewolfUraniumCost && getResource(RESOURCE.Gem) >= werewolfGemCost && getResource(RESOURCE.Methane) >= werewolfMethaneCost){
		Game.resources.takeResource(RESOURCE.Uranium, werewolfUraniumCost);
		Game.resources.takeResource(RESOURCE.Gem, werewolfGemCost);
		Game.resources.takeResource(RESOURCE.Methane, werewolfMethaneCost);
		werewolf += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getHarvester(){
	if(getResource(RESOURCE.Lunarite) >= harvesterLunariteCost && getResource(RESOURCE.Wood) >= harvesterWoodCost && getResource(RESOURCE.Oil) >= harvesterOilCost){
		Game.resources.takeResource(RESOURCE.Lunarite, harvesterLunariteCost);
		Game.resources.takeResource(RESOURCE.Wood, harvesterWoodCost);
		Game.resources.takeResource(RESOURCE.Oil, harvesterOilCost);
		harvester += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getCage(){
	if(getResource(RESOURCE.Lunarite) >= cageLunariteCost && getResource(RESOURCE.Silicon) >= cageSiliconCost && getResource(RESOURCE.Meteorite) >= cageMeteoriteCost){
		Game.resources.takeResource(RESOURCE.Lunarite, cageLunariteCost);
		Game.resources.takeResource(RESOURCE.Silicon, cageSiliconCost);
		Game.resources.takeResource(RESOURCE.Meteorite, cageMeteoriteCost);
		cage += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getOverexchange(){
	if(getResource(RESOURCE.Metal) >= overexchangeMetalCost && getResource(RESOURCE.Silver) >= overexchangeSilverCost && getResource(RESOURCE.Helium) >= overexchangeHeliumCost){
		Game.resources.takeResource(RESOURCE.Metal, overexchangeMetalCost);
		Game.resources.takeResource(RESOURCE.Silver, overexchangeSilverCost);
		Game.resources.takeResource(RESOURCE.Helium, overexchangeHeliumCost);
		overexchange += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}
