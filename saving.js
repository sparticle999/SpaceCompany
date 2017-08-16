function legacySave(data) {
	"use strict";
	var localSave = $.extend({
		versionNumber: versionNumber,
		companyName: companyName,
		plasma: plasma,
		PSU: PSU,
		PSUT2: PSUT2,
		heater: heater,
		heaterToggled: heaterToggled,
		plasmatic: plasmatic,
		plasmaticToggled: plasmaticToggled,
		energy: energy,
		battery: battery,
		batteryT2: batteryT2,
		batteryT3: batteryT3,
		batteryT4: batteryT4,
		charcoalEngine: charcoalEngine,
		charcoalEngineOutput: charcoalEngineOutput,
		solarPanel: solarPanel,
		solarPanelOutput: solarPanelOutput,
		methaneStation: methaneStation,
		nuclearStation: nuclearStation,
		magmatic: magmatic,
		fusionReactor: fusionReactor,
		oil: oil,
		oilStorage: oilStorage,
		oilNextStorage: oilNextStorage,
		pump: pump,
		pumpjack: pumpjack,
		pumpjackOutput: pumpjackOutput,
		oilField: oilField,
		oilRig: oilRig,
		metal: metal,
		metalStorage: metalStorage,
		metalNextStorage: metalNextStorage,
		miner: miner,
		heavyDrill: heavyDrill,
		heavyDrillOutput: heavyDrillOutput,
		gigaDrill: gigaDrill,
		quantumDrill: quantumDrill,
		gem: gem,
		gemStorage: gemStorage,
		gemNextStorage: gemNextStorage,
		gemMiner: gemMiner,
		advancedDrill: advancedDrill,
		advancedDrillOutput: advancedDrillOutput,
		diamondDrill: diamondDrill,
		carbyneDrill: carbyneDrill,
		charcoal: charcoal,
		charcoalStorage: charcoalStorage,
		charcoalNextStorage: charcoalNextStorage,
		charcoalToggled: charcoalToggled,
		woodburner: woodburner,
		furnace: furnace,
		furnaceWoodInput: furnaceWoodInput,
		furnaceOutput: furnaceOutput,
		kiln: kiln,
		fryer: fryer,
		wood: wood,
		woodStorage: woodStorage,
		woodNextStorage: woodNextStorage,
		woodcutter: woodcutter,
		laserCutter: laserCutter,
		laserCutterOutput: laserCutterOutput,
		deforester: deforester,
		infuser: infuser,
		science: science,
		lab: lab,
		labWoodCost: labWoodCost,
		labGemCost: labGemCost,
		labMetalCost: labMetalCost,
		labT2: labT2,
		labT2WoodCost: labT2WoodCost,
		labT2GemCost: labT2GemCost,
		labT2MetalCost: labT2MetalCost,
		labT3: labT3,
		labT3WoodCost: labT3WoodCost,
		labT3GemCost: labT3GemCost,
		labT3MetalCost: labT3MetalCost,
		labT4: labT4,
		labT4WoodCost: labT4WoodCost,
		labT4GemCost: labT4GemCost,
		labT4MetalCost: labT4MetalCost,
		rocket: rocket,
		rocketFuel: rocketFuel,
		rocketFuelToggled: rocketFuelToggled,
		chemicalPlant: chemicalPlant,
		chemicalPlantMetalCost: chemicalPlantMetalCost,
		chemicalPlantGemCost: chemicalPlantGemCost,
		chemicalPlantOilCost: chemicalPlantOilCost,
		oxidisation: oxidisation,
		oxidisationMetalCost: oxidisationMetalCost,
		oxidisationGemCost: oxidisationGemCost,
		oxidisationOilCost: oxidisationOilCost,
		hydrazine: hydrazine,
		hydrazineTitaniumCost: hydrazineTitaniumCost,
		hydrazineSiliconCost: hydrazineSiliconCost,
		hydrazineGoldCost: hydrazineGoldCost,
		lunarite: lunarite,
		lunariteStorage: lunariteStorage,
		lunariteNextStorage: lunariteNextStorage,
		methane: methane,
		methaneStorage: methaneStorage,
		methaneNextStorage: methaneNextStorage,
		titanium: titanium,
		titaniumStorage: titaniumStorage,
		titaniumNextStorage: titaniumNextStorage,
		gold: gold,
		goldStorage: goldStorage,
		goldNextStorage: goldNextStorage,
		silver: silver,
		silverStorage: silverStorage,
		silverNextStorage: silverNextStorage,
		silicon: silicon,
		siliconStorage: siliconStorage,
		siliconNextStorage: siliconNextStorage,
		moonWorker: moonWorker,
		moonDrill: moonDrill,
		moonQuarry: moonQuarry,
		planetExcavator: planetExcavator,
		vacuum: vacuum,
		suctionExcavator: suctionExcavator,
		spaceCow: spaceCow,
		vent: vent,
		explorer: explorer,
		lunariteDrill: lunariteDrill,
		pentaDrill: pentaDrill,
		titanDrill: titanDrill,
		droid: droid,
		destroyer: destroyer,
		deathStar: deathStar,
		actuator: actuator,
		scout: scout,
		spaceLaser: spaceLaser,
		bertha: bertha,
		cannon: cannon,
		blowtorch: blowtorch,
		scorcher: scorcher,
		annihilator: annihilator,
		desert: desert,
		researchUnlocked: researchUnlocked,
		researched: researched,
		available: available,
		tabsUnlocked: tabsUnlocked,
		resourcesUnlocked: resourcesUnlocked,
		noBorder: noBorder,
		rocketLaunched: rocketLaunched,
		techUnlocked: techUnlocked,
		meteoriteUnlocked: meteoriteUnlocked,
		buttonsHidden: buttonsHidden,
		explored: explored,
		uranium: uranium,
		uraniumStorage: uraniumStorage,
		uraniumNextStorage: uraniumNextStorage,
		activated: activated,
		grinder: grinder,
		cubic: cubic,
		enricher: enricher,
		recycler: recycler,
		lava: lava,
		lavaStorage: lavaStorage,
		lavaNextStorage: lavaNextStorage,
		crucible: crucible,
		extractor: extractor,
		extruder: extruder,
		veluptuator: veluptuator,
		hydrogen: hydrogen,
		hydrogenStorage: hydrogenStorage,
		hydrogenNextStorage: hydrogenNextStorage,
		collector: collector,
		magnet: magnet,
		eCell: eCell,
		hindenburg: hindenburg,
		helium: helium,
		heliumStorage: heliumStorage,
		heliumNextStorage: heliumNextStorage,
		drone: drone,
		tanker: tanker,
		compressor: compressor,
		skimmer: skimmer,
		ice: ice,
		iceStorage: iceStorage,
		iceNextStorage: iceNextStorage,
		icePick: icePick,
		iceDrill: iceDrill,
		freezer: freezer,
		mrFreeze: mrFreeze,
		meteorite: meteorite,
		meteoriteStorage: meteoriteStorage,
		meteoriteNextStorage: meteoriteNextStorage,
		meteoriteToggled: meteoriteToggled,
		printer: printer,
		web: web,
		dyson: dyson,
		dysonTitaniumCost: dysonTitaniumCost,
		dysonGoldCost: dysonGoldCost,
		dysonSiliconCost: dysonSiliconCost,
		dysonMeteoriteCost: dysonMeteoriteCost,
		dysonIceCost: dysonIceCost,
		sphere: sphere,
		swarm: swarm,
		ring: ring,
		antimatter: antimatter,
		antimatterToggled: antimatterToggled,
	}, data);

	return localSave;
}

