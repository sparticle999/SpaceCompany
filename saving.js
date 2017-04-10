function autosave(){
	if(saved === true){
		timer += 1;
		if(timer >= 2){
			saved = false;
			document.getElementById("saveButton").className = "btn btn-primary";
			timer = 0;
		}
	}
	if(loaded === true){
		timer2 += 1;
		if(timer2 >= 2){
			loaded = false;
			document.getElementById("loadButton").className = "btn btn-primary";
			timer2 = 0;
		}
	}

	if(document.getElementById("30secs").checked){
		if(saveTimer >= 30){
			save();
			saveTimer = 0;
		}
		else{
			secondsLeft = 30 - saveTimer;
			if(saveTimer < 3){
				document.getElementById("autoSaveTimer").innerHTML = "Saved";
			}
			else if(secondsLeft <= 15){
				document.getElementById("autoSaveTimer").className = "";
				document.getElementById("autoSaveTimer").innerHTML = "Autosaving in " + secondsLeft + " seconds";
			}
			else{
				document.getElementById("autoSaveTimer").className = "hidden";
			}
			saveTimer += 1;
		}
	}
	if(document.getElementById("2mins").checked){
		if(saveTimer >= 120){
			save();
			saveTimer = 0;
		}
		else{
			secondsLeft = 120 - saveTimer;
			if(saveTimer < 3){
				document.getElementById("autoSaveTimer").innerHTML = "Saved";
			}
			else if(secondsLeft <= 15){
				document.getElementById("autoSaveTimer").className = "";
				document.getElementById("autoSaveTimer").innerHTML = "Autosaving in " + secondsLeft + " seconds";
			}
			else{
				document.getElementById("autoSaveTimer").className = "hidden";
			}
			saveTimer += 1;
		}
	}
	if(document.getElementById("10mins").checked){
		if(saveTimer >= 600){
			save();
			saveTimer = 0;
		}
		else{
			secondsLeft = 600 - saveTimer;
			if(saveTimer < 3){
				document.getElementById("autoSaveTimer").innerHTML = "Saved";
			}
			else if(secondsLeft <= 15){
				document.getElementById("autoSaveTimer").className = "";
				document.getElementById("autoSaveTimer").innerHTML = "Autosaving in " + secondsLeft + " seconds";
			}
			else{
				document.getElementById("autoSaveTimer").className = "hidden";
			}
			saveTimer += 1;
		}
	}
}

