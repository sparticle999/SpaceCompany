function calculateEnergyOutput(delta) {
	var multiplier = 1 + (Game.stargaze.entries.darkMatter.count * dmBoost);
	return Game.buildings.calculateEnergyOutput(delta) * multiplier;
}

function calculateEnergyUse(delta) {
	var energyEfficiencyTech = Game.tech.getTechData('energyEfficiencyResearch');
	var multiplier = 1 - (energyEfficiencyTech.current * 0.01);
	return Game.buildings.calculateEnergyUse(delta) * multiplier;
}

function toggleEnergy() {
	globalEnergyLock = !globalEnergyLock;
}

function fixStorageRounding() {
	var precision = 100;
	if (Math.round(getResource(RESOURCE.Meteorite) * precision) / precision === getStorage(RESOURCE.Meteorite)) {
		Game.resources.maxResource(RESOURCE.Meteorite);
	}

	if (Math.round(getResource(RESOURCE.Plasma) * precision) / precision === getStorage(RESOURCE.Plasma)) {
		Game.resources.maxResource(RESOURCE.Plasma);
	}
}

function refreshTimeUntilLimit() {
	for (var id in RESOURCE) {
		var limitType = RESOURCE[id] + 'LimitType';
		var limitTime = RESOURCE[id] + 'LimitTime';
		var amount = getResource(RESOURCE[id]);
		var storage = getStorage(RESOURCE[id]);
		var production = getProduction(RESOURCE[id]);
		setTimeUntilDisplayTest(limitType, limitTime, amount, storage, production);
	}
}

function setTimeUntilDisplayTest(targetLimitType, targetLimitTime, current, max, perSecond) {
	var targetTypeElement = $('#' + targetLimitType);
	var targetTimeElement = $('#' + targetLimitTime);
	var value = 0;
	var isDraining = false;
	if(perSecond > 0) {
		value = (max - current) / perSecond;
	} else if (perSecond < 0) {
		value = Math.abs(current / perSecond);
		isDraining = true;
	}

	if(value > 0) {
		var formattedTimeTest = Game.utils.getFullTimeDisplay(value);
		targetTimeElement.text(formattedTimeTest);

		if(isDraining){
			targetTypeElement.text('empty');
			targetTimeElement.addClass('red');
		} else {
			targetTypeElement.text('full');
			targetTimeElement.removeClass('red');
		}
	} else {
		targetTypeElement.text('full');
		targetTimeElement.text('N/A');
	}
}

function refreshPerSec(delta) {
	// cache production values in a local object
	var production = {};
	for (var id in RESOURCE) {
		production[RESOURCE[id]] = 0;
	}

	// TODO: make antimatter a resource
	antimatterps = 0;

	// First we update and check the energy
	var energyOutput = calculateEnergyOutput(delta);
	var energyUse = calculateEnergyUse(delta);
	production[RESOURCE.Energy] = energyOutput - energyUse;

	var deltaEnergyDiff = (energyOutput * delta) - (energyUse * delta);
	energyLow = deltaEnergyDiff < 0 && (getResource(RESOURCE.Energy) <= 0 || getResource(RESOURCE.Energy) < deltaEnergyDiff);

	// calculate multipliers (add prestige etc here)
	var resourceEfficiencyTech = Game.tech.getTechData('efficiencyResearch');
	var resourceMultiplier = 1 + (resourceEfficiencyTech.current * 0.01) + (Game.stargaze.entries.darkMatter.count * dmBoost);

	Game.buildings.calculateProduction(energyLow, resourceMultiplier, production);

	var scienceEfficiencyTech = Game.tech.getTechData('scienceEfficiencyResearch');
	var scienceMultiplier = 1 + (scienceEfficiencyTech.current * 0.02) + (Game.stargaze.entries.darkMatter.count * dmBoost);
	production[RESOURCE.Science] *= scienceMultiplier;

	if (antimatterToggled === true) {
		if (antimatter + antimatterps < antimatterStorage) {
			var plasmaCost = (Game.interstellar.antimatter.entries.drive.count*100);
			var iceCost = (Game.interstellar.antimatter.entries.drive.count*12000);
			if (getResource(RESOURCE.Plasma) >= plasmaCost &&
				getResource(RESOURCE.Ice) >= iceCost) {
				production[RESOURCE.Plasma] -= plasmaCost;
				production[RESOURCE.Ice] -= iceCost;
				antimatterps += Game.interstellar.antimatter.entries.drive.count/2;
			}
		}
		else {
			antimatter = antimatterStorage;
			antimatterps += Game.interstellar.antimatter.entries.drive.count/2;
		}
	}
	var boosts = {};

	for(var i = 0; i < resources.length; i++){
		boosts[resources[i]] = production[resources[i]] / 4;
	}

	for (id in Game.interstellar.stars.entries) {
		var data = Game.interstellar.stars.getStarData(id);
		if (data.owned === true) {
			production[data.resource1.toLowerCase()] += boosts[data.resource1.toLowerCase()];
			production[data.resource2.toLowerCase()] += boosts[data.resource2.toLowerCase()];
		}
	}

	for (id in production) {
		Game.resources.setProduction(id, production[id]);
	}
}

