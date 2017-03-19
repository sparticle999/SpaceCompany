var energy = 0; var energyps = 0;
var charcoalEngine = 0; var charcoalEngineMetalCost = 50; var charcoalEngineGemCost = 25;
var solarPanel = 0; var solarPanelMetalCost = 30; var solarPanelGemCost = 35;
var methaneStation = 0; var methaneStationSpaceMetalCost = 50; var methaneStationTitaniumCost = 40;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilStorageCost = 50; var oilps = 0;
var pump = 0; var pumpMetalCost = 60; var pumpGemCost = 20; var pumpjack = 0; var pumpjackMetalCost = 250; var pumpjackGemCost = 80; var pumpjackOilCost = 50; var pumpjackOutput = 5;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalStorageCost = 50; var metalps = 0;
var miner = 0; var minerMetalCost = 10; var minerWoodCost = 5; var heavyDrill = 0; var heavyDrillMetalCost = 160; var heavyDrillGemCost = 60; var heavyDrillOilCost = 50; var heavyDrillOutput = 8;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemStorageCost = 50; var gemps = 0;
var gemMiner = 0; var gemMinerMetalCost = 15; var gemMinerGemCost = 10; var advancedDrill = 0; var advancedDrillMetalCost = 120; var advancedDrillGemCost = 200; var advancedDrillOilCost = 60; var advancedDrillOutput = 4;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalStorageCost = 50; var charcoalps = 0;
var woodburner = 0; var woodburnerMetalCost = 10; var woodburnerWoodCost = 5; var furnace = 0; var furnaceMetalCost = 80; var furnaceWoodCost = 40; var furnaceOilCost = 100; var furnaceWoodInput = 3; var furnaceOutput = 3;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodStorageCost = 50; var woodps = 0;
var woodcutter = 0; var woodcutterMetalCost = 10; var woodcutterWoodCost = 5; var laserCutter = 0; var laserCutterMetalCost = 50; var laserCutterGemCost = 90; var laserCutterOilCost = 40; var laserCutterOutput = 6;
var science = 0; var scienceps = 0;
var lab = 0; var labGain = 0.1; var labWoodCost = 10; var labGemCost = 15; var labMetalCost = 20;
var rocket = 0; var rocketFuel = 0; var rocketFuelps = 0;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500;
var spaceMetal = 0; var spaceMetalStorage = 50; var spaceMetalNextStorage = 100; var spaceMetalStorageCost = 50; var spaceMetalps = 0;
var methane = 0; var methaneStorage = 50; var methaneNextStorage = 100; var methaneStorageCost = 50; var methaneps = 0;
var titanium = 0; var titaniumStorage = 50; var titaniumNextStorage = 100; var titaniumStorageCost = 50; var titaniumps = 0;
var gold = 0; var goldStorage = 50; var goldNextStorage = 100; var goldStorageCost = 50; var goldps = 0;
var silver = 0; var silverStorage = 50; var silverNextStorage = 100; var silverStorageCost = 50; var silverps = 0;
var silicon = 0; var siliconStorage = 50; var siliconNextStorage = 100; var siliconStorageCost = 50; var siliconps = 0;
var moonWorker = 0; var moonWorkerGemCost = 500;
var moonDrill = 0; var moonDrillMetalCost = 1000; var moonDrillGemCost = 600; var moonDrillOilCost = 400;
var vacuum = 0; var vacuumSpaceMetalCost = 50; var vacuumGemCost = 500;
var suctionExcavator = 0; var suctionExcavatorSpaceMetalCost = 100; var suctionExcavatorGemCost = 800; var suctionExcavatorOilCost = 600;
var explorer = 0; var explorerGemCost = 1000;
var spaceMetalDrill = 0; var spaceMetalDrillSpaceMetalCost = 200; var spaceMetalDrillGemCost = 800; var spaceMetalDrillOilCost = 1000;
var droid = 0; var droidSpaceMetalCost = 200; var droidMethaneCost = 50;
var destroyer = 0; var destroyerSpaceMetalCost = 500; var destroyerGemCost = 1500; var destroyerOilCost = 1000;
var scout = 0; var scoutSpaceMetalCost = 100; var scoutTitaniumCost = 20;
var spaceLaser = 0; var spaceLaserSpaceMetalCost = 350; var spaceLaserGemCost = 900; var spaceLaserOilCost = 1200;
var blowtorch = 0; var blowtorchSpaceMetalCost = 150; var blowtorchTitaniumCost = 30;
var scorcher = 0; var scorcherSpaceMetalCost = 500; var scorcherGemCost = 1200; var scorcherOilCost = 1600;

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
}

