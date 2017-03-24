// Variables in save function

var energy = 0; var energyps = 0;
var charcoalEngine = 0; var charcoalEngineMetalCost = 50; var charcoalEngineGemCost = 25;
var solarPanel = 0; var solarPanelMetalCost = 30; var solarPanelGemCost = 35;
var methaneStation = 0; var methaneStationSpaceMetalCost = 50; var methaneStationTitaniumCost = 40;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilps = 0;
var pump = 0; var pumpMetalCost = 60; var pumpGemCost = 20; var pumpjack = 0; var pumpjackMetalCost = 250; var pumpjackGemCost = 80; var pumpjackOilCost = 50; var pumpjackOutput = 5;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalps = 0;
var miner = 0; var minerMetalCost = 10; var minerWoodCost = 5; var heavyDrill = 0; var heavyDrillMetalCost = 160; var heavyDrillGemCost = 60; var heavyDrillOilCost = 50; var heavyDrillOutput = 8;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemps = 0;
var gemMiner = 0; var gemMinerMetalCost = 15; var gemMinerGemCost = 10; var advancedDrill = 0; var advancedDrillMetalCost = 120; var advancedDrillGemCost = 200; var advancedDrillOilCost = 60; var advancedDrillOutput = 4;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalps = 0;
var woodburner = 0; var woodburnerMetalCost = 10; var woodburnerWoodCost = 5; var furnace = 0; var furnaceMetalCost = 80; var furnaceWoodCost = 40; var furnaceOilCost = 100; var furnaceWoodInput = 5; var furnaceOutput = 3;
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
var researchUnlocked = false; var researched = []; var available = ["unlockStorage", "unlockBasicEnergy"];
var tabsUnlocked = []; var resourcesUnlocked = []; var noBorder = []; var rocketLaunched = false; var buttonsHidden = [];

// Variables not in save function
	//Empty

function save(){
	"use strict";
	var save = {
		energy: energy,
		energyps: energyps,
		charcoalEngine: charcoalEngine,
		charcoalEngineMetalCost: charcoalEngineMetalCost,
		charcoalEngineGemCost: charcoalEngineGemCost,
		solarPanel: solarPanel,
		solarPanelMetalCost: solarPanelMetalCost,
		solarPanelGemCost: solarPanelGemCost,
		methaneStation: methaneStation,
		methaneStationSpaceMetalCost: methaneStationSpaceMetalCost,
		methaneStationTitaniumCost: methaneStationTitaniumCost,
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
	};
	localStorage.setItem("save",JSON.stringify(save));
	document.getElementById("saveButton").className = "btn btn-primary pull-right disabled";
	saved = true;
}

function load(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
	if(savegame){
		if(typeof savegame.energy !== "undefined") energy = savegame.energy;
		if(typeof savegame.energyps !== "undefined") energyps = savegame.energyps;
		if(typeof savegame.charcoalEngine !== "undefined") charcoalEngine = savegame.charcoalEngine;
		if(typeof savegame.charcoalEngineMetalCost !== "undefined") charcoalEngineMetalCost = savegame.charcoalEngineMetalCost;
		if(typeof savegame.charcoalEngineGemCost !== "undefined") charcoalEngineGemCost = savegame.charcoalEngineGemCost;
		if(typeof savegame.solarPanel !== "undefined") solarPanel = savegame.solarPanel;
		if(typeof savegame.solarPanelMetalCost !== "undefined") solarPanelMetalCost = savegame.solarPanelMetalCost;
		if(typeof savegame.solarPanelGemCost !== "undefined") solarPanelGemCost = savegame.solarPanelGemCost;
		if(typeof savegame.methaneStation !== "undefined") methaneStation = savegame.methaneStation;
		if(typeof savegame.methaneStationSpaceMetalCost !== "undefined") methaneStationSpaceMetalCost = savegame.methaneStationSpaceMetalCost;
		if(typeof savegame.methaneStationTitaniumCost !== "undefined") methaneStationTitaniumCost = savegame.methaneStationTitaniumCost;
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
		if(typeof savegame.buttonsHidden !== "undefined") buttonsHidden = savegame.buttonsHidden;
	}

	refreshUI();
	refreshResources();
	refreshResearches();
	refreshTabs();

	document.getElementById("loadButton").className = "btn btn-primary pull-right disabled";
	loaded = true;
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
}

