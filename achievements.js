Game.achievements = (function() {
    'use strict';

    var instance = {};

    instance.dataVersion = 4;

    instance.nextId = 0;

    instance.rank = 1;
    instance.xp = 0;

    instance.entries = {};
    instance.achievementCount = 0;
    instance.achievementCountIncludingTiers = 0;

    instance.initialise = function() {
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Metal", "metalIcon", function(x) { return metal >= x}, function(x) { return metal/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Gems", "gemIcon", function(x) { return gem >= x}, function(x) { return gem/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Wood", "woodIcon", function(x) { return wood >= x}, function(x) { return wood/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Charcoal", "charcoalIcon", function(x) { return charcoal >= x}, function(x) { return charcoal/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Science", "technologyIcon", function(x) { return science >= x}, function(x) { return science/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Oil", "oilIcon", function(x) { return oil >= x}, function(x) { return oil/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Rocket Fuel", "rocketFuelIcon", function(x) { return rocketFuel >= x}, function(x) { return rocketFuel/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Lunarite", "lunariteIcon", function(x) { return lunarite >= x}, function(x) { return lunarite/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Methane", "methaneIcon", function(x) { return methane >= x}, function(x) { return methane/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Titanium", "titaniumIcon", function(x) { return titanium >= x}, function(x) { return titanium/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Gold", "goldIcon", function(x) { return gold >= x}, function(x) { return gold/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Silver", "silverIcon", function(x) { return silver >= x}, function(x) { return silver/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Uranium", "uraniumIcon", function(x) { return uranium >= x}, function(x) { return uranium/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Lava", "lavaIcon", function(x) { return lava >= x}, function(x) { return lava/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Hydrogen", "hydrogenIcon", function(x) { return hydrogen >= x}, function(x) { return hydrogen/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Helium", "heliumIcon", function(x) { return helium >= x}, function(x) { return helium/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Ice", "iceIcon", function(x) { return ice >= x}, function(x) { return ice/x }, Game.constants.achievementResourceBrackets);
        this.createAchievements(Game.constants.achievementCategoryResources, "Collect %s Meteorite", "meteoriteIcon", function(x) { return meteorite >= x}, function(x) { return meteorite/x }, Game.constants.achievementResourceBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Charcoal Engines", "EnergyIcon", function(x) { return charcoalEngine >= x}, function(x) { return charcoalEngine/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Solar Panels", "EnergyIcon", function(x) { return solarPanel >= x}, function(x) { return solarPanel/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Methane Power Stations", "EnergyIcon", function(x) { return methaneStation >= x}, function(x) { return methaneStation/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Fusion Reactors", "EnergyIcon", function(x) { return fusionReactor >= x}, function(x) { return fusionReactor/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Nuclear Power Stations", "EnergyIcon", function(x) { return nuclearStation >= x}, function(x) { return nuclearStation/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Magmatic Dynamos", "EnergyIcon", function(x) { return magmatic >= x}, function(x) { return magmatic/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Super-Heaters", "plasmaIcon", function(x) { return heater >= x}, function(x) { return heater/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Plasmatic Pits", "plasmaIcon", function(x) { return plasmatic >= x}, function(x) { return plasmatic/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Woodburners", "charcoalIcon", function(x) { return woodburner >= x}, function(x) { return woodburner/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Furnaces", "charcoalIcon", function(x) { return furnace >= x}, function(x) { return furnace/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Industrial Kilns", "charcoalIcon", function(x) { return kiln >= x}, function(x) { return kiln/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Forest Fryers", "charcoalIcon", function(x) { return fryer >= x}, function(x) { return fryer/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Small Pumps", "oilIcon", function(x) { return pump >= x}, function(x) { return pump/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Pumpjacks", "oilIcon", function(x) { return pumpjack >= x}, function(x) { return pumpjack/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Oil Fields", "oilIcon", function(x) { return oilField >= x}, function(x) { return oilField/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Offshore Rigs", "oilIcon", function(x) { return oilRig >= x}, function(x) { return oilRig/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Miners", "metalIcon", function(x) { return miner >= x}, function(x) { return miner/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Heavy Drills", "metalIcon", function(x) { return heavyDrill >= x}, function(x) { return heavyDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Giga Drills", "metalIcon", function(x) { return gigaDrill >= x}, function(x) { return gigaDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Quantum Drills", "metalIcon", function(x) { return quantumDrill >= x}, function(x) { return quantumDrill/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Gem Miners", "gemIcon", function(x) { return gemMiner >= x}, function(x) { return gemMiner/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Advanced Drills", "gemIcon", function(x) { return advancedDrill >= x}, function(x) { return advancedDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Diamond Encrusted Drills", "gemIcon", function(x) { return diamondDrill >= x}, function(x) { return diamondDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Carbyne Drills", "gemIcon", function(x) { return carbyneDrill >= x}, function(x) { return carbyneDrill/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Woodcutters", "woodIcon", function(x) { return woodcutter >= x}, function(x) { return woodcutter/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Laser Cutters", "woodIcon", function(x) { return laserCutter >= x}, function(x) { return laserCutter/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Mass Deforesters", "woodIcon", function(x) { return deforester >= x}, function(x) { return deforester/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Biomass Infusers", "woodIcon", function(x) { return infuser >= x}, function(x) { return infuser/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Native Moon Workers", "lunariteIcon", function(x) { return moonWorker >= x}, function(x) { return moonWorker/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Low-Gravity Drills", "lunariteIcon", function(x) { return moonDrill >= x}, function(x) { return moonDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Moon Quarries", "lunariteIcon", function(x) { return moonQuarry >= x}, function(x) { return moonQuarry/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Planetary Excavators", "lunariteIcon", function(x) { return planetExcavator >= x}, function(x) { return planetExcavator/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Explorers", "titaniumIcon", function(x) { return explorer >= x}, function(x) { return explorer/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Lunarite Drills", "titaniumIcon", function(x) { return lunariteDrill >= x}, function(x) { return lunariteDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Penta-Drills", "titaniumIcon", function(x) { return pentaDrill >= x}, function(x) { return pentaDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Drills of Titans", "titaniumIcon", function(x) { return titanDrill >= x}, function(x) { return titanDrill/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Empowered Blowtorches", "siliconIcon", function(x) { return blowtorch >= x}, function(x) { return blowtorch/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Seaside Scorchers", "siliconIcon", function(x) { return scorcher >= x}, function(x) { return scorcher/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Beach Annihilators", "siliconIcon", function(x) { return annihilator >= x}, function(x) { return annihilator/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Desert Destroyers", "siliconIcon", function(x) { return desert >= x}, function(x) { return desert/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Vacuum Cleaners", "methaneIcon", function(x) { return vacuum >= x}, function(x) { return vacuum/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Suction Excavators", "methaneIcon", function(x) { return suctionExcavator >= x}, function(x) { return suctionExcavator/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Space Cow Plantations", "methaneIcon", function(x) { return spaceCow >= x}, function(x) { return spaceCow/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Hydrothermal Vents", "methaneIcon", function(x) { return vent >= x}, function(x) { return vent/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Rocket Droids", "goldIcon", function(x) { return droid >= x}, function(x) { return droid/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Asteroid Destroyers", "goldIcon", function(x) { return destroyer >= x}, function(x) { return destroyer/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Death Stars Jr", "goldIcon", function(x) { return deathStar >= x}, function(x) { return deathStar/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Chronal Actuators", "goldIcon", function(x) { return actuator >= x}, function(x) { return actuator/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Recruit %s Scout Ships", "silverIcon", function(x) { return scout >= x}, function(x) { return scout/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Interplanetary Lasers", "silverIcon", function(x) { return spaceLaser >= x}, function(x) { return spaceLaser/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Big Berthas", "silverIcon", function(x) { return bertha >= x}, function(x) { return bertha/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Atomic Cannons", "silverIcon", function(x) { return cannon >= x}, function(x) { return cannon/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Grinders", "uraniumIcon", function(x) { return grinder >= x}, function(x) { return grinder/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Cubic Teleposers", "uraniumIcon", function(x) { return cubic >= x}, function(x) { return cubic/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Uranium Enrichers", "uraniumIcon", function(x) { return enricher >= x}, function(x) { return enricher/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Yellowcake Recyclers", "uraniumIcon", function(x) { return recycler >= x}, function(x) { return recycler/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Heat Resistant Crucibles", "lavaIcon", function(x) { return crucible >= x}, function(x) { return crucible/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Lava Extractors", "lavaIcon", function(x) { return extractor >= x}, function(x) { return extractor/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Igneous Extruders", "lavaIcon", function(x) { return extruder >= x}, function(x) { return extruder/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Volcanic Veluptuators", "lavaIcon", function(x) { return veluptuator >= x}, function(x) { return veluptuator/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Hydrogen Collectors", "hydrogenIcon", function(x) { return collector >= x}, function(x) { return collector/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Gaseous Magnets", "hydrogenIcon", function(x) { return magnet >= x}, function(x) { return magnet/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Electrolytic Cells", "hydrogenIcon", function(x) { return eCell >= x}, function(x) { return eCell/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Hindenburg Excavations", "hydrogenIcon", function(x) { return hindenburg >= x}, function(x) { return hindenburg/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Helium Drones", "heliumIcon", function(x) { return drone >= x}, function(x) { return drone/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Helium Tankers", "heliumIcon", function(x) { return tanker >= x}, function(x) { return tanker/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Morphic Compressors", "heliumIcon", function(x) { return compressor >= x}, function(x) { return compressor/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Gas Giant Skimmers", "heliumIcon", function(x) { return skimmer >= x}, function(x) { return skimmer/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Ice Pickaxes", "iceIcon", function(x) { return icePick >= x}, function(x) { return icePick/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Ice Drills", "iceIcon", function(x) { return iceDrill >= x}, function(x) { return iceDrill/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Ocean Freezers", "iceIcon", function(x) { return freezer >= x}, function(x) { return freezer/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Mr Freezes", "iceIcon", function(x) { return mrFreeze >= x}, function(x) { return mrFreeze/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Meteorite Printers", "meteoriteIcon", function(x) { return printer >= x}, function(x) { return printer/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Meteorite Webs", "meteoriteIcon", function(x) { return web >= x}, function(x) { return web/x }, Game.constants.achievementProducerBrackets);

        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Home Science Kits", "technologyIcon", function(x) { return lab >= x}, function(x) { return lab/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s High School Sciences", "technologyIcon", function(x) { return labT2 >= x}, function(x) { return labT2/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s University Laboratories", "technologyIcon", function(x) { return labT3 >= x}, function(x) { return labT3/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Scientific Observatories", "technologyIcon", function(x) { return labT4 >= x}, function(x) { return labT4/x }, Game.constants.achievementProducerBrackets);
        
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Dyson Rings", "EnergyIcon", function(x) {return ring >= x}, function(x) { return ring/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Dyson Swarms", "EnergyIcon", function(x) {return swarm >= x}, function(x) { return swarm/x }, Game.constants.achievementProducerBrackets);
        
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Chemical Plants", "rocketFuelIcon", function(x) { return chemicalPlant >= x}, function(x) { return chemicalPlant/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Oxidisation Chambers", "rocketFuelIcon", function(x) { return oxidisation >= x}, function(x) { return oxidisation/x }, Game.constants.achievementProducerBrackets);
        this.createAchievements(Game.constants.achievementCategoryProducers, "Build %s Hydrazine Catalysts", "rocketFuelIcon", function(x) { return hydrazine >= x}, function(x) { return hydrazine/x }, Game.constants.achievementProducerBrackets);
        
        console.debug("Loaded " + this.achievementCount + " (" + this.achievementCountIncludingTiers +") Achievements");
    };

    instance.getAchievementTitle = function(data) {
        if(data.unlocked === data.brackets.length - 1) {
            return data.title.replace('%s', Game.settings.format(data.brackets[data.unlocked])) + " (Completed)";
        } else {
            var progress = data.progressEvaluator(data.brackets[data.unlocked+1]);
            return data.title.replace('%s', Game.settings.format(data.brackets[data.unlocked+1])) + ' (' + Math.floor(100 * progress) + '%)';
        }
    };

    instance.update = function(delta) {
        for(var id in this.entries) {
            var data = this.entries[id];

            if(data.unlocked < data.brackets.length - 1 && data.evaluator(data.brackets[data.unlocked + 1])) {
                Game.notifySuccess("Achievement Reached", this.getAchievementTitle(data));

                this.unlock(id, data.unlocked + 1);

                newUnlock('more');
            }
        }
    };

    instance.unlock = function(id, tier) {
        if(this.entries[id].unlocked < tier) {
            this.entries[id].unlocked = tier;
            this.entries[id].displayNeedsUpdate = true;
        }
    };

    instance.createAchievements = function(category, title, icon, evaluator, progressEvaluator, brackets) {
        var data = {
            id: "ach_" + this.nextId++,
            category: category,
            iconPath: Game.constants.iconPath,
            iconName: icon,
            iconExtension: Game.constants.iconExtension,
            title: title,
            evaluator: evaluator,
            progressEvaluator: progressEvaluator,
            unlocked: -1,
            brackets: brackets,
            displayNeedsUpdate: true
        };

        this.achievementCount++;
        this.achievementCountIncludingTiers += brackets.length;
        this.entries[data.id] = data;
    };

    instance.save = function(data) {
        data.achievements = {version: this.dataVersion, entries: {}};
        for(var id in this.entries) {
            if(this.entries[id].unlocked >= 0) {
                data.achievements.entries[id] = this.entries[id].unlocked;
            }
        }
    };

    instance.load = function(data) {
        if(data.achievements) {
            if(data.achievements.version && data.achievements.version === this.dataVersion) {
                for(var id in data.achievements.entries) {
                    if(this.entries[id]){
                        this.unlock(id, data.achievements.entries[id]);
                    }
                }
            }
        }
    };

    return instance;
}());