Game.tech = (function(){

    function UpdateCurrent(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.tech.entries[id];
            if (obj.current == previous) {return;}
            var value = Game.settings.doFormat('current', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'current');
            previous = obj.current;
            return true;
        }
    }

    function UpdateCost(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.tech.entries[id];
            if (new Date() - previous < 250 || obj.current == obj.maxLevel || !obj.unlocked) {return;}
            var costObj = {cost:{"science":Game.tech.getCost(obj.cost.science, obj.current)}};
            var value = Game.settings.doFormat('cost', costObj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'cost');
            previous = new Date();
            return true;
        }
    }

    var instance = {};

    instance.dataVersion = 2;
    instance.entries = {};
    instance.techTypeCount = 0;
    instance.tabUnlocked = false;

    instance.initialise = function() {
        for(var id in Game.techData) {
            var data = Game.techData[id];
            this.entries[id]  = $.extend({}, data, {
                id: id,
                htmlId: 'tec_'+id,
                page: 'research',
                ui_current: new UpdateCurrent(id),
                ui_cost: new UpdateCost(id),
            });
            this.techTypeCount++;
        }
        console.debug("Loaded " + this.techTypeCount + " Tech Types");
    };

    instance.update = function(delta) {
        var science = Game.resources.entries.science.current;
        for(var id in this.entries){
            if(this.entries[id].costType == 1 && !this.entries[id].unlocked){
                if(science >= this.entries[id].cost["science"]){
                    this.entries[id].unlocked = true;
                    Templates.uiFunctions.unlock(id);
                }
            }
        }
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
            if (child !== null) {
                child.parentNode.removeChild(child);
            }
        }
        if(Game.buildings.entries.metalT1.current >= 1){
            Templates.uiFunctions.unlock('scienceT1');
            Game.tech.unlockTech("unlockStorage");
            Game.tech.unlockTech("unlockBasicEnergy");
            // Unlock the science resourceCategory
            Game.resourceCategoryData.science.unlocked = true;
            // Unlock the science resource
            Game.resources.entries.science.unlocked = true;
            // Unlock scienceT1
            Game.buildings.entries.scienceT1.unlocked = true;
            // Unlock the research category
            Game.techCategoryData.unlocked = true;
            Game.techCategoryData.research.unlocked = true;
            // Unlock the technology type of research items
            Game.techCategoryData.research.items.technology.unlocked = true;
            Game.tech.tabUnlocked = true; 
        }
        // Update the cost of techs
        Object.keys(Game.tech.entries).forEach(function(tech) {
            let cost = Game.tech.entries[tech].cost;
            let amount = Game.tech.entries[tech].current;
            let newCost = {};
            Object.keys(cost).forEach(c => newCost[c] = Math.floor(cost[c]*Math.pow(1.1, amount)));
            Game.tech.entries[tech].cost = newCost;
        })
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
                this.entries[id].unlocked = true;
            }
        }
    };

    // handle loading a save with dataVersion 2 or higher
    instance.loadV2 = function(data) {
        for (var id in data.tech.i) {
            if (typeof this.entries[id] !== 'undefined') {
                if (typeof data.tech.i[id].current !== 'undefined' && data.tech.i[id].current > 0) {
                    this.entries[id].current = 0;
                    this.gainTech(id, data.tech.i[id].current, false);
                    // we can assume that the tech is unlocked if it has been purchased
                    this.entries[id].unlocked = true;
                    // unlock the tech that this tech unlocks
                } else if (typeof data.tech.i[id].unlocked !== 'undefined') {
                    this.entries[id].unlocked = data.tech.i[id].unlocked;
                }
            }
        }
        for (var id in data.tech.i) {
            if (typeof this.entries[id] !== 'undefined') {
                if (typeof data.tech.i[id].current !== 'undefined' && data.tech.i[id].current > 0) {
                    // unlock the tech that this tech unlocks
                    this.unlockNewTechs(id);
                    this.hideIfMax(id);
                }
                if(this.entries[id].costType == 1 && this.entries[id].unlocked){
                    Templates.uiFunctions.unlock(id);
                }
            }
        }
        
        Templates.uiFunctions.refreshElements('all', 'all');
    };

    instance.unlockTech = function(id) {
        var tech = this.getTechData(id);
        if (typeof tech !== 'undefined') {
            tech.unlocked = true;
            if(tech.current < tech.maxLevel && tech.maxLevel > 0){
                Templates.uiFunctions.unlock(id);
            }
        }
    };


