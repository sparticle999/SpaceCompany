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
		console.debug("Loaded " + this.navCount + " Enlightenment Navs");

		for (var id in Game.enlightenData) {
			var data = Game.enlightenData[id];
			this.upgradeEntries[id] = $.extend({}, {
				id: id,
				htmlId: 'enlUpg_' + id,
				displayNeedsUpdate: true,
				onApply: null,
			}, data);
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
		var ultrite = this.calcUltrite();
		if(Game.stargaze.rebirth()){
			Game.stargaze.entries.darkMatter.current = 0;
			if(titan == true){
				var resource = prompt("which resource?");
				// this will be a dropdown
				this.gainTitan(resource);
			} else {
				this.entries.ultrite.current += ultrite;
			}
			this.applyTitan();
			return true;
		}
		return false;
	};

	instance.calcUltrite = function(){
		var ultrite = 0;
		for(var star in Game.interstellar.stars.entries){
			var data = Game.interstellar.stars.entries[star];
			if(data.owned){
				ultrite += 1;
			}
			if(data.absorbed){
				ultrite += 1;
			}
			for(var id in data.items){
				var planet = data.items[id];
				if(planet.level >= 5){
					ultrite += 3;
				}
			}
		}
		for(var id in Game.stargaze.upgradeEntries){
			if(Game.stargaze.upgradeEntries[id].achieved){
				ultrite += 2;
			}
		}
		console.log("Overlord Appreciation Research");
		return ultrite;
	}

	// Give player specified titan
	instance.gainTitan = function(resource){
		this.titans[resource] = true;
		return true;
	};

	instance.applyTitan = function(){
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

	instance.upgrade = function(id){
		if(id == 'enlighten'){
			this.enlighten(false);
		}
		if(id == 'titan'){
			this.enlighten(true);
			return;
		}
		var upgradeData = this.upgradeEntries[id];
		if(!upgradeData) {
			console.log('"' + id + '" is not a recognised upgrade.');
			return;
		}
		if(upgradeData.achieved != true){
			if(this.entries.ultrite.current >= upgradeData.cost){
				this.entries.ultrite.current -= upgradeData.cost;
				this.applyUpgradeEffect(id);
				this.entries[upgradeData.category].displayNeedsUpdate = true;
				upgradeData.achieved = true;
			}
		}
	};

	return instance;

}());