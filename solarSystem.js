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
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
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
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
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
		placesExploredNum += 1;
		resourcesUnlockedNum += 2;
		refreshResources();
		newUnlock("resources");
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
		placesExploredNum += 1;
		resourcesUnlockedNum += 2;
		refreshResources();
		newUnlock("resources");
	}
}

function exploreWonderStation(){
	if(rocketFuel >= 500){
		rocketFuel -= 500;
		document.getElementById("wonderTab").className = "";
		document.getElementById("exploreWonderStation").className = "hidden";
		buttonsHidden.push("exploreWonderStation");
		explored.push("wonderStation");
		placesExploredNum += 1;
		tabsUnlocked.push("wonderTab");
		tabsUnlockedNum += 1;
		newUnlock("resources");
	}
}

function exploreJupiter(){
	if(rocketFuel >= 1000){
		rocketFuel -= 1000;
		document.getElementById("exploreJupiter").className = "hidden";
		document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
		document.getElementById("hydrogenNav").className = "outerPlanet";
		document.getElementById("fusionPower").className = "";
		resourcesUnlocked.push("hydrogenNav", "collapseOuterPlanet", "fusionPower");
		buttonsHidden.push("exploreJupiter");
		explored.push("jupiter");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
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
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
	}
}

function explorePluto(){
	if(rocketFuel >= 5000){
		rocketFuel -= 5000;
		document.getElementById("explorePluto").className = "hidden";
		document.getElementById("iceNav").className = "outerPlanet";
		resourcesUnlocked.push("iceNav");
		buttonsHidden.push("explorePluto");
		explored.push("pluto");
		placesExploredNum += 1;
		resourcesUnlockedNum += 1;
		refreshResources();
		newUnlock("resources");
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
		placesExploredNum += 1;
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
		placesExploredNum += 1;
		refreshResources();
		newUnlock("solCenter");
	}
}