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
    lunarite = (lunarite + lunariteps * delta).clamp(0, lunariteStorage);
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
    antimatter += antimatterps * delta;
}

function getMaxPlasma() {
	return 100000 + (50000 * PSU) + (500000 * PSUT2);
}

function getMaxEnergy() {
	return (100000 + (50000 * battery) + (500000 * batteryT2) + (5000000 * batteryT3) + (50000000*batteryT4)) * ((Game.tech.entries.batteryEfficiencyResearch.current/100)+1);
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

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
        Game.statistics.add('manualResources');
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += 1;
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

function gainLunarite(){
	if(lunarite < lunariteStorage){
		lunarite += 1;
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
	if(uranium >= uraniumStorage && lunarite >= uraniumStorage/2.5){
		uranium -= uraniumStorage;
		lunarite -= uraniumStorage/2.5;
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

function upgradeLunariteStorage(){
	if(lunarite >= lunariteStorage && metal >= lunariteStorage*4){
		lunarite -= lunariteStorage;
		metal -= lunariteStorage*4;
		lunariteStorage = lunariteNextStorage;
		lunariteNextStorage *= 2;
	}
}

function upgradeMethaneStorage(){
	if(methane >= methaneStorage && lunarite >= methaneStorage/2.5){
		methane -= methaneStorage;
		lunarite -= methaneStorage/2.5;
		methaneStorage = methaneNextStorage;
		methaneNextStorage *= 2;
	}
}

function upgradeTitaniumStorage(){
	if(titanium >= titaniumStorage && lunarite >= titaniumStorage/2.5){
		titanium -= titaniumStorage;
		lunarite -= titaniumStorage/2.5;
		titaniumStorage = titaniumNextStorage;
		titaniumNextStorage *= 2;
	}
}

function upgradeGoldStorage(){
	if(gold >= goldStorage && lunarite >= goldStorage/2.5){
		gold -= goldStorage;
		lunarite -= goldStorage/2.5;
		goldStorage = goldNextStorage;
		goldNextStorage *= 2;
	}
}

function upgradeSilverStorage(){
	if(silver >= silverStorage && lunarite >= silverStorage/2.5){
		silver -= silverStorage;
		lunarite -= silverStorage/2.5;
		silverStorage = silverNextStorage;
		silverNextStorage *= 2;
	}
}

function upgradeSiliconStorage(){
	if(silicon >= siliconStorage && lunarite >= siliconStorage/2.5){
		silicon -= siliconStorage;
		lunarite -= siliconStorage/2.5;
		siliconStorage = siliconNextStorage;
		siliconNextStorage *= 2;
	}
}

function upgradeLavaStorage(){
	if(lava >= lavaStorage && lunarite >= lavaStorage/2.5){
		lava -= lavaStorage;
		lunarite -= lavaStorage/2.5;
		lavaStorage = lavaNextStorage;
		lavaNextStorage *= 2;
	}
}

function upgradeHydrogenStorage(){
	if(hydrogen >= hydrogenStorage && lunarite >= hydrogenStorage/2.5){
		hydrogen -= hydrogenStorage;
		lunarite -= hydrogenStorage/2.5;
		hydrogenStorage = hydrogenNextStorage;
		hydrogenNextStorage *= 2;
	}
}

function upgradeHeliumStorage(){
	if(helium >= heliumStorage && lunarite >= heliumStorage/2.5){
		helium -= heliumStorage;
		lunarite -= heliumStorage/2.5;
		heliumStorage = heliumNextStorage;
		heliumNextStorage *= 2;
	}
}

function upgradeIceStorage(){
	if(ice >= iceStorage && lunarite >= iceStorage/2.5){
		ice -= iceStorage;
		lunarite -= iceStorage/2.5;
		iceStorage = iceNextStorage;
		iceNextStorage *= 2;
	}
}

function upgradeMeteoriteStorage(){
	if(meteorite >= meteoriteStorage && lunarite >= meteoriteStorage*4){
		meteorite -= meteoriteStorage;
		lunarite -= meteoriteStorage*4;
		meteoriteStorage = meteoriteNextStorage;
		meteoriteNextStorage *= 2;
	}
}

function upgradeMeteoriteStorage(){
	if(meteorite >= meteoriteStorage && lunarite >= meteoriteStorage*4){
		meteorite -= meteoriteStorage;
		lunarite -= meteoriteStorage*4;
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

function destroyMachine(machine, id){
	if(window[id] > 0){
		window[id] -= 1;
		updateCost();
	}
}

function updateCost() {
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
	if(silver >= PSUSilverCost && gold >= PSUGoldCost && uranium >= PSUUraniumCost ){
		silver -= PSUSilverCost;
		gold -= PSUGoldCost;
		uranium -= PSUUraniumCost;
		PSU += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getPSUT2(){
	if(silver >= PSUT2SilverCost && gold >= PSUT2GoldCost && uranium >= PSUT2UraniumCost ){
		silver -= PSUT2SilverCost;
		gold -= PSUT2GoldCost;
		uranium -= PSUT2UraniumCost;
		PSUT2 += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getHeater(){
	if(lunarite >= heaterLunariteCost && gem >= heaterGemCost && silicon >= heaterSiliconCost){
		lunarite -= heaterLunariteCost;
		gem -= heaterGemCost;
		silicon -= heaterSiliconCost;
		heater += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getPlasmatic(){
	if(lunarite >= plasmaticLunariteCost && silicon >= plasmaticSiliconCost && meteorite >= plasmaticMeteoriteCost){
		lunarite -= plasmaticLunariteCost;
		silicon -= plasmaticSiliconCost;
		meteorite -= plasmaticMeteoriteCost;
		plasmatic += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getBattery(){
	if(metal >= batteryMetalCost && gem >= batteryGemCost && lunarite >= batteryLunariteCost ){
		metal -= batteryMetalCost;
		gem -= batteryGemCost;
		lunarite -= batteryLunariteCost;
		battery += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getBatteryT2(){
	if(metal >= batteryT2MetalCost && gem >= batteryT2GemCost && lunarite >= batteryT2LunariteCost ){
		metal -= batteryT2MetalCost;
		gem -= batteryT2GemCost;
		lunarite -= batteryT2LunariteCost;
		batteryT2 += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getBatteryT3(){
    if(metal >= batteryT3MetalCost && gem >= batteryT3GemCost && lunarite >= batteryT3LunariteCost ){
        metal -= batteryT3MetalCost;
        gem -= batteryT3GemCost;
        lunarite -= batteryT3LunariteCost;
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
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getSolarPanel(){
	if(metal >= solarPanelMetalCost && gem >= solarPanelGemCost){
		metal -= solarPanelMetalCost;
		gem -= solarPanelGemCost;
		solarPanel += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getMethaneStation(){
	if(lunarite >= methaneStationLunariteCost && titanium >= methaneStationTitaniumCost){
		lunarite -= methaneStationLunariteCost;
		titanium -= methaneStationTitaniumCost;
		methaneStation += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getNuclearStation(){
	if(lunarite >= nuclearStationLunariteCost && titanium >= nuclearStationTitaniumCost){
		lunarite -= nuclearStationLunariteCost;
		titanium -= nuclearStationTitaniumCost;
		nuclearStation += 1;
		updateCost();
        Game.statistics.add('tierOwned4');
	}
}


function getMagmatic(){
	if(lunarite >= magmaticLunariteCost && gem >= magmaticGemCost && silver >= magmaticSilverCost){
		lunarite -= magmaticLunariteCost;
		gem -= magmaticGemCost;
		silver -= magmaticSilverCost;
		magmatic += 1;
		updateCost();
        Game.statistics.add('tierOwned5');
	}
}

function getFusionReactor(){
	if(lunarite >= fusionReactorLunariteCost && titanium >= fusionReactorTitaniumCost && silicon >= fusionReactorSiliconCost){
		lunarite -= fusionReactorLunariteCost;
		titanium -= fusionReactorTitaniumCost;
		silicon -= fusionReactorSiliconCost;
		fusionReactor += 1;
		updateCost();
        Game.statistics.add('tierOwned6');
	}
}

function getGrinder(){
	if(titanium >= grinderTitaniumCost && lunarite >= grinderLunariteCost && gold >= grinderGoldCost){
		titanium -= grinderTitaniumCost;
		lunarite -= grinderLunariteCost;
		gold -= grinderGoldCost;
		grinder += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getCubic(){
	if(uranium >= cubicUraniumCost && lunarite >= cubicLunariteCost && oil >= cubicOilCost){
		uranium -= cubicUraniumCost;
		lunarite -= cubicLunariteCost;
		oil -= cubicOilCost;
		cubic += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getEnricher(){
	if(lunarite >= enricherLunariteCost && titanium >= enricherTitaniumCost && silicon >= enricherSiliconCost){
		lunarite -= enricherLunariteCost;
		titanium -= enricherTitaniumCost;
		silicon -= enricherSiliconCost;
		enricher += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getRecycler(){
	if(lunarite >= recyclerLunariteCost && methane >= recyclerMethaneCost && meteorite >= recyclerMeteoriteCost){
		lunarite -= recyclerLunariteCost;
		methane -= recyclerMethaneCost;
		meteorite -= recyclerMeteoriteCost;
		recycler += 1;
		updateCost();
        Game.statistics.add('tierOwned4');
	}
}

function getPump(){
	if(metal >= pumpMetalCost && gem >= pumpGemCost){
		metal -= pumpMetalCost;
		gem -= pumpGemCost;
		pump += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getPumpjack(){
	if(metal >= pumpjackMetalCost && gem >= pumpjackGemCost && oil >= pumpjackOilCost){
		metal -= pumpjackMetalCost;
		gem -= pumpjackGemCost;
		oil -= pumpjackOilCost;
		pumpjack += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getOilField(){
	if(lunarite >= oilFieldLunariteCost && titanium >= oilFieldTitaniumCost && silicon >= oilFieldSiliconCost){
		lunarite -= oilFieldLunariteCost;
		titanium -= oilFieldTitaniumCost;
		silicon -= oilFieldSiliconCost;
		oilField += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getOilRig(){
	if(lunarite >= oilRigLunariteCost && titanium >= oilRigTitaniumCost && meteorite >= oilRigMeteoriteCost){
		lunarite -= oilRigLunariteCost;
		titanium -= oilRigTitaniumCost;
		meteorite -= oilRigMeteoriteCost;
		oilRig += 1;
		updateCost();
        Game.statistics.add('tierOwned4');
	}
}

function getMiner(){
	if(metal >= minerMetalCost && wood >= minerWoodCost){
		metal -= minerMetalCost;
		wood -= minerWoodCost;
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
	if(metal >= heavyDrillMetalCost && gem >= heavyDrillGemCost && oil >= heavyDrillOilCost){
		metal -= heavyDrillMetalCost;
		gem -= heavyDrillGemCost;
		oil -= heavyDrillOilCost;
		heavyDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getGigaDrill(){
	if(lunarite >= gigaDrillLunariteCost && gem >= gigaDrillGemCost && silicon >= gigaDrillSiliconCost){
		lunarite -= gigaDrillLunariteCost;
		gem -= gigaDrillGemCost;
		silicon -= gigaDrillSiliconCost;
		gigaDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getQuantumDrill(){
	if(lunarite >= quantumDrillLunariteCost && gold >= quantumDrillGoldCost && meteorite >= quantumDrillMeteoriteCost){
		lunarite -= quantumDrillLunariteCost;
		gold -= quantumDrillGoldCost;
		meteorite -= quantumDrillMeteoriteCost;
		quantumDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned4');
	}
}

function getGemMiner(){
	if(metal >= gemMinerMetalCost && gem >= gemMinerGemCost){
		metal -= gemMinerMetalCost;
		gem -= gemMinerGemCost;
		gemMiner += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getAdvancedDrill(){
	if(metal >= advancedDrillMetalCost && gem >= advancedDrillGemCost && oil >= advancedDrillOilCost){
		metal -= advancedDrillMetalCost;
		gem -= advancedDrillGemCost;
		oil -= advancedDrillOilCost;
		advancedDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getDiamondDrill(){
	if(lunarite >= diamondDrillLunariteCost && gem >= diamondDrillGemCost && silicon >= diamondDrillSiliconCost){
		lunarite -= diamondDrillLunariteCost;
		gem -= diamondDrillGemCost;
		silicon -= diamondDrillSiliconCost;
		diamondDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getCarbyneDrill(){
	if(lunarite >= carbyneDrillLunariteCost && gem >= carbyneDrillGemCost && meteorite >= carbyneDrillMeteoriteCost){
		lunarite -= carbyneDrillLunariteCost;
		gem -= carbyneDrillGemCost;
		meteorite -= carbyneDrillMeteoriteCost;
		carbyneDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getWoodburner(){
	if(metal >= woodburnerMetalCost && wood >= woodburnerWoodCost){
		metal -= woodburnerMetalCost;
		wood -= woodburnerWoodCost;
		woodburner += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getFurnace(){
	if(metal >= furnaceMetalCost && wood >= furnaceWoodCost && oil >= furnaceOilCost){
		metal -= furnaceMetalCost;
		wood -= furnaceWoodCost;
		oil -= furnaceOilCost;
		furnace += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getKiln(){
	if(lunarite >= kilnLunariteCost && gem >= kilnGemCost && silicon >= kilnSiliconCost){
		lunarite -= kilnLunariteCost;
		gem -= kilnGemCost;
		silicon -= kilnSiliconCost;
		kiln += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getFryer(){
	if(lunarite >= fryerLunariteCost && lava >= fryerLavaCost && meteorite >= fryerMeteoriteCost){
		lunarite -= fryerLunariteCost;
		lava -= fryerLavaCost;
		meteorite -= fryerMeteoriteCost;
		fryer += 1;
		updateCost();
        Game.statistics.add('tierOwned4');
	}
}

function getWoodcutter(){
	if(metal >= woodcutterMetalCost && wood >= woodcutterWoodCost){
		metal -= woodcutterMetalCost;
		wood -= woodcutterWoodCost;
		woodcutter += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getLaserCutter(){
	if(metal >= laserCutterMetalCost && gem >= laserCutterGemCost && oil >= laserCutterOilCost){
		metal -= laserCutterMetalCost;
		gem -= laserCutterGemCost;
		oil -= laserCutterOilCost;
		laserCutter += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getDeforester(){
	if(lunarite >= deforesterLunariteCost && titanium >= deforesterTitaniumCost && silicon >= deforesterSiliconCost){
		lunarite -= deforesterLunariteCost;
		titanium -= deforesterTitaniumCost;
		silicon -= deforesterSiliconCost;
		deforester += 1;
		updateCost();
        Game.statistics.add('tierOwned3');
	}
}

function getInfuser(){
	if(lunarite >= infuserLunariteCost && oil >= infuserOilCost && meteorite >= infuserMeteoriteCost){
		lunarite -= infuserLunariteCost;
		oil -= infuserOilCost;
		meteorite -= infuserMeteoriteCost;
		infuser += 1;
		updateCost();
        Game.statistics.add('tierOwned4');
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= moonWorkerGemCost;
		moonWorker += 1;
		updateCost();
        Game.statistics.add('tierOwned1');
	}
}

function getMoonDrill(){
	if(metal >= moonDrillMetalCost && gem >= moonDrillGemCost && oil >= moonDrillOilCost){
		metal -= moonDrillMetalCost;
		gem -= moonDrillGemCost;
		oil -= moonDrillOilCost;
		moonDrill += 1;
		updateCost();
        Game.statistics.add('tierOwned2');
	}
}

function getMoonQuarry(){
	if(lunarite >= moonQuarryLunariteCost && gem >= moonQuarryGemCost && silicon >= moonQuarrySiliconCost){
		lunarite -= moonQuarryLunariteCost;
		gem -= moonQuarryGemCost;
		silicon -= moonQuarrySiliconCost;
		moonQuarry += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getPlanetExcavator(){
	if(titanium >= planetExcavatorTitaniumCost && ice >= planetExcavatorIceCost && meteorite >= planetExcavatorMeteoriteCost){
		titanium -= planetExcavatorTitaniumCost;
		ice -= planetExcavatorIceCost;
		meteorite -= planetExcavatorMeteoriteCost;
		planetExcavator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getVacuum(){
	if(lunarite >= vacuumLunariteCost && gem >= vacuumGemCost){
		lunarite -= vacuumLunariteCost;
		gem -= vacuumGemCost;
		vacuum += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSuctionExcavator(){
	if(lunarite >= suctionExcavatorLunariteCost && gem >= suctionExcavatorGemCost && oil >= suctionExcavatorOilCost){
		lunarite -= suctionExcavatorLunariteCost;
		gem -= suctionExcavatorGemCost;
		oil -= suctionExcavatorOilCost;
		suctionExcavator += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getSpaceCow(){
	if(lunarite >= spaceCowLunariteCost && titanium >= spaceCowTitaniumCost && silicon >= spaceCowSiliconCost){
		lunarite -= spaceCowLunariteCost;
		titanium -= spaceCowTitaniumCost;
		silicon -= spaceCowSiliconCost;
		spaceCow += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getVent(){
	if(lunarite >= ventLunariteCost && helium >= ventHeliumCost && meteorite >= ventMeteoriteCost){
		lunarite -= ventLunariteCost;
		helium -= ventHeliumCost;
		meteorite -= ventMeteoriteCost;
		vent += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getExplorer(){
	if(gem >= explorerGemCost){
		gem -= explorerGemCost;
		explorer += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getLunariteDrill(){
	if(lunarite >= lunariteDrillLunariteCost && gem >= lunariteDrillGemCost && oil >= lunariteDrillOilCost){
		lunarite -= lunariteDrillLunariteCost;
		gem -= lunariteDrillGemCost;
		oil -= lunariteDrillOilCost;
		lunariteDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getPentaDrill(){
	if(lunarite >= pentaDrillLunariteCost && gem >= pentaDrillGemCost && silicon >= pentaDrillSiliconCost){
		lunarite -= pentaDrillLunariteCost;
		gem -= pentaDrillGemCost;
		silicon -= pentaDrillSiliconCost;
		pentaDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getTitanDrill(){
	if(lunarite >= titanDrillLunariteCost && gold >= titanDrillGoldCost && meteorite >= titanDrillMeteoriteCost){
		lunarite -= titanDrillLunariteCost;
		gold -= titanDrillGoldCost;
		meteorite -= titanDrillMeteoriteCost;
		titanDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getDroid(){
	if(lunarite >= droidLunariteCost && methane >= droidMethaneCost){
		lunarite -= droidLunariteCost;
		methane -= droidMethaneCost;
		droid += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getDestroyer(){
	if(lunarite >= destroyerLunariteCost && gem >= destroyerGemCost && oil >= destroyerOilCost){
		lunarite -= destroyerLunariteCost;
		gem -= destroyerGemCost;
		oil -= destroyerOilCost;
		destroyer += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getDeathStar(){
	if(lunarite >= deathStarLunariteCost && silver >= deathStarSilverCost && silicon >= deathStarSiliconCost){
		lunarite -= deathStarLunariteCost;
		silver -= deathStarSilverCost;
		silicon -= deathStarSiliconCost;
		deathStar += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getActuator(){
	if(lunarite >= actuatorLunariteCost && helium >= actuatorHeliumCost && meteorite >= actuatorMeteoriteCost){
		lunarite -= actuatorLunariteCost;
		helium -= actuatorHeliumCost;
		meteorite -= actuatorMeteoriteCost;
		actuator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getScout(){
	if(lunarite >= scoutLunariteCost && titanium >= scoutTitaniumCost){
		lunarite -= scoutLunariteCost;
		titanium -= scoutTitaniumCost;
		scout += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getSpaceLaser(){
	if(lunarite >= spaceLaserLunariteCost && gem >= spaceLaserGemCost && oil >= spaceLaserOilCost){
		lunarite -= spaceLaserLunariteCost;
		gem -= spaceLaserGemCost;
		oil -= spaceLaserOilCost;
		spaceLaser += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getBertha(){
	if(lunarite >= berthaLunariteCost && titanium >= berthaTitaniumCost && silicon >= berthaSiliconCost){
		lunarite -= berthaLunariteCost;
		titanium -= berthaTitaniumCost;
		silicon -= berthaSiliconCost;
		bertha += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getCannon(){
	if(lunarite >= cannonLunariteCost && oil >= cannonOilCost && meteorite >= cannonMeteoriteCost){
		lunarite -= cannonLunariteCost;
		oil -= cannonOilCost;
		meteorite -= cannonMeteoriteCost;
		cannon += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getBlowtorch(){
	if(lunarite >= blowtorchLunariteCost && titanium >= blowtorchTitaniumCost){
		lunarite -= blowtorchLunariteCost;
		titanium -= blowtorchTitaniumCost;
		blowtorch += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getScorcher(){
	if(lunarite >= scorcherLunariteCost && gem >= scorcherGemCost && oil >= scorcherOilCost){
		lunarite -= scorcherLunariteCost;
		gem -= scorcherGemCost;
		oil -= scorcherOilCost;
		scorcher += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getAnnihilator(){
	if(lunarite >= annihilatorLunariteCost && gem >= annihilatorGemCost && silver >= annihilatorSilverCost){
		lunarite -= annihilatorLunariteCost;
		gem -= annihilatorGemCost;
		silver -= annihilatorSilverCost;
		annihilator += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getDesert(){
	if(lunarite >= desertLunariteCost && silicon >= desertSiliconCost && meteorite >= desertMeteoriteCost){
		lunarite -= desertLunariteCost;
		silicon -= desertSiliconCost;
		meteorite -= desertMeteoriteCost;
		desert += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getCrucible(){
	if(lunarite >= crucibleLunariteCost && gem >= crucibleGemCost){
		lunarite -= crucibleLunariteCost;
		gem -= crucibleGemCost;
		crucible += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getExtractor(){
	if(lunarite >= extractorLunariteCost && titanium >= extractorTitaniumCost && silicon >= extractorSiliconCost){
		lunarite -= extractorLunariteCost;
		titanium -= extractorTitaniumCost;
		silicon -= extractorSiliconCost;
		extractor += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getExtruder(){
	if(lunarite >= extruderLunariteCost && titanium >= extruderTitaniumCost && silicon >= extruderSiliconCost){
		lunarite -= extruderLunariteCost;
		titanium -= extruderTitaniumCost;
		silicon -= extruderSiliconCost;
		extruder += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getVeluptuator(){
	if(lunarite >= veluptuatorLunariteCost && gold >= veluptuatorGoldCost && meteorite >= veluptuatorMeteoriteCost){
		lunarite -= veluptuatorLunariteCost;
		gold -= veluptuatorGoldCost;
		meteorite -= veluptuatorMeteoriteCost;
		veluptuator += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getCollector(){
	if(lunarite >= collectorLunariteCost && titanium >= collectorTitaniumCost){
		lunarite -= collectorLunariteCost;
		titanium -= collectorTitaniumCost;
		collector += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getMagnet(){
	if(lunarite >= magnetLunariteCost && titanium >= magnetTitaniumCost && gold >= magnetGoldCost){
		lunarite -= magnetLunariteCost;
		titanium -= magnetTitaniumCost;
		gold -= magnetGoldCost;
		magnet += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getECell(){
	if(silver >= eCellSilverCost && silicon >= eCellSiliconCost && gold >= eCellGoldCost){
		silver -= eCellSilverCost;
		silicon -= eCellSiliconCost;
		gold -= eCellGoldCost;
		eCell += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getHindenburg(){
	if(lunarite >= hindenburgLunariteCost && methane >= hindenburgMethaneCost && meteorite >= hindenburgMeteoriteCost){
		lunarite -= hindenburgLunariteCost;
		methane -= hindenburgMethaneCost;
		meteorite -= hindenburgMeteoriteCost;
		hindenburg += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getDrone(){
	if(lunarite >= droneLunariteCost && silicon >= droneSiliconCost){
		lunarite -= droneLunariteCost;
		silicon -= droneSiliconCost;
		drone += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getTanker(){
	if(lunarite >= tankerLunariteCost && titanium >= tankerTitaniumCost && silicon >= tankerSiliconCost){
		lunarite -= tankerLunariteCost;
		titanium -= tankerTitaniumCost;
		silicon -= tankerSiliconCost;
		tanker += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getCompressor(){
	if(lunarite >= compressorLunariteCost && titanium >= compressorTitaniumCost && silicon >= compressorSiliconCost){
		lunarite -= compressorLunariteCost;
		titanium -= compressorTitaniumCost;
		silicon -= compressorSiliconCost;
		compressor += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getSkimmer(){
	if(lunarite >= skimmerLunariteCost && titanium >= skimmerTitaniumCost && meteorite >= skimmerMeteoriteCost){
		lunarite -= skimmerLunariteCost;
		titanium -= skimmerTitaniumCost;
		meteorite -= skimmerMeteoriteCost;
		skimmer += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getIcePick(){
	if(lunarite >= icePickLunariteCost && gem >= icePickGemCost){
		lunarite -= icePickLunariteCost;
		gem -= icePickGemCost;
		icePick += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getIceDrill(){
	if(lunarite >= iceDrillLunariteCost && titanium >= iceDrillTitaniumCost && silicon >= iceDrillSiliconCost){
		lunarite -= iceDrillLunariteCost;
		titanium -= iceDrillTitaniumCost;
		silicon -= iceDrillSiliconCost;
		iceDrill += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}

function getFreezer(){
	if(lunarite >= freezerLunariteCost && titanium >= freezerTitaniumCost && silicon >= freezerSiliconCost){
		lunarite -= freezerLunariteCost;
		titanium -= freezerTitaniumCost;
		silicon -= freezerSiliconCost;
		freezer += 1;
		updateCost();
		Game.statistics.add('tierOwned3');
	}
}

function getMrFreeze(){
	if(wood >= mrFreezeWoodCost && helium >= mrFreezeHeliumCost && meteorite >= mrFreezeMeteoriteCost){
		wood -= mrFreezeWoodCost;
		helium -= mrFreezeHeliumCost;
		meteorite -= mrFreezeMeteoriteCost;
		mrFreeze += 1;
		updateCost();
		Game.statistics.add('tierOwned4');
	}
}

function getPrinter(){
	if(lunarite >= printerLunariteCost && silicon >= printerSiliconCost){
		lunarite -= printerLunariteCost;
		silicon -= printerSiliconCost;
		printer += 1;
		updateCost();
		Game.statistics.add('tierOwned1');
	}
}

function getWeb(){
	if(lunarite >= webLunariteCost && uranium >= webUraniumCost && silicon >= webSiliconCost){
		lunarite -= webLunariteCost;
		uranium -= webUraniumCost;
		silicon -= webSiliconCost;
		web += 1;
		updateCost();
		Game.statistics.add('tierOwned2');
	}
}
