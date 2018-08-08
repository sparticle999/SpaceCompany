Game.interstellar.stars = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.starCount = 0;

    instance.systemsConquered = 0;
    instance.distanceMultiplier = 10000;

    var buildings = {
        0: {
            name: "Repair War Damages",
            icon: "repair",
            happiness: 15,
        },
        1: {
            name: "Remove Military Presence",
            icon: "military",
            happiness: 20,
        },
        2: {
            name: "Introduce Overlord Religion",
            icon: "religion",
            happiness: 20,
        },
        3: {
            name: "Indoctrinate the Youth",
            icon: "indoctrinate",
            happiness: 20,
        },
        4: {
            name: "Build Overlord Monument",
            icon: "monument",
            happiness: 10,
        },
    };
    
    instance.initialise = function() {
        var nameCount = 0;
        for (var starId in Game.starData) {
            var data = Game.starData[starId];
            
            this.starCount++;
            this.entries[starId] = $.extend({}, data, {
                id: starId,
                htmlId: 'star_' + starId,
                current: 0,
                spy: 0,
                explored: false,
                owned: false,
                items: {},
                displayNeedsUpdate: false,
            });

            for(var i = 0; i < data.planets; i++){
                if(Game.donatorData.planets[nameCount]){
                    var name = Game.donatorData.planets[nameCount];
                    nameCount += 1;
                } else {
                    var name = this.entries[starId].name + " " + String.fromCharCode(97 + i);
                }
                this.entries[starId].items[String.fromCharCode(97 + i)] = {
                    name: name,
                    id: starId + "_" + String.fromCharCode(97 + i),
                    happiness: 0,
                    level: 0,
                } 
                for(var id in Game.starData.buildings){
                    var planetBuilding = Game.starData.buildings[id];
                    buildings[id] = $.extend({}, planetBuilding, {
                        id: id,
                        htmlId: starId + "_" + String.fromCharCode(97 + i) + "_" + id,
                        current: 0,
                    });
                }
                this.entries[starId].items[String.fromCharCode(97 + i)].buildings = buildings;
            }
            
        }

        console.debug("Loaded " + this.starCount + " Stars");

    };

    instance.save = function(data) {
        data.stars = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.stars.i[key] = this.entries[key].current;
        }
    };

    instance.exploreSystem = function(id){
        if(Game.interstellar.rocket.entries.tier1Rocket.built == true){
            var data = this.entries[id];
            var exploreCost = data.distance * this.distanceMultiplier;
            if(antimatter >= exploreCost){
                antimatter -= exploreCost;
                data.explored = true;
                document.getElementById('star_' + id).className = "hidden";
                document.getElementById('star_' + id + '_conquer').className = "";
                newNavUnlock('intnav_' + data.factionId);
                data.displayNeedsUpdate = true;
            }
        }
    };

    instance.upgradePlanet = function(starId, planet){
        var data = this.entries[starId].items[planet];
        //Cost
        data.happiness += data.buildings[data.level].happiness;
        data.level += 1;
    };

    instance.getStarData = function(id) {
        return this.entries[id];
    };
    

    return instance;
}());