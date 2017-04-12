function gainResources(){
	if(energy + energyps/10 <= 100000){
		energy += energyps/10;
	}
	else{
		energy = 100000;
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
	if(oil >= chemicalPlant*20/10 && charcoal >= chemicalPlant*20/10){
		oil -= chemicalPlant*20/10;
		charcoal -= chemicalPlant*20/10;
		rocketFuel += chemicalPlant/5/10;
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
	if(uranium + uraniumps/10 < uraniumStorage){
		uranium += uraniumps/10;
	}
	else{
		uranium = uraniumStorage;
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
	if(helium + heliumps/10 < heliumStorage){
		helium += heliumps/10;
	}
	else{
		helium = heliumStorage;
	}
	if(oil + oilps/10 < oilStorage){
		oil += oilps/10;
	}
	else{
		oil = oilStorage;
	}

	
	document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput) - (kiln*45));
	document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine - (chemicalPlant*20));
	
	

	// ReWrite This
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
			if(charcoal + difference <= charcoalStorage){
				charcoal += difference;
				wood -= difference * 2;
			}
			else{
				charcoal = charcoalStorage;
			}
		}
	}
	if(wood + woodps/10 < woodStorage){
		wood += woodps/10;
	}
	else{
		wood = woodStorage;
	}
	// Up To Here
	if(charcoal >= charcoalStorage){
		document.getElementById("woodps").innerHTML = commafy(woodps);
		document.getElementById("charcoal").className = "green";
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
}

// Gain Buttons

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