function refreshPerSec(){
	var energyInput = charcoalEngine+(solarPanel*0.5)+(methaneStation*8);
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
		energyInput -= methaneStation*8;
	}
	var energyOutput = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(furnace*3)+(laserCutter*4)+(moonDrill*10)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	if(energy <= 1){
		energyps = energyInput;
	}
	if(energy >= 10 || energyps <= 0){
		energyps = energyInput-energyOutput;
		oilps = pump + (pumpjack*pumpjackOutput);
		metalps = miner + (heavyDrill*heavyDrillOutput);
		gemps = gemMiner + (advancedDrill*advancedDrillOutput);
		charcoalps = woodburner + (furnace*furnaceOutput);
		woodps = woodcutter + (laserCutter*laserCutterOutput);
		scienceps = (lab*labGain);
		spaceMetalps = moonWorker + (moonDrill * 10);
		methaneps = vacuum + (suctionExcavator * 7);
		titaniumps = explorer + (spaceMetalDrill * 6);
		goldps = droid + (destroyer * 8);
		silverps = scout + (spaceLaser * 13);
		siliconps = blowtorch + (scorcher * 9);
	}
	if(energy <= 10){
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
	}
	document.getElementById("energyps").innerHTML = commafy(energyps);
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
	document.getElementById("charcoalps").innerHTML = commafy(charcoalps - charcoalEngine - (chemicalPlant*20));
	if(charcoal >= charcoalStorage){
		document.getElementById("woodps").innerHTML = commafy(woodps);
		document.getElementById("charcoalps").innerHTML = 0;
	}
	else{
		document.getElementById("woodps").innerHTML = commafy(woodps - (woodburner*2) - (furnace*furnaceWoodInput));
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
}


function refreshUI(){
	document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
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
	document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
	document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
	document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
	document.getElementById("solarPanel").innerHTML = solarPanel;
	document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
	document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
	document.getElementById("methaneStation").innerHTML = methaneStation;
	document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
	document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
	document.getElementById("pump").innerHTML = pump;
	document.getElementById("pumpMetalCost").innerHTML = commafy(pumpMetalCost);
	document.getElementById("pumpGemCost").innerHTML = commafy(pumpGemCost);
	document.getElementById("pumpjack").innerHTML = pumpjack;
	document.getElementById("pumpjackOilCost").innerHTML = commafy(pumpjackOilCost);
	document.getElementById("pumpjackGemCost").innerHTML = commafy(pumpjackGemCost);
	document.getElementById("pumpjackMetalCost").innerHTML = commafy(pumpjackMetalCost);
	document.getElementById("miner").innerHTML = miner;
	document.getElementById("minerMetalCost").innerHTML = commafy(minerMetalCost);
	document.getElementById("minerWoodCost").innerHTML = commafy(minerWoodCost);
	document.getElementById("heavyDrill").innerHTML = heavyDrill;
	document.getElementById("heavyDrillMetalCost").innerHTML = commafy(heavyDrillMetalCost);
	document.getElementById("heavyDrillGemCost").innerHTML = commafy(heavyDrillGemCost);
	document.getElementById("heavyDrillOilCost").innerHTML = commafy(heavyDrillOilCost);
	document.getElementById("gemMiner").innerHTML = gemMiner;
	document.getElementById("gemMinerMetalCost").innerHTML = commafy(gemMinerMetalCost);
	document.getElementById("gemMinerGemCost").innerHTML = commafy(gemMinerGemCost);
	document.getElementById("advancedDrill").innerHTML = advancedDrill;
	document.getElementById("advancedDrillMetalCost").innerHTML = commafy(advancedDrillMetalCost);
	document.getElementById("advancedDrillGemCost").innerHTML = commafy(advancedDrillGemCost);
	document.getElementById("advancedDrillOilCost").innerHTML = commafy(advancedDrillOilCost);
	document.getElementById("woodburner").innerHTML = woodburner;
	document.getElementById("woodburnerMetalCost").innerHTML = commafy(woodburnerMetalCost);
	document.getElementById("woodburnerWoodCost").innerHTML = commafy(woodburnerWoodCost);
	document.getElementById("furnace").innerHTML = furnace;
	document.getElementById("furnaceMetalCost").innerHTML = commafy(furnaceMetalCost);
	document.getElementById("furnaceWoodCost").innerHTML = commafy(furnaceWoodCost);
	document.getElementById("furnaceOilCost").innerHTML = commafy(furnaceOilCost);
	document.getElementById("woodcutter").innerHTML = woodcutter;
	document.getElementById("woodcutterMetalCost").innerHTML = commafy(woodcutterMetalCost);
	document.getElementById("woodcutterWoodCost").innerHTML = commafy(woodcutterWoodCost);
	document.getElementById("laserCutter").innerHTML = laserCutter;
	document.getElementById("laserCutterMetalCost").innerHTML = commafy(laserCutterMetalCost);
	document.getElementById("laserCutterGemCost").innerHTML = commafy(laserCutterGemCost);
	document.getElementById("laserCutterOilCost").innerHTML = commafy(laserCutterOilCost);
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
}

