// Variables in save function

var handMined = 0; var tier1 = 0; var tier2 = 0; var tier3 = 0; var tier4 = 0; var tier5 = 0;
var energy = 0; var energyps = 0;
var charcoalEngine = 0; var charcoalEngineMetalCost = 50; var charcoalEngineGemCost = 25; var charcoalEngineOutput = 2;
var solarPanel = 0; var solarPanelMetalCost = 30; var solarPanelGemCost = 35; var solarPanelOutput = 1.5;
var methaneStation = 0; var methaneStationSpaceMetalCost = 50; var methaneStationTitaniumCost = 40;
var nuclearStation = 0; var nuclearStationSpaceMetalCost = 20000; var nuclearStationTitaniumCost = 10000;
var magmatic = 0; var magmaticSpaceMetalCost = 25000; var magmaticGemCost = 20000; var magmaticSilverCost = 15000;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilps = 0;
var pump = 0; var pumpMetalCost = 60; var pumpGemCost = 20; var pumpjack = 0; var pumpjackMetalCost = 250; var pumpjackGemCost = 80; var pumpjackOilCost = 50; var pumpjackOutput = 5;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalps = 0;
var miner = 0; var minerMetalCost = 10; var minerWoodCost = 5; var heavyDrill = 0; var heavyDrillMetalCost = 160; var heavyDrillGemCost = 60; var heavyDrillOilCost = 50; var heavyDrillOutput = 8;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemps = 0;
var gemMiner = 0; var gemMinerMetalCost = 15; var gemMinerGemCost = 10; var advancedDrill = 0; var advancedDrillMetalCost = 120; var advancedDrillGemCost = 200; var advancedDrillOilCost = 60; var advancedDrillOutput = 4;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalps = 0;
var woodburner = 0; var woodburnerMetalCost = 10; var woodburnerWoodCost = 5; var furnace = 0; var furnaceMetalCost = 80; var furnaceWoodCost = 40; var furnaceOilCost = 100; var furnaceWoodInput = 6; var furnaceOutput = 4;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodps = 0;
var woodcutter = 0; var woodcutterMetalCost = 10; var woodcutterWoodCost = 5; var laserCutter = 0; var laserCutterMetalCost = 50; var laserCutterGemCost = 90; var laserCutterOilCost = 40; var laserCutterOutput = 6;
var science = 0; var scienceps = 0;
var lab = 0; var labGain = 0.1; var labWoodCost = 10; var labGemCost = 15; var labMetalCost = 20;
var rocket = 0; var rocketFuel = 0; var rocketFuelps = 0;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500;
var spaceMetal = 0; var spaceMetalStorage = 50; var spaceMetalNextStorage = 100; var spaceMetalps = 0;
var methane = 0; var methaneStorage = 50; var methaneNextStorage = 100; var methaneps = 0;
var titanium = 0; var titaniumStorage = 50; var titaniumNextStorage = 100; var titaniumps = 0;
var gold = 0; var goldStorage = 50; var goldNextStorage = 100; var goldps = 0;
var silver = 0; var silverStorage = 50; var silverNextStorage = 100; var silverps = 0;
var silicon = 0; var siliconStorage = 50; var siliconNextStorage = 100; var siliconps = 0;
var moonWorker = 0; var moonWorkerGemCost = 500;
var moonDrill = 0; var moonDrillMetalCost = 1000; var moonDrillGemCost = 600; var moonDrillOilCost = 400;
var vacuum = 0; var vacuumSpaceMetalCost = 50; var vacuumGemCost = 500;
var suctionExcavator = 0; var suctionExcavatorSpaceMetalCost = 100; var suctionExcavatorGemCost = 800; var suctionExcavatorOilCost = 600;
var explorer = 0; var explorerGemCost = 1000;
var spaceMetalDrill = 0; var spaceMetalDrillSpaceMetalCost = 200; var spaceMetalDrillGemCost = 800; var spaceMetalDrillOilCost = 1000;
var droid = 0; var droidSpaceMetalCost = 200; var droidMethaneCost = 50;
var destroyer = 0; var destroyerSpaceMetalCost = 500; var destroyerGemCost = 1500; var destroyerOilCost = 1000;
var scout = 0; var scoutSpaceMetalCost = 100; var scoutTitaniumCost = 20;
var spaceLaser = 0; var spaceLaserSpaceMetalCost = 350; var spaceLaserGemCost = 900; var spaceLaserOilCost = 1200;
var blowtorch = 0; var blowtorchSpaceMetalCost = 150; var blowtorchTitaniumCost = 30;
var scorcher = 0; var scorcherSpaceMetalCost = 500; var scorcherGemCost = 1200; var scorcherOilCost = 1600;
var researchUnlocked = false; var researched = []; var available = ["unlockStorage", "unlockBasicEnergy"]; var explored = [];
var tabsUnlocked = []; var resourcesUnlocked = []; var noBorder = []; var rocketLaunched = false; var buttonsHidden = [];
var activated = [];
var uranium = 0; var uraniumStorage = 50; var uraniumNextStorage = 100; var uraniumps = 0;
var grinder = 0; var grinderTitaniumCost = 2000; var grinderSpaceMetalCost = 4000; var grinderGoldCost = 2000;
var cubic = 0; var cubicUraniumCost = 80; var cubicSpaceMetalCost = 10000; var cubicOilCost = 10000;
var lava = 0; var lavaStorage = 50; var lavaNextStorage = 100; var lavaps = 0;
var crucible = 0; var crucibleGemCost = 8000; var crucibleSpaceMetalCost = 4000;
var extractor = 0; var extractorSpaceMetalCost = 16000; var extractorTitaniumCost = 12000; var extractorSiliconCost = 6000;
var hydrogen = 0; var hydrogenStorage = 50; var hydrogenNextStorage = 100; var hydrogenps = 0;
var collector = 0; var collectorSpaceMetalCost = 10000; var collectorTitaniumCost = 8000;
var magnet = 0; var magnetSpaceMetalCost = 18000; var magnetTitaniumCost = 16000; var magnetGoldCost = 11000;
var helium = 0; var heliumStorage = 50; var heliumStorageCost = 100; var heliumps = 0;
var drone = 0; var droneSpaceMetalCost = 14000; var droneSiliconCost = 10000;
var tanker = 0; var tankerSpaceMetalCost = 21000; var tankerTitaniumCost = 17000; var tankerSiliconCost = 14000;

// Variables not being saved

var preciousGemCost = 10000; var preciousSilverCost = 7500; var preciousGoldCost = 5000;
var preciousActivateGemCost = 30000; var preciousActivateSilverCost = 20000; var preciousActivateGoldCost = 10000;
var energeticWoodCost =  10000; var energeticCharcoalCost = 5000; var energeticUraniumCost = 200;
var energeticActivateWoodCost = 30000; var energeticActivateCharcoalCost = 15000; var energeticActivateUraniumCost = 500;
var timer = 0; var timer2 = 0; var statsTimer = 0; var saveTimer = 10; var secondsLeft = 0; var saved = false; var loaded = false;

