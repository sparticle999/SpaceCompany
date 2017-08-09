Game.interstellarCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: 'Interstellar',
        category: 'general'
    };

    instance.faction = {
        title: 'Factions',
        category: 'faction',
    };

    return instance;

}());

Game.interstellarData = (function(){

	var instance = {};

	instance.comms = {
		name: 'Communications',
		desc: 'This is where you learn about other systems to travel to.',
		category: 'general',
		unlocked: false
	};

	instance.rocket = {
		name: 'Rockets',
		desc: 'This is where you can construct your transport to the stars.',
		category: 'general',
		built: 'Not Built',
		unlocked: false
	};

	instance.antimatter = {
		name: 'Antimatter',
		desc: 'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.',
		category: 'general',
		unlocked: false
	};

	instance.travel = {
		name: 'Travel',
		desc: 'Here, you can travel across the cosmos to your heart\'s desire.',
		category: 'general',
		unlocked: false
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		desc: "A ruthless faction with a fierce anger towards the ones in power, most notable, the Prasnian Empire. They are incessant in their opposition and focus their whole force towards attacking their enemies. Because of this, what they offer comprises mostly of upgrades tending towards a more active gameplay.",
		category: "faction",
		opinion: 0,
		hidden: "",
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders",
		category: "faction",
		opinion: 0,
		hidden: "",
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		hidden: "",
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		hidden: "",
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.",
		category: "faction",
		opinion: 0,
		hidden: "",
	};

	instance.overlord = {
		name: "Overlord Cult",
		desc: "This faction is shrowded in mystery. While not much is known, a great sense of power overlooks the whole galaxy, seemingly above the other 5 factions and their 'petty' squables. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.",
		category: "faction",
		opinion: 0,
		hidden: "",
	};

	return instance;

}());

Game.commsData = (function(){

	var instance = {};

	instance.irs = {
		entryName: 'irs',
		name: 'Interstellar Radar Scanner',
		desc: 'The Overlord gifts you with the technology to discover stars in outer space by using the IRS. It can find any Tier 1 stars that are close by. Each one increases the range by 5 Light Years.',
		category: '',
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'metal': 38600000000,
			'ice': 4320000000,
			'meteorite': 15800000
		},
		defaultCost: {
			'metal': 38600000000,
			'ice': 4320000000,
			'meteorite': 15800000
		}
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
			'lunarite': 100000,
			'titanium': 100000,
			'metal': 100000
		},
		defaultCost: {
			'lunarite': 100000,
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

Game.antimatterData = (function(){

	var instance = {};

	instance.drive = {
		entryName: 'drive',
		name: 'Alcubierre Drive',
		desc: 'This powerful reactor can turn high-energy plasma into the most efficient fuel we can imagine.',
		category: '',
		unlocked: true,
		displayNeedsUpdate: true,
		resourcePerSecond: {
            'antimatter': 0.5,
            'plasma': -100,
            'ice': -12000
        },
		cost: {
			'silver': 163000000,
			'oil': 712000000,
			'meteorite': 12300000
		},
		defaultCost: {
			'silver': 163000000,
			'oil': 712000000,
			'meteorite': 12300000
		}
	};

	return instance;

}());