function refreshPerSec(){
	var energyInput = charcoalEngine+(solarPanel*0.5)+(methaneStation*8);
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
		energyInput -= methaneStation*8;
	}
	var energyOutput = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(furnace*3)+(laserCutter*4)+(moonDrill*10)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	if(energy <= 1){
		energyps = energyInput;
	}
	if(energy >= 10 || energyps <= 0){
		energyps = energyInput-energyOutput;
		oilps = pump + (pumpjack*pumpjackOutput);
		metalps = miner + (heavyDrill*heavyDrillOutput);
		gemps = gemMiner + (advancedDrill*advancedDrillOutput);
		charcoalps = woodburner + (furnace*furnaceOutput);
		woodps = woodcutter + (laserCutter*laserCutterOutput);
		scienceps = (lab*labGain);
		spaceMetalps = moonWorker + (moonDrill * 10);
		methaneps = vacuum + (suctionExcavator * 7);
		titaniumps = explorer + (spaceMetalDrill * 6);
		goldps = droid + (destroyer * 8);
		silverps = scout + (spaceLaser * 13);
		siliconps = blowtorch + (scorcher * 9);
	}
	if(energy <= 10){
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
	}
	document.getElementById("energyps").innerHTML = commafy(energyps);
	document.getElementById("oilps").innerHTML = commafy(oilps - (chemicalPlant*20));
	if(oil >= oilStorage){
		document.getElementById("oilps").innerHTML = 0;
	}
	document.getElementById("metalps").innerHTML = commafy(metalps);
	if(metal >= metalStorage){
		document.getElementById("metalps").innerHTML = 0;
	}
	document.getElementById("gemps").innerHTML = commafy(gemps);
	if(gem >= gemStorage){
		document.getElementById("gemps").innerHTML = 0;
	}
	document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine - (chemicalPlant*20));
	if(charcoal >= charcoalStorage){
		document.getElementById("woodps").innerHTML = commafy(woodps);
		document.getElementById("charcoalps").innerHTML = 0;
	}
	else{
		document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput));
	}
	document.getElementById("spaceMetalps").innerHTML = commafy(spaceMetalps);
	if(spaceMetal >= spaceMetalStorage){
		document.getElementById("spaceMetalps").innerHTML = 0;
	}
	document.getElementById("methaneps").innerHTML = commafy(methaneps - methaneStation*6);
	if(methane >= methaneStorage){
		document.getElementById("methaneps").innerHTML = 0;
	}
	document.getElementById("titaniumps").innerHTML = commafy(titaniumps);
	if(titanium >= titaniumStorage){
		document.getElementById("titaniumps").innerHTML = 0;
	}
	document.getElementById("goldps").innerHTML = commafy(goldps);
	if(gold >= goldStorage){
		document.getElementById("goldps").innerHTML = 0;
	}
	document.getElementById("silverps").innerHTML = commafy(silverps);
	if(silver >= silverStorage){
		document.getElementById("silverps").innerHTML = 0;
	}
	document.getElementById("siliconps").innerHTML = commafy(siliconps);
	if(silicon >= siliconStorage){
		document.getElementById("siliconps").innerHTML = 0;
	}
}

function gainResources(){
	energy += energyps/10;
	if(oil + oilps/10 < oilStorage){
		oil += oilps/10;
	}
	else{
		oil = oilStorage;
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
	if(charcoal + charcoalps/10 < charcoalStorage && wood + woodps/10 >= (charcoalps*2/10)){
		charcoal += charcoalps/10;
		wood -= (charcoalps*2)/10;
	}
	else{
		var difference = charcoalStorage - charcoal;
		if(wood >= difference*2/10){
			charcoal += difference/10;
			wood -= difference*2/10;
		}	
	}
	if(wood + woodps/10 < woodStorage){
		wood += woodps/10;
	}
	else{
		wood = woodStorage;
	}
	science += scienceps/10;
	science = Math.round(science*100)/100;
	if(oil >= chemicalPlant*20/10 && charcoal >= chemicalPlant*20/10){
		oil -= chemicalPlant*20/10;
		charcoal -= chemicalPlant*20/10
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
}

// Gain Buttons

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
		refresh();
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += 1;
		refresh();
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += 1;
		refresh();
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= 2){
		wood -= 2;
		charcoal += 1;
		refresh();
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += 1;
		refresh();
	}
}

function gainSpaceMetal(){
	if(spaceMetal < spaceMetalStorage){
		spaceMetal += 1;
		refresh();
	}
}

