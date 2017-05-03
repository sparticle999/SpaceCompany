function gainResources(){
	if(energy + energyps/10 <= 100000 + 50000*battery){
		energy += energyps/10;
	}
	else{
		energy = 100000 + 50000*battery;
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

	
	document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput) - (kiln*45));
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
	
	

	// ReWrite This
	if(charcoalToggled === true){
		if(charcoal + charcoalps/10 < charcoalStorage && wood + woodps/10 >= ((woodburner*2)/10 + furnace*furnaceWoodInput)/10){
			if(wood - (((woodburner*2) + furnace*furnaceWoodInput)/10) > 0){
				charcoal += charcoalps/10;
				wood -= ((woodburner*2) + furnace*furnaceWoodInput)/10;
			}
			else{
				wood = 0;
			}
		}
		else{
			var difference = charcoalStorage - charcoal;
			if(wood >= difference*2){
				if(charcoal + difference < charcoalStorage){
					charcoal += difference;
					wood -= difference * 2;
				}
				else{
					charcoal = charcoalStorage;
				}
			}
		}
		if(charcoal >= charcoalStorage){
			document.getElementById("woodps").innerHTML = commafy(woodps);
			document.getElementById("charcoal").className = "green";
		}
	}
	else{
		document.getElementById("woodps").innerHTML = commafy(woodps);
	}
	// Up To Here
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

// Gain Buttons

function gainPlasma(){
	if(energy >= 1000 && hydrogen >= 10){
		plasma += 1;
		energy -= 1000;
		hydrogen -= 10;
		refresh();
		handMined += 1;
	}
}

function gainUranium(){
	if(uranium < uraniumStorage){
		uranium += 1;
		refresh();
		handMined += 1;
	}
}

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
		refresh();
		handMined += 1;
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += 1;
		refresh();
		handMined += 1;
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += 1;
		refresh();
		handMined += 1;
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= 2){
		wood -= 2;
		charcoal += 1;
		refresh();
		handMined += 1;
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += 1;
		refresh();
		handMined += 1;
	}
}

function gainSpaceMetal(){
	if(spaceMetal < spaceMetalStorage){
		spaceMetal += 1;
		refresh();
		handMined += 1;
	}
}

function gainMethane(){
	if(methane < methaneStorage){
		methane += 1;
		refresh();
		handMined += 1;
	}
}

function gainTitanium(){
	if(titanium < titaniumStorage){
		titanium += 1;
		refresh();
		handMined += 1;
	}
}

function gainGold(){
	if(gold < goldStorage){
		gold += 1;
		refresh();
		handMined += 1;
	}
}

function gainSilver(){
	if(silver < silverStorage){
		silver += 1;
		refresh();
		handMined += 1;
	}
}

function gainSilicon(){
	if(silicon < siliconStorage){
		silicon += 1;
		refresh();
		handMined += 1;
	}
}

function gainLava(){
	if(lava < lavaStorage){
		lava += 1;
		refresh();
		handMined += 1;
	}
}

function gainHydrogen(){
	if(hydrogen < hydrogenStorage){
		hydrogen += 1;
		refresh();
		handMined += 1;
	}
}

function gainHelium(){
	if(helium < heliumStorage){
		helium += 1;
		refresh();
		handMined += 1;
	}
}

function gainIce(){
	if(ice < iceStorage){
		ice += 1;
		refresh();
		handMined += 1;
	}
}