function save(type){
	"use strict";
	var localSave = {
		handMined: handMined,
		tier1: tier1,
		tier2: tier2,
		tier3: tier3,
		tier4: tier4,
		tier5: tier5,
		tier6: tier6,
		energy: energy,
		energyps: energyps,
		charcoalEngine: charcoalEngine,
		charcoalEngineMetalCost: charcoalEngineMetalCost,
		charcoalEngineGemCost: charcoalEngineGemCost,
		charcoalEngineOutput: charcoalEngineOutput,
		solarPanel: solarPanel,
		solarPanelMetalCost: solarPanelMetalCost,
		solarPanelGemCost: solarPanelGemCost,
		solarPanelOutput: solarPanelOutput,
		methaneStation: methaneStation,
		methaneStationSpaceMetalCost: methaneStationSpaceMetalCost,
		methaneStationTitaniumCost: methaneStationTitaniumCost,
		nuclearStation: nuclearStation,
		nuclearStationSpaceMetalCost: nuclearStationSpaceMetalCost,
		nuclearStationTitaniumCost: nuclearStationTitaniumCost,
		magmatic: magmatic,
		magmaticSpaceMetalCost: magmaticSpaceMetalCost,
		magmaticGemCost: magmaticGemCost,
		magmaticSilverCost: magmaticSilverCost,
		fusionReactor: fusionReactor,
		fusionReactorSpaceMetalCost: fusionReactorSpaceMetalCost,
		fusionReactorTitaniumCost: fusionReactorTitaniumCost,
		fusionReactorSiliconCost: fusionReactorSiliconCost,
		oil: oil,
		oilStorage: oilStorage,
		oilNextStorage: oilNextStorage,
		oilps: oilps,
		pump: pump,
		pumpMetalCost: pumpMetalCost,
		pumpGemCost: pumpGemCost,
		pumpjack: pumpjack,
		pumpjackMetalCost: pumpjackMetalCost,
		pumpjackGemCost: pumpjackGemCost,
		pumpjackOilCost: pumpjackOilCost,
		pumpjackOutput: pumpjackOutput,
		oilField: oilField,
		oilFieldSpaceMetalCost: oilFieldSpaceMetalCost,
		oilFieldTitaniumCost: oilFieldTitaniumCost,
		oilFieldSiliconCost: oilFieldSiliconCost,
		metal: metal,
		metalStorage: metalStorage,
		metalNextStorage: metalNextStorage,
		metalps: metalps,
		miner: miner,
		minerMetalCost: minerMetalCost,
		minerWoodCost: minerWoodCost,
		heavyDrill: heavyDrill,
		heavyDrillMetalCost: heavyDrillMetalCost,
		heavyDrillGemCost: heavyDrillGemCost,
		heavyDrillOilCost: heavyDrillOilCost,
		heavyDrillOutput: heavyDrillOutput,
		gigaDrill: gigaDrill,
		gigaDrillSpaceMetalCost: gigaDrillSpaceMetalCost,
		gigaDrillGemCost: gigaDrillGemCost,
		gigaDrillSiliconCost: gigaDrillSiliconCost,
		gem: gem,
		gemStorage: gemStorage,
		gemNextStorage: gemNextStorage,
		gemps: gemps,
		gemMiner: gemMiner,
		gemMinerMetalCost: gemMinerMetalCost,
		gemMinerGemCost: gemMinerGemCost,
		advancedDrill: advancedDrill,
		advancedDrillMetalCost: advancedDrillMetalCost,
		advancedDrillGemCost: advancedDrillGemCost,
		advancedDrillOilCost: advancedDrillOilCost,
		advancedDrillOutput: advancedDrillOutput,
		diamondDrill: diamondDrill,
		diamondDrillSpaceMetalCost: diamondDrillSpaceMetalCost,
		diamondDrillGemCost: diamondDrillGemCost,
		diamondDrillSiliconCost: diamondDrillSiliconCost,
		charcoal: charcoal,
		charcoalStorage: charcoalStorage,
		charcoalNextStorage: charcoalNextStorage,
		charcoalps: charcoalps,
		woodburner: woodburner,
		woodburnerMetalCost: woodburnerMetalCost,
		woodburnerWoodCost: woodburnerWoodCost,
		furnace: furnace,
		furnaceMetalCost: furnaceMetalCost,
		furnaceWoodCost: furnaceWoodCost,
		furnaceOilCost: furnaceOilCost,
		furnaceWoodInput: furnaceWoodInput,
		furnaceOutput: furnaceOutput,
		kiln: kiln,
		kilnSpaceMetalCost: kilnSpaceMetalCost,
		kilnGemCost: kilnGemCost,
		kilnSiliconCost: kilnSiliconCost,
		wood: wood,
		woodStorage: woodStorage,
		woodNextStorage: woodNextStorage,
		woodps: woodps,
		woodcutter: woodcutter,
		woodcutterMetalCost: woodcutterMetalCost,
		woodcutterWoodCost: woodcutterWoodCost,
		laserCutter: laserCutter,
		laserCutterMetalCost: laserCutterMetalCost,
		laserCutterGemCost: laserCutterGemCost,
		laserCutterOilCost: laserCutterOilCost,
		laserCutterOutput: laserCutterOutput,
		deforester: deforester,
		deforesterSpaceMetalCost: deforesterSpaceMetalCost,
		deforesterTitaniumCost: deforesterTitaniumCost,
		deforesterSiliconCost: deforesterSiliconCost,
		science: science,
		scienceps: scienceps,
		lab: lab,
		labGain: labGain,
		labWoodCost: labWoodCost,
		labGemCost: labGemCost,
		labMetalCost: labMetalCost,
		rocket: rocket,
		rocketFuel: rocketFuel,
		rocketFuelps: rocketFuelps,
		chemicalPlant: chemicalPlant,
		chemicalPlantMetalCost: chemicalPlantMetalCost,
		chemicalPlantGemCost: chemicalPlantGemCost,
		chemicalPlantOilCost: chemicalPlantOilCost,
		spaceMetal: spaceMetal,
		spaceMetalStorage: spaceMetalStorage,
		spaceMetalNextStorage: spaceMetalNextStorage,
		spaceMetalps: spaceMetalps,
		methane: methane,
		methaneStorage: methaneStorage,
		methaneNextStorage: methaneNextStorage,
		methaneps: methaneps,
		titanium: titanium,
		titaniumStorage: titaniumStorage,
		titaniumNextStorage: titaniumNextStorage,
		titaniumps: titaniumps,
		gold: gold,
		goldStorage: goldStorage,
		goldNextStorage: goldNextStorage,
		goldps: goldps,
		silver: silver,
		silverStorage: silverStorage,
		silverNextStorage: silverNextStorage,
		silverps: silverps,
		silicon: silicon,
		siliconStorage: siliconStorage,
		siliconNextStorage: siliconNextStorage,
		siliconps: siliconps,
		moonWorker: moonWorker,
		moonWorkerGemCost: moonWorkerGemCost,
		moonDrill: moonDrill,
		moonDrillMetalCost: moonDrillMetalCost,
		moonDrillGemCost: moonDrillGemCost,
		moonDrillOilCost: moonDrillOilCost,
		moonQuarry: moonQuarry,
		moonQuarrySpaceMetalCost: moonQuarrySpaceMetalCost,
		moonQuarryGemCost: moonQuarryGemCost,
		moonQuarrySiliconCost: moonQuarrySiliconCost,
		vacuum: vacuum,
		vacuumSpaceMetalCost: vacuumSpaceMetalCost,
		vacuumGemCost: vacuumGemCost,
		suctionExcavator: suctionExcavator,
		suctionExcavatorSpaceMetalCost: suctionExcavatorSpaceMetalCost,
		suctionExcavatorGemCost: suctionExcavatorGemCost,
		suctionExcavatorOilCost: suctionExcavatorOilCost,
		spaceCow: spaceCow,
		spaceCowSpaceMetalCost: spaceCowSpaceMetalCost,
		spaceCowTitaniumCost: spaceCowTitaniumCost,
		spaceCowSiliconCost: spaceCowSiliconCost,
		explorer: explorer,
		explorerGemCost: explorerGemCost,
		spaceMetalDrill: spaceMetalDrill,
		spaceMetalDrillSpaceMetalCost: spaceMetalDrillSpaceMetalCost,
		spaceMetalDrillGemCost: spaceMetalDrillGemCost,
		spaceMetalDrillOilCost: spaceMetalDrillOilCost,
		pentaDrill: pentaDrill,
		pentaDrillSpaceMetalCost: pentaDrillSpaceMetalCost,
		pentaDrillGemCost: pentaDrillGemCost,
		pentaDrillSiliconCost: pentaDrillSiliconCost,
		droid: droid,
		droidSpaceMetalCost: droidSpaceMetalCost,
		droidMethaneCost: droidMethaneCost,
		destroyer: destroyer,
		destroyerSpaceMetalCost: destroyerSpaceMetalCost,
		destroyerGemCost: destroyerGemCost,
		destroyerOilCost: destroyerOilCost,
		deathStar: deathStar,
		deathStarSpaceMetalCost: deathStarSpaceMetalCost,
		deathStarSilverCost: deathStarSilverCost,
		deathStarSiliconCost: deathStarSiliconCost,
		scout: scout,
		scoutSpaceMetalCost: scoutSpaceMetalCost,
		scoutTitaniumCost: scoutTitaniumCost,
		spaceLaser: spaceLaser,
		spaceLaserSpaceMetalCost: spaceLaserSpaceMetalCost,
		spaceLaserGemCost: spaceLaserGemCost,
		spaceLaserOilCost: spaceLaserOilCost,
		blowtorch: blowtorch,
		blowtorchSpaceMetalCost: blowtorchSpaceMetalCost,
		blowtorchTitaniumCost: blowtorchTitaniumCost,
		scorcher: scorcher,
		scorcherSpaceMetalCost: scorcherSpaceMetalCost,
		scorcherGemCost: scorcherGemCost,
		scorcherOilCost: scorcherOilCost,
		annihilator: annihilator,
		annihilatorSpaceMetalCost: annihilatorSpaceMetalCost,
		annihilatorGemCost: annihilatorGemCost,
		annihilatorSilverCost: annihilatorSilverCost,
		researchUnlocked: researchUnlocked,
		researched: researched,
		available: available,
		tabsUnlocked: tabsUnlocked,
		resourcesUnlocked: resourcesUnlocked,
		noBorder: noBorder,
		rocketLaunched: rocketLaunched,
		techUnlocked: techUnlocked,
		buttonsHidden: buttonsHidden,
		explored: explored,
		uranium: uranium,
		uraniumStorage: uraniumStorage,
		uraniumNextStorage: uraniumNextStorage,
		uraniumps: uraniumps,
		activated: activated,
		grinder: grinder,
		grinderTitaniumCost: grinderTitaniumCost,
		grinderSpaceMetalCost: grinderSpaceMetalCost,
		grinderGoldCost: grinderGoldCost,
		cubic: cubic,
		cubicUraniumCost: cubicUraniumCost,
		cubicSpaceMetalCost: cubicSpaceMetalCost,
		cubicOilCost: cubicOilCost,
		lava: lava,
		lavaStorage: lavaStorage,
		lavaNextStorage: lavaNextStorage,
		crucible: crucible,
		crucibleSpaceMetalCost: crucibleSpaceMetalCost,
		crucibleGemCost: crucibleGemCost,
		extractor: extractor,
		extractorSpaceMetalCost: extractorSpaceMetalCost,
		extractorTitaniumCost: extractorTitaniumCost,
		extractorSiliconCost: extractorSiliconCost,
		extruder: extruder,
		extruderSpaceMetalCost: extruderSpaceMetalCost,
		extruderTitaniumCost: extruderTitaniumCost,
		extruderSiliconCost: extruderSiliconCost,
		hydrogen: hydrogen,
		hydrogenStorage, hydrogenStorage,
		hydrogenNextStorage: hydrogenNextStorage,
		collector: collector,
		collectorSpaceMetalCost: collectorSpaceMetalCost,
		collectorTitaniumCost: collectorTitaniumCost,
		magnet: magnet,
		magnetSpaceMetalCost: magnetSpaceMetalCost,
		magnetTitaniumCost: magnetTitaniumCost,
		magnetGoldCost: magnetGoldCost,
		eCell: eCell,
		eCellSilverCost: eCellSilverCost,
		eCellGoldCost: eCellGoldCost,
		eCellSiliconCost: eCellSiliconCost,
		helium: helium,
		heliumStorage, heliumStorage,
		heliumNextStorage: heliumNextStorage,
		drone: drone,
		droneSpaceMetalCost: droneSpaceMetalCost,
		droneSiliconCost: droneSiliconCost,
		tanker: tanker,
		tankerSpaceMetalCost: tankerSpaceMetalCost,
		tankerTitaniumCost: tankerTitaniumCost,
		tankerSiliconCost: tankerSiliconCost,
	};
	if(type === "local"){
		//localStorage.setItem("newSave",JSON.stringify(localSave));
		localStorage.setItem("save",JSON.stringify(localSave));
	}
	if(type === "export"){
		//localStorage.setItem("newSave",JSON.stringify(localSave));
		localStorage.setItem("save",JSON.stringify(localSave));
		var string = JSON.stringify(localSave);
		var compressed = LZString.compressToBase64(string);
		console.log('Compressing Save');
		console.log('Compressed from ' + string.length + ' to ' + compressed.length + ' characters');
		document.getElementById('impexpField').value = compressed;
	}
	document.getElementById("saveButton").className = "btn btn-primary disabled";
	saved = true;
	console.log("Save Successful");
}

