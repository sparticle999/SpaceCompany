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
		data.cost = jQuery.extend({}, data.cost);
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

		// Load the old building values
		for (id in BUILDING) {
			var current = data[BUILDING[id]];
			if (typeof current === 'undefined') {
				continue;
			}
			this.entries[BUILDING[id]].current = current;
			this.entries[BUILDING[id]].updateCost(current);
		}
	};

	instance.getBuildingData = function(id) {
		var data = this.entries[id];
		if (typeof data === 'undefined') {
			return null;
		}
		return data;
	};

	// TODO: change to data-driven buildings when available
	instance.getNum = function(id) {
		var count = window[id];
		if (typeof count === 'undefined') {
			return 0;
		}
		return count;
	};

	instance.calculateEnergyOutput = function() {
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
		if (getResource(RESOURCE.Charcoal) >= num) {
			output += num * charcoalEngineOutput;
		}

		num = this.getNum(BUILDING.MethaneStation);
		if (getResource(RESOURCE.Methane) >= num * 6) {
			output += num * 23;
		}

		num = this.getNum(BUILDING.NuclearStation);
		if (getResource(RESOURCE.Uranium) >= num * 7) {
			output += num * 153;
		}

		num = this.getNum(BUILDING.Magmatic);
		if (getResource(RESOURCE.Lava) > num * 11) {
			output += num * 191;
		}

		num = this.getNum(BUILDING.FusionReactor);
		if (getResource(RESOURCE.Hydrogen) >= num * 10 &&
			getResource(RESOURCE.Helium) >= num * 10) {
			output += num * 273;
		}

		return output;
	};

	instance.calculateEnergyUse = function() {
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
		if (heaterToggled && getResource(RESOURCE.Hydrogen) >= num * 10 && getResource(RESOURCE.Plasma) >= num) {
			use += num * 1000;
		}

		num = this.getNum(BUILDING.Plasmatic);
		if (plasmaticToggled && getResource(RESOURCE.Plasma) >= num * 10) {
			use += num * 8500;
		}

		num = this.getNum(BUILDING.Bath);
		if (bathToggled && getResource(RESOURCE.Plasma) >= num * 10) {
			use += num * 15000;
		}

		return use;
	};

	instance.calculateProduction = function(energyLow, resourceMultiplier, outProd) {

		// base building production, no energy required
		outProd[RESOURCE.Uranium] += this.getNum(BUILDING.Grinder) * resourceMultiplier;
		outProd[RESOURCE.Oil] += this.getNum(BUILDING.Pump) * resourceMultiplier;
		outProd[RESOURCE.Metal] += this.getNum(BUILDING.Miner) * resourceMultiplier;
		outProd[RESOURCE.Gem] += this.getNum(BUILDING.GemMiner) * resourceMultiplier;
		outProd[RESOURCE.Wood] += this.getNum(BUILDING.Woodcutter) * resourceMultiplier;
		outProd[RESOURCE.Lunarite] += this.getNum(BUILDING.MoonWorker) * resourceMultiplier;
		outProd[RESOURCE.Methane] += this.getNum(BUILDING.Vacuum) * resourceMultiplier;
		outProd[RESOURCE.Titanium] += this.getNum(BUILDING.Explorer) * resourceMultiplier;
		outProd[RESOURCE.Gold] += this.getNum(BUILDING.Droid) * resourceMultiplier;
		outProd[RESOURCE.Silver] += this.getNum(BUILDING.Scout) * resourceMultiplier;
		outProd[RESOURCE.Silicon] += this.getNum(BUILDING.Blowtorch) * resourceMultiplier;
		outProd[RESOURCE.Lava] = +this.getNum(BUILDING.Crucible) * resourceMultiplier;
		outProd[RESOURCE.Hydrogen] += this.getNum(BUILDING.Collector) * resourceMultiplier;
		outProd[RESOURCE.Helium] += this.getNum(BUILDING.Drone) * resourceMultiplier;
		outProd[RESOURCE.Ice] += this.getNum(BUILDING.IcePick) * resourceMultiplier;

		outProd[RESOURCE.Science] +=
			this.getNum(BUILDING.Lab) * 0.1 +
			this.getNum(BUILDING.LabT2) * 1 +
			this.getNum(BUILDING.LabT3) * 10 +
			this.getNum(BUILDING.LabT4) * 100 +
			this.getNum(BUILDING.LabT5) * 1000;

		if (energyLow === false && globalEnergyLock === false) {
			outProd[RESOURCE.Oil] += (
				this.getNum(BUILDING.Pumpjack) * pumpjackOutput +
				this.getNum(BUILDING.OilField) * 63 +
				this.getNum(BUILDING.OilRig) * 246 +
				this.getNum(BUILDING.Fossilator) * 2630
			) * resourceMultiplier;

			outProd[RESOURCE.Metal] += (
				this.getNum(BUILDING.HeavyDrill) * heavyDrillOutput +
				this.getNum(BUILDING.GigaDrill) * 108 +
				this.getNum(BUILDING.QuantumDrill) * 427 +
				this.getNum(BUILDING.MultiDrill) * 4797
			) * resourceMultiplier;

			outProd[RESOURCE.Gem] += (
				this.getNum(BUILDING.AdvancedDrill) * advancedDrillOutput +
				this.getNum(BUILDING.DiamondDrill) * 89 +
				this.getNum(BUILDING.CarbyneDrill) * 358 +
				this.getNum(BUILDING.DiamondChamber) * 3861
			) * resourceMultiplier;

			outProd[RESOURCE.Wood] += (
				this.getNum(BUILDING.LaserCutter) * laserCutterOutput +
				this.getNum(BUILDING.Deforester) * 74 +
				this.getNum(BUILDING.Infuser) * 297 +
				this.getNum(BUILDING.Forest) * 3106
			) * resourceMultiplier;

			outProd[RESOURCE.Lunarite] += (
				this.getNum(BUILDING.MoonDrill) * 10 +
				this.getNum(BUILDING.MoonQuarry) * 53 +
				this.getNum(BUILDING.PlanetExcavator) * 207 +
				this.getNum(BUILDING.Cloner) * 2206
			) * resourceMultiplier;

			outProd[RESOURCE.Methane] += (
				this.getNum(BUILDING.SuctionExcavator) * 8 +
				this.getNum(BUILDING.SpaceCow) * 37 +
				this.getNum(BUILDING.Vent) * 149 +
				this.getNum(BUILDING.InterCow) * 1356
			) * resourceMultiplier;

			outProd[RESOURCE.Titanium] += (
				this.getNum(BUILDING.LunariteDrill) * 9 +
				this.getNum(BUILDING.PentaDrill) * 49 +
				this.getNum(BUILDING.TitanDrill) * 197 +
				this.getNum(BUILDING.Club) * 2134
			) * resourceMultiplier;

			outProd[RESOURCE.Gold] += (
				this.getNum(BUILDING.Destroyer) * 8 +
				this.getNum(BUILDING.DeathStar) * 51 +
				this.getNum(BUILDING.Actuator) * 211 +
				this.getNum(BUILDING.Philosopher) * 1960
			) * resourceMultiplier;

			outProd[RESOURCE.Silver] += (
				this.getNum(BUILDING.SpaceLaser) * 13 +
				this.getNum(BUILDING.Bertha) * 53 +
				this.getNum(BUILDING.Cannon) * 208 +
				this.getNum(BUILDING.Werewolf) * 2245
			) * resourceMultiplier;

			outProd[RESOURCE.Silicon] += (
				this.getNum(BUILDING.Scorcher) * 9 +
				this.getNum(BUILDING.Annihilator) * 40 +
				this.getNum(BUILDING.Desert) * 157 +
				this.getNum(BUILDING.Tardis) * 1487
			) * resourceMultiplier;

			outProd[RESOURCE.Uranium] += (
				this.getNum(BUILDING.Cubic) * 9 +
				this.getNum(BUILDING.Enricher) * 61 +
				this.getNum(BUILDING.Recycler) * 235 +
				this.getNum(BUILDING.PlanetNuke) * 2412
			) * resourceMultiplier;

			outProd[RESOURCE.Lava] += (
				this.getNum(BUILDING.Extractor) * 7 +
				this.getNum(BUILDING.Extruder) * 43 +
				this.getNum(BUILDING.Veluptuator) * 187 +
				this.getNum(BUILDING.Condensator) * 2103
			) * resourceMultiplier;

			outProd[RESOURCE.Hydrogen] += (
				this.getNum(BUILDING.Magnet) * 5 +
				this.getNum(BUILDING.ECell) * 28 +
				this.getNum(BUILDING.Hindenburg) * 113 +
				this.getNum(BUILDING.Harvester) * 1292
			) * resourceMultiplier;

			outProd[RESOURCE.Helium] += (
				this.getNum(BUILDING.Tanker) * 11 +
				this.getNum(BUILDING.Compressor) * 57 +
				this.getNum(BUILDING.Skimmer) * 232 +
				this.getNum(BUILDING.Cage) * 2185
			) * resourceMultiplier;

			outProd[RESOURCE.Ice] += (
				this.getNum(BUILDING.IceDrill) * 9 +
				this.getNum(BUILDING.Freezer) * 65 +
				this.getNum(BUILDING.MrFreeze) * 278 +
				this.getNum(BUILDING.Overexchange) * 2532
			) * resourceMultiplier;
		}

		// Deduct resource use from machines
		outProd[RESOURCE.Charcoal] -= this.getNum(BUILDING.CharcoalEngine);
		outProd[RESOURCE.Methane] -= this.getNum(BUILDING.MethaneStation) * 6;
		outProd[RESOURCE.Uranium] -= this.getNum(BUILDING.NuclearStation) * 7;
		outProd[RESOURCE.Lava] -= this.getNum(BUILDING.Magmatic) * 11;
		outProd[RESOURCE.Hydrogen] -= this.getNum(BUILDING.FusionReactor) * 10;
		outProd[RESOURCE.Helium] -= this.getNum(BUILDING.FusionReactor) * 10;

		if (charcoalToggled) {
			var woodCost = this.getNum(BUILDING.Woodburner) * 2;
			if (energyLow === false && globalEnergyLock === false) {
				woodCost +=
					this.getNum(BUILDING.Furnace) * furnaceWoodInput +
					this.getNum(BUILDING.Kiln) * 56 +
					this.getNum(BUILDING.Fryer) * 148 +
					this.getNum(BUILDING.MicroPollutor) * 841;
			}

			if (getResource(RESOURCE.Wood) >= woodCost) {
				outProd[RESOURCE.Wood] -= woodCost;
				outProd[RESOURCE.Charcoal] += this.getNum(BUILDING.Woodburner) * resourceMultiplier;
				if (energyLow === false && globalEnergyLock === false) {
					outProd[RESOURCE.Charcoal] += (
						this.getNum(BUILDING.Furnace) * furnaceOutput +
						this.getNum(BUILDING.Kiln) * 53 +
						this.getNum(BUILDING.Fryer) * 210 +
						this.getNum(BUILDING.MicroPollutor) * 2041
					) * resourceMultiplier;
				}
			}
		}

		if (rocketFuelToggled === true) {
			var oilCost = this.getNum(BUILDING.ChemicalPlant) * 20 + this.getNum(BUILDING.Oxidisation) * 100;
			var charcoalCost = this.getNum(BUILDING.ChemicalPlant) * 20 + this.getNum(BUILDING.Oxidisation) * 100;
			if (getResource(RESOURCE.Oil) >= oilCost && getResource(RESOURCE.Charcoal) >= charcoalCost) {
				outProd[RESOURCE.Oil] -= oilCost;
				outProd[RESOURCE.Charcoal] -= charcoalCost;
				outProd[RESOURCE.RocketFuel] += (
					this.getNum(BUILDING.ChemicalPlant) * 0.2 * chemicalBoost +
					this.getNum(BUILDING.Oxidisation) * 1.5
				) * resourceMultiplier;
			}
			var methaneCost = this.getNum(BUILDING.Hydrazine) * 520;
			if (getResource(RESOURCE.Methane) >= methaneCost) {
				outProd[RESOURCE.Methane] -= methaneCost;
				outProd[RESOURCE.RocketFuel] += this.getNum(BUILDING.Hydrazine * 20) * resourceMultiplier;
			}
		}

		if (heaterToggled === true && !energyLow && globalEnergyLock === false) {
			var numHeater = this.getNum(BUILDING.Heater);
			var adjustment = adjustCost(RESOURCE.Plasma, numHeater * 10, numHeater * resourceMultiplier);
			if (adjustment.g > 0 && getResource(RESOURCE.Hydrogen) >= adjustment.c) {
				outProd[RESOURCE.Hydrogen] -= adjustment.c;
				outProd[RESOURCE.Plasma] += adjustment.g;
			}
		}

		if (plasmaticToggled === true && !energyLow && globalEnergyLock === false) {
			var numPlasmatic = this.getNum(BUILDING.Plasmatic);
			adjustment = adjustCost(RESOURCE.Plasma, numPlasmatic * 80, numPlasmatic * 10 * resourceMultiplier);
			if (adjustment.g > 0 && getResource(RESOURCE.Helium) >= adjustment.c) {
				outProd[RESOURCE.Helium] -= adjustment.c;
				outProd[RESOURCE.Plasma] += adjustment.g;
			}
		}

		if (bathToggled === true && !energyLow && globalEnergyLock === false) {
			var numBath = this.getNum(BUILDING.Bath);
			adjustment = adjustCost(RESOURCE.Plasma, numBath * 100, numBath * 140 * resourceMultiplier);
			if (adjustment.g > 0 && getResource(RESOURCE.Hydrogen) >= adjustment.c && getResource(RESOURCE.Helium) + outProd[RESOURCE.Helium] >= adjustment.c) {
				outProd[RESOURCE.Hydrogen] -= adjustment.c;
				outProd[RESOURCE.Helium] -= adjustment.c;
				outProd[RESOURCE.Plasma] += adjustment.g;
			}
		}

		if (meteoriteToggled === true) {
			var numPrinter = this.getNum(BUILDING.Printer);
			var numWeb = this.getNum(BUILDING.Web);
			adjustment = adjustCost(RESOURCE.Meteorite, (numPrinter * 3) + (numWeb * 21), (numPrinter + numWeb * 8) * resourceMultiplier);
			if (adjustment.g > 0 && getResource(RESOURCE.Plasma) >= adjustment.c) {
				outProd[RESOURCE.Plasma] -= adjustment.c;
				outProd[RESOURCE.Meteorite] += adjustment.g;
			}
		}

		function adjustCost(resource, cost, gain) {
			var targetStorage = getStorage(resource);
			var targetCurrent = getResource(resource);
			var targetPs = outProd[resource];

			var maxGain = targetStorage - targetCurrent;
			if (targetPs < 0) {
				maxGain -= targetPs;
			}

			var gainAbs = Math.min(gain, maxGain);
			var gainRatio = gainAbs / gain;
			var costAbs = cost * gainRatio;

			return {g: gainAbs, c: costAbs};
		}
	};

	instance.updateBuildingCosts = function() {
		for (var id in this.entries) {
			var buildingData = this.entries[id];
			buildingData.updateCost(this.getNum(id));
		}
	};

	instance.buyBuilding = function(buildingId) {
		var buildingData = this.getBuildingData(buildingId);
		if (buildingData === null) {
			return;
		}

		// make sure we have the required resources
		for (var costResource in buildingData.cost) {
			if (getResource(costResource) < buildingData.cost[costResource]) {
				return;
			}
		}

		// now actually spend the resources
		for (costResource in buildingData.cost) {
			Game.resources.takeResource(costResource, buildingData.cost[costResource]);
		}

		buildingData.current++;
		buildingData.updateCost(buildingData.current);

		// still using the old building variables
		// TODO: remove this when the transition to data-driven buildings is complete
		window[buildingId] = buildingData.current;
	};

	instance.destroyBuilding = function(buildingId) {
		var buildingData = this.getBuildingData(buildingId);
		if (buildingData === null) {
			return;
		}

		if (buildingData.current <= 0) {
			return;
		}

		buildingData.current--;
		buildingData.updateCost(buildingData.current);

		// still using the old building variables
		// TODO: remove this when the transition to data-driven buildings is complete
		window[buildingId] = buildingData.current;
	};

	return instance;
}());

// globally accessible wrapper for Game.buildings.getNum();
function getBuildingNum(id) {
	return Game.buildings.getNum(id);
}

// globally accessible wrapper for Game.buildings.buyBuilding();
function buyBuilding(id) {
	return Game.buildings.buyBuilding(id);
}

// globally accessible wrapper for Game.buildings.destroyBuilding();
function destroyMachine(id){
	Game.buildings.destroyBuilding(id);
}