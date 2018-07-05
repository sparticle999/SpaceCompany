Game.techCategoryData = (function () {

    var instance = {};

    instance.research = {
        title: 'Research',
        category: 'research',
        page: 'tech',
        items: {
            technology: {
                title: 'Technologies',
                id: 'technologies',
                name: 'Technologies',
                desc: 'Research new technologies to unlock more mechanics and advance through the game.',
                category: 'technology',
                page: 'tech',
                order: 1, // 1nd category item of the tech page, research menu header
                unlocked: false
            }
        },
        order: 2, // 2nd category item of the resources page
        unlocked: false
    };

    return instance;

}());

Game.techData = (function () {

    var instance = {};

    var techBase = {
        displayNeedsUpdate: true,

        name: 'Research',
        desc: 'Purchase to unlock something.',
        buttonText: 'Unlock',

        current: 0,
        maxLevel: 1,
        unlocked: false,
        category: 'technology',

        newResources: [],
        newTechs: [],
        newTabs: [],
        tabAlerts: [],

        setId: function(id) {
            this.id = id;
            this.htmlId = "tec_" + id;
            this.htmlIdCost = id + 'Cost';
            this.htmlIdTitle = id + 'Title';
            this.htmlIdButton = id + 'Button';
        },

        getBodyElement: function() {
            return $('#' + this.htmlId)[0];
        },
        getTitleElement: function() {
            return $('#' + this.htmlIdTitle)[0];
        },
        getCostElement: function() {
            return $('#' + this.htmlIdCost)[0];
        },
        getButtonElement: function() {
            return $('#' + this.htmlIdButton)[0];
        },

        apply: function(self) {
            for (i = 0; i < this.newTabs.length; i++) {
                if (tabsUnlocked.indexOf(this.newTabs[i]) === INDEX_NONE) {
                    tabsUnlocked.push(this.newTabs[i]);
                }
            }
            for (i = 0; i < this.newTechs.length; i++) {
                Game.tech.unlockTech(this.newTechs[i]);
            }
            for(var i = 0; i < this.tabAlerts.length; i++){
                if(!this.unlocked)
                    newUnlock(this.tabAlerts[i]);
            }
            if (this.onApply !== null) {
                this.onApply();
            }
        },
        // for any tech specific apply changes
        onApply: null

    };

    // Researches
    instance.unlockStorage = $.extend({}, techBase, {
        name: 'Storage Upgrades',
        desc: 'This will allow you to build storage upgrades to increase the maximum on the amount of resource you can have at once.',
        buttonText: 'Unlock Storage',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 5
        },
        newTechs: ['unlockOil'],
        tabAlerts: ['resources'],
        onApply: function(){
            for(var id in Game.resources.entries){
                var upgrade = $('#' + id + 'StorageUpgrade')[0];
                if(upgrade){
                    upgrade.className = "";
                }
            }
        }
    });
    
    instance.unlockBasicEnergy = $.extend({}, techBase, {
        name: 'Basic Energy Production',
        desc: 'You will be able to produce power from steam engines using Charcoal made from wood in a furnace.',
        buttonText: 'Unlock Basic Energy Production',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 20
        },
        newTechs: ['unlockSolar', 'unlockMachines', 'upgradeEngineTech'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.resources.unlock("energy");
            Game.resources.unlock("charcoal");
            Game.buildings.unlock("energyT1");
            Game.buildings.unlock("charcoalT1")
        }
    });

    instance.unlockOil = $.extend({}, techBase, {
        name: 'Oil Processing',
        desc: 'Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.',
        buttonText: 'Unlock Oil',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 30
        },
        tabAlerts: ['resources'],
        onApply: function(){
            Game.resources.unlock("oil");
            Game.buildings.unlock("oilT1");
        }
    });

    instance.unlockSolar = $.extend({}, techBase, {
        name: 'Solar Panels',
        desc: 'Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.',
        buttonText: 'Unlock Solar Panels',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 50
        },
        newTechs: ['upgradeSolarTech'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlock("energyT2");
        }
    });

    instance.unlockMachines = $.extend({}, techBase, {
        name: 'Resource Machines',
        desc: 'Resource Machines produce more resources than simple methods but require a constant supply of power to work.',
        buttonText: 'Unlock Resource Machines',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100
        },
        newTechs: ['unlockSolarSystem', 'upgradeResourceTech', 'unlockDestruction'],
        tabAlerts: ['resources'],
        onApply: function(){
            for(var id in Game.resources.entries){
                if(id != "energy" && id != "plasma" && id != "science" && id != "rocketFuel"){
                    Game.buildings.unlock(id + "T2");
                }
            }
        }
    });

    instance.unlockDestruction = $.extend({}, techBase, {
        name: 'Destruction of Machines',
        desc: 'This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don\'t have enough energy to support your machines.',
        buttonText: 'Unlock Destruction',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        tabAlerts: ['resources'],
        onApply: function(){
            console.log("rocketFuel")
            for(var id in Game.buildings.entries){
                if(id.indexOf("rocketFuel") == -1){
                    var data = Game.buildings.entries[id];
                    //$('#' + data.id + "_destroy")[0].className = "";
                }
            }
        }
    });

    instance.unlockSolarSystem = $.extend({}, techBase, {
        name: 'Space',
        desc: 'Unlocking space-travel allows for launching of rockets and opens a whole new field of research.',
        buttonText: 'Unlock Space Travel',
        notifyTitle: 'new Tab!',
        notifyText: 'You\'ve unlocked the Solar System Tab!',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        newTechs: ['unlockLabT2', 'unlockRocketFuelT2'],
        tabAlerts: ['solarSystem'],
        onApply: function(){
            $('#solarTab')[0].className = "";
            Game.solar.tabUnlocked = true;
            Game.buildings.entries.rocketFuelT1.unlocked = true;
        }
    });

    instance.unlockRocketFuelT2 = $.extend({}, techBase, {
        name: 'Oxidisation',
        desc: 'Oxidisation is a more efficient process of creating Rocket Fuel.',
        buttonText: 'Unlock Oxidisation',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 450000
        },
        newResources: ['rocketFuelT2'],
        newTechs: ['unlockRocketFuelT3'],
        tabAlerts: ['solarSystem'],
        onApply: function(){
            Game.buildings.entries.rocketFuelT2.unlocked = true;
        }
    });

    instance.unlockRocketFuelT3 = $.extend({}, techBase, {
        name: 'Hydrazine',
        desc: 'Hydrazine is a compound created by Methane that increases the speed at which rocket fuel can be produced in a Hydrazine Catalyst Machine.',
        buttonText: 'Unlock Hydrazine',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3200000
        },
        newResources: ['rocketFuelT3'],
        tabAlerts: ['solarSystem'],
        onApply: function(){
            Game.buildings.entries.rocketFuelT3.unlocked = true;
        }
    });

    instance.unlockLabT2 = $.extend({}, techBase, {
        name: 'Tier 2 Science',
        desc: 'Researching this will allow you to increase your science production drastically.',
        buttonText: 'Unlock Tier 2 Science',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        newTechs: ['unlockLabT3'],
        tabAlerts: ['research'],
        onApply: function(){
            Game.buildings.entries.scienceT2.unlocked = true;
        }
    });

    instance.unlockLabT3 = $.extend({}, techBase, {
        name: 'Tier 3 Science',
        desc: 'Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.',
        buttonText: 'Unlock Tier 3 Science',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3000
        },
        newTechs: ['unlockLabT4'],
        tabAlerts: ['research'],
        onApply: function(){
            Game.buildings.entries.scienceT3.unlocked = true;
        }
    });

    instance.unlockLabT4 = $.extend({}, techBase, {
        name: 'Tier 4 Science',
        desc: 'Researching this will allow you to access the fourth tier of science production, creating 10 times as much science as the previous tier.',
        buttonText: 'Unlock Tier 4 Science',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 50000000
        },
        tabAlerts: ['research'],
        onApply: function(){
            Game.buildings.entries.scienceT4.unlocked = true;
        }

    });

    instance.unlockBatteries = $.extend({}, techBase, {
        name: 'Tier 1 Batteries',
        desc: 'Tier 1 Batteries improve the amount of energy you can store at once.',
        buttonText: 'Unlock Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 15000
        },
        newTechs: ['unlockBatteriesT2'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlockStorage("energyT1");
            console.log("energyStorageBox, in energy storage displayNeedsUpdate")
        }
    });

    instance.unlockBatteriesT2 = $.extend({}, techBase, {
        name: 'Tier 2 Batteries',
        desc: 'Tier 2 Batteries improve the amount of energy you can store at once',
        buttonText: 'Unlock T2 Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 300000
        },
        newTechs: ['unlockBatteriesT3'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlockStorage("energyT2");
        }
    });

    instance.unlockBatteriesT3 = $.extend({}, techBase, {
        name: 'Tier 3 Batteries',
        desc: 'Tier 3 Batteries improve the amount of energy you can store at once',
        buttonText: 'Unlock T3 Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3000000
        },
        newTechs: ['unlockBatteriesT4'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlockStorage("energyT3");
        }
    });

    instance.unlockBatteriesT4 = $.extend({}, techBase, {
        name: 'Tier 4 Batteries',
        desc: 'Tier 4 Batteries improve the amount of energy you can store at once',
        buttonText: 'Unlock T4 Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 30000000
        },
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlockStorage("energyT4");
        }
    });

    instance.unlockPlasma = $.extend({}, techBase, {
        name: 'Plasma Tier 1 Technology',
        desc: 'This allows you to turn your energy and hydrogen into Plasma',
        buttonText: 'Unlock Plasma',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 40000
        },
        newTechs: ['unlockPlasmaTier2'],
        tabAlerts: ['resources'],
        onApply: function() {
            Game.resources.unlock("plasma");
            Game.buildings.unlock("plasmaT1")
        }
    });

    instance.unlockPlasmaTier2 = $.extend({}, techBase, {
        name: 'Plasma Tier 2 Technology',
        desc: 'This research unlocks the second tier of Plasma production, the Plasmatic Pit',
        buttonText: 'Unlock Plasma Tier 2',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 60000
        },
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlock("plasmaT2")
        }
    });

    instance.unlockPSU = $.extend({}, techBase, {
        name: 'Plasma Storage Units',
        desc: 'PSUs increase the limit on plasma you can store at once.',
        buttonText: 'Unlock PSUs',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 9500000
        },
        newTechs: ['unlockPSUT2'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlockStorage("plasmaT1");
            console.log("plasmaStorageBox")
        }
    });

    instance.unlockPSUT2 = $.extend({}, techBase, {
        name: 'Tier 2 Plasma Storage Units',
        desc: 'Tier 2 PSUs are more efficient at storing plasma but they are significantly larger and require more resources to make.',
        buttonText: 'Unlock T2 PSUs',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 37000000
        },
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlockStorage("plasmaT2");
        }
    });

    instance.unlockEmc = $.extend({}, techBase, {
        name: 'Energy-Mass Conversion',
        desc: 'This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.',
        buttonText: 'Unlock EMC',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 60000
        },
        newResources: ['emcPage'],
        newTechs: ['unlockMeteorite'],
        tabAlerts: ['solCenter'],
        onApply: function(){
            console.log("EMC")
        }
    });

    instance.unlockMeteorite = $.extend({}, techBase, {
        name: 'Meteorite',
        desc: 'Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.',
        buttonText: 'Unlock Meteorite',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['meteoriteNav', 'meteoriteEMC'],
        newTechs: ['unlockMeteoriteTier1'],
        tabAlerts: ['resources', 'wonder'],
        onApply: function(){
            Game.resources.unlock("meteorite");
            console.log("meteorietEMC")
        }
    });

    instance.unlockMeteoriteTier1 = $.extend({}, techBase, {
        name: 'Meteorite Tier 1',
        desc: 'Research an automated way to gather Meteorite so that you don\'t have to worry about losing out when you\'re not around.',
        buttonText: 'Unlock Meteorite Tier 1',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 75000
        },
        newTechs: ['unlockMeteoriteTier2'],
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlock("meteoriteT1")
        }
    });

    instance.unlockMeteoriteTier2 = $.extend({}, techBase, {
        name: 'Meteorite Tier 2',
        desc: 'Research a more efficient method of getting meteorite than creating it artificially.',
        buttonText: 'Unlock Meteorite Tier 2',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 75000
        },
        tabAlerts: ['resources'],
        onApply: function(){
            Game.buildings.unlock("meteoriteT2")
        }
    });

    instance.unlockDyson = $.extend({}, techBase, {
        name: 'Dyson Ring',
        desc: 'Dyson Rings produce huge amounts of energy by surrounding the sun in solar stations.',
        buttonText: 'Unlock Dyson Rings',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['dysonPage'],
        newTechs: ['unlockDysonSphere'],
        tabAlerts: ['solCenter'],
        onApply: function(){
            console.log("unlockDyson")
        }
    });

    instance.unlockDysonSphere = $.extend({}, techBase, {
        name: 'Dyson Swarms and Spheres',
        desc: 'The Dyson Swarms encapsulate the sun in rings of solar stations, whereas Spheres completely encompasses it to allows you to harness enough energy to go interstellar.',
        buttonText: 'Unlock Dyson Swarms/Spheres',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500000
        },
        newResources: ['dysonSphere'],
        tabAlerts: ['solCenter'],
        onApply: function(){
            console.log("unlockDyson")
        }
    });

    //Upgrades

    instance.upgradeResourceTech = $.extend({}, techBase, {
        name: 'Upgrade Resource Technology',
        desc: 'Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.',
        buttonText: 'Upgrade Resource Tech',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 300
        },
        tabAlerts: ['resources'],
        onApply: function() {
            var data = Game.buildings.entries;
            var resourceList = ["oil", "metal", "gem", "charcoal", "wood"];
            for(var i = 0; i < resourceList.length; i++){
                data[resourceList[i] + "T2"].resourcePerSecond[resourceList[i]] *= 2;
            }
            data["charcoalT2"].resourcePerSecond.wood *= 2;
        }
    });

    instance.upgradeEngineTech = $.extend({}, techBase, {
        name: 'Upgrade Engine Technology',
        desc: 'Upgrading Engine Technology will make Charcoal engines produce 4 Energy per second instead of 2.',
        buttonText: 'Upgrade Charcoal Engines',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 1000
        },
        tabAlerts: ['resources'],
        onApply: function() {
            Game.buildings.entries.energyT1.resourcePerSecond.energy *= 2;
        }
    });

    instance.upgradeSolarTech = $.extend({}, techBase, {
        name: 'Upgrade Solar Technology',
        desc: 'Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.',
        buttonText: 'Upgrade Solar Panels',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 5000
        },
        newTechs: ['unlockBatteries'],
        tabAlerts: ['resources'],
        onApply: function() {
            Game.buildings.entries.energyT2.resourcePerSecond.energy *= 2;
        }
    });

    instance.resourceEfficiencyResearch = $.extend({}, techBase, {
        name: 'Resource Efficiency',
        desc: 'Resource Efficiency increases the income of resources by 1%/s per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    });

    instance.scienceEfficiencyResearch = $.extend({}, techBase, {
        name: 'Science Efficiency',
        desc: 'Science Efficiency increases the science production by 2% per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: {
            'science': 10000000
        }
    });

    instance.energyEfficiencyResearch = $.extend({}, techBase, {
        name: 'Energy Efficiency',
        desc: 'Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 25,
        cost: {
            'science': 10000000
        }
    });

    instance.batteryEfficiencyResearch = $.extend({}, techBase, {
        name: 'Battery Efficiency',
        desc: 'Battery Efficiency improves the storage capabilities of your batteries by 1% per upgrade.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 200,
        cost: {
            'science': 100000000
        }
    });

    return instance;
}());
