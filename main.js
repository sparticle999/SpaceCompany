var energy = 0; var energyGain = 1; var energyps = 0;
var charcoalEngine = 0; var charcoalEngineMetalCost = 50; var charcoalEngineGemCost = 25; var solarPanel = 0; var solarPanelMetalCost = 30; var solarPanelGemCost = 35;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilStorageCost = 50; var oilGain = 1; var oilps = 0;
var pump = 0; var pumpMetalCost = 60; var pumpGemCost = 20; var pumpjack = 0; var pumpjackMetalCost = 250; var pumpjackGemCost = 80; var pumpjackOilCost = 50;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalStorageCost = 50; var metalGain = 1; var metalps = 0;
var miner = 0; var minerMetalCost = 10; var minerWoodCost = 5; var heavyDrill = 0; var heavyDrillMetalCost = 160; var heavyDrillGemCost = 60; var heavyDrillOilCost = 50;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemStorageCost = 50; var gemGain = 1; var gemps = 0;
var gemMiner = 0; var gemMinerMetalCost = 15; var gemMinerGemCost = 10; var advancedDrill = 0; var advancedDrillMetalCost = 120; var advancedDrillGemCost = 200; var advancedDrillOilCost = 60;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalStorageCost = 50; var charcoalGain = 1; var charcoalps = 0;
var woodburner = 0; var woodburnerMetalCost = 10; var woodburnerWoodCost = 5; var furnace = 0; var furnaceMetalCost = 80; var furnaceWoodCost = 40; var furnaceOilCost = 100;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodStorageCost = 50; var woodGain = 1; var woodps = 0;
var woodcutter = 0; var woodcutterMetalCost = 10; var woodcutterWoodCost = 5; var laserCutter = 0; var laserCutterMetalCost = 50; var laserCutterGemCost = 90; var laserCutterOilCost = 40;
var science = 0; var scienceps = 0;
var lab = 0; var labGain = 0.1; var labWoodCost = 10; var labGemCost = 15; var labMetalCost = 20;
var rocketFuel = 0;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500;

function refresh(){
	document.getElementById("energy").innerHTML = energy;
	document.getElementById("oil").innerHTML = oil;
	document.getElementById("metal").innerHTML = metal;
	document.getElementById("gem").innerHTML = gem;
	document.getElementById("charcoal").innerHTML = charcoal;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("science").innerHTML = science;
	document.getElementById("rocketFuel").innerHTML = rocketFuel;
}

function refreshPerSec(){
	energyps = charcoalEngine+(solarPanel*0.5)-(pumpjack*4)-(heavyDrill*2)-(advancedDrill*2)-(furnace*3)-(laserCutter*4);
	oilps = pump + (pumpjack*5);
	metalps = miner + (heavyDrill*8);
	gemps = gemMiner + (advancedDrill*4);
	charcoalps = woodburner + (furnace*3);
	woodps = woodcutter + (laserCutter*6);
	scienceps = (lab*labGain);
	document.getElementById("energyps").innerHTML = energyps;
	document.getElementById("oilps").innerHTML = oilps;
	document.getElementById("metalps").innerHTML = metalps;
	document.getElementById("gemps").innerHTML = gemps;
	document.getElementById("charcoalps").innerHTML = charcoalps - charcoalEngine;
	if(charcoal >= charcoalStorage){
		document.getElementById("woodps").innerHTML = woodps;
	}
	else{
		document.getElementById("woodps").innerHTML = woodps - (woodburner*2) - furnace;
	}
}

function gainResources(){
	if(charcoal + charcoalps >= charcoalEngine){
		energy += energyps;
		charcoal -= charcoalEngine;
	}
	else{
		energy += solarPanel * solarPanelGain;
	}
	if(oil + oilps < oilStorage){
		oil += oilps;
	}
	else{
		oil = oilStorage;
	}
	if(metal + metalps < metalStorage){
		metal += metalps;
	}
	else{
		metal = metalStorage;
	}
	if(gem + gemps < gemStorage){
		gem += gemps;
	}
	else{
		gem = gemStorage;
	}
	if(charcoal + charcoalps < charcoalStorage && wood + woodps >= charcoalps*2){
		charcoal += charcoalps;
		wood -= (charcoalps*2);
	}
	else{
		var difference = charcoalStorage - charcoal;
		if(wood >= difference*2){
			charcoal += difference;
			wood -= difference*2;
		}	
	}
	if(wood + woodps < woodStorage){
		wood += woodps;
	}
	else{
		wood = woodStorage;
	}
	science += scienceps;
	science = Math.round(science*10)/10;
}

// Gain Buttons

function gainOil(){
	if(oil < oilStorage){
		oil += oilGain;
		refresh();
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += metalGain;
		refresh();
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += gemGain;
		refresh();
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= charcoalGain*2){
		wood -= (charcoalGain*2);
		charcoal += charcoalGain;
		refresh();
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += woodGain;
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
		document.getElementById("oilStorage").innerHTML = oilStorage;
		document.getElementById("oilNextStorage").innerHTML = oilNextStorage;
		document.getElementById("oilStorageCost").innerHTML = oilStorageCost;
		document.getElementById("oilStorageMetalCost").innerHTML = oilStorageCost/2.5;
	}
}

