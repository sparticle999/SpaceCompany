function calculateEnergyOutput(delta) {
	if (globalEnergyLock === true) {
		return 0;
	}

	var multiplier = 1 + (Game.stargaze.entries.darkMatter.count * dmBoost);

	// Fixed outputs first
	var output = (ring*5000) + (swarm*25000) + (sphere*1000000) + (solarPanel*solarPanelOutput);

	if (getResourceAfterTick(RESOURCE.Charcoal, delta) >= charcoalEngine * delta) {
		output += charcoalEngine * charcoalEngineOutput;
	}

	if (getResourceAfterTick(RESOURCE.Methane, delta) >= methaneStation * 6 * delta) {
		output += methaneStation * 23;
	}

	if (getResourceAfterTick(RESOURCE.Uranium, delta) >= nuclearStation * 7 * delta) {
		output += nuclearStation * 153;
	}

	if (getResourceAfterTick(RESOURCE.Lava, delta) > magmatic * 11 * delta) {
		output += magmatic * 191;
	}

	if (getResourceAfterTick(RESOURCE.Hydrogen, delta) >= fusionReactor * 10 * delta &&
		getResourceAfterTick(RESOURCE.Helium, delta) >= fusionReactor * 10 * delta) {
		output += fusionReactor * 273;
	}

	return output * multiplier;
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

    use += (fossilator*258)+(multiDrill*131)+(diamondChamber*273)+(forest*275);
    use += (cloner*1157)+(interCow*879)+(club*690)+(philosopher*1387)+(werewolf*984)+(tardis*746);
    use += (planetNuke*2719)+(condensator*4142)+(harvester*3584)+(cage*4462)+(overexchange*6667);

    if(charcoalToggled === true){
        use += (furnace*3)+(kiln*13)+(fryer*34)+(microPollutor*212);
    }

	if (heaterToggled && getResource(RESOURCE.Hydrogen) + getProduction(RESOURCE.Hydrogen) >= heater * 10 * delta &&
		getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= heater * delta) {
		use += heater * 1000;
	}

	if (plasmaticToggled && getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= plasmatic * 10 * delta) {
		use += plasmatic * 8500;
	}

	if (bathToggled && getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= bath * 10 * delta) {
		use += bath * 15000;
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

	// First we update and check the energy
	var energyOutput = calculateEnergyOutput(delta);
	var energyUse = calculateEnergyUse(delta);
	energyps = energyOutput - energyUse;

	var deltaEnergyDiff = (energyOutput * delta) - (energyUse * delta);
	energyLow = deltaEnergyDiff < 0 && (getResource(RESOURCE.Energy) <= 0 || getResource(RESOURCE.Energy) < deltaEnergyDiff);

	// calculate multipliers (add prestige etc here)
	var resourceEfficiencyTech = Game.tech.getTechData('efficiencyResearch');
	var perSecondMultiplier = 1 + (resourceEfficiencyTech.current * 0.01) + (Game.stargaze.entries.darkMatter.count * dmBoost);

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
	var scienceMultiplier = 1 + (scienceEfficiencyTech.current * 0.02) + (Game.stargaze.entries.darkMatter.count * dmBoost);
	scienceps = ((lab*0.1) + (labT2*1) + (labT3*10) + (labT4*100) + labT5*1000) * scienceMultiplier;

	if (!energyLow && globalEnergyLock === false) {
		// Add resource gain from machines

        oilps +=  ((pumpjack*pumpjackOutput) + (oilField*63) + (oilRig*246) + (fossilator*2630)) * perSecondMultiplier;
        metalps +=  ((heavyDrill*heavyDrillOutput) + (gigaDrill*108) + (quantumDrill*427) + (multiDrill*4797)) * perSecondMultiplier;
        gemps +=  ((advancedDrill*advancedDrillOutput) + (diamondDrill*89) + (carbyneDrill*358) + (diamondChamber*3861)) * perSecondMultiplier;
        woodps +=  ((laserCutter*laserCutterOutput) + (deforester*74) + (infuser*297) + (forest*3106)) * perSecondMultiplier;
        lunariteps +=  ((moonDrill*10) + (moonQuarry*53) + (planetExcavator*207) + (cloner*2206)) * perSecondMultiplier;
        methaneps +=  ((suctionExcavator*8) + (spaceCow*37) + (vent*149) + (interCow*1356)) * perSecondMultiplier;
        titaniumps +=  ((lunariteDrill*9) + (pentaDrill*49) + (titanDrill*197) + (club*2134)) * perSecondMultiplier;
        goldps +=  ((destroyer*8) + (deathStar*51) + (actuator*211) + (philosopher*1960)) * perSecondMultiplier;
        silverps +=  ((spaceLaser*13) + (bertha*53) + (cannon*208) + (werewolf*2245)) * perSecondMultiplier;
        siliconps +=  ((scorcher*9) + (annihilator*40) + (desert*157) + (tardis*1487)) * perSecondMultiplier;
        uraniumps +=  ((cubic*9) +(enricher*61) + (recycler*235) + (planetNuke*2412)) * perSecondMultiplier;
        lavaps +=  ((extractor*7) + (extruder*43) + (veluptuator*187) + (condensator*2103)) * perSecondMultiplier;
        hydrogenps +=  ((magnet*5) + (eCell*28) + (hindenburg*113) + (harvester*1292)) * perSecondMultiplier;
        heliumps +=  ((tanker*11) + (compressor*57) + (skimmer*232) + (cage*2185)) * perSecondMultiplier;
        iceps +=  ((iceDrill*9) + (freezer*65) + (mrFreeze*278) + (overexchange*2532)) * perSecondMultiplier;

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
			woodCost += (furnace*furnaceWoodInput) + (kiln*56) + (fryer*148) + (microPollutor*841);
		}

		if (getResource(RESOURCE.Wood) + getProduction(RESOURCE.Wood) >= woodCost) {
			woodps -= woodCost;
			charcoalps += woodburner * perSecondMultiplier;

			if (!energyLow && globalEnergyLock === false) {
				charcoalps += ((furnace*furnaceOutput) + (kiln*53) + (fryer*210) + (microPollutor*2041)) * perSecondMultiplier
			}
		}
	}

	if (rocketFuelToggled === true) {
		var oilCost = (chemicalPlant*20) + (oxidisation*100);
		var charcoalCost = (chemicalPlant*20) + (oxidisation*100);
		if (getResource(RESOURCE.Oil) + getProduction(RESOURCE.Oil) >= oilCost &&
			getResource(RESOURCE.Charcoal) + getProduction(RESOURCE.Charcoal) >= charcoalCost) {
			oilps -= oilCost;
			charcoalps -= charcoalCost;
			rocketFuelps += ((chemicalPlant*0.2*chemicalBoost) + (oxidisation*1.5)) * perSecondMultiplier;
		}
		var methaneCost = hydrazine*520;
		if (getResource(RESOURCE.Methane) + getProduction(RESOURCE.Methane) >= methaneCost) {
			methaneps -= methaneCost;
			rocketFuelps += (hydrazine*20) * perSecondMultiplier;
		}
	}

	if (meteoriteToggled === true) {
		adjustment = adjustCost(RESOURCE.Meteorite, (printer * 3) + (web * 21), (printer + (web * 8)) * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Plasma, delta) >= adjustment.c) {
			plasmaps -= adjustment.c;
			meteoriteps += adjustment.g;
		}
	}

	if (heaterToggled === true && !energyLow && globalEnergyLock === false) {
		var adjustment = adjustCost(RESOURCE.Plasma, heater * 10, heater * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Hydrogen, delta) >= adjustment.c) {
			hydrogenps -= adjustment.c;
			plasmaps += adjustment.g;
		}
	}

	if (plasmaticToggled === true && !energyLow && globalEnergyLock === false) {
		var adjustment = adjustCost(RESOURCE.Plasma, plasmatic * 80, (plasmatic * 10) * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Helium, delta) >= adjustment.c) {
			heliumps -= adjustment.c;
			plasmaps += adjustment.g;
		}
	}

	if (bathToggled === true && !energyLow && globalEnergyLock === false) {
		var adjustment = adjustCost(RESOURCE.Plasma, bath * 100, (bath * 140) * perSecondMultiplier);
		if (adjustment.g > 0 && getResourceAfterTick(RESOURCE.Hydrogen, delta) >= adjustment.c && getResourceAfterTick(RESOURCE.Helium, delta) >= adjustment.c) {
			hydrogenps -= adjustment.c;
			heliumps -= adjustment.c;
			plasmaps += adjustment.g;
		}
	}

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
		Game.settings.turnRedOrGreen(getResource(RESOURCE[id]), getStorage(RESOURCE[id]), RESOURCE[id]);
		Game.settings.turnRedOnNegative(getProduction(RESOURCE[id]), RESOURCE[id] + 'ps');
	}

	Game.settings.turnRedOnNegative(rocketFuelps, 'rocketFuelps');

	Game.settings.turnRed(getResource(RESOURCE.Wood), 2, "manualCharcoalCost");
	Game.settings.turnRed(getResource(RESOURCE.Energy), 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(getResource(RESOURCE.Hydrogen), 10, "manualPlasmaHydrogenCost");

	Game.settings.turnRed(getResource(RESOURCE.Uranium), getStorage(RESOURCE.Uranium), "uraniumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Uranium)/2.5, "uraniumStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Oil), getStorage(RESOURCE.Oil), "oilStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Oil)/2.5, "oilStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Metal), "metalStorageCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Gem), getStorage(RESOURCE.Gem), "gemStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Gem)/2.5, "gemStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Charcoal), getStorage(RESOURCE.Charcoal), "charcoalStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Charcoal)/2.5, "charcoalStorageMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.Wood), getStorage(RESOURCE.Wood), "woodStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Wood)/2.5, "woodStorageMetalCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Lunarite), "lunariteStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), getStorage(RESOURCE.Lunarite)*4, "lunariteStorageMetalCost");

	Game.settings.turnRed(getResource(RESOURCE.Methane), getStorage(RESOURCE.Methane), "methaneStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Methane)/2.5, "methaneStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Titanium), getStorage(RESOURCE.Titanium), "titaniumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Titanium)/2.5, "titaniumStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Gold), getStorage(RESOURCE.Gold), "goldStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Gold)/2.5, "goldStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Silver), getStorage(RESOURCE.Silver), "silverStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Silver)/2.5, "silverStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Silicon), getStorage(RESOURCE.Silicon), "siliconStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Silicon)/2.5, "siliconStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lava), getStorage(RESOURCE.Lava), "lavaStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Lava)/2.5, "lavaStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Hydrogen), getStorage(RESOURCE.Hydrogen), "hydrogenStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Hydrogen)/2.5, "hydrogenStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Helium), getStorage(RESOURCE.Helium), "heliumStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Helium)/2.5, "heliumStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Ice), getStorage(RESOURCE.Ice), "iceStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Ice)/2.5, "iceStorageLunariteCost");

	Game.settings.turnRed(getResource(RESOURCE.Meteorite), getStorage(RESOURCE.Meteorite), "meteoriteStorageCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), getStorage(RESOURCE.Meteorite)*4, "meteoriteStorageLunariteCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Silver), PSUSilverCost, "PSUSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), PSUGoldCost, "PSUGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), PSUUraniumCost, "PSUUraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Silver), PSUT2SilverCost, "PSUT2SilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), PSUT2GoldCost, "PSUT2GoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), PSUT2UraniumCost, "PSUT2UraniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), heaterLunariteCost, "heaterLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), heaterGemCost, "heaterGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), heaterSiliconCost, "heaterSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), plasmaticLunariteCost, "plasmaticLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), plasmaticSiliconCost, "plasmaticSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), plasmaticMeteoriteCost, "plasmaticMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lava), bathLavaCost, "bathLavaCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), bathGoldCost, "bathGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), bathMeteoriteCost, "bathMeteoriteCost");

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

	Game.settings.turnRed(getResource(RESOURCE.Metal), charcoalEngineMetalCost, "charcoalEngineMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), charcoalEngineGemCost, "charcoalEngineGemCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), solarPanelMetalCost, "solarPanelMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), solarPanelGemCost, "solarPanelGemCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), methaneStationLunariteCost, "methaneStationLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), methaneStationTitaniumCost, "methaneStationTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), nuclearStationLunariteCost, "nuclearStationLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), nuclearStationTitaniumCost, "nuclearStationTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), magmaticLunariteCost, "magmaticLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), magmaticGemCost, "magmaticGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silver), magmaticSilverCost, "magmaticSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), fusionReactorLunariteCost, "fusionReactorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), fusionReactorTitaniumCost, "fusionReactorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), fusionReactorSiliconCost, "fusionReactorSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), pumpMetalCost, "pumpMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), pumpGemCost, "pumpGemCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), pumpjackMetalCost, "pumpjackMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), pumpjackGemCost, "pumpjackGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), pumpjackOilCost, "pumpjackOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), oilFieldLunariteCost, "oilFieldLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), oilFieldTitaniumCost, "oilFieldTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), oilFieldSiliconCost, "oilFieldSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), oilRigLunariteCost, "oilRigLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), oilRigTitaniumCost, "oilRigTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), oilRigMeteoriteCost, "oilRigMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), minerMetalCost, "minerMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), minerWoodCost, "minerWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), heavyDrillMetalCost, "heavyDrillMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), heavyDrillGemCost, "heavyDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), heavyDrillOilCost, "heavyDrillOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), gigaDrillLunariteCost, "gigaDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), gigaDrillGemCost, "gigaDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), gigaDrillSiliconCost, "gigaDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), quantumDrillLunariteCost, "quantumDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), quantumDrillGoldCost, "quantumDrillGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), quantumDrillMeteoriteCost, "quantumDrillMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), gemMinerMetalCost, "gemMinerMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), gemMinerGemCost, "gemMinerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), advancedDrillMetalCost, "advancedDrillMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), advancedDrillGemCost, "advancedDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), advancedDrillOilCost, "advancedDrillOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), diamondDrillLunariteCost, "diamondDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), diamondDrillGemCost, "diamondDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), diamondDrillSiliconCost, "diamondDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), carbyneDrillLunariteCost, "carbyneDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), carbyneDrillGemCost, "carbyneDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), carbyneDrillMeteoriteCost, "carbyneDrillMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), woodburnerMetalCost, "woodburnerMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), woodburnerWoodCost, "woodburnerWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), furnaceMetalCost, "furnaceMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), furnaceWoodCost, "furnaceWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), furnaceOilCost, "furnaceOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), kilnLunariteCost, "kilnLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), kilnGemCost, "kilnGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), kilnSiliconCost, "kilnSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), fryerLunariteCost, "fryerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Lava), fryerLavaCost, "fryerLavaCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), fryerMeteoriteCost, "fryerMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), woodcutterMetalCost, "woodcutterMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), woodcutterWoodCost, "woodcutterWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), laserCutterMetalCost, "laserCutterMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), laserCutterGemCost, "laserCutterGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), laserCutterOilCost, "laserCutterOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), deforesterLunariteCost, "deforesterLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), deforesterTitaniumCost, "deforesterTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), deforesterSiliconCost, "deforesterSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), infuserLunariteCost, "infuserLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), infuserOilCost, "infuserOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), infuserMeteoriteCost, "infuserMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Gem), moonWorkerGemCost, "moonWorkerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Metal), moonDrillMetalCost, "moonDrillMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), moonDrillGemCost, "moonDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), moonDrillOilCost, "moonDrillOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), moonQuarryLunariteCost, "moonQuarryLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), moonQuarryGemCost, "moonQuarryGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), moonQuarrySiliconCost, "moonQuarrySiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Titanium), planetExcavatorTitaniumCost, "planetExcavatorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Ice), planetExcavatorIceCost, "planetExcavatorIceCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), planetExcavatorMeteoriteCost, "planetExcavatorMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), vacuumLunariteCost, "vacuumLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), vacuumGemCost, "vacuumGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), suctionExcavatorLunariteCost, "suctionExcavatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), suctionExcavatorGemCost, "suctionExcavatorGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), suctionExcavatorOilCost, "suctionExcavatorOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), spaceCowLunariteCost, "spaceCowLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), spaceCowTitaniumCost, "spaceCowTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), spaceCowSiliconCost, "spaceCowSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), ventLunariteCost, "ventLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Helium), ventHeliumCost, "ventHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), ventMeteoriteCost, "ventMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Gem), explorerGemCost, "explorerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), lunariteDrillLunariteCost, "lunariteDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), lunariteDrillGemCost, "lunariteDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), lunariteDrillOilCost, "lunariteDrillOilCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), pentaDrillLunariteCost, "pentaDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), pentaDrillGemCost, "pentaDrillGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), pentaDrillSiliconCost, "pentaDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), titanDrillLunariteCost, "titanDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), titanDrillGoldCost, "titanDrillGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), titanDrillMeteoriteCost, "titanDrillMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), droidLunariteCost, "droidLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Methane), droidMethaneCost, "droidMethaneCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), destroyerLunariteCost, "destroyerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), destroyerGemCost, "destroyerGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), destroyerOilCost, "destroyerOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), deathStarLunariteCost, "deathStarLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Silver), deathStarSilverCost, "deathStarSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), deathStarSiliconCost, "deathStarSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), actuatorLunariteCost, "actuatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Helium), actuatorHeliumCost, "actuatorHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), actuatorMeteoriteCost, "actuatorMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), scoutLunariteCost, "scoutLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), scoutTitaniumCost, "scoutTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), spaceLaserLunariteCost, "spaceLaserLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), spaceLaserGemCost, "spaceLaserGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), spaceLaserOilCost, "spaceLaserOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), berthaLunariteCost, "berthaLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), berthaTitaniumCost, "berthaTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), berthaSiliconCost, "berthaSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), cannonLunariteCost, "cannonLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), cannonOilCost, "cannonOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), cannonMeteoriteCost, "cannonMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), blowtorchLunariteCost, "blowtorchLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), blowtorchTitaniumCost, "blowtorchTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), scorcherLunariteCost, "scorcherLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), scorcherGemCost, "scorcherGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), scorcherOilCost, "scorcherOilCost");
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), annihilatorLunariteCost, "annihilatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), annihilatorGemCost, "annihilatorGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Silver), annihilatorSilverCost, "annihilatorSilverCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), desertLunariteCost, "desertLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), desertSiliconCost, "desertSiliconCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), desertMeteoriteCost, "desertMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), labMetalCost, "labMetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), labGemCost, "labGemCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), labWoodCost, "labWoodCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), labT2MetalCost, "labT2MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), labT2GemCost, "labT2GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), labT2WoodCost, "labT2WoodCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), labT3MetalCost, "labT3MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), labT3GemCost, "labT3GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), labT3WoodCost, "labT3WoodCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), labT4MetalCost, "labT4MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), labT4GemCost, "labT4GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), labT4WoodCost, "labT4WoodCost");

	Game.settings.turnRed(getResource(RESOURCE.Metal), labT5MetalCost, "labT5MetalCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), labT5GemCost, "labT5GemCost");
	Game.settings.turnRed(getResource(RESOURCE.Wood), labT5WoodCost, "labT5WoodCost");

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

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), grinderLunariteCost, "grinderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), grinderTitaniumCost, "grinderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), grinderGoldCost, "grinderGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), cubicLunariteCost, "cubicLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), cubicUraniumCost, "cubicUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Oil), cubicOilCost, "cubicOilCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), enricherLunariteCost, "enricherLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), enricherTitaniumCost, "enricherTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), enricherSiliconCost, "enricherSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), recyclerLunariteCost, "recyclerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Methane), recyclerMethaneCost, "recyclerMethaneCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), recyclerMeteoriteCost, "recyclerMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), crucibleLunariteCost, "crucibleLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), crucibleGemCost, "crucibleGemCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), extractorLunariteCost, "extractorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), extractorTitaniumCost, "extractorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), extractorSiliconCost, "extractorSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), extruderLunariteCost, "extruderLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), extruderTitaniumCost, "extruderTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), extruderSiliconCost, "extruderSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), veluptuatorLunariteCost, "veluptuatorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), veluptuatorGoldCost, "veluptuatorGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), veluptuatorMeteoriteCost, "veluptuatorMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), collectorLunariteCost, "collectorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), collectorTitaniumCost, "collectorTitaniumCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), magnetLunariteCost, "magnetLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), magnetTitaniumCost, "magnetTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), magnetGoldCost, "magnetGoldCost");

	Game.settings.turnRed(getResource(RESOURCE.Silver), eCellSilverCost, "eCellSilverCost");
	Game.settings.turnRed(getResource(RESOURCE.Gold), eCellGoldCost, "eCellGoldCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), eCellSiliconCost, "eCellSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), hindenburgLunariteCost, "hindenburgLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Methane), hindenburgMethaneCost, "hindenburgMethaneCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), hindenburgMeteoriteCost, "hindenburgMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), droneLunariteCost, "droneLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), droneSiliconCost, "droneSiliconCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), tankerLunariteCost, "tankerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), tankerTitaniumCost, "tankerTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), tankerSiliconCost, "tankerSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), compressorLunariteCost, "compressorLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), compressorTitaniumCost, "compressorTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), compressorSiliconCost, "compressorSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), skimmerLunariteCost, "skimmerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), skimmerTitaniumCost, "skimmerTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), skimmerMeteoriteCost, "skimmerMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), icePickLunariteCost, "icePickLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Gem), icePickGemCost, "icePickGemCost");
	
	Game.settings.turnRed(getResource(RESOURCE.Lunarite), iceDrillLunariteCost, "iceDrillLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), iceDrillTitaniumCost, "iceDrillTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), iceDrillSiliconCost, "iceDrillSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), freezerLunariteCost, "freezerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Titanium), freezerTitaniumCost, "freezerTitaniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), freezerSiliconCost, "freezerSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Wood), mrFreezeWoodCost, "mrFreezeWoodCost");
	Game.settings.turnRed(getResource(RESOURCE.Helium), mrFreezeHeliumCost, "mrFreezeHeliumCost");
	Game.settings.turnRed(getResource(RESOURCE.Meteorite), mrFreezeMeteoriteCost, "mrFreezeMeteoriteCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), printerLunariteCost, "printerLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), printerSiliconCost, "printerSiliconCost");

	Game.settings.turnRed(getResource(RESOURCE.Lunarite), webLunariteCost, "webLunariteCost");
	Game.settings.turnRed(getResource(RESOURCE.Uranium), webUraniumCost, "webUraniumCost");
	Game.settings.turnRed(getResource(RESOURCE.Silicon), webSiliconCost, "webSiliconCost");

	// Tier 5 Machines

    Game.settings.turnRed(getResource(RESOURCE.Titanium), planetNukeTitaniumCost, "planetNukeTitaniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Silicon), planetNukeSiliconCost, "planetNukeSiliconCost");
    Game.settings.turnRed(getResource(RESOURCE.Ice), planetNukeIceCost, "planetNukeIceCost");
    Game.settings.turnRed(getResource(RESOURCE.Lunarite), condensatorLunariteCost, "condensatorLunariteCost");
    Game.settings.turnRed(getResource(RESOURCE.Gem), condensatorGemCost, "condensatorGemCost");
    Game.settings.turnRed(getResource(RESOURCE.Ice), condensatorIceCost, "condensatorIceCost");
    Game.settings.turnRed(getResource(RESOURCE.Uranium), fossilatorUraniumCost, "fossilatorUraniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Charcoal), fossilatorCharcoalCost, "fossilatorCharcoalCost");
    Game.settings.turnRed(getResource(RESOURCE.Lava), fossilatorLavaCost, "fossilatorLavaCost");
    Game.settings.turnRed(getResource(RESOURCE.Titanium), multiDrillTitaniumCost, "multiDrillTitaniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Gold), multiDrillGoldCost, "multiDrillGoldCost");
    Game.settings.turnRed(getResource(RESOURCE.Oil), multiDrillOilCost, "multiDrillOilCost");
    Game.settings.turnRed(getResource(RESOURCE.Uranium), diamondChamberUraniumCost, "diamondChamberUraniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Charcoal), diamondChamberCharcoalCost, "diamondChamberCharcoalCost");
    Game.settings.turnRed(getResource(RESOURCE.Meteorite), diamondChamberMeteoriteCost, "diamondChamberMeteoriteCost");
    Game.settings.turnRed(getResource(RESOURCE.Metal), microPollutorMetalCost, "microPollutorMetalCost");
    Game.settings.turnRed(getResource(RESOURCE.Wood), microPollutorWoodCost, "microPollutorWoodCost");
    Game.settings.turnRed(getResource(RESOURCE.Lava), microPollutorLavaCost, "microPollutorLavaCost");
    Game.settings.turnRed(getResource(RESOURCE.Metal), forestMetalCost, "forestMetalCost");
    Game.settings.turnRed(getResource(RESOURCE.Gem), forestGemCost, "forestGemCost");
    Game.settings.turnRed(getResource(RESOURCE.Hydrogen), forestHydrogenCost, "forestHydrogenCost");
    Game.settings.turnRed(getResource(RESOURCE.Titanium), clonerTitaniumCost, "clonerTitaniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Gold), clonerGoldCost, "clonerGoldCost");
    Game.settings.turnRed(getResource(RESOURCE.Methane), clonerMethaneCost, "clonerMethaneCost");
    Game.settings.turnRed(getResource(RESOURCE.Lunarite), interCowLunariteCost, "interCowLunariteCost");
    Game.settings.turnRed(getResource(RESOURCE.Gold), interCowGoldCost, "interCowGoldCost");
    Game.settings.turnRed(getResource(RESOURCE.Hydrogen), interCowHydrogenCost, "interCowHydrogenCost");
    Game.settings.turnRed(getResource(RESOURCE.Uranium), clubUraniumCost, "clubUraniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Wood), clubWoodCost, "clubWoodCost");
    Game.settings.turnRed(getResource(RESOURCE.Helium), clubHeliumCost, "clubHeliumCost");
    Game.settings.turnRed(getResource(RESOURCE.Metal), philosopherMetalCost, "philosopherMetalCost");
    Game.settings.turnRed(getResource(RESOURCE.Silver), philosopherSilverCost, "philosopherSilverCost");
    Game.settings.turnRed(getResource(RESOURCE.Meteorite), philosopherMeteoriteCost, "philosopherMeteoriteCost");
    Game.settings.turnRed(getResource(RESOURCE.Uranium), werewolfUraniumCost, "werewolfUraniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Gem), werewolfGemCost, "werewolfGemCost");
    Game.settings.turnRed(getResource(RESOURCE.Methane), werewolfMethaneCost, "werewolfMethaneCost");
    Game.settings.turnRed(getResource(RESOURCE.Titanium), tardisTitaniumCost, "tardisTitaniumCost");
    Game.settings.turnRed(getResource(RESOURCE.Silicon), tardisSiliconCost, "tardisSiliconCost");
    Game.settings.turnRed(getResource(RESOURCE.Meteorite), tardisMeteoriteCost, "tardisMeteoriteCost");
    Game.settings.turnRed(getResource(RESOURCE.Lunarite), harvesterLunariteCost, "harvesterLunariteCost");
    Game.settings.turnRed(getResource(RESOURCE.Wood), harvesterWoodCost, "harvesterWoodCost");
    Game.settings.turnRed(getResource(RESOURCE.Oil), harvesterOilCost, "harvesterOilCost");
    Game.settings.turnRed(getResource(RESOURCE.Lunarite), cageLunariteCost, "cageLunariteCost");
    Game.settings.turnRed(getResource(RESOURCE.Silicon), cageSiliconCost, "cageSiliconCost");
    Game.settings.turnRed(getResource(RESOURCE.Meteorite), cageMeteoriteCost, "cageMeteoriteCost");
    Game.settings.turnRed(getResource(RESOURCE.Metal), overexchangeMetalCost, "overexchangeMetalCost");
    Game.settings.turnRed(getResource(RESOURCE.Silver), overexchangeSilverCost, "overexchangeSilverCost");
    Game.settings.turnRed(getResource(RESOURCE.Helium), overexchangeHeliumCost, "overexchangeHeliumCost");

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