function checkRedCost() {
	Game.settings.turnRed(getResource(RESOURCE.Wood), 2, "manualCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.Energy), 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.Hydrogen), 10, "manualPlasmaHydrogenCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Silver), PSUSilverCost, "PSUSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), PSUGoldCost, "PSUGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), PSUUraniumCost, "PSUUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Silver), PSUT2SilverCost, "PSUT2SilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), PSUT2GoldCost, "PSUT2GoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), PSUT2UraniumCost, "PSUT2UraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), batteryMetalCost, "batteryMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), batteryGemCost, "batteryGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), batteryLunariteCost, "batteryLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), batteryT2MetalCost, "batteryT2MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), batteryT2GemCost, "batteryT2GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), batteryT2LunariteCost, "batteryT2LunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), batteryT4MetalCost, "batteryT4MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), batteryT4GemCost, "batteryT4GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), batteryT4LunariteCost, "batteryT4LunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Metal), batteryT3MetalCost, "batteryT3MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), batteryT3GemCost, "batteryT3GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), batteryT3LunariteCost, "batteryT3LunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Science), 5, "unlockStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 20, "unlockBasicEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 30, "unlockOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 50, "unlockSolarCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 100, "unlockMachinesCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 500, "unlockDestructionCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 300, "upgradeResourceTechCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 500, "unlockSolarSystemCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 500, "unlockLabT2Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 1000, "upgradeEngineTechCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 450000, "unlockRocketFuelT2Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 3200000, "unlockRocketFuelT3Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 3000, "unlockLabT3Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 5000, "upgradeSolarTechCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 15000, "unlockBatteriesCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 40000, "unlockPlasmaCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 60000, "unlockPlasmaTier2Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 50000000, "unlockLabT4Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 60000, "unlockEmcCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 100000, "unlockMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 75000, "unlockMeteoriteTier1Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 100000, "unlockMeteoriteTier2Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 100000, "unlockDysonCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 300000, "unlockBatteriesT2Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 3000000, "unlockBatteriesT3Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 30000000, "unlockBatteriesT4Cost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 500000, "unlockDysonSphereCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 9500000, "unlockPSUCost");
	Game.settings.turnRed(getResource(RESOURCE.Science), 37000000, "unlockPSUT2Cost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), 1200, "rocketMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), 900, "rocketGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), 1000, "rocketOilCost");

	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 20, "rocketRocketFuelCost");

	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 20, "moonRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 50, "venusRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 80, "marsRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 200, "asteroidBeltRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 500, "wonderStationRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 1000, "jupiterRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 2000, "saturnRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 5000, "plutoRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 6000, "kuiperBeltRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 6000, "solCenterRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 7000, "solCenterRocketFuelCost");

	// Sol Center

	Game.settings.turnRed(getResource(RESOURCE.Titanium), dysonTitaniumCost, "dysonTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), dysonGoldCost, "dysonGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), dysonSiliconCost, "dysonSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), dysonMeteoriteCost, "dysonMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.Ice), dysonIceCost, "dysonIceCost");

	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 50000, "ringRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 250000, "swarmRocketFuelCost");
	Game.settings.turnRed(getResource(RESOURCE.RocketFuel), 1000000, "sphereRocketFuelCost");

	Game.settings.turnRed(getResource(RESOURCE.Hydrogen), 1500, "unlockPlasmaResearchHydrogenCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), 1500, "unlockPlasmaResearchUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), 15000, "unlockPlasmaResearchOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), 15000, "unlockPlasmaResearchWoodCost");

	Game.settings.turnRed(getResource(RESOURCE.Energy), 75000, "unlockEmcResearchEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.Plasma), 100, "unlockEmcResearchPlasmaCost");

	Game.settings.turnRed(getResource(RESOURCE.Energy), 100000, "unlockDysonResearchEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.Plasma), 10000, "unlockDysonResearchPlasmaCost");

	// Wonders

	Game.settings.turnRed(getResource(RESOURCE.Gem), preciousGemCost, "preciousGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silver), preciousSilverCost, "preciousSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), preciousGoldCost, "preciousGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.Gem), preciousActivateGemCost, "preciousActivateGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silver), preciousActivateSilverCost, "preciousActivateSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), preciousActivateGoldCost, "preciousActivateGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.Wood), energeticWoodCost, "energeticWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Charcoal), energeticCharcoalCost, "energeticCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), energeticUraniumCost, "energeticUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Wood), energeticActivateWoodCost, "energeticActivateWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Charcoal), energeticActivateCharcoalCost, "energeticActivateCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), energeticActivateUraniumCost, "energeticActivateUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Silicon), techSiliconCost, "techSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), techGoldCost, "techGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), techGemCost, "techGemCost");

	Game.settings.turnRed(getResource(RESOURCE.Silicon), techActivateSiliconCost, "techActivateSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), techActivateGoldCost, "techActivateGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), techActivateGemCost, "techActivateGemCost");

	Game.settings.turnRed(getResource(RESOURCE.Meteorite), meteoriteMeteoriteCost, "meteoriteMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.Ice), meteoriteIceCost, "meteoriteIceCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), meteoriteSiliconCost, "meteoriteSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Meteorite), meteoriteActivateMeteoriteCost, "meteoriteActivateMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.Ice), meteoriteActivateIceCost, "meteoriteActivateIceCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), meteoriteActivateSiliconCost, "meteoriteActivateSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Gold), 6000000, "commsWonderGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), 10000000, "commsWonderSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Ice), 6000000, "commsWonderIceCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), 8000000, "rocketWonderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), 6000000, "rocketWonderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), 12000000, "rocketWonderMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.Uranium), 6000000, "antimatterWonderUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Lava), 10000000, "antimatterWonderLavaCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), 8000000, "antimatterWonderOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Methane), 6000000, "antimatterWonderMethaneCost");

	Game.settings.turnRed(getResource(RESOURCE.Meteorite), 500000, "portalMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.Helium), 8000000, "portalHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), 6000000, "portalSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Plasma), 500000, "stargateWonderPlasmaCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), 920000000, "stargateWonderSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), 17000000, "stargateWonderMeteoriteCost");

	if(document.getElementById("roc_tier1Rocket_shield_c") != null){
		Game.settings.turnRed(Game.interstellar.rocketParts.entries.shield.count, 50, "roc_tier1Rocket_shield_c");
		Game.settings.turnRed(Game.interstellar.rocketParts.entries.engine.count, 25, "roc_tier1Rocket_engine_c");
		Game.settings.turnRed(Game.interstellar.rocketParts.entries.aero.count, 15, "roc_tier1Rocket_aero_c");
	}
}

