Game.buildings = (function(){

	var instance = {};

	instance.dataVersion = 2;
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

	instance.reset = function() {
		for (var id in Game.buildingData) {
			this.entries[id] = this.initBuilding(id);
		}
	};

	instance.update = function(delta) {

	};

	instance.save = function(data) {
		data.buildings = { v: this.dataVersion, i: {}};
		for(var key in this.entries) {
			data.buildings.i[key] = {
				n: this.entries[key].current,
				u: this.entries[key].unlocked
			};
		}
	};

	instance.load = function(data) {
		if (data.buildings) {
			if (data.buildings.v) {
				if (data.buildings.v >= 2) {
					this.loadV2(data);
				}
				else if (data.buildings.v === 1) {
					this.loadV1(data);
				}
			}
		}
	};

	instance.loadV1 = function(data) {
		// Load the old building values
		for (var id in BUILDING) {
			var current = data[BUILDING[id]];
			if (typeof current === 'undefined') {
				continue;
			}
			this.entries[BUILDING[id]].current = current;
			this.entries[BUILDING[id]].updateCost(current);
			if (current > 0) {
				this.entries[BUILDING[id].unlocked] = true;
			}
		}
	};

	instance.loadV2 = function(data) {
		for (var id in data.buildings.i) {
			if (typeof this.entries[id] === 'undefined') {
				continue;
			}

			var current = data.buildings.i[id].n;
			this.entries[id].current = current;
			this.entries[id].updateCost(current);
			this.entries[id].unlocked = data.buildings.i[id].u || current > 0;
		}
	};

	instance.getBuildingData = function(id) {
		var data = this.entries[id];
		if (typeof data === 'undefined') {
			return null;
		}
		return data;
	};

	instance.getNum = function(id) {
		var data = this.entries[id];
		if (typeof data === 'undefined') {
			return 0;
		}
		return data.current;
	};

	instance.updateProductionMultiplier = function(buildingId, factor) {
		var data = this.getBuildingData(buildingId);
		if (data === null) {
			return;
		}
		data.prodMultiplier *= factor;
	};

	instance.updateUpkeepMultiplier = function(buildingId, factor) {
		var data = this.getBuildingData(buildingId);
		if (data === null) {
			return;
		}
		data.upkeepMultiplier *= factor;
	};

	instance.setActive = function(buildingId, active) {
		var data = this.getBuildingData(buildingId);
		if (data === null) {
			return;
		}
		data.active = active;
	};

	instance.setActiveByResource = function(resourceId, active) {
		for (var id in this.entries) {
			var data = this.entries[id];
			if (data.resource === resourceId) {
				data.active = active;
			}
		}
	};

	instance.calculateEnergyOutput = function() {
		if (globalEnergyLock === true) {
			return 0;
		}

		// Fixed outputs first
		// TODO: make rings/swarms/spheres into buildings
		var output = (ring*5000) + (swarm*25000) + (sphere*1000000);

		// use the old production as an approximation for current production
		var oldProd = Game.resources.getAllProduction();

		for (var id in BUILDING) {
			var data = this.entries[BUILDING[id]];
			if (data.output === null || typeof data.output[RESOURCE.Energy] === 'undefined') {
				// this doesn't output energy
				continue;
			}
			if (data.active === false) {
				// no energy produced when off
				continue;
			}

			var hasResources = true;
			if (data.upkeep !== null) {
				for (var upkeepResource in data.upkeep) {
					if (getResource(upkeepResource) + oldProd[upkeepResource] < 0) {
						// not enough resources available for upkeep
						hasResources = false;
						break;
					}
				}
			}
			if (hasResources) {
				output += data.output[RESOURCE.Energy] * data.current * data.prodMultiplier;
			}
		}

		return output;
	};

	instance.calculateEnergyUse = function() {
		if (globalEnergyLock === true) {
			return 0;
		}

		var use = 0;

		// use the old production as an approximation for current production
		var oldProd = Game.resources.getAllProduction();

		for (var id in BUILDING) {
			var data = this.entries[BUILDING[id]];
			if (data.upkeep === null || typeof data.upkeep[RESOURCE.Energy] === 'undefined') {
				// this doesn't require energy
				continue;
			}
			if (data.active === false) {
				// no energy consumed when off
				continue;
			}

			var hasResources = true;
			for (var upkeepResource in data.upkeep) {
				if (upkeepResource === RESOURCE.Energy) {
					// don't check energy here because we're calculating energy use
					continue;
				}
				if (getResource(upkeepResource) + oldProd[upkeepResource] < 0) {
					// not enough resources available for upkeep
					hasResources = false;
					break;
				}
			}
			if (hasResources) {
				use += data.upkeep[RESOURCE.Energy] * data.current;
			}
		}

		return use;
	};

	instance.calculateProduction = function(energyLow, resourceMultiplier, outProd) {
		// use the old production as an approximation for current production
		var oldProd = Game.resources.getAllProduction();

		for (var id in this.entries) {
			var data = this.entries[id];
			if (data.output === null) {
				// this doesn't produce anything
				continue;
			}
			if (data.active === false) {
				// no resources produced when off
				continue;
			}
			if ((energyLow || globalEnergyLock) && data.upkeep !== null && typeof data.upkeep[RESOURCE.Energy] !== 'undefined') {
				// energy low! this can't produce anything
				continue;
			}

			// first check that we have enough resources to keep the building active
			var hasResources = true;
			for (var upkeepResource in data.upkeep) {
				if (upkeepResource === RESOURCE.Energy) {
					// don't check energy here because it has already been checked
					continue;
				}
				if (getResource(upkeepResource) + oldProd[upkeepResource] < 0) {
					// not enough resources available for upkeep
					hasResources = false;
					break;
				}
			}

			// now apply the building's output and upkeep
			if (hasResources) {
				for (upkeepResource in data.upkeep) {
					if (upkeepResource === RESOURCE.Energy) {
						// don't remove energy here because it has already been removed
						continue;
					}
					outProd[upkeepResource] -= data.upkeep[upkeepResource] * data.current * data.upkeepMultiplier;
				}
				for (var outputResource in data.output) {
					if (outputResource === RESOURCE.Energy) {
						// don't add this here, it's already been done
						continue;
					}
					var multiplier = 1;
					if (outputResource !== RESOURCE.Science) {
						multiplier = resourceMultiplier;
					}
					outProd[outputResource] += data.output[outputResource] * data.current * data.prodMultiplier * multiplier;
				}
			}
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

		buildingData.onPurchase();

		Game.statistics.add('tierOwned' + buildingData.tier);
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