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

	return instance;

}());