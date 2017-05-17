// Research Tab

function getLab(){
	if(wood >= labWoodCost && gem >= labGemCost && metal >= labMetalCost){
		wood -= labWoodCost;
		gem -= labGemCost;
		metal -= labMetalCost;
		lab += 1;
		labWoodCost = Math.floor(10 * Math.pow(1.1,lab));
		labGemCost = Math.floor(15 * Math.pow(1.1,lab));
		labMetalCost = Math.floor(20 * Math.pow(1.1,lab));
		document.getElementById("lab").innerHTML = lab;
		document.getElementById("labWoodCost").innerHTML = commafy(labWoodCost);
		document.getElementById("labGemCost").innerHTML = commafy(labGemCost);
		document.getElementById("labMetalCost").innerHTML = commafy(labMetalCost);
		refresh();
		refreshPerSec();
	}
}

function getLabT2(){
	if(wood >= labT2WoodCost && gem >= labT2GemCost && metal >= labT2MetalCost){
		wood -= labT2WoodCost;
		gem -= labT2GemCost;
		metal -= labT2MetalCost;
		labT2 += 1;
		labT2WoodCost = Math.floor(500 * Math.pow(1.1,labT2));
		labT2GemCost = Math.floor(200 * Math.pow(1.1,labT2));
		labT2MetalCost = Math.floor(1000 * Math.pow(1.1,labT2));
		document.getElementById("labT2").innerHTML = labT2;
		document.getElementById("labT2WoodCost").innerHTML = commafy(labT2WoodCost);
		document.getElementById("labT2GemCost").innerHTML = commafy(labT2GemCost);
		document.getElementById("labT2MetalCost").innerHTML = commafy(labT2MetalCost);
		refresh();
		refreshPerSec();
	}
}