function getCharcoalEngine(){
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		charcoalEngineMetalCost = Math.floor(50 * Math.pow(1.1,charcoalEngine + 1));
		charcoalEngineGemCost = Math.floor(25 * Math.pow(1.1,charcoalEngine + 1));
		document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
		document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
		document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSolarPanel(){
	if(metal >= solarPanelMetalCost && gem >= solarPanelGemCost){
		metal -= solarPanelMetalCost;
		gem -= solarPanelGemCost;
		solarPanel += 1;
		solarPanelMetalCost = Math.floor(30 * Math.pow(1.1,solarPanel + 1));
		solarPanelGemCost = Math.floor(35 * Math.pow(1.1,solarPanel + 1));
		document.getElementById("solarPanel").innerHTML = solarPanel;
		document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
		document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getMethaneStation(){
	if(spaceMetal >= methaneStationSpaceMetalCost && titanium >= methaneStationTitaniumCost){
		spaceMetal -= methaneStationSpaceMetalCost;
		titanium -= methaneStationTitaniumCost;
		methaneStation += 1;
		methaneStationSpaceMetalCost = Math.floor(110 * Math.pow(1.1,methaneStation + 1));
		methaneStationTitaniumCost = Math.floor(90 * Math.pow(1.1,methaneStation + 1));
		document.getElementById("methaneStation").innerHTML = methaneStation;
		document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
		document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getNuclearStation(){
	if(spaceMetal >= nuclearStationSpaceMetalCost && titanium >= nuclearStationTitaniumCost){
		spaceMetal -= nuclearStationSpaceMetalCost;
		titanium -= nuclearStationTitaniumCost;
		nuclearStation += 1;
		nuclearStationSpaceMetalCost = Math.floor(20000 * Math.pow(1.1,nuclearStation + 1));
		nuclearStationTitaniumCost = Math.floor(10000 * Math.pow(1.1,nuclearStation + 1));
		document.getElementById("nuclearStation").innerHTML = nuclearStation;
		document.getElementById("nuclearStationSpaceMetalCost").innerHTML = commafy(nuclearStationSpaceMetalCost);
		document.getElementById("nuclearStationTitaniumCost").innerHTML = commafy(nuclearStationTitaniumCost);
		refresh();
		refreshPerSec();
		tier4 += 1;
	}
}


function getMagmatic(){
	if(spaceMetal >= magmaticSpaceMetalCost && gem >= magmaticGemCost && silver >= magmaticSilverCost){
		spaceMetal -= magmaticSpaceMetalCost;
		gem -= magmaticGemCost;
		silver -= magmaticSilverCost;
		magmatic += 1;
		magmaticSpaceMetalCost = Math.floor(25000 * Math.pow(1.1,magmatic + 1));
		magmaticGemCost = Math.floor(30000 * Math.pow(1.1,magmatic + 1));
		magmaticSilverCost = Math.floor(20000 * Math.pow(1.1,magmatic + 1));
		document.getElementById("magmatic").innerHTML = magmatic;
		document.getElementById("magmaticSpaceMetalCost").innerHTML = commafy(magmaticSpaceMetalCost);
		document.getElementById("magmaticGemCost").innerHTML = commafy(magmaticGemCost);
		document.getElementById("magmaticSilverCost").innerHTML = commafy(magmaticSilverCost);
		refresh();
		refreshPerSec();
		tier5 += 1;
	}
}

function getFusionReactor(){
	if(spaceMetal >= fusionReactorSpaceMetalCost && titanium >= fusionReactorTitaniumCost && silicon >= fusionReactorSiliconCost){
		spaceMetal -= fusionReactorSpaceMetalCost;
		titanium -= fusionReactorTitaniumCost;
		silicon -= fusionReactorSiliconCost;
		fusionReactor += 1;
		fusionReactorSpaceMetalCost = Math.floor(30000 * Math.pow(1.1,fusionReactor + 1));
		fusionReactorTitaniumCost = Math.floor(20000 * Math.pow(1.1,fusionReactor + 1));
		fusionReactorSiliconCost = Math.floor(15000 * Math.pow(1.1,fusionReactor + 1));
		document.getElementById("fusionReactor").innerHTML = fusionReactor;
		document.getElementById("fusionReactorSpaceMetalCost").innerHTML = commafy(fusionReactorSpaceMetalCost);
		document.getElementById("fusionReactorTitaniumCost").innerHTML = commafy(fusionReactorTitaniumCost);
		document.getElementById("fusionReactorSiliconCost").innerHTML = commafy(fusionReactorSiliconCost);
		refresh();
		refreshPerSec();
		tier6 += 1;
	}
}

function getGrinder(){
	if(titanium >= grinderTitaniumCost && spaceMetal >= grinderSpaceMetalCost && gold >= grinderGoldCost){
		titanium -= grinderTitaniumCost;
		spaceMetal -= grinderSpaceMetalCost;
		gold -= grinderGoldCost;
		grinder += 1;
		grinderTitaniumCost = Math.floor(2000 * Math.pow(1.1,grinder + 1));
		grinderSpaceMetalCost = Math.floor(4000 * Math.pow(1.1,grinder + 1));
		grinderGoldCost = Math.floor(2000 * Math.pow(1.1,grinder + 1));
		document.getElementById("grinder").innerHTML = grinder;
		document.getElementById("grinderTitaniumCost").innerHTML = commafy(grinderTitaniumCost);
		document.getElementById("grinderSpaceMetalCost").innerHTML = commafy(grinderSpaceMetalCost);
		document.getElementById("grinderGoldCost").innerHTML = commafy(grinderGoldCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getCubic(){
	if(uranium >= cubicUraniumCost && spaceMetal >= cubicSpaceMetalCost && oil >= cubicOilCost){
		uranium -= cubicUraniumCost;
		spaceMetal -= cubicSpaceMetalCost;
		oil -= cubicOilCost;
		cubic += 1;
		cubicUraniumCost = Math.floor(80 * Math.pow(1.1,cubic + 1));
		cubicSpaceMetalCost = Math.floor(10000 * Math.pow(1.1,cubic + 1));
		cubicOilCost = Math.floor(10000 * Math.pow(1.1,cubic + 1));
		document.getElementById("cubic").innerHTML = cubic;
		document.getElementById("cubicUraniumCost").innerHTML = commafy(cubicUraniumCost);
		document.getElementById("cubicSpaceMetalCost").innerHTML = commafy(cubicSpaceMetalCost);
		document.getElementById("cubicOilCost").innerHTML = commafy(cubicOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getEnricher(){
	if(spaceMetal >= enricherSpaceMetalCost && titanium >= enricherTitaniumCost && silicon >= enricherSiliconCost){
		spaceMetal -= enricherSpaceMetalCost;
		titanium -= enricherTitaniumCost;
		silicon -= enricherSiliconCost;
		enricher += 1;
		enricherSiliconCost = Math.floor(21700 * Math.pow(1.1,enricher + 1));
		enricherTitaniumCost = Math.floor(23000 * Math.pow(1.1,enricher + 1));
		enricherSpaceMetalCost = Math.floor(13500 * Math.pow(1.1,enricher + 1));
		document.getElementById("enricher").innerHTML = enricher;
		document.getElementById("enricherSpaceMetalCost").innerHTML = commafy(enricherSpaceMetalCost);
		document.getElementById("enricherTitaniumCost").innerHTML = commafy(enricherTitaniumCost);
		document.getElementById("enricherSiliconCost").innerHTML = commafy(enricherSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getPump(){
	if(metal >= pumpMetalCost && gem >= pumpGemCost){
		metal -= pumpMetalCost;
		gem -= pumpGemCost;
		pump += 1;
		pumpMetalCost = Math.floor(60 * Math.pow(1.1,pump + 1));
		pumpGemCost = Math.floor(20 * Math.pow(1.1,pump + 1));
		document.getElementById("pump").innerHTML = pump;
		document.getElementById("pumpMetalCost").innerHTML = commafy(pumpMetalCost);
		document.getElementById("pumpGemCost").innerHTML = commafy(pumpGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getPumpjack(){
	if(metal >= pumpjackMetalCost && gem >= pumpjackGemCost && oil >= pumpjackOilCost){
		metal -= pumpMetalCost;
		gem -= pumpjackGemCost;
		oil -= pumpjackOilCost;
		pumpjack += 1;
		pumpjackOilCost = Math.floor(50 * Math.pow(1.1,pumpjack + 1));
		pumpjackGemCost = Math.floor(85 * Math.pow(1.1,pumpjack + 1));
		pumpjackMetalCost = Math.floor(250 * Math.pow(1.1,pumpjack + 1));
		document.getElementById("pumpjack").innerHTML = pumpjack;
		document.getElementById("pumpjackOilCost").innerHTML = commafy(pumpjackOilCost);
		document.getElementById("pumpjackGemCost").innerHTML = commafy(pumpjackGemCost);
		document.getElementById("pumpjackMetalCost").innerHTML = commafy(pumpjackMetalCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getOilField(){
	if(spaceMetal >= oilFieldSpaceMetalCost && titanium >= oilFieldTitaniumCost && silicon >= oilFieldSiliconCost){
		spaceMetal -= oilFieldSpaceMetalCost;
		titanium -= oilFieldTitaniumCost;
		silicon -= oilFieldSiliconCost;
		oilField += 1;
		oilFieldSiliconCost = Math.floor(3900 * Math.pow(1.1,oilField + 1));
		oilFieldTitaniumCost = Math.floor(2700 * Math.pow(1.1,oilField + 1));
		oilFieldSpaceMetalCost = Math.floor(2400 * Math.pow(1.1,oilField + 1));
		document.getElementById("oilField").innerHTML = oilField;
		document.getElementById("oilFieldSpaceMetalCost").innerHTML = commafy(oilFieldSpaceMetalCost);
		document.getElementById("oilFieldTitaniumCost").innerHTML = commafy(oilFieldTitaniumCost);
		document.getElementById("oilFieldSiliconCost").innerHTML = commafy(oilFieldSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getMiner(){
	if(metal >= minerMetalCost && wood >= minerWoodCost){
		metal -= minerMetalCost;
		wood -= minerWoodCost;
		miner += 1;
		minerWoodCost = Math.floor(5 * Math.pow(1.1,miner + 1));
		minerMetalCost = Math.floor(10 * Math.pow(1.1,miner + 1));
		document.getElementById("miner").innerHTML = miner;
		document.getElementById("minerMetalCost").innerHTML = commafy(minerMetalCost);
		document.getElementById("minerWoodCost").innerHTML = commafy(minerWoodCost);
		if(researchUnlocked === false){
			if(miner >= 1){
				document.getElementById("researchTab").className = "";
				document.getElementById("dropdownMenu").className = "dropdown";
				researchUnlocked = true;
				tabsUnlocked.push("researchTab", "dropdownMenu");
			}
		}
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getHeavyDrill(){
	if(metal >= heavyDrillMetalCost && gem >= heavyDrillGemCost && oil >= heavyDrillOilCost){
		metal -= heavyDrillMetalCost;
		gem -= heavyDrillGemCost;
		oil -= heavyDrillOilCost;
		heavyDrill += 1;
		heavyDrillOilCost = Math.floor(50 * Math.pow(1.1,heavyDrill + 1));
		heavyDrillGemCost = Math.floor(60 * Math.pow(1.1,heavyDrill + 1));
		heavyDrillMetalCost = Math.floor(160 * Math.pow(1.1,heavyDrill + 1));
		document.getElementById("heavyDrill").innerHTML = heavyDrill;
		document.getElementById("heavyDrillMetalCost").innerHTML = commafy(heavyDrillMetalCost);
		document.getElementById("heavyDrillGemCost").innerHTML = commafy(heavyDrillGemCost);
		document.getElementById("heavyDrillOilCost").innerHTML = commafy(heavyDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getGemMiner(){
	if(metal >= gemMinerMetalCost && gem >= gemMinerGemCost){
		metal -= gemMinerMetalCost;
		gem -= gemMinerGemCost;
		gemMiner += 1;
		gemMinerGemCost = Math.floor(10 * Math.pow(1.1,gemMiner + 1));
		gemMinerMetalCost = Math.floor(15 * Math.pow(1.1,gemMiner + 1));
		document.getElementById("gemMiner").innerHTML = gemMiner;
		document.getElementById("gemMinerMetalCost").innerHTML = commafy(gemMinerMetalCost);
		document.getElementById("gemMinerGemCost").innerHTML = commafy(gemMinerGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getAdvancedDrill(){
	if(metal >= advancedDrillMetalCost && gem >= advancedDrillGemCost && oil >= advancedDrillOilCost){
		metal -= advancedDrillMetalCost;
		gem -= advancedDrillGemCost;
		oil -= advancedDrillOilCost;
		advancedDrill += 1;
		advancedDrillOilCost = Math.floor(60 * Math.pow(1.1,advancedDrill + 1));
		advancedDrillGemCost = Math.floor(200 * Math.pow(1.1,advancedDrill + 1));
		advancedDrillMetalCost = Math.floor(120 * Math.pow(1.1,advancedDrill + 1));
		document.getElementById("advancedDrill").innerHTML = advancedDrill;
		document.getElementById("advancedDrillMetalCost").innerHTML = commafy(advancedDrillMetalCost);
		document.getElementById("advancedDrillGemCost").innerHTML = commafy(advancedDrillGemCost);
		document.getElementById("advancedDrillOilCost").innerHTML = commafy(advancedDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getWoodburner(){
	if(metal >= woodburnerMetalCost && wood >= woodburnerWoodCost){
		metal -= woodburnerMetalCost;
		wood -= woodburnerWoodCost;
		woodburner += 1;
		woodburnerWoodCost = Math.floor(5 * Math.pow(1.1,woodburner + 1));
		woodburnerMetalCost = Math.floor(10 * Math.pow(1.1,woodburner + 1));
		document.getElementById("woodburner").innerHTML = woodburner;
		document.getElementById("woodburnerMetalCost").innerHTML = commafy(woodburnerMetalCost);
		document.getElementById("woodburnerWoodCost").innerHTML = commafy(woodburnerWoodCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getFurnace(){
	if(metal >= furnaceMetalCost && wood >= furnaceWoodCost && oil >= furnaceOilCost){
		metal -= furnaceMetalCost;
		wood -= furnaceWoodCost;
		oil -= furnaceOilCost;
		furnace += 1;
		furnaceWoodCost = Math.floor(40 * Math.pow(1.1,furnace + 1));
		furnaceOilCost = Math.floor(100 * Math.pow(1.1,furnace + 1));
		furnaceMetalCost = Math.floor(80 * Math.pow(1.1,furnace + 1));
		document.getElementById("furnace").innerHTML = furnace;
		document.getElementById("furnaceMetalCost").innerHTML = commafy(furnaceMetalCost);
		document.getElementById("furnaceWoodCost").innerHTML = commafy(furnaceWoodCost);
		document.getElementById("furnaceOilCost").innerHTML = commafy(furnaceOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getKiln(){
	if(metal >= kilnSpaceMetalCost && gem >= kilnGemCost && silicon >= kilnSiliconCost){
		spaceMetal -= kilnSpaceMetalCost;
		gem -= kilnGemCost;
		silicon -= kilnSiliconCost;
		kiln += 1;
		kilnSiliconCost = Math.floor(3800 * Math.pow(1.1,kiln + 1));
		kilnGemCost = Math.floor(6200 * Math.pow(1.1,kiln + 1));
		kilnSpaceMetalCost = Math.floor(3500 * Math.pow(1.1,kiln + 1));
		document.getElementById("kiln").innerHTML = kiln;
		document.getElementById("kilnSpaceMetalCost").innerHTML = commafy(kilnSpaceMetalCost);
		document.getElementById("kilnGemCost").innerHTML = commafy(kilnGemCost);
		document.getElementById("kilnSiliconCost").innerHTML = commafy(kilnSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getWoodcutter(){
	if(metal >= woodcutterMetalCost && wood >= woodcutterWoodCost){
		metal -= woodcutterMetalCost;
		wood -= woodcutterWoodCost;
		woodcutter += 1;
		woodcutterWoodCost = Math.floor(5 * Math.pow(1.1,woodcutter + 1));
		woodcutterMetalCost = Math.floor(10 * Math.pow(1.1,woodcutter + 1));
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("woodcutterMetalCost").innerHTML = commafy(woodcutterMetalCost);
		document.getElementById("woodcutterWoodCost").innerHTML = commafy(woodcutterWoodCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getLaserCutter(){
	if(metal >= laserCutterMetalCost && gem >= laserCutterGemCost && oil >= laserCutterOilCost){
		metal -= laserCutterMetalCost;
		gem -= laserCutterGemCost;
		oil -= laserCutterOilCost;
		laserCutter += 1;
		laserCutterOilCost = Math.floor(40 * Math.pow(1.1,laserCutter + 1));
		laserCutterGemCost = Math.floor(90 * Math.pow(1.1,laserCutter + 1));
		laserCutterMetalCost = Math.floor(50 * Math.pow(1.1,laserCutter + 1));
		document.getElementById("laserCutter").innerHTML = laserCutter;
		document.getElementById("laserCutterMetalCost").innerHTML = commafy(laserCutterMetalCost);
		document.getElementById("laserCutterGemCost").innerHTML = commafy(laserCutterGemCost);
		document.getElementById("laserCutterOilCost").innerHTML = commafy(laserCutterOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getDeforester(){
	if(spaceMetal >= deforesterSpaceMetalCost && titanium >= deforesterTitaniumCost && silicon >= deforesterSiliconCost){
		spaceMetal -= deforesterSpaceMetalCost;
		titanium -= deforesterTitaniumCost;
		silicon -= deforesterSiliconCost;
		deforester += 1;
		deforesterSpaceMetalCost = Math.floor(40 * Math.pow(1.1,deforester + 1));
		deforesterTitaniumCost = Math.floor(90 * Math.pow(1.1,deforester + 1));
		deforesterSiliconCost = Math.floor(50 * Math.pow(1.1,deforester + 1));
		document.getElementById("deforester").innerHTML = deforester;
		document.getElementById("deforesterSpaceMetalCost").innerHTML = commafy(deforesterSpaceMetalCost);
		document.getElementById("deforesterTitaniumCost").innerHTML = commafy(deforesterTitaniumCost);
		document.getElementById("deforesterSiliconCost").innerHTML = commafy(deforesterSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= moonWorkerGemCost;
		moonWorker += 1;
		moonWorkerGemCost = Math.floor(500 * Math.pow(1.1,moonWorker + 1));
		document.getElementById("moonWorker").innerHTML = moonWorker;
		document.getElementById("moonWorkerGemCost").innerHTML = commafy(moonWorkerGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getMoonDrill(){
	if(metal >= moonDrillMetalCost && gem >= moonDrillGemCost && oil >= moonDrillOilCost){
		metal -= moonDrillMetalCost;
		gem -= moonDrillGemCost;
		oil -= moonDrillOilCost;
		moonDrill += 1;
		moonDrillOilCost = Math.floor(400 * Math.pow(1.1,moonDrill + 1));
		moonDrillGemCost = Math.floor(600 * Math.pow(1.1,moonDrill + 1));
		moonDrillMetalCost = Math.floor(1000 * Math.pow(1.1,moonDrill + 1));
		document.getElementById("moonDrill").innerHTML = moonDrill;
		document.getElementById("moonDrillMetalCost").innerHTML = commafy(moonDrillMetalCost);
		document.getElementById("moonDrillGemCost").innerHTML = commafy(moonDrillGemCost);
		document.getElementById("moonDrillOilCost").innerHTML = commafy(moonDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getMoonQuarry(){
	if(spaceMetal >= moonQuarrySpaceMetalCost && gem >= moonQuarryGemCost && silicon >= moonQuarrySiliconCost){
		spaceMetal -= moonQuarrySpaceMetalCost;
		gem -= moonQuarryGemCost;
		silicon -= moonQuarrySiliconCost;
		moonQuarry += 1;
		moonQuarrySiliconCost = Math.floor(3500 * Math.pow(1.1,moonQuarry + 1));
		moonQuarryGemCost = Math.floor(5000 * Math.pow(1.1,moonQuarry + 1));
		moonQuarrySpaceMetalCost = Math.floor(8000 * Math.pow(1.1,moonQuarry + 1));
		document.getElementById("moonQuarry").innerHTML = moonQuarry;
		document.getElementById("moonQuarrySpaceMetalCost").innerHTML = commafy(moonQuarrySpaceMetalCost);
		document.getElementById("moonQuarryGemCost").innerHTML = commafy(moonQuarryGemCost);
		document.getElementById("moonQuarrySiliconCost").innerHTML = commafy(moonQuarrySiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getVacuum(){
	if(spaceMetal >= vacuumSpaceMetalCost && gem >= vacuumGemCost){
		spaceMetal -= vacuumSpaceMetalCost;
		gem -= vacuumGemCost;
		vacuum += 1;
		vacuumGemCost = Math.floor(500 * Math.pow(1.1,vacuum + 1));
		vacuumSpaceMetalCost = Math.floor(50 * Math.pow(1.1,vacuum + 1));
		document.getElementById("vacuum").innerHTML = vacuum;
		document.getElementById("vacuumSpaceMetalCost").innerHTML = commafy(vacuumSpaceMetalCost);
		document.getElementById("vacuumGemCost").innerHTML = commafy(vacuumGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSuctionExcavator(){
	if(spaceMetal >= suctionExcavatorSpaceMetalCost && gem >= suctionExcavatorGemCost && oil >= suctionExcavatorOilCost){
		spaceMetal -= suctionExcavatorSpaceMetalCost;
		gem -= suctionExcavatorGemCost;
		oil -= suctionExcavatorOilCost;
		suctionExcavator += 1;
		suctionExcavatorOilCost = Math.floor(600 * Math.pow(1.1,suctionExcavator + 1));
		suctionExcavatorGemCost = Math.floor(800 * Math.pow(1.1,suctionExcavator + 1));
		suctionExcavatorSpaceMetalCost = Math.floor(100 * Math.pow(1.1,suctionExcavator + 1));
		document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
		document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
		document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
		document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getSpaceCow(){
	if(spaceMetal >= spaceCowSpaceMetalCost && titanium >= spaceCowTitaniumCost && silicon >= spaceCowSiliconCost){
		spaceMetal -= spaceCowSpaceMetalCost;
		titanium -= spaceCowTitaniumCost;
		silicon -= spaceCowSiliconCost;
		spaceCow += 1;
		spaceCowSiliconCost = Math.floor(3900 * Math.pow(1.1,spaceCow + 1));
		spaceCowTitaniumCost = Math.floor(2700 * Math.pow(1.1,spaceCow + 1));
		spaceCowSpaceMetalCost = Math.floor(2400 * Math.pow(1.1,spaceCow + 1));
		document.getElementById("spaceCow").innerHTML = spaceCow;
		document.getElementById("spaceCowSpaceMetalCost").innerHTML = commafy(spaceCowSpaceMetalCost);
		document.getElementById("spaceCowTitaniumCost").innerHTML = commafy(spaceCowTitaniumCost);
		document.getElementById("spaceCowSiliconCost").innerHTML = commafy(spaceCowSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getExplorer(){
	if(gem >= explorerGemCost){
		gem -= explorerGemCost;
		explorer += 1;
		explorerGemCost = Math.floor(1000 * Math.pow(1.1,explorer + 1));
		document.getElementById("explorer").innerHTML = explorer;
		document.getElementById("explorerGemCost").innerHTML = commafy(explorerGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSpaceMetalDrill(){
	if(spaceMetal >= spaceMetalDrillSpaceMetalCost && gem >= spaceMetalDrillGemCost && oil >= spaceMetalDrillOilCost){
		spaceMetal -= spaceMetalDrillSpaceMetalCost;
		gem -= spaceMetalDrillGemCost;
		oil -= spaceMetalDrillOilCost;
		spaceMetalDrill += 1;
		spaceMetalDrillOilCost = Math.floor(1000 * Math.pow(1.1,spaceMetalDrill + 1));
		spaceMetalDrillGemCost = Math.floor(800 * Math.pow(1.1,spaceMetalDrill + 1));
		spaceMetalDrillSpaceMetalCost = Math.floor(200 * Math.pow(1.1,spaceMetalDrill + 1));
		document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
		document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = commafy(spaceMetalDrillSpaceMetalCost);
		document.getElementById("spaceMetalDrillGemCost").innerHTML = commafy(spaceMetalDrillGemCost);
		document.getElementById("spaceMetalDrillOilCost").innerHTML = commafy(spaceMetalDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getPentaDrill(){
	if(spaceMetal >= pentaDrillSpaceMetalCost && gem >= pentaDrillGemCost && silicon >= pentaDrillSiliconCost){
		spaceMetal -= pentaDrillSpaceMetalCost;
		gem -= pentaDrillGemCost;
		silicon -= pentaDrillSiliconCost;
		pentaDrill += 1;
		pentaDrillSiliconCost = Math.floor(5600 * Math.pow(1.1,pentaDrill + 1));
		pentaDrillGemCost = Math.floor(11000 * Math.pow(1.1,pentaDrill + 1));
		pentaDrillSpaceMetalCost = Math.floor(14000 * Math.pow(1.1,pentaDrill + 1));
		document.getElementById("pentaDrill").innerHTML = pentaDrill;
		document.getElementById("pentaDrillSpaceMetalCost").innerHTML = commafy(pentaDrillSpaceMetalCost);
		document.getElementById("pentaDrillGemCost").innerHTML = commafy(pentaDrillGemCost);
		document.getElementById("pentaDrillSiliconCost").innerHTML = commafy(pentaDrillSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getDroid(){
	if(spaceMetal >= droidSpaceMetalCost && methane >= droidMethaneCost){
		spaceMetal -= droidSpaceMetalCost;
		methane -= droidMethaneCost;
		droid += 1;
		droidMethaneCost = Math.floor(50 * Math.pow(1.1,droid + 1));
		droidSpaceMetalCost = Math.floor(200 * Math.pow(1.1,droid + 1));
		document.getElementById("droid").innerHTML = droid;
		document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
		document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getDestroyer(){
	if(spaceMetal >= destroyerSpaceMetalCost && gem >= destroyerGemCost && oil >= destroyerOilCost){
		spaceMetal -= destroyerSpaceMetalCost;
		gem -= destroyerGemCost;
		oil -= destroyerOilCost;
		destroyer += 1;
		destroyerOilCost = Math.floor(1000 * Math.pow(1.1,destroyer + 1));
		destroyerGemCost = Math.floor(1500 * Math.pow(1.1,destroyer + 1));
		destroyerSpaceMetalCost = Math.floor(500 * Math.pow(1.1,destroyer + 1));
		document.getElementById("destroyer").innerHTML = destroyer;
		document.getElementById("destroyerSpaceMetalCost").innerHTML = commafy(destroyerSpaceMetalCost);
		document.getElementById("destroyerGemCost").innerHTML = commafy(destroyerGemCost);
		document.getElementById("destroyerOilCost").innerHTML = commafy(destroyerOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getDeathStar(){
	if(spaceMetal >= deathStarSpaceMetalCost && silver >= deathStarSilverCost && silicon >= deathStarSiliconCost){
		spaceMetal -= deathStarSpaceMetalCost;
		silver -= deathStarSilverCost;
		silicon -= deathStarSiliconCost;
		deathStar += 1;
		deathStarSiliconCost = Math.floor(1000 * Math.pow(1.1,deathStar + 1));
		deathStarSilverCost = Math.floor(1500 * Math.pow(1.1,deathStar + 1));
		deathStarSpaceMetalCost = Math.floor(500 * Math.pow(1.1,deathStar + 1));
		document.getElementById("deathStar").innerHTML = deathStar;
		document.getElementById("deathStarSpaceMetalCost").innerHTML = commafy(deathStarSpaceMetalCost);
		document.getElementById("deathStarSilverCost").innerHTML = commafy(deathStarSilverCost);
		document.getElementById("deathStarSiliconCost").innerHTML = commafy(deathStarSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getScout(){
	if(spaceMetal >= scoutSpaceMetalCost && titanium >= scoutTitaniumCost){
		spaceMetal -= scoutSpaceMetalCost;
		titanium -= scoutTitaniumCost;
		scout += 1;
		scoutTitaniumCost = Math.floor(20 * Math.pow(1.1,scout + 1));
		scoutSpaceMetalCost = Math.floor(100 * Math.pow(1.1,scout + 1));
		document.getElementById("scout").innerHTML = scout;
		document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
		document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSpaceLaser(){
	if(spaceMetal >= spaceLaserSpaceMetalCost && gem >= spaceLaserGemCost && oil >= spaceLaserOilCost){
		spaceMetal -= spaceLaserSpaceMetalCost;
		gem -= spaceLaserGemCost;
		oil -= spaceLaserOilCost;
		spaceLaser += 1;
		spaceLaserOilCost = Math.floor(1200 * Math.pow(1.1,spaceLaser + 1));
		spaceLaserGemCost = Math.floor(900 * Math.pow(1.1,spaceLaser + 1));
		spaceLaserSpaceMetalCost = Math.floor(350 * Math.pow(1.1,spaceLaser + 1));
		document.getElementById("spaceLaser").innerHTML = spaceLaser;
		document.getElementById("spaceLaserSpaceMetalCost").innerHTML = commafy(spaceLaserSpaceMetalCost);
		document.getElementById("spaceLaserGemCost").innerHTML = commafy(spaceLaserGemCost);
		document.getElementById("spaceLaserOilCost").innerHTML = commafy(spaceLaserOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getBertha(){
	if(spaceMetal >= berthaSpaceMetalCost && titanium >= berthaTitaniumCost && silicon >= berthaSiliconCost){
		spaceMetal -= berthaSpaceMetalCost;
		titanium -= berthaTitaniumCost;
		silicon -= berthaSiliconCost;
		bertha += 1;
		berthaSiliconCost = Math.floor(11000 * Math.pow(1.1,bertha + 1));
		berthaTitaniumCost = Math.floor(18200 * Math.pow(1.1,bertha + 1));
		berthaSpaceMetalCost = Math.floor(19500 * Math.pow(1.1,bertha + 1));
		document.getElementById("bertha").innerHTML = bertha;
		document.getElementById("berthaSpaceMetalCost").innerHTML = commafy(berthaSpaceMetalCost);
		document.getElementById("berthaTitaniumCost").innerHTML = commafy(berthaTitaniumCost);
		document.getElementById("berthaSiliconCost").innerHTML = commafy(berthaSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getBlowtorch(){
	if(spaceMetal >= blowtorchSpaceMetalCost && titanium >= blowtorchTitaniumCost){
		spaceMetal -= blowtorchSpaceMetalCost;
		titanium -= blowtorchTitaniumCost;
		blowtorch += 1;
		blowtorchTitaniumCost = Math.floor(30 * Math.pow(1.1,blowtorch + 1));
		blowtorchSpaceMetalCost = Math.floor(150 * Math.pow(1.1,blowtorch + 1));
		document.getElementById("blowtorch").innerHTML = blowtorch;
		document.getElementById("blowtorchSpaceMetalCost").innerHTML = commafy(blowtorchSpaceMetalCost);
		document.getElementById("blowtorchTitaniumCost").innerHTML = commafy(blowtorchTitaniumCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getScorcher(){
	if(spaceMetal >= scorcherSpaceMetalCost && gem >= scorcherGemCost && oil >= scorcherOilCost){
		spaceMetal -= scorcherSpaceMetalCost;
		gem -= scorcherGemCost;
		oil -= scorcherOilCost;
		scorcher += 1;
		scorcherOilCost = Math.floor(1600 * Math.pow(1.1,scorcher + 1));
		scorcherGemCost = Math.floor(1200 * Math.pow(1.1,scorcher + 1));
		scorcherSpaceMetalCost = Math.floor(500 * Math.pow(1.1,scorcher + 1));
		document.getElementById("scorcher").innerHTML = scorcher;
		document.getElementById("scorcherSpaceMetalCost").innerHTML = commafy(scorcherSpaceMetalCost);
		document.getElementById("scorcherGemCost").innerHTML = commafy(scorcherGemCost);
		document.getElementById("scorcherOilCost").innerHTML = commafy(scorcherOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getAnnihilator(){
	if(spaceMetal >= annihilatorSpaceMetalCost && gem >= annihilatorGemCost && silver >= annihilatorSilverCost){
		spaceMetal -= annihilatorSpaceMetalCost;
		gem -= annihilatorGemCost;
		silver -= annihilatorSilverCost;
		annihilator += 1;
		annihilatorSpaceMetalCost = Math.floor(3000 * Math.pow(1.1,annihilator + 1));
		annihilatorGemCost = Math.floor(8300 * Math.pow(1.1,annihilator + 1));
		annihilatorSilverCost = Math.floor(2400 * Math.pow(1.1,annihilator + 1));
		document.getElementById("annihilator").innerHTML = annihilator;
		document.getElementById("scorcherSpaceMetalCost").innerHTML = commafy(annihilatorSpaceMetalCost);
		document.getElementById("scorcherGemCost").innerHTML = commafy(annihilatorGemCost);
		document.getElementById("scorcherOilCost").innerHTML = commafy(annihilatorSilverCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getCrucible(){
	if(spaceMetal >= crucibleSpaceMetalCost && gem >= crucibleGemCost){
		spaceMetal -= crucibleSpaceMetalCost;
		gem -= crucibleGemCost;
		crucible += 1;
		crucibleGemCost = Math.floor(7000 * Math.pow(1.1,crucible + 1));
		crucibleSpaceMetalCost = Math.floor(4000 * Math.pow(1.1,crucible + 1));
		document.getElementById("crucible").innerHTML = crucible;
		document.getElementById("crucibleSpaceMetalCost").innerHTML = commafy(crucibleSpaceMetalCost);
		document.getElementById("crucibleGemCost").innerHTML = commafy(crucibleGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getExtractor(){
	if(spaceMetal >= extractorSpaceMetalCost && titanium >= extractorTitaniumCost && silicon >= extractorSiliconCost){
		spaceMetal -= extractorSpaceMetalCost;
		titanium -= extractorTitaniumCost;
		silicon -= extractorSiliconCost;
		extractor += 1;
		extractorSiliconCost = Math.floor(6000 * Math.pow(1.1,extractor + 1));
		extractorTitaniumCost = Math.floor(12000 * Math.pow(1.1,extractor + 1));
		extractorSpaceMetalCost = Math.floor(14000 * Math.pow(1.1,extractor + 1));
		document.getElementById("extractor").innerHTML = extractor;
		document.getElementById("extractorSpaceMetalCost").innerHTML = commafy(extractorSpaceMetalCost);
		document.getElementById("extractorTitaniumCost").innerHTML = commafy(extractorTitaniumCost);
		document.getElementById("extractorSiliconCost").innerHTML = commafy(extractorSiliconCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getExtruder(){
	if(spaceMetal >= extruderSpaceMetalCost && titanium >= extruderTitaniumCost && silicon >= extruderSiliconCost){
		spaceMetal -= extruderSpaceMetalCost;
		titanium -= extruderTitaniumCost;
		silicon -= extruderSiliconCost;
		extruder += 1;
		extruderSiliconCost = Math.floor(39000 * Math.pow(1.1,extruder + 1));
		extruderTitaniumCost = Math.floor(57000 * Math.pow(1.1,extruder + 1));
		extruderSpaceMetalCost = Math.floor(69000 * Math.pow(1.1,extruder + 1));
		document.getElementById("extruder").innerHTML = extruder;
		document.getElementById("extruderSpaceMetalCost").innerHTML = commafy(extruderSpaceMetalCost);
		document.getElementById("extruderTitaniumCost").innerHTML = commafy(extruderTitaniumCost);
		document.getElementById("extruderSiliconCost").innerHTML = commafy(extruderSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getCollector(){
	if(spaceMetal >= collectorSpaceMetalCost && titanium >= collectorTitaniumCost){
		spaceMetal -= collectorSpaceMetalCost;
		titanium -= collectorTitaniumCost;
		collector += 1;
		collectorTitaniumCost = Math.floor(8000 * Math.pow(1.1,collector + 1));
		collectorSpaceMetalCost = Math.floor(10000 * Math.pow(1.1,collector + 1));
		document.getElementById("collector").innerHTML = collector;
		document.getElementById("collectorSpaceMetalCost").innerHTML = commafy(collectorSpaceMetalCost);
		document.getElementById("collectorTitaniumCost").innerHTML = commafy(collectorTitaniumCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getMagnet(){
	if(spaceMetal >= magnetSpaceMetalCost && titanium >= magnetTitaniumCost && gold >= magnetGoldCost){
		spaceMetal -= magnetSpaceMetalCost;
		titanium -= magnetTitaniumCost;
		gold -= magnetGoldCost;
		magnet += 1;
		magnetGoldCost = Math.floor(11000 * Math.pow(1.1,magnet + 1));
		magnetTitaniumCost = Math.floor(16000 * Math.pow(1.1,magnet + 1));
		magnetSpaceMetalCost = Math.floor(18000 * Math.pow(1.1,magnet + 1));
		document.getElementById("magnet").innerHTML = magnet;
		document.getElementById("magnetSpaceMetalCost").innerHTML = commafy(magnetSpaceMetalCost);
		document.getElementById("magnetTitaniumCost").innerHTML = commafy(magnetTitaniumCost);
		document.getElementById("magnetGoldCost").innerHTML = commafy(magnetGoldCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getECell(){
	if(silver >= eCellSilverCost && titanium >= eCellSiliconCost && gold >= eCellGoldCost){
		silver -= eCellSilverCost;
		silicon -= eCellSiliconCost;
		gold -= eCellGoldCost;
		eCell += 1;
		eCellGoldCost = Math.floor(57000 * Math.pow(1.1,eCell + 1));
		eCellSiliconCost = Math.floor(43000 * Math.pow(1.1,eCell + 1));
		eCellSilverCost = Math.floor(62000 * Math.pow(1.1,eCell + 1));
		document.getElementById("eCell").innerHTML = eCell;
		document.getElementById("eCellSilverCost").innerHTML = commafy(eCellSilverCost);
		document.getElementById("eCellSiliconCost").innerHTML = commafy(eCellSiliconCost);
		document.getElementById("eCellGoldCost").innerHTML = commafy(eCellGoldCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getDrone(){
	if(spaceMetal >= droneSpaceMetalCost && silicon >= droneSiliconCost){
		spaceMetal -= droneSpaceMetalCost;
		silicon -= droneSiliconCost;
		drone += 1;
		droneSiliconCost = Math.floor(10000 * Math.pow(1.1,drone + 1));
		droneSpaceMetalCost = Math.floor(14000 * Math.pow(1.1,drone + 1));
		document.getElementById("drone").innerHTML = drone;
		document.getElementById("droneSpaceMetalCost").innerHTML = commafy(droneSpaceMetalCost);
		document.getElementById("droneSiliconCost").innerHTML = commafy(droneSiliconCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getTanker(){
	if(spaceMetal >= tankerSpaceMetalCost && titanium >= tankerTitaniumCost && silicon >= tankerSiliconCost){
		spaceMetal -= tankerSpaceMetalCost;
		titanium -= tankerTitaniumCost;
		silicon -= tankerSiliconCost;
		tanker += 1;
		tankerSiliconCost = Math.floor(14000 * Math.pow(1.1,tanker + 1));
		tankerTitaniumCost = Math.floor(17000 * Math.pow(1.1,tanker + 1));
		tankerSpaceMetalCost = Math.floor(21000 * Math.pow(1.1,tanker + 1));
		document.getElementById("tanker").innerHTML = tanker;
		document.getElementById("tankerSpaceMetalCost").innerHTML = commafy(tankerSpaceMetalCost);
		document.getElementById("tankerTitaniumCost").innerHTML = commafy(tankerTitaniumCost);
		document.getElementById("tankerSiliconCost").innerHTML = commafy(tankerSiliconCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getCompressor(){
	if(spaceMetal >= compressorSpaceMetalCost && titanium >= compressorTitaniumCost && silicon >= compressorSiliconCost){
		spaceMetal -= compressorSpaceMetalCost;
		titanium -= compressorTitaniumCost;
		silicon -= compressorSiliconCost;
		compressor += 1;
		compressorSiliconCost = Math.floor(105000 * Math.pow(1.1,compressor + 1));
		compressorTitaniumCost = Math.floor(73000 * Math.pow(1.1,compressor + 1));
		compressorSpaceMetalCost = Math.floor(59000 * Math.pow(1.1,compressor + 1));
		document.getElementById("compressor").innerHTML = compressor;
		document.getElementById("compressorSpaceMetalCost").innerHTML = commafy(compressorSpaceMetalCost);
		document.getElementById("compressorTitaniumCost").innerHTML = commafy(compressorTitaniumCost);
		document.getElementById("compressorSiliconCost").innerHTML = commafy(compressorSiliconCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}