function load(type){
	"use strict";
	if(type === "local"){
		//window.localStorage.removeItem('save');
		//var savegame = JSON.parse(localStorage.getItem("newSave"));
		var savegame = JSON.parse(localStorage.getItem("save"));
	}
	if(type === "import"){
		var compressed = document.getElementById('impexpField').value;
		var decompressed = LZString.decompressFromBase64(compressed);
		var revived = JSON.parse(decompressed);
		var savegame = revived;
		console.log("Imported Saved Game");
		console.log(revived);
	}
	if(savegame){
		//if(typeof savegame.autoSaveTime !== "undefined") document.getElementById("autoSaveTime").innerHTML = savegame.autoSaveTime;
		if(typeof savegame.handMined !== "undefined") handMined = savegame.handMined;
		if(typeof savegame.tier1 !== "undefined") tier1 = savegame.tier1;
		if(typeof savegame.tier2 !== "undefined") tier2 = savegame.tier2;
		if(typeof savegame.tier3 !== "undefined") tier3 = savegame.tier3;
		if(typeof savegame.tier4 !== "undefined") tier4 = savegame.tier4;
		if(typeof savegame.tier5 !== "undefined") tier5 = savegame.tier5;
		if(typeof savegame.tier6 !== "undefined") tier6 = savegame.tier6;
		if(typeof savegame.energy !== "undefined") energy = savegame.energy;
		if(typeof savegame.energyps !== "undefined") energyps = savegame.energyps;
		if(typeof savegame.charcoalEngine !== "undefined") charcoalEngine = savegame.charcoalEngine;
		if(typeof savegame.charcoalEngineMetalCost !== "undefined") charcoalEngineMetalCost = savegame.charcoalEngineMetalCost;
		if(typeof savegame.charcoalEngineGemCost !== "undefined") charcoalEngineGemCost = savegame.charcoalEngineGemCost;
		if(typeof savegame.charcoalEngineOutput !== "undefined") charcoalEngineOutput = savegame.charcoalEngineOutput;
		if(typeof savegame.solarPanel !== "undefined") solarPanel = savegame.solarPanel;
		if(typeof savegame.solarPanelMetalCost !== "undefined") solarPanelMetalCost = savegame.solarPanelMetalCost;
		if(typeof savegame.solarPanelGemCost !== "undefined") solarPanelGemCost = savegame.solarPanelGemCost;
		if(typeof savegame.solarPanelOutput !== "undefined") solarPanelOutput = savegame.solarPanelOutput;
		if(typeof savegame.methaneStation !== "undefined") methaneStation = savegame.methaneStation;
		if(typeof savegame.methaneStationSpaceMetalCost !== "undefined") methaneStationSpaceMetalCost = savegame.methaneStationSpaceMetalCost;
		if(typeof savegame.methaneStationTitaniumCost !== "undefined") methaneStationTitaniumCost = savegame.methaneStationTitaniumCost;
		if(typeof savegame.nuclearStation !== "undefined") nuclearStation = savegame.nuclearStation;
		if(typeof savegame.nuclearStationSpaceMetalCost !== "undefined") nuclearStationSpaceMetalCost = savegame.nuclearStationSpaceMetalCost;
		if(typeof savegame.nuclearStationTitaniumCost !== "undefined") nuclearStationTitaniumCost = savegame.nuclearStationTitaniumCost;
		if(typeof savegame.magmatic !== "undefined") magmatic = savegame.magmatic;
		if(typeof savegame.magmaticSpaceMetalCost !== "undefined") magmaticSpaceMetalCost = savegame.magmaticSpaceMetalCost;
		if(typeof savegame.magmaticGemCost !== "undefined") magmaticGemCost = savegame.magmaticGemCost;
		if(typeof savegame.magmaticSilverCost !== "undefined") magmaticSilverCost = savegame.magmaticSilverCost;
		if(typeof savegame.fusionReactor !== "undefined") fusionReactor = savegame.fusionReactor;
		if(typeof savegame.fusionReactorSpaceMetalCost !== "undefined") fusionReactorSpaceMetalCost = savegame.fusionReactorSpaceMetalCost;
		if(typeof savegame.fusionReactorTitaniumCost !== "undefined") fusionReactorTitaniumCost = savegame.fusionReactorTitaniumCost;
		if(typeof savegame.fusionReactorSiliconCost !== "undefined") fusionReactorSiliconCost = savegame.fusionReactorSiliconCost;
		if(typeof savegame.oil !== "undefined") oil = savegame.oil;
		if(typeof savegame.oilStorage !== "undefined") oilStorage = savegame.oilStorage;
		if(typeof savegame.oilNextStorage !== "undefined") oilNextStorage = savegame.oilNextStorage;
		if(typeof savegame.oilps !== "undefined") oilps = savegame.oilps;
		if(typeof savegame.pump !== "undefined") pump = savegame.pump;
		if(typeof savegame.pumpMetalCost !== "undefined") pumpMetalCost = savegame.pumpMetalCost;
		if(typeof savegame.pumpGemCost !== "undefined") pumpGemCost = savegame.pumpGemCost;
		if(typeof savegame.pumpjack !== "undefined") pumpjack = savegame.pumpjack;
		if(typeof savegame.pumpjackMetalCost !== "undefined") pumpjackMetalCost = savegame.pumpjackMetalCost;
		if(typeof savegame.pumpjackGemCost !== "undefined") pumpjackGemCost = savegame.pumpjackGemCost;
		if(typeof savegame.pumpjackOilCost !== "undefined") pumpjackOilCost = savegame.pumpjackOilCost;
		if(typeof savegame.pumpjackOutput !== "undefined") pumpjackOutput = savegame.pumpjackOutput;
		if(typeof savegame.oilField !== "undefined") oilField = savegame.oilField;
		if(typeof savegame.oilFieldSpaceMetalCost !== "undefined") oilFieldSpaceMetalCost = savegame.oilFieldSpaceMetalCost;
		if(typeof savegame.oilFieldTitaniumCost !== "undefined") oilFieldTitaniumCost = savegame.oilFieldTitaniumCost;
		if(typeof savegame.oilFieldSiliconCost !== "undefined") oilFieldSiliconCost = savegame.oilFieldSiliconCost;
		if(typeof savegame.metal !== "undefined") metal = savegame.metal;
		if(typeof savegame.metalStorage !== "undefined") metalStorage = savegame.metalStorage;
		if(typeof savegame.metalNextStorage !== "undefined") metalNextStorage = savegame.metalNextStorage;
		if(typeof savegame.metalps !== "undefined") metalps = savegame.metalps;
		if(typeof savegame.miner !== "undefined") miner = savegame.miner;
		if(typeof savegame.minerMetalCost !== "undefined") minerMetalCost = savegame.minerMetalCost;
		if(typeof savegame.minerWoodCost !== "undefined") minerWoodCost = savegame.minerWoodCost;
		if(typeof savegame.heavyDrill !== "undefined") heavyDrill = savegame.heavyDrill;
		if(typeof savegame.heavyDrillMetalCost !== "undefined") heavyDrillMetalCost = savegame.heavyDrillMetalCost;
		if(typeof savegame.heavyDrillGemCost !== "undefined") heavyDrillGemCost = savegame.heavyDrillGemCost;
		if(typeof savegame.heavyDrillOilCost !== "undefined") heavyDrillOilCost = savegame.heavyDrillOilCost;
		if(typeof savegame.heavyDrillOutput !== "undefined") heavyDrillOutput = savegame.heavyDrillOutput;
		if(typeof savegame.gigaDrill !== "undefined") gigaDrill = savegame.gigaDrill;
		if(typeof savegame.gigaDrillSpaceMetalCost !== "undefined") gigaDrillSpaceMetalCost = savegame.gigaDrillSpaceMetalCost;
		if(typeof savegame.gigaDrillGemCost !== "undefined") gigaDrillGemCost = savegame.gigaDrillGemCost;
		if(typeof savegame.gigaDrillSiliconCost !== "undefined") gigaDrillSiliconCost = savegame.gigaDrillSiliconCost;
		if(typeof savegame.gem !== "undefined") gem = savegame.gem;
		if(typeof savegame.gemStorage !== "undefined") gemStorage = savegame.gemStorage;
		if(typeof savegame.gemNextStorage !== "undefined") gemNextStorage = savegame.gemNextStorage;
		if(typeof savegame.gemps !== "undefined") gemps = savegame.gemps;
		if(typeof savegame.gemMiner !== "undefined") gemMiner = savegame.gemMiner;
		if(typeof savegame.gemMinerMetalCost !== "undefined") gemMinerMetalCost = savegame.gemMinerMetalCost;
		if(typeof savegame.gemMinerGemCost !== "undefined") gemMinerGemCost = savegame.gemMinerGemCost;
		if(typeof savegame.advancedDrill !== "undefined") advancedDrill = savegame.advancedDrill;
		if(typeof savegame.advancedDrillMetalCost !== "undefined") advancedDrillMetalCost = savegame.advancedDrillMetalCost;
		if(typeof savegame.advancedDrillGemCost !== "undefined") advancedDrillGemCost = savegame.advancedDrillGemCost;
		if(typeof savegame.advancedDrillOilCost !== "undefined") advancedDrillOilCost = savegame.advancedDrillOilCost;
		if(typeof savegame.advancedDrillOutput !== "undefined") advancedDrillOutput = savegame.advancedDrillOutput;
		if(typeof savegame.diamondDrill !== "undefined") diamondDrill = savegame.diamondDrill;
		if(typeof savegame.diamondDrillMetalCost !== "undefined") diamondDrillMetalCost = savegame.diamondDrillMetalCost;
		if(typeof savegame.diamondDrillGemCost !== "undefined") diamondDrillGemCost = savegame.diamondDrillGemCost;
		if(typeof savegame.diamondDrillOilCost !== "undefined") diamondDrillOilCost = savegame.diamondDrillOilCost;
		if(typeof savegame.charcoal !== "undefined") charcoal = savegame.charcoal;
		if(typeof savegame.charcoalStorage !== "undefined") charcoalStorage = savegame.charcoalStorage;
		if(typeof savegame.charcoalNextStorage !== "undefined") charcoalNextStorage = savegame.charcoalNextStorage;
		if(typeof savegame.charcoalps !== "undefined") charcoalps = savegame.charcoalps;
		if(typeof savegame.woodburner !== "undefined") woodburner = savegame.woodburner;
		if(typeof savegame.woodburnerMetalCost !== "undefined") woodburnerMetalCost = savegame.woodburnerMetalCost;
		if(typeof savegame.woodburnerWoodCost !== "undefined") woodburnerWoodCost = savegame.woodburnerWoodCost;
		if(typeof savegame.furnace !== "undefined") furnace = savegame.furnace;
		if(typeof savegame.furnaceMetalCost !== "undefined") furnaceMetalCost = savegame.furnaceMetalCost;
		if(typeof savegame.furnaceWoodCost !== "undefined") furnaceWoodCost = savegame.furnaceWoodCost;
		if(typeof savegame.furnaceOilCost !== "undefined") furnaceOilCost = savegame.furnaceOilCost;
		if(typeof savegame.furnaceWoodInput !== "undefined") furnaceWoodInput = savegame.furnaceWoodInput;
		if(typeof savegame.furnaceOutput !== "undefined") furnaceOutput = savegame.furnaceOutput;
		if(typeof savegame.kiln !== "undefined") kiln = savegame.kiln;
		if(typeof savegame.kilnSpaceMetalCost !== "undefined") kilnSpaceMetalCost = savegame.kilnSpaceMetalCost;
		if(typeof savegame.kilnGemCost !== "undefined") kilnGemCost = savegame.kilnGemCost;
		if(typeof savegame.kilnSiliconCost !== "undefined") kilnSiliconCost = savegame.kilnSiliconCost;
		if(typeof savegame.wood !== "undefined") wood = savegame.wood;
		if(typeof savegame.woodStorage !== "undefined") woodStorage = savegame.woodStorage;
		if(typeof savegame.woodNextStorage !== "undefined") woodNextStorage = savegame.woodNextStorage;
		if(typeof savegame.woodps !== "undefined") woodps = savegame.woodps;
		if(typeof savegame.woodcutter !== "undefined") woodcutter = savegame.woodcutter;
		if(typeof savegame.woodcutterMetalCost !== "undefined") woodcutterMetalCost = savegame.woodcutterMetalCost;
		if(typeof savegame.woodcutterWoodCost !== "undefined") woodcutterWoodCost = savegame.woodcutterWoodCost;
		if(typeof savegame.laserCutter !== "undefined") laserCutter = savegame.laserCutter;
		if(typeof savegame.laserCutterMetalCost !== "undefined") laserCutterMetalCost = savegame.laserCutterMetalCost;
		if(typeof savegame.laserCutterGemCost !== "undefined") laserCutterGemCost = savegame.laserCutterGemCost;
		if(typeof savegame.laserCutterOilCost !== "undefined") laserCutterOilCost = savegame.laserCutterOilCost;
		if(typeof savegame.laserCutterOutput !== "undefined") laserCutterOutput = savegame.laserCutterOutput;
		if(typeof savegame.deforester !== "undefined") deforester = savegame.deforester;
		if(typeof savegame.deforesterSpaceMetalCost !== "undefined") deforesterSpaceMetalCost = savegame.deforesterSpaceMetalCost;
		if(typeof savegame.deforesterTitaniumCost !== "undefined") deforesterTitaniumCost = savegame.deforesterTitaniumCost;
		if(typeof savegame.deforesterSiliconCost !== "undefined") deforesterSiliconCost = savegame.deforesterSiliconCost;
		if(typeof savegame.science !== "undefined") science = savegame.science;
		if(typeof savegame.scienceps !== "undefined") scienceps = savegame.scienceps;
		if(typeof savegame.lab !== "undefined") lab = savegame.lab;
		if(typeof savegame.labGain !== "undefined") labGain = savegame.labGain;
		if(typeof savegame.labWoodCost !== "undefined") labWoodCost = savegame.labWoodCost;
		if(typeof savegame.labGemCost !== "undefined") labGemCost = savegame.labGemCost;
		if(typeof savegame.labMetalCost !== "undefined") labMetalCost = savegame.labMetalCost;
		if(typeof savegame.rocket !== "undefined") rocket = savegame.rocket;
		if(typeof savegame.rocketFuel !== "undefined") rocketFuel = savegame.rocketFuel;
		if(typeof savegame.rocketFuelps !== "undefined") rocketFuelps = savegame.rocketFuelps;
		if(typeof savegame.chemicalPlant !== "undefined") chemicalPlant = savegame.chemicalPlant;
		if(typeof savegame.chemicalPlantMetalCost !== "undefined") chemicalPlantMetalCost = savegame.chemicalPlantMetalCost;
		if(typeof savegame.chemicalPlantGemCost !== "undefined") chemicalPlantGemCost = savegame.chemicalPlantGemCost;
		if(typeof savegame.chemicalPlantOilCost !== "undefined") chemicalPlantOilCost = savegame.chemicalPlantOilCost;
		if(typeof savegame.spaceMetal !== "undefined") spaceMetal = savegame.spaceMetal;
		if(typeof savegame.spaceMetalStorage !== "undefined") spaceMetalStorage = savegame.spaceMetalStorage;
		if(typeof savegame.spaceMetalNextStorage !== "undefined") spaceMetalNextStorage = savegame.spaceMetalNextStorage;
		if(typeof savegame.spaceMetalps !== "undefined") spaceMetalps = savegame.spaceMetalps;
		if(typeof savegame.methane !== "undefined") methane = savegame.methane;
		if(typeof savegame.methaneStorage !== "undefined") methaneStorage = savegame.methaneStorage;
		if(typeof savegame.methaneNextStorage !== "undefined") methaneNextStorage = savegame.methaneNextStorage;
		if(typeof savegame.methaneps !== "undefined") methaneps = savegame.methaneps;
		if(typeof savegame.titanium !== "undefined") titanium = savegame.titanium;
		if(typeof savegame.titaniumStorage !== "undefined") titaniumStorage = savegame.titaniumStorage;
		if(typeof savegame.titaniumNextStorage !== "undefined") titaniumNextStorage = savegame.titaniumNextStorage;
		if(typeof savegame.titaniumps !== "undefined") titaniumps = savegame.titaniumps;
		if(typeof savegame.gold !== "undefined") gold = savegame.gold;
		if(typeof savegame.goldStorage !== "undefined") goldStorage = savegame.goldStorage;
		if(typeof savegame.goldNextStorage !== "undefined") goldNextStorage = savegame.goldNextStorage;
		if(typeof savegame.goldps !== "undefined") goldps = savegame.goldps;
		if(typeof savegame.silver !== "undefined") silver = savegame.silver;
		if(typeof savegame.silverStorage !== "undefined") silverStorage = savegame.silverStorage;
		if(typeof savegame.silverNextStorage !== "undefined") silverNextStorage = savegame.silverNextStorage;
		if(typeof savegame.silverps !== "undefined") silverps = savegame.silverps;
		if(typeof savegame.silicon !== "undefined") silicon = savegame.silicon;
		if(typeof savegame.siliconStorage !== "undefined") siliconStorage = savegame.siliconStorage;
		if(typeof savegame.siliconNextStorage !== "undefined") siliconNextStorage = savegame.siliconNextStorage;
		if(typeof savegame.siliconps !== "undefined") siliconps = savegame.siliconps;
		if(typeof savegame.lava !== "undefined") lava = savegame.lava;
		if(typeof savegame.lavaStorage !== "undefined") lavaStorage = savegame.lavaStorage;
		if(typeof savegame.lavaNextStorage !== "undefined") lavaNextStorage = savegame.lavaNextStorage;
		if(typeof savegame.lavaps !== "undefined") lavaps = savegame.lavaps;
		if(typeof savegame.hydrogen !== "undefined") hydrogen = savegame.hydrogen;
		if(typeof savegame.hydrogenStorage !== "undefined") hydrogenStorage = savegame.hydrogenStorage;
		if(typeof savegame.hydrogenNextStorage !== "undefined") hydrogenNextStorage = savegame.hydrogenNextStorage;
		if(typeof savegame.hydrogenps !== "undefined") hydrogenps = savegame.hydrogenps;
		if(typeof savegame.helium !== "undefined") helium = savegame.helium;
		if(typeof savegame.heliumStorage !== "undefined") heliumStorage = savegame.heliumStorage;
		if(typeof savegame.heliumNextStorage !== "undefined") heliumNextStorage = savegame.heliumNextStorage;
		if(typeof savegame.heliumps !== "undefined") heliumps = savegame.heliumps;
		if(typeof savegame.moonWorker !== "undefined") moonWorker = savegame.moonWorker;
		if(typeof savegame.moonWorkerGemCost !== "undefined") moonWorkerGemCost = savegame.moonWorkerGemCost;
		if(typeof savegame.moonDrill !== "undefined") moonDrill = savegame.moonDrill;
		if(typeof savegame.moonDrillMetalCost !== "undefined") moonDrillMetalCost = savegame.moonDrillMetalCost;
		if(typeof savegame.moonDrillGemCost !== "undefined") moonDrillGemCost = savegame.moonDrillGemCost;
		if(typeof savegame.moonDrillOilCost !== "undefined") moonDrillOilCost = savegame.moonDrillOilCost;
		if(typeof savegame.moonQuarry !== "undefined") moonQuarry = savegame.moonQuarry;
		if(typeof savegame.moonQuarrySpaceMetalCost !== "undefined") moonQuarrySpaceMetalCost = savegame.moonQuarrySpaceMetalCost;
		if(typeof savegame.moonQuarryGemCost !== "undefined") moonQuarryGemCost = savegame.moonQuarryGemCost;
		if(typeof savegame.moonQuarrySiliconCost !== "undefined") moonQuarrySiliconCost = savegame.moonQuarrySiliconCost;
		if(typeof savegame.vacuum !== "undefined") vacuum = savegame.vacuum;
		if(typeof savegame.vacuumSpaceMetalCost !== "undefined") vacuumSpaceMetalCost = savegame.vacuumSpaceMetalCost;
		if(typeof savegame.vacuumGemCost !== "undefined") vacuumGemCost = savegame.vacuumGemCost;
		if(typeof savegame.suctionExcavator !== "undefined") suctionExcavator = savegame.suctionExcavator;
		if(typeof savegame.suctionExcavatorSpaceMetalCost !== "undefined") suctionExcavatorSpaceMetalCost = savegame.suctionExcavatorSpaceMetalCost;
		if(typeof savegame.suctionExcavatorGemCost !== "undefined") suctionExcavatorGemCost = savegame.suctionExcavatorGemCost;
		if(typeof savegame.suctionExcavatorOilCost !== "undefined") suctionExcavatorOilCost = savegame.suctionExcavatorOilCost;
		if(typeof savegame.spaceCow !== "undefined") spaceCow = savegame.spaceCow;
		if(typeof savegame.spaceCowSpaceMetalCost !== "undefined") spaceCowSpaceMetalCost = savegame.spaceCowSpaceMetalCost;
		if(typeof savegame.spaceCowTitaniumCost !== "undefined") spaceCowTitaniumCost = savegame.spaceCowTitaniumCost;
		if(typeof savegame.spaceCowSiliconCost !== "undefined") spaceCowSiliconCost = savegame.spaceCowSiliconCost;
		if(typeof savegame.explorer !== "undefined") explorer = savegame.explorer;
		if(typeof savegame.explorerGemCost !== "undefined") explorerGemCost = savegame.explorerGemCost;
		if(typeof savegame.spaceMetalDrill !== "undefined") spaceMetalDrill = savegame.spaceMetalDrill;
		if(typeof savegame.spaceMetalDrillSpaceMetalCost !== "undefined") spaceMetalDrillSpaceMetalCost = savegame.spaceMetalDrillSpaceMetalCost;
		if(typeof savegame.spaceMetalDrillGemCost !== "undefined") spaceMetalDrillGemCost = savegame.spaceMetalDrillGemCost;
		if(typeof savegame.spaceMetalDrillOilCost !== "undefined") spaceMetalDrillOilCost = savegame.spaceMetalDrillOilCost;
		if(typeof savegame.pentaDrill !== "undefined") pentaDrill = savegame.pentaDrill;
		if(typeof savegame.pentaDrillSpaceMetalCost !== "undefined") pentaDrillSpaceMetalCost = savegame.pentaDrillSpaceMetalCost;
		if(typeof savegame.pentaDrillGemCost !== "undefined") pentaDrillGemCost = savegame.pentaDrillGemCost;
		if(typeof savegame.pentaDrillSiliconCost !== "undefined") pentaDrillSiliconCost = savegame.pentaDrillSiliconCost;
		if(typeof savegame.droid !== "undefined") droid = savegame.droid;
		if(typeof savegame.droidSpaceMetalCost !== "undefined") droidSpaceMetalCost = savegame.droidSpaceMetalCost;
		if(typeof savegame.droidMethaneCost !== "undefined") droidMethaneCost = savegame.droidMethaneCost;
		if(typeof savegame.destroyer !== "undefined") destroyer = savegame.destroyer;
		if(typeof savegame.destroyerSpaceMetalCost !== "undefined") destroyerSpaceMetalCost = savegame.destroyerSpaceMetalCost;
		if(typeof savegame.destroyerGemCost !== "undefined") destroyerGemCost = savegame.destroyerGemCost;
		if(typeof savegame.destroyerOilCost !== "undefined") destroyerOilCost = savegame.destroyerOilCost;
		if(typeof savegame.deathStar !== "undefined") deathStar = savegame.deathStar;
		if(typeof savegame.deathStarSpaceMetalCost !== "undefined") deathStarSpaceMetalCost = savegame.deathStarSpaceMetalCost;
		if(typeof savegame.deathStarSilverCost !== "undefined") deathStarSilverCost = savegame.deathStarSilverCost;
		if(typeof savegame.deathStarSiliconCost !== "undefined") deathStarSiliconCost = savegame.deathStarSiliconCost;
		if(typeof savegame.scout !== "undefined") scout = savegame.scout;
		if(typeof savegame.scoutSpaceMetalCost !== "undefined") scoutSpaceMetalCost = savegame.scoutSpaceMetalCost;
		if(typeof savegame.scoutTitaniumCost !== "undefined") scoutTitaniumCost = savegame.scoutTitaniumCost;
		if(typeof savegame.spaceLaser !== "undefined") spaceLaser = savegame.spaceLaser;
		if(typeof savegame.spaceLaserSpaceMetalCost !== "undefined") spaceLaserSpaceMetalCost = savegame.spaceLaserSpaceMetalCost;
		if(typeof savegame.spaceLaserGemCost !== "undefined") spaceLaserGemCost = savegame.spaceLaserGemCost;
		if(typeof savegame.spaceLaserOilCost !== "undefined") spaceLaserOilCost = savegame.spaceLaserOilCost;
		if(typeof savegame.blowtorch !== "undefined") blowtorch = savegame.blowtorch;
		if(typeof savegame.blowtorchSpaceMetalCost !== "undefined") blowtorchSpaceMetalCost = savegame.blowtorchSpaceMetalCost;
		if(typeof savegame.blowtorchTitaniumCost !== "undefined") blowtorchTitaniumCost = savegame.blowtorchTitaniumCost;
		if(typeof savegame.scorcher !== "undefined") scorcher = savegame.scorcher;
		if(typeof savegame.scorcherSpaceMetalCost !== "undefined") scorcherSpaceMetalCost = savegame.scorcherSpaceMetalCost;
		if(typeof savegame.scorcherGemCost !== "undefined") scorcherGemCost = savegame.scorcherGemCost;
		if(typeof savegame.scorcherOilCost !== "undefined") scorcherOilCost = savegame.scorcherOilCost;
		if(typeof savegame.annihilator !== "undefined") annihilator = savegame.annihilator;
		if(typeof savegame.annihilatorSpaceMetalCost !== "undefined") annihilatorSpaceMetalCost = savegame.annihilatorSpaceMetalCost;
		if(typeof savegame.annihilatorGemCost !== "undefined") annihilatorGemCost = savegame.annihilatorGemCost;
		if(typeof savegame.annihilatorSilverCost !== "undefined") annihilatorSilverCost = savegame.annihilatorSilverCost;
		if(typeof savegame.researchUnlocked !== "undefined") researchUnlocked = savegame.researchUnlocked;
		if(typeof savegame.researched !== "undefined") researched = savegame.researched;
		if(typeof savegame.tabsUnlocked !== "undefined") tabsUnlocked = savegame.tabsUnlocked;
		if(typeof savegame.available !== "undefined") available = savegame.available;
		if(typeof savegame.resourcesUnlocked !== "undefined") resourcesUnlocked = savegame.resourcesUnlocked;
		if(typeof savegame.noBorder !== "undefined") noBorder = savegame.noBorder;
		if(typeof savegame.rocketLaunched !== "undefined") rocketLaunched = savegame.rocketLaunched;
		if(typeof savegame.techUnlocked !== "undefined") techUnlocked = savegame.techUnlocked;
		if(typeof savegame.explored !== "undefined") explored = savegame.explored;
		if(typeof savegame.buttonsHidden !== "undefined") buttonsHidden = savegame.buttonsHidden;
		if(typeof savegame.uranium !== "undefined") uranium = savegame.uranium;
		if(typeof savegame.uraniumStorage !== "undefined") uraniumStorage = savegame.uraniumStorage;
		if(typeof savegame.uraniumNextStorage !== "undefined") uraniumNextStorage = savegame.uraniumNextStorage;
		if(typeof savegame.uraniumps !== "undefined") uraniumps = savegame.uraniumps;
		if(typeof savegame.activated !== "undefined") activated = savegame.activated;
		if(typeof savegame.grinder !== "undefined") grinder = savegame.grinder;
		if(typeof savegame.grinderTitaniumCost !== "undefined") grinderTitaniumCost = savegame.grinderTitaniumCost;
		if(typeof savegame.grinderSpaceMetalCost !== "undefined") grinderSpaceMetalCost = savegame.grinderSpaceMetalCost;
		if(typeof savegame.grinderGoldCost !== "undefined") grinderGoldCost = savegame.grinderGoldCost;
		if(typeof savegame.cubic !== "undefined") cubic = savegame.cubic;
		if(typeof savegame.cubicUraniumCost !== "undefined") cubicUraniumCost = savegame.cubicUraniumCost;
		if(typeof savegame.cubicSpaceMetalCost !== "undefined") cubicSpaceMetalCost = savegame.cubicSpaceMetalCost;
		if(typeof savegame.cubicOilCost !== "undefined") cubicOilCost = savegame.cubicOilCost;
		if(typeof savegame.crucible !== "undefined") crucible = savegame.crucible;
		if(typeof savegame.crucibleGemCost !== "undefined") crucibleGemCost = savegame.crucibleGemCost;
		if(typeof savegame.crucibleSpaceMetalCost !== "undefined") crucibleSpaceMetalCost = savegame.crucibleSpaceMetalCost;
		if(typeof savegame.extractor !== "undefined") extractor = savegame.extractor;
		if(typeof savegame.extractorSpaceMetalCost !== "undefined") extractorSpaceMetalCost = savegame.extractorSpaceMetalCost;
		if(typeof savegame.extractorTitaniumCost !== "undefined") extractorTitaniumCost = savegame.extractorTitaniumCost;
		if(typeof savegame.extractorSiliconCost !== "undefined") extractorSiliconCost = savegame.extractorSiliconCost;
		if(typeof savegame.extruder !== "undefined") extruder = savegame.extruder;
		if(typeof savegame.extruderSpaceMetalCost !== "undefined") extruderSpaceMetalCost = savegame.extruderSpaceMetalCost;
		if(typeof savegame.extruderTitaniumCost !== "undefined") extruderTitaniumCost = savegame.extruderTitaniumCost;
		if(typeof savegame.extruderSiliconCost !== "undefined") extruderSiliconCost = savegame.extruderSiliconCost;
		if(typeof savegame.collector !== "undefined") collector = savegame.collector;
		if(typeof savegame.collectorSpaceMetalCost !== "undefined") collectorSpaceMetalCost = savegame.collectorSpaceMetalCost;
		if(typeof savegame.collectorTitaniumCost !== "undefined") collectorTitaniumCost = savegame.collectorTitaniumCost;
		if(typeof savegame.magnet !== "undefined") magnet = savegame.magnet;
		if(typeof savegame.magnetSpaceMetalCost !== "undefined") magnetSpaceMetalCost = savegame.magnetSpaceMetalCost;
		if(typeof savegame.magnetTitaniumCost !== "undefined") magnetTitaniumCost = savegame.magnetTitaniumCost;
		if(typeof savegame.magnetGoldCost !== "undefined") magnetGoldCost = savegame.magnetGoldCost;
		if(typeof savegame.eCell !== "undefined") eCell = savegame.eCell;
		if(typeof savegame.eCellSilverCost !== "undefined") eCellSilverCost = savegame.eCellSilverCost;
		if(typeof savegame.eCellGoldCost !== "undefined") eCellGoldCost = savegame.eCellGoldCost;
		if(typeof savegame.eCellSiliconCost !== "undefined") eCellSiliconCost = savegame.eCellSiliconCost;
		if(typeof savegame.drone !== "undefined") drone = savegame.drone;
		if(typeof savegame.droneSpaceMetalCost !== "undefined") droneSpaceMetalCost = savegame.droneSpaceMetalCost;
		if(typeof savegame.droneSiliconCost !== "undefined") droneSiliconCost = savegame.droneSiliconCost;
		if(typeof savegame.tanker !== "undefined") tanker = savegame.tanker;
		if(typeof savegame.tankerSpaceMetalCost !== "undefined") tankerSpaceMetalCost = savegame.tankerSpaceMetalCost;
		if(typeof savegame.tankerTitaniumCost !== "undefined") tankerTitaniumCost = savegame.tankerTitaniumCost;
		if(typeof savegame.tankerSiliconCost !== "undefined") tankerSiliconCost = savegame.tankerSiliconCost;

	}

	refreshUI();
	refreshStats();
	refreshResources();
	refreshResearches();
	refreshTabs();

	document.getElementById("loadButton").className = "btn btn-primary disabled";
	loaded = true;
	console.log("Load Successful");
	pageLoaded = true;
}

function deleteSave(){
	"use strict";
	var deleteSave = prompt("Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box.");
	if(deleteSave === "DELETE"){
		localStorage.removeItem("save");
		alert("Deleted Save");
		window.location.reload();
	}
	else{
		alert("Deletion Cancelled");
	}
}