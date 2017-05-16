Game.techData = (function () {

    var instance = {};

    var baseUpgradeData = {
        name: 'Storage Upgrade:',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.PERCENT,
        current: 0,
        maxLevel: -1,
        apply: function (self, x) { var capacityAddition = x.baseCapacity; for (var i = 0; i < self.current; i++) { capacityAddition *= 2; }; x.capacity += capacityAddition; },
        remove: function (self, x) { var capacityAddition = x.baseCapacity; for (var i = 0; i < self.current; i++) { capacityAddition *= 2; }; x.capacity -= capacityAddition; }
    };


    /*********************
     * Energy Resources  *
     *********************/

    instance.storageUpgradePlasma = $.extend({
        desc: 'Doubles your Plasma storage size',
        resource: 'plasma',
        cost: {
            'plasma': .95,
        },
    }, baseUpgradeData);

    instance.storageUpgradeUranium = $.extend({
        desc: 'Doubles your Uranium storage size',
        resource: 'uranium',
        cost: {
            'uranium': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeLava = $.extend({
        desc: 'Doubles your Lava storage size',
        resource: 'lava',
        cost: {
            'lava': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    /********************
     * Earth Resources  *
     ********************/

    instance.storageUpgradeOil = $.extend({
        desc: 'Doubles your Oil storage size',
        resource: 'oil',
        cost: {
            'oil': .95,
            'metal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeMetal = $.extend({
        desc: 'Doubles your Metal storage size',
        resource: 'metal',
        cost: {
            'metal': .95,
        },
    }, baseUpgradeData);

    instance.storageUpgradeGem = $.extend({
        desc: 'Doubles your Gem storage size',
        resource: 'gem',
        cost: {
            'gem': .95,
            'metal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeCharcoal = $.extend({
        desc: 'Doubles your Charcoal storage size',
        resource: 'charcoal',
        cost: {
            'charcoal': .95,
            'metal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeWood = $.extend({
        desc: 'Doubles your Wood storage size',
        resource: 'wood',
        cost: {
            'wood': .95,
            'metal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeSilicon = $.extend({
        desc: 'Doubles your Silicon storage size',
        resource: 'silicon',
        cost: {
            'silicon': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    /******************************
     * Inner Planetary Resources  *
     ******************************/

    instance.storageUpgradeSpaceMetal = $.extend({
        desc: 'Doubles your Space Metal storage size',
        resource: 'spaceMetal',
        cost: {
            'spaceMetal': .95,
            'metal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeMethane = $.extend({
        desc: 'Doubles your Methane storage size',
        resource: 'methane',
        cost: {
            'methane': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeTitanium = $.extend({
        desc: 'Doubles your Titanium storage size',
        resource: 'titanium',
        cost: {
            'titanium': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeGold = $.extend({
        desc: 'Doubles your Gold storage size',
        resource: 'gold',
        cost: {
            'gold': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeSilver = $.extend({
        desc: 'Doubles your Silver storage size',
        resource: 'silver',
        cost: {
            'silver': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.storageUpgradeHydrogen = $.extend({
        desc: 'Doubles your Hydrogen storage size',
        resource: 'hydrogen',
        cost: {
            'hydrogen': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeHelium = $.extend({
        desc: 'Doubles your Helium storage size',
        resource: 'helium',
        cost: {
            'helium': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeIce = $.extend({
        desc: 'Doubles your Ice storage size',
        resource: 'ice',
        cost: {
            'ice': .95,
            'spaceMetal': .4
        },
    }, baseUpgradeData);

    instance.storageUpgradeMeteorite = $.extend({
        desc: 'Doubles your Meteorite storage size',
        resource: 'meteorite',
        cost: {
            'meteorite': .95,
            'spaceMetal': 4
        },
    }, baseUpgradeData);

    return instance;
}());