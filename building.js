Game.buildings = (function(){

	var instance = {};

	instance.dataVersion = 1;
	instance.entries = {};
	instance.updatePerSecondProduction = true;

	instance.initialise = function() {
		var numBuildings = 0;
		for (var id in Game.buildingData) {
			numBuildings++;
			this.entries[id] = this.initBuilding(id);
		}

		console.debug("Loaded " + numBuildings + " Building Types");
	};

	instance.initBuilding = function(id) {
		// using extend to create a new object and leave the defaults unchanged
		var data = jQuery.extend({}, Game.buildingData[id]);
		data.setId(id);
		return data;
	};

	instance.update = function(delta) {

	};

	instance.save = function(data) {
		data.buildings = { v: this.dataVersion, i: {}};
		for(var key in this.entries) {
			data.buildings.i[key] = this.entries[key].current;
		}
	};

	instance.load = function(data) {
		if(data.buildings) {
			if(data.buildings.v && data.buildings.v === this.dataVersion) {
				for(var id in data.buildings.i) {
					if(this.entries[id]) {
						// TODO
					}
				}
			}
		}
	};

	instance.getBuildingData = function(id) {
		return this.entries[id];
	};

	// TODO: change to data-driven buildings when available
	instance.getNum = function(id) {
		var count = window[id];
		if (typeof count === 'undefined') {
			return 0;
		}
		return count;
	};

	instance.calculateEnergyOutput = function(delta) {
		if (globalEnergyLock === true) {
			return 0;
		}

		// Fixed outputs first
		// TODO: make rings/swarms/spheres into buildings
		var output = (ring*5000) +
			(swarm*25000) +
			(sphere*1000000) +
			(this.getNum(BUILDING.SolarPanel) * solarPanelOutput);

		var num = this.getNum(BUILDING.CharcoalEngine);
		if (getResourceAfterTick(RESOURCE.Charcoal, delta) >= num * delta) {
			output += num * charcoalEngineOutput;
		}

		num = this.getNum(BUILDING.MethaneStation);
		if (getResourceAfterTick(RESOURCE.Methane, delta) >= num * 6 * delta) {
			output += num * 23;
		}

		num = this.getNum(BUILDING.NuclearStation);
		if (getResourceAfterTick(RESOURCE.Uranium, delta) >= num * 7 * delta) {
			output += num * 153;
		}

		num = this.getNum(BUILDING.Magmatic);
		if (getResourceAfterTick(RESOURCE.Lava, delta) > num * 11 * delta) {
			output += num * 191;
		}

		num = this.getNum(BUILDING.FusionReactor);
		if (getResourceAfterTick(RESOURCE.Hydrogen, delta) >= num * 10 * delta &&
			getResourceAfterTick(RESOURCE.Helium, delta) >= num * 10 * delta) {
			output += num * 273;
		}

		return output;
	};

	instance.calculateEnergyUse = function (delta) {
		if (globalEnergyLock === true) {
			return 0;
		}

		var use = (this.getNum(BUILDING.Pumpjack) * 4) +
			(this.getNum(BUILDING.HeavyDrill) * 2) +
			(this.getNum(BUILDING.AdvancedDrill) * 2) +
			(this.getNum(BUILDING.LaserCutter) * 4);

		use += (this.getNum(BUILDING.MoonDrill) * 20) +
			(this.getNum(BUILDING.SuctionExcavator) * 16) +
			(this.getNum(BUILDING.LunariteDrill) * 13) +
			(this.getNum(BUILDING.Destroyer) * 19) +
			(this.getNum(BUILDING.SpaceLaser) * 24) +
			(this.getNum(BUILDING.Scorcher) * 18);

		use += (this.getNum(BUILDING.Cubic) * 40) +
			(this.getNum(BUILDING.Extractor) * 58) +
			(this.getNum(BUILDING.Magnet) * 63) +
			(this.getNum(BUILDING.Tanker) * 72) +
			(this.getNum(BUILDING.IceDrill) * 83);

		use += (this.getNum(BUILDING.OilField) * 17) +
			(this.getNum(BUILDING.GigaDrill) * 9) +
			(this.getNum(BUILDING.DiamondDrill) * 15) +
			(this.getNum(BUILDING.Deforester) * 16);

		use += (this.getNum(BUILDING.MoonQuarry) * 70) +
			(this.getNum(BUILDING.SpaceCow) * 49) +
			(this.getNum(BUILDING.PentaDrill) * 46) +
			(this.getNum(BUILDING.DeathStar) * 81) +
			(this.getNum(BUILDING.Bertha) * 65) +
			(this.getNum(BUILDING.Annihilator) * 53);

		use += (this.getNum(BUILDING.Enricher) * 180) +
			(this.getNum(BUILDING.Extruder) * 237) +
			(this.getNum(BUILDING.ECell) * 234) +
			(this.getNum(BUILDING.Compressor) * 248) +
			(this.getNum(BUILDING.Freezer) * 397);

		use += (this.getNum(BUILDING.OilRig) * 44) +
			(this.getNum(BUILDING.QuantumDrill) * 24) +
			(this.getNum(BUILDING.CarbyneDrill) * 40) +
			(this.getNum(BUILDING.Infuser) * 43);

		use += (this.getNum(BUILDING.PlanetExcavator) * 182) +
			(this.getNum(BUILDING.Vent) * 132) +
			(this.getNum(BUILDING.TitanDrill) * 123) +
			(this.getNum(BUILDING.Actuator) * 223) +
			(this.getNum(BUILDING.Cannon) * 170) +
			(this.getNum(BUILDING.Desert) * 138);

		use += (this.getNum(BUILDING.Recycler) * 463) +
			(this.getNum(BUILDING.Veluptuator) * 698) +
			(this.getNum(BUILDING.Hindenburg) * 631) +
			(this.getNum(BUILDING.Skimmer) * 670) +
			(this.getNum(BUILDING.MrFreeze) * 1135);

		use += (this.getNum(BUILDING.Fossilator) * 258) +
			(this.getNum(BUILDING.MultiDrill) * 131) +
			(this.getNum(BUILDING.DiamondChamber) * 273) +
			(this.getNum(BUILDING.Forest) * 275);

		use += (this.getNum(BUILDING.Cloner) * 1157) +
			(this.getNum(BUILDING.InterCow) * 879) +
			(this.getNum(BUILDING.Club) * 690) +
			(this.getNum(BUILDING.Philosopher) * 1387) +
			(this.getNum(BUILDING.Werewolf) * 984) +
			(this.getNum(BUILDING.Tardis) * 746);

		use += (this.getNum(BUILDING.PlanetNuke) * 2719) +
			(this.getNum(BUILDING.Condensator) * 4142) +
			(this.getNum(BUILDING.Harvester) * 3584) +
			(this.getNum(BUILDING.Cage) * 4462) +
			(this.getNum(BUILDING.Overexchange) * 6667);

		if (charcoalToggled === true) {
			use += (this.getNum(BUILDING.Furnace) * 3) +
				(this.getNum(BUILDING.Kiln) * 13) +
				(this.getNum(BUILDING.Fryer) * 34) +
				(this.getNum(BUILDING.MicroPollutor) * 212);
		}

		var num = this.getNum(BUILDING.Heater);
		if (heaterToggled && getResource(RESOURCE.Hydrogen) + getProduction(RESOURCE.Hydrogen) >= num * 10 * delta &&
			getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= num * delta) {
			use += num * 1000;
		}

		num = this.getNum(BUILDING.Plasmatic);
		if (plasmaticToggled && getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= num * 10 * delta) {
			use += num * 8500;
		}

		num = this.getNum(BUILDING.Bath);
		if (bathToggled && getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= num * 10 * delta) {
			use += num * 15000;
		}

		return use;
	};

	return instance;
}());

// globally accessible wrapper for Game.buildings.getNum();
function getBuildingNum(id) {
	return Game.buildings.getNum(id);
}