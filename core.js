function calculateEnergyOutput(delta) {
	if(globalEnergyLock === true) {
		return 0;
	}

	// Fixed outputs first
	var output = (ring*5000) + (swarm*25000) + (sphere*1000000) + (solarPanel*solarPanelOutput);

	if(charcoal + charcoalps * delta >= charcoalEngine * delta) {
		output += charcoalEngine * charcoalEngineOutput;
	}

	if(methane + methaneps * delta >= methaneStation * 6 * delta) {
		output += methaneStation * 23;
	}

	if(uranium + uraniumps * delta >= nuclearStation * 7 * delta) {
		output += nuclearStation * 153;
	}

	if(lava + lavaps * delta > magmatic * 11 * delta) {
		output += magmatic * 191;
	}

	if(hydrogen + hydrogenps * delta >= fusionReactor * 10 * delta && helium + heliumps * delta >= fusionReactor * 10 * delta) {
		output += fusionReactor * 273;
	}

	return output;
}

function calculateEnergyUse(delta) {
	if(globalEnergyLock === true) {
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

    if(charcoalToggled === true){
        use += (furnace*3)+(kiln*13)+(fryer*34);
    }

    if(heaterToggled && hydrogen + hydrogenps >= heater * 10 * delta && plasma + plasmaps >= heater * delta) {
        use += heater * 1000;
	}

	if(plasmaticToggled && plasma + plasmaps >= plasmatic * 10 * delta) {
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
	if(Math.round(meteorite * precision) / precision === meteoriteStorage) {
		meteorite = meteoriteStorage;
	}

	if(Math.round(plasma * precision) / precision === getMaxPlasma()) {
		plasma = getMaxPlasma();
	}
}

function refreshTimeUntilFull() {
    setTimeUntilDisplayTest('plasmaFullTime', plasma, getMaxPlasma(), plasmaps);
    setTimeUntilDisplayTest('energyFullTime', energy, getMaxEnergy(), energyps);
    setTimeUntilDisplayTest('uraniumFullTime', uranium, uraniumStorage, uraniumps);
    setTimeUntilDisplayTest('lavaFullTime', lava, lavaStorage, lavaps);
    setTimeUntilDisplayTest('oilFullTime', oil, oilStorage, oilps);
    setTimeUntilDisplayTest('metalFullTime', metal, metalStorage, metalps);
    setTimeUntilDisplayTest('gemFullTime', gem, gemStorage, gemps);
    setTimeUntilDisplayTest('charcoalFullTime', charcoal, charcoalStorage, charcoalps);
    setTimeUntilDisplayTest('woodFullTime', wood, woodStorage, woodps);
    setTimeUntilDisplayTest('siliconFullTime', silicon, siliconStorage, siliconps);
    setTimeUntilDisplayTest('lunariteFullTime', lunarite, lunariteStorage, lunariteps);
    setTimeUntilDisplayTest('methaneFullTime', methane, methaneStorage, methaneps);
    setTimeUntilDisplayTest('titaniumFullTime', titanium, titaniumStorage, titaniumps);
    setTimeUntilDisplayTest('goldFullTime', gold, goldStorage, goldps);
    setTimeUntilDisplayTest('silverFullTime', silver, silverStorage, silverps);
    setTimeUntilDisplayTest('hydrogenFullTime', hydrogen, hydrogenStorage, hydrogenps);
    setTimeUntilDisplayTest('heliumFullTime', helium, heliumStorage, heliumps);
    setTimeUntilDisplayTest('iceFullTime', ice, iceStorage, iceps);
    setTimeUntilDisplayTest('meteoriteFullTime', meteorite, meteoriteStorage, meteoriteps);
}

function setTimeUntilDisplayTest(target, current, max, perSecond) {
	var targetElement = $('#' + target);
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
        targetElement.text(formattedTimeTest);

        if(isDraining){
            targetElement.addClass('red');
		} else {
            targetElement.removeClass('red');
        }
    } else {
        targetElement.text('N/A');
	}
}

function refreshPerSec(delta){

	// First we update and check the energy
	var energyOutput = calculateEnergyOutput(delta);
	var energyUse = calculateEnergyUse(delta);
	energyps = energyOutput - energyUse;

	var deltaEnergyDiff = (energyOutput * delta) - (energyUse * delta);
	if(deltaEnergyDiff < 0 && (energy <= 0 || energy < deltaEnergyDiff)) {
        energyLow = true;
	} else {
        energyLow = false;
	}

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

	if(!energyLow && globalEnergyLock === false) {
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

	if(charcoalToggled) {
		var woodCost = woodburner * 2;
		if(!energyLow && globalEnergyLock === false) {
            woodCost += (furnace*furnaceWoodInput) + (kiln*56) + (fryer*148);
		}

		if(wood + woodps >= woodCost) {
			woodps -= woodCost;
			charcoalps += woodburner * perSecondMultiplier;

			if(!energyLow && globalEnergyLock === false){
                charcoalps += ((furnace*furnaceOutput) + (kiln*53) + (fryer*210)) * perSecondMultiplier
			}
		}
	}

    if(rocketFuelToggled === true) {
        var oilCost = (chemicalPlant*20) + (oxidisation*100);
        var charcoalCost = (chemicalPlant*20) + (oxidisation*100);
        if(oil + oilps >= oilCost && charcoal + charcoalps >= charcoalCost) {
            oilps -= oilCost;
            charcoalps -= charcoalCost;
            rocketFuelps += ((chemicalPlant*0.2) + (oxidisation*1.5)) * perSecondMultiplier;
        }
        var methaneCost = hydrazine*520;
        if(methane+methaneps >= methaneCost){
            methaneps -= methaneCost;
            rocketFuelps += (hydrazine*20) * perSecondMultiplier;
        }
    }

    if(meteoriteToggled === true) {
        var adjustment = adjustCost(meteoriteStorage, meteorite, meteoriteps, (printer * 3) + (web * 21), (printer + (web * 8)) * perSecondMultiplier);
        if(adjustment.g > 0 && plasma + plasmaps * delta >= adjustment.c) {
            plasmaps -= adjustment.c;
            meteoriteps += adjustment.g;
        }
    }

    if(heaterToggled === true && !energyLow && globalEnergyLock === false) {
        var adjustment = adjustCost(getMaxPlasma(), plasma, plasmaps, heater * 10, heater * perSecondMultiplier);
        if(adjustment.g > 0 && hydrogen + hydrogenps * delta >= adjustment.c) {
        	hydrogenps -= adjustment.c;
        	plasmaps += adjustment.g;
		}
	}

    if(plasmaticToggled === true && !energyLow && globalEnergyLock === false) {
        var adjustment = adjustCost(getMaxPlasma(), plasma, plasmaps, plasmatic * 80, (plasmatic * 10) * perSecondMultiplier);
        if(adjustment.g > 0 && helium + heliumps * delta >= adjustment.c) {
            heliumps -= adjustment.c;
            plasmaps += adjustment.g;
        }
    }

    if(antimatterToggled === true) {
    	if(antimatter + antimatterps < 100000){
	        var plasmaCost = (Game.interstellar.machines.drive.count*100)
	        var iceCost = (Game.interstellar.machines.drive.count*12000)
	        if(plasma + plasmaps >= plasmaCost && ice + iceps >= iceCost) {
	            plasmaps -= plasmaCost;
	            iceps -= iceCost;
	            antimatterps += Game.interstellar.machines.drive.count/2;
	        }
	    }
	    else{
	    	antimatter = 100000;
	    	antimatterps += Game.interstellar.machines.drive.count/2;
	    }
    }

	function adjustCost(targetStorage, targetCurrent, targetPs, cost, gain) {
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

function checkRedCost(){

    Game.settings.turnRedOrGreen(plasma, getMaxPlasma(), 'plasma');
    Game.settings.turnRedOrGreen(energy, getMaxEnergy(), 'energy');

	Game.settings.turnRedOrGreen(uranium, uraniumStorage, 'uranium');
    Game.settings.turnRedOrGreen(oil, oilStorage, 'oil');
    Game.settings.turnRedOrGreen(metal, metalStorage, 'metal');
    Game.settings.turnRedOrGreen(gem, gemStorage, 'gem');
    Game.settings.turnRedOrGreen(charcoal, charcoalStorage, 'charcoal');
    Game.settings.turnRedOrGreen(wood, woodStorage, 'wood');
    Game.settings.turnRedOrGreen(lunarite, lunariteStorage, 'lunarite');
    Game.settings.turnRedOrGreen(methane, methaneStorage, 'methane');
    Game.settings.turnRedOrGreen(titanium, titaniumStorage, 'titanium');
    Game.settings.turnRedOrGreen(gold, goldStorage, 'gold');
    Game.settings.turnRedOrGreen(silver, silverStorage, 'silver');
    Game.settings.turnRedOrGreen(silicon, siliconStorage, 'silicon');
    Game.settings.turnRedOrGreen(lava, lavaStorage, 'lava');
    Game.settings.turnRedOrGreen(hydrogen, hydrogenStorage, 'hydrogen');
    Game.settings.turnRedOrGreen(helium, heliumStorage, 'helium');
    Game.settings.turnRedOrGreen(ice, iceStorage, 'ice');
    Game.settings.turnRedOrGreen(meteorite, meteoriteStorage, 'meteorite');
    Game.settings.turnRedOrGreen(antimatter, 100000, 'antimatter');

    Game.settings.turnRedOnNegative(energyps, 'energyps');
    Game.settings.turnRedOnNegative(uraniumps, 'uraniumps');
    Game.settings.turnRedOnNegative(oilps, 'oilps');
    Game.settings.turnRedOnNegative(metalps, 'metalps');
    Game.settings.turnRedOnNegative(gemps, 'gemps');
    Game.settings.turnRedOnNegative(charcoalps, 'charcoalps');
    Game.settings.turnRedOnNegative(woodps, 'woodps');
    Game.settings.turnRedOnNegative(lunariteps, 'lunariteps');
    Game.settings.turnRedOnNegative(methaneps, 'methaneps');
    Game.settings.turnRedOnNegative(titaniumps, 'titaniumps');
    Game.settings.turnRedOnNegative(goldps, 'goldps');
    Game.settings.turnRedOnNegative(silverps, 'silverps');
    Game.settings.turnRedOnNegative(siliconps, 'siliconps');
    Game.settings.turnRedOnNegative(lavaps, 'lavaps');
    Game.settings.turnRedOnNegative(hydrogenps, 'hydrogenps');
    Game.settings.turnRedOnNegative(heliumps, 'heliumps');
    Game.settings.turnRedOnNegative(iceps, 'iceps');
    Game.settings.turnRedOnNegative(plasmaps, 'plasmaps');
    Game.settings.turnRedOnNegative(meteoriteps, 'meteoriteps');
    Game.settings.turnRedOnNegative(rocketFuelps, 'rocketFuelps');
	Game.settings.turnRedOnNegative(antimatterps, 'antimatterps');

	Game.settings.turnRed(wood, 2, "manualCharcoalCost");
	Game.settings.turnRed(energy, 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(hydrogen, 10, "manualPlasmaHydrogenCost");

	Game.settings.turnRed(uranium, uraniumStorage, "uraniumStorageCost");
	Game.settings.turnRed(lunarite, uraniumStorage/2.5, "uraniumStorageLunariteCost");
	
	Game.settings.turnRed(oil, oilStorage, "oilStorageCost");
	Game.settings.turnRed(metal, oilStorage/2.5, "oilStorageMetalCost");
	
	Game.settings.turnRed(metal, metalStorage, "metalStorageCost");
	
	Game.settings.turnRed(gem, gemStorage, "gemStorageCost");
	Game.settings.turnRed(metal, gemStorage/2.5, "gemStorageMetalCost");
	
	Game.settings.turnRed(charcoal, charcoalStorage, "charcoalStorageCost");
	Game.settings.turnRed(metal, charcoalStorage/2.5, "charcoalStorageMetalCost");

	Game.settings.turnRed(wood, woodStorage, "woodStorageCost");
	Game.settings.turnRed(metal, woodStorage/2.5, "woodStorageMetalCost");
	
	Game.settings.turnRed(lunarite, lunariteStorage, "lunariteStorageCost");
	Game.settings.turnRed(metal, lunariteStorage*4, "lunariteStorageMetalCost");

	Game.settings.turnRed(methane, methaneStorage, "methaneStorageCost");
	Game.settings.turnRed(lunarite, methaneStorage/2.5, "methaneStorageLunariteCost");

	Game.settings.turnRed(titanium, titaniumStorage, "titaniumStorageCost");
	Game.settings.turnRed(lunarite, titaniumStorage/2.5, "titaniumStorageLunariteCost");

	Game.settings.turnRed(gold, goldStorage, "goldStorageCost");
	Game.settings.turnRed(lunarite, goldStorage/2.5, "goldStorageLunariteCost");
	
	Game.settings.turnRed(silver, silverStorage, "silverStorageCost");
	Game.settings.turnRed(lunarite, silverStorage/2.5, "silverStorageLunariteCost");

	Game.settings.turnRed(silicon, siliconStorage, "siliconStorageCost");
	Game.settings.turnRed(lunarite, siliconStorage/2.5, "siliconStorageLunariteCost");

	Game.settings.turnRed(lava, lavaStorage, "lavaStorageCost");
	Game.settings.turnRed(lunarite, lavaStorage/2.5, "lavaStorageLunariteCost");

	Game.settings.turnRed(hydrogen, hydrogenStorage, "hydrogenStorageCost");
	Game.settings.turnRed(lunarite, hydrogenStorage/2.5, "hydrogenStorageLunariteCost");

	Game.settings.turnRed(helium, heliumStorage, "heliumStorageCost");
	Game.settings.turnRed(lunarite, heliumStorage/2.5, "heliumStorageLunariteCost");

	Game.settings.turnRed(ice, iceStorage, "iceStorageCost");
	Game.settings.turnRed(lunarite, iceStorage/2.5, "iceStorageLunariteCost");

	Game.settings.turnRed(meteorite, meteoriteStorage, "meteoriteStorageCost");
	Game.settings.turnRed(lunarite, meteoriteStorage*4, "meteoriteStorageLunariteCost");
	
	Game.settings.turnRed(silver, PSUSilverCost, "PSUSilverCost");
	Game.settings.turnRed(gold, PSUGoldCost, "PSUGoldCost");
	Game.settings.turnRed(uranium, PSUUraniumCost, "PSUUraniumCost");

	Game.settings.turnRed(silver, PSUT2SilverCost, "PSUT2SilverCost");
	Game.settings.turnRed(gold, PSUT2GoldCost, "PSUT2GoldCost");
	Game.settings.turnRed(uranium, PSUT2UraniumCost, "PSUT2UraniumCost");

	Game.settings.turnRed(lunarite, heaterLunariteCost, "heaterLunariteCost");
	Game.settings.turnRed(gem, heaterGemCost, "heaterGemCost");
	Game.settings.turnRed(silicon, heaterSiliconCost, "heaterSiliconCost");

	Game.settings.turnRed(lunarite, plasmaticLunariteCost, "plasmaticLunariteCost");
	Game.settings.turnRed(silicon, plasmaticSiliconCost, "plasmaticSiliconCost");
	Game.settings.turnRed(meteorite, plasmaticMeteoriteCost, "plasmaticMeteoriteCost");

	Game.settings.turnRed(metal, batteryMetalCost, "batteryMetalCost");
	Game.settings.turnRed(gem, batteryGemCost, "batteryGemCost");
	Game.settings.turnRed(lunarite, batteryLunariteCost, "batteryLunariteCost");

	Game.settings.turnRed(metal, batteryT2MetalCost, "batteryT2MetalCost");
	Game.settings.turnRed(gem, batteryT2GemCost, "batteryT2GemCost");
	Game.settings.turnRed(lunarite, batteryT2LunariteCost, "batteryT2LunariteCost");

	Game.settings.turnRed(metal, batteryT4MetalCost, "batteryT4MetalCost");
 	Game.settings.turnRed(gem, batteryT4GemCost, "batteryT4GemCost");
    Game.settings.turnRed(lunarite, batteryT4LunariteCost, "batteryT4LunariteCost");
	
    Game.settings.turnRed(metal, batteryT3MetalCost, "batteryT3MetalCost");
    Game.settings.turnRed(gem, batteryT3GemCost, "batteryT3GemCost");
    Game.settings.turnRed(lunarite, batteryT3LunariteCost, "batteryT3LunariteCost");

	Game.settings.turnRed(metal, charcoalEngineMetalCost, "charcoalEngineMetalCost");
	Game.settings.turnRed(gem, charcoalEngineGemCost, "charcoalEngineGemCost");

	Game.settings.turnRed(metal, solarPanelMetalCost, "solarPanelMetalCost");
	Game.settings.turnRed(gem, solarPanelGemCost, "solarPanelGemCost");

    Game.settings.turnRed(lunarite, methaneStationLunariteCost, "methaneStationLunariteCost");
    Game.settings.turnRed(titanium, methaneStationTitaniumCost, "methaneStationTitaniumCost");
    Game.settings.turnRed(lunarite, nuclearStationLunariteCost, "nuclearStationLunariteCost");
    Game.settings.turnRed(titanium, nuclearStationTitaniumCost, "nuclearStationTitaniumCost");
    Game.settings.turnRed(lunarite, magmaticLunariteCost, "magmaticLunariteCost");
    Game.settings.turnRed(gem, magmaticGemCost, "magmaticGemCost");
    Game.settings.turnRed(silver, magmaticSilverCost, "magmaticSilverCost");
    Game.settings.turnRed(lunarite, fusionReactorLunariteCost, "fusionReactorLunariteCost");
    Game.settings.turnRed(titanium, fusionReactorTitaniumCost, "fusionReactorTitaniumCost");
    Game.settings.turnRed(silicon, fusionReactorSiliconCost, "fusionReactorSiliconCost");
    Game.settings.turnRed(metal, pumpMetalCost, "pumpMetalCost");
    Game.settings.turnRed(gem, pumpGemCost, "pumpGemCost");

	Game.settings.turnRed(metal, pumpjackMetalCost, "pumpjackMetalCost");
	Game.settings.turnRed(gem, pumpjackGemCost, "pumpjackGemCost");
	Game.settings.turnRed(oil, pumpjackOilCost, "pumpjackOilCost");
	
	Game.settings.turnRed(lunarite, oilFieldLunariteCost, "oilFieldLunariteCost");
	Game.settings.turnRed(titanium, oilFieldTitaniumCost, "oilFieldTitaniumCost");
	Game.settings.turnRed(silicon, oilFieldSiliconCost, "oilFieldSiliconCost");

	Game.settings.turnRed(lunarite, oilRigLunariteCost, "oilRigLunariteCost");
	Game.settings.turnRed(titanium, oilRigTitaniumCost, "oilRigTitaniumCost");
	Game.settings.turnRed(meteorite, oilRigMeteoriteCost, "oilRigMeteoriteCost");

    Game.settings.turnRed(metal, minerMetalCost, "minerMetalCost");
    Game.settings.turnRed(wood, minerWoodCost, "minerWoodCost");
    Game.settings.turnRed(metal, heavyDrillMetalCost, "heavyDrillMetalCost");
    Game.settings.turnRed(gem, heavyDrillGemCost, "heavyDrillGemCost");
    Game.settings.turnRed(oil, heavyDrillOilCost, "heavyDrillOilCost");
	
	Game.settings.turnRed(lunarite, gigaDrillLunariteCost, "gigaDrillLunariteCost");
	Game.settings.turnRed(gem, gigaDrillGemCost, "gigaDrillGemCost");
	Game.settings.turnRed(silicon, gigaDrillSiliconCost, "gigaDrillSiliconCost");

	Game.settings.turnRed(lunarite, quantumDrillLunariteCost, "quantumDrillLunariteCost");
	Game.settings.turnRed(gold, quantumDrillGoldCost, "quantumDrillGoldCost");
	Game.settings.turnRed(meteorite, quantumDrillMeteoriteCost, "quantumDrillMeteoriteCost");

    Game.settings.turnRed(metal, gemMinerMetalCost, "gemMinerMetalCost");
    Game.settings.turnRed(gem, gemMinerGemCost, "gemMinerGemCost");
    Game.settings.turnRed(metal, advancedDrillMetalCost, "advancedDrillMetalCost");
    Game.settings.turnRed(gem, advancedDrillGemCost, "advancedDrillGemCost");
    Game.settings.turnRed(oil, advancedDrillOilCost, "advancedDrillOilCost");

	Game.settings.turnRed(lunarite, diamondDrillLunariteCost, "diamondDrillLunariteCost");
	Game.settings.turnRed(gem, diamondDrillGemCost, "diamondDrillGemCost");
	Game.settings.turnRed(silicon, diamondDrillSiliconCost, "diamondDrillSiliconCost");

	Game.settings.turnRed(lunarite, carbyneDrillLunariteCost, "carbyneDrillLunariteCost");
	Game.settings.turnRed(gem, carbyneDrillGemCost, "carbyneDrillGemCost");
	Game.settings.turnRed(meteorite, carbyneDrillMeteoriteCost, "carbyneDrillMeteoriteCost");

    Game.settings.turnRed(metal, woodburnerMetalCost, "woodburnerMetalCost");
    Game.settings.turnRed(wood, woodburnerWoodCost, "woodburnerWoodCost");
    Game.settings.turnRed(metal, furnaceMetalCost, "furnaceMetalCost");
    Game.settings.turnRed(wood, furnaceWoodCost, "furnaceWoodCost");
    Game.settings.turnRed(oil, furnaceOilCost, "furnaceOilCost");
	
	Game.settings.turnRed(lunarite, kilnLunariteCost, "kilnLunariteCost");
	Game.settings.turnRed(gem, kilnGemCost, "kilnGemCost");
	Game.settings.turnRed(silicon, kilnSiliconCost, "kilnSiliconCost");

	Game.settings.turnRed(lunarite, fryerLunariteCost, "fryerLunariteCost");
	Game.settings.turnRed(lava, fryerLavaCost, "fryerLavaCost");
	Game.settings.turnRed(meteorite, fryerMeteoriteCost, "fryerMeteoriteCost");

    Game.settings.turnRed(metal, woodcutterMetalCost, "woodcutterMetalCost");
    Game.settings.turnRed(wood, woodcutterWoodCost, "woodcutterWoodCost");
    Game.settings.turnRed(metal, laserCutterMetalCost, "laserCutterMetalCost");
    Game.settings.turnRed(gem, laserCutterGemCost, "laserCutterGemCost");
    Game.settings.turnRed(oil, laserCutterOilCost, "laserCutterOilCost");

	Game.settings.turnRed(lunarite, deforesterLunariteCost, "deforesterLunariteCost");
	Game.settings.turnRed(titanium, deforesterTitaniumCost, "deforesterTitaniumCost");
	Game.settings.turnRed(silicon, deforesterSiliconCost, "deforesterSiliconCost");

	Game.settings.turnRed(lunarite, infuserLunariteCost, "infuserLunariteCost");
	Game.settings.turnRed(oil, infuserOilCost, "infuserOilCost");
	Game.settings.turnRed(meteorite, infuserMeteoriteCost, "infuserMeteoriteCost");

    Game.settings.turnRed(gem, moonWorkerGemCost, "moonWorkerGemCost");
    Game.settings.turnRed(metal, moonDrillMetalCost, "moonDrillMetalCost");
    Game.settings.turnRed(gem, moonDrillGemCost, "moonDrillGemCost");
    Game.settings.turnRed(oil, moonDrillOilCost, "moonDrillOilCost");
	
	Game.settings.turnRed(lunarite, moonQuarryLunariteCost, "moonQuarryLunariteCost");
	Game.settings.turnRed(gem, moonQuarryGemCost, "moonQuarryGemCost");
	Game.settings.turnRed(silicon, moonQuarrySiliconCost, "moonQuarrySiliconCost");

	Game.settings.turnRed(titanium, planetExcavatorTitaniumCost, "planetExcavatorTitaniumCost");
	Game.settings.turnRed(ice, planetExcavatorIceCost, "planetExcavatorIceCost");
	Game.settings.turnRed(meteorite, planetExcavatorMeteoriteCost, "planetExcavatorMeteoriteCost");

    Game.settings.turnRed(lunarite, vacuumLunariteCost, "vacuumLunariteCost");
    Game.settings.turnRed(gem, vacuumGemCost, "vacuumGemCost");
    Game.settings.turnRed(lunarite, suctionExcavatorLunariteCost, "suctionExcavatorLunariteCost");
    Game.settings.turnRed(gem, suctionExcavatorGemCost, "suctionExcavatorGemCost");
    Game.settings.turnRed(oil, suctionExcavatorOilCost, "suctionExcavatorOilCost");
	
	Game.settings.turnRed(lunarite, spaceCowLunariteCost, "spaceCowLunariteCost");
	Game.settings.turnRed(titanium, spaceCowTitaniumCost, "spaceCowTitaniumCost");
	Game.settings.turnRed(silicon, spaceCowSiliconCost, "spaceCowSiliconCost");

	Game.settings.turnRed(lunarite, ventLunariteCost, "ventLunariteCost");
	Game.settings.turnRed(helium, ventHeliumCost, "ventHeliumCost");
	Game.settings.turnRed(meteorite, ventMeteoriteCost, "ventMeteoriteCost");

    Game.settings.turnRed(gem, explorerGemCost, "explorerGemCost");
    Game.settings.turnRed(lunarite, lunariteDrillLunariteCost, "lunariteDrillLunariteCost");
    Game.settings.turnRed(gem, lunariteDrillGemCost, "lunariteDrillGemCost");
    Game.settings.turnRed(oil, lunariteDrillOilCost, "lunariteDrillOilCost");
	
	Game.settings.turnRed(lunarite, pentaDrillLunariteCost, "pentaDrillLunariteCost");
	Game.settings.turnRed(gem, pentaDrillGemCost, "pentaDrillGemCost");
	Game.settings.turnRed(silicon, pentaDrillSiliconCost, "pentaDrillSiliconCost");

	Game.settings.turnRed(lunarite, titanDrillLunariteCost, "titanDrillLunariteCost");
	Game.settings.turnRed(gold, titanDrillGoldCost, "titanDrillGoldCost");
	Game.settings.turnRed(meteorite, titanDrillMeteoriteCost, "titanDrillMeteoriteCost");

    Game.settings.turnRed(lunarite, droidLunariteCost, "droidLunariteCost");
    Game.settings.turnRed(methane, droidMethaneCost, "droidMethaneCost");
    Game.settings.turnRed(lunarite, destroyerLunariteCost, "destroyerLunariteCost");
    Game.settings.turnRed(gem, destroyerGemCost, "destroyerGemCost");
    Game.settings.turnRed(oil, destroyerOilCost, "destroyerOilCost");

	Game.settings.turnRed(lunarite, deathStarLunariteCost, "deathStarLunariteCost");
	Game.settings.turnRed(silver, deathStarSilverCost, "deathStarSilverCost");
	Game.settings.turnRed(silicon, deathStarSiliconCost, "deathStarSiliconCost");

	Game.settings.turnRed(lunarite, actuatorLunariteCost, "actuatorLunariteCost");
	Game.settings.turnRed(helium, actuatorHeliumCost, "actuatorHeliumCost");
	Game.settings.turnRed(meteorite, actuatorMeteoriteCost, "actuatorMeteoriteCost");

    Game.settings.turnRed(lunarite, scoutLunariteCost, "scoutLunariteCost");
    Game.settings.turnRed(titanium, scoutTitaniumCost, "scoutTitaniumCost");
    Game.settings.turnRed(lunarite, spaceLaserLunariteCost, "spaceLaserLunariteCost");
    Game.settings.turnRed(gem, spaceLaserGemCost, "spaceLaserGemCost");
    Game.settings.turnRed(oil, spaceLaserOilCost, "spaceLaserOilCost");

	Game.settings.turnRed(lunarite, berthaLunariteCost, "berthaLunariteCost");
	Game.settings.turnRed(titanium, berthaTitaniumCost, "berthaTitaniumCost");
	Game.settings.turnRed(silicon, berthaSiliconCost, "berthaSiliconCost");

	Game.settings.turnRed(lunarite, cannonLunariteCost, "cannonLunariteCost");
	Game.settings.turnRed(oil, cannonOilCost, "cannonOilCost");
	Game.settings.turnRed(meteorite, cannonMeteoriteCost, "cannonMeteoriteCost");

    Game.settings.turnRed(lunarite, blowtorchLunariteCost, "blowtorchLunariteCost");
    Game.settings.turnRed(titanium, blowtorchTitaniumCost, "blowtorchTitaniumCost");
    Game.settings.turnRed(lunarite, scorcherLunariteCost, "scorcherLunariteCost");
    Game.settings.turnRed(gem, scorcherGemCost, "scorcherGemCost");
    Game.settings.turnRed(oil, scorcherOilCost, "scorcherOilCost");
    Game.settings.turnRed(lunarite, annihilatorLunariteCost, "annihilatorLunariteCost");
    Game.settings.turnRed(gem, annihilatorGemCost, "annihilatorGemCost");
    Game.settings.turnRed(silver, annihilatorSilverCost, "annihilatorSilverCost");

	Game.settings.turnRed(lunarite, desertLunariteCost, "desertLunariteCost");
	Game.settings.turnRed(silicon, desertSiliconCost, "desertSiliconCost");
	Game.settings.turnRed(meteorite, desertMeteoriteCost, "desertMeteoriteCost");

	Game.settings.turnRed(metal, labMetalCost, "labMetalCost");
	Game.settings.turnRed(gem, labGemCost, "labGemCost");
	Game.settings.turnRed(wood, labWoodCost, "labWoodCost");

	Game.settings.turnRed(metal, labT2MetalCost, "labT2MetalCost");
	Game.settings.turnRed(gem, labT2GemCost, "labT2GemCost");
	Game.settings.turnRed(wood, labT2WoodCost, "labT2WoodCost");

	Game.settings.turnRed(metal, labT3MetalCost, "labT3MetalCost");
	Game.settings.turnRed(gem, labT3GemCost, "labT3GemCost");
	Game.settings.turnRed(wood, labT3WoodCost, "labT3WoodCost");

	Game.settings.turnRed(metal, labT4MetalCost, "labT4MetalCost");
	Game.settings.turnRed(gem, labT4GemCost, "labT4GemCost");
	Game.settings.turnRed(wood, labT4WoodCost, "labT4WoodCost");

	Game.settings.turnRed(science, 5, "unlockStorageCost");
	Game.settings.turnRed(science, 20, "unlockBasicEnergyCost");
	Game.settings.turnRed(science, 30, "unlockOilCost");
	Game.settings.turnRed(science, 50, "unlockSolarCost");
	Game.settings.turnRed(science, 100, "unlockMachinesCost");
	Game.settings.turnRed(science, 500, "unlockDestructionCost");
	Game.settings.turnRed(science, 300, "upgradeResourceTechCost");
	Game.settings.turnRed(science, 500, "unlockSolarSystemCost");
	Game.settings.turnRed(science, 500, "unlockLabT2Cost");
	Game.settings.turnRed(science, 1000, "upgradeEngineTechCost");
    Game.settings.turnRed(science, 450000, "unlockRocketFuelT2Cost");
    Game.settings.turnRed(science, 3200000, "unlockRocketFuelT3Cost");
	Game.settings.turnRed(science, 3000, "unlockLabT3Cost");
	Game.settings.turnRed(science, 5000, "upgradeSolarTechCost");
	Game.settings.turnRed(science, 15000, "unlockBatteriesCost");
	Game.settings.turnRed(science, 40000, "unlockPlasmaCost");
	Game.settings.turnRed(science, 60000, "unlockPlasmaTier2Cost");
	Game.settings.turnRed(science, 50000000, "unlockLabT4Cost");
	Game.settings.turnRed(science, 60000, "unlockEmcCost");
	Game.settings.turnRed(science, 100000, "unlockMeteoriteCost");
	Game.settings.turnRed(science, 75000, "unlockMeteoriteTier1Cost");
	Game.settings.turnRed(science, 100000, "unlockMeteoriteTier2Cost");
	Game.settings.turnRed(science, 100000, "unlockDysonCost");
	Game.settings.turnRed(science, 300000, "unlockBatteriesT2Cost");
    Game.settings.turnRed(science, 3000000, "unlockBatteriesT3Cost");
    Game.settings.turnRed(science, 30000000, "unlockBatteriesT4Cost");
	Game.settings.turnRed(science, 500000, "unlockDysonSphereCost");
    Game.settings.turnRed(science, 9500000, "unlockPSUCost");
	Game.settings.turnRed(science, 37000000, "unlockPSUT2Cost");

	Game.settings.turnRed(metal, 1200, "rocketMetalCost");
	Game.settings.turnRed(gem, 900, "rocketGemCost");
	Game.settings.turnRed(oil, 1000, "rocketOilCost");

	Game.settings.turnRed(rocketFuel, 20, "rocketRocketFuelCost");

	Game.settings.turnRed(metal, chemicalPlantMetalCost, "chemicalPlantMetalCost");
	Game.settings.turnRed(gem, chemicalPlantGemCost, "chemicalPlantGemCost");
	Game.settings.turnRed(oil, chemicalPlantOilCost, "chemicalPlantOilCost");

	Game.settings.turnRed(metal, oxidisationMetalCost, "oxidisationMetalCost");
	Game.settings.turnRed(gem, oxidisationGemCost, "oxidisationGemCost");
	Game.settings.turnRed(oil, oxidisationOilCost, "oxidisationOilCost");

    Game.settings.turnRed(titanium, hydrazineTitaniumCost, "hydrazineTitaniumCost");
    Game.settings.turnRed(silicon, hydrazineSiliconCost, "hydrazineSiliconCost");
    Game.settings.turnRed(gold, hydrazineGoldCost, "hydrazineGoldCost");

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

	Game.settings.turnRed(lunarite, grinderLunariteCost, "grinderLunariteCost");
	Game.settings.turnRed(titanium, grinderTitaniumCost, "grinderTitaniumCost");
	Game.settings.turnRed(gold, grinderGoldCost, "grinderGoldCost");

	Game.settings.turnRed(lunarite, cubicLunariteCost, "cubicLunariteCost");
	Game.settings.turnRed(uranium, cubicUraniumCost, "cubicUraniumCost");
	Game.settings.turnRed(oil, cubicOilCost, "cubicOilCost");

	Game.settings.turnRed(lunarite, enricherLunariteCost, "enricherLunariteCost");
	Game.settings.turnRed(titanium, enricherTitaniumCost, "enricherTitaniumCost");
	Game.settings.turnRed(silicon, enricherSiliconCost, "enricherSiliconCost");

	Game.settings.turnRed(lunarite, recyclerLunariteCost, "recyclerLunariteCost");
	Game.settings.turnRed(methane, recyclerMethaneCost, "recyclerMethaneCost");
	Game.settings.turnRed(meteorite, recyclerMeteoriteCost, "recyclerMeteoriteCost");

	Game.settings.turnRed(lunarite, crucibleLunariteCost, "crucibleLunariteCost");
	Game.settings.turnRed(gem, crucibleGemCost, "crucibleGemCost");
	
	Game.settings.turnRed(lunarite, extractorLunariteCost, "extractorLunariteCost");
	Game.settings.turnRed(titanium, extractorTitaniumCost, "extractorTitaniumCost");
	Game.settings.turnRed(silicon, extractorSiliconCost, "extractorSiliconCost");

	Game.settings.turnRed(lunarite, extruderLunariteCost, "extruderLunariteCost");
	Game.settings.turnRed(titanium, extruderTitaniumCost, "extruderTitaniumCost");
	Game.settings.turnRed(silicon, extruderSiliconCost, "extruderSiliconCost");

	Game.settings.turnRed(lunarite, veluptuatorLunariteCost, "veluptuatorLunariteCost");
	Game.settings.turnRed(gold, veluptuatorGoldCost, "veluptuatorGoldCost");
	Game.settings.turnRed(meteorite, veluptuatorMeteoriteCost, "veluptuatorMeteoriteCost");

	Game.settings.turnRed(lunarite, collectorLunariteCost, "collectorLunariteCost");
	Game.settings.turnRed(titanium, collectorTitaniumCost, "collectorTitaniumCost");

	Game.settings.turnRed(lunarite, magnetLunariteCost, "magnetLunariteCost");
	Game.settings.turnRed(titanium, magnetTitaniumCost, "magnetTitaniumCost");
	Game.settings.turnRed(gold, magnetGoldCost, "magnetGoldCost");

	Game.settings.turnRed(silver, eCellSilverCost, "eCellSilverCost");
	Game.settings.turnRed(gold, eCellGoldCost, "eCellGoldCost");
	Game.settings.turnRed(silicon, eCellSiliconCost, "eCellSiliconCost");

	Game.settings.turnRed(lunarite, hindenburgLunariteCost, "hindenburgLunariteCost");
	Game.settings.turnRed(methane, hindenburgMethaneCost, "hindenburgMethaneCost");
	Game.settings.turnRed(meteorite, hindenburgMeteoriteCost, "hindenburgMeteoriteCost");

	Game.settings.turnRed(lunarite, droneLunariteCost, "droneLunariteCost");
	Game.settings.turnRed(silicon, droneSiliconCost, "droneSiliconCost");
	
	Game.settings.turnRed(lunarite, tankerLunariteCost, "tankerLunariteCost");
	Game.settings.turnRed(titanium, tankerTitaniumCost, "tankerTitaniumCost");
	Game.settings.turnRed(silicon, tankerSiliconCost, "tankerSiliconCost");

	Game.settings.turnRed(lunarite, compressorLunariteCost, "compressorLunariteCost");
	Game.settings.turnRed(titanium, compressorTitaniumCost, "compressorTitaniumCost");
	Game.settings.turnRed(silicon, compressorSiliconCost, "compressorSiliconCost");

	Game.settings.turnRed(lunarite, skimmerLunariteCost, "skimmerLunariteCost");
	Game.settings.turnRed(titanium, skimmerTitaniumCost, "skimmerTitaniumCost");
	Game.settings.turnRed(meteorite, skimmerMeteoriteCost, "skimmerMeteoriteCost");

	Game.settings.turnRed(lunarite, icePickLunariteCost, "icePickLunariteCost");
	Game.settings.turnRed(gem, icePickGemCost, "icePickGemCost");
	
	Game.settings.turnRed(lunarite, iceDrillLunariteCost, "iceDrillLunariteCost");
	Game.settings.turnRed(titanium, iceDrillTitaniumCost, "iceDrillTitaniumCost");
	Game.settings.turnRed(silicon, iceDrillSiliconCost, "iceDrillSiliconCost");

	Game.settings.turnRed(lunarite, freezerLunariteCost, "freezerLunariteCost");
	Game.settings.turnRed(titanium, freezerTitaniumCost, "freezerTitaniumCost");
	Game.settings.turnRed(silicon, freezerSiliconCost, "freezerSiliconCost");

	Game.settings.turnRed(wood, mrFreezeWoodCost, "mrFreezeWoodCost");
	Game.settings.turnRed(helium, mrFreezeHeliumCost, "mrFreezeHeliumCost");
	Game.settings.turnRed(meteorite, mrFreezeMeteoriteCost, "mrFreezeMeteoriteCost");

	Game.settings.turnRed(lunarite, printerLunariteCost, "printerLunariteCost");
	Game.settings.turnRed(silicon, printerSiliconCost, "printerSiliconCost");

	Game.settings.turnRed(lunarite, webLunariteCost, "webLunariteCost");
	Game.settings.turnRed(uranium, webUraniumCost, "webUraniumCost");
	Game.settings.turnRed(silicon, webSiliconCost, "webSiliconCost");

	// Sol Center

	Game.settings.turnRed(titanium, dysonTitaniumCost, "dysonTitaniumCost");
	Game.settings.turnRed(gold, dysonGoldCost, "dysonGoldCost");
	Game.settings.turnRed(silicon, dysonSiliconCost, "dysonSiliconCost");
	Game.settings.turnRed(meteorite, dysonMeteoriteCost, "dysonMeteoriteCost");
	Game.settings.turnRed(ice, dysonIceCost, "dysonIceCost");

	Game.settings.turnRed(rocketFuel, 50000, "ringRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 250000, "swarmRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 1000000, "sphereRocketFuelCost");

	Game.settings.turnRed(hydrogen, 1500, "unlockPlasmaResearchHydrogenCost");
	Game.settings.turnRed(uranium, 1500, "unlockPlasmaResearchUraniumCost");
	Game.settings.turnRed(oil, 15000, "unlockPlasmaResearchOilCost");
	Game.settings.turnRed(wood, 15000, "unlockPlasmaResearchWoodCost");

	Game.settings.turnRed(energy, 75000, "unlockEmcResearchEnergyCost");
	Game.settings.turnRed(plasma, 100, "unlockEmcResearchPlasmaCost");

	Game.settings.turnRed(energy, 100000, "unlockDysonResearchEnergyCost");
	Game.settings.turnRed(plasma, 10000, "unlockDysonResearchPlasmaCost");

	// Wonders

	Game.settings.turnRed(gem, preciousGemCost, "preciousGemCost");
	Game.settings.turnRed(silver, preciousSilverCost, "preciousSilverCost");
	Game.settings.turnRed(gold, preciousGoldCost, "preciousGoldCost");

	Game.settings.turnRed(gem, preciousActivateGemCost, "preciousActivateGemCost");
	Game.settings.turnRed(silver, preciousActivateSilverCost, "preciousActivateSilverCost");
	Game.settings.turnRed(gold, preciousActivateGoldCost, "preciousActivateGoldCost");

	Game.settings.turnRed(wood, energeticWoodCost, "energeticWoodCost");
	Game.settings.turnRed(charcoal, energeticCharcoalCost, "energeticCharcoalCost");
	Game.settings.turnRed(uranium, energeticUraniumCost, "energeticUraniumCost");

	Game.settings.turnRed(wood, energeticActivateWoodCost, "energeticActivateWoodCost");
	Game.settings.turnRed(charcoal, energeticActivateCharcoalCost, "energeticActivateCharcoalCost");
	Game.settings.turnRed(uranium, energeticActivateUraniumCost, "energeticActivateUraniumCost");

	Game.settings.turnRed(silicon, techSiliconCost, "techSiliconCost");
	Game.settings.turnRed(gold, techGoldCost, "techGoldCost");
	Game.settings.turnRed(gem, techGemCost, "techGemCost");

	Game.settings.turnRed(silicon, techActivateSiliconCost, "techActivateSiliconCost");
	Game.settings.turnRed(gold, techActivateGoldCost, "techActivateGoldCost");
	Game.settings.turnRed(gem, techActivateGemCost, "techActivateGemCost");

	Game.settings.turnRed(meteorite, meteoriteMeteoriteCost, "meteoriteMeteoriteCost");
	Game.settings.turnRed(ice, meteoriteIceCost, "meteoriteIceCost");
	Game.settings.turnRed(silicon, meteoriteSiliconCost, "meteoriteSiliconCost");

	Game.settings.turnRed(meteorite, meteoriteActivateMeteoriteCost, "meteoriteActivateMeteoriteCost");
	Game.settings.turnRed(ice, meteoriteActivateIceCost, "meteoriteActivateIceCost");
	Game.settings.turnRed(silicon, meteoriteActivateSiliconCost, "meteoriteActivateSiliconCost");

	Game.settings.turnRed(gold, 6000000, "commsWonderGoldCost");
	Game.settings.turnRed(silicon, 10000000, "commsWonderSiliconCost");
	Game.settings.turnRed(ice, 6000000, "commsWonderIceCost");

	Game.settings.turnRed(lunarite, 8000000, "rocketWonderLunariteCost");
	Game.settings.turnRed(titanium, 6000000, "rocketWonderTitaniumCost");
	Game.settings.turnRed(metal, 12000000, "rocketWonderMetalCost");

	Game.settings.turnRed(uranium, 6000000, "antimatterWonderUraniumCost");
	Game.settings.turnRed(lava, 10000000, "antimatterWonderLavaCost");
	Game.settings.turnRed(oil, 8000000, "antimatterWonderOilCost");
	Game.settings.turnRed(methane, 6000000, "antimatterWonderMethaneCost");

	Game.settings.turnRed(meteorite, 500000, "portalMeteoriteCost");
	Game.settings.turnRed(helium, 8000000, "portalHeliumCost");
	Game.settings.turnRed(silicon, 6000000, "portalSiliconCost");

	Game.settings.turnRed(plasma, 500000, "stargateWonderPlasmaCost");
	Game.settings.turnRed(silicon, 920000000, "stargateWonderSiliconCost");
	Game.settings.turnRed(meteorite, 17000000, "stargateWonderMeteoriteCost");

	// Interstellar

	Game.settings.turnRed(lunarite, Game.interstellar.machines.shield.lunarite, "shieldLunariteCost");
	Game.settings.turnRed(titanium, Game.interstellar.machines.shield.titanium, "shieldTitaniumCost");
	Game.settings.turnRed(metal, Game.interstellar.machines.shield.metal, "shieldMetalCost");

	Game.settings.turnRed(silicon, Game.interstellar.machines.engine.silicon, "engineSiliconCost");
	Game.settings.turnRed(meteorite, Game.interstellar.machines.engine.meteorite, "engineMeteoriteCost");
	Game.settings.turnRed(hydrogen, Game.interstellar.machines.engine.hydrogen, "engineHydrogenCost");

	Game.settings.turnRed(silver, Game.interstellar.machines.aero.silver, "aeroSilverCost");
	Game.settings.turnRed(ice, Game.interstellar.machines.aero.ice, "aeroIceCost");
	Game.settings.turnRed(gem, Game.interstellar.machines.aero.gem, "aeroGemCost");

	Game.settings.turnRed(silver, Game.interstellar.machines.drive.silver, "driveSilverCost");
	Game.settings.turnRed(oil, Game.interstellar.machines.drive.oil, "driveOilCost");
	Game.settings.turnRed(meteorite, Game.interstellar.machines.drive.meteorite, "driveMeteoriteCost");

    Game.settings.turnRed(metal, Game.interstellar.machines.IRS.metal, "IRSMetalCost");
    Game.settings.turnRed(ice, Game.interstellar.machines.IRS.ice, "IRSIceCost");
    Game.settings.turnRed(meteorite, Game.interstellar.machines.IRS.meteorite, "IRSMeteoriteCost");

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
		resourcesUnlocked.push("wonderFloor2Nav", "communicationWonderNav", "rocketWonderNav", "antimatterWonderNav", "portalRoomNav");
	}

	Game.removeExcess(resourcesUnlocked, "wonderFloor2Nav");
	Game.removeExcess(resourcesUnlocked, "portalRoomNav");

	if(contains(buttonsHidden, "rebuildCommsWonder")){
		document.getElementById("commsNav").className = "sideTab";
	}
	if(contains(buttonsHidden, "rebuildRocketWonder")){
		document.getElementById("interRocketNav").className = "sideTab";
	}
	if(contains(buttonsHidden, "rebuildAntimatterWonder")){
		document.getElementById("antimatterNav").className = "sideTab";
	}
	if(contains(buttonsHidden, "rebuildStargate")){
		document.getElementById("travelNav").className = "sideTab";
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
	for(var i=0; i<available.length; i++){
        var element = document.getElementById(available[i]);
        if(element) {
        	element.className = "";
        }
	}
	for(var i=0; i<researched.length; i++){
		document.getElementById(researched[i]).className = "hidden";
	}
	if(contains(researched, "unlockStorage")){
		document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("charcoalStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
	}
	if(contains(researched, "unlockSolar")){
		document.getElementById("solarPower").className = "";
	}
	if(contains(researched, "unlockMachines")){
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
	}
	if(contains(researched, "unlockDestruction")){
		for(var i = 0; i < document.getElementsByClassName("destroy").length; i++){
			document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
		}
	}
	else{
		if(contains(available, "unlockDestruction") === false){
			if(contains(researched, "unlockMachines")){
				document.getElementById("unlockDestruction").className = "";
				available.push("unlockDestruction");
			}
		}
	}
	if(contains(researched, "unlockSolarSystem")){
		if(contains(available, "unlockRocketFuelT2") === false){
			document.getElementById("unlockRocketFuelT2").className = "";
			available.push("unlockRocketFuelT2");
		}
        if(contains(available, "unlockLabT2") === false){
            document.getElementById("unlockLabT2").className = "";
            available.push("unlockLabT2");
        }
	}
	if(contains(researched, "unlockRocketFuelT2")){
		if(contains(available, "unlockRocketFuelT3") === false){
            document.getElementById("unlockRocketFuelT3").className = "";
            available.push("unlockRocketFuelT3");
        }
	}
	if(contains(researched, "unlockLabT2")){
		document.getElementById("labTier2").className = "";
	}
	if(contains(researched, "unlockLabT3")){
		document.getElementById("labTier3").className = "";
	}
	if(contains(researched, "unlockLabT4")){
		document.getElementById("labTier4").className = "";
	}
	if(contains(researched, "unlockLabT3")){
		if(contains(available, "unlockLabT4") === false){
			document.getElementById("unlockLabT4").className = "";
			available.push("unlockLabT4");
		}
	}
	if(contains(researched, "upgradeSolarTech")){
		if(contains(available, "unlockBatteries") === false){
			document.getElementById("unlockBatteries").className ="";
			available.push("unlockBatteries");
		}
	}
	if(contains(researched, "unlockEmc")){
		if(contains(available, "unlockMeteorite") === false){
			document.getElementById("unlockMeteorite").className = "";
			available.push("unlockMeteorite");
		}
	}
	if(contains(researched, "unlockMeteorite")){
		if(contains(resourcesUnlocked, "meteoriteEMC") === false){
			document.getElementById("meteoriteEMC").className = "";
			resourcesUnlocked.push("meteoriteEMC");
		}
		if(contains(available, "unlockMeteoriteTier1") === false){
			document.getElementById("unlockMeteoriteTier1").className = "";
			available.push("unlockMeteoriteTier1");
		}
	}
	if(contains(researched, "unlockMeteoriteTier1")){
		if(contains(available, "unlockMeteoriteTier2") === false){
			document.getElementById("unlockMeteoriteTier2").className = "";
			available.push("unlockMeteoriteTier2");
		}
	}
	if(contains(researched, "unlockPlasma")){
		if(contains(available, "unlockPlasmaTier2") === false){
			document.getElementById("unlockPlasmaTier2").className ="";
			available.push("unlockPlasmaTier2");
		}
		if(contains(available, "unlockPSU") === false){
			document.getElementById("unlockPSU").className ="";
			available.push("unlockPSU");
			newUnlock('research');
		}
	}
	if(contains(researched, "unlockBatteries")){
		if(contains(available, "unlockBatteriesT2") === false){
			document.getElementById("unlockBatteriesT2").className ="";
			available.push("unlockBatteriesT2");
		}
	}
    if(contains(researched, "unlockBatteriesT2")){
        if(contains(available, "unlockBatteriesT3") === false){
            document.getElementById("unlockBatteriesT3").className ="";
            available.push("unlockBatteriesT3");
        }
    }
	if(contains(researched, "unlockBatteriesT3")){
        if(contains(available, "unlockBatteriesT4") === false){
             document.getElementById("unlockBatteriesT4").className ="";
             available.push("unlockBatteriesT4");
         }
    }
	if(contains(researched, "unlockDyson")){
		if(contains(available, "unlockDysonSphere") === false){
			document.getElementById("unlockDysonSphere").className ="";
			available.push("unlockDysonSphere");
		}
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
  		document.getElementById("collapseInner").className ="collapseInner sideTab";
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
        if(contains(buttonsHidden, "wonderTab") === false){
            buttonsHidden.push("wonderTab");
        }
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
