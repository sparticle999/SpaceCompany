Game.interstellarBETA = (function(){

	var instance = {};

	instance.dataVersion = 1;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.navCount = 0;

	instance.initialise = function (){
		for (var id in Game.interstellarData) {
            var data = Game.interstellarData[id];
            
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'intnav_' + id,
                current: 0,
                displayNeedsUpdate: true
            });
            
        }

        console.log("Loaded " + this.navCount + " Interstellar Navs");
        this.comms.initialise();
        this.rocketParts.initialise();
        this.rocket.initialise();
        this.antimatter.initialise();
        this.stars.initialise();
	}

	instance.getInterstellarData = function(id) {
        return this.entries[id];
    };

	return instance;


}());

Game.interstellarBETA.comms = (function(){

    var instance = {};

    instance.entries = {};
    instance.categoryEntries = {};
    instance.entries = {};

    instance.initialise = function(){
        for (var id in Game.commsData) {
            var data = Game.commsData[id];
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'comm_' + id,
                count: 0,
                displayNeedsUpdate: true
            });
        }
    }

    instance.calcCost = function(self, resource){
        return Math.floor(self.defaultCost[resource.toString()] * Math.pow(1.1,self.count));
    }

    instance.updateCost = function(entryName){
        for(var resource in this.entries[entryName].cost){
            var target = 0;
            for(var i = 0; i < Object.keys(Game.interstellarUI.commObservers[entryName]).length; i++){
                if(resource == Game.interstellarUI.commObservers[entryName][i].resource){
                    this.entries[entryName].cost[resource.toString()] = this.calcCost(this.entries[entryName], resource);
                    Game.interstellarUI.commObservers[entryName][i].value = this.entries[entryName].cost[resource.toString()];
                }
            }
        }
    }

    instance.buildMachine = function(entryName) {
        // Add the buildings and clamp to the maximum
        var resourcePass = 0;
        for(var resource in this.entries[entryName].cost){
            if(window[resource.toString()] >= this.entries[entryName].cost[resource.toString()]){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(Game.interstellarBETA.comms.entries[entryName].cost).length){
            var newValue = Math.floor(this.entries[entryName].count + 1);
            this.entries[entryName].count = newValue;
            for(var resource in this.entries[entryName].cost){
                window[resource.toString()] -= this.entries[entryName].cost[resource.toString()];
            }            
            this.entries[entryName].displayNeedsUpdate = true;
        }
        this.updateCost(entryName);
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getMachineData = function(id) {
        return this.entries[id];
    };

    return instance;

}());

Game.interstellarBETA.antimatter = (function(){

    var instance = {};

    instance.entries = {};
    instance.categoryEntries = {};
    instance.entries = {};

    instance.initialise = function(){
        for (var id in Game.antimatterData) {
            var data = Game.antimatterData[id];
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'antimatter_' + id,
                count: 0,
                displayNeedsUpdate: true
            });
        }
    }

    instance.calcCost = function(self, resource){
        return Math.floor(self.defaultCost[resource.toString()] * Math.pow(1.1,self.count));
    }

    instance.updateCost = function(entryName){
        for(var resource in this.entries[entryName].cost){
            var target = 0;
            for(var i = 0; i < Object.keys(Game.interstellarUI.antimatterObservers[entryName]).length; i++){
                if(resource == Game.interstellarUI.antimatterObservers[entryName][i].resource){
                    this.entries[entryName].cost[resource.toString()] = this.calcCost(this.entries[entryName], resource);
                    Game.interstellarUI.antimatterObservers[entryName][i].value = this.entries[entryName].cost[resource.toString()];
                }
            }
        }
    }

    instance.buildMachine = function(entryName) {
        // Add the buildings and clamp to the maximum
        var resourcePass = 0;
        for(var resource in this.entries[entryName].cost){
            if(window[resource.toString()] >= this.entries[entryName].cost[resource.toString()]){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(Game.interstellarBETA.antimatter.entries[entryName].cost).length){
            var newValue = Math.floor(this.entries[entryName].count + 1);
            this.entries[entryName].count = newValue;
            for(var resource in this.entries[entryName].cost){
                window[resource.toString()] -= this.entries[entryName].cost[resource.toString()];
            }            
            this.entries[entryName].displayNeedsUpdate = true;
        }
        this.updateCost(entryName);
    };

    instance.destroyMachine = function(entryName){
        if(this.entries[entryName].count > 0){
            this.entries[entryName].count -= 1;
            this.updateCost(entryName);
        }
    }

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getMachineData = function(id) {
        return this.entries[id];
    };

    return instance;

}());