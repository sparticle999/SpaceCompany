Game.resources = (function(){

	var instance = {};

	instance.dataVersion = 5;
	instance.entries = {};
	instance.categoryEntries = {};
	instance.storageUpgrades = {};

	instance.initialise = function() {
		var numResources = 0;
		for (var id in Game.resourceData) {
			numResources++;
			this.entries[id] = this.initResource(id);
		}

		var numCategories = 0;
		for (id in Game.resourceCategoryData) {
			numCategories++;
			this.categoryEntries[id] = this.initResourceCategory(id);
		}

		for (id in Game.storageData) {
			var data = this.initStorage(id);
			this.storageUpgrades[id] = data;
			this.entries[data.resource].storage = data;
		}

		console.debug("Loaded " + numCategories + " Resource Categories");
		console.debug("Loaded " + numResources + " Resource Types");
	};

	instance.initResource = function(id) {
		// using extend to create a new object and leave the defaults unchanged
		var data = jQuery.extend({}, Game.resourceData[id]);
		data.setId(id);
		data.capacity = data.baseCapacity;
		return data;
	};

	instance.initResourceCategory = function(id) {
		// using extend to create a new object and leave the defaults unchanged
		var data = jQuery.extend({}, Game.resourceCategoryData[id]);
		data.setId(id);
		return data;
	};

	instance.initStorage = function(id) {
		// using extend to create a new object and leave the defaults unchanged
		var data = jQuery.extend({}, Game.storageData[id]);
		data.cost = jQuery.extend({}, data.cost);
		data.setId(id);
		return data;
	};

    instance.update = function(delta) {
        for(var id in this.entries) {
            var addValue = this.entries[id].perSecond * delta;
            this.addResource(id, addValue);
        }
    };

    instance.save = function(data) {
        data.resources = { v: this.dataVersion, r: {}};
        for(var key in this.entries) {
            data.resources.r[key] = {
                n: this.entries[key].current,
                u: this.entries[key].unlocked
            }
        }
    };

    instance.load = function(data) {
        if(data.resources) {
            if(data.resources.v && data.resources.v === this.dataVersion) {
                for(var id in data.resources.i) {
                    if(this.entries[id]) {
                        this.addResource(id, data.resources.r[id].n);
                        this.entries[id].unlocked = data.resources.r[id].u;
                    }
                }
            }
        }

		// Load the old storage values
		for (id in RESOURCE) {
			var capacity = data[RESOURCE[id] + 'Storage'];
			if (typeof capacity === 'undefined') {
				continue;
			}
			this.entries[RESOURCE[id]].capacity = capacity;
			this.entries[RESOURCE[id]].storage.updateCost(capacity);
		}
    };

	// TODO: change to data-driven resources when available
	instance.getResource = function(id) {
		if (typeof window[id] === 'undefined') {
			return 0;
		}
		return window[id];
	};

	// TODO: change to data-driven resources when available
	instance.getStorage = function(id) {
		if (id === RESOURCE.Energy) {
			return getMaxEnergy();
		} else if (id === RESOURCE.Plasma) {
			return getMaxPlasma();
		} else if (id === RESOURCE.Science) {
			// -1 for unlimited storage
			return -1;
		} else if (id === RESOURCE.RocketFuel) {
			return -1;
		} else if (typeof window[id + 'Storage'] === 'undefined') {
			return 0;
		}
		return window[id + 'Storage'];
	};

	// TODO: change to data-driven resources when available
	instance.getProduction = function(id) {
		if (typeof window[id + 'ps'] === 'undefined') {
			return 0;
		}
		return window[id + 'ps'];
	};

	// TODO: change to data-driven resources when available
	instance.addResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		if (typeof window[id] === 'undefined') {
			return;
		}

		// Add the resource and clamp
		var newValue = window[id] + count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			window[id] = Math.max(0, Math.min(newValue, storage));
		} else {
			window[id] = Math.max(0, newValue);
		}
	};

	// TODO: change to data-driven resources when available
	instance.takeResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		if (typeof window[id] === 'undefined') {
			return;
		}

		// Subtract the resource and clamp
		var newValue = window[id] - count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			window[id] = Math.max(0, Math.min(newValue, storage));
		} else {
			window[id] = Math.max(0, newValue);
		}
	};

	// TODO: change to data-driven resources when available
	instance.maxResource = function(id) {
		if (typeof window[id] === 'undefined') {
			return;
		}

		// resources without a storage cap will return -1 so do nothing
		if (getStorage(id) < 0) {
			return;
		}

		window[id] = getStorage(id);
	};

	instance.getStorageData = function(resourceId) {
		if (typeof this.entries[resourceId] === 'undefined') {
			return null;
		}
		return this.entries[resourceId].storage;
	};

    instance.setPerSecondProduction = function(id, value) {
        if(!this.entries[id]) {
            console.error("Unknown Resource: " + id);
            return;
        }

        if (value < 0 || isNaN(value) || value === undefined) {
            console.error("Invalid per second value: " + value + " for " + id);
            return;
        }

        this.entries[id].perSecond = value;
    };

	instance.upgradeStorage = function(resourceId) {
		var upgradeData = this.getStorageData(resourceId);
		if (upgradeData === null) {
			return;
		}

		// make sure we have the required resources
		for (var costResource in upgradeData.cost) {
			if (this.getResource(costResource) < upgradeData.cost[costResource]) {
				return;
			}
		}

		// now actually spend the resources
		for (costResource in upgradeData.cost) {
			this.takeResource(costResource, upgradeData.cost[costResource]);
		}

		var res = this.getResourceData(resourceId);
		res.capacity *= 2;
		upgradeData.updateCost(res.capacity);

		// still using the old storage variables
		// TODO: remove this when the transition to data-driven storage is complete
		window[resourceId + 'Storage'] = res.capacity;
	};

	instance.updateStorageCosts = function() {
		for (var id in this.storageUpgrades) {
			var storageData = this.storageUpgrades[id];
			storageData.updateCost(this.entries[storageData.resource].capacity);
		}
	};

    instance.calcCost = function(self, resource){
        return Math.floor(Game.buildingData[self.id].cost[resource.toString()] * Math.pow(1.1,self.current));
    };

    instance.updateCost = function(data){
        // TODO
    };

    instance.buyMachine = function(id, count){
        var data = Game.buildings.getBuildingData(id);
        var resourcePass = 0;
        for(var resource in data.cost){
            var res = Game.resources.getResourceData(resource);
            if(res.current >= data.cost[resource]){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(data.cost).length){
            data.current += 1;
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                res.current -= data.cost[resource];
            }
            this.updateCost(data);
            this.updateResourcesPerSecond();
            data.displayNeedsUpdate = true;
        }
    };

    instance.destroyMachine = function(id, count){
        var data = Game.buildings.getBuildingData(id);
        if(data.current >= count){
            data.current -= count;
            this.updateCost(data);
            data.displayNeedsUpdate = true;
        }
    };

    instance.updateResourcesPerSecond = function(){
        for(var resource in this.entries){
            var res = this.entries[resource];
            var ps = 0;
            for(var id in Game.buildings.entries){
                var building = Game.buildings.entries[id];
                for(var value in building.resourcePerSecond){
                    if(value == res){
                        var val = building.resourcePerSecond[value];
                        ps += val * building.current;
                    }
                }
            }
            res.perSecond = ps;
        }
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getResourceData = function(id) {
        return this.entries[id];
    };

    instance.getCategoryData = function(id) {
        return this.categoryEntries[id];
    };

    instance.showByCategory = function(category) {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.category === category) {
                data.hidden = false;
            }
        }
    };

    instance.hideByCategory = function(category) {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.category === category) {
                data.hidden = true;
            }
        }
    };

    return instance;
}());