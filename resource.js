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

    instance.addResource = function(id, count) {
        if(isNaN(count) || count === null || Math.abs(count) <= 0) {
            return;
        }

        // Add the resource and clamp to the maximum
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].capacity);
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.takeResource = function(id, count) {
        if(isNaN(count) || count === null || Math.abs(count) <= 0) {
            return;
        }

        // Remove the resource and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
        this.entries[id].displayNeedsUpdate = true;
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

    instance.upgradeStorage = function(id){
        var upgradeData = this.storageUpgrades[id];
        var res = this.getResourceData(upgradeData.resource);
        if(res.current >= res.capacity){
            res.current -= res.capacity;
            res.capacity *= 2;
            res.displayNeedsUpdate = true;

            for(var r in upgradeData.cost){
                upgradeData.cost[r] *= 2;
            }
            upgradeData.displayNeedsUpdate = true;
        }
    }

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