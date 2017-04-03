function commafy(input){
	var output = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if(output.indexOf(".") != -1){
		output = output.slice(0,(output.indexOf("."))-output.length);
	}
	return output;
}

function refresh(){
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
}

function refreshPerSec(){
	var energyInput = (charcoalEngine*charcoalEngineOutput)+(solarPanel*solarPanelOutput)+(methaneStation*16)+(nuclearStation*82)+(magmatic*96)+(fusionReactor*110);
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
		energyInput -= methaneStation*16;
	}
	if(uranium + uraniumps/10 >= nuclearStation*7/10){
		uranium -= nuclearStation*7/10;
	}
	else{
		energyInput -= nuclearStation*82;
	}
	if(lava + lavaps/10 >= magmatic*11/10){
		lava -= magmatic*11/10;
	}
	else{
		energyInput -= magmatic*96;
	}
	if(hydrogen + hydrogenps/10 >= fusionReactor*10/10 && helium + heliumps >= fusionReactor*10/10){
		hydrogen -= fusionReactor*10/10;
		helium -= fusionReactor*10/10;
	}
	else{
		energyInput -= fusionReactor*110;
	}
	var energyOutput = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(furnace*3)+(laserCutter*4);
	energyOutput += (moonDrill*20)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	energyOutput += (cubic*40)+(extractor*58)+(magnet*63)+(tanker*72);
	energyOutput += (deforester*20);
	energyOutput += (moonQuarry*64)+(annihilator*62);
	if(energy <= 1){
		energyps = energyInput;
	}
	if(energy >= 10 || energyps <= 0){
		energyps = energyInput-energyOutput;
		oilps = pump + (pumpjack*pumpjackOutput);
		metalps = miner + (heavyDrill*heavyDrillOutput);
		gemps = gemMiner + (advancedDrill*advancedDrillOutput);
		charcoalps = woodburner + (furnace*furnaceOutput) + (kiln*27);
		woodps = woodcutter + (laserCutter*laserCutterOutput) + (deforester*56);
		scienceps = (lab*labGain);
		spaceMetalps = moonWorker + (moonDrill * 10) + (moonQuarry*53);
		methaneps = vacuum + (suctionExcavator * 8);
		titaniumps = explorer + (spaceMetalDrill * 6);
		goldps = droid + (destroyer * 8);
		silverps = scout + (spaceLaser * 13);
		siliconps = blowtorch + (scorcher * 9) + (annihilator*40);
		uraniumps = grinder + (cubic*9);
		lavaps = crucible + (extractor*7);
		hydrogenps = collector + (magnet*5);
		heliumps = drone + (tanker*11);
	}
	if(energy <= 10){
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
	}
	document.getElementById("energyps").innerHTML = commafy(energyps*2)/2;
	document.getElementById("uraniumps").innerHTML = commafy(uraniumps - nuclearStation*7);
	document.getElementById("uranium").className = "";
	if(uranium >= uraniumStorage){
		document.getElementById("uranium").className = "green";
	}
	if(uranium === 0){
		document.getElementById("uranium").className = "red";
	}
	document.getElementById("oilps").innerHTML = commafy(oilps - chemicalPlant*20);
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
	else{
		document.getElementById("charcoal").className = "";
		document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput) - (kiln*45));
		document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine - (chemicalPlant*20));
	}
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
	if(lava >= lavaStorage){
		document.getElementById("lava").className = "green";
	}
	if(lava === 0){
		document.getElementById("lava").className = "red";
	}
	document.getElementById("hydrogenps").innerHTML = commafy(hydrogenps - fusionReactor*10);
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
}

