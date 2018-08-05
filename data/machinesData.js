Game.machinesCategoryData = (function(){

    var instance = {};

    instance.resources = {
        title: 'Resources',
        category: 'resources',
        page: 'machines',
        order: 1, // 1st category item of the machines page
        unlocked: false
    };

    instance.other = {
        title: 'Other',
        category: 'other',
        page: 'machines',
        order: 2,
        unlocked: false
    };

    return instance;
}());

Game.machinesData = (function(){

	var instance = {};

    instance.energy = {
        title: 'Energy',
        id: 'energy',
        category: 'resources',
        order: 1, // 1st category item of the machines page
        unlocked: false
    };

    instance.fabricated = {
        title: 'Fabricated',
        id: 'fabricated',
        category: 'resources',
        order: 2,
        unlocked: false
    };

    instance.earth = {
        title: 'Earth Resources',
        id: 'earth',
        category: 'resources',
        order: 3,
        unlocked: true
    };

    instance.innerSol = {
        title: 'Inner Planetary Resources',
        id: 'innerSol',
        category: 'resources',
        order: 4,
        unlocked: false
    };

    instance.outerSol = {
        title: 'Outer Planetary Resources',
        id: 'outerSol',
        category: 'resources',
        order: 5,
        unlocked: false
    };

    instance.science = {
        title: 'Science',
        id: 'science',
        category: 'other',
        order: 6, // 1st category item on the science page
        unlocked: false
    };

    instance.rocketFuel = {
        title: 'Rocket Fuel',
        id: 'rocketFuel',
        category: 'other',
        order: 7,
        unlocked: true
    };

	return instance;
}());