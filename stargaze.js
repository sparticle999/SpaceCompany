Game.stargaze = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {empty: "empty",};

	instance.initialise = function(){
		for (var id in Game.stargazeData) {
            var data = Game.stargazeData[id];
            
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'DMup' + id,
                displayNeedsUpdate: true
            });
        }
	};

    instance.getStargazeData = function(id) {
        return this.entries[id];
    };

    return instance;

}());