// Create an empty object to create a sum of profits and losses
// var materials = Object.keys(Obj).reduce((o, key) => Object.assign(o, {[key]: 0}), {});


    instance.hideIfMax = function(id){
        var data = this.entries[id];
        if (data.current >= data.maxLevel && data.maxLevel > 0) {
            Game.statistics.add('techResearched');
            Templates.uiFunctions.hide(data.id);
        }
    }
    
    instance.unlockNewTechs = function(id) {
        var tech = this.getTechData(id);
        if (typeof tech !== 'undefined') { tech.unlocked = true; }
        // newTechs: ['unlockOil'],
        if ('newTechs' in tech) {
            var newTechs = tech.newTechs;
            // .unlockOil_Container => unlock('unlockOil')
            newTechs.forEach(t => Game.tech.unlockTech(t));
        }
    };

    instance.doPurchase = function(Obj) {
        // Loop over the costs and subtract them from .current
        Object.keys(Obj.cost).forEach(c => Game.resources.entries[c].current -= this.getCost(Obj.cost[c], Obj.current))
        // increase its current
        Obj.current++
        // Update the UI - Let's recalculate everything in case of efficiency research
        Templates.uiFunctions.refreshElements('all', 'all');
    }

    /**
     * Internal function.  Not accessible from outside so we need less security.
     * Checks if an object (Obj.cost) is affordable, this can be any object
     * which costs are all in Game.resources.entries
     * @param  {Object}  Obj Object like Game.buildings.entries.metalT1
     * @return {Boolean}     True on affordable, false if not.
     */
    instance.isAffordable = function(Obj) {
        // Loop over the cost, cost for tech is a positive number
        if (Object.keys(Obj.cost).every(c => (Game.resources.entries[c].current-this.getCost(Obj.cost[c], Obj.current)) > 0)) {
            return true;
        }
        return false;
    }

    // return true if the tech is purchased successfully, false otherwise
    instance.buyTech = function(id, count) {
        if (!(id in this.entries)) {return false;}
        if (count != parseInt(count) && count <= 0) {return false;}
        while (count > 0) {
            // Stop the loop if the next machine isn't affordable
            if (!this.isAffordable(this.entries[id])) {break;}
            // Stop the loop if max level is reached.
            if (this.entries[id].current == this.entries[id].maxLevel) {break;}
            // Buy the item
            this.doPurchase(this.entries[id]);
            // Perform onBought
            this.applyTechEffect(id);
            // Unlock new techs.
            this.unlockNewTechs(id);
            // Hide if max level
            this.hideIfMax(id);
            count--;
        }
    };

    instance.gainTech = function(id, count, refresh) {
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
        if(refresh == false){
            return false;
        }
        Templates.uiFunctions.refreshElements('all', 'all');
    };

    instance.removeTech = function(id, count) {
        this.removeTechEffect(id);

        if(isNaN(count) || count === undefined) {
            count = 1;
        }

        // Remove the tech and ensure we can not go below 0
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);

        Templates.uiFunctions.refreshElements('all', 'all');
    };

    instance.updateEfficiencies = function(){
    };

    instance.getCost = function(basePrice, amount, multiplier) {
        return Math.floor(basePrice * Math.pow(multiplier || 1.1, amount));
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
        if('onApply' in data) {
            data.onApply(data);
        };
        if('tabAlerts' in data){
            for(var a in data.tabAlerts){
                newUnlock(data.tabAlerts[a]);
            }
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
            if(id == 'energyEfficiencyResearch') return false;
            return tech.maxLevel > 0 && tech.current >= tech.maxLevel;
        }
        return false;
    };

    return instance;
}());