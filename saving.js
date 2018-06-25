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
		bath: bath,
		bathToggled: bathToggled,
		energy: energy,
		battery: battery,
		batteryT2: batteryT2,
		batteryT3: batteryT3,
		batteryT4: batteryT4,
		batteryT5: batteryT5,
		charcoalEngine: charcoalEngine,
		solarPanel: solarPanel,
		methaneStation: methaneStation,
		nuclearStation: nuclearStation,
		magmatic: magmatic,
		fusionReactor: fusionReactor,
		oil: oil,
		oilStorage: oilStorage,
		oilNextStorage: oilNextStorage,
		pump: pump,
		pumpjack: pumpjack,
		oilField: oilField,
		oilRig: oilRig,
		metal: metal,
		metalStorage: metalStorage,
		metalNextStorage: metalNextStorage,
		miner: miner,
		heavyDrill: heavyDrill,
		gigaDrill: gigaDrill,
		quantumDrill: quantumDrill,
		gem: gem,
		gemStorage: gemStorage,
		gemNextStorage: gemNextStorage,
		gemMiner: gemMiner,
		advancedDrill: advancedDrill,
		diamondDrill: diamondDrill,
		carbyneDrill: carbyneDrill,
		charcoal: charcoal,
		charcoalStorage: charcoalStorage,
		charcoalNextStorage: charcoalNextStorage,
		charcoalToggled: charcoalToggled,
		woodburner: woodburner,
		furnace: furnace,
		furnaceWoodInput: furnaceWoodInput,
		kiln: kiln,
		fryer: fryer,
		wood: wood,
		woodStorage: woodStorage,
		woodNextStorage: woodNextStorage,
		woodcutter: woodcutter,
		laserCutter: laserCutter,
		deforester: deforester,
		infuser: infuser,
		science: science,
		lab: lab,
		labT2: labT2,
		labT3: labT3,
		labT4: labT4,
		labT5: labT5,
		rocket: rocket,
		rocketFuel: rocketFuel,
		rocketFuelToggled: rocketFuelToggled,
		chemicalPlant: chemicalPlant,
		oxidisation: oxidisation,
		hydrazine: hydrazine,
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
		overexchange: overexchange,
	}, data);

	return localSave;
}

