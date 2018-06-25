Game.resources = (function(){

    var instance = {};

    instance.dataVersion = 5;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.storageUpgrades = {};
    instance.resourceTypeCount = 0;
    instance.resourceCategoryCount = 0;
    instance.storageUpgradeCount = 0;

    instance.initialise = function() {
        for (var id in Game.resourceData) {
            var data = Game.resourceData[id];
            this.resourceTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'res_' + id,
                current: 0,
                perSecond: 0,
                perClick: 1,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                hidden: false
            });

            this.entries[id].capacity = data.baseCapacity;
        }

        for (var id in Game.resourceCategoryData) {
            var data = Game.resourceCategoryData[id];
            this.resourceCategoryCount++;
            this.categoryEntries[id] = $.extend({}, data, {
                id: id
            });
        }

        for (var id in Game.storageData) {
            var data = Game.storageData[id];
            this.storageUpgradeCount++;
            this.storageUpgrades[id] = $.extend({}, data, {
                id: id,
                htmlId: "store_" + id
            });
        }

        console.debug("Loaded " + this.resourceCategoryCount + " Resource Categories");
        console.debug("Loaded " + this.resourceTypeCount + " Resource Types");
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
    };

	instance.getResource = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].current
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
		} else if (typeof Game.resources.entries[id] === 'undefined') {
			return 0;
		}
		return Game.resources.entries[id].capacity;
	};

	// TODO: change to data-driven resources when available
	instance.getProduction = function(id) {
		if (typeof window[id + 'ps'] === 'undefined') {
			return 0;
		}
		return window[id + 'ps'];
	};

	instance.addResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		if (typeof this.entries[id] === 'undefined') {
			return;
		}

		// Add the resource and clamp
		var newValue = this.entries[id].current + count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			this.entries[id].current = Math.max(0, Math.min(newValue, storage));
		} else {
			this.entries[id].current = Math.max(0, newValue);
		}
	};

	instance.takeResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		if (typeof this.entries[id] === 'undefined') {
			return;
		}

		// Subtract the resource and clamp
		var newValue = this.entries[id].current - count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			this.entries[id].current = Math.max(0, Math.min(newValue, storage));
		} else {
			this.entries[id].current = Math.max(0, newValue);
		}
	};

	instance.maxResource = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return;
		}

		// resources without a storage cap will return -1 so do nothing
		if (getStorage(id) < 0) {
			return;
		}

		this.entries[id].current = getStorage(id);
	};

    instance.upgradeStorage = function(id){
        var res = this.getResourceData(id);
        var metal = this.getResourceData("metal");
        var lunarite = this.getResourceData("lunarite");
        console.log(id)
        if(res.current >= res.capacity*storagePrice){
            if(id == "metal"){
                res.current -= res.capacity*storagePrice;
                res.capacity *= 2;
                res.displayNeedsUpdate = true;
            } else if(id == "lunarite"){
                if(metal.current >= metal.capacity*storagePrice*4){
                    res.current -= res.capacity*storagePrice;
                    metal.current -= res.capacity*storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                    console.log(res.current)
                }
            } else if(id != "oil" && id != "gem" && id != "charcoal" && id != "wood"){
                if(lunarite.current >= res.capacity*storagePrice*0.4){
                    res.current -= res.capacity*storagePrice;
                    lunarite.current -= res.capacity*storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                }
                console.log(id)
            } else {
                if(metal.current >= metal.capacity*storagePrice*0.4){
                    res.current -= res.capacity*storagePrice;
                    metal.current -= res.capacity*storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                }
                console.log(res.current)
            }
        } 
    };

    instance.updateResourcesPerSecond = function(){
        for(var resource in this.entries){
            var res = this.entries[resource];
            var ps = 0;
            for(var id in Game.buildings.entries){
                var building = Game.buildings.entries[id];
                if(building.current == 0) {
                    // Nothing to be done
                    continue;
                }
                for(var value in building.resourcePerSecond){
                    if(value == resource){
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