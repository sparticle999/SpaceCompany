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
        for(var id in this.entries) {
            this.checkUnlocks(id);
        }
    };

    instance.checkUnlocks = function(id) {
        var data = this.entries[id];
        if(data.unlocked === true) {
            return;
        }

        if(data.dependsOn) {
            for(var i = 0; i < data.dependsOn.length; i++) {
                var dependData = Game.spaceship.getPartData(data.dependsOn[i]);
                if(!dependData) {
                    console.error("Could not find dependsOn Part: " + data.dependsOn[i]);
                    continue;
                }

                if(dependData.unlocked === false || dependData.isComplete === false) {
                    continue;
                }

                data.unlocked = true;
                data.displayNeedsUpdate = true;
            }
        }
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

    instance.getTotalPartCost = function(id, count) {
        var data = this.entries[id];
        if(!data.cost) {
            return {};
        }

        return Game.resources.getTotalCost(count, data.current, data.cost, data.costMultiplier);
    };

    instance.canAfford = function (id, count) {
        var data = this.getPartData(id);
        if(data.partCost) {
            for(var partId in data.partCost) {
                var partData = this.getPartData(partId);
                if(partData.current < data.partCost[partId]) {
                    return false;
                }
            }
        }

        var totalCost = this.getTotalPartCost(id, count);
        return Game.resources.canAfford(totalCost);
    };

    instance.buyPart = function(id) {
        if(this.canAfford(id) === false) {
            return;
        }

        var data = this.getPartData(id);
        if(data.isComplete === true) {
            return;
        }

        var totalCost = this.getTotalPartCost(id, 1);
        Game.resources.pay(totalCost);

        if (data.partCost) {
            for(var partId in data.partCost) {
                var partData = this.getPartData(partId);
                partData.current -= data.partCost[partId];
                partData.displayNeedsUpdate = true;
                partData.isComplete = false;
            }
        }

        data.current++;
        if(data.maxCount > 0 && data.current === data.maxCount) {
            data.isComplete = true;
        }

        data.displayNeedsUpdate = true;
    };

    return instance;
}());