function legacyLoad(savegame){
	"use strict";

	if(savegame){
		ga('send', 'event', 'Loading', 'Conversion to OOP');
		if(typeof savegame.companyName !== "undefined") companyName = savegame.companyName;
		if(typeof savegame.plasma !== "undefined") Game.resources.entries.plasma.current = savegame.plasma;
		if(typeof savegame.PSU !== "undefined") PSU = savegame.PSU;
		if(typeof savegame.PSUT2 !== "undefined") PSUT2 = savegame.PSUT2;
		if(typeof savegame.heater !== "undefined") Game.buildings.entries.plasmaT1.current = savegame.heater;
		if(typeof savegame.heaterToggled !== "undefined") heaterToggled = savegame.heaterToggled;
		if(typeof savegame.plasmatic !== "undefined") Game.buildings.entries.plasmaT2.current = savegame.plasmatic;
		if(typeof savegame.plasmaticToggled !== "undefined") plasmaticToggled = savegame.plasmaticToggled;
		if(typeof savegame.bath !== "undefined") Game.buildings.entries.plasmaT3.current = savegame.bath;
		if(typeof savegame.bathToggled !== "undefined") bathToggled = savegame.bathToggled;
		if(typeof savegame.energy !== "undefined") Game.resources.entries.energy.current = savegame.energy;
		if(typeof savegame.battery !== "undefined") battery = savegame.battery;
		if(typeof savegame.batteryT2 !== "undefined") batteryT2 = savegame.batteryT2;
		if(typeof savegame.batteryT3 !== "undefined") batteryT3 = savegame.batteryT3;
		if(typeof savegame.batteryT4 !== "undefined") batteryT4 = savegame.batteryT4;
		if(typeof savegame.batteryT5 !== "undefined") batteryT5 = savegame.batteryT5;
		if(typeof savegame.charcoalEngine !== "undefined") Game.buildings.entries.energyT1.current = savegame.charcoalEngine;
		if(typeof savegame.solarPanel !== "undefined") Game.buildings.entries.energyT2.current = savegame.solarPanel;
		if(typeof savegame.methaneStation !== "undefined") Game.buildings.entries.energyT3.current = savegame.methaneStation;
		if(typeof savegame.nuclearStation !== "undefined") Game.buildings.entries.energyT4.current = savegame.nuclearStation;
		if(typeof savegame.magmatic !== "undefined") Game.buildings.entries.energyT5.current = savegame.magmatic;
		if(typeof savegame.fusionReactor !== "undefined") Game.buildings.entries.energyT6.current = savegame.fusionReactor;
		if(typeof savegame.oil !== "undefined") Game.resources.entries.oil.current = savegame.oil;
		if(typeof savegame.oilStorage !== "undefined") Game.resources.entries.oil.capacity = savegame.oilStorage;
		if(typeof savegame.pump !== "undefined") Game.buildings.entries.oilT1.current = savegame.pump;
		if(typeof savegame.pumpjack !== "undefined") Game.buildings.entries.oilT2.current = savegame.pumpjack;
		if(typeof savegame.oilField !== "undefined") Game.buildings.entries.oilT3.current = savegame.oilField;
		if(typeof savegame.oilRig !== "undefined") Game.buildings.entries.oilT4.current = savegame.oilRig;
		if(typeof savegame.metal !== "undefined") Game.resources.entries.metal.current = savegame.metal;
		if(typeof savegame.metalStorage !== "undefined") Game.resources.entries.metal.capacity = savegame.metalStorage;
		if(typeof savegame.miner !== "undefined") Game.buildings.entries.metalT1.current = savegame.miner;
		if(typeof savegame.heavyDrill !== "undefined") Game.buildings.entries.metalT2.current = savegame.heavyDrill;
		if(typeof savegame.gigaDrill !== "undefined") Game.buildings.entries.metalT3.current = savegame.gigaDrill;
		if(typeof savegame.quantumDrill !== "undefined") Game.buildings.entries.metalT4.current = savegame.quantumDrill;
		if(typeof savegame.gem !== "undefined") Game.resources.entries.gem.current = savegame.gem;
		if(typeof savegame.gemStorage !== "undefined") Game.resources.entries.gem.capacity = savegame.gemStorage;
		if(typeof savegame.gemMiner !== "undefined") Game.buildings.entries.gemT1.current = savegame.gemMiner;
		if(typeof savegame.advancedDrill !== "undefined") Game.buildings.entries.gemT2.current = savegame.advancedDrill;
		if(typeof savegame.diamondDrill !== "undefined") Game.buildings.entries.gemT3.current = savegame.diamondDrill;
		if(typeof savegame.carbyneDrill !== "undefined") Game.buildings.entries.gemT4.current = savegame.carbyneDrill;
		if(typeof savegame.charcoal !== "undefined") Game.resources.entries.charcoal.current = savegame.charcoal;
		if(typeof savegame.charcoalStorage !== "undefined") Game.resources.entries.charcoal.capacity = savegame.charcoalStorage;
		if(typeof savegame.charcoalToggled !== "undefined") charcoalToggled = savegame.charcoalToggled;
		if(typeof savegame.woodburner !== "undefined") Game.buildings.entries.charcoalT1.current = savegame.woodburner;
		if(typeof savegame.furnace !== "undefined") Game.buildings.entries.charcoalT2.current = savegame.furnace;
		if(typeof savegame.furnaceWoodInput !== "undefined") furnaceWoodInput = savegame.furnaceWoodInput;
		if(typeof savegame.kiln !== "undefined") Game.buildings.entries.charcoalT3.current = savegame.kiln;
		if(typeof savegame.fryer !== "undefined") Game.buildings.entries.charcoalT4.current = savegame.fryer;
		if(typeof savegame.wood !== "undefined") Game.resources.entries.wood.current = savegame.wood;
		if(typeof savegame.woodStorage !== "undefined") Game.resources.entries.wood.capacity = savegame.woodStorage;
		if(typeof savegame.woodcutter !== "undefined") Game.buildings.entries.woodT1.current = savegame.woodcutter;
		if(typeof savegame.laserCutter !== "undefined") Game.buildings.entries.woodT2.current = savegame.laserCutter;
		if(typeof savegame.deforester !== "undefined") Game.buildings.entries.woodT3.current = savegame.deforester;
		if(typeof savegame.infuser !== "undefined") Game.buildings.entries.woodT4.current = savegame.infuser;
		if(typeof savegame.science !== "undefined") science = savegame.science;
		if(typeof savegame.lab !== "undefined") lab = savegame.lab;
		if(typeof savegame.labT2 !== "undefined") labT2 = savegame.labT2;
		if(typeof savegame.labT3 !== "undefined") labT3 = savegame.labT3;
		if(typeof savegame.labT4 !== "undefined") labT4 = savegame.labT4;
		if(typeof savegame.labT5 !== "undefined") labT5 = savegame.labT5;
		if(typeof savegame.rocket !== "undefined") rocket = savegame.rocket;
		if(typeof savegame.rocketFuel !== "undefined") rocketFuel = savegame.rocketFuel;
		if(typeof savegame.rocketFuelToggled !== "undefined") rocketFuelToggled = savegame.rocketFuelToggled;
		if(typeof savegame.chemicalPlant !== "undefined") chemicalPlant = savegame.chemicalPlant;
		if(typeof savegame.oxidisation !== "undefined") oxidisation = savegame.oxidisation;
		if(typeof savegame.hydrazine !== "undefined") hydrazine = savegame.hydrazine;
		if(typeof savegame.lunarite !== "undefined") Game.resources.entries.lunarite.current = savegame.lunarite;
		if(typeof savegame.lunariteStorage !== "undefined") Game.resources.entries.lunarite.capacity = savegame.lunariteStorage;
		if(typeof savegame.methane !== "undefined") Game.resources.entries.methane.current = savegame.methane;
		if(typeof savegame.methaneStorage !== "undefined") Game.resources.entries.methane.capacity = savegame.methaneStorage;
		if(typeof savegame.titanium !== "undefined") Game.resources.entries.titanium.current = savegame.titanium;
		if(typeof savegame.titaniumStorage !== "undefined") Game.resources.entries.titanium.capacity = savegame.titaniumStorage;
		if(typeof savegame.gold !== "undefined") Game.resources.entries.gold.current = savegame.gold;
		if(typeof savegame.goldStorage !== "undefined") Game.resources.entries.gold.capacity = savegame.goldStorage;
		if(typeof savegame.silver !== "undefined") Game.resources.entries.silver.current = savegame.silver;
		if(typeof savegame.silverStorage !== "undefined") Game.resources.entries.silver.capacity = savegame.silverStorage;
		if(typeof savegame.silicon !== "undefined") Game.resources.entries.silicon.current = savegame.silicon;
		if(typeof savegame.siliconStorage !== "undefined") Game.resources.entries.silicon.capacity = savegame.siliconStorage;
		if(typeof savegame.lava !== "undefined") Game.resources.entries.lava.current = savegame.lava;
		if(typeof savegame.lavaStorage !== "undefined") Game.resources.entries.lava.capacity = savegame.lavaStorage;
		if(typeof savegame.hydrogen !== "undefined") Game.resources.entries.hydrogen.current = savegame.hydrogen;
		if(typeof savegame.hydrogenStorage !== "undefined") Game.resources.entries.hydrogen.capacity = savegame.hydrogenStorage;
		if(typeof savegame.helium !== "undefined") Game.resources.entries.helium.current = savegame.helium;
		if(typeof savegame.heliumStorage !== "undefined") Game.resources.entries.helium.capacity = savegame.heliumStorage;
		if(typeof savegame.ice !== "undefined") Game.resources.entries.ice.current = savegame.ice;
		if(typeof savegame.iceStorage !== "undefined") Game.resources.entries.ice.capacity = savegame.iceStorage;
		if(typeof savegame.meteorite !== "undefined") Game.resources.entries.meteorite.current = savegame.meteorite;
		if(typeof savegame.meteoriteStorage !== "undefined") Game.resources.entries.meteorite.capacity = savegame.meteoriteStorage;
		if(typeof savegame.moonWorker !== "undefined") Game.buildings.entries.lunariteT1.current = savegame.moonWorker;
		if(typeof savegame.moonDrill !== "undefined") Game.buildings.entries.lunariteT2.current = savegame.moonDrill;
		if(typeof savegame.moonQuarry !== "undefined") Game.buildings.entries.lunariteT3.current = savegame.moonQuarry;
		if(typeof savegame.planetExcavator !== "undefined") Game.buildings.entries.lunariteT4.current = savegame.planetExcavator;
		if(typeof savegame.vacuum !== "undefined") Game.buildings.entries.methaneT1.current = savegame.vacuum;
		if(typeof savegame.suctionExcavator !== "undefined") Game.buildings.entries.methaneT2.current = savegame.suctionExcavator;
		if(typeof savegame.spaceCow !== "undefined") Game.buildings.entries.methaneT3.current = savegame.spaceCow;
		if(typeof savegame.vent !== "undefined") Game.buildings.entries.methaneT4.current = savegame.vent;
		if(typeof savegame.explorer !== "undefined") Game.buildings.entries.titaniumT1.current = savegame.explorer;
		if(typeof savegame.lunariteDrill !== "undefined") Game.buildings.entries.titaniumT2.current = savegame.lunariteDrill;
		if(typeof savegame.pentaDrill !== "undefined") Game.buildings.entries.titaniumT3.current = savegame.pentaDrill;
		if(typeof savegame.titanDrill !== "undefined") Game.buildings.entries.titaniumT4.current = savegame.titanDrill;
		if(typeof savegame.droid !== "undefined") Game.buildings.entries.goldT1.current = savegame.droid;
		if(typeof savegame.destroyer !== "undefined") Game.buildings.entries.goldT2.current = savegame.destroyer;
		if(typeof savegame.deathStar !== "undefined") Game.buildings.entries.goldT3.current = savegame.deathStar;
		if(typeof savegame.actuator !== "undefined") Game.buildings.entries.goldT4.current = savegame.actuator;
		if(typeof savegame.scout !== "undefined") Game.buildings.entries.titaniumT1.current = savegame.scout;
		if(typeof savegame.spaceLaser !== "undefined") Game.buildings.entries.titaniumT2.current = savegame.spaceLaser;
		if(typeof savegame.bertha !== "undefined") Game.buildings.entries.titaniumT3.current = savegame.bertha;
		if(typeof savegame.cannon !== "undefined") Game.buildings.entries.titaniumT4.current = savegame.cannon;
		if(typeof savegame.blowtorch !== "undefined") Game.buildings.entries.siliconT1.current = savegame.blowtorch;
		if(typeof savegame.scorcher !== "undefined") Game.buildings.entries.siliconT2.current = savegame.scorcher;
		if(typeof savegame.annihilator !== "undefined") Game.buildings.entries.siliconT3.current = savegame.annihilator;
		if(typeof savegame.desert !== "undefined") Game.buildings.entries.siliconT4.current = savegame.desert;
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
		if(typeof savegame.uranium !== "undefined") Game.resources.entries.uranium.current = savegame.uranium;
		if(typeof savegame.uraniumStorage !== "undefined") Game.resources.entries.uranium.capacity = savegame.uraniumStorage;
		if(typeof savegame.activated !== "undefined") activated = savegame.activated;
		if(typeof savegame.grinder !== "undefined") Game.buildings.entries.uraniumT1.current = savegame.grinder;
		if(typeof savegame.cubic !== "undefined") Game.buildings.entries.uraniumT2.current = savegame.cubic;
		if(typeof savegame.enricher !== "undefined") Game.buildings.entries.uraniumT3.current = savegame.enricher;
		if(typeof savegame.recycler !== "undefined") Game.buildings.entries.uraniumT4.current = savegame.recycler;
		if(typeof savegame.crucible !== "undefined") Game.buildings.entries.lavaT1.current = savegame.crucible;
		if(typeof savegame.extractor !== "undefined") Game.buildings.entries.lavaT2.current = savegame.extractor;
		if(typeof savegame.extruder !== "undefined") Game.buildings.entries.lavaT3.current = savegame.extruder;
		if(typeof savegame.veluptuator !== "undefined") Game.buildings.entries.lavaT4.current = savegame.veluptuator;
		if(typeof savegame.collector !== "undefined") Game.buildings.entries.hydrogenT1.current = savegame.collector;
		if(typeof savegame.magnet !== "undefined") Game.buildings.entries.hydrogenT2.current = savegame.magnet;
		if(typeof savegame.eCell !== "undefined") Game.buildings.entries.hydrogenT3.current = savegame.eCell;
		if(typeof savegame.hindenburg !== "undefined") Game.buildings.entries.hydrogenT4.current = savegame.hindenburg;
		if(typeof savegame.drone !== "undefined") Game.buildings.entries.heliumT1.current = savegame.drone;
		if(typeof savegame.tanker !== "undefined") Game.buildings.entries.heliumT2.current = savegame.tanker;
		if(typeof savegame.compressor !== "undefined") Game.buildings.entries.heliumT3.current = savegame.compressor;
		if(typeof savegame.skimmer !== "undefined") Game.buildings.entries.heliumT4.current = savegame.skimmer;
		if(typeof savegame.icePick !== "undefined") Game.buildings.entries.iceT1.current = savegame.icePick;
		if(typeof savegame.iceDrill !== "undefined") Game.buildings.entries.iceT2.current = savegame.iceDrill;
		if(typeof savegame.freezer !== "undefined") Game.buildings.entries.iceT3.current = savegame.freezer;
		if(typeof savegame.mrFreeze !== "undefined") Game.buildings.entries.iceT4.current = savegame.mrFreeze;
		if(typeof savegame.printer !== "undefined") Game.buildings.entries.meteoriteT1.current = savegame.printer;
		if(typeof savegame.web !== "undefined") Game.buildings.entries.meteoriteT2.current = savegame.web;
		if(typeof savegame.smasher !== "undefined") Game.buildings.entries.meteoriteT3.current = savegame.smasher;
		if(typeof savegame.nebulous !== "undefined") Game.buildings.entries.meteoriteT4.current = savegame.nebulous;
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