function getLabT3(){
	if(wood >= labT3WoodCost && gem >= labT3GemCost && metal >= labT3MetalCost){
		wood -= labT3WoodCost;
		gem -= labT3GemCost;
		metal -= labT3MetalCost;
		labT3 += 1;
		labT3WoodCost = Math.floor(9600 * Math.pow(1.1,labT3));
		labT3GemCost = Math.floor(4700 * Math.pow(1.1,labT3));
		labT3MetalCost = Math.floor(17000 * Math.pow(1.1,labT3));
		document.getElementById("labT3").innerHTML = labT3;
		document.getElementById("labT3WoodCost").innerHTML = commafy(labT3WoodCost);
		document.getElementById("labT3GemCost").innerHTML = commafy(labT3GemCost);
		document.getElementById("labT3MetalCost").innerHTML = commafy(labT3MetalCost);
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
		available.push("unlockOil");
		researched.push("unlockStorage");
		Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockBasicEnergy(){
	if(science >= 20){
		science -= 20;
		document.getElementById("charcoalNav").className = "earth";
		document.getElementById("energyNav").className = "";
		document.getElementById("collapseEarth").style.border = "";
		document.getElementById("unlockBasicEnergy").className = "hidden";
		document.getElementById("unlockSolar").className = "";
		document.getElementById("unlockMachines").className = "";
		document.getElementById("upgradeEngineTech").className = "";
		resourcesUnlocked.push("energyNav", "charcoalNav");
		available.push("unlockSolar", "unlockMachines", "upgradeEngineTech");
		researched.push("unlockBasicEnergy");
        Game.statistics.add('techResearched');
		Game.statistics.add('resourcesUnlocked', 2);
		refreshResources();
		newUnlock("resources");
	}
}

function unlockOil(){
	if(science >= 30){
		science -= 30;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "earth";
		refresh();
		resourcesUnlocked.push("oilNav");
		researched.push("unlockOil");
        Game.statistics.add('techResearched');
        Game.statistics.add('resourcesUnlocked');
		refreshResources();
		newUnlock("resources");
	}
}

function unlockSolar(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockSolar").className = "hidden";
		document.getElementById("solarPower").className = "";
		document.getElementById("upgradeSolarTech").className = "";
		available.push("upgradeSolarTech");
		researched.push("unlockSolar");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockMachines(){
	if(science >= 100){
		science -= 100;
		document.getElementById("unlockMachines").className = "hidden";
		document.getElementById("upgradeResourceTech").className = "";
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
		document.getElementById("unlockSolarSystem").className = "";
		document.getElementById("unlockDestruction").className = "";
		available.push("unlockSolarSystem", "upgradeResourceTech", "unlockDestruction");
		researched.push("unlockMachines");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function upgradeResourceTech(){
	if(science >= 300){
		science -= 300;
		pumpjackOutput *= 2;
		heavyDrillOutput *= 2;
		advancedDrillOutput *= 2;
		furnaceWoodInput *= 2;
		furnaceOutput *= 2;
		laserCutterOutput *= 2;
		document.getElementById("upgradeResourceTech").className = "hidden";
		document.getElementById("pumpjackOutput").innerHTML = pumpjackOutput;
		document.getElementById("heavyDrillOutput").innerHTML = heavyDrillOutput;
		document.getElementById("advancedDrillOutput").innerHTML = advancedDrillOutput;
		document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
		document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
		document.getElementById("laserCutterOutput").innerHTML = laserCutterOutput;
		researched.push("upgradeResourceTech");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockDestruction(){
	if(science >= 500){
		science -= 500;
		destructionUnlocked = true;
		document.getElementById("unlockDestruction").className = "hidden";
		for(var i = 0; i < document.getElementsByClassName("destroy").length; i++){
			document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
		}
		researched.push("unlockDestruction");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockSolarSystem(){
	if(science >= 500){
		science -= 500;
		document.getElementById("unlockSolarSystem").className = "hidden";
		document.getElementById("solarSystemTab").className = "";
		document.getElementById("unlockLabT2").className = "";
		Game.statistics.add('tabsUnlocked');
		tabsUnlocked.push("solarSystemTab");
		available.push("unlockLabT2");
		researched.push("unlockSolarSystem");
        Game.statistics.add('techResearched');
		newUnlock("solarSystem");
		Game.notifySuccess("New Tab!", "You've unlocked the Solar System Tab!");
	}
}

function unlockLabT2(){
	if(science >= 500){
		science -= 500;
		document.getElementById("unlockLabT2").className = "hidden";
		document.getElementById("unlockLabT3").className = "";
		document.getElementById("labTier2").className = "";
		available.push("unlockLabT3");
		researched.push("unlockLabT2");
        Game.statistics.add('techResearched');
	}
}

function upgradeEngineTech(){
	if(science >= 1000){
		science -= 1000;
		document.getElementById("upgradeEngineTech").className = "hidden";
		charcoalEngineOutput = 4;
		document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
		researched.push("upgradeEngineTech");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockLabT3(){
	if(science >= 3000){
		science -= 3000;
		document.getElementById("unlockLabT3").className = "hidden";
		document.getElementById("labTier3").className = "";
		researched.push("unlockLabT3");
        Game.statistics.add('techResearched');
	}
}

function upgradeSolarTech(){
	if(science >= 5000){
		science -= 5000;
		document.getElementById("upgradeSolarTech").className = "hidden";
		document.getElementById("unlockBatteries").className = "";
		solarPanelOutput = 3;
		document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
		available.push("unlockBatteries");
		researched.push("upgradeSolarTech");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockBatteries(){
	if(science >= 15000){
		science -= 15000;
		document.getElementById("unlockBatteries").className = "hidden";
		document.getElementById("unlockBatteriesT2").className = "";
		document.getElementById("batteries").className = "";
		document.getElementById("energyStorageBox").className = "";
		available.push("unlockBatteriesT2");
		researched.push("unlockBatteries");
		resourcesUnlocked.push("batteries", "energyStorageBox");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockBatteriesT2(){
	if(science >= 300000){
		science -= 300000;
		document.getElementById("unlockBatteriesT2").className = "hidden";
		document.getElementById("batteriesT2").className = "";
		researched.push("unlockBatteriesT2");
		resourcesUnlocked.push("batteriesT2");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockPlasma(){
	if(science >= 40000){
		science -= 40000;
		document.getElementById("unlockPlasma").className = "hidden";
		document.getElementById("unlockPlasmaTier2").className = "";
		document.getElementById("plasmaNav").className = "";
		for(var i = 0; i < 4; i++){
			document.getElementById("energyNav" + [i]).style.border = "";
		}
		available.push("unlockPlasmaTier2");
		researched.push("unlockPlasma");
        Game.statistics.add('techResearched');
		noBorder.push("energyNav");
		resourcesUnlocked.push("plasmaNav");
		newUnlock("resources");
	}
}

function unlockPlasmaTier2(){
	if(science >= 60000){
		science -= 60000;
		document.getElementById("unlockPlasmaTier2").className = "hidden";
		document.getElementById("plasmaTier2").className = "";
		researched.push("unlockPlasmaTier2");
        Game.statistics.add('techResearched');
		resourcesUnlocked.push("plasmaTier2");
		newUnlock("resources");
	}
}

function unlockEmc(){
	if(science >= 60000){
		science -= 60000;
		document.getElementById("unlockEmc").className = "hidden";
		document.getElementById("emcPage").className = "";
		document.getElementById("unlockMeteorite").className = "";
		available.push("unlockMeteorite");
		researched.push("unlockEmc");
        Game.statistics.add('techResearched');
		resourcesUnlocked.push("emcPage");
		newUnlock("solCenter");
	}
}

function unlockMeteorite(){
	if(science >= 100000){
		science -= 100000;
		document.getElementById("unlockMeteorite").className = "hidden";
		document.getElementById("unlockMeteoriteTier1").className = "";
		document.getElementById("meteoriteEMC").className = "";
		document.getElementById("meteoriteNav").className = "outerPlanet";
		available.push("unlockMeteoriteTier1");
		researched.push("unlockMeteorite");
        Game.statistics.add('techResearched');
        Game.statistics.add('resourcesUnlocked');
		resourcesUnlocked.push("meteoriteNav", "meteoriteEMC");
		newUnlock("resources");
		newUnlock("wonder");
	}
}

function unlockMeteoriteTier1(){
	if(science >= 75000){
		science -= 75000;
		document.getElementById("unlockMeteoriteTier1").className = "hidden";
		document.getElementById("unlockMeteoriteTier2").className = "";
		document.getElementById("meteoriteTier1").className = "";
		available.push("unlockMeteoriteTier2");
		researched.push("unlockMeteoriteTier1");
        Game.statistics.add('techResearched');
		resourcesUnlocked.push("meteoriteTier1");
		newUnlock("resources");
	}
}

function unlockMeteoriteTier2(){
	if(science >= 100000){
		science -= 100000;
		document.getElementById("unlockMeteoriteTier2").className = "hidden";
		document.getElementById("meteoriteTier2").className = "";
		researched.push("unlockMeteoriteTier2");
        Game.statistics.add('techResearched');
		resourcesUnlocked.push("meteoriteTier2");
		newUnlock("resources");
	}
}

function unlockDyson(){
	if(science >= 100000){
		science -= 100000;
		document.getElementById("unlockDyson").className = "hidden";
		document.getElementById("unlockDysonSphere").className = "";
		document.getElementById("dysonPage").className = "";
		available.push("unlockDysonSphere");
		researched.push("unlockDyson");
        Game.statistics.add('techResearched');
		resourcesUnlocked.push("dysonPage");
		newUnlock("solCenter");
	}
}

function unlockDysonSphere(){
	if(science >= 500000){
		science -= 500000;
		document.getElementById("unlockDysonSphere").className = "hidden";
		document.getElementById("dysonSphere").className = "";
		researched.push("unlockDysonSphere");
        Game.statistics.add('techResearched');
		resourcesUnlocked.push("dysonSphere");
		newUnlock("solCenter");
	}
}