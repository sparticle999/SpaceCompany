Game.interstellarCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: 'Interstellar',
        category: 'general'
    };

    instance.faction = {
        title: 'Faction Star Systems',
        category: 'faction',
    };

    return instance;

}());

Game.interstellarData = (function(){

	var instance = {};

	instance.comms = {
		name: 'Communications',
		desc: 'This is where you learn about other systems to travel to. <br><b>NB: The first star, Alpha Centauri, is 4.3 light years away. 1 IRS will not get you there.</b>',
		category: 'general',
		unlocked: false
	};

	instance.rocket = {
		name: 'Rockets',
		desc: 'This is where you can construct your transport to the stars.',
		category: 'general',
		built: 'Not built',
		unlocked: false
	};

	instance.antimatter = {
		name: 'Antimatter',
		desc: 'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100,000 Antimatter per star system owned, as it is incredibly volatile.<br><br><button class="btn btn-default" onclick="toggleAntimatter()">Toggle Antimatter <span id="antimatterToggled">On</span></button>',
		category: 'general',
		unlocked: false
	};

	instance.travel = {
		name: 'Travel',
		desc: 'Here, you can travel across the cosmos to your heart\'s desire. When you explore a star system, it will appear in the respective faction tab, where you can gain control of it for a 25% boost to your production of the resources present. The number in () after the distance is the amount of Antimatter needed to travel there.',
		category: 'general',
		unlocked: false
	};

	instance.military = {
		name: 'Military',
		desc: 'This is where you can build up your fleet of ships to invade other systems. Your total fleet\'s attributes are based on which ships you own. Attack and Defense are added for all your ships, while Speed is averaged (always rounded down). <br><b>NB: When you Invade or Scout a system and fail, you lose all the ships you sent. When you succeed in Invasion, you lose random ships corresponding to the percentage chance to fail. If the chance to succeed is 100%, you lose no ships. You do not lose Scouts when you succeed in Scouting, regardless of chance to fail. Ship costs are lowered appropriately if you have lost ships.</b>',
		category: 'general',
		unlocked: false
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		desc: "A ruthless faction with a fierce hatred of those in power, particularly the Prasnian Empire. They are intransigent in their opposition and focus all their energy on attacking their enemies. Because of this, what they offer consists mostly of upgrades tending towards a more active gameplay.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most interested in maintaining the status quo. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregation is a science-loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful across the galaxy and is motivated by profits, allying with those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist faction bent on galactic conquest. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rockets and interstellar travel.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.overlord = {
		name: "Overlord Cult",
		desc: "This faction is shrouded in mystery. Not much is known except that a great power holds sway over the whole galaxy, seemingly above the other five factions and their 'petty' squabbles. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	return instance;

}());

Game.commsData = (function(){

	var instance = {};

	instance.astroBreakthrough = {
		entryName: 'astroBreakthrough',
		name: 'Astronomical Breakthrough',
		desc: 'A huge problem with the theory of interstellar travel is on the verge of being broken. Make it happen with this upgrade. This is a one-time upgrade, increasing your exploration range by 5 light years.',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		max: 1,
		completed: false,
		cost: {
			'metal': 60000000000,
			'ice': 6000000000,
			'meteorite': 60000000
		},
		defaultCost: {
			'metal': 60000000000,
			'ice': 6000000000,
			'meteorite': 60000000
		}
	};

	instance.IRS = {
		entryName: 'IRS',
		name: 'Interstellar Radar Scanner',
		desc: 'The Overlord gifts you with the technology to discover stars in outer space using the IRS. Each one increases the exploration range by 1 light year.',
		category: 'comms',
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
		name: 'Rocket Ship',
		desc: 'The Rocket Ship can travel to stars across the galaxy, but is unarmed and cannot scout or invade their systems.',
		category: 'rocket',
		max: 1,
		unlocked: true,
		built: false,
		displayNeedsUpdate: true,
		cost: {
			'shield': 50,
			'engine': 25,
			'aero': 15
		}
	};

	return instance;

}());

Game.rocketPartsData = (function(){

	var instance = {};

	instance.shield = {
		name: 'Shield Plating',
		entryName: 'shield',
		desc: 'This plating deflects solar radiation and protects the interior of the ship from the frigid cold of space.',
		category: 'rocketParts',
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
		desc: 'These combine antimatter with matter in a controlled reaction to power a drive that will carry you to the stars.',
		category: 'rocketParts',
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
		desc: 'These allow for easy takeoffs and landings in an atmosphere by reducing air friction.',
		category: 'rocketParts',
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
		category: 'antimatter',
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

Game.militaryData = (function(){

	var instance = {};

	instance.scout = {
		entryName: 'scout',
		name: 'Scout',
		desc: 'Scout ships are the smallest and fastest ships and cost the least of all. Despite their seemingly little worth, their speed is important in battle, and they can still be deadly in numbers.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 3,
			'defense': 2,
			'speed': 15
		},
		cost: {
			'metal': 870000000,
			'gem': 420000000,
			'silver': 390000000
		},
		defaultCost: {
			'metal': 870000000,
			'gem': 420000000,
			'silver': 390000000
		}
	};

	instance.frigate = {
		entryName: 'frigate',
		name: 'Corvette',
		desc: 'Larger than scouts, Corvettes are on the smaller side of space warfare. They have more power than Scouts, but are significantly slower.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 5,
			'defense': 6,
			'speed': 12
		},
		cost: {
			'gold': 930000000,
			'lunarite': 610000000,
			'meteorite': 13000000
		},
		defaultCost: {
			'gold': 930000000,
			'lunarite': 610000000,
			'meteorite': 13000000
		}
	};

	instance.corvette = {
		entryName: 'corvette',
		name: 'Frigate',
		desc: 'The Frigate is a mid-sized ship with decent speed, given its other attributes. What it lacks in defense, it makes up for in attack power and speed, making it a good ship to populate your fleets with.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 8,
			'defense': 4,
			'speed': 10
		},
		cost: {
			'titanium': 1620000000,
			'ice': 1020000000,
			'silicon': 1140000000
		},
		defaultCost: {
			'titanium': 1620000000,
			'ice': 1020000000,
			'silicon': 1140000000
		}
	};

	instance.battlecruiser = {
		entryName: 'battlecruiser',
		name: 'Battlecruiser',
		desc: 'The Battlecruiser is a costly investment, but pays off with a balanced mix of attack power, defense and speed. It is a high-end ship, both in terms of attributes and cost.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 15,
			'defense': 13,
			'speed': 9
		},
		cost: {
			'metal': 4900000000,
			'uranium': 2300000000,
			'hydrogen': 3100000000
		},
		defaultCost: {
			'metal': 4900000000,
			'uranium': 2300000000,
			'hydrogen': 3100000000
		}
	};

	instance.capitalship = {
		entryName: 'capitalship',
		name: 'Battleship',
		desc: 'The Battleship is a defense-heavy ship, but still packs a punch with its high attack power. The main downside is the slow speed, dragging the fleet\'s manoeuvrability down.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 57,
			'defense': 62,
			'speed': 5
		},
		cost: {
			'lunarite': 5300000000,
			'helium': 4600000000,
			'meteorite': 1700000000
		},
		defaultCost: {
			'lunarite': 5300000000,
			'helium': 4600000000,
			'meteorite': 1700000000
		}
	};

	return instance;

}());