function gainMeteorite(){
	if(meteorite < meteoriteStorage){
		if(plasma >= 3){
			plasma -= 3;
			meteorite += 1;
			refresh();
			handMined += 1;
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
		tier1 += 1;
	}
}

function getBattery(){
	if(metal >= batteryMetalCost && gem >= batteryGemCost && spaceMetal >= batterySpaceMetalCost ){
		metal -= batteryMetalCost;
		gem -= batteryGemCost;
		spaceMetal -= batterySpaceMetalCost;
		battery += 1;
		batteryMetalCost = Math.floor(500000 * Math.pow(1.1,battery));
		batteryGemCost = Math.floor(500000 * Math.pow(1.1,battery));
		batterySpaceMetalCost = Math.floor(300000 * Math.pow(1.1,battery));
		document.getElementById("battery").innerHTML = battery;
		document.getElementById("energyStorage").innerHTML = commafy(100000 + 50000*battery);
		document.getElementById("batteryMetalCost").innerHTML = commafy(batteryMetalCost);
		document.getElementById("batteryGemCost").innerHTML = commafy(batteryGemCost);
		document.getElementById("batterySpaceMetalCost").innerHTML = commafy(batterySpaceMetalCost);
		refresh();
		tier1 += 1;
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
		tier1 += 1;
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
		tier2 += 1;
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
		tier3 += 1;
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
		tier4 += 1;
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
		tier5 += 1;
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
		tier6 += 1;
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
		tier1 += 1;
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
		tier2 += 1;
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
		tier3 += 1;
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
		tier1 += 1;
		if(pump >= 1 && document.getElementById("Build 1 Small Pump").className === "achievementTD"){
			document.getElementById("Build 1 Small Pump").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Small Pump");
		}
		if(pump >= 10 && document.getElementById("Build 10 Small Pumps").className === "achievementTD"){
			document.getElementById("Build 10 Small Pumps").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Small Pumps");
		}
		if(pump >= 100 && document.getElementById("Build 100 Small Pumps").className === "achievementTD"){
			document.getElementById("Build 100 Small Pumps").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Small Pumps");
		}
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
		tier2 += 1;
		if(pumpjack >= 1 && document.getElementById("Build 1 Pumpjack").className === "achievementTD"){
			document.getElementById("Build 1 Pumpjack").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Pumpjack");
		}
		if(pumpjack >= 10 && document.getElementById("Build 10 Pumpjacks").className === "achievementTD"){
			document.getElementById("Build 10 Pumpjacks").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Pumpjacks");
		}
		if(pumpjack >= 100 && document.getElementById("Build 100 Pumpjacks").className === "achievementTD"){
			document.getElementById("Build 100 Pumpjacks").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Pumpjacks");
		}
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
		tier3 += 1;
		if(oilField >= 1 && document.getElementById("Build 1 Oil Field").className === "achievementTD"){
			document.getElementById("Build 1 Oil Field").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Oil Field");
		}
		if(oilField >= 10 && document.getElementById("Build 10 Oil Fields").className === "achievementTD"){
			document.getElementById("Build 10 Oil Fields").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Oil Fields");
		}
		if(oilField >= 100 && document.getElementById("Build 100 Oil Fields").className === "achievementTD"){
			document.getElementById("Build 100 Oil Fields").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Oil Fields");
		}
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
				document.getElementById("dropdownMenu").className = "dropdown";
				researchUnlocked = true;
				tabsUnlockedNum += 1;
				tabsUnlocked.push("researchTab", "dropdownMenu");
				newUnlock("research");
			}
		}
		refresh();
		tier1 += 1;
		if(miner >= 1 && document.getElementById("Build 1 Miner").className === "achievementTD"){
			document.getElementById("Build 1 Miner").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Miner");
		}
		if(miner >= 10 && document.getElementById("Build 10 Miners").className === "achievementTD"){
			document.getElementById("Build 10 Miners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Miners");
		}
		if(miner >= 100 && document.getElementById("Build 100 Miners").className === "achievementTD"){
			document.getElementById("Build 100 Miners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Miners");
		}
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
		tier2 += 1;
		if(heavyDrill >= 1 && document.getElementById("Build 1 Heavy Drill").className === "achievementTD"){
			document.getElementById("Build 1 Heavy Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Heavy Drill");
		}
		if(heavyDrill >= 10 && document.getElementById("Build 10 Heavy Drills").className === "achievementTD"){
			document.getElementById("Build 10 Heavy Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Heavy Drills");
		}
		if(heavyDrill >= 100 && document.getElementById("Build 100 Heavy Drills").className === "achievementTD"){
			document.getElementById("Build 100 Heavy Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Heavy Drills");
		}
	}
}

