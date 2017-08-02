Game.tech = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.techTypeCount = 0;

    instance.initialise = function() {
        for (var id in Game.techData) {
            var data = Game.techData[id];
            this.techTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'restech_' + id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount,
                displayNeedsUpdate: true
            });
        }

        console.debug("Loaded " + this.techTypeCount + " Tech Types");
    };

    instance.update = function(delta) {
    };

    instance.save = function(data) {
        data.tech = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.tech.i[key] = this.entries[key].current;
        }
    };

    instance.load = function(data) {
        if(data.tech) {
            if(data.tech.v && data.tech.v === this.dataVersion) {
                for(var id in data.tech.i) {
                    if(this.entries[id] && !isNaN(data.tech.i[id]) && data.tech.i[id] > 0) {
                        this.gainTech(id, data.tech.i[id]);
                    }
                }
            }
        }
        var tech = Game.tech.getTechData('energyEfficiencyResearch');
        if(tech.current == tech.maxLevel){
            var child = document.getElementById("energyEffButton");
            child.parentNode.removeChild(child);
        }
    };

    instance.buyTech = function(id, count) {
        console.log("TODO: Tech cost");

        this.gainTech(id, count);
    };

    instance.gainTech = function(id, count) {
        this.removeTechEffect(id);

        if(isNaN(count) || count === undefined) {
            count = 1;
        }

        var newValue = Math.floor(this.entries[id].current + count);
        var finalValue = newValue;
        if(this.entries[id].maxLevel > 0) {
            // There is a max level on this tech, clamp so we don't exceed
            finalValue = Math.min(newValue, this.entries[id].maxLevel)
        }

        this.entries[id].current = finalValue;

        this.applyTechEffect(id);
    };

    instance.removeTech = function(id, count) {
        this.removeTechEffect(id);

        if(isNaN(count) || count === undefined) {
            count = 1;
        }

        // Remove the tech and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);

        this.applyTechEffect(id);
    };

    instance.getTechData = function(id) {
        return this.entries[id];
    };

    instance.removeTechEffect = function(id) {
        var data = this.entries[id];
        if(data.resource) {
            data.remove(data, Game.resources.getResourceData(data.resource));
            return;
        }
    };

    instance.applyTechEffect = function(id) {
        var data = this.entries[id];
        if(data.resource) {
            data.apply(data, Game.resources.getResourceData(data.resource));
            return;
        }
    };

    return instance;
}());