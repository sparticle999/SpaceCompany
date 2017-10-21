function legacySave(data) {
	"use strict";
	var localSave = $.extend({
		versionNumber: versionNumber,
		companyName: companyName,
		PSU: PSU,
		PSUT2: PSUT2,
		heaterToggled: heaterToggled,
		plasmaticToggled: plasmaticToggled,
		bathToggled: bathToggled,
		battery: battery,
		batteryT2: batteryT2,
		batteryT3: batteryT3,
		batteryT4: batteryT4,
		charcoalToggled: charcoalToggled,
		rocket: rocket,
		rocketFuelToggled: rocketFuelToggled,
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
		meteoriteToggled: meteoriteToggled,
		dyson: dyson,
		sphere: sphere,
		swarm: swarm,
		ring: ring,
		antimatter: antimatter,
		antimatterStorage: antimatterStorage,
		antimatterToggled: antimatterToggled
	}, data);

	return localSave;
}

function legacyLoad(savegame){
	"use strict";
	
	if(savegame){
		if(typeof savegame.companyName !== "undefined") companyName = savegame.companyName;
		if(typeof savegame.PSU !== "undefined") PSU = savegame.PSU;
		if(typeof savegame.PSUT2 !== "undefined") PSUT2 = savegame.PSUT2;
		if(typeof savegame.heaterToggled !== "undefined") heaterToggled = savegame.heaterToggled;
		if(typeof savegame.plasmaticToggled !== "undefined") plasmaticToggled = savegame.plasmaticToggled;
		if(typeof savegame.bathToggled !== "undefined") bathToggled = savegame.bathToggled;
		if(typeof savegame.battery !== "undefined") battery = savegame.battery;
		if(typeof savegame.batteryT2 !== "undefined") batteryT2 = savegame.batteryT2;
		if(typeof savegame.batteryT3 !== "undefined") batteryT3 = savegame.batteryT3;
		if(typeof savegame.batteryT4 !== "undefined") batteryT4 = savegame.batteryT4;
		if(typeof savegame.charcoalToggled !== "undefined") charcoalToggled = savegame.charcoalToggled;
		if(typeof savegame.rocket !== "undefined") rocket = savegame.rocket;
		if(typeof savegame.rocketFuelToggled !== "undefined") rocketFuelToggled = savegame.rocketFuelToggled;
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
		if(typeof savegame.dyson !== "undefined") dyson = savegame.dyson;
		if(typeof savegame.sphere !== "undefined") sphere = savegame.sphere;
		if(typeof savegame.swarm !== "undefined") swarm = savegame.swarm;
		if(typeof savegame.ring !== "undefined") ring = savegame.ring;
		if(typeof savegame.antimatter !== "undefined") antimatter = savegame.antimatter;
		if(typeof savegame.antimatterStorage !== "undefined") antimatterStorage = savegame.antimatterStorage;
		if(typeof savegame.antimatterToggled !== "undefined") antimatterToggled = savegame.antimatterToggled;
	}
}
