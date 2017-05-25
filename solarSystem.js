// Solar System Tab

function getChemicalPlant(){
	if(metal >= chemicalPlantMetalCost && gem >= chemicalPlantGemCost && oil >= chemicalPlantOilCost){
		metal -= chemicalPlantMetalCost;
		gem -= chemicalPlantGemCost;
		oil -= chemicalPlantOilCost;
		chemicalPlant += 1;
		chemicalPlantOilCost = Math.floor(500 * Math.pow(1.1,chemicalPlant));
		chemicalPlantGemCost = Math.floor(750 * Math.pow(1.1,chemicalPlant));
		chemicalPlantMetalCost = Math.floor(1000 * Math.pow(1.1,chemicalPlant));
		document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
		document.getElementById("chemicalPlantMetalCost").innerHTML = Game.settings.format(chemicalPlantMetalCost);
		document.getElementById("chemicalPlantGemCost").innerHTML = Game.settings.format(chemicalPlantGemCost);
		document.getElementById("chemicalPlantOilCost").innerHTML = Game.settings.format(chemicalPlantOilCost);
		refresh();
		refreshPerSec();
	}
}

function getOxidisation(){
	if(metal >= oxidisationMetalCost && gem >= oxidisationGemCost && oil >= oxidisationOilCost){
		metal -= oxidisationMetalCost;
		gem -= oxidisationGemCost;
		oil -= oxidisationOilCost;
		oxidisation += 1;
		oxidisationOilCost = Math.floor(6800 * Math.pow(1.1,oxidisation));
		oxidisationGemCost = Math.floor(8300 * Math.pow(1.1,oxidisation));
		oxidisationMetalCost = Math.floor(12000 * Math.pow(1.1,oxidisation));
		document.getElementById("oxidisation").innerHTML = oxidisation;
		document.getElementById("oxidisationMetalCost").innerHTML = Game.settings.format(oxidisationMetalCost);
		document.getElementById("oxidisationGemCost").innerHTML = Game.settings.format(oxidisationGemCost);
		document.getElementById("oxidisationOilCost").innerHTML = Game.settings.format(oxidisationOilCost);
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
		document.getElementById("rocket").innerHTML = "Built";
		refresh();
	}
}

function launchRocket(){
	if(rocket >= 1 && rocketFuel >= 20){
		rocketFuel -= 20;
		rocket -= 1;
		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
		rocketLaunched = true;
	}
}

