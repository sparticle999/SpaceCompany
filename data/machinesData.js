Game.machinesCategoryData = (function(){

	var instance = {};

    instance.energy = {
        title: 'Energy',
        category: 'energy',
        page: 'machines',
        order: 1, // 1st category item of the machines page
        unlocked: false
    };

    instance.fabricated = {
        title: 'Fabricated',
        category: 'fabricated',
        page: 'machines',
        order: 2,
        unlocked: false
    };

    instance.earth = {
        title: 'Earth Resources',
        category: 'earth',
        page: 'machines',
        order: 3,
        unlocked: true
    };

    instance.innerSol = {
        title: 'Inner Planetary Resources',
        category: 'innerSol',
        page: 'machines',
        order: 4,
        unlocked: false
    };

    instance.outerSol = {
        title: 'Outer Planetary Resources',
        category: 'outerSol',
        page: 'machines',
        order: 5,
        unlocked: false
    };

    instance.science = {
        title: 'Science',
        category: 'science',
        page: 'machines',
        order: 6, // 1st category item on the science page
        unlocked: false
    };

    instance.rocketFuel = {
        title: 'Rocket Fuel',
        category: 'rocketFuel',
        page: 'machines',
        order: 7,
        unlocked: true
    };

	return instance;
}());