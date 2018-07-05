Game.resources = (function(){

    var instance = {};

    instance.dataVersion = 1;
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
                resource: id,
                htmlId: 'res_' + id,
                current: 0,
                perSecond: 0,
                perSecondDisplay: 0,
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
        for (var id in this.entries) {
            var data = this.entries[id];
            var addValue = data.perSecond * delta;
            this.addResource(id, addValue);
            if (id == 'science') {continue;}
            if (data.displayNeedsUpdate) {
                var nav = document.querySelector('[id$=Tab_'+id+'_nec]');
                var hidden = nav.classList.contains("hidden");
                // Unhide the tab if the resource is unlocked
                if (data.unlocked && hidden) {
                    nav.classList.remove("hidden");
                }
                var cat = data.category;
                if(data.unlocked && cat.unlocked == false) {
                    cat.unlocked = true;
                    var target = document.querySelector('[id$=Tab_'+cat+'_collapse]');
                    target.classList.remove("hidden")
                }
                data.displayNeedsUpdate = false;
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
        console.log(data.resources)
        if(data.resources) {
            if(data.resources.v && data.resources.v === this.dataVersion) {
                for(var id in data.resources.r) {
                    if(this.entries[id]) {
                        this.addResource(id, data.resources.r[id].n);
                        this.entries[id].unlocked = data.resources.r[id].u;
                    }
                }
            }
        } else {
            legacyLoad(data);
        }
    };

    instance.getDisplayResource = function(id) {
        if (typeof this.entries[id] === 'undefined') { return 0; }
        var current = this.entries[id].current;
        switch (id) {
            case "science":
                if (current < 100) {
                    current = Game.settings.format(current, 1);
                } else {
                    current = Game.settings.format(current);
                }
                break;
            case "rocketFuel":
                if (current < 100) {
                    current = Game.settings.format(current, 1);
                } else {
                    current = Game.settings.format(current);
                }
                break;
            default:
                current = Game.settings.format(current);
                break;
        }
        return current;
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


    instance.getDisplayProduction = function(id) {
        //console.log(id);
        if (typeof this.entries[id] === 'undefined') { return 0; }
        var ps = this.entries[id].perSecond;
        switch (id) {
            case "energy":
                if (ps > 250 || ps < -250) {
                    ps = Game.settings.format(ps);
                } else {
                    ps = Game.settings.format(ps * 2) / 2;
                }
                break;
            case "science":
                ps = Game.settings.format(ps, 1);
                break;
            case "rocketFuel":
                ps = Game.settings.format(ps, 1);
                break;
            default:
                ps = Game.settings.format(ps);
                break;
        }
        return ps;
    };

	instance.getProduction = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].perSecond;
	};

	instance.addResource = function(id, count, manual) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		if (typeof this.entries[id] === 'undefined') {
			return;
		}

        if(manual){
            Game.statistics.add("manualResources", count);
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
		if(isNaN(count) || count === null || Math.abs(count) == 0) {
			return;
		}

		if (typeof this.entries[id] === 'undefined') {
			return;
		}

		// Subtract the resource and clamp
		var newValue = this.entries[id].current - Math.abs(count);
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
        var perSecondMultiplier = 1 + (Game.tech.entries.resourceEfficiencyResearch.current * 0.01)
        var energyDiff = 0;
        var energy = Game.resources.entries.energy;
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
                        if(resource != "science" && resource != "rocketFuel" && resource != "energy"){
                            if(energy.current > energy.perSecond*-1 && energy.perSecond < 0){
                                ps += val * building.current * perSecondMultiplier * (1 + Game.stargaze.entries.darkMatter.current * dmBoost);
                            } else {
                                if(id.indexOf("T1") != -1){
                                    ps += val * building.current * perSecondMultiplier * (1 + Game.stargaze.entries.darkMatter.current * dmBoost);
                                } else {
                                    energyDiff += building.current * building.resourcePerSecond["energy"];
                                }
                            }
                        } else {
                            ps += val * building.current * (1 + Game.stargaze.entries.darkMatter.current * dmBoost);
                        }
                    }
                }
            }
            res.perSecond = ps;
        }
        energy.perSecond -= energyDiff;
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
        newUnlock('resources');
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