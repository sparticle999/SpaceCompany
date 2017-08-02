Game.interstellarCategoryData = (function () {

    var instance = {};

    instance.empty = {
        title: 'Interstellar',
        category: 'empty'
    };

    return instance;

}());

Game.interstellarData = (function(){

	var instance = {};

	instance.comms = {
		name: 'Communications',
		desc: 'This is where you learn about other systems to travel to.',
		category: 'empty',
		unlocked: false
	};

	instance.rocket = {
		name: 'Rockets',
		desc: 'This is where you can construct your transport to the stars.',
		category: 'empty',
		built: 'Not Built',
		unlocked: false
	};

	instance.antimatter = {
		name: 'Antimatter',
		desc: 'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.',
		category: 'empty',
		unlocked: false
	};

	instance.travel = {
		name: 'Travel',
		desc: 'Here, you can travel across the cosmos to your heart\'s desire.',
		category: 'empty',
		unlocked: false
	};

	return instance;

}());

Game.rocketData = (function(){

	var instance = {};

	instance.tier1Rocket = {
		name: 'Tier 1 Rocket',
		desc: 'The Tier 1 Rocket can travel a maximum of 5 light years from Earth.',
		category: 'T1',
		max: 1,
		unlocked: true,
		built: false,
		displayNeedsUpdate: true,
		cost: {
			'shield': 50,
			'engine': 25,
			'aero': 10
		}
	};

	return instance;

}());

Game.rocketPartsData = (function(){

	var instance = {};

	instance.shield = {
		name: 'Shield Plating',
		entryName: 'shield',
		desc: 'This plating combats the Sun\'s radiation, and can protect anyone inside from the frigid cold of space.',
		category: 'T1',
		max: 50,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'spaceMetal': 100000,
			'titanium': 100000,
			'metal': 100000
		},
		defaultCost: {
			'spaceMetal': 100000,
			'titanium': 100000,
			'metal': 100000
		}
	};

	instance.engine = {
		name: 'Engine Unit',
		entryName: 'engine',
		desc: 'These combine antimatter with matter in a controlled reaction to create propulsion that will carry you to the stars.',
		category: 'T1',
		max: 25,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silicon': 500000,
			'meteorite': 10000,
			'hydrogen': 250000
		},
		defaultCost: {
			'silicon': 500000,
			'meteorite': 10000,
			'hydrogen': 250000
		}
	};

	instance.aero = {
		name: 'Aerodynamic Sections',
		entryName: 'aero',
		desc: 'These allow for easy takeoffs and landings out of atmospheres so that you don\'t have to worry about air resistance.',
		category: 'T1',
		max: 15,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silver': 200000,
			'ice': 300000,
			'gem': 250000
		},
		defaultCost: {
			'silver': 200000,
			'ice': 300000,
			'gem': 250000
		}
	};

	return instance;

}());