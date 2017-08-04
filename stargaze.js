Game.stargaze = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
    instance.navCount = 0;

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
	};

    instance.getStargazeData = function(id) {
        return this.entries[id];
    };

    return instance;

}());