function commafy(input){
	if(input <= 100000){
		var output = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		if(output.indexOf(".") != -1){
			output = output.slice(0,(output.indexOf("."))-output.length);
		}
	}
	if(input >= 100000 && input < 1000000){
		var output = Math.floor(input/100)/10 + "k";
	}
	if(input >= 1000000 && input < 10000000){
		var output = Math.floor(input/1000)/1000 + "M";
	}
	if(input >= 10000000 && input < 100000000){
		var output = Math.floor(input/10000)/100 + "M";
	}
	if(input >= 100000000 && input < 1000000000){
		var output = Math.floor(input/100000)/10 + "M";
	}
	if(input >= 1000000000 && input < 10000000000){
		var output = Math.floor(input/1000000)/1000 + "B";
	}
	if(input >= 10000000000 && input < 100000000000){
		var output = Math.floor(input/10000000)/100 + "B";
	}
	if(input >= 100000000000 && input < 1000000000000){
		var output = Math.floor(input/100000000)/10 + "B";
	}
	if(input >= 1000000000000 && input < 10000000000000){
		var output = Math.floor(input/1000000000)/1000 + "T";
	}
	if(input >= 10000000000000 && input < 100000000000000){
		var output = Math.floor(input/10000000000)/100 + "T";
	}
	if(input >= 100000000000000 && input < 1000000000000000){
		var output = Math.floor(input/100000000000)/10 + "T";
	}
	if(input >= 1000000000000000){
		var output = Math.floor(input/1000000000000) + "T";
	}
	return output;
}

function refresh(){
	document.getElementById("plasma").innerHTML = commafy(plasma);
	document.getElementById("energy").innerHTML = commafy(energy);
	document.getElementById("oil").innerHTML = commafy(oil);
	document.getElementById("metal").innerHTML = commafy(metal);
	document.getElementById("gem").innerHTML = commafy(gem);
	document.getElementById("charcoal").innerHTML = commafy(charcoal);
	document.getElementById("wood").innerHTML = commafy(wood);
	document.getElementById("science").innerHTML = commafy(science);
	document.getElementById("rocketFuel").innerHTML = commafy(rocketFuel);
	document.getElementById("spaceMetal").innerHTML = commafy(spaceMetal);
	document.getElementById("methane").innerHTML = commafy(methane);
	document.getElementById("titanium").innerHTML = commafy(titanium);
	document.getElementById("gold").innerHTML = commafy(gold);
	document.getElementById("silver").innerHTML = commafy(silver);
	document.getElementById("silicon").innerHTML = commafy(silicon);
	document.getElementById("uranium").innerHTML = commafy(uranium);
	document.getElementById("lava").innerHTML = commafy(lava);
	document.getElementById("hydrogen").innerHTML = commafy(hydrogen);
	document.getElementById("helium").innerHTML = commafy(helium);
	document.getElementById("ice").innerHTML = commafy(ice);
}

function refreshPerSec(){
	var energyInput = (charcoalEngine*charcoalEngineOutput)+(solarPanel*solarPanelOutput)+(methaneStation*23)+(nuclearStation*153)+(magmatic*191)+(fusionReactor*273);
	if(charcoal + charcoalps/10 >= charcoalEngine/10){ 
		charcoal -= charcoalEngine/10;
	}
	else{
		energyInput -= charcoalEngine;
	}
	if(methane + methaneps/10 >= methaneStation*6/10){
		methane -= methaneStation*6/10;
	}
	else{
		energyInput -= methaneStation*23;
	}
	if(uranium + uraniumps/10 >= nuclearStation*7/10){
		uranium -= nuclearStation*7/10;
	}
	else{
		energyInput -= nuclearStation*153;
	}
	if(lava + lavaps/10 >= magmatic*11/10){
		lava -= magmatic*11/10;
	}
	else{
		energyInput -= magmatic*191;
	}
	if(hydrogen + hydrogenps/10 >= fusionReactor*10/10 && helium + heliumps >= fusionReactor*10/10){
		hydrogen -= fusionReactor*10/10;
		helium -= fusionReactor*10/10;
	}
	else{
		energyInput -= fusionReactor*273;
	}
	var energyOutput = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(laserCutter*4);
	energyOutput += (moonDrill*20)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	energyOutput += (cubic*40)+(extractor*58)+(magnet*63)+(tanker*72)+(iceDrill*83);
	energyOutput += (oilField*17)+(gigaDrill*13)+(diamondDrill*11)+(deforester*20);
	energyOutput += (moonQuarry*64)+(spaceCow*72)+(pentaDrill*48)+(deathStar*72)+(bertha*69)+(annihilator*62);
	energyOutput += (enricher*236)+(extruder*326)+(eCell*366)+(compressor*297)+(freezer*324);
	if(charcoalToggled === true){
		energyOutput += (furnace*3)+(kiln*23);
	}
	if(energy <= 1){
		energyps = energyInput;
	}
	if(energy >= 1000 && hydrogen >= 10 && heaterToggled === true){
		if(plasma + heater/10 <= 100000){
			energyOutput += (heater*1000);
			plasmaps = heater;
			plasma += plasmaps/10;
			hydrogen -= heater*10/10;
		}
		else{
			plasma = 100000
		}
	}
	else{
		plasmaps = 0;
	}
	if(energy >= 10){
		energyps = energyInput-energyOutput;
		oilps = pump + (pumpjack*pumpjackOutput) + (oilField*23);
		metalps = miner + (heavyDrill*heavyDrillOutput) + (gigaDrill*61);
		gemps = gemMiner + (advancedDrill*advancedDrillOutput) + (diamondDrill*89);
		charcoalps = woodburner + (furnace*furnaceOutput) + (kiln*27);
		woodps = woodcutter + (laserCutter*laserCutterOutput) + (deforester*74);
		spaceMetalps = moonWorker + (moonDrill*10) + (moonQuarry*53);
		methaneps = vacuum + (suctionExcavator*8) + (spaceCow*37);
		titaniumps = explorer + (spaceMetalDrill*6) + (pentaDrill*32);
		goldps = droid + (destroyer*8) + (deathStar*51);
		silverps = scout + (spaceLaser*13) + (bertha*53);
		siliconps = blowtorch + (scorcher*9) + (annihilator*40);
		uraniumps = grinder + (cubic*9) +(enricher*47);
		lavaps = crucible + (extractor*7) + (extruder*43);
		hydrogenps = collector + (magnet*5) + (eCell*28);
		heliumps = drone + (tanker*11) + (compressor*57);
		iceps = icePick + (iceDrill*9) + (freezer*65);
	}
	if(energy <= 10){
		plasmaps = 0;
		uraniumps = grinder;
		oilps = pump;
		metalps = miner;
		gemps = gemMiner;
		charcoalps = woodburner;
		woodps = woodcutter;
		spaceMetalps = moonWorker;
		methaneps = vacuum;
		titaniumps = explorer;
		goldps = droid;
		silverps = scout;
		siliconps = blowtorch;
		lavaps = crucible;
		hydrogenps = collector;
		heliumps = drone;
		iceps = icePick;
	}
	scienceps = (lab*labGain);
	document.getElementById("plasmaps").innerHTML = commafy(plasmaps);
	document.getElementById("plasma").className = "";
	if(plasma <= 0){
		document.getElementById("plasma").className = "red";
	}
	if(energyps >= 0){
		if(energyps > 500){
			document.getElementById("energyps").innerHTML = commafy(energyps);
		}
		else{
			document.getElementById("energyps").innerHTML = commafy(energyps*2)/2;
		}
	}
	else{
		document.getElementById("energyps").innerHTML = Math.round(energyps);
	}
	document.getElementById("uraniumps").innerHTML = commafy(uraniumps - nuclearStation*7);
	document.getElementById("uranium").className = "";
	if(uranium === 0){
		document.getElementById("uranium").className = "red";
	}
	if(chemicalPlantToggled === true){
		document.getElementById("oilps").innerHTML = commafy(oilps - chemicalPlant*20);
	}
	else{
		document.getElementById("oilps").innerHTML = commafy(oilps);
	}
	document.getElementById("oil").className = "";
	if(oil >= oilStorage){
		document.getElementById("oil").className = "green";
	}
	if(oil === 0){
		document.getElementById("oil").className = "red";
	}
	document.getElementById("metalps").innerHTML = commafy(metalps);
	document.getElementById("metal").className = "";
	if(metal >= metalStorage){
		document.getElementById("metal").className = "green";
	}
	if(metal === 0){
		document.getElementById("metal").className = "red";
	}
	document.getElementById("gemps").innerHTML = commafy(gemps);
	document.getElementById("gem").className = "";
	if(gem >= gemStorage){
		document.getElementById("gem").className = "green";
	}
	if(gem === 0){
		document.getElementById("gem").className = "red";
	}
	document.getElementById("charcoal").className = "";
	if(charcoal === 0){
		document.getElementById("charcoal").className = "red";
	}
	document.getElementById("wood").className = "";
	if(wood >= woodStorage){
		document.getElementById("wood").className = "green";
	}
	if(wood === 0){
		document.getElementById("wood").className = "red";
	}
	document.getElementById("spaceMetalps").innerHTML = commafy(spaceMetalps);
	document.getElementById("spaceMetal").className = "";
	if(spaceMetal >= spaceMetalStorage){
		document.getElementById("spaceMetal").className = "green";
	}
	if(spaceMetal === 0){
		document.getElementById("spaceMetal").className = "red";
	}
	document.getElementById("methaneps").innerHTML = commafy(methaneps - methaneStation*6);
	document.getElementById("methane").className = "";
	if(methane === 0){
		document.getElementById("methane").className = "red";
	}
	document.getElementById("titaniumps").innerHTML = commafy(titaniumps);
	document.getElementById("titanium").className = "";
	if(titanium >= titaniumStorage){
		document.getElementById("titanium").className = "green";
	}
	if(titanium === 0){
		document.getElementById("titanium").className = "red";
	}
	document.getElementById("goldps").innerHTML = commafy(goldps);
	document.getElementById("gold").className = "";
	if(gold >= goldStorage){
		document.getElementById("gold").className = "green";
	}
	if(gold === 0){
		document.getElementById("gold").className = "red";
	}
	document.getElementById("silverps").innerHTML = commafy(silverps);
	document.getElementById("silver").className = "";
	if(silver >= silverStorage){
		document.getElementById("silver").className = "green";
	}
	if(silver === 0){
		document.getElementById("silver").className = "red";
	}
	document.getElementById("siliconps").innerHTML = commafy(siliconps);
	document.getElementById("silicon").className = "";
	if(silicon >= siliconStorage){
		document.getElementById("silicon").className = "green";
	}
	if(silicon === 0){
		document.getElementById("silicon").className = "red";
	}
	document.getElementById("lavaps").innerHTML = commafy(lavaps - magmatic*11);
	document.getElementById("lava").className = "";
	if(lava === 0){
		document.getElementById("lava").className = "red";
	}
	if(heaterToggled === true){
		document.getElementById("hydrogenps").innerHTML = commafy(hydrogenps - fusionReactor*10 - heater*10);
	}
	else{
		document.getElementById("hydrogenps").innerHTML = commafy(hydrogenps - fusionReactor*10);
	}
	document.getElementById("hydrogen").className = "";
	if(hydrogen >= hydrogenStorage){
		document.getElementById("hydrogen").className = "green";
	}
	if(hydrogen === 0){
		document.getElementById("hydrogen").className = "red";
	}
	document.getElementById("heliumps").innerHTML = commafy(heliumps - fusionReactor*10);
	document.getElementById("helium").className = "";
	if(helium >= heliumStorage){
		document.getElementById("helium").className = "green";
	}
	if(helium === 0){
		document.getElementById("helium").className = "red";
	}
	document.getElementById("iceps").innerHTML = commafy(iceps);
	document.getElementById("ice").className = "";
	if(ice >= iceStorage){
		document.getElementById("ice").className = "green";
	}
	if(ice === 0){
		document.getElementById("ice").className = "red";
	}
}

