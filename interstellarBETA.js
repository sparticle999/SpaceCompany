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
        this.comms.initialise();
        this.rocketParts.initialise();
        this.rocket.initialise();
        this.antimatter.initialise();
        this.military.initialise();
        this.stars.initialise();
	}

	instance.getInterstellarData = function(id) {
        return this.entries[id];
    };

    instance.save = function(data){
        data.interstellarBETA = {comms: {}, rocket: {}, rocketParts: {}, antimatter: {}, stars: {}};
        for(id in Game.interstellarBETA.comms.entries){
            data.interstellarBETA.comms[id] = Game.interstellarBETA.comms.entries[id];
        }
        for(id in Game.interstellarBETA.rocket.entries){
            data.interstellarBETA.rocket[id] = Game.interstellarBETA.rocket.entries[id];
        }
        for(id in Game.interstellarBETA.rocketParts.entries){
            data.interstellarBETA.rocketParts[id] = Game.interstellarBETA.rocketParts.entries[id];
        }
        for(id in Game.interstellarBETA.antimatter.entries){
            data.interstellarBETA.antimatter[id] = Game.interstellarBETA.antimatter.entries[id];
        }
    };

    instance.load = function(data){
        if(data.interstellarBETA){
            for(id in data.interstellarBETA.comms){
                Game.interstellarBETA.comms.entries[id].count = data.interstellar.machines[id].count;
            }
            for(id in data.interstellarBETA.rocket){
                Game.interstellarBETA.rocket.entries.tier1Rocket.built = data.interstellar.interRocketBuilt;
            }
            for(id in data.interstellarBETA.rocketParts){
                Game.interstellarBETA.rocketParts.entries[id].count = data.interstellar.machines[id].count;
            }
            for(id in data.interstellarBETA.antimatter){
                Game.interstellarBETA.antimatter.entries[id].count = data.interstellar.machines[id].count;
            }
        }
    };

	return instance;


}());

Game.interstellarBETA.comms = (function(){

    var instance = {};

    instance.entries = {};
    instance.categoryEntries = {};
    instance.entries = {};

    instance.initialise = function(){
        for (var id in Game.commsData) {
            var data = Game.commsData[id];
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'comm_' + id,
                count: 0,
                displayNeedsUpdate: true
            });
        }
    };

    instance.calcCost = function(self, resource){
        return Math.floor(self.defaultCost[resource.toString()] * Math.pow(1.1,self.count));
    };

    instance.updateCost = function(entryName){
        for(var resource in this.entries[entryName].cost){
            var target = 0;
            for(var i = 0; i < Object.keys(Game.interstellarUI.commObservers[entryName]).length; i++){
                if(resource == Game.interstellarUI.commObservers[entryName][i].resource){
                    this.entries[entryName].cost[resource.toString()] = this.calcCost(this.entries[entryName], resource);
                    Game.interstellarUI.commObservers[entryName][i].value = this.entries[entryName].cost[resource.toString()];
                }
            }
        }
    };

    instance.buildMachine = function(entryName) {
        // Add the buildings and clamp to the maximum
        var resourcePass = 0;
        for(var resource in this.entries[entryName].cost){
            if(window[resource.toString()] >= this.entries[entryName].cost[resource.toString()]){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(Game.interstellarBETA.comms.entries[entryName].cost).length){
            var newValue = Math.floor(this.entries[entryName].count + 1);
            this.entries[entryName].count = newValue;
            for(var resource in this.entries[entryName].cost){
                window[resource.toString()] -= this.entries[entryName].cost[resource.toString()];
            }            
            this.entries[entryName].displayNeedsUpdate = true;
        }
        this.updateCost(entryName);
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getMachineData = function(id) {
        return this.entries[id];
    };

    return instance;

}());

Game.interstellarBETA.antimatter = (function(){

    var instance = {};

    instance.entries = {};
    instance.categoryEntries = {};
    instance.entries = {};

    instance.initialise = function(){
        for (var id in Game.antimatterData) {
            var data = Game.antimatterData[id];
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'antimatter_' + id,
                count: 0,
                displayNeedsUpdate: true
            });
        }
    };

    instance.calcCost = function(self, resource){
        return Math.floor(self.defaultCost[resource.toString()] * Math.pow(1.1,self.count));
    };

    instance.updateCost = function(entryName){
        for(var resource in this.entries[entryName].cost){
            var target = 0;
            for(var i = 0; i < Object.keys(Game.interstellarUI.antimatterObservers[entryName]).length; i++){
                if(resource == Game.interstellarUI.antimatterObservers[entryName][i].resource){
                    this.entries[entryName].cost[resource.toString()] = this.calcCost(this.entries[entryName], resource);
                    Game.interstellarUI.antimatterObservers[entryName][i].value = this.entries[entryName].cost[resource.toString()];
                }
            }
        }
    };

    instance.buildMachine = function(entryName) {
        // Add the buildings and clamp to the maximum
        var resourcePass = 0;
        for(var resource in this.entries[entryName].cost){
            if(window[resource.toString()] >= this.entries[entryName].cost[resource.toString()]){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(Game.interstellarBETA.antimatter.entries[entryName].cost).length){
            var newValue = Math.floor(this.entries[entryName].count + 1);
            this.entries[entryName].count = newValue;
            for(var resource in this.entries[entryName].cost){
                window[resource.toString()] -= this.entries[entryName].cost[resource.toString()];
            }            
            this.entries[entryName].displayNeedsUpdate = true;
        }
        this.updateCost(entryName);
    };

    instance.destroyMachine = function(entryName){
        if(this.entries[entryName].count > 0){
            this.entries[entryName].count -= 1;
            this.updateCost(entryName);
        }
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getMachineData = function(id) {
        return this.entries[id];
    };

    return instance;

}());

