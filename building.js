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

	instance.calculateEnergyOutput = function() {
		if (globalEnergyLock === true) {
			return 0;
		}

		// Fixed outputs first
		// TODO: make rings/swarms/spheres into buildings
		var output = (ring*5000) + (swarm*25000) + (sphere*1000000);

		for (var id in this.entries) {
			var data = this.entries[id];
			if (data.output === null || typeof data.output[RESOURCE.Energy] === 'undefined') {
				// this doesn't output energy
				continue;
			}

			var hasResources = true;
			if (data.upkeep !== null) {
				for (var upkeepResource in data.upkeep) {
					if (getResource(upkeepResource) < data.upkeep[upkeepResource] * data.current) {
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

		for (var id in this.entries) {
			var data = this.entries[id];
			if (data.upkeep === null || typeof data.upkeep[RESOURCE.Energy] === 'undefined') {
				// this doesn't require energy
				continue;
			}

			var hasResources = true;
			for (var upkeepResource in data.upkeep) {
				if (upkeepResource === RESOURCE.Energy) {
					// don't check energy here because we're calculating energy use
					continue;
				}
				if (getResource(upkeepResource) < data.upkeep[upkeepResource] * data.current) {
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
		for (var id in this.entries) {
			var data = this.entries[id];
			if (data.output === null) {
				// this doesn't produce anything
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
				if (getResource(upkeepResource) < data.upkeep[upkeepResource] * data.current) {
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

		// still using the old building variables
		// TODO: remove this when the transition to data-driven buildings is complete
		window[buildingId] = buildingData.current;

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