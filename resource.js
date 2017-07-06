Game.resources = (function(){

    var instance = {};

    instance.dataVersion = 5;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.resourceTypeCount = 0;
    instance.resourceCategoryCount = 0;

    instance.initialize = function() {
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
                console.log(data.resources)
                for(var id in data.resources.r) {
                    if(this.entries[id]) {
                        this.addResource(id, data.resources.r[id].n);
                        this.entries[id].unlocked = data.resources.r[id].u;
                    }
                }
            }
        }
    };

    instance.addResourceManual = function(id, count) {
        if(!count) {
            count = 1;
        }

        if(isNaN(count) || count === null || Math.abs(count) <= 0) {
            return;
        }

        this.addResource(id, count);
        Game.statistics.add('manualResources', count);
    };

    instance.addResource = function(id, count) {
        if(isNaN(count) || count === null || Math.abs(count) <= 0) {
            return;
        }

        // Add the resource and clamp to the maximum
        var newValue = this.entries[id].current + count;
        if(this.entries[id].capacity === -1) {
            this.entries[id].current = newValue;
        } else {
            this.entries[id].current = Math.min(newValue, this.entries[id].capacity);
        }

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

    instance.resetPerSecondProduction = function() {
        for(var id in this.entries) {
            this.entries[id].perSecond = 0;
        }
    };

    instance.modifyPerSecondProduction = function (id, value) {
        if(!this.entries[id]) {
            console.error("Unknown Resource: " + id);
            return;
        }

        if (isNaN(value) || value === undefined) {
            console.error("Invalid per second value: " + value + " for " + id);
            return;
        }

        this.entries[id].perSecond += value;
    };

    instance.setPerSecondProduction = function(id, value) {
        if(!this.entries[id]) {
            console.error("Unknown Resource: " + id);
            return;
        }

        if (isNaN(value) || value === undefined) {
            console.error("Invalid per second value: " + value + " for " + id);
            return;
        }

        this.entries[id].perSecond = value;
    };

    instance.setCapacity = function(id, value) {
        this.entries[id].capacity = value;
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

    instance.getTotalCost = function(count, current, costData, costMultiplier) {
        if(!count) {
            count = 1;
        }

        if (!costMultiplier) {
            costMultiplier = 1;
        }

        if(!costData) {
            return {};
        }

        var result = {};
        for(var i = 0; i < count; i++) {
            for (var resourceId in costData) {
                if(!result[resourceId]) {
                    result[resourceId] = 0;
                }

                var value = Math.floor(costData[resourceId] * Math.pow(costMultiplier, current + i));
                result[resourceId] += value;
            }
        }

        return result;
    };

    instance.canAfford = function (costData) {
        if(!costData) {
            return false;
        }

        for(var resourceId in costData) {
            var resourceData = this.getResourceData(resourceId);
            if(!resourceData) {
                console.error("Could not find resource for cost: " + resourceId);
                return false;
            }

            if(resourceData.current < costData[resourceId]) {
                return false;
            }
        }

        return true;
    };

    instance.pay = function(costData) {
        for (var resourceId in costData) {
            Game.resources.takeResource(resourceId, costData[resourceId]);
        }
    };

    return instance;
}());