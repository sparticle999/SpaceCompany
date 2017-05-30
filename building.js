Game.buildings = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.updatePerSecondProduction = true;
    instance.techTypeCount = 0;

    instance.initialize = function() {
        for (var id in Game.buildingData) {
            var data = Game.buildingData[id];
            this.techTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'resbld_' + id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount,
                displayNeedsUpdate: true,
                costDisplayNeedsUpdate: true
            });

            // Set the initial cost
            this.entries[id].currentCost = this.getTotalBuildingCost(id, 1);
        }

        console.debug("Loaded " + this.techTypeCount + " Building Types");
    };

    instance.update = function(delta) {
        if (this.updatePerSecondProduction === true) {
            this.updateProduction();
        }
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
                    var count = data.buildings.i[id];
                    if(this.entries[id] && count && count > 0) {
                        this.constructBuildings(id, count);
                    }
                }
            }
        }
    };

    instance.getTotalBuildingCost = function(id, count) {
        if(!count) {
            count = 1;
        }

        var data = this.entries[id];
        if(!data.cost) {
            return {};
        }

        var result = {};
        for(var i = 0; i < count; i++) {
            for (var resourceId in data.cost) {
                if(!result[resourceId]) {
                    result[resourceId] = 0;
                }

                var value = Math.floor(data.cost[resourceId] * Math.pow(data.costMultiplier, data.current + i));
                result[resourceId] += value;
            }
        }

        return result;
    };

    instance.canAfford = function (id, count) {
        if(!count) {
            count = 1;
        }

        var totalCost = this.getTotalBuildingCost(id, count);
        for(var resourceId in totalCost) {
            var resourceData = Game.resources.getResourceData(resourceId);
            if(!resourceData) {
                console.error("Could not find resource for cost: " + resourceId);
                return false;
            }

            if(resourceData.current < totalCost[resourceId]) {
                return false;
            }
        }
    };

    instance.constructBuildings = function(id, count) {
        if(!count) {
            count = 1;
        }

        if(this.canAfford(id, count) === false) {
            return;
        }

        var totalCost = this.getTotalBuildingCost(id, count);
        for(var resourceId in totalCost) {
            Game.resources.takeResource(resourceId, totalCost[resourceId]);
        }

        var data = this.entries[id];

        // Add the buildings and clamp to the maximum
        var newValue = Math.floor(data.current + count);
        data.current = Math.min(newValue, data.max);
        data.displayNeedsUpdate = true;
        data.currentCost = this.getTotalBuildingCost(id, 1);
        data.costDisplayNeedsUpdate = true;

        this.updatePerSecondProduction = true;
    };

    instance.destroyBuildings = function(id, count) {
        if(!count) {
            count = 1;
        }

        var data = this.entries[id];

        // Remove the buildings and ensure we can not go below 0
        var newValue = Math.floor(data.current - count);
        data.current = Math.max(newValue, 0);
        data.displayNeedsUpdate = true;
        this.updatePerSecondProduction = true;
        data.currentCost = this.getTotalBuildingCost(id, 1);
        data.costDisplayNeedsUpdate = true;
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.updateProduction = function() {
        Game.resources.resetPerSecondProduction();

        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.current === 0) {
                // Nothing to be done
                continue;
            }

            var buildingData = Game.buildingData[id];
            if (!buildingData.resource) {
                continue;
            }

            for(var resourceId in buildingData.resourcePerSecond) {
                var baseValue = data.current * buildingData.resourcePerSecond[resourceId];
                Game.resources.modifyPerSecondProduction(buildingData.resource, baseValue);
            }
        }

        this.updatePerSecondProduction = false;
    };

    instance.getBuildingData = function(id) {
        return this.entries[id];
    };

    return instance;
}());