function refreshResources(){
    if(contains(resourcesUnlocked, "spaceMetalNav")){
        Game.removeExcess(resourcesUnlocked, "spaceMetalNav");
        var index = resourcesUnlocked.indexOf("spaceMetalNav");
        if (index > -1) {
            resourcesUnlocked.splice(index, 1);
        }
        resourcesUnlocked.push("lunariteNav");
    }
	if(contains(resourcesUnlocked, "meteoriteWonder")){
		var index = resourcesUnlocked.indexOf("meteoriteWonder");
 		if (index > -1) {
		    resourcesUnlocked.splice(index, 1);
		}
	}
	for(var i=0; i<resourcesUnlocked.length; i++){
		document.getElementById(resourcesUnlocked[i]).className = "";
	}
	if(contains(resourcesUnlocked, "oilNav")){
		document.getElementById("oilNav").className = "earth sideTab";
	}
	if(contains(resourcesUnlocked, "charcoalNav")){
		document.getElementById("charcoalNav").className = "earth sideTab";
	}
	if(contains(resourcesUnlocked, "siliconNav")){
		document.getElementById("siliconNav").className = "earth sideTab";
	}
	if(contains(resourcesUnlocked, "lunariteNav")){
		document.getElementById("lunariteNav").className = "innerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "methaneNav")){
		document.getElementById("methaneNav").className = "innerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "titaniumNav")){
		document.getElementById("titaniumNav").className = "innerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "goldNav")){
		document.getElementById("goldNav").className = "innerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "silverNav")){
		document.getElementById("silverNav").className = "innerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "hydrogenNav")){
		document.getElementById("hydrogenNav").className = "outerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "heliumNav")){
		document.getElementById("heliumNav").className = "outerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "iceNav")){
		document.getElementById("iceNav").className = "outerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "meteoriteNav")){
		document.getElementById("meteoriteNav").className = "outerPlanet sideTab";
	}
	if(contains(resourcesUnlocked, "meteoriteWonderNav")){
		document.getElementById("wonderFloor2Nav").className = "sideTab";
		document.getElementById("communicationWonderNav").className = "sideTab";
		document.getElementById("rocketWonderNav").className = "sideTab";
		document.getElementById("antimatterWonderNav").className = "sideTab";
		document.getElementById("portalRoomNav").className = "sideTab";
        if(contains(resourcesUnlocked, "wonderFloor2Nav") == false){
		  resourcesUnlocked.push("wonderFloor2Nav", "communicationWonderNav", "rocketWonderNav", "antimatterWonderNav", "portalRoomNav");
        } else {
            Game.removeExcess(resourcesUnlocked, "wonderFloor2Nav");
            Game.removeExcess(resourcesUnlocked, "communicationWonderNav");
            Game.removeExcess(resourcesUnlocked, "rocketWonderNav");
            Game.removeExcess(resourcesUnlocked, "antimatterWonderNav");
            Game.removeExcess(resourcesUnlocked, "portalRoomNav");
        }
	}

	for(var i=0; i<noBorder.length; i++){
		for(var j=0; j<4; j++){
			document.getElementById(noBorder[i] + j).style.border = "";
		}
	}
	for(var i=0; i<activated.length; i++){
		document.getElementById(activated[i] + "Activation").innerHTML = "Activated";
		document.getElementById(activated[i] + "Activation").className += " green";
	}
	if(techUnlocked === true){
		unlockTier3();
	}
	if(meteoriteUnlocked === true){
		unlockTier4();
	}
	if(contains(resourcesUnlocked, "lunariteNav")){
		document.getElementById("lunariteNav").className = "innerPlanet sideTab";
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
    for (var i = 0; i < researched.length; i++){
       document.getElementById(researched[i]).className = "hidden";
    }

    for (var techId in Game.tech.entries) {
       if (Game.tech.isMaxLevel(techId)) {
           var element = document.getElementById(techId);
           if (element) {
               element.className = "hidden";
           }
       } else if (Game.tech.isUnlocked(techId)) {
           element = document.getElementById(techId);
           if (element) {
               element.className = "";
           }
       }
    }

    if (Game.tech.isPurchased('unlockStorage')) {
        document.getElementById("oilStorageUpgrade").className = "";
        document.getElementById("metalStorageUpgrade").className = "";
        document.getElementById("gemStorageUpgrade").className = "";
        document.getElementById("charcoalStorageUpgrade").className = "";
        document.getElementById("woodStorageUpgrade").className = "";
    }
    if (Game.tech.isPurchased('unlockSolar')) {
        document.getElementById("solarPower").className = "";
    }
    if (Game.tech.isPurchased('unlockMachines')) {
        document.getElementById("oilTier2").className = "";
        document.getElementById("metalTier2").className = "";
        document.getElementById("gemTier2").className = "";
        document.getElementById("charcoalTier2").className = "";
        document.getElementById("woodTier2").className = "";
    }
    if (Game.tech.isPurchased('unlockDestruction')) {
        for(i = 0; i < document.getElementsByClassName("destroy").length; i++){
            document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
        }
    }
    else {
        if (Game.tech.isUnlocked('unlockDestruction') === false) {
            if(Game.tech.isPurchased('unlockMachines')) {
                document.getElementById('unlockDestruction').className = "";
                Game.tech.unlockTech('unlockDestruction');
            }
        }
    }
    if (Game.tech.isPurchased('unlockSolarSystem')) {
        if (Game.tech.isUnlocked('unlockRocketFuelT2') === false) {
            document.getElementById('unlockRocketFuelT2').className = "";
            Game.tech.unlockTech('unlockRocketFuelT2');
        }
        if (Game.tech.isUnlocked('unlockLabT2') === false) {
            document.getElementById('unlockLabT2').className = "";
            Game.tech.unlockTech('unlockLabT2');
        }
    }
    if (Game.tech.isPurchased('unlockRocketFuelT2')) {
        if (Game.tech.isUnlocked('unlockRocketFuelT3') === false) {
            document.getElementById('unlockRocketFuelT3').className = "";
            Game.tech.unlockTech('unlockRocketFuelT3');
        }
    }
    if (Game.tech.isPurchased('unlockLabT2')) {
        document.getElementById("labTier2").className = "";
    }
    if (Game.tech.isPurchased('unlockLabT3')) {
        document.getElementById('labTier3').className = "";
        if (Game.tech.isUnlocked('unlockLabT4') === false) {
            document.getElementById('unlockLabT4').className = "";
            Game.tech.unlockTech('unlockLabT4');
        }
    }
    if (Game.tech.isPurchased('unlockLabT4')) {
        document.getElementById("labTier4").className = "";
    }
    if (Game.tech.isPurchased('upgradeSolarTech')) {
        if (Game.tech.isUnlocked('unlockBatteries') === false) {
            document.getElementById('unlockBatteries').className ="";
            Game.tech.unlockTech('unlockBatteries');
        }
    }
    if (Game.tech.isPurchased('unlockEmc')) {
        if (Game.tech.isUnlocked('unlockMeteorite') === false) {
            document.getElementById('unlockMeteorite').className = "";
            Game.tech.unlockTech('unlockMeteorite');
        }
    }
    if (Game.tech.isPurchased('unlockMeteorite')) {
        if (contains(resourcesUnlocked, 'meteoriteEMC') === false) {
            document.getElementById('meteoriteEMC').className = "";
            resourcesUnlocked.push('meteoriteEMC');
        }
        if (Game.tech.isUnlocked('unlockMeteoriteTier1') === false) {
            document.getElementById('unlockMeteoriteTier1').className = "";
            Game.tech.unlockTech('unlockMeteoriteTier1');
        }
    }
    if (Game.tech.isPurchased('unlockMeteoriteTier1')) {
        if (Game.tech.isUnlocked('unlockMeteoriteTier2') === false) {
            document.getElementById('unlockMeteoriteTier2').className = "";
            Game.tech.unlockTech('unlockMeteoriteTier2');
        }
    }
    if (Game.tech.isPurchased('unlockPlasma')) {
        if (Game.tech.isUnlocked('unlockPlasmaTier2') === false) {
            document.getElementById('unlockPlasmaTier2').className ="";
            Game.tech.unlockTech('unlockPlasmaTier2');
        }
        if (Game.tech.isUnlocked('unlockPSU') === false) {
            document.getElementById('unlockPSU').className ="";
            Game.tech.unlockTech('unlockPSU');
            newUnlock('research');
        }
    }
    if (Game.tech.isPurchased('unlockPSU')) {
        if (Game.tech.isUnlocked('unlockPSUT2') === false) {
            document.getElementById('unlockPSUT2').className = "";
            Game.tech.unlockTech('unlockPSUT2');
        }
    }
    if (Game.tech.isPurchased('unlockBatteries')) {
        if (Game.tech.isUnlocked('unlockBatteriesT2') === false) {
            document.getElementById('unlockBatteriesT2').className ="";
            Game.tech.unlockTech('unlockBatteriesT2');
        }
    }
    if (Game.tech.isPurchased('unlockBatteriesT2')) {
        if (Game.tech.isUnlocked('unlockBatteriesT3') === false) {
            document.getElementById('unlockBatteriesT3').className ="";
            Game.tech.unlockTech('unlockBatteriesT3');
        }
    }
    if (Game.tech.isPurchased('unlockBatteriesT3')) {
        if (Game.tech.isUnlocked('unlockBatteriesT4') === false) {
             document.getElementById('unlockBatteriesT4').className ="";
             Game.tech.unlockTech('unlockBatteriesT4');
         }
    }
    if (Game.tech.isPurchased('unlockDyson')) {
        if (Game.tech.isUnlocked('unlockDysonSphere') === false) {
            document.getElementById('unlockDysonSphere').className ="";
            Game.tech.unlockTech('unlockDysonSphere');
        }
    }
    if (Game.tech.isPurchased('unlockBasicEnergy')) {
        document.getElementById('unlockBasicEnergy').className = "hidden";
    }
}

function refreshTabs(){
	if(contains(tabsUnlocked, "dropdownMenu")){
 		var index = tabsUnlocked.indexOf("dropdownMenu");
 		if (index > -1) {
		    tabsUnlocked.splice(index, 1);
		}
 	}
	for(var i=0; i<tabsUnlocked.length; i++){
 		document.getElementById(tabsUnlocked[i]).className -= "hidden";
 	}
 	document.getElementById("rocketFuelNav").className = "sideTab";
 	if(rocketLaunched === true){
 		document.getElementById("spaceRocket").className = "sideTab hidden";
  		document.getElementById("collapseInner").className = "collapseInner sideTab";
		document.getElementById("moon").className = "inner sideTab";
		document.getElementById("mercury").className = "inner sideTab";
		document.getElementById("venus").className = "inner sideTab";
		document.getElementById("mars").className = "inner sideTab";
		document.getElementById("asteroidBelt").className = "inner sideTab";
 	}
 	if(contains(explored, "asteroidBelt")){
 		document.getElementById("wonderStation").className = "inner sideTab";
 		document.getElementById("collapseOuter").className ="collapseOuter sideTab";
 		document.getElementById("jupiter").className = "outer sideTab";
 		document.getElementById("saturn").className = "outer sideTab";
 		document.getElementById("uranus").className = "outer sideTab";
 		document.getElementById("neptune").className = "outer sideTab";
 		document.getElementById("pluto").className = "outer sideTab";
 		document.getElementById("kuiperBelt").className = "outer sideTab";
 	}
 	if(contains(explored, "kuiperBelt")){
 		document.getElementById("solCenter").className = "outer sideTab";
 	}
    if(contains(buttonsHidden, "rebuildStargate")){
        document.getElementById("wonderTab").className = "completed";
    }
 	for(var i=0; i<buttonsHidden.length; i++){
 		document.getElementById(buttonsHidden[i]).className += " hidden";
 	}
}

// Collapses Resources

$('.collapseEarth').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth sideTab";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth sideTab hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInnerPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet sideTab";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet sideTab hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuterPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet sideTab";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet sideTab hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInner').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("inner").length; i++){
        	document.getElementsByClassName("inner")[i].className = "inner sideTab";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("inner").length; i++){
        	document.getElementsByClassName("inner")[i].className = "inner sideTab hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuter').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outer").length; i++){
        	document.getElementsByClassName("outer")[i].className = "outer sideTab";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outer").length; i++){
        	document.getElementsByClassName("outer")[i].className = "outer sideTab hidden";
        }
        $(this).addClass("collapsed");
    }
});

//Copy To Clipboard
var copyTextareaBtn = document.querySelector('#copyExport');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('#impexpField');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

//ToolTips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({container: 'body'}); 
});

//Change Company Name
$('input[name="companyName"]').change(function(){
	companyName = ($('input[name="companyName"]').val());
	Game.settings.updateCompanyName();
});
