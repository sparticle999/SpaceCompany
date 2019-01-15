// globally accessible convenience wrapper for Game.resources.getResource()
function getResource(id) {
    return Game.resources.getResource(id);
}

// globally accessible convenience wrapper for Game.resources.getStorage()
function getStorage(id) {
    return Game.resources.getStorage(id);
}

// globally accessible convenience wrapper for Game.resources.getProduction()
function getProduction(id) {
    return Game.resources.getProduction(id);
}

function getResourceAfterTick(id, delta) {
    return getResource(id) + getProduction(id) * delta;
}

function gainResources(delta) {
    for (var id in RESOURCE) {
        Game.resources.addResource(RESOURCE[id], getProduction(RESOURCE[id]) * delta);
    }
    antimatter += antimatterps * delta;
}

function addManualResource(id) {
    // Known resource?
    var Obj = Game.resources.entries;
    if (!contains(Object.keys(Obj), id)) { return false; }
    // Resource doesn't allow manual gain, or is hidden.
    if (!Obj[id].manualgain ||Obj[id].hidden) { return false; }
    // Find the input for this resource.
    if (!contains(Object.keys(Obj[id].items), id+'T1')) {
        console.log("Couldn't find the building '"+id+"T1'."); return false;
    }
    var gainNum = Obj[id].gainNum;
    var transaction = Obj[id].items[id+'T1'].resourcePerSecond;
    // Can we afford the cost?
    var affordable = Object.keys(transaction).every(
        res => transaction[res] > 0 || Obj[res].current+(transaction[res]*gainNum) >= 0
    )
    if (!affordable) {return false;}
    // Add & remove all the resources in resourcePerSecond
    // This will still take all the costs, even if storage overflows
    Object.keys(transaction).forEach(
        res => (transaction[res] > 0) ? 
                Game.resources.addResource(res, gainNum, true) : 
                Game.resources.takeResource(res, Math.abs(transaction[res]*gainNum))
    );
};

// check if id is a regular resource
function checkRegResource(id){
    if(id != "energy" && id != "plasma" && id != "meteorite" && id != "rocketFuel" && id != "rocket" && id != "antimatter" && id != "science"){
        return true;
    }
    return false;
}

