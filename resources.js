function checkStorages(){
	if(storageNote.state == "closed"){

		if (Game.constants.enableNotifications === false){
			return;
		}
		if (Game.constants.enableDataDrivenResources === false){
			return;
		}

		var resourcesFull = 0;
		for (var id in Game.resources.entries){

			if(Game.resources.getResourceData(id).current >= Game.resources.getResourceData(id).capacity){
				resourcesFull += 1;
			}

			// Fallback if data driven doesn't work, but this needs to be tested

			// if(id != "plasma" || "energy" || "science"){
			// 	if(window[id] >= window[id + "Storage"]){
			// 		resourcesFull += 1;
			// 	}
			// }

			// if(id == "energy"){
			// 	if(window[id] >= getMaxEnergy()){
			// 		resourcesFull += 1;
			// 	}
			// }

			// if(id == "plasma"){
			// 	if(window[id] >= 100000){
			// 		resourcesFull += 1;
			// 	}
			// }

		}
		if(resourcesFull >= Game.statistics.get("resourcesUnlocked")){
			Game.notifyStorage();
		}
	}
}

function gainResources(){
	if(energy + energyps/10 <= getMaxEnergy()){
		energy += energyps/10;
	}
	else{
		energy = getMaxEnergy();
	}
	if(uranium + uraniumps/10 < uraniumStorage){
		uranium += uraniumps/10;
	}
	else{
		uranium = uraniumStorage;
	}
	if(metal + metalps/10 < metalStorage){
		metal += metalps/10;
	}
	else{
		metal = metalStorage;
	}
	if(gem + gemps/10 < gemStorage){
		gem += gemps/10;
	}
	else{
		gem = gemStorage;
	}
	science += scienceps/10;
	science = Math.round(science*100)/100;
	if(chemicalPlantToggled === true){
		if(oil >= chemicalPlant*20/10 && charcoal >= chemicalPlant*20/10){
			oil -= chemicalPlant*20/10;
			charcoal -= chemicalPlant*20/10;
			rocketFuel += chemicalPlant/5/10;
		}
	}
	if(spaceMetal + spaceMetalps/10 < spaceMetalStorage){
		spaceMetal += spaceMetalps/10;
	}
	else{
		spaceMetal = spaceMetalStorage;
	}
	if(methane + methaneps/10 < methaneStorage){
		methane += methaneps/10;
	}
	else{
		methane = methaneStorage;
	}
	if(titanium + titaniumps/10 < titaniumStorage){
		titanium += titaniumps/10;
	}
	else{
		titanium = titaniumStorage;
	}
	if(gold + goldps/10 < goldStorage){
		gold += goldps/10;
	}
	else{
		gold = goldStorage;
	}
	if(silver + silverps/10 < silverStorage){
		silver += silverps/10;
	}
	else{
		silver = silverStorage;
	}
	if(silicon + siliconps/10 < siliconStorage){
		silicon += siliconps/10;
	}
	else{
		silicon = siliconStorage;
	}
	if(lava + lavaps/10 < lavaStorage){
		lava += lavaps/10;
	}
	else{
		lava = lavaStorage;
	}
	if(hydrogen + hydrogenps/10 < hydrogenStorage){
		hydrogen += hydrogenps/10;
	}
	else{
		hydrogen = hydrogenStorage;
	}
	if(hydrogen >= hydrogenStorage){
		document.getElementById("hydrogen").className = "green";
	}
	if(helium + heliumps/10 < heliumStorage){
		helium += heliumps/10;
	}
	else{
		helium = heliumStorage;
	}
	if(helium >= heliumStorage){
		document.getElementById("helium").className = "green";
	}
	if(ice + iceps/10 < iceStorage){
		ice += iceps/10;
	}
	else{
		ice = iceStorage;
	}
	if(oil + oilps/10 < oilStorage){
		oil += oilps/10;
	}
	else{
		oil = oilStorage;
	}

	
	document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput) - (kiln*56) - (fryer*148));
	if(charcoalToggled === true){
		if(chemicalPlantToggled === true){
			document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine - (chemicalPlant*20));
		}
		else{
			document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine);
		}
	}
	else{
		if(chemicalPlantToggled === true){
			document.getElementById("charcoalps").innerHTML = commafy(0 - charcoalEngine - (chemicalPlant*20));
		}
		else{
			document.getElementById("charcoalps").innerHTML = commafy(0 - charcoalEngine);
		}
	}
	
	if(charcoalToggled){
		if(charcoal + charcoalps/10 < charcoalStorage){
			if(wood >= woodInput/10){
				charcoal += charcoalps/10;
	 			wood -= woodInput/10;
			}
		}
		else{
			charcoal = charcoalStorage;
			document.getElementById("woodps").innerHTML = commafy(woodps);
			document.getElementById("charcoal").className = "green";
		}
	}
	else{
		document.getElementById("woodps").innerHTML = commafy(woodps);
	}
	
	if(wood + woodps/10 < woodStorage){
		wood += woodps/10;
	}
	else{
		wood = woodStorage;
	}
	if(methane >= methaneStorage){
		document.getElementById("methane").className = "green";
	}
	if(uranium >= uraniumStorage){
		document.getElementById("uranium").className = "green";
	}
	if(lava >= lavaStorage){
		document.getElementById("lava").className = "green";
	}
	if(meteorite >= meteoriteStorage){
		document.getElementById("meteorite").className = "green";
	}
}

function getMaxEnergy() {
	return 100000 + (50000 * battery) + (500000 * batteryT2);
}

// Gain Buttons

function gainPlasma(){
	if(energy >= 1000 && hydrogen >= 10){
		plasma += 1;
		energy -= 1000;
		hydrogen -= 10;
		refresh();
		Game.statistics.add('manualResources');
	}
}

