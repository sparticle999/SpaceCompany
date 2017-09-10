function calculateEnergyOutput(delta) {
	if (globalEnergyLock === true) {
		return 0;
	}

	// Fixed outputs first
	var output = (ring*5000) + (swarm*25000) + (sphere*1000000) + (solarPanel*solarPanelOutput);

	if (getResourceAfterTick(RESOURCE.CHARCOAL, delta) >= charcoalEngine * delta) {
		output += charcoalEngine * charcoalEngineOutput;
	}

	if (getResourceAfterTick(RESOURCE.METHANE, delta) >= methaneStation * 6 * delta) {
		output += methaneStation * 23;
	}

	if (getResourceAfterTick(RESOURCE.URANIUM, delta) >= nuclearStation * 7 * delta) {
		output += nuclearStation * 153;
	}

	if (getResourceAfterTick(RESOURCE.LAVA, delta) > magmatic * 11 * delta) {
		output += magmatic * 191;
	}

	if (getResourceAfterTick(RESOURCE.HYDROGEN, delta) >= fusionReactor * 10 * delta &&
		getResourceAfterTick(RESOURCE.HELIUM, delta) >= fusionReactor * 10 * delta) {
		output += fusionReactor * 273;
	}

	return output;
}

function calculateEnergyUse(delta) {
	if (globalEnergyLock === true) {
		return 0;
	}

	var use = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(laserCutter*4);
	use += (moonDrill*20)+(suctionExcavator*16)+(lunariteDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	use += (cubic*40)+(extractor*58)+(magnet*63)+(tanker*72)+(iceDrill*83);

	use += (oilField*17)+(gigaDrill*9)+(diamondDrill*15)+(deforester*16);
	use += (moonQuarry*70)+(spaceCow*49)+(pentaDrill*46)+(deathStar*81)+(bertha*65)+(annihilator*53);
	use += (enricher*180)+(extruder*237)+(eCell*234)+(compressor*248)+(freezer*397);

	use += (oilRig*44)+(quantumDrill*24)+(carbyneDrill*40)+(infuser*43);
	use += (planetExcavator*182)+(vent*132)+(titanDrill*123)+(actuator*223)+(cannon*170)+(desert*138);
	use += (recycler*463)+(veluptuator*698)+(hindenburg*631)+(skimmer*670)+(mrFreeze*1135);

	if (charcoalToggled === true) {
		use += (furnace*3)+(kiln*13)+(fryer*34);
	}

	if (heaterToggled && getResource(RESOURCE.HYDROGEN) + getProduction(RESOURCE.HYDROGEN) >= heater * 10 * delta &&
		getResource(RESOURCE.PLASMA) + getProduction(RESOURCE.PLASMA) >= heater * delta) {
		use += heater * 1000;
	}

	if (plasmaticToggled && getResource(RESOURCE.PLASMA) + getProduction(RESOURCE.PLASMA) >= plasmatic * 10 * delta) {
		use += plasmatic * 8500;
	}

	var energyEfficiencyTech = Game.tech.getTechData('energyEfficiencyResearch');
	var multiplier = 1 - (energyEfficiencyTech.current * 0.01);

	return use * multiplier;
}

function toggleEnergy() {
	globalEnergyLock = !globalEnergyLock;
}

function fixStorageRounding() {
	var precision = 100;
	if (Math.round(getResource(RESOURCE.METEORITE) * precision) / precision === getStorage(RESOURCE.METEORITE)) {
		Game.resources.maxResource(RESOURCE.METEORITE);
	}

	if (Math.round(getResource(RESOURCE.PLASMA) * precision) / precision === getStorage(RESOURCE.PLASMA)) {
		Game.resources.maxResource(RESOURCE.PLASMA);
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

	// First we update and check the energy
	var energyOutput = calculateEnergyOutput(delta);
	var energyUse = calculateEnergyUse(delta);
	energyps = energyOutput - energyUse;

	var deltaEnergyDiff = (energyOutput * delta) - (energyUse * delta);
	energyLow = deltaEnergyDiff < 0 && (getResource(RESOURCE.ENERGY) <= 0 || getResource(RESOURCE.ENERGY) < deltaEnergyDiff);

	// calculate multipliers (add prestige etc here)
	var resourceEfficiencyTech = Game.tech.getTechData('efficiencyResearch');
	var perSecondMultiplier = 1 + (resourceEfficiencyTech.current * 0.01);

	// Now we calculate the base per second
	uraniumps = grinder * perSecondMultiplier;
	oilps = pump * perSecondMultiplier;
	metalps = miner * perSecondMultiplier;
	gemps = gemMiner * perSecondMultiplier;
	charcoalps = 0;
	woodps = woodcutter * perSecondMultiplier;
	lunariteps = moonWorker * perSecondMultiplier;
	methaneps = vacuum * perSecondMultiplier;
	titaniumps = explorer * perSecondMultiplier;
	goldps = droid * perSecondMultiplier;
	silverps = scout * perSecondMultiplier;
	siliconps = blowtorch * perSecondMultiplier;
	lavaps = crucible * perSecondMultiplier;
	hydrogenps = collector * perSecondMultiplier;
	heliumps = drone * perSecondMultiplier;
	iceps = icePick * perSecondMultiplier;
	plasmaps = 0;
	meteoriteps = 0;
	rocketFuelps = 0;
	antimatterps = 0;

	// Science
	var scienceEfficiencyTech = Game.tech.getTechData('scienceEfficiencyResearch');
	var scienceMultiplier = 1 + (scienceEfficiencyTech.current * 0.02);
	scienceps = ((lab*0.1) + (labT2*1) + (labT3*10) + (labT4*100)) * scienceMultiplier;

	if (!energyLow && globalEnergyLock === false) {
		// Add resource gain from machines
		oilps +=  ((pumpjack*pumpjackOutput) + (oilField*63) + (oilRig*246)) * perSecondMultiplier;
		metalps +=  ((heavyDrill*heavyDrillOutput) + (gigaDrill*108) + (quantumDrill*427)) * perSecondMultiplier;
		gemps +=  ((advancedDrill*advancedDrillOutput) + (diamondDrill*89) + (carbyneDrill*358)) * perSecondMultiplier;
		woodps +=  ((laserCutter*laserCutterOutput) + (deforester*74) + (infuser*297)) * perSecondMultiplier;
		lunariteps +=  ((moonDrill*10) + (moonQuarry*53) + (planetExcavator*207)) * perSecondMultiplier;
		methaneps +=  ((suctionExcavator*8) + (spaceCow*37) + (vent*149)) * perSecondMultiplier;
		titaniumps +=  ((lunariteDrill*9) + (pentaDrill*49) + (titanDrill*197)) * perSecondMultiplier;
		goldps +=  ((destroyer*8) + (deathStar*51) + (actuator*211)) * perSecondMultiplier;
		silverps +=  ((spaceLaser*13) + (bertha*53) + (cannon*208)) * perSecondMultiplier;
		siliconps +=  ((scorcher*9) + (annihilator*40) + (desert*157)) * perSecondMultiplier;
		uraniumps +=  ((cubic*9) +(enricher*61) + (recycler*235)) * perSecondMultiplier;
		lavaps +=  ((extractor*7) + (extruder*43) + (veluptuator*187)) * perSecondMultiplier;
		hydrogenps +=  ((magnet*5) + (eCell*28) + (hindenburg*113)) * perSecondMultiplier;
		heliumps +=  ((tanker*11) + (compressor*57) + (skimmer*232)) * perSecondMultiplier;
		iceps +=  ((iceDrill*9) + (freezer*65) + (mrFreeze*278)) * perSecondMultiplier;

		// Deduct resource use from machines
		charcoalps -= charcoalEngine;
		methaneps -= methaneStation * 6;
		uraniumps -= nuclearStation * 7;
		lavaps -= magmatic * 11;
		hydrogenps -= fusionReactor * 10;
		heliumps -= fusionReactor * 10;
	}

	if (charcoalToggled) {
		var woodCost = woodburner * 2;
		if (!energyLow && globalEnergyLock === false) {
			woodCost += (furnace*furnaceWoodInput) + (kiln*56) + (fryer*148);
		}

		if (getResource(RESOURCE.WOOD) + getProduction(RESOURCE.WOOD) >= woodCost) {
			woodps -= woodCost;
			charcoalps += woodburner * perSecondMultiplier;

			if (!energyLow && globalEnergyLock === false) {
				charcoalps += ((furnace*furnaceOutput) + (kiln*53) + (fryer*210)) * perSecondMultiplier
			}
		}
	}

	if (rocketFuelToggled === true) {
		var oilCost = (chemicalPlant*20) + (oxidisation*100);
		var charcoalCost = (chemicalPlant*20) + (oxidisation*100);
		if (getResource(RESOURCE.OIL) + getProduction(RESOURCE.OIL) >= oilCost &&
			getResource(RESOURCE.CHARCOAL) + getProduction(RESOURCE.CHARCOAL) >= charcoalCost) {
			oilps -= oilCost;
			charcoalps -= charcoalCost;
			rocketFuelps += ((chemicalPlant*0.2) + (oxidisation*1.5)) * perSecondMultiplier;
		}
		var methaneCost = hydrazine*520;
		if (getResource(RESOURCE.METHANE) + getProduction(RESOURCE.METHANE) >= methaneCost) {
			methaneps -= methaneCost;
			rocketFuelps += (hydrazine*20) * perSecondMultiplier;
		}
	}

	if (meteoriteToggled === true) {
		adjustment = adjustCost(RESOURCE.METEORITE, (printer * 3) + (web * 21), (printer + (web * 8)) * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.PLASMA, delta) >= adjustment.c) {
			plasmaps -= adjustment.c;
			meteoriteps += adjustment.g;
		}
	}

	if (heaterToggled === true && !energyLow && globalEnergyLock === false) {
		var adjustment = adjustCost(RESOURCE.PLASMA, heater * 10, heater * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.HYDROGEN, delta) >= adjustment.c) {
			hydrogenps -= adjustment.c;
			plasmaps += adjustment.g;
		}
	}

	if (plasmaticToggled === true && !energyLow && globalEnergyLock === false) {
		var adjustment = adjustCost(RESOURCE.PLASMA, plasmatic * 80, (plasmatic * 10) * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.HELIUM, delta) >= adjustment.c) {
			heliumps -= adjustment.c;
			plasmaps += adjustment.g;
		}
	}

	if (antimatterToggled === true) {
		if (antimatter + antimatterps < 100000) {
			var plasmaCost = (Game.interstellar.antimatter.entries.drive.count*100);
			var iceCost = (Game.interstellar.antimatter.entries.drive.count*12000);
			if (getResource(RESOURCE.PLASMA) + getProduction(RESOURCE.PLASMA) >= plasmaCost &&
				getResource(RESOURCE.ICE) + getProduction(RESOURCE.ICE) >= iceCost) {
				plasmaps -= plasmaCost;
				iceps -= iceCost;
				antimatterps += Game.interstellar.antimatter.entries.drive.count/2;
			}
		}
		else {
			antimatter = 100000;
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
		Game.settings.turnRedOrGreen(getResource(RESOURCE[id]), getStorage(RESOURCE[id]), RESOURCE[id]);
		Game.settings.turnRedOnNegative(getProduction(RESOURCE[id]), RESOURCE[id] + 'ps');
	}

	Game.settings.turnRedOnNegative(rocketFuelps, 'rocketFuelps');

	Game.settings.turnRed(getResource(RESOURCE.WOOD), 2, "manualCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.ENERGY), 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.HYDROGEN), 10, "manualPlasmaHydrogenCost");

	Game.settings.turnRed(getResource(RESOURCE.URANIUM), getStorage(RESOURCE.URANIUM), "uraniumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.URANIUM)/2.5, "uraniumStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.OIL), getStorage(RESOURCE.OIL), "oilStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), getStorage(RESOURCE.OIL)/2.5, "oilStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.METAL), getStorage(RESOURCE.METAL), "metalStorageCost");
	
	Game.settings.turnRed(getResource(RESOURCE.GEM), getStorage(RESOURCE.GEM), "gemStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), getStorage(RESOURCE.GEM)/2.5, "gemStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.CHARCOAL), getStorage(RESOURCE.CHARCOAL), "charcoalStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), getStorage(RESOURCE.CHARCOAL)/2.5, "charcoalStorageMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.WOOD), getStorage(RESOURCE.WOOD), "woodStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), getStorage(RESOURCE.WOOD)/2.5, "woodStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.LUNARITE), "lunariteStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), getStorage(RESOURCE.LUNARITE)*4, "lunariteStorageMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.METHANE), getStorage(RESOURCE.METHANE), "methaneStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.METHANE)/2.5, "methaneStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), getStorage(RESOURCE.TITANIUM), "titaniumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.TITANIUM)/2.5, "titaniumStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.GOLD), getStorage(RESOURCE.GOLD), "goldStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.GOLD)/2.5, "goldStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.SILVER), getStorage(RESOURCE.SILVER), "silverStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.SILVER)/2.5, "silverStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.SILICON), getStorage(RESOURCE.SILICON), "siliconStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.SILICON)/2.5, "siliconStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.LAVA), getStorage(RESOURCE.LAVA), "lavaStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.LAVA)/2.5, "lavaStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.HYDROGEN), getStorage(RESOURCE.HYDROGEN), "hydrogenStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.HYDROGEN)/2.5, "hydrogenStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.HELIUM), getStorage(RESOURCE.HELIUM), "heliumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.HELIUM)/2.5, "heliumStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.ICE), getStorage(RESOURCE.ICE), "iceStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.ICE)/2.5, "iceStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.METEORITE), getStorage(RESOURCE.METEORITE), "meteoriteStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), getStorage(RESOURCE.METEORITE)*4, "meteoriteStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.SILVER), PSUSilverCost, "PSUSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), PSUGoldCost, "PSUGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), PSUUraniumCost, "PSUUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.SILVER), PSUT2SilverCost, "PSUT2SilverCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), PSUT2GoldCost, "PSUT2GoldCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), PSUT2UraniumCost, "PSUT2UraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), heaterLunariteCost, "heaterLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), heaterGemCost, "heaterGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), heaterSiliconCost, "heaterSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), plasmaticLunariteCost, "plasmaticLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), plasmaticSiliconCost, "plasmaticSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), plasmaticMeteoriteCost, "plasmaticMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), batteryMetalCost, "batteryMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), batteryGemCost, "batteryGemCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), batteryLunariteCost, "batteryLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), batteryT2MetalCost, "batteryT2MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), batteryT2GemCost, "batteryT2GemCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), batteryT2LunariteCost, "batteryT2LunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), batteryT4MetalCost, "batteryT4MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), batteryT4GemCost, "batteryT4GemCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), batteryT4LunariteCost, "batteryT4LunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.METAL), batteryT3MetalCost, "batteryT3MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), batteryT3GemCost, "batteryT3GemCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), batteryT3LunariteCost, "batteryT3LunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), charcoalEngineMetalCost, "charcoalEngineMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), charcoalEngineGemCost, "charcoalEngineGemCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), solarPanelMetalCost, "solarPanelMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), solarPanelGemCost, "solarPanelGemCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), methaneStationLunariteCost, "methaneStationLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), methaneStationTitaniumCost, "methaneStationTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), nuclearStationLunariteCost, "nuclearStationLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), nuclearStationTitaniumCost, "nuclearStationTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), magmaticLunariteCost, "magmaticLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), magmaticGemCost, "magmaticGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILVER), magmaticSilverCost, "magmaticSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), fusionReactorLunariteCost, "fusionReactorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), fusionReactorTitaniumCost, "fusionReactorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), fusionReactorSiliconCost, "fusionReactorSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), pumpMetalCost, "pumpMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), pumpGemCost, "pumpGemCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), pumpjackMetalCost, "pumpjackMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), pumpjackGemCost, "pumpjackGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), pumpjackOilCost, "pumpjackOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), oilFieldLunariteCost, "oilFieldLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), oilFieldTitaniumCost, "oilFieldTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), oilFieldSiliconCost, "oilFieldSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), oilRigLunariteCost, "oilRigLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), oilRigTitaniumCost, "oilRigTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), oilRigMeteoriteCost, "oilRigMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), minerMetalCost, "minerMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), minerWoodCost, "minerWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), heavyDrillMetalCost, "heavyDrillMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), heavyDrillGemCost, "heavyDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), heavyDrillOilCost, "heavyDrillOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), gigaDrillLunariteCost, "gigaDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), gigaDrillGemCost, "gigaDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), gigaDrillSiliconCost, "gigaDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), quantumDrillLunariteCost, "quantumDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), quantumDrillGoldCost, "quantumDrillGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), quantumDrillMeteoriteCost, "quantumDrillMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), gemMinerMetalCost, "gemMinerMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), gemMinerGemCost, "gemMinerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), advancedDrillMetalCost, "advancedDrillMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), advancedDrillGemCost, "advancedDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), advancedDrillOilCost, "advancedDrillOilCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), diamondDrillLunariteCost, "diamondDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), diamondDrillGemCost, "diamondDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), diamondDrillSiliconCost, "diamondDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), carbyneDrillLunariteCost, "carbyneDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), carbyneDrillGemCost, "carbyneDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), carbyneDrillMeteoriteCost, "carbyneDrillMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), woodburnerMetalCost, "woodburnerMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), woodburnerWoodCost, "woodburnerWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), furnaceMetalCost, "furnaceMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), furnaceWoodCost, "furnaceWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), furnaceOilCost, "furnaceOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), kilnLunariteCost, "kilnLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), kilnGemCost, "kilnGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), kilnSiliconCost, "kilnSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), fryerLunariteCost, "fryerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.LAVA), fryerLavaCost, "fryerLavaCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), fryerMeteoriteCost, "fryerMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), woodcutterMetalCost, "woodcutterMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), woodcutterWoodCost, "woodcutterWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), laserCutterMetalCost, "laserCutterMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), laserCutterGemCost, "laserCutterGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), laserCutterOilCost, "laserCutterOilCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), deforesterLunariteCost, "deforesterLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), deforesterTitaniumCost, "deforesterTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), deforesterSiliconCost, "deforesterSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), infuserLunariteCost, "infuserLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), infuserOilCost, "infuserOilCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), infuserMeteoriteCost, "infuserMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.GEM), moonWorkerGemCost, "moonWorkerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), moonDrillMetalCost, "moonDrillMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), moonDrillGemCost, "moonDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), moonDrillOilCost, "moonDrillOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), moonQuarryLunariteCost, "moonQuarryLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), moonQuarryGemCost, "moonQuarryGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), moonQuarrySiliconCost, "moonQuarrySiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), planetExcavatorTitaniumCost, "planetExcavatorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.ICE), planetExcavatorIceCost, "planetExcavatorIceCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), planetExcavatorMeteoriteCost, "planetExcavatorMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), vacuumLunariteCost, "vacuumLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), vacuumGemCost, "vacuumGemCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), suctionExcavatorLunariteCost, "suctionExcavatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), suctionExcavatorGemCost, "suctionExcavatorGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), suctionExcavatorOilCost, "suctionExcavatorOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), spaceCowLunariteCost, "spaceCowLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), spaceCowTitaniumCost, "spaceCowTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), spaceCowSiliconCost, "spaceCowSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), ventLunariteCost, "ventLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.HELIUM), ventHeliumCost, "ventHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), ventMeteoriteCost, "ventMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.GEM), explorerGemCost, "explorerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), lunariteDrillLunariteCost, "lunariteDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), lunariteDrillGemCost, "lunariteDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), lunariteDrillOilCost, "lunariteDrillOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), pentaDrillLunariteCost, "pentaDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), pentaDrillGemCost, "pentaDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), pentaDrillSiliconCost, "pentaDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), titanDrillLunariteCost, "titanDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), titanDrillGoldCost, "titanDrillGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), titanDrillMeteoriteCost, "titanDrillMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), droidLunariteCost, "droidLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.METHANE), droidMethaneCost, "droidMethaneCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), destroyerLunariteCost, "destroyerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), destroyerGemCost, "destroyerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), destroyerOilCost, "destroyerOilCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), deathStarLunariteCost, "deathStarLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.SILVER), deathStarSilverCost, "deathStarSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), deathStarSiliconCost, "deathStarSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), actuatorLunariteCost, "actuatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.HELIUM), actuatorHeliumCost, "actuatorHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), actuatorMeteoriteCost, "actuatorMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), scoutLunariteCost, "scoutLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), scoutTitaniumCost, "scoutTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), spaceLaserLunariteCost, "spaceLaserLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), spaceLaserGemCost, "spaceLaserGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), spaceLaserOilCost, "spaceLaserOilCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), berthaLunariteCost, "berthaLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), berthaTitaniumCost, "berthaTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), berthaSiliconCost, "berthaSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), cannonLunariteCost, "cannonLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), cannonOilCost, "cannonOilCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), cannonMeteoriteCost, "cannonMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), blowtorchLunariteCost, "blowtorchLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), blowtorchTitaniumCost, "blowtorchTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), scorcherLunariteCost, "scorcherLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), scorcherGemCost, "scorcherGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), scorcherOilCost, "scorcherOilCost");
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), annihilatorLunariteCost, "annihilatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), annihilatorGemCost, "annihilatorGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILVER), annihilatorSilverCost, "annihilatorSilverCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), desertLunariteCost, "desertLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), desertSiliconCost, "desertSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), desertMeteoriteCost, "desertMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), labMetalCost, "labMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), labGemCost, "labGemCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), labWoodCost, "labWoodCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), labT2MetalCost, "labT2MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), labT2GemCost, "labT2GemCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), labT2WoodCost, "labT2WoodCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), labT3MetalCost, "labT3MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), labT3GemCost, "labT3GemCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), labT3WoodCost, "labT3WoodCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), labT4MetalCost, "labT4MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), labT4GemCost, "labT4GemCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), labT4WoodCost, "labT4WoodCost");

	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 5, "unlockStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 20, "unlockBasicEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 30, "unlockOilCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 50, "unlockSolarCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 100, "unlockMachinesCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 500, "unlockDestructionCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 300, "upgradeResourceTechCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 500, "unlockSolarSystemCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 500, "unlockLabT2Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 1000, "upgradeEngineTechCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 450000, "unlockRocketFuelT2Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 3200000, "unlockRocketFuelT3Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 3000, "unlockLabT3Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 5000, "upgradeSolarTechCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 15000, "unlockBatteriesCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 40000, "unlockPlasmaCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 60000, "unlockPlasmaTier2Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 50000000, "unlockLabT4Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 60000, "unlockEmcCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 100000, "unlockMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 75000, "unlockMeteoriteTier1Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 100000, "unlockMeteoriteTier2Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 100000, "unlockDysonCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 300000, "unlockBatteriesT2Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 3000000, "unlockBatteriesT3Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 30000000, "unlockBatteriesT4Cost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 500000, "unlockDysonSphereCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 9500000, "unlockPSUCost");
	Game.settings.turnRed(getResource(RESOURCE.SCIENCE), 37000000, "unlockPSUT2Cost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), 1200, "rocketMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), 900, "rocketGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), 1000, "rocketOilCost");

	Game.settings.turnRed(rocketFuel, 20, "rocketRocketFuelCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), chemicalPlantMetalCost, "chemicalPlantMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), chemicalPlantGemCost, "chemicalPlantGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), chemicalPlantOilCost, "chemicalPlantOilCost");

	Game.settings.turnRed(getResource(RESOURCE.METAL), oxidisationMetalCost, "oxidisationMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), oxidisationGemCost, "oxidisationGemCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), oxidisationOilCost, "oxidisationOilCost");

	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), hydrazineTitaniumCost, "hydrazineTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), hydrazineSiliconCost, "hydrazineSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), hydrazineGoldCost, "hydrazineGoldCost");

	Game.settings.turnRed(rocketFuel, 20, "moonRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 50, "venusRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 80, "marsRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 200, "asteroidBeltRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 500, "wonderStationRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 1000, "jupiterRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 2000, "saturnRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 5000, "plutoRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 6000, "kuiperBeltRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 6000, "solCenterRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 7000, "solCenterRocketFuelCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), grinderLunariteCost, "grinderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), grinderTitaniumCost, "grinderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), grinderGoldCost, "grinderGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), cubicLunariteCost, "cubicLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), cubicUraniumCost, "cubicUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), cubicOilCost, "cubicOilCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), enricherLunariteCost, "enricherLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), enricherTitaniumCost, "enricherTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), enricherSiliconCost, "enricherSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), recyclerLunariteCost, "recyclerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.METHANE), recyclerMethaneCost, "recyclerMethaneCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), recyclerMeteoriteCost, "recyclerMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), crucibleLunariteCost, "crucibleLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), crucibleGemCost, "crucibleGemCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), extractorLunariteCost, "extractorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), extractorTitaniumCost, "extractorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), extractorSiliconCost, "extractorSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), extruderLunariteCost, "extruderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), extruderTitaniumCost, "extruderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), extruderSiliconCost, "extruderSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), veluptuatorLunariteCost, "veluptuatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), veluptuatorGoldCost, "veluptuatorGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), veluptuatorMeteoriteCost, "veluptuatorMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), collectorLunariteCost, "collectorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), collectorTitaniumCost, "collectorTitaniumCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), magnetLunariteCost, "magnetLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), magnetTitaniumCost, "magnetTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), magnetGoldCost, "magnetGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.SILVER), eCellSilverCost, "eCellSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), eCellGoldCost, "eCellGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), eCellSiliconCost, "eCellSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), hindenburgLunariteCost, "hindenburgLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.METHANE), hindenburgMethaneCost, "hindenburgMethaneCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), hindenburgMeteoriteCost, "hindenburgMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), droneLunariteCost, "droneLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), droneSiliconCost, "droneSiliconCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), tankerLunariteCost, "tankerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), tankerTitaniumCost, "tankerTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), tankerSiliconCost, "tankerSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), compressorLunariteCost, "compressorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), compressorTitaniumCost, "compressorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), compressorSiliconCost, "compressorSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), skimmerLunariteCost, "skimmerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), skimmerTitaniumCost, "skimmerTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), skimmerMeteoriteCost, "skimmerMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), icePickLunariteCost, "icePickLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), icePickGemCost, "icePickGemCost");
	
	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), iceDrillLunariteCost, "iceDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), iceDrillTitaniumCost, "iceDrillTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), iceDrillSiliconCost, "iceDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), freezerLunariteCost, "freezerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), freezerTitaniumCost, "freezerTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), freezerSiliconCost, "freezerSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.WOOD), mrFreezeWoodCost, "mrFreezeWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.HELIUM), mrFreezeHeliumCost, "mrFreezeHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), mrFreezeMeteoriteCost, "mrFreezeMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), printerLunariteCost, "printerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), printerSiliconCost, "printerSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), webLunariteCost, "webLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), webUraniumCost, "webUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), webSiliconCost, "webSiliconCost");

	// Sol Center

	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), dysonTitaniumCost, "dysonTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), dysonGoldCost, "dysonGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), dysonSiliconCost, "dysonSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), dysonMeteoriteCost, "dysonMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.ICE), dysonIceCost, "dysonIceCost");

	Game.settings.turnRed(rocketFuel, 50000, "ringRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 250000, "swarmRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 1000000, "sphereRocketFuelCost");

	Game.settings.turnRed(getResource(RESOURCE.HYDROGEN), 1500, "unlockPlasmaResearchHydrogenCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), 1500, "unlockPlasmaResearchUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), 15000, "unlockPlasmaResearchOilCost");
	Game.settings.turnRed(getResource(RESOURCE.WOOD), 15000, "unlockPlasmaResearchWoodCost");

	Game.settings.turnRed(getResource(RESOURCE.ENERGY), 75000, "unlockEmcResearchEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.PLASMA), 100, "unlockEmcResearchPlasmaCost");

	Game.settings.turnRed(getResource(RESOURCE.ENERGY), 100000, "unlockDysonResearchEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.PLASMA), 10000, "unlockDysonResearchPlasmaCost");

	// Wonders

	Game.settings.turnRed(getResource(RESOURCE.GEM), preciousGemCost, "preciousGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILVER), preciousSilverCost, "preciousSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), preciousGoldCost, "preciousGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.GEM), preciousActivateGemCost, "preciousActivateGemCost");
	Game.settings.turnRed(getResource(RESOURCE.SILVER), preciousActivateSilverCost, "preciousActivateSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), preciousActivateGoldCost, "preciousActivateGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.WOOD), energeticWoodCost, "energeticWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.CHARCOAL), energeticCharcoalCost, "energeticCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), energeticUraniumCost, "energeticUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.WOOD), energeticActivateWoodCost, "energeticActivateWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.CHARCOAL), energeticActivateCharcoalCost, "energeticActivateCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.URANIUM), energeticActivateUraniumCost, "energeticActivateUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.SILICON), techSiliconCost, "techSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), techGoldCost, "techGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), techGemCost, "techGemCost");

	Game.settings.turnRed(getResource(RESOURCE.SILICON), techActivateSiliconCost, "techActivateSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.GOLD), techActivateGoldCost, "techActivateGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.GEM), techActivateGemCost, "techActivateGemCost");

	Game.settings.turnRed(getResource(RESOURCE.METEORITE), meteoriteMeteoriteCost, "meteoriteMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.ICE), meteoriteIceCost, "meteoriteIceCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), meteoriteSiliconCost, "meteoriteSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.METEORITE), meteoriteActivateMeteoriteCost, "meteoriteActivateMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.ICE), meteoriteActivateIceCost, "meteoriteActivateIceCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), meteoriteActivateSiliconCost, "meteoriteActivateSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.GOLD), 6000000, "commsWonderGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), 10000000, "commsWonderSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.ICE), 6000000, "commsWonderIceCost");

	Game.settings.turnRed(getResource(RESOURCE.LUNARITE), 8000000, "rocketWonderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.TITANIUM), 6000000, "rocketWonderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.METAL), 12000000, "rocketWonderMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.URANIUM), 6000000, "antimatterWonderUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.LAVA), 10000000, "antimatterWonderLavaCost");
	Game.settings.turnRed(getResource(RESOURCE.OIL), 8000000, "antimatterWonderOilCost");
	Game.settings.turnRed(getResource(RESOURCE.METHANE), 6000000, "antimatterWonderMethaneCost");

	Game.settings.turnRed(getResource(RESOURCE.METEORITE), 500000, "portalMeteoriteCost");
	Game.settings.turnRed(getResource(RESOURCE.HELIUM), 8000000, "portalHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), 6000000, "portalSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.PLASMA), 500000, "stargateWonderPlasmaCost");
	Game.settings.turnRed(getResource(RESOURCE.SILICON), 920000000, "stargateWonderSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.METEORITE), 17000000, "stargateWonderMeteoriteCost");
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