function refreshResources(){
	for(i=0; i<resourcesUnlocked.length; i++){
		document.getElementById(resourcesUnlocked[i]).className = "";
	}
	for(i=0; i<noBorder.length; i++){
		for(j=0; j<4; j++){
			document.getElementById(noBorder[i] + j).style.border = "";
		}
	}
}

function refreshResearches(){
	for(i=0; i<available.length; i++){
		document.getElementById(available[i]).className = "";
	}
	for(i=0; i<researched.length; i++){
		document.getElementById(researched[i]).className = "hidden";
	}
}

function refreshTabs(){
	for(i=0; i<tabsUnlocked.length; i++){
 		document.getElementById(tabsUnlocked[i]).className -= "hidden";
 	}
 	if(rocketLaunched === true){
 		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("moon").className = "";
		document.getElementById("venus").className = "";
		document.getElementById("mars").className = "";
		document.getElementById("asteroidBelt").className = "";
 	}
 	for(i=0; i<buttonsHidden.length; i++){
 		document.getElementById(buttonsHidden[i]).className += "hidden";
 	}
}

function gainResources(){
	energy += energyps/10;
	if(oil + oilps/10 < oilStorage){
		oil += oilps/10;
	}
	else{
		oil = oilStorage;
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
	if(charcoal + charcoalps/10 < charcoalStorage && wood + woodps/10 >= (charcoalps*2/10)){
		charcoal += charcoalps/10;
		wood -= (charcoalps*2)/10;
	}
	else{
		var difference = charcoalStorage - charcoal;
		if(wood >= difference*2){
			if(charcoal + difference < charcoalStorage){
				charcoal += difference;
			}
			else{
				charcoal = charcoalStorage;
			}
			wood -= difference*2;
		}	
	}
	if(wood + woodps/10 < woodStorage){
		wood += woodps/10;
	}
	else{
		wood = woodStorage;
	}
	science += scienceps/10;
	science = Math.round(science*100)/100;
	if(oil >= chemicalPlant*20/10 && charcoal >= chemicalPlant*20/10){
		oil -= chemicalPlant*20/10;
		charcoal -= chemicalPlant*20/10
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
}

// Gain Buttons

function gainOil(){
	if(oil < oilStorage){
		oil += 1;
		refresh();
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += 1;
		refresh();
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += 1;
		refresh();
	}
}

function gainCharcoal(){
	if(charcoal < charcoalStorage && wood >= 2){
		wood -= 2;
		charcoal += 1;
		refresh();
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += 1;
		refresh();
	}
}

function gainSpaceMetal(){
	if(spaceMetal < spaceMetalStorage){
		spaceMetal += 1;
		refresh();
	}
}

function gainMethane(){
	if(methane < methaneStorage){
		methane += 1;
		refresh();
	}
}

function gainTitanium(){
	if(titanium < titaniumStorage){
		titanium += 1;
		refresh();
	}
}

function gainGold(){
	if(gold < goldStorage){
		gold += 1;
		refresh();
	}
}

function gainSilver(){
	if(silver < silverStorage){
		silver += 1;
		refresh();
	}
}

function gainSilicon(){
	if(silicon < siliconStorage){
		silicon += 1;
		refresh();
	}
}

// Resources Tab

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
		metal -= metalStorage/2.5;
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
	if(titanium >= titaniumStorage && Metal >= titaniumStorage/2.5){
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
	if(gold >= Storage && spaceMetal >= goldStorage/2.5){
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
	if(silver >= Storage && spaceMetal >= silverStorage/2.5){
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

function getCharcoalEngine(){
	if(metal >= charcoalEngineMetalCost && gem >= charcoalEngineGemCost){
		metal -= charcoalEngineMetalCost;
		gem -= charcoalEngineGemCost;
		charcoalEngine += 1;
		charcoalEngineMetalCost = Math.floor(60 * Math.pow(1.1,charcoalEngine + 1));
		charcoalEngineGemCost = Math.floor(20 * Math.pow(1.1,charcoalEngine + 1));
		document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
		document.getElementById("charcoalEngineMetalCost").innerHTML = commafy(charcoalEngineMetalCost);
		document.getElementById("charcoalEngineGemCost").innerHTML = commafy(charcoalEngineGemCost);
		refresh();
		refreshPerSec();
	}
}

function getSolarPanel(){
	if(metal >= solarPanelMetalCost && gem >= solarPanelGemCost){
		metal -= solarPanelMetalCost;
		gem -= solarPanelGemCost;
		solarPanel += 1;
		solarPanelMetalCost = Math.floor(60 * Math.pow(1.1,solarPanel + 1));
		solarPanelGemCost = Math.floor(20 * Math.pow(1.1,solarPanel + 1));
		document.getElementById("solarPanel").innerHTML = solarPanel;
		document.getElementById("solarPanelMetalCost").innerHTML = commafy(solarPanelMetalCost);
		document.getElementById("solarPanelGemCost").innerHTML = commafy(solarPanelGemCost);
		refresh();
		refreshPerSec();
	}
}

function getMethaneStation(){
	if(spaceMetal >= methaneStationSpaceMetalCost && titanium >= methaneStationTitaniumCost){
		spaceMetal -= methaneStationSpaceMetalCost;
		titanium -= methaneStationTitaniumCost;
		methaneStation += 1;
		methaneStationMetalCost = Math.floor(60 * Math.pow(1.1,methaneStation + 1));
		methaneStationTitaniumCost = Math.floor(20 * Math.pow(1.1,methaneStation + 1));
		document.getElementById("methaneStation").innerHTML = methaneStation;
		document.getElementById("methaneStationSpaceMetalCost").innerHTML = commafy(methaneStationSpaceMetalCost);
		document.getElementById("methaneStationTitaniumCost").innerHTML = commafy(methaneStationTitaniumCost);
		refresh();
		refreshPerSec();
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
	}
}

function getMoonWorker(){
	if(gem >= moonWorkerGemCost){
		gem -= moonWorkerGemCost;
		moonWorker += 1;
		GemCost = Math.floor(500 * Math.pow(1.1,moonWorker + 1));
		document.getElementById("moonWorker").innerHTML = moonWorker;
		document.getElementById("moonWorkerGemCost").innerHTML = commafy(moonWorkerGemCost);
		refresh();
		refreshPerSec();
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
	}
}

function getSuctionExcavator(){
	if(spaceMetal >= suctionExcavatorSpaceMetalCost && gem >= suctionExcavatorGemCost && oil >= suctionExcavatorOilCost){
		spaceMetal -= suctionExcavatorSpaceMetalCost;
		gem -= suctionExcavatorGemCost;
		oil -= suctionExcavatorOilCost;
		XXXX += 1;
		OilCost = Math.floor(600 * Math.pow(1.1,suctionExcavator + 1));
		GemCost = Math.floor(800 * Math.pow(1.1,suctionExcavator + 1));
		spaceMetalCost = Math.floor(100 * Math.pow(1.1,suctionExcavator + 1));
		document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
		document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = commafy(suctionExcavatorSpaceMetalCost);
		document.getElementById("suctionExcavatorGemCost").innerHTML = commafy(suctionExcavatorGemCost);
		document.getElementById("suctionExcavatorOilCost").innerHTML = commafy(suctionExcavatorOilCost);
		refresh();
		refreshPerSec();
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
	}
}

function getDroid(){
	if(spaceMetal >= droidSpaceMetalCost && methane >= droidMethaneCost){
		spaceMetal -= droidSpaceMetalCost;
		methane -= MethaneCost;
		droid += 1;
		droidMethaneCost = Math.floor(50 * Math.pow(1.1,droid + 1));
		droidSpaceMetalCost = Math.floor(200 * Math.pow(1.1,droid + 1));
		document.getElementById("droid").innerHTML = droid;
		document.getElementById("droidSpaceMetalCost").innerHTML = commafy(droidSpaceMetalCost);
		document.getElementById("droidMethaneCost").innerHTML = commafy(droidMethaneCost);
		refresh();
		refreshPerSec();
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
	}
}

function getScout(){
	if(spaceMetal >= scoutSpaceMetalCost && titanium >= scoutTitaniumCost){
		spaceMetal -= scoutSpaceMetalCost;
		titanium -= scoutTitaniumCost;
		scout += 1;
		scoutTitaniumCost = Math.floor(20 * Math.pow(1.1,scout + 1));
		SpaceMetalCost = Math.floor(100 * Math.pow(1.1,scout + 1));
		document.getElementById("scout").innerHTML = scout;
		document.getElementById("scoutSpaceMetalCost").innerHTML = commafy(scoutSpaceMetalCost);
		document.getElementById("scoutTitaniumCost").innerHTML = commafy(scoutTitaniumCost);
		refresh();
		refreshPerSec();
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
		function researchStorage(check){
			return check != "unlockStorage"
		}
	}
}

function unlockBasicEnergy(){
	if(science >= 20){
		science -= 20;
		document.getElementById("charcoalNav").className = "";
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
		resourcesUnlocked.push("energyNav");
		noBorder.push("metalNav");
		if($.inArray("oilNav", noBorder) === -1){
			noBorder.push("oilNav");
		}
		available.push("unlockSolar", "unlockMachines");
		researched.push("unlockBasicEnergy");
		function researchStorage(check){
			return check != "unlockBasicEnergy"
		}
	}
}

function unlockOil(){
	if(science >= 30){
		science -= 30;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav0").style.border = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		refresh();
		resourcesUnlocked.push("oilNav");
		noBorder.push("metalNav");
		researched.push("unlockOil");
		function researchStorage(check){
			return check != "unlockOil"
		}
	}
}

function unlockSolar(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockSolar").className = "hidden";
		document.getElementById("solarPower").className = "";
		researched.push("unlockSolar");
		function researchStorage(check){
			return check != "unlockSolar"
		}
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
		document.getElementById("unlockSpace").className = "";
		available.push("unlockSpace", "upgradeResourceTech");
		researched.push("unlockMachines");
		function researchStorage(check){
			return check != "unlockMachines"
		}
	}
}

function upgradeResourceTech(){
	if(science >= 200){
		science -= 200;
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
		function researchStorage(check){
			return check != "upgradeResourceTech"
		}
	}
}

function unlockSolarSystem(){
	if(science >= 500){
		science -= 500;
		document.getElementById("unlockSolarSystem").className = "hidden";
		document.getElementById("solarSystemTab").className = "";
		tabsUnlocked.push("solarSystemTab")
		researched.push("unlockSpace");
		function researchStorage(check){
			return check != "unlockSpace"
		}
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
		document.getElementById("spaceMetalNav").className = "";
		resourcesUnlocked.push("spaceMetalNav");
		buttonsHidden.push("exploreMoon");
	}
}

function exploreVenus(){
	if(rocketFuel >= 50){
		rocketFuel -= 50;
		document.getElementById("exploreVenus").className = "hidden";
		document.getElementById("methaneNav").className = "";
		resourcesUnlocked.push("methaneNav");
		buttonsHidden.push("exploreVenus");
	}
}

function exploreMars(){
	if(rocketFuel >= 80){
		rocketFuel -= 80;
		document.getElementById("exploreMars").className = "hidden";
		document.getElementById("titaniumNav").className = "";
		document.getElementById("siliconNav").className = "";
		document.getElementById("methanePower").className = "";
		resourcesUnlocked.push("titaniumNav");
		resourcesUnlocked.push("siliconNav");
		buttonsHidden.push("exploreMars");
	}
}

function exploreAsteroidBelt(){
	if(rocketFuel >= 200){
		rocketFuel -= 200;
		document.getElementById("exploreAsteroidBelt").className = "hidden";
		document.getElementById("wonderStation").className = "";
		document.getElementById("goldNav").className = "";
		document.getElementById("silverNav").className = "";
		resourcesUnlocked.push("goldNav");
		resourcesUnlocked.push("silverNav");
		buttonsHidden.push("exploreAsteroidBelt");

	}
}

function exploreWonderStation(){
	if(rocketFuel >= 500){
		rocketFuel -= 500;
		document.getElementById("wonderTab").className = "hidden";
		document.getElementById("exploreWonderStation").className = "";
	}
}

// Wonders Tab



window.onload = function(){
	load();
};

var timer = 0;
var timer2 = 0;
var saveTimer = 0;
var secondsLeft = 0;
var saved = false;
var loaded = false;

window.setInterval(function(){
	refreshPerSec();
	gainResources();
	refresh();
	if(saved === true){
		timer += 1
		if(timer >= 20){
			saved === false;
			document.getElementById("saveButton").className = "btn btn-primary pull-right";
			timer = 0;
		}
	}
	if(loaded === true){
		timer2 += 1
		if(timer2 >= 20){
			loaded === false;
			document.getElementById("loadButton").className = "btn btn-primary pull-right";
			timer2 = 0;
		}
	}
	if(saveTimer >= 1200){
		save();
		saveTimer = 0;
		document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
	}
	else{
		if(saveTimer === 600){
			document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 1 minute";
		}
		if(saveTimer >= 1100){
			secondsLeft = commafy((1200 - saveTimer)/10);
			document.getElementById("autoSaveTimer").innerHTML = "Autosaving in " + secondsLeft + " seconds";
		}
		saveTimer += 1;
	}
},100);