function upgradeMetalStorage(){
	if(metal >= metalStorageCost){
		metal -= metalStorageCost;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
		metalStorageCost *= 2;
		refresh();
		document.getElementById("metalStorage").innerHTML = metalStorage;
		document.getElementById("metalNextStorage").innerHTML = metalNextStorage;
		document.getElementById("metalStorageCost").innerHTML = metalStorageCost;
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
		document.getElementById("gemStorage").innerHTML = gemStorage;
		document.getElementById("gemNextStorage").innerHTML = gemNextStorage;
		document.getElementById("gemStorageCost").innerHTML = gemStorageCost;
		document.getElementById("gemStorageMetalCost").innerHTML = oilStorageCost/2.5;
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
		document.getElementById("charcoalStorage").innerHTML = charcoalStorage;
		document.getElementById("charcoalNextStorage").innerHTML = charcoalNextStorage;
		document.getElementById("charcoalStorageCost").innerHTML = charcoalStorageCost;
		document.getElementById("charcoalStorageMetalCost").innerHTML = oilStorageCost/2.5;
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
		document.getElementById("woodStorage").innerHTML = woodStorage;
		document.getElementById("woodNextStorage").innerHTML = woodNextStorage;
		document.getElementById("woodStorageCost").innerHTML = woodStorageCost;
		document.getElementById("woodStorageMetalCost").innerHTML = oilStorageCost/2.5;
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
		document.getElementById("charcoalEngineMetalCost").innerHTML = charcoalEngineMetalCost;
		document.getElementById("charcoalEngineGemCost").innerHTML = charcoalEngineGemCost;
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
		document.getElementById("solarPanelMetalCost").innerHTML = solarPanelMetalCost;
		document.getElementById("solarPanelGemCost").innerHTML = solarPanelGemCost;
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
		document.getElementById("pumpMetalCost").innerHTML = pumpMetalCost;
		document.getElementById("pumpGemCost").innerHTML = pumpGemCost;
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
		document.getElementById("pumpjackOilCost").innerHTML = pumpjackOilCost;
		document.getElementById("pumpjackGemCost").innerHTML = pumpjackGemCost;
		document.getElementById("pumpjackMetalCost").innerHTML = pumpjackMetalCost;
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
		document.getElementById("minerMetalCost").innerHTML = minerMetalCost;
		document.getElementById("minerWoodCost").innerHTML = minerWoodCost;
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
		document.getElementById("heavyDrillMetalCost").innerHTML = heavyDrillMetalCost;
		document.getElementById("heavyDrillGemCost").innerHTML = heavyDrillGemCost;
		document.getElementById("heavyDrillOilCost").innerHTML = heavyDrillOilCost;
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
		document.getElementById("gemMinerMetalCost").innerHTML = gemMinerMetalCost;
		document.getElementById("gemMinerGemCost").innerHTML = gemMinerGemCost;
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
		document.getElementById("advancedDrillMetalCost").innerHTML = advancedDrillMetalCost;
		document.getElementById("advancedDrillGemCost").innerHTML = advancedDrillGemCost;
		document.getElementById("advancedDrillOilCost").innerHTML = advancedDrillOilCost;
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
		document.getElementById("woodburnerMetalCost").innerHTML = woodburnerMetalCost;
		document.getElementById("woodburnerWoodCost").innerHTML = woodburnerWoodCost;
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
		document.getElementById("furnaceMetalCost").innerHTML = furnaceMetalCost;
		document.getElementById("furnaceWoodCost").innerHTML = furnaceWoodCost;
		document.getElementById("furnaceOilCost").innerHTML = furnaceOilCost;
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
		document.getElementById("woodcutterMetalCost").innerHTML = woodcutterMetalCost;
		document.getElementById("woodcutterWoodCost").innerHTML = woodcutterWoodCost;
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
		document.getElementById("laserCutterMetalCost").innerHTML = laserCutterMetalCost;
		document.getElementById("laserCutterGemCost").innerHTML = laserCutterGemCost;
		document.getElementById("laserCutterOilCost").innerHTML = laserCutterOilCost;
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
		document.getElementById("labWoodCost").innerHTML = labWoodCost;
		document.getElementById("labGemCost").innerHTML = labGemCost;
		document.getElementById("labMetalCost").innerHTML = labMetalCost;
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
	}
}

function unlockBasicEnergy(){
	if(science >= 10){
		science -= 10;
		document.getElementById("charcoalNav").className = "";
		document.getElementById("energyNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
		document.getElementById("oilNav3").style.border = "";
		document.getElementById("unlockBasicEnergy").className = "hidden";
		document.getElementById("unlockOil").className = "";
		document.getElementById("unlockSolar").className = "";
	}
}

function unlockOil(){
	if(science >= 15){
		science -= 15;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		refresh();
	}
}

function unlockSolar(){
	if(science >= 15){
		science -= 15;
		document.getElementById("unlockSolar").className = "hidden";
		document.getElementById("solarPower").className = "";
		document.getElementById("unlockMachines").className = "";
	}
}

function unlockMachines(){
	if(science >= 20){
		science -= 20;
		document.getElementById("unlockMachines").className = "hidden";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("woodMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("oilMachine1").className = "";
		document.getElementById("unlockSpace").className = "";
	}
}

function unlockSpace(){
	if(science >= 100){
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
		chemicalPlantOilCost = Math.floor(40 * Math.pow(1.1,chemicalPlant + 1));
		chemicalPlantGemCost = Math.floor(90 * Math.pow(1.1,chemicalPlant + 1));
		chemicalPlantMetalCost = Math.floor(50 * Math.pow(1.1,chemicalPlant + 1));
		document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
		document.getElementById("chemicalPlantrMetalCost").innerHTML = chemicalPlantMetalCost;
		document.getElementById("chemicalPlantGemCost").innerHTML = chemicalPlantGemCost;
		document.getElementById("chemicalPlantOilCost").innerHTML = chemicalPlantOilCost;
		refresh();
		refreshPerSec();
	}
}

//Timer

window.setInterval(function(){
	gainResources();
	refresh();
	var timer = 0;
	if(timer === 5){
		timer = 0;
		refreshPerSec();
	}
	else{
		timer += 1;
	}
},1000);
