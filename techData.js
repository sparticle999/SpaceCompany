Game.techData = (function(){

    var instance = {};

    var baseUpgradeData = {
        name: 'Storage Upgrade:',
        type: TECH_TYPE.UPGRADE,
        unlocked: true,
        costType: COST_TYPE.PERCENT,
        current: 0,
        maxLevel: -1,
        apply: function(self, x) { var capacityAddition = x.baseCapacity; for(var i = 0; i < self.current; i++) { capacityAddition *= 2; }; x.capacity += capacityAddition; },
        remove: function(self, x) { var capacityAddition = x.baseCapacity; for(var i = 0; i < self.current; i++) { capacityAddition *= 2; }; x.capacity -= capacityAddition; }
    };

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
        },
    }, baseUpgradeData);

    instance.storageUpgradeWood = $.extend({
        desc: 'Doubles your Wood storage size',
        resource: 'wood',
        cost: {
            'wood': .95,
        },
    }, baseUpgradeData);

    return instance;
}());