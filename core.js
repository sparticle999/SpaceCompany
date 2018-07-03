// function calculateEnergyUse(delta) {
// 	if (globalEnergyLock === true) {
// 		return 0;
// 	}

// 	// initializing the variable
// 	var use = 0;

// 	// Plasma energy consumption
// 	if (heaterToggled && getResource(RESOURCE.Hydrogen) + getProduction(RESOURCE.Hydrogen) >= heater * 10 * delta &&
// 		getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= heater * delta) {
// 		use += heater * heaterEnergyInput;
// 	}

// 	if (plasmaticToggled && getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= plasmatic * 10 * delta) {
// 		use += plasmatic * plasmaticEnergyInput;
// 	}

// 	if (bathToggled && getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= bath * 10 * delta) {
// 		use += bath * bathEnergyInput;
// 	}

// 	// Uranium Energy Consumption
// 	use += (cubic * cubicEnergyInput) + (enricher * enricherEnergyInput) + (recycler * recyclerEnergyInput) + (planetNuke * planetNukeEnergyInput);

// 	// Lava Energy Consumption
// 	use += (extractor * extractorEnergyInput) + (extruder * extruderEnergyInput) + (veluptuator * veluptuatorEnergyInput) + (condensator * condensatorEnergyInput);

// 	// Oil Energy Consumption
// 	use += (pumpjack * pumpjackEnergyInput) + (oilField * oilFieldEnergyInput) + (oilRig * oilRigEnergyInput) + (fossilator * fossilatorEnergyInput);

// 	// Metal Energy Consumption
// 	use += (heavyDrill * heavyDrillEnergyInput) + (gigaDrill * gigaDrillEnergyInput) + (quantumDrill * quantumDrillEnergyInput) + (multiDrill * multiDrillEnergyInput);

// 	// Gems Energy Consumption
// 	use += (advancedDrill * advancedDrillEnergyInput) + (diamondDrill * diamondDrillEnergyInput) + (carbyneDrill * carbyneDrillEnergyInput) + (diamondChamber * diamondChamberEnergyInput);

// 	// Charcoal Energy Consumption
// 	if(charcoalToggled === true){
//         	use += (furnace*furnaceEnergyInput)+(kiln*kilnEnergyInput)+(fryer*fryerEnergyInput)+(microPollutor*microPollutorEnergyInput);
//     	}

// 	// Wood Energy Consumption
// 	use += (laserCutter * laserCutterEnergyInput) + (deforester * deforesterEnergyInput) + (infuser * infuserEnergyInput) + (forest * forestEnergyInput);

// 	// Silicon Energy Consumption
// 	use += (scorcher * scorcherEnergyInput) + (annihilator * annihilatorEnergyInput) + (desert * desertEnergyInput) + (tardis * tardisEnergyInput);

// 	// Lunarite Energy Consumption
// 	use += (moonDrill * moonDrillEnergyInput) + (moonQuarry * moonQuarryEnergyInput) + (planetExcavator * planetExcavatorEnergyInput) + (cloner * clonerEnergyInput);

// 	// Methane Energy Consumption
// 	use += (suctionExcavator * suctionExcavatorEnergyInput) + (spaceCow * spaceCowEnergyInput) + (vent * ventEnergyInput) + (interCow * interCowEnergyInput);

// 	// Titanium Energy Consumption
// 	use += (lunariteDrill * lunariteDrillEnergyInput) + (pentaDrill * pentaDrillEnergyInput) + (titanDrill * titanDrillEnergyInput) + (club * clubEnergyInput);

// 	// Gold Energy Consumption
// 	use += (destroyer * destroyerEnergyInput) + (deathStar * deathStarEnergyInput) + (actuator * actuatorEnergyInput) + (philosopher * philosopherEnergyInput);

// 	// Silver Energy Consumption
// 	use += (spaceLaser * spaceLaserEnergyInput) + (bertha * berthaEnergyInput) + (cannon * cannonEnergyInput) + (werewolf * werewolfEnergyInput);

// 	// Hydrogen Energy Consumption
// 	use += (magnet * magnetEnergyInput) + (eCell * eCellEnergyInput) + (hindenburg * hindenburgEnergyInput) + (harvester * harvesterEnergyInput);