function autosave(){
	if(saved === true){
		timer += 1;
		if(timer >= 20){
			saved = false;
			document.getElementById("saveButton").className = "btn btn-primary";
			timer = 0;
		}
	}
	if(loaded === true){
		timer2 += 1;
		if(timer2 >= 20){
			loaded = false;
			document.getElementById("loadButton").className = "btn btn-primary";
			timer2 = 0;
		}
	}

	if(saveTimer >= document.getElementById("autoSaveTime").innerHTML * 600){
		save();
		saveTimer = 0;
	}
	else{
		secondsLeft = commafy(((document.getElementById("autoSaveTime").innerHTML * 600) - saveTimer)/10);
		if(saveTimer < 10){
			document.getElementById("autoSaveTimer").innerHTML = "Saved";
		}
		else if(secondsLeft <= 30){
			document.getElementById("autoSaveTimer").className = "";
			document.getElementById("autoSaveTimer").innerHTML = "Autosaving in " + secondsLeft + " seconds";
		}
		else{
			document.getElementById("autoSaveTimer").className = "hidden";
		}
		saveTimer += 1;
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
		vacuum: vacuum,
		vacuumSpaceMetalCost: vacuumSpaceMetalCost,
		vacuumGemCost: vacuumGemCost,
		suctionExcavator: suctionExcavator,
		suctionExcavatorSpaceMetalCost: suctionExcavatorSpaceMetalCost,
		suctionExcavatorGemCost: suctionExcavatorGemCost,
		suctionExcavatorOilCost: suctionExcavatorOilCost,
		explorer: explorer,
		explorerGemCost: explorerGemCost,
		spaceMetalDrill: spaceMetalDrill,
		spaceMetalDrillSpaceMetalCost: spaceMetalDrillSpaceMetalCost,
		spaceMetalDrillGemCost: spaceMetalDrillGemCost,
		spaceMetalDrillOilCost: spaceMetalDrillOilCost,
		droid: droid,
		droidSpaceMetalCost: droidSpaceMetalCost,
		droidMethaneCost: droidMethaneCost,
		destroyer: destroyer,
		destroyerSpaceMetalCost: destroyerSpaceMetalCost,
		destroyerGemCost: destroyerGemCost,
		destroyerOilCost: destroyerOilCost,
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
		researchUnlocked: researchUnlocked,
		researched: researched,
		available: available,
		tabsUnlocked: tabsUnlocked,
		resourcesUnlocked: resourcesUnlocked,
		noBorder: noBorder,
		rocketLaunched: rocketLaunched,
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
		collector: collector,
		collectorSpaceMetalCost: collectorSpaceMetalCost,
		collectorTitaniumCost: collectorTitaniumCost,
		magnet: magnet,
		magnetSpaceMetalCost: magnetSpaceMetalCost,
		magnetTitaniumCost: magnetTitaniumCost,
		magnetGoldCost: magnetGoldCost,
	};
	if(type === "local"){
		localStorage.setItem("save",JSON.stringify(localSave));
	}
	if(type === "export"){
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
		if(typeof savegame.handMined !== "undefined") handMined = savegame.handMined;
		if(typeof savegame.tier1 !== "undefined") tier1 = savegame.tier1;
		if(typeof savegame.tier2 !== "undefined") tier2 = savegame.tier2;
		if(typeof savegame.tier3 !== "undefined") tier3 = savegame.tier3;
		if(typeof savegame.tier4 !== "undefined") tier4 = savegame.tier4;
		if(typeof savegame.tier5 !== "undefined") tier5 = savegame.tier5;
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
		if(typeof savegame.moonWorker !== "undefined") moonWorker = savegame.moonWorker;
		if(typeof savegame.moonWorkerGemCost !== "undefined") moonWorkerGemCost = savegame.moonWorkerGemCost;
		if(typeof savegame.moonDrill !== "undefined") moonDrill = savegame.moonDrill;
		if(typeof savegame.moonDrillMetalCost !== "undefined") moonDrillMetalCost = savegame.moonDrillMetalCost;
		if(typeof savegame.moonDrillGemCost !== "undefined") moonDrillGemCost = savegame.moonDrillGemCost;
		if(typeof savegame.moonDrillOilCost !== "undefined") moonDrillOilCost = savegame.moonDrillOilCost;
		if(typeof savegame.vacuum !== "undefined") vacuum = savegame.vacuum;
		if(typeof savegame.vacuumSpaceMetalCost !== "undefined") vacuumSpaceMetalCost = savegame.vacuumSpaceMetalCost;
		if(typeof savegame.vacuumGemCost !== "undefined") vacuumGemCost = savegame.vacuumGemCost;
		if(typeof savegame.suctionExcavator !== "undefined") suctionExcavator = savegame.suctionExcavator;
		if(typeof savegame.suctionExcavatorSpaceMetalCost !== "undefined") suctionExcavatorSpaceMetalCost = savegame.suctionExcavatorSpaceMetalCost;
		if(typeof savegame.suctionExcavatorGemCost !== "undefined") suctionExcavatorGemCost = savegame.suctionExcavatorGemCost;
		if(typeof savegame.suctionExcavatorOilCost !== "undefined") suctionExcavatorOilCost = savegame.suctionExcavatorOilCost;
		if(typeof savegame.explorer !== "undefined") explorer = savegame.explorer;
		if(typeof savegame.explorerGemCost !== "undefined") explorerGemCost = savegame.explorerGemCost;
		if(typeof savegame.spaceMetalDrill !== "undefined") spaceMetalDrill = savegame.spaceMetalDrill;
		if(typeof savegame.spaceMetalDrillSpaceMetalCost !== "undefined") spaceMetalDrillSpaceMetalCost = savegame.spaceMetalDrillSpaceMetalCost;
		if(typeof savegame.spaceMetalDrillGemCost !== "undefined") spaceMetalDrillGemCost = savegame.spaceMetalDrillGemCost;
		if(typeof savegame.spaceMetalDrillOilCost !== "undefined") spaceMetalDrillOilCost = savegame.spaceMetalDrillOilCost;
		if(typeof savegame.droid !== "undefined") droid = savegame.droid;
		if(typeof savegame.droidSpaceMetalCost !== "undefined") droidSpaceMetalCost = savegame.droidSpaceMetalCost;
		if(typeof savegame.droidMethaneCost !== "undefined") droidMethaneCost = savegame.droidMethaneCost;
		if(typeof savegame.destroyer !== "undefined") destroyer = savegame.destroyer;
		if(typeof savegame.destroyerSpaceMetalCost !== "undefined") destroyerSpaceMetalCost = savegame.destroyerSpaceMetalCost;
		if(typeof savegame.destroyerGemCost !== "undefined") destroyerGemCost = savegame.destroyerGemCost;
		if(typeof savegame.destroyerOilCost !== "undefined") destroyerOilCost = savegame.destroyerOilCost;
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
		if(typeof savegame.researchUnlocked !== "undefined") researchUnlocked = savegame.researchUnlocked;
		if(typeof savegame.researched !== "undefined") researched = savegame.researched;
		if(typeof savegame.tabsUnlocked !== "undefined") tabsUnlocked = savegame.tabsUnlocked;
		if(typeof savegame.available !== "undefined") available = savegame.available;
		if(typeof savegame.resourcesUnlocked !== "undefined") resourcesUnlocked = savegame.resourcesUnlocked;
		if(typeof savegame.noBorder !== "undefined") noBorder = savegame.noBorder;
		if(typeof savegame.rocketLaunched !== "undefined") rocketLaunched = savegame.rocketLaunched;
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
		if(typeof savegame.collector !== "undefined") collector = savegame.collector;
		if(typeof savegame.collectorSpaceMetalCost !== "undefined") collectorSpaceMetalCost = savegame.collectorSpaceMetalCost;
		if(typeof savegame.collectorTitaniumCost !== "undefined") collectorTitaniumCost = savegame.collectorTitaniumCost;
		if(typeof savegame.magnet !== "undefined") magnet = savegame.magnet;
		if(typeof savegame.magnetSpaceMetalCost !== "undefined") magnetSpaceMetalCost = savegame.magnetSpaceMetalCost;
		if(typeof savegame.magnetTitaniumCost !== "undefined") magnetTitaniumCost = savegame.magnetTitaniumCost;
		if(typeof savegame.magnetGoldCost !== "undefined") magnetGoldCost = savegame.magnetGoldCost;

	}

	refreshUI();
	refreshStats();
	refreshResources();
	refreshResearches();
	refreshTabs();

	document.getElementById("loadButton").className = "btn btn-primary disabled";
	loaded = true;
	console.log("Load Successful");

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

function commafy(input){
	var output = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if(output.indexOf(".") != -1){
		output = output.slice(0,(output.indexOf("."))-output.length);
	}
	return output;
}

function refresh(){
	
	document.getElementById("energy").innerHTML = commafy(energy);
	document.getElementById("oil").innerHTML = commafy(oil);
	document.getElementById("metal").innerHTML = commafy(metal);
	document.getElementById("gem").innerHTML = commafy(gem);
	document.getElementById("charcoal").innerHTML = commafy(charcoal);
	document.getElementById("wood").innerHTML = commafy(wood);
	document.getElementById("science").innerHTML = commafy(science);
	document.getElementById("rocketFuel").innerHTML = commafy(rocketFuel);
	document.getElementById("spaceMetal").innerHTML = commafy(spaceMetal);
	document.getElementById("methane").innerHTML = commafy(methane);
	document.getElementById("titanium").innerHTML = commafy(titanium);
	document.getElementById("gold").innerHTML = commafy(gold);
	document.getElementById("silver").innerHTML = commafy(silver);
	document.getElementById("silicon").innerHTML = commafy(silicon);
	document.getElementById("uranium").innerHTML = commafy(uranium);
	document.getElementById("lava").innerHTML = commafy(lava);
	document.getElementById("hydrogen").innerHTML = commafy(hydrogen);
	document.getElementById("helium").innerHTML = commafy(helium);
}

function refreshPerSec(){
	var energyInput = (charcoalEngine*charcoalEngineOutput)+(solarPanel*solarPanelOutput)+(methaneStation*16)+(nuclearStation*82)+(magmatic*96);
	if(charcoal + charcoalps/10 >= charcoalEngine/10){ 
		charcoal -= charcoalEngine/10;
	}
	else{
		energyInput -= charcoalEngine;
	}
	if(methane + methaneps/10 >= methaneStation*6/10){
		methane -= methaneStation*6/10;
	}
	else{
		energyInput -= methaneStation*16;
	}
	var energyOutput = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(furnace*3)+(laserCutter*4);
	energyOutput += (moonDrill*10)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	energyOutput += (cubic*40)+(extractor*58);
	if(energy <= 1){
		energyps = energyInput;
	}
	if(energy >= 10 || energyps <= 0){
		uraniumps = grinder + (cubic*9);
		energyps = energyInput-energyOutput;
		oilps = pump + (pumpjack*pumpjackOutput);
		metalps = miner + (heavyDrill*heavyDrillOutput);
		gemps = gemMiner + (advancedDrill*advancedDrillOutput);
		charcoalps = woodburner + (furnace*furnaceOutput);
		woodps = woodcutter + (laserCutter*laserCutterOutput);
		scienceps = (lab*labGain);
		spaceMetalps = moonWorker + (moonDrill * 10);
		methaneps = vacuum + (suctionExcavator * 8);
		titaniumps = explorer + (spaceMetalDrill * 6);
		goldps = droid + (destroyer * 8);
		silverps = scout + (spaceLaser * 13);
		siliconps = blowtorch + (scorcher * 9);
		lavaps = crucible + (extractor*7);
		hydrogenps = collector + (magnet*5);
		heliumps = drone + (tanker*11);
	}
	if(energy <= 10){
		uraniumps = grinder;
		oilps = pump;
		metalps = miner;
		gemps = gemMiner;
		charcoalps = woodburner;
		woodps = woodcutter;
		spaceMetalps = moonWorker;
		methaneps = vacuum;
		titaniumps = explorer;
		goldps = droid;
		silverps = scout;
		siliconps = blowtorch;
		lavaps = crucible;
		hydrogenps = collector;
		heliumps = drone;
	}
	document.getElementById("energyps").innerHTML = commafy(energyps*2)/2;
	document.getElementById("uraniumps").innerHTML = commafy(uraniumps);
	if(uranium >= uraniumStorage){
		document.getElementById("uraniumps").innerHTML = 0;
	}
	document.getElementById("oilps").innerHTML = commafy(oilps - (chemicalPlant*20));
	if(oil >= oilStorage){
		document.getElementById("oilps").innerHTML = 0;
	}
	document.getElementById("metalps").innerHTML = commafy(metalps);
	if(metal >= metalStorage){
		document.getElementById("metalps").innerHTML = 0;
	}
	document.getElementById("gemps").innerHTML = commafy(gemps);
	if(gem >= gemStorage){
		document.getElementById("gemps").innerHTML = 0;
	}
	if(charcoal >= charcoalStorage - 3){
		document.getElementById("woodps").innerHTML = commafy(woodps);
		document.getElementById("charcoalps").innerHTML = 0;
	}
	else{
		document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput));
		document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine - (chemicalPlant*20));
	}
	if(wood >= woodStorage){
			document.getElementById("woodps").innerHTML = 0;
		}
	document.getElementById("spaceMetalps").innerHTML = commafy(spaceMetalps);
	if(spaceMetal >= spaceMetalStorage){
		document.getElementById("spaceMetalps").innerHTML = 0;
	}
	document.getElementById("methaneps").innerHTML = commafy(methaneps - methaneStation*6);
	if(methane >= methaneStorage){
		document.getElementById("methaneps").innerHTML = 0;
	}
	document.getElementById("titaniumps").innerHTML = commafy(titaniumps);
	if(titanium >= titaniumStorage){
		document.getElementById("titaniumps").innerHTML = 0;
	}
	document.getElementById("goldps").innerHTML = commafy(goldps);
	if(gold >= goldStorage){
		document.getElementById("goldps").innerHTML = 0;
	}
	document.getElementById("silverps").innerHTML = commafy(silverps);
	if(silver >= silverStorage){
		document.getElementById("silverps").innerHTML = 0;
	}
	document.getElementById("siliconps").innerHTML = commafy(siliconps);
	if(silicon >= siliconStorage){
		document.getElementById("siliconps").innerHTML = 0;
	}
	document.getElementById("lavaps").innerHTML = commafy(lavaps);
	if(lava >= lavaStorage){
		document.getElementById("lavaps").innerHTML = 0;
	}
	document.getElementById("hydrogenps").innerHTML = commafy(hydrogenps);
	if(hydrogen >= hydrogenStorage){
		document.getElementById("hydrogenps").innerHTML = 0;
	}
	document.getElementById("heliumps").innerHTML = commafy(heliumps);
	if(helium >= heliumStorage){
		document.getElementById("heliumps").innerHTML = 0;
	}
}

