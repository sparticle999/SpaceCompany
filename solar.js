Game.solar = (function(){

	function UpdateCost(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.solar.entries[id];
            if (new Date() - previous < 250) {return;}
            var value = Game.settings.doFormat('cost', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'cost');
            previous = new Date();
            return true;
        }
    }

    var instance = {};

    instance.dataVersion = 1;

    instance.entries = {};
    instance.categoryEntries = {};
    instance.solarTypeCount = 0;
    instance.tabUnlocked = false;

    instance.initialise = function(){
    	for (var id in Game.solarData) {
            var data = Game.solarData[id];
            this.solarTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'loc_' + id,
                page: 'solar',
                current: 0,
                perSecond: 0,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                hidden: false,
                ui_cost: new UpdateCost(id),
            });
        }
    };

    instance.update = function(){

    };

    instance.save = function(data){
    	data.solar = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.solar.i[key] = {};
            data.solar.i[key].explored = this.entries[key].explored;
        }
    };

    instance.load = function(data){
    	if(typeof data.solar !== 'undefined'){
			for (var id in data.solar.i) {
		        if (typeof this.entries[id] !== 'undefined') {
		            if (typeof data.solar.i[id].explored !== 'undefined' && data.solar.i[id].explored == true) {
		                this.applyExplore(id);
		                // we can assume that the location is unlocked if it has been explored
		                this.entries[id].unlocked = true;
		            } else if (typeof data.solar.i[id].unlocked !== 'undefined') {
		                this.entries[id].unlocked = data.solar.i[id].unlocked;
		            }
		        }
		    }
    	}
    };

    instance.explore = function(id){
    	var data = this.entries[id];
    	if(Game.resources.entries.rocketFuel.current >= data.cost.rocketFuel && !data.explored){
    		Game.resources.entries.rocketFuel.current -= data.cost.rocketFuel;
    		this.applyExplore(id);
    	}
    };

    instance.applyExplore = function(id){
    	var data = this.entries[id];
    	data.explored = true;
    	if(data.resource){
			for(var i = 0; i < data.resource.length; i++){
				Game.buildings.unlock(data.resource[i] + "T1");
				Game.resources.unlock(data.resource[i]);
				Templates.uiFunctions.refreshElements("capacity", data.resource[i]);
				Game.statistics.add('resourcesUnlocked');
			}
		}
		if(data.building){
			for(var i = 0; i < data.building.length; i++){
				Game.buildings.unlock(data.building[i]);
			}
		}
		if(data.location){
			for(var i = 0; i < data.location.length; i++){
				this.unlock(data.location[i]);
			}
		}
		if(id == "wonderStation"){
			Game.wonder.tabUnlocked = true;
			Templates.uiFunctions.unlock("buildPrecious");
			if(Game.stargaze.upgradeEntries.freeWonder.achieved){
				Templates.uiFunctions.hide("buildPrecious");
			} else {
				Templates.uiFunctions.unlock("buildEnergetic");
				Templates.uiFunctions.unlock("buildTechnological");
				Templates.uiFunctions.unlock("buildMeteorite");
				newUnlock("wonder");
			}
			Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
		}
		if(id == "solCenter"){
			Game.solCenter.tabUnlocked = true;
			Templates.uiFunctions.unlock("plasmaTech");
			Templates.uiFunctions.unlock("dyson");
			Templates.uiFunctions.unlock("emc");
			if(Game.stargaze.upgradeEntries.nanoswarm.achieved){
				Templates.uiFunctions.unlock("nanoswarmTech");
			}
			newUnlock("solCenter");
			Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
		}
		Templates.uiFunctions.hide(data.id);
		Game.statistics.add('placesExplored');
    }

    instance.unlock = function(location){
    	this.entries[location].unlocked = true;
    	Templates.uiFunctions.unlock(location)
    }

    return instance;
}());