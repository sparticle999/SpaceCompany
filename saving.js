function legacySave(data) {
	"use strict";
	var localSave = $.extend({
		versionNumber: versionNumber,
		companyName: companyName,
		PSU: PSU,
		PSUT2: PSUT2,
		heater: heater,
		heaterToggled: heaterToggled,
		plasmatic: plasmatic,
		plasmaticToggled: plasmaticToggled,
		bath: bath,
		bathToggled: bathToggled,
		battery: battery,
		batteryT2: batteryT2,
		batteryT3: batteryT3,
		batteryT4: batteryT4,
		charcoalEngine: charcoalEngine,
		solarPanel: solarPanel,
		methaneStation: methaneStation,
		nuclearStation: nuclearStation,
		magmatic: magmatic,
		fusionReactor: fusionReactor,
		pump: pump,
		pumpjack: pumpjack,
		oilField: oilField,
		oilRig: oilRig,
		miner: miner,
		heavyDrill: heavyDrill,
		gigaDrill: gigaDrill,
		quantumDrill: quantumDrill,
		gemMiner: gemMiner,
		advancedDrill: advancedDrill,
		diamondDrill: diamondDrill,
		carbyneDrill: carbyneDrill,
		charcoalToggled: charcoalToggled,
		woodburner: woodburner,
		furnace: furnace,
		kiln: kiln,
		fryer: fryer,
		woodcutter: woodcutter,
		laserCutter: laserCutter,
		deforester: deforester,
		infuser: infuser,
		lab: lab,
		labT2: labT2,
		labT3: labT3,
		labT4: labT4,
		labT5: labT5,
		rocket: rocket,
		rocketFuelToggled: rocketFuelToggled,
		chemicalPlant: chemicalPlant,
		oxidisation: oxidisation,
		hydrazine: hydrazine,
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
		activated: activated,
		grinder: grinder,
		cubic: cubic,
		enricher: enricher,
		recycler: recycler,
		crucible: crucible,
		extractor: extractor,
		extruder: extruder,
		veluptuator: veluptuator,
		collector: collector,
		magnet: magnet,
		eCell: eCell,
		hindenburg: hindenburg,
		drone: drone,
		tanker: tanker,
		compressor: compressor,
		skimmer: skimmer,
		icePick: icePick,
		iceDrill: iceDrill,
		freezer: freezer,
		mrFreeze: mrFreeze,
		meteoriteToggled: meteoriteToggled,
		printer: printer,
		web: web,
		smasher: smasher,
		nebulous: nebulous,
		dyson: dyson,
		sphere: sphere,
		swarm: swarm,
		ring: ring,
		antimatter: antimatter,
		antimatterStorage: antimatterStorage,
		antimatterToggled: antimatterToggled,
		planetNuke: planetNuke,
		condensator: condensator,
		fossilator: fossilator,
		multiDrill: multiDrill,
		diamondChamber: diamondChamber,
		microPollutor: microPollutor,
		forest: forest,
		cloner: cloner,
		interCow: interCow,
		club: club,
		philosopher: philosopher,
		werewolf: werewolf,
		tardis: tardis,
		harvester: harvester,
		cage: cage,
		overexchange: overexchange
	}, data);

	return localSave;
}