function gainMethane(){
	if(methane < methaneStorage){
		methane += 1;
		refresh();
	}
}

function gainTitanium(){
	if(titanium < titaniumStorage){
		titanium += 1;
		refresh();
	}
}

function gainGold(){
	if(gold < goldStorage){
		gold += 1;
		refresh();
	}
}

function gainSilver(){
	if(silver < silverStorage){
		silver += 1;
		refresh();
	}
}

function gainSilicon(){
	if(silicon < siliconStorage){
		silicon += 1;
		refresh();
	}
}

// Resources Tab

function upgradeOilStorage(){
	if(oil >= oilStorageCost && metal >= oilStorageCost/2.5){
		oil -= oilStorageCost;
		metal -= oilStorageCost/2.5;
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
		oilStorageCost *= 2;
		refresh();
		document.getElementById("oilStorage").innerHTML = commafy(oilStorage);
		document.getElementById("oilNextStorage").innerHTML = commafy(oilNextStorage);
		document.getElementById("oilStorageCost").innerHTML = commafy(oilStorageCost);
		document.getElementById("oilStorageMetalCost").innerHTML = commafy(oilStorageCost/2.5);
	}
}

function upgradeMetalStorage(){
	if(metal >= metalStorageCost){
		metal -= metalStorageCost;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
		metalStorageCost *= 2;
		refresh();
		document.getElementById("metalStorage").innerHTML = commafy(metalStorage);
		document.getElementById("metalNextStorage").innerHTML = commafy(metalNextStorage);
		document.getElementById("metalStorageCost").innerHTML = commafy(metalStorageCost);
	}
}

function upgradeGemStorage(){
	if(gem >= gemStorageCost && metal >= gemStorageCost/2.5){
		gem -= gemStorageCost;
		metal -= gemStorageCost/2.5;
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
		gemStorageCost *= 2;
		refresh();
		document.getElementById("gemStorage").innerHTML = commafy(gemStorage);
		document.getElementById("gemNextStorage").innerHTML = commafy(gemNextStorage);
		document.getElementById("gemStorageCost").innerHTML = commafy(gemStorageCost);
		document.getElementById("gemStorageMetalCost").innerHTML = commafy(gemStorageCost/2.5);
	}
}

function upgradeCharcoalStorage(){
	if(charcoal >= charcoalStorageCost && metal >= charcoalStorageCost/2.5){
		charcoal -= charcoalStorageCost;
		metal -= charcoalStorageCost/2.5;
		charcoalStorage = charcoalNextStorage;
		charcoalNextStorage *= 2;
		charcoalStorageCost *= 2;
		refresh();
		document.getElementById("charcoalStorage").innerHTML = commafy(charcoalStorage);
		document.getElementById("charcoalNextStorage").innerHTML = commafy(charcoalNextStorage);
		document.getElementById("charcoalStorageCost").innerHTML = commafy(charcoalStorageCost);
		document.getElementById("charcoalStorageMetalCost").innerHTML = commafy(charcoalStorageCost/2.5);
	}
}

function upgradeWoodStorage(){
	if(wood >= woodStorageCost && metal >= woodStorageCost/2.5){
		wood -= woodStorageCost;
		metal -= woodStorageCost/2.5;
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
		woodStorageCost *= 2;
		refresh();
		document.getElementById("woodStorage").innerHTML = commafy(woodStorage);
		document.getElementById("woodNextStorage").innerHTML = commafy(woodNextStorage);
		document.getElementById("woodStorageCost").innerHTML = commafy(woodStorageCost);
		document.getElementById("woodStorageMetalCost").innerHTML = commafy(woodStorageCost/2.5);
	}
}

function getCharcoalEngine(){
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		charcoalEngineMetalCost = Math.floor(60 * Math.pow(1.1,charcoalEngine + 1));
		charcoalEngineGemCost = Math.floor(20 * Math.pow(1.1,charcoalEngine + 1));
		document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
		document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
		document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
		refresh();
		refreshPerSec();
	}
}