function refreshStats(){
	document.getElementById("handMined").innerHTML = commafy(handMined);
	document.getElementById("tier1").innerHTML = commafy(tier1);
	document.getElementById("tier2").innerHTML = commafy(tier2);
	document.getElementById("tier3").innerHTML = commafy(tier3);
	document.getElementById("tier4").innerHTML = commafy(tier4);
	document.getElementById("tier5").innerHTML = commafy(tier5);
	document.getElementById("tier6").innerHTML = commafy(tier6);
	document.getElementById("tabsUnlockedNum").innerHTML = commafy(tabsUnlockedNum);
	document.getElementById("resourcesUnlockedNum").innerHTML = commafy(resourcesUnlockedNum);
	document.getElementById("techsResearchedNum").innerHTML = commafy(techsResearchedNum);
	document.getElementById("placesExploredNum").innerHTML = commafy(placesExploredNum);
	document.getElementById("wondersBuiltNum").innerHTML = commafy(wondersBuiltNum);
	document.getElementById("wondersActivatedNum").innerHTML = commafy(wondersActivatedNum);
}

function refreshUI(){
	if(heaterToggled === true){
		document.getElementById("heaterToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("heaterToggled").innerHTML = "On";
	}
	if(charcoalToggled === true){
		document.getElementById("charcoalToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("charcoalToggled").innerHTML = "On";
	}
	if(chemicalPlantToggled === true){
		document.getElementById("chemicalPlantToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("chemicalPlantToggled").innerHTML = "On";
	}

	document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
	document.getElementById("uraniumStorage").innerHTML = commafy(uraniumStorage);
	document.getElementById("uraniumNextStorage").innerHTML = commafy(uraniumNextStorage);
	document.getElementById("uraniumStorageCost").innerHTML = commafy(uraniumStorage);
	document.getElementById("uraniumStorageSpaceMetalCost").innerHTML = commafy(uraniumNextStorage/2.5);	
	document.getElementById("oilStorage").innerHTML = commafy(oilStorage);
	document.getElementById("oilNextStorage").innerHTML = commafy(oilNextStorage);
	document.getElementById("oilStorageCost").innerHTML = commafy(oilStorage);
	document.getElementById("oilStorageMetalCost").innerHTML = commafy(oilStorage/2.5);
	document.getElementById("metalStorage").innerHTML = commafy(metalStorage);
	document.getElementById("metalNextStorage").innerHTML = commafy(metalNextStorage);
	document.getElementById("metalStorageCost").innerHTML = commafy(metalStorage);
	document.getElementById("gemStorage").innerHTML = commafy(gemStorage);
	document.getElementById("gemNextStorage").innerHTML = commafy(gemNextStorage);
	document.getElementById("gemStorageCost").innerHTML = commafy(gemStorage);
	document.getElementById("gemStorageMetalCost").innerHTML = commafy(gemStorage/2.5);
	document.getElementById("charcoalStorage").innerHTML = commafy(charcoalStorage);
	document.getElementById("charcoalNextStorage").innerHTML = commafy(charcoalNextStorage);
	document.getElementById("charcoalStorageCost").innerHTML = commafy(charcoalStorage);
	document.getElementById("charcoalStorageMetalCost").innerHTML = commafy(charcoalStorage/2.5);
	document.getElementById("woodStorage").innerHTML = commafy(woodStorage);
	document.getElementById("woodNextStorage").innerHTML = commafy(woodNextStorage);
	document.getElementById("woodStorageCost").innerHTML = commafy(woodStorage);
	document.getElementById("woodStorageMetalCost").innerHTML = commafy(woodStorage/2.5);
	document.getElementById("spaceMetalStorage").innerHTML = commafy(spaceMetalStorage);
	document.getElementById("spaceMetalNextStorage").innerHTML = commafy(spaceMetalNextStorage);
	document.getElementById("spaceMetalStorageCost").innerHTML = commafy(spaceMetalStorage);
	document.getElementById("spaceMetalStorageMetalCost").innerHTML = commafy(spaceMetalStorage*4);
	document.getElementById("methaneStorage").innerHTML = commafy(methaneStorage);
	document.getElementById("methaneNextStorage").innerHTML = commafy(methaneNextStorage);
	document.getElementById("methaneStorageCost").innerHTML = commafy(methaneStorage);
	document.getElementById("methaneStorageSpaceMetalCost").innerHTML = commafy(methaneStorage/2.5);
	document.getElementById("titaniumStorage").innerHTML = commafy(titaniumStorage);
	document.getElementById("titaniumNextStorage").innerHTML = commafy(titaniumNextStorage);
	document.getElementById("titaniumStorageCost").innerHTML = commafy(titaniumStorage);
	document.getElementById("titaniumStorageSpaceMetalCost").innerHTML = commafy(titaniumStorage/2.5);
	document.getElementById("goldStorage").innerHTML = commafy(goldStorage);
	document.getElementById("goldNextStorage").innerHTML = commafy(goldNextStorage);
	document.getElementById("goldStorageCost").innerHTML = commafy(goldStorage);
	document.getElementById("goldStorageSpaceMetalCost").innerHTML = commafy(goldStorage/2.5);
	document.getElementById("silverStorage").innerHTML = commafy(silverStorage);
	document.getElementById("silverNextStorage").innerHTML = commafy(silverNextStorage);
	document.getElementById("silverStorageCost").innerHTML = commafy(silverStorage);
	document.getElementById("silverStorageSpaceMetalCost").innerHTML = commafy(silverStorage/2.5);
	document.getElementById("siliconStorage").innerHTML = commafy(siliconStorage);
	document.getElementById("siliconNextStorage").innerHTML = commafy(siliconNextStorage);
	document.getElementById("siliconStorageCost").innerHTML = commafy(siliconStorage);
	document.getElementById("siliconStorageSpaceMetalCost").innerHTML = commafy(siliconStorage/2.5);
	document.getElementById("lavaStorage").innerHTML = commafy(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = commafy(lavaNextStorage);
	document.getElementById("lavaStorageCost").innerHTML = commafy(lavaStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = commafy(lavaStorage/2.5);
	document.getElementById("hydrogenStorage").innerHTML = commafy(hydrogenStorage);
	document.getElementById("hydrogenNextStorage").innerHTML = commafy(hydrogenNextStorage);
	document.getElementById("hydrogenStorageCost").innerHTML = commafy(hydrogenStorage);
	document.getElementById("hydrogenStorageSpaceMetalCost").innerHTML = commafy(hydrogenStorage/2.5);
	document.getElementById("heliumStorage").innerHTML = commafy(heliumStorage);
	document.getElementById("heliumNextStorage").innerHTML = commafy(heliumNextStorage);
	document.getElementById("heliumStorageCost").innerHTML = commafy(heliumStorage);
	document.getElementById("heliumStorageSpaceMetalCost").innerHTML = commafy(heliumStorage/2.5);
	document.getElementById("iceStorage").innerHTML = commafy(iceStorage);
	document.getElementById("iceNextStorage").innerHTML = commafy(iceNextStorage);
	document.getElementById("iceStorageCost").innerHTML = commafy(iceStorage);
	document.getElementById("iceStorageSpaceMetalCost").innerHTML = commafy(iceStorage/2.5);
	document.getElementById("lava").innerHTML = commafy(lava);
	document.getElementById("lavaStorage").innerHTML = commafy(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = commafy(lavaNextStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = commafy(lavaNextStorage/2.5);
	document.getElementById("heater").innerHTML = heater;
	document.getElementById("heaterSpaceMetalCost").innerHTML = commafy(heaterSpaceMetalCost);
	document.getElementById("heaterGemCost").innerHTML = commafy(heaterGemCost);
	document.getElementById("heaterSiliconCost").innerHTML = heaterSiliconCost;
	document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
	document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
	document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
	document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
	document.getElementById("solarPanel").innerHTML = solarPanel;
	document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
	document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
	document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
	document.getElementById("methaneStation").innerHTML = methaneStation;
	document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
	document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
	document.getElementById("nuclearStation").innerHTML = nuclearStation;
	document.getElementById("nuclearStationSpaceMetalCost").innerHTML = nuclearStationSpaceMetalCost;
	document.getElementById("nuclearStationTitaniumCost").innerHTML = nuclearStationTitaniumCost;
	document.getElementById("magmatic").innerHTML = magmatic;
	document.getElementById("magmaticSpaceMetalCost").innerHTML = commafy(magmaticSpaceMetalCost);
	document.getElementById("magmaticGemCost").innerHTML = commafy(magmaticGemCost);
	document.getElementById("magmaticSilverCost").innerHTML = commafy(magmaticSilverCost);
	document.getElementById("fusionReactor").innerHTML = fusionReactor;
	document.getElementById("fusionReactorSpaceMetalCost").innerHTML = fusionReactorSpaceMetalCost;
	document.getElementById("fusionReactorTitaniumCost").innerHTML = fusionReactorTitaniumCost;
	document.getElementById("fusionReactorSiliconCost").innerHTML = commafy(fusionReactorSiliconCost);
	document.getElementById("pump").innerHTML = pump;
	document.getElementById("pumpMetalCost").innerHTML = commafy(pumpMetalCost);
	document.getElementById("pumpGemCost").innerHTML = commafy(pumpGemCost);
	document.getElementById("pumpjack").innerHTML = pumpjack;
	document.getElementById("pumpjackOilCost").innerHTML = commafy(pumpjackOilCost);
	document.getElementById("pumpjackGemCost").innerHTML = commafy(pumpjackGemCost);
	document.getElementById("pumpjackMetalCost").innerHTML = commafy(pumpjackMetalCost);
	document.getElementById("pumpjackOutput").innerHTML = commafy(pumpjackOutput);
	document.getElementById("oilField").innerHTML = oilField;
	document.getElementById("oilFieldTitaniumCost").innerHTML = commafy(oilFieldTitaniumCost);
	document.getElementById("oilFieldSpaceMetalCost").innerHTML = commafy(oilFieldSpaceMetalCost);
	document.getElementById("oilFieldSiliconCost").innerHTML = commafy(oilFieldSiliconCost);
	document.getElementById("miner").innerHTML = miner;
	document.getElementById("minerMetalCost").innerHTML = commafy(minerMetalCost);
	document.getElementById("minerWoodCost").innerHTML = commafy(minerWoodCost);
	document.getElementById("heavyDrill").innerHTML = heavyDrill;
	document.getElementById("heavyDrillMetalCost").innerHTML = commafy(heavyDrillMetalCost);
	document.getElementById("heavyDrillGemCost").innerHTML = commafy(heavyDrillGemCost);
	document.getElementById("heavyDrillOilCost").innerHTML = commafy(heavyDrillOilCost);
	document.getElementById("heavyDrillOutput").innerHTML = commafy(heavyDrillOutput);
	document.getElementById("gigaDrill").innerHTML = gigaDrill;
	document.getElementById("gigaDrillSpaceMetalCost").innerHTML = commafy(gigaDrillSpaceMetalCost);
	document.getElementById("gigaDrillGemCost").innerHTML = commafy(gigaDrillGemCost);
	document.getElementById("gigaDrillSiliconCost").innerHTML = commafy(gigaDrillSiliconCost);
	document.getElementById("gemMiner").innerHTML = gemMiner;
	document.getElementById("gemMinerMetalCost").innerHTML = commafy(gemMinerMetalCost);
	document.getElementById("gemMinerGemCost").innerHTML = commafy(gemMinerGemCost);
	document.getElementById("advancedDrill").innerHTML = advancedDrill;
	document.getElementById("advancedDrillMetalCost").innerHTML = commafy(advancedDrillMetalCost);
	document.getElementById("advancedDrillGemCost").innerHTML = commafy(advancedDrillGemCost);
	document.getElementById("advancedDrillOilCost").innerHTML = commafy(advancedDrillOilCost);
	document.getElementById("advancedDrillOutput").innerHTML = commafy(advancedDrillOutput);
	document.getElementById("diamondDrill").innerHTML = diamondDrill;
	document.getElementById("diamondDrillSpaceMetalCost").innerHTML = commafy(diamondDrillSpaceMetalCost);
	document.getElementById("diamondDrillGemCost").innerHTML = commafy(diamondDrillGemCost);
	document.getElementById("diamondDrillSiliconCost").innerHTML = commafy(diamondDrillSiliconCost);
	document.getElementById("woodburner").innerHTML = woodburner;
	document.getElementById("woodburnerMetalCost").innerHTML = commafy(woodburnerMetalCost);
	document.getElementById("woodburnerWoodCost").innerHTML = commafy(woodburnerWoodCost);
	document.getElementById("furnace").innerHTML = furnace;
	document.getElementById("furnaceMetalCost").innerHTML = commafy(furnaceMetalCost);
	document.getElementById("furnaceWoodCost").innerHTML = commafy(furnaceWoodCost);
	document.getElementById("furnaceOilCost").innerHTML = commafy(furnaceOilCost);
	document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
	document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
	document.getElementById("kiln").innerHTML = commafy(kiln);
	document.getElementById("kilnSpaceMetalCost").innerHTML = commafy(kilnSpaceMetalCost);
	document.getElementById("kilnGemCost").innerHTML = kilnGemCost;
	document.getElementById("kilnSiliconCost").innerHTML = kilnSiliconCost;
	document.getElementById("woodcutter").innerHTML = woodcutter;
	document.getElementById("woodcutterMetalCost").innerHTML = commafy(woodcutterMetalCost);
	document.getElementById("woodcutterWoodCost").innerHTML = commafy(woodcutterWoodCost);
	document.getElementById("laserCutter").innerHTML = laserCutter;
	document.getElementById("laserCutterMetalCost").innerHTML = commafy(laserCutterMetalCost);
	document.getElementById("laserCutterGemCost").innerHTML = commafy(laserCutterGemCost);
	document.getElementById("laserCutterOilCost").innerHTML = commafy(laserCutterOilCost);
	document.getElementById("laserCutterOutput").innerHTML = commafy(laserCutterOutput);
	document.getElementById("deforester").innerHTML = deforester;
	document.getElementById("deforesterSpaceMetalCost").innerHTML = commafy(deforesterSpaceMetalCost);
	document.getElementById("deforesterTitaniumCost").innerHTML = commafy(deforesterTitaniumCost);
	document.getElementById("deforesterSiliconCost").innerHTML = commafy(deforesterSiliconCost);
	document.getElementById("moonWorker").innerHTML = moonWorker;
	document.getElementById("moonWorkerGemCost").innerHTML = commafy(moonWorkerGemCost);
	document.getElementById("moonDrill").innerHTML = moonDrill;
	document.getElementById("moonDrillMetalCost").innerHTML = commafy(moonDrillMetalCost);
	document.getElementById("moonDrillGemCost").innerHTML = commafy(moonDrillGemCost);
	document.getElementById("moonDrillOilCost").innerHTML = commafy(moonDrillOilCost);
	document.getElementById("moonQuarry").innerHTML = moonQuarry;
	document.getElementById("moonQuarrySpaceMetalCost").innerHTML = commafy(moonQuarrySpaceMetalCost);
	document.getElementById("moonQuarryGemCost").innerHTML = commafy(moonQuarryGemCost);
	document.getElementById("moonQuarrySiliconCost").innerHTML = commafy(moonQuarrySiliconCost);
	document.getElementById("vacuum").innerHTML = vacuum;
	document.getElementById("vacuumSpaceMetalCost").innerHTML = commafy(vacuumSpaceMetalCost);
	document.getElementById("vacuumGemCost").innerHTML = commafy(vacuumGemCost);
	document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
	document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
	document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
	document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
	document.getElementById("spaceCow").innerHTML = spaceCow;
	document.getElementById("spaceCowTitaniumCost").innerHTML = commafy(spaceCowTitaniumCost);
	document.getElementById("spaceCowSpaceMetalCost").innerHTML = commafy(spaceCowSpaceMetalCost);
	document.getElementById("spaceCowSiliconCost").innerHTML = commafy(spaceCowSiliconCost);
	document.getElementById("explorer").innerHTML = explorer;
	document.getElementById("explorerGemCost").innerHTML = commafy(explorerGemCost);
	document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
	document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = commafy(spaceMetalDrillSpaceMetalCost);
	document.getElementById("spaceMetalDrillGemCost").innerHTML = commafy(spaceMetalDrillGemCost);
	document.getElementById("spaceMetalDrillOilCost").innerHTML = commafy(spaceMetalDrillOilCost);
	document.getElementById("pentaDrill").innerHTML = pentaDrill;
	document.getElementById("pentaDrillSpaceMetalCost").innerHTML = commafy(pentaDrillSpaceMetalCost);
	document.getElementById("pentaDrillGemCost").innerHTML = commafy(pentaDrillGemCost);
	document.getElementById("pentaDrillSiliconCost").innerHTML = commafy(pentaDrillSiliconCost);
	document.getElementById("droid").innerHTML = droid;
	document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
	document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
	document.getElementById("destroyer").innerHTML = destroyer;
	document.getElementById("destroyerSpaceMetalCost").innerHTML = commafy(destroyerSpaceMetalCost);
	document.getElementById("destroyerGemCost").innerHTML = commafy(destroyerGemCost);
	document.getElementById("destroyerOilCost").innerHTML = commafy(destroyerOilCost);
	document.getElementById("deathStar").innerHTML = deathStar;
	document.getElementById("deathStarSpaceMetalCost").innerHTML = commafy(deathStarSpaceMetalCost);
	document.getElementById("deathStarSilverCost").innerHTML = commafy(deathStarSilverCost);
	document.getElementById("deathStarSiliconCost").innerHTML = commafy(deathStarSiliconCost);
	document.getElementById("scout").innerHTML = scout;
	document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
	document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
	document.getElementById("spaceLaser").innerHTML = spaceLaser;
	document.getElementById("spaceLaserSpaceMetalCost").innerHTML = commafy(spaceLaserSpaceMetalCost);
	document.getElementById("spaceLaserGemCost").innerHTML = commafy(spaceLaserGemCost);
	document.getElementById("spaceLaserOilCost").innerHTML = commafy(spaceLaserOilCost);
	document.getElementById("bertha").innerHTML = bertha;
	document.getElementById("berthaTitaniumCost").innerHTML = commafy(berthaTitaniumCost);
	document.getElementById("berthaSpaceMetalCost").innerHTML = commafy(berthaSpaceMetalCost);
	document.getElementById("berthaSiliconCost").innerHTML = commafy(berthaSiliconCost);
	document.getElementById("blowtorch").innerHTML = blowtorch;
	document.getElementById("blowtorchSpaceMetalCost").innerHTML = commafy(blowtorchSpaceMetalCost);
	document.getElementById("blowtorchTitaniumCost").innerHTML = commafy(blowtorchTitaniumCost);
	document.getElementById("scorcher").innerHTML = scorcher;
	document.getElementById("scorcherSpaceMetalCost").innerHTML = commafy(scorcherSpaceMetalCost);
	document.getElementById("scorcherGemCost").innerHTML = commafy(scorcherGemCost);
	document.getElementById("scorcherOilCost").innerHTML = commafy(scorcherOilCost);
	document.getElementById("annihilator").innerHTML = commafy(annihilator);
	document.getElementById("annihilatorSpaceMetalCost").innerHTML = commafy(annihilatorSpaceMetalCost);
	document.getElementById("annihilatorGemCost").innerHTML = commafy(annihilatorGemCost);
	document.getElementById("annihilatorSilverCost").innerHTML = commafy(annihilatorSilverCost);
	document.getElementById("lab").innerHTML = lab;
	document.getElementById("labWoodCost").innerHTML = commafy(labWoodCost);
	document.getElementById("labGemCost").innerHTML = commafy(labGemCost);
	document.getElementById("labMetalCost").innerHTML = commafy(labMetalCost);
	document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
	document.getElementById("chemicalPlantMetalCost").innerHTML = commafy(chemicalPlantMetalCost);
	document.getElementById("chemicalPlantGemCost").innerHTML = commafy(chemicalPlantGemCost);
	document.getElementById("chemicalPlantOilCost").innerHTML = commafy(chemicalPlantOilCost);
	document.getElementById("grinder").innerHTML = grinder;
	document.getElementById("grinderTitaniumCost").innerHTML = commafy(grinderTitaniumCost);
	document.getElementById("grinderSpaceMetalCost").innerHTML = commafy(grinderSpaceMetalCost);
	document.getElementById("grinderGoldCost").innerHTML = commafy(grinderGoldCost);
	document.getElementById("cubic").innerHTML = cubic;
	document.getElementById("cubicUraniumCost").innerHTML = commafy(cubicUraniumCost);
	document.getElementById("cubicSpaceMetalCost").innerHTML = commafy(cubicSpaceMetalCost);
	document.getElementById("cubicOilCost").innerHTML = commafy(cubicOilCost);
	document.getElementById("enricher").innerHTML = enricher;
	document.getElementById("enricherTitaniumCost").innerHTML = commafy(enricherTitaniumCost);
	document.getElementById("enricherSpaceMetalCost").innerHTML = commafy(enricherSpaceMetalCost);
	document.getElementById("enricherSiliconCost").innerHTML = commafy(enricherSiliconCost);
	document.getElementById("crucible").innerHTML = crucible;
	document.getElementById("crucibleGemCost").innerHTML = commafy(crucibleGemCost);
	document.getElementById("crucibleSpaceMetalCost").innerHTML = commafy(crucibleSpaceMetalCost);
	document.getElementById("extractor").innerHTML = extractor;
	document.getElementById("extractorTitaniumCost").innerHTML = commafy(extractorTitaniumCost);
	document.getElementById("extractorSpaceMetalCost").innerHTML = commafy(extractorSpaceMetalCost);
	document.getElementById("extractorSiliconCost").innerHTML = commafy(extractorSiliconCost);
	document.getElementById("extruder").innerHTML = extruder;
	document.getElementById("extruderTitaniumCost").innerHTML = commafy(extruderTitaniumCost);
	document.getElementById("extruderSpaceMetalCost").innerHTML = commafy(extruderSpaceMetalCost);
	document.getElementById("extruderSiliconCost").innerHTML = commafy(extruderSiliconCost);
	document.getElementById("collector").innerHTML = commafy(collector);
	document.getElementById("collectorSpaceMetalCost").innerHTML = commafy(collectorSpaceMetalCost);
	document.getElementById("collectorTitaniumCost").innerHTML = commafy(collectorTitaniumCost);
	document.getElementById("magnet").innerHTML = commafy(magnet);
	document.getElementById("magnetSpaceMetalCost").innerHTML = commafy(magnetSpaceMetalCost);
	document.getElementById("magnetTitaniumCost").innerHTML = commafy(magnetTitaniumCost);
	document.getElementById("magnetGoldCost").innerHTML = commafy(magnetGoldCost);
	document.getElementById("eCell").innerHTML = commafy(eCell);
	document.getElementById("eCellSilverCost").innerHTML = commafy(eCellSilverCost);
	document.getElementById("eCellGoldCost").innerHTML = commafy(eCellGoldCost);
	document.getElementById("eCellSiliconCost").innerHTML = commafy(eCellSiliconCost);
	document.getElementById("drone").innerHTML = commafy(drone);
	document.getElementById("droneSpaceMetalCost").innerHTML = commafy(droneSpaceMetalCost);
	document.getElementById("droneSiliconCost").innerHTML = commafy(droneSiliconCost);
	document.getElementById("tanker").innerHTML = commafy(tanker);
	document.getElementById("tankerSpaceMetalCost").innerHTML = commafy(tankerSpaceMetalCost);
	document.getElementById("tankerTitaniumCost").innerHTML = commafy(tankerTitaniumCost);
	document.getElementById("tankerSiliconCost").innerHTML = commafy(tankerSiliconCost);
	document.getElementById("compressor").innerHTML = commafy(compressor);
	document.getElementById("compressorSpaceMetalCost").innerHTML = commafy(compressorSpaceMetalCost);
	document.getElementById("compressorTitaniumCost").innerHTML = commafy(compressorTitaniumCost);
	document.getElementById("compressorSiliconCost").innerHTML = commafy(compressorSiliconCost);
	document.getElementById("icePick").innerHTML = commafy(icePick);
	document.getElementById("icePickSpaceMetalCost").innerHTML = commafy(icePickSpaceMetalCost);
	document.getElementById("icePickGemCost").innerHTML = commafy(icePickGemCost);
	document.getElementById("iceDrill").innerHTML = commafy(iceDrill);
	document.getElementById("iceDrillSpaceMetalCost").innerHTML = commafy(iceDrillSpaceMetalCost);
	document.getElementById("iceDrillTitaniumCost").innerHTML = commafy(iceDrillTitaniumCost);
	document.getElementById("iceDrillSiliconCost").innerHTML = commafy(iceDrillSiliconCost);
	document.getElementById("freezer").innerHTML = commafy(freezer);
	document.getElementById("freezerSpaceMetalCost").innerHTML = commafy(freezerSpaceMetalCost);
	document.getElementById("freezerTitaniumCost").innerHTML = commafy(freezerTitaniumCost);
	document.getElementById("freezerSiliconCost").innerHTML = commafy(freezerSiliconCost);

}

function checkRedCost(){

	function turnRed(resource, variable, id){
		if(resource < variable){
			document.getElementById(id).className = "red";
		}
		else{
			document.getElementById(id).className = "";
		}
	}

	turnRed(energyps, 0, "energyps");
	turnRed(uraniumps - nuclearStation*7, 0, "uraniumps");
	if(chemicalPlantToggled === true){
		turnRed(oilps - chemicalPlant*20, 0, "oilps");
	}
	else{
		turnRed(oilps, 0, "oilps");
	}
	if(chemicalPlantToggled === true){
		if(charcoalToggled === true){
			turnRed(charcoalps - charcoalEngine - chemicalPlant*20, 0, "charcoalps");
		}
		else{
			turnRed(0 - charcoalEngine - chemicalPlant*20, 0, "charcoalps");
		}
	}
	else{
		if(charcoalToggled === true){
			turnRed(charcoalps - charcoalEngine, 0, "charcoalps");
		}
		else{
			turnRed(0 - charcoalEngine, 0, "charcoalps");
		}
	}
	turnRed(woodps - (woodburner*2) - (furnace*furnaceWoodInput) - (kiln*45), 0, "woodps");
	turnRed(spaceMetalps, 0, "spaceMetalps");
	turnRed(methaneps - methaneStation*6, 0, "methaneps");
	turnRed(lavaps - magmatic*11, 0, "lavaps");
	if(heaterToggled === true){
		turnRed(hydrogenps - fusionReactor*10 - heater*10, 0, "hydrogenps");
	}
	else{
		turnRed(hydrogenps - fusionReactor*10, 0, "hydrogenps");
	}
	turnRed(heliumps - fusionReactor*10, 0, "heliumps");
	

	turnRed(wood, 2, "manualCharcoalCost");
	turnRed(energy, 1000, "manualPlasmaEnergyCost");
	turnRed(hydrogen, 10, "manualPlasmaHydrogenCost");

	turnRed(uranium, uraniumStorage, "uraniumStorageCost");
	turnRed(spaceMetal, uraniumStorage/2.5, "uraniumStorageSpaceMetalCost");
	
	turnRed(oil, oilStorage, "oilStorageCost");
	turnRed(metal, oilStorage/2.5, "oilStorageMetalCost");
	
	turnRed(metal, metalStorage, "metalStorageCost");
	
	turnRed(gem, gemStorage, "gemStorageCost");
	turnRed(metal, gemStorage/2.5, "gemStorageMetalCost");
	
	turnRed(charcoal, charcoalStorage, "charcoalStorageCost");
	turnRed(metal, charcoalStorage/2.5, "charcoalStorageMetalCost");

	turnRed(wood, woodStorage, "woodStorageCost");
	turnRed(metal, woodStorage/2.5, "woodStorageMetalCost");
	
	turnRed(spaceMetal, spaceMetalStorage, "spaceMetalStorageCost");
	turnRed(metal, spaceMetalStorage*4, "spaceMetalStorageMetalCost");

	turnRed(methane, methaneStorage, "methaneStorageCost");
	turnRed(spaceMetal, methaneStorage/2.5, "methaneStorageSpaceMetalCost");

	turnRed(titanium, titaniumStorage, "titaniumStorageCost");
	turnRed(spaceMetal, titaniumStorage/2.5, "titaniumStorageSpaceMetalCost");

	turnRed(gold, goldStorage, "goldStorageCost");
	turnRed(spaceMetal, goldStorage/2.5, "goldStorageSpaceMetalCost");
	
	turnRed(silver, silverStorage, "silverStorageCost");
	turnRed(spaceMetal, silverStorage/2.5, "silverStorageSpaceMetalCost");

	turnRed(silicon, siliconStorage, "siliconStorageCost");
	turnRed(spaceMetal, siliconStorage/2.5, "siliconStorageSpaceMetalCost");

	turnRed(lava, lavaStorage, "lavaStorageCost");
	turnRed(spaceMetal, lavaStorage/2.5, "lavaStorageSpaceMetalCost");

	turnRed(hydrogen, hydrogenStorage, "hydrogenStorageCost");
	turnRed(spaceMetal, hydrogenStorage/2.5, "hydrogenStorageSpaceMetalCost");

	turnRed(helium, heliumStorage, "heliumStorageCost");
	turnRed(spaceMetal, heliumStorage/2.5, "heliumStorageSpaceMetalCost");

	turnRed(ice, iceStorage, "iceStorageCost");
	turnRed(spaceMetal, iceStorage/2.5, "iceStorageSpaceMetalCost");
	
	turnRed(spaceMetal, heaterSpaceMetalCost, "heaterSpaceMetalCost");
	turnRed(gem, heaterGemCost, "heaterGemCost");
	turnRed(silicon, heaterSiliconCost, "heaterSiliconCost");

	turnRed(metal, charcoalEngineMetalCost, "charcoalEngineMetalCost");
	turnRed(gem, charcoalEngineGemCost, "charcoalEngineGemCost");

	turnRed(metal, solarPanelMetalCost, "solarPanelMetalCost");
	turnRed(gem, solarPanelGemCost, "solarPanelGemCost");

	if(spaceMetal < methaneStationSpaceMetalCost){
		document.getElementById("methaneStationSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("methaneStationSpaceMetalCost").className = "";
	}

	if(titanium < methaneStationTitaniumCost){
		document.getElementById("methaneStationTitaniumCost").className = "red";
	}
	else{
		document.getElementById("methaneStationTitaniumCost").className = "";
	}

	if(spaceMetal < nuclearStationSpaceMetalCost){
		document.getElementById("nuclearStationSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("nuclearStationSpaceMetalCost").className = "";
	}

	if(titanium < nuclearStationTitaniumCost){
		document.getElementById("nuclearStationTitaniumCost").className = "red";
	}
	else{
		document.getElementById("nuclearStationTitaniumCost").className = "";
	}
	
	if(spaceMetal < magmaticSpaceMetalCost){
		document.getElementById("magmaticSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("magmaticSpaceMetalCost").className = "";
	}

	if(gem < magmaticGemCost){
		document.getElementById("magmaticGemCost").className = "red";
	}
	else{
		document.getElementById("magmaticGemCost").className = "";
	}

	if(silver < magmaticSilverCost){
		document.getElementById("magmaticSilverCost").className = "red";
	}
	else{
		document.getElementById("magmaticSilverCost").className = "";
	}

	if(spaceMetal < fusionReactorSpaceMetalCost){
		document.getElementById("fusionReactorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorSpaceMetalCost").className = "";
	}

	if(titanium < fusionReactorTitaniumCost){
		document.getElementById("fusionReactorTitaniumCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorTitaniumCost").className = "";
	}

	if(silicon < fusionReactorSiliconCost){
		document.getElementById("fusionReactorSiliconCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorSiliconCost").className = "";
	}

	if(metal < pumpMetalCost){
		document.getElementById("pumpMetalCost").className = "red";
	}
	else{
		document.getElementById("pumpMetalCost").className = "";
	}
	
	if(gem < pumpGemCost){
		document.getElementById("pumpGemCost").className = "red";
	}
	else{
		document.getElementById("pumpGemCost").className = "";
	}

	if(oil < pumpjackOilCost){
		document.getElementById("pumpjackOilCost").className = "red";
	}
	else{
		document.getElementById("pumpjackOilCost").className = "";
	}
	
	if(gem < pumpjackGemCost){
		document.getElementById("pumpjackGemCost").className = "red";
	}
	else{
		document.getElementById("pumpjackGemCost").className = "";
	}
	
	if(metal < pumpjackMetalCost){
		document.getElementById("pumpjackMetalCost").className = "red";
	}
	else{
		document.getElementById("pumpjackMetalCost").className = "";
	}
	
	turnRed(spaceMetal, oilFieldSpaceMetalCost, "oilFieldSpaceMetalCost");
	turnRed(titanium, oilFieldTitaniumCost, "oilFieldTitaniumCost");
	turnRed(silicon, oilFieldSiliconCost, "oilFieldSiliconCost");

	if(metal < minerMetalCost){
		document.getElementById("minerMetalCost").className = "red";
	}
	else{
		document.getElementById("minerMetalCost").className = "";
	}
	
	if(wood < minerWoodCost){
		document.getElementById("minerWoodCost").className = "red";
	}
	else{
		document.getElementById("minerWoodCost").className = "";
	}
	
	if(metal < heavyDrillMetalCost){
		document.getElementById("heavyDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillMetalCost").className = "";
	}
	
	if(gem < heavyDrillGemCost){
		document.getElementById("heavyDrillGemCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillGemCost").className = "";
	}
	
	if(oil < heavyDrillOilCost){
		document.getElementById("heavyDrillOilCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillOilCost").className = "";
	}
	
	turnRed(spaceMetal, gigaDrillSpaceMetalCost, "gigaDrillSpaceMetalCost");
	turnRed(gem, gigaDrillGemCost, "gigaDrillGemCost");
	turnRed(silicon, gigaDrillSiliconCost, "gigaDrillSiliconCost");

	if(metal < gemMinerMetalCost){
		document.getElementById("gemMinerMetalCost").className = "red";
	}
	else{
		document.getElementById("gemMinerMetalCost").className = "";
	}
	
	if(gem < gemMinerGemCost){
		document.getElementById("gemMinerGemCost").className = "red";
	}
	else{
		document.getElementById("gemMinerGemCost").className = "";
	}
	
	if(metal < advancedDrillMetalCost){
		document.getElementById("advancedDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillMetalCost").className = "";
	}
	
	if(gem < advancedDrillGemCost){
		document.getElementById("advancedDrillGemCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillGemCost").className = "";
	}
	
	if(oil < advancedDrillOilCost){
		document.getElementById("advancedDrillOilCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillOilCost").className = "";
	}

	turnRed(spaceMetal, diamondDrillSpaceMetalCost, "diamondDrillSpaceMetalCost");
	turnRed(gem, diamondDrillGemCost, "diamondDrillGemCost");
	turnRed(silicon, diamondDrillSiliconCost, "diamondDrillSiliconCost");
	
	if(metal < woodburnerMetalCost){
		document.getElementById("woodburnerMetalCost").className = "red";
	}
	else{
		document.getElementById("woodburnerMetalCost").className = "";
	}
	
	if(wood < woodburnerWoodCost){
		document.getElementById("woodburnerWoodCost").className = "red";
	}
	else{
		document.getElementById("woodburnerWoodCost").className = "";
	}
	
	if(metal < furnaceMetalCost){
		document.getElementById("furnaceMetalCost").className = "red";
	}
	else{
		document.getElementById("furnaceMetalCost").className = "";
	}
	
	if(wood < furnaceWoodCost){
		document.getElementById("furnaceWoodCost").className = "red";
	}
	else{
		document.getElementById("furnaceWoodCost").className = "";
	}
	
	if(oil < furnaceOilCost){
		document.getElementById("furnaceOilCost").className = "red";
	}
	else{
		document.getElementById("furnaceOilCost").className = "";
	}
	
	turnRed(spaceMetal, kilnSpaceMetalCost, "kilnSpaceMetalCost");
	turnRed(gem, kilnGemCost, "kilnGemCost");
	turnRed(silicon, kilnSiliconCost, "kilnSiliconCost");

	if(metal < woodcutterMetalCost){
		document.getElementById("woodcutterMetalCost").className = "red";
	}
	else{
		document.getElementById("woodcutterMetalCost").className = "";
	}
	
	if(wood < woodcutterWoodCost){
		document.getElementById("woodcutterWoodCost").className = "red";
	}
	else{
		document.getElementById("woodcutterWoodCost").className = "";
	}

	if(metal < laserCutterMetalCost){
		document.getElementById("laserCutterMetalCost").className = "red";
	}
	else{
		document.getElementById("laserCutterMetalCost").className = "";
	}
	
	if(gem < laserCutterGemCost){
		document.getElementById("laserCutterGemCost").className = "red";
	}
	else{
		document.getElementById("laserCutterGemCost").className = "";
	}
	
	if(oil < laserCutterOilCost){
		document.getElementById("laserCutterOilCost").className = "red";
	}
	else{
		document.getElementById("laserCutterOilCost").className = "";
	}

	turnRed(spaceMetal, deforesterSpaceMetalCost, "deforesterSpaceMetalCost");
	turnRed(titanium, deforesterTitaniumCost, "deforesterTitaniumCost");
	turnRed(silicon, deforesterSiliconCost, "deforesterSiliconCost");

	if(gem < moonWorkerGemCost){
		document.getElementById("moonWorkerGemCost").className = "red";
	}
	else{
		document.getElementById("moonWorkerGemCost").className = "";
	}
	
	if(metal < moonDrillMetalCost){
		document.getElementById("moonDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("moonDrillMetalCost").className = "";
	}
	
	if(gem < moonDrillGemCost){
		document.getElementById("moonDrillGemCost").className = "red";
	}
	else{
		document.getElementById("moonDrillGemCost").className = "";
	}
	
	if(oil < moonDrillOilCost){
		document.getElementById("moonDrillOilCost").className = "red";
	}
	else{
		document.getElementById("moonDrillOilCost").className = "";
	}
	
	turnRed(spaceMetal, moonQuarrySpaceMetalCost, "moonQuarrySpaceMetalCost");
	turnRed(gem, moonQuarryGemCost, "moonQuarryGemCost");
	turnRed(silicon, moonQuarrySiliconCost, "moonQuarrySiliconCost");


	if(spaceMetal < vacuumSpaceMetalCost){
		document.getElementById("vacuumSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("vacuumSpaceMetalCost").className = "";
	}
	
	if(gem < vacuumGemCost){
		document.getElementById("vacuumGemCost").className = "red";
	}
	else{
		document.getElementById("vacuumGemCost").className = "";
	}
	
	if(spaceMetal < suctionExcavatorSpaceMetalCost){
		document.getElementById("suctionExcavatorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorSpaceMetalCost").className = "";
	}

	if(gem < suctionExcavatorGemCost){
		document.getElementById("suctionExcavatorGemCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorGemCost").className = "";
	}

	if(oil < suctionExcavatorOilCost){
		document.getElementById("suctionExcavatorOilCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorOilCost").className = "";
	}
	
	turnRed(spaceMetal, spaceCowSpaceMetalCost, "spaceCowSpaceMetalCost");
	turnRed(titanium, spaceCowTitaniumCost, "spaceCowTitaniumCost");
	turnRed(silicon, spaceCowSiliconCost, "spaceCowSiliconCost");

	if(gem < explorerGemCost){
		document.getElementById("explorerGemCost").className = "red";
	}
	else{
		document.getElementById("explorerGemCost").className = "";
	}
	
	if(spaceMetal < spaceMetalDrillSpaceMetalCost){
		document.getElementById("spaceMetalDrillSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillSpaceMetalCost").className = "";
	}
	
	if(gem < spaceMetalDrillGemCost){
		document.getElementById("spaceMetalDrillGemCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillGemCost").className = "";
	}
	
	if(oil < spaceMetalDrillOilCost){
		document.getElementById("spaceMetalDrillOilCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillOilCost").className = "";
	}
	
	turnRed(spaceMetal, pentaDrillSpaceMetalCost, "pentaDrillSpaceMetalCost");
	turnRed(gem, pentaDrillGemCost, "pentaDrillGemCost");
	turnRed(silicon, pentaDrillSiliconCost, "pentaDrillSiliconCost");

	if(spaceMetal < droidSpaceMetalCost){
		document.getElementById("droidSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("droidSpaceMetalCost").className = "";
	}
	
	if(methane < droidMethaneCost){
		document.getElementById("droidMethaneCost").className = "red";
	}
	else{
		document.getElementById("droidMethaneCost").className = "";
	}
	
	if(spaceMetal < destroyerSpaceMetalCost){
		document.getElementById("destroyerSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("destroyerSpaceMetalCost").className = "";
	}

	if(gem < destroyerGemCost){
		document.getElementById("destroyerGemCost").className = "red";
	}
	else{
		document.getElementById("destroyerGemCost").className = "";
	}
	
	if(oil < destroyerOilCost){
		document.getElementById("destroyerOilCost").className = "red";
	}
	else{
		document.getElementById("destroyerOilCost").className = "";
	}

	turnRed(spaceMetal, deathStarSpaceMetalCost, "deathStarSpaceMetalCost");
	turnRed(silver, deathStarSilverCost, "deathStarSilverCost");
	turnRed(silicon, deathStarSiliconCost, "deathStarSiliconCost");
	
	if(spaceMetal < scoutSpaceMetalCost){
		document.getElementById("scoutSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("scoutSpaceMetalCost").className = "";
	}
	
	if(titanium < scoutTitaniumCost){
		document.getElementById("scoutTitaniumCost").className = "red";
	}
	else{
		document.getElementById("scoutTitaniumCost").className = "";
	}
	
	if(spaceMetal < spaceLaserSpaceMetalCost){
		document.getElementById("spaceLaserSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserSpaceMetalCost").className = "";
	}
	
	if(gem < spaceLaserGemCost){
		document.getElementById("spaceLaserGemCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserGemCost").className = "";
	}
	
	if(oil < spaceLaserOilCost){
		document.getElementById("spaceLaserOilCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserOilCost").className = "";
	}

	turnRed(spaceMetal, berthaSpaceMetalCost, "berthaSpaceMetalCost");
	turnRed(titanium, berthaTitaniumCost, "berthaTitaniumCost");
	turnRed(silicon, berthaSiliconCost, "berthaSiliconCost");
	
	if(spaceMetal < blowtorchSpaceMetalCost){
		document.getElementById("blowtorchSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("blowtorchSpaceMetalCost").className = "";
	}
	
	if(titanium < blowtorchTitaniumCost){
		document.getElementById("blowtorchTitaniumCost").className = "red";
	}
	else{
		document.getElementById("blowtorchTitaniumCost").className = "";
	}
	
	if(spaceMetal < scorcherSpaceMetalCost){
		document.getElementById("scorcherSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("scorcherSpaceMetalCost").className = "";
	}
	
	if(gem < scorcherGemCost){
		document.getElementById("scorcherGemCost").className = "red";
	}
	else{
		document.getElementById("scorcherGemCost").className = "";
	}
	
	if(oil < scorcherOilCost){
		document.getElementById("scorcherOilCost").className = "red";
	}
	else{
		document.getElementById("scorcherOilCost").className = "";
	}

	if(spaceMetal < annihilatorSpaceMetalCost){
		document.getElementById("annihilatorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("annihilatorSpaceMetalCost").className = "";
	}
	
	if(gem < annihilatorGemCost){
		document.getElementById("annihilatorGemCost").className = "red";
	}
	else{
		document.getElementById("annihilatorGemCost").className = "";
	}
	
	if(silver < annihilatorSilverCost){
		document.getElementById("annihilatorSilverCost").className = "red";
	}
	else{
		document.getElementById("annihilatorSilverCost").className = "";
	}
	
	if(wood < labWoodCost){
		document.getElementById("labWoodCost").className = "red";
	}
	else{
		document.getElementById("labWoodCost").className = "";
	}
	
	if(gem < labGemCost){
		document.getElementById("labGemCost").className = "red";
	}
	else{
		document.getElementById("labGemCost").className = "";
	}
	
	if(metal < labMetalCost){
		document.getElementById("labMetalCost").className = "red";
	}
	else{
		document.getElementById("labMetalCost").className = "";
	}

	if(science < 5){
		document.getElementById("unlockStorageCost").className = "red";
	}
	else{
		document.getElementById("unlockStorageCost").className = "";
	}

	if(science < 20){
		document.getElementById("unlockBasicEnergyCost").className = "red";
	}
	else{
		document.getElementById("unlockBasicEnergyCost").className = "";
	}

	if(science < 30){
		document.getElementById("unlockOilCost").className = "red";
	}
	else{
		document.getElementById("unlockOilCost").className = "";
	}

	if(science < 30){
		document.getElementById("unlockOilCost").className = "red";
	}
	else{
		document.getElementById("unlockOilCost").className = "";
	}

	if(science < 50){
		document.getElementById("unlockSolarCost").className = "red";
	}
	else{
		document.getElementById("unlockSolarCost").className = "";
	}

	if(science < 100){
		document.getElementById("unlockMachinesCost").className = "red";
	}
	else{
		document.getElementById("unlockMachinesCost").className = "";
	}

	if(science < 300){
		document.getElementById("upgradeResourceTechCost").className = "red";
	}
	else{
		document.getElementById("upgradeResourceTechCost").className = "";
	}

	if(science < 500){
		document.getElementById("unlockSolarSystemCost").className = "red";
	}
	else{
		document.getElementById("unlockSolarSystemCost").className = "";
	}

	if(science < 1000){
		document.getElementById("upgradeEngineTechCost").className = "red";
	}
	else{
		document.getElementById("upgradeEngineTechCost").className = "";
	}

	if(science < 5000){
		document.getElementById("upgradeSolarTechCost").className = "red";
	}
	else{
		document.getElementById("upgradeSolarTechCost").className = "";
	}

	if(metal < 1200){
		document.getElementById("rocketMetalCost").className = "red";
	}
	else{
		document.getElementById("rocketMetalCost").className = "";
	}

	if(gem < 900){
		document.getElementById("rocketGemCost").className = "red";
	}
	else{
		document.getElementById("rocketGemCost").className = "";
	}

	if(oil < 1000){
		document.getElementById("rocketOilCost").className = "red";
	}
	else{
		document.getElementById("rocketOilCost").className = "";
	}

	if(metal < chemicalPlantMetalCost){
		document.getElementById("chemicalPlantMetalCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantMetalCost").className = "";
	}
	
	if(gem < chemicalPlantGemCost){
		document.getElementById("chemicalPlantGemCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantGemCost").className = "";
	}
	
	if(oil < chemicalPlantOilCost){
		document.getElementById("chemicalPlantOilCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantOilCost").className = "";
	}
	
	if(rocketFuel < 20){
		document.getElementById("moonRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("moonRocketFuelCost").className = "";
	}

	if(rocketFuel < 50){
		document.getElementById("venusRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("venusRocketFuelCost").className = "";
	}

	if(rocketFuel < 80){
		document.getElementById("marsRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("marsRocketFuelCost").className = "";
	}

	if(rocketFuel < 200){
		document.getElementById("asteroidBeltRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("asteroidBeltRocketFuelCost").className = "";
	}

	if(rocketFuel < 500){
		document.getElementById("wonderStationRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("wonderStationRocketFuelCost").className = "";
	}

	if(rocketFuel < 1000){
		document.getElementById("jupiterRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("jupiterRocketFuelCost").className = "";
	}

	if(rocketFuel < 2000){
		document.getElementById("saturnRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("saturnRocketFuelCost").className = "";
	}

	if(rocketFuel < 5000){
		document.getElementById("plutoRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("plutoRocketFuelCost").className = "";
	}

	if(rocketFuel < 6000){
		document.getElementById("kuiperBeltRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("kuiperBeltRocketFuelCost").className = "";
	}

	turnRed(rocketFuel, 7000, "solCenterRocketFuelCost");

	if(titanium < grinderTitaniumCost){
		document.getElementById("grinderTitaniumCost").className = "red";
	}
	else{
		document.getElementById("grinderTitaniumCost").className = "";
	}
	
	if(spaceMetal < grinderSpaceMetalCost){
		document.getElementById("grinderSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("grinderSpaceMetalCost").className = "";
	}
	
	if(gold < grinderGoldCost){
		document.getElementById("grinderGoldCost").className = "red";
	}
	else{
		document.getElementById("grinderGoldCost").className = "";
	}
	
	if(uranium < cubicUraniumCost){
		document.getElementById("cubicUraniumCost").className = "red";
	}
	else{
		document.getElementById("cubicUraniumCost").className = "";
	}
	
	if(spaceMetal < cubicSpaceMetalCost){
		document.getElementById("cubicSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("cubicSpaceMetalCost").className = "";
	}
	
	if(oil < cubicOilCost){
		document.getElementById("cubicOilCost").className = "red";
	}
	else{
		document.getElementById("cubicOilCost").className = "";
	}

	turnRed(titanium, enricherTitaniumCost, "enricherTitaniumCost");
	turnRed(spaceMetal, enricherSpaceMetalCost, "enricherSpaceMetalCost");
	turnRed(silicon, enricherSiliconCost, "enricherSiliconCost");

	if(gem < crucibleGemCost){
		document.getElementById("crucibleGemCost").className = "red";
	}
	else{
		document.getElementById("crucibleGemCost").className = "";
	}
	
	if(spaceMetal < crucibleSpaceMetalCost){
		document.getElementById("crucibleSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("crucibleSpaceMetalCost").className = "";
	}
	
	turnRed(spaceMetal, extractorSpaceMetalCost, "extractorSpaceMetalCost");
	turnRed(titanium, extractorTitaniumCost, "extractorTitaniumCost");
	turnRed(silicon, extractorSiliconCost, "extractorSiliconCost");

	turnRed(spaceMetal, extruderSpaceMetalCost, "extruderSpaceMetalCost");
	turnRed(titanium, extruderTitaniumCost, "extruderTitaniumCost");
	turnRed(silicon, extruderSiliconCost, "extruderSiliconCost");

	turnRed(spaceMetal, collectorSpaceMetalCost, "collectorSpaceMetalCost");
	turnRed(titanium, collectorTitaniumCost, "collectorTitaniumCost");

	turnRed(spaceMetal, magnetSpaceMetalCost, "magnetSpaceMetalCost");
	turnRed(titanium, magnetTitaniumCost, "magnetTitaniumCost");
	turnRed(gold, magnetGoldCost, "magnetGoldCost");

	turnRed(silver, eCellSilverCost, "eCellSilverCost");
	turnRed(gold, eCellGoldCost, "eCellGoldCost");
	turnRed(silicon, eCellSiliconCost, "eCellSiliconCost");

	turnRed(spaceMetal, droneSpaceMetalCost, "droneSpaceMetalCost");
	turnRed(silicon, droneSiliconCost, "droneSiliconCost");
	
	turnRed(spaceMetal, tankerSpaceMetalCost, "tankerSpaceMetalCost");
	turnRed(titanium, tankerTitaniumCost, "tankerTitaniumCost");
	turnRed(silicon, tankerSiliconCost, "tankerSiliconCost");

	turnRed(spaceMetal, compressorSpaceMetalCost, "compressorSpaceMetalCost");
	turnRed(titanium, compressorTitaniumCost, "compressorTitaniumCost");
	turnRed(silicon, compressorSiliconCost, "compressorSiliconCost");

	turnRed(spaceMetal, icePickSpaceMetalCost, "icePickSpaceMetalCost");
	turnRed(gem, icePickGemCost, "icePickGemCost");
	
	turnRed(spaceMetal, iceDrillSpaceMetalCost, "iceDrillSpaceMetalCost");
	turnRed(titanium, iceDrillTitaniumCost, "iceDrillTitaniumCost");
	turnRed(silicon, iceDrillSiliconCost, "iceDrillSiliconCost");

	turnRed(spaceMetal, freezerSpaceMetalCost, "freezerSpaceMetalCost");
	turnRed(titanium, freezerTitaniumCost, "freezerTitaniumCost");
	turnRed(silicon, freezerSiliconCost, "freezerSiliconCost");

	turnRed(hydrogen, 1500, "unlockPlasmaResearchHydrogenCost");
	turnRed(uranium, 1500, "unlockPlasmaResearchUraniumCost");
	turnRed(oil, 15000, "unlockPlasmaResearchOilCost");
	turnRed(wood, 15000, "unlockPlasmaResearchWoodCost");

	turnRed(energy, 75000, "unlockEmcResearchEnergyCost");
	turnRed(plasma, 100, "unlockEmcResearchPlasmaCost");

	if(gem < preciousGemCost){
		document.getElementById("preciousGemCost").className = "red";
	}
	else{
		document.getElementById("preciousGemCost").className = "";
	}

	if(silver < preciousSilverCost){
		document.getElementById("preciousSilverCost").className = "red";
	}
	else{
		document.getElementById("preciousSilverCost").className = "";
	}

	if(gold < preciousGoldCost){
		document.getElementById("preciousGoldCost").className = "red";
	}
	else{
		document.getElementById("preciousGoldCost").className = "";
	}

	if(gem < preciousActivateGemCost){
		document.getElementById("preciousActivateGemCost").className = "red";
	}
	else{
		document.getElementById("preciousActivateGemCost").className = "";
	}

	if(silver < preciousActivateSilverCost){
		document.getElementById("preciousActivateSilverCost").className = "red";
	}
	else{
		document.getElementById("preciousActivateSilverCost").className = "";
	}

	if(gold < preciousActivateGoldCost){
		document.getElementById("preciousActivateGoldCost").className = "red";
	}
	else{
		document.getElementById("preciousActivateGoldCost").className = "";
	}

	if(wood < energeticWoodCost){
		document.getElementById("energeticWoodCost").className = "red";
	}
	else{
		document.getElementById("energeticWoodCost").className = "";
	}

	if(charcoal < energeticCharcoalCost){
		document.getElementById("energeticCharcoalCost").className = "red";
	}
	else{
		document.getElementById("energeticCharcoalCost").className = "";
	}

	if(uranium < energeticUraniumCost){
		document.getElementById("energeticUraniumCost").className = "red";
	}
	else{
		document.getElementById("energeticUraniumCost").className = "";
	}

	if(wood < energeticActivateWoodCost){
		document.getElementById("energeticActivateWoodCost").className = "red";
	}
	else{
		document.getElementById("energeticActivateWoodCost").className = "";
	}

	if(charcoal < energeticActivateCharcoalCost){
		document.getElementById("energeticActivateCharcoalCost").className = "red";
	}
	else{
		document.getElementById("energeticActivateCharcoalCost").className = "";
	}

	if(uranium < energeticActivateUraniumCost){
		document.getElementById("energeticActivateUraniumCost").className = "red";
	}
	else{
		document.getElementById("energeticActivateUraniumCost").className = "";
	}

	if(silicon < techSiliconCost){
		document.getElementById("techSiliconCost").className = "red";
	}
	else{
		document.getElementById("techSiliconCost").className = "";
	}

	if(gold < techGoldCost){
		document.getElementById("techGoldCost").className = "red";
	}
	else{
		document.getElementById("techGoldCost").className = "";
	}

	if(gem < techGemCost){
		document.getElementById("techGemCost").className = "red";
	}
	else{
		document.getElementById("techGemCost").className = "";
	}

	if(silicon < techActivateSiliconCost){
		document.getElementById("techActivateSiliconCost").className = "red";
	}
	else{
		document.getElementById("techActivateSiliconCost").className = "";
	}

	if(gold < techActivateGoldCost){
		document.getElementById("techActivateGoldCost").className = "red";
	}
	else{
		document.getElementById("techActivateGoldCost").className = "";
	}

	if(gem < techActivateGemCost){
		document.getElementById("techActivateGemCost").className = "red";
	}
	else{
		document.getElementById("techActivateGemCost").className = "";
	}
}


function refreshResources(){
	for(var i=0; i<resourcesUnlocked.length; i++){
		document.getElementById(resourcesUnlocked[i]).className = "";
	}
	if(contains(resourcesUnlocked, "oilNav")){
		document.getElementById("oilNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "charcoalNav")){
		document.getElementById("charcoalNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "methaneNav")){
		document.getElementById("methaneNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "titaniumNav")){
		document.getElementById("titaniumNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "goldNav")){
		document.getElementById("goldNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "silverNav")){
		document.getElementById("silverNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "siliconNav")){
		document.getElementById("siliconNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "hydrogenNav")){
		document.getElementById("hydrogenNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "heliumNav")){
		document.getElementById("heliumNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "iceNav")){
		document.getElementById("iceNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet";
	}
	for(var i=0; i<noBorder.length; i++){
		for(var j=0; j<4; j++){
			document.getElementById(noBorder[i] + j).style.border = "";
		}
	}
	for(var i=0; i<activated.length; i++){
		document.getElementById(activated[i] + "Activation").innerHTML = "Activated";
	}
	if(techUnlocked === true){
		unlockTier3();
	}
}

function contains(array, obj) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function refreshResearches(){
	for(var i=0; i<available.length; i++){
		document.getElementById(available[i]).className = "";
	}
	for(var i=0; i<researched.length; i++){
		document.getElementById(researched[i]).className = "hidden";
	}
	if(contains(researched, "unlockStorage")){
		document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("charcoalStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
	}
	if(contains(researched, "unlockSolar")){
		document.getElementById("solarPower").className = "";
	}
	if(contains(researched, "unlockMachines")){
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
	}
}

function refreshTabs(){
	for(var i=0; i<tabsUnlocked.length; i++){
 		document.getElementById(tabsUnlocked[i]).className -= "hidden";
 	}
 	if(rocketLaunched === true){
 		document.getElementById("spaceRocket").className = "hidden";
  		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
 	}
 	if(contains(explored, "asteroidBelt")){
 		document.getElementById("wonderStation").className = "inner";
 		document.getElementById("collapseOuter").className ="collapseOuter";
 		document.getElementById("jupiter").className = "outer";
 		document.getElementById("saturn").className = "outer";
 		document.getElementById("uranus").className = "outer";
 		document.getElementById("neptune").className = "outer";
 		document.getElementById("pluto").className = "outer";
 		document.getElementById("kuiperBelt").className = "outer";
 	}
 	if(contains(explored, "kuiperBelt")){
 		document.getElementById("solCenter").className = "outer";
 	}
 	for(var i=0; i<buttonsHidden.length; i++){
 		document.getElementById(buttonsHidden[i]).className += " hidden";
 	}
}

// Collapses Resources

$('.collapseEarth').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInnerPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuterPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInner').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("inner").length; i++){
        	document.getElementsByClassName("inner")[i].className = "inner";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("inner").length; i++){
        	document.getElementsByClassName("inner")[i].className = "inner hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuter').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outer").length; i++){
        	document.getElementsByClassName("outer")[i].className = "outer";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outer").length; i++){
        	document.getElementsByClassName("outer")[i].className = "outer hidden";
        }
        $(this).addClass("collapsed");
    }
});

function updateTheme(){
	currentTheme = document.getElementById("themeSelector").options[themeSelector.selectedIndex].value;
    document.getElementById('theme_css').href = 'styles/'+currentTheme+'-bootstrap.min.css';
};

window.onload = function(){
	load('local');
};

window.setInterval(function(){
	refreshPerSec();
	gainResources();
	refresh();
	refreshWonderBars();
	checkRedCost();
},100);

window.setInterval(function(){
	refreshStats();
	autosave();
},1000);