function explore(planet){
	var planetsData = {
		Moon: {fuel: 20, area: "innerPlanet", resource: "spaceMetal"},
		Venus: {fuel: 50, area: "innerPlanet", resource: "methane"},
		Mars: {fuel: 80, area: "innerPlanet", resource: "titanium,silicon"},
		AsteroidBelt: {fuel: 200, area: "innerPlanet", resource: "gold,silver"},
		WonderStation: {fuel: 500},
		Jupiter: {fuel: 1000, area: "outerPlanet", resource: "hydrogen"},
		Saturn: {fuel: 2000, area: "outerPlanet", resource: "helium"},
		Pluto: {fuel: 5000, area: "outerPlanet", resource: "ice"},
		KuiperBelt: {fuel: 6000, area: "outerPlanet"},
		SolCenter: {fuel: 7000}
	};
	
	if(!planetsData[planet]) return console.error("Cannot explore \"" + planet + "\", data not found.");
	if(rocketFuel >= planetsData[planet].fuel) {
		rocketFuel -= planetsData[planet].fuel;
		document.getElementById("explore" + planet).className = "hidden";
		buttonsHidden.push("explore" + planet);
		explored.push(planet.substring(0, 1).toLowerCase() + planet.substring(1));
		
		// Planet/Area specific code
		switch(planet) {
			case "Moon":
				document.getElementById("collapseInnerPlanet").className = "collapseInnerPlanet";
				resourcesUnlocked.push("collapseInnerPlanet");
				break;
			case "Venus":
				document.getElementById("methanePower").className = "";
				resourcesUnlocked.push("methanePower");
				break;
			case "AsteriodBelt":
				document.getElementById("wonderStation").className = "inner";
				document.getElementById("collapseOuter").className ="collapseOuter";
				document.getElementById("jupiter").className = "outer";
				document.getElementById("saturn").className = "outer";
				document.getElementById("uranus").className = "outer";
				document.getElementById("neptune").className = "outer";
				document.getElementById("pluto").className = "outer";
				document.getElementById("kuiperBelt").className = "outer";
				break;
			case "WonderStation":
				document.getElementById("wonderTab").className = "";
				Game.statistics.add('tabsUnlocked');
				newUnlock("wonderTab");
				Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
				break;
			case "Jupiter":
				document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
				document.getElementById("fusionPower").className = "";
				resourcesUnlocked.push("collapseOuterPlanet", "fusionPower");
				break;
			case "KupierBelt":
				document.getElementById("solCenter").className = "outer";
				resourcesUnlocked.push("solCenter");
				refreshResources();
				break;
			case "SolCenter":
				document.getElementById("solCenterTopTab").className = "";
				resourcesUnlocked.push("solCenterTopTab");
				refreshResources();
				Game.statistics.add('tabsUnlocked');
				newUnlock("solCenter");
				Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
				break;
		}
		
		// Resource(s)
		if (planetsData[planet].resource) {
			var toAdd = planetsData[planet].resource.split(',');
			for(let i = 0; i < toAdd.length; i++) {
				switch(Game.resourceData[toAdd[i]].category) {
					case "earth":
						document.getElementById(toAdd[i] + "Nav").className = "earth";
						break;
					case "innerSol":
						document.getElementById(toAdd[i] + "Nav").className = "innerPlanet";
						break;
					case "outerSol":
						document.getElementById(toAdd[i] + "Nav").className = "outerPlanet";
						break;
					default:
						// Should never happen
						throw new Error("Invalid resource area: \"" + Game.resourceData[toAdd[i]].category + "\" while unlocking resource \"" + toAdd[i] + "\"");
				}
				resourcesUnlocked.push(planetsData[planet].resource + "Nav");
			}
			refreshResources();
			newUnlock("resources");
			Game.statistics.add('resourcesUnlocked', toAdd.length);
		}
		Game.statistics.add('placesExplored');
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
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked');
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
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked');
		refreshResources();
		newUnlock("resources");
	}
}

function exploreMars(){
	if(rocketFuel >= 80){
		rocketFuel -= 80;
		document.getElementById("exploreMars").className = "hidden";
		document.getElementById("titaniumNav").className = "innerPlanet";
		document.getElementById("siliconNav").className = "earth";
		resourcesUnlocked.push("titaniumNav", "siliconNav");
		buttonsHidden.push("exploreMars");
		explored.push("mars");
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked', 2);
		refreshResources();
		newUnlock("resources");
	}
}

function exploreAsteroidBelt(){
	if(rocketFuel >= 200){
		rocketFuel -= 200;
		document.getElementById("exploreAsteroidBelt").className = "hidden";
		document.getElementById("wonderStation").className = "inner";
		document.getElementById("collapseOuter").className ="collapseOuter";
		document.getElementById("jupiter").className = "outer";
		document.getElementById("saturn").className = "outer";
		document.getElementById("uranus").className = "outer";
		document.getElementById("neptune").className = "outer";
		document.getElementById("pluto").className = "outer";
		document.getElementById("kuiperBelt").className = "outer";
		document.getElementById("goldNav").className = "innerPlanet";
		document.getElementById("silverNav").className = "innerPlanet";
		resourcesUnlocked.push("goldNav", "silverNav");
		buttonsHidden.push("exploreAsteroidBelt");
		explored.push("asteroidBelt");
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked', 2);
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
        Game.statistics.add('placesExplored');
		tabsUnlocked.push("wonderTab");
        Game.statistics.add('tabsUnlocked');
		newUnlock("resources");
		Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
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
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked');
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
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked');
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
        Game.statistics.add('placesExplored');
        Game.statistics.add('resourcesUnlocked');
		refreshResources();
		newUnlock("resources");
	}
}

function exploreKuiperBelt(){
	if(rocketFuel >= 6000){
		rocketFuel -= 6000;
		document.getElementById("exploreKuiperBelt").className = "hidden";
		document.getElementById("solCenter").className = "outer";
		resourcesUnlocked.push("solCenter");
		buttonsHidden.push("exploreKuiperBelt");
		explored.push("kuiperBelt");
        Game.statistics.add('placesExplored');
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
        Game.statistics.add('placesExplored');
		refreshResources();
		newUnlock("solCenter");
		Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
	}
}
