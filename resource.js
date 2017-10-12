Game.resources = (function(){

	var instance = {};

	instance.dataVersion = 6;
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

	instance.reset = function() {
		for (var id in Game.resourceData) {
			this.entries[id] = this.initResource(id);
		}
		for (id in Game.storageData) {
			var data = this.initStorage(id);
			this.storageUpgrades[id] = data;
			this.entries[data.resource].storage = data;
		}
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
				u: this.entries[key].unlocked,
				s: this.entries[key].capacity
			}
		}
	};

	instance.load = function(data) {
		if (data.resources && data.resources.v) {
			if (data.resources.v >= 6) {
				this.loadV6(data);
			}
			else if (data.resources.v === 5) {
				this.loadV5(data);
			}
		}
	};

	instance.loadV5 = function(data) {
		for (var id in RESOURCE) {
			var capacity = data[RESOURCE[id] + 'Storage'];
			if (typeof capacity !== 'undefined') {
				this.entries[RESOURCE[id]].capacity = capacity;
				this.entries[RESOURCE[id]].storage.updateCost(capacity);
			}

			var amount = data[RESOURCE[id]];
			if (typeof amount !== 'undefined') {
				this.entries[RESOURCE[id]].current = amount;
				this.entries[RESOURCE[id]].unlocked = amount > 0;
			}

			// check unlocked, only modifying if true because not every resource unlocks this way
			var unlocked = contains(data.resourcesUnlocked, RESOURCE[id] + 'Nav');
			if (unlocked) {
				this.entries[RESOURCE[id]].unlocked = true;
			}
			if (contains(data.tabsUnlocked, 'researchTab')) {
				this.entries[RESOURCE.Science].unlocked = true;
			}
			if (contains(data.tabsUnlocked, 'solarSystemTab')) {
				this.entries[RESOURCE.RocketFuel.unlocked] = true;
			}

		}
	};

	instance.loadV6 = function(data) {
		for (var id in data.resources.r) {
			if (this.entries[id]) {
				this.entries[id].capacity = data.resources.r[id].s;
				if (this.entries[id].storage !== null) {
					this.entries[id].storage.updateCost(data.resources.r[id].s);
				}
				this.entries[id].current = data.resources.r[id].n;
				this.entries[id].unlocked = data.resources.r[id].u;
			}
		}
	};

	instance.getResource = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].current;
	};

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
		} else if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].capacity;
	};

	instance.getProduction = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].perSecond;
	};

	instance.getAllProduction = function() {
		var result = {};
		for (var id in RESOURCE) {
			result[RESOURCE[id]] = this.getProduction(RESOURCE[id]);
		}
		return result;
	};

	instance.setProduction = function(id, value) {
		if (typeof this.entries[id] === 'undefined') {
			return;
		}
		this.entries[id].perSecond = value;
	};

	instance.addResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		var data = this.entries[id];
		if (typeof data === 'undefined') {
			return;
		}

		// Add the resource and clamp
		var newValue = data.current + count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			data.current = Math.max(0, Math.min(newValue, storage));
		} else {
			data.current = Math.max(0, newValue);
		}
	};

	instance.takeResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		var data = this.entries[id];
		if (typeof data === 'undefined') {
			return;
		}

		// Subtract the resource and clamp
		var newValue = data.current - count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			data.current = Math.max(0, Math.min(newValue, storage));
		} else {
			data.current = Math.max(0, newValue);
		}
	};

	instance.maxResource = function(id) {
		var data = this.entries[id];
		if (typeof data === 'undefined') {
			return;
		}

		// resources without a storage cap will return -1 so do nothing
		var storage = this.getStorage(id);
		if (storage < 0) {
			return;
		}

		data.current = storage;
	};

	instance.getStorageData = function(resourceId) {
		if (typeof this.entries[resourceId] === 'undefined') {
			return null;
		}
		return this.entries[resourceId].storage;
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
	};

	instance.updateStorageCosts = function() {
		for (var id in this.storageUpgrades) {
			var storageData = this.storageUpgrades[id];
			storageData.updateCost(this.entries[storageData.resource].capacity);
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