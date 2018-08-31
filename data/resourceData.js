Game.resourceCategoryData = (function () {

    var instance = {};

    instance.energy = {
        title: 'Energy',
        category: 'energy',
        page: 'resources',
        order: 1, // 1st category item of the resources page
        unlocked: false
    };

    instance.fabricated = {
        title: 'Fabricated',
        category: 'fabricated',
        page: 'resources',
        order: 2,
        unlocked: false
    };

    instance.earth = {
        title: 'Earth Resources',
        category: 'earth',
        page: 'resources',
        order: 3,
        unlocked: true
    };

    instance.innerSol = {
        title: 'Inner Planetary Resources',
        category: 'innerSol',
        page: 'resources',
        order: 4,
        unlocked: false
    };

    instance.outerSol = {
        title: 'Outer Planetary Resources',
        category: 'outerSol',
        page: 'resources',
        order: 5,
        unlocked: false
    };

    instance.science = {
        title: 'Science',
        category: 'science',
        page: 'tech',
        order: 1, // 1st category item on the tech page
        unlocked: false
    };

    instance.spacecraft = {
        title: 'Spacecraft',
        category: 'spacecraft',
        page: 'solar',
        order: 1, // 1st category item on the solar page
        unlocked: true
    };

    instance.rocketFuel = {
        title: 'Rocket Fuel',
        category: 'rocketFuel',
        page: 'solar',
        order: 2,
        unlocked: true
    };

    return instance;

}());

Game.resourceData = (function () {

    var instance = {};


    /*********************
     * Energy Resources  *
     *********************/

    instance.energy = {
        name: 'Energy',
        desc: 'Energy is created by power sources such as steam engines and solar panels, eventually advancing to fusion and nuclear energy. You can hold a maximum of 100,000 energy, unlocking batteries allows you to increase this.',
        icon: 'energyIcon',
        category: 'energy',
        page: 'resources',
        baseCapacity: 100000,
        gainNum: 1,
        toggleable: true,
        manualgain: false,
        unlocked: false
    };

    /*********************
     * Fabricated Resources  *
     *********************/

    instance.plasma = {
        name: 'Plasma',
        desc: 'Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company.',
        icon: 'plasmaIcon',
        category: 'fabricated',
        page: 'resources',
        gainNum: 1,
        gainCost: {'energy': 1000, 'hydrogen': 10,},
        baseCapacity: 100000,
        toggleable: true,
        manualgain: true,
        unlocked: false
    };

    instance.meteorite = {
        name: 'Meteorite',
        desc: 'Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.',
        icon: 'meteoriteIcon',
        category: 'fabricated',
        page: 'resources',
        baseCapacity: 50,
        emc: 3,
        gainNum: 1,
        gainCost: {'plasma': 3,},
        toggleable: true,
        manualgain: true,
        unlocked: false
    };

    instance.carbon = {
        name: 'Carbon',
        desc: 'Carbon is a secondary tier resource and is used by Engines to produce power for your company. Carbon is created by burning wood',
        icon: 'carbonIcon',
        category: 'fabricated',
        page: 'resources',
        baseCapacity: 50,
        emc: 2,
        gainNum: 1,
        gainCost: {'wood': 2,},
        toggleable: true,
        manualgain: true,
        unlocked: false
    };

    /********************
     * Earth Resources  *
     ********************/

    instance.oil = {
        name: 'Oil',
        desc: 'Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.',
        icon: 'oilIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 3,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.metal = {
        name: 'Metal',
        desc: 'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
        icon: 'metalIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 1,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: true
    };

    instance.gem = {
        name: 'Gem',
        desc: 'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
        icon: 'gemIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 3,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: true
    };

    instance.wood = {
        name: 'Wood',
        desc: 'Wood is one of the primary resources. It is used more often in early game for tools and buildings.',
        icon: 'woodIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 1,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: true
    };

    instance.silicon = {
        name: 'Silicon',
        desc: 'Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.',
        icon: 'siliconIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 23,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.uranium = {
        name: 'Uranium',
        desc: 'Uranium is used for nuclear power generation because when it is split, it releases huge amounts of Energy. For this reason, it is prominent in many advanced machines and for propulsion technology as it is useful for inter-star-system travel. Unfortunately, it is hard to get and it requires a lot of resources to radiation-proof equipment.',
        icon: 'uraniumIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 37,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.lava = {
        name: 'Lava',
        desc: 'Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.',
        icon: 'lavaIcon',
        category: 'earth',
        page: 'resources',
        baseCapacity: 50,
        emc: 42,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };


    /******************************
     * Inner Planetary Resources  *
     ******************************/

    instance.lunarite = {
        name: 'Lunarite',
        desc: 'Lunarite is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.',
        icon: 'lunariteIcon',
        category: 'innerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 15,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.methane = {
        name: 'Methane',
        desc: 'Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.',
        icon: 'methaneIcon',
        category: 'innerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 12,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.titanium = {
        name: 'Titanium',
        desc: 'Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants.',
        icon: 'titaniumIcon',
        category: 'innerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 17,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.gold = {
        name: 'Gold',
        desc: 'Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.',
        icon: 'goldIcon',
        category: 'innerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 14,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.silver = {
        name: 'Silver',
        desc: 'Silver is another metal most commonly found in the asteroid belt.',
        icon: 'silverIcon',
        category: 'innerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 16,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.hydrogen = {
        name: 'Hydrogen',
        desc: 'Hydrogen is extremely common on gas giants such as Jupiter and Saturn.',
        icon: 'hydrogenIcon',
        category: 'outerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 33,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.helium = {
        name: 'Helium',
        desc: 'Helium is the second most common element on gas giants such as Jupiter and Saturn.',
        icon: 'heliumIcon',
        category: 'outerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 39,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    instance.ice = {
        name: 'Ice',
        desc: 'Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.',
        icon: 'iceIcon',
        category: 'outerSol',
        page: 'resources',
        baseCapacity: 50,
        emc: 44,
        gainNum: 1,
        toggleable: false,
        manualgain: true,
        unlocked: false
    };

    /******************************
     *           Science           *
     ******************************/

    instance.science = {
        name: 'Science',
        desc: 'Science is used for researching new technologies to further your progress in the game.',
        icon: 'scienceIcon',
        category: 'science',
        page: 'tech',
        baseCapacity: -1,
        hideCapacity: true,
        gainNum: 1,
        toggleable: false,
        manualgain: false,
        unlocked: false
    };

    /********************
     * Rocket Fuel      *
     ********************/

    instance.rocketFuel = {
        name: 'Rocket Fuel',
        desc: 'Rocket fuel is created in chemical plants and is used to allow rockets to launch off into space and to travel to other planets and star systems.',
        icon: 'rocketFuelIcon',
        category: 'rocketFuel',
        page: 'solar',
        baseCapacity: -1,
        hideCapacity: true,
        gainNum: 1,
        toggleable: true,
        manualgain: false,
        unlocked: true
    };

    /********************
     * Rocket           *
     ********************/

    instance.rocket = {
        name: "Rocket",
        desc: "Building a rocket will allow for exploration around the solar system and will allow you to gather resources in space.",
        icon: 'rocketIcon',
        category: "spacecraft",
        page: 'solar',
        baseCapacity: 0, // Important to hide the ps & storage
        order: 2,
        toggleable: false,
        manualgain:  false,
        unlocked: true
    };

    /*****************************
    *        Interstellar        *
    *****************************/

    instance.antimatter = {
        name: 'Antimatter',
        desc: 'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.',
        category: 'interstellar',
        baseCapacity: 100000,
        page: 'interstellar',
        order: 3,
        toggleable: true,
        manualgain: false,
        unlocked: false
    };

    return instance;
}());

