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
	rocketFuel += rocketFuelps * delta;
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
	if(resource === RESOURCE.PLASMA){
		if(getResource(RESOURCE.ENERGY) >= 1000 * gainNum && getResource(RESOURCE.HYDROGEN) >= 10 * gainNum && getResource(RESOURCE.PLASMA) < getMaxPlasma()){
			Game.resources.addResource(RESOURCE.PLASMA, gainNum);
			Game.resources.takeResource(RESOURCE.ENERGY, 1000 * gainNum);
			Game.resources.takeResource(RESOURCE.HYDROGEN, 10 * gainNum);
			Game.statistics.add('manualResources', gainNum);
		}
	} else if(resource === RESOURCE.CHARCOAL){
		if(getResource(RESOURCE.CHARCOAL) < getStorage(RESOURCE.CHARCOAL) && getResource(RESOURCE.WOOD) >= 2 * gainNum){
			Game.resources.addResource(RESOURCE.CHARCOAL, gainNum);
			Game.resources.takeResource(RESOURCE.WOOD, 2 * gainNum);
			Game.statistics.add('manualResources', gainNum);
		}
	} else if(resource === RESOURCE.METEORITE){
		if(getResource(RESOURCE.METEORITE) < getStorage(RESOURCE.METEORITE)){
			if(getResource(RESOURCE.PLASMA) >= 3 * gainNum){
				Game.resources.addResource(RESOURCE.METEORITE, gainNum);
				Game.resources.takeResource(RESOURCE.PLASMA, 3 * gainNum);
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
	if(getResource(RESOURCE.URANIUM) >= getStorage(RESOURCE.URANIUM) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.URANIUM)/2.5){
		Game.resources.takeResource(RESOURCE.URANIUM, getStorage(RESOURCE.URANIUM));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.URANIUM)/2.5);
		uraniumStorage = uraniumNextStorage;
		uraniumNextStorage *= 2;
	}
}

function upgradeOilStorage(){
	if(getResource(RESOURCE.OIL) >= getStorage(RESOURCE.OIL) && getResource(RESOURCE.METAL) >= getStorage(RESOURCE.OIL)/2.5){
		Game.resources.takeResource(RESOURCE.OIL, getStorage(RESOURCE.OIL));
		Game.resources.takeResource(RESOURCE.METAL, getStorage(RESOURCE.OIL)/2.5);
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
	}
}

function upgradeMetalStorage(){
	if(getResource(RESOURCE.METAL) >= getStorage(RESOURCE.METAL)){
		Game.resources.takeResource(RESOURCE.METAL, getStorage(RESOURCE.METAL));
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
	}
}

function upgradeGemStorage(){
	if(getResource(RESOURCE.GEM) >= getStorage(RESOURCE.GEM) && getResource(RESOURCE.METAL) >= getStorage(RESOURCE.GEM)/2.5){
		Game.resources.takeResource(RESOURCE.GEM, getStorage(RESOURCE.GEM));
		Game.resources.takeResource(RESOURCE.METAL, getStorage(RESOURCE.GEM)/2.5);
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
	}
}

function upgradeCharcoalStorage(){
	if(getResource(RESOURCE.CHARCOAL) >= getStorage(RESOURCE.CHARCOAL) && getResource(RESOURCE.METAL) >= getStorage(RESOURCE.CHARCOAL)/2.5){
		Game.resources.takeResource(RESOURCE.CHARCOAL, getStorage(RESOURCE.CHARCOAL));
		Game.resources.takeResource(RESOURCE.METAL, getStorage(RESOURCE.CHARCOAL)/2.5);
		charcoalStorage = charcoalNextStorage;
		charcoalNextStorage *= 2;
	}
}

function upgradeWoodStorage(){
	if(getResource(RESOURCE.WOOD) >= getStorage(RESOURCE.WOOD) && getResource(RESOURCE.METAL) >= getStorage(RESOURCE.WOOD)/2.5){
		Game.resources.takeResource(RESOURCE.WOOD, getStorage(RESOURCE.WOOD));
		Game.resources.takeResource(RESOURCE.METAL, getStorage(RESOURCE.WOOD)/2.5);
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
	}
}

function upgradeLunariteStorage(){
	if(getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.LUNARITE) && getResource(RESOURCE.METAL) >= getStorage(RESOURCE.LUNARITE)*4){
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.LUNARITE));
		Game.resources.takeResource(RESOURCE.METAL, getStorage(RESOURCE.LUNARITE)*4);
		lunariteStorage = lunariteNextStorage;
		lunariteNextStorage *= 2;
	}
}

function upgradeMethaneStorage(){
	if(getResource(RESOURCE.METHANE) >= getStorage(RESOURCE.METHANE) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.METHANE)/2.5){
		Game.resources.takeResource(RESOURCE.METHANE, getStorage(RESOURCE.METHANE));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.METHANE)/2.5);
		methaneStorage = methaneNextStorage;
		methaneNextStorage *= 2;
	}
}

function upgradeTitaniumStorage(){
	if(getResource(RESOURCE.TITANIUM) >= getStorage(RESOURCE.TITANIUM) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.TITANIUM)/2.5){
		Game.resources.takeResource(RESOURCE.TITANIUM, getStorage(RESOURCE.TITANIUM));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.TITANIUM)/2.5);
		titaniumStorage = titaniumNextStorage;
		titaniumNextStorage *= 2;
	}
}

function upgradeGoldStorage(){
	if(getResource(RESOURCE.GOLD) >= getStorage(RESOURCE.GOLD) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.GOLD)/2.5){
		Game.resources.takeResource(RESOURCE.GOLD, getStorage(RESOURCE.GOLD));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.GOLD)/2.5);
		goldStorage = goldNextStorage;
		goldNextStorage *= 2;
	}
}

function upgradeSilverStorage(){
	if(silver >= getStorage(RESOURCE.SILVER) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.SILVER)/2.5){
		Game.resources.takeResource(RESOURCE.SILVER, getStorage(RESOURCE.SILVER));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.SILVER)/2.5);
		silverStorage = silverNextStorage;
		silverNextStorage *= 2;
	}
}

function upgradeSiliconStorage(){
	if(getResource(RESOURCE.SILICON) >= getStorage(RESOURCE.SILICON) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.SILICON)/2.5){
		Game.resources.takeResource(RESOURCE.SILICON, getStorage(RESOURCE.SILICON));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.SILICON)/2.5);
		siliconStorage = siliconNextStorage;
		siliconNextStorage *= 2;
	}
}

function upgradeLavaStorage(){
	if(getResource(RESOURCE.LAVA) >= getStorage(RESOURCE.LAVA) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.LAVA)/2.5){
		Game.resources.takeResource(RESOURCE.LAVA, getStorage(RESOURCE.LAVA));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.LAVA)/2.5);
		lavaStorage = lavaNextStorage;
		lavaNextStorage *= 2;
	}
}

function upgradeHydrogenStorage(){
	if(getResource(RESOURCE.HYDROGEN) >= getStorage(RESOURCE.HYDROGEN) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.HYDROGEN)/2.5){
		Game.resources.takeResource(RESOURCE.HYDROGEN, getStorage(RESOURCE.HYDROGEN));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.HYDROGEN)/2.5);
		hydrogenStorage = hydrogenNextStorage;
		hydrogenNextStorage *= 2;
	}
}

