function checkStorages(){
	if(!Game.activeNotifications.storage || Game.activeNotifications.storage.state == "closed"){

		if (Game.constants.enableStorageNotifications === false){
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
			// 	if(window[id] >= getMaxPlasma()){
			// 		resourcesFull += 1;
			// 	}
			// }

		}
		if(resourcesFull >= Game.statistics.get("resourcesUnlocked")){
			Game.notifyStorage();
		}
	}
}

function gainResources(delta){

    charcoal = (charcoal + charcoalps * delta).clamp(0, charcoalStorage);
	energy = (energy + energyps * delta).clamp(0, getMaxEnergy());
    uranium = (uranium + uraniumps * delta).clamp(0, uraniumStorage);
	metal = (metal + metalps * delta).clamp(0, metalStorage);
    gem = (gem + gemps * delta).clamp(0, gemStorage);
	science += scienceps * delta;
    spaceMetal = (spaceMetal + spaceMetalps * delta).clamp(0, spaceMetalStorage);
    methane = (methane + methaneps * delta).clamp(0, methaneStorage);
    titanium = (titanium + titaniumps * delta).clamp(0, titaniumStorage);
    gold = (gold + goldps * delta).clamp(0, goldStorage);
    silver = (silver + silverps * delta).clamp(0, silverStorage);
    silicon = (silicon + siliconps * delta).clamp(0, siliconStorage);
    lava = (lava + lavaps * delta).clamp(0, lavaStorage);
    hydrogen = (hydrogen + hydrogenps * delta).clamp(0, hydrogenStorage);
    helium = (helium + heliumps * delta).clamp(0, heliumStorage);
    ice = (ice + iceps * delta).clamp(0, iceStorage);
    oil = (oil + oilps * delta).clamp(0, oilStorage);
    wood = (wood + woodps * delta).clamp(0, woodStorage);
    meteorite = (meteorite + meteoriteps * delta).clamp(0, meteoriteStorage);
    plasma = (plasma + plasmaps * delta).clamp(0, getMaxPlasma());
    rocketFuel += rocketFuelps * delta;
}

function getMaxPlasma() {
	return 100000 + (50000 * PSU) + (500000 * PSUT2);
}

function getMaxEnergy() {
	return 100000 + (50000 * battery) + (500000 * batteryT2) + (5000000 * batteryT3);
}

// Gain Buttons

function gainPlasma(){
	if(energy >= 1000 && hydrogen >= 10){
		plasma += 1;
		energy -= 1000;
		hydrogen -= 10;
		Game.statistics.add('manualResources');
	}
}

function gainUranium(){
	if(uranium < uraniumStorage){
		uranium += 1;
        Game.statistics.add('manualResources');
	}
}

function gainMetal(){
    if(metal < metalStorage){
        metal += 1;
        Game.statistics.add('manualResources');
    }
}

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
        Game.statistics.add('manualResources');
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += 1;
        Game.statistics.add('manualResources');
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= 2){
		wood -= 2;
		charcoal += 1;
        Game.statistics.add('manualResources');
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += 1;
        Game.statistics.add('manualResources');
	}
}

function gainSpaceMetal(){
	if(spaceMetal < spaceMetalStorage){
		spaceMetal += 1;
        Game.statistics.add('manualResources');
	}
}

function gainMethane(){
	if(methane < methaneStorage){
		methane += 1;
        Game.statistics.add('manualResources');
	}
}

function gainTitanium(){
	if(titanium < titaniumStorage){
		titanium += 1;
        Game.statistics.add('manualResources');
	}
}

function gainGold(){
	if(gold < goldStorage){
		gold += 1;
        Game.statistics.add('manualResources');
	}
}

function gainSilver(){
	if(silver < silverStorage){
		silver += 1;
        Game.statistics.add('manualResources');
	}
}

function gainSilicon(){
	if(silicon < siliconStorage){
		silicon += 1;
        Game.statistics.add('manualResources');
	}
}

function gainLava(){
	if(lava < lavaStorage){
		lava += 1;
        Game.statistics.add('manualResources');
	}
}

function gainHydrogen(){
	if(hydrogen < hydrogenStorage){
		hydrogen += 1;
        Game.statistics.add('manualResources');
	}
}

function gainHelium(){
	if(helium < heliumStorage){
		helium += 1;
        Game.statistics.add('manualResources');
	}
}

