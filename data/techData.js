Game.techData = (function () {

    var instance = {};

    // Storage Upgrades
    var baseUpgradeData = {
        name: 'Storage Upgrade:',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.PERCENT,
        current: 0,
        maxLevel: -1,
        apply: function (self, x) {
            var capacityAddition = x.baseCapacity;
            for (var i = 0; i < self.current; i++) {
                capacityAddition *= 2;
            }
            x.capacity += capacityAddition;
            x.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        },
        remove: function (self, x) {
            var capacityAddition = x.baseCapacity;
            for (var i = 0; i < self.current; i++) {
                capacityAddition *= 2;
            }
            x.capacity -= capacityAddition;
            x.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        }
    };

    /*********************
     * Energy Resources  *
     *********************/

    instance.storageUpgradePlasma = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Plasma storage size',
        resource: 'plasma',
        cost: {
            'plasma': .95
        }
    });

    instance.storageUpgradeUranium = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Uranium storage size',
        resource: 'uranium',
        cost: {
            'uranium': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeLava = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Lava storage size',
        resource: 'lava',
        cost: {
            'lava': .95,
            'lunarite': .4
        }
    });

    /********************
     * Earth Resources  *
     ********************/

    instance.storageUpgradeOil = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Oil storage size',
        resource: 'oil',
        cost: {
            'oil': .95,
            'metal': .4
        }
    });

    instance.storageUpgradeMetal = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Metal storage size',
        resource: 'metal',
        cost: {
            'metal': .95
        }
    });

    instance.storageUpgradeGem = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Gem storage size',
        resource: 'gem',
        cost: {
            'gem': .95,
            'metal': .4
        }
    });

    instance.storageUpgradeCharcoal = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Charcoal storage size',
        resource: 'charcoal',
        cost: {
            'charcoal': .95,
            'metal': .4
        }
    });

    instance.storageUpgradeWood = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Wood storage size',
        resource: 'wood',
        cost: {
            'wood': .95,
            'metal': .4
        }
    });

    instance.storageUpgradeSilicon = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Silicon storage size',
        resource: 'silicon',
        cost: {
            'silicon': .95,
            'lunarite': .4
        }
    });

    /******************************
     * Inner Planetary Resources  *
     ******************************/

    instance.storageUpgradeLunarite = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Lunarite storage size',
        resource: 'lunarite',
        cost: {
            'lunarite': .95,
            'metal': .4
        }
    });

    instance.storageUpgradeMethane = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Methane storage size',
        resource: 'methane',
        cost: {
            'methane': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeTitanium = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Titanium storage size',
        resource: 'titanium',
        cost: {
            'titanium': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeGold = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Gold storage size',
        resource: 'gold',
        cost: {
            'gold': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeSilver = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Silver storage size',
        resource: 'silver',
        cost: {
            'silver': .95,
            'lunarite': .4
        }
    });

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.storageUpgradeHydrogen = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Hydrogen storage size',
        resource: 'hydrogen',
        cost: {
            'hydrogen': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeHelium = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Helium storage size',
        resource: 'helium',
        cost: {
            'helium': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeIce = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Ice storage size',
        resource: 'ice',
        cost: {
            'ice': .95,
            'lunarite': .4
        }
    });

    instance.storageUpgradeMeteorite = $.extend({}, baseUpgradeData, {
        desc: 'Doubles your Meteorite storage size',
        resource: 'meteorite',
        cost: {
            'meteorite': .95,
            'lunarite': 4
        }
    });

    // Other Researches
    instance.unlockBasicEnergy = {
        name: 'Basic Energy Production',
        desc: 'You will be able to produce power from steam engines using Charcoal made from wood in a furnace.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 20
        }
    };

    instance.unlockOilProcessing = {
        name: 'Oil Processing',
        desc: 'Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 30
        }
    };

    instance.unlockSolar = {
        name: 'Solar Panels',
        desc: 'Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 50
        }
    };

    instance.unlockResourceMachines = {
        name: 'Resource Machines',
        desc: 'Resource Machines produce more resources than simple methods but require a constant supply of power to work.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 100
        }
    };

    instance.unlockDestruction = {
        name: 'Destruction of Machines',
        desc: 'This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don\'t have enough energy to support your machines.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 500
        }
    };

    instance.unlockSolarSystem = {
        name: 'Space',
        desc: 'Unlocking space-travel allows for launching of rockets and opens a whole new field of research.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 500
        }
    };

    instance.unlockLabT2 = {
        name: 'Tier 2 Science',
        desc: 'Researching this will allow you to increase your science production drastically.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 500
        }
    };

    instance.unlockLapT3 = {
        name: 'Tier 3 SCience',
        desc: 'Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 3000
        }
    };

    instance.unlockBatteryT1 = {
        name: 'Tier 1 Batteries',
        desc: 'Tier 1 Batteries improve the amount of energy you can store at once.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 15000
        }
    };

    instance.unlockBatteryT2 = {
        name: 'Tier 2 Batteries',
        desc: 'Tier 2 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 300000
        }
    };

    instance.unlockBatteryT3 = {
        name: 'Tier 3 Batteries',
        desc: 'Tier 3 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 3000000
        }
    };

	instance.unlockBatteryT4 = {
        name: 'Tier 4 Batteries',
        desc: 'Tier 4 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 30000000
        }
    };

    instance.unlockPlasmaT1 = {
        name: 'Plasma Tier 1 Technology',
        desc: 'This allows you to turn your energy and hydrogen into Plasma',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 40000
        }
    };

    instance.unlockPlasmaT2 = {
        name: 'Plasma Tier 2 Technology',
        desc: 'This research unlocks the second tier of Plasma production, the Plasmatic Pit',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 60000
        }
    };

    instance.unlockEmc = {
        name: 'Energy-Mass Conversion',
        desc: 'This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 60000
        }
    };

    instance.unlockMeteoriteT1 = {
        name: 'Meteorite',
        desc: 'Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    };

    instance.unlockMeteoriteT2 = {
        name: 'Meteorite Tier 2',
        desc: 'Research an automated way to gather Meteorite so that you don\'t have to worry about losing out when you\'re not around.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 75000
        }
    };

    instance.unlockMeteoriteT3 = {
        name: 'Meteorite Tier 3',
        desc: 'Research a more efficient method of getting meteorite than creating it artificialy.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 75000
        }
    };

    instance.unlockDysonSwarm = {
        name: 'Dyson Swarm',
        desc: 'Dysons Swarms produce huge amounts of energy by surrounding the sun in solar stations.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    };

    instance.unlockDysonSphere = {
        name: 'Dyson Sphere',
        desc: 'The Dyson Sphere encompasses the sun and allows you to harness enough energy to go interstellar.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 500000
        }
    };

    //Upgrades

    instance.upgradeResourceTech = {
        name: 'Upgrade Resource Technology',
        desc: 'Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 300
        }
    };

    instance.upgradeEngineTech = {
        name: 'Upgrade Engine Technology',
        desc: 'Upgrading Engine Technology will make Charcoal engines produce 4 Energy per second instead of 2.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 1000
        }
    };

    instance.upgradeSolarTech = {
        name: 'Upgrade Solar Technology',
        desc: 'Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 5000
        }
    };

    instance.efficiencyResearch = {
        name: 'Research Resource Efficiency',
        desc: 'Resource Efficiency increases the income of resources by 1%/s per purchase.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    };

    instance.scienceEfficiencyResearch = {
        name: 'Research Science Efficiency',
        desc: 'Science Efficiency increases the science production by 2% per purchase.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        cost: {
            'science': 10000000
        }
    };

    instance.energyEfficiencyResearch = {
        name: 'Research Energy Efficiency',
        desc: 'Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 25,
        cost: {
            'science': 10000000
        }
    };

    instance.batteryEfficiencyResearch = {
        name: 'Research Battery Efficiency',
        desc: 'Battery Efficiency improves the storage capabilities of your batteries by 1% per upgrade.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 200,
        cost: {
            'science': 100000000
        }
    };

    return instance;
}());
