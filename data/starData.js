Game.starData = (function(){

	var instance = {};

	instance._201 = {
		name: "Alpha Centauri",
		distance: 4.3,
		planets: 1,
		faction: "Hyacinite Congregation",
		factionId: "hyacinite",
		resource1: "Ice",
		resource2: "Hydrogen",
		stats: {
			"power": 30,
			"defense": 20,
			"speed": 5,
		},
	};

	instance._301 = {
		name: "Barnard's Star",
		distance: 5.94,
		planets: 0,
		faction: "Carnelian Resistance",
		factionId: "carnelian",
		resource1: "Hydrogen",
		resource2: "Helium",
		stats: {
			"power": 52,
			"defense": 49,
			"speed": 6,
		},
	};

	instance._401 = {
		name: "CN Leonis",
		distance: 7.8,
		planets: 1,
		faction: "Prasnian Empire",
		factionId: "prasnian",
		resource1: "Lunarite",
		resource2: "Gem",
		stats: {
			"power": 86,
			"defense": 71,
			"speed": 8,
		},
	};

	instance._501 = {
		name: "Lalande 21185",
		distance: 8.31,
		planets: 1,
		faction: "Kitrinos Corporation",
		factionId: "kitrinos",
		resource1: "Titanium",
		resource2: "Silicon",
		stats: {
			"power": 132,
			"defense": 117,
			"speed": 8,
		},
	};

	instance._701 = {
		name: "BL Ceti",
		distance: 8.55,
		planets: 1,
		faction: "Moviton Syndicate",
		factionId: "moviton",
		resource1: "Charcoal",
		resource2: "Methane",
		stats: {
			"power": 146,
			"defense": 131,
			"speed": 10,
		},
	};

	instance._601 = {
		name: "Sirius",
		distance: 8.6,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Silicon",
		resource2: "Methane",
		stats: {
			"power": 110,
			"defense": 129,
			"speed": 8,
		},
	};

	instance._130601 = {
		name: "V1216 Sagittarii",
		distance: 9.69,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Gold",
		resource2: "Lava",
		stats: {
			"power": 144,
			"defense": 229,
			"speed": 12,
		},
	};

	instance._163901 = {
		name: "Ross 248",
		distance: 10.33,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Uranium",
		resource2: "Methane",
		stats: {
			"power": 273,
			"defense": 226,
			"speed": 15,
		},
	};

	instance._25101 = {
		name: "Epsilon Eridani",
		distance: 10.5,
		planets: 5,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Hydrogen",
		resource2: "Metal",
		stats: {
			"power": 293,
			"defense": 112,
			"speed": 13,
		},
	};

	instance._158101 = {
		name: "Lac 9352",
		distance: 10.73,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Oil",
		resource2: "Lava",
		stats: {
			"power": 443,
			"defense": 147,
			"speed": 7,
		},
	};

	instance._80101 = {
		name: "FI Virginis",
		distance: 10.89,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Hydrogen",
		resource2: "Helium",
		stats: {
			"power": 125,
			"defense": 198,
			"speed": 11,
		},
	};

	instance._217101 = {
		name: "EZ Aquarii",
		distance: 11.08,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Silver",
		resource2: "Metal",
		stats: {
			"power": 420,
			"defense": 143,
			"speed": 12,
		},
	};

	instance._181901 = {
		name: "Procyon",
		distance: 11.41,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gem",
		resource2: "Charcoal",
		stats: {
			"power": 397,
			"defense": 381,
			"speed": 5,
		},
	};

	instance._213301 = {
		name: "61 Cygni",
		distance: 11.43,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Uranium",
		resource2: "Ice",
		stats: {
			"power": 289,
			"defense": 177,
			"speed": 11,
		},
	};

	instance._207601 = {
		name: "A",
		distance: 11.64,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Helium",
		resource2: "Lunarite",
		stats: {
			"power": 203,
			"defense": 238,
			"speed": 7,
		},
	};

	instance._166701 = {
		name: "GX Andromedae",
		distance: 11.64,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Meteorite",
		resource2: "Silver",
		stats: {
			"power": 331,
			"defense": 286,
			"speed": 6,
		},
	};

	instance._224601 = {
		name: "SIPS 1259-",
		distance: 11.8,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Methane",
		resource2: "Gold",
		stats: {
			"power": 513,
			"defense": 164,
			"speed": 9,
		},
	};

	instance._58601 = {
		name: "DX Cancri",
		distance: 11.83,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Helium",
		resource2: "Methane",
		stats: {
			"power": 427,
			"defense": 184,
			"speed": 11,
		},
	};

	instance._151801 = {
		name: "Epsilon Indi",
		distance: 11.83,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gem",
		resource2: "Oil",
		stats: {
			"power": 317,
			"defense": 202,
			"speed": 8,
		},
	};

	instance._13601 = {
		name: "Tau Ceti",
		distance: 11.9,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Silicon",
		resource2: "Silicon",
		stats: {
			"power": 491,
			"defense": 413,
			"speed": 6,
		},
	};

	instance._25401 = {
		name: "A",
		distance: 11.94,
		planets: 4,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Uranium",
		resource2: "Gem",
		stats: {
			"power": 207,
			"defense": 372,
			"speed": 11,
		},
	};

	instance._10101 = {
		name: "YZ Ceti",
		distance: 12.2,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Gold",
		resource2: "Hydrogen",
		stats: {
			"power": 506,
			"defense": 334,
			"speed": 15,
		},
	};

	instance._51801 = {
		name: "Luyten's Star",
		distance: 12.39,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Uranium",
		resource2: "Titanium",
		stats: {
			"power": 320,
			"defense": 355,
			"speed": 7,
		},
	};

	instance._223901 = {
		name: "SO25300.5+165258",
		distance: 12.4,
		planets: 4,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Silver",
		resource2: "Meteorite",
		stats: {
			"power": 530,
			"defense": 337,
			"speed": 14,
		},
	};

	instance._35801 = {
		name: "Kapteyn's Star",
		distance: 12.78,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Lava",
		resource2: "Silver",
		stats: {
			"power": 468,
			"defense": 285,
			"speed": 10,
		},
	};

	instance._146301 = {
		name: "AX Microscopii",
		distance: 12.87,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Meteorite",
		resource2: "Silver",
		stats: {
			"power": 311,
			"defense": 466,
			"speed": 6,
		},
	};

	instance._216801 = {
		name: "DO Cephei",
		distance: 13.07,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Lunarite",
		resource2: "Ice",
		stats: {
			"power": 526,
			"defense": 490,
			"speed": 9,
		},
	};

	instance._224101 = {
		name: "DENIS 1048",
		distance: 13.16,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Wood",
		resource2: "Metal",
		stats: {
			"power": 587,
			"defense": 285,
			"speed": 12,
		},
	};

	instance._179501 = {
		name: "V577 Monoceri",
		distance: 13.47,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Charcoal",
		resource2: "Lava",
		stats: {
			"power": 430,
			"defense": 411,
			"speed": 7,
		},
	};

	instance._114001 = {
		name: "Wolf 1061",
		distance: 13.91,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Metal",
		resource2: "Meteorite",
		stats: {
			"power": 705,
			"defense": 479,
			"speed": 11,
		},
	};

	instance._194201 = {
		name: "A",
		distance: 14.05,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Silver",
		resource2: "Lava",
		stats: {
			"power": 460,
			"defense": 465,
			"speed": 10,
		},
	};

	instance._6501 = {
		name: "van Maanen's Star",
		distance: 14.13,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Gold",
		resource2: "Silicon",
		stats: {
			"power": 588,
			"defense": 522,
			"speed": 8,
		},
	};

	instance._1101 = {
		name: "-37°15492",
		distance: 14.22,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Silicon",
		resource2: "Methane",
		stats: {
			"power": 779,
			"defense": 410,
			"speed": 10,
		},
	};

	instance._15301 = {
		name: "A",
		distance: 14.57,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Metal",
		resource2: "Hydrogen",
		stats: {
			"power": 568,
			"defense": 229,
			"speed": 15,
		},
	};

	instance._222401 = {
		name: "L 143-23",
		distance: 14.65,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Lava",
		resource2: "Methane",
		stats: {
			"power": 527,
			"defense": 239,
			"speed": 6,
		},
	};

	instance._72501 = {
		name: "LP 731-58",
		distance: 14.76,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Uranium",
		resource2: "Lava",
		stats: {
			"power": 620,
			"defense": 612,
			"speed": 15,
		},
	};

	instance._122601 = {
		name: "AOe 17415-",
		distance: 14.77,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Lunarite",
		resource2: "Lunarite",
		stats: {
			"power": 426,
			"defense": 317,
			"speed": 12,
		},
	};

	instance._121101 = {
		name: "Gliese 674",
		distance: 14.8,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Methane",
		resource2: "Hydrogen",
		stats: {
			"power": 750,
			"defense": 567,
			"speed": 14,
		},
	};

	instance._79501 = {
		name: "CC 658",
		distance: 15.07,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Lunarite",
		resource2: "Silver",
		stats: {
			"power": 675,
			"defense": 565,
			"speed": 8,
		},
	};

	return instance;

}());