function legacyLoad(savegame){
	"use strict";
	
	if(savegame){
		if(typeof savegame.companyName !== "undefined") companyName = savegame.companyName;
		if(typeof savegame.PSU !== "undefined") PSU = savegame.PSU;
		if(typeof savegame.PSUT2 !== "undefined") PSUT2 = savegame.PSUT2;
		if(typeof savegame.heater !== "undefined") heater = savegame.heater;
		if(typeof savegame.heaterToggled !== "undefined") heaterToggled = savegame.heaterToggled;
		if(typeof savegame.plasmatic !== "undefined") plasmatic = savegame.plasmatic;
		if(typeof savegame.plasmaticToggled !== "undefined") plasmaticToggled = savegame.plasmaticToggled;
		if(typeof savegame.bath !== "undefined") bath = savegame.bath;
		if(typeof savegame.bathToggled !== "undefined") bathToggled = savegame.bathToggled;
		if(typeof savegame.battery !== "undefined") battery = savegame.battery;
		if(typeof savegame.batteryT2 !== "undefined") batteryT2 = savegame.batteryT2;
		if(typeof savegame.batteryT3 !== "undefined") batteryT3 = savegame.batteryT3;
		if(typeof savegame.batteryT4 !== "undefined") batteryT4 = savegame.batteryT4;
		if(typeof savegame.charcoalEngine !== "undefined") charcoalEngine = savegame.charcoalEngine;
		if(typeof savegame.solarPanel !== "undefined") solarPanel = savegame.solarPanel;
		if(typeof savegame.methaneStation !== "undefined") methaneStation = savegame.methaneStation;
		if(typeof savegame.nuclearStation !== "undefined") nuclearStation = savegame.nuclearStation;
		if(typeof savegame.magmatic !== "undefined") magmatic = savegame.magmatic;
		if(typeof savegame.fusionReactor !== "undefined") fusionReactor = savegame.fusionReactor;
		if(typeof savegame.pump !== "undefined") pump = savegame.pump;
		if(typeof savegame.pumpjack !== "undefined") pumpjack = savegame.pumpjack;
		if(typeof savegame.oilField !== "undefined") oilField = savegame.oilField;
		if(typeof savegame.oilRig !== "undefined") oilRig = savegame.oilRig;
		if(typeof savegame.miner !== "undefined") miner = savegame.miner;
		if(typeof savegame.heavyDrill !== "undefined") heavyDrill = savegame.heavyDrill;
		if(typeof savegame.gigaDrill !== "undefined") gigaDrill = savegame.gigaDrill;
		if(typeof savegame.quantumDrill !== "undefined") quantumDrill = savegame.quantumDrill;
		if(typeof savegame.gemMiner !== "undefined") gemMiner = savegame.gemMiner;
		if(typeof savegame.advancedDrill !== "undefined") advancedDrill = savegame.advancedDrill;
		if(typeof savegame.diamondDrill !== "undefined") diamondDrill = savegame.diamondDrill;
		if(typeof savegame.carbyneDrill !== "undefined") carbyneDrill = savegame.carbyneDrill;
		if(typeof savegame.charcoalToggled !== "undefined") charcoalToggled = savegame.charcoalToggled;
		if(typeof savegame.woodburner !== "undefined") woodburner = savegame.woodburner;
		if(typeof savegame.furnace !== "undefined") furnace = savegame.furnace;
		if(typeof savegame.kiln !== "undefined") kiln = savegame.kiln;
		if(typeof savegame.fryer !== "undefined") fryer = savegame.fryer;
		if(typeof savegame.woodcutter !== "undefined") woodcutter = savegame.woodcutter;
		if(typeof savegame.laserCutter !== "undefined") laserCutter = savegame.laserCutter;
		if(typeof savegame.deforester !== "undefined") deforester = savegame.deforester;
		if(typeof savegame.infuser !== "undefined") infuser = savegame.infuser;
		if(typeof savegame.lab !== "undefined") lab = savegame.lab;
		if(typeof savegame.labT2 !== "undefined") labT2 = savegame.labT2;
		if(typeof savegame.labT3 !== "undefined") labT3 = savegame.labT3;
		if(typeof savegame.labT4 !== "undefined") labT4 = savegame.labT4;
		if(typeof savegame.labT5 !== "undefined") labT5 = savegame.labT5;
		if(typeof savegame.rocket !== "undefined") rocket = savegame.rocket;
		if(typeof savegame.rocketFuelToggled !== "undefined") rocketFuelToggled = savegame.rocketFuelToggled;
		if(typeof savegame.chemicalPlant !== "undefined") chemicalPlant = savegame.chemicalPlant;
		if(typeof savegame.oxidisation !== "undefined") oxidisation = savegame.oxidisation;
		if(typeof savegame.hydrazine !== "undefined") hydrazine = savegame.hydrazine;
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
		if(typeof savegame.smasher !== "undefined") smasher = savegame.smasher;
		if(typeof savegame.nebulous !== "undefined") nebulous = savegame.nebulous;
		if(typeof savegame.dyson !== "undefined") dyson = savegame.dyson;
		if(typeof savegame.sphere !== "undefined") sphere = savegame.sphere;
		if(typeof savegame.swarm !== "undefined") swarm = savegame.swarm;
		if(typeof savegame.ring !== "undefined") ring = savegame.ring;
		if(typeof savegame.antimatter !== "undefined") antimatter = savegame.antimatter;
		if(typeof savegame.antimatterStorage !== "undefined") antimatterStorage = savegame.antimatterStorage;
		if(typeof savegame.antimatterToggled !== "undefined") antimatterToggled = savegame.antimatterToggled;
		if(typeof savegame.planetNuke !== "undefined") planetNuke = savegame.planetNuke;
		if(typeof savegame.condensator !== "undefined") condensator = savegame.condensator;
		if(typeof savegame.fossilator !== "undefined") fossilator = savegame.fossilator;
		if(typeof savegame.multiDrill !== "undefined") multiDrill = savegame.multiDrill;
		if(typeof savegame.diamondChamber !== "undefined") diamondChamber = savegame.diamondChamber;
		if(typeof savegame.microPollutor !== "undefined") microPollutor = savegame.microPollutor;
		if(typeof savegame.forest !== "undefined") forest = savegame.forest;
		if(typeof savegame.cloner !== "undefined") cloner = savegame.cloner;
		if(typeof savegame.interCow !== "undefined") interCow = savegame.interCow;
		if(typeof savegame.club !== "undefined") club = savegame.club;
		if(typeof savegame.philosopher !== "undefined") philosopher = savegame.philosopher;
		if(typeof savegame.werewolf !== "undefined") werewolf = savegame.werewolf;
		if(typeof savegame.tardis !== "undefined") tardis = savegame.tardis;
		if(typeof savegame.harvester !== "undefined") harvester = savegame.harvester;
		if(typeof savegame.cage !== "undefined") cage = savegame.cage;
		if(typeof savegame.overexchange !== "undefined") overexchange = savegame.overexchange;
	}
}
