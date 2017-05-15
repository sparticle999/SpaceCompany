Game.techData = (function(){

    var instance = {};

    instance.storageUpgradeMetal = {
        name: 'Storage Upgrade',
        desc: 'Upgrade your Metal storage size to %s',
        type: TECH_TYPE.UPGRADE,
        resource: 'metal',
        unlocked: true,
        costType: COST_TYPE.PERCENT,
        cost: {
            'metal': .95,
        },
        level: 0,
        maxLevel: Number.MAX_VALUE,
        apply: function(x) { x.capacity *= (this.level + 1); },
        remove: function(x) { x.capacity /= (this.level + 1); }
    };

    /*instance.metalMiner = {
        name: 'Miner',
        desc: 'Build a pickaxe for your miner.',
        type: BUILDING_TYPES.PRODUCER,
        resource: 'metal',
        perSecond: 1,
        energyCost: 0,
        maxCount: Number.MAX_VALUE,
        cost: {
            'metal': 10,
            'wood': 5
        }
    };*/

    return instance;
}());