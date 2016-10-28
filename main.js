var energy = 0; var energyGain = 1; var energyps = 0;
var charcoalEngine = 0; var charcoalEngineGain = 1; var solarPanel = 0; var solarPanelGain = 0.5;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilStorageCost = 50; var oilGain = 1; var oilps = 0;
var pump = 0; var pumpjack = 0;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalStorageCost = 50; var metalGain = 1; var metalps = 0;
var miner = 0; var heavyDrill = 0;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemStorageCost = 50; var gemGain = 1; var gemps = 0;
var gemMiner = 0; var advancedDrill = 0;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalStorageCost = 100; var charcoalGain = 1; var charcoalps = 0;
var woodburner = 0; var furnace = 0;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodStorageCost = 50; var woodGain = 1; var woodps = 0;
var woodcutter = 0; var laserCutter = 0;
var science = 0; var scienceps = 0;
var lab = 0; var labGain = 0.1; var labWoodCost = 10; var labGemCost = 15; var labMetalCost = 20;

function refresh(){
	document.getElementById("energy").innerHTML = energy;
	document.getElementById("oil").innerHTML = oil;
	document.getElementById("metal").innerHTML = metal;
	document.getElementById("gem").innerHTML = gem;
	document.getElementById("charcoal").innerHTML = charcoal;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("science").innerHTML = science;
}

function refreshPerSec(){
	energyps = (charcoalEngine * charcoalEngineGain) + (solarPanel * solarPanelGain);
	oilps = pump + (pumpjack * 5);
	metalps = miner + (heavyDrill * 8);
	gemps = gemMiner + (advancedDrill * 4);
	charcoalps = woodburner + (furnace * 3);
	woodps = woodcutter + (laserCutter * 6);
	scienceps = (lab * labGain);
	document.getElementById("energyps").innerHTML = energyps;
	document.getElementById("oilps").innerHTML = oilps;
	document.getElementById("metalps").innerHTML = metalps;
	document.getElementById("gemps").innerHTML = gemps;
	document.getElementById("charcoalps").innerHTML = charcoalps - charcoalEngine;
	document.getElementById("woodps").innerHTML = woodps;
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
	if(oil >= oilStorageCost){
		oil -= oilStorageCost;
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
		oilStorageCost *= 2;
		refresh();
		document.getElementById("oilStorage").innerHTML = oilStorage;
		document.getElementById("oilNextStorage").innerHTML = oilNextStorage;
		document.getElementById("oilStorageCost").innerHTML = oilStorageCost;
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
	if(gem >= gemStorageCost){
		gem -= gemStorageCost;
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
		gemStorageCost *= 2;
		refresh();
		document.getElementById("gemStorage").innerHTML = gemStorage;
		document.getElementById("gemNextStorage").innerHTML = gemNextStorage;
		document.getElementById("gemStorageCost").innerHTML = gemStorageCost;
	}
}

function upgradeWoodStorage(){
	if(wood >= woodStorageCost){
		wood -= woodStorageCost;
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
		woodStorageCost *= 2;
		refresh();
		document.getElementById("woodStorage").innerHTML = woodStorage;
		document.getElementById("woodNextStorage").innerHTML = woodNextStorage;
		document.getElementById("woodStorageCost").innerHTML = woodStorageCost;
	}
}

function getCharcoalEngine(){
	if(metal >= 50 && gem >= 25){
		metal -= 50;
		gem -= 25;
		charcoalEngine += 1;
		document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
		refresh();
		refreshPerSec();
	}
}

function getSolarPanel(){
	if(metal >= 30 && gem >= 35){
		metal -= 30;
		gem -= 35;
		solarPanel += 1;
		document.getElementById("solarPanel").innerHTML = solarPanel;
		refresh();
		refreshPerSec();
	}
}

function getPump(){
	if(metal >= 30 && gem >= 10){
		metal -= 30;
		gem -= 10;
		pump += 1;
		document.getElementById("pump").innerHTML = pump;
		refresh();
		refreshPerSec();
	}
}

function getPumpjack(){
	if(metal >= 250 && gem >= 80 && oil >= 50){
		metal -= 250;
		gem -= 80;
		oil -= 50;
		pumpjack += 1;
		document.getElementById("pumpjack").innerHTML = pumpjack;
		refresh();
		refreshPerSec();
	}
}

function getMiner(){
	if(metal >= 10 && wood >= 5){
		metal -= 10;
		wood -= 5;
		miner += 1;
		document.getElementById("miner").innerHTML = miner;
		refresh();
		refreshPerSec();
	}
}

function getHeavyDrill(){
	if(metal >= 160 && gem >= 60 && oil >= 50){
		metal -= 160;
		gem -= 60;
		oil -= 50;
		heavyDrill += 1;
		document.getElementById("heavyDrill").innerHTML = heavyDrill;
		refresh();
		refreshPerSec();
	}
}

function getGemMiner(){
	if(metal >= 15 && gem >= 10){
		metal -= 15;
		gem -= 10;
		gemMiner += 1;
		document.getElementById("gemMiner").innerHTML = gemMiner;
		refresh();
		refreshPerSec();
	}
}

function getAdvancedDrill(){
	if(metal >= 120 && gem >= 200 && oil >= 60){
		metal -= 120;
		gem -= 200;
		oil -= 60;
		advancedDrill += 1;
		document.getElementById("advancedDrill").innerHTML = advancedDrill;
		refresh();
		refreshPerSec();
	}
}

function getWoodburner(){
	if(metal >= 10 && wood >= 5){
		metal -= 10;
		wood -= 5;
		woodburner += 1;
		document.getElementById("woodburner").innerHTML = woodburner;
		refresh();
		refreshPerSec();
	}
}

function getFurnace(){
	if(metal >= 80 && wood >= 40 && oil >= 100){
		metal -= 80;
		wood -= 40;
		oil -= 100;
		furnace += 1;
		document.getElementById("furnace").innerHTML = furnace;
		refresh();
		refreshPerSec();
	}
}

function getWoodcutter(){
	if(metal >= 10 && wood >= 5){
		metal -= 10;
		wood -= 5;
		woodcutter += 1;
		document.getElementById("woodcutter").innerHTML = woodcutter;
		refresh();
		refreshPerSec();
	}
}

function getLaserCutter(){
	if(metal >= 50 && gem >= 90 && oil >= 40){
		metal -= 50;
		gem -= 90;
		oil -= 40;
		laserCutter += 1;
		document.getElementById("laserCutter").innerHTML = laserCutter;
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
	}
}

window.setInterval(function(){
	gainResources();
	refresh();
},1000);
