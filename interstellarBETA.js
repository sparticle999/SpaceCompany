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
        this.rocketParts.initialise();
        this.rocket.initialise();
        this.stars.initialise();
	}

	instance.getInterstellarData = function(id) {
        return this.entries[id];
    };

	return instance;


}());