function getGigaDrill(){
	if(spaceMetal >= gigaDrillSpaceMetalCost && gem >= gigaDrillGemCost && silicon >= gigaDrillSiliconCost){
		metal -= gigaDrillSpaceMetalCost;
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
		tier3 += 1;
		if(gigaDrill >= 1 && document.getElementById("Build 1 Giga Drill").className === "achievementTD"){
			document.getElementById("Build 1 Giga Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Giga Drill");
		}
		if(gigaDrill >= 10 && document.getElementById("Build 10 Giga Drills").className === "achievementTD"){
			document.getElementById("Build 10 Giga Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Giga Drills");
		}
		if(gigaDrill >= 100 && document.getElementById("Build 100 Giga Drills").className === "achievementTD"){
			document.getElementById("Build 100 Giga Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Giga Drills");
		}
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
		tier1 += 1;
		if(gemMiner >= 1 && document.getElementById("Build 1 Miner").className === "achievementTD"){
			document.getElementById("Build 1 Gem Miner").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Gem Miner");
		}
		if(gemMiner >= 10 && document.getElementById("Build 10 Miner").className === "achievementTD"){
			document.getElementById("Build 10 Gem Miners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Gem Miners");
		}
		if(gemMiner >= 100 && document.getElementById("Build 100 Miner").className === "achievementTD"){
			document.getElementById("Build 100 Gem Miners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Gem Miners");
		}
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
		tier2 += 1;
		if(pumpjack >= 1 && document.getElementById("Build 1 Advanced Drill").className === "achievementTD"){
			document.getElementById("Build 1 Advanced Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Advanced Drill");
		}
		if(pumpjack >= 10 && document.getElementById("Build 10 Advanced Drills").className === "achievementTD"){
			document.getElementById("Build 10 Advanced Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Advanced Drills");
		}
		if(pumpjack >= 100 && document.getElementById("Build 100 Advanced Drills").className === "achievementTD"){
			document.getElementById("Build 100 Advanced Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Advanced Drills");
		}
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
		tier3 += 1;
		if(diamondDrill >= 1 && document.getElementById("Build 1 Diamond-Encrusted Drill").className === "achievementTD"){
			document.getElementById("Build 1 Diamond-Encrusted Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Diamond-Encrusted Drill");
		}
		if(diamondDrill >= 10 && document.getElementById("Build 10 Diamond-Encrusted Drills").className === "achievementTD"){
			document.getElementById("Build 10 Diamond-Encrusted Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Diamond-Encrusted Drill");
		}
		if(diamondDrill >= 100 && document.getElementById("Build 100 Diamond-Encrusted Drills").className === "achievementTD"){
			document.getElementById("Build 100 Diamond-Encrusted Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Diamond-Encrusted Drill");
		}
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
		tier3 += 1;
		// if(carbyneDrill >= 1 && document.getElementById("Build 1 Diamond-Encrusted Drill").className === "achievementTD"){
		// 	document.getElementById("Build 1 Diamond-Encrusted Drill").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 1 Diamond-Encrusted Drill");
		// }
		// if(carbyneDrill >= 10 && document.getElementById("Build 10 Diamond-Encrusted Drills").className === "achievementTD"){
		// 	document.getElementById("Build 10 Diamond-Encrusted Drills").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 10 Diamond-Encrusted Drill");
		// }
		// if(carbyneDrill >= 100 && document.getElementById("Build 100 Diamond-Encrusted Drills").className === "achievementTD"){
		// 	document.getElementById("Build 100 Diamond-Encrusted Drills").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 100 Diamond-Encrusted Drill");
		// }
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
		tier1 += 1;
		if(woodburner >= 1 && document.getElementById("Build 1 Woodburner").className === "achievementTD"){
			document.getElementById("Build 1 Woodburner").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Woodburner");
		}
		if(woodburner >= 10 && document.getElementById("Build 10 Woodburners").className === "achievementTD"){
			document.getElementById("Build 10 Woodburners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Woodburners");
		}
		if(woodburner >= 100 && document.getElementById("Build 100 Woodburners").className === "achievementTD"){
			document.getElementById("Build 100 Woodburners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Woodburners");
		}
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
		tier2 += 1;
		if(furnace >= 1 && document.getElementById("Build 1 Furnace").className === "achievementTD"){
			document.getElementById("Build 1 Furnace").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Furnace");
		}
		if(furnace >= 10 && document.getElementById("Build 10 Furnaces").className === "achievementTD"){
			document.getElementById("Build 10 Furnaces").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Furnaces");
		}
		if(furnace >= 100 && document.getElementById("Build 100 Furnaces").className === "achievementTD"){
			document.getElementById("Build 100 Furnaces").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Furnaces");
		}
	}
}

