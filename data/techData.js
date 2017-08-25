Game.techData = (function () {

    var instance = {};

    var techBase = {
        id: null,
        htmlId: null,
        htmlIdCost: null,
        htmlIdTitle: null,
        htmlIdButton: null,
        displayNeedsUpdate: true,

        current: 0,
        maxLevel: 1,
        unlocked: false,

        newResources: [],
        newTechs: [],
        newTabs: [],
        tabAlerts: [],

        notifyText: null,

        setId: function(id) {
            this.id = id;
            this.htmlId = id;
            this.htmlIdCost = id + 'Cost';
            this.htmlIdTitle = id + 'Title';
            this.htmlIdButton = id + 'Button';
        },

        getBodyElement: function() {
            return $('#' + this.htmlId);
        },
        getTitleElement: function() {
            return $('#' + this.htmlIdTitle);
        },
        getCostElement: function() {
            return $('#' + this.htmlIdCost);
        },
        getButtonElement: function() {
            return $('#' + this.htmlIdButton);
        },

        apply: function(self) {
            for (var i = 0; i < this.newResources.length; i++) {
                if (resourcesUnlocked.indexOf(this.newResources[i]) === INDEX_NONE) {
                    resourcesUnlocked.push(this.newResources[i]);
                }
            }
            for (i = 0; i < this.newTabs.length; i++) {
                if (tabsUnlocked.indexOf(this.newTabs[i]) === INDEX_NONE) {
                    tabsUnlocked.push(this.newTabs[i]);
                }
            }
            for (i = 0; i < this.newTechs.length; i++) {
                Game.tech.unlockTech(this.newTechs[i]);
            }
            if (this.onApply !== null) {
                this.onApply();
            }
        },
        // for any tech specific apply changes
        onApply: null

    };

    // Storage Upgrades
    var baseUpgradeData = $.extend({}, techBase, {
        name: 'Storage Upgrade:',
        type: TECH_TYPE.STORAGE,
        unlocked: true,
        costType: COST_TYPE.PERCENT,
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
    });

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

    instance.unlockStorage = $.extend({}, techBase, {
        name: 'Storage Upgrades',
        desc: 'This will allow you to build storage upgrades to increase the maximum on the amount of resource you can have at once.',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 5
        },
        newTechs: ['unlockOil']
    });

    // Other Researches
    instance.unlockBasicEnergy = $.extend({}, techBase, {
        name: 'Basic Energy Production',
        desc: 'You will be able to produce power from steam engines using Charcoal made from wood in a furnace.',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 20
        },
        newResources: ['energyNav', 'charcoalNav'],
        newTechs: ['unlockSolar', 'unlockMachines', 'upgradeEngineTech']
    });

    instance.unlockOil = $.extend({}, techBase, {
        name: 'Oil Processing',
        desc: 'Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 30
        },
        newResources: ['oilNav']
    });

    instance.unlockSolar = $.extend({}, techBase, {
        name: 'Solar Panels',
        desc: 'Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 50
        },
        newTechs: ['upgradeSolarTech']
    });

    instance.unlockMachines = $.extend({}, techBase, {
        name: 'Resource Machines',
        desc: 'Resource Machines produce more resources than simple methods but require a constant supply of power to work.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100
        },
        newTechs: ['unlockSolarSystem', 'upgradeResourceTech', 'unlockDestruction'],
    });

    instance.unlockDestruction = $.extend({}, techBase, {
        name: 'Destruction of Machines',
        desc: 'This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don\'t have enough energy to support your machines.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        }
    });

    instance.unlockSolarSystem = $.extend({}, techBase, {
        name: 'Space',
        desc: 'Unlocking space-travel allows for launching of rockets and opens a whole new field of research.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        newTabs: ['solarSystemTab'],
        newTechs: ['unlockLabT2', 'unlockRocketFuelT2']
    });

    instance.unlockRocketFuelT2 = $.extend({}, techBase, {
        name: 'Oxidisation',
        desc: 'Oxidisation is a more efficient process of creating Rocket Fuel.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 450000
        },
        newResources: ['rocketFuelT2'],
        newTechs: ['unlockRocketFuelT3']
    });

    instance.unlockRocketFuelT3 = $.extend({}, techBase, {
        name: 'Hydrazine',
        desc: 'Hydrazine is a compound created by Methane that increases the speed at which rocket fuel can be produced in a Hydrazine Catalyst Machine.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3200000
        },
        newResources: ['rocketFuelT3']
    });

    instance.unlockLabT2 = $.extend({}, techBase, {
        name: 'Tier 2 Science',
        desc: 'Researching this will allow you to increase your science production drastically.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        newTechs: ['unlockLabT3']
    });

    instance.unlockLabT3 = $.extend({}, techBase, {
        name: 'Tier 3 Science',
        desc: 'Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3000
        },
        newTechs: ['unlockLabT4']
    });

    instance.unlockLabT4 = $.extend({}, techBase, {
        name: 'Tier 4 Science',
        desc: 'Researching this will allow you to access the fourth tier of science production, creating 10 times as much science as the previous tier.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 50000000
        }
    });

    instance.unlockBatteries = $.extend({}, techBase, {
        name: 'Tier 1 Batteries',
        desc: 'Tier 1 Batteries improve the amount of energy you can store at once.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 15000
        },
        newResources: ['batteries', 'energyStorageBox'],
        newTechs: ['unlockBatteriesT2']
    });

    instance.unlockBatteriesT2 = $.extend({}, techBase, {
        name: 'Tier 2 Batteries',
        desc: 'Tier 2 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 300000
        },
        newResources: ['batteriesT2'],
        newTechs: ['unlockBatteriesT3']
    });

    instance.unlockBatteriesT3 = $.extend({}, techBase, {
        name: 'Tier 3 Batteries',
        desc: 'Tier 3 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3000000
        },
        newResources: ['batteriesT3'],
        newTechs: ['unlockBatteriesT4']
    });

    instance.unlockBatteriesT4 = $.extend({}, techBase, {
        name: 'Tier 4 Batteries',
        desc: 'Tier 4 Batteries improve the amount of energy you can store at once',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 30000000
        },
        newResources: ['batteriesT4']
    });

    instance.unlockPlasma = $.extend({}, techBase, {
        name: 'Plasma Tier 1 Technology',
        desc: 'This allows you to turn your energy and hydrogen into Plasma',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 40000
        },
        newResources: ['plasmaNav'],
        newTechs: ['unlockPlasmaTier2'],
        onApply: function() {
            if (noBorder.indexOf('energyNav') === INDEX_NONE) {
                noBorder.push('energyNav');
            }
        }
    });

    instance.unlockPlasmaTier2 = $.extend({}, techBase, {
        name: 'Plasma Tier 2 Technology',
        desc: 'This research unlocks the second tier of Plasma production, the Plasmatic Pit',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 60000
        },
        newResources: ['plasmaTier2']
    });

    instance.unlockPSU = $.extend({}, techBase, {
        name: 'Plasma Storage Units',
        desc: 'PSUs increase the limit on plasma you can store at once.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 9500000
        },
        newResources: ['plasmaStorageUnits', 'plasmaStorageBox'],
        newTechs: ['unlockPSUT2']
    });

    instance.unlockPSUT2 = $.extend({}, techBase, {
        name: 'Tier 2 Plasma Storage Units',
        desc: 'Tier 2 PSUs are more efficient at storing plasma but they are significantly larger and require more resources to make.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 37000000
        },
        newResources: ['plasmaStorageUnitsT2']
    });

    instance.unlockEmc = $.extend({}, techBase, {
        name: 'Energy-Mass Conversion',
        desc: 'This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 60000
        },
        newResources: ['emcPage'],
        newTechs: ['unlockMeteorite']
    });

    instance.unlockMeteorite = $.extend({}, techBase, {
        name: 'Meteorite',
        desc: 'Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['meteoriteNav', 'meteoriteEMC'],
        newTechs: ['unlockMeteoriteTier1']
    });

    instance.unlockMeteoriteTier1 = $.extend({}, techBase, {
        name: 'Meteorite Tier 1',
        desc: 'Research an automated way to gather Meteorite so that you don\'t have to worry about losing out when you\'re not around.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 75000
        },
        newResources: ['meteoriteTier1'],
        newTechs: ['unlockMeteoriteTier2']

    });

    instance.unlockMeteoriteTier2 = $.extend({}, techBase, {
        name: 'Meteorite Tier 2',
        desc: 'Research a more efficient method of getting meteorite than creating it artificially.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 75000
        },
        newResources: ['meteoriteTier2']
    });

    instance.unlockDyson = $.extend({}, techBase, {
        name: 'Dyson Ring',
        desc: 'Dyson Rings produce huge amounts of energy by surrounding the sun in solar stations.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['dysonPage'],
        newTechs: ['unlockDysonSphere']
    });

    instance.unlockDysonSphere = $.extend({}, techBase, {
        name: 'Dyson Sphere',
        desc: 'The Dyson Sphere encompasses the sun and allows you to harness enough energy to go interstellar.',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500000
        },
        newResources: ['dysonSphere']
    });

    //Upgrades

    instance.upgradeResourceTech = $.extend({}, techBase, {
        name: 'Upgrade Resource Technology',
        desc: 'Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 300
        },
        onApply: function() {
            pumpjackOutput *= 2;
            heavyDrillOutput *= 2;
            advancedDrillOutput *= 2;
            furnaceWoodInput *= 2;
            furnaceOutput *= 2;
            laserCutterOutput *= 2;
        }
    });

    instance.upgradeEngineTech = $.extend({}, techBase, {
        name: 'Upgrade Engine Technology',
        desc: 'Upgrading Engine Technology will make Charcoal engines produce 4 Energy per second instead of 2.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 1000
        },
        onApply: function() {
            charcoalEngineOutput = 4;
        }
    });

    instance.upgradeSolarTech = $.extend({}, techBase, {
        name: 'Upgrade Solar Technology',
        desc: 'Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 5000
        },
        newTechs: ['unlockBatteries'],
        onApply: function() {
            solarPanelOutput = 3;
        }
    });

    instance.efficiencyResearch = $.extend({}, techBase, {
        name: 'Research Resource Efficiency',
        desc: 'Resource Efficiency increases the income of resources by 1%/s per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    });

    instance.scienceEfficiencyResearch = $.extend({}, techBase, {
        name: 'Research Science Efficiency',
        desc: 'Science Efficiency increases the science production by 2% per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: {
            'science': 10000000
        }
    });

    instance.energyEfficiencyResearch = $.extend({}, techBase, {
        name: 'Research Energy Efficiency',
        desc: 'Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 25,
        cost: {
            'science': 10000000
        }
    });

    instance.batteryEfficiencyResearch = $.extend({}, techBase, {
        name: 'Research Battery Efficiency',
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
