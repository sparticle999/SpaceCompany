Game.buildingData = (function(){

    var instance = {};

    instance.metalMiner = {
        name: 'Miner',
        desc: 'Build a pickaxe for your miner.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        unlocked: false,
        perSecond: 1,
        energyCost: 0,
        maxCount: Number.MAX_VALUE,
        cost: {
            'metal': 10,
            'wood': 5
        }
    };

    instance.metalHeavyDrill = {
        name: 'Heavy Drill',
        desc: 'Heavy Drills mine Metal at mass.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        perSecond: 14,
        energyCost: 2,
        maxCount: Number.MAX_VALUE,
        cost: {
            'metal': 160,
            'gem': 60,
            'oil': 50
        }
    };

    instance.metalGigaDrill = {
        name: 'Giga Drill',
        desc: 'Giga Drills extract Metal at colossal speeds.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        perSecond: 108,
        energyCost: 9,
        maxCount: Number.MAX_VALUE,
        cost: {
            'spaceMetal': 2800,
            'gem': 3400,
            'silicon': 4100
        }
    };

    instance.metalQuantumDrill = {
        name: 'Quantum Drill',
        desc: 'Quantum Drills bend the space-time continuum to get metal faster than physically possible.',
        type: BUILDING_TYPE.PRODUCER,
        resource: 'metal',
        perSecond: 427,
        energyCost: 24,
        maxCount: Number.MAX_VALUE,
        cost: {
            'spaceMetal': 29000,
            'gold': 18700,
            'meteorite': 900
        }
    };

    return instance;
}());