function getKiln(){
	if(metal >= kilnSpaceMetalCost && gem >= kilnGemCost && silicon >= kilnSiliconCost){
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
		tier3 += 1;
		if(kiln >= 1 && document.getElementById("Build 1 Industrial Kiln").className === "achievementTD"){
			document.getElementById("Build 1 Industrial Kiln").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Industrial Kiln");
		}
		if(kiln >= 10 && document.getElementById("Build 10 Industrial Kilns").className === "achievementTD"){
			document.getElementById("Build 10 Industrial Kilns").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Industrial Kilns");
		}
		if(kiln >= 100 && document.getElementById("Build 100 Industrial Kilns").className === "achievementTD"){
			document.getElementById("Build 100 Industrial Kilns").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Industrial Kilns");
		}
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
		tier1 += 1;
		if(woodcutter >= 1 && document.getElementById("Build 1 Woodcutter").className === "achievementTD"){
			document.getElementById("Build 1 Woodcutter").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Woodcutter");
		}
		if(woodcutter >= 10 && document.getElementById("Build 10 Woodcutters").className === "achievementTD"){
			document.getElementById("Build 10 Woodcutters").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Woodcutters");
		}
		if(woodcutter >= 100 && document.getElementById("Build 100 Woodcutters").className === "achievementTD"){
			document.getElementById("Build 100 Woodcutters").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Woodcutters");
		}
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
		tier2 += 1;
		if(laserCutter >= 1 && document.getElementById("Build 1 Laser Cutter").className === "achievementTD"){
			document.getElementById("Build 1 Laser Cutter").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Laser Cutter");

		}
		if(laserCutter >= 10 && document.getElementById("Build 10 Laser Cutters").className === "achievementTD"){
			document.getElementById("Build 10 Laser Cutters").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Laser Cutters");
		}
		if(laserCutter >= 100 && document.getElementById("Build 100 Laser Cutters").className === "achievementTD"){
			document.getElementById("Build 100 Laser Cutters").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Laser Cutters");
		}
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
		tier3 += 1;
		if(deforester >= 1 && document.getElementById("Build 1 Mass Deforester").className === "achievementTD"){
			document.getElementById("Build 1 Mass Deforester").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Mass Deforester");
		}
		if(deforester >= 10 && document.getElementById("Build 10 Mass Deforesters").className === "achievementTD"){
			document.getElementById("Build 10 Mass Deforesters").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Mass Deforesters");
		}
		if(deforester >= 100 && document.getElementById("Build 100 Mass Deforesters").className === "achievementTD"){
			document.getElementById("Build 100 Mass Deforesters").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Mass Deforesters");
		}
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
		tier1 += 1;
		if(moonWorker >= 1 && document.getElementById("Build 1 Native Moon Worker").className === "achievementTD"){
			document.getElementById("Build 1 Native Moon Worker").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Native Moon Worker");
		}
		if(moonWorker >= 10 && document.getElementById("Build 10 Native Moon Workers").className === "achievementTD"){
			document.getElementById("Build 10 Native Moon Workers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Native Moon Workers");
		}
		if(moonWorker >= 100 && document.getElementById("Build 100 Native Moon Workers").className === "achievementTD"){
			document.getElementById("Build 100 Native Moon Workers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Native Moon Workers");
		}
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
		tier2 += 1;
		if(moonDrill >= 1 && document.getElementById("Build 1 Low-Gravity Drill").className === "achievementTD"){
			document.getElementById("Build 1 Low-Gravity Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Low-Gravity Drill");
		}
		if(moonDrill >= 10 && document.getElementById("Build 10 Low-Gravity Drills").className === "achievementTD"){
			document.getElementById("Build 10 Low-Gravity Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Low-Gravity Drills");
		}
		if(moonDrill >= 100 && document.getElementById("Build 100 Low-Gravity Drills").className === "achievementTD"){
			document.getElementById("Build 100 Low-Gravity Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Low-Gravity Drills");
		}
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
		tier3 += 1;
		if(moonQuarry >= 1 && document.getElementById("Build 1 Moon Quarry").className === "achievementTD"){
			document.getElementById("Build 1 Moon Quarry").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Moon Quarry");
		}
		if(moonQuarry >= 10 && document.getElementById("Build 10 Moon Quarries").className === "achievementTD"){
			document.getElementById("Build 10 Moon Quarries").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Moon Quarries");
		}
		if(moonQuarry >= 100 && document.getElementById("Build 100 Moon Quarries").className === "achievementTD"){
			document.getElementById("Build 100 Moon Quarries").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Moon Quarries");
		}
	}
}

