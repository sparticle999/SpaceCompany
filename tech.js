Game.tech = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.techTypeCount = 0;

    instance.initialize = function() {
        for (var id in Game.techData) {
            var data = Game.techData[id];
            this.techTypeCount++;
            this.entries[id] = $.extend({
                id: id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount
            }, data);
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
            if(data.tech.v && data.tech.v == this.dataVersion) {
                for(var id in data.tech.i) {
                    if(this.entries[id]) {
                        this.gainTech(id, data.tech.i[id]);
                    }
                }
            }
        }
    };

    instance.gainTech = function(id, count) {
        // Add the tech and clamp to the maximum
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].max);
    };

    instance.removeTech = function(id, count) {
        // Remove the tech and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
    };

    return instance;
}());