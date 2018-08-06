Game.enlightenment = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
	instance.navCount = 0;

	instance.upgradeEntries = {};

	instance.tabUnlocked = false;

	instance.initialise = function(){
		for(var id in Game.enlightenmentData){
			var data = Game.enlightenmentData[id];
			this.navCount++;
			this.entries[id] = $.extend({}, data, {
				id: id,
				htmlId: 'enl_' + id,
				displayNeedsUpdate: true
			});
		}
	};

	instance.update = function(){

	};

	instance.save = function(data){

	};

	instance.load = function(data){

	};


	// Titan (boolean) determines which enlightenment option the user receives
	instance.enlighten = function(titan){
		if(Game.stargaze.rebirth()){
			Game.stargaze.entries.darkMatter.current = 0;
			if(titan == true){
				var resource = prompt("which resource?");
				// this will be a dropdown
				this.titan(resource);
			} else {
				this.gainUltrite();
			}
			return true;
		}
		return false;
	};

	// Calculate Ultrite gain and give to player
	instance.gainUltrite = function(){

	};

	// Give player specified titan
	instance.titan = function(resource){

	};

	return instance;

}());