Game.spaceshipParts = (function () {

    var instance = {};

    // Shared data for all parts, change only base info here
    var basePartData = {
        costType: COST_TYPE.FIXED,
        category: 'construction',
        current: 0,
        maxCount: -1,
        isComplete: false,
        icon: 'spaceShipPartPlaceholder',
        onComplete: function() {}
    };

    // More specific data for each part type
    var baseSpacedockData = $.extend({}, basePartData, {
        type: SPACESHIP_PART.SPACE_DOCK,
        unlocked: true
    });

    var baseStructureData = $.extend({}, basePartData, {
        type: SPACESHIP_PART.STRUCTURE,
        unlocked: false
    });


    // The actual Part data, most changes should go here
    instance.spaceBlock = $.extend({}, baseSpacedockData, {
        name: 'Space Block',
        desc: 'The base building block of space structures',
        maxCount: 500,
        cost: {
            'metal': 10000000,
            'spaceMetal': 750000
        }
    });

    instance.spaceDockRing = $.extend({}, baseSpacedockData, {
        name: 'Space Dock Ring',
        desc: 'The ring structure of a spacedock',
        maxCount: 8,
        cost: {
            'titanium': 25000000,
            'gold': 15000000,
            'silver': 15000000
        },
        partCost: {
            'spaceBlock': 50,
        },
        dependsOn: [ 'spaceBlock' ]
    });

    instance.spaceDockHull = $.extend({}, baseSpacedockData, {
        name: 'Space Dock Hull',
        desc: 'The outer hull structure of a spacedock',
        maxCount: 1,
        cost: {
            'metal': 1000000000,
            'spaceMetal': 500000000,
            'titanium': 200000000,
        },
        partCost: {
            'spaceBlock': 300,
        },
        dependsOn: [ 'spaceBlock' ]
    });

    instance.spaceDockBridge = $.extend({}, baseSpacedockData, {
        name: 'Space Dock Bridge',
        desc: 'The bridge of a spacedock',
        maxCount: 1,
        cost: {
            'titanium': 100000000,
            'silicon': 60000000,
            'gem': 200000000,
        },
        partCost: {
            'spaceBlock': 100,
        },
        dependsOn: [ 'spaceBlock' ]
    });

    instance.spaceDockHabitat = $.extend({}, baseSpacedockData, {
        name: 'Space Dock Habitat',
        desc: 'The habitat of a spacedock',
        maxCount: 1,
        cost: {
            'titanium': 75000000,
            'silicon': 50000000,
            'gem': 100000000,
        },
        partCost: {
            'spaceBlock': 75,
        },
        dependsOn: [ 'spaceBlock' ]
    });

    instance.spaceDock = $.extend({}, baseSpacedockData, {
        name: 'Space Dock',
        desc: 'The Space Dock allows construction of your Interstellar Spaceship.',
        maxCount: 1,
        cost: {
            'metal': 5,
            'spaceMetal': 5,
            'titanium': 5
        },
        energyUse: 750000,
        partCost: {
            'spaceDockRing': 8,
            'spaceDockHull': 1,
            'spaceDockBridge': 1,
            'spaceDockEngineering': 2,
            'spaceDockHabitat': 10
        },
        dependsOn: [ 'spaceDockRing', 'spaceDockHull', 'spaceDockBridge', 'spaceDockEngineering', 'spaceDockHabitat' ]
    });

    instance.structureMain = $.extend({}, baseStructureData, {
        name: 'Main Structure',
        desc: 'The Main Structure of your ship',
        maxCount: 100,
        cost: {
            'metal': 1000000,
            'spaceMetal': 500000,
            'titanium': 100000
        },
        dependsOn: [ 'spaceDock' ]
    });

    return instance;
}());