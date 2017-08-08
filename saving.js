function legacySave(data) {
	"use strict";
	var localSave = $.extend({
		versionNumber: versionNumber,
		companyName: companyName,
		plasma: plasma,
		PSU: PSU,
		PSUSilverCost: PSUSilverCost,
		PSUGoldCost: PSUGoldCost,
		PSUUraniumCost: PSUUraniumCost,
		PSUT2: PSUT2,
		PSUT2SilverCost: PSUT2SilverCost,
		PSUT2GoldCost: PSUT2GoldCost,
		PSUT2UraniumCost: PSUT2UraniumCost,
		heater: heater,
		heaterLunariteCost: heaterLunariteCost,
		heaterGemCost: heaterGemCost,
		heaterSiliconCost: heaterSiliconCost,
		heaterToggled: heaterToggled,
		plasmatic: plasmatic,
		plasmaticLunariteCost: plasmaticLunariteCost,
		plasmaticSiliconCost: plasmaticSiliconCost,
		plasmaticMeteoriteCost: plasmaticMeteoriteCost,
		plasmaticToggled: plasmaticToggled,
		energy: energy,
		battery: battery,
		batteryMetalCost: batteryMetalCost,
		batteryGemCost: batteryGemCost,
		batteryLunariteCost: batteryLunariteCost,
		batteryT2: batteryT2,
		batteryT2MetalCost: batteryT2MetalCost,
		batteryT2GemCost: batteryT2GemCost,
		batteryT2LunariteCost: batteryT2LunariteCost,
		batteryT3: batteryT3,
		batteryT3MetalCost: batteryT3MetalCost,
		batteryT3GemCost: batteryT3GemCost,
		batteryT3LunariteCost: batteryT3LunariteCost,
		batteryT4: batteryT4,
		batteryT4MetalCost: batteryT4MetalCost,
		batteryT4GemCost: batteryT4GemCost,
		batteryT4LunariteCost: batteryT4LunariteCost,
		charcoalEngine: charcoalEngine,
		charcoalEngineMetalCost: charcoalEngineMetalCost,
		charcoalEngineGemCost: charcoalEngineGemCost,
		charcoalEngineOutput: charcoalEngineOutput,
		solarPanel: solarPanel,
		solarPanelMetalCost: solarPanelMetalCost,
		solarPanelGemCost: solarPanelGemCost,
		solarPanelOutput: solarPanelOutput,
		methaneStation: methaneStation,
		methaneStationLunariteCost: methaneStationLunariteCost,
		methaneStationTitaniumCost: methaneStationTitaniumCost,
		nuclearStation: nuclearStation,
		nuclearStationLunariteCost: nuclearStationLunariteCost,
		nuclearStationTitaniumCost: nuclearStationTitaniumCost,
		magmatic: magmatic,
		magmaticLunariteCost: magmaticLunariteCost,
		magmaticGemCost: magmaticGemCost,
		magmaticSilverCost: magmaticSilverCost,
		fusionReactor: fusionReactor,
		fusionReactorLunariteCost: fusionReactorLunariteCost,
		fusionReactorTitaniumCost: fusionReactorTitaniumCost,
		fusionReactorSiliconCost: fusionReactorSiliconCost,
		oil: oil,
		oilStorage: oilStorage,
		oilNextStorage: oilNextStorage,
		pump: pump,
		pumpMetalCost: pumpMetalCost,
		pumpGemCost: pumpGemCost,
		pumpjack: pumpjack,
		pumpjackMetalCost: pumpjackMetalCost,
		pumpjackGemCost: pumpjackGemCost,
		pumpjackOilCost: pumpjackOilCost,
		pumpjackOutput: pumpjackOutput,
		oilField: oilField,
		oilFieldLunariteCost: oilFieldLunariteCost,
		oilFieldTitaniumCost: oilFieldTitaniumCost,
		oilFieldSiliconCost: oilFieldSiliconCost,
		oilRig: oilRig,
		oilRigLunariteCost: oilRigLunariteCost,
		oilRigTitaniumCost: oilRigTitaniumCost,
		oilRigMeteoriteCost: oilRigMeteoriteCost,
		metal: metal,
		metalStorage: metalStorage,
		metalNextStorage: metalNextStorage,
		miner: miner,
		minerMetalCost: minerMetalCost,
		minerWoodCost: minerWoodCost,
		heavyDrill: heavyDrill,
		heavyDrillMetalCost: heavyDrillMetalCost,
		heavyDrillGemCost: heavyDrillGemCost,
		heavyDrillOilCost: heavyDrillOilCost,
		heavyDrillOutput: heavyDrillOutput,
		gigaDrill: gigaDrill,
		gigaDrillLunariteCost: gigaDrillLunariteCost,
		gigaDrillGemCost: gigaDrillGemCost,
		gigaDrillSiliconCost: gigaDrillSiliconCost,
		quantumDrill: quantumDrill,
		quantumDrillLunariteCost: quantumDrillLunariteCost,
		quantumDrillGoldCost: quantumDrillGoldCost,
		quantumDrillMeteoriteCost: quantumDrillMeteoriteCost,
		gem: gem,
		gemStorage: gemStorage,
		gemNextStorage: gemNextStorage,
		gemMiner: gemMiner,
		gemMinerMetalCost: gemMinerMetalCost,
		gemMinerGemCost: gemMinerGemCost,
		advancedDrill: advancedDrill,
		advancedDrillMetalCost: advancedDrillMetalCost,
		advancedDrillGemCost: advancedDrillGemCost,
		advancedDrillOilCost: advancedDrillOilCost,
		advancedDrillOutput: advancedDrillOutput,
		diamondDrill: diamondDrill,
		diamondDrillLunariteCost: diamondDrillLunariteCost,
		diamondDrillGemCost: diamondDrillGemCost,
		diamondDrillSiliconCost: diamondDrillSiliconCost,
		carbyneDrill: carbyneDrill,
		carbyneDrillLunariteCost: carbyneDrillLunariteCost,
		carbyneDrillGemCost: carbyneDrillGemCost,
		carbyneDrillMeteoriteCost: carbyneDrillMeteoriteCost,
		charcoal: charcoal,
		charcoalStorage: charcoalStorage,
		charcoalNextStorage: charcoalNextStorage,
		charcoalToggled: charcoalToggled,
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
		kilnLunariteCost: kilnLunariteCost,
		kilnGemCost: kilnGemCost,
		kilnSiliconCost: kilnSiliconCost,
		fryer: fryer,
		fryerLunariteCost: fryerLunariteCost,
		fryerLavaCost: fryerLavaCost,
		fryerMeteoriteCost: fryerMeteoriteCost,
		wood: wood,
		woodStorage: woodStorage,
		woodNextStorage: woodNextStorage,
		woodcutter: woodcutter,
		woodcutterMetalCost: woodcutterMetalCost,
		woodcutterWoodCost: woodcutterWoodCost,
		laserCutter: laserCutter,
		laserCutterMetalCost: laserCutterMetalCost,
		laserCutterGemCost: laserCutterGemCost,
		laserCutterOilCost: laserCutterOilCost,
		laserCutterOutput: laserCutterOutput,
		deforester: deforester,
		deforesterLunariteCost: deforesterLunariteCost,
		deforesterTitaniumCost: deforesterTitaniumCost,
		deforesterSiliconCost: deforesterSiliconCost,
		infuser: infuser,
		infuserLunariteCost: infuserLunariteCost,
		infuserOilCost: infuserOilCost,
		infuserMeteoriteCost: infuserMeteoriteCost,
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
		moonWorkerGemCost: moonWorkerGemCost,
		moonDrill: moonDrill,
		moonDrillMetalCost: moonDrillMetalCost,
		moonDrillGemCost: moonDrillGemCost,
		moonDrillOilCost: moonDrillOilCost,
		moonQuarry: moonQuarry,
		moonQuarryLunariteCost: moonQuarryLunariteCost,
		moonQuarryGemCost: moonQuarryGemCost,
		moonQuarrySiliconCost: moonQuarrySiliconCost,
		planetExcavator: planetExcavator,
		planetExcavatorTitaniumCost: planetExcavatorTitaniumCost,
		planetExcavatorIceCost: planetExcavatorIceCost,
		planetExcavatorMeteoriteCost: planetExcavatorMeteoriteCost,
		vacuum: vacuum,
		vacuumLunariteCost: vacuumLunariteCost,
		vacuumGemCost: vacuumGemCost,
		suctionExcavator: suctionExcavator,
		suctionExcavatorLunariteCost: suctionExcavatorLunariteCost,
		suctionExcavatorGemCost: suctionExcavatorGemCost,
		suctionExcavatorOilCost: suctionExcavatorOilCost,
		spaceCow: spaceCow,
		spaceCowLunariteCost: spaceCowLunariteCost,
		spaceCowTitaniumCost: spaceCowTitaniumCost,
		spaceCowSiliconCost: spaceCowSiliconCost,
		vent: vent,
		ventLunariteCost: ventLunariteCost,
		ventHeliumCost: ventHeliumCost,
		ventMeteoriteCost: ventMeteoriteCost,
		explorer: explorer,
		explorerGemCost: explorerGemCost,
		lunariteDrill: lunariteDrill,
		lunariteDrillLunariteCost: lunariteDrillLunariteCost,
		lunariteDrillGemCost: lunariteDrillGemCost,
		lunariteDrillOilCost: lunariteDrillOilCost,
		pentaDrill: pentaDrill,
		pentaDrillLunariteCost: pentaDrillLunariteCost,
		pentaDrillGemCost: pentaDrillGemCost,
		pentaDrillSiliconCost: pentaDrillSiliconCost,
		titanDrill: titanDrill,
		titanDrillLunariteCost: titanDrillLunariteCost,
		titanDrillGoldCost: titanDrillGoldCost,
		titanDrillMeteoriteCost: titanDrillMeteoriteCost,
		droid: droid,
		droidLunariteCost: droidLunariteCost,
		droidMethaneCost: droidMethaneCost,
		destroyer: destroyer,
		destroyerLunariteCost: destroyerLunariteCost,
		destroyerGemCost: destroyerGemCost,
		destroyerOilCost: destroyerOilCost,
		deathStar: deathStar,
		deathStarLunariteCost: deathStarLunariteCost,
		deathStarSilverCost: deathStarSilverCost,
		deathStarSiliconCost: deathStarSiliconCost,
		actuator: actuator,
		actuatorLunariteCost: actuatorLunariteCost,
		actuatorHeliumCost: actuatorHeliumCost,
		actuatorMeteoriteCost: actuatorMeteoriteCost,
		scout: scout,
		scoutLunariteCost: scoutLunariteCost,
		scoutTitaniumCost: scoutTitaniumCost,
		spaceLaser: spaceLaser,
		spaceLaserLunariteCost: spaceLaserLunariteCost,
		spaceLaserGemCost: spaceLaserGemCost,
		spaceLaserOilCost: spaceLaserOilCost,
		bertha: bertha,
		berthaLunariteCost: berthaLunariteCost,
		berthaTitaniumCost: berthaTitaniumCost,
		berthaSiliconCost: berthaSiliconCost,
		cannon: cannon,
		cannonLunariteCost: cannonLunariteCost,
		cannonOilCost: cannonOilCost,
		cannonMeteoriteCost: cannonMeteoriteCost,
		blowtorch: blowtorch,
		blowtorchLunariteCost: blowtorchLunariteCost,
		blowtorchTitaniumCost: blowtorchTitaniumCost,
		scorcher: scorcher,
		scorcherLunariteCost: scorcherLunariteCost,
		scorcherGemCost: scorcherGemCost,
		scorcherOilCost: scorcherOilCost,
		annihilator: annihilator,
		annihilatorLunariteCost: annihilatorLunariteCost,
		annihilatorGemCost: annihilatorGemCost,
		annihilatorSilverCost: annihilatorSilverCost,
		desert: desert,
		desertLunariteCost: desertLunariteCost,
		desertSiliconCost: desertSiliconCost,
		desertMeteoriteCost: desertMeteoriteCost,
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
		grinderTitaniumCost: grinderTitaniumCost,
		grinderLunariteCost: grinderLunariteCost,
		grinderGoldCost: grinderGoldCost,
		cubic: cubic,
		cubicUraniumCost: cubicUraniumCost,
		cubicLunariteCost: cubicLunariteCost,
		cubicOilCost: cubicOilCost,
		enricher: enricher,
		enricherLunariteCost: enricherLunariteCost,
		enricherTitaniumCost: enricherTitaniumCost,
		enricherSiliconCost: enricherSiliconCost,
		recycler: recycler,
		recyclerLunariteCost: recyclerLunariteCost,
		recyclerMethaneCost: recyclerMethaneCost,
		recyclerMeteoriteCost: recyclerMeteoriteCost,
		lava: lava,
		lavaStorage: lavaStorage,
		lavaNextStorage: lavaNextStorage,
		crucible: crucible,
		crucibleLunariteCost: crucibleLunariteCost,
		crucibleGemCost: crucibleGemCost,
		extractor: extractor,
		extractorLunariteCost: extractorLunariteCost,
		extractorTitaniumCost: extractorTitaniumCost,
		extractorSiliconCost: extractorSiliconCost,
		extruder: extruder,
		extruderLunariteCost: extruderLunariteCost,
		extruderTitaniumCost: extruderTitaniumCost,
		extruderSiliconCost: extruderSiliconCost,
		veluptuator: veluptuator,
		veluptuatorLunariteCost: veluptuatorLunariteCost,
		veluptuatorGoldCost: veluptuatorGoldCost,
		veluptuatorMeteoriteCost: veluptuatorMeteoriteCost,
		hydrogen: hydrogen,
		hydrogenStorage: hydrogenStorage,
		hydrogenNextStorage: hydrogenNextStorage,
		collector: collector,
		collectorLunariteCost: collectorLunariteCost,
		collectorTitaniumCost: collectorTitaniumCost,
		magnet: magnet,
		magnetLunariteCost: magnetLunariteCost,
		magnetTitaniumCost: magnetTitaniumCost,
		magnetGoldCost: magnetGoldCost,
		eCell: eCell,
		eCellSilverCost: eCellSilverCost,
		eCellGoldCost: eCellGoldCost,
		eCellSiliconCost: eCellSiliconCost,
		hindenburg: hindenburg,
		hindenburgLunariteCost: hindenburgLunariteCost,
		hindenburgMethaneCost: hindenburgMethaneCost,
		hindenburgMeteoriteCost: hindenburgMeteoriteCost,
		helium: helium,
		heliumStorage: heliumStorage,
		heliumNextStorage: heliumNextStorage,
		drone: drone,
		droneLunariteCost: droneLunariteCost,
		droneSiliconCost: droneSiliconCost,
		tanker: tanker,
		tankerLunariteCost: tankerLunariteCost,
		tankerTitaniumCost: tankerTitaniumCost,
		tankerSiliconCost: tankerSiliconCost,
		compressor: compressor,
		compressorLunariteCost: compressorLunariteCost,
		compressorTitaniumCost: compressorTitaniumCost,
		compressorSiliconCost: compressorSiliconCost,
		skimmer: skimmer,
		skimmerLunariteCost: skimmerLunariteCost,
		skimmerTitaniumCost: skimmerTitaniumCost,
		skimmerMeteoriteCost: skimmerMeteoriteCost,
		ice: ice,
		iceStorage: iceStorage,
		iceNextStorage: iceNextStorage,
		icePick: icePick,
		icePickLunariteCost: icePickLunariteCost,
		icePickGemCost: icePickGemCost,
		iceDrill: iceDrill,
		iceDrillLunariteCost: iceDrillLunariteCost,
		iceDrillTitaniumCost: iceDrillTitaniumCost,
		iceDrillSiliconCost: iceDrillSiliconCost,
		freezer: freezer,
		freezerLunariteCost: freezerLunariteCost,
		freezerTitaniumCost: freezerTitaniumCost,
		freezerSiliconCost: freezerSiliconCost,
		mrFreeze: mrFreeze,
		mrFreezeWoodCost: mrFreezeWoodCost,
		mrFreezeHeliumCost: mrFreezeHeliumCost,
		mrFreezeMeteoriteCost: mrFreezeMeteoriteCost,
		meteorite: meteorite,
		meteoriteStorage: meteoriteStorage,
		meteoriteNextStorage: meteoriteNextStorage,
		meteoriteToggled: meteoriteToggled,
		printer: printer,
		printerLunariteCost: printerLunariteCost,
		printerSiliconCost: printerSiliconCost,
		web: web,
		webLunariteCost: webLunariteCost,
		webUraniumCost: webUraniumCost,
		webSiliconCost: webSiliconCost,
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
		if(typeof savegame.PSUSilverCost !== "undefined") PSUSilverCost = savegame.PSUSilverCost;
		if(typeof savegame.PSUGoldCost !== "undefined") PSUGoldCost = savegame.PSUGoldCost;
		if(typeof savegame.PSUUraniumCost !== "undefined") PSUUraniumCost = savegame.PSUUraniumCost;
		if(typeof savegame.PSUT2 !== "undefined") PSUT2 = savegame.PSUT2;
		if(typeof savegame.PSUT2SilverCost !== "undefined") PSUT2SilverCost = savegame.PSUT2SilverCost;
		if(typeof savegame.PSUT2GoldCost !== "undefined") PSUT2GoldCost = savegame.PSUT2GoldCost;
		if(typeof savegame.PSUT2UraniumCost !== "undefined") PSUT2UraniumCost = savegame.PSUT2UraniumCost;
		if(typeof savegame.heater !== "undefined") heater = savegame.heater;
		if(typeof savegame.heaterSpaceMetalCost !== "undefined") heaterLunariteCost = savegame.heaterSpaceMetalCost;
		if(typeof savegame.heaterLunariteCost !== "undefined") heaterLunariteCost = savegame.heaterLunariteCost;
		if(typeof savegame.heaterGemCost !== "undefined") heaterGemCost = savegame.heaterGemCost;
		if(typeof savegame.heaterSiliconCost !== "undefined") heaterSiliconCost = savegame.heaterSiliconCost;
		if(typeof savegame.heaterToggled !== "undefined") heaterToggled = savegame.heaterToggled;
		if(typeof savegame.plasmatic !== "undefined") plasmatic = savegame.plasmatic;
		if(typeof savegame.plasmaticSpaceMetalCost !== "undefined") plasmaticLunariteCost = savegame.plasmaticSpaceMetalCost;
		if(typeof savegame.plasmaticLunariteCost !== "undefined") plasmaticLunariteCost = savegame.plasmaticLunariteCost;
		if(typeof savegame.plasmaticSiliconCost !== "undefined") plasmaticSiliconCost = savegame.plasmaticSiliconCost;
		if(typeof savegame.plasmaticMeteoriteCost !== "undefined") plasmaticMeteoriteCost = savegame.plasmaticMeteoriteCost;
		if(typeof savegame.plasmaticToggled !== "undefined") plasmaticToggled = savegame.plasmaticToggled;
		if(typeof savegame.energy !== "undefined") energy = savegame.energy;
		if(typeof savegame.battery !== "undefined") battery = savegame.battery;
		if(typeof savegame.batteryMetalCost !== "undefined") batteryMetalCost = savegame.batteryMetalCost;
		if(typeof savegame.batteryGemCost !== "undefined") batteryGemCost = savegame.batteryGemCost;
		if(typeof savegame.batterySpaceMetalCost !== "undefined") batteryLunariteCost = savegame.batterySpaceMetalCost;
		if(typeof savegame.batteryLunariteCost !== "undefined") batteryLunariteCost = savegame.batteryLunariteCost;
		if(typeof savegame.batteryT2 !== "undefined") batteryT2 = savegame.batteryT2;
		if(typeof savegame.batteryT2MetalCost !== "undefined") batteryT2MetalCost = savegame.batteryT2MetalCost;
		if(typeof savegame.batteryT2GemCost !== "undefined") batteryT2GemCost = savegame.batteryT2GemCost;
		if(typeof savegame.batteryT2SpaceMetalCost !== "undefined") batteryT2LunariteCost = savegame.batteryT2SpaceMetalCost;
		if(typeof savegame.batteryT2LunariteCost !== "undefined") batteryT2LunariteCost = savegame.batteryT2LunariteCost;
		if(typeof savegame.batteryT3 !== "undefined") batteryT3 = savegame.batteryT3;
		if(typeof savegame.batteryT3MetalCost !== "undefined") batteryT3MetalCost = savegame.batteryT3MetalCost;
		if(typeof savegame.batteryT3GemCost !== "undefined") batteryT3GemCost = savegame.batteryT3GemCost;
		if(typeof savegame.batteryT3SpaceMetalCost !== "undefined") batteryT3LunariteCost = savegame.batteryT3SpaceMetalCost;
		if(typeof savegame.batteryT3LunariteCost !== "undefined") batteryT3LunariteCost = savegame.batteryT3LunariteCost;
		if(typeof savegame.batteryT4 !== "undefined") batteryT4 = savegame.batteryT4;
		if(typeof savegame.batteryT4MetalCost !== "undefined") batteryT4MetalCost = savegame.batteryT4MetalCost;
		if(typeof savegame.batteryT4GemCost !== "undefined") batteryT4GemCost = savegame.batteryT4GemCost;
		if(typeof savegame.batteryT4SpaceMetalCost !== "undefined") batteryT4LunariteCost = savegame.batteryT4SpaceMetalCost;
		if(typeof savegame.batteryT4LunariteCost !== "undefined") batteryT4LunariteCost = savegame.batteryT4LunariteCost;
		if(typeof savegame.charcoalEngine !== "undefined") charcoalEngine = savegame.charcoalEngine;
		if(typeof savegame.charcoalEngineMetalCost !== "undefined") charcoalEngineMetalCost = savegame.charcoalEngineMetalCost;
		if(typeof savegame.charcoalEngineGemCost !== "undefined") charcoalEngineGemCost = savegame.charcoalEngineGemCost;
		if(typeof savegame.charcoalEngineOutput !== "undefined") charcoalEngineOutput = savegame.charcoalEngineOutput;
		if(typeof savegame.solarPanel !== "undefined") solarPanel = savegame.solarPanel;
		if(typeof savegame.solarPanelMetalCost !== "undefined") solarPanelMetalCost = savegame.solarPanelMetalCost;
		if(typeof savegame.solarPanelGemCost !== "undefined") solarPanelGemCost = savegame.solarPanelGemCost;
		if(typeof savegame.solarPanelOutput !== "undefined") solarPanelOutput = savegame.solarPanelOutput;
		if(typeof savegame.methaneStation !== "undefined") methaneStation = savegame.methaneStation;
		if(typeof savegame.methaneStationSpaceMetalCost !== "undefined") methaneStationLunariteCost = savegame.methaneStationSpaceMetalCost;
		if(typeof savegame.methaneStationLunariteCost !== "undefined") methaneStationLunariteCost = savegame.methaneStationLunariteCost;
		if(typeof savegame.methaneStationTitaniumCost !== "undefined") methaneStationTitaniumCost = savegame.methaneStationTitaniumCost;
		if(typeof savegame.nuclearStation !== "undefined") nuclearStation = savegame.nuclearStation;
		if(typeof savegame.nuclearStationSpaceMetalCost !== "undefined") nuclearStationLunariteCost = savegame.nuclearStationSpaceMetalCost;
		if(typeof savegame.nuclearStationLunariteCost !== "undefined") nuclearStationLunariteCost = savegame.nuclearStationLunariteCost;
		if(typeof savegame.nuclearStationTitaniumCost !== "undefined") nuclearStationTitaniumCost = savegame.nuclearStationTitaniumCost;
		if(typeof savegame.magmatic !== "undefined") magmatic = savegame.magmatic;
		if(typeof savegame.magmaticSpaceMetalCost !== "undefined") magmaticLunariteCost = savegame.magmaticSpaceMetalCost;
		if(typeof savegame.magmaticLunariteCost !== "undefined") magmaticLunariteCost = savegame.magmaticLunariteCost;
		if(typeof savegame.magmaticGemCost !== "undefined") magmaticGemCost = savegame.magmaticGemCost;
		if(typeof savegame.magmaticSilverCost !== "undefined") magmaticSilverCost = savegame.magmaticSilverCost;
		if(typeof savegame.fusionReactor !== "undefined") fusionReactor = savegame.fusionReactor;
		if(typeof savegame.fusionReactorSpaceMetalCost !== "undefined") fusionReactorLunariteCost = savegame.fusionReactorSpaceMetalCost;
		if(typeof savegame.fusionReactorLunariteCost !== "undefined") fusionReactorLunariteCost = savegame.fusionReactorLunariteCost;
		if(typeof savegame.fusionReactorTitaniumCost !== "undefined") fusionReactorTitaniumCost = savegame.fusionReactorTitaniumCost;
		if(typeof savegame.fusionReactorSiliconCost !== "undefined") fusionReactorSiliconCost = savegame.fusionReactorSiliconCost;
		if(typeof savegame.oil !== "undefined") oil = savegame.oil;
		if(typeof savegame.oilStorage !== "undefined") oilStorage = savegame.oilStorage;
		if(typeof savegame.oilNextStorage !== "undefined") oilNextStorage = savegame.oilNextStorage;
		if(typeof savegame.pump !== "undefined") pump = savegame.pump;
		if(typeof savegame.pumpMetalCost !== "undefined") pumpMetalCost = savegame.pumpMetalCost;
		if(typeof savegame.pumpGemCost !== "undefined") pumpGemCost = savegame.pumpGemCost;
		if(typeof savegame.pumpjack !== "undefined") pumpjack = savegame.pumpjack;
		if(typeof savegame.pumpjackMetalCost !== "undefined") pumpjackMetalCost = savegame.pumpjackMetalCost;
		if(typeof savegame.pumpjackGemCost !== "undefined") pumpjackGemCost = savegame.pumpjackGemCost;
		if(typeof savegame.pumpjackOilCost !== "undefined") pumpjackOilCost = savegame.pumpjackOilCost;
		if(typeof savegame.pumpjackOutput !== "undefined") pumpjackOutput = savegame.pumpjackOutput;
		if(typeof savegame.oilField !== "undefined") oilField = savegame.oilField;
		if(typeof savegame.oilFieldSpaceMetalCost !== "undefined") oilFieldLunariteCost = savegame.oilFieldSpaceMetalCost;
		if(typeof savegame.oilFieldLunariteCost !== "undefined") oilFieldLunariteCost = savegame.oilFieldLunariteCost;
		if(typeof savegame.oilFieldTitaniumCost !== "undefined") oilFieldTitaniumCost = savegame.oilFieldTitaniumCost;
		if(typeof savegame.oilFieldSiliconCost !== "undefined") oilFieldSiliconCost = savegame.oilFieldSiliconCost;
		if(typeof savegame.oilRig !== "undefined") oilRig = savegame.oilRig;
		if(typeof savegame.oilRigSpaceMetalCost !== "undefined") oilRigLunariteCost = savegame.oilRigSpaceMetalCost;
		if(typeof savegame.oilRigLunariteCost !== "undefined") oilRigLunariteCost = savegame.oilRigLunariteCost;
		if(typeof savegame.oilRigTitaniumCost !== "undefined") oilRigTitaniumCost = savegame.oilRigTitaniumCost;
		if(typeof savegame.oilRigMeteoriteCost !== "undefined") oilRigMeteoriteCost = savegame.oilRigMeteoriteCost;
		if(typeof savegame.metal !== "undefined") metal = savegame.metal;
		if(typeof savegame.metalStorage !== "undefined") metalStorage = savegame.metalStorage;
		if(typeof savegame.metalNextStorage !== "undefined") metalNextStorage = savegame.metalNextStorage;
		if(typeof savegame.miner !== "undefined") miner = savegame.miner;
		if(typeof savegame.minerMetalCost !== "undefined") minerMetalCost = savegame.minerMetalCost;
		if(typeof savegame.minerWoodCost !== "undefined") minerWoodCost = savegame.minerWoodCost;
		if(typeof savegame.heavyDrill !== "undefined") heavyDrill = savegame.heavyDrill;
		if(typeof savegame.heavyDrillMetalCost !== "undefined") heavyDrillMetalCost = savegame.heavyDrillMetalCost;
		if(typeof savegame.heavyDrillGemCost !== "undefined") heavyDrillGemCost = savegame.heavyDrillGemCost;
		if(typeof savegame.heavyDrillOilCost !== "undefined") heavyDrillOilCost = savegame.heavyDrillOilCost;
		if(typeof savegame.heavyDrillOutput !== "undefined") heavyDrillOutput = savegame.heavyDrillOutput;
		if(typeof savegame.gigaDrill !== "undefined") gigaDrill = savegame.gigaDrill;
		if(typeof savegame.gigaDrillSpaceMetalCost !== "undefined") gigaDrillLunariteCost = savegame.gigaDrillSpaceMetalCost;
		if(typeof savegame.gigaDrillLunariteCost !== "undefined") gigaDrillLunariteCost = savegame.gigaDrillLunariteCost;
		if(typeof savegame.gigaDrillGemCost !== "undefined") gigaDrillGemCost = savegame.gigaDrillGemCost;
		if(typeof savegame.gigaDrillSiliconCost !== "undefined") gigaDrillSiliconCost = savegame.gigaDrillSiliconCost;
		if(typeof savegame.quantumDrill !== "undefined") quantumDrill = savegame.quantumDrill;
		if(typeof savegame.quantumDrillSpaceMetalCost !== "undefined") quantumDrillLunariteCost = savegame.quantumDrillSpaceMetalCost;
		if(typeof savegame.quantumDrillLunariteCost !== "undefined") quantumDrillLunariteCost = savegame.quantumDrillLunariteCost;
		if(typeof savegame.quantumDrillGoldCost !== "undefined") quantumDrillGoldCost = savegame.quantumDrillGoldCost;
		if(typeof savegame.quantumDrillMeteoriteCost !== "undefined") quantumDrillMeteoriteCost = savegame.quantumDrillMeteoriteCost;
		if(typeof savegame.gem !== "undefined") gem = savegame.gem;
		if(typeof savegame.gemStorage !== "undefined") gemStorage = savegame.gemStorage;
		if(typeof savegame.gemNextStorage !== "undefined") gemNextStorage = savegame.gemNextStorage;
		if(typeof savegame.gemMiner !== "undefined") gemMiner = savegame.gemMiner;
		if(typeof savegame.gemMinerMetalCost !== "undefined") gemMinerMetalCost = savegame.gemMinerMetalCost;
		if(typeof savegame.gemMinerGemCost !== "undefined") gemMinerGemCost = savegame.gemMinerGemCost;
		if(typeof savegame.advancedDrill !== "undefined") advancedDrill = savegame.advancedDrill;
		if(typeof savegame.advancedDrillMetalCost !== "undefined") advancedDrillMetalCost = savegame.advancedDrillMetalCost;
		if(typeof savegame.advancedDrillGemCost !== "undefined") advancedDrillGemCost = savegame.advancedDrillGemCost;
		if(typeof savegame.advancedDrillOilCost !== "undefined") advancedDrillOilCost = savegame.advancedDrillOilCost;
		if(typeof savegame.advancedDrillOutput !== "undefined") advancedDrillOutput = savegame.advancedDrillOutput;
		if(typeof savegame.diamondDrill !== "undefined") diamondDrill = savegame.diamondDrill;
		if(typeof savegame.diamondDrillSpaceMetalCost !== "undefined") diamondDrillLunariteCost = savegame.diamondDrillSpaceMetalCost;
		if(typeof savegame.diamondDrillLunariteCost !== "undefined") diamondDrillLunariteCost = savegame.diamondDrillLunariteCost;
		if(typeof savegame.diamondDrillGemCost !== "undefined") diamondDrillGemCost = savegame.diamondDrillGemCost;
		if(typeof savegame.diamondDrillSiliconCost !== "undefined") diamondDrillSiliconCost = savegame.diamondDrillSiliconCost;
		if(typeof savegame.carbyneDrill !== "undefined") carbyneDrill = savegame.carbyneDrill;
		if(typeof savegame.carbyneDrillSpaceMetalCost !== "undefined") carbyneDrillLunariteCost = savegame.carbyneDrillSpaceMetalCost;
		if(typeof savegame.carbyneDrillLunariteCost !== "undefined") carbyneDrillLunariteCost = savegame.carbyneDrillLunariteCost;
		if(typeof savegame.carbyneDrillGemCost !== "undefined") carbyneDrillGemCost = savegame.carbyneDrillGemCost;
		if(typeof savegame.carbyneDrillMeteoriteCost !== "undefined") carbyneDrillMeteoriteCost = savegame.carbyneDrillMeteoriteCost;
		if(typeof savegame.charcoal !== "undefined") charcoal = savegame.charcoal;
		if(typeof savegame.charcoalStorage !== "undefined") charcoalStorage = savegame.charcoalStorage;
		if(typeof savegame.charcoalNextStorage !== "undefined") charcoalNextStorage = savegame.charcoalNextStorage;
		if(typeof savegame.charcoalToggled !== "undefined") charcoalToggled = savegame.charcoalToggled;
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
		if(typeof savegame.kilnSpaceMetalCost !== "undefined") kilnLunariteCost = savegame.kilnSpaceMetalCost;
		if(typeof savegame.kilnLunariteCost !== "undefined") kilnLunariteCost = savegame.kilnLunariteCost;
		if(typeof savegame.kilnGemCost !== "undefined") kilnGemCost = savegame.kilnGemCost;
		if(typeof savegame.kilnSiliconCost !== "undefined") kilnSiliconCost = savegame.kilnSiliconCost;
		if(typeof savegame.fryer !== "undefined") fryer = savegame.fryer;
		if(typeof savegame.fryerSpaceMetalCost !== "undefined") fryerLunariteCost = savegame.fryerSpaceMetalCost;
		if(typeof savegame.fryerLunariteCost !== "undefined") fryerLunariteCost = savegame.fryerLunariteCost;
		if(typeof savegame.fryerLavaCost !== "undefined") fryerLavaCost = savegame.fryerLavaCost;
		if(typeof savegame.fryerMeteoriteCost !== "undefined") fryerMeteoriteCost = savegame.fryerMeteoriteCost;
		if(typeof savegame.wood !== "undefined") wood = savegame.wood;
		if(typeof savegame.woodStorage !== "undefined") woodStorage = savegame.woodStorage;
		if(typeof savegame.woodNextStorage !== "undefined") woodNextStorage = savegame.woodNextStorage;
		if(typeof savegame.woodcutter !== "undefined") woodcutter = savegame.woodcutter;
		if(typeof savegame.woodcutterMetalCost !== "undefined") woodcutterMetalCost = savegame.woodcutterMetalCost;
		if(typeof savegame.woodcutterWoodCost !== "undefined") woodcutterWoodCost = savegame.woodcutterWoodCost;
		if(typeof savegame.laserCutter !== "undefined") laserCutter = savegame.laserCutter;
		if(typeof savegame.laserCutterMetalCost !== "undefined") laserCutterMetalCost = savegame.laserCutterMetalCost;
		if(typeof savegame.laserCutterGemCost !== "undefined") laserCutterGemCost = savegame.laserCutterGemCost;
		if(typeof savegame.laserCutterOilCost !== "undefined") laserCutterOilCost = savegame.laserCutterOilCost;
		if(typeof savegame.laserCutterOutput !== "undefined") laserCutterOutput = savegame.laserCutterOutput;
		if(typeof savegame.deforester !== "undefined") deforester = savegame.deforester;
		if(typeof savegame.deforesterSpaceMetalCost !== "undefined") deforesterLunariteCost = savegame.deforesterSpaceMetalCost;
		if(typeof savegame.deforesterLunariteCost !== "undefined") deforesterLunariteCost = savegame.deforesterLunariteCost;
		if(typeof savegame.deforesterTitaniumCost !== "undefined") deforesterTitaniumCost = savegame.deforesterTitaniumCost;
		if(typeof savegame.deforesterSiliconCost !== "undefined") deforesterSiliconCost = savegame.deforesterSiliconCost;
		if(typeof savegame.infuser !== "undefined") infuser = savegame.infuser;
		if(typeof savegame.infuserSpaceMetalCost !== "undefined") infuserLunariteCost = savegame.infuserSpaceMetalCost;
		if(typeof savegame.infuserLunariteCost !== "undefined") infuserLunariteCost = savegame.infuserLunariteCost;
		if(typeof savegame.infuserOilCost !== "undefined") infuserOilCost = savegame.infuserOilCost;
		if(typeof savegame.infuserMeteoriteCost !== "undefined") infuserMeteoriteCost = savegame.infuserMeteoriteCost;
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
		if(typeof savegame.moonWorkerGemCost !== "undefined") moonWorkerGemCost = savegame.moonWorkerGemCost;
		if(typeof savegame.moonDrill !== "undefined") moonDrill = savegame.moonDrill;
		if(typeof savegame.moonDrillMetalCost !== "undefined") moonDrillMetalCost = savegame.moonDrillMetalCost;
		if(typeof savegame.moonDrillGemCost !== "undefined") moonDrillGemCost = savegame.moonDrillGemCost;
		if(typeof savegame.moonDrillOilCost !== "undefined") moonDrillOilCost = savegame.moonDrillOilCost;
		if(typeof savegame.moonQuarry !== "undefined") moonQuarry = savegame.moonQuarry;
		if(typeof savegame.moonQuarrySpaceMetalCost !== "undefined") moonQuarryLunariteCost = savegame.moonQuarrySpaceMetalCost;
		if(typeof savegame.moonQuarryLunariteCost !== "undefined") moonQuarryLunariteCost = savegame.moonQuarryLunariteCost;
		if(typeof savegame.moonQuarryGemCost !== "undefined") moonQuarryGemCost = savegame.moonQuarryGemCost;
		if(typeof savegame.moonQuarrySiliconCost !== "undefined") moonQuarrySiliconCost = savegame.moonQuarrySiliconCost;
		if(typeof savegame.planetExcavator !== "undefined") planetExcavator = savegame.planetExcavator;
		if(typeof savegame.planetExcavatorTitaniumCost !== "undefined") planetExcavatorTitaniumCost = savegame.planetExcavatorTitaniumCost;
		if(typeof savegame.planetExcavatorIceCost !== "undefined") planetExcavatorIceCost = savegame.planetExcavatorIceCost;
		if(typeof savegame.planetExcavatorMeteoriteCost !== "undefined") planetExcavatorMeteoriteCost = savegame.planetExcavatorMeteoriteCost;
		if(typeof savegame.vacuum !== "undefined") vacuum = savegame.vacuum;
		if(typeof savegame.vacuumSpaceMetalCost !== "undefined") vacuumLunariteCost = savegame.vacuumSpaceMetalCost;
		if(typeof savegame.vacuumLunariteCost !== "undefined") vacuumLunariteCost = savegame.vacuumLunariteCost;
		if(typeof savegame.vacuumGemCost !== "undefined") vacuumGemCost = savegame.vacuumGemCost;
		if(typeof savegame.suctionExcavator !== "undefined") suctionExcavator = savegame.suctionExcavator;
		if(typeof savegame.suctionExcavatorSpaceMetalCost !== "undefined") suctionExcavatorLunariteCost = savegame.suctionExcavatorSpaceMetalCost;
		if(typeof savegame.suctionExcavatorLunariteCost !== "undefined") suctionExcavatorLunariteCost = savegame.suctionExcavatorLunariteCost;
		if(typeof savegame.suctionExcavatorGemCost !== "undefined") suctionExcavatorGemCost = savegame.suctionExcavatorGemCost;
		if(typeof savegame.suctionExcavatorOilCost !== "undefined") suctionExcavatorOilCost = savegame.suctionExcavatorOilCost;
		if(typeof savegame.spaceCow !== "undefined") spaceCow = savegame.spaceCow;
		if(typeof savegame.spaceCowSpaceMetalCost !== "undefined") spaceCowLunariteCost = savegame.spaceCowSpaceMetalCost;
		if(typeof savegame.spaceCowLunariteCost !== "undefined") spaceCowLunariteCost = savegame.spaceCowLunariteCost;
		if(typeof savegame.spaceCowTitaniumCost !== "undefined") spaceCowTitaniumCost = savegame.spaceCowTitaniumCost;
		if(typeof savegame.spaceCowSiliconCost !== "undefined") spaceCowSiliconCost = savegame.spaceCowSiliconCost;
		if(typeof savegame.vent !== "undefined") vent = savegame.vent;
		if(typeof savegame.ventSpaceMetalCost !== "undefined") ventLunariteCost = savegame.ventSpaceMetalCost;
		if(typeof savegame.ventLunariteCost !== "undefined") ventLunariteCost = savegame.ventLunariteCost;
		if(typeof savegame.ventHeliumCost !== "undefined") ventHeliumCost = savegame.ventHeliumCost;
		if(typeof savegame.ventMeteoriteCost !== "undefined") ventMeteoriteCost = savegame.ventMeteoriteCost;
		if(typeof savegame.explorer !== "undefined") explorer = savegame.explorer;
		if(typeof savegame.explorerGemCost !== "undefined") explorerGemCost = savegame.explorerGemCost;
		if(typeof savegame.spaceMetalDrill !== "undefined") lunariteDrill = savegame.spaceMetalDrill;
		if(typeof savegame.spaceMetalDrillSpaceMetalCost !== "undefined") lunariteDrillLunariteCost = savegame.spaceMetalDrillSpaceMetalCost;
		if(typeof savegame.spaceMetalDrillLunariteCost !== "undefined") lunariteDrillLunariteCost = savegame.spaceMetalDrillLunariteCost;
		if(typeof savegame.spaceMetalDrillGemCost !== "undefined") lunariteDrillGemCost = savegame.spaceMetalDrillGemCost;
		if(typeof savegame.spaceMetalDrillOilCost !== "undefined") lunariteDrillOilCost = savegame.spaceMetalDrillOilCost;
		if(typeof savegame.lunariteDrill !== "undefined") lunariteDrill = savegame.lunariteDrill;
		if(typeof savegame.lunariteDrillSpaceMetalCost !== "undefined") lunariteDrillLunariteCost = savegame.lunariteDrillSpaceMetalCost;
		if(typeof savegame.lunariteDrillLunariteCost !== "undefined") lunariteDrillLunariteCost = savegame.lunariteDrillLunariteCost;
		if(typeof savegame.lunariteDrillGemCost !== "undefined") lunariteDrillGemCost = savegame.lunariteDrillGemCost;
		if(typeof savegame.lunariteDrillOilCost !== "undefined") lunariteDrillOilCost = savegame.lunariteDrillOilCost;
		if(typeof savegame.pentaDrill !== "undefined") pentaDrill = savegame.pentaDrill;
		if(typeof savegame.pentaDrillSpaceMetalCost !== "undefined") pentaDrillLunariteCost = savegame.pentaDrillSpaceMetalCost;
		if(typeof savegame.pentaDrillLunariteCost !== "undefined") pentaDrillLunariteCost = savegame.pentaDrillLunariteCost;
		if(typeof savegame.pentaDrillGemCost !== "undefined") pentaDrillGemCost = savegame.pentaDrillGemCost;
		if(typeof savegame.pentaDrillSiliconCost !== "undefined") pentaDrillSiliconCost = savegame.pentaDrillSiliconCost;
		if(typeof savegame.titanDrill !== "undefined") titanDrill = savegame.titanDrill;
		if(typeof savegame.titanDrillSpaceMetalCost !== "undefined") titanDrillLunariteCost = savegame.titanDrillSpaceMetalCost;
		if(typeof savegame.titanDrillLunariteCost !== "undefined") titanDrillLunariteCost = savegame.titanDrillLunariteCost;
		if(typeof savegame.titanDrillGoldCost !== "undefined") titanDrillGoldCost = savegame.titanDrillGoldCost;
		if(typeof savegame.titanDrillMeteoriteCost !== "undefined") titanDrillMeteoriteCost = savegame.titanDrillMeteoriteCost;
		if(typeof savegame.droid !== "undefined") droid = savegame.droid;
		if(typeof savegame.droidSpaceMetalCost !== "undefined") droidLunariteCost = savegame.droidSpaceMetalCost;
		if(typeof savegame.droidLunariteCost !== "undefined") droidLunariteCost = savegame.droidLunariteCost;
		if(typeof savegame.droidMethaneCost !== "undefined") droidMethaneCost = savegame.droidMethaneCost;
		if(typeof savegame.destroyer !== "undefined") destroyer = savegame.destroyer;
		if(typeof savegame.destroyerSpaceMetalCost !== "undefined") destroyerLunariteCost = savegame.destroyerSpaceMetalCost;
		if(typeof savegame.destroyerLunariteCost !== "undefined") destroyerLunariteCost = savegame.destroyerLunariteCost;
		if(typeof savegame.destroyerGemCost !== "undefined") destroyerGemCost = savegame.destroyerGemCost;
		if(typeof savegame.destroyerOilCost !== "undefined") destroyerOilCost = savegame.destroyerOilCost;
		if(typeof savegame.deathStar !== "undefined") deathStar = savegame.deathStar;
		if(typeof savegame.deathStarSpaceMetalCost !== "undefined") deathStarLunariteCost = savegame.deathStarSpaceMetalCost;
		if(typeof savegame.deathStarLunariteCost !== "undefined") deathStarLunariteCost = savegame.deathStarLunariteCost;
		if(typeof savegame.deathStarSilverCost !== "undefined") deathStarSilverCost = savegame.deathStarSilverCost;
		if(typeof savegame.deathStarSiliconCost !== "undefined") deathStarSiliconCost = savegame.deathStarSiliconCost;
		if(typeof savegame.actuator !== "undefined") actuator = savegame.actuator;
		if(typeof savegame.actuatorSpaceMetalCost !== "undefined") actuatorLunariteCost = savegame.actuatorSpaceMetalCost;
		if(typeof savegame.actuatorLunariteCost !== "undefined") actuatorLunariteCost = savegame.actuatorLunariteCost;
		if(typeof savegame.actuatorHeliumCost !== "undefined") actuatorHeliumCost = savegame.actuatorHeliumCost;
		if(typeof savegame.actuatorMeteoriteCost !== "undefined") actuatorMeteoriteCost = savegame.actuatorMeteoriteCost;
		if(typeof savegame.scout !== "undefined") scout = savegame.scout;
		if(typeof savegame.scoutSpaceMetalCost !== "undefined") scoutLunariteCost = savegame.scoutSpaceMetalCost;
		if(typeof savegame.scoutLunariteCost !== "undefined") scoutLunariteCost = savegame.scoutLunariteCost;
		if(typeof savegame.scoutTitaniumCost !== "undefined") scoutTitaniumCost = savegame.scoutTitaniumCost;
		if(typeof savegame.spaceLaser !== "undefined") spaceLaser = savegame.spaceLaser;
		if(typeof savegame.spaceLaserSpaceMetalCost !== "undefined") spaceLaserLunariteCost = savegame.spaceLaserSpaceMetalCost;
		if(typeof savegame.spaceLaserLunariteCost !== "undefined") spaceLaserLunariteCost = savegame.spaceLaserLunariteCost;
		if(typeof savegame.spaceLaserGemCost !== "undefined") spaceLaserGemCost = savegame.spaceLaserGemCost;
		if(typeof savegame.spaceLaserOilCost !== "undefined") spaceLaserOilCost = savegame.spaceLaserOilCost;
		if(typeof savegame.bertha !== "undefined") bertha = savegame.bertha;
		if(typeof savegame.berthaSpaceMetalCost !== "undefined") berthaLunariteCost = savegame.berthaSpaceMetalCost;
		if(typeof savegame.berthaLunariteCost !== "undefined") berthaLunariteCost = savegame.berthaLunariteCost;
		if(typeof savegame.berthaTitaniumCost !== "undefined") berthaTitaniumCost = savegame.berthaTitaniumCost;
		if(typeof savegame.berthaSiliconCost !== "undefined") berthaSiliconCost = savegame.berthaSiliconCost;
		if(typeof savegame.cannon !== "undefined") cannon = savegame.cannon;
		if(typeof savegame.cannonSpaceMetalCost !== "undefined") cannonLunariteCost = savegame.cannonSpaceMetalCost;
		if(typeof savegame.cannonLunariteCost !== "undefined") cannonLunariteCost = savegame.cannonLunariteCost;
		if(typeof savegame.cannonOilCost !== "undefined") cannonOilCost = savegame.cannonOilCost;
		if(typeof savegame.cannonMeteoriteCost !== "undefined") cannonMeteoriteCost = savegame.cannonMeteoriteCost;
		if(typeof savegame.blowtorch !== "undefined") blowtorch = savegame.blowtorch;
		if(typeof savegame.blowtorchSpaceMetalCost !== "undefined") blowtorchLunariteCost = savegame.blowtorchSpaceMetalCost;
		if(typeof savegame.blowtorchLunariteCost !== "undefined") blowtorchLunariteCost = savegame.blowtorchLunariteCost;
		if(typeof savegame.blowtorchTitaniumCost !== "undefined") blowtorchTitaniumCost = savegame.blowtorchTitaniumCost;
		if(typeof savegame.scorcher !== "undefined") scorcher = savegame.scorcher;
		if(typeof savegame.scorcherSpaceMetalCost !== "undefined") scorcherLunariteCost = savegame.scorcherSpaceMetalCost;
		if(typeof savegame.scorcherLunariteCost !== "undefined") scorcherLunariteCost = savegame.scorcherLunariteCost;
		if(typeof savegame.scorcherGemCost !== "undefined") scorcherGemCost = savegame.scorcherGemCost;
		if(typeof savegame.scorcherOilCost !== "undefined") scorcherOilCost = savegame.scorcherOilCost;
		if(typeof savegame.annihilator !== "undefined") annihilator = savegame.annihilator;
		if(typeof savegame.annihilatorSpaceMetalCost !== "undefined") annihilatorLunariteCost = savegame.annihilatorSpaceMetalCost;
		if(typeof savegame.annihilatorLunariteCost !== "undefined") annihilatorLunariteCost = savegame.annihilatorLunariteCost;
		if(typeof savegame.annihilatorGemCost !== "undefined") annihilatorGemCost = savegame.annihilatorGemCost;
		if(typeof savegame.annihilatorSilverCost !== "undefined") annihilatorSilverCost = savegame.annihilatorSilverCost;
		if(typeof savegame.desert !== "undefined") desert = savegame.desert;
		if(typeof savegame.desertSpaceMetalCost !== "undefined") desertLunariteCost = savegame.desertSpaceMetalCost;
		if(typeof savegame.desertLunariteCost !== "undefined") desertLunariteCost = savegame.desertLunariteCost;
		if(typeof savegame.desertSiliconCost !== "undefined") desertSiliconCost = savegame.desertSiliconCost;
		if(typeof savegame.desertMeteoriteCost !== "undefined") desertMeteoriteCost = savegame.desertMeteoriteCost;
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
		if(typeof savegame.grinderTitaniumCost !== "undefined") grinderTitaniumCost = savegame.grinderTitaniumCost;
		if(typeof savegame.grinderSpaceMetalCost !== "undefined") grinderLunariteCost = savegame.grinderSpaceMetalCost;
		if(typeof savegame.grinderLunariteCost !== "undefined") grinderLunariteCost = savegame.grinderLunariteCost;
		if(typeof savegame.grinderGoldCost !== "undefined") grinderGoldCost = savegame.grinderGoldCost;
		if(typeof savegame.cubic !== "undefined") cubic = savegame.cubic;
		if(typeof savegame.cubicUraniumCost !== "undefined") cubicUraniumCost = savegame.cubicUraniumCost;
		if(typeof savegame.cubicSpaceMetalCost !== "undefined") cubicLunariteCost = savegame.cubicSpaceMetalCost;
		if(typeof savegame.cubicLunariteCost !== "undefined") cubicLunariteCost = savegame.cubicLunariteCost;
		if(typeof savegame.cubicOilCost !== "undefined") cubicOilCost = savegame.cubicOilCost;
		if(typeof savegame.enricher !== "undefined") enricher = savegame.enricher;
		if(typeof savegame.enricherSpaceMetalCost !== "undefined") enricherLunariteCost = savegame.enricherSpaceMetalCost;
		if(typeof savegame.enricherLunariteCost !== "undefined") enricherLunariteCost = savegame.enricherLunariteCost;
		if(typeof savegame.enricherTitaniumCost !== "undefined") enricherTitaniumCost = savegame.enricherTitaniumCost;
		if(typeof savegame.enricherSiliconCost !== "undefined") enricherSiliconCost = savegame.enricherSiliconCost;
		if(typeof savegame.recycler !== "undefined") recycler = savegame.recycler;
		if(typeof savegame.recyclerSpaceMetalCost !== "undefined") recyclerLunariteCost = savegame.recyclerSpaceMetalCost;
		if(typeof savegame.recyclerLunariteCost !== "undefined") recyclerLunariteCost = savegame.recyclerLunariteCost;
		if(typeof savegame.recyclerMethaneCost !== "undefined") recyclerMethaneCost = savegame.recyclerMethaneCost;
		if(typeof savegame.recyclerMeteoriteCost !== "undefined") recyclerMeteoriteCost = savegame.recyclerMeteoriteCost;
		if(typeof savegame.crucible !== "undefined") crucible = savegame.crucible;
		if(typeof savegame.crucibleGemCost !== "undefined") crucibleGemCost = savegame.crucibleGemCost;
		if(typeof savegame.crucibleSpaceMetalCost !== "undefined") crucibleLunariteCost = savegame.crucibleSpaceMetalCost;
		if(typeof savegame.crucibleLunariteCost !== "undefined") crucibleLunariteCost = savegame.crucibleLunariteCost;
		if(typeof savegame.extractor !== "undefined") extractor = savegame.extractor;
		if(typeof savegame.extractorSpaceMetalCost !== "undefined") extractorLunariteCost = savegame.extractorSpaceMetalCost;
		if(typeof savegame.extractorLunariteCost !== "undefined") extractorLunariteCost = savegame.extractorLunariteCost;
		if(typeof savegame.extractorTitaniumCost !== "undefined") extractorTitaniumCost = savegame.extractorTitaniumCost;
		if(typeof savegame.extractorSiliconCost !== "undefined") extractorSiliconCost = savegame.extractorSiliconCost;
		if(typeof savegame.extruder !== "undefined") extruder = savegame.extruder;
		if(typeof savegame.extruderSpaceMetalCost !== "undefined") extruderLunariteCost = savegame.extruderSpaceMetalCost;
		if(typeof savegame.extruderLunariteCost !== "undefined") extruderLunariteCost = savegame.extruderLunariteCost;
		if(typeof savegame.extruderTitaniumCost !== "undefined") extruderTitaniumCost = savegame.extruderTitaniumCost;
		if(typeof savegame.extruderSiliconCost !== "undefined") extruderSiliconCost = savegame.extruderSiliconCost;
		if(typeof savegame.veluptuator !== "undefined") veluptuator = savegame.veluptuator;
		if(typeof savegame.veluptuatorSpaceMetalCost !== "undefined") veluptuatorLunariteCost = savegame.veluptuatorSpaceMetalCost;
		if(typeof savegame.veluptuatorLunariteCost !== "undefined") veluptuatorLunariteCost = savegame.veluptuatorLunariteCost;
		if(typeof savegame.veluptuatorGoldCost !== "undefined") veluptuatorGoldCost = savegame.veluptuatorGoldCost;
		if(typeof savegame.veluptuatorMeteoriteCost !== "undefined") veluptuatorMeteoriteCost = savegame.veluptuatorMeteoriteCost;
		if(typeof savegame.collector !== "undefined") collector = savegame.collector;
		if(typeof savegame.collectorSpaceMetalCost !== "undefined") collectorLunariteCost = savegame.collectorSpaceMetalCost;
		if(typeof savegame.collectorLunariteCost !== "undefined") collectorLunariteCost = savegame.collectorLunariteCost;
		if(typeof savegame.collectorTitaniumCost !== "undefined") collectorTitaniumCost = savegame.collectorTitaniumCost;
		if(typeof savegame.magnet !== "undefined") magnet = savegame.magnet;
		if(typeof savegame.magnetSpaceMetalCost !== "undefined") magnetLunariteCost = savegame.magnetSpaceMetalCost;
		if(typeof savegame.magnetLunariteCost !== "undefined") magnetLunariteCost = savegame.magnetLunariteCost;
		if(typeof savegame.magnetTitaniumCost !== "undefined") magnetTitaniumCost = savegame.magnetTitaniumCost;
		if(typeof savegame.magnetGoldCost !== "undefined") magnetGoldCost = savegame.magnetGoldCost;
		if(typeof savegame.eCell !== "undefined") eCell = savegame.eCell;
		if(typeof savegame.eCellSilverCost !== "undefined") eCellSilverCost = savegame.eCellSilverCost;
		if(typeof savegame.eCellGoldCost !== "undefined") eCellGoldCost = savegame.eCellGoldCost;
		if(typeof savegame.eCellSiliconCost !== "undefined") eCellSiliconCost = savegame.eCellSiliconCost;
		if(typeof savegame.hindenburg !== "undefined") hindenburg = savegame.hindenburg;
		if(typeof savegame.hindenburgSpaceMetalCost !== "undefined") hindenburgLunariteCost = savegame.hindenburgSpaceMetalCost;
		if(typeof savegame.hindenburgLunariteCost !== "undefined") hindenburgLunariteCost = savegame.hindenburgLunariteCost;
		if(typeof savegame.hindenburgMethaneCost !== "undefined") hindenburgMethaneCost = savegame.hindenburgMethaneCost;
		if(typeof savegame.hindenburgMeteoriteCost !== "undefined") hindenburgMeteoriteCost = savegame.hindenburgMeteoriteCost;
		if(typeof savegame.drone !== "undefined") drone = savegame.drone;
		if(typeof savegame.droneSpaceMetalCost !== "undefined") droneLunariteCost = savegame.droneSpaceMetalCost;
		if(typeof savegame.droneLunariteCost !== "undefined") droneLunariteCost = savegame.droneLunariteCost;
		if(typeof savegame.droneSiliconCost !== "undefined") droneSiliconCost = savegame.droneSiliconCost;
		if(typeof savegame.tanker !== "undefined") tanker = savegame.tanker;
		if(typeof savegame.tankerSpaceMetalCost !== "undefined") tankerLunariteCost = savegame.tankerSpaceMetalCost;
		if(typeof savegame.tankerLunariteCost !== "undefined") tankerLunariteCost = savegame.tankerLunariteCost;
		if(typeof savegame.tankerTitaniumCost !== "undefined") tankerTitaniumCost = savegame.tankerTitaniumCost;
		if(typeof savegame.tankerSiliconCost !== "undefined") tankerSiliconCost = savegame.tankerSiliconCost;
		if(typeof savegame.compressor !== "undefined") compressor = savegame.compressor;
		if(typeof savegame.compressorSpaceMetalCost !== "undefined") compressorLunariteCost = savegame.compressorSpaceMetalCost;
		if(typeof savegame.compressorLunariteCost !== "undefined") compressorLunariteCost = savegame.compressorLunariteCost;
		if(typeof savegame.compressorTitaniumCost !== "undefined") compressorTitaniumCost = savegame.compressorTitaniumCost;
		if(typeof savegame.compressorSiliconCost !== "undefined") compressorSiliconCost = savegame.compressorSiliconCost;
		if(typeof savegame.skimmer !== "undefined") skimmer = savegame.skimmer;
		if(typeof savegame.skimmerSpaceMetalCost !== "undefined") skimmerLunariteCost = savegame.skimmerSpaceMetalCost;
		if(typeof savegame.skimmerLunariteCost !== "undefined") skimmerLunariteCost = savegame.skimmerLunariteCost;
		if(typeof savegame.skimmerTitaniumCost !== "undefined") skimmerTitaniumCost = savegame.skimmerTitaniumCost;
		if(typeof savegame.skimmerMeteoriteCost !== "undefined") skimmerMeteoriteCost = savegame.skimmerMeteoriteCost;
		if(typeof savegame.icePick !== "undefined") icePick = savegame.icePick;
		if(typeof savegame.icePickSpaceMetalCost !== "undefined") icePickLunariteCost = savegame.icePickSpaceMetalCost;
		if(typeof savegame.icePickLunariteCost !== "undefined") icePickLunariteCost = savegame.icePickLunariteCost;
		if(typeof savegame.icePickGemCost !== "undefined") icePickGemCost = savegame.icePickGemCost;
		if(typeof savegame.iceDrill !== "undefined") iceDrill = savegame.iceDrill;
		if(typeof savegame.iceDrillSpaceMetalCost !== "undefined") iceDrillLunariteCost = savegame.iceDrillSpaceMetalCost;
		if(typeof savegame.iceDrillLunariteCost !== "undefined") iceDrillLunariteCost = savegame.iceDrillLunariteCost;
		if(typeof savegame.iceDrillTitaniumCost !== "undefined") iceDrillTitaniumCost = savegame.iceDrillTitaniumCost;
		if(typeof savegame.iceDrillSiliconCost !== "undefined") iceDrillSiliconCost = savegame.iceDrillSiliconCost;
		if(typeof savegame.freezer !== "undefined") freezer = savegame.freezer;
		if(typeof savegame.freezerSpaceMetalCost !== "undefined") freezerLunariteCost = savegame.freezerSpaceMetalCost;
		if(typeof savegame.freezerLunariteCost !== "undefined") freezerLunariteCost = savegame.freezerLunariteCost;
		if(typeof savegame.freezerTitaniumCost !== "undefined") freezerTitaniumCost = savegame.freezerTitaniumCost;
		if(typeof savegame.freezerSiliconCost !== "undefined") freezerSiliconCost = savegame.freezerSiliconCost;
		if(typeof savegame.mrFreeze !== "undefined") mrFreeze = savegame.mrFreeze;
		if(typeof savegame.mrFreezeWoodCost !== "undefined") mrFreezeWoodCost = savegame.mrFreezeWoodCost;
		if(typeof savegame.mrFreezeHeliumCost !== "undefined") mrFreezeHeliumCost = savegame.mrFreezeHeliumCost;
		if(typeof savegame.mrFreezeMeteoriteCost !== "undefined") mrFreezeMeteoriteCost = savegame.mrFreezeMeteoriteCost;
		if(typeof savegame.printer !== "undefined") printer = savegame.printer;
		if(typeof savegame.printerSpaceMetalCost !== "undefined") printerLunariteCost = savegame.printerSpaceMetalCost;
		if(typeof savegame.printerLunariteCost !== "undefined") printerLunariteCost = savegame.printerLunariteCost;
		if(typeof savegame.printerSiliconCost !== "undefined") printerSiliconCost = savegame.printerSiliconCost;
		if(typeof savegame.web !== "undefined") web = savegame.web;
		if(typeof savegame.webSpaceMetalCost !== "undefined") webLunariteCost = savegame.webSpaceMetalCost;
		if(typeof savegame.webLunariteCost !== "undefined") webLunariteCost = savegame.webLunariteCost;
		if(typeof savegame.webUraniumCost !== "undefined") webUraniumCost = savegame.webUraniumCost;
		if(typeof savegame.webSiliconCost !== "undefined") webSiliconCost = savegame.webSiliconCost;
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
