Game.resources = (function(){

    var instance = {};

    instance.dataVersion = 2;
    instance.entries = {};
    instance.resourceTypeCount = 0;

    instance.initialize = function() {
        for (var id in Game.resource_data) {
            var data = Game.resource_data[id];
            this.resourceTypeCount++;
            this.entries[id] = $.extend({
                id: id,
                htmlId: 'res_' + id,
                current: 0,
                perSecond: 0,
                perClick: 1,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                unlocked: false
            }, data);
        }

        console.debug("Loaded " + this.resourceTypeCount + " Resource Types");
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
            data.resources.u = this.entries[key].unlocked;
        }
    };

    instance.load = function(data) {
        if(data.resources) {
            if(data.resources.v && data.resources.v == this.dataVersion) {
                for(var id in data.resources.i) {
                    if(this.entries[id]) {
                        this.addResource(id, data.resources.i[id]);
                        this.entries[id].unlocked = data.resources.u;
                    }
                }
            }
        }
    };

    instance.addResource = function(id, count) {
        // Add the resource and clamp to the maximum
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].capacity);
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.takeResource = function(id, count) {
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

    instance.getResourceData = function(id) {
        return this.entries[id];
    };

    return instance;
}());