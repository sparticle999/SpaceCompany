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
    use += (moonDrill*20)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
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

    return use;
}

function toggleEnergy() {
    globalEnergyLock = !globalEnergyLock;
}

function fixStorageRounding() {
	const precision = 100;
	if(Math.round(meteorite * precision) / precision === meteoriteStorage) {
		meteorite = meteoriteStorage;
	}

	if(Math.round(plasma * precision) / precision === plasmaStorage) {
		plasma = plasmaStorage;
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
    var efficiencyTech = Game.tech.getTechData('efficiencyResearch');
    var perSecondMultiplier = 1 + (efficiencyTech.current * 0.01);

	// Now we calculate the base per second
    uraniumps = grinder * perSecondMultiplier;
    oilps = pump * perSecondMultiplier;
    metalps = miner * perSecondMultiplier;
    gemps = gemMiner * perSecondMultiplier;
    charcoalps = 0;
    woodps = woodcutter * perSecondMultiplier;
    spaceMetalps = moonWorker * perSecondMultiplier;
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

    // Science is not multiplied!
    scienceps = (lab*0.1) + (labT2*1) + (labT3*10);

	if(!energyLow && globalEnergyLock === false) {
		// Add resource gain from machines
        oilps +=  ((pumpjack*pumpjackOutput) + (oilField*63) + (oilRig*246)) * perSecondMultiplier;
        metalps +=  ((heavyDrill*heavyDrillOutput) + (gigaDrill*108) + (quantumDrill*427)) * perSecondMultiplier;
        gemps +=  ((advancedDrill*advancedDrillOutput) + (diamondDrill*89) + (carbyneDrill*358)) * perSecondMultiplier;
        woodps +=  ((laserCutter*laserCutterOutput) + (deforester*74) + (infuser*297)) * perSecondMultiplier;
        spaceMetalps +=  ((moonDrill*10) + (moonQuarry*53) + (planetExcavator*207)) * perSecondMultiplier;
        methaneps +=  ((suctionExcavator*8) + (spaceCow*37) + (vent*149)) * perSecondMultiplier;
        titaniumps +=  ((spaceMetalDrill*9) + (pentaDrill*49) + (titanDrill*197)) * perSecondMultiplier;
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
            rocketFuelps += ((chemicalPlant/5) + (oxidisation*1.5)) * perSecondMultiplier;
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
        var adjustment = adjustCost(plasmaStorage, plasma, plasmaps, heater * 10, heater * perSecondMultiplier);
        if(adjustment.g > 0 && hydrogen + hydrogenps * delta >= adjustment.c) {
        	hydrogenps -= adjustment.c;
        	plasmaps += adjustment.g;
		}
	}

    if(plasmaticToggled === true && !energyLow && globalEnergyLock === false) {
        var adjustment = adjustCost(plasmaStorage, plasma, plasmaps, plasmatic * 80, (plasmatic * 10) * perSecondMultiplier);
        if(adjustment.g > 0 && helium + heliumps * delta >= adjustment.c) {
            heliumps -= adjustment.c;
            plasmaps += adjustment.g;
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

    Game.settings.turnRedOrGreen(energy, getMaxEnergy(), 'energy');

	Game.settings.turnRedOrGreen(uranium, uraniumStorage, 'uranium');
    Game.settings.turnRedOrGreen(oil, oilStorage, 'oil');
    Game.settings.turnRedOrGreen(metal, metalStorage, 'metal');
    Game.settings.turnRedOrGreen(gem, gemStorage, 'gem');
    Game.settings.turnRedOrGreen(charcoal, charcoalStorage, 'charcoal');
    Game.settings.turnRedOrGreen(wood, woodStorage, 'wood');
    Game.settings.turnRedOrGreen(spaceMetal, spaceMetalStorage, 'spaceMetal');
    Game.settings.turnRedOrGreen(methane, methaneStorage, 'methane');
    Game.settings.turnRedOrGreen(titanium, titaniumStorage, 'titanium');
    Game.settings.turnRedOrGreen(gold, goldStorage, 'gold');
    Game.settings.turnRedOrGreen(silver, silverStorage, 'silver');
    Game.settings.turnRedOrGreen(silicon, siliconStorage, 'silicon');
    Game.settings.turnRedOrGreen(lava, lavaStorage, 'lava');
    Game.settings.turnRedOrGreen(hydrogen, hydrogenStorage, 'hydrogen');
    Game.settings.turnRedOrGreen(helium, heliumStorage, 'helium');
    Game.settings.turnRedOrGreen(ice, iceStorage, 'ice');
    Game.settings.turnRedOrGreen(plasma, plasmaStorage, 'plasma');
    Game.settings.turnRedOrGreen(meteorite, meteoriteStorage, 'meteorite');

    Game.settings.turnRedOnNegative(energyps, 'energyps');
    Game.settings.turnRedOnNegative(uraniumps, 'uraniumps');
    Game.settings.turnRedOnNegative(oilps, 'oilps');
    Game.settings.turnRedOnNegative(metalps, 'metalps');
    Game.settings.turnRedOnNegative(gemps, 'gemps');
    Game.settings.turnRedOnNegative(charcoalps, 'charcoalps');
    Game.settings.turnRedOnNegative(woodps, 'woodps');
    Game.settings.turnRedOnNegative(spaceMetalps, 'spaceMetalps');
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

	Game.settings.turnRed(wood, 2, "manualCharcoalCost");
	Game.settings.turnRed(energy, 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(hydrogen, 10, "manualPlasmaHydrogenCost");

	Game.settings.turnRed(uranium, uraniumStorage, "uraniumStorageCost");
	Game.settings.turnRed(spaceMetal, uraniumStorage/2.5, "uraniumStorageSpaceMetalCost");
	
	Game.settings.turnRed(oil, oilStorage, "oilStorageCost");
	Game.settings.turnRed(metal, oilStorage/2.5, "oilStorageMetalCost");
	
	Game.settings.turnRed(metal, metalStorage, "metalStorageCost");
	
	Game.settings.turnRed(gem, gemStorage, "gemStorageCost");
	Game.settings.turnRed(metal, gemStorage/2.5, "gemStorageMetalCost");
	
	Game.settings.turnRed(charcoal, charcoalStorage, "charcoalStorageCost");
	Game.settings.turnRed(metal, charcoalStorage/2.5, "charcoalStorageMetalCost");

	Game.settings.turnRed(wood, woodStorage, "woodStorageCost");
	Game.settings.turnRed(metal, woodStorage/2.5, "woodStorageMetalCost");
	
	Game.settings.turnRed(spaceMetal, spaceMetalStorage, "spaceMetalStorageCost");
	Game.settings.turnRed(metal, spaceMetalStorage*4, "spaceMetalStorageMetalCost");

	Game.settings.turnRed(methane, methaneStorage, "methaneStorageCost");
	Game.settings.turnRed(spaceMetal, methaneStorage/2.5, "methaneStorageSpaceMetalCost");

	Game.settings.turnRed(titanium, titaniumStorage, "titaniumStorageCost");
	Game.settings.turnRed(spaceMetal, titaniumStorage/2.5, "titaniumStorageSpaceMetalCost");

	Game.settings.turnRed(gold, goldStorage, "goldStorageCost");
	Game.settings.turnRed(spaceMetal, goldStorage/2.5, "goldStorageSpaceMetalCost");
	
	Game.settings.turnRed(silver, silverStorage, "silverStorageCost");
	Game.settings.turnRed(spaceMetal, silverStorage/2.5, "silverStorageSpaceMetalCost");

	Game.settings.turnRed(silicon, siliconStorage, "siliconStorageCost");
	Game.settings.turnRed(spaceMetal, siliconStorage/2.5, "siliconStorageSpaceMetalCost");

	Game.settings.turnRed(lava, lavaStorage, "lavaStorageCost");
	Game.settings.turnRed(spaceMetal, lavaStorage/2.5, "lavaStorageSpaceMetalCost");

	Game.settings.turnRed(hydrogen, hydrogenStorage, "hydrogenStorageCost");
	Game.settings.turnRed(spaceMetal, hydrogenStorage/2.5, "hydrogenStorageSpaceMetalCost");

	Game.settings.turnRed(helium, heliumStorage, "heliumStorageCost");
	Game.settings.turnRed(spaceMetal, heliumStorage/2.5, "heliumStorageSpaceMetalCost");

	Game.settings.turnRed(ice, iceStorage, "iceStorageCost");
	Game.settings.turnRed(spaceMetal, iceStorage/2.5, "iceStorageSpaceMetalCost");

	Game.settings.turnRed(meteorite, meteoriteStorage, "meteoriteStorageCost");
	Game.settings.turnRed(spaceMetal, meteoriteStorage*4, "meteoriteStorageSpaceMetalCost");
	
	Game.settings.turnRed(spaceMetal, heaterSpaceMetalCost, "heaterSpaceMetalCost");
	Game.settings.turnRed(gem, heaterGemCost, "heaterGemCost");
	Game.settings.turnRed(silicon, heaterSiliconCost, "heaterSiliconCost");

	Game.settings.turnRed(spaceMetal, plasmaticSpaceMetalCost, "plasmaticSpaceMetalCost");
	Game.settings.turnRed(silicon, plasmaticSiliconCost, "plasmaticSiliconCost");
	Game.settings.turnRed(meteorite, plasmaticMeteoriteCost, "plasmaticMeteoriteCost");

	Game.settings.turnRed(metal, batteryMetalCost, "batteryMetalCost");
	Game.settings.turnRed(gem, batteryGemCost, "batteryGemCost");
	Game.settings.turnRed(spaceMetal, batterySpaceMetalCost, "batterySpaceMetalCost");

	Game.settings.turnRed(metal, batteryT2MetalCost, "batteryT2MetalCost");
	Game.settings.turnRed(gem, batteryT2GemCost, "batteryT2GemCost");
	Game.settings.turnRed(spaceMetal, batteryT2SpaceMetalCost, "batteryT2SpaceMetalCost");

	Game.settings.turnRed(metal, charcoalEngineMetalCost, "charcoalEngineMetalCost");
	Game.settings.turnRed(gem, charcoalEngineGemCost, "charcoalEngineGemCost");

	Game.settings.turnRed(metal, solarPanelMetalCost, "solarPanelMetalCost");
	Game.settings.turnRed(gem, solarPanelGemCost, "solarPanelGemCost");

    Game.settings.turnRed(spaceMetal, methaneStationSpaceMetalCost, "methaneStationSpaceMetalCost");
    Game.settings.turnRed(titanium, methaneStationTitaniumCost, "methaneStationTitaniumCost");
    Game.settings.turnRed(spaceMetal, nuclearStationSpaceMetalCost, "nuclearStationSpaceMetalCost");
    Game.settings.turnRed(titanium, nuclearStationTitaniumCost, "nuclearStationTitaniumCost");
    Game.settings.turnRed(spaceMetal, magmaticSpaceMetalCost, "magmaticSpaceMetalCost");
    Game.settings.turnRed(gem, magmaticGemCost, "magmaticGemCost");
    Game.settings.turnRed(silver, magmaticSilverCost, "magmaticSilverCost");
    Game.settings.turnRed(spaceMetal, fusionReactorSpaceMetalCost, "fusionReactorSpaceMetalCost");
    Game.settings.turnRed(titanium, fusionReactorTitaniumCost, "fusionReactorTitaniumCost");
    Game.settings.turnRed(silicon, fusionReactorSiliconCost, "fusionReactorSiliconCost");
    Game.settings.turnRed(metal, pumpMetalCost, "pumpMetalCost");
    Game.settings.turnRed(gem, pumpGemCost, "pumpGemCost");

	Game.settings.turnRed(metal, pumpjackMetalCost, "pumpjackMetalCost");
	Game.settings.turnRed(gem, pumpjackGemCost, "pumpjackGemCost");
	Game.settings.turnRed(oil, pumpjackOilCost, "pumpjackOilCost");
	
	Game.settings.turnRed(spaceMetal, oilFieldSpaceMetalCost, "oilFieldSpaceMetalCost");
	Game.settings.turnRed(titanium, oilFieldTitaniumCost, "oilFieldTitaniumCost");
	Game.settings.turnRed(silicon, oilFieldSiliconCost, "oilFieldSiliconCost");

	Game.settings.turnRed(spaceMetal, oilRigSpaceMetalCost, "oilRigSpaceMetalCost");
	Game.settings.turnRed(titanium, oilRigTitaniumCost, "oilRigTitaniumCost");
	Game.settings.turnRed(meteorite, oilRigMeteoriteCost, "oilRigMeteoriteCost");

    Game.settings.turnRed(metal, minerMetalCost, "minerMetalCost");
    Game.settings.turnRed(wood, minerWoodCost, "minerWoodCost");
    Game.settings.turnRed(metal, heavyDrillMetalCost, "heavyDrillMetalCost");
    Game.settings.turnRed(gem, heavyDrillGemCost, "heavyDrillGemCost");
    Game.settings.turnRed(oil, heavyDrillOilCost, "heavyDrillOilCost");
	
	Game.settings.turnRed(spaceMetal, gigaDrillSpaceMetalCost, "gigaDrillSpaceMetalCost");
	Game.settings.turnRed(gem, gigaDrillGemCost, "gigaDrillGemCost");
	Game.settings.turnRed(silicon, gigaDrillSiliconCost, "gigaDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, quantumDrillSpaceMetalCost, "quantumDrillSpaceMetalCost");
	Game.settings.turnRed(gold, quantumDrillGoldCost, "quantumDrillGoldCost");
	Game.settings.turnRed(meteorite, quantumDrillMeteoriteCost, "quantumDrillMeteoriteCost");

    Game.settings.turnRed(metal, gemMinerMetalCost, "gemMinerMetalCost");
    Game.settings.turnRed(gem, gemMinerGemCost, "gemMinerGemCost");
    Game.settings.turnRed(metal, advancedDrillMetalCost, "advancedDrillMetalCost");
    Game.settings.turnRed(gem, advancedDrillGemCost, "advancedDrillGemCost");
    Game.settings.turnRed(oil, advancedDrillOilCost, "advancedDrillOilCost");

	Game.settings.turnRed(spaceMetal, diamondDrillSpaceMetalCost, "diamondDrillSpaceMetalCost");
	Game.settings.turnRed(gem, diamondDrillGemCost, "diamondDrillGemCost");
	Game.settings.turnRed(silicon, diamondDrillSiliconCost, "diamondDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, carbyneDrillSpaceMetalCost, "carbyneDrillSpaceMetalCost");
	Game.settings.turnRed(gem, carbyneDrillGemCost, "carbyneDrillGemCost");
	Game.settings.turnRed(meteorite, carbyneDrillMeteoriteCost, "carbyneDrillMeteoriteCost");

    Game.settings.turnRed(metal, woodburnerMetalCost, "woodburnerMetalCost");
    Game.settings.turnRed(wood, woodburnerWoodCost, "woodburnerWoodCost");
    Game.settings.turnRed(metal, furnaceMetalCost, "furnaceMetalCost");
    Game.settings.turnRed(wood, furnaceWoodCost, "furnaceWoodCost");
    Game.settings.turnRed(oil, furnaceOilCost, "furnaceOilCost");
	
	Game.settings.turnRed(spaceMetal, kilnSpaceMetalCost, "kilnSpaceMetalCost");
	Game.settings.turnRed(gem, kilnGemCost, "kilnGemCost");
	Game.settings.turnRed(silicon, kilnSiliconCost, "kilnSiliconCost");

	Game.settings.turnRed(spaceMetal, fryerSpaceMetalCost, "fryerSpaceMetalCost");
	Game.settings.turnRed(lava, fryerLavaCost, "fryerLavaCost");
	Game.settings.turnRed(meteorite, fryerMeteoriteCost, "fryerMeteoriteCost");

    Game.settings.turnRed(metal, woodcutterMetalCost, "woodcutterMetalCost");
    Game.settings.turnRed(wood, woodcutterWoodCost, "woodcutterWoodCost");
    Game.settings.turnRed(metal, laserCutterMetalCost, "laserCutterMetalCost");
    Game.settings.turnRed(gem, laserCutterGemCost, "laserCutterGemCost");
    Game.settings.turnRed(oil, laserCutterOilCost, "laserCutterOilCost");

	Game.settings.turnRed(spaceMetal, deforesterSpaceMetalCost, "deforesterSpaceMetalCost");
	Game.settings.turnRed(titanium, deforesterTitaniumCost, "deforesterTitaniumCost");
	Game.settings.turnRed(silicon, deforesterSiliconCost, "deforesterSiliconCost");

	Game.settings.turnRed(spaceMetal, infuserSpaceMetalCost, "infuserSpaceMetalCost");
	Game.settings.turnRed(oil, infuserOilCost, "infuserOilCost");
	Game.settings.turnRed(meteorite, infuserMeteoriteCost, "infuserMeteoriteCost");

    Game.settings.turnRed(gem, moonWorkerGemCost, "moonWorkerGemCost");
    Game.settings.turnRed(metal, moonDrillMetalCost, "moonDrillMetalCost");
    Game.settings.turnRed(gem, moonDrillGemCost, "moonDrillGemCost");
    Game.settings.turnRed(oil, moonDrillOilCost, "moonDrillOilCost");
	
	Game.settings.turnRed(spaceMetal, moonQuarrySpaceMetalCost, "moonQuarrySpaceMetalCost");
	Game.settings.turnRed(gem, moonQuarryGemCost, "moonQuarryGemCost");
	Game.settings.turnRed(silicon, moonQuarrySiliconCost, "moonQuarrySiliconCost");

	Game.settings.turnRed(titanium, planetExcavatorTitaniumCost, "planetExcavatorTitaniumCost");
	Game.settings.turnRed(ice, planetExcavatorIceCost, "planetExcavatorIceCost");
	Game.settings.turnRed(meteorite, planetExcavatorMeteoriteCost, "planetExcavatorMeteoriteCost");

    Game.settings.turnRed(spaceMetal, vacuumSpaceMetalCost, "vacuumSpaceMetalCost");
    Game.settings.turnRed(gem, vacuumGemCost, "vacuumGemCost");
    Game.settings.turnRed(spaceMetal, suctionExcavatorSpaceMetalCost, "suctionExcavatorSpaceMetalCost");
    Game.settings.turnRed(gem, suctionExcavatorGemCost, "suctionExcavatorGemCost");
    Game.settings.turnRed(oil, suctionExcavatorOilCost, "suctionExcavatorOilCost");
	
	Game.settings.turnRed(spaceMetal, spaceCowSpaceMetalCost, "spaceCowSpaceMetalCost");
	Game.settings.turnRed(titanium, spaceCowTitaniumCost, "spaceCowTitaniumCost");
	Game.settings.turnRed(silicon, spaceCowSiliconCost, "spaceCowSiliconCost");

	Game.settings.turnRed(spaceMetal, ventSpaceMetalCost, "ventSpaceMetalCost");
	Game.settings.turnRed(helium, ventHeliumCost, "ventHeliumCost");
	Game.settings.turnRed(meteorite, ventMeteoriteCost, "ventMeteoriteCost");

    Game.settings.turnRed(gem, explorerGemCost, "explorerGemCost");
    Game.settings.turnRed(spaceMetal, spaceMetalDrillSpaceMetalCost, "spaceMetalDrillSpaceMetalCost");
    Game.settings.turnRed(gem, spaceMetalDrillGemCost, "spaceMetalDrillGemCost");
    Game.settings.turnRed(oil, spaceMetalDrillOilCost, "spaceMetalDrillOilCost");
	
	Game.settings.turnRed(spaceMetal, pentaDrillSpaceMetalCost, "pentaDrillSpaceMetalCost");
	Game.settings.turnRed(gem, pentaDrillGemCost, "pentaDrillGemCost");
	Game.settings.turnRed(silicon, pentaDrillSiliconCost, "pentaDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, titanDrillSpaceMetalCost, "titanDrillSpaceMetalCost");
	Game.settings.turnRed(gold, titanDrillGoldCost, "titanDrillGoldCost");
	Game.settings.turnRed(meteorite, titanDrillMeteoriteCost, "titanDrillMeteoriteCost");

    Game.settings.turnRed(spaceMetal, droidSpaceMetalCost, "droidSpaceMetalCost");
    Game.settings.turnRed(methane, droidMethaneCost, "droidMethaneCost");
    Game.settings.turnRed(spaceMetal, destroyerSpaceMetalCost, "destroyerSpaceMetalCost");
    Game.settings.turnRed(gem, destroyerGemCost, "destroyerGemCost");
    Game.settings.turnRed(oil, destroyerOilCost, "destroyerOilCost");

	Game.settings.turnRed(spaceMetal, deathStarSpaceMetalCost, "deathStarSpaceMetalCost");
	Game.settings.turnRed(silver, deathStarSilverCost, "deathStarSilverCost");
	Game.settings.turnRed(silicon, deathStarSiliconCost, "deathStarSiliconCost");

	Game.settings.turnRed(spaceMetal, actuatorSpaceMetalCost, "actuatorSpaceMetalCost");
	Game.settings.turnRed(helium, actuatorHeliumCost, "actuatorHeliumCost");
	Game.settings.turnRed(meteorite, actuatorMeteoriteCost, "actuatorMeteoriteCost");

    Game.settings.turnRed(spaceMetal, scoutSpaceMetalCost, "scoutSpaceMetalCost");
    Game.settings.turnRed(titanium, scoutTitaniumCost, "scoutTitaniumCost");
    Game.settings.turnRed(spaceMetal, spaceLaserSpaceMetalCost, "spaceLaserSpaceMetalCost");
    Game.settings.turnRed(gem, spaceLaserGemCost, "spaceLaserGemCost");
    Game.settings.turnRed(oil, spaceLaserOilCost, "spaceLaserOilCost");

	Game.settings.turnRed(spaceMetal, berthaSpaceMetalCost, "berthaSpaceMetalCost");
	Game.settings.turnRed(titanium, berthaTitaniumCost, "berthaTitaniumCost");
	Game.settings.turnRed(silicon, berthaSiliconCost, "berthaSiliconCost");

	Game.settings.turnRed(spaceMetal, cannonSpaceMetalCost, "cannonSpaceMetalCost");
	Game.settings.turnRed(oil, cannonOilCost, "cannonOilCost");
	Game.settings.turnRed(meteorite, cannonMeteoriteCost, "cannonMeteoriteCost");

    Game.settings.turnRed(spaceMetal, blowtorchSpaceMetalCost, "blowtorchSpaceMetalCost");
    Game.settings.turnRed(titanium, blowtorchTitaniumCost, "blowtorchTitaniumCost");
    Game.settings.turnRed(spaceMetal, scorcherSpaceMetalCost, "scorcherSpaceMetalCost");
    Game.settings.turnRed(gem, scorcherGemCost, "scorcherGemCost");
    Game.settings.turnRed(oil, scorcherOilCost, "scorcherOilCost");
    Game.settings.turnRed(spaceMetal, annihilatorSpaceMetalCost, "annihilatorSpaceMetalCost");
    Game.settings.turnRed(gem, annihilatorGemCost, "annihilatorGemCost");
    Game.settings.turnRed(silver, annihilatorSilverCost, "annihilatorSilverCost");

	Game.settings.turnRed(spaceMetal, desertSpaceMetalCost, "desertSpaceMetalCost");
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
    Game.settings.turnRed(science, 1000, "unlockRocketFuelT2Cost");
	Game.settings.turnRed(science, 3000, "unlockLabT3Cost");
	Game.settings.turnRed(science, 5000, "upgradeSolarTechCost");
	Game.settings.turnRed(science, 15000, "unlockBatteriesCost");
	Game.settings.turnRed(science, 40000, "unlockPlasmaCost");
	Game.settings.turnRed(science, 60000, "unlockPlasmaTier2Cost");
	Game.settings.turnRed(science, 60000, "unlockEmcCost");
	Game.settings.turnRed(science, 100000, "unlockMeteoriteCost");
	Game.settings.turnRed(science, 75000, "unlockMeteoriteTier1Cost");
	Game.settings.turnRed(science, 100000, "unlockMeteoriteTier2Cost");
	Game.settings.turnRed(science, 100000, "unlockDysonCost");
	Game.settings.turnRed(science, 300000, "unlockBatteriesT2Cost");
	Game.settings.turnRed(science, 500000, "unlockDysonSphereCost");

	Game.settings.turnRed(metal, 1200, "rocketMetalCost");
	Game.settings.turnRed(gem, 900, "rocketGemCost");
	Game.settings.turnRed(oil, 1000, "rocketOilCost");

	Game.settings.turnRed(metal, chemicalPlantMetalCost, "chemicalPlantMetalCost");
	Game.settings.turnRed(gem, chemicalPlantGemCost, "chemicalPlantGemCost");
	Game.settings.turnRed(oil, chemicalPlantOilCost, "chemicalPlantOilCost");

	Game.settings.turnRed(metal, oxidisationMetalCost, "oxidisationMetalCost");
	Game.settings.turnRed(gem, oxidisationGemCost, "oxidisationGemCost");
	Game.settings.turnRed(oil, oxidisationOilCost, "oxidisationOilCost");

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

	Game.settings.turnRed(spaceMetal, grinderSpaceMetalCost, "grinderSpaceMetalCost");
	Game.settings.turnRed(titanium, grinderTitaniumCost, "grinderTitaniumCost");
	Game.settings.turnRed(gold, grinderGoldCost, "grinderGoldCost");

	Game.settings.turnRed(spaceMetal, cubicSpaceMetalCost, "cubicSpaceMetalCost");
	Game.settings.turnRed(uranium, cubicUraniumCost, "cubicUraniumCost");
	Game.settings.turnRed(oil, cubicOilCost, "cubicOilCost");

	Game.settings.turnRed(spaceMetal, enricherSpaceMetalCost, "enricherSpaceMetalCost");
	Game.settings.turnRed(titanium, enricherTitaniumCost, "enricherTitaniumCost");
	Game.settings.turnRed(silicon, enricherSiliconCost, "enricherSiliconCost");

	Game.settings.turnRed(spaceMetal, recyclerSpaceMetalCost, "recyclerSpaceMetalCost");
	Game.settings.turnRed(methane, recyclerMethaneCost, "recyclerMethaneCost");
	Game.settings.turnRed(meteorite, recyclerMeteoriteCost, "recyclerMeteoriteCost");

	Game.settings.turnRed(spaceMetal, crucibleSpaceMetalCost, "crucibleSpaceMetalCost");
	Game.settings.turnRed(gem, crucibleGemCost, "crucibleGemCost");
	
	Game.settings.turnRed(spaceMetal, extractorSpaceMetalCost, "extractorSpaceMetalCost");
	Game.settings.turnRed(titanium, extractorTitaniumCost, "extractorTitaniumCost");
	Game.settings.turnRed(silicon, extractorSiliconCost, "extractorSiliconCost");

	Game.settings.turnRed(spaceMetal, extruderSpaceMetalCost, "extruderSpaceMetalCost");
	Game.settings.turnRed(titanium, extruderTitaniumCost, "extruderTitaniumCost");
	Game.settings.turnRed(silicon, extruderSiliconCost, "extruderSiliconCost");

	Game.settings.turnRed(spaceMetal, veluptuatorSpaceMetalCost, "veluptuatorSpaceMetalCost");
	Game.settings.turnRed(gold, veluptuatorGoldCost, "veluptuatorGoldCost");
	Game.settings.turnRed(meteorite, veluptuatorMeteoriteCost, "veluptuatorMeteoriteCost");

	Game.settings.turnRed(spaceMetal, collectorSpaceMetalCost, "collectorSpaceMetalCost");
	Game.settings.turnRed(titanium, collectorTitaniumCost, "collectorTitaniumCost");

	Game.settings.turnRed(spaceMetal, magnetSpaceMetalCost, "magnetSpaceMetalCost");
	Game.settings.turnRed(titanium, magnetTitaniumCost, "magnetTitaniumCost");
	Game.settings.turnRed(gold, magnetGoldCost, "magnetGoldCost");

	Game.settings.turnRed(silver, eCellSilverCost, "eCellSilverCost");
	Game.settings.turnRed(gold, eCellGoldCost, "eCellGoldCost");
	Game.settings.turnRed(silicon, eCellSiliconCost, "eCellSiliconCost");

	Game.settings.turnRed(spaceMetal, hindenburgSpaceMetalCost, "hindenburgSpaceMetalCost");
	Game.settings.turnRed(methane, hindenburgMethaneCost, "hindenburgMethaneCost");
	Game.settings.turnRed(meteorite, hindenburgMeteoriteCost, "hindenburgMeteoriteCost");

	Game.settings.turnRed(spaceMetal, droneSpaceMetalCost, "droneSpaceMetalCost");
	Game.settings.turnRed(silicon, droneSiliconCost, "droneSiliconCost");
	
	Game.settings.turnRed(spaceMetal, tankerSpaceMetalCost, "tankerSpaceMetalCost");
	Game.settings.turnRed(titanium, tankerTitaniumCost, "tankerTitaniumCost");
	Game.settings.turnRed(silicon, tankerSiliconCost, "tankerSiliconCost");

	Game.settings.turnRed(spaceMetal, compressorSpaceMetalCost, "compressorSpaceMetalCost");
	Game.settings.turnRed(titanium, compressorTitaniumCost, "compressorTitaniumCost");
	Game.settings.turnRed(silicon, compressorSiliconCost, "compressorSiliconCost");

	Game.settings.turnRed(spaceMetal, skimmerSpaceMetalCost, "skimmerSpaceMetalCost");
	Game.settings.turnRed(titanium, skimmerTitaniumCost, "skimmerTitaniumCost");
	Game.settings.turnRed(meteorite, skimmerMeteoriteCost, "skimmerMeteoriteCost");

	Game.settings.turnRed(spaceMetal, icePickSpaceMetalCost, "icePickSpaceMetalCost");
	Game.settings.turnRed(gem, icePickGemCost, "icePickGemCost");
	
	Game.settings.turnRed(spaceMetal, iceDrillSpaceMetalCost, "iceDrillSpaceMetalCost");
	Game.settings.turnRed(titanium, iceDrillTitaniumCost, "iceDrillTitaniumCost");
	Game.settings.turnRed(silicon, iceDrillSiliconCost, "iceDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, freezerSpaceMetalCost, "freezerSpaceMetalCost");
	Game.settings.turnRed(titanium, freezerTitaniumCost, "freezerTitaniumCost");
	Game.settings.turnRed(silicon, freezerSiliconCost, "freezerSiliconCost");

	Game.settings.turnRed(wood, mrFreezeWoodCost, "mrFreezeWoodCost");
	Game.settings.turnRed(helium, mrFreezeHeliumCost, "mrFreezeHeliumCost");
	Game.settings.turnRed(meteorite, mrFreezeMeteoriteCost, "mrFreezeMeteoriteCost");

	Game.settings.turnRed(spaceMetal, printerSpaceMetalCost, "printerSpaceMetalCost");
	Game.settings.turnRed(silicon, printerSiliconCost, "printerSiliconCost");

	Game.settings.turnRed(spaceMetal, webSpaceMetalCost, "webSpaceMetalCost");
	Game.settings.turnRed(uranium, webUraniumCost, "webUraniumCost");
	Game.settings.turnRed(silicon, webSiliconCost, "webSiliconCost");

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
}

function refreshResources(){
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
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet sideTab";
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
		document.getElementById("portalRoomNav").className = "sideTab";
		resourcesUnlocked.push("wonderFloor2Nav", "portalRoomNav");
	}
	for(var i=0; i<noBorder.length; i++){
		for(var j=0; j<4; j++){
			document.getElementById(noBorder[i] + j).style.border = "";
		}
	}
	for(var i=0; i<activated.length; i++){
		document.getElementById(activated[i] + "Activation").innerHTML = "Activated";
	}
	if(techUnlocked === true){
		unlockTier3();
	}
	if(meteoriteUnlocked === true){
		unlockTier4();
	}
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet sideTab";
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
		document.getElementById(available[i]).className = "";
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
	}
	if(contains(researched, "unlockSolarSystem")){
		if(contains(available, "unlockLabT2") === false){
			document.getElementById("unlockLabT2").className = "";
			available.push("unlockLabT2");
		}
	}
	if(contains(researched, "unlockLabT2")){
		document.getElementById("labTier2").className = "";
	}
	if(contains(researched, "unlockLabT3")){
		document.getElementById("labTier3").className = "";
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
	}
	if(contains(researched, "unlockBatteries")){
		if(contains(available, "unlockBatteriesT2") === false){
			document.getElementById("unlockBatteriesT2").className ="";
			available.push("unlockBatteriesT2");
		}
	}
	if(contains(researched, "unlockDyson")){
		if(contains(available, "unlockDysonSphere") === false){
			document.getElementById("unlockDysonSphere").className ="";
			available.push("unlockDysonSphere");
		}
	}

	if(typeof versionNumber != "0.4.4"){
		versionNumber = "0.4.4";
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

//ToolTips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({container: 'body'}); 
});