function getSolarPanel(){
	if(metal >= solarPanelMetalCost && gem >= solarPanelGemCost){
		metal -= solarPanelMetalCost;
		gem -= solarPanelGemCost;
		solarPanel += 1;
		solarPanelMetalCost = Math.floor(60 * Math.pow(1.1,solarPanel + 1));
		solarPanelGemCost = Math.floor(20 * Math.pow(1.1,solarPanel + 1));
		document.getElementById("solarPanel").innerHTML = solarPanel;
		document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
		document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
		refresh();
		refreshPerSec();
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
		if(miner === 1){
			document.getElementById("researchTab").className = "";
			document.getElementById("dropdownMenu").className = "dropdown";
		}
		refresh();
		refreshPerSec();
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
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= GemCost;
		moonWorker += 1;
		GemCost = Math.floor(500 * Math.pow(1.1,XXXX + 1));
		document.getElementById("moonWorker").innerHTML = moonWorker;
		document.getElementById("GemCost").innerHTML = commafy(GemCost);
		refresh();
		refreshPerSec();
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
		document.getElementById("vacuumMetalCost").innerHTML = commafy(vacuumMetalCost);
		document.getElementById("vacuumGemCost").innerHTML = commafy(vacuumGemCost);
		refresh();
		refreshPerSec();
	}
}

function getSuctionExcavator(){
	if(spaceMetal >= suctionExcavatorSpaceMetalCost && gem >= suctionExcavatorGemCost && oil >= suctionExcavatorOilCost){
		spaceMetal -= suctionExcavatorSpaceMetalCost;
		gem -= suctionExcavatorGemCost;
		oil -= suctionExcavatorOilCost;
		XXXX += 1;
		OilCost = Math.floor(600 * Math.pow(1.1,suctionExcavator + 1));
		GemCost = Math.floor(800 * Math.pow(1.1,suctionExcavator + 1));
		spaceMetalCost = Math.floor(100 * Math.pow(1.1,suctionExcavator + 1));
		document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
		document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
		document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
		document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
		refresh();
		refreshPerSec();
	}
}

function getExplorer(){
	if(gem >= explorerGemCost){
		gem -= explorerGemCost;
		explorer += 1;
		explorerGemCost = Math.floor(1000 * Math.pow(1.1,explorer + 1));
		document.getElementById("explorer").innerHTML = explorer;
		document.getElementById("GemCost").innerHTML = commafy(GemCost);
		refresh();
		refreshPerSec();
	}
}

function getSpaceMetalDrill(){
	if(spaceMetal >= spaceMetalDrillSpaceMetalCost && gem >= GemCost && oil >= OilCost){
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
	}
}

function getDroid(){
	if(spaceMetal >= droidSpaceMetalCost && methane >= droidMethaneCost){
		spaceMetal -= droidSpaceMetalCost;
		methane -= MethaneCost;
		droid += 1;
		droidMethaneCost = Math.floor(50 * Math.pow(1.1,droid + 1));
		droidSpaceMetalCost = Math.floor(200 * Math.pow(1.1,droid + 1));
		document.getElementById("droid").innerHTML = droid;
		document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
		document.getElementById("droidMethaneCost").innerHTML = commafy(droidGemCost);
		refresh();
		refreshPerSec();
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
	}
}

function getScout(){
	if(spaceMetal >= scoutSpaceMetalCost && titanium >= scoutTitaniumCost){
		spaceMetal -= scoutSpaceMetalCost;
		titanium -= scoutTitaniumCost;
		scout += 1;
		scoutTitaniumCost = Math.floor(20 * Math.pow(1.1,scout + 1));
		SpaceMetalCost = Math.floor(100 * Math.pow(1.1,scout + 1));
		document.getElementById("scout").innerHTML = scout;
		document.getElementById("SpaceMetalCost").innerHTML = commafy(SpaceMetalCost);
		document.getElementById("GemCost").innerHTML = commafy(GemCost);
		document.getElementById("OilCost").innerHTML = commafy(OilCost);
		refresh();
		refreshPerSec();
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
	}
}


// Research Tab

function buildLab(){
	if(wood >= labWoodCost && gem >= labGemCost && metal >= labMetalCost){
		wood -= labWoodCost;
		gem -= labGemCost;
		metal -= labMetalCost;
		lab += 1;
		labWoodCost = Math.floor(10 * Math.pow(1.1,lab + 1));
		labGemCost = Math.floor(15 * Math.pow(1.1,lab + 1));
		labMetalCost = Math.floor(20 * Math.pow(1.1,lab + 1));
		document.getElementById("lab").innerHTML = lab;
		document.getElementById("labWoodCost").innerHTML = commafy(labWoodCost);
		document.getElementById("labGemCost").innerHTML = commafy(labGemCost);
		document.getElementById("labMetalCost").innerHTML = commafy(labMetalCost);
		refresh();
		refreshPerSec();
	}
}


