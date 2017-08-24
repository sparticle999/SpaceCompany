Game.tech = (function(){

    var instance = {};

    instance.dataVersion = 2;
    instance.entries = {};
    instance.techTypeCount = 0;

    instance.initialise = function() {
        for (var id in Game.techData) {
            var data = Game.techData[id];
            this.techTypeCount++;
            data.setId(id);
            this.entries[id] = data;
        }

        console.debug("Loaded " + this.techTypeCount + " Tech Types");
    };

    instance.update = function(delta) {
    };

    instance.save = function(data) {
        data.tech = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.tech.i[key] = {};
            data.tech.i[key].current = this.entries[key].current;
            data.tech.i[key].unlocked = this.entries[key].unlocked;
        }
    };

    instance.load = function(data) {
        if (data.tech && data.tech.v && data.tech.i) {
            if (data.tech.v >= 2) {
                this.loadV2(data);
            } else if (data.tech.v === 1) {
                this.loadV1(data);
            }
        }
        var tech = Game.tech.getTechData('energyEfficiencyResearch');
        if (tech.current === tech.maxLevel) {
            var child = document.getElementById("energyEffButton");
            child.parentNode.removeChild(child);
        }
    };

    // handle loading a save with dataVersion 1
    instance.loadV1 = function(data) {
        // the new tech data matches the old ids stored in the arrays available and researched
        // anything that was in available before can be considered unlocked
        for (var id in data.available) {
            if (typeof this.entries[data.available[id]] !== 'undefined') {
                this.entries[data.available[id]].unlocked = true;
            }
        }
        // anything that was in researched before can be considered purchased
        for (id in data.researched) {
            if (typeof this.entries[data.researched[id]] !== 'undefined') {
                this.entries[data.researched[id]].current = 1;
            }
        }
        for (id in data.tech.i) {
            if (this.entries[id] && !isNaN(data.tech.i[id]) && data.tech.i[id] > 0) {
                this.gainTech(id, data.tech.i[id]);
            }
        }
    };

    // handle loading a save with dataVersion 2 or higher
    instance.loadV2 = function(data) {
        for (var id in data.tech.i) {
            if (typeof this.entries[id] !== 'undefined') {
                if (typeof data.tech.i[id].current !== 'undefined' && data.tech.i[id].current > 0) {
                    this.gainTech(id, data.tech.i[id].current);
                    // we can assume that the tech is unlocked if it has been purchased
                    this.entries[id].unlocked = true;
                } else if (typeof data.tech.i[id].unlocked !== 'undefined') {
                    this.entries[id].unlocked = data.tech.i[id].unlocked;
                }
            }
        }
    };

    instance.unlockTech = function(id) {
        var tech = this.getTechData(id);
        if (typeof tech !== 'undefined') {
            tech.unlocked = true;
        }
    };

    // return true if the tech is purchased successfully, false otherwise
    instance.buyTech = function(id, count) {
        var tech = this.getTechData(id);
        if (typeof tech === 'undefined') {
            return false;
        }

        // ensure a valid value for count
        if(isNaN(count) || count === undefined) {
            count = 1;
        }
        // if there's a max level defined then the count may need to be clamped
        if (tech.maxLevel > 0) {
            count = Math.min(tech.maxLevel - tech.current, count);
            if (count <= 0) {
                // the tech is at or above max level, can't buy it
                return false;
            }
        }
        // the percent cost items are storages, can't buy more than 1
        if (tech.costType === COST_TYPE.PERCENT && count > 1) {
            count = 1;
        }

        // create a new object for cost to avoid reference issues
        var cost = {};
        if (tech.costType === COST_TYPE.FIXED) {
            if (tech.current > 0 || count > 1) {
                // this calculation could be done more elegantly with math
                for (var resource in tech.cost) {
                    cost[resource] = 0;
                }
                for (var i = 0; i < count; i++) {
                    for (var resource in tech.cost) {
                        cost[resource] += getCost(tech.cost[resource], tech.current + i);
                    }
                }
            } else {
                // the predefined base cost can be used
                for (var resource in tech.cost) {
                    cost[resource] = tech.cost[resource];
                }
            }
        } else if (tech.costType === COST_TYPE.PERCENT) {
            if (typeof tech.resource === 'undefined') {
                // can't calculate a percent cost without a resource
                return false;
            }
            var storage = window[tech.resource + 'Storage'];
            if (typeof storage === 'undefined') {
                // percent is meaningless without a defined storage
                return false;
            }
            for (var resource in tech.cost) {
                cost[resource] = Math.floor(tech.cost[resource] * storage)
            }
        } else {
            return false;
        }

        if (!this.hasResources(cost)) {
            return false;
        }

        this.spendResources(cost);
        this.gainTech(id, count);
        return true;
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
        if(typeof data.remove !== 'undefined') {
            data.remove(data);
        }
    };

    instance.applyTechEffect = function(id) {
        var data = this.entries[id];
        if(typeof data.apply !== 'undefined') {
            data.apply(data);
        }
    };

    instance.hasResources = function (resources) {
        for (var resource in resources) {
           if (window[resource] < resources[resource]) {
               return false;
           }
        }
        return true;
    };

    instance.spendResources = function(resources) {
        for (var resource in resources) {
            window[resource] -= resources[resource];
        }
    };

    instance.isUnlocked = function(id) {
        var tech = this.getTechData(id);
        if (typeof tech !== 'undefined') {
            return tech.unlocked;
        }
        return false;
    };

    instance.isPurchased = function(id) {
        var tech = this.getTechData(id);
        if (typeof tech !== 'undefined') {
            return tech.current > 0;
        }
        return false;
    };

    instance.isMaxLevel = function(id) {
        var tech = this.getTechData(id);
        if (typeof tech !== 'undefined') {
            return tech.maxLevel > 0 && tech.current >= tech.maxLevel;
        }
        return false;
    };

    return instance;
}());