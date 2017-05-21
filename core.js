function refresh(){
	if(energy < 250 && energy > -250){
		document.getElementById("energy").innerHTML = Game.settings.format(energy*2)/2;
	}
	else{
		document.getElementById("energy").innerHTML = Game.settings.format(energy);
	}
	document.getElementById("plasma").innerHTML = Game.settings.format(plasma);
	document.getElementById("oil").innerHTML = Game.settings.format(oil);
	document.getElementById("metal").innerHTML = Game.settings.format(metal);
	document.getElementById("gem").innerHTML = Game.settings.format(gem);
	document.getElementById("charcoal").innerHTML = Game.settings.format(charcoal);
	document.getElementById("wood").innerHTML = Game.settings.format(wood);
	document.getElementById("spaceMetal").innerHTML = Game.settings.format(spaceMetal);
	document.getElementById("methane").innerHTML = Game.settings.format(methane);
	document.getElementById("titanium").innerHTML = Game.settings.format(titanium);
	document.getElementById("gold").innerHTML = Game.settings.format(gold);
	document.getElementById("silver").innerHTML = Game.settings.format(silver);
	document.getElementById("silicon").innerHTML = Game.settings.format(silicon);
	document.getElementById("uranium").innerHTML = Game.settings.format(uranium);
	document.getElementById("lava").innerHTML = Game.settings.format(lava);
	document.getElementById("hydrogen").innerHTML = Game.settings.format(hydrogen);
	document.getElementById("helium").innerHTML = Game.settings.format(helium);
	document.getElementById("ice").innerHTML = Game.settings.format(ice);
	document.getElementById("meteorite").innerHTML = Game.settings.format(meteorite);

	if(science < 100){
		document.getElementById("science").innerHTML = Game.settings.format(science, 1);
	}
	else{
		document.getElementById("science").innerHTML = Game.settings.format(science);
	}

    if(rocketFuel < 100) {
        document.getElementById("rocketFuel").innerHTML = Game.settings.format(rocketFuel, 1);
    } else {
        document.getElementById("rocketFuel").innerHTML = Game.settings.format(rocketFuel);
    }
}

function calculateEnergyOutput(delta) {
	// Fixed outputs first
	var output = (swarm*25000) + (sphere*1000000) + (solarPanel*solarPanelOutput);

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

	// Now we calculate the base per second
    uraniumps = grinder;
    oilps = pump;
    metalps = miner;
    gemps = gemMiner;
    charcoalps = 0;
    woodps = woodcutter;
    spaceMetalps = moonWorker;
    methaneps = vacuum ;
    titaniumps = explorer;
    goldps = droid;
    silverps = scout;
    siliconps = blowtorch;
    lavaps = crucible;
    hydrogenps = collector;
    heliumps = drone;
    iceps = icePick;
    plasmaps = 0;
    meteoriteps = 0;
    rocketFuelps = 0;

    scienceps = (lab*0.1) + (labT2*1) + (labT3*10);

	if(!energyLow) {
        oilps +=  (pumpjack*pumpjackOutput) + (oilField*63) + (oilRig*246);
        metalps +=  (heavyDrill*heavyDrillOutput) + (gigaDrill*108) + (quantumDrill*427);
        gemps +=  (advancedDrill*advancedDrillOutput) + (diamondDrill*89) + (carbyneDrill*358);
        woodps +=  (laserCutter*laserCutterOutput) + (deforester*74) + (infuser*297);
        spaceMetalps +=  (moonDrill*10) + (moonQuarry*53) + (planetExcavator*207);
        methaneps +=  (suctionExcavator*8) + (spaceCow*37) + (vent*149) - (methaneStation * 6);
        titaniumps +=  (spaceMetalDrill*9) + (pentaDrill*49) + (titanDrill*197);
        goldps +=  (destroyer*8) + (deathStar*51) + (actuator*211);
        silverps +=  (spaceLaser*13) + (bertha*53) + (cannon*208);
        siliconps +=  (scorcher*9) + (annihilator*40) + (desert*157);
        uraniumps +=  (cubic*9) +(enricher*61) + (recycler*235) - (nuclearStation * 7);
        lavaps +=  (extractor*7) + (extruder*43) + (veluptuator*187) - (magmatic * 11);
        hydrogenps +=  (magnet*5) + (eCell*28) + (hindenburg*113) - (fusionReactor * 10);
        heliumps +=  (tanker*11) + (compressor*57) + (skimmer*232) - (fusionReactor * 10);
        iceps +=  (iceDrill*9) + (freezer*65) + (mrFreeze*278);
	}

	if(charcoalToggled) {
		var woodCost = woodburner * 2;
		if(!energyLow) {
            woodCost = (furnace*furnaceWoodInput) + (kiln*56) + (fryer*148);
		}

		if(wood + woodps >= woodCost) {
			woodps -= woodCost;
			charcoalps += woodburner;

			if(!energyLow){
                charcoalps += (furnace*furnaceOutput) + (kiln*53) + (fryer*210)
			}
		}
	}

    if(rocketFuelToggled === true) {
        var oilCost = (chemicalPlant*20) + (oxidisation*100);
        var charcoalCost = (chemicalPlant*20) + (oxidisation*100);
        if(oil + oilps >= oilCost && charcoal + charcoalps >= charcoalCost) {
            oilps -= oilCost;
            charcoalps -= charcoalCost;
            rocketFuelps += (chemicalPlant/5) + (oxidisation*1.5);
        }
    }

	if(meteoriteToggled === true && meteorite < meteoriteStorage){
        var plasmaCost = (printer * 3) + (web * 21);
        var gain = printer + (web * 8);
        if(plasma + plasmaps * delta >= plasmaCost) {
            meteoriteps += gain;
            plasmaps -= plasmaCost;
        }
    }

    if(heaterToggled === true && plasma < plasmaStorage) {
		var hydrogenCost = heater * 10;
		var gain = heater;
		if(hydrogen + hydrogenps * delta >= hydrogenCost) {
			hydrogenps -= hydrogenCost;
			plasmaps += gain;
		}
	}

	if(plasmaticToggled === true && plasma < plasmaStorage) {
		var heliumCost = plasmatic * 80;
		var gain = plasmatic * 10;
		if(helium + heliumps >= heliumCost) {
			heliumps -= heliumCost;
			plasmaps += gain;
		}
	}

}

