Game.techCategoryData = (function () {

    var instance = {};

    instance.research = {
        title: 'Research',
        category: 'research',
        htmlId: 'research',
        page: 'tech',
        items: {
            technology: {
                title: 'Technologies',
                id: 'technologies',
                icon: 'technologiesIcon',
                name: 'Technologies',
                htmlId: 'technologies',
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
        htmlId: "technology",

        // for any tech specific apply changes
        onApply: function() {},

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
            Templates.uiFunctions.showClass('storageUpgrade');
        }
    });
    
    instance.unlockBasicEnergy = $.extend({}, techBase, {
        name: 'Basic Energy Production',
        desc: 'You will be able to produce power from steam engines using Carbon made from wood in a furnace.',
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
            Game.resources.unlock("carbon");
            Game.buildings.unlock("energyT1");
            Game.buildings.unlock("carbonT1")
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
            var blacklist = ['energy', 'plasma', 'science', 'rocketFuel', 'rocket', 'antimatter'];
            for(var id in Game.resources.entries){if (!contains(blacklist, id)) { Game.buildings.unlock(id + "T2", false); }}
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
            Templates.uiFunctions.showClass('destroyContainer');
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
        tabAlerts: ['solar'],
        onApply: function(){
            Game.solar.tabUnlocked = true;
            Game.buildings.unlock('rocketT1');
            Game.buildings.unlock('rocketFuelT1');
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
        newTechs: ['unlockRocketFuelT3'],
        tabAlerts: ['solar'],
        onApply: function(){
            Game.buildings.unlock('rocketFuelT2');
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
        tabAlerts: ['solar'],
        onApply: function(){
            Game.buildings.unlock('rocketFuelT3');
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
        tabAlerts: ['tech'],
        onApply: function(){
            Game.buildings.unlock('scienceT2');
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
        tabAlerts: ['tech'],
        onApply: function(){
            Game.buildings.unlock('scienceT3');
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
        tabAlerts: ['tech'],
        onApply: function(){
            Game.buildings.unlock('scienceT4');
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
            Game.buildings.unlockStorage("energyStorageT1");
            Templates.uiFunctions.show("res_energyCapacityHidden")
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
            Game.buildings.unlockStorage("energyStorageT2");
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
            Game.buildings.unlockStorage("energyStorageT3");
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
            Game.buildings.unlockStorage("energyStorageT4");
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
        newTechs: ['unlockPlasmaTier2', 'unlockPSU'],
        tabAlerts: ['resources'],
        onApply: function() {
            Game.resources.unlock("plasma");
            Game.statistics.add('resourcesUnlocked');
            Game.buildings.unlock("plasmaT1");
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
            Game.buildings.unlockStorage("plasmaStorageT1");
            Templates.uiFunctions.show("res_plasmaCapacityHidden")
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
            Game.buildings.unlockStorage("plasmaStorageT2");
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
        newTechs: ['unlockMeteorite'],
        tabAlerts: ['solCenter'],
        onApply: function(){
            Templates.uiFunctions.unlock("emcConv");
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
        newTechs: ['unlockMeteoriteTier1'],
        tabAlerts: ['resources', 'wonder'],
        onApply: function(){
            Game.resources.unlock("meteorite");
            Game.statistics.add('resourcesUnlocked');
            
        }
    });
    console.error("meteorite_EMC");

    instance.unlockMeteoriteTier1 = $.extend({}, techBase, {
        name: 'Meteorite Tier 1',
        desc: 'Research an automated way to gather Meteorite so that you don\'t have to worry about losing out when you\'re not around.',
        buttonText: 'Unlock Meteorite Tier 1',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 75000
        },
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
            'science': 100000
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
        newTechs: ['unlockDysonSphere'],
        tabAlerts: ['solCenter'],
        onApply: function(){
            Templates.uiFunctions.unlock("segment");
            Templates.uiFunctions.unlock("ring");
            Templates.uiFunctions.unlock("swarm");
            Templates.uiFunctions.unlock("sphere");
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
        tabAlerts: ['solCenter'],
        onApply: function(){
            Templates.uiFunctions.unlock("nanoswarm");
        }
    });

    instance.unlockNanoswarm = $.extend({}, techBase, {
        name: 'Nanoswarms',
        desc: 'The nanoswarm is an interesting creation, capable of copying other machines\' forms and taking up their role in resource production. Each boosts a single resource but can change at the flick of a button.',
        buttonText: 'Unlock Nanoswarms',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 1.5e7,
        },
        tabAlerts: ['solCenter'],
        onApply: function(){
            Templates.uiFunctions.unlock("nanoswarm");
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
            var resourceList = ["oil", "metal", "gem", "carbon", "wood"];
            for(var i = 0; i < resourceList.length; i++){
                data[resourceList[i] + "T2"].resourcePerSecond[resourceList[i]] *= 2;
            }
            data["carbonT2"].resourcePerSecond.wood *= 2;
        }
    });

    instance.upgradeEngineTech = $.extend({}, techBase, {
        name: 'Upgrade Engine Technology',
        desc: 'Upgrading Engine Technology will make Carbon engines produce 4 Energy per second instead of 2.',
        buttonText: 'Upgrade Carbon Engines',
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
        buttonText: 'Upgrade Resource Efficiency',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.EXP,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    });

    instance.scienceEfficiencyResearch = $.extend({}, techBase, {
        name: 'Science Efficiency',
        desc: 'Science Efficiency increases the science production by 2% per purchase.',
        buttonText: 'Upgrade Science Efficiency',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.EXP,
        maxLevel: -1,
        cost: {
            'science': 10000000
        }
    });

    instance.energyEfficiencyResearch = $.extend({}, techBase, {
        name: 'Energy Efficiency',
        desc: 'Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.',
        buttonText: 'Upgrade Energy Efficiency',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.EXP,
        maxLevel: 25,
        cost: {
            'science': 10000000
        }
    });

    instance.batteryEfficiencyResearch = $.extend({}, techBase, {
        name: 'Battery Efficiency',
        desc: 'Battery Efficiency improves the storage capabilities of your batteries by 1% per upgrade.',
        buttonText: 'Upgrade Battery Efficiency',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.EXP,
        maxLevel: 200,
        cost: {
            'science': 100000000
        },
        onApply: function() {
            Game.resources.refreshStorage("energy");
            Game.resources.refreshStorage("plasma");
        }
    });

    return instance;
}());