Game.storageData = (function(){

    var instance = {};
    instance.entries = {};

    // Storage Upgrades
    var baseUpgradeData = {
        name: 'Storage Upgrade:',
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        resource: undefined,
        displayNeedsUpdate: true,
        entries: {},
        buttonText: 'Upgrade Storage',


        apply: function (self) {
            if (typeof self.resource === 'undefined') {
                return;
            }
            var res = Game.resources.getResourceData(self.resource);
            res.capacity *= 2;
            res.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        },
    };

    /*********************
     * Energy Resources  *
     *********************/

    instance.entries.plasma = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Plasma storage size to ',
        resource: 'plasma',
        cost: {
            'plasma': 50
        }
    });

    instance.entries.uranium = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Uranium storage size to ',
        resource: 'uranium',
        cost: {
            'uranium': 50,
            'lunarite': 20
        }
    });

    instance.entries.lava = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Lava storage size to ',
        resource: 'lava',
        cost: {
            'lava': 50,
            'lunarite': 20
        }
    });

    /********************
     * Earth Resources  *
     ********************/

    instance.entries.oil = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Oil storage size to ',
        resource: 'oil',
        cost: {
            'oil': 50,
            'metal': 20
        }
    });

    instance.entries.metal = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Metal storage size to ',
        resource: 'metal',
        cost: {
            'metal': 50
        }
    });

    instance.entries.gem = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Gem storage size to ',
        resource: 'gem',
        cost: {
            'gem': 50,
            'metal': 20
        }
    });

    instance.entries.carbon = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Carbon storage size to ',
        resource: 'carbon',
        cost: {
            'carbon': 50,
            'metal': 20
        }
    });

    instance.entries.wood = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Wood storage size to ',
        resource: 'wood',
        cost: {
            'wood': 50,
            'metal': 20
        }
    });

    instance.entries.silicon = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Silicon storage size to ',
        resource: 'silicon',
        cost: {
            'silicon': 50,
            'lunarite': 20
        }
    });

    /******************************
     * Inner Planetary Resources  *
     ******************************/

    instance.entries.lunarite = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Lunarite storage size to ',
        resource: 'lunarite',
        cost: {
            'lunarite': 50,
            'metal': 400
        }
    });

    instance.entries.methane = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Methane storage size to ',
        resource: 'methane',
        cost: {
            'methane': 50,
            'lunarite': 20
        }
    });

    instance.entries.titanium = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Titanium storage size to ',
        resource: 'titanium',
        cost: {
            'titanium': 50,
            'lunarite': 20
        }
    });

    instance.entries.gold = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Gold storage size to ',
        resource: 'gold',
        cost: {
            'gold': 50,
            'lunarite': 20
        }
    });

    instance.entries.silver = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Silver storage size to ',
        resource: 'silver',
        cost: {
            'silver': 50,
            'lunarite': 20
        }
    });

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.entries.hydrogen = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Hydrogen storage size to ',
        resource: 'hydrogen',
        cost: {
            'hydrogen': 50,
            'lunarite': 20
        }
    });

    instance.entries.helium = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Helium storage size to ',
        resource: 'helium',
        cost: {
            'helium': 50,
            'lunarite': 20
        }
    });

    instance.entries.ice = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Ice storage size to ',
        resource: 'ice',
        cost: {
            'ice': 50,
            'lunarite': 20
        }
    });

    instance.entries.meteorite = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Meteorite storage size to ',
        resource: 'meteorite',
        cost: {
            'meteorite': 50,
            'lunarite': 4
        }
    });

    return instance;
}());