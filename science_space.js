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
		available.push("unlockOil");
		researched.push("unlockStorage");
	}
}

function unlockBasicEnergy(){
	if(science >= 20){
		science -= 20;
		document.getElementById("charcoalNav").className = "earth";
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
		document.getElementById("upgradeEngineTech").className = "";
		resourcesUnlocked.push("energyNav", "charcoalNav");
		noBorder.push("metalNav");
		if(contains(noBorder, "oilNav") === true){
			noBorder.push("oilNav");
		}
		available.push("unlockSolar", "unlockMachines", "upgradeEngineTech");
		researched.push("unlockBasicEnergy");
		refreshResources();
	}
}

function unlockOil(){
	if(science >= 30){
		science -= 30;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "earth";
		document.getElementById("metalNav0").style.border = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		refresh();
		resourcesUnlocked.push("oilNav");
		noBorder.push("metalNav");
		researched.push("unlockOil");
		refreshResources();
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
		available.push("unlockSolarSystem", "upgradeResourceTech");
		researched.push("unlockMachines");
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
	}
}

function unlockSolarSystem(){
	if(science >= 500){
		science -= 500;
		document.getElementById("unlockSolarSystem").className = "hidden";
		document.getElementById("solarSystemTab").className = "";
		tabsUnlocked.push("solarSystemTab");
		researched.push("unlockSolarSystem");
	}
}

function upgradeEngineTech(){
	if(science >= 1000){
		science -= 1000;
		document.getElementById("upgradeEngineTech").className = "hidden";
		charcoalEngineOutput = 4;
		document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
		researched.push("upgradeEngineTech");
	}
}

function upgradeSolarTech(){
	if(science >= 5000){
		science -= 5000;
		document.getElementById("upgradeSolarTech").className = "hidden";
		solarPanelOutput = 3;
		document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
		researched.push("upgradeSolarTech");
	}
}

// Solar System Tab

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
		document.getElementById("mercury").className = "";
		document.getElementById("venus").className = "";
		document.getElementById("mars").className = "";
		document.getElementById("asteroidBelt").className = "";
		rocketLaunched = true;
	}
}

function exploreMoon(){
	if(rocketFuel >= 20){
		rocketFuel -= 20;
		document.getElementById("exploreMoon").className = "hidden";
		document.getElementById("collapseInnerPlanet").className = "collapseInnerPlanet";
		document.getElementById("spaceMetalNav").className = "innerPlanet";
		resourcesUnlocked.push("spaceMetalNav", "collapseInnerPlanet");
		buttonsHidden.push("exploreMoon");
		explored.push("moon");
		refreshResources();
	}
}

function exploreVenus(){
	if(rocketFuel >= 50){
		rocketFuel -= 50;
		document.getElementById("exploreVenus").className = "hidden";
		document.getElementById("methaneNav").className = "innerPlanet";
		document.getElementById("methanePower").className = "";
		resourcesUnlocked.push("methaneNav", "methanePower");
		buttonsHidden.push("exploreVenus");
		explored.push("venus");
		refreshResources();
	}
}

function exploreMars(){
	if(rocketFuel >= 80){
		rocketFuel -= 80;
		document.getElementById("exploreMars").className = "hidden";
		document.getElementById("titaniumNav").className = "innerPlanet";
		document.getElementById("siliconNav").className = "innerPlanet";
		resourcesUnlocked.push("titaniumNav", "siliconNav");
		buttonsHidden.push("exploreMars");
		explored.push("mars");
		refreshResources();
	}
}

function exploreAsteroidBelt(){
	if(rocketFuel >= 200){
		rocketFuel -= 200;
		document.getElementById("exploreAsteroidBelt").className = "hidden";
		document.getElementById("wonderStation").className = "";
		document.getElementById("goldNav").className = "innerPlanet";
		document.getElementById("silverNav").className = "innerPlanet";
		resourcesUnlocked.push("goldNav", "silverNav", "jupiter", "saturn", "uranus", "neptune", "pluto", "kuiperBelt");
		buttonsHidden.push("exploreAsteroidBelt");
		explored.push("asteroidBelt");
		refreshResources();
	}
}

