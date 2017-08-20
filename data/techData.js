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
        resource: undefined,
        apply: function (self) {
            if (typeof self.resource === 'undefined') {
                return;
            }
            var res = Game.resources.getResourceData(self.resource);
            var capacityAddition = res.baseCapacity;
            for (var i = 0; i < self.current; i++) {
                capacityAddition *= 2;
            }
            res.capacity += capacityAddition;
            res.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        },
        remove: function (self) {
            if (typeof self.resource === 'undefined') {
                return;
            }
            var res = Game.resources.getResourceData(self.resource);
            var capacityAddition = res.baseCapacity;
            for (var i = 0; i < self.current; i++) {
                capacityAddition *= 2;
            }
            res.capacity -= capacityAddition;
            res.displayNeedsUpdate = true;
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

    instance.unlockStorage = {
        name: 'Storage Upgrades',
        desc: 'This will allow you to build storage upgrades to increase the maximum on the amount of resource you can have at once.',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 5
        },
        apply: function(self) {
            Game.tech.unlockTech('unlockOil');
        }
    };

    // Other Researches
    instance.unlockBasicEnergy = {
        name: 'Basic Energy Production',
        desc: 'You will be able to produce power from steam engines using Charcoal made from wood in a furnace.',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 20
        },
        apply: function(self) {
            var navIds = ['energyNav', 'charcoalNav'];
            for (var i = 0; i < navIds.length; i++) {
                if (resourcesUnlocked.indexOf(navIds[i]) === INDEX_NONE) {
                    resourcesUnlocked.push(navIds[i]);
                }
            }
            var techIds = ['unlockSolar', 'unlockMachines', 'upgradeEngineTech'];
            for (i = 0; i < techIds.length; i++) {
                Game.tech.unlockTech(techIds[i]);
            }
        }
    };

    instance.unlockOil = {
        name: 'Oil Processing',
        desc: 'Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 30
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('oilNav') === INDEX_NONE) {
                resourcesUnlocked.push("oilNav");
            }
        }
    };

    instance.unlockSolar = {
        name: 'Solar Panels',
        desc: 'Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 50
        },
        apply: function(self) {
            Game.tech.unlockTech('upgradeSolarTech');
        }
    };

    instance.unlockMachines = {
        name: 'Resource Machines',
        desc: 'Resource Machines produce more resources than simple methods but require a constant supply of power to work.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 100
        },
        apply: function(self) {
            var techIds = ['unlockSolarSystem', 'upgradeResourceTech', 'unlockDestruction'];
            for (var i = 0; i < techIds.length; i++) {
                Game.tech.unlockTech(techIds[i]);
            }
        }
    };

    instance.unlockDestruction = {
        name: 'Destruction of Machines',
        desc: 'This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don\'t have enough energy to support your machines.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 500
        },
        apply: function(self) {

        }
    };

    instance.unlockSolarSystem = {
        name: 'Space',
        desc: 'Unlocking space-travel allows for launching of rockets and opens a whole new field of research.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 500
        },
        apply: function(self) {
            if (tabsUnlocked.indexOf('solarSystemTab') === INDEX_NONE) {
                tabsUnlocked.push('solarSystemTab');
            }
            var techIds = ['unlockLabT2', 'unlockRocketFuelT2'];
            for (var i = 0; i < techIds.length; i++) {
                Game.tech.unlockTech(techIds[i]);
            }
        }
    };

    instance.unlockRocketFuelT2 = {
        name: 'Oxidisation',
        desc: 'Oxidisation is a more efficient process of creating Rocket Fuel.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 450000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('rocketFuelT2') === INDEX_NONE) {
                resourcesUnlocked.push('rocketFuelT2');
            }
            Game.tech.unlockTech('unlockRocketFuelT3');
        }
    };

    instance.unlockRocketFuelT3 = {
        name: 'Hydrazine',
        desc: 'Hydrazine is a compound created by Methane that increases the speed at which rocket fuel can be produced in a Hydrazine Catalyst Machine.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 3200000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('rocketFuelT3') === INDEX_NONE) {
                resourcesUnlocked.push('rocketFuelT3');
            }
        }
    };

    instance.unlockLabT2 = {
        name: 'Tier 2 Science',
        desc: 'Researching this will allow you to increase your science production drastically.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 500
        },
        apply: function(self) {
            Game.tech.unlockTech('unlockLabT3');
        }
    };

    instance.unlockLabT3 = {
        name: 'Tier 3 Science',
        desc: 'Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 3000
        },
        apply: function(self) {
            Game.tech.unlockTech('unlockLabT4');
        }
    };

    instance.unlockLabT4 = {
        name: 'Tier 4 Science',
        desc: 'Researching this will allow you to access the fourth tier of science production, creating 10 times as much science as the previous tier.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 50000000
        },
        apply: function(self) {

        }
    };

    instance.unlockBatteries = {
        name: 'Tier 1 Batteries',
        desc: 'Tier 1 Batteries improve the amount of energy you can store at once.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 15000
        },
        apply:  function(self) {
            var resources = ['batteries', 'energyStorageBox'];
            for (var i = 0; i < resources.length; i++) {
                if (resourcesUnlocked.indexOf(resources[i]) === INDEX_NONE) {
                    resourcesUnlocked.push(resources[i]);
                }
            }
            Game.tech.unlockTech('unlockBatteriesT2');
        }
    };

    instance.unlockBatteriesT2 = {
        name: 'Tier 2 Batteries',
        desc: 'Tier 2 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 300000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('batteriesT2') === INDEX_NONE) {
                resourcesUnlocked.push('batteriesT2');
            }
            Game.tech.unlockTech('unlockBatteriesT3');
        }
    };

    instance.unlockBatteriesT3 = {
        name: 'Tier 3 Batteries',
        desc: 'Tier 3 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 3000000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('batteriesT3') === INDEX_NONE) {
                resourcesUnlocked.push('batteriesT3');
            }
            Game.tech.unlockTech('unlockBatteriesT4');
        }
    };

    instance.unlockBatteriesT4 = {
        name: 'Tier 4 Batteries',
        desc: 'Tier 4 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 30000000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('batteriesT4') === INDEX_NONE) {
                resourcesUnlocked.push('batteriesT4');
            }
        }
    };

    instance.unlockPlasma = {
        name: 'Plasma Tier 1 Technology',
        desc: 'This allows you to turn your energy and hydrogen into Plasma',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 40000
        },
        apply: function(self) {
            if (noBorder.indexOf('energyNav') === INDEX_NONE) {
                noBorder.push('energyNav');
            }
            if (resourcesUnlocked.indexOf('plasmaNav') === INDEX_NONE) {
                resourcesUnlocked.push('plasmaNav');
            }
            Game.tech.unlockTech('unlockPlasmaTier2');
        }
    };

    instance.unlockPlasmaTier2 = {
        name: 'Plasma Tier 2 Technology',
        desc: 'This research unlocks the second tier of Plasma production, the Plasmatic Pit',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 60000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('plasmaTier2') === INDEX_NONE) {
                resourcesUnlocked.push('plasmaTier2');
            }
        }
    };

    instance.unlockPSU = {
        name: 'Plasma Storage Units',
        desc: 'PSUs increase the limit on plasma you can store at once.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 9500000
        },
        apply: function(self) {
            var resources = ['plasmaStorageUnits', 'plasmaStorageBox'];
            for (var i = 0; i < resources.length; i++) {
                if (resourcesUnlocked.indexOf(resources[i]) === INDEX_NONE) {
                    resourcesUnlocked.push(resources[i]);
                }
            }
            Game.tech.unlockTech('unlockPSUT2');
        }
    };

    instance.unlockPSUT2 = {
        name: 'Tier 2 Plasma Storage Units',
        desc: 'Tier 2 PSUs are more efficient at storing plasma but they are significantly larger and require more resources to make.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 37000000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('plasmaStorageUnitsT2') === INDEX_NONE) {
                resourcesUnlocked.push('plasmaStorageUnitsT2');
            }
        }
    };

    instance.unlockEmc = {
        name: 'Energy-Mass Conversion',
        desc: 'This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 60000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('emcPage') === INDEX_NONE) {
                resourcesUnlocked.push('emcPage');
            }
            Game.tech.unlockTech('unlockMeteorite');
        }
    };

    instance.unlockMeteorite = {
        name: 'Meteorite',
        desc: 'Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 100000
        },
        apply: function(self) {
            var resources = ['meteoriteNav', 'meteoriteEMC'];
            for (var i = 0; i < resources.length; i++) {
                if (resourcesUnlocked.indexOf(resources[i]) === INDEX_NONE) {
                    resourcesUnlocked.push(resources[i]);
                }
            }
            Game.tech.unlockTech('unlockMeteoriteTier1');
        }
    };

    instance.unlockMeteoriteTier1 = {
        name: 'Meteorite Tier 1',
        desc: 'Research an automated way to gather Meteorite so that you don\'t have to worry about losing out when you\'re not around.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 75000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('meteoriteTier1') === INDEX_NONE) {
                resourcesUnlocked.push('meteoriteTier1');
            }
            Game.tech.unlockTech('unlockMeteoriteTier2');
        }
    };

    instance.unlockMeteoriteTier2 = {
        name: 'Meteorite Tier 2',
        desc: 'Research a more efficient method of getting meteorite than creating it artificially.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 75000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('meteoriteTier2') === INDEX_NONE) {
                resourcesUnlocked.push('meteoriteTier2');
            }
        }
    };

    instance.unlockDyson = {
        name: 'Dyson Ring',
        desc: 'Dyson Rings produce huge amounts of energy by surrounding the sun in solar stations.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 100000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('dysonPage') === INDEX_NONE) {
                resourcesUnlocked.push('dysonPage');
            }
            Game.tech.unlockTech('unlockDysonSphere');
        }
    };

    instance.unlockDysonSphere = {
        name: 'Dyson Sphere',
        desc: 'The Dyson Sphere encompasses the sun and allows you to harness enough energy to go interstellar.',
        type: TECH_TYPE.UNLOCK,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 500000
        },
        apply: function(self) {
            if (resourcesUnlocked.indexOf('dysonSphere') === INDEX_NONE) {
                resourcesUnlocked.push('dysonSphere');
            }
        }
    };

    //Upgrades

    instance.upgradeResourceTech = {
        name: 'Upgrade Resource Technology',
        desc: 'Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 300
        },
        apply: function(self) {
            pumpjackOutput *= 2;
            heavyDrillOutput *= 2;
            advancedDrillOutput *= 2;
            furnaceWoodInput *= 2;
            furnaceOutput *= 2;
            laserCutterOutput *= 2;
        }
    };

    instance.upgradeEngineTech = {
        name: 'Upgrade Engine Technology',
        desc: 'Upgrading Engine Technology will make Charcoal engines produce 4 Energy per second instead of 2.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 1000
        },
        apply: function(self) {
            charcoalEngineOutput = 4;
        }
    };

    instance.upgradeSolarTech = {
        name: 'Upgrade Solar Technology',
        desc: 'Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.',
        type: TECH_TYPE.UPGRADE,
        unlocked: false,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: 1,
        cost: {
            'science': 5000
        },
        apply: function(self) {
            solarPanelOutput = 3;
            Game.tech.unlockTech('unlockBatteries');
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
