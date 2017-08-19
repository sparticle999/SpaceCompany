Game.stargaze = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
    instance.navCount = 0;

    instance.upgradeEntries = {};

	instance.initialise = function(){
		for (var id in Game.stargazeData) {
            var data = Game.stargazeData[id];
            
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'stargazeNav' + id,
                displayNeedsUpdate: true
            });
        }
        console.log("Loaded " + this.navCount + " Stargaze Navs");

        for (var id in Game.prestigeData) {
            var data = Game.prestigeData[id];
            
            this.navCount++;
            this.upgradeEntries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'stargazeUpg' + id,
                displayNeedsUpdate: true
            });
        }
	};

    instance.upgrade = function(id){
        console.log('"' + id + '" is not a completed feature. Thank you for your patience.')
    }

    instance.getStargazeData = function(id) {
        return this.entries[id];
    };

    return instance;

}());