function refreshUI(){
	if(heaterToggled === true){
		document.getElementById("heaterToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("heaterToggled").innerHTML = "On";
	}
	if(plasmaticToggled === true){
		document.getElementById("plasmaticToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("plasmaticToggled").innerHTML = "On";
	}
	if(charcoalToggled === true){
		document.getElementById("charcoalToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("charcoalToggled").innerHTML = "On";
	}
	if(rocketFuelToggled === true){
		document.getElementById("rocketFuelToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("rocketFuelToggled").innerHTML = "On";
	}
	if(meteoriteToggled === true){
		document.getElementById("meteoriteToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("meteoriteToggled").innerHTML = "On";
	}

	document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
	document.getElementById("energyStorage").innerHTML = Game.settings.format(getMaxEnergy());
	document.getElementById("uraniumStorage").innerHTML = Game.settings.format(uraniumStorage);
	document.getElementById("uraniumNextStorage").innerHTML = Game.settings.format(uraniumNextStorage);
	document.getElementById("uraniumStorageCost").innerHTML = Game.settings.format(uraniumStorage);
	document.getElementById("uraniumStorageSpaceMetalCost").innerHTML = Game.settings.format(uraniumNextStorage/2.5);
	document.getElementById("oilStorage").innerHTML = Game.settings.format(oilStorage);
	document.getElementById("oilNextStorage").innerHTML = Game.settings.format(oilNextStorage);
	document.getElementById("oilStorageCost").innerHTML = Game.settings.format(oilStorage);
	document.getElementById("oilStorageMetalCost").innerHTML = Game.settings.format(oilStorage/2.5);
	document.getElementById("metalStorage").innerHTML = Game.settings.format(metalStorage);
	document.getElementById("metalNextStorage").innerHTML = Game.settings.format(metalNextStorage);
	document.getElementById("metalStorageCost").innerHTML = Game.settings.format(metalStorage);
	document.getElementById("gemStorage").innerHTML = Game.settings.format(gemStorage);
	document.getElementById("gemNextStorage").innerHTML = Game.settings.format(gemNextStorage);
	document.getElementById("gemStorageCost").innerHTML = Game.settings.format(gemStorage);
	document.getElementById("gemStorageMetalCost").innerHTML = Game.settings.format(gemStorage/2.5);
	document.getElementById("charcoalStorage").innerHTML = Game.settings.format(charcoalStorage);
	document.getElementById("charcoalNextStorage").innerHTML = Game.settings.format(charcoalNextStorage);
	document.getElementById("charcoalStorageCost").innerHTML = Game.settings.format(charcoalStorage);
	document.getElementById("charcoalStorageMetalCost").innerHTML = Game.settings.format(charcoalStorage/2.5);
	document.getElementById("woodStorage").innerHTML = Game.settings.format(woodStorage);
	document.getElementById("woodNextStorage").innerHTML = Game.settings.format(woodNextStorage);
	document.getElementById("woodStorageCost").innerHTML = Game.settings.format(woodStorage);
	document.getElementById("woodStorageMetalCost").innerHTML = Game.settings.format(woodStorage/2.5);
	document.getElementById("spaceMetalStorage").innerHTML = Game.settings.format(spaceMetalStorage);
	document.getElementById("spaceMetalNextStorage").innerHTML = Game.settings.format(spaceMetalNextStorage);
	document.getElementById("spaceMetalStorageCost").innerHTML = Game.settings.format(spaceMetalStorage);
	document.getElementById("spaceMetalStorageMetalCost").innerHTML = Game.settings.format(spaceMetalStorage*4);
	document.getElementById("methaneStorage").innerHTML = Game.settings.format(methaneStorage);
	document.getElementById("methaneNextStorage").innerHTML = Game.settings.format(methaneNextStorage);
	document.getElementById("methaneStorageCost").innerHTML = Game.settings.format(methaneStorage);
	document.getElementById("methaneStorageSpaceMetalCost").innerHTML = Game.settings.format(methaneStorage/2.5);
	document.getElementById("titaniumStorage").innerHTML = Game.settings.format(titaniumStorage);
	document.getElementById("titaniumNextStorage").innerHTML = Game.settings.format(titaniumNextStorage);
	document.getElementById("titaniumStorageCost").innerHTML = Game.settings.format(titaniumStorage);
	document.getElementById("titaniumStorageSpaceMetalCost").innerHTML = Game.settings.format(titaniumStorage/2.5);
	document.getElementById("goldStorage").innerHTML = Game.settings.format(goldStorage);
	document.getElementById("goldNextStorage").innerHTML = Game.settings.format(goldNextStorage);
	document.getElementById("goldStorageCost").innerHTML = Game.settings.format(goldStorage);
	document.getElementById("goldStorageSpaceMetalCost").innerHTML = Game.settings.format(goldStorage/2.5);
	document.getElementById("silverStorage").innerHTML = Game.settings.format(silverStorage);
	document.getElementById("silverNextStorage").innerHTML = Game.settings.format(silverNextStorage);
	document.getElementById("silverStorageCost").innerHTML = Game.settings.format(silverStorage);
	document.getElementById("silverStorageSpaceMetalCost").innerHTML = Game.settings.format(silverStorage/2.5);
	document.getElementById("siliconStorage").innerHTML = Game.settings.format(siliconStorage);
	document.getElementById("siliconNextStorage").innerHTML = Game.settings.format(siliconNextStorage);
	document.getElementById("siliconStorageCost").innerHTML = Game.settings.format(siliconStorage);
	document.getElementById("siliconStorageSpaceMetalCost").innerHTML = Game.settings.format(siliconStorage/2.5);
	document.getElementById("lavaStorage").innerHTML = Game.settings.format(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = Game.settings.format(lavaNextStorage);
	document.getElementById("lavaStorageCost").innerHTML = Game.settings.format(lavaStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = Game.settings.format(lavaStorage/2.5);
	document.getElementById("hydrogenStorage").innerHTML = Game.settings.format(hydrogenStorage);
	document.getElementById("hydrogenNextStorage").innerHTML = Game.settings.format(hydrogenNextStorage);
	document.getElementById("hydrogenStorageCost").innerHTML = Game.settings.format(hydrogenStorage);
	document.getElementById("hydrogenStorageSpaceMetalCost").innerHTML = Game.settings.format(hydrogenStorage/2.5);
	document.getElementById("heliumStorage").innerHTML = Game.settings.format(heliumStorage);
	document.getElementById("heliumNextStorage").innerHTML = Game.settings.format(heliumNextStorage);
	document.getElementById("heliumStorageCost").innerHTML = Game.settings.format(heliumStorage);
	document.getElementById("heliumStorageSpaceMetalCost").innerHTML = Game.settings.format(heliumStorage/2.5);
	document.getElementById("iceStorage").innerHTML = Game.settings.format(iceStorage);
	document.getElementById("iceNextStorage").innerHTML = Game.settings.format(iceNextStorage);
	document.getElementById("iceStorageCost").innerHTML = Game.settings.format(iceStorage);
	document.getElementById("iceStorageSpaceMetalCost").innerHTML = Game.settings.format(iceStorage/2.5);
	document.getElementById("meteoriteStorage").innerHTML = Game.settings.format(meteoriteStorage);
	document.getElementById("meteoriteNextStorage").innerHTML = Game.settings.format(meteoriteNextStorage);
	document.getElementById("meteoriteStorageCost").innerHTML = Game.settings.format(meteoriteStorage);
	document.getElementById("meteoriteStorageSpaceMetalCost").innerHTML = Game.settings.format(meteoriteStorage*4);
	document.getElementById("lava").innerHTML = Game.settings.format(lava);
	document.getElementById("lavaStorage").innerHTML = Game.settings.format(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = Game.settings.format(lavaNextStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = Game.settings.format(lavaNextStorage/2.5);
	document.getElementById("heater").innerHTML = heater;
	document.getElementById("heaterSpaceMetalCost").innerHTML = Game.settings.format(heaterSpaceMetalCost);
	document.getElementById("heaterGemCost").innerHTML = Game.settings.format(heaterGemCost);
	document.getElementById("heaterSiliconCost").innerHTML = Game.settings.format(heaterSiliconCost);
	document.getElementById("plasmatic").innerHTML = plasmatic;
	document.getElementById("plasmaticSpaceMetalCost").innerHTML = Game.settings.format(plasmaticSpaceMetalCost);
	document.getElementById("plasmaticSiliconCost").innerHTML = Game.settings.format(plasmaticSiliconCost);
	document.getElementById("plasmaticMeteoriteCost").innerHTML = Game.settings.format(plasmaticMeteoriteCost);
	document.getElementById("battery").innerHTML = battery;
	document.getElementById("batteryMetalCost").innerHTML = Game.settings.format(batteryMetalCost);
	document.getElementById("batteryGemCost").innerHTML = Game.settings.format(batteryGemCost);
	document.getElementById("batterySpaceMetalCost").innerHTML = Game.settings.format(batterySpaceMetalCost);
	document.getElementById("batteryT2").innerHTML = batteryT2;
	document.getElementById("batteryT2MetalCost").innerHTML = Game.settings.format(batteryT2MetalCost);
	document.getElementById("batteryT2GemCost").innerHTML = Game.settings.format(batteryT2GemCost);
	document.getElementById("batteryT2SpaceMetalCost").innerHTML = Game.settings.format(batteryT2SpaceMetalCost);
	document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
	document.getElementById("charcoalEngineMetalCost").innerHTML = Game.settings.format(charcoalEngineMetalCost);
	document.getElementById("charcoalEngineGemCost").innerHTML = Game.settings.format(charcoalEngineGemCost);
	document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
	document.getElementById("solarPanel").innerHTML = solarPanel;
	document.getElementById("solarPanelMetalCost").innerHTML = Game.settings.format(solarPanelMetalCost);
	document.getElementById("solarPanelGemCost").innerHTML = Game.settings.format(solarPanelGemCost);
	document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
	document.getElementById("methaneStation").innerHTML = methaneStation;
	document.getElementById("methaneStationSpaceMetalCost").innerHTML = Game.settings.format(methaneStationSpaceMetalCost);
	document.getElementById("methaneStationTitaniumCost").innerHTML = Game.settings.format(methaneStationTitaniumCost);
	document.getElementById("nuclearStation").innerHTML = nuclearStation;
	document.getElementById("nuclearStationSpaceMetalCost").innerHTML = Game.settings.format(nuclearStationSpaceMetalCost);
	document.getElementById("nuclearStationTitaniumCost").innerHTML = Game.settings.format(nuclearStationTitaniumCost);
	document.getElementById("magmatic").innerHTML = magmatic;
	document.getElementById("magmaticSpaceMetalCost").innerHTML = Game.settings.format(magmaticSpaceMetalCost);
	document.getElementById("magmaticGemCost").innerHTML = Game.settings.format(magmaticGemCost);
	document.getElementById("magmaticSilverCost").innerHTML = Game.settings.format(magmaticSilverCost);
	document.getElementById("fusionReactor").innerHTML = fusionReactor;
	document.getElementById("fusionReactorSpaceMetalCost").innerHTML = Game.settings.format(fusionReactorSpaceMetalCost);
	document.getElementById("fusionReactorTitaniumCost").innerHTML = Game.settings.format(fusionReactorTitaniumCost);
	document.getElementById("fusionReactorSiliconCost").innerHTML = Game.settings.format(fusionReactorSiliconCost);
	document.getElementById("pump").innerHTML = pump;
	document.getElementById("pumpMetalCost").innerHTML = Game.settings.format(pumpMetalCost);
	document.getElementById("pumpGemCost").innerHTML = Game.settings.format(pumpGemCost);
	document.getElementById("pumpjack").innerHTML = pumpjack;
	document.getElementById("pumpjackOilCost").innerHTML = Game.settings.format(pumpjackOilCost);
	document.getElementById("pumpjackGemCost").innerHTML = Game.settings.format(pumpjackGemCost);
	document.getElementById("pumpjackMetalCost").innerHTML = Game.settings.format(pumpjackMetalCost);
	document.getElementById("pumpjackOutput").innerHTML = Game.settings.format(pumpjackOutput);
	document.getElementById("oilField").innerHTML = oilField;
	document.getElementById("oilFieldTitaniumCost").innerHTML = Game.settings.format(oilFieldTitaniumCost);
	document.getElementById("oilFieldSpaceMetalCost").innerHTML = Game.settings.format(oilFieldSpaceMetalCost);
	document.getElementById("oilFieldSiliconCost").innerHTML = Game.settings.format(oilFieldSiliconCost);
	document.getElementById("oilRig").innerHTML = oilRig;
	document.getElementById("oilRigTitaniumCost").innerHTML = Game.settings.format(oilRigTitaniumCost);
	document.getElementById("oilRigSpaceMetalCost").innerHTML = Game.settings.format(oilRigSpaceMetalCost);
	document.getElementById("oilRigMeteoriteCost").innerHTML = Game.settings.format(oilRigMeteoriteCost);
	document.getElementById("miner").innerHTML = miner;
	document.getElementById("minerMetalCost").innerHTML = Game.settings.format(minerMetalCost);
	document.getElementById("minerWoodCost").innerHTML = Game.settings.format(minerWoodCost);
	document.getElementById("heavyDrill").innerHTML = heavyDrill;
	document.getElementById("heavyDrillMetalCost").innerHTML = Game.settings.format(heavyDrillMetalCost);
	document.getElementById("heavyDrillGemCost").innerHTML = Game.settings.format(heavyDrillGemCost);
	document.getElementById("heavyDrillOilCost").innerHTML = Game.settings.format(heavyDrillOilCost);
	document.getElementById("heavyDrillOutput").innerHTML = Game.settings.format(heavyDrillOutput);
	document.getElementById("gigaDrill").innerHTML = gigaDrill;
	document.getElementById("gigaDrillSpaceMetalCost").innerHTML = Game.settings.format(gigaDrillSpaceMetalCost);
	document.getElementById("gigaDrillGemCost").innerHTML = Game.settings.format(gigaDrillGemCost);
	document.getElementById("gigaDrillSiliconCost").innerHTML = Game.settings.format(gigaDrillSiliconCost);
	document.getElementById("quantumDrill").innerHTML = quantumDrill;
	document.getElementById("quantumDrillSpaceMetalCost").innerHTML = Game.settings.format(quantumDrillSpaceMetalCost);
	document.getElementById("quantumDrillGoldCost").innerHTML = Game.settings.format(quantumDrillGoldCost);
	document.getElementById("quantumDrillMeteoriteCost").innerHTML = Game.settings.format(quantumDrillMeteoriteCost);
	document.getElementById("gemMiner").innerHTML = gemMiner;
	document.getElementById("gemMinerMetalCost").innerHTML = Game.settings.format(gemMinerMetalCost);
	document.getElementById("gemMinerGemCost").innerHTML = Game.settings.format(gemMinerGemCost);
	document.getElementById("advancedDrill").innerHTML = advancedDrill;
	document.getElementById("advancedDrillMetalCost").innerHTML = Game.settings.format(advancedDrillMetalCost);
	document.getElementById("advancedDrillGemCost").innerHTML = Game.settings.format(advancedDrillGemCost);
	document.getElementById("advancedDrillOilCost").innerHTML = Game.settings.format(advancedDrillOilCost);
	document.getElementById("advancedDrillOutput").innerHTML = Game.settings.format(advancedDrillOutput);
	document.getElementById("diamondDrill").innerHTML = diamondDrill;
	document.getElementById("diamondDrillSpaceMetalCost").innerHTML = Game.settings.format(diamondDrillSpaceMetalCost);
	document.getElementById("diamondDrillGemCost").innerHTML = Game.settings.format(diamondDrillGemCost);
	document.getElementById("diamondDrillSiliconCost").innerHTML = Game.settings.format(diamondDrillSiliconCost);
	document.getElementById("carbyneDrill").innerHTML = carbyneDrill;
	document.getElementById("carbyneDrillSpaceMetalCost").innerHTML = Game.settings.format(carbyneDrillSpaceMetalCost);
	document.getElementById("carbyneDrillGemCost").innerHTML = Game.settings.format(carbyneDrillGemCost);
	document.getElementById("carbyneDrillMeteoriteCost").innerHTML = Game.settings.format(carbyneDrillMeteoriteCost);
	document.getElementById("woodburner").innerHTML = woodburner;
	document.getElementById("woodburnerMetalCost").innerHTML = Game.settings.format(woodburnerMetalCost);
	document.getElementById("woodburnerWoodCost").innerHTML = Game.settings.format(woodburnerWoodCost);
	document.getElementById("furnace").innerHTML = furnace;
	document.getElementById("furnaceMetalCost").innerHTML = Game.settings.format(furnaceMetalCost);
	document.getElementById("furnaceWoodCost").innerHTML = Game.settings.format(furnaceWoodCost);
	document.getElementById("furnaceOilCost").innerHTML = Game.settings.format(furnaceOilCost);
	document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
	document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
	document.getElementById("kiln").innerHTML = Game.settings.format(kiln);
	document.getElementById("kilnSpaceMetalCost").innerHTML = Game.settings.format(kilnSpaceMetalCost);
	document.getElementById("kilnGemCost").innerHTML = Game.settings.format(kilnGemCost);
	document.getElementById("kilnSiliconCost").innerHTML = Game.settings.format(kilnSiliconCost);
	document.getElementById("fryer").innerHTML = Game.settings.format(fryer);
	document.getElementById("fryerSpaceMetalCost").innerHTML = Game.settings.format(fryerSpaceMetalCost);
	document.getElementById("fryerLavaCost").innerHTML = Game.settings.format(fryerLavaCost);
	document.getElementById("fryerMeteoriteCost").innerHTML = Game.settings.format(fryerMeteoriteCost);
	document.getElementById("woodcutter").innerHTML = woodcutter;
	document.getElementById("woodcutterMetalCost").innerHTML = Game.settings.format(woodcutterMetalCost);
	document.getElementById("woodcutterWoodCost").innerHTML = Game.settings.format(woodcutterWoodCost);
	document.getElementById("laserCutter").innerHTML = laserCutter;
	document.getElementById("laserCutterMetalCost").innerHTML = Game.settings.format(laserCutterMetalCost);
	document.getElementById("laserCutterGemCost").innerHTML = Game.settings.format(laserCutterGemCost);
	document.getElementById("laserCutterOilCost").innerHTML = Game.settings.format(laserCutterOilCost);
	document.getElementById("laserCutterOutput").innerHTML = Game.settings.format(laserCutterOutput);
	document.getElementById("deforester").innerHTML = deforester;
	document.getElementById("deforesterSpaceMetalCost").innerHTML = Game.settings.format(deforesterSpaceMetalCost);
	document.getElementById("deforesterTitaniumCost").innerHTML = Game.settings.format(deforesterTitaniumCost);
	document.getElementById("deforesterSiliconCost").innerHTML = Game.settings.format(deforesterSiliconCost);
	document.getElementById("infuser").innerHTML = infuser;
	document.getElementById("infuserSpaceMetalCost").innerHTML = Game.settings.format(infuserSpaceMetalCost);
	document.getElementById("infuserOilCost").innerHTML = Game.settings.format(infuserOilCost);
	document.getElementById("infuserMeteoriteCost").innerHTML = Game.settings.format(infuserMeteoriteCost);
	document.getElementById("moonWorker").innerHTML = moonWorker;
	document.getElementById("moonWorkerGemCost").innerHTML = Game.settings.format(moonWorkerGemCost);
	document.getElementById("moonDrill").innerHTML = moonDrill;
	document.getElementById("moonDrillMetalCost").innerHTML = Game.settings.format(moonDrillMetalCost);
	document.getElementById("moonDrillGemCost").innerHTML = Game.settings.format(moonDrillGemCost);
	document.getElementById("moonDrillOilCost").innerHTML = Game.settings.format(moonDrillOilCost);
	document.getElementById("moonQuarry").innerHTML = moonQuarry;
	document.getElementById("moonQuarrySpaceMetalCost").innerHTML = Game.settings.format(moonQuarrySpaceMetalCost);
	document.getElementById("moonQuarryGemCost").innerHTML = Game.settings.format(moonQuarryGemCost);
	document.getElementById("moonQuarrySiliconCost").innerHTML = Game.settings.format(moonQuarrySiliconCost);
	document.getElementById("planetExcavator").innerHTML = planetExcavator;
	document.getElementById("planetExcavatorTitaniumCost").innerHTML = Game.settings.format(planetExcavatorTitaniumCost);
	document.getElementById("planetExcavatorIceCost").innerHTML = Game.settings.format(planetExcavatorIceCost);
	document.getElementById("planetExcavatorMeteoriteCost").innerHTML = Game.settings.format(planetExcavatorMeteoriteCost);
	document.getElementById("vacuum").innerHTML = vacuum;
	document.getElementById("vacuumSpaceMetalCost").innerHTML = Game.settings.format(vacuumSpaceMetalCost);
	document.getElementById("vacuumGemCost").innerHTML = Game.settings.format(vacuumGemCost);
	document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
	document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = Game.settings.format(suctionExcavatorSpaceMetalCost);
	document.getElementById("suctionExcavatorGemCost").innerHTML = Game.settings.format(suctionExcavatorGemCost);
	document.getElementById("suctionExcavatorOilCost").innerHTML = Game.settings.format(suctionExcavatorOilCost);
	document.getElementById("spaceCow").innerHTML = spaceCow;
	document.getElementById("spaceCowTitaniumCost").innerHTML = Game.settings.format(spaceCowTitaniumCost);
	document.getElementById("spaceCowSpaceMetalCost").innerHTML = Game.settings.format(spaceCowSpaceMetalCost);
	document.getElementById("spaceCowSiliconCost").innerHTML = Game.settings.format(spaceCowSiliconCost);
	document.getElementById("vent").innerHTML = vent;
	document.getElementById("ventHeliumCost").innerHTML = Game.settings.format(ventHeliumCost);
	document.getElementById("ventSpaceMetalCost").innerHTML = Game.settings.format(ventSpaceMetalCost);
	document.getElementById("ventMeteoriteCost").innerHTML = Game.settings.format(ventMeteoriteCost);
	document.getElementById("explorer").innerHTML = explorer;
	document.getElementById("explorerGemCost").innerHTML = Game.settings.format(explorerGemCost);
	document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
	document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = Game.settings.format(spaceMetalDrillSpaceMetalCost);
	document.getElementById("spaceMetalDrillGemCost").innerHTML = Game.settings.format(spaceMetalDrillGemCost);
	document.getElementById("spaceMetalDrillOilCost").innerHTML = Game.settings.format(spaceMetalDrillOilCost);
	document.getElementById("pentaDrill").innerHTML = pentaDrill;
	document.getElementById("pentaDrillSpaceMetalCost").innerHTML = Game.settings.format(pentaDrillSpaceMetalCost);
	document.getElementById("pentaDrillGemCost").innerHTML = Game.settings.format(pentaDrillGemCost);
	document.getElementById("pentaDrillSiliconCost").innerHTML = Game.settings.format(pentaDrillSiliconCost);
	document.getElementById("titanDrill").innerHTML = titanDrill;
	document.getElementById("titanDrillSpaceMetalCost").innerHTML = Game.settings.format(titanDrillSpaceMetalCost);
	document.getElementById("titanDrillGoldCost").innerHTML = Game.settings.format(titanDrillGoldCost);
	document.getElementById("titanDrillMeteoriteCost").innerHTML = Game.settings.format(titanDrillMeteoriteCost);
	document.getElementById("droid").innerHTML = droid;
	document.getElementById("droidSpaceMetalCost").innerHTML = Game.settings.format(droidSpaceMetalCost);
	document.getElementById("droidMethaneCost").innerHTML = Game.settings.format(droidMethaneCost);
	document.getElementById("destroyer").innerHTML = destroyer;
	document.getElementById("destroyerSpaceMetalCost").innerHTML = Game.settings.format(destroyerSpaceMetalCost);
	document.getElementById("destroyerGemCost").innerHTML = Game.settings.format(destroyerGemCost);
	document.getElementById("destroyerOilCost").innerHTML = Game.settings.format(destroyerOilCost);
	document.getElementById("deathStar").innerHTML = deathStar;
	document.getElementById("deathStarSpaceMetalCost").innerHTML = Game.settings.format(deathStarSpaceMetalCost);
	document.getElementById("deathStarSilverCost").innerHTML = Game.settings.format(deathStarSilverCost);
	document.getElementById("deathStarSiliconCost").innerHTML = Game.settings.format(deathStarSiliconCost);
	document.getElementById("actuator").innerHTML = actuator;
	document.getElementById("actuatorSpaceMetalCost").innerHTML = Game.settings.format(actuatorSpaceMetalCost);
	document.getElementById("actuatorHeliumCost").innerHTML = Game.settings.format(actuatorHeliumCost);
	document.getElementById("actuatorMeteoriteCost").innerHTML = Game.settings.format(actuatorMeteoriteCost);
	document.getElementById("scout").innerHTML = scout;
	document.getElementById("scoutSpaceMetalCost").innerHTML = Game.settings.format(scoutSpaceMetalCost);
	document.getElementById("scoutTitaniumCost").innerHTML = Game.settings.format(scoutTitaniumCost);
	document.getElementById("spaceLaser").innerHTML = spaceLaser;
	document.getElementById("spaceLaserSpaceMetalCost").innerHTML = Game.settings.format(spaceLaserSpaceMetalCost);
	document.getElementById("spaceLaserGemCost").innerHTML = Game.settings.format(spaceLaserGemCost);
	document.getElementById("spaceLaserOilCost").innerHTML = Game.settings.format(spaceLaserOilCost);
	document.getElementById("bertha").innerHTML = bertha;
	document.getElementById("berthaTitaniumCost").innerHTML = Game.settings.format(berthaTitaniumCost);
	document.getElementById("berthaSpaceMetalCost").innerHTML = Game.settings.format(berthaSpaceMetalCost);
	document.getElementById("berthaSiliconCost").innerHTML = Game.settings.format(berthaSiliconCost);
	document.getElementById("cannon").innerHTML = cannon;
	document.getElementById("cannonOilCost").innerHTML = Game.settings.format(cannonOilCost);
	document.getElementById("cannonSpaceMetalCost").innerHTML = Game.settings.format(cannonSpaceMetalCost);
	document.getElementById("cannonMeteoriteCost").innerHTML = Game.settings.format(cannonMeteoriteCost);
	document.getElementById("blowtorch").innerHTML = blowtorch;
	document.getElementById("blowtorchSpaceMetalCost").innerHTML = Game.settings.format(blowtorchSpaceMetalCost);
	document.getElementById("blowtorchTitaniumCost").innerHTML = Game.settings.format(blowtorchTitaniumCost);
	document.getElementById("scorcher").innerHTML = scorcher;
	document.getElementById("scorcherSpaceMetalCost").innerHTML = Game.settings.format(scorcherSpaceMetalCost);
	document.getElementById("scorcherGemCost").innerHTML = Game.settings.format(scorcherGemCost);
	document.getElementById("scorcherOilCost").innerHTML = Game.settings.format(scorcherOilCost);
	document.getElementById("annihilator").innerHTML = Game.settings.format(annihilator);
	document.getElementById("annihilatorSpaceMetalCost").innerHTML = Game.settings.format(annihilatorSpaceMetalCost);
	document.getElementById("annihilatorGemCost").innerHTML = Game.settings.format(annihilatorGemCost);
	document.getElementById("annihilatorSilverCost").innerHTML = Game.settings.format(annihilatorSilverCost);
	document.getElementById("desert").innerHTML = Game.settings.format(desert);
	document.getElementById("desertSpaceMetalCost").innerHTML = Game.settings.format(desertSpaceMetalCost);
	document.getElementById("desertSiliconCost").innerHTML = Game.settings.format(desertSiliconCost);
	document.getElementById("desertMeteoriteCost").innerHTML = Game.settings.format(desertMeteoriteCost);
	document.getElementById("lab").innerHTML = lab;
	document.getElementById("labWoodCost").innerHTML = Game.settings.format(labWoodCost);
	document.getElementById("labGemCost").innerHTML = Game.settings.format(labGemCost);
	document.getElementById("labMetalCost").innerHTML = Game.settings.format(labMetalCost);
	document.getElementById("labT2").innerHTML = labT2;
	document.getElementById("labT2WoodCost").innerHTML = Game.settings.format(labT2WoodCost);
	document.getElementById("labT2GemCost").innerHTML = Game.settings.format(labT2GemCost);
	document.getElementById("labT2MetalCost").innerHTML = Game.settings.format(labT2MetalCost);
	document.getElementById("labT3").innerHTML = labT3;
	document.getElementById("labT3WoodCost").innerHTML = Game.settings.format(labT3WoodCost);
	document.getElementById("labT3GemCost").innerHTML = Game.settings.format(labT3GemCost);
	document.getElementById("labT3MetalCost").innerHTML = Game.settings.format(labT3MetalCost);
	document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
	document.getElementById("chemicalPlantMetalCost").innerHTML = Game.settings.format(chemicalPlantMetalCost);
	document.getElementById("chemicalPlantGemCost").innerHTML = Game.settings.format(chemicalPlantGemCost);
	document.getElementById("chemicalPlantOilCost").innerHTML = Game.settings.format(chemicalPlantOilCost);
	document.getElementById("oxidisation").innerHTML = oxidisation;
	document.getElementById("oxidisationMetalCost").innerHTML = Game.settings.format(oxidisationMetalCost);
	document.getElementById("oxidisationGemCost").innerHTML = Game.settings.format(oxidisationGemCost);
	document.getElementById("oxidisationOilCost").innerHTML = Game.settings.format(oxidisationOilCost);
	document.getElementById("grinder").innerHTML = grinder;
	document.getElementById("grinderTitaniumCost").innerHTML = Game.settings.format(grinderTitaniumCost);
	document.getElementById("grinderSpaceMetalCost").innerHTML = Game.settings.format(grinderSpaceMetalCost);
	document.getElementById("grinderGoldCost").innerHTML = Game.settings.format(grinderGoldCost);
	document.getElementById("cubic").innerHTML = cubic;
	document.getElementById("cubicUraniumCost").innerHTML = Game.settings.format(cubicUraniumCost);
	document.getElementById("cubicSpaceMetalCost").innerHTML = Game.settings.format(cubicSpaceMetalCost);
	document.getElementById("cubicOilCost").innerHTML = Game.settings.format(cubicOilCost);
	document.getElementById("enricher").innerHTML = enricher;
	document.getElementById("enricherTitaniumCost").innerHTML = Game.settings.format(enricherTitaniumCost);
	document.getElementById("enricherSpaceMetalCost").innerHTML = Game.settings.format(enricherSpaceMetalCost);
	document.getElementById("enricherSiliconCost").innerHTML = Game.settings.format(enricherSiliconCost);
	document.getElementById("recycler").innerHTML = recycler;
	document.getElementById("recyclerMethaneCost").innerHTML = Game.settings.format(recyclerMethaneCost);
	document.getElementById("recyclerSpaceMetalCost").innerHTML = Game.settings.format(recyclerSpaceMetalCost);
	document.getElementById("recyclerMeteoriteCost").innerHTML = Game.settings.format(recyclerMeteoriteCost);
	document.getElementById("crucible").innerHTML = crucible;
	document.getElementById("crucibleGemCost").innerHTML = Game.settings.format(crucibleGemCost);
	document.getElementById("crucibleSpaceMetalCost").innerHTML = Game.settings.format(crucibleSpaceMetalCost);
	document.getElementById("extractor").innerHTML = extractor;
	document.getElementById("extractorTitaniumCost").innerHTML = Game.settings.format(extractorTitaniumCost);
	document.getElementById("extractorSpaceMetalCost").innerHTML = Game.settings.format(extractorSpaceMetalCost);
	document.getElementById("extractorSiliconCost").innerHTML = Game.settings.format(extractorSiliconCost);
	document.getElementById("extruder").innerHTML = extruder;
	document.getElementById("extruderTitaniumCost").innerHTML = Game.settings.format(extruderTitaniumCost);
	document.getElementById("extruderSpaceMetalCost").innerHTML = Game.settings.format(extruderSpaceMetalCost);
	document.getElementById("extruderSiliconCost").innerHTML = Game.settings.format(extruderSiliconCost);
	document.getElementById("veluptuator").innerHTML = veluptuator;
	document.getElementById("veluptuatorGoldCost").innerHTML = Game.settings.format(veluptuatorGoldCost);
	document.getElementById("veluptuatorSpaceMetalCost").innerHTML = Game.settings.format(veluptuatorSpaceMetalCost);
	document.getElementById("veluptuatorMeteoriteCost").innerHTML = Game.settings.format(veluptuatorMeteoriteCost);
	document.getElementById("collector").innerHTML = Game.settings.format(collector);
	document.getElementById("collectorSpaceMetalCost").innerHTML = Game.settings.format(collectorSpaceMetalCost);
	document.getElementById("collectorTitaniumCost").innerHTML = Game.settings.format(collectorTitaniumCost);
	document.getElementById("magnet").innerHTML = Game.settings.format(magnet);
	document.getElementById("magnetSpaceMetalCost").innerHTML = Game.settings.format(magnetSpaceMetalCost);
	document.getElementById("magnetTitaniumCost").innerHTML = Game.settings.format(magnetTitaniumCost);
	document.getElementById("magnetGoldCost").innerHTML = Game.settings.format(magnetGoldCost);
	document.getElementById("eCell").innerHTML = Game.settings.format(eCell);
	document.getElementById("eCellSilverCost").innerHTML = Game.settings.format(eCellSilverCost);
	document.getElementById("eCellGoldCost").innerHTML = Game.settings.format(eCellGoldCost);
	document.getElementById("eCellSiliconCost").innerHTML = Game.settings.format(eCellSiliconCost);
	document.getElementById("hindenburg").innerHTML = Game.settings.format(hindenburg);
	document.getElementById("hindenburgSpaceMetalCost").innerHTML = Game.settings.format(hindenburgSpaceMetalCost);
	document.getElementById("hindenburgMethaneCost").innerHTML = Game.settings.format(hindenburgMethaneCost);
	document.getElementById("hindenburgMeteoriteCost").innerHTML = Game.settings.format(hindenburgMeteoriteCost);
	document.getElementById("drone").innerHTML = Game.settings.format(drone);
	document.getElementById("droneSpaceMetalCost").innerHTML = Game.settings.format(droneSpaceMetalCost);
	document.getElementById("droneSiliconCost").innerHTML = Game.settings.format(droneSiliconCost);
	document.getElementById("tanker").innerHTML = Game.settings.format(tanker);
	document.getElementById("tankerSpaceMetalCost").innerHTML = Game.settings.format(tankerSpaceMetalCost);
	document.getElementById("tankerTitaniumCost").innerHTML = Game.settings.format(tankerTitaniumCost);
	document.getElementById("tankerSiliconCost").innerHTML = Game.settings.format(tankerSiliconCost);
	document.getElementById("compressor").innerHTML = Game.settings.format(compressor);
	document.getElementById("compressorSpaceMetalCost").innerHTML = Game.settings.format(compressorSpaceMetalCost);
	document.getElementById("compressorTitaniumCost").innerHTML = Game.settings.format(compressorTitaniumCost);
	document.getElementById("compressorSiliconCost").innerHTML = Game.settings.format(compressorSiliconCost);
	document.getElementById("skimmer").innerHTML = Game.settings.format(skimmer);
	document.getElementById("skimmerSpaceMetalCost").innerHTML = Game.settings.format(skimmerSpaceMetalCost);
	document.getElementById("skimmerTitaniumCost").innerHTML = Game.settings.format(skimmerTitaniumCost);
	document.getElementById("skimmerMeteoriteCost").innerHTML = Game.settings.format(skimmerMeteoriteCost);
	document.getElementById("icePick").innerHTML = Game.settings.format(icePick);
	document.getElementById("icePickSpaceMetalCost").innerHTML = Game.settings.format(icePickSpaceMetalCost);
	document.getElementById("icePickGemCost").innerHTML = Game.settings.format(icePickGemCost);
	document.getElementById("iceDrill").innerHTML = Game.settings.format(iceDrill);
	document.getElementById("iceDrillSpaceMetalCost").innerHTML = Game.settings.format(iceDrillSpaceMetalCost);
	document.getElementById("iceDrillTitaniumCost").innerHTML = Game.settings.format(iceDrillTitaniumCost);
	document.getElementById("iceDrillSiliconCost").innerHTML = Game.settings.format(iceDrillSiliconCost);
	document.getElementById("freezer").innerHTML = Game.settings.format(freezer);
	document.getElementById("freezerSpaceMetalCost").innerHTML = Game.settings.format(freezerSpaceMetalCost);
	document.getElementById("freezerTitaniumCost").innerHTML = Game.settings.format(freezerTitaniumCost);
	document.getElementById("freezerSiliconCost").innerHTML = Game.settings.format(freezerSiliconCost);
	document.getElementById("mrFreeze").innerHTML = Game.settings.format(mrFreeze);
	document.getElementById("mrFreezeWoodCost").innerHTML = Game.settings.format(mrFreezeWoodCost);
	document.getElementById("mrFreezeHeliumCost").innerHTML = Game.settings.format(mrFreezeHeliumCost);
	document.getElementById("mrFreezeMeteoriteCost").innerHTML = Game.settings.format(mrFreezeMeteoriteCost);
	document.getElementById("printer").innerHTML = Game.settings.format(printer);
	document.getElementById("printerSpaceMetalCost").innerHTML = Game.settings.format(printerSpaceMetalCost);
	document.getElementById("printerSiliconCost").innerHTML = Game.settings.format(printerSiliconCost);
	document.getElementById("web").innerHTML = Game.settings.format(web);
	document.getElementById("webSpaceMetalCost").innerHTML = Game.settings.format(webSpaceMetalCost);
	document.getElementById("webUraniumCost").innerHTML = Game.settings.format(webUraniumCost);
	document.getElementById("webSiliconCost").innerHTML = Game.settings.format(webSiliconCost);
	document.getElementById("dyson").innerHTML = Game.settings.format(dyson);
	document.getElementById("dysonPieces").innerHTML = Game.settings.format(dyson);
	document.getElementById("dysonPieces2").innerHTML = Game.settings.format(dyson);
	document.getElementById("dysonTitaniumCost").innerHTML = Game.settings.format(dysonTitaniumCost);
	document.getElementById("dysonGoldCost").innerHTML = Game.settings.format(dysonGoldCost);
	document.getElementById("dysonSiliconCost").innerHTML = Game.settings.format(dysonSiliconCost);
	document.getElementById("dysonMeteoriteCost").innerHTML = Game.settings.format(dysonMeteoriteCost);
	document.getElementById("dysonIceCost").innerHTML = Game.settings.format(dysonIceCost);
	document.getElementById("swarm").innerHTML = Game.settings.format(swarm);
	document.getElementById("sphere").innerHTML = Game.settings.format(sphere);
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

	if(spaceMetal < methaneStationSpaceMetalCost){
		document.getElementById("methaneStationSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("methaneStationSpaceMetalCost").className = "";
	}

	if(titanium < methaneStationTitaniumCost){
		document.getElementById("methaneStationTitaniumCost").className = "red";
	}
	else{
		document.getElementById("methaneStationTitaniumCost").className = "";
	}

	if(spaceMetal < nuclearStationSpaceMetalCost){
		document.getElementById("nuclearStationSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("nuclearStationSpaceMetalCost").className = "";
	}

	if(titanium < nuclearStationTitaniumCost){
		document.getElementById("nuclearStationTitaniumCost").className = "red";
	}
	else{
		document.getElementById("nuclearStationTitaniumCost").className = "";
	}
	
	if(spaceMetal < magmaticSpaceMetalCost){
		document.getElementById("magmaticSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("magmaticSpaceMetalCost").className = "";
	}

	if(gem < magmaticGemCost){
		document.getElementById("magmaticGemCost").className = "red";
	}
	else{
		document.getElementById("magmaticGemCost").className = "";
	}

	if(silver < magmaticSilverCost){
		document.getElementById("magmaticSilverCost").className = "red";
	}
	else{
		document.getElementById("magmaticSilverCost").className = "";
	}

	if(spaceMetal < fusionReactorSpaceMetalCost){
		document.getElementById("fusionReactorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorSpaceMetalCost").className = "";
	}

	if(titanium < fusionReactorTitaniumCost){
		document.getElementById("fusionReactorTitaniumCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorTitaniumCost").className = "";
	}

	if(silicon < fusionReactorSiliconCost){
		document.getElementById("fusionReactorSiliconCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorSiliconCost").className = "";
	}

	if(metal < pumpMetalCost){
		document.getElementById("pumpMetalCost").className = "red";
	}
	else{
		document.getElementById("pumpMetalCost").className = "";
	}
	
	if(gem < pumpGemCost){
		document.getElementById("pumpGemCost").className = "red";
	}
	else{
		document.getElementById("pumpGemCost").className = "";
	}

	Game.settings.turnRed(metal, pumpjackMetalCost, "pumpjackMetalCost");
	Game.settings.turnRed(gem, pumpjackGemCost, "pumpjackGemCost");
	Game.settings.turnRed(oil, pumpjackOilCost, "pumpjackOilCost");
	
	Game.settings.turnRed(spaceMetal, oilFieldSpaceMetalCost, "oilFieldSpaceMetalCost");
	Game.settings.turnRed(titanium, oilFieldTitaniumCost, "oilFieldTitaniumCost");
	Game.settings.turnRed(silicon, oilFieldSiliconCost, "oilFieldSiliconCost");

	Game.settings.turnRed(spaceMetal, oilRigSpaceMetalCost, "oilRigSpaceMetalCost");
	Game.settings.turnRed(titanium, oilRigTitaniumCost, "oilRigTitaniumCost");
	Game.settings.turnRed(meteorite, oilRigMeteoriteCost, "oilRigMeteoriteCost");

	if(metal < minerMetalCost){
		document.getElementById("minerMetalCost").className = "red";
	}
	else{
		document.getElementById("minerMetalCost").className = "";
	}
	
	if(wood < minerWoodCost){
		document.getElementById("minerWoodCost").className = "red";
	}
	else{
		document.getElementById("minerWoodCost").className = "";
	}
	
	if(metal < heavyDrillMetalCost){
		document.getElementById("heavyDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillMetalCost").className = "";
	}
	
	if(gem < heavyDrillGemCost){
		document.getElementById("heavyDrillGemCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillGemCost").className = "";
	}
	
	if(oil < heavyDrillOilCost){
		document.getElementById("heavyDrillOilCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, gigaDrillSpaceMetalCost, "gigaDrillSpaceMetalCost");
	Game.settings.turnRed(gem, gigaDrillGemCost, "gigaDrillGemCost");
	Game.settings.turnRed(silicon, gigaDrillSiliconCost, "gigaDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, quantumDrillSpaceMetalCost, "quantumDrillSpaceMetalCost");
	Game.settings.turnRed(gold, quantumDrillGoldCost, "quantumDrillGoldCost");
	Game.settings.turnRed(meteorite, quantumDrillMeteoriteCost, "quantumDrillMeteoriteCost");

	if(metal < gemMinerMetalCost){
		document.getElementById("gemMinerMetalCost").className = "red";
	}
	else{
		document.getElementById("gemMinerMetalCost").className = "";
	}
	
	if(gem < gemMinerGemCost){
		document.getElementById("gemMinerGemCost").className = "red";
	}
	else{
		document.getElementById("gemMinerGemCost").className = "";
	}
	
	if(metal < advancedDrillMetalCost){
		document.getElementById("advancedDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillMetalCost").className = "";
	}
	
	if(gem < advancedDrillGemCost){
		document.getElementById("advancedDrillGemCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillGemCost").className = "";
	}
	
	if(oil < advancedDrillOilCost){
		document.getElementById("advancedDrillOilCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, diamondDrillSpaceMetalCost, "diamondDrillSpaceMetalCost");
	Game.settings.turnRed(gem, diamondDrillGemCost, "diamondDrillGemCost");
	Game.settings.turnRed(silicon, diamondDrillSiliconCost, "diamondDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, carbyneDrillSpaceMetalCost, "carbyneDrillSpaceMetalCost");
	Game.settings.turnRed(gem, carbyneDrillGemCost, "carbyneDrillGemCost");
	Game.settings.turnRed(meteorite, carbyneDrillMeteoriteCost, "carbyneDrillMeteoriteCost");
	
	if(metal < woodburnerMetalCost){
		document.getElementById("woodburnerMetalCost").className = "red";
	}
	else{
		document.getElementById("woodburnerMetalCost").className = "";
	}
	
	if(wood < woodburnerWoodCost){
		document.getElementById("woodburnerWoodCost").className = "red";
	}
	else{
		document.getElementById("woodburnerWoodCost").className = "";
	}
	
	if(metal < furnaceMetalCost){
		document.getElementById("furnaceMetalCost").className = "red";
	}
	else{
		document.getElementById("furnaceMetalCost").className = "";
	}
	
	if(wood < furnaceWoodCost){
		document.getElementById("furnaceWoodCost").className = "red";
	}
	else{
		document.getElementById("furnaceWoodCost").className = "";
	}
	
	if(oil < furnaceOilCost){
		document.getElementById("furnaceOilCost").className = "red";
	}
	else{
		document.getElementById("furnaceOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, kilnSpaceMetalCost, "kilnSpaceMetalCost");
	Game.settings.turnRed(gem, kilnGemCost, "kilnGemCost");
	Game.settings.turnRed(silicon, kilnSiliconCost, "kilnSiliconCost");

	Game.settings.turnRed(spaceMetal, fryerSpaceMetalCost, "fryerSpaceMetalCost");
	Game.settings.turnRed(lava, fryerLavaCost, "fryerLavaCost");
	Game.settings.turnRed(meteorite, fryerMeteoriteCost, "fryerMeteoriteCost");

	if(metal < woodcutterMetalCost){
		document.getElementById("woodcutterMetalCost").className = "red";
	}
	else{
		document.getElementById("woodcutterMetalCost").className = "";
	}
	
	if(wood < woodcutterWoodCost){
		document.getElementById("woodcutterWoodCost").className = "red";
	}
	else{
		document.getElementById("woodcutterWoodCost").className = "";
	}

	if(metal < laserCutterMetalCost){
		document.getElementById("laserCutterMetalCost").className = "red";
	}
	else{
		document.getElementById("laserCutterMetalCost").className = "";
	}
	
	if(gem < laserCutterGemCost){
		document.getElementById("laserCutterGemCost").className = "red";
	}
	else{
		document.getElementById("laserCutterGemCost").className = "";
	}
	
	if(oil < laserCutterOilCost){
		document.getElementById("laserCutterOilCost").className = "red";
	}
	else{
		document.getElementById("laserCutterOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, deforesterSpaceMetalCost, "deforesterSpaceMetalCost");
	Game.settings.turnRed(titanium, deforesterTitaniumCost, "deforesterTitaniumCost");
	Game.settings.turnRed(silicon, deforesterSiliconCost, "deforesterSiliconCost");

	Game.settings.turnRed(spaceMetal, infuserSpaceMetalCost, "infuserSpaceMetalCost");
	Game.settings.turnRed(oil, infuserOilCost, "infuserOilCost");
	Game.settings.turnRed(meteorite, infuserMeteoriteCost, "infuserMeteoriteCost");

	if(gem < moonWorkerGemCost){
		document.getElementById("moonWorkerGemCost").className = "red";
	}
	else{
		document.getElementById("moonWorkerGemCost").className = "";
	}
	
	if(metal < moonDrillMetalCost){
		document.getElementById("moonDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("moonDrillMetalCost").className = "";
	}
	
	if(gem < moonDrillGemCost){
		document.getElementById("moonDrillGemCost").className = "red";
	}
	else{
		document.getElementById("moonDrillGemCost").className = "";
	}
	
	if(oil < moonDrillOilCost){
		document.getElementById("moonDrillOilCost").className = "red";
	}
	else{
		document.getElementById("moonDrillOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, moonQuarrySpaceMetalCost, "moonQuarrySpaceMetalCost");
	Game.settings.turnRed(gem, moonQuarryGemCost, "moonQuarryGemCost");
	Game.settings.turnRed(silicon, moonQuarrySiliconCost, "moonQuarrySiliconCost");

	Game.settings.turnRed(titanium, planetExcavatorTitaniumCost, "planetExcavatorTitaniumCost");
	Game.settings.turnRed(ice, planetExcavatorIceCost, "planetExcavatorIceCost");
	Game.settings.turnRed(meteorite, planetExcavatorMeteoriteCost, "planetExcavatorMeteoriteCost");


	if(spaceMetal < vacuumSpaceMetalCost){
		document.getElementById("vacuumSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("vacuumSpaceMetalCost").className = "";
	}
	
	if(gem < vacuumGemCost){
		document.getElementById("vacuumGemCost").className = "red";
	}
	else{
		document.getElementById("vacuumGemCost").className = "";
	}
	
	if(spaceMetal < suctionExcavatorSpaceMetalCost){
		document.getElementById("suctionExcavatorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorSpaceMetalCost").className = "";
	}

	if(gem < suctionExcavatorGemCost){
		document.getElementById("suctionExcavatorGemCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorGemCost").className = "";
	}

	if(oil < suctionExcavatorOilCost){
		document.getElementById("suctionExcavatorOilCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, spaceCowSpaceMetalCost, "spaceCowSpaceMetalCost");
	Game.settings.turnRed(titanium, spaceCowTitaniumCost, "spaceCowTitaniumCost");
	Game.settings.turnRed(silicon, spaceCowSiliconCost, "spaceCowSiliconCost");

	Game.settings.turnRed(spaceMetal, ventSpaceMetalCost, "ventSpaceMetalCost");
	Game.settings.turnRed(helium, ventHeliumCost, "ventHeliumCost");
	Game.settings.turnRed(meteorite, ventMeteoriteCost, "ventMeteoriteCost");

	if(gem < explorerGemCost){
		document.getElementById("explorerGemCost").className = "red";
	}
	else{
		document.getElementById("explorerGemCost").className = "";
	}
	
	if(spaceMetal < spaceMetalDrillSpaceMetalCost){
		document.getElementById("spaceMetalDrillSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillSpaceMetalCost").className = "";
	}
	
	if(gem < spaceMetalDrillGemCost){
		document.getElementById("spaceMetalDrillGemCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillGemCost").className = "";
	}
	
	if(oil < spaceMetalDrillOilCost){
		document.getElementById("spaceMetalDrillOilCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, pentaDrillSpaceMetalCost, "pentaDrillSpaceMetalCost");
	Game.settings.turnRed(gem, pentaDrillGemCost, "pentaDrillGemCost");
	Game.settings.turnRed(silicon, pentaDrillSiliconCost, "pentaDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, titanDrillSpaceMetalCost, "titanDrillSpaceMetalCost");
	Game.settings.turnRed(gold, titanDrillGoldCost, "titanDrillGoldCost");
	Game.settings.turnRed(meteorite, titanDrillMeteoriteCost, "titanDrillMeteoriteCost");

	if(spaceMetal < droidSpaceMetalCost){
		document.getElementById("droidSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("droidSpaceMetalCost").className = "";
	}
	
	if(methane < droidMethaneCost){
		document.getElementById("droidMethaneCost").className = "red";
	}
	else{
		document.getElementById("droidMethaneCost").className = "";
	}
	
	if(spaceMetal < destroyerSpaceMetalCost){
		document.getElementById("destroyerSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("destroyerSpaceMetalCost").className = "";
	}

	if(gem < destroyerGemCost){
		document.getElementById("destroyerGemCost").className = "red";
	}
	else{
		document.getElementById("destroyerGemCost").className = "";
	}
	
	if(oil < destroyerOilCost){
		document.getElementById("destroyerOilCost").className = "red";
	}
	else{
		document.getElementById("destroyerOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, deathStarSpaceMetalCost, "deathStarSpaceMetalCost");
	Game.settings.turnRed(silver, deathStarSilverCost, "deathStarSilverCost");
	Game.settings.turnRed(silicon, deathStarSiliconCost, "deathStarSiliconCost");

	Game.settings.turnRed(spaceMetal, actuatorSpaceMetalCost, "actuatorSpaceMetalCost");
	Game.settings.turnRed(helium, actuatorHeliumCost, "actuatorHeliumCost");
	Game.settings.turnRed(meteorite, actuatorMeteoriteCost, "actuatorMeteoriteCost");
	
	if(spaceMetal < scoutSpaceMetalCost){
		document.getElementById("scoutSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("scoutSpaceMetalCost").className = "";
	}
	
	if(titanium < scoutTitaniumCost){
		document.getElementById("scoutTitaniumCost").className = "red";
	}
	else{
		document.getElementById("scoutTitaniumCost").className = "";
	}
	
	if(spaceMetal < spaceLaserSpaceMetalCost){
		document.getElementById("spaceLaserSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserSpaceMetalCost").className = "";
	}
	
	if(gem < spaceLaserGemCost){
		document.getElementById("spaceLaserGemCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserGemCost").className = "";
	}
	
	if(oil < spaceLaserOilCost){
		document.getElementById("spaceLaserOilCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, berthaSpaceMetalCost, "berthaSpaceMetalCost");
	Game.settings.turnRed(titanium, berthaTitaniumCost, "berthaTitaniumCost");
	Game.settings.turnRed(silicon, berthaSiliconCost, "berthaSiliconCost");

	Game.settings.turnRed(spaceMetal, cannonSpaceMetalCost, "cannonSpaceMetalCost");
	Game.settings.turnRed(oil, cannonOilCost, "cannonOilCost");
	Game.settings.turnRed(meteorite, cannonMeteoriteCost, "cannonMeteoriteCost");
	
	if(spaceMetal < blowtorchSpaceMetalCost){
		document.getElementById("blowtorchSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("blowtorchSpaceMetalCost").className = "";
	}
	
	if(titanium < blowtorchTitaniumCost){
		document.getElementById("blowtorchTitaniumCost").className = "red";
	}
	else{
		document.getElementById("blowtorchTitaniumCost").className = "";
	}
	
	if(spaceMetal < scorcherSpaceMetalCost){
		document.getElementById("scorcherSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("scorcherSpaceMetalCost").className = "";
	}
	
	if(gem < scorcherGemCost){
		document.getElementById("scorcherGemCost").className = "red";
	}
	else{
		document.getElementById("scorcherGemCost").className = "";
	}
	
	if(oil < scorcherOilCost){
		document.getElementById("scorcherOilCost").className = "red";
	}
	else{
		document.getElementById("scorcherOilCost").className = "";
	}

	if(spaceMetal < annihilatorSpaceMetalCost){
		document.getElementById("annihilatorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("annihilatorSpaceMetalCost").className = "";
	}
	
	if(gem < annihilatorGemCost){
		document.getElementById("annihilatorGemCost").className = "red";
	}
	else{
		document.getElementById("annihilatorGemCost").className = "";
	}
	
	if(silver < annihilatorSilverCost){
		document.getElementById("annihilatorSilverCost").className = "red";
	}
	else{
		document.getElementById("annihilatorSilverCost").className = "";
	}

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

	if(typeof versionNumber != "0.4.3"){
		versionNumber = "0.4.3";
		refreshUI();
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