function refreshStats(){
	document.getElementById("handMined").innerHTML = commafy(handMined);
	document.getElementById("tier1").innerHTML = commafy(tier1);
	document.getElementById("tier2").innerHTML = commafy(tier2);
	document.getElementById("tier3").innerHTML = commafy(tier3);
	document.getElementById("tier4").innerHTML = commafy(tier4);
	document.getElementById("tier5").innerHTML = commafy(tier5);
}
function refreshUI(){
	document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
	document.getElementById("uranium").innerHTML = commafy(uranium);
	document.getElementById("uraniumStorage").innerHTML = commafy(uraniumStorage);
	document.getElementById("uraniumNextStorage").innerHTML = commafy(uraniumNextStorage);
	document.getElementById("uraniumStorageSpaceMetalCost").innerHTML = commafy(uraniumNextStorage/2.5);	
	document.getElementById("oilStorage").innerHTML = commafy(oilStorage);
	document.getElementById("oilNextStorage").innerHTML = commafy(oilNextStorage);
	document.getElementById("oilStorageCost").innerHTML = commafy(oilStorage);
	document.getElementById("oilStorageMetalCost").innerHTML = commafy(oilStorage/2.5);
	document.getElementById("metalStorage").innerHTML = commafy(metalStorage);
	document.getElementById("metalNextStorage").innerHTML = commafy(metalNextStorage);
	document.getElementById("metalStorageCost").innerHTML = commafy(metalStorage);
	document.getElementById("gemStorage").innerHTML = commafy(gemStorage);
	document.getElementById("gemNextStorage").innerHTML = commafy(gemNextStorage);
	document.getElementById("gemStorageCost").innerHTML = commafy(gemStorage);
	document.getElementById("gemStorageMetalCost").innerHTML = commafy(gemStorage/2.5);
	document.getElementById("charcoalStorage").innerHTML = commafy(charcoalStorage);
	document.getElementById("charcoalNextStorage").innerHTML = commafy(charcoalNextStorage);
	document.getElementById("charcoalStorageCost").innerHTML = commafy(charcoalStorage);
	document.getElementById("charcoalStorageMetalCost").innerHTML = commafy(charcoalStorage/2.5);
	document.getElementById("woodStorage").innerHTML = commafy(woodStorage);
	document.getElementById("woodNextStorage").innerHTML = commafy(woodNextStorage);
	document.getElementById("woodStorageCost").innerHTML = commafy(woodStorage);
	document.getElementById("woodStorageMetalCost").innerHTML = commafy(woodStorage/2.5);
	document.getElementById("spaceMetalStorage").innerHTML = commafy(spaceMetalStorage);
	document.getElementById("spaceMetalNextStorage").innerHTML = commafy(spaceMetalNextStorage);
	document.getElementById("spaceMetalStorageCost").innerHTML = commafy(spaceMetalStorage);
	document.getElementById("spaceMetalStorageMetalCost").innerHTML = commafy(spaceMetalStorage*4);
	document.getElementById("methaneStorage").innerHTML = commafy(methaneStorage);
	document.getElementById("methaneNextStorage").innerHTML = commafy(methaneNextStorage);
	document.getElementById("methaneStorageCost").innerHTML = commafy(methaneStorage);
	document.getElementById("methaneStorageSpaceMetalCost").innerHTML = commafy(methaneStorage/2.5);
	document.getElementById("titaniumStorage").innerHTML = commafy(titaniumStorage);
	document.getElementById("titaniumNextStorage").innerHTML = commafy(titaniumNextStorage);
	document.getElementById("titaniumStorageCost").innerHTML = commafy(titaniumStorage);
	document.getElementById("titaniumStorageSpaceMetalCost").innerHTML = commafy(titaniumStorage/2.5);
	document.getElementById("goldStorage").innerHTML = commafy(goldStorage);
	document.getElementById("goldNextStorage").innerHTML = commafy(goldNextStorage);
	document.getElementById("goldStorageCost").innerHTML = commafy(goldStorage);
	document.getElementById("goldStorageSpaceMetalCost").innerHTML = commafy(goldStorage/2.5);
	document.getElementById("silverStorage").innerHTML = commafy(silverStorage);
	document.getElementById("silverNextStorage").innerHTML = commafy(silverNextStorage);
	document.getElementById("silverStorageCost").innerHTML = commafy(silverStorage);
	document.getElementById("silverStorageSpaceMetalCost").innerHTML = commafy(silverStorage/2.5);
	document.getElementById("siliconStorage").innerHTML = commafy(siliconStorage);
	document.getElementById("siliconNextStorage").innerHTML = commafy(siliconNextStorage);
	document.getElementById("siliconStorageCost").innerHTML = commafy(siliconStorage);
	document.getElementById("siliconStorageSpaceMetalCost").innerHTML = commafy(siliconStorage/2.5);
	document.getElementById("lava").innerHTML = commafy(lava);
	document.getElementById("lavaStorage").innerHTML = commafy(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = commafy(lavaNextStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = commafy(lavaNextStorage/2.5);
	document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
	document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
	document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
	document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
	document.getElementById("solarPanel").innerHTML = solarPanel;
	document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
	document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
	document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
	document.getElementById("methaneStation").innerHTML = methaneStation;
	document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
	document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
	document.getElementById("nuclearStation").innerHTML = nuclearStation;
	document.getElementById("nuclearStationSpaceMetalCost").innerHTML = nuclearStationSpaceMetalCost;
	document.getElementById("nuclearStationTitaniumCost").innerHTML = nuclearStationTitaniumCost;
	document.getElementById("pump").innerHTML = pump;
	document.getElementById("pumpMetalCost").innerHTML = commafy(pumpMetalCost);
	document.getElementById("pumpGemCost").innerHTML = commafy(pumpGemCost);
	document.getElementById("pumpjack").innerHTML = pumpjack;
	document.getElementById("pumpjackOilCost").innerHTML = commafy(pumpjackOilCost);
	document.getElementById("pumpjackGemCost").innerHTML = commafy(pumpjackGemCost);
	document.getElementById("pumpjackMetalCost").innerHTML = commafy(pumpjackMetalCost);
	document.getElementById("pumpjackOutput").innerHTML = commafy(pumpjackOutput);
	document.getElementById("miner").innerHTML = miner;
	document.getElementById("minerMetalCost").innerHTML = commafy(minerMetalCost);
	document.getElementById("minerWoodCost").innerHTML = commafy(minerWoodCost);
	document.getElementById("heavyDrill").innerHTML = heavyDrill;
	document.getElementById("heavyDrillMetalCost").innerHTML = commafy(heavyDrillMetalCost);
	document.getElementById("heavyDrillGemCost").innerHTML = commafy(heavyDrillGemCost);
	document.getElementById("heavyDrillOilCost").innerHTML = commafy(heavyDrillOilCost);
	document.getElementById("heavyDrillOutput").innerHTML = commafy(heavyDrillOutput);
	document.getElementById("gemMiner").innerHTML = gemMiner;
	document.getElementById("gemMinerMetalCost").innerHTML = commafy(gemMinerMetalCost);
	document.getElementById("gemMinerGemCost").innerHTML = commafy(gemMinerGemCost);
	document.getElementById("advancedDrill").innerHTML = advancedDrill;
	document.getElementById("advancedDrillMetalCost").innerHTML = commafy(advancedDrillMetalCost);
	document.getElementById("advancedDrillGemCost").innerHTML = commafy(advancedDrillGemCost);
	document.getElementById("advancedDrillOilCost").innerHTML = commafy(advancedDrillOilCost);
	document.getElementById("advancedDrillOutput").innerHTML = commafy(advancedDrillOutput);
	document.getElementById("woodburner").innerHTML = woodburner;
	document.getElementById("woodburnerMetalCost").innerHTML = commafy(woodburnerMetalCost);
	document.getElementById("woodburnerWoodCost").innerHTML = commafy(woodburnerWoodCost);
	document.getElementById("furnace").innerHTML = furnace;
	document.getElementById("furnaceMetalCost").innerHTML = commafy(furnaceMetalCost);
	document.getElementById("furnaceWoodCost").innerHTML = commafy(furnaceWoodCost);
	document.getElementById("furnaceOilCost").innerHTML = commafy(furnaceOilCost);
	document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
	document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
	document.getElementById("woodcutter").innerHTML = woodcutter;
	document.getElementById("woodcutterMetalCost").innerHTML = commafy(woodcutterMetalCost);
	document.getElementById("woodcutterWoodCost").innerHTML = commafy(woodcutterWoodCost);
	document.getElementById("laserCutter").innerHTML = laserCutter;
	document.getElementById("laserCutterMetalCost").innerHTML = commafy(laserCutterMetalCost);
	document.getElementById("laserCutterGemCost").innerHTML = commafy(laserCutterGemCost);
	document.getElementById("laserCutterOilCost").innerHTML = commafy(laserCutterOilCost);
	document.getElementById("laserCutterOutput").innerHTML = commafy(laserCutterOutput);
	document.getElementById("moonWorker").innerHTML = moonWorker;
	document.getElementById("moonWorkerGemCost").innerHTML = commafy(moonWorkerGemCost);
	document.getElementById("moonDrill").innerHTML = moonDrill;
	document.getElementById("moonDrillMetalCost").innerHTML = commafy(moonDrillMetalCost);
	document.getElementById("moonDrillGemCost").innerHTML = commafy(moonDrillGemCost);
	document.getElementById("moonDrillOilCost").innerHTML = commafy(moonDrillOilCost);
	document.getElementById("vacuum").innerHTML = vacuum;
	document.getElementById("vacuumSpaceMetalCost").innerHTML = commafy(vacuumSpaceMetalCost);
	document.getElementById("vacuumGemCost").innerHTML = commafy(vacuumGemCost);
	document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
	document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
	document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
	document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
	document.getElementById("explorer").innerHTML = explorer;
	document.getElementById("explorerGemCost").innerHTML = commafy(explorerGemCost);
	document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
	document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = commafy(spaceMetalDrillSpaceMetalCost);
	document.getElementById("spaceMetalDrillGemCost").innerHTML = commafy(spaceMetalDrillGemCost);
	document.getElementById("spaceMetalDrillOilCost").innerHTML = commafy(spaceMetalDrillOilCost);
	document.getElementById("droid").innerHTML = droid;
	document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
	document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
	document.getElementById("destroyer").innerHTML = destroyer;
	document.getElementById("destroyerSpaceMetalCost").innerHTML = commafy(destroyerSpaceMetalCost);
	document.getElementById("destroyerGemCost").innerHTML = commafy(destroyerGemCost);
	document.getElementById("destroyerOilCost").innerHTML = commafy(destroyerOilCost);
	document.getElementById("scout").innerHTML = scout;
	document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
	document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
	document.getElementById("spaceLaser").innerHTML = spaceLaser;
	document.getElementById("spaceLaserSpaceMetalCost").innerHTML = commafy(spaceLaserSpaceMetalCost);
	document.getElementById("spaceLaserGemCost").innerHTML = commafy(spaceLaserGemCost);
	document.getElementById("spaceLaserOilCost").innerHTML = commafy(spaceLaserOilCost);
	document.getElementById("blowtorch").innerHTML = blowtorch;
	document.getElementById("blowtorchSpaceMetalCost").innerHTML = commafy(blowtorchSpaceMetalCost);
	document.getElementById("blowtorchTitaniumCost").innerHTML = commafy(blowtorchTitaniumCost);
	document.getElementById("scorcher").innerHTML = scorcher;
	document.getElementById("scorcherSpaceMetalCost").innerHTML = commafy(scorcherSpaceMetalCost);
	document.getElementById("scorcherGemCost").innerHTML = commafy(scorcherGemCost);
	document.getElementById("scorcherOilCost").innerHTML = commafy(scorcherOilCost);
	document.getElementById("lab").innerHTML = lab;
	document.getElementById("labWoodCost").innerHTML = commafy(labWoodCost);
	document.getElementById("labGemCost").innerHTML = commafy(labGemCost);
	document.getElementById("labMetalCost").innerHTML = commafy(labMetalCost);
	document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
	document.getElementById("chemicalPlantMetalCost").innerHTML = commafy(chemicalPlantMetalCost);
	document.getElementById("chemicalPlantGemCost").innerHTML = commafy(chemicalPlantGemCost);
	document.getElementById("chemicalPlantOilCost").innerHTML = commafy(chemicalPlantOilCost);
	document.getElementById("grinder").innerHTML = grinder;
	document.getElementById("grinderTitaniumCost").innerHTML = commafy(grinderTitaniumCost);
	document.getElementById("grinderSpaceMetalCost").innerHTML = commafy(grinderSpaceMetalCost);
	document.getElementById("grinderGoldCost").innerHTML = commafy(grinderGoldCost);
	document.getElementById("cubic").innerHTML = cubic;
	document.getElementById("cubicUraniumCost").innerHTML = commafy(cubicUraniumCost);
	document.getElementById("cubicSpaceMetalCost").innerHTML = commafy(cubicSpaceMetalCost);
	document.getElementById("cubicOilCost").innerHTML = commafy(cubicOilCost);
	document.getElementById("crucible").innerHTML = crucible;
	document.getElementById("crucibleGemCost").innerHTML = commafy(crucibleGemCost);
	document.getElementById("crucibleSpaceMetalCost").innerHTML = commafy(crucibleSpaceMetalCost);
	document.getElementById("extractor").innerHTML = extractor;
	document.getElementById("extractorTitaniumCost").innerHTML = commafy(extractorTitaniumCost);
	document.getElementById("extractorSpaceMetalCost").innerHTML = commafy(extractorSpaceMetalCost);
	document.getElementById("extractorSiliconCost").innerHTML = commafy(extractorSiliconCost);
	document.getElementById("collector").innerHTML = commafy(collector);
	document.getElementById("collectorSpaceMetalCost").innerHTML = commafy(collectorSpaceMetalCost);
	document.getElementById("collectorTitaniumCost").innerHTML = commafy(collectorTitaniumCost);
	document.getElementById("magnet").innerHTML = commafy(magnet);
	document.getElementById("magnetSpaceMetalCost").innerHTML = commafy(magnetSpaceMetalCost);
	document.getElementById("magnetTitaniumCost").innerHTML = commafy(magnetTitaniumCost);
	document.getElementById("magnetGoldCost").innerHTML = commafy(magnetGoldCost);

}

function checkRedCost(){
	if(uranium < uraniumStorage){
		document.getElementById("uraniumStorageCost").className = "red";
	}
	else{
		document.getElementById("uraniumStorageCost").className = "";
	}

	if(spaceMetal < uraniumStorage/2.5){
		document.getElementById("uraniumStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("uraniumStorageSpaceMetalCost").className = "";
	}
	
	if(oil < oilStorage){
		document.getElementById("oilStorageCost").className = "red";
	}
	else{
		document.getElementById("oilStorageCost").className = "";
	}
	
	if(metal < oilStorage/2.5){
		document.getElementById("oilStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("oilStorageMetalCost").className = "";
	}
	
	if(metal < metalStorage){
		document.getElementById("metalStorageCost").className = "red";
	}
	else{
		document.getElementById("metalStorageCost").className = "";
	}
	
	if(gem < gemStorage){
		document.getElementById("gemStorageCost").className = "red";
	}
	else{
		document.getElementById("gemStorageCost").className = "";
	}
	
	if(metal < gemStorage/2.5){
		document.getElementById("gemStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("gemStorageMetalCost").className = "";
	}
	
	if(charcoal < charcoalStorage){
		document.getElementById("charcoalStorageCost").className = "red";
	}
	else{
		document.getElementById("charcoalStorageCost").className = "";
	}
	
	if(metal < charcoalStorage/2.5){
		document.getElementById("charcoalStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("charcoalStorageMetalCost").className = "";
	}

	if(wood < woodStorage){
		document.getElementById("woodStorageCost").className = "red";
	}
	else{
		document.getElementById("woodStorageCost").className = "";
	}

	if(metal < woodStorage/2.5){
		document.getElementById("woodStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("woodStorageMetalCost").className = "";
	}
	
	if(spaceMetal < spaceMetalStorage){
		document.getElementById("spaceMetalStorageCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalStorageCost").className = "";
	}

	if(metal < spaceMetalStorage*4){
		document.getElementById("spaceMetalStorageMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalStorageMetalCost").className = "";
	}

	if(methane < methaneStorage){
		document.getElementById("methaneStorageCost").className = "red";
	}
	else{
		document.getElementById("methaneStorageCost").className = "";
	}

	if(spaceMetal < methaneStorage/2.5){
		document.getElementById("methaneStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("methaneStorageSpaceMetalCost").className = "";
	}
	
	if(titanium < titaniumStorage){
		document.getElementById("titaniumStorageCost").className = "red";
	}
	else{
		document.getElementById("titaniumStorageCost").className = "";
	}

	if(spaceMetal < titaniumStorage/2.5){
		document.getElementById("titaniumStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("titaniumStorageSpaceMetalCost").className = "";
	}

	if(gold < goldStorage){
		document.getElementById("goldStorageCost").className = "red";
	}
	else{
		document.getElementById("goldStorageCost").className = "";
	}

	if(spaceMetal < goldStorage/2.5){
		document.getElementById("goldStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("goldStorageSpaceMetalCost").className = "";
	}
	
	if(silver < silverStorage){
		document.getElementById("silverStorageCost").className = "red";
	}
	else{
		document.getElementById("silverStorageCost").className = "";
	}

	if(spaceMetal < silverStorage/2.5){
		document.getElementById("silverStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("silverStorageSpaceMetalCost").className = "";
	}
	
	if(silicon < siliconStorage){
		document.getElementById("siliconStorageCost").className = "red";
	}
	else{
		document.getElementById("siliconStorageCost").className = "";
	}

	if(spaceMetal < siliconStorage/2.5){
		document.getElementById("siliconStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("siliconStorageSpaceMetalCost").className = "";
	}
	
	if(lava < lavaStorage){
		document.getElementById("lavaStorageCost").className = "red";
	}
	else{
		document.getElementById("lavaStorageCost").className = "";
	}
	
	if(spaceMetal < lavaStorage/2.5){
		document.getElementById("lavaStorageSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("lavaStorageSpaceMetalCost").className = "";
	}

	if(metal < charcoalEngineMetalCost){
		document.getElementById("charcoalEngineMetalCost").className = "red";
	}
	else{
		document.getElementById("charcoalEngineMetalCost").className = "";
	}
	
	if(gem < charcoalEngineGemCost){
		document.getElementById("charcoalEngineGemCost").className = "red";
	}
	else{
		document.getElementById("charcoalEngineGemCost").className = "";
	}

	if(metal < solarPanelMetalCost){
		document.getElementById("solarPanelMetalCost").className = "red";
	}
	else{
		document.getElementById("solarPanelMetalCost").className = "";
	}
	
	if(gem < solarPanelGemCost){
		document.getElementById("solarPanelGemCost").className = "red";
	}
	else{
		document.getElementById("solarPanelGemCost").className = "";
	}

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

	if(oil < pumpjackOilCost){
		document.getElementById("pumpjackOilCost").className = "red";
	}
	else{
		document.getElementById("pumpjackOilCost").className = "";
	}
	
	if(gem < pumpjackGemCost){
		document.getElementById("pumpjackGemCost").className = "red";
	}
	else{
		document.getElementById("pumpjackGemCost").className = "";
	}
	
	if(metal < pumpjackMetalCost){
		document.getElementById("pumpjackMetalCost").className = "red";
	}
	else{
		document.getElementById("pumpjackMetalCost").className = "";
	}
	
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
	
	if(wood < labWoodCost){
		document.getElementById("labWoodCost").className = "red";
	}
	else{
		document.getElementById("labWoodCost").className = "";
	}
	
	if(gem < labGemCost){
		document.getElementById("labGemCost").className = "red";
	}
	else{
		document.getElementById("labGemCost").className = "";
	}
	
	if(metal < labMetalCost){
		document.getElementById("labMetalCost").className = "red";
	}
	else{
		document.getElementById("labMetalCost").className = "";
	}

	if(metal < chemicalPlantMetalCost){
		document.getElementById("chemicalPlantMetalCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantMetalCost").className = "";
	}
	
	if(gem < chemicalPlantGemCost){
		document.getElementById("chemicalPlantGemCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantGemCost").className = "";
	}
	
	if(oil < chemicalPlantOilCost){
		document.getElementById("chemicalPlantOilCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantOilCost").className = "";
	}
	
	if(titanium < grinderTitaniumCost){
		document.getElementById("grinderTitaniumCost").className = "red";
	}
	else{
		document.getElementById("grinderTitaniumCost").className = "";
	}
	
	if(spaceMetal < grinderSpaceMetalCost){
		document.getElementById("grinderSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("grinderSpaceMetalCost").className = "";
	}
	
	if(gold < grinderGoldCost){
		document.getElementById("grinderGoldCost").className = "red";
	}
	else{
		document.getElementById("grinderGoldCost").className = "";
	}
	
	if(uranium < cubicUraniumCost){
		document.getElementById("cubicUraniumCost").className = "red";
	}
	else{
		document.getElementById("cubicUraniumCost").className = "";
	}
	
	if(spaceMetal < cubicSpaceMetalCost){
		document.getElementById("cubicSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("cubicSpaceMetalCost").className = "";
	}
	
	if(oil < cubicOilCost){
		document.getElementById("cubicOilCost").className = "red";
	}
	else{
		document.getElementById("cubicOilCost").className = "";
	}
	
	if(gem < crucibleGemCost){
		document.getElementById("crucibleGemCost").className = "red";
	}
	else{
		document.getElementById("crucibleGemCost").className = "";
	}
	
	if(spaceMetal < crucibleSpaceMetalCost){
		document.getElementById("crucibleSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("crucibleSpaceMetalCost").className = "";
	}
	
	if(titanium < extractorTitaniumCost){
		document.getElementById("extractorTitaniumCost").className = "red";
	}
	else{
		document.getElementById("extractorTitaniumCost").className = "";
	}

	if(spaceMetal < extractorSpaceMetalCost){
		document.getElementById("extractorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("extractorSpaceMetalCost").className = "";
	}

	if(silicon < extractorSiliconCost){
		document.getElementById("extractorSiliconCost").className = "red";
	}
	else{
		document.getElementById("extractorSiliconCost").className = "";
	}

	if(gem < preciousGemCost){
		document.getElementById("preciousGemCost").className = "red";
	}
	else{
		document.getElementById("preciousGemCost").className = "";
	}

	if(silver < preciousSilverCost){
		document.getElementById("preciousSilverCost").className = "red";
	}
	else{
		document.getElementById("preciousSilverCost").className = "";
	}

	if(gold < preciousGoldCost){
		document.getElementById("preciousGoldCost").className = "red";
	}
	else{
		document.getElementById("preciousGoldCost").className = "";
	}

	if(gem < preciousActivateGemCost){
		document.getElementById("preciousActivateGemCost").className = "red";
	}
	else{
		document.getElementById("preciousActivateGemCost").className = "";
	}

	if(silver < preciousActivateSilverCost){
		document.getElementById("preciousActivateSilverCost").className = "red";
	}
	else{
		document.getElementById("preciousActivateSilverCost").className = "";
	}

	if(gold < preciousActivateGoldCost){
		document.getElementById("preciousActivateGoldCost").className = "red";
	}
	else{
		document.getElementById("preciousActivateGoldCost").className = "";
	}

	if(wood < energeticWoodCost){
		document.getElementById("energeticWoodCost").className = "red";
	}
	else{
		document.getElementById("energeticWoodCost").className = "";
	}

	if(charcoal < energeticCharcoalCost){
		document.getElementById("energeticCharcoalCost").className = "red";
	}
	else{
		document.getElementById("energeticCharcoalCost").className = "";
	}

	if(uranium < energeticUraniumCost){
		document.getElementById("energeticUraniumCost").className = "red";
	}
	else{
		document.getElementById("energeticUraniumCost").className = "";
	}

	if(wood < energeticActivateWoodCost){
		document.getElementById("energeticActivateWoodCost").className = "red";
	}
	else{
		document.getElementById("energeticActivateWoodCost").className = "";
	}

	if(charcoal < energeticActivateCharcoalCost){
		document.getElementById("energeticActivateCharcoalCost").className = "red";
	}
	else{
		document.getElementById("energeticActivateCharcoalCost").className = "";
	}

	if(uranium < energeticActivateUraniumCost){
		document.getElementById("energeticActivateUraniumCost").className = "red";
	}
	else{
		document.getElementById("energeticActivateUraniumCost").className = "";
	}
}


function refreshResources(){
	for(var i=0; i<resourcesUnlocked.length; i++){
		document.getElementById(resourcesUnlocked[i]).className = "";
	}
	if(contains(resourcesUnlocked, "oilNav")){
		document.getElementById("oilNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "charcoalNav")){
		document.getElementById("charcoalNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "methaneNav")){
		document.getElementById("methaneNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "titaniumNav")){
		document.getElementById("titaniumNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "goldNav")){
		document.getElementById("goldNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "silverNav")){
		document.getElementById("silverNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "siliconNav")){
		document.getElementById("siliconNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "uraniumNav")){
		document.getElementById("uraniumNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "lavaNav")){
		document.getElementById("lavaNav").className = "innerPlanet";
	}
	for(var i=0; i<noBorder.length; i++){
		for(var j=0; j<4; j++){
			document.getElementById(noBorder[i] + j).style.border = "";
		}
	}
	for(var i=0; i<activated.length; i++){
		document.getElementById(activated[i] + "Activation").innerHTML = "Activated";
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
}

function refreshTabs(){
	for(var i=0; i<tabsUnlocked.length; i++){
 		document.getElementById(tabsUnlocked[i]).className -= "hidden";
 	}
 	if(rocketLaunched === true){
 		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("moon").className = "";
		document.getElementById("mercury").className = "";
		document.getElementById("venus").className = "";
		document.getElementById("mars").className = "";
		document.getElementById("asteroidBelt").className = "";
 	}
 	if(contains(explored, "asteroidBelt")){
 		document.getElementById("wonderStation").className = "";
 	}
 	for(var i=0; i<buttonsHidden.length; i++){
 		document.getElementById(buttonsHidden[i]).className += " hidden";
 	}
}

function gainResources(){
	if(energy + energyps/10 <= 100000){
		energy += energyps/10;
	}
	else{
		energy = 100000;
	}
	if(uranium + uraniumps/10 < uraniumStorage){
		uranium += uraniumps/10;
	}
	else{
		uranium = uraniumStorage;
	}
	if(metal + metalps/10 < metalStorage){
		metal += metalps/10;
	}
	else{
		metal = metalStorage;
	}
	if(gem + gemps/10 < gemStorage){
		gem += gemps/10;
	}
	else{
		gem = gemStorage;
	}
	science += scienceps/10;
	science = Math.round(science*100)/100;
	if(oil >= chemicalPlant*20/10 && charcoal >= chemicalPlant*20/10){
		oil -= chemicalPlant*20/10;
		charcoal -= chemicalPlant*20/10;
		rocketFuel += chemicalPlant/5/10;
	}
	if(spaceMetal + spaceMetalps/10 < spaceMetalStorage){
		spaceMetal += spaceMetalps/10;
	}
	else{
		spaceMetal = spaceMetalStorage;
	}
	if(methane + methaneps/10 < methaneStorage){
		methane += methaneps/10;
	}
	else{
		methane = methaneStorage;
	}
	if(titanium + titaniumps/10 < titaniumStorage){
		titanium += titaniumps/10;
	}
	else{
		titanium = titaniumStorage;
	}
	if(gold + goldps/10 < goldStorage){
		gold += goldps/10;
	}
	else{
		gold = goldStorage;
	}
	if(silver + silverps/10 < silverStorage){
		silver += silverps/10;
	}
	else{
		silver = silverStorage;
	}
	if(silicon + siliconps/10 < siliconStorage){
		silicon += siliconps/10;
	}
	else{
		silicon = siliconStorage;
	}
	if(uranium + uraniumps/10 < uraniumStorage){
		uranium += uraniumps/10;
	}
	else{
		uranium = uraniumStorage;
	}
	if(lava + lavaps/10 < lavaStorage){
		lava += lavaps/10;
	}
	else{
		lava = lavaStorage;
	}
	if(hydrogen + hydrogenps/10 < hydrogenStorage){
		hydrogen += hydrogenps/10;
	}
	else{
		hydrogen = hydrogenStorage;
	}
	if(helium + heliumps/10 < heliumStorage){
		helium += heliumps/10;
	}
	else{
		helium = heliumStorage;
	}
	if(oil + oilps/10 < oilStorage){
		oil += oilps/10;
	}
	else{
		oil = oilStorage;
	}
	if(charcoal + charcoalps/10 < charcoalStorage && wood >= ((woodburner*2) + furnace*furnaceWoodInput)/10){
		charcoal += charcoalps/10;
	}
	else{
		var difference = charcoalStorage - charcoal;
		if(wood >= difference*2){
			if(charcoal + difference <= charcoalStorage){
				charcoal += difference;
			}
			else{
				charcoal = charcoalStorage;
			}
		}
	}
	if(wood - (((woodburner*2) + furnace*furnaceWoodInput)/10) > 0){
		wood -= ((woodburner*2) + furnace*furnaceWoodInput)/10;
	}
	else{
		wood = 0;
	}
	if(wood + woodps/10 < woodStorage){
		wood += woodps/10;
	}
	else{
		wood = woodStorage;
	}
}

// Gain Buttons

function gainUranium(){
	if(uranium < uraniumStorage){
		uranium += 1;
		refresh();
		handMined += 1;
	}
}

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
		refresh();
		handMined += 1;
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += 1;
		refresh();
		handMined += 1;
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += 1;
		refresh();
		handMined += 1;
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= 2){
		wood -= 2;
		charcoal += 1;
		refresh();
		handMined += 1;
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += 1;
		refresh();
		handMined += 1;
	}
}

function gainSpaceMetal(){
	if(spaceMetal < spaceMetalStorage){
		spaceMetal += 1;
		refresh();
		handMined += 1;
	}
}

function gainMethane(){
	if(methane < methaneStorage){
		methane += 1;
		refresh();
		handMined += 1;
	}
}

function gainTitanium(){
	if(titanium < titaniumStorage){
		titanium += 1;
		refresh();
		handMined += 1;
	}
}

function gainGold(){
	if(gold < goldStorage){
		gold += 1;
		refresh();
		handMined += 1;
	}
}

function gainSilver(){
	if(silver < silverStorage){
		silver += 1;
		refresh();
		handMined += 1;
	}
}

function gainSilicon(){
	if(silicon < siliconStorage){
		silicon += 1;
		refresh();
		handMined += 1;
	}
}

function gainLava(){
	if(lava < lavaStorage){
		lava += 1;
		refresh();
		handMined += 1;
	}
}

function gainHydrogen(){
	if(hydrogen < hydrogenStorage){
		hydrogen += 1;
		refresh();
		handMined += 1;
	}
}

function gainHelium(){
	if(helium < heliumStorage){
		helium += 1;
		refresh();
		handMined += 1;
	}
}

// Resources Tab

function upgradeUraniumStorage(){
	if(uranium >= uraniumStorage && spaceMetal >= uraniumStorage/2.5){
		uranium -= uraniumStorage;
		spaceMetal -= uraniumStorage/2.5;
		uraniumStorage = uraniumNextStorage;
		uraniumNextStorage *= 2;
		refresh();
		document.getElementById("uraniumStorage").innerHTML = commafy(uraniumStorage);
		document.getElementById("uraniumNextStorage").innerHTML = commafy(uraniumNextStorage);
		document.getElementById("uraniumStorageCost").innerHTML = commafy(uraniumStorage);
		document.getElementById("uraniumStorageSpaceMetalCost").innerHTML = commafy(uraniumStorage/2.5);
	}
}

function upgradeOilStorage(){
	if(oil >= oilStorage && metal >= oilStorage/2.5){
		oil -= oilStorage;
		metal -= oilStorage/2.5;
		oilStorage = oilNextStorage;
		oilNextStorage *= 2;
		refresh();
		document.getElementById("oilStorage").innerHTML = commafy(oilStorage);
		document.getElementById("oilNextStorage").innerHTML = commafy(oilNextStorage);
		document.getElementById("oilStorageCost").innerHTML = commafy(oilStorage);
		document.getElementById("oilStorageMetalCost").innerHTML = commafy(oilStorage/2.5);
	}
}

function upgradeMetalStorage(){
	if(metal >= metalStorage){
		metal -= metalStorage;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
		refresh();
		document.getElementById("metalStorage").innerHTML = commafy(metalStorage);
		document.getElementById("metalNextStorage").innerHTML = commafy(metalNextStorage);
		document.getElementById("metalStorageCost").innerHTML = commafy(metalStorage);
	}
}

function upgradeGemStorage(){
	if(gem >= gemStorage && metal >= gemStorage/2.5){
		gem -= gemStorage;
		metal -= gemStorage/2.5;
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
		refresh();
		document.getElementById("gemStorage").innerHTML = commafy(gemStorage);
		document.getElementById("gemNextStorage").innerHTML = commafy(gemNextStorage);
		document.getElementById("gemStorageCost").innerHTML = commafy(gemStorage);
		document.getElementById("gemStorageMetalCost").innerHTML = commafy(gemStorage/2.5);
	}
}

function upgradeCharcoalStorage(){
	if(charcoal >= charcoalStorage && metal >= charcoalStorage/2.5){
		charcoal -= charcoalStorage;
		metal -= charcoalStorage/2.5;
		charcoalStorage = charcoalNextStorage;
		charcoalNextStorage *= 2;
		refresh();
		document.getElementById("charcoalStorage").innerHTML = commafy(charcoalStorage);
		document.getElementById("charcoalNextStorage").innerHTML = commafy(charcoalNextStorage);
		document.getElementById("charcoalStorageCost").innerHTML = commafy(charcoalStorage);
		document.getElementById("charcoalStorageMetalCost").innerHTML = commafy(charcoalStorage/2.5);
	}
}

function upgradeWoodStorage(){
	if(wood >= woodStorage && metal >= woodStorage/2.5){
		wood -= woodStorage;
		metal -= woodStorage/2.5;
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
		refresh();
		document.getElementById("woodStorage").innerHTML = commafy(woodStorage);
		document.getElementById("woodNextStorage").innerHTML = commafy(woodNextStorage);
		document.getElementById("woodStorageCost").innerHTML = commafy(woodStorage);
		document.getElementById("woodStorageMetalCost").innerHTML = commafy(woodStorage/2.5);
	}
}

function upgradeSpaceMetalStorage(){
	if(spaceMetal >= spaceMetalStorage && metal >= spaceMetalStorage*4){
		spaceMetal -= spaceMetalStorage;
		metal -= spaceMetalStorage*4;
		spaceMetalStorage = spaceMetalNextStorage;
		spaceMetalNextStorage *= 2;
		refresh();
		document.getElementById("spaceMetalStorage").innerHTML = commafy(spaceMetalStorage);
		document.getElementById("spaceMetalNextStorage").innerHTML = commafy(spaceMetalNextStorage);
		document.getElementById("spaceMetalStorageCost").innerHTML = commafy(spaceMetalStorage);
		document.getElementById("spaceMetalStorageMetalCost").innerHTML = commafy(spaceMetalStorage*4);
	}
}

function upgradeMethaneStorage(){
	if(methane >= methaneStorage && spaceMetal >= methaneStorage/2.5){
		methane -= methaneStorage;
		spaceMetal -= methaneStorage/2.5;
		methaneStorage = methaneNextStorage;
		methaneNextStorage *= 2;
		refresh();
		document.getElementById("methaneStorage").innerHTML = commafy(methaneStorage);
		document.getElementById("methaneNextStorage").innerHTML = commafy(methaneNextStorage);
		document.getElementById("methaneStorageCost").innerHTML = commafy(methaneStorage);
		document.getElementById("methaneStorageSpaceMetalCost").innerHTML = commafy(methaneStorage/2.5);
	}
}

function upgradeTitaniumStorage(){
	if(titanium >= titaniumStorage && spaceMetal >= titaniumStorage/2.5){
		titanium -= titaniumStorage;
		spaceMetal -= titaniumStorage/2.5;
		titaniumStorage = titaniumNextStorage;
		titaniumNextStorage *= 2;
		refresh();
		document.getElementById("titaniumStorage").innerHTML = commafy(titaniumStorage);
		document.getElementById("titaniumNextStorage").innerHTML = commafy(titaniumNextStorage);
		document.getElementById("titaniumStorageCost").innerHTML = commafy(titaniumStorage);
		document.getElementById("titaniumStorageSpaceMetalCost").innerHTML = commafy(titaniumStorage/2.5);
	}
}

function upgradeGoldStorage(){
	if(gold >= goldStorage && spaceMetal >= goldStorage/2.5){
		gold -= goldStorage;
		spaceMetal -= goldStorage/2.5;
		goldStorage = goldNextStorage;
		goldNextStorage *= 2;
		refresh();
		document.getElementById("goldStorage").innerHTML = commafy(goldStorage);
		document.getElementById("goldNextStorage").innerHTML = commafy(goldNextStorage);
		document.getElementById("goldStorageCost").innerHTML = commafy(goldStorage);
		document.getElementById("goldStorageSpaceMetalCost").innerHTML = commafy(goldStorage/2.5);
	}
}

function upgradeSilverStorage(){
	if(silver >= silverStorage && spaceMetal >= silverStorage/2.5){
		silver -= silverStorage;
		spaceMetal -= silverStorage/2.5;
		silverStorage = silverNextStorage;
		silverNextStorage *= 2;
		refresh();
		document.getElementById("silverStorage").innerHTML = commafy(silverStorage);
		document.getElementById("silverNextStorage").innerHTML = commafy(silverNextStorage);
		document.getElementById("silverStorageCost").innerHTML = commafy(silverStorage);
		document.getElementById("silverStorageSpaceMetalCost").innerHTML = commafy(silverStorage/2.5);
	}
}

function upgradeSiliconStorage(){
	if(silicon >= siliconStorage && spaceMetal >= siliconStorage/2.5){
		silicon -= siliconStorage;
		spaceMetal -= siliconStorage/2.5;
		siliconStorage = siliconNextStorage;
		siliconNextStorage *= 2;
		refresh();
		document.getElementById("siliconStorage").innerHTML = commafy(siliconStorage);
		document.getElementById("siliconNextStorage").innerHTML = commafy(siliconNextStorage);
		document.getElementById("siliconStorageCost").innerHTML = commafy(siliconStorage);
		document.getElementById("siliconStorageSpaceMetalCost").innerHTML = commafy(siliconStorage/2.5);
	}
}

function upgradeLavaStorage(){
	if(lava >= lavaStorage && spaceMetal >= lavaStorage/2.5){
		lava -= lavaStorage;
		spaceMetal -= lavaStorage/2.5;
		lavaStorage = lavaNextStorage;
		lavaNextStorage *= 2;
		refresh();
		document.getElementById("lavaStorage").innerHTML = commafy(lavaStorage);
		document.getElementById("lavaNextStorage").innerHTML = commafy(lavaNextStorage);
		document.getElementById("lavaStorageCost").innerHTML = commafy(lavaStorage);
		document.getElementById("lavaStorageSpaceMetalCost").innerHTML = commafy(lavaStorage/2.5);
	}
}

function upgradeHydrogenStorage(){
	if(hydrogen >= hydrogenStorage && spaceMetal >= hydrogenStorage/2.5){
		hydrogen -= hydrogenStorage;
		spaceMetal -= hydrogenStorage/2.5;
		hydrogenStorage = hydrogenNextStorage;
		hydrogenNextStorage *= 2;
		refresh();
		document.getElementById("hydrogenStorage").innerHTML = commafy(hydrogenStorage);
		document.getElementById("hydrogenNextStorage").innerHTML = commafy(hydrogenNextStorage);
		document.getElementById("hydrogenStorageCost").innerHTML = commafy(hydrogenStorage);
		document.getElementById("hydrogenStorageSpaceMetalCost").innerHTML = commafy(hydrogenStorage/2.5);
	}
}

function upgradeHeliumStorage(){
	if(helium >= heliumStorage && spaceMetal >= heliumStorage/2.5){
		helium -= heliumStorage;
		spaceMetal -= heliumStorage/2.5;
		heliumStorage = heliumNextStorage;
		heliumNextStorage *= 2;
		refresh();
		document.getElementById("heliumStorage").innerHTML = commafy(heliumStorage);
		document.getElementById("heliumNextStorage").innerHTML = commafy(heliumNextStorage);
		document.getElementById("heliumStorageCost").innerHTML = commafy(heliumStorage);
		document.getElementById("heliumStorageSpaceMetalCost").innerHTML = commafy(heliumStorage/2.5);
	}
}

function getCharcoalEngine(){
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		charcoalEngineMetalCost = Math.floor(50 * Math.pow(1.1,charcoalEngine + 1));
		charcoalEngineGemCost = Math.floor(25 * Math.pow(1.1,charcoalEngine + 1));
		document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
		document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
		document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSolarPanel(){
	if(metal >= solarPanelMetalCost && gem >= solarPanelGemCost){
		metal -= solarPanelMetalCost;
		gem -= solarPanelGemCost;
		solarPanel += 1;
		solarPanelMetalCost = Math.floor(30 * Math.pow(1.1,solarPanel + 1));
		solarPanelGemCost = Math.floor(35 * Math.pow(1.1,solarPanel + 1));
		document.getElementById("solarPanel").innerHTML = solarPanel;
		document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
		document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getMethaneStation(){
	if(spaceMetal >= methaneStationSpaceMetalCost && titanium >= methaneStationTitaniumCost){
		spaceMetal -= methaneStationSpaceMetalCost;
		titanium -= methaneStationTitaniumCost;
		methaneStation += 1;
		methaneStationSpaceMetalCost = Math.floor(50 * Math.pow(1.1,methaneStation + 1));
		methaneStationTitaniumCost = Math.floor(40 * Math.pow(1.1,methaneStation + 1));
		document.getElementById("methaneStation").innerHTML = methaneStation;
		document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
		document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
		refresh();
		refreshPerSec();
		tier3 += 1;
	}
}

function getNuclearStation(){
	if(spaceMetal >= nuclearStationSpaceMetalCost && titanium >= nuclearStationTitaniumCost){
		spaceMetal -= nuclearStationSpaceMetalCost;
		titanium -= nuclearStationTitaniumCost;
		nuclearStation += 1;
		nuclearStationSpaceMetalCost = Math.floor(20000 * Math.pow(1.1,nuclearStation + 1));
		nuclearStationTitaniumCost = Math.floor(10000 * Math.pow(1.1,nuclearStation + 1));
		document.getElementById("nuclearStation").innerHTML = nuclearStation;
		document.getElementById("nuclearStationSpaceMetalCost").innerHTML = commafy(nuclearStationSpaceMetalCost);
		document.getElementById("nuclearStationTitaniumCost").innerHTML = commafy(nuclearStationTitaniumCost);
		refresh();
		refreshPerSec();
		tier4 += 1;
	}
}


function getMagmatic(){
	if(spaceMetal >= magmaticSpaceMetalCost && gem >= magmaticGemCost && silver >= magmaticSilverCost){
		spaceMetal -= magmaticSpaceMetalCost;
		gem -= magmaticGemCost;
		silver -= magmaticSilverCost;
		magmatic += 1;
		magmaticSpaceMetalCost = Math.floor(25000 * Math.pow(1.1,magmatic + 1));
		magmaticGemCost = Math.floor(20000 * Math.pow(1.1,magmatic + 1));
		magmaticSilverCost = Math.floor(15000 * Math.pow(1.1,magmatic + 1));
		document.getElementById("magmatic").innerHTML = magmatic;
		document.getElementById("nuclearStationSpaceMetalCost").innerHTML = commafy(nuclearStationSpaceMetalCost);
		document.getElementById("nuclearStationTitaniumCost").innerHTML = commafy(nuclearStationTitaniumCost);
		refresh();
		refreshPerSec();
		tier5 += 1;
	}
}

function getGrinder(){
	if(titanium >= grinderTitaniumCost && spaceMetal >= grinderSpaceMetalCost && gold >= grinderGoldCost){
		titanium -= grinderTitaniumCost;
		spaceMetal -= grinderSpaceMetalCost;
		gold -= grinderGoldCost;
		grinder += 1;
		grinderTitaniumCost = Math.floor(2000 * Math.pow(1.1,grinder + 1));
		grinderSpaceMetalCost = Math.floor(4000 * Math.pow(1.1,grinder + 1));
		grinderGoldCost = Math.floor(2000 * Math.pow(1.1,grinder + 1));
		document.getElementById("grinder").innerHTML = grinder;
		document.getElementById("grinderTitaniumCost").innerHTML = commafy(grinderTitaniumCost);
		document.getElementById("grinderSpaceMetalCost").innerHTML = commafy(grinderSpaceMetalCost);
		document.getElementById("grinderGoldCost").innerHTML = commafy(grinderGoldCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getCubic(){
	if(uranium >= cubicUraniumCost && spaceMetal >= cubicSpaceMetalCost && oil >= cubicOilCost){
		uranium -= cubicUraniumCost;
		spaceMetal -= cubicSpaceMetalCost;
		oil -= cubicOilCost;
		cubic += 1;
		cubicUraniumCost = Math.floor(80 * Math.pow(1.1,cubic + 1));
		cubicSpaceMetalCost = Math.floor(10000 * Math.pow(1.1,cubic + 1));
		cubicOilCost = Math.floor(10000 * Math.pow(1.1,cubic + 1));
		document.getElementById("cubic").innerHTML = cubic;
		document.getElementById("cubicUraniumCost").innerHTML = commafy(cubicUraniumCost);
		document.getElementById("cubicSpaceMetalCost").innerHTML = commafy(cubicSpaceMetalCost);
		document.getElementById("cubicOilCost").innerHTML = commafy(cubicOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getPump(){
	if(metal >= pumpMetalCost && gem >= pumpGemCost){
		metal -= pumpMetalCost;
		gem -= pumpGemCost;
		pump += 1;
		pumpMetalCost = Math.floor(60 * Math.pow(1.1,pump + 1));
		pumpGemCost = Math.floor(20 * Math.pow(1.1,pump + 1));
		document.getElementById("pump").innerHTML = pump;
		document.getElementById("pumpMetalCost").innerHTML = commafy(pumpMetalCost);
		document.getElementById("pumpGemCost").innerHTML = commafy(pumpGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getPumpjack(){
	if(metal >= pumpjackMetalCost && gem >= pumpjackGemCost && oil >= pumpjackOilCost){
		metal -= pumpMetalCost;
		gem -= pumpjackGemCost;
		oil -= pumpjackOilCost;
		pumpjack += 1;
		pumpjackOilCost = Math.floor(50 * Math.pow(1.1,pumpjack + 1));
		pumpjackGemCost = Math.floor(85 * Math.pow(1.1,pumpjack + 1));
		pumpjackMetalCost = Math.floor(250 * Math.pow(1.1,pumpjack + 1));
		document.getElementById("pumpjack").innerHTML = pumpjack;
		document.getElementById("pumpjackOilCost").innerHTML = commafy(pumpjackOilCost);
		document.getElementById("pumpjackGemCost").innerHTML = commafy(pumpjackGemCost);
		document.getElementById("pumpjackMetalCost").innerHTML = commafy(pumpjackMetalCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getMiner(){
	if(metal >= minerMetalCost && wood >= minerWoodCost){
		metal -= minerMetalCost;
		wood -= minerWoodCost;
		miner += 1;
		minerWoodCost = Math.floor(5 * Math.pow(1.1,miner + 1));
		minerMetalCost = Math.floor(10 * Math.pow(1.1,miner + 1));
		document.getElementById("miner").innerHTML = miner;
		document.getElementById("minerMetalCost").innerHTML = commafy(minerMetalCost);
		document.getElementById("minerWoodCost").innerHTML = commafy(minerWoodCost);
		if(researchUnlocked === false){
			if(miner >= 1){
				document.getElementById("researchTab").className = "";
				document.getElementById("dropdownMenu").className = "dropdown";
				researchUnlocked = true;
				tabsUnlocked.push("researchTab", "dropdownMenu");
			}
		}
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getHeavyDrill(){
	if(metal >= heavyDrillMetalCost && gem >= heavyDrillGemCost && oil >= heavyDrillOilCost){
		metal -= heavyDrillMetalCost;
		gem -= heavyDrillGemCost;
		oil -= heavyDrillOilCost;
		heavyDrill += 1;
		heavyDrillOilCost = Math.floor(50 * Math.pow(1.1,heavyDrill + 1));
		heavyDrillGemCost = Math.floor(60 * Math.pow(1.1,heavyDrill + 1));
		heavyDrillMetalCost = Math.floor(160 * Math.pow(1.1,heavyDrill + 1));
		document.getElementById("heavyDrill").innerHTML = heavyDrill;
		document.getElementById("heavyDrillMetalCost").innerHTML = commafy(heavyDrillMetalCost);
		document.getElementById("heavyDrillGemCost").innerHTML = commafy(heavyDrillGemCost);
		document.getElementById("heavyDrillOilCost").innerHTML = commafy(heavyDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getGemMiner(){
	if(metal >= gemMinerMetalCost && gem >= gemMinerGemCost){
		metal -= gemMinerMetalCost;
		gem -= gemMinerGemCost;
		gemMiner += 1;
		gemMinerGemCost = Math.floor(10 * Math.pow(1.1,gemMiner + 1));
		gemMinerMetalCost = Math.floor(15 * Math.pow(1.1,gemMiner + 1));
		document.getElementById("gemMiner").innerHTML = gemMiner;
		document.getElementById("gemMinerMetalCost").innerHTML = commafy(gemMinerMetalCost);
		document.getElementById("gemMinerGemCost").innerHTML = commafy(gemMinerGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getAdvancedDrill(){
	if(metal >= advancedDrillMetalCost && gem >= advancedDrillGemCost && oil >= advancedDrillOilCost){
		metal -= advancedDrillMetalCost;
		gem -= advancedDrillGemCost;
		oil -= advancedDrillOilCost;
		advancedDrill += 1;
		advancedDrillOilCost = Math.floor(60 * Math.pow(1.1,advancedDrill + 1));
		advancedDrillGemCost = Math.floor(200 * Math.pow(1.1,advancedDrill + 1));
		advancedDrillMetalCost = Math.floor(120 * Math.pow(1.1,advancedDrill + 1));
		document.getElementById("advancedDrill").innerHTML = advancedDrill;
		document.getElementById("advancedDrillMetalCost").innerHTML = commafy(advancedDrillMetalCost);
		document.getElementById("advancedDrillGemCost").innerHTML = commafy(advancedDrillGemCost);
		document.getElementById("advancedDrillOilCost").innerHTML = commafy(advancedDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getWoodburner(){
	if(metal >= woodburnerMetalCost && wood >= woodburnerWoodCost){
		metal -= woodburnerMetalCost;
		wood -= woodburnerWoodCost;
		woodburner += 1;
		woodburnerWoodCost = Math.floor(5 * Math.pow(1.1,woodburner + 1));
		woodburnerMetalCost = Math.floor(10 * Math.pow(1.1,woodburner + 1));
		document.getElementById("woodburner").innerHTML = woodburner;
		document.getElementById("woodburnerMetalCost").innerHTML = commafy(woodburnerMetalCost);
		document.getElementById("woodburnerWoodCost").innerHTML = commafy(woodburnerWoodCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getFurnace(){
	if(metal >= furnaceMetalCost && wood >= furnaceWoodCost && oil >= furnaceOilCost){
		metal -= furnaceMetalCost;
		wood -= furnaceWoodCost;
		oil -= furnaceOilCost;
		furnace += 1;
		furnaceWoodCost = Math.floor(40 * Math.pow(1.1,furnace + 1));
		furnaceOilCost = Math.floor(100 * Math.pow(1.1,furnace + 1));
		furnaceMetalCost = Math.floor(80 * Math.pow(1.1,furnace + 1));
		document.getElementById("furnace").innerHTML = furnace;
		document.getElementById("furnaceMetalCost").innerHTML = commafy(furnaceMetalCost);
		document.getElementById("furnaceWoodCost").innerHTML = commafy(furnaceWoodCost);
		document.getElementById("furnaceOilCost").innerHTML = commafy(furnaceOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getWoodcutter(){
	if(metal >= woodcutterMetalCost && wood >= woodcutterWoodCost){
		metal -= woodcutterMetalCost;
		wood -= woodcutterWoodCost;
		woodcutter += 1;
		woodcutterWoodCost = Math.floor(5 * Math.pow(1.1,woodcutter + 1));
		woodcutterMetalCost = Math.floor(10 * Math.pow(1.1,woodcutter + 1));
		document.getElementById("woodcutter").innerHTML = woodcutter;
		document.getElementById("woodcutterMetalCost").innerHTML = commafy(woodcutterMetalCost);
		document.getElementById("woodcutterWoodCost").innerHTML = commafy(woodcutterWoodCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getLaserCutter(){
	if(metal >= laserCutterMetalCost && gem >= laserCutterGemCost && oil >= laserCutterOilCost){
		metal -= laserCutterMetalCost;
		gem -= laserCutterGemCost;
		oil -= laserCutterOilCost;
		laserCutter += 1;
		laserCutterOilCost = Math.floor(40 * Math.pow(1.1,laserCutter + 1));
		laserCutterGemCost = Math.floor(90 * Math.pow(1.1,laserCutter + 1));
		laserCutterMetalCost = Math.floor(50 * Math.pow(1.1,laserCutter + 1));
		document.getElementById("laserCutter").innerHTML = laserCutter;
		document.getElementById("laserCutterMetalCost").innerHTML = commafy(laserCutterMetalCost);
		document.getElementById("laserCutterGemCost").innerHTML = commafy(laserCutterGemCost);
		document.getElementById("laserCutterOilCost").innerHTML = commafy(laserCutterOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= moonWorkerGemCost;
		moonWorker += 1;
		moonWorkerGemCost = Math.floor(500 * Math.pow(1.1,moonWorker + 1));
		document.getElementById("moonWorker").innerHTML = moonWorker;
		document.getElementById("moonWorkerGemCost").innerHTML = commafy(moonWorkerGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getMoonDrill(){
	if(metal >= moonDrillMetalCost && gem >= moonDrillGemCost && oil >= moonDrillOilCost){
		metal -= moonDrillMetalCost;
		gem -= moonDrillGemCost;
		oil -= moonDrillOilCost;
		moonDrill += 1;
		moonDrillOilCost = Math.floor(400 * Math.pow(1.1,moonDrill + 1));
		moonDrillGemCost = Math.floor(600 * Math.pow(1.1,moonDrill + 1));
		moonDrillMetalCost = Math.floor(1000 * Math.pow(1.1,moonDrill + 1));
		document.getElementById("moonDrill").innerHTML = moonDrill;
		document.getElementById("moonDrillMetalCost").innerHTML = commafy(moonDrillMetalCost);
		document.getElementById("moonDrillGemCost").innerHTML = commafy(moonDrillGemCost);
		document.getElementById("moonDrillOilCost").innerHTML = commafy(moonDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getVacuum(){
	if(spaceMetal >= vacuumSpaceMetalCost && gem >= vacuumGemCost){
		spaceMetal -= vacuumSpaceMetalCost;
		gem -= vacuumGemCost;
		vacuum += 1;
		vacuumGemCost = Math.floor(500 * Math.pow(1.1,vacuum + 1));
		vacuumSpaceMetalCost = Math.floor(50 * Math.pow(1.1,vacuum + 1));
		document.getElementById("vacuum").innerHTML = vacuum;
		document.getElementById("vacuumSpaceMetalCost").innerHTML = commafy(vacuumSpaceMetalCost);
		document.getElementById("vacuumGemCost").innerHTML = commafy(vacuumGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSuctionExcavator(){
	if(spaceMetal >= suctionExcavatorSpaceMetalCost && gem >= suctionExcavatorGemCost && oil >= suctionExcavatorOilCost){
		spaceMetal -= suctionExcavatorSpaceMetalCost;
		gem -= suctionExcavatorGemCost;
		oil -= suctionExcavatorOilCost;
		suctionExcavator += 1;
		suctionExcavatorOilCost = Math.floor(600 * Math.pow(1.1,suctionExcavator + 1));
		suctionExcavatorGemCost = Math.floor(800 * Math.pow(1.1,suctionExcavator + 1));
		suctionExcavatorSpaceMetalCost = Math.floor(100 * Math.pow(1.1,suctionExcavator + 1));
		document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
		document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
		document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
		document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getExplorer(){
	if(gem >= explorerGemCost){
		gem -= explorerGemCost;
		explorer += 1;
		explorerGemCost = Math.floor(1000 * Math.pow(1.1,explorer + 1));
		document.getElementById("explorer").innerHTML = explorer;
		document.getElementById("explorerGemCost").innerHTML = commafy(explorerGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSpaceMetalDrill(){
	if(spaceMetal >= spaceMetalDrillSpaceMetalCost && gem >= spaceMetalDrillGemCost && oil >= spaceMetalDrillOilCost){
		spaceMetal -= spaceMetalDrillSpaceMetalCost;
		gem -= spaceMetalDrillGemCost;
		oil -= spaceMetalDrillOilCost;
		spaceMetalDrill += 1;
		spaceMetalDrillOilCost = Math.floor(1000 * Math.pow(1.1,spaceMetalDrill + 1));
		spaceMetalDrillGemCost = Math.floor(800 * Math.pow(1.1,spaceMetalDrill + 1));
		spaceMetalDrillSpaceMetalCost = Math.floor(200 * Math.pow(1.1,spaceMetalDrill + 1));
		document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
		document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = commafy(spaceMetalDrillSpaceMetalCost);
		document.getElementById("spaceMetalDrillGemCost").innerHTML = commafy(spaceMetalDrillGemCost);
		document.getElementById("spaceMetalDrillOilCost").innerHTML = commafy(spaceMetalDrillOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getDroid(){
	if(spaceMetal >= droidSpaceMetalCost && methane >= droidMethaneCost){
		spaceMetal -= droidSpaceMetalCost;
		methane -= droidMethaneCost;
		droid += 1;
		droidMethaneCost = Math.floor(50 * Math.pow(1.1,droid + 1));
		droidSpaceMetalCost = Math.floor(200 * Math.pow(1.1,droid + 1));
		document.getElementById("droid").innerHTML = droid;
		document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
		document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getDestroyer(){
	if(spaceMetal >= destroyerSpaceMetalCost && gem >= destroyerGemCost && oil >= destroyerOilCost){
		spaceMetal -= destroyerSpaceMetalCost;
		gem -= destroyerGemCost;
		oil -= destroyerOilCost;
		destroyer += 1;
		destroyerOilCost = Math.floor(1000 * Math.pow(1.1,destroyer + 1));
		destroyerGemCost = Math.floor(1500 * Math.pow(1.1,destroyer + 1));
		destroyerSpaceMetalCost = Math.floor(500 * Math.pow(1.1,destroyer + 1));
		document.getElementById("destroyer").innerHTML = destroyer;
		document.getElementById("destroyerSpaceMetalCost").innerHTML = commafy(destroyerSpaceMetalCost);
		document.getElementById("destroyerGemCost").innerHTML = commafy(destroyerGemCost);
		document.getElementById("destroyerOilCost").innerHTML = commafy(destroyerOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getScout(){
	if(spaceMetal >= scoutSpaceMetalCost && titanium >= scoutTitaniumCost){
		spaceMetal -= scoutSpaceMetalCost;
		titanium -= scoutTitaniumCost;
		scout += 1;
		scoutTitaniumCost = Math.floor(20 * Math.pow(1.1,scout + 1));
		scoutSpaceMetalCost = Math.floor(100 * Math.pow(1.1,scout + 1));
		document.getElementById("scout").innerHTML = scout;
		document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
		document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getSpaceLaser(){
	if(spaceMetal >= spaceLaserSpaceMetalCost && gem >= spaceLaserGemCost && oil >= spaceLaserOilCost){
		spaceMetal -= spaceLaserSpaceMetalCost;
		gem -= spaceLaserGemCost;
		oil -= spaceLaserOilCost;
		spaceLaser += 1;
		spaceLaserOilCost = Math.floor(1200 * Math.pow(1.1,spaceLaser + 1));
		spaceLaserGemCost = Math.floor(900 * Math.pow(1.1,spaceLaser + 1));
		spaceLaserSpaceMetalCost = Math.floor(350 * Math.pow(1.1,spaceLaser + 1));
		document.getElementById("spaceLaser").innerHTML = spaceLaser;
		document.getElementById("spaceLaserSpaceMetalCost").innerHTML = commafy(spaceLaserSpaceMetalCost);
		document.getElementById("spaceLaserGemCost").innerHTML = commafy(spaceLaserGemCost);
		document.getElementById("spaceLaserOilCost").innerHTML = commafy(spaceLaserOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getBlowtorch(){
	if(spaceMetal >= blowtorchSpaceMetalCost && titanium >= blowtorchTitaniumCost){
		spaceMetal -= blowtorchSpaceMetalCost;
		titanium -= blowtorchTitaniumCost;
		blowtorch += 1;
		blowtorchTitaniumCost = Math.floor(30 * Math.pow(1.1,blowtorch + 1));
		blowtorchSpaceMetalCost = Math.floor(150 * Math.pow(1.1,blowtorch + 1));
		document.getElementById("blowtorch").innerHTML = blowtorch;
		document.getElementById("blowtorchSpaceMetalCost").innerHTML = commafy(blowtorchSpaceMetalCost);
		document.getElementById("blowtorchTitaniumCost").innerHTML = commafy(blowtorchTitaniumCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getScorcher(){
	if(spaceMetal >= scorcherSpaceMetalCost && gem >= scorcherGemCost && oil >= scorcherOilCost){
		spaceMetal -= scorcherSpaceMetalCost;
		gem -= scorcherGemCost;
		oil -= scorcherOilCost;
		scorcher += 1;
		scorcherOilCost = Math.floor(1600 * Math.pow(1.1,scorcher + 1));
		scorcherGemCost = Math.floor(1200 * Math.pow(1.1,scorcher + 1));
		scorcherSpaceMetalCost = Math.floor(500 * Math.pow(1.1,scorcher + 1));
		document.getElementById("scorcher").innerHTML = scorcher;
		document.getElementById("scorcherSpaceMetalCost").innerHTML = commafy(scorcherSpaceMetalCost);
		document.getElementById("scorcherGemCost").innerHTML = commafy(scorcherGemCost);
		document.getElementById("scorcherOilCost").innerHTML = commafy(scorcherOilCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getCrucible(){
	if(spaceMetal >= crucibleSpaceMetalCost && gem >= crucibleGemCost){
		spaceMetal -= crucibleSpaceMetalCost;
		gem -= crucibleGemCost;
		crucible += 1;
		crucibleGemCost = Math.floor(7000 * Math.pow(1.1,crucible + 1));
		crucibleSpaceMetalCost = Math.floor(4000 * Math.pow(1.1,crucible + 1));
		document.getElementById("crucible").innerHTML = crucible;
		document.getElementById("crucibleSpaceMetalCost").innerHTML = commafy(crucibleSpaceMetalCost);
		document.getElementById("crucibleGemCost").innerHTML = commafy(crucibleGemCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getExtractor(){
	if(spaceMetal >= extractorSpaceMetalCost && titanium >= extractorTitaniumCost && silicon >= extractorSiliconCost){
		spaceMetal -= extractorSpaceMetalCost;
		titanium -= extractorTitaniumCost;
		silicon -= extractorSiliconCost;
		extractor += 1;
		extractorSiliconCost = Math.floor(6000 * Math.pow(1.1,extractor + 1));
		extractorTitaniumCost = Math.floor(12000 * Math.pow(1.1,extractor + 1));
		extractorSpaceMetalCost = Math.floor(14000 * Math.pow(1.1,extractor + 1));
		document.getElementById("extractor").innerHTML = extractor;
		document.getElementById("extractorSpaceMetalCost").innerHTML = commafy(extractorSpaceMetalCost);
		document.getElementById("extractorTitaniumCost").innerHTML = commafy(extractorTitaniumCost);
		document.getElementById("extractorSiliconCost").innerHTML = commafy(extractorSiliconCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getCollector(){
	if(spaceMetal >= collectorSpaceMetalCost && titanium >= collectorTitaniumCost){
		spaceMetal -= collectorSpaceMetalCost;
		titanium -= collectorTitaniumCost;
		collector += 1;
		collectorTitaniumCost = Math.floor(8000 * Math.pow(1.1,collector + 1));
		collectorSpaceMetalCost = Math.floor(10000 * Math.pow(1.1,collector + 1));
		document.getElementById("collector").innerHTML = collector;
		document.getElementById("collectorSpaceMetalCost").innerHTML = commafy(collectorSpaceMetalCost);
		document.getElementById("collectorTitaniumCost").innerHTML = commafy(collectorTitaniumCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getMagnet(){
	if(spaceMetal >= magnetSpaceMetalCost && titanium >= magnetTitaniumCost && gold >= magnetGoldCost){
		spaceMetal -= magnetSpaceMetalCost;
		titanium -= magnetTitaniumCost;
		gold -= magnetGoldCost;
		magnet += 1;
		magnetGoldCost = Math.floor(11000 * Math.pow(1.1,magnet + 1));
		magnetTitaniumCost = Math.floor(16000 * Math.pow(1.1,magnet + 1));
		magnetSpaceMetalCost = Math.floor(18000 * Math.pow(1.1,magnet + 1));
		document.getElementById("magnet").innerHTML = magnet;
		document.getElementById("magnetSpaceMetalCost").innerHTML = commafy(magnetSpaceMetalCost);
		document.getElementById("magnetTitaniumCost").innerHTML = commafy(magnetTitaniumCost);
		document.getElementById("magnetGoldCost").innerHTML = commafy(magnetGoldCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

function getDrone(){
	if(spaceMetal >= droneSpaceMetalCost && silicon >= droneSiliconCost){
		spaceMetal -= droneSpaceMetalCost;
		silicon -= droneSiliconCost;
		drone += 1;
		droneTitaniumCost = Math.floor(8000 * Math.pow(1.1,drone + 1));
		droneSpaceMetalCost = Math.floor(10000 * Math.pow(1.1,drone + 1));
		document.getElementById("drone").innerHTML = drone;
		document.getElementById("droneSpaceMetalCost").innerHTML = commafy(droneSpaceMetalCost);
		document.getElementById("droneSiliconCost").innerHTML = commafy(droneSiliconCost);
		refresh();
		refreshPerSec();
		tier1 += 1;
	}
}

function getTanker(){
	if(spaceMetal >= tankerSpaceMetalCost && titanium >= tankerTitaniumCost && silicon >= tankerSiliconCost){
		spaceMetal -= tankerSpaceMetalCost;
		titanium -= tankerTitaniumCost;
		silicon -= tankerSiliconCost;
		tanker += 1;
		tankerSiliconCost = Math.floor(11000 * Math.pow(1.1,tanker + 1));
		tankerTitaniumCost = Math.floor(16000 * Math.pow(1.1,tanker + 1));
		tankerSpaceMetalCost = Math.floor(18000 * Math.pow(1.1,tanker + 1));
		document.getElementById("tanker").innerHTML = tanker;
		document.getElementById("tankerSpaceMetalCost").innerHTML = commafy(tankerSpaceMetalCost);
		document.getElementById("tankerTitaniumCost").innerHTML = commafy(tankerTitaniumCost);
		document.getElementById("tankerSiliconCost").innerHTML = commafy(tankerSiliconCost);
		refresh();
		refreshPerSec();
		tier2 += 1;
	}
}

// Research Tab

function buildLab(){
	if(wood >= labWoodCost && gem >= labGemCost && metal >= labMetalCost){
		wood -= labWoodCost;
		gem -= labGemCost;
		metal -= labMetalCost;
		lab += 1;
		labWoodCost = Math.floor(10 * Math.pow(1.1,lab + 1));
		labGemCost = Math.floor(15 * Math.pow(1.1,lab + 1));
		labMetalCost = Math.floor(20 * Math.pow(1.1,lab + 1));
		document.getElementById("lab").innerHTML = lab;
		document.getElementById("labWoodCost").innerHTML = commafy(labWoodCost);
		document.getElementById("labGemCost").innerHTML = commafy(labGemCost);
		document.getElementById("labMetalCost").innerHTML = commafy(labMetalCost);
		refresh();
		refreshPerSec();
	}
}


function unlockStorage(){
	if(science >= 5){
		science -= 5;
		document.getElementById("unlockStorage").className = "hidden";
		document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("charcoalStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
		document.getElementById("unlockOil").className = "";
		available.push("unlockOil");
		researched.push("unlockStorage");
	}
}

function unlockBasicEnergy(){
	if(science >= 20){
		science -= 20;
		document.getElementById("charcoalNav").className = "earth";
		document.getElementById("energyNav").className = "";
		document.getElementById("metalNav0").style.border = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		document.getElementById("oilNav0").style.border = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
		document.getElementById("oilNav3").style.border = "";
		document.getElementById("unlockBasicEnergy").className = "hidden";
		document.getElementById("unlockSolar").className = "";
		document.getElementById("unlockMachines").className = "";
		document.getElementById("upgradeEngineTech").className = "";
		resourcesUnlocked.push("energyNav", "charcoalNav");
		noBorder.push("metalNav");
		if(contains(noBorder, "oilNav") === true){
			noBorder.push("oilNav");
		}
		available.push("unlockSolar", "unlockMachines", "upgradeEngineTech");
		researched.push("unlockBasicEnergy");
		refreshResources();
	}
}

function unlockOil(){
	if(science >= 30){
		science -= 30;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "earth";
		document.getElementById("metalNav0").style.border = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		refresh();
		resourcesUnlocked.push("oilNav");
		noBorder.push("metalNav");
		researched.push("unlockOil");
		refreshResources();
	}
}

function unlockSolar(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockSolar").className = "hidden";
		document.getElementById("solarPower").className = "";
		document.getElementById("upgradeSolarTech").className = "";
		available.push("upgradeSolarTech");
		researched.push("unlockSolar");
	}
}

function unlockMachines(){
	if(science >= 100){
		science -= 100;
		document.getElementById("unlockMachines").className = "hidden";
		document.getElementById("upgradeResourceTech").className = "";
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
		document.getElementById("unlockSolarSystem").className = "";
		available.push("unlockSolarSystem", "upgradeResourceTech");
		researched.push("unlockMachines");
	}
}

function upgradeResourceTech(){
	if(science >= 300){
		science -= 300;
		pumpjackOutput *= 2;
		heavyDrillOutput *= 2;
		advancedDrillOutput *= 2;
		furnaceWoodInput *= 2;
		furnaceOutput *= 2;
		laserCutterOutput *= 2;
		document.getElementById("upgradeResourceTech").className = "hidden";
		document.getElementById("pumpjackOutput").innerHTML = pumpjackOutput;
		document.getElementById("heavyDrillOutput").innerHTML = heavyDrillOutput;
		document.getElementById("advancedDrillOutput").innerHTML = advancedDrillOutput;
		document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
		document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
		document.getElementById("laserCutterOutput").innerHTML = laserCutterOutput;
		researched.push("upgradeResourceTech");
	}
}

function unlockSolarSystem(){
	if(science >= 500){
		science -= 500;
		document.getElementById("unlockSolarSystem").className = "hidden";
		document.getElementById("solarSystemTab").className = "";
		tabsUnlocked.push("solarSystemTab");
		researched.push("unlockSolarSystem");
	}
}

function upgradeEngineTech(){
	if(science >= 1000){
		science -= 1000;
		document.getElementById("upgradeEngineTech").className = "hidden";
		charcoalEngineOutput = 4;
		document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
		researched.push("upgradeEngineTech");
	}
}

function upgradeSolarTech(){
	if(science >= 5000){
		science -= 5000;
		document.getElementById("upgradeSolarTech").className = "hidden";
		solarPanelOutput = 3;
		document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
		researched.push("upgradeSolarTech");
	}
}

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
		refreshResources();
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
		refreshResources();
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
		refreshResources();
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
		refreshResources();
	}
}

function exploreWonderStation(){
	if(rocketFuel >= 500){
		rocketFuel -= 500;
		document.getElementById("wonderTab").className = "";
		document.getElementById("exploreWonderStation").className = "hidden";
		buttonsHidden.push("exploreWonderStation");
		explored.push("wonderStation");
		tabsUnlocked.push("wonderTab");
	}
}

function exploreJupiter(){
	if(rocketFuel >= 1000){
		rocketFuel -= 1000;
		document.getElementById("exploreJupiter").className = "hidden";
		document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
		document.getElementById("hydrogenNav").className = "outerPlanet";
		resourcesUnlocked.push("hydrogenNav", "collapseOuterPlanet");
		buttonsHidden.push("exploreJupiter");
		explored.push("jupiter");
		refreshResources();
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
		refreshResources();
	}
}

// Wonders Tab

function refreshWonderBars(){
	if(contains(resourcesUnlocked, "preciousWonderNav") === false){
		if(gem >= 10000){
			var preciousGem = 10000;
		}
		else{preciousGem = gem;}
		if(silver >= 7500){
			var preciousSilver = 7500;
		}
		else{preciousSilver = silver;}
		if(gold >= 5000){
			var preciousGold = 5000;
		}
		else{preciousGold = gold;}
		var preciousBar = (preciousGem+preciousSilver+preciousGold)/225;
		if(preciousBar <= 100){
			document.getElementById("preciousBar").innerHTML = commafy(preciousBar) + "%";
			document.getElementById("preciousBar").style.width = preciousBar + "%";
		}
		else{
			document.getElementById("preciousBar").innerHTML = "100%";
			document.getElementById("preciousBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activatePreciousWonder").className === "hidden") === false){
		if(gem >= 30000){
			var preciousActivateGem = 30000;
		}
		else{preciousActivateGem = gem;}
		if(silver >= 20000){
			var preciousActivateSilver = 20000;
		}
		else{preciousActivateSilver = silver;}
		if(gold >= 10000){
			var preciousActivateGold = 10000;
		}
		else{preciousActivateGold = gold;}
		var preciousActivateBar = (preciousActivateGem+preciousActivateSilver+preciousActivateGold)/600;
		if(preciousActivateBar <= 100){
			document.getElementById("preciousActivateBar").innerHTML = commafy(preciousActivateBar) + "%";
			document.getElementById("preciousActivateBar").style.width = preciousActivateBar + "%";
		}
		else{
			document.getElementById("preciousActivateBar").innerHTML = "100%";
			document.getElementById("preciousActivateBar").style.width = 100 + "%";
		}
	}
	if(contains(resourcesUnlocked, "energeticWonderNav") === false){
		if(wood >= 10000){
			var energeticWood = 10000;
		}
		else{energeticWood = wood;}
		if(charcoal >= 5000){
			var energeticCharcoal = 5000;
		}
		else{energeticCharcoal = charcoal;}
		if(uranium >= 200){
			var energeticUranium = 200;
		}
		else{energeticUranium = uranium;}
		var energeticBar = (energeticWood+energeticCharcoal+energeticUranium)/152;
		if(energeticBar <= 100){
			document.getElementById("energeticBar").innerHTML = commafy(energeticBar) + "%";
			document.getElementById("energeticBar").style.width = energeticBar + "%";
		}
		else{
			document.getElementById("energeticBar").innerHTML = "100%";
			document.getElementById("energeticBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activateEnergeticWonder").className === "hidden") === false){
		if(wood >= 30000){
			var energeticActivateGem = 30000;
		}
		else{energeticActivateGem = gem;}
		if(charcoal >= 15000){
			var energeticActivateSilver = 15000;
		}
		else{energeticActivateSilver = silver;}
		if(uranium >= 500){
			var energeticActivateGold = 500;
		}
		else{energeticActivateGold = gold;}
		var energeticActivateBar = (energeticActivateGem+energeticActivateSilver+energeticActivateGold)/455;
		if(energeticActivateBar <= 100){
			document.getElementById("energeticActivateBar").innerHTML = commafy(energeticBar) + "%";
			document.getElementById("energeticActivateBar").style.width = energeticBar + "%";
		}
		else{
			document.getElementById("energeticActivateBar").innerHTML = "100%";
			document.getElementById("energeticActivateBar").style.width = 100 + "%";
		}
	}
}

function achievePreciousWonder(){
	if(gem >= 10000 && silver >= 7500 && gold >= 5000){
		gem-= 10000;
		silver -= 7500;
		gold -= 5000;
		document.getElementById("preciousWonderButton").className = "hidden";
		document.getElementById("preciousProgress").className = "hidden";
		document.getElementById("preciousWonderNav").className = "";
		document.getElementById("wonderFloor1Nav").className = "";
		buttonsHidden.push("preciousProgress", "preciousWonderButton");
		resourcesUnlocked.push("preciousWonderNav", "wonderFloor1Nav");
	}
}

function activatePreciousWonder(){
	if(gem >= 30000 && silver >= 20000 && gold >= 10000){
		gem -= 30000;
		silver -= 20000;
		gold -= 10000;
		document.getElementById("nuclearPower").className = "";
		document.getElementById("activatePreciousWonder").className = "hidden";
		document.getElementById("uraniumNav").className = "innerPlanet";
		document.getElementById("preciousActivation").innerHTML = "Activated";
		resourcesUnlocked.push("uraniumNav", "nuclearPower");
		buttonsHidden.push("activatePreciousWonder");
		activated.push("precious");
		refreshResources();
	}
}

function achieveEnergeticWonder(){
	if(wood >= 10000 && charcoal >= 5000 && uranium >= 200){
		wood-= 10000;
		charcoal -= 5000;
		uranium -= 200;
		document.getElementById("energeticWonderButton").className = "hidden";
		document.getElementById("energeticProgress").className = "hidden";
		document.getElementById("energeticWonderNav").className = "";
		buttonsHidden.push("energeticProgress", "energeticWonderButton");
		resourcesUnlocked.push("energeticWonderNav");
	}
}

function activateEnergeticWonder(){
	if(wood >= 30000 && charcoal >= 15000 && uranium >= 500){
		wood -= 30000;
		charcoal -= 15000;
		uranium -= 500;
		document.getElementById("magmaticPower").className = "";
		document.getElementById("activateEnergeticWonder").className = "hidden";
		document.getElementById("lavaNav").className = "innerPlanet";
		document.getElementById("energeticActivation").innerHTML = "Activated";
		resourcesUnlocked.push("lavaNav", "magmaticPower");
		buttonsHidden.push("activateEnergeticWonder");
		activated.push("energetic");
	}
}

// Collapses Earth and Space Metals

$('.collapseEarth').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInnerPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuterPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet hidden";
        }
        $(this).addClass("collapsed");
    }
});

window.onload = function(){
	load('local');
};

window.setInterval(function(){
	if(statsTimer >= 11){
		refreshStats();
		statsTimer = 0;
	}
	statsTimer += 1;
	refreshPerSec();
	gainResources();
	refresh();
	autosave();
	refreshWonderBars();
	checkRedCost();
},100);