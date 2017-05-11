Game.achievements = (function() {
    'use strict';

    var instance = {};
    instance.dataVersion = 2;
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
			    '<div id="{{id}}_div" data-toggle="tooltip" title="{{title}}" style="width: 64px; height: 64px; border:2px solid white;">',
                '<div id="{{id}}_bg" style="width: 50px; height: 40px; background: url({{iconPath}}{{iconName}}.{{iconExtension}}) no-repeat center; -webkit-background-size: contain;background-size: contain; margin-left: 5px;opacity: 0.2"></div>',
				    '<div id="{{id}}_img" style="overflow: hidden; vertical-align: bottom;"><img src="Icons/achievementStar.png" height="11px"></div>',
                '</div>',
            '</td>'].join('\n'));

        this.rootElement = $('#achievementContent');

        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Metal", "metalIcon", function(x) { return metal >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Gems", "gemIcon", function(x) { return gem >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Wood", "woodIcon", function(x) { return wood >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Charcoal", "charcoalIcon", function(x) { return charcoal >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Science", "technologyIcon", function(x) { return science >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Oil", "oilIcon", function(x) { return oil >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Rocket Fuel", "rocketFuelIcon", function(x) { return rocketFuel >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Space Metal", "spaceMetalIcon", function(x) { return rocketFuel >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Methane", "methaneIcon", function(x) { return rocketFuel >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Titanium", "titaniumIcon", function(x) { return rocketFuel >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Gold", "goldIcon", function(x) { return rocketFuel >= x}, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Silver", "silverIcon", function(x) { return rocketFuel >= x}, Game.constants.achievementResourceBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Miners", "metalIcon", function(x) { return miner >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Gem Miners", "gemIcon", function(x) { return gemMiner >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Woodcutters", "woodIcon", function(x) { return woodcutter >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Moon Workers", "spaceMetalIcon", function(x) { return moonWorker >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Explorers", "titaniumIcon", function(x) { return explorer >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Scout Ships", "silverIcon", function(x) { return scout >= x}, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Woodburners", "charcoalIcon", function(x) { return woodburner >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Furnaces", "charcoalIcon", function(x) { return furnace >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Industrial Kilns", "charcoalIcon", function(x) { return kiln >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Forest Fryers", "charcoalIcon", function(x) { return fryer >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Charcoal Engines", "EnergyIcon", function(x) { return charcoalEngine >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Solar Panels", "EnergyIcon", function(x) { return solarPanel >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Small Pumps", "oilIcon", function(x) { return pump >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Pumpjacks", "oilIcon", function(x) { return pumpjack >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Oil Fields", "oilIcon", function(x) { return oilField >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Offshore Rigs", "oilIcon", function(x) { return oilRig >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Heavy Drills", "metalIcon", function(x) { return heavyDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Giga Drills", "metalIcon", function(x) { return gigaDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Quantum Drills", "metalIcon", function(x) { return quantumDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Advanced Drills", "gemIcon", function(x) { return advancedDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Diamond-Encrusted Drill", "gemIcon", function(x) { return diamondDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Laser Cutters", "woodIcon", function(x) { return laserCutter >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Mass Deforesters", "woodIcon", function(x) { return deforester >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Low Gravity Drill", "spaceMetalIcon", function(x) { return moonDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Titan Drill", "spaceMetalIcon", function(x) { return titanDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Moon Quarries", "spaceMetalIcon", function(x) { return moonQuarry >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Planet Excavators", "spaceMetalIcon", function(x) { return planetExcavator >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Space Metal Drill", "titaniumIcon", function(x) { return spaceMetalDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Penta Drill", "titaniumIcon", function(x) { return pentaDrill >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Empowered Blowtorches", "siliconIcon", function(x) { return blowtorch >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Seaside Scorchers", "siliconIcon", function(x) { return scorcher >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Beach Annihilators", "siliconIcon", function(x) { return annihilator >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Vacuum Cleaners", "methaneIcon", function(x) { return vacuum >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Suction Excavators", "methaneIcon", function(x) { return suctionExcavator >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Space Cow Plantation", "methaneIcon", function(x) { return spaceCow >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Rocket Droids", "goldIcon", function(x) { return droid >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Asteroid Destroyer", "goldIcon", function(x) { return destroyer >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Death Stars", "goldIcon", function(x) { return deathStar >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Interplanetary Lasers", "silverIcon", function(x) { return spaceLaser >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Big Berthas", "silverIcon", function(x) { return bertha >= x}, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Infusers", "technologyIcon", function(x) { return infuser >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Vents", "technologyIcon", function(x) { return vent >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Chronal Actuators", "technologyIcon", function(x) { return actuator >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Atomic Cannons", "technologyIcon", function(x) { return cannon >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Desert Destroyers", "technologyIcon", function(x) { return desert >= x}, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Laboratories", "technologyIcon", function(x) { return lab >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Laboratories T2", "technologyIcon", function(x) { return labT2 >= x}, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Laboratories T3", "technologyIcon", function(x) { return labT3 >= x}, Game.constants.achievementProducerBrackets);
    };

    instance.update = function(delta) {
        for(var id in this.entries) {
            var data = this.entries[id];

            if(data.unlocked < data.brackets.length - 1 && data.evaluator(data.brackets[data.unlocked + 1])) {
                this.unlock(id, data.unlocked + 1);
                newUnlock('more');
            }

            if(data.displayNeedsUpdate === true) {
                this.updateDisplay(id);
            }
        }
    };

    instance.updateDisplay = function(id) {
        var data = this.entries[id];
        var div = $('#' + id + "_div");
        var bg = $('#' + id + "_bg");

        if(data.unlocked === data.brackets.length - 1) {
            div.prop('title', data.title.replace('%s', data.brackets[data.unlocked]) + " Completed");
        } else {
            div.prop('title', data.title.replace('%s', data.brackets[data.unlocked + 1]));
        }

        div.css('border-color', Game.constants.achievementBracketColors[data.unlocked]);

        $('#' + id + '_img').width(12 * (data.unlocked + 1));

        if(data.unlocked >= 0){
            bg.fadeTo(2, 1);
        }

        data.displayNeedsUpdate = false;
    };

    instance.unlock = function(id, tier) {
        if(this.entries[id].unlocked < tier) {
            this.entries[id].unlocked = tier;
            this.entries[id].displayNeedsUpdate = true;
        }
    };

    instance.createCategory = function (category) {
        var data = {id: "ach_cat_" + category, name: category};
        this.categoryElements[category] = {colc: 0, col: null, id: data.id};

        var html = $(this.categoryTemplate(data));
        this.rootElement.append(html);

        this.createCategoryRow(category);
    };

    instance.createCategoryRow = function (category) {
        var data = this.categoryElements[category];

        data.colc = 0;
        data.col = $('<tr></tr>');
        $('#'+data.id).append(data.col);
    };

    instance.createAchievements = function(category, title, icon, evaluator, brackets) {
        if (this.categoryElements[category] === undefined) {
            this.createCategory(category);
        }

        var data = {
            id: "ach_" + this.nextId++,
            iconPath: Game.constants.iconPath,
            iconName: icon,
            iconExtension: Game.constants.iconExtension,
            title: title,
            evaluator: evaluator,
            unlocked: -1,
            brackets: brackets,
            displayNeedsUpdate: true
        };

        this.entries[data.id] = data;
        var html = this.entryTemplate(data);
        this.categoryElements[category].colc++;
        this.categoryElements[category].col.append($(html));

        if(this.categoryElements[category].colc >= Game.constants.achievementIconsPerRow) {
            this.createCategoryRow(category);
        }
    };

    instance.save = function(data) {
        data.achievements = {version: this.dataVersion, entries: []};
        for(var id in this.entries) {
            if(this.entries[id].unlocked > 0) {
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
                        this.unlock(id, data.achievements.entries[i]);
                    }
                }
            }
        }
    };

    return instance;
}());