function gainIce(){
	if(ice < iceStorage){
		ice += 1;
        Game.statistics.add('manualResources');
	}
}

function gainMeteorite(){
	if(meteorite < meteoriteStorage){
		if(plasma >= 3){
			plasma -= 3;
			meteorite += 1;
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
	}
}

function upgradeOilStorage(){
	if(oil >= oilStorage && metal >= oilStorage/2.5){
		oil -= oilStorage;
		metal -= oilStorage/2.5;
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
	}
}

function upgradeMetalStorage(){
	if(metal >= metalStorage){
		metal -= metalStorage;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
	}
}

function upgradeGemStorage(){
	if(gem >= gemStorage && metal >= gemStorage/2.5){
		gem -= gemStorage;
		metal -= gemStorage/2.5;
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
	}
}

function upgradeCharcoalStorage(){
	if(charcoal >= charcoalStorage && metal >= charcoalStorage/2.5){
		charcoal -= charcoalStorage;
		metal -= charcoalStorage/2.5;
		charcoalStorage = charcoalNextStorage;
		charcoalNextStorage *= 2;
	}
}

function upgradeWoodStorage(){
	if(wood >= woodStorage && metal >= woodStorage/2.5){
		wood -= woodStorage;
		metal -= woodStorage/2.5;
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
	}
}

function upgradeSpaceMetalStorage(){
	if(spaceMetal >= spaceMetalStorage && metal >= spaceMetalStorage*4){
		spaceMetal -= spaceMetalStorage;
		metal -= spaceMetalStorage*4;
		spaceMetalStorage = spaceMetalNextStorage;
		spaceMetalNextStorage *= 2;
	}
}

function upgradeMethaneStorage(){
	if(methane >= methaneStorage && spaceMetal >= methaneStorage/2.5){
		methane -= methaneStorage;
		spaceMetal -= methaneStorage/2.5;
		methaneStorage = methaneNextStorage;
		methaneNextStorage *= 2;
	}
}

function upgradeTitaniumStorage(){
	if(titanium >= titaniumStorage && spaceMetal >= titaniumStorage/2.5){
		titanium -= titaniumStorage;
		spaceMetal -= titaniumStorage/2.5;
		titaniumStorage = titaniumNextStorage;
		titaniumNextStorage *= 2;
	}
}

function upgradeGoldStorage(){
	if(gold >= goldStorage && spaceMetal >= goldStorage/2.5){
		gold -= goldStorage;
		spaceMetal -= goldStorage/2.5;
		goldStorage = goldNextStorage;
		goldNextStorage *= 2;
	}
}

function upgradeSilverStorage(){
	if(silver >= silverStorage && spaceMetal >= silverStorage/2.5){
		silver -= silverStorage;
		spaceMetal -= silverStorage/2.5;
		silverStorage = silverNextStorage;
		silverNextStorage *= 2;
	}
}

function upgradeSiliconStorage(){
	if(silicon >= siliconStorage && spaceMetal >= siliconStorage/2.5){
		silicon -= siliconStorage;
		spaceMetal -= siliconStorage/2.5;
		siliconStorage = siliconNextStorage;
		siliconNextStorage *= 2;
	}
}

function upgradeLavaStorage(){
	if(lava >= lavaStorage && spaceMetal >= lavaStorage/2.5){
		lava -= lavaStorage;
		spaceMetal -= lavaStorage/2.5;
		lavaStorage = lavaNextStorage;
		lavaNextStorage *= 2;
	}
}

function upgradeHydrogenStorage(){
	if(hydrogen >= hydrogenStorage && spaceMetal >= hydrogenStorage/2.5){
		hydrogen -= hydrogenStorage;
		spaceMetal -= hydrogenStorage/2.5;
		hydrogenStorage = hydrogenNextStorage;
		hydrogenNextStorage *= 2;
	}
}

function upgradeHeliumStorage(){
	if(helium >= heliumStorage && spaceMetal >= heliumStorage/2.5){
		helium -= heliumStorage;
		spaceMetal -= heliumStorage/2.5;
		heliumStorage = heliumNextStorage;
		heliumNextStorage *= 2;
	}
}

function upgradeIceStorage(){
	if(ice >= iceStorage && spaceMetal >= iceStorage/2.5){
		ice -= iceStorage;
		spaceMetal -= iceStorage/2.5;
		iceStorage = iceNextStorage;
		iceNextStorage *= 2;
	}
}

function upgradeMeteoriteStorage(){
	if(meteorite >= meteoriteStorage && spaceMetal >= meteoriteStorage*4){
		meteorite -= meteoriteStorage;
		spaceMetal -= meteoriteStorage*4;
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

function toggleRocketFuel(){
    rocketFuelToggled = !rocketFuelToggled;
}

function toggleMeteorite(){
    meteoriteToggled = !meteoriteToggled;
}

function destroyMachine(machine, id){
	if(window[id] > 0){
		window[id] -= 1;
	}
}

function getPSU(){
	if(silver >= PSUSilverCost && gold >= PSUGoldCost && uranium >= PSUUraniumCost ){
		silver -= PSUSilverCost;
		gold -= PSUGoldCost;
		uranium -= PSUUraniumCost;
		PSU += 1;
		PSUSilverCost = Math.floor(770000 * Math.pow(1.1,PSU));
		PSUGoldCost = Math.floor(770000 * Math.pow(1.1,PSU));
		PSUUraniumCost = Math.floor(550000 * Math.pow(1.1,PSU));
        Game.statistics.add('tierOwned1');
	}
}

function getPSUT2(){
	if(silver >= PSUT2SilverCost && gold >= PSUT2GoldCost && uranium >= PSUT2UraniumCost ){
		silver -= PSUT2SilverCost;
		gold -= PSUT2GoldCost;
		uranium -= PSUT2UraniumCost;
		PSUT2 += 1;
		PSUT2SilverCost = Math.floor(9300000 * Math.pow(1.1,PSUT2));
		PSUT2GoldCost = Math.floor(9300000 * Math.pow(1.1,PSUT2));
		PSUT2UraniumCost = Math.floor(6800000 * Math.pow(1.1,PSUT2));
        Game.statistics.add('tierOwned2');
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
        Game.statistics.add('tierOwned2');
    }
}

function getBatteryT3(){
    if(metal >= batteryT3MetalCost && gem >= batteryT3GemCost && spaceMetal >= batteryT3SpaceMetalCost ){
        metal -= batteryT3MetalCost;
        gem -= batteryT3GemCost;
        spaceMetal -= batteryT3SpaceMetalCost;
        batteryT3 += 1;
        batteryT3MetalCost = Math.floor(5500000 * Math.pow(1.1,batteryT3));
        batteryT3GemCost = Math.floor(5500000 * Math.pow(1.1,batteryT3));
        batteryT3SpaceMetalCost = Math.floor(3300000 * Math.pow(1.1,batteryT3));
        Game.statistics.add('tierOwned3');
    }
}

function getCharcoalEngine(){
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		charcoalEngineMetalCost = Math.floor(50 * Math.pow(1.1,charcoalEngine));
		charcoalEngineGemCost = Math.floor(25 * Math.pow(1.1,charcoalEngine));
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
		if(researchUnlocked === false){
			if(miner >= 1){
				document.getElementById("researchTab").className = "";
				researchUnlocked = true;
				tabsUnlocked.push("researchTab");
				newUnlock("research");
				Game.notifySuccess("New Tab!", "You've unlocked the Research Tab!");
			}
		}

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
        Game.statistics.add('tierOwned4');
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= moonWorkerGemCost;
		moonWorker += 1;
		moonWorkerGemCost = Math.floor(500 * Math.pow(1.1,moonWorker));
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
		Game.statistics.add('tierOwned4');
	}
}

function getExplorer(){
	if(gem >= explorerGemCost){
		gem -= explorerGemCost;
		explorer += 1;
		explorerGemCost = Math.floor(1000 * Math.pow(1.1,explorer));
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
		Game.statistics.add('tierOwned3');
	}
}

function getMrFreeze(){
	if(wood >= mrFreezeWoodCost && helium >= mrFreezeHeliumCost && meteorite >= mrFreezeMeteoriteCost){
		wood -= mrFreezeWoodCost;
		helium -= mrFreezeHeliumCost;
		meteorite -= mrFreezeMeteoriteCost;
		mrFreeze += 1;
		mrFreezeMeteoriteCost = Math.floor(1500 * Math.pow(1.1,mrFreeze));
		mrFreezeHeliumCost = Math.floor(14000 * Math.pow(1.1,mrFreeze));
		mrFreezeWoodCost = Math.floor(379000 * Math.pow(1.1,mrFreeze));
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
		Game.statistics.add('tierOwned2');
	}
}
