Game.resources = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};

    instance.initialize = function() {
        for (var id in Game.resource_data) {
            this.entries[id] = {
                current: 0,
                perSecond: 0,
                capacity: Game.resource_data[id].initialCapacity || 0
            };
        }
    };

    instance.update = function(delta) {
        for(var id in this.entries) {
            var addValue = this.entries[id].perSecond * delta;
            this.addResource(id, addValue);
        }
    };

    instance.save = function(data) {
        data.resources = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.resources.i[key] = this.entries[key].current;
        }
    };

    instance.load = function(data) {
        if(data.resources) {
            if(data.resources.v && data.resources.v == this.dataVersion) {
                for(var id in data.resources.i) {
                    if(this.entries[id]) {
                        this.addResource(id, data.resources.i[id]);
                    }
                }
            }
        }
    };

    instance.addResource = function(id, count) {
        // Add the resource and clamp to the maximum
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].capacity);
    };

    instance.takeResource = function(id, count) {
        // Remove the resource and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
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

    return instance;
}());