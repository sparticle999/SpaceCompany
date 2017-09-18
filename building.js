Game.buildings = (function(){

	var instance = {};

	instance.dataVersion = 1;
	instance.entries = {};
	instance.updatePerSecondProduction = true;

	instance.initialise = function() {
		var numBuildings = 0;
		for (var id in Game.buildingData) {
			numBuildings++;
			this.entries[id] = this.initBuilding(id);
		}

		console.debug("Loaded " + numBuildings + " Building Types");
	};

	instance.initBuilding = function(id) {
		// using extend to create a new object and leave the defaults unchanged
		var data = jQuery.extend({}, Game.buildingData[id]);
		data.setId(id);
		return data;
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
                    if(this.entries[id]) {
                        this.constructBuildings(id, data.buildings.i[id]);
                    }
                }
            }
        }
    };

    instance.constructBuildings = function(id, count) {
        // Add the buildings and clamp to the maximum
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].max);
        this.entries[id].displayNeedsUpdate = true;
        this.updatePerSecondProduction = true;
    };

    instance.destroyBuildings = function(id, count) {
        // Remove the buildings and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
        this.entries[id].displayNeedsUpdate = true;
        this.updatePerSecondProduction = true;
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.updateProduction = function() {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.current == 0) {
                // Nothing to be done
                continue;
            }

            var buildingData = this.entries[id];
            if (!buildingData.resource) {
                continue;
            }

            var baseValue = data.current * buildingData.perSecond;
            Game.resources.setProduction(buildingData.resource, baseValue);
        }

        this.updatePerSecondProduction = false;
    };

    instance.getBuildingData = function(id) {
        return this.entries[id];
    };

    return instance;
}());