function upgradeHeliumStorage(){
	if(getResource(RESOURCE.HELIUM) >= getStorage(RESOURCE.HELIUM) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.HELIUM)/2.5){
		Game.resources.takeResource(RESOURCE.HELIUM, getStorage(RESOURCE.HELIUM));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.HELIUM)/2.5);
		heliumStorage = heliumNextStorage;
		heliumNextStorage *= 2;
	}
}

function upgradeIceStorage(){
	if(getResource(RESOURCE.ICE) >= getStorage(RESOURCE.ICE) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.ICE)/2.5){
		Game.resources.takeResource(RESOURCE.ICE, getStorage(RESOURCE.ICE));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.ICE)/2.5);
		iceStorage = iceNextStorage;
		iceNextStorage *= 2;
	}
}

function upgradeMeteoriteStorage(){
	if(getResource(RESOURCE.METEORITE) >= getStorage(RESOURCE.METEORITE) && getResource(RESOURCE.LUNARITE) >= getStorage(RESOURCE.METEORITE)*4){
		Game.resources.takeResource(RESOURCE.METEORITE, getStorage(RESOURCE.METEORITE));
		Game.resources.takeResource(RESOURCE.LUNARITE, getStorage(RESOURCE.METEORITE)*4);
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

function toggleAntimatter(){
	antimatterToggled = !antimatterToggled;
}

function destroyMachine(id){
	if(window[id] > 0){
		window[id] -= 1;
		updateCost();
	}
}

function updateCost(){
	PSUSilverCost = Math.floor(770000 * Math.pow(1.1,PSU));
	PSUGoldCost = Math.floor(770000 * Math.pow(1.1,PSU));
	PSUUraniumCost = Math.floor(550000 * Math.pow(1.1,PSU));

	PSUT2SilverCost = Math.floor(9300000 * Math.pow(1.1,PSUT2));
	PSUT2GoldCost = Math.floor(9300000 * Math.pow(1.1,PSUT2));
	PSUT2UraniumCost = Math.floor(6800000 * Math.pow(1.1,PSUT2));

	heaterLunariteCost = Math.floor(75000 * Math.pow(1.1,heater));
	heaterGemCost = Math.floor(68000 * Math.pow(1.1,heater));
	heaterSiliconCost = Math.floor(59000 * Math.pow(1.1,heater));

	plasmaticLunariteCost = Math.floor(810000 * Math.pow(1.1,plasmatic));
	plasmaticSiliconCost = Math.floor(720000 * Math.pow(1.1,plasmatic));
	plasmaticMeteoriteCost = Math.floor(970 * Math.pow(1.1,plasmatic));

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

	charcoalEngineMetalCost = Math.floor(50 * Math.pow(1.1,charcoalEngine));
	charcoalEngineGemCost = Math.floor(25 * Math.pow(1.1,charcoalEngine));

	solarPanelMetalCost = Math.floor(30 * Math.pow(1.1,solarPanel));
	solarPanelGemCost = Math.floor(35 * Math.pow(1.1,solarPanel));

	methaneStationLunariteCost = Math.floor(110 * Math.pow(1.1,methaneStation));
	methaneStationTitaniumCost = Math.floor(90 * Math.pow(1.1,methaneStation));

	nuclearStationLunariteCost = Math.floor(20000 * Math.pow(1.1,nuclearStation));
	nuclearStationTitaniumCost = Math.floor(10000 * Math.pow(1.1,nuclearStation));

	magmaticLunariteCost = Math.floor(25000 * Math.pow(1.1,magmatic));
	magmaticGemCost = Math.floor(30000 * Math.pow(1.1,magmatic));
	magmaticSilverCost = Math.floor(20000 * Math.pow(1.1,magmatic));

	fusionReactorLunariteCost = Math.floor(30000 * Math.pow(1.1,fusionReactor));
	fusionReactorTitaniumCost = Math.floor(20000 * Math.pow(1.1,fusionReactor));
	fusionReactorSiliconCost = Math.floor(15000 * Math.pow(1.1,fusionReactor));

	grinderTitaniumCost = Math.floor(2000 * Math.pow(1.1,grinder));
	grinderLunariteCost = Math.floor(4000 * Math.pow(1.1,grinder));
	grinderGoldCost = Math.floor(2000 * Math.pow(1.1,grinder));

	cubicUraniumCost = Math.floor(80 * Math.pow(1.1,cubic));
	cubicLunariteCost = Math.floor(10000 * Math.pow(1.1,cubic));
	cubicOilCost = Math.floor(10000 * Math.pow(1.1,cubic));

	enricherSiliconCost = Math.floor(21700 * Math.pow(1.1,enricher));
	enricherTitaniumCost = Math.floor(23000 * Math.pow(1.1,enricher));
	enricherLunariteCost = Math.floor(13500 * Math.pow(1.1,enricher));

	recyclerMeteoriteCost = Math.floor(830 * Math.pow(1.1,recycler));
	recyclerMethaneCost = Math.floor(47000 * Math.pow(1.1,recycler));
	recyclerLunariteCost = Math.floor(93100 * Math.pow(1.1,recycler));

	pumpMetalCost = Math.floor(60 * Math.pow(1.1,pump));
	pumpGemCost = Math.floor(20 * Math.pow(1.1,pump));

	pumpjackOilCost = Math.floor(50 * Math.pow(1.1,pumpjack));
	pumpjackGemCost = Math.floor(85 * Math.pow(1.1,pumpjack));
	pumpjackMetalCost = Math.floor(250 * Math.pow(1.1,pumpjack));

	oilFieldSiliconCost = Math.floor(3900 * Math.pow(1.1,oilField));
	oilFieldTitaniumCost = Math.floor(2700 * Math.pow(1.1,oilField));
	oilFieldLunariteCost = Math.floor(2400 * Math.pow(1.1,oilField));

	oilRigMeteoriteCost = Math.floor(760 * Math.pow(1.1,oilRig));
	oilRigTitaniumCost = Math.floor(16800 * Math.pow(1.1,oilRig));
	oilRigLunariteCost = Math.floor(19400 * Math.pow(1.1,oilRig));

	minerWoodCost = Math.floor(5 * Math.pow(1.1,miner));
	minerMetalCost = Math.floor(10 * Math.pow(1.1,miner));

	heavyDrillOilCost = Math.floor(50 * Math.pow(1.1,heavyDrill));
	heavyDrillGemCost = Math.floor(60 * Math.pow(1.1,heavyDrill));
	heavyDrillMetalCost = Math.floor(160 * Math.pow(1.1,heavyDrill));

	gigaDrillSiliconCost = Math.floor(4100 * Math.pow(1.1,gigaDrill));
	gigaDrillGemCost = Math.floor(3400 * Math.pow(1.1,gigaDrill));
	gigaDrillLunariteCost = Math.floor(2800 * Math.pow(1.1,gigaDrill));

	quantumDrillMeteoriteCost = Math.floor(900 * Math.pow(1.1,quantumDrill));
	quantumDrillGoldCost = Math.floor(18700 * Math.pow(1.1,quantumDrill));
	quantumDrillLunariteCost = Math.floor(29000 * Math.pow(1.1,quantumDrill));

	gemMinerGemCost = Math.floor(10 * Math.pow(1.1,gemMiner));
	gemMinerMetalCost = Math.floor(15 * Math.pow(1.1,gemMiner));

	advancedDrillOilCost = Math.floor(60 * Math.pow(1.1,advancedDrill));
	advancedDrillGemCost = Math.floor(200 * Math.pow(1.1,advancedDrill));
	advancedDrillMetalCost = Math.floor(120 * Math.pow(1.1,advancedDrill));

	diamondDrillSiliconCost = Math.floor(4500 * Math.pow(1.1,diamondDrill));
	diamondDrillGemCost = Math.floor(8000 * Math.pow(1.1,diamondDrill));
	diamondDrillLunariteCost = Math.floor(3400 * Math.pow(1.1,diamondDrill));

	carbyneDrillMeteoriteCost = Math.floor(800 * Math.pow(1.1,carbyneDrill));
	carbyneDrillGemCost = Math.floor(27000 * Math.pow(1.1,carbyneDrill));
	carbyneDrillLunariteCost = Math.floor(21000 * Math.pow(1.1,carbyneDrill));

	woodburnerWoodCost = Math.floor(5 * Math.pow(1.1,woodburner));
	woodburnerMetalCost = Math.floor(10 * Math.pow(1.1,woodburner));

	furnaceWoodCost = Math.floor(40 * Math.pow(1.1,furnace));
	furnaceOilCost = Math.floor(100 * Math.pow(1.1,furnace));
	furnaceMetalCost = Math.floor(80 * Math.pow(1.1,furnace));

	kilnSiliconCost = Math.floor(3800 * Math.pow(1.1,kiln));
	kilnGemCost = Math.floor(6200 * Math.pow(1.1,kiln));
	kilnLunariteCost = Math.floor(3500 * Math.pow(1.1,kiln));

	fryerMeteoriteCost = Math.floor(560 * Math.pow(1.1,fryer));
	fryerLavaCost = Math.floor(12500 * Math.pow(1.1,fryer));
	fryerLunariteCost = Math.floor(15800 * Math.pow(1.1,fryer));

	woodcutterWoodCost = Math.floor(5 * Math.pow(1.1,woodcutter));
	woodcutterMetalCost = Math.floor(10 * Math.pow(1.1,woodcutter));

	laserCutterOilCost = Math.floor(40 * Math.pow(1.1,laserCutter));
	laserCutterGemCost = Math.floor(90 * Math.pow(1.1,laserCutter));
	laserCutterMetalCost = Math.floor(50 * Math.pow(1.1,laserCutter));

	deforesterLunariteCost = Math.floor(3000 * Math.pow(1.1,deforester));
	deforesterTitaniumCost = Math.floor(2700 * Math.pow(1.1,deforester));
	deforesterSiliconCost = Math.floor(2500 * Math.pow(1.1,deforester));

	infuserLunariteCost = Math.floor(16000 * Math.pow(1.1,infuser));
	infuserOilCost = Math.floor(31200 * Math.pow(1.1,infuser));
	infuserMeteoriteCost = Math.floor(490 * Math.pow(1.1,infuser));

	moonWorkerGemCost = Math.floor(500 * Math.pow(1.1,moonWorker));

	moonDrillOilCost = Math.floor(400 * Math.pow(1.1,moonDrill));
	moonDrillGemCost = Math.floor(600 * Math.pow(1.1,moonDrill));
	moonDrillMetalCost = Math.floor(1000 * Math.pow(1.1,moonDrill));

	moonQuarrySiliconCost = Math.floor(3500 * Math.pow(1.1,moonQuarry));
	moonQuarryGemCost = Math.floor(5000 * Math.pow(1.1,moonQuarry));
	moonQuarryLunariteCost = Math.floor(8000 * Math.pow(1.1,moonQuarry));

	planetExcavatorMeteoriteCost = Math.floor(500 * Math.pow(1.1,planetExcavator));
	planetExcavatorIceCost = Math.floor(37000 * Math.pow(1.1,planetExcavator));
	planetExcavatorTitaniumCost = Math.floor(45000 * Math.pow(1.1,planetExcavator));

	vacuumGemCost = Math.floor(500 * Math.pow(1.1,vacuum));
	vacuumLunariteCost = Math.floor(50 * Math.pow(1.1,vacuum));

	suctionExcavatorOilCost = Math.floor(600 * Math.pow(1.1,suctionExcavator));
	suctionExcavatorGemCost = Math.floor(800 * Math.pow(1.1,suctionExcavator));
	suctionExcavatorLunariteCost = Math.floor(100 * Math.pow(1.1,suctionExcavator));

	spaceCowSiliconCost = Math.floor(3900 * Math.pow(1.1,spaceCow));
	spaceCowTitaniumCost = Math.floor(2700 * Math.pow(1.1,spaceCow));
	spaceCowLunariteCost = Math.floor(2400 * Math.pow(1.1,spaceCow));

	ventMeteoriteCost = Math.floor(390 * Math.pow(1.1,vent));
	ventHeliumCost = Math.floor(47000 * Math.pow(1.1,vent));
	ventLunariteCost = Math.floor(52000 * Math.pow(1.1,vent));

	explorerGemCost = Math.floor(1000 * Math.pow(1.1,explorer));

	lunariteDrillOilCost = Math.floor(1000 * Math.pow(1.1,lunariteDrill));
	lunariteDrillGemCost = Math.floor(800 * Math.pow(1.1,lunariteDrill));
	lunariteDrillLunariteCost = Math.floor(200 * Math.pow(1.1,lunariteDrill));

	pentaDrillSiliconCost = Math.floor(5600 * Math.pow(1.1,pentaDrill));
	pentaDrillGemCost = Math.floor(11000 * Math.pow(1.1,pentaDrill));
	pentaDrillLunariteCost = Math.floor(14000 * Math.pow(1.1,pentaDrill));

	titanDrillLunariteCost = Math.floor(63000 * Math.pow(1.1,titanDrill));
	titanDrillGoldCost = Math.floor(27000 * Math.pow(1.1,titanDrill));
	titanDrillMeteoriteCost = Math.floor(600 * Math.pow(1.1,titanDrill));

	droidMethaneCost = Math.floor(50 * Math.pow(1.1,droid));
	droidLunariteCost = Math.floor(200 * Math.pow(1.1,droid));

	destroyerOilCost = Math.floor(1000 * Math.pow(1.1,destroyer));
	destroyerGemCost = Math.floor(1500 * Math.pow(1.1,destroyer));
	destroyerLunariteCost = Math.floor(500 * Math.pow(1.1,destroyer));

	deathStarSiliconCost = Math.floor(8200 * Math.pow(1.1,deathStar));
	deathStarSilverCost = Math.floor(11500 * Math.pow(1.1,deathStar));
	deathStarLunariteCost = Math.floor(17000 * Math.pow(1.1,deathStar));

	actuatorMeteoriteCost = Math.floor(600 * Math.pow(1.1,actuator));
	actuatorHeliumCost = Math.floor(15700 * Math.pow(1.1,actuator));
	actuatorLunariteCost = Math.floor(61000 * Math.pow(1.1,actuator));

	scoutTitaniumCost = Math.floor(20 * Math.pow(1.1,scout));
	scoutLunariteCost = Math.floor(100 * Math.pow(1.1,scout));

	spaceLaserOilCost = Math.floor(1200 * Math.pow(1.1,spaceLaser));
	spaceLaserGemCost = Math.floor(900 * Math.pow(1.1,spaceLaser));
	spaceLaserLunariteCost = Math.floor(350 * Math.pow(1.1,spaceLaser));

	berthaSiliconCost = Math.floor(11000 * Math.pow(1.1,bertha));
	berthaTitaniumCost = Math.floor(18200 * Math.pow(1.1,bertha));
	berthaLunariteCost = Math.floor(19500 * Math.pow(1.1,bertha));

	cannonMeteoriteCost = Math.floor(520 * Math.pow(1.1,cannon));
	cannonOilCost = Math.floor(93800 * Math.pow(1.1,cannon));
	cannonLunariteCost = Math.floor(85100 * Math.pow(1.1,cannon));

	blowtorchTitaniumCost = Math.floor(30 * Math.pow(1.1,blowtorch));
	blowtorchLunariteCost = Math.floor(150 * Math.pow(1.1,blowtorch));

	scorcherOilCost = Math.floor(1600 * Math.pow(1.1,scorcher));
	scorcherGemCost = Math.floor(1200 * Math.pow(1.1,scorcher));
	scorcherLunariteCost = Math.floor(500 * Math.pow(1.1,scorcher));

	annihilatorLunariteCost = Math.floor(3000 * Math.pow(1.1,annihilator));
	annihilatorGemCost = Math.floor(8300 * Math.pow(1.1,annihilator));
	annihilatorSilverCost = Math.floor(2400 * Math.pow(1.1,annihilator));

	desertLunariteCost = Math.floor(20000 * Math.pow(1.1,desert));
	desertSiliconCost = Math.floor(17700 * Math.pow(1.1,desert));
	desertMeteoriteCost = Math.floor(400 * Math.pow(1.1,desert));

	crucibleGemCost = Math.floor(7000 * Math.pow(1.1,crucible));
	crucibleLunariteCost = Math.floor(4000 * Math.pow(1.1,crucible));

	extractorSiliconCost = Math.floor(6000 * Math.pow(1.1,extractor));
	extractorTitaniumCost = Math.floor(12000 * Math.pow(1.1,extractor));
	extractorLunariteCost = Math.floor(14000 * Math.pow(1.1,extractor));

	extruderSiliconCost = Math.floor(39000 * Math.pow(1.1,extruder));
	extruderTitaniumCost = Math.floor(57000 * Math.pow(1.1,extruder));
	extruderLunariteCost = Math.floor(69000 * Math.pow(1.1,extruder));

	veluptuatorMeteoriteCost = Math.floor(750 * Math.pow(1.1,veluptuator));
	veluptuatorGoldCost = Math.floor(121000 * Math.pow(1.1,veluptuator));
	veluptuatorLunariteCost = Math.floor(298000 * Math.pow(1.1,veluptuator));

	collectorTitaniumCost = Math.floor(4800 * Math.pow(1.1,collector));
	collectorLunariteCost = Math.floor(6000 * Math.pow(1.1,collector));

	magnetGoldCost = Math.floor(6600 * Math.pow(1.1,magnet));
	magnetTitaniumCost = Math.floor(9600 * Math.pow(1.1,magnet));
	magnetLunariteCost = Math.floor(10800 * Math.pow(1.1,magnet));

	eCellGoldCost = Math.floor(34200 * Math.pow(1.1,eCell));
	eCellSiliconCost = Math.floor(25800 * Math.pow(1.1,eCell));
	eCellSilverCost = Math.floor(37200 * Math.pow(1.1,eCell));

	hindenburgMeteoriteCost = Math.floor(710 * Math.pow(1.1,hindenburg));
	hindenburgMethaneCost = Math.floor(134000 * Math.pow(1.1,hindenburg));
	hindenburgLunariteCost = Math.floor(172000 * Math.pow(1.1,hindenburg));

	droneSiliconCost = Math.floor(6000 * Math.pow(1.1,drone));
	droneLunariteCost = Math.floor(8400 * Math.pow(1.1,drone));

	tankerSiliconCost = Math.floor(8400 * Math.pow(1.1,tanker));
	tankerTitaniumCost = Math.floor(10200 * Math.pow(1.1,tanker));
	tankerLunariteCost = Math.floor(12600 * Math.pow(1.1,tanker));

	compressorSiliconCost = Math.floor(35400 * Math.pow(1.1,compressor));
	compressorTitaniumCost = Math.floor(43800 * Math.pow(1.1,compressor));
	compressorLunariteCost = Math.floor(63000 * Math.pow(1.1,compressor));

	skimmerMeteoriteCost = Math.floor(770 * Math.pow(1.1,skimmer));
	skimmerTitaniumCost = Math.floor(173000 * Math.pow(1.1,skimmer));
	skimmerLunariteCost = Math.floor(255000 * Math.pow(1.1,skimmer));

	icePickGemCost = Math.floor(19300 * Math.pow(1.1,icePick));
	icePickLunariteCost = Math.floor(17800 * Math.pow(1.1,icePick));

	iceDrillSiliconCost = Math.floor(19600 * Math.pow(1.1,iceDrill));
	iceDrillTitaniumCost = Math.floor(21200 * Math.pow(1.1,iceDrill));
	iceDrillLunariteCost = Math.floor(23900 * Math.pow(1.1,iceDrill));

	freezerSiliconCost = Math.floor(73000 * Math.pow(1.1,freezer));
	freezerTitaniumCost = Math.floor(86000 * Math.pow(1.1,freezer));
	freezerLunariteCost = Math.floor(117000 * Math.pow(1.1,freezer));

	mrFreezeMeteoriteCost = Math.floor(1500 * Math.pow(1.1,mrFreeze));
	mrFreezeHeliumCost = Math.floor(14000 * Math.pow(1.1,mrFreeze));
	mrFreezeWoodCost = Math.floor(379000 * Math.pow(1.1,mrFreeze));

	printerLunariteCost = Math.floor(100000 * Math.pow(1.1,printer));
	printerSiliconCost = Math.floor(50000 * Math.pow(1.1,printer));

	webLunariteCost = Math.floor(940000 * Math.pow(1.1,web));
	webUraniumCost = Math.floor(490000 * Math.pow(1.1,web));
	webSiliconCost = Math.floor(510000 * Math.pow(1.1,web));
}

function getPSU(){
	if(getResource(RESOURCE.SILVER) >= PSUSilverCost && getResource(RESOURCE.GOLD) >= PSUGoldCost && getResource(RESOURCE.URANIUM) >= PSUUraniumCost ){
		Game.resources.takeResource(RESOURCE.SILVER, PSUSilverCost);
		Game.resources.takeResource(RESOURCE.GOLD, PSUGoldCost);
		Game.resources.takeResource(RESOURCE.URANIUM, PSUUraniumCost);
		PSU += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPSUT2(){
	if(getResource(RESOURCE.SILVER) >= PSUT2SilverCost && getResource(RESOURCE.GOLD) >= PSUT2GoldCost && getResource(RESOURCE.URANIUM) >= PSUT2UraniumCost ){
		Game.resources.takeResource(RESOURCE.SILVER, PSUT2SilverCost);
		Game.resources.takeResource(RESOURCE.GOLD, PSUT2GoldCost);
		Game.resources.takeResource(RESOURCE.URANIUM, PSUT2UraniumCost);
		PSUT2 += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getHeater(){
	if(getResource(RESOURCE.LUNARITE) >= heaterLunariteCost && getResource(RESOURCE.GEM) >= heaterGemCost && getResource(RESOURCE.SILICON) >= heaterSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, heaterLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, heaterGemCost);
		Game.resources.takeResource(RESOURCE.SILICON, heaterSiliconCost);
		heater += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPlasmatic(){
	if(getResource(RESOURCE.LUNARITE) >= plasmaticLunariteCost && getResource(RESOURCE.SILICON) >= plasmaticSiliconCost && getResource(RESOURCE.METEORITE) >= plasmaticMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, plasmaticLunariteCost);
		Game.resources.takeResource(RESOURCE.SILICON, plasmaticSiliconCost);
		Game.resources.takeResource(RESOURCE.METEORITE, plasmaticMeteoriteCost);
		plasmatic += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBattery(){
	if(getResource(RESOURCE.METAL) >= batteryMetalCost && getResource(RESOURCE.GEM) >= batteryGemCost && getResource(RESOURCE.LUNARITE) >= batteryLunariteCost ){
		Game.resources.takeResource(RESOURCE.METAL, batteryMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, batteryGemCost);
		Game.resources.takeResource(RESOURCE.LUNARITE, batteryLunariteCost);
		battery += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getBatteryT2(){
	if(getResource(RESOURCE.METAL) >= batteryT2MetalCost && getResource(RESOURCE.GEM) >= batteryT2GemCost && getResource(RESOURCE.LUNARITE) >= batteryT2LunariteCost ){
		Game.resources.takeResource(RESOURCE.METAL, batteryT2MetalCost);
		Game.resources.takeResource(RESOURCE.GEM, batteryT2GemCost);
		Game.resources.takeResource(RESOURCE.LUNARITE, batteryT2LunariteCost);
		batteryT2 += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBatteryT3(){
	if(getResource(RESOURCE.METAL) >= batteryT3MetalCost && getResource(RESOURCE.GEM) >= batteryT3GemCost && getResource(RESOURCE.LUNARITE) >= batteryT3LunariteCost ){
		Game.resources.takeResource(RESOURCE.METAL, batteryT3MetalCost);
		Game.resources.takeResource(RESOURCE.GEM, batteryT3GemCost);
		Game.resources.takeResource(RESOURCE.LUNARITE, batteryT3LunariteCost);
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

function getCharcoalEngine(){
	if(getResource(RESOURCE.METAL) >= charcoalEngineMetalCost && getResource(RESOURCE.GEM) >= charcoalEngineGemCost){
		Game.resources.takeResource(RESOURCE.METAL, charcoalEngineMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, charcoalEngineGemCost);
		charcoalEngine += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSolarPanel(){
	if(getResource(RESOURCE.METAL) >= solarPanelMetalCost && getResource(RESOURCE.GEM) >= solarPanelGemCost){
		Game.resources.takeResource(RESOURCE.METAL, solarPanelMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, solarPanelGemCost);
		solarPanel += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getMethaneStation(){
	if(getResource(RESOURCE.LUNARITE) >= methaneStationLunariteCost && getResource(RESOURCE.TITANIUM) >= methaneStationTitaniumCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, methaneStationLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, methaneStationTitaniumCost);
		methaneStation += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getNuclearStation(){
	if(getResource(RESOURCE.LUNARITE) >= nuclearStationLunariteCost && getResource(RESOURCE.TITANIUM) >= nuclearStationTitaniumCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, nuclearStationLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, nuclearStationTitaniumCost);
		nuclearStation += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getMagmatic(){
	if(getResource(RESOURCE.LUNARITE) >= magmaticLunariteCost && getResource(RESOURCE.GEM) >= magmaticGemCost && getResource(RESOURCE.SILVER) >= magmaticSilverCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, magmaticLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, magmaticGemCost);
		Game.resources.takeResource(RESOURCE.SILVER, magmaticSilverCost);
		magmatic += 1;
		updateCost();
		Game.statistics.add('tierOwned5');
	}
}

function getFusionReactor(){
	if(getResource(RESOURCE.LUNARITE) >= fusionReactorLunariteCost && getResource(RESOURCE.TITANIUM) >= fusionReactorTitaniumCost && getResource(RESOURCE.SILICON) >= fusionReactorSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, fusionReactorLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, fusionReactorTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, fusionReactorSiliconCost);
		fusionReactor += 1;
		updateCost();
		Game.statistics.add('tierOwned6');
	}
}

function getGrinder(){
	if(getResource(RESOURCE.TITANIUM) >= grinderTitaniumCost && getResource(RESOURCE.LUNARITE) >= grinderLunariteCost && getResource(RESOURCE.GOLD) >= grinderGoldCost){
		Game.resources.takeResource(RESOURCE.TITANIUM, grinderTitaniumCost);
		Game.resources.takeResource(RESOURCE.LUNARITE, grinderLunariteCost);
		Game.resources.takeResource(RESOURCE.GOLD, grinderGoldCost);
		grinder += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getCubic(){
	if(getResource(RESOURCE.URANIUM) >= cubicUraniumCost && getResource(RESOURCE.LUNARITE) >= cubicLunariteCost && getResource(RESOURCE.OIL) >= cubicOilCost){
		Game.resources.takeResource(RESOURCE.URANIUM, cubicUraniumCost);
		Game.resources.takeResource(RESOURCE.LUNARITE, cubicLunariteCost);
		Game.resources.takeResource(RESOURCE.OIL, cubicOilCost);
		cubic += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getEnricher(){
	if(getResource(RESOURCE.LUNARITE) >= enricherLunariteCost && getResource(RESOURCE.TITANIUM) >= enricherTitaniumCost && getResource(RESOURCE.SILICON) >= enricherSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, enricherLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, enricherTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, enricherSiliconCost);
		enricher += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getRecycler(){
	if(getResource(RESOURCE.LUNARITE) >= recyclerLunariteCost && getResource(RESOURCE.METHANE) >= recyclerMethaneCost && getResource(RESOURCE.METEORITE) >= recyclerMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, recyclerLunariteCost);
		Game.resources.takeResource(RESOURCE.METHANE, recyclerMethaneCost);
		Game.resources.takeResource(RESOURCE.METEORITE, recyclerMeteoriteCost);
		recycler += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getPump(){
	if(getResource(RESOURCE.METAL) >= pumpMetalCost && getResource(RESOURCE.GEM) >= pumpGemCost){
		Game.resources.takeResource(RESOURCE.METAL, pumpMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, pumpGemCost);
		pump += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPumpjack(){
	if(getResource(RESOURCE.METAL) >= pumpjackMetalCost && getResource(RESOURCE.GEM) >= pumpjackGemCost && getResource(RESOURCE.OIL) >= pumpjackOilCost){
		Game.resources.takeResource(RESOURCE.METAL, pumpjackMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, pumpjackGemCost);
		Game.resources.takeResource(RESOURCE.OIL, pumpjackOilCost);
		pumpjack += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getOilField(){
	if(getResource(RESOURCE.LUNARITE) >= oilFieldLunariteCost && getResource(RESOURCE.TITANIUM) >= oilFieldTitaniumCost && getResource(RESOURCE.SILICON) >= oilFieldSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, oilFieldLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, oilFieldTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, oilFieldSiliconCost);
		oilField += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getOilRig(){
	if(getResource(RESOURCE.LUNARITE) >= oilRigLunariteCost && getResource(RESOURCE.TITANIUM) >= oilRigTitaniumCost && getResource(RESOURCE.METEORITE) >= oilRigMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, oilRigLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, oilRigTitaniumCost);
		Game.resources.takeResource(RESOURCE.METEORITE, oilRigMeteoriteCost);
		oilRig += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getMiner(){
	if(getResource(RESOURCE.METAL) >= minerMetalCost && getResource(RESOURCE.WOOD) >= minerWoodCost){
		Game.resources.takeResource(RESOURCE.METAL, minerMetalCost);
		Game.resources.takeResource(RESOURCE.WOOD, minerWoodCost);
		miner += 1;
		updateCost();
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
	if(getResource(RESOURCE.METAL) >= heavyDrillMetalCost && getResource(RESOURCE.GEM) >= heavyDrillGemCost && getResource(RESOURCE.OIL) >= heavyDrillOilCost){
		Game.resources.takeResource(RESOURCE.METAL, heavyDrillMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, heavyDrillGemCost);
		Game.resources.takeResource(RESOURCE.OIL, heavyDrillOilCost);
		heavyDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getGigaDrill(){
	if(getResource(RESOURCE.LUNARITE) >= gigaDrillLunariteCost && getResource(RESOURCE.GEM) >= gigaDrillGemCost && getResource(RESOURCE.SILICON) >= gigaDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, gigaDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, gigaDrillGemCost);
		Game.resources.takeResource(RESOURCE.SILICON, gigaDrillSiliconCost);
		gigaDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getQuantumDrill(){
	if(getResource(RESOURCE.LUNARITE) >= quantumDrillLunariteCost && getResource(RESOURCE.GOLD) >= quantumDrillGoldCost && getResource(RESOURCE.METEORITE) >= quantumDrillMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, quantumDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GOLD, quantumDrillGoldCost);
		Game.resources.takeResource(RESOURCE.METEORITE, quantumDrillMeteoriteCost);
		quantumDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getGemMiner(){
	if(getResource(RESOURCE.METAL) >= gemMinerMetalCost && getResource(RESOURCE.GEM) >= gemMinerGemCost){
		Game.resources.takeResource(RESOURCE.METAL, gemMinerMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, gemMinerGemCost);
		gemMiner += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getAdvancedDrill(){
	if(getResource(RESOURCE.METAL) >= advancedDrillMetalCost && getResource(RESOURCE.GEM) >= advancedDrillGemCost && getResource(RESOURCE.OIL) >= advancedDrillOilCost){
		Game.resources.takeResource(RESOURCE.METAL, advancedDrillMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, advancedDrillGemCost);
		Game.resources.takeResource(RESOURCE.OIL, advancedDrillOilCost);
		advancedDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDiamondDrill(){
	if(getResource(RESOURCE.LUNARITE) >= diamondDrillLunariteCost && getResource(RESOURCE.GEM) >= diamondDrillGemCost && getResource(RESOURCE.SILICON) >= diamondDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, diamondDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, diamondDrillGemCost);
		Game.resources.takeResource(RESOURCE.SILICON, diamondDrillSiliconCost);
		diamondDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getCarbyneDrill(){
	if(getResource(RESOURCE.LUNARITE) >= carbyneDrillLunariteCost && getResource(RESOURCE.GEM) >= carbyneDrillGemCost && getResource(RESOURCE.METEORITE) >= carbyneDrillMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, carbyneDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, carbyneDrillGemCost);
		Game.resources.takeResource(RESOURCE.METEORITE, carbyneDrillMeteoriteCost);
		carbyneDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getWoodburner(){
	if(getResource(RESOURCE.METAL) >= woodburnerMetalCost && getResource(RESOURCE.WOOD) >= woodburnerWoodCost){
		Game.resources.takeResource(RESOURCE.METAL, woodburnerMetalCost);
		Game.resources.takeResource(RESOURCE.WOOD, woodburnerWoodCost);
		woodburner += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getFurnace(){
	if(getResource(RESOURCE.METAL) >= furnaceMetalCost && getResource(RESOURCE.WOOD) >= furnaceWoodCost && getResource(RESOURCE.OIL) >= furnaceOilCost){
		Game.resources.takeResource(RESOURCE.METAL, furnaceMetalCost);
		Game.resources.takeResource(RESOURCE.WOOD, furnaceWoodCost);
		Game.resources.takeResource(RESOURCE.OIL, furnaceOilCost);
		furnace += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getKiln(){
	if(getResource(RESOURCE.LUNARITE) >= kilnLunariteCost && getResource(RESOURCE.GEM) >= kilnGemCost && getResource(RESOURCE.SILICON) >= kilnSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, kilnLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, kilnGemCost);
		Game.resources.takeResource(RESOURCE.SILICON, kilnSiliconCost);
		kiln += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getFryer(){
	if(getResource(RESOURCE.LUNARITE) >= fryerLunariteCost && getResource(RESOURCE.LAVA) >= fryerLavaCost && getResource(RESOURCE.METEORITE) >= fryerMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, fryerLunariteCost);
		Game.resources.takeResource(RESOURCE.LAVA, fryerLavaCost);
		Game.resources.takeResource(RESOURCE.METEORITE, fryerMeteoriteCost);
		fryer += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getWoodcutter(){
	if(getResource(RESOURCE.METAL) >= woodcutterMetalCost && getResource(RESOURCE.WOOD) >= woodcutterWoodCost){
		Game.resources.takeResource(RESOURCE.METAL, woodcutterMetalCost);
		Game.resources.takeResource(RESOURCE.WOOD, woodcutterWoodCost);
		woodcutter += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getLaserCutter(){
	if(getResource(RESOURCE.METAL) >= laserCutterMetalCost && getResource(RESOURCE.GEM) >= laserCutterGemCost && getResource(RESOURCE.OIL) >= laserCutterOilCost){
		Game.resources.takeResource(RESOURCE.METAL, laserCutterMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, laserCutterGemCost);
		Game.resources.takeResource(RESOURCE.OIL, laserCutterOilCost);
		laserCutter += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDeforester(){
	if(getResource(RESOURCE.LUNARITE) >= deforesterLunariteCost && getResource(RESOURCE.TITANIUM) >= deforesterTitaniumCost && getResource(RESOURCE.SILICON) >= deforesterSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, deforesterLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, deforesterTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, deforesterSiliconCost);
		deforester += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getInfuser(){
	if(getResource(RESOURCE.LUNARITE) >= infuserLunariteCost && getResource(RESOURCE.OIL) >= infuserOilCost && getResource(RESOURCE.METEORITE) >= infuserMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, infuserLunariteCost);
		Game.resources.takeResource(RESOURCE.OIL, infuserOilCost);
		Game.resources.takeResource(RESOURCE.METEORITE, infuserMeteoriteCost);
		infuser += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getMoonWorker(){
	if(getResource(RESOURCE.GEM) >= moonWorkerGemCost){
		Game.resources.takeResource(RESOURCE.GEM, moonWorkerGemCost);
		moonWorker += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getMoonDrill(){
	if(getResource(RESOURCE.METAL) >= moonDrillMetalCost && getResource(RESOURCE.GEM) >= moonDrillGemCost && getResource(RESOURCE.OIL) >= moonDrillOilCost){
		Game.resources.takeResource(RESOURCE.METAL, moonDrillMetalCost);
		Game.resources.takeResource(RESOURCE.GEM, moonDrillGemCost);
		Game.resources.takeResource(RESOURCE.OIL, moonDrillOilCost);
		moonDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getMoonQuarry(){
	if(getResource(RESOURCE.LUNARITE) >= moonQuarryLunariteCost && getResource(RESOURCE.GEM) >= moonQuarryGemCost && getResource(RESOURCE.SILICON) >= moonQuarrySiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, moonQuarryLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, moonQuarryGemCost);
		Game.resources.takeResource(RESOURCE.SILICON, moonQuarrySiliconCost);
		moonQuarry += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getPlanetExcavator(){
	if(getResource(RESOURCE.TITANIUM) >= planetExcavatorTitaniumCost && getResource(RESOURCE.ICE) >= planetExcavatorIceCost && getResource(RESOURCE.METEORITE) >= planetExcavatorMeteoriteCost){
		Game.resources.takeResource(RESOURCE.TITANIUM, planetExcavatorTitaniumCost);
		Game.resources.takeResource(RESOURCE.ICE, planetExcavatorIceCost);
		Game.resources.takeResource(RESOURCE.METEORITE, planetExcavatorMeteoriteCost);
		planetExcavator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getVacuum(){
	if(getResource(RESOURCE.LUNARITE) >= vacuumLunariteCost && getResource(RESOURCE.GEM) >= vacuumGemCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, vacuumLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, vacuumGemCost);
		vacuum += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSuctionExcavator(){
	if(getResource(RESOURCE.LUNARITE) >= suctionExcavatorLunariteCost && getResource(RESOURCE.GEM) >= suctionExcavatorGemCost && getResource(RESOURCE.OIL) >= suctionExcavatorOilCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, suctionExcavatorLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, suctionExcavatorGemCost);
		Game.resources.takeResource(RESOURCE.OIL, suctionExcavatorOilCost);
		suctionExcavator += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getSpaceCow(){
	if(getResource(RESOURCE.LUNARITE) >= spaceCowLunariteCost && getResource(RESOURCE.TITANIUM) >= spaceCowTitaniumCost && getResource(RESOURCE.SILICON) >= spaceCowSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, spaceCowLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, spaceCowTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, spaceCowSiliconCost);
		spaceCow += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getVent(){
	if(getResource(RESOURCE.LUNARITE) >= ventLunariteCost && getResource(RESOURCE.HELIUM) >= ventHeliumCost && getResource(RESOURCE.METEORITE) >= ventMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, ventLunariteCost);
		Game.resources.takeResource(RESOURCE.HELIUM, ventHeliumCost);
		Game.resources.takeResource(RESOURCE.METEORITE, ventMeteoriteCost);
		vent += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getExplorer(){
	if(getResource(RESOURCE.GEM) >= explorerGemCost){
		Game.resources.takeResource(RESOURCE.GEM, explorerGemCost);
		explorer += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getLunariteDrill(){
	if(getResource(RESOURCE.LUNARITE) >= lunariteDrillLunariteCost && getResource(RESOURCE.GEM) >= lunariteDrillGemCost && getResource(RESOURCE.OIL) >= lunariteDrillOilCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, lunariteDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, lunariteDrillGemCost);
		Game.resources.takeResource(RESOURCE.OIL, lunariteDrillOilCost);
		lunariteDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getPentaDrill(){
	if(getResource(RESOURCE.LUNARITE) >= pentaDrillLunariteCost && getResource(RESOURCE.GEM) >= pentaDrillGemCost && getResource(RESOURCE.SILICON) >= pentaDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, pentaDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, pentaDrillGemCost);
		Game.resources.takeResource(RESOURCE.SILICON, pentaDrillSiliconCost);
		pentaDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getTitanDrill(){
	if(getResource(RESOURCE.LUNARITE) >= titanDrillLunariteCost && getResource(RESOURCE.GOLD) >= titanDrillGoldCost && getResource(RESOURCE.METEORITE) >= titanDrillMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, titanDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.GOLD, titanDrillGoldCost);
		Game.resources.takeResource(RESOURCE.METEORITE, titanDrillMeteoriteCost);
		titanDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getDroid(){
	if(getResource(RESOURCE.LUNARITE) >= droidLunariteCost && getResource(RESOURCE.METHANE) >= droidMethaneCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, droidLunariteCost);
		Game.resources.takeResource(RESOURCE.METHANE, droidMethaneCost);
		droid += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getDestroyer(){
	if(getResource(RESOURCE.LUNARITE) >= destroyerLunariteCost && getResource(RESOURCE.GEM) >= destroyerGemCost && getResource(RESOURCE.OIL) >= destroyerOilCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, destroyerLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, destroyerGemCost);
		Game.resources.takeResource(RESOURCE.OIL, destroyerOilCost);
		destroyer += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDeathStar(){
	if(getResource(RESOURCE.LUNARITE) >= deathStarLunariteCost && getResource(RESOURCE.SILVER) >= deathStarSilverCost && getResource(RESOURCE.SILICON) >= deathStarSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, deathStarLunariteCost);
		Game.resources.takeResource(RESOURCE.SILVER, deathStarSilverCost);
		Game.resources.takeResource(RESOURCE.SILICON, deathStarSiliconCost);
		deathStar += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getActuator(){
	if(getResource(RESOURCE.LUNARITE) >= actuatorLunariteCost && getResource(RESOURCE.HELIUM) >= actuatorHeliumCost && getResource(RESOURCE.METEORITE) >= actuatorMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, actuatorLunariteCost);
		Game.resources.takeResource(RESOURCE.HELIUM, actuatorHeliumCost);
		Game.resources.takeResource(RESOURCE.METEORITE, actuatorMeteoriteCost);
		actuator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getScout(){
	if(getResource(RESOURCE.LUNARITE) >= scoutLunariteCost && getResource(RESOURCE.TITANIUM) >= scoutTitaniumCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, scoutLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, scoutTitaniumCost);
		scout += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSpaceLaser(){
	if(getResource(RESOURCE.LUNARITE) >= spaceLaserLunariteCost && getResource(RESOURCE.GEM) >= spaceLaserGemCost && getResource(RESOURCE.OIL) >= spaceLaserOilCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, spaceLaserLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, spaceLaserGemCost);
		Game.resources.takeResource(RESOURCE.OIL, spaceLaserOilCost);
		spaceLaser += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBertha(){
	if(getResource(RESOURCE.LUNARITE) >= berthaLunariteCost && getResource(RESOURCE.TITANIUM) >= berthaTitaniumCost && getResource(RESOURCE.SILICON) >= berthaSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, berthaLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, berthaTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, berthaSiliconCost);
		bertha += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getCannon(){
	if(getResource(RESOURCE.LUNARITE) >= cannonLunariteCost && getResource(RESOURCE.OIL) >= cannonOilCost && getResource(RESOURCE.METEORITE) >= cannonMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, cannonLunariteCost);
		Game.resources.takeResource(RESOURCE.OIL, cannonOilCost);
		Game.resources.takeResource(RESOURCE.METEORITE, cannonMeteoriteCost);
		cannon += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getBlowtorch(){
	if(getResource(RESOURCE.LUNARITE) >= blowtorchLunariteCost && getResource(RESOURCE.TITANIUM) >= blowtorchTitaniumCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, blowtorchLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, blowtorchTitaniumCost);
		blowtorch += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getScorcher(){
	if(getResource(RESOURCE.LUNARITE) >= scorcherLunariteCost && getResource(RESOURCE.GEM) >= scorcherGemCost && getResource(RESOURCE.OIL) >= scorcherOilCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, scorcherLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, scorcherGemCost);
		Game.resources.takeResource(RESOURCE.OIL, scorcherOilCost);
		scorcher += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getAnnihilator(){
	if(getResource(RESOURCE.LUNARITE) >= annihilatorLunariteCost && getResource(RESOURCE.GEM) >= annihilatorGemCost && getResource(RESOURCE.SILVER) >= annihilatorSilverCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, annihilatorLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, annihilatorGemCost);
		Game.resources.takeResource(RESOURCE.SILVER, annihilatorSilverCost);
		annihilator += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getDesert(){
	if(getResource(RESOURCE.LUNARITE) >= desertLunariteCost && getResource(RESOURCE.SILICON) >= desertSiliconCost && getResource(RESOURCE.METEORITE) >= desertMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, desertLunariteCost);
		Game.resources.takeResource(RESOURCE.SILICON, desertSiliconCost);
		Game.resources.takeResource(RESOURCE.METEORITE, desertMeteoriteCost);
		desert += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getCrucible(){
	if(getResource(RESOURCE.LUNARITE) >= crucibleLunariteCost && getResource(RESOURCE.GEM) >= crucibleGemCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, crucibleLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, crucibleGemCost);
		crucible += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getExtractor(){
	if(getResource(RESOURCE.LUNARITE) >= extractorLunariteCost && getResource(RESOURCE.TITANIUM) >= extractorTitaniumCost && getResource(RESOURCE.SILICON) >= extractorSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, extractorLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, extractorTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, extractorSiliconCost);
		extractor += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getExtruder(){
	if(getResource(RESOURCE.LUNARITE) >= extruderLunariteCost && getResource(RESOURCE.TITANIUM) >= extruderTitaniumCost && getResource(RESOURCE.SILICON) >= extruderSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, extruderLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, extruderTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, extruderSiliconCost);
		extruder += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getVeluptuator(){
	if(getResource(RESOURCE.LUNARITE) >= veluptuatorLunariteCost && getResource(RESOURCE.GOLD) >= veluptuatorGoldCost && getResource(RESOURCE.METEORITE) >= veluptuatorMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, veluptuatorLunariteCost);
		Game.resources.takeResource(RESOURCE.GOLD, veluptuatorGoldCost);
		Game.resources.takeResource(RESOURCE.METEORITE, veluptuatorMeteoriteCost);
		veluptuator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getCollector(){
	if(getResource(RESOURCE.LUNARITE) >= collectorLunariteCost && getResource(RESOURCE.TITANIUM) >= collectorTitaniumCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, collectorLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, collectorTitaniumCost);
		collector += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getMagnet(){
	if(getResource(RESOURCE.LUNARITE) >= magnetLunariteCost && getResource(RESOURCE.TITANIUM) >= magnetTitaniumCost && getResource(RESOURCE.GOLD) >= magnetGoldCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, magnetLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, magnetTitaniumCost);
		Game.resources.takeResource(RESOURCE.GOLD, magnetGoldCost);
		magnet += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getECell(){
	if(getResource(RESOURCE.SILVER) >= eCellSilverCost && getResource(RESOURCE.SILICON) >= eCellSiliconCost && getResource(RESOURCE.GOLD) >= eCellGoldCost){
		Game.resources.takeResource(RESOURCE.SILVER, eCellSilverCost);
		Game.resources.takeResource(RESOURCE.SILICON, eCellSiliconCost);
		Game.resources.takeResource(RESOURCE.GOLD, eCellGoldCost);
		eCell += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getHindenburg(){
	if(getResource(RESOURCE.LUNARITE) >= hindenburgLunariteCost && getResource(RESOURCE.METHANE) >= hindenburgMethaneCost && getResource(RESOURCE.METEORITE) >= hindenburgMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, hindenburgLunariteCost);
		Game.resources.takeResource(RESOURCE.METHANE, hindenburgMethaneCost);
		Game.resources.takeResource(RESOURCE.METEORITE, hindenburgMeteoriteCost);
		hindenburg += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getDrone(){
	if(getResource(RESOURCE.LUNARITE) >= droneLunariteCost && getResource(RESOURCE.SILICON) >= droneSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, droneLunariteCost);
		Game.resources.takeResource(RESOURCE.SILICON, droneSiliconCost);
		drone += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getTanker(){
	if(getResource(RESOURCE.LUNARITE) >= tankerLunariteCost && getResource(RESOURCE.TITANIUM) >= tankerTitaniumCost && getResource(RESOURCE.SILICON) >= tankerSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, tankerLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, tankerTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, tankerSiliconCost);
		tanker += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getCompressor(){
	if(getResource(RESOURCE.LUNARITE) >= compressorLunariteCost && getResource(RESOURCE.TITANIUM) >= compressorTitaniumCost && getResource(RESOURCE.SILICON) >= compressorSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, compressorLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, compressorTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, compressorSiliconCost);
		compressor += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getSkimmer(){
	if(getResource(RESOURCE.LUNARITE) >= skimmerLunariteCost && getResource(RESOURCE.TITANIUM) >= skimmerTitaniumCost && getResource(RESOURCE.METEORITE) >= skimmerMeteoriteCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, skimmerLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, skimmerTitaniumCost);
		Game.resources.takeResource(RESOURCE.METEORITE, skimmerMeteoriteCost);
		skimmer += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getIcePick(){
	if(getResource(RESOURCE.LUNARITE) >= icePickLunariteCost && getResource(RESOURCE.GEM) >= icePickGemCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, icePickLunariteCost);
		Game.resources.takeResource(RESOURCE.GEM, icePickGemCost);
		icePick += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getIceDrill(){
	if(getResource(RESOURCE.LUNARITE) >= iceDrillLunariteCost && getResource(RESOURCE.TITANIUM) >= iceDrillTitaniumCost && getResource(RESOURCE.SILICON) >= iceDrillSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, iceDrillLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, iceDrillTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, iceDrillSiliconCost);
		iceDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getFreezer(){
	if(getResource(RESOURCE.LUNARITE) >= freezerLunariteCost && getResource(RESOURCE.TITANIUM) >= freezerTitaniumCost && getResource(RESOURCE.SILICON) >= freezerSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, freezerLunariteCost);
		Game.resources.takeResource(RESOURCE.TITANIUM, freezerTitaniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, freezerSiliconCost);
		freezer += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getMrFreeze(){
	if(getResource(RESOURCE.WOOD) >= mrFreezeWoodCost && getResource(RESOURCE.HELIUM) >= mrFreezeHeliumCost && getResource(RESOURCE.METEORITE) >= mrFreezeMeteoriteCost){
		Game.resources.takeResource(RESOURCE.WOOD, mrFreezeWoodCost);
		Game.resources.takeResource(RESOURCE.HELIUM, mrFreezeHeliumCost);
		Game.resources.takeResource(RESOURCE.METEORITE, mrFreezeMeteoriteCost);
		mrFreeze += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getPrinter(){
	if(getResource(RESOURCE.LUNARITE) >= printerLunariteCost && getResource(RESOURCE.SILICON) >= printerSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, printerLunariteCost);
		Game.resources.takeResource(RESOURCE.SILICON, printerSiliconCost);
		printer += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getWeb(){
	if(getResource(RESOURCE.LUNARITE) >= webLunariteCost && getResource(RESOURCE.URANIUM) >= webUraniumCost && getResource(RESOURCE.SILICON) >= webSiliconCost){
		Game.resources.takeResource(RESOURCE.LUNARITE, webLunariteCost);
		Game.resources.takeResource(RESOURCE.URANIUM, webUraniumCost);
		Game.resources.takeResource(RESOURCE.SILICON, webSiliconCost);
		web += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}