function exploreWonderStation(){
	if(rocketFuel >= 500){
		rocketFuel -= 500;
		document.getElementById("wonderTab").className = "";
		document.getElementById("exploreWonderStation").className = "hidden";
		buttonsHidden.push("exploreWonderStation");
		explored.push("wonderStation");
		tabsUnlocked.push("wonderTab");
	}
}

function exploreJupiter(){
	if(rocketFuel >= 1000){
		rocketFuel -= 1000;
		document.getElementById("exploreJupiter").className = "hidden";
		document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
		document.getElementById("hydrogenNav").className = "outerPlanet";
		resourcesUnlocked.push("hydrogenNav", "collapseOuterPlanet");
		buttonsHidden.push("exploreJupiter");
		explored.push("jupiter");
		refreshResources();
	}
}

function exploreSaturn(){
	if(rocketFuel >= 2000){
		rocketFuel -= 2000;
		document.getElementById("exploreSaturn").className = "hidden";
		document.getElementById("heliumNav").className = "outerPlanet";
		resourcesUnlocked.push("heliumNav");
		buttonsHidden.push("exploreSaturn");
		explored.push("saturn");
		refreshResources();
	}
}

function explorePluto(){
	if(rocketFuel >= 5000){
		rocketFuel -= 5000;
		document.getElementById("explorePluto").className = "hidden";
		document.getElementById("iceNav").className = "outerPlanet";
		buttonsHidden.push("explorePluto");
		explored.push("pluto");
		refreshResources();
	}
}

function exploreKuiperBelt(){
	if(rocketFuel >= 6000){
		rocketFuel -= 6000;
		document.getElementById("exploreKuiperBelt").className = "hidden";
		document.getElementById("solCenter").className = "";
		resourcesUnlocked.push("solCenter");
		buttonsHidden.push("exploreKuiperBelt");
		explored.push("kuiperBelt");
		refreshResources();
	}
}

function exploreSolCenter(){
	if(rocketFuel >= 7000){
		rocketFuel -= 7000;
		document.getElementById("exploreSolCenter").className = "hidden";
		document.getElementById("solCenterTopTab").className = "";
		resourcesUnlocked.push("solCenterTopTab");
		buttonsHidden.push("exploreSolCenter");
		explored.push("solCenter");
		refreshResources();
	}
}

// Wonders Tab

