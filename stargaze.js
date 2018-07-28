Game.stargaze = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
	instance.navCount = 0;

	instance.upgradeEntries = {};
	
	instance.rebirthStart = [];				// Things you start with
	instance.rebirthUnlocked = [];			// Things that start unhidden
	instance.rebirthChildUnlocked = [];		// Things that have children that start unhidden

	instance.respecCount = 3;				// Respecs available

	instance.rebirthNeedsUpdate = true;

	instance.tabUnlocked = false;

	instance.dmBoost = 0;

	instance.initialise = function(){
		console.log("%c", "background: green;padding: 5px", "displayNeedsUpdate on upgradeEntries")
		for (var id in Game.stargazeData) {
			var data = Game.stargazeData[id];
			
			this.navCount++;
			this.entries[id] = $.extend({}, data, {
				id: id,
				htmlId: 'stargazeNav' + id,
				displayNeedsUpdate: true
			});
		}
		console.debug("Loaded " + this.navCount + " Stargaze Navs");

		for (var id in Game.prestigeData) {
			var data = Game.prestigeData[id];
			
			this.navCount++;
			this.upgradeEntries[id] = $.extend({}, {
				id: id,
				htmlId: 'stargazeUpg' + id,
				displayNeedsUpdate: true,
				onApply: null,
				rebirthUnlocked: [],
				rebirthChildUnlocked: [],
				rebirthStart: {}
			}, data);
		}
	};

	instance.update = function(){

	};

	instance.resetVars = function(){
		explored=[],activated=[],techUnlocked=!1,meteoriteUnlocked=!1,autoResource=null,dyson=0,dysonTitaniumCost=3e5,dysonGoldCost=1e5,dysonSiliconCost=2e5,dysonMeteoriteCost=1e3,dysonIceCost=1e5,ring=0,ringOutput=5e3,swarm=0,swarmOutput=25e3,sphere=0,sphereOutput=1e6,antimatter=0,antimatterps=0,antimatterStorage=1e5,antimatterToggled=!0;
	};

	instance.rebirth = function(){
		if(sphere < 1)return;
		var check = confirm("Are you sure? This is non-reversible after you reset and save.");
		if(check){
			this.entries.darkMatter.current += this.entries.darkMatter.potential;
			Game.notifySuccess("Dark Matter!", "You have gained " + this.entries.darkMatter.potential + " Dark Matter from rebirthing into your new life!");
			Game.statistics.add("rebirthCount", 1);

			Game.tech.tabUnlocked = false;
			Game.solar.tabUnlocked = false;
			Game.wonder.tabUnlocked = false;
			Game.solCenter.tabUnlocked = false;
			Game.interstellar.tabUnlocked = false;
			Game.stargaze.tabUnlocked = true;
			for(var id in Game.resources.entries){
				if(id != "metal" && id != "gem" && id != "wood")
					Game.resources.entries[id].unlocked = false;
			}
			for(var i = 0; i < explored.length; i++){
				document.getElementById(explored[i]).className = "inner sideTab hidden";
				if(explored[i] != "moon", explored[i] != "venus", explored[i] != "mars", explored[i] != "asteroidBelt")document.getElementById(explored[i]).className = "outer sideTab hidden";
			}
			document.getElementById("rocket").innerHTML = "Not Built";
			document.getElementById("rocketRocketCost").className = "red";
			document.getElementById("solarRocket").className = "";
			document.getElementById("spaceRocket").className = "sideTab";
			document.getElementById("mercury").className = "sideTab hidden";
			document.getElementById("collapseInner").className = "collapseInner sideTab hidden";
			document.getElementById("collapseOuter").className = "collapseOuter sideTab hidden";

			for(var i = 0; i < activated.length; i++){
				$(document.getElementById(activated[i] + "Activation")).text("Dormant");
				document.getElementById(activated[i] + "Activation").className = "red";
			}

			Game.resources.initialise();
			Game.buildings.initialise();
			Game.tech.initialise();
			Game.solar.initialise();
			Game.solCenter.initialise();
			Game.interstellar.initialise();

			this.resetVars();

			updateDysonCost();
			updateFuelProductionCost();
			updateWonderCost();

			Game.settings.entries.gainButtonsHidden = false;
			for(var i = 0; i < document.getElementsByClassName("gainButton").length; i ++){
                document.getElementsByClassName("gainButton")[i].className = "gainButton";
            }
            $('#gainButtonsHidden').prop('checked', false);

			// Refreshing Interstellar Tab
			var objects = ["comms", "rocket", "rocketParts", "antimatter", "military"];
			for(var i = 0; i < objects.length; i++){
				var object = Game.interstellar[objects[i]];
				for(var entry in object.entries){
					$('#' + object.entries[entry].htmlId + 'Count').text(object.entries[entry].count);
				}
			}
			for(var star in Game.interstellar.stars.entries){
				Game.interstellar.stars.entries[star].unlocked = false;
				Game.interstellar.stars.entries[star].explored = false;
				document.getElementById('star_' + star).className = "";
				document.getElementById('star_' + star + '_conquer').className = "hidden";
			}
			for(var achiev in Game.achievements.entries){
				var data = Game.achievements.entries[achiev]
				data.unlocked = -1;
				data.displayNeedsUpdate = true;
				document.getElementById(data.id + '_bg').style = "width: 50px; height: 40px; background: url(" + data.iconPath + data.iconName + "." + data.iconExtension + ") no-repeat center; -webkit-background-size: contain;background-size: contain; margin-left: 5px;opacity: 0.2";
			}
			Game.achievements.rank = 0;
			for(nav in this.entries){
				if(this.entries[nav].opinion){
					this.entries[nav].opinion = 0;
					this.entries[nav].displayNeedsUpdate = true;
				}
			}

			// Adding starting things
			for(var upgrade in this.upgradeEntries){
				var upgradeData = this.upgradeEntries[upgrade];
				if(upgradeData.achieved == true){
					upgradeData.remove();
					upgradeData.onApply();
					if(upgradeData.category != "intro" && upgradeData.category != "darkMatter")this.entries[upgradeData.category].opinion += upgradeData.opinion;
				}
				upgradeData.displayNeedsUpdate = true;
			}
			for(var i = 0; i < this.rebirthStart.length; i++){
    			for(var object in this.rebirthStart[i]){
					window[object] += this.rebirthStart[i][object];
				}
			}
		}
	};

	instance.upgrade = function(id){
		if(id == 'rebirth'){
			this.rebirth();
		}
		if(id == 'respec'){
			this.respec();
			return;
		}
		var upgradeData = this.upgradeEntries[id];
		if(!upgradeData) {
			console.log('"' + id + '" is not a recognised upgrade.');
			return;
		}
		if(upgradeData.achieved != true){
			if(this.entries.darkMatter.current >= upgradeData.cost){
				this.entries.darkMatter.current -= upgradeData.cost;
				this.applyUpgradeEffect(id);
				if(upgradeData.category != "intro" || "darkMatter")this.entries[upgradeData.category].opinion += upgradeData.opinion;
				this.entries[upgradeData.category].displayNeedsUpdate = true;
				upgradeData.achieved = true;
			}
		}
	};

	instance.applyUpgradeEffect = function(id) {
		var data = this.upgradeEntries[id];
		for(var i = 0; i < data.rebirthUnlocked.length; i++){
			this.rebirthUnlocked.push(data.rebirthUnlocked[i]);
		}
		for(var i = 0; i < data.rebirthChildUnlocked.length; i++){
			this.rebirthChildUnlocked.push(data.rebirthChildUnlocked[i]);
		}
		for(var object in data.rebirthStart){
			this.rebirthStart.push(data.rebirthStart);
		}
		if(data.onApply !== null) {
			data.onApply();
		}
		this.rebirthNeedsUpdate = true;
	};

	instance.respec = function(){
		if(this.respecCount <= 0){
			return;
		}
		if(confirm('Warning! You will still lose the respec if you have no upgrades.') == false){
			return;
		}
		this.respecCount -= 1;
		$('#respecCount').text(this.respecCount);
		for(var upgrade in this.upgradeEntries){
			var upgradeData = this.upgradeEntries[upgrade];
			if(upgradeData.achieved == true){
				this.entries.darkMatter.current += upgradeData.cost;
				if(upgradeData.category != "intro" && upgradeData.category != "darkMatter"){
					if(upgradeData.achieved == true)this.entries[upgradeData.category].opinion -= upgradeData.opinion;this.entries[upgradeData.category].displayNeedsUpdate = true;
				}
				upgradeData.remove();
				upgradeData.achieved = false;
			}
			this.rebirthNeedsUpdate = true;
		}
		for(var i = 0; i < this.rebirthUnlocked.length; i++){
			// Unused So Far
		}
		for(var i = 0; i < this.rebirthChildUnlocked.length; i++){
			// Unused So Far
		}
		for(var i = 0; i < this.rebirthStart; i++){
			for(var object in this.rebirthStart[i]){
				window[object] -= this.rebirthStart[i][object];
			}
		}
		this.rebirthUnlocked = {};
		this.rebirthChildUnlocked = {};
		this.rebirthStart = {};
	}

	instance.save = function(data){
		data.stargaze = {entries: {}, upgradeEntries: {}, rebirthStart: {}, rebirthUnlocked: {}, rebirthChildUnlocked: {}, tabUnlocked: this.tabUnlocked};
		for(var id in this.entries){
			data.stargaze.entries[id] = this.entries[id];
		}
		for(var id in this.upgradeEntries){
			if(typeof this.upgradeEntries[id].achieved == 'undefined'){
				this.upgradeEntries[id].achieved = false;
			}
			data.stargaze.upgradeEntries[id] = {achiev: this.upgradeEntries[id].achieved};
		}
		for(var id in this.rebirthStart){
			data.stargaze.rebirthStart[id] = this.rebirthStart[id];
		}
		for(var id in this.rebirthUnlocked){
			data.stargaze.rebirthUnlocked[id] = this.rebirthUnlocked[id];
		}
		for(var id in this.rebirthChildUnlocked){
			data.stargaze.rebirthChildUnlocked[id] = this.rebirthChildUnlocked[id];
		}
	};

	instance.load = function(data){
		if(data.stargaze){
			if(typeof data.stargaze.entries !== 'undefined'){
                for(id in data.stargaze.entries){
                    this.entries[id] = data.stargaze.entries[id];
                    this.entries[id].unlocked = true;
                    this.entries[id].displayNeedsUpdate = true;
                }
            }
            if(typeof data.stargaze.upgradeEntries !== 'undefined'){
                for(id in data.stargaze.upgradeEntries){
                	if(typeof this.upgradeEntries[id] !== 'undefined'){
	                    this.upgradeEntries[id].achieved = data.stargaze.upgradeEntries[id].achieved;
	                    if(typeof this.upgradeEntries[id].achieved == 'undefined'){
	                    	this.upgradeEntries[id].achieved = false;
	                    }
	                    this.upgradeEntries[id].displayNeedsUpdate = true;
	                }
                }
            }
            if(typeof data.stargaze.rebirthStart !== 'undefined'){
                for(id in data.stargaze.rebirthStart){
                    this.rebirthStart[id] = data.stargaze.rebirthStart[id];
                }
            }
            if(typeof data.stargaze.rebirthUnlocked !== 'undefined'){
                for(id in data.stargaze.rebirthUnlocked){
                    this.rebirthUnlocked[id] = data.stargaze.rebirthUnlocked[id];
                }
            }
            if(typeof data.stargaze.rebirthChildUnlocked !== 'undefined'){
                for(id in data.stargaze.rebirthChildUnlocked){
                    this.rebirthChildUnlocked[id] = data.stargaze.rebirthChildUnlocked[id];
                }
            }
            if(data.stargaze.unlocked)
            	this.tabUnlocked = data.stargaze.unlocked;
            else
            	this.tabUnlocked = data.stargaze.tabUnlocked;
		}
		for(var id in this.upgradeEntries){
			var data = this.upgradeEntries[id];
			if(data.achieved == true){
				if(data.onApply)data.onApply();
			}
		}
		// if(Game.solCenter.entries.dyson.items.sphere.current == 1){
		// 	document.getElementById("stargazeTab").className = "";
		// }
	};

	instance.getStargazeData = function(id) {
		return this.entries[id];
	};

	return instance;

}());