function unlockStorage(){
	if(science >= 5){
		science -= 5;
		document.getElementById("unlockStorage").className = "hidden";
		document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("charcoalStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
		document.getElementById("unlockOil").className = "";
	}
}

function unlockBasicEnergy(){
	if(science >= 20){
		science -= 20;
		document.getElementById("charcoalNav").className = "";
		document.getElementById("energyNav").className = "";
		document.getElementById("metalNav0").style.border = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		document.getElementById("oilNav0").style.border = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
		document.getElementById("oilNav3").style.border = "";
		document.getElementById("unlockBasicEnergy").className = "hidden";
		document.getElementById("unlockSolar").className = "";
		document.getElementById("unlockMachines").className = "";
	}
}

function unlockOil(){
	if(science >= 30){
		science -= 30;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav0").style.border = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		refresh();
	}
}

function unlockSolar(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockSolar").className = "hidden";
		document.getElementById("solarPower").className = "";
	}
}

function unlockMachines(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockMachines").className = "hidden";
		document.getElementById("upgradeResourceTech").className = "";
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
		document.getElementById("unlockSpace").className = "";
	}
}

function upgradeResourceTech(){
	if(science >= 200){
		science -= 200;
		pumpjackOutput *= 2;
		heavyDrillOutput *= 2;
		advancedDrillOutput *= 2;
		furnaceWoodInput *= 2;
		furnaceOutput *= 2;
		laserCutterOutput *= 2;
		document.getElementById("unlockResourceTech").className = "hidden";
		document.getElementById("pumpjackOutput").innerHTML = pumpjackOutput;
		document.getElementById("heavyDrillOutput").innerHTML = heavyDrillOutput;
		document.getElementById("advancedDrillOutput").innerHTML = advancedDrillOutput;
		document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
		document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
		document.getElementById("laserCutterOutput").innerHTML = laserCutterOutput;
	}
}

function unlockSpace(){
	if(science >= 500){
		science -= 500;
		document.getElementById("unlockSpace").className = "hidden";
		document.getElementById("spaceTab").className = "";
	}
}

// Space Tab

function getChemicalPlant(){
	if(metal >= chemicalPlantMetalCost && gem >= chemicalPlantGemCost && oil >= chemicalPlantOilCost){
		metal -= chemicalPlantMetalCost;
		gem -= chemicalPlantGemCost;
		oil -= chemicalPlantOilCost;
		chemicalPlant += 1;
		chemicalPlantOilCost = Math.floor(500 * Math.pow(1.1,chemicalPlant + 1));
		chemicalPlantGemCost = Math.floor(750 * Math.pow(1.1,chemicalPlant + 1));
		chemicalPlantMetalCost = Math.floor(1000 * Math.pow(1.1,chemicalPlant + 1));
		document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
		document.getElementById("chemicalPlantMetalCost").innerHTML = commafy(chemicalPlantMetalCost);
		document.getElementById("chemicalPlantGemCost").innerHTML = commafy(chemicalPlantGemCost);
		document.getElementById("chemicalPlantOilCost").innerHTML = commafy(chemicalPlantOilCost);
		refresh();
		refreshPerSec();
	}
}

function getRocket(){
	if(metal >= 1200 && gem >= 900 && oil >= 1000){
		metal -= 1200;
		gem -= 900;
		oil -= 1000;
		rocket = 1;
		document.getElementById("rocket").innerHTML = rocket;
		refresh();
	}
}

function launchRocket(){
	if(rocket >= 1 && rocketFuel >= 20){
		rocketFuel -= 20;
		rocket -= 1;
		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("moon").className = "";
		document.getElementById("venus").className = "";
		document.getElementById("mars").className = "";
		document.getElementById("asteroidBelt").className = "";
	}
}

function exploreMoon(){
	if(rocketFuel >= 20){
		rocketFuel -=20;
		document.getElementById("exploreMoon").className = "hidden";
		document.getElementById("spaceMetalNav").className = "";
	}
}

function exploreVenus(){
	if(rocketFuel >= 50){
		rocketFuel -=50;
		document.getElementById("exploreVenus").className = "hidden";
		document.getElementById("methaneNav").className = "";
	}
}

function exploreMars(){
	if(rocketFuel >= 80){
		rocketFuel -=80;
		document.getElementById("exploreMars").className = "hidden";
		document.getElementById("titaniumNav").className = "";
		document.getElementById("siliconNav").className = "";
		document.getElementById("methanePower").className = "";
	}
}

function exploreAsteroidBelt(){
	if(rocketFuel >= 200){
		rocketFuel -=200;
		document.getElementById("exploreAsteroidBelt").className = "hidden";
		document.getElementById("goldNav").className = "";
		document.getElementById("silverNav").className = "";

	}
}

//Timer
var timer = 0;

window.setInterval(function(){
	refreshPerSec();
	gainResources();
	refresh();
},100);