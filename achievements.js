Game.achievements = (function() {
    'use strict';

    var instance = {};
    instance.dataVersion = 1;
    instance.categoryTemplate = null;
    instance.entryTemplate = null;
    instance.nextId = 0;
    instance.categoryElements = {};
    instance.entries = {};
    instance.rootElement = null;

    instance.initialize = function() {
        this.categoryTemplate = Handlebars.compile(
            ['<td>',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<table class="table" id="{{id}}"></table>',
             '</td>'].join('\n'));

        this.entryTemplate = Handlebars.compile(
            ['<td id="{{id}}" class="achievementTD" style="border:none;">',
			    '<div>',
				    '<img src="{{iconPath}}{{iconName}}.{{iconExtension}}" data-toggle="tooltip" title="{{title}}">',
                '</div>',
            '</td>'].join('\n'));

        this.rootElement = $('#achievementContent');

        var resourceMax = 100000;
        this.createAchievements("Resources", "Collect %s Metal", "metalIcon", function(x) { return metal >= x}, 10, resourceMax);
        this.createAchievements("Resources", "Collect %s Gems", "gemIcon", function(x) { return gem >= x}, 10, resourceMax);
        this.createAchievements("Resources", "Collect %s Wood", "woodIcon", function(x) { return wood >= x}, 10, resourceMax);
        this.createAchievements("Resources", "Collect %s Charcoal", "charcoalIcon", function(x) { return charcoal >= x}, 10, resourceMax);
        this.createAchievements("Resources", "Collect %s Science", "technologyIcon", function(x) { return science >= x}, 10, resourceMax);
        this.createAchievements("Resources", "Collect %s Oil", "oilIcon", function(x) { return oil >= x}, 10, resourceMax);
        this.createAchievements("Resources", "Collect %s Rocket Fuel", "oilIcon", function(x) { return rocketFuel >= x}, 10, resourceMax);

        this.createAchievements("Workers", "Recruit %s Miners", "metalIcon", function(x) { return miner >= x});
        this.createAchievements("Workers", "Recruit %s Gem Miners", "gemIcon", function(x) { return gemMiner >= x});
        this.createAchievements("Workers", "Recruit %s Woodcutters", "woodIcon", function(x) { return woodcutter >= x});
        this.createAchievements("Workers", "Recruit %s Moon Workers", "spaceMetalIcon", function(x) { return moonWorker >= x});
        this.createAchievements("Workers", "Recruit %s Explorers", "titaniumIcon", function(x) { return explorer >= x});
        this.createAchievements("Workers", "Recruit %s Scout Ships", "silverIcon", function(x) { return scout >= x});

        this.createAchievements("Machines", "Build %s Woodburners", "charcoalIcon", function(x) { return woodburner >= x});
        this.createAchievements("Machines", "Build %s Furnaces", "charcoalIcon", function(x) { return furnace >= x});
        this.createAchievements("Machines", "Build %s Industrial Kilns", "charcoalIcon", function(x) { return kiln >= x});
        this.createAchievements("Machines", "Build %s Forest Fryers", "charcoalIcon", function(x) { return fryer >= x});
        this.createAchievements("Machines", "Build %s Charcoal Engines", "EnergyIcon", function(x) { return charcoalEngine >= x});
        this.createAchievements("Machines", "Build %s Solar Panels", "EnergyIcon", function(x) { return solarPanel >= x});
        this.createAchievements("Machines", "Build %s Small Pumps", "oilIcon", function(x) { return pump >= x});
        this.createAchievements("Machines", "Build %s Pumpjacks", "oilIcon", function(x) { return pumpjack >= x});
        this.createAchievements("Machines", "Build %s Oil Fields", "oilIcon", function(x) { return oilField >= x});
        this.createAchievements("Machines", "Build %s Offshore Rigs", "oilIcon", function(x) { return oilRig >= x});
        this.createAchievements("Machines", "Build %s Heavy Drills", "metalIcon", function(x) { return heavyDrill >= x});
        this.createAchievements("Machines", "Build %s Giga Drills", "metalIcon", function(x) { return gigaDrill >= x});
        this.createAchievements("Machines", "Build %s Quantum Drills", "metalIcon", function(x) { return quantumDrill >= x});
        this.createAchievements("Machines", "Build %s Advanced Drills", "gemIcon", function(x) { return advancedDrill >= x});
        this.createAchievements("Machines", "Build %s Diamond-Encrusted Drill", "gemIcon", function(x) { return diamondDrill >= x});
        this.createAchievements("Machines", "Build %s Laser Cutters", "woodIcon", function(x) { return laserCutter >= x});
        this.createAchievements("Machines", "Build %s Mass Deforesters", "woodIcon", function(x) { return deforester >= x});
        this.createAchievements("Machines", "Build %s Low Gravity Drill", "spaceMetalIcon", function(x) { return moonDrill >= x});
        this.createAchievements("Machines", "Build %s Titan Drill", "spaceMetalIcon", function(x) { return titanDrill >= x});
        this.createAchievements("Machines", "Build %s Moon Quarries", "spaceMetalIcon", function(x) { return moonQuarry >= x});
        this.createAchievements("Machines", "Build %s Planet Excavators", "spaceMetalIcon", function(x) { return planetExcavator >= x});
        this.createAchievements("Machines", "Build %s Space Metal Drill", "titaniumIcon", function(x) { return spaceMetalDrill >= x});
        this.createAchievements("Machines", "Build %s Penta Drill", "titaniumIcon", function(x) { return pentaDrill >= x});
        this.createAchievements("Machines", "Build %s Empowered Blowtorches", "siliconIcon", function(x) { return blowtorch >= x});
        this.createAchievements("Machines", "Build %s Seaside Scorchers", "siliconIcon", function(x) { return scorcher >= x});
        this.createAchievements("Machines", "Build %s Beach Annihilators", "siliconIcon", function(x) { return annihilator >= x});
        this.createAchievements("Machines", "Build %s Vacuum Cleaners", "methaneIcon", function(x) { return vacuum >= x});
        this.createAchievements("Machines", "Build %s Suction Excavators", "methaneIcon", function(x) { return suctionExcavator >= x});
        this.createAchievements("Machines", "Build %s Space Cow Plantation", "methaneIcon", function(x) { return spaceCow >= x});
        this.createAchievements("Machines", "Build %s Rocket Droids", "goldIcon", function(x) { return droid >= x});
        this.createAchievements("Machines", "Build %s Asteroid Destroyer", "goldIcon", function(x) { return destroyer >= x});
        this.createAchievements("Machines", "Build %s Death Stars", "goldIcon", function(x) { return deathStar >= x});
        this.createAchievements("Machines", "Build %s Interplanetary Lasers", "silverIcon", function(x) { return spaceLaser >= x});
        this.createAchievements("Machines", "Build %s Big Berthas", "silverIcon", function(x) { return bertha >= x});

        this.createAchievements("Machines", "Build %s Infusers", "technologyIcon", function(x) { return infuser >= x});
        this.createAchievements("Machines", "Build %s Vents", "technologyIcon", function(x) { return vent >= x});
        this.createAchievements("Machines", "Build %s Chronal Actuators", "technologyIcon", function(x) { return actuator >= x});
        this.createAchievements("Machines", "Build %s Atomic Cannons", "technologyIcon", function(x) { return cannon >= x});
        this.createAchievements("Machines", "Build %s Desert Destroyers", "technologyIcon", function(x) { return desert >= x});

        this.createAchievements("Buildings", "Build %s Laboratories", "technologyIcon", function(x) { return lab >= x});
        this.createAchievements("Buildings", "Build %s Laboratories T2", "technologyIcon", function(x) { return labT2 >= x});
        this.createAchievements("Buildings", "Build %s Laboratories T3", "technologyIcon", function(x) { return labT3 >= x});
    };

    instance.update = function(delta) {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.unlocked === false && data.evaluator(data.count)) {
                this.unlock(id);
                newUnlock('more');
            }
        }
    };

    instance.unlock = function(id) {
        $('#' + id).addClass('achieved');
        this.entries[id].unlocked = true;
    };

    instance.createCategory = function (category) {
        var data = {id: "ach_cat_" + category, name: category};
        var html = this.categoryTemplate(data);
        this.categoryElements[category] = $(html);
        this.rootElement.append(this.categoryElements[category]);
    };

    instance.createAchievements = function(category, title, icon, evaluator, startCount, countMax, countFactor, countIsMultiply) {
        var wrapper = $('<tr></tr>');

        startCount = startCount || 1;
        countMax = countMax || Game.constants.achievementMax;
        countFactor = countFactor || 10;
        countIsMultiply = countIsMultiply || true;

        if (this.categoryElements[category] === undefined) {
            this.createCategory(category);
        }

        var count = startCount;
        while(count <= countMax) {
            this.createAchievement(wrapper, title.replace("%s", count), count, icon, evaluator);

            if(countIsMultiply === true) {
                count *= countFactor;
            } else {
                count += countFactor;
            }
        }

        $('#ach_cat_' + category).append(wrapper);
    };

    instance.createAchievement = function(wrapper, title, count, icon, evaluator) {
        var data = {
            id: "ach_" + this.nextId++,
            count: count,
            iconPath: Game.constants.iconPath,
            iconName: icon,
            iconExtension: Game.constants.iconExtension,
            title: title,
            evaluator: evaluator,
            unlocked: false
        };

        this.entries[data.id] = data;
        var html = this.entryTemplate(data);
        wrapper.append($(html));
    };

    instance.save = function(data) {
        data.achievements = {version: this.dataVersion, entries: []};
        for(var id in this.entries) {
            if(this.entries[id].unlocked === true) {
                console.debug("Save Unlock: " + id)
                data.achievements.entries.push(id);
            }
        }
    };

    instance.load = function(data) {
        if(data.achievements) {
            if(data.achievements.version && data.achievements.version == this.dataVersion) {
                for(var i = 0; i < data.achievements.entries.length; i++){
                    var id = data.achievements.entries[i];
                    if(this.entries[id]){
                        this.unlock(id);
                    }
                }
            }
        }
    };

    return instance;
}());