function gainUranium(){
	if(uranium < uraniumStorage){
		uranium += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= 2){
		wood -= 2;
		charcoal += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainSpaceMetal(){
	if(spaceMetal < spaceMetalStorage){
		spaceMetal += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainMethane(){
	if(methane < methaneStorage){
		methane += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainTitanium(){
	if(titanium < titaniumStorage){
		titanium += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainGold(){
	if(gold < goldStorage){
		gold += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainSilver(){
	if(silver < silverStorage){
		silver += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainSilicon(){
	if(silicon < siliconStorage){
		silicon += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainLava(){
	if(lava < lavaStorage){
		lava += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainHydrogen(){
	if(hydrogen < hydrogenStorage){
		hydrogen += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainHelium(){
	if(helium < heliumStorage){
		helium += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainIce(){
	if(ice < iceStorage){
		ice += 1;
		refresh();
        Game.statistics.add('manualResources');
	}
}

function gainMeteorite(){
	if(meteorite < meteoriteStorage){
		if(plasma >= 3){
			plasma -= 3;
			meteorite += 1;
			refresh();
            Game.statistics.add('manualResources');
		}
	}
}

// Resources Tab

function upgradeUraniumStorage(){
	if(uranium >= uraniumStorage && spaceMetal >= uraniumStorage/2.5){
		uranium -= uraniumStorage;
		spaceMetal -= uraniumStorage/2.5;
		uraniumStorage = uraniumNextStorage;
		uraniumNextStorage *= 2;
		refresh();
		document.getElementById("uraniumStorage").innerHTML = commafy(uraniumStorage);
		document.getElementById("uraniumNextStorage").innerHTML = commafy(uraniumNextStorage);
		document.getElementById("uraniumStorageCost").innerHTML = commafy(uraniumStorage);
		document.getElementById("uraniumStorageSpaceMetalCost").innerHTML = commafy(uraniumStorage/2.5);
	}
}

function upgradeOilStorage(){
	if(oil >= oilStorage && metal >= oilStorage/2.5){
		oil -= oilStorage;
		metal -= oilStorage/2.5;
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
		refresh();
		document.getElementById("oilStorage").innerHTML = commafy(oilStorage);
		document.getElementById("oilNextStorage").innerHTML = commafy(oilNextStorage);
		document.getElementById("oilStorageCost").innerHTML = commafy(oilStorage);
		document.getElementById("oilStorageMetalCost").innerHTML = commafy(oilStorage/2.5);
	}
}

function upgradeMetalStorage(){
	if(metal >= metalStorage){
		metal -= metalStorage;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
		refresh();
		document.getElementById("metalStorage").innerHTML = commafy(metalStorage);
		document.getElementById("metalNextStorage").innerHTML = commafy(metalNextStorage);
		document.getElementById("metalStorageCost").innerHTML = commafy(metalStorage);
	}
}

function upgradeGemStorage(){
	if(gem >= gemStorage && metal >= gemStorage/2.5){
		gem -= gemStorage;
		metal -= gemStorage/2.5;
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
		refresh();
		document.getElementById("gemStorage").innerHTML = commafy(gemStorage);
		document.getElementById("gemNextStorage").innerHTML = commafy(gemNextStorage);
		document.getElementById("gemStorageCost").innerHTML = commafy(gemStorage);
		document.getElementById("gemStorageMetalCost").innerHTML = commafy(gemStorage/2.5);
	}
}

function upgradeCharcoalStorage(){
	if(charcoal >= charcoalStorage && metal >= charcoalStorage/2.5){
		charcoal -= charcoalStorage;
		metal -= charcoalStorage/2.5;
		charcoalStorage = charcoalNextStorage;
		charcoalNextStorage *= 2;
		refresh();
		document.getElementById("charcoalStorage").innerHTML = commafy(charcoalStorage);
		document.getElementById("charcoalNextStorage").innerHTML = commafy(charcoalNextStorage);
		document.getElementById("charcoalStorageCost").innerHTML = commafy(charcoalStorage);
		document.getElementById("charcoalStorageMetalCost").innerHTML = commafy(charcoalStorage/2.5);
	}
}

function upgradeWoodStorage(){
	if(wood >= woodStorage && metal >= woodStorage/2.5){
		wood -= woodStorage;
		metal -= woodStorage/2.5;
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
		refresh();
		document.getElementById("woodStorage").innerHTML = commafy(woodStorage);
		document.getElementById("woodNextStorage").innerHTML = commafy(woodNextStorage);
		document.getElementById("woodStorageCost").innerHTML = commafy(woodStorage);
		document.getElementById("woodStorageMetalCost").innerHTML = commafy(woodStorage/2.5);
	}
}

function upgradeSpaceMetalStorage(){
	if(spaceMetal >= spaceMetalStorage && metal >= spaceMetalStorage*4){
		spaceMetal -= spaceMetalStorage;
		metal -= spaceMetalStorage*4;
		spaceMetalStorage = spaceMetalNextStorage;
		spaceMetalNextStorage *= 2;
		refresh();
		document.getElementById("spaceMetalStorage").innerHTML = commafy(spaceMetalStorage);
		document.getElementById("spaceMetalNextStorage").innerHTML = commafy(spaceMetalNextStorage);
		document.getElementById("spaceMetalStorageCost").innerHTML = commafy(spaceMetalStorage);
		document.getElementById("spaceMetalStorageMetalCost").innerHTML = commafy(spaceMetalStorage*4);
	}
}

function upgradeMethaneStorage(){
	if(methane >= methaneStorage && spaceMetal >= methaneStorage/2.5){
		methane -= methaneStorage;
		spaceMetal -= methaneStorage/2.5;
		methaneStorage = methaneNextStorage;
		methaneNextStorage *= 2;
		refresh();
		document.getElementById("methaneStorage").innerHTML = commafy(methaneStorage);
		document.getElementById("methaneNextStorage").innerHTML = commafy(methaneNextStorage);
		document.getElementById("methaneStorageCost").innerHTML = commafy(methaneStorage);
		document.getElementById("methaneStorageSpaceMetalCost").innerHTML = commafy(methaneStorage/2.5);
	}
}

function upgradeTitaniumStorage(){
	if(titanium >= titaniumStorage && spaceMetal >= titaniumStorage/2.5){
		titanium -= titaniumStorage;
		spaceMetal -= titaniumStorage/2.5;
		titaniumStorage = titaniumNextStorage;
		titaniumNextStorage *= 2;
		refresh();
		document.getElementById("titaniumStorage").innerHTML = commafy(titaniumStorage);
		document.getElementById("titaniumNextStorage").innerHTML = commafy(titaniumNextStorage);
		document.getElementById("titaniumStorageCost").innerHTML = commafy(titaniumStorage);
		document.getElementById("titaniumStorageSpaceMetalCost").innerHTML = commafy(titaniumStorage/2.5);
	}
}

function upgradeGoldStorage(){
	if(gold >= goldStorage && spaceMetal >= goldStorage/2.5){
		gold -= goldStorage;
		spaceMetal -= goldStorage/2.5;
		goldStorage = goldNextStorage;
		goldNextStorage *= 2;
		refresh();
		document.getElementById("goldStorage").innerHTML = commafy(goldStorage);
		document.getElementById("goldNextStorage").innerHTML = commafy(goldNextStorage);
		document.getElementById("goldStorageCost").innerHTML = commafy(goldStorage);
		document.getElementById("goldStorageSpaceMetalCost").innerHTML = commafy(goldStorage/2.5);
	}
}

function upgradeSilverStorage(){
	if(silver >= silverStorage && spaceMetal >= silverStorage/2.5){
		silver -= silverStorage;
		spaceMetal -= silverStorage/2.5;
		silverStorage = silverNextStorage;
		silverNextStorage *= 2;
		refresh();
		document.getElementById("silverStorage").innerHTML = commafy(silverStorage);
		document.getElementById("silverNextStorage").innerHTML = commafy(silverNextStorage);
		document.getElementById("silverStorageCost").innerHTML = commafy(silverStorage);
		document.getElementById("silverStorageSpaceMetalCost").innerHTML = commafy(silverStorage/2.5);
	}
}

function upgradeSiliconStorage(){
	if(silicon >= siliconStorage && spaceMetal >= siliconStorage/2.5){
		silicon -= siliconStorage;
		spaceMetal -= siliconStorage/2.5;
		siliconStorage = siliconNextStorage;
		siliconNextStorage *= 2;
		refresh();
		document.getElementById("siliconStorage").innerHTML = commafy(siliconStorage);
		document.getElementById("siliconNextStorage").innerHTML = commafy(siliconNextStorage);
		document.getElementById("siliconStorageCost").innerHTML = commafy(siliconStorage);
		document.getElementById("siliconStorageSpaceMetalCost").innerHTML = commafy(siliconStorage/2.5);
	}
}

function upgradeLavaStorage(){
	if(lava >= lavaStorage && spaceMetal >= lavaStorage/2.5){
		lava -= lavaStorage;
		spaceMetal -= lavaStorage/2.5;
		lavaStorage = lavaNextStorage;
		lavaNextStorage *= 2;
		refresh();
		document.getElementById("lavaStorage").innerHTML = commafy(lavaStorage);
		document.getElementById("lavaNextStorage").innerHTML = commafy(lavaNextStorage);
		document.getElementById("lavaStorageCost").innerHTML = commafy(lavaStorage);
		document.getElementById("lavaStorageSpaceMetalCost").innerHTML = commafy(lavaStorage/2.5);
	}
}

function upgradeHydrogenStorage(){
	if(hydrogen >= hydrogenStorage && spaceMetal >= hydrogenStorage/2.5){
		hydrogen -= hydrogenStorage;
		spaceMetal -= hydrogenStorage/2.5;
		hydrogenStorage = hydrogenNextStorage;
		hydrogenNextStorage *= 2;
		refresh();
		document.getElementById("hydrogenStorage").innerHTML = commafy(hydrogenStorage);
		document.getElementById("hydrogenNextStorage").innerHTML = commafy(hydrogenNextStorage);
		document.getElementById("hydrogenStorageCost").innerHTML = commafy(hydrogenStorage);
		document.getElementById("hydrogenStorageSpaceMetalCost").innerHTML = commafy(hydrogenStorage/2.5);
	}
}

function upgradeHeliumStorage(){
	if(helium >= heliumStorage && spaceMetal >= heliumStorage/2.5){
		helium -= heliumStorage;
		spaceMetal -= heliumStorage/2.5;
		heliumStorage = heliumNextStorage;
		heliumNextStorage *= 2;
		refresh();
		document.getElementById("heliumStorage").innerHTML = commafy(heliumStorage);
		document.getElementById("heliumNextStorage").innerHTML = commafy(heliumNextStorage);
		document.getElementById("heliumStorageCost").innerHTML = commafy(heliumStorage);
		document.getElementById("heliumStorageSpaceMetalCost").innerHTML = commafy(heliumStorage/2.5);
	}
}

function upgradeIceStorage(){
	if(ice >= iceStorage && spaceMetal >= iceStorage/2.5){
		ice -= iceStorage;
		spaceMetal -= iceStorage/2.5;
		iceStorage = iceNextStorage;
		iceNextStorage *= 2;
		refresh();
		document.getElementById("iceStorage").innerHTML = commafy(iceStorage);
		document.getElementById("iceNextStorage").innerHTML = commafy(iceNextStorage);
		document.getElementById("iceStorageCost").innerHTML = commafy(iceStorage);
		document.getElementById("iceStorageSpaceMetalCost").innerHTML = commafy(iceStorage/2.5);
	}
}

function upgradeMeteoriteStorage(){
	if(meteorite >= meteoriteStorage && spaceMetal >= meteoriteStorage*4){
		meteorite -= meteoriteStorage;
		spaceMetal -= meteoriteStorage*4;
		meteoriteStorage = meteoriteNextStorage;
		meteoriteNextStorage *= 2;
		refresh();
		document.getElementById("meteoriteStorage").innerHTML = commafy(meteoriteStorage);
		document.getElementById("meteoriteNextStorage").innerHTML = commafy(meteoriteNextStorage);
		document.getElementById("meteoriteStorageCost").innerHTML = commafy(meteoriteStorage);
		document.getElementById("meteoriteStorageSpaceMetalCost").innerHTML = commafy(meteoriteStorage*4);
	}
}

function toggleCharcoal(){
	if(charcoalToggled === true){
		charcoalToggled = false;
		document.getElementById("charcoalToggled").innerHTML = "On";
	}
	else{
		charcoalToggled = true;
		document.getElementById("charcoalToggled").innerHTML = "Off";
	}
}

function toggleHeater(){
	if(heaterToggled === true){
		heaterToggled = false;
		document.getElementById("heaterToggled").innerHTML = "On";
	}
	else{
		heaterToggled = true;
		document.getElementById("heaterToggled").innerHTML = "Off";
	}
}

function togglePlasmatic(){
	if(plasmaticToggled === true){
		plasmaticToggled = false;
		document.getElementById("plasmaticToggled").innerHTML = "On";
	}
	else{
		plasmaticToggled = true;
		document.getElementById("plasmaticToggled").innerHTML = "Off";
	}
}

function toggleChemicalPlant(){
	if(chemicalPlantToggled === true){
		chemicalPlantToggled = false;
		document.getElementById("chemicalPlantToggled").innerHTML = "On";
	}
	else{
		chemicalPlantToggled = true;
		document.getElementById("chemicalPlantToggled").innerHTML = "Off";
	}
}

function toggleMeteorite(){
	if(meteoriteToggled === true){
		meteoriteToggled = false;
		document.getElementById("meteoriteToggled").innerHTML = "On";
	}
	else{
		meteoriteToggled = true;
		document.getElementById("meteoriteToggled").innerHTML = "Off";
	}
}

function destroyMachine(machine, id){
	if(window[id] > 0){
		window[id] -= 1;
		document.getElementById(id).innerHTML = window[id];
		// for(var i = 0; i < resoures.length; I++){
		// 	if(typeof window[id + resources[i]] !== "undefined"){
		// 		window[id + resources[i]] = Math.floor(XXXX * Math.pow(1.1,window[id]));
		// 	}
		// }
		// refreshUI();
	}
}

function getHeater(){
	if(spaceMetal >= heaterSpaceMetalCost && gem >= heaterGemCost && silicon >= heaterSiliconCost){
		spaceMetal -= heaterSpaceMetalCost;
		gem -= heaterGemCost;
		silicon -= heaterSiliconCost;
		heater += 1;
		heaterSpaceMetalCost = Math.floor(75000 * Math.pow(1.1,heater));
		heaterGemCost = Math.floor(68000 * Math.pow(1.1,heater));
		heaterSiliconCost = Math.floor(59000 * Math.pow(1.1,heater));
		document.getElementById("heater").innerHTML = heater;
		document.getElementById("heaterSpaceMetalCost").innerHTML = commafy(heaterSpaceMetalCost);
		document.getElementById("heaterGemCost").innerHTML = commafy(heaterGemCost);
		document.getElementById("heaterSiliconCost").innerHTML = commafy(heaterSiliconCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getPlasmatic(){
	if(spaceMetal >= plasmaticSpaceMetalCost && silicon >= plasmaticSiliconCost && meteorite >= plasmaticMeteoriteCost){
		spaceMetal -= plasmaticSpaceMetalCost;
		silicon -= plasmaticSiliconCost;
		meteorite -= plasmaticMeteoriteCost;
		plasmatic += 1;
		plasmaticSpaceMetalCost = Math.floor(810000 * Math.pow(1.1,plasmatic));
		plasmaticSiliconCost = Math.floor(720000 * Math.pow(1.1,plasmatic));
		plasmaticMeteoriteCost = Math.floor(970 * Math.pow(1.1,plasmatic));
		document.getElementById("plasmatic").innerHTML = plasmatic;
		document.getElementById("plasmaticSpaceMetalCost").innerHTML = commafy(plasmaticSpaceMetalCost);
		document.getElementById("plasmaticSiliconCost").innerHTML = commafy(plasmaticSiliconCost);
		document.getElementById("plasmaticMeteoriteCost").innerHTML = commafy(plasmaticMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getBattery(){
	if(metal >= batteryMetalCost && gem >= batteryGemCost && spaceMetal >= batterySpaceMetalCost ){
		metal -= batteryMetalCost;
		gem -= batteryGemCost;
		spaceMetal -= batterySpaceMetalCost;
		battery += 1;
		batteryMetalCost = Math.floor(50000 * Math.pow(1.1,battery));
		batteryGemCost = Math.floor(50000 * Math.pow(1.1,battery));
		batterySpaceMetalCost = Math.floor(30000 * Math.pow(1.1,battery));
		document.getElementById("battery").innerHTML = battery;
		document.getElementById("energyStorage").innerHTML = commafy(getMaxEnergy());
		document.getElementById("batteryMetalCost").innerHTML = commafy(batteryMetalCost);
		document.getElementById("batteryGemCost").innerHTML = commafy(batteryGemCost);
		document.getElementById("batterySpaceMetalCost").innerHTML = commafy(batterySpaceMetalCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getBatteryT2(){
	if(metal >= batteryT2MetalCost && gem >= batteryT2GemCost && spaceMetal >= batteryT2SpaceMetalCost ){
		metal -= batteryT2MetalCost;
		gem -= batteryT2GemCost;
		spaceMetal -= batteryT2SpaceMetalCost;
		batteryT2 += 1;
		batteryT2MetalCost = Math.floor(550000 * Math.pow(1.1,batteryT2));
		batteryT2GemCost = Math.floor(550000 * Math.pow(1.1,batteryT2));
		batteryT2SpaceMetalCost = Math.floor(330000 * Math.pow(1.1,batteryT2));
		document.getElementById("batteryT2").innerHTML = batteryT2;
		document.getElementById("energyStorage").innerHTML = commafy(getMaxEnergy());
		document.getElementById("batteryT2MetalCost").innerHTML = commafy(batteryT2MetalCost);
		document.getElementById("batteryT2GemCost").innerHTML = commafy(batteryT2GemCost);
		document.getElementById("batteryT2SpaceMetalCost").innerHTML = commafy(batteryT2SpaceMetalCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getCharcoalEngine(){
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		charcoalEngineMetalCost = Math.floor(50 * Math.pow(1.1,charcoalEngine));
		charcoalEngineGemCost = Math.floor(25 * Math.pow(1.1,charcoalEngine));
		document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
		document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
		document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getSolarPanel(){
	if(metal >= solarPanelMetalCost && gem >= solarPanelGemCost){
		metal -= solarPanelMetalCost;
		gem -= solarPanelGemCost;
		solarPanel += 1;
		solarPanelMetalCost = Math.floor(30 * Math.pow(1.1,solarPanel));
		solarPanelGemCost = Math.floor(35 * Math.pow(1.1,solarPanel));
		document.getElementById("solarPanel").innerHTML = solarPanel;
		document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
		document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getMethaneStation(){
	if(spaceMetal >= methaneStationSpaceMetalCost && titanium >= methaneStationTitaniumCost){
		spaceMetal -= methaneStationSpaceMetalCost;
		titanium -= methaneStationTitaniumCost;
		methaneStation += 1;
		methaneStationSpaceMetalCost = Math.floor(110 * Math.pow(1.1,methaneStation));
		methaneStationTitaniumCost = Math.floor(90 * Math.pow(1.1,methaneStation));
		document.getElementById("methaneStation").innerHTML = methaneStation;
		document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
		document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getNuclearStation(){
	if(spaceMetal >= nuclearStationSpaceMetalCost && titanium >= nuclearStationTitaniumCost){
		spaceMetal -= nuclearStationSpaceMetalCost;
		titanium -= nuclearStationTitaniumCost;
		nuclearStation += 1;
		nuclearStationSpaceMetalCost = Math.floor(20000 * Math.pow(1.1,nuclearStation));
		nuclearStationTitaniumCost = Math.floor(10000 * Math.pow(1.1,nuclearStation));
		document.getElementById("nuclearStation").innerHTML = nuclearStation;
		document.getElementById("nuclearStationSpaceMetalCost").innerHTML = commafy(nuclearStationSpaceMetalCost);
		document.getElementById("nuclearStationTitaniumCost").innerHTML = commafy(nuclearStationTitaniumCost);
		refresh();
        Game.statistics.add('tierOwned4');
	}
}


function getMagmatic(){
	if(spaceMetal >= magmaticSpaceMetalCost && gem >= magmaticGemCost && silver >= magmaticSilverCost){
		spaceMetal -= magmaticSpaceMetalCost;
		gem -= magmaticGemCost;
		silver -= magmaticSilverCost;
		magmatic += 1;
		magmaticSpaceMetalCost = Math.floor(25000 * Math.pow(1.1,magmatic));
		magmaticGemCost = Math.floor(30000 * Math.pow(1.1,magmatic));
		magmaticSilverCost = Math.floor(20000 * Math.pow(1.1,magmatic));
		document.getElementById("magmatic").innerHTML = magmatic;
		document.getElementById("magmaticSpaceMetalCost").innerHTML = commafy(magmaticSpaceMetalCost);
		document.getElementById("magmaticGemCost").innerHTML = commafy(magmaticGemCost);
		document.getElementById("magmaticSilverCost").innerHTML = commafy(magmaticSilverCost);
		refresh();
        Game.statistics.add('tierOwned5');
	}
}

function getFusionReactor(){
	if(spaceMetal >= fusionReactorSpaceMetalCost && titanium >= fusionReactorTitaniumCost && silicon >= fusionReactorSiliconCost){
		spaceMetal -= fusionReactorSpaceMetalCost;
		titanium -= fusionReactorTitaniumCost;
		silicon -= fusionReactorSiliconCost;
		fusionReactor += 1;
		fusionReactorSpaceMetalCost = Math.floor(30000 * Math.pow(1.1,fusionReactor));
		fusionReactorTitaniumCost = Math.floor(20000 * Math.pow(1.1,fusionReactor));
		fusionReactorSiliconCost = Math.floor(15000 * Math.pow(1.1,fusionReactor));
		document.getElementById("fusionReactor").innerHTML = fusionReactor;
		document.getElementById("fusionReactorSpaceMetalCost").innerHTML = commafy(fusionReactorSpaceMetalCost);
		document.getElementById("fusionReactorTitaniumCost").innerHTML = commafy(fusionReactorTitaniumCost);
		document.getElementById("fusionReactorSiliconCost").innerHTML = commafy(fusionReactorSiliconCost);
		refresh();
        Game.statistics.add('tierOwned6');
	}
}

function getGrinder(){
	if(titanium >= grinderTitaniumCost && spaceMetal >= grinderSpaceMetalCost && gold >= grinderGoldCost){
		titanium -= grinderTitaniumCost;
		spaceMetal -= grinderSpaceMetalCost;
		gold -= grinderGoldCost;
		grinder += 1;
		grinderTitaniumCost = Math.floor(2000 * Math.pow(1.1,grinder));
		grinderSpaceMetalCost = Math.floor(4000 * Math.pow(1.1,grinder));
		grinderGoldCost = Math.floor(2000 * Math.pow(1.1,grinder));
		document.getElementById("grinder").innerHTML = grinder;
		document.getElementById("grinderTitaniumCost").innerHTML = commafy(grinderTitaniumCost);
		document.getElementById("grinderSpaceMetalCost").innerHTML = commafy(grinderSpaceMetalCost);
		document.getElementById("grinderGoldCost").innerHTML = commafy(grinderGoldCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getCubic(){
	if(uranium >= cubicUraniumCost && spaceMetal >= cubicSpaceMetalCost && oil >= cubicOilCost){
		uranium -= cubicUraniumCost;
		spaceMetal -= cubicSpaceMetalCost;
		oil -= cubicOilCost;
		cubic += 1;
		cubicUraniumCost = Math.floor(80 * Math.pow(1.1,cubic));
		cubicSpaceMetalCost = Math.floor(10000 * Math.pow(1.1,cubic));
		cubicOilCost = Math.floor(10000 * Math.pow(1.1,cubic));
		document.getElementById("cubic").innerHTML = cubic;
		document.getElementById("cubicUraniumCost").innerHTML = commafy(cubicUraniumCost);
		document.getElementById("cubicSpaceMetalCost").innerHTML = commafy(cubicSpaceMetalCost);
		document.getElementById("cubicOilCost").innerHTML = commafy(cubicOilCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getEnricher(){
	if(spaceMetal >= enricherSpaceMetalCost && titanium >= enricherTitaniumCost && silicon >= enricherSiliconCost){
		spaceMetal -= enricherSpaceMetalCost;
		titanium -= enricherTitaniumCost;
		silicon -= enricherSiliconCost;
		enricher += 1;
		enricherSiliconCost = Math.floor(21700 * Math.pow(1.1,enricher));
		enricherTitaniumCost = Math.floor(23000 * Math.pow(1.1,enricher));
		enricherSpaceMetalCost = Math.floor(13500 * Math.pow(1.1,enricher));
		document.getElementById("enricher").innerHTML = enricher;
		document.getElementById("enricherSpaceMetalCost").innerHTML = commafy(enricherSpaceMetalCost);
		document.getElementById("enricherTitaniumCost").innerHTML = commafy(enricherTitaniumCost);
		document.getElementById("enricherSiliconCost").innerHTML = commafy(enricherSiliconCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getRecycler(){
	if(spaceMetal >= recyclerSpaceMetalCost && methane >= recyclerMethaneCost && meteorite >= recyclerMeteoriteCost){
		spaceMetal -= recyclerSpaceMetalCost;
		methane -= recyclerMethaneCost;
		meteorite -= recyclerMeteoriteCost;
		recycler += 1;
		recyclerMeteoriteCost = Math.floor(830 * Math.pow(1.1,recycler));
		recyclerMethaneCost = Math.floor(47000 * Math.pow(1.1,recycler));
		recyclerSpaceMetalCost = Math.floor(93100 * Math.pow(1.1,recycler));
		document.getElementById("recycler").innerHTML = recycler;
		document.getElementById("recyclerSpaceMetalCost").innerHTML = commafy(recyclerSpaceMetalCost);
		document.getElementById("recyclerMethaneCost").innerHTML = commafy(recyclerMethaneCost);
		document.getElementById("recyclerMeteoriteCost").innerHTML = commafy(recyclerMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned4');
	}
}

function getPump(){
	if(metal >= pumpMetalCost && gem >= pumpGemCost){
		metal -= pumpMetalCost;
		gem -= pumpGemCost;
		pump += 1;
		pumpMetalCost = Math.floor(60 * Math.pow(1.1,pump));
		pumpGemCost = Math.floor(20 * Math.pow(1.1,pump));
		document.getElementById("pump").innerHTML = pump;
		document.getElementById("pumpMetalCost").innerHTML = commafy(pumpMetalCost);
		document.getElementById("pumpGemCost").innerHTML = commafy(pumpGemCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getPumpjack(){
	if(metal >= pumpjackMetalCost && gem >= pumpjackGemCost && oil >= pumpjackOilCost){
		metal -= pumpjackMetalCost;
		gem -= pumpjackGemCost;
		oil -= pumpjackOilCost;
		pumpjack += 1;
		pumpjackOilCost = Math.floor(50 * Math.pow(1.1,pumpjack));
		pumpjackGemCost = Math.floor(85 * Math.pow(1.1,pumpjack));
		pumpjackMetalCost = Math.floor(250 * Math.pow(1.1,pumpjack));
		document.getElementById("pumpjack").innerHTML = pumpjack;
		document.getElementById("pumpjackOilCost").innerHTML = commafy(pumpjackOilCost);
		document.getElementById("pumpjackGemCost").innerHTML = commafy(pumpjackGemCost);
		document.getElementById("pumpjackMetalCost").innerHTML = commafy(pumpjackMetalCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getOilField(){
	if(spaceMetal >= oilFieldSpaceMetalCost && titanium >= oilFieldTitaniumCost && silicon >= oilFieldSiliconCost){
		spaceMetal -= oilFieldSpaceMetalCost;
		titanium -= oilFieldTitaniumCost;
		silicon -= oilFieldSiliconCost;
		oilField += 1;
		oilFieldSiliconCost = Math.floor(3900 * Math.pow(1.1,oilField));
		oilFieldTitaniumCost = Math.floor(2700 * Math.pow(1.1,oilField));
		oilFieldSpaceMetalCost = Math.floor(2400 * Math.pow(1.1,oilField));
		document.getElementById("oilField").innerHTML = oilField;
		document.getElementById("oilFieldSpaceMetalCost").innerHTML = commafy(oilFieldSpaceMetalCost);
		document.getElementById("oilFieldTitaniumCost").innerHTML = commafy(oilFieldTitaniumCost);
		document.getElementById("oilFieldSiliconCost").innerHTML = commafy(oilFieldSiliconCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getOilRig(){
	if(spaceMetal >= oilRigSpaceMetalCost && titanium >= oilRigTitaniumCost && meteorite >= oilRigMeteoriteCost){
		spaceMetal -= oilRigSpaceMetalCost;
		titanium -= oilRigTitaniumCost;
		meteorite -= oilRigMeteoriteCost;
		oilRig += 1;
		oilRigMeteoriteCost = Math.floor(760 * Math.pow(1.1,oilRig));
		oilRigTitaniumCost = Math.floor(16800 * Math.pow(1.1,oilRig));
		oilRigSpaceMetalCost = Math.floor(19400 * Math.pow(1.1,oilRig));
		document.getElementById("oilRig").innerHTML = oilRig;
		document.getElementById("oilRigSpaceMetalCost").innerHTML = commafy(oilRigSpaceMetalCost);
		document.getElementById("oilRigTitaniumCost").innerHTML = commafy(oilRigTitaniumCost);
		document.getElementById("oilRigMeteoriteCost").innerHTML = commafy(oilRigMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned4');
	}
}

function getMiner(){
	if(metal >= minerMetalCost && wood >= minerWoodCost){
		metal -= minerMetalCost;
		wood -= minerWoodCost;
		miner += 1;
		minerWoodCost = Math.floor(5 * Math.pow(1.1,miner));
		minerMetalCost = Math.floor(10 * Math.pow(1.1,miner));
		document.getElementById("miner").innerHTML = miner;
		document.getElementById("minerMetalCost").innerHTML = commafy(minerMetalCost);
		document.getElementById("minerWoodCost").innerHTML = commafy(minerWoodCost);
		if(researchUnlocked === false){
			if(miner >= 1){
				document.getElementById("researchTab").className = "";
				researchUnlocked = true;
                Game.statistics.add('tabsUnlocked');
				tabsUnlocked.push("researchTab");
				newUnlock("research");
				Game.notifySuccess("New Tab!", "You've unlocked the Research Tab!");
			}
		}
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getHeavyDrill(){
	if(metal >= heavyDrillMetalCost && gem >= heavyDrillGemCost && oil >= heavyDrillOilCost){
		metal -= heavyDrillMetalCost;
		gem -= heavyDrillGemCost;
		oil -= heavyDrillOilCost;
		heavyDrill += 1;
		heavyDrillOilCost = Math.floor(50 * Math.pow(1.1,heavyDrill));
		heavyDrillGemCost = Math.floor(60 * Math.pow(1.1,heavyDrill));
		heavyDrillMetalCost = Math.floor(160 * Math.pow(1.1,heavyDrill));
		document.getElementById("heavyDrill").innerHTML = heavyDrill;
		document.getElementById("heavyDrillMetalCost").innerHTML = commafy(heavyDrillMetalCost);
		document.getElementById("heavyDrillGemCost").innerHTML = commafy(heavyDrillGemCost);
		document.getElementById("heavyDrillOilCost").innerHTML = commafy(heavyDrillOilCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getGigaDrill(){
	if(spaceMetal >= gigaDrillSpaceMetalCost && gem >= gigaDrillGemCost && silicon >= gigaDrillSiliconCost){
		spaceMetal -= gigaDrillSpaceMetalCost;
		gem -= gigaDrillGemCost;
		silicon -= gigaDrillSiliconCost;
		gigaDrill += 1;
		gigaDrillSiliconCost = Math.floor(4100 * Math.pow(1.1,gigaDrill));
		gigaDrillGemCost = Math.floor(3400 * Math.pow(1.1,gigaDrill));
		gigaDrillSpaceMetalCost = Math.floor(2800 * Math.pow(1.1,gigaDrill));
		document.getElementById("gigaDrill").innerHTML = gigaDrill;
		document.getElementById("gigaDrillSpaceMetalCost").innerHTML = commafy(gigaDrillSpaceMetalCost);
		document.getElementById("gigaDrillGemCost").innerHTML = commafy(gigaDrillGemCost);
		document.getElementById("gigaDrillSiliconCost").innerHTML = commafy(gigaDrillSiliconCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getQuantumDrill(){
	if(spaceMetal >= quantumDrillSpaceMetalCost && gold >= quantumDrillGoldCost && meteorite >= quantumDrillMeteoriteCost){
		spaceMetal -= quantumDrillSpaceMetalCost;
		gold -= quantumDrillGoldCost;
		meteorite -= quantumDrillMeteoriteCost;
		quantumDrill += 1;
		quantumDrillMeteoriteCost = Math.floor(900 * Math.pow(1.1,quantumDrill));
		quantumDrillGoldCost = Math.floor(18700 * Math.pow(1.1,quantumDrill));
		quantumDrillSpaceMetalCost = Math.floor(29000 * Math.pow(1.1,quantumDrill));
		document.getElementById("quantumDrill").innerHTML = quantumDrill;
		document.getElementById("quantumDrillSpaceMetalCost").innerHTML = commafy(quantumDrillSpaceMetalCost);
		document.getElementById("quantumDrillGoldCost").innerHTML = commafy(quantumDrillGoldCost);
		document.getElementById("quantumDrillMeteoriteCost").innerHTML = commafy(quantumDrillMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned4');
	}
}

function getGemMiner(){
	if(metal >= gemMinerMetalCost && gem >= gemMinerGemCost){
		metal -= gemMinerMetalCost;
		gem -= gemMinerGemCost;
		gemMiner += 1;
		gemMinerGemCost = Math.floor(10 * Math.pow(1.1,gemMiner));
		gemMinerMetalCost = Math.floor(15 * Math.pow(1.1,gemMiner));
		document.getElementById("gemMiner").innerHTML = gemMiner;
		document.getElementById("gemMinerMetalCost").innerHTML = commafy(gemMinerMetalCost);
		document.getElementById("gemMinerGemCost").innerHTML = commafy(gemMinerGemCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getAdvancedDrill(){
	if(metal >= advancedDrillMetalCost && gem >= advancedDrillGemCost && oil >= advancedDrillOilCost){
		metal -= advancedDrillMetalCost;
		gem -= advancedDrillGemCost;
		oil -= advancedDrillOilCost;
		advancedDrill += 1;
		advancedDrillOilCost = Math.floor(60 * Math.pow(1.1,advancedDrill));
		advancedDrillGemCost = Math.floor(200 * Math.pow(1.1,advancedDrill));
		advancedDrillMetalCost = Math.floor(120 * Math.pow(1.1,advancedDrill));
		document.getElementById("advancedDrill").innerHTML = advancedDrill;
		document.getElementById("advancedDrillMetalCost").innerHTML = commafy(advancedDrillMetalCost);
		document.getElementById("advancedDrillGemCost").innerHTML = commafy(advancedDrillGemCost);
		document.getElementById("advancedDrillOilCost").innerHTML = commafy(advancedDrillOilCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getDiamondDrill(){
	if(spaceMetal >= diamondDrillSpaceMetalCost && gem >= diamondDrillGemCost && silicon >= diamondDrillSiliconCost){
		spaceMetal -= diamondDrillSpaceMetalCost;
		gem -= diamondDrillGemCost;
		silicon -= diamondDrillSiliconCost;
		diamondDrill += 1;
		diamondDrillSiliconCost = Math.floor(4500 * Math.pow(1.1,diamondDrill));
		diamondDrillGemCost = Math.floor(8000 * Math.pow(1.1,diamondDrill));
		diamondDrillSpaceMetalCost = Math.floor(3400 * Math.pow(1.1,diamondDrill));
		document.getElementById("diamondDrill").innerHTML = diamondDrill;
		document.getElementById("diamondDrillSpaceMetalCost").innerHTML = commafy(diamondDrillSpaceMetalCost);
		document.getElementById("diamondDrillGemCost").innerHTML = commafy(diamondDrillGemCost);
		document.getElementById("diamondDrillSiliconCost").innerHTML = commafy(diamondDrillSiliconCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getCarbyneDrill(){
	if(spaceMetal >= carbyneDrillSpaceMetalCost && gem >= carbyneDrillGemCost && meteorite >= carbyneDrillMeteoriteCost){
		spaceMetal -= carbyneDrillSpaceMetalCost;
		gem -= carbyneDrillGemCost;
		meteorite -= carbyneDrillMeteoriteCost;
		carbyneDrill += 1;
		carbyneDrillMeteoriteCost = Math.floor(800 * Math.pow(1.1,carbyneDrill));
		carbyneDrillGemCost = Math.floor(27000 * Math.pow(1.1,carbyneDrill));
		carbyneDrillSpaceMetalCost = Math.floor(21000 * Math.pow(1.1,carbyneDrill));
		document.getElementById("carbyneDrill").innerHTML = carbyneDrill;
		document.getElementById("carbyneDrillSpaceMetalCost").innerHTML = commafy(carbyneDrillSpaceMetalCost);
		document.getElementById("carbyneDrillGemCost").innerHTML = commafy(carbyneDrillGemCost);
		document.getElementById("carbyneDrillMeteoriteCost").innerHTML = commafy(carbyneDrillMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getWoodburner(){
	if(metal >= woodburnerMetalCost && wood >= woodburnerWoodCost){
		metal -= woodburnerMetalCost;
		wood -= woodburnerWoodCost;
		woodburner += 1;
		woodburnerWoodCost = Math.floor(5 * Math.pow(1.1,woodburner));
		woodburnerMetalCost = Math.floor(10 * Math.pow(1.1,woodburner));
		document.getElementById("woodburner").innerHTML = woodburner;
		document.getElementById("woodburnerMetalCost").innerHTML = commafy(woodburnerMetalCost);
		document.getElementById("woodburnerWoodCost").innerHTML = commafy(woodburnerWoodCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getFurnace(){
	if(metal >= furnaceMetalCost && wood >= furnaceWoodCost && oil >= furnaceOilCost){
		metal -= furnaceMetalCost;
		wood -= furnaceWoodCost;
		oil -= furnaceOilCost;
		furnace += 1;
		furnaceWoodCost = Math.floor(40 * Math.pow(1.1,furnace));
		furnaceOilCost = Math.floor(100 * Math.pow(1.1,furnace));
		furnaceMetalCost = Math.floor(80 * Math.pow(1.1,furnace));
		document.getElementById("furnace").innerHTML = furnace;
		document.getElementById("furnaceMetalCost").innerHTML = commafy(furnaceMetalCost);
		document.getElementById("furnaceWoodCost").innerHTML = commafy(furnaceWoodCost);
		document.getElementById("furnaceOilCost").innerHTML = commafy(furnaceOilCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getKiln(){
	if(spaceMetal >= kilnSpaceMetalCost && gem >= kilnGemCost && silicon >= kilnSiliconCost){
		spaceMetal -= kilnSpaceMetalCost;
		gem -= kilnGemCost;
		silicon -= kilnSiliconCost;
		kiln += 1;
		kilnSiliconCost = Math.floor(3800 * Math.pow(1.1,kiln));
		kilnGemCost = Math.floor(6200 * Math.pow(1.1,kiln));
		kilnSpaceMetalCost = Math.floor(3500 * Math.pow(1.1,kiln));
		document.getElementById("kiln").innerHTML = kiln;
		document.getElementById("kilnSpaceMetalCost").innerHTML = commafy(kilnSpaceMetalCost);
		document.getElementById("kilnGemCost").innerHTML = commafy(kilnGemCost);
		document.getElementById("kilnSiliconCost").innerHTML = commafy(kilnSiliconCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getFryer(){
	if(spaceMetal >= fryerSpaceMetalCost && lava >= fryerLavaCost && meteorite >= fryerMeteoriteCost){
		spaceMetal -= fryerSpaceMetalCost;
		lava -= fryerLavaCost;
		meteorite -= fryerMeteoriteCost;
		fryer += 1;
		fryerMeteoriteCost = Math.floor(560 * Math.pow(1.1,fryer));
		fryerLavaCost = Math.floor(12500 * Math.pow(1.1,fryer));
		fryerSpaceMetalCost = Math.floor(15800 * Math.pow(1.1,fryer));
		document.getElementById("fryer").innerHTML = fryer;
		document.getElementById("fryerSpaceMetalCost").innerHTML = commafy(fryerSpaceMetalCost);
		document.getElementById("fryerLavaCost").innerHTML = commafy(fryerLavaCost);
		document.getElementById("fryerMeteoriteCost").innerHTML = commafy(fryerMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned4');
	}
}

function getWoodcutter(){
	if(metal >= woodcutterMetalCost && wood >= woodcutterWoodCost){
		metal -= woodcutterMetalCost;
		wood -= woodcutterWoodCost;
		woodcutter += 1;
		woodcutterWoodCost = Math.floor(5 * Math.pow(1.1,woodcutter));
		woodcutterMetalCost = Math.floor(10 * Math.pow(1.1,woodcutter));
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("woodcutterMetalCost").innerHTML = commafy(woodcutterMetalCost);
		document.getElementById("woodcutterWoodCost").innerHTML = commafy(woodcutterWoodCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getLaserCutter(){
	if(metal >= laserCutterMetalCost && gem >= laserCutterGemCost && oil >= laserCutterOilCost){
		metal -= laserCutterMetalCost;
		gem -= laserCutterGemCost;
		oil -= laserCutterOilCost;
		laserCutter += 1;
		laserCutterOilCost = Math.floor(40 * Math.pow(1.1,laserCutter));
		laserCutterGemCost = Math.floor(90 * Math.pow(1.1,laserCutter));
		laserCutterMetalCost = Math.floor(50 * Math.pow(1.1,laserCutter));
		document.getElementById("laserCutter").innerHTML = laserCutter;
		document.getElementById("laserCutterMetalCost").innerHTML = commafy(laserCutterMetalCost);
		document.getElementById("laserCutterGemCost").innerHTML = commafy(laserCutterGemCost);
		document.getElementById("laserCutterOilCost").innerHTML = commafy(laserCutterOilCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getDeforester(){
	if(spaceMetal >= deforesterSpaceMetalCost && titanium >= deforesterTitaniumCost && silicon >= deforesterSiliconCost){
		spaceMetal -= deforesterSpaceMetalCost;
		titanium -= deforesterTitaniumCost;
		silicon -= deforesterSiliconCost;
		deforester += 1;
		deforesterSpaceMetalCost = Math.floor(3000 * Math.pow(1.1,deforester));
		deforesterTitaniumCost = Math.floor(2700 * Math.pow(1.1,deforester));
		deforesterSiliconCost = Math.floor(2500 * Math.pow(1.1,deforester));
		document.getElementById("deforester").innerHTML = deforester;
		document.getElementById("deforesterSpaceMetalCost").innerHTML = commafy(deforesterSpaceMetalCost);
		document.getElementById("deforesterTitaniumCost").innerHTML = commafy(deforesterTitaniumCost);
		document.getElementById("deforesterSiliconCost").innerHTML = commafy(deforesterSiliconCost);
		refresh();
        Game.statistics.add('tierOwned3');
	}
}

function getInfuser(){
	if(spaceMetal >= infuserSpaceMetalCost && oil >= infuserOilCost && meteorite >= infuserMeteoriteCost){
		spaceMetal -= infuserSpaceMetalCost;
		oil -= infuserOilCost;
		meteorite -= infuserMeteoriteCost;
		infuser += 1;
		infuserSpaceMetalCost = Math.floor(16000 * Math.pow(1.1,infuser));
		infuserOilCost = Math.floor(31200 * Math.pow(1.1,infuser));
		infuserMeteoriteCost = Math.floor(490 * Math.pow(1.1,infuser));
		document.getElementById("infuser").innerHTML = infuser;
		document.getElementById("infuserSpaceMetalCost").innerHTML = commafy(infuserSpaceMetalCost);
		document.getElementById("infuserOilCost").innerHTML = commafy(infuserOilCost);
		document.getElementById("infuserMeteoriteCost").innerHTML = commafy(infuserMeteoriteCost);
		refresh();
        Game.statistics.add('tierOwned4');
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= moonWorkerGemCost;
		moonWorker += 1;
		moonWorkerGemCost = Math.floor(500 * Math.pow(1.1,moonWorker));
		document.getElementById("moonWorker").innerHTML = moonWorker;
		document.getElementById("moonWorkerGemCost").innerHTML = commafy(moonWorkerGemCost);
		refresh();
        Game.statistics.add('tierOwned1');
	}
}

function getMoonDrill(){
	if(metal >= moonDrillMetalCost && gem >= moonDrillGemCost && oil >= moonDrillOilCost){
		metal -= moonDrillMetalCost;
		gem -= moonDrillGemCost;
		oil -= moonDrillOilCost;
		moonDrill += 1;
		moonDrillOilCost = Math.floor(400 * Math.pow(1.1,moonDrill));
		moonDrillGemCost = Math.floor(600 * Math.pow(1.1,moonDrill));
		moonDrillMetalCost = Math.floor(1000 * Math.pow(1.1,moonDrill));
		document.getElementById("moonDrill").innerHTML = moonDrill;
		document.getElementById("moonDrillMetalCost").innerHTML = commafy(moonDrillMetalCost);
		document.getElementById("moonDrillGemCost").innerHTML = commafy(moonDrillGemCost);
		document.getElementById("moonDrillOilCost").innerHTML = commafy(moonDrillOilCost);
		refresh();
        Game.statistics.add('tierOwned2');
	}
}

function getMoonQuarry(){
	if(spaceMetal >= moonQuarrySpaceMetalCost && gem >= moonQuarryGemCost && silicon >= moonQuarrySiliconCost){
		spaceMetal -= moonQuarrySpaceMetalCost;
		gem -= moonQuarryGemCost;
		silicon -= moonQuarrySiliconCost;
		moonQuarry += 1;
		moonQuarrySiliconCost = Math.floor(3500 * Math.pow(1.1,moonQuarry));
		moonQuarryGemCost = Math.floor(5000 * Math.pow(1.1,moonQuarry));
		moonQuarrySpaceMetalCost = Math.floor(8000 * Math.pow(1.1,moonQuarry));
		document.getElementById("moonQuarry").innerHTML = moonQuarry;
		document.getElementById("moonQuarrySpaceMetalCost").innerHTML = commafy(moonQuarrySpaceMetalCost);
		document.getElementById("moonQuarryGemCost").innerHTML = commafy(moonQuarryGemCost);
		document.getElementById("moonQuarrySiliconCost").innerHTML = commafy(moonQuarrySiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getPlanetExcavator(){
	if(titanium >= planetExcavatorTitaniumCost && ice >= planetExcavatorIceCost && meteorite >= planetExcavatorMeteoriteCost){
		titanium -= planetExcavatorTitaniumCost;
		ice -= planetExcavatorIceCost;
		meteorite -= planetExcavatorMeteoriteCost;
		planetExcavator += 1;
		planetExcavatorMeteoriteCost = Math.floor(500 * Math.pow(1.1,planetExcavator));
		planetExcavatorIceCost = Math.floor(37000 * Math.pow(1.1,planetExcavator));
		planetExcavatorTitaniumCost = Math.floor(45000 * Math.pow(1.1,planetExcavator));
		document.getElementById("planetExcavator").innerHTML = planetExcavator;
		document.getElementById("planetExcavatorTitaniumCost").innerHTML = commafy(planetExcavatorTitaniumCost);
		document.getElementById("planetExcavatorIceCost").innerHTML = commafy(planetExcavatorIceCost);
		document.getElementById("planetExcavatorMeteoriteCost").innerHTML = commafy(planetExcavatorMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getVacuum(){
	if(spaceMetal >= vacuumSpaceMetalCost && gem >= vacuumGemCost){
		spaceMetal -= vacuumSpaceMetalCost;
		gem -= vacuumGemCost;
		vacuum += 1;
		vacuumGemCost = Math.floor(500 * Math.pow(1.1,vacuum));
		vacuumSpaceMetalCost = Math.floor(50 * Math.pow(1.1,vacuum));
		document.getElementById("vacuum").innerHTML = vacuum;
		document.getElementById("vacuumSpaceMetalCost").innerHTML = commafy(vacuumSpaceMetalCost);
		document.getElementById("vacuumGemCost").innerHTML = commafy(vacuumGemCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getSuctionExcavator(){
	if(spaceMetal >= suctionExcavatorSpaceMetalCost && gem >= suctionExcavatorGemCost && oil >= suctionExcavatorOilCost){
		spaceMetal -= suctionExcavatorSpaceMetalCost;
		gem -= suctionExcavatorGemCost;
		oil -= suctionExcavatorOilCost;
		suctionExcavator += 1;
		suctionExcavatorOilCost = Math.floor(600 * Math.pow(1.1,suctionExcavator));
		suctionExcavatorGemCost = Math.floor(800 * Math.pow(1.1,suctionExcavator));
		suctionExcavatorSpaceMetalCost = Math.floor(100 * Math.pow(1.1,suctionExcavator));
		document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
		document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
		document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
		document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getSpaceCow(){
	if(spaceMetal >= spaceCowSpaceMetalCost && titanium >= spaceCowTitaniumCost && silicon >= spaceCowSiliconCost){
		spaceMetal -= spaceCowSpaceMetalCost;
		titanium -= spaceCowTitaniumCost;
		silicon -= spaceCowSiliconCost;
		spaceCow += 1;
		spaceCowSiliconCost = Math.floor(3900 * Math.pow(1.1,spaceCow));
		spaceCowTitaniumCost = Math.floor(2700 * Math.pow(1.1,spaceCow));
		spaceCowSpaceMetalCost = Math.floor(2400 * Math.pow(1.1,spaceCow));
		document.getElementById("spaceCow").innerHTML = spaceCow;
		document.getElementById("spaceCowSpaceMetalCost").innerHTML = commafy(spaceCowSpaceMetalCost);
		document.getElementById("spaceCowTitaniumCost").innerHTML = commafy(spaceCowTitaniumCost);
		document.getElementById("spaceCowSiliconCost").innerHTML = commafy(spaceCowSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getVent(){
	if(spaceMetal >= ventSpaceMetalCost && helium >= ventHeliumCost && meteorite >= ventMeteoriteCost){
		spaceMetal -= ventSpaceMetalCost;
		helium -= ventHeliumCost;
		meteorite -= ventMeteoriteCost;
		vent += 1;
		ventMeteoriteCost = Math.floor(390 * Math.pow(1.1,vent));
		ventHeliumCost = Math.floor(47000 * Math.pow(1.1,vent));
		ventSpaceMetalCost = Math.floor(52000 * Math.pow(1.1,vent));
		document.getElementById("vent").innerHTML = vent;
		document.getElementById("ventSpaceMetalCost").innerHTML = commafy(ventSpaceMetalCost);
		document.getElementById("ventHeliumCost").innerHTML = commafy(ventHeliumCost);
		document.getElementById("ventMeteoriteCost").innerHTML = commafy(ventMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getExplorer(){
	if(gem >= explorerGemCost){
		gem -= explorerGemCost;
		explorer += 1;
		explorerGemCost = Math.floor(1000 * Math.pow(1.1,explorer));
		document.getElementById("explorer").innerHTML = explorer;
		document.getElementById("explorerGemCost").innerHTML = commafy(explorerGemCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getSpaceMetalDrill(){
	if(spaceMetal >= spaceMetalDrillSpaceMetalCost && gem >= spaceMetalDrillGemCost && oil >= spaceMetalDrillOilCost){
		spaceMetal -= spaceMetalDrillSpaceMetalCost;
		gem -= spaceMetalDrillGemCost;
		oil -= spaceMetalDrillOilCost;
		spaceMetalDrill += 1;
		spaceMetalDrillOilCost = Math.floor(1000 * Math.pow(1.1,spaceMetalDrill));
		spaceMetalDrillGemCost = Math.floor(800 * Math.pow(1.1,spaceMetalDrill));
		spaceMetalDrillSpaceMetalCost = Math.floor(200 * Math.pow(1.1,spaceMetalDrill));
		document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
		document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = commafy(spaceMetalDrillSpaceMetalCost);
		document.getElementById("spaceMetalDrillGemCost").innerHTML = commafy(spaceMetalDrillGemCost);
		document.getElementById("spaceMetalDrillOilCost").innerHTML = commafy(spaceMetalDrillOilCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getPentaDrill(){
	if(spaceMetal >= pentaDrillSpaceMetalCost && gem >= pentaDrillGemCost && silicon >= pentaDrillSiliconCost){
		spaceMetal -= pentaDrillSpaceMetalCost;
		gem -= pentaDrillGemCost;
		silicon -= pentaDrillSiliconCost;
		pentaDrill += 1;
		pentaDrillSiliconCost = Math.floor(5600 * Math.pow(1.1,pentaDrill));
		pentaDrillGemCost = Math.floor(11000 * Math.pow(1.1,pentaDrill));
		pentaDrillSpaceMetalCost = Math.floor(14000 * Math.pow(1.1,pentaDrill));
		document.getElementById("pentaDrill").innerHTML = pentaDrill;
		document.getElementById("pentaDrillSpaceMetalCost").innerHTML = commafy(pentaDrillSpaceMetalCost);
		document.getElementById("pentaDrillGemCost").innerHTML = commafy(pentaDrillGemCost);
		document.getElementById("pentaDrillSiliconCost").innerHTML = commafy(pentaDrillSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getTitanDrill(){
	if(spaceMetal >= titanDrillSpaceMetalCost && gold >= titanDrillGoldCost && meteorite >= titanDrillMeteoriteCost){
		spaceMetal -= titanDrillSpaceMetalCost;
		gold -= titanDrillGoldCost;
		meteorite -= titanDrillMeteoriteCost;
		titanDrill += 1;
		titanDrillSpaceMetalCost = Math.floor(63000 * Math.pow(1.1,titanDrill));
		titanDrillGoldCost = Math.floor(27000 * Math.pow(1.1,titanDrill));
		titanDrillMeteoriteCost = Math.floor(600 * Math.pow(1.1,titanDrill));
		document.getElementById("titanDrill").innerHTML = titanDrill;
		document.getElementById("titanDrillSpaceMetalCost").innerHTML = commafy(titanDrillSpaceMetalCost);
		document.getElementById("titanDrillGoldCost").innerHTML = commafy(titanDrillGoldCost);
		document.getElementById("titanDrillMeteoriteCost").innerHTML = commafy(titanDrillMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getDroid(){
	if(spaceMetal >= droidSpaceMetalCost && methane >= droidMethaneCost){
		spaceMetal -= droidSpaceMetalCost;
		methane -= droidMethaneCost;
		droid += 1;
		droidMethaneCost = Math.floor(50 * Math.pow(1.1,droid));
		droidSpaceMetalCost = Math.floor(200 * Math.pow(1.1,droid));
		document.getElementById("droid").innerHTML = droid;
		document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
		document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getDestroyer(){
	if(spaceMetal >= destroyerSpaceMetalCost && gem >= destroyerGemCost && oil >= destroyerOilCost){
		spaceMetal -= destroyerSpaceMetalCost;
		gem -= destroyerGemCost;
		oil -= destroyerOilCost;
		destroyer += 1;
		destroyerOilCost = Math.floor(1000 * Math.pow(1.1,destroyer));
		destroyerGemCost = Math.floor(1500 * Math.pow(1.1,destroyer));
		destroyerSpaceMetalCost = Math.floor(500 * Math.pow(1.1,destroyer));
		document.getElementById("destroyer").innerHTML = destroyer;
		document.getElementById("destroyerSpaceMetalCost").innerHTML = commafy(destroyerSpaceMetalCost);
		document.getElementById("destroyerGemCost").innerHTML = commafy(destroyerGemCost);
		document.getElementById("destroyerOilCost").innerHTML = commafy(destroyerOilCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getDeathStar(){
	if(spaceMetal >= deathStarSpaceMetalCost && silver >= deathStarSilverCost && silicon >= deathStarSiliconCost){
		spaceMetal -= deathStarSpaceMetalCost;
		silver -= deathStarSilverCost;
		silicon -= deathStarSiliconCost;
		deathStar += 1;
		deathStarSiliconCost = Math.floor(8200 * Math.pow(1.1,deathStar));
		deathStarSilverCost = Math.floor(11500 * Math.pow(1.1,deathStar));
		deathStarSpaceMetalCost = Math.floor(17000 * Math.pow(1.1,deathStar));
		document.getElementById("deathStar").innerHTML = deathStar;
		document.getElementById("deathStarSpaceMetalCost").innerHTML = commafy(deathStarSpaceMetalCost);
		document.getElementById("deathStarSilverCost").innerHTML = commafy(deathStarSilverCost);
		document.getElementById("deathStarSiliconCost").innerHTML = commafy(deathStarSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getActuator(){
	if(spaceMetal >= actuatorSpaceMetalCost && helium >= actuatorHeliumCost && meteorite >= actuatorMeteoriteCost){
		spaceMetal -= actuatorSpaceMetalCost;
		helium -= actuatorHeliumCost;
		meteorite -= actuatorMeteoriteCost;
		actuator += 1;
		actuatorMeteoriteCost = Math.floor(600 * Math.pow(1.1,actuator));
		actuatorHeliumCost = Math.floor(15700 * Math.pow(1.1,actuator));
		actuatorSpaceMetalCost = Math.floor(61000 * Math.pow(1.1,actuator));
		document.getElementById("actuator").innerHTML = actuator;
		document.getElementById("actuatorSpaceMetalCost").innerHTML = commafy(actuatorSpaceMetalCost);
		document.getElementById("actuatorHeliumCost").innerHTML = commafy(actuatorHeliumCost);
		document.getElementById("actuatorMeteoriteCost").innerHTML = commafy(actuatorMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getScout(){
	if(spaceMetal >= scoutSpaceMetalCost && titanium >= scoutTitaniumCost){
		spaceMetal -= scoutSpaceMetalCost;
		titanium -= scoutTitaniumCost;
		scout += 1;
		scoutTitaniumCost = Math.floor(20 * Math.pow(1.1,scout));
		scoutSpaceMetalCost = Math.floor(100 * Math.pow(1.1,scout));
		document.getElementById("scout").innerHTML = scout;
		document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
		document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getSpaceLaser(){
	if(spaceMetal >= spaceLaserSpaceMetalCost && gem >= spaceLaserGemCost && oil >= spaceLaserOilCost){
		spaceMetal -= spaceLaserSpaceMetalCost;
		gem -= spaceLaserGemCost;
		oil -= spaceLaserOilCost;
		spaceLaser += 1;
		spaceLaserOilCost = Math.floor(1200 * Math.pow(1.1,spaceLaser));
		spaceLaserGemCost = Math.floor(900 * Math.pow(1.1,spaceLaser));
		spaceLaserSpaceMetalCost = Math.floor(350 * Math.pow(1.1,spaceLaser));
		document.getElementById("spaceLaser").innerHTML = spaceLaser;
		document.getElementById("spaceLaserSpaceMetalCost").innerHTML = commafy(spaceLaserSpaceMetalCost);
		document.getElementById("spaceLaserGemCost").innerHTML = commafy(spaceLaserGemCost);
		document.getElementById("spaceLaserOilCost").innerHTML = commafy(spaceLaserOilCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getBertha(){
	if(spaceMetal >= berthaSpaceMetalCost && titanium >= berthaTitaniumCost && silicon >= berthaSiliconCost){
		spaceMetal -= berthaSpaceMetalCost;
		titanium -= berthaTitaniumCost;
		silicon -= berthaSiliconCost;
		bertha += 1;
		berthaSiliconCost = Math.floor(11000 * Math.pow(1.1,bertha));
		berthaTitaniumCost = Math.floor(18200 * Math.pow(1.1,bertha));
		berthaSpaceMetalCost = Math.floor(19500 * Math.pow(1.1,bertha));
		document.getElementById("bertha").innerHTML = bertha;
		document.getElementById("berthaSpaceMetalCost").innerHTML = commafy(berthaSpaceMetalCost);
		document.getElementById("berthaTitaniumCost").innerHTML = commafy(berthaTitaniumCost);
		document.getElementById("berthaSiliconCost").innerHTML = commafy(berthaSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getCannon(){
	if(spaceMetal >= cannonSpaceMetalCost && oil >= cannonOilCost && meteorite >= cannonMeteoriteCost){
		spaceMetal -= cannonSpaceMetalCost;
		oil -= cannonOilCost;
		meteorite -= cannonMeteoriteCost;
		cannon += 1;
		cannonMeteoriteCost = Math.floor(520 * Math.pow(1.1,cannon));
		cannonOilCost = Math.floor(93800 * Math.pow(1.1,cannon));
		cannonSpaceMetalCost = Math.floor(85100 * Math.pow(1.1,cannon));
		document.getElementById("cannon").innerHTML = cannon;
		document.getElementById("cannonSpaceMetalCost").innerHTML = commafy(cannonSpaceMetalCost);
		document.getElementById("cannonOilCost").innerHTML = commafy(cannonOilCost);
		document.getElementById("cannonMeteoriteCost").innerHTML = commafy(cannonMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getBlowtorch(){
	if(spaceMetal >= blowtorchSpaceMetalCost && titanium >= blowtorchTitaniumCost){
		spaceMetal -= blowtorchSpaceMetalCost;
		titanium -= blowtorchTitaniumCost;
		blowtorch += 1;
		blowtorchTitaniumCost = Math.floor(30 * Math.pow(1.1,blowtorch));
		blowtorchSpaceMetalCost = Math.floor(150 * Math.pow(1.1,blowtorch));
		document.getElementById("blowtorch").innerHTML = blowtorch;
		document.getElementById("blowtorchSpaceMetalCost").innerHTML = commafy(blowtorchSpaceMetalCost);
		document.getElementById("blowtorchTitaniumCost").innerHTML = commafy(blowtorchTitaniumCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getScorcher(){
	if(spaceMetal >= scorcherSpaceMetalCost && gem >= scorcherGemCost && oil >= scorcherOilCost){
		spaceMetal -= scorcherSpaceMetalCost;
		gem -= scorcherGemCost;
		oil -= scorcherOilCost;
		scorcher += 1;
		scorcherOilCost = Math.floor(1600 * Math.pow(1.1,scorcher));
		scorcherGemCost = Math.floor(1200 * Math.pow(1.1,scorcher));
		scorcherSpaceMetalCost = Math.floor(500 * Math.pow(1.1,scorcher));
		document.getElementById("scorcher").innerHTML = scorcher;
		document.getElementById("scorcherSpaceMetalCost").innerHTML = commafy(scorcherSpaceMetalCost);
		document.getElementById("scorcherGemCost").innerHTML = commafy(scorcherGemCost);
		document.getElementById("scorcherOilCost").innerHTML = commafy(scorcherOilCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getAnnihilator(){
	if(spaceMetal >= annihilatorSpaceMetalCost && gem >= annihilatorGemCost && silver >= annihilatorSilverCost){
		spaceMetal -= annihilatorSpaceMetalCost;
		gem -= annihilatorGemCost;
		silver -= annihilatorSilverCost;
		annihilator += 1;
		annihilatorSpaceMetalCost = Math.floor(3000 * Math.pow(1.1,annihilator));
		annihilatorGemCost = Math.floor(8300 * Math.pow(1.1,annihilator));
		annihilatorSilverCost = Math.floor(2400 * Math.pow(1.1,annihilator));
		document.getElementById("annihilator").innerHTML = annihilator;
		document.getElementById("annihilatorSpaceMetalCost").innerHTML = commafy(annihilatorSpaceMetalCost);
		document.getElementById("annihilatorGemCost").innerHTML = commafy(annihilatorGemCost);
		document.getElementById("annihilatorSilverCost").innerHTML = commafy(annihilatorSilverCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getDesert(){
	if(spaceMetal >= desertSpaceMetalCost && silicon >= desertSiliconCost && meteorite >= desertMeteoriteCost){
		spaceMetal -= desertSpaceMetalCost;
		silicon -= desertSiliconCost;
		meteorite -= desertMeteoriteCost;
		desert += 1;
		desertSpaceMetalCost = Math.floor(20000 * Math.pow(1.1,desert));
		desertSiliconCost = Math.floor(17700 * Math.pow(1.1,desert));
		desertMeteoriteCost = Math.floor(400 * Math.pow(1.1,desert));
		document.getElementById("desert").innerHTML = desert;
		document.getElementById("desertSpaceMetalCost").innerHTML = commafy(desertSpaceMetalCost);
		document.getElementById("desertSiliconCost").innerHTML = commafy(desertSiliconCost);
		document.getElementById("desertMeteoriteCost").innerHTML = commafy(desertMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getCrucible(){
	if(spaceMetal >= crucibleSpaceMetalCost && gem >= crucibleGemCost){
		spaceMetal -= crucibleSpaceMetalCost;
		gem -= crucibleGemCost;
		crucible += 1;
		crucibleGemCost = Math.floor(7000 * Math.pow(1.1,crucible));
		crucibleSpaceMetalCost = Math.floor(4000 * Math.pow(1.1,crucible));
		document.getElementById("crucible").innerHTML = crucible;
		document.getElementById("crucibleSpaceMetalCost").innerHTML = commafy(crucibleSpaceMetalCost);
		document.getElementById("crucibleGemCost").innerHTML = commafy(crucibleGemCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getExtractor(){
	if(spaceMetal >= extractorSpaceMetalCost && titanium >= extractorTitaniumCost && silicon >= extractorSiliconCost){
		spaceMetal -= extractorSpaceMetalCost;
		titanium -= extractorTitaniumCost;
		silicon -= extractorSiliconCost;
		extractor += 1;
		extractorSiliconCost = Math.floor(6000 * Math.pow(1.1,extractor));
		extractorTitaniumCost = Math.floor(12000 * Math.pow(1.1,extractor));
		extractorSpaceMetalCost = Math.floor(14000 * Math.pow(1.1,extractor));
		document.getElementById("extractor").innerHTML = extractor;
		document.getElementById("extractorSpaceMetalCost").innerHTML = commafy(extractorSpaceMetalCost);
		document.getElementById("extractorTitaniumCost").innerHTML = commafy(extractorTitaniumCost);
		document.getElementById("extractorSiliconCost").innerHTML = commafy(extractorSiliconCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getExtruder(){
	if(spaceMetal >= extruderSpaceMetalCost && titanium >= extruderTitaniumCost && silicon >= extruderSiliconCost){
		spaceMetal -= extruderSpaceMetalCost;
		titanium -= extruderTitaniumCost;
		silicon -= extruderSiliconCost;
		extruder += 1;
		extruderSiliconCost = Math.floor(39000 * Math.pow(1.1,extruder));
		extruderTitaniumCost = Math.floor(57000 * Math.pow(1.1,extruder));
		extruderSpaceMetalCost = Math.floor(69000 * Math.pow(1.1,extruder));
		document.getElementById("extruder").innerHTML = extruder;
		document.getElementById("extruderSpaceMetalCost").innerHTML = commafy(extruderSpaceMetalCost);
		document.getElementById("extruderTitaniumCost").innerHTML = commafy(extruderTitaniumCost);
		document.getElementById("extruderSiliconCost").innerHTML = commafy(extruderSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getVeluptuator(){
	if(spaceMetal >= veluptuatorSpaceMetalCost && gold >= veluptuatorGoldCost && meteorite >= veluptuatorMeteoriteCost){
		spaceMetal -= veluptuatorSpaceMetalCost;
		gold -= veluptuatorGoldCost;
		meteorite -= veluptuatorMeteoriteCost;
		veluptuator += 1;
		veluptuatorMeteoriteCost = Math.floor(750 * Math.pow(1.1,veluptuator));
		veluptuatorGoldCost = Math.floor(121000 * Math.pow(1.1,veluptuator));
		veluptuatorSpaceMetalCost = Math.floor(298000 * Math.pow(1.1,veluptuator));
		document.getElementById("veluptuator").innerHTML = veluptuator;
		document.getElementById("veluptuatorSpaceMetalCost").innerHTML = commafy(veluptuatorSpaceMetalCost);
		document.getElementById("veluptuatorGoldCost").innerHTML = commafy(veluptuatorGoldCost);
		document.getElementById("veluptuatorMeteoriteCost").innerHTML = commafy(veluptuatorMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getCollector(){
	if(spaceMetal >= collectorSpaceMetalCost && titanium >= collectorTitaniumCost){
		spaceMetal -= collectorSpaceMetalCost;
		titanium -= collectorTitaniumCost;
		collector += 1;
		collectorTitaniumCost = Math.floor(4800 * Math.pow(1.1,collector));
		collectorSpaceMetalCost = Math.floor(6000 * Math.pow(1.1,collector));
		document.getElementById("collector").innerHTML = collector;
		document.getElementById("collectorSpaceMetalCost").innerHTML = commafy(collectorSpaceMetalCost);
		document.getElementById("collectorTitaniumCost").innerHTML = commafy(collectorTitaniumCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getMagnet(){
	if(spaceMetal >= magnetSpaceMetalCost && titanium >= magnetTitaniumCost && gold >= magnetGoldCost){
		spaceMetal -= magnetSpaceMetalCost;
		titanium -= magnetTitaniumCost;
		gold -= magnetGoldCost;
		magnet += 1;
		magnetGoldCost = Math.floor(6600 * Math.pow(1.1,magnet));
		magnetTitaniumCost = Math.floor(9600 * Math.pow(1.1,magnet));
		magnetSpaceMetalCost = Math.floor(10800 * Math.pow(1.1,magnet));
		document.getElementById("magnet").innerHTML = magnet;
		document.getElementById("magnetSpaceMetalCost").innerHTML = commafy(magnetSpaceMetalCost);
		document.getElementById("magnetTitaniumCost").innerHTML = commafy(magnetTitaniumCost);
		document.getElementById("magnetGoldCost").innerHTML = commafy(magnetGoldCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getECell(){
	if(silver >= eCellSilverCost && silicon >= eCellSiliconCost && gold >= eCellGoldCost){
		silver -= eCellSilverCost;
		silicon -= eCellSiliconCost;
		gold -= eCellGoldCost;
		eCell += 1;
		eCellGoldCost = Math.floor(34200 * Math.pow(1.1,eCell));
		eCellSiliconCost = Math.floor(25800 * Math.pow(1.1,eCell));
		eCellSilverCost = Math.floor(37200 * Math.pow(1.1,eCell));
		document.getElementById("eCell").innerHTML = eCell;
		document.getElementById("eCellSilverCost").innerHTML = commafy(eCellSilverCost);
		document.getElementById("eCellSiliconCost").innerHTML = commafy(eCellSiliconCost);
		document.getElementById("eCellGoldCost").innerHTML = commafy(eCellGoldCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getHindenburg(){
	if(spaceMetal >= hindenburgSpaceMetalCost && methane >= hindenburgMethaneCost && meteorite >= hindenburgMeteoriteCost){
		spaceMetal -= hindenburgSpaceMetalCost;
		methane -= hindenburgMethaneCost;
		meteorite -= hindenburgMeteoriteCost;
		hindenburg += 1;
		hindenburgMeteoriteCost = Math.floor(710 * Math.pow(1.1,hindenburg));
		hindenburgMethaneCost = Math.floor(134000 * Math.pow(1.1,hindenburg));
		hindenburgSpaceMetalCost = Math.floor(172000 * Math.pow(1.1,hindenburg));
		document.getElementById("hindenburg").innerHTML = hindenburg;
		document.getElementById("hindenburgSpaceMetalCost").innerHTML = commafy(hindenburgSpaceMetalCost);
		document.getElementById("hindenburgMethaneCost").innerHTML = commafy(hindenburgMethaneCost);
		document.getElementById("hindenburgMeteoriteCost").innerHTML = commafy(hindenburgMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getDrone(){
	if(spaceMetal >= droneSpaceMetalCost && silicon >= droneSiliconCost){
		spaceMetal -= droneSpaceMetalCost;
		silicon -= droneSiliconCost;
		drone += 1;
		droneSiliconCost = Math.floor(6000 * Math.pow(1.1,drone));
		droneSpaceMetalCost = Math.floor(8400 * Math.pow(1.1,drone));
		document.getElementById("drone").innerHTML = drone;
		document.getElementById("droneSpaceMetalCost").innerHTML = commafy(droneSpaceMetalCost);
		document.getElementById("droneSiliconCost").innerHTML = commafy(droneSiliconCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getTanker(){
	if(spaceMetal >= tankerSpaceMetalCost && titanium >= tankerTitaniumCost && silicon >= tankerSiliconCost){
		spaceMetal -= tankerSpaceMetalCost;
		titanium -= tankerTitaniumCost;
		silicon -= tankerSiliconCost;
		tanker += 1;
		tankerSiliconCost = Math.floor(8400 * Math.pow(1.1,tanker));
		tankerTitaniumCost = Math.floor(10200 * Math.pow(1.1,tanker));
		tankerSpaceMetalCost = Math.floor(12600 * Math.pow(1.1,tanker));
		document.getElementById("tanker").innerHTML = tanker;
		document.getElementById("tankerSpaceMetalCost").innerHTML = commafy(tankerSpaceMetalCost);
		document.getElementById("tankerTitaniumCost").innerHTML = commafy(tankerTitaniumCost);
		document.getElementById("tankerSiliconCost").innerHTML = commafy(tankerSiliconCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getCompressor(){
	if(spaceMetal >= compressorSpaceMetalCost && titanium >= compressorTitaniumCost && silicon >= compressorSiliconCost){
		spaceMetal -= compressorSpaceMetalCost;
		titanium -= compressorTitaniumCost;
		silicon -= compressorSiliconCost;
		compressor += 1;
		compressorSiliconCost = Math.floor(35400 * Math.pow(1.1,compressor));
		compressorTitaniumCost = Math.floor(43800 * Math.pow(1.1,compressor));
		compressorSpaceMetalCost = Math.floor(63000 * Math.pow(1.1,compressor));
		document.getElementById("compressor").innerHTML = compressor;
		document.getElementById("compressorSpaceMetalCost").innerHTML = commafy(compressorSpaceMetalCost);
		document.getElementById("compressorTitaniumCost").innerHTML = commafy(compressorTitaniumCost);
		document.getElementById("compressorSiliconCost").innerHTML = commafy(compressorSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getSkimmer(){
	if(spaceMetal >= skimmerSpaceMetalCost && titanium >= skimmerTitaniumCost && meteorite >= skimmerMeteoriteCost){
		spaceMetal -= skimmerSpaceMetalCost;
		titanium -= skimmerTitaniumCost;
		meteorite -= skimmerMeteoriteCost;
		skimmer += 1;
		skimmerMeteoriteCost = Math.floor(770 * Math.pow(1.1,skimmer));
		skimmerTitaniumCost = Math.floor(173000 * Math.pow(1.1,skimmer));
		skimmerSpaceMetalCost = Math.floor(255000 * Math.pow(1.1,skimmer));
		document.getElementById("skimmer").innerHTML = skimmer;
		document.getElementById("skimmerSpaceMetalCost").innerHTML = commafy(skimmerSpaceMetalCost);
		document.getElementById("skimmerTitaniumCost").innerHTML = commafy(skimmerTitaniumCost);
		document.getElementById("skimmerMeteoriteCost").innerHTML = commafy(skimmerMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getIcePick(){
	if(spaceMetal >= icePickSpaceMetalCost && gem >= icePickGemCost){
		spaceMetal -= icePickSpaceMetalCost;
		gem -= icePickGemCost;
		icePick += 1;
		icePickGemCost = Math.floor(19300 * Math.pow(1.1,icePick));
		icePickSpaceMetalCost = Math.floor(17800 * Math.pow(1.1,icePick));
		document.getElementById("icePick").innerHTML = icePick;
		document.getElementById("icePickSpaceMetalCost").innerHTML = commafy(icePickSpaceMetalCost);
		document.getElementById("icePickGemCost").innerHTML = commafy(icePickGemCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getIceDrill(){
	if(spaceMetal >= iceDrillSpaceMetalCost && titanium >= iceDrillTitaniumCost && silicon >= iceDrillSiliconCost){
		spaceMetal -= iceDrillSpaceMetalCost;
		titanium -= iceDrillTitaniumCost;
		silicon -= iceDrillSiliconCost;
		iceDrill += 1;
		iceDrillSiliconCost = Math.floor(19600 * Math.pow(1.1,iceDrill));
		iceDrillTitaniumCost = Math.floor(21200 * Math.pow(1.1,iceDrill));
		iceDrillSpaceMetalCost = Math.floor(23900 * Math.pow(1.1,iceDrill));
		document.getElementById("iceDrill").innerHTML = iceDrill;
		document.getElementById("iceDrillSpaceMetalCost").innerHTML = commafy(iceDrillSpaceMetalCost);
		document.getElementById("iceDrillTitaniumCost").innerHTML = commafy(iceDrillTitaniumCost);
		document.getElementById("iceDrillSiliconCost").innerHTML = commafy(iceDrillSiliconCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}

function getFreezer(){
	if(spaceMetal >= freezerSpaceMetalCost && titanium >= freezerTitaniumCost && silicon >= freezerSiliconCost){
		spaceMetal -= freezerSpaceMetalCost;
		titanium -= freezerTitaniumCost;
		silicon -= freezerSiliconCost;
		freezer += 1;
		freezerSiliconCost = Math.floor(73000 * Math.pow(1.1,freezer));
		freezerTitaniumCost = Math.floor(86000 * Math.pow(1.1,freezer));
		freezerSpaceMetalCost = Math.floor(117000 * Math.pow(1.1,freezer));
		document.getElementById("freezer").innerHTML = freezer;
		document.getElementById("freezerSpaceMetalCost").innerHTML = commafy(freezerSpaceMetalCost);
		document.getElementById("freezerTitaniumCost").innerHTML = commafy(freezerTitaniumCost);
		document.getElementById("freezerSiliconCost").innerHTML = commafy(freezerSiliconCost);
		refresh();
		Game.statistics.add('tierOwned3');
	}
}

function getMrFreeze(){
	if(spaceMetal >= mrFreezeSpaceMetalCost && helium >= mrFreezeHeliumCost && meteorite >= mrFreezeMeteoriteCost){
		spaceMetal -= mrFreezeSpaceMetalCost;
		helium -= mrFreezeHeliumCost;
		meteorite -= mrFreezeMeteoriteCost;
		mrFreeze += 1;
		mrFreezeMeteoriteCost = Math.floor(1500 * Math.pow(1.1,mrFreeze));
		mrFreezeHeliumCost = Math.floor(14000 * Math.pow(1.1,mrFreeze));
		mrFreezeSpaceMetalCost = Math.floor(519000 * Math.pow(1.1,mrFreeze));
		document.getElementById("mrFreeze").innerHTML = mrFreeze;
		document.getElementById("mrFreezeSpaceMetalCost").innerHTML = commafy(mrFreezeSpaceMetalCost);
		document.getElementById("mrFreezeHeliumCost").innerHTML = commafy(mrFreezeHeliumCost);
		document.getElementById("mrFreezeMeteoriteCost").innerHTML = commafy(mrFreezeMeteoriteCost);
		refresh();
		Game.statistics.add('tierOwned4');
	}
}

function getPrinter(){
	if(spaceMetal >= printerSpaceMetalCost && silicon >= printerSiliconCost){
		spaceMetal -= printerSpaceMetalCost;
		silicon -= printerSiliconCost;
		printer += 1;
		printerSpaceMetalCost = Math.floor(100000 * Math.pow(1.1,printer));
		printerSiliconCost = Math.floor(50000 * Math.pow(1.1,printer));
		document.getElementById("printer").innerHTML = printer;
		document.getElementById("printerSpaceMetalCost").innerHTML = commafy(printerSpaceMetalCost);
		document.getElementById("printerSiliconCost").innerHTML = commafy(printerSiliconCost);
		refresh();
		Game.statistics.add('tierOwned1');
	}
}

function getWeb(){
	if(spaceMetal >= webSpaceMetalCost && uranium >= webUraniumCost && silicon >= webSiliconCost){
		spaceMetal -= webSpaceMetalCost;
		uranium -= webUraniumCost;
		silicon -= webSiliconCost;
		web += 1;
		webSpaceMetalCost = Math.floor(940000 * Math.pow(1.1,web));
		webUraniumCost = Math.floor(490000 * Math.pow(1.1,web));
		webSiliconCost = Math.floor(510000 * Math.pow(1.1,web));
		document.getElementById("web").innerHTML = web;
		document.getElementById("webSpaceMetalCost").innerHTML = commafy(webSpaceMetalCost);
		document.getElementById("webUraniumCost").innerHTML = commafy(webUraniumCost);
		document.getElementById("webSiliconCost").innerHTML = commafy(webSiliconCost);
		refresh();
		Game.statistics.add('tierOwned2');
	}
}