Game.spaceship = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.unlocked = false;
    instance.tab = null;
    instance.constructed = false;
    instance.entries = {};

    instance.partCount = 0;

    instance.initialize = function() {
        for(var id in Game.spaceshipParts) {
            this.partCount++;

            this.entries[id] = $.extend({}, Game.spaceshipParts[id], {
                id: id,
                htmlId: 'spaceship_' + id,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true
            });
        }

        console.debug("Loaded " + this.partCount + " Spaceship parts");
    };

    instance.update = function(delta) {
    };

    instance.save = function(data) {
        data.spaceship = { v: this.dataVersion, r: {
            unlocked: this.unlocked,
            constructed: this.constructed
        }};
    };

    instance.load = function(data) {
        if(data.spaceship) {
            if(data.spaceship.v && data.spaceship.v === this.dataVersion) {
                this.unlocked = data.spaceship.r.unlocked;
                this.constructed = data.spaceship.r.constructed;
            }
        }
    };

    instance.getPartData = function(id) {
        return this.entries[id];
    };

    return instance;
}());