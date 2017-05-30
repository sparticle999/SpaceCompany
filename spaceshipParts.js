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
    instance.spaceDockRing = $.extend({}, baseSpacedockData, {
        name: 'Space Dock Ring',
        desc: 'The ring structure of a spacedock',
        maxCount: 4,
        cost: {
            'metal': 5
        }
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
        dependsOn: [ 'spaceDockRing' ]
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