function refreshWonderBars(){
	if(contains(resourcesUnlocked, "preciousWonderNav") === false){
		if(gem >= 10000){
			var preciousGem = 10000;
		}
		else{preciousGem = gem;}
		if(silver >= 7500){
			var preciousSilver = 7500;
		}
		else{preciousSilver = silver;}
		if(gold >= 5000){
			var preciousGold = 5000;
		}
		else{preciousGold = gold;}
		var preciousBar = (preciousGem+preciousSilver+preciousGold)/225;
		if(preciousBar <= 100){
			document.getElementById("preciousBar").innerHTML = commafy(preciousBar) + "%";
			document.getElementById("preciousBar").style.width = preciousBar + "%";
		}
		else{
			document.getElementById("preciousBar").innerHTML = "100%";
			document.getElementById("preciousBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activatePreciousWonder").className === "hidden") === false){
		if(gem >= 30000){
			var preciousActivateGem = 30000;
		}
		else{preciousActivateGem = gem;}
		if(silver >= 20000){
			var preciousActivateSilver = 20000;
		}
		else{preciousActivateSilver = silver;}
		if(gold >= 10000){
			var preciousActivateGold = 10000;
		}
		else{preciousActivateGold = gold;}
		var preciousActivateBar = (preciousActivateGem+preciousActivateSilver+preciousActivateGold)/600;
		if(preciousActivateBar <= 100){
			document.getElementById("preciousActivateBar").innerHTML = commafy(preciousActivateBar) + "%";
			document.getElementById("preciousActivateBar").style.width = preciousActivateBar + "%";
		}
		else{
			document.getElementById("preciousActivateBar").innerHTML = "100%";
			document.getElementById("preciousActivateBar").style.width = 100 + "%";
		}
	}
	if(contains(resourcesUnlocked, "energeticWonderNav") === false){
		if(wood >= 10000){
			var energeticWood = 10000;
		}
		else{energeticWood = wood;}
		if(charcoal >= 5000){
			var energeticCharcoal = 5000;
		}
		else{energeticCharcoal = charcoal;}
		if(uranium >= 200){
			var energeticUranium = 200;
		}
		else{energeticUranium = uranium;}
		var energeticBar = (energeticWood+energeticCharcoal+energeticUranium)/152;
		if(energeticBar <= 100){
			document.getElementById("energeticBar").innerHTML = commafy(energeticBar) + "%";
			document.getElementById("energeticBar").style.width = energeticBar + "%";
		}
		else{
			document.getElementById("energeticBar").innerHTML = "100%";
			document.getElementById("energeticBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activateEnergeticWonder").className === "hidden") === false){
		if(wood >= 30000){
			var energeticActivateWood = 30000;
		}
		else{energeticActivateWood = wood;}
		if(charcoal >= 15000){
			var energeticActivateCharcoal = 15000;
		}
		else{energeticActivateCharcoal = charcoal;}
		if(uranium >= 500){
			var energeticActivateUranium = 500;
		}
		else{energeticActivateUranium = uranium;}
		var energeticActivateBar = (energeticActivateWood+energeticActivateCharcoal+energeticActivateCharcoal)/455;
		if(energeticActivateBar <= 100){
			document.getElementById("energeticActivateBar").innerHTML = commafy(energeticActivateBar) + "%";
			document.getElementById("energeticActivateBar").style.width = energeticActivateBar + "%";
		}
		else{
			document.getElementById("energeticActivateBar").innerHTML = "100%";
			document.getElementById("energeticActivateBar").style.width = 100 + "%";
		}
	}
	if(contains(resourcesUnlocked, "techWonderNav") === false){
		if(silicon >= 30000){
			var techSilicon = 30000;
		}
		else{techSilicon = silicon;}
		if(gold >= 18000){
			var techGold = 18000;
		}
		else{techGold = gold;}
		if(gem >= 40000){
			var techGem = 40000;
		}
		else{techGem = gem;}
		var techBar = (techSilicon+techGold+techGem)/880;
		if(techBar <= 100){
			document.getElementById("techBar").innerHTML = commafy(techBar) + "%";
			document.getElementById("techBar").style.width = techBar + "%";
		}
		else{
			document.getElementById("techBar").innerHTML = "100%";
			document.getElementById("techBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activateEnergeticWonder").className === "hidden") === false){
		if(silicon >= 50000){
			var techActivateSilicon = 50000;
		}
		else{techActivateSilicon = silicon;}
		if(gold >= 30000){
			var techActivateGold = 30000;
		}
		else{techActivateGold = gold;}
		if(gem >= 60000){
			var techActivateGem = 60000;
		}
		else{techActivateGem = gem;}
		var techActivateBar = (techActivateSilicon+techActivateGold+techActivateGem)/1400;
		if(techActivateBar <= 100){
			document.getElementById("techActivateBar").innerHTML = commafy(techActivateBar) + "%";
			document.getElementById("techActivateBar").style.width = techActivateBar + "%";
		}
		else{
			document.getElementById("techActivateBar").innerHTML = "100%";
			document.getElementById("techActivateBar").style.width = 100 + "%";
		}
	}
}

