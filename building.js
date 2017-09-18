Game.buildings = (function(){

	var instance = {};

	instance.dataVersion = 1;
	instance.entries = {};
	instance.updatePerSecondProduction = true;

	instance.initialise = function() {
		var numBuildings = 0;
		for (var id in Game.buildingData) {
			numBuildings++;
			this.entries[id] = this.initBuilding(id);
		}

		console.debug("Loaded " + numBuildings + " Building Types");
	};

	instance.initBuilding = function(id) {
		// using extend to create a new object and leave the defaults unchanged
		var data = jQuery.extend({}, Game.buildingData[id]);
		data.setId(id);
		return data;
	};

	instance.update = function(delta) {

	};

	instance.save = function(data) {
		data.buildings = { v: this.dataVersion, i: {}};
		for(var key in this.entries) {
			data.buildings.i[key] = this.entries[key].current;
		}
	};

	instance.load = function(data) {
		if(data.buildings) {
			if(data.buildings.v && data.buildings.v === this.dataVersion) {
				for(var id in data.buildings.i) {
					if(this.entries[id]) {
						// TODO
					}
				}
			}
		}
	};

	instance.getBuildingData = function(id) {
		return this.entries[id];
	};

	return instance;
}());