function refreshStats(){
	document.getElementById("handMined").innerHTML = commafy(handMined);
	document.getElementById("tier1").innerHTML = commafy(tier1);
	document.getElementById("tier2").innerHTML = commafy(tier2);
	document.getElementById("tier3").innerHTML = commafy(tier3);
	document.getElementById("tier4").innerHTML = commafy(tier4);
	document.getElementById("tier5").innerHTML = commafy(tier5);
	document.getElementById("tier6").innerHTML = commafy(tier6);
}
function refreshUI(){
	document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
	document.getElementById("uranium").innerHTML = commafy(uranium);
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
	document.getElementById("lava").innerHTML = commafy(lava);
	document.getElementById("lavaStorage").innerHTML = commafy(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = commafy(lavaNextStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = commafy(lavaNextStorage/2.5);
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
	document.getElementById("explorer").innerHTML = explorer;
	document.getElementById("explorerGemCost").innerHTML = commafy(explorerGemCost);
	document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
	document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = commafy(spaceMetalDrillSpaceMetalCost);
	document.getElementById("spaceMetalDrillGemCost").innerHTML = commafy(spaceMetalDrillGemCost);
	document.getElementById("spaceMetalDrillOilCost").innerHTML = commafy(spaceMetalDrillOilCost);
	document.getElementById("droid").innerHTML = droid;
	document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
	document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
	document.getElementById("destroyer").innerHTML = destroyer;
	document.getElementById("destroyerSpaceMetalCost").innerHTML = commafy(destroyerSpaceMetalCost);
	document.getElementById("destroyerGemCost").innerHTML = commafy(destroyerGemCost);
	document.getElementById("destroyerOilCost").innerHTML = commafy(destroyerOilCost);
	document.getElementById("scout").innerHTML = scout;
	document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
	document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
	document.getElementById("spaceLaser").innerHTML = spaceLaser;
	document.getElementById("spaceLaserSpaceMetalCost").innerHTML = commafy(spaceLaserSpaceMetalCost);
	document.getElementById("spaceLaserGemCost").innerHTML = commafy(spaceLaserGemCost);
	document.getElementById("spaceLaserOilCost").innerHTML = commafy(spaceLaserOilCost);
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
	document.getElementById("crucible").innerHTML = crucible;
	document.getElementById("crucibleGemCost").innerHTML = commafy(crucibleGemCost);
	document.getElementById("crucibleSpaceMetalCost").innerHTML = commafy(crucibleSpaceMetalCost);
	document.getElementById("extractor").innerHTML = extractor;
	document.getElementById("extractorTitaniumCost").innerHTML = commafy(extractorTitaniumCost);
	document.getElementById("extractorSpaceMetalCost").innerHTML = commafy(extractorSpaceMetalCost);
	document.getElementById("extractorSiliconCost").innerHTML = commafy(extractorSiliconCost);
	document.getElementById("collector").innerHTML = commafy(collector);
	document.getElementById("collectorSpaceMetalCost").innerHTML = commafy(collectorSpaceMetalCost);
	document.getElementById("collectorTitaniumCost").innerHTML = commafy(collectorTitaniumCost);
	document.getElementById("magnet").innerHTML = commafy(magnet);
	document.getElementById("magnetSpaceMetalCost").innerHTML = commafy(magnetSpaceMetalCost);
	document.getElementById("magnetTitaniumCost").innerHTML = commafy(magnetTitaniumCost);
	document.getElementById("magnetGoldCost").innerHTML = commafy(magnetGoldCost);
	document.getElementById("drone").innerHTML = commafy(drone);
	document.getElementById("droneSpaceMetalCost").innerHTML = commafy(droneSpaceMetalCost);
	document.getElementById("droneSiliconCost").innerHTML = commafy(droneSiliconCost);
	document.getElementById("tanker").innerHTML = commafy(tanker);
	document.getElementById("tankerSpaceMetalCost").innerHTML = commafy(tankerSpaceMetalCost);
	document.getElementById("tankerTitaniumCost").innerHTML = commafy(tankerTitaniumCost);
	document.getElementById("tankerSiliconCost").innerHTML = commafy(tankerSiliconCost);

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

	turnRed(uranium, uraniumStorage, "uraniumStorageCost");

	if(spaceMetal < uraniumStorage/2.5){
		document.getElementById("uraniumStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("uraniumStorageSpaceMetalCost").className = "";
	}
	
	if(oil < oilStorage){
		document.getElementById("oilStorageCost").className = "red";
	}
	else{
		document.getElementById("oilStorageCost").className = "";
	}
	
	if(metal < oilStorage/2.5){
		document.getElementById("oilStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("oilStorageMetalCost").className = "";
	}
	
	if(metal < metalStorage){
		document.getElementById("metalStorageCost").className = "red";
	}
	else{
		document.getElementById("metalStorageCost").className = "";
	}
	
	if(gem < gemStorage){
		document.getElementById("gemStorageCost").className = "red";
	}
	else{
		document.getElementById("gemStorageCost").className = "";
	}
	
	if(metal < gemStorage/2.5){
		document.getElementById("gemStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("gemStorageMetalCost").className = "";
	}
	
	if(charcoal < charcoalStorage){
		document.getElementById("charcoalStorageCost").className = "red";
	}
	else{
		document.getElementById("charcoalStorageCost").className = "";
	}
	
	if(metal < charcoalStorage/2.5){
		document.getElementById("charcoalStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("charcoalStorageMetalCost").className = "";
	}

	if(wood < woodStorage){
		document.getElementById("woodStorageCost").className = "red";
	}
	else{
		document.getElementById("woodStorageCost").className = "";
	}

	if(metal < woodStorage/2.5){
		document.getElementById("woodStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("woodStorageMetalCost").className = "";
	}
	
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

	if(metal < charcoalEngineMetalCost){
		document.getElementById("charcoalEngineMetalCost").className = "red";
	}
	else{
		document.getElementById("charcoalEngineMetalCost").className = "";
	}
	
	if(gem < charcoalEngineGemCost){
		document.getElementById("charcoalEngineGemCost").className = "red";
	}
	else{
		document.getElementById("charcoalEngineGemCost").className = "";
	}

	if(metal < solarPanelMetalCost){
		document.getElementById("solarPanelMetalCost").className = "red";
	}
	else{
		document.getElementById("solarPanelMetalCost").className = "";
	}
	
	if(gem < solarPanelGemCost){
		document.getElementById("solarPanelGemCost").className = "red";
	}
	else{
		document.getElementById("solarPanelGemCost").className = "";
	}

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
	
	if(titanium < extractorTitaniumCost){
		document.getElementById("extractorTitaniumCost").className = "red";
	}
	else{
		document.getElementById("extractorTitaniumCost").className = "";
	}

	if(spaceMetal < extractorSpaceMetalCost){
		document.getElementById("extractorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("extractorSpaceMetalCost").className = "";
	}

	if(silicon < extractorSiliconCost){
		document.getElementById("extractorSiliconCost").className = "red";
	}
	else{
		document.getElementById("extractorSiliconCost").className = "";
	}

	turnRed(spaceMetal, collectorSpaceMetalCost, "collectorSpaceMetalCost");
	turnRed(titanium, collectorTitaniumCost, "collectorTitaniumCost");

	turnRed(spaceMetal, magnetSpaceMetalCost, "magnetSpaceMetalCost");
	turnRed(titanium, magnetTitaniumCost, "magnetTitaniumCost");
	turnRed(gold, magnetGoldCost, "magnetGoldCost");

	if(silicon < droneSiliconCost){
		document.getElementById("droneSiliconCost").className = "red";
	}
	else{
		document.getElementById("droneSiliconCost").className = "";
	}
	
	if(spaceMetal < droneSpaceMetalCost){
		document.getElementById("droneSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("droneSpaceMetalCost").className = "";
	}
	
	if(titanium < tankerTitaniumCost){
		document.getElementById("tankerTitaniumCost").className = "red";
	}
	else{
		document.getElementById("tankerTitaniumCost").className = "";
	}

	if(spaceMetal < tankerSpaceMetalCost){
		document.getElementById("tankerSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("tankerSpaceMetalCost").className = "";
	}

	if(silicon < tankerSiliconCost){
		document.getElementById("tankerSiliconCost").className = "red";
	}
	else{
		document.getElementById("tankerSiliconCost").className = "";
	}


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
	if(contains(resourcesUnlocked, "uraniumNav")){
		document.getElementById("uraniumNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "lavaNav")){
		document.getElementById("lavaNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "hydrogenNav")){
		document.getElementById("hydrogenNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "heliumNav")){
		document.getElementById("heliumNav").className = "outerPlanet";
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
		for(var i = document.getElementsByClassName("tier3 hidden").length - 1; i>0; i--){
			document.getElementsByClassName("tier3 hidden")[i].className = "tier3";
		}
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
		document.getElementById("moon").className = "";
		document.getElementById("mercury").className = "";
		document.getElementById("venus").className = "";
		document.getElementById("mars").className = "";
		document.getElementById("asteroidBelt").className = "";
 	}
 	if(contains(explored, "asteroidBelt")){
 		document.getElementById("wonderStation").className = "";
 	}
 	for(var i=0; i<buttonsHidden.length; i++){
 		document.getElementById(buttonsHidden[i]).className += " hidden";
 	}
}