function achievePreciousWonder(){
	if(gem >= 10000 && silver >= 7500 && gold >= 5000){
		gem-= 10000;
		silver -= 7500;
		gold -= 5000;
		document.getElementById("preciousWonderButton").className = "hidden";
		document.getElementById("preciousProgress").className = "hidden";
		document.getElementById("preciousWonderNav").className = "";
		document.getElementById("wonderFloor1Nav").className = "";
		buttonsHidden.push("preciousProgress", "preciousWonderButton");
		resourcesUnlocked.push("preciousWonderNav", "wonderFloor1Nav");
	}
}

function activatePreciousWonder(){
	if(gem >= 30000 && silver >= 20000 && gold >= 10000){
		gem -= 30000;
		silver -= 20000;
		gold -= 10000;
		document.getElementById("nuclearPower").className = "";
		document.getElementById("activatePreciousWonder").className = "hidden";
		document.getElementById("uraniumNav").className = "innerPlanet";
		document.getElementById("preciousActivation").innerHTML = "Activated";
		resourcesUnlocked.push("uraniumNav", "nuclearPower");
		buttonsHidden.push("activatePreciousWonder");
		activated.push("precious");
		refreshResources();
	}
}

function achieveEnergeticWonder(){
	if(wood >= 10000 && charcoal >= 5000 && uranium >= 200){
		wood-= 10000;
		charcoal -= 5000;
		uranium -= 200;
		document.getElementById("energeticWonderButton").className = "hidden";
		document.getElementById("energeticProgress").className = "hidden";
		document.getElementById("energeticWonderNav").className = "";
		buttonsHidden.push("energeticProgress", "energeticWonderButton");
		resourcesUnlocked.push("energeticWonderNav");
	}
}

function activateEnergeticWonder(){
	if(wood >= 30000 && charcoal >= 15000 && uranium >= 500){
		wood -= 30000;
		charcoal -= 15000;
		uranium -= 500;
		document.getElementById("magmaticPower").className = "";
		document.getElementById("activateEnergeticWonder").className = "hidden";
		document.getElementById("lavaNav").className = "innerPlanet";
		document.getElementById("energeticActivation").innerHTML = "Activated";
		resourcesUnlocked.push("lavaNav", "magmaticPower");
		buttonsHidden.push("activateEnergeticWonder");
		activated.push("energetic");
	}
}

function achieveTechWonder(){
	if(silicon >= 30000 && gold >= 18000 && gem >= 40000){
		silicon-= 30000;
		gold -= 18000;
		gem -= 40000;
		document.getElementById("techWonderButton").className = "hidden";
		document.getElementById("techProgress").className = "hidden";
		document.getElementById("techWonderNav").className = "";
		buttonsHidden.push("techProgress", "techWonderButton");
		resourcesUnlocked.push("techWonderNav");
	}
}

function unlockTier3(){
	document.getElementById("oilTier3").className = "";
	document.getElementById("metalTier3").className = "";
	document.getElementById("gemTier3").className = "";
	document.getElementById("charcoalTier3").className = "";
	document.getElementById("woodTier3").className = "";
	document.getElementById("spaceMetalTier3").className = "";
	document.getElementById("methaneTier3").className = "";
	document.getElementById("titaniumTier3").className = "";
	document.getElementById("goldTier3").className = "";
	document.getElementById("silverTier3").className = "";
	document.getElementById("siliconTier3").className = "";
	document.getElementById("uraniumTier3").className = "";
	document.getElementById("lavaTier3").className = "";
	document.getElementById("hydrogenTier3").className = "";
	document.getElementById("heliumTier3").className = "";
	document.getElementById("iceTier3").className = "";
}

function activateTechWonder(){
	if(silicon >= 50000 && gold >= 30000 && gem >= 60000){
		silicon -= 50000;
		gold -= 30000;
		gem -= 60000;
		unlockTier3();
		document.getElementById("activateTechWonder").className = "hidden";
		document.getElementById("techActivation").innerHTML = "Activated";
		techUnlocked = true;
		buttonsHidden.push("activateTechWonder");
		activated.push("tech");
	}
}

// Collapses Earth and Space Metals

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