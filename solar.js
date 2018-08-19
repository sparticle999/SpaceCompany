Game.solar = (function(){

	function UpdateCost(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.solar.entries[id];
            if (new Date() - previous < 250) {return;}
            var value = Game.settings.doFormat('cost', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'cost');
            previous = new Date();
            return true;
        }
    }

    var instance = {};

    instance.dataVersion = 1;

    instance.entries = {};
    instance.categoryEntries = {};
    instance.solarTypeCount = 0;
    instance.tabUnlocked = false;

    instance.initialise = function(){
    	for (var id in Game.solarData) {
            var data = Game.solarData[id];
            this.solarTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'loc_' + id,
                current: 0,
                perSecond: 0,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                hidden: false,
                ui_cost: new UpdateCost(id),
            });
        }
    };

    instance.update = function(){

    };

    instance.save = function(data){
    	data.solar = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.solar.i[key] = {};
            data.solar.i[key].unlocked = this.entries[key].unlocked;
            data.solar.i[key].explored = this.entries[key].explored;
        }
    };

    instance.load = function(data){
    	if(typeof data.solar !== 'undefined'){
			for (var id in data.solar.i) {
		        if (typeof this.entries[id] !== 'undefined') {
		            if (typeof data.solar.i[id].explored !== 'undefined' && data.solar.i[id].explored == true) {
		                this.applyExplore(id);
		                // we can assume that the location is unlocked if it has been explored
		                this.entries[id].unlocked = true;
		            } else if (typeof data.solar.i[id].unlocked !== 'undefined') {
		                this.entries[id].unlocked = data.solar.i[id].unlocked;
		            }
		        }
		    }
    	}
    };

    instance.explore = function(id){
    	var data = this.entries[id];
    	if(Game.resources.entries.rocketFuel.current >= data.cost.rocketFuel && !data.explored){
    		Game.resources.entries.rocketFuel.current -= data.cost.rocketFuel;
    		data.explored = true;
    		this.applyExplore(id);
    	}
    };

    instance.applyExplore = function(id){
    	var data = this.entries[id];
    	if(data.resource){
			for(var i = 0; i < data.resource.length; i++){
				Game.buildings.unlock(data.resource[i] + "T1");
			}
		}
		if(data.location){
			for(var i = 0; i < data.location.length; i++){
				this.unlock(data.location[i]);
			}
		}
		if(location == "wonderStation"){
			Game.wonder.tabUnlocked = true;
			Templates.uiFunctions.unlock("buildPrecious");
			Templates.uiFunctions.unlock("buildEnergetic");
			Templates.uiFunctions.unlock("buildTechnological");
			Templates.uiFunctions.unlock("buildMeteorite");
			newUnlock("wonder");
			Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
		}
		if(location == "solCenter"){
			Game.solCenter.tabUnlocked = true;
			Templates.uiFunctions.show("solCenterTab");
			newUnlock("solCenter");
			Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
		}
		Templates.uiFunctions.hide(data.id);
    }

    instance.unlock = function(location){
    	this.entries[location].unlocked = true;
    	Templates.uiFunctions.unlock(location)
    }

    return instance;
}());


// Solar System Tab

function launchRocket(){
	if(rocket >= 1 && getResource(RESOURCE.RocketFuel) >= 20){
		Game.resources.takeResource(RESOURCE.RocketFuel, 20);
		rocket -= 1;
		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
		rocketLaunched = true;
	}
}

function explore(planet){
	var planetsData = {
		Moon: {fuel: 20, area: "innerPlanet", resource: "lunarite"},
		Venus: {fuel: 50, area: "innerPlanet", resource: "methane"},
		Mars: {fuel: 80, area: "innerPlanet", resource: "titanium,silicon"},
		AsteroidBelt: {fuel: 200, area: "innerPlanet", resource: "gold,silver"},
		WonderStation: {fuel: 500},
		Jupiter: {fuel: 1000, area: "outerPlanet", resource: "hydrogen"},
		Saturn: {fuel: 2000, area: "outerPlanet", resource: "helium"},
		Pluto: {fuel: 5000, area: "outerPlanet", resource: "ice"},
		KuiperBelt: {fuel: 6000, area: "outerPlanet"},
		SolCenter: {fuel: 7000}
	};

	if(!planetsData[planet]) return console.error("Cannot explore \"" + planet + "\", data not found.");
	if (getResource(RESOURCE.RocketFuel) >= planetsData[planet].fuel) {
		Game.resources.takeResource(RESOURCE.RocketFuel, planetsData[planet].fuel);
		document.getElementById("explore" + planet).className = "hidden";
		buttonsHidden.push("explore" + planet);
		explored.push(planet.substring(0, 1).toLowerCase() + planet.substring(1));

		// Planet/Area specific code
		switch(planet) {
			case "Moon":
				document.getElementById("collapseInnerPlanet").className = "collapseInnerPlanet";
				resourcesUnlocked.push("collapseInnerPlanet");
				break;
			case "Venus":
				document.getElementById("methanePower").className = "";
				resourcesUnlocked.push("methanePower");
				break;
			case "AsteroidBelt":
				document.getElementById("wonderStation").className = "inner";
				document.getElementById("collapseOuter").className = "collapseOuter";
				document.getElementById("jupiter").className = "outer";
				document.getElementById("saturn").className = "outer";
				document.getElementById("uranus").className = "outer";
				document.getElementById("neptune").className = "outer";
				document.getElementById("pluto").className = "outer";
				document.getElementById("kuiperBelt").className = "outer";
				break;
			case "WonderStation":
				document.getElementById("wonderTab").className = "";
				tabsUnlocked.push("wonderTab");
				Game.statistics.add('tabsUnlocked');
				newUnlock("wonder");
				Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
				break;
			case "Jupiter":
				document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
				document.getElementById("fusionPower").className = "";
				resourcesUnlocked.push("collapseOuterPlanet", "fusionPower");
				break;
			case "KuiperBelt":
				document.getElementById("solCenter").className = "outer";
				resourcesUnlocked.push("solCenter");
				refreshResources();
				break;
			case "SolCenter":
				document.getElementById("solCenterTopTab").className = "";
				resourcesUnlocked.push("solCenterTopTab");
				refreshResources();
				Game.statistics.add('tabsUnlocked');
				newUnlock("solCenter");
				Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
				break;
		}

		// Resource(s)
		if (planetsData[planet].resource) {
			var toAdd = planetsData[planet].resource.split(',');
			for(var i = 0; i < toAdd.length; i++) {
				switch(Game.resourceData[toAdd[i]].category) {
					case "earth":
						document.getElementById(toAdd[i] + "Nav").className = "earth";
						break;
					case "innerSol":
						document.getElementById(toAdd[i] + "Nav").className = "innerPlanet";
						break;
					case "outerSol":
						document.getElementById(toAdd[i] + "Nav").className = "outerPlanet";
						break;
					default:
						// Should never happen
						throw new Error("Invalid resource area: \"" + Game.resourceData[toAdd[i]].category + "\" while unlocking resource \"" + toAdd[i] + "\"");
				}
				resourcesUnlocked.push(toAdd[i] + "Nav");
			}
			refreshResources();
			newUnlock("resources");
			Game.statistics.add('resourcesUnlocked', toAdd.length);
		}
		Game.statistics.add('placesExplored');
	}
}