function getPlanetExcavator(){
	if(titanium >= planetExcavatorTitaniumCost && ice >= planetExcavatorIceCost && meteorite >= planetExcavatorMeteoriteCost){
		titanium -= planetExcavatorTitaniumCost;
		ice -= planetExcavatorIceCost;
		meteorite -= planetExcavatorMeteoriteCost;
		planetExcavator += 1;
		planetExcavatorMeteoriteCost = Math.floor(3500 * Math.pow(1.1,planetExcavator));
		planetExcavatorIceCost = Math.floor(5000 * Math.pow(1.1,planetExcavator));
		planetExcavatorTitaniumCost = Math.floor(8000 * Math.pow(1.1,planetExcavator));
		document.getElementById("planetExcavator").innerHTML = planetExcavator;
		document.getElementById("planetExcavatorTitaniumCost").innerHTML = commafy(planetExcavatorTitaniumCost);
		document.getElementById("planetExcavatorIceCost").innerHTML = commafy(planetExcavatorIceCost);
		document.getElementById("planetExcavatorMeteoriteCost").innerHTML = commafy(planetExcavatorMeteoriteCost);
		refresh();
		tier4 += 1;
		// if(moonQuarry >= 1 && document.getElementById("Build 1 Moon Quarry").className === "achievementTD"){
		// 	document.getElementById("Build 1 Moon Quarry").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 1 Moon Quarry");
		// }
		// if(moonQuarry >= 10 && document.getElementById("Build 10 Moon Quarries").className === "achievementTD"){
		// 	document.getElementById("Build 10 Moon Quarries").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 10 Moon Quarries");
		// }
		// if(moonQuarry >= 100 && document.getElementById("Build 100 Moon Quarries").className === "achievementTD"){
		// 	document.getElementById("Build 100 Moon Quarries").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 100 Moon Quarries");
		// }
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
		tier1 += 1;
		if(vacuum >= 1 && document.getElementById("Build 1 Vacuum Cleaner").className === "achievementTD"){
			document.getElementById("Build 1 Vacuum Cleaner").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Vacuum Cleaner");
		}
		if(vacuum >= 10 && document.getElementById("Build 10 Vacuum Cleaners").className === "achievementTD"){
			document.getElementById("Build 10 Vacuum Cleaners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Vacuum Cleaners");
		}
		if(vacuum >= 100 && document.getElementById("Build 100 Vacuum Cleaners").className === "achievementTD"){
			document.getElementById("Build 100 Vacuum Cleaners").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Vacuum Cleaners");
		}
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
		tier2 += 1;
		if(suctionExcavator >= 1 && document.getElementById("Build 1 Suction Excavator").className === "achievementTD"){
			document.getElementById("Build 1 Suction Excavator").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Suction Excavator");
		}
		if(suctionExcavator >= 10 && document.getElementById("Build 10 Suction Excavators").className === "achievementTD"){
			document.getElementById("Build 10 Suction Excavators").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Suction Excavators");
		}
		if(suctionExcavator >= 100 && document.getElementById("Build 100 Suction Excavators").className === "achievementTD"){
			document.getElementById("Build 100 Suction Excavators").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Suction Excavators");
		}
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
		tier3 += 1;
		if(spaceCow >= 1 && document.getElementById("Build 1 Space Cow Plantation").className === "achievementTD"){
			document.getElementById("Build 1 Space Cow Plantation").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Space Cow Plantation");
		}
		if(spaceCow >= 10 && document.getElementById("Build 10 Space Cow Plantations").className === "achievementTD"){
			document.getElementById("Build 10 Space Cow Plantations").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Space Cow Plantations");
		}
		if(spaceCow >= 100 && document.getElementById("Build 100 Space Cow Plantations").className === "achievementTD"){
			document.getElementById("Build 100 Space Cow Plantations").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Space Cow Plantations");
		}
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
		tier1 += 1;
		if(explorer >= 1 && document.getElementById("Build 1 Explorer").className === "achievementTD"){
			document.getElementById("Build 1 Explorer").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Explorer");
		}
		if(explorer >= 10 && document.getElementById("Build 10 Explorers").className === "achievementTD"){
			document.getElementById("Build 10 Explorers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Explorers");
		}
		if(explorer >= 100 && document.getElementById("Build 100 Explorers").className === "achievementTD"){
			document.getElementById("Build 100 Explorers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Explorers");
		}
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
		tier2 += 1;
		if(spaceMetalDrill >= 1 && document.getElementById("Build 1 Space Metal Drill").className === "achievementTD"){
			document.getElementById("Build 1 Space Metal Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Space Metal Drill");
		}
		if(spaceMetalDrill >= 10 && document.getElementById("Build 10 Space Metal Drills").className === "achievementTD"){
			document.getElementById("Build 10 Space Metal Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Space Metal Drills");
		}
		if(spaceMetalDrill >= 100 && document.getElementById("Build 100 Space Metal Drills").className === "achievementTD"){
			document.getElementById("Build 100 Space Metal Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Space Metal Drills");
		}
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
		tier3 += 1;
		if(pentaDrill >= 1 && document.getElementById("Build 1 Penta-Drill").className === "achievementTD"){
			document.getElementById("Build 1 Penta-Drill").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Penta-Drill");
		}
		if(pentaDrill >= 10 && document.getElementById("Build 10 Penta-Drills").className === "achievementTD"){
			document.getElementById("Build 10 Penta-Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Penta-Drills");
		}
		if(pentaDrill >= 100 && document.getElementById("Build 100 Penta-Drills").className === "achievementTD"){
			document.getElementById("Build 100 Penta-Drills").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Penta-Drills");
		}
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
		titanDrillMeteoriteCost = Math.floor(6000 * Math.pow(1.1,titanDrill));
		document.getElementById("titanDrill").innerHTML = titanDrill;
		document.getElementById("titanDrillSpaceMetalCost").innerHTML = commafy(titanDrillSpaceMetalCost);
		document.getElementById("titanDrillGoldCost").innerHTML = commafy(titanDrillGoldCost);
		document.getElementById("titanDrillMeteoriteCost").innerHTML = commafy(titanDrillMeteoriteCost);
		refresh();
		tier4 += 1;
		// if(titanDrill >= 1 && document.getElementById("Build 1 Penta-Drill").className === "achievementTD"){
		// 	document.getElementById("Build 1 Penta-Drill").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 1 Penta-Drill");
		// }
		// if(titanDrill >= 10 && document.getElementById("Build 10 Penta-Drills").className === "achievementTD"){
		// 	document.getElementById("Build 10 Penta-Drills").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 10 Penta-Drills");
		// }
		// if(titanDrill >= 100 && document.getElementById("Build 100 Penta-Drills").className === "achievementTD"){
		// 	document.getElementById("Build 100 Penta-Drills").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 100 Penta-Drills");
		// }
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
		tier1 += 1;
		if(droid >= 1 && document.getElementById("Build 1 Rocket Droid").className === "achievementTD"){
			document.getElementById("Build 1 Rocket Droid").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Rocket Droid");
		}
		if(droid >= 10 && document.getElementById("Build 10 Rocket Droids").className === "achievementTD"){
			document.getElementById("Build 10 Rocket Droids").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Rocket Droids");
		}
		if(droid >= 100 && document.getElementById("Build 100 Rocket Droids").className === "achievementTD"){
			document.getElementById("Build 100 Rocket Droids").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Rocket Droids");
		}
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
		tier2 += 1;
		if(destroyer >= 1 && document.getElementById("Build 1 Asteroid Destroyer").className === "achievementTD"){
			document.getElementById("Build 1 Asteroid Destroyer").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Asteroid Destroyer");
		}
		if(destroyer >= 10 && document.getElementById("Build 10 Asteroid Destroyers").className === "achievementTD"){
			document.getElementById("Build 10 Asteroid Destroyers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Asteroid Destroyers");
		}
		if(destroyer >= 100 && document.getElementById("Build 100 Asteroid Destroyers").className === "achievementTD"){
			document.getElementById("Build 100 Asteroid Destroyers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Asteroid Destroyers");
		}
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
		tier3 += 1;
		if(deathStar >= 1 && document.getElementById("Build 1 Death Star Jr").className === "achievementTD"){
			document.getElementById("Build 1 Death Star Jr").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Death Star Jr");
		}
		if(deathStar >= 10 && document.getElementById("Build 10 Death Star Jrs").className === "achievementTD"){
			document.getElementById("Build 10 Death Star Jrs").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Death Star Jrs");
		}
		if(deathStar >= 100 && document.getElementById("Build 100 Death Star Jrs").className === "achievementTD"){
			document.getElementById("Build 100 Death Star Jrs").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Death Star Jrs");
		}
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
		tier1 += 1;
		if(scout >= 1 && document.getElementById("Build 1 Scout Ship").className === "achievementTD"){
			document.getElementById("Build 1 Scout Ship").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Scout Ship");
		}
		if(scout >= 10 && document.getElementById("Build 10 Scout Ships").className === "achievementTD"){
			document.getElementById("Build 10 Scout Ships").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Scout Ships");
		}
		if(scout >= 100 && document.getElementById("Build 100 Scout Ships").className === "achievementTD"){
			document.getElementById("Build 100 Scout Ships").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Scout Ships");
		}
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
		tier2 += 1;
		if(spaceLaser >= 1 && document.getElementById("Build 1 Interplanetary Laser").className === "achievementTD"){
			document.getElementById("Build 1 Interplanetary Laser").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Interplanetary Laser");
		}
		if(spaceLaser >= 10 && document.getElementById("Build 10 Interplanetary Lasers").className === "achievementTD"){
			document.getElementById("Build 10 Interplanetary Lasers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Interplanetary Lasers");
		}
		if(spaceLaser >= 100 && document.getElementById("Build 100 Interplanetary Lasers").className === "achievementTD"){
			document.getElementById("Build 100 Interplanetary Lasers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Interplanetary Lasers");
		}
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
		tier3 += 1;
		if(bertha >= 1 && document.getElementById("Build 1 Big Bertha").className === "achievementTD"){
			document.getElementById("Build 1 Big Bertha").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Big Bertha");
		}
		if(bertha >= 10 && document.getElementById("Build 10 Big Berthas").className === "achievementTD"){
			document.getElementById("Build 10 Big Berthas").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Big Berthas");
		}
		if(bertha >= 100 && document.getElementById("Build 100 Big Berthas").className === "achievementTD"){
			document.getElementById("Build 100 Big Berthas").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Big Berthas");
		}
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
		tier1 += 1;
		if(blowtorch >= 1 && document.getElementById("Build 1 Empowered Blowtorch").className === "achievementTD"){
			document.getElementById("Build 1 Empowered Blowtorch").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Empowered Blowtorch");
		}
		if(blowtorch >= 10 && document.getElementById("Build 10 Empowered Blowtorches").className === "achievementTD"){
			document.getElementById("Build 10 Empowered Blowtorches").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Empowered Blowtorches");
		}
		if(blowtorch >= 100 && document.getElementById("Build 100 Empowered Blowtorches").className === "achievementTD"){
			document.getElementById("Build 100 Empowered Blowtorches").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Empowered Blowtorches");
		}
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
		tier2 += 1;
		if(scorcher >= 1 && document.getElementById("Build 1 Seaside Scorcher").className === "achievementTD"){
			document.getElementById("Build 1 Seaside Scorcher").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Seaside Scorcher");
		}
		if(scorcher >= 10 && document.getElementById("Build 10 Seaside Scorchers").className === "achievementTD"){
			document.getElementById("Build 10 Seaside Scorchers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Seaside Scorchers");
		}
		if(scorcher >= 100 && document.getElementById("Build 100 Seaside Scorchers").className === "achievementTD"){
			document.getElementById("Build 100 Seaside Scorchers").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Seaside Scorchers");
		}
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
		tier3 += 1;
		if(annihilator >= 1 && document.getElementById("Build 1 Beach Annihilator").className === "achievementTD"){
			document.getElementById("Build 1 Beach Annihilator").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 1 Beach Annihilator");
		}
		if(annihilator >= 10 && document.getElementById("Build 10 Beach Annihilators").className === "achievementTD"){
			document.getElementById("Build 10 Beach Annihilators").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 10 Beach Annihilators");
		}
		if(annihilator >= 100 && document.getElementById("Build 100 Beach Annihilators").className === "achievementTD"){
			document.getElementById("Build 100 Beach Annihilators").className = "achievementTD achieved";
			newUnlock("settings");
			achieved.push("Build 100 Beach Annihilators");
		}
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
		tier4 += 1;
		// if(desert >= 1 && document.getElementById("Build 1 Desert Destroyer").className === "achievementTD"){
		// 	document.getElementById("Build 1 Desert Destroyer").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 1 Desert Destroyer");
		// }
		// if(desert >= 10 && document.getElementById("Build 10 Desert Destroyers").className === "achievementTD"){
		// 	document.getElementById("Build 10 Desert Destroyers").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 10 Desert Destroyers");
		// }
		// if(desert >= 100 && document.getElementById("Build 100 Desert Destroyers").className === "achievementTD"){
		// 	document.getElementById("Build 100 Desert Destroyers").className = "achievementTD achieved";
		// 	newUnlock("settings");
		// 	achieved.push("Build 100 Desert Destroyers");
		// }
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
		tier1 += 1;
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
		tier2 += 1;
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
		tier3 += 1;
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
		tier1 += 1;
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
		tier2 += 1;
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
		tier3 += 1;
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
		tier1 += 1;
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
		tier2 += 1;
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
		tier3 += 1;
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
		tier1 += 1;
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
		tier2 += 1;
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
		tier3 += 1;
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
		tier1 += 1;
	}
}