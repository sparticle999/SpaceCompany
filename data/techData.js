Game.techData = (function () {

    var instance = {};

    var techBase = {
        id: null,
        htmlId: null,
        htmlIdCost: null,
        htmlIdTitle: null,
        htmlIdButton: null,
        displayNeedsUpdate: true,

        name: 'Research',
        desc: 'Purchase to unlock something.',
        notifyTitle: null,
        notifyText: null,
        buttonText: 'Unlock',

        current: 0,
        maxLevel: 1,
        unlocked: false,

        newResources: [],
        newTechs: [],
        newTabs: [],
        tabAlerts: [],

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

    // Researches
    instance.unlockStorage = $.extend({}, techBase, {
        name: 'Storage Upgrades',
        desc: 'This will allow you to upgrade the maximum amount of a resource you can hold at once.',
        buttonText: 'Unlock Storage',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 5
        },
        newTechs: ['unlockOil'],
        tabAlerts: ['resources']
    });
    
    instance.unlockBasicEnergy = $.extend({}, techBase, {
        name: 'Basic Energy Production',
        desc: 'You will be able to produce power from Steam Engines using Charcoal.',
        buttonText: 'Unlock Basic Energy Production',
        type: TECH_TYPE.UNLOCK,
        unlocked: true,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 20
        },
        newResources: ['energyNav', 'charcoalNav'],
        newTechs: ['unlockSolar', 'unlockMachines', 'upgradeEngineTech'],
        tabAlerts: ['resources']
    });

    instance.unlockOil = $.extend({}, techBase, {
        name: 'Oil Processing',
        desc: 'Oil is used to build more advanced resource gathering machines. Unlocking Oil Processing allows you to extract it from the ground.',
        buttonText: 'Unlock Oil',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 30
        },
        newResources: ['oilNav'],
        tabAlerts: ['resources']
    });

    instance.unlockSolar = $.extend({}, techBase, {
        name: 'Solar Panels',
        desc: 'Solar Panels produce Energy without the need for fuel, but more slowly than other forms of Energy production.',
        buttonText: 'Unlock Solar Panels',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 50
        },
        newTechs: ['upgradeSolarTech'],
        tabAlerts: ['resources']
    });

    instance.unlockMachines = $.extend({}, techBase, {
        name: 'Resource Machines',
        desc: 'Resource machines produce more resources than Tier 1 producers, but require a constant supply of Energy to work.',
        buttonText: 'Unlock Resource Machines',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100
        },
        newTechs: ['unlockSolarSystem', 'upgradeResourceTech', 'unlockDestruction'],
        tabAlerts: ['resources']
    });

    instance.unlockDestruction = $.extend({}, techBase, {
        name: 'Destruction of Machines',
        desc: 'Allows you to destroy machines you already own. This can be useful when there are more efficient machines available, or if you don\'t have enough Energy to support all your machines.',
        buttonText: 'Unlock Destruction',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        tabAlerts: ['resources']
    });

    instance.unlockSolarSystem = $.extend({}, techBase, {
        name: 'Space',
        desc: 'Unlocking space travel allows you to launch rockets and opens a whole new field of research.',
        buttonText: 'Unlock Space Travel',
        notifyTitle: 'new Tab!',
        notifyText: 'You\'ve unlocked the Solar System Tab!',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        newTabs: ['solarSystemTab'],
        newTechs: ['unlockLabT2', 'unlockRocketFuelT2'],
        tabAlerts: ['solarSystem']
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
        tabAlerts: ['solarSystem']
    });

    instance.unlockRocketFuelT3 = $.extend({}, techBase, {
        name: 'Hydrazine',
        desc: 'Hydrazine is a Methane-based compound that increases the speed at which Rocket Fuel can be produced in a Hydrazine Catalyst Machine.',
        buttonText: 'Unlock Hydrazine',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3200000
        },
        newResources: ['rocketFuelT3'],
        tabAlerts: ['solarSystem']
    });

    instance.unlockLabT2 = $.extend({}, techBase, {
        name: 'Tier 2 Science',
        desc: 'Researching this will allow you to access the second tier of Science production, creating 10 times as much Science as the previous tier.',
        buttonText: 'Unlock Tier 2 Science',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500
        },
        newTechs: ['unlockLabT3']
    });

    instance.unlockLabT3 = $.extend({}, techBase, {
        name: 'Tier 3 Science',
        desc: 'Researching this will allow you to access the third tier of Science production, creating 10 times as much Science as the previous tier.',
        buttonText: 'Unlock Tier 3 Science',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3000
        },
        newTechs: ['unlockLabT4']
    });

    instance.unlockLabT4 = $.extend({}, techBase, {
        name: 'Tier 4 Science',
        desc: 'Researching this will allow you to access the fourth tier of Science production, creating 10 times as much Science as the previous tier.',
        buttonText: 'Unlock Tier 4 Science',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 50000000
        }
    });

    instance.unlockBatteries = $.extend({}, techBase, {
        name: 'Tier 1 Batteries',
        desc: 'Tier 1 Batteries increase the amount of Energy you can store at once.',
        buttonText: 'Unlock Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 15000
        },
        newResources: ['batteries', 'energyStorageBox'],
        newTechs: ['unlockBatteriesT2'],
        tabAlerts: ['resources']
    });

    instance.unlockBatteriesT2 = $.extend({}, techBase, {
        name: 'Tier 2 Batteries',
        desc: 'Tier 2 Batteries increase the amount of Energy you can store at once.',
        buttonText: 'Unlock T2 Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 300000
        },
        newResources: ['batteriesT2'],
        newTechs: ['unlockBatteriesT3'],
        tabAlerts: ['resources']
    });

    instance.unlockBatteriesT3 = $.extend({}, techBase, {
        name: 'Tier 3 Batteries',
        desc: 'Tier 3 Batteries increase the amount of Energy you can store at once.',
        buttonText: 'Unlock T3 Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 3000000
        },
        newResources: ['batteriesT3'],
        newTechs: ['unlockBatteriesT4'],
        tabAlerts: ['resources']
    });

    instance.unlockBatteriesT4 = $.extend({}, techBase, {
        name: 'Tier 4 Batteries',
        desc: 'Tier 4 Batteries increase the amount of Energy you can store at once.',
        buttonText: 'Unlock T4 Batteries',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 30000000
        },
        newResources: ['batteriesT4'],
        tabAlerts: ['resources']
    });

    instance.unlockPlasma = $.extend({}, techBase, {
        name: 'Plasma Tier 1 Technology',
        desc: 'This allows you to turn Energy and Hydrogen into Plasma.',
        buttonText: 'Unlock Plasma',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 40000
        },
        newResources: ['plasmaNav'],
        newTechs: ['unlockPlasmaTier2'],
        tabAlerts: ['resources'],
        onApply: function() {
            if (noBorder.indexOf('energyNav') === INDEX_NONE) {
                noBorder.push('energyNav');
            }
        }
    });

    instance.unlockPlasmaTier2 = $.extend({}, techBase, {
        name: 'Plasma Tier 2 Technology',
        desc: 'This research unlocks the second tier of Plasma production, the Plasmatic Pit.',
        buttonText: 'Unlock Plasma Tier 2',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 60000
        },
        newResources: ['plasmaTier2'],
        tabAlerts: ['resources']
    });

    instance.unlockPSU = $.extend({}, techBase, {
        name: 'Plasma Storage Units',
        desc: 'PSUs increase the amount of Plasma you can store at once.',
        buttonText: 'Unlock PSUs',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 9500000
        },
        newResources: ['plasmaStorageUnits', 'plasmaStorageBox'],
        newTechs: ['unlockPSUT2'],
        tabAlerts: ['resources']
    });

    instance.unlockPSUT2 = $.extend({}, techBase, {
        name: 'Tier 2 Plasma Storage Units',
        desc: 'Tier 2 PSUs are more efficient at storing Plasma, but they are significantly larger and require more resources to make.',
        buttonText: 'Unlock T2 PSUs',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 37000000
        },
        newResources: ['plasmaStorageUnitsT2'],
        tabAlerts: ['resources']
    });

    instance.unlockEmc = $.extend({}, techBase, {
        name: 'Energy-Mass Conversion',
        desc: 'This technology allows you to convert Energy into resources and Plasma into rare Meteorite ore.',
        buttonText: 'Unlock EMC',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 60000
        },
        newResources: ['emcPage'],
        newTechs: ['unlockMeteorite'],
        tabAlerts: ['solCenter']
    });

    instance.unlockMeteorite = $.extend({}, techBase, {
        name: 'Meteorite',
        desc: 'Meteorite is one of the rarest resources in the galaxy. All of the naturally-occuring Meteorite that once existed in the Kuiper Belt, and similar asteroid fields in other star systems, has long ago been mined out. Now, the only way to get it is to make it from Energy.',
        buttonText: 'Unlock Meteorite',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['meteoriteNav', 'meteoriteEMC'],
        newTechs: ['unlockMeteoriteTier1'],
        tabAlerts: ['resources', 'wonder']
    });

    instance.unlockMeteoriteTier1 = $.extend({}, techBase, {
        name: 'Meteorite Tier 1',
        desc: 'Research an automated way of creating Meteorite, so that you don\'t have to worry about converting it manually.',
        buttonText: 'Unlock Meteorite Tier 1',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 75000
        },
        newResources: ['meteoriteTier1'],
        newTechs: ['unlockMeteoriteTier2'],
        tabAlerts: ['resources']

    });

    instance.unlockMeteoriteTier2 = $.extend({}, techBase, {
        name: 'Meteorite Tier 2',
        desc: 'Research a more efficient way to gain Meteorite.',
        buttonText: 'Unlock Meteorite Tier 2',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['meteoriteTier2'],
        tabAlerts: ['resources']
    });

    instance.unlockDyson = $.extend({}, techBase, {
        name: 'Dyson Ring',
        desc: 'Dyson Rings produce huge amounts of Energy by surrounding the Sun with a strip of solar power arrays.',
        buttonText: 'Unlock Dyson Rings',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 100000
        },
        newResources: ['dysonPage'],
        newTechs: ['unlockDysonSphere'],
        tabAlerts: ['solCenter']
    });

    instance.unlockDysonSphere = $.extend({}, techBase, {
        name: 'Dyson Swarms and Spheres',
        desc: 'Dyson Swarms surround the Sun with a spherical array of solar power stations. A Dyson Sphere completely encloses it, allowing you to harness enough Energy for interstellar travel.',
        buttonText: 'Unlock Dyson Swarms/Spheres',
        type: TECH_TYPE.UNLOCK,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 500000
        },
        newResources: ['dysonSphere'],
        tabAlerts: ['solCenter']
    });

    //Upgrades

    instance.upgradeResourceTech = $.extend({}, techBase, {
        name: 'Upgrade Resource Technology',
        desc: 'Make your machines produce even more resources than before. This upgrade doubles the amount they produce, without changing Energy consumption.',
        buttonText: 'Upgrade Resource Tech',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 300
        },
        tabAlerts: ['resources'],
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
        desc: 'Charcoal Engines will produce 4 Energy per second instead of 2.',
        buttonText: 'Upgrade Charcoal Engines',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 1000
        },
        tabAlerts: ['resources'],
        onApply: function() {
            charcoalEngineOutput = 4;
        }
    });

    instance.upgradeSolarTech = $.extend({}, techBase, {
        name: 'Upgrade Solar Technology',
        desc: 'Solar Panels will produce 3 Energy per second instead of 1.5.',
        buttonText: 'Upgrade Solar Panels',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        cost: {
            'science': 5000
        },
        newTechs: ['unlockBatteries'],
        tabAlerts: ['resources'],
        onApply: function() {
            solarPanelOutput = 3;
        }
    });

    instance.efficiencyResearch = $.extend({}, techBase, {
        name: 'Resource Efficiency',
        desc: 'Resource Efficiency increases resource production by 1% per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: {
            'science': 100000
        }
    });

    instance.scienceEfficiencyResearch = $.extend({}, techBase, {
        name: 'Science Efficiency',
        desc: 'Science Efficiency increases Science production by 2% per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: -1,
        cost: {
            'science': 10000000
        }
    });

    instance.energyEfficiencyResearch = $.extend({}, techBase, {
        name: 'Energy Efficiency',
        desc: 'Energy Efficiency decreases the Energy consumption of all machines by 1% per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 25,
        cost: {
            'science': 10000000
        }
    });

    instance.batteryEfficiencyResearch = $.extend({}, techBase, {
        name: 'Battery Efficiency',
        desc: 'Battery Efficiency improves the storage capacity of all Batteries by 1% per purchase.',
        type: TECH_TYPE.UPGRADE,
        costType: COST_TYPE.FIXED,
        maxLevel: 200,
        cost: {
            'science': 100000000
        }
    });

    return instance;
}());