// 	// Helium Energy Consumption
// 	use += (tanker * tankerEnergyInput) + (compressor * compressorEnergyInput) + (skimmer * skimmerEnergyInput) + (cage * cageEnergyInput);

// 	// Ice Energy Consumption
// 	use += (iceDrill * iceDrillEnergyInput) + (freezer * freezerEnergyInput) + (mrFreeze * mrFreezeEnergyInput) + (overexchange * overexchangeEnergyInput);

// 	var energyEfficiencyTech = Game.tech.getTechData('energyEfficiencyResearch');
// 	var multiplier = 1 - (energyEfficiencyTech.current * 0.01);

// 	return use * multiplier;
// }

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

function refreshPerSec(delta){

	var perSecondMultiplier = 1 + (Game.tech.entries.resourceEfficiencyResearch.current * 0.01) + (Game.stargaze.entries.darkMatter.count * dmBoost);

	rocketFuelps = 0;
	antimatterps = 0;
	

	// if (charcoalToggled) {
	// 	var woodCost = woodburner * woodburnerWoodInput;
	// 	if (!energyLow && globalEnergyLock === false) {
	// 		woodCost += (furnace*furnaceWoodInput) + (kiln*kilnWoodInput) + (fryer*fryerWoodInput) + (microPollutor*microPollutorWoodInput);
	// 	}

	// 	if (getResource(RESOURCE.Wood) + getProduction(RESOURCE.Wood) >= woodCost) {
	// 		woodps -= woodCost;
	// 		charcoalps += woodburner * perSecondMultiplier;

	// 		if (!energyLow && globalEnergyLock === false) {
	// 			charcoalps += ((furnace*furnaceOutput) + (kiln*kilnOutput) + (fryer*fryerOutput) + (microPollutor*microPollutorOutput)) * perSecondMultiplier
	// 		}
	// 	}
	// }

	if (rocketFuelToggled === true) {
		var oilCost = (chemicalPlant*chemicalPlantOilInput) + (oxidisation*oxidisationOilInput);
		var charcoalCost = (chemicalPlant*chemicalPlantCharcoalInput) + (oxidisation*oxidisationCharcoalInput);
		if (getResource(RESOURCE.Oil) + getProduction(RESOURCE.Oil) >= oilCost &&
			getResource(RESOURCE.Charcoal) + getProduction(RESOURCE.Charcoal) >= charcoalCost) {
			oilps -= oilCost;
		charcoalps -= charcoalCost;
		rocketFuelps += ((chemicalPlant*chemicalPlantOutput*chemicalBoost) + (oxidisation*oxidisationOutput)) * perSecondMultiplier;
	}
	var methaneCost = hydrazine*hydrazineMethaneInput;
	if (getResource(RESOURCE.Methane) + getProduction(RESOURCE.Methane) >= methaneCost) {
		methaneps -= methaneCost;
		rocketFuelps += (hydrazine*hydrazineOutput) * perSecondMultiplier;
	}
}

	// if (meteoriteToggled === true) {
	// 	adjustment = adjustCost(RESOURCE.Meteorite, (printer * printerPlasmaInput) + (web * webPlasmaInput) + (smasher * smasherPlasmaInput) + (nebulous * nebulousPlasmaInput), ((printer * printerOutput) + (web * webOutput) + (smasher * smasherOutput) + (nebulous * nebulousOutput)) * perSecondMultiplier);
	// 	if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Plasma, delta) >= adjustment.c) {
	// 		plasmaps -= adjustment.c;
	// 		meteoriteps += adjustment.g;
	// 	}
	// }

	// if (heaterToggled === true && !energyLow && globalEnergyLock === false) {
	// 	var adjustment = adjustCost(RESOURCE.Plasma, heater * heaterHydrogenInput, heater * heaterOutput * perSecondMultiplier);
	// 	if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Hydrogen, delta) >= adjustment.c) {
	// 		hydrogenps -= adjustment.c;
	// 		plasmaps += adjustment.g;
	// 	}
	// }

	// if (plasmaticToggled === true && !energyLow && globalEnergyLock === false) {
	// 	var adjustment = adjustCost(RESOURCE.Plasma, plasmatic * plasmaticHeliumInput, (plasmatic * plasmaticOutput) * perSecondMultiplier);
	// 	if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Helium, delta) >= adjustment.c) {
	// 		heliumps -= adjustment.c;
	// 		plasmaps += adjustment.g;
	// 	}
	// }

	// if (bathToggled === true && !energyLow && globalEnergyLock === false) {
	// 	var adjustment = adjustCost(RESOURCE.Plasma, bath * bathHydrogenInput, (bath * bathOutput) * perSecondMultiplier);
	// 	if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Hydrogen, delta) >= adjustment.c && getResourceAfterTick(RESOURCE.Helium, delta) >= adjustment.c) {
	// 		hydrogenps -= adjustment.c;
	// 		heliumps -= adjustment.c;
	// 		plasmaps += adjustment.g;
	// 	}
	// }

	if (antimatterToggled === true) {
		if (antimatter + antimatterps < antimatterStorage) {
			var plasmaCost = (Game.interstellar.antimatter.entries.drive.count*100);
			var iceCost = (Game.interstellar.antimatter.entries.drive.count*12000);
			if (getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= plasmaCost &&
				getResource(RESOURCE.Ice) + getProduction(RESOURCE.Ice) >= iceCost) {
				plasmaps -= plasmaCost;
			iceps -= iceCost;
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
	boosts[resources[i]] = getProduction(resources[i]) / 4;
}

for (var id in Game.interstellar.stars.entries) {
	var data = Game.interstellar.stars.getStarData(id);
	if (data.owned === true) {
		window[data.resource1.toLowerCase() + "ps"] += boosts[data.resource1.toLowerCase()];
		window[data.resource2.toLowerCase() + "ps"] += boosts[data.resource2.toLowerCase()];
	}
}

function adjustCost(resource, cost, gain) {
	var targetStorage = getStorage(resource);
	var targetCurrent = getResource(resource);
	var targetPs = getProduction(resource);

	var maxGain = targetStorage - targetCurrent;
	if(targetPs < 0) {
		maxGain -= targetPs;
	}

	var gainAbs = Math.min(gain, maxGain);
	var gainRatio = gainAbs / gain;
	var costAbs = cost * gainRatio;

	return {g: gainAbs, c: costAbs};
}
}

function checkRedCost() {
	for (var id in RESOURCE) {
		if(id.indexOf("RocketFuel") == -1){
			Game.settings.turnRedOrGreen(getResource(RESOURCE[id]), getStorage(RESOURCE[id]), RESOURCE[id]);
			Game.settings.turnRedOnNegative(getProduction(RESOURCE[id]), RESOURCE[id] + 'ps');
		} else {
			//console.log("rocketFuel")
		}
	}
	//console.log("rocketFuel")
	//Game.settings.turnRedOnNegative(rocketFuelps, 'rocketFuelps');

	Game.settings.turnRed(getResource(RESOURCE.Wood), 2, "manualCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.Energy), 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.Hydrogen), 10, "manualPlasmaHydrogenCost");

	Game.settings.turnRed(getResource(RESOURCE.Uranium), getStorage(RESOURCE.Uranium)*storagePrice, "uraniumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Uranium)/2.5*storagePrice, "uraniumStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Oil), getStorage(RESOURCE.Oil)*storagePrice, "oilStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Oil)/2.5*storagePrice, "oilStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Metal)*storagePrice, "metalStorageCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Gem), getStorage(RESOURCE.Gem)*storagePrice, "gemStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Gem)/2.5*storagePrice, "gemStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Charcoal), getStorage(RESOURCE.Charcoal)*storagePrice, "charcoalStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Charcoal)/2.5*storagePrice, "charcoalStorageMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.Wood), getStorage(RESOURCE.Wood)*storagePrice, "woodStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Wood)/2.5*storagePrice, "woodStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Lunarite)*storagePrice, "lunariteStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Lunarite)*4*storagePrice, "lunariteStorageMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.Methane), getStorage(RESOURCE.Methane)*storagePrice, "methaneStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Methane)/2.5*storagePrice, "methaneStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Titanium), getStorage(RESOURCE.Titanium)*storagePrice, "titaniumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Titanium)/2.5*storagePrice, "titaniumStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Gold), getStorage(RESOURCE.Gold)*storagePrice, "goldStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Gold)/2.5*storagePrice, "goldStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Silver), getStorage(RESOURCE.Silver)*storagePrice, "silverStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Silver)/2.5*storagePrice, "silverStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Silicon), getStorage(RESOURCE.Silicon)*storagePrice, "siliconStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Silicon)/2.5*storagePrice, "siliconStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lava), getStorage(RESOURCE.Lava)*storagePrice, "lavaStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Lava)/2.5*storagePrice, "lavaStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Hydrogen), getStorage(RESOURCE.Hydrogen)*storagePrice, "hydrogenStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Hydrogen)/2.5*storagePrice, "hydrogenStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Helium), getStorage(RESOURCE.Helium)*storagePrice, "heliumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Helium)/2.5*storagePrice, "heliumStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Ice), getStorage(RESOURCE.Ice)*storagePrice, "iceStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Ice)/2.5*storagePrice, "iceStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Meteorite), getStorage(RESOURCE.Meteorite)*storagePrice, "meteoriteStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Meteorite)*4*storagePrice, "meteoriteStorageLunariteCost");
	
	
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

	Game.settings.turnRed(getResource(RESOURCE.Metal), chemicalPlantMetalCost, "chemicalPlantMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), chemicalPlantGemCost, "chemicalPlantGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), chemicalPlantOilCost, "chemicalPlantOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), oxidisationMetalCost, "oxidisationMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), oxidisationGemCost, "oxidisationGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), oxidisationOilCost, "oxidisationOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Titanium), hydrazineTitaniumCost, "hydrazineTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), hydrazineSiliconCost, "hydrazineSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), hydrazineGoldCost, "hydrazineGoldCost");

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

	Game.settings.turnRed(getResource(RESOURCE.Gold), commsWonderGoldCost, "commsWonderGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), commsWonderSiliconCost, "commsWonderSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Ice), commsWonderIceCost, "commsWonderIceCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), rocketWonderLunariteCost, "rocketWonderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), rocketWonderTitaniumCost, "rocketWonderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), rocketWonderMetalCost, "rocketWonderMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.Uranium), antimatterWonderUraniumCost, "antimatterWonderUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Lava), antimatterWonderLavaCost, "antimatterWonderLavaCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), antimatterWonderOilCost, "antimatterWonderOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Methane), antimatterWonderMethaneCost, "antimatterWonderMethaneCost");

	Game.settings.turnRed(getResource(RESOURCE.Meteorite), portalMeteoriteCost, "portalMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.Helium), portalHeliumCost, "portalHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), portalSiliconCost, "portalSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Plasma), stargateWonderPlasmaCost, "stargateWonderPlasmaCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), stargateWonderSiliconCost, "stargateWonderSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), stargateWonderMeteoriteCost, "stargateWonderMeteoriteCost");

	if(document.getElementById("roc_tier1Rocket_shield_c") != null){
		Game.settings.turnRed(Game.interstellar.rocketParts.entries.shield.count, 50, "roc_tier1Rocket_shield_c");
		Game.settings.turnRed(Game.interstellar.rocketParts.entries.engine.count, 25, "roc_tier1Rocket_engine_c");
		Game.settings.turnRed(Game.interstellar.rocketParts.entries.aero.count, 15, "roc_tier1Rocket_aero_c");
	}
}

function refreshResources(){
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
	for(var i=0; i<activated.length; i++){
		document.getElementById(activated[i] + "Activation").innerHTML = "Activated";
		document.getElementById(activated[i] + "Activation").className += " green";
	}
	if(techUnlocked === true){
		for(var id in Game.resources.entries){
			if(id != "energy" && id != "plasma" && id != "science" && id != "rocketFuel"){
				Game.buildings.unlock(id + "T3");
			}
		}
	}
	if(meteoriteUnlocked === true){
		for(var id in Game.resources.entries){
			if(id != "energy" && id != "plasma" && id != "science" && id != "rocketFuel"){
				Game.buildings.unlock(id + "T4");
			}
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

function calculateKardashevLevel() {
	return (Math.log10(calculateEnergyUse(1)-6))/10;
}