Game.interstellarBETA.military = (function(){

    var instance = {};

    instance.entries = {};
    instance.categoryEntries = {};
    instance.entries = {};

    instance.power = 0;
    instance.defense = 0;
    instance.speed = 0;

    instance.initialise = function(){
        for (var id in Game.militaryData) {
            var data = Game.militaryData[id];
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'milit_' + id,
                count: 0,
                active: 0,
                displayNeedsUpdate: true
            });
        }
    };

    instance.calcCost = function(self, resource){
        return Math.floor(self.defaultCost[resource.toString()] * Math.pow(1.1,self.count));
    };

    instance.updateCost = function(entryName){
        for(var resource in this.entries[entryName].cost){
            var target = 0;
            for(var i = 0; i < Object.keys(Game.interstellarUI.militaryObservers[entryName]).length; i++){
                if(resource == Game.interstellarUI.militaryObservers[entryName][i].resource){
                    this.entries[entryName].cost[resource.toString()] = this.calcCost(this.entries[entryName], resource);
                    Game.interstellarUI.militaryObservers[entryName][i].value = this.entries[entryName].cost[resource.toString()];
                }
            }
        }
    };

    instance.buildShip = function(entryName) {
        // Add the buildings and clamp to the maximum
        var resourcePass = 0;
        for(var resource in this.entries[entryName].cost){
            if(window[resource.toString()] >= this.entries[entryName].cost[resource.toString()]){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(Game.interstellarBETA.military.entries[entryName].cost).length){
            var newValue = Math.floor(this.entries[entryName].count + 1);
            this.entries[entryName].count = newValue;
            for(var resource in this.entries[entryName].cost){
                window[resource.toString()] -= this.entries[entryName].cost[resource.toString()];
            }            
            this.entries[entryName].displayNeedsUpdate = true;
        }
        this.updateCost(entryName);
        this.updateFleetStats();
        this.updateShips();
    };

    instance.updateFleetStats = function(){
        var number = 0;
        var stats = {power: 0, defense: 0, speed: 1};
        for(var shipClass in this.entries){
            var data = this.entries[shipClass];
            var count = data.count;
            stats.power += data.stats.power*count;
            stats.defense += data.stats.defense*count;
            stats.speed += data.stats.speed*count;
            number += count;
        }
        if(number != 0){
            stats.speed = Math.floor(stats.speed/number);
            for(var stat in stats){
                var updateList = document.getElementsByClassName("fleet" + Game.utils.capitaliseFirst(stat));
                for(var j = 0; j < updateList.length; j++){
                    updateList[j].innerHTML = stats[stat];
                }
            }
            this.power = stats.power;
            this.defense = stats.defense;
            this.speed = stats.speed;
        }
    };

    instance.updateShips = function(){
        for(var ship in this.entries){
            var updateList = document.getElementsByClassName(ship + "Count");
            for(var i = 0; i < updateList.length; i++){
                updateList[i].innerHTML = this.entries[ship].count;
            }
            var activeUpdateList = document.getElementsByClassName(ship + "Active");
            for(var i = 0; i < activeUpdateList.length; i++){
                activeUpdateList[i].innerHTML = this.entries[ship].active;
            }
        }
    };

    instance.addShip = function(shipName, num){
        var ship = this.entries[shipName];
        if(num == "max"){
            ship.active = ship.count;
        } else if(num == "none"){
            ship.active = 0;
        } else if(ship.active + num <= ship.count && ship.active + num >= 0){
            ship.active += num;
        }
        this.updateShips();
    };

    instance.getThreat = function(starData){
        var threatLevels = ["•", "••", "•••", "I", "II", "III", "X", "XX", "XXX", "XXXX", "XXXXX", "XXXXXX"];
        /*******************************
        ** Some stuff figuring it out **
        *******************************/

        var l = 0;
        return threatLevels[l];
    };

    instance.invadeSystem = function(starName){
        if(this.power!=0){
            var star = Game.interstellarBETA.stars.getStarData(starName);
            var damage = (this.power/star.stats.defense)*this.speed; // -, not /, because then goes <1
            var starDamage = (star.stats.power/Math.max(this.defense,1))*star.stats.speed;
            if(damage > starDamage){
                var chance = (damage/starDamage)-0.5;
            } else {
                var chance = Math.max(0, 1.5-(starDamage/damage));
            }
            var roll = Math.random();
            if(chance >= roll){
                //star.owned = true;
                var randomShips = Game.utils.randArb(0,chance);
                if(randomShips < 1){

                }
                console.log(randomShips);
                // Lose random roll up to (chance of winning) ships
                // use that chance for each ship, so that it's random which is lost
                // Notify Win
            } else {
                // Lose all active ships
            }
            console.log("Star Dam: " + starDamage);
            console.log("Dam: " + damage);
            console.log("Percent keep: " + (randomShips || "loss"));
            console.log("Chance: " + chance);
            console.log("Rand Roll: " + roll);
        }
    };

    instance.absorbSystem = function(id){
        var data = this.entries[id];
        var faction = Game.stargaze.getStargazeData(data.factionId);
        if(faction.opinion >= 60){
            faction.opinion -= 5;
            data.owned = true;
        }
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getShipData = function(id) {
        return this.entries[id];
    };

    return instance;

}());