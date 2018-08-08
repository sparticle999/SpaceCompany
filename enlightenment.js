Game.enlightenment = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
	instance.navCount = 0;

	instance.titans = {};
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
				this.gainTitan(resource);
			} else {
				this.gainUltrite();
			}
			this.applyEnlighten();
			return true;
		}
		return false;
	};

	instance.calcUltrite = function(){
		var ultrite = 0;
		return ultrite;
	}

	// Calculate Ultrite gain and give to player
	instance.gainUltrite = function(){
		var potential = this.calcUltrite();
	};

	// Give player specified titan
	instance.gainTitan = function(resource){
		this.titans[resource] = true;
		return true;
	};

	instance.applyEnlighten = function(){
		for(var id in Game.buildings.entries){
			var data = Game.buildings.entries[id];
			for(var res in data.cost){
				if(this.titans[res]){
					data.cost[res] *= 0.1;
					Game.buildingData[id].cost[res] *= 0.1;
				}
			}
		}
		for(var id in Game.wonder.entries){
			var data = Game.wonder.entries[id];
			for(var res in data.buildCost){
				if(this.titans[res]){
					data.buildCost[res] *= 0.1;
				}
			}
			for(var res in data.activateCost){
				if(this.titans[res]){
					data.activateCost[res] *= 0.1;
				}
			}
		}
		for(var id in Game.tech.entries){
			var data = Game.tech.entries[id];
			for(var res in data.cost){
				if(this.titans[res]){
					data.cost[res] *= 0.1;
				}
			}
		}
		for(var id in Game.solar.entries){
			var data = Game.solar.entries[id];
			for(var res in data.cost){
				if(this.titans[res]){
					data.cost[res] *= 0.1;
				}
			}
		}
		for(var nav in Game.interstellar){
			if(Game.interstellar[nav].entries){
				var dataSet = Game.interstellar[nav].entries;
				for(var id in dataSet){
					var data = dataSet[id];
					for(var res in data.cost){
						if(this.titans[res]){
							data.cost[res] *= 0.1;
							data.defaultCost[res] *= 0.1;
						}
					}
				}
			}
		}
		if(this.titans.antimatter){Game.interstellar.stars.distanceMultiplier *= 0.1;}
	};

	return instance;

}());