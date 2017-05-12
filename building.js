Game.buildings = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.updatePerSecondProduction = true;

    instance.initialize = function() {
        for (var id in Game.building_data) {
            this.entries[id] = {
                current: 0,
                max: Game.building_data[id].maxCount
            };
        }
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
            if(data.buildings.v && data.buildings.v == this.dataVersion) {
                for(var id in data.buildings.i) {
                    if(this.entries[id]) {
                        this.constructBuildings(id, data.buildings.i[id]);
                    }
                }
            }
        }
    };

    instance.constructBuildings = function(id, count) {
        // Add the resource and clamp to the maximum
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].max);
        this.updatePerSecondProduction = true;
    };

    instance.destroyBuildings = function(id, count) {
        // Remove the resource and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
        this.updatePerSecondProduction = true;
    };

    instance.updateProduction = function() {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.current == 0) {
                // Nothing to be done
                continue;
            }

            var buildingData = Game.building_data[id];
            if (!buildingData.resource) {
                continue;
            }

            var baseValue = data.current * buildingData.perSecond;
            Game.resources.setPerSecondProduction(buildingData.resource, baseValue);
        }

        this.updatePerSecondProduction = false;
    };

    return instance;
}());