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
                buildings: {},
                storBuildings: {},
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                hidden: false
            });

            this.entries[id].capacity = data.baseCapacity;

        // Compose an hierarchical object
        // categories -> resources -> buildings & storbuildings
        Game.categories = {};
        // Add categories
        Object.keys(Game.resourceCategoryData).forEach(
            category => Game.categories[category] = {}
        )
        // Link resources to categories
        Object.keys(Game.resources.entries).forEach(function(resource) {
            var category = Game.resources.entries[resource].category;
            var id = Game.resources.entries[resource].id
            Game.categories[category][id] = Game.resources.entries[resource];           
        })
        // Buildings are linked in building.js

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
            var data = this.entries[id];
            var addValue = data.perSecond * delta;
            this.addResource(id, addValue);
            if(data.displayNeedsUpdate){
                if(id != "science"){
                    var nav = $('#resourcesTab_' + id + '_ne')[0];
                    var hidden = nav.className.indexOf(" hidden");
                    if(data.unlocked){
                        if(hidden > 0)
                            nav.className = nav.className.substring(0,hidden);
                    } else {
                        if(hidden < 0)
                            nav.className += " hidden";
                    }
                    for(var category in this.categoryEntries){
                        var cat = this.categoryEntries[category];
                        if(data.unlocked && data.category == category)
                            cat.unlocked = true;
                        var target = $('#resourcesTab_' + category + '_collapse')[0];
                        target.className = ((cat.unlocked) ? "" : "hidden");
                    }
                    data.displayNeedsUpdate = false;
                }
            }
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
		if (id === RESOURCE.Science) {
			// -1 for unlimited storage
			return -1;
		} else if (id === RESOURCE.RocketFuel) {
			return -1;
		} else if (typeof Game.resources.entries[id] === 'undefined') {
			return 0;
		}
		return Game.resources.entries[id].capacity;
	};

	instance.getProduction = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].perSecond;
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
        if(res.current >= res.capacity*storagePrice){
            if(id == "metal"){
                res.current -= res.capacity*storagePrice;
                res.capacity *= 2;
                res.displayNeedsUpdate = true;
            } else if(id == "lunarite"){
                if(metal.current >= res.capacity*storagePrice*4){
                    res.current -= res.capacity*storagePrice;
                    metal.current -= res.capacity*storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                }
            } else if(id == "meteorite"){
                if(lunarite.current >= res.capacity*storagePrice*4){
                    res.current -= res.capacity*storagePrice;
                    lunarite.current -= res.capacity*storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                }
            } else if(id != "oil" && id != "gem" && id != "charcoal" && id != "wood"){
                if(lunarite.current >= res.capacity*storagePrice*0.4){
                    res.current -= res.capacity*storagePrice;
                    lunarite.current -= res.capacity*storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                }
            } else {
                if(metal.current >= res.capacity*storagePrice*0.4){
                    res.current -= res.capacity*storagePrice;
                    metal.current -= res.capacity*storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                }
            }
        } 
    };

    instance.refreshStorage = function(resource){
        var res = Game.resources.entries[resource]
        var cap = res.baseCapacity
        for(var id in Game.buildings.storageEntries){
            var data = Game.buildings.storageEntries[id];
            for(var storageResource in data.storage){
                if(storageResource == resource){
                    cap += data.storage[resource] * data.current;
                }
            }
        }
        res.capacity = cap;
        res.displayNeedsUpdate = true;
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