Game.resources = (function(){

    // Every time perSecond of a material is impacted, run
    // Game.resources.entries[material].ui_perSecond.update(); per material (eg metal when buying a Miner)
    // Or run Templates.uiFunctions.refreshElements('perSecond', 'all') in case of, eg, a power outage
    // Alternatively, run Templates.uiFunctions.refreshElements('persecond', 'metal') for just one material.
    // !!! Update the objects perSecond before calling the update. !!!
    function UpdatePerSecond(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.resources.entries[id];
            if (obj.perSecond == previous) {return;}
            var value = Game.settings.doFormat('persecond', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'ps');

            var use = 0;
            for(var building in obj.items){
                var data = obj.items[building];
                use += data.active*(data.resourcePerSecond["energy"]||data.resourcePerSecond["plasma"]||0);
            }
            Templates.uiFunctions.setClassText(use, obj.htmlId+'use')

            previous = obj.perSecond;
            return true;
        }
    }
    var UpdateCurrent = function(id) {
        var id = id;
        this.update = function() {
            var obj = Game.resources.entries[id];
            var value = Game.settings.doFormat('current', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'current');
            // Update the storage full timer
            var node = document.getElementById('resources_res_'+id+'_SelectStorage_limit');
            if (node) {
                value = parseInt(node.value)/100;
                var seconds = Math.max(((obj.capacity*value)-obj.current), 0)/obj.perSecond;
                value = ((seconds > 0) ? Game.utils.getTimeDisplay(seconds, true) : "Done!".bold());
                document.getElementById('resources_res_'+id+'_SelectStorage_time').innerHTML = value;
            }
            return true;
        }
    }
    var UpdateCapacity = function(id) {
        var id = id;
        this.update = function() {
            var obj = Game.resources.entries[id];
            var value = Game.settings.doFormat('capacity', obj);
            Templates.uiFunctions.setClassText(value[0], obj.htmlId+'capacity');
            Templates.uiFunctions.setClassText(value[1], obj.htmlId+'nextStorage');
            // Storage cost
            if (id in Game.storageData.entries) {
                var cost = Game.storageData.entries[id].cost;
                var value = 0;
                // Find the inflation factor by comparing it's current cost with its base cost
                // This is pretty much a hack and won't work when a material doesn't need itself
                // to upgrade its storage.
                Object.keys(cost).forEach(c => {if (c == id) {value = cost[c]}});
                value = obj.capacity/value ; var newcost = {};
                // object with inflated costs
                Object.keys(cost).forEach(c => newcost[c] = cost[c]*value*Game.resources.storagePrice);
                value = Game.settings.doFormat('cost', {cost: newcost});
                Templates.uiFunctions.setClassText(value, obj.htmlId+'storageUpgrade_cost');
            }
            previous = new Date();
            return true;
        }
    }

/*
    Templates.uiFunctions.refreshElements('nextStorage', 'all'); // Can get away with only calling manually after storage bought
    Templates.uiFunctions.refreshElements('stoCount', 'all');    // Can get away with only calling manually after stobld bought
    Templates.uiFunctions.refreshElements('resbldCost', 'all');  // Can get away with only calling manually after building bought
    Templates.uiFunctions.refreshElements('stoCost', 'all');     // Can get away with only calling manually after stobld bought
    Templates.uiFunctions.refreshElements('storageTime', 'all');
    Templates.uiFunctions.refreshElements('storageCost', 'all'); // Can get away with only calling manually after storage bought
*/

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.storageUpgrades = {};
    instance.resourceTypeCount = 0;
    instance.resourceCategoryCount = 0;
    instance.storageUpgradeCount = 0;

    instance.storagePrice = 1;
    instance.capacityExcess = 1;

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
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                hidden: false,
                ui_persecond: new UpdatePerSecond(id),
                ui_current: new UpdateCurrent(id),
                ui_capacity: new UpdateCapacity(id),

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
        Templates.uiFunctions.refreshElements('current', 'all');
    };

    instance.save = function(data) {
        data.resources = { v: this.dataVersion, r: {}};
        for(var key in this.entries) {
            data.resources.r[key] = {
                n: this.entries[key].current,
                s: this.entries[key].capacity,
                u: this.entries[key].unlocked
            }
        }
    };

    instance.load = function(data) {
        if(data.resources) {
            if(data.resources.v && data.resources.v === this.dataVersion) {
                for(var id in data.resources.r) {
                    if(this.entries[id]) {
                        this.entries[id].current = data.resources.r[id].n;
                        this.entries[id].unlocked = data.resources.r[id].u;
                        this.entries[id].capacity = data.resources.r[id].s;
                    }
                }
            }
        } else {
            legacyLoad(data);
        }
        //Templates.uiFunctions.refreshElements('all', 'all')
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
        //console.log("Checking: "+id)
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
        var curr = this.entries[id].current;
        if(curr > this.getStorage(id) && storage >= 0){
            count *= 0.05;
        }
		var newValue = curr + count;
		var storage = this.getStorage(id) * Game.resources.capacityExcess;
		if (storage >= 0) {
            curr = Math.max(0, Math.min(newValue, storage));
		} else {
			curr = Math.max(0, newValue);
		}
        this.entries[id].current = curr;
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
        // Adjust what {{item}}StorageUpgrade_Cost contains after upgrading
        //  Costs 5.033B Oil, 2.013B Metal. 
        if(res.current >= res.capacity*this.storagePrice){
            if(id == "metal"){
                res.current -= res.capacity*this.storagePrice;
                res.capacity *= 2;
                res.displayNeedsUpdate = true;
            } else if(id == "lunarite"){
                if(metal.current >= res.capacity*this.storagePrice*4){
                    res.current -= res.capacity*this.storagePrice;
                    metal.current -= res.capacity*this.storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                    Templates.uiFunctions.refreshElements('current', 'metal');
                }
            } else if(id == "meteorite"){
                if(lunarite.current >= res.capacity*this.storagePrice*4){
                    res.current -= res.capacity*this.storagePrice;
                    lunarite.current -= res.capacity*this.storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                    Templates.uiFunctions.refreshElements('current', 'lunarite');
                }
            } else if(id != "oil" && id != "gem" && id != "carbon" && id != "wood"){
                if(lunarite.current >= res.capacity*this.storagePrice*0.4){
                    res.current -= res.capacity*this.storagePrice;
                    lunarite.current -= res.capacity*this.storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                    Templates.uiFunctions.refreshElements('current', 'lunarite');
                }
            } else {
                if(metal.current >= res.capacity*this.storagePrice*0.4){
                    res.current -= res.capacity*this.storagePrice;
                    metal.current -= res.capacity*this.storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                }
            }
        }
    };

    instance.refreshStorage = function(resource){
        var res = Game.resources.entries[resource]
        var cap = res.baseCapacity
        for(var id in Game.buildings.storageEntries){
            var data = Game.buildings.storageEntries[id];
            var multi = 1;
            if(data.resource == "energy"){
                multi += Game.tech.entries.batteryEfficiencyResearch.current;
            }
            for(var storageResource in data.storage){
                if(storageResource == resource){
                    cap += data.storage[resource] * data.current * multi;
                }
            }
        }
        res.capacity = cap;
        res.displayNeedsUpdate = true;
    };

    instance.checkStorages = function(){
        var current = 0;
        var total = 0;
        for(var id in this.entries){
            var data = this.entries[id];
            if(data.unlocked && data.id != "science" && data.id != "rocketFuel"){
                current += data.current;
                total += data.capacity;
            }
        }
        document.getElementById("storageBar").style.width = current*100/total + "%";
        if(current == total){
            document.getElementById("storageBar").style["background-color"] = "#c25e5e";
        } else {
            document.getElementById("storageBar").style["background-color"] = "#337ab7";
        }
        document.getElementById("resourceLow").className = "text-muted small ng-binding red hidden"; // reset the notification every second unless reapplied
    }
    
    instance.updateResourcesPerSecond = function(){
        // Setup efficiency variables
        var efficiencyMultiplier = 0.01*Game.tech.entries.resourceEfficiencyResearch.current;
        var dm = 0.01*Game.stargaze.entries.darkMatter.current;
        if(!Game.stargaze.upgradeEntries.increaseProd1.achieved){
            dm = 0;
        }
        // stellar production bonuses
        var boost = {};
        // initialising vars
        for(var resource in this.entries){
            this.entries[resource].perSecond = 0;
            boost[resource] = 0;
        }
        // var positive = {};
        // var negative = {};
        // for(var id in Game.resources.entries){
        //     positive[id] = 0;
        //     negative[id] = 0;
        // }
        var energyDiff = 0;
        var energy = Game.resources.entries.energy;
        for(var id in Game.solCenter.entries.dyson.items){
            var data = Game.solCenter.entries.dyson.items[id];
            if(data.output){
                energy.perSecond += data.output * data.current * dm;
            }
        }
        for(var id in Game.buildings.entries){
            var building = Game.buildings.entries[id];
            if(building.active == 0){
                // Nothing to be done
                continue;
            }
            var use = [];
            var prod = [];
            for(var value in building.resourcePerSecond){
                if(building.resourcePerSecond[value] < 0){
                    use.push(value);
                } else {
                    prod.push(value);
                }
            }
            var ok = true;
            for(var i = 0; i < use.length; i++){
                if(this.entries[use[i]].current < building.active*(-1)*building.resourcePerSecond[use[i]]){
                    ok = false;
                    document.getElementById("resourceLow").className = "text-muted small ng-binding red";
                }
            }
            if(ok){
                for(var value in building.resourcePerSecond){
                    var val = building.resourcePerSecond[value];
                    if(value == "energy" && val < 0){
                        var multi = 1 - 0.01*Game.tech.entries.energyEfficiencyResearch.current;
                    } else {
                        var multi = 1;
                    }
                    this.entries[value].perSecond += val * building.active * multi;
                }
            }
        }
        var nano = Game.solCenter.entries.nanoswarmTech.items.nanoswarm;
        if(nano.current > 0 && nano.resource != null){
            this.entries[nano.resource].perSecond *= Math.pow(1.0718,nano.current);
        }
        for (var id in Game.interstellar.stars.entries) {
            var data = Game.interstellar.stars.getStarData(id);
            if (data.owned === true) {
                var happiness = 0;
                for(var item in data.items){
                    var planet = data.items[item];
                    happiness += planet.happiness;
                }
                var prod = happiness/400;
                boost[data.resource1.toLowerCase()] += prod;
                boost[data.resource2.toLowerCase()] += prod;
            }
        }
        var capitalBoost = 0;
        if(Game.stargaze.upgradeEntries.capitalInvestment.achieved){
            for(var res in this.entries){
                if(res != resource && this.entries[res].current >= this.entries[res].capacity){
                    capitalBoost += 0.05;
                }
            }
        }
        for(var resource in this.entries){
            var data = this.entries[resource];
            data.perSecond += data.perSecond * boost[resource];
            data.perSecond += data.perSecond * efficiencyMultiplier;
            data.perSecond += data.perSecond * dm;
            data.perSecond += data.perSecond * capitalBoost;
        }
        this.entries.science.perSecond += data.perSecond * 2 * Game.tech.entries.scienceEfficiencyResearch.current;
        energy.perSecond -= energyDiff;
        Templates.uiFunctions.refreshElements('persecond', 'all');
    };

    instance.toggle = function(id){
        var data = this.entries[id];
        if(data.items[id + "T1"].active == 0){
            for(var item in data.items){
                this.setRelativeActive(item,10000);
            }
        } else {
            for(var item in data.items){
                this.setRelativeActive(item,-10000);
            }
        }
        return data.items[id + "T1"].active;
    }

    instance.setRelativeActive = function(id, count){
        var data = Game.buildings.entries[id];
        count = parseInt(count);
        if(count > 0){
            data.active = Math.min(data.current, data.active + count);
        } else {
            data.active = Math.max(0, data.active + count);
        }
        Templates.uiFunctions.refreshElements('machine', id);
    }

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        Templates.uiFunctions.unlock(id + "T1");
        Templates.uiFunctions.refreshElements("capacity", id);
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