function legacyLoad(savegame){
	"use strict";
	
	if(savegame){
		if(typeof savegame.companyName !== "undefined") companyName = savegame.companyName;
		if(typeof savegame.plasma !== "undefined") plasma = savegame.plasma;
		if(typeof savegame.PSU !== "undefined") PSU = savegame.PSU;
		if(typeof savegame.PSUT2 !== "undefined") PSUT2 = savegame.PSUT2;
		if(typeof savegame.heater !== "undefined") heater = savegame.heater;
		if(typeof savegame.heaterToggled !== "undefined") heaterToggled = savegame.heaterToggled;
		if(typeof savegame.plasmatic !== "undefined") plasmatic = savegame.plasmatic;
		if(typeof savegame.plasmaticToggled !== "undefined") plasmaticToggled = savegame.plasmaticToggled;
		if(typeof savegame.energy !== "undefined") energy = savegame.energy;
		if(typeof savegame.battery !== "undefined") battery = savegame.battery;
		if(typeof savegame.batteryT2 !== "undefined") batteryT2 = savegame.batteryT2;
		if(typeof savegame.batteryT3 !== "undefined") batteryT3 = savegame.batteryT3;
		if(typeof savegame.batteryT4 !== "undefined") batteryT4 = savegame.batteryT4;
		if(typeof savegame.charcoalEngine !== "undefined") charcoalEngine = savegame.charcoalEngine;
		if(typeof savegame.charcoalEngineOutput !== "undefined") charcoalEngineOutput = savegame.charcoalEngineOutput;
		if(typeof savegame.solarPanel !== "undefined") solarPanel = savegame.solarPanel;
		if(typeof savegame.solarPanelOutput !== "undefined") solarPanelOutput = savegame.solarPanelOutput;
		if(typeof savegame.methaneStation !== "undefined") methaneStation = savegame.methaneStation;
		if(typeof savegame.nuclearStation !== "undefined") nuclearStation = savegame.nuclearStation;
		if(typeof savegame.magmatic !== "undefined") magmatic = savegame.magmatic;
		if(typeof savegame.fusionReactor !== "undefined") fusionReactor = savegame.fusionReactor;
		if(typeof savegame.oil !== "undefined") oil = savegame.oil;
		if(typeof savegame.oilStorage !== "undefined") oilStorage = savegame.oilStorage;
		if(typeof savegame.oilNextStorage !== "undefined") oilNextStorage = savegame.oilNextStorage;
		if(typeof savegame.pump !== "undefined") pump = savegame.pump;
		if(typeof savegame.pumpjack !== "undefined") pumpjack = savegame.pumpjack;
		if(typeof savegame.pumpjackOutput !== "undefined") pumpjackOutput = savegame.pumpjackOutput;
		if(typeof savegame.oilField !== "undefined") oilField = savegame.oilField;
		if(typeof savegame.oilRig !== "undefined") oilRig = savegame.oilRig;
		if(typeof savegame.metal !== "undefined") metal = savegame.metal;
		if(typeof savegame.metalStorage !== "undefined") metalStorage = savegame.metalStorage;
		if(typeof savegame.metalNextStorage !== "undefined") metalNextStorage = savegame.metalNextStorage;
		if(typeof savegame.miner !== "undefined") miner = savegame.miner;
		if(typeof savegame.heavyDrill !== "undefined") heavyDrill = savegame.heavyDrill;
		if(typeof savegame.heavyDrillOutput !== "undefined") heavyDrillOutput = savegame.heavyDrillOutput;
		if(typeof savegame.gigaDrill !== "undefined") gigaDrill = savegame.gigaDrill;
		if(typeof savegame.quantumDrill !== "undefined") quantumDrill = savegame.quantumDrill;
		if(typeof savegame.gem !== "undefined") gem = savegame.gem;
		if(typeof savegame.gemStorage !== "undefined") gemStorage = savegame.gemStorage;
		if(typeof savegame.gemNextStorage !== "undefined") gemNextStorage = savegame.gemNextStorage;
		if(typeof savegame.gemMiner !== "undefined") gemMiner = savegame.gemMiner;
		if(typeof savegame.advancedDrill !== "undefined") advancedDrill = savegame.advancedDrill;
		if(typeof savegame.advancedDrillOutput !== "undefined") advancedDrillOutput = savegame.advancedDrillOutput;
		if(typeof savegame.diamondDrill !== "undefined") diamondDrill = savegame.diamondDrill;
		if(typeof savegame.carbyneDrill !== "undefined") carbyneDrill = savegame.carbyneDrill;
		if(typeof savegame.charcoal !== "undefined") charcoal = savegame.charcoal;
		if(typeof savegame.charcoalStorage !== "undefined") charcoalStorage = savegame.charcoalStorage;
		if(typeof savegame.charcoalNextStorage !== "undefined") charcoalNextStorage = savegame.charcoalNextStorage;
		if(typeof savegame.charcoalToggled !== "undefined") charcoalToggled = savegame.charcoalToggled;
		if(typeof savegame.woodburner !== "undefined") woodburner = savegame.woodburner;
		if(typeof savegame.furnace !== "undefined") furnace = savegame.furnace;
		if(typeof savegame.furnaceWoodInput !== "undefined") furnaceWoodInput = savegame.furnaceWoodInput;
		if(typeof savegame.furnaceOutput !== "undefined") furnaceOutput = savegame.furnaceOutput;
		if(typeof savegame.kiln !== "undefined") kiln = savegame.kiln;
		if(typeof savegame.fryer !== "undefined") fryer = savegame.fryer;
		if(typeof savegame.wood !== "undefined") wood = savegame.wood;
		if(typeof savegame.woodStorage !== "undefined") woodStorage = savegame.woodStorage;
		if(typeof savegame.woodNextStorage !== "undefined") woodNextStorage = savegame.woodNextStorage;
		if(typeof savegame.woodcutter !== "undefined") woodcutter = savegame.woodcutter;
		if(typeof savegame.laserCutter !== "undefined") laserCutter = savegame.laserCutter;
		if(typeof savegame.laserCutterOutput !== "undefined") laserCutterOutput = savegame.laserCutterOutput;
		if(typeof savegame.deforester !== "undefined") deforester = savegame.deforester;
		if(typeof savegame.infuser !== "undefined") infuser = savegame.infuser;
		if(typeof savegame.science !== "undefined") science = savegame.science;
		if(typeof savegame.lab !== "undefined") lab = savegame.lab;
		if(typeof savegame.labWoodCost !== "undefined") labWoodCost = savegame.labWoodCost;
		if(typeof savegame.labGemCost !== "undefined") labGemCost = savegame.labGemCost;
		if(typeof savegame.labMetalCost !== "undefined") labMetalCost = savegame.labMetalCost;
		if(typeof savegame.labT2 !== "undefined") labT2 = savegame.labT2;
		if(typeof savegame.labT2WoodCost !== "undefined") labT2WoodCost = savegame.labT2WoodCost;
		if(typeof savegame.labT2GemCost !== "undefined") labT2GemCost = savegame.labT2GemCost;
		if(typeof savegame.labT2MetalCost !== "undefined") labT2MetalCost = savegame.labT2MetalCost;
		if(typeof savegame.labT3 !== "undefined") labT3 = savegame.labT3;
		if(typeof savegame.labT3WoodCost !== "undefined") labT3WoodCost = savegame.labT3WoodCost;
		if(typeof savegame.labT3GemCost !== "undefined") labT3GemCost = savegame.labT3GemCost;
		if(typeof savegame.labT3MetalCost !== "undefined") labT3MetalCost = savegame.labT3MetalCost;
		if(typeof savegame.labT4 !== "undefined") labT4 = savegame.labT4;
		if(typeof savegame.labT4WoodCost !== "undefined") labT4WoodCost = savegame.labT4WoodCost;
		if(typeof savegame.labT4GemCost !== "undefined") labT4GemCost = savegame.labT4GemCost;
		if(typeof savegame.labT4MetalCost !== "undefined") labT4MetalCost = savegame.labT4MetalCost;
		if(typeof savegame.rocket !== "undefined") rocket = savegame.rocket;
		if(typeof savegame.rocketFuel !== "undefined") rocketFuel = savegame.rocketFuel;
		if(typeof savegame.rocketFuelToggled !== "undefined") rocketFuelToggled = savegame.rocketFuelToggled;
		if(typeof savegame.chemicalPlant !== "undefined") chemicalPlant = savegame.chemicalPlant;
		if(typeof savegame.chemicalPlantMetalCost !== "undefined") chemicalPlantMetalCost = savegame.chemicalPlantMetalCost;
		if(typeof savegame.chemicalPlantGemCost !== "undefined") chemicalPlantGemCost = savegame.chemicalPlantGemCost;
		if(typeof savegame.chemicalPlantOilCost !== "undefined") chemicalPlantOilCost = savegame.chemicalPlantOilCost;
		if(typeof savegame.oxidisation !== "undefined") oxidisation = savegame.oxidisation;
		if(typeof savegame.oxidisationMetalCost !== "undefined") oxidisationMetalCost = savegame.oxidisationMetalCost;
		if(typeof savegame.oxidisationGemCost !== "undefined") oxidisationGemCost = savegame.oxidisationGemCost;
		if(typeof savegame.oxidisationOilCost !== "undefined") oxidisationOilCost = savegame.oxidisationOilCost;
		if(typeof savegame.hydrazine !== "undefined") hydrazine = savegame.hydrazine;
		if(typeof savegame.hydrazineTitaniumCost !== "undefined") hydrazineTitaniumCost = savegame.hydrazineTitaniumCost;
		if(typeof savegame.hydrazineSiliconCost !== "undefined") hydrazineSiliconCost = savegame.hydrazineSiliconCost;
		if(typeof savegame.hydrazineGoldCost !== "undefined") hydrazineGoldCost = savegame.hydrazineGoldCost;
		if(typeof savegame.spaceMetal !== "undefined") lunarite = savegame.spaceMetal;
		if(typeof savegame.lunarite !== "undefined") lunarite = savegame.lunarite;
		if(typeof savegame.spaceMetalStorage !== "undefined") lunariteStorage = savegame.spaceMetalStorage;
		if(typeof savegame.lunariteStorage !== "undefined") lunariteStorage = savegame.lunariteStorage;
		if(typeof savegame.spaceMetalNextStorage !== "undefined") lunariteNextStorage = savegame.spaceMetalNextStorage;
		if(typeof savegame.lunariteNextStorage !== "undefined") lunariteNextStorage = savegame.lunariteNextStorage;
		if(typeof savegame.methane !== "undefined") methane = savegame.methane;
		if(typeof savegame.methaneStorage !== "undefined") methaneStorage = savegame.methaneStorage;
		if(typeof savegame.methaneNextStorage !== "undefined") methaneNextStorage = savegame.methaneNextStorage;
		if(typeof savegame.titanium !== "undefined") titanium = savegame.titanium;
		if(typeof savegame.titaniumStorage !== "undefined") titaniumStorage = savegame.titaniumStorage;
		if(typeof savegame.titaniumNextStorage !== "undefined") titaniumNextStorage = savegame.titaniumNextStorage;
		if(typeof savegame.gold !== "undefined") gold = savegame.gold;
		if(typeof savegame.goldStorage !== "undefined") goldStorage = savegame.goldStorage;
		if(typeof savegame.goldNextStorage !== "undefined") goldNextStorage = savegame.goldNextStorage;
		if(typeof savegame.silver !== "undefined") silver = savegame.silver;
		if(typeof savegame.silverStorage !== "undefined") silverStorage = savegame.silverStorage;
		if(typeof savegame.silverNextStorage !== "undefined") silverNextStorage = savegame.silverNextStorage;
		if(typeof savegame.silicon !== "undefined") silicon = savegame.silicon;
		if(typeof savegame.siliconStorage !== "undefined") siliconStorage = savegame.siliconStorage;
		if(typeof savegame.siliconNextStorage !== "undefined") siliconNextStorage = savegame.siliconNextStorage;
		if(typeof savegame.lava !== "undefined") lava = savegame.lava;
		if(typeof savegame.lavaStorage !== "undefined") lavaStorage = savegame.lavaStorage;
		if(typeof savegame.lavaNextStorage !== "undefined") lavaNextStorage = savegame.lavaNextStorage;
		if(typeof savegame.hydrogen !== "undefined") hydrogen = savegame.hydrogen;
		if(typeof savegame.hydrogenStorage !== "undefined") hydrogenStorage = savegame.hydrogenStorage;
		if(typeof savegame.hydrogenNextStorage !== "undefined") hydrogenNextStorage = savegame.hydrogenNextStorage;
		if(typeof savegame.helium !== "undefined") helium = savegame.helium;
		if(typeof savegame.heliumStorage !== "undefined") heliumStorage = savegame.heliumStorage;
		if(typeof savegame.heliumNextStorage !== "undefined") heliumNextStorage = savegame.heliumNextStorage;
		if(typeof savegame.ice !== "undefined") ice = savegame.ice;
		if(typeof savegame.iceStorage !== "undefined") iceStorage = savegame.iceStorage;
		if(typeof savegame.iceNextStorage !== "undefined") iceNextStorage = savegame.iceNextStorage;
		if(typeof savegame.meteorite !== "undefined") meteorite = savegame.meteorite;
		if(typeof savegame.meteoriteStorage !== "undefined") meteoriteStorage = savegame.meteoriteStorage;
		if(typeof savegame.meteoriteNextStorage !== "undefined") meteoriteNextStorage = savegame.meteoriteNextStorage;
		if(typeof savegame.moonWorker !== "undefined") moonWorker = savegame.moonWorker;
		if(typeof savegame.moonDrill !== "undefined") moonDrill = savegame.moonDrill;
		if(typeof savegame.moonQuarry !== "undefined") moonQuarry = savegame.moonQuarry;
		if(typeof savegame.planetExcavator !== "undefined") planetExcavator = savegame.planetExcavator;
		if(typeof savegame.vacuum !== "undefined") vacuum = savegame.vacuum;
		if(typeof savegame.suctionExcavator !== "undefined") suctionExcavator = savegame.suctionExcavator;
		if(typeof savegame.spaceCow !== "undefined") spaceCow = savegame.spaceCow;
		if(typeof savegame.vent !== "undefined") vent = savegame.vent;
		if(typeof savegame.explorer !== "undefined") explorer = savegame.explorer;
		if(typeof savegame.spaceMetalDrill !== "undefined") lunariteDrill = savegame.spaceMetalDrill;
		if(typeof savegame.lunariteDrill !== "undefined") lunariteDrill = savegame.lunariteDrill;
		if(typeof savegame.pentaDrill !== "undefined") pentaDrill = savegame.pentaDrill;
		if(typeof savegame.titanDrill !== "undefined") titanDrill = savegame.titanDrill;
		if(typeof savegame.droid !== "undefined") droid = savegame.droid;
		if(typeof savegame.destroyer !== "undefined") destroyer = savegame.destroyer;
		if(typeof savegame.deathStar !== "undefined") deathStar = savegame.deathStar;
		if(typeof savegame.actuator !== "undefined") actuator = savegame.actuator;
		if(typeof savegame.scout !== "undefined") scout = savegame.scout;
		if(typeof savegame.spaceLaser !== "undefined") spaceLaser = savegame.spaceLaser;
		if(typeof savegame.bertha !== "undefined") bertha = savegame.bertha;
		if(typeof savegame.cannon !== "undefined") cannon = savegame.cannon;
		if(typeof savegame.blowtorch !== "undefined") blowtorch = savegame.blowtorch;
		if(typeof savegame.scorcher !== "undefined") scorcher = savegame.scorcher;
		if(typeof savegame.annihilator !== "undefined") annihilator = savegame.annihilator;
		if(typeof savegame.desert !== "undefined") desert = savegame.desert;
		if(typeof savegame.researchUnlocked !== "undefined") researchUnlocked = savegame.researchUnlocked;
		if(typeof savegame.researched !== "undefined") researched = savegame.researched;
		if(typeof savegame.tabsUnlocked !== "undefined") tabsUnlocked = savegame.tabsUnlocked;
		if(typeof savegame.available !== "undefined") available = savegame.available;
		if(typeof savegame.resourcesUnlocked !== "undefined") resourcesUnlocked = savegame.resourcesUnlocked;
		if(typeof savegame.noBorder !== "undefined") noBorder = savegame.noBorder;
		if(typeof savegame.rocketLaunched !== "undefined") rocketLaunched = savegame.rocketLaunched;
		if(typeof savegame.techUnlocked !== "undefined") techUnlocked = savegame.techUnlocked;
		if(typeof savegame.meteoriteUnlocked !== "undefined") meteoriteUnlocked = savegame.meteoriteUnlocked;
		if(typeof savegame.explored !== "undefined") explored = savegame.explored;
		if(typeof savegame.buttonsHidden !== "undefined") buttonsHidden = savegame.buttonsHidden;
		if(typeof savegame.uranium !== "undefined") uranium = savegame.uranium;
		if(typeof savegame.uraniumStorage !== "undefined") uraniumStorage = savegame.uraniumStorage;
		if(typeof savegame.uraniumNextStorage !== "undefined") uraniumNextStorage = savegame.uraniumNextStorage;
		if(typeof savegame.activated !== "undefined") activated = savegame.activated;
		if(typeof savegame.grinder !== "undefined") grinder = savegame.grinder;
		if(typeof savegame.cubic !== "undefined") cubic = savegame.cubic;
		if(typeof savegame.enricher !== "undefined") enricher = savegame.enricher;
		if(typeof savegame.recycler !== "undefined") recycler = savegame.recycler;
		if(typeof savegame.crucible !== "undefined") crucible = savegame.crucible;
		if(typeof savegame.extractor !== "undefined") extractor = savegame.extractor;
		if(typeof savegame.extruder !== "undefined") extruder = savegame.extruder;
		if(typeof savegame.veluptuator !== "undefined") veluptuator = savegame.veluptuator;
		if(typeof savegame.collector !== "undefined") collector = savegame.collector;
		if(typeof savegame.magnet !== "undefined") magnet = savegame.magnet;
		if(typeof savegame.eCell !== "undefined") eCell = savegame.eCell;
		if(typeof savegame.hindenburg !== "undefined") hindenburg = savegame.hindenburg;
		if(typeof savegame.drone !== "undefined") drone = savegame.drone;
		if(typeof savegame.tanker !== "undefined") tanker = savegame.tanker;
		if(typeof savegame.compressor !== "undefined") compressor = savegame.compressor;
		if(typeof savegame.skimmer !== "undefined") skimmer = savegame.skimmer;
		if(typeof savegame.icePick !== "undefined") icePick = savegame.icePick;
		if(typeof savegame.iceDrill !== "undefined") iceDrill = savegame.iceDrill;
		if(typeof savegame.freezer !== "undefined") freezer = savegame.freezer;
		if(typeof savegame.mrFreeze !== "undefined") mrFreeze = savegame.mrFreeze;
		if(typeof savegame.printer !== "undefined") printer = savegame.printer;
		if(typeof savegame.web !== "undefined") web = savegame.web;
		if(typeof savegame.dyson !== "undefined") dyson = savegame.dyson;
		if(typeof savegame.dysonTitaniumCost !== "undefined") dysonTitaniumCost = savegame.dysonTitaniumCost;
		if(typeof savegame.dysonGoldCost !== "undefined") dysonGoldCost = savegame.dysonGoldCost;
		if(typeof savegame.dysonSiliconCost !== "undefined") dysonSiliconCost = savegame.dysonSiliconCost;
		if(typeof savegame.dysonMeteoriteCost !== "undefined") dysonMeteoriteCost = savegame.dysonMeteoriteCost;
		if(typeof savegame.dysonIceCost !== "undefined") dysonIceCost = savegame.dysonIceCost;
		if(typeof savegame.sphere !== "undefined") sphere = savegame.sphere;
		if(typeof savegame.swarm !== "undefined") swarm = savegame.swarm;
		if(typeof savegame.ring !== "undefined") ring = savegame.ring;
		if(typeof savegame.antimatter !== "undefined") antimatter = savegame.antimatter;
		if(typeof savegame.antimatterToggled !== "undefined") antimatterToggled = savegame.antimatterToggled;
	}
}
