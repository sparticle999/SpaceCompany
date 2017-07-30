Game.interstellarBETA.rocket = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
	instance.entries = {};

	instance.initialise = function(){
		for (var id in Game.rocketData) {
            var data = Game.rocketData[id];
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'roc_' + id,
                count: 0,
                displayNeedsUpdate: true
            });
        }
	}

    instance.buildRocket = function(entryName){
        var partPass = 0;
        for(var part in this.entries[entryName].cost){
            if(Game.interstellarBETA.rocketParts.entries[part].count >= this.entries[entryName].cost[part]){
                partPass += 1;
            }
        }
        if(partPass === Object.keys(Game.interstellarBETA.rocket.entries[entryName].cost).length){
            for(var part in this.entries[entryName].cost){
                console.log(window[part.toString()]);
            }
            this.entries[entryName].built = true;
            this.entries[entryName].displayNeedsUpdate = true;
        }
    }

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

	instance.getRocketData = function(id) {
        return this.entries[id];
    };

	return instance;

}());