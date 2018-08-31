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
		resource1: "Carbon",
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
		resource2: "Carbon",
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
		resource1: "Carbon",
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

	instance._1501 = {
		name: "G 158-27",
		distance: 15.33,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gold",
		resource2: "Gold",
		stats: {
			"power": 410,
			"defense": 321,
			"speed": 6,
		},
	};

	instance._210501 = {
		name: "V1581 Cygni",
		distance: 15.39,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Meteorite",
		resource2: "Meteorite",
		stats: {
			"power": 479,
			"defense": 563,
			"speed": 14,
		},
	};

	instance._189701 = {
		name: "A",
		distance: 15.76,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Helium",
		resource2: "Gold",
		stats: {
			"power": 708,
			"defense": 278,
			"speed": 10,
		},
	};

	instance._69601 = {
		name: "AD Leonis",
		distance: 16,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Gem",
		resource2: "Titanium",
		stats: {
			"power": 657,
			"defense": 767,
			"speed": 10,
		},
	};

	instance._148501 = {
		name: "CD -49°135",
		distance: 16.1,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Oil",
		resource2: "Methane",
		stats: {
			"power": 443,
			"defense": 384,
			"speed": 15,
		},
	};

	instance._175601 = {
		name: "Keid",
		distance: 16.45,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Wood",
		resource2: "Meteorite",
		stats: {
			"power": 411,
			"defense": 544,
			"speed": 15,
		},
	};

	instance._155801 = {
		name: "EV Lacertae",
		distance: 16.47,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Ice",
		resource2: "Meteorite",
		stats: {
			"power": 633,
			"defense": 589,
			"speed": 5,
		},
	};

	instance._206902 = {
		name: "70 Ophiuchi",
		distance: 16.59,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Hydrogen",
		resource2: "Carbon",
		stats: {
			"power": 602,
			"defense": 555,
			"speed": 11,
		},
	};

	instance._136701 = {
		name: "Altair",
		distance: 16.77,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Methane",
		resource2: "Metal",
		stats: {
			"power": 559,
			"defense": 388,
			"speed": 6,
		},
	};

	instance._166402 = {
		name: "B",
		distance: 17,
		planets: 3,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Helium",
		resource2: "Methane",
		stats: {
			"power": 539,
			"defense": 511,
			"speed": 10,
		},
	};

	instance._185101 = {
		name: "A",
		distance: 17.05,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Gold",
		resource2: "Gold",
		stats: {
			"power": 802,
			"defense": 792,
			"speed": 10,
		},
	};

	instance._79901 = {
		name: "AC +79°388",
		distance: 17.58,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Carbon",
		resource2: "Gold",
		stats: {
			"power": 956,
			"defense": 615,
			"speed": 6,
		},
	};

	instance._95001 = {
		name: "BD +15°262",
		distance: 17.71,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Titanium",
		resource2: "Meteorite",
		stats: {
			"power": 595,
			"defense": 664,
			"speed": 8,
		},
	};

	instance._175901 = {
		name: "A",
		distance: 17.98,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Helium",
		resource2: "Meteorite",
		stats: {
			"power": 540,
			"defense": 332,
			"speed": 12,
		},
	};

	instance._175902 = {
		name: "B",
		distance: 17.98,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Hydrogen",
		resource2: "Wood",
		stats: {
			"power": 1247,
			"defense": 589,
			"speed": 9,
		},
	};

	instance._37601 = {
		name: "BD -3°1123",
		distance: 18.56,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Ice",
		resource2: "Meteorite",
		stats: {
			"power": 706,
			"defense": 729,
			"speed": 14,
		},
	};

	instance._133601 = {
		name: "L 347-14",
		distance: 18.56,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Titanium",
		resource2: "Methane",
		stats: {
			"power": 471,
			"defense": 749,
			"speed": 8,
		},
	};

	instance._203902 = {
		name: "B",
		distance: 18.72,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Wood",
		resource2: "Uranium",
		stats: {
			"power": 873,
			"defense": 1048,
			"speed": 11,
		},
	};

	instance._135801 = {
		name: "Sigma Draconis",
		distance: 18.81,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Uranium",
		resource2: "Meteorite",
		stats: {
			"power": 635,
			"defense": 664,
			"speed": 12,
		},
	};

	instance._39101 = {
		name: "Ross 47",
		distance: 18.88,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Ice",
		resource2: "Lunarite",
		stats: {
			"power": 1396,
			"defense": 698,
			"speed": 14,
		},
	};

	instance._123401 = {
		name: "L 205-128",
		distance: 18.95,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Carbon",
		resource2: "Silicon",
		stats: {
			"power": 1415,
			"defense": 525,
			"speed": 13,
		},
	};

	instance._56501 = {
		name: "L 674-15",
		distance: 19.19,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Oil",
		resource2: "Gem",
		stats: {
			"power": 370,
			"defense": 507,
			"speed": 14,
		},
	};

	instance._200001 = {
		name: "A",
		distance: 19.26,
		planets: 4,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Gold",
		resource2: "Meteorite",
		stats: {
			"power": 1176,
			"defense": 612,
			"speed": 10,
		},
	};

	instance._107001 = {
		name: "CD -40°971",
		distance: 19.35,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Gold",
		resource2: "Hydrogen",
		stats: {
			"power": 805,
			"defense": 587,
			"speed": 11,
		},
	};

	instance._167801 = {
		name: "Eta Cassiopeiae",
		distance: 19.42,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Oil",
		resource2: "Metal",
		stats: {
			"power": 762,
			"defense": 511,
			"speed": 15,
		},
	};

	instance._204801 = {
		name: "36 Ophiuchi",
		distance: 19.47,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Silicon",
		resource2: "Gem",
		stats: {
			"power": 1496,
			"defense": 1070,
			"speed": 13,
		},
	};

	instance._164301 = {
		name: "BD +1°4774",
		distance: 19.47,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gem",
		resource2: "Silver",
		stats: {
			"power": 497,
			"defense": 424,
			"speed": 7,
		},
	};

	instance._211202 = {
		name: "B",
		distance: 19.74,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Methane",
		resource2: "Silver",
		stats: {
			"power": 1331,
			"defense": 554,
			"speed": 14,
		},
	};

	instance._24201 = {
		name: "82 Eridani",
		distance: 19.77,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Gold",
		resource2: "Lunarite",
		stats: {
			"power": 595,
			"defense": 956,
			"speed": 14,
		},
	};

	instance._100801 = {
		name: "BD -11°375",
		distance: 19.95,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Metal",
		resource2: "Titanium",
		stats: {
			"power": 1095,
			"defense": 685,
			"speed": 8,
		},
	};

	instance._124101 = {
		name: "EG 372",
		distance: 20.03,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Hydrogen",
		resource2: "Ice",
		stats: {
			"power": 863,
			"defense": 583,
			"speed": 6,
		},
	};

	instance._139701 = {
		name: "CD -45°136",
		distance: 20.24,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Methane",
		resource2: "Silicon",
		stats: {
			"power": 1624,
			"defense": 1208,
			"speed": 12,
		},
	};

	instance._103201 = {
		name: "LP 914-54",
		distance: 20.26,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Hydrogen",
		resource2: "Methane",
		stats: {
			"power": 857,
			"defense": 927,
			"speed": 5,
		},
	};

	instance._219102 = {
		name: "EQ Pegasi",
		distance: 20.38,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Wood",
		resource2: "Meteorite",
		stats: {
			"power": 1232,
			"defense": 921,
			"speed": 11,
		},
	};

	instance._105801 = {
		name: "HO Librae",
		distance: 20.45,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Lunarite",
		resource2: "Hydrogen",
		stats: {
			"power": 1478,
			"defense": 1182,
			"speed": 7,
		},
	};

	instance._204702 = {
		name: "B",
		distance: 20.62,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Ice",
		resource2: "Helium",
		stats: {
			"power": 550,
			"defense": 863,
			"speed": 15,
		},
	};

	instance._50401 = {
		name: "QY Aurigae",
		distance: 20.74,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Lava",
		resource2: "Gem",
		stats: {
			"power": 1439,
			"defense": 863,
			"speed": 12,
		},
	};

	instance._116901 = {
		name: "Wolf 629",
		distance: 21.18,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Oil",
		resource2: "Lunarite",
		stats: {
			"power": 1570,
			"defense": 577,
			"speed": 10,
		},
	};

	instance._159101 = {
		name: "BD +56°296",
		distance: 21.28,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Helium",
		resource2: "Lunarite",
		stats: {
			"power": 830,
			"defense": 652,
			"speed": 6,
		},
	};

	instance._113301 = {
		name: "Gl 625",
		distance: 21.47,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Hydrogen",
		resource2: "Metal",
		stats: {
			"power": 1769,
			"defense": 631,
			"speed": 14,
		},
	};

	instance._74001 = {
		name: "AC +23°468",
		distance: 21.61,
		planets: 4,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Hydrogen",
		resource2: "Titanium",
		stats: {
			"power": 1494,
			"defense": 1183,
			"speed": 7,
		},
	};

	instance._199602 = {
		name: "Xi Boötis",
		distance: 21.85,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Silver",
		resource2: "Titanium",
		stats: {
			"power": 1518,
			"defense": 606,
			"speed": 5,
		},
	};

	instance._148101 = {
		name: "AC +17°534",
		distance: 21.99,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Carbon",
		resource2: "Gem",
		stats: {
			"power": 1817,
			"defense": 977,
			"speed": 5,
		},
	};

	instance._224201 = {
		name: "A",
		distance: 22.37,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Silver",
		resource2: "Metal",
		stats: {
			"power": 1275,
			"defense": 672,
			"speed": 11,
		},
	};

	instance._224202 = {
		name: "B",
		distance: 22.37,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Titanium",
		resource2: "Hydrogen",
		stats: {
			"power": 1841,
			"defense": 1155,
			"speed": 10,
		},
	};

	instance._157301 = {
		name: "BD +15°473",
		distance: 22.45,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Silicon",
		resource2: "Ice",
		stats: {
			"power": 852,
			"defense": 606,
			"speed": 13,
		},
	};

	instance._72601 = {
		name: "Wolf 358",
		distance: 22.48,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Hydrogen",
		resource2: "Silver",
		stats: {
			"power": 1244,
			"defense": 1466,
			"speed": 15,
		},
	};

	instance._205101 = {
		name: "A",
		distance: 22.74,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Helium",
		resource2: "Titanium",
		stats: {
			"power": 747,
			"defense": 1117,
			"speed": 11,
		},
	};

	instance._205102 = {
		name: "B",
		distance: 22.74,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Silicon",
		resource2: "Silver",
		stats: {
			"power": 1190,
			"defense": 810,
			"speed": 9,
		},
	};

	instance._144001 = {
		name: "BD +61°206",
		distance: 22.98,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Helium",
		resource2: "Methane",
		stats: {
			"power": 1488,
			"defense": 1031,
			"speed": 12,
		},
	};

	instance._224801 = {
		name: "LP 944-20",
		distance: 23.5,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Silicon",
		resource2: "Titanium",
		stats: {
			"power": 1608,
			"defense": 566,
			"speed": 14,
		},
	};

	instance._162501 = {
		name: "GJ 1286",
		distance: 23.53,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Oil",
		resource2: "Meteorite",
		stats: {
			"power": 1393,
			"defense": 773,
			"speed": 5,
		},
	};

	instance._71001 = {
		name: "BD +1°2447",
		distance: 23.59,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Helium",
		resource2: "Silver",
		stats: {
			"power": 792,
			"defense": 1615,
			"speed": 12,
		},
	};

	instance._222201 = {
		name: "G 258-33",
		distance: 23.76,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Uranium",
		resource2: "Silver",
		stats: {
			"power": 718,
			"defense": 863,
			"speed": 15,
		},
	};

	instance._207501 = {
		name: "A",
		distance: 23.98,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Metal",
		resource2: "Carbon",
		stats: {
			"power": 713,
			"defense": 1513,
			"speed": 13,
		},
	};

	instance._222301 = {
		name: "L 788-34",
		distance: 24.32,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Hydrogen",
		resource2: "Uranium",
		stats: {
			"power": 2311,
			"defense": 1758,
			"speed": 8,
		},
	};

	instance._6301 = {
		name: "BD +4°123",
		distance: 24.33,
		planets: 3,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Titanium",
		resource2: "Lava",
		stats: {
			"power": 1168,
			"defense": 722,
			"speed": 11,
		},
	};

	instance._4001 = {
		name: "Beta Hydri",
		distance: 24.38,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Ice",
		resource2: "Silicon",
		stats: {
			"power": 1337,
			"defense": 775,
			"speed": 14,
		},
	};

	instance._3901 = {
		name: "GJ 2005",
		distance: 24.56,
		planets: 3,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Lava",
		resource2: "Uranium",
		stats: {
			"power": 1181,
			"defense": 671,
			"speed": 9,
		},
	};

	instance._168301 = {
		name: "Mu Cassiopeiae",
		distance: 24.63,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Lunarite",
		resource2: "Lunarite",
		stats: {
			"power": 1253,
			"defense": 1759,
			"speed": 14,
		},
	};

	instance._168302 = {
		name: "Mu Cassiopeiae",
		distance: 24.63,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Ice",
		resource2: "Oil",
		stats: {
			"power": 2228,
			"defense": 1446,
			"speed": 13,
		},
	};

	instance._92801 = {
		name: "BD +11°257",
		distance: 24.88,
		planets: 3,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Methane",
		resource2: "Carbon",
		stats: {
			"power": 2461,
			"defense": 1301,
			"speed": 7,
		},
	};

	instance._172701 = {
		name: "A",
		distance: 24.9,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Methane",
		resource2: "Helium",
		stats: {
			"power": 2333,
			"defense": 972,
			"speed": 6,
		},
	};

	instance._157201 = {
		name: "TW Piscis Austrini",
		distance: 24.91,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Oil",
		resource2: "Methane",
		stats: {
			"power": 1093,
			"defense": 1746,
			"speed": 5,
		},
	};

	instance._86401 = {
		name: "L 399-68",
		distance: 24.99,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Titanium",
		resource2: "Lunarite",
		stats: {
			"power": 1867,
			"defense": 920,
			"speed": 8,
		},
	};

	instance._120901 = {
		name: "BD +2°3312",
		distance: 25.18,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Lava",
		resource2: "Meteorite",
		stats: {
			"power": 900,
			"defense": 988,
			"speed": 11,
		},
	};

	instance._128901 = {
		name: "Vega",
		distance: 25.3,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Helium",
		resource2: "Methane",
		stats: {
			"power": 2389,
			"defense": 1753,
			"speed": 6,
		},
	};

	instance._125301 = {
		name: "BD -3°4233",
		distance: 25.43,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Metal",
		resource2: "Ice",
		stats: {
			"power": 2583,
			"defense": 1775,
			"speed": 11,
		},
	};

	instance._68401 = {
		name: "BD -3°2870",
		distance: 25.48,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Oil",
		resource2: "Meteorite",
		stats: {
			"power": 2297,
			"defense": 1156,
			"speed": 9,
		},
	};

	instance._141101 = {
		name: "AC +65°695",
		distance: 25.96,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Ice",
		resource2: "Lunarite",
		stats: {
			"power": 2177,
			"defense": 1625,
			"speed": 11,
		},
	};

	instance._214301 = {
		name: "A",
		distance: 25.97,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Carbon",
		resource2: "Uranium",
		stats: {
			"power": 1861,
			"defense": 1698,
			"speed": 14,
		},
	};

	instance._40801 = {
		name: "W 290",
		distance: 26.07,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Methane",
		resource2: "Metal",
		stats: {
			"power": 1566,
			"defense": 1944,
			"speed": 9,
		},
	};

	instance._180502 = {
		name: "B",
		distance: 26.17,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Wood",
		resource2: "Metal",
		stats: {
			"power": 1908,
			"defense": 980,
			"speed": 11,
		},
	};

	instance._113101 = {
		name: "AC +48°159",
		distance: 26.23,
		planets: 3,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gold",
		resource2: "Methane",
		stats: {
			"power": 2375,
			"defense": 1583,
			"speed": 9,
		},
	};

	instance._207301 = {
		name: "Chi Draconis",
		distance: 26.28,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Titanium",
		resource2: "Wood",
		stats: {
			"power": 944,
			"defense": 1168,
			"speed": 5,
		},
	};

	instance._30701 = {
		name: "L 302-89",
		distance: 26.52,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Wood",
		resource2: "Carbon",
		stats: {
			"power": 1231,
			"defense": 1786,
			"speed": 11,
		},
	};

	instance._89101 = {
		name: "Wolf 461",
		distance: 26.56,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Titanium",
		resource2: "Oil",
		stats: {
			"power": 1939,
			"defense": 1945,
			"speed": 14,
		},
	};

	instance._169601 = {
		name: "P Eridani",
		distance: 26.57,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Gem",
		resource2: "Silicon",
		stats: {
			"power": 1903,
			"defense": 1859,
			"speed": 13,
		},
	};

	instance._208702 = {
		name: "B",
		distance: 26.6,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Silicon",
		resource2: "Wood",
		stats: {
			"power": 1034,
			"defense": 1838,
			"speed": 10,
		},
	};

	instance._93901 = {
		name: "Wolf 489",
		distance: 26.69,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Oil",
		resource2: "Ice",
		stats: {
			"power": 1426,
			"defense": 1905,
			"speed": 14,
		},
	};

	instance._85501 = {
		name: "Beta Canum Venaticorum",
		distance: 27.3,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Meteorite",
		resource2: "Titanium",
		stats: {
			"power": 1049,
			"defense": 1778,
			"speed": 8,
		},
	};

	instance._79201 = {
		name: "CPD -51°44",
		distance: 27.41,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Silver",
		resource2: "Silver",
		stats: {
			"power": 946,
			"defense": 1465,
			"speed": 15,
		},
	};

	instance._193402 = {
		name: "B",
		distance: 27.59,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Hydrogen",
		resource2: "Carbon",
		stats: {
			"power": 1250,
			"defense": 1062,
			"speed": 11,
		},
	};

	instance._202902 = {
		name: "B",
		distance: 27.63,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Gem",
		resource2: "Metal",
		stats: {
			"power": 1261,
			"defense": 1135,
			"speed": 5,
		},
	};

	instance._177001 = {
		name: "A",
		distance: 27.79,
		planets: 3,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Carbon",
		resource2: "Hydrogen",
		stats: {
			"power": 1184,
			"defense": 2279,
			"speed": 12,
		},
	};

	instance._68301 = {
		name: "L 968-22",
		distance: 27.81,
		planets: 3,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Ice",
		resource2: "Uranium",
		stats: {
			"power": 2065,
			"defense": 958,
			"speed": 10,
		},
	};

	instance._80501 = {
		name: "BD +36°221",
		distance: 27.9,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Wood",
		resource2: "Metal",
		stats: {
			"power": 897,
			"defense": 2072,
			"speed": 13,
		},
	};

	instance._157101 = {
		name: "L 49-19",
		distance: 28.11,
		planets: 4,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Oil",
		resource2: "Helium",
		stats: {
			"power": 1781,
			"defense": 1088,
			"speed": 6,
		},
	};

	instance._217202 = {
		name: "FK Aquarii",
		distance: 28.19,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Meteorite",
		resource2: "Uranium",
		stats: {
			"power": 2289,
			"defense": 1983,
			"speed": 15,
		},
	};

	instance._178501 = {
		name: "Chi(1) Orionis",
		distance: 28.26,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Hydrogen",
		resource2: "Uranium",
		stats: {
			"power": 2207,
			"defense": 1031,
			"speed": 6,
		},
	};

	instance._180101 = {
		name: "A",
		distance: 28.38,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Methane",
		resource2: "Gem",
		stats: {
			"power": 1870,
			"defense": 1624,
			"speed": 8,
		},
	};

	instance._77301 = {
		name: "WD 1126+18",
		distance: 28.61,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Lunarite",
		resource2: "Carbon",
		stats: {
			"power": 1216,
			"defense": 2159,
			"speed": 11,
		},
	};

	instance._205001 = {
		name: "A",
		distance: 28.66,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Uranium",
		resource2: "Silver",
		stats: {
			"power": 2555,
			"defense": 1812,
			"speed": 7,
		},
	};

	instance._13401 = {
		name: "A",
		distance: 28.66,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Silicon",
		resource2: "Metal",
		stats: {
			"power": 2684,
			"defense": 902,
			"speed": 7,
		},
	};

	instance._34201 = {
		name: "BD -5°1123",
		distance: 28.75,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Carbon",
		resource2: "Silver",
		stats: {
			"power": 3086,
			"defense": 1715,
			"speed": 6,
		},
	};

	instance._208601 = {
		name: "A",
		distance: 28.91,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Carbon",
		resource2: "Methane",
		stats: {
			"power": 2312,
			"defense": 2295,
			"speed": 13,
		},
	};

	instance._84201 = {
		name: "Ross 695",
		distance: 28.99,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Hydrogen",
		resource2: "Methane",
		stats: {
			"power": 2628,
			"defense": 1914,
			"speed": 6,
		},
	};

	instance._182101 = {
		name: "A",
		distance: 29.12,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Silicon",
		resource2: "Gold",
		stats: {
			"power": 1192,
			"defense": 1832,
			"speed": 6,
		},
	};

	instance._178401 = {
		name: "Gamma Leporis",
		distance: 29.25,
		planets: 3,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Silver",
		resource2: "Hydrogen",
		stats: {
			"power": 3295,
			"defense": 1540,
			"speed": 13,
		},
	};

	instance._107601 = {
		name: "L 768-119",
		distance: 29.38,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Helium",
		resource2: "Silicon",
		stats: {
			"power": 2195,
			"defense": 1127,
			"speed": 5,
		},
	};

	instance._78101 = {
		name: "CD -31°911",
		distance: 29.48,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Wood",
		resource2: "Hydrogen",
		stats: {
			"power": 1211,
			"defense": 2494,
			"speed": 15,
		},
	};

	instance._76401 = {
		name: "SZ Ursae Majoris",
		distance: 29.66,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Titanium",
		resource2: "Carbon",
		stats: {
			"power": 2969,
			"defense": 1045,
			"speed": 11,
		},
	};

	instance._192101 = {
		name: "A",
		distance: 29.87,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Wood",
		resource2: "Carbon",
		stats: {
			"power": 2350,
			"defense": 2425,
			"speed": 9,
		},
	};

	instance._24001 = {
		name: "Kappa Ceti",
		distance: 29.87,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Lava",
		resource2: "Helium",
		stats: {
			"power": 1036,
			"defense": 1460,
			"speed": 12,
		},
	};

	instance._16601 = {
		name: "A",
		distance: 30.06,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Hydrogen",
		resource2: "Gem",
		stats: {
			"power": 1761,
			"defense": 1234,
			"speed": 5,
		},
	};

	instance._191701 = {
		name: "A",
		distance: 30.14,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gem",
		resource2: "Carbon",
		stats: {
			"power": 2828,
			"defense": 1442,
			"speed": 5,
		},
	};

	instance._123501 = {
		name: "BD +43°279",
		distance: 30.95,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Carbon",
		resource2: "Carbon",
		stats: {
			"power": 2844,
			"defense": 1816,
			"speed": 12,
		},
	};

	instance._32301 = {
		name: "L 879-14",
		distance: 31.03,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Wood",
		resource2: "Wood",
		stats: {
			"power": 1018,
			"defense": 1797,
			"speed": 8,
		},
	};

	instance._191401 = {
		name: "A",
		distance: 31.11,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Meteorite",
		resource2: "Uranium",
		stats: {
			"power": 3584,
			"defense": 2215,
			"speed": 15,
		},
	};

	instance._118301 = {
		name: "Wolf 636",
		distance: 31.18,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Gold",
		resource2: "Wood",
		stats: {
			"power": 3351,
			"defense": 2096,
			"speed": 13,
		},
	};

	instance._27501 = {
		name: "A",
		distance: 31.36,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Helium",
		resource2: "Ice",
		stats: {
			"power": 1490,
			"defense": 1216,
			"speed": 15,
		},
	};

	instance._85901 = {
		name: "CD -51°685",
		distance: 31.5,
		planets: 3,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Lunarite",
		resource2: "Metal",
		stats: {
			"power": 1673,
			"defense": 1609,
			"speed": 15,
		},
	};

	instance._18501 = {
		name: "A",
		distance: 31.85,
		planets: 4,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Wood",
		resource2: "Meteorite",
		stats: {
			"power": 1368,
			"defense": 2485,
			"speed": 6,
		},
	};

	instance._121601 = {
		name: "CPD -48°93",
		distance: 31.88,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Metal",
		resource2: "Ice",
		stats: {
			"power": 1751,
			"defense": 2344,
			"speed": 15,
		},
	};

	instance._199801 = {
		name: "CE Boötis",
		distance: 32.01,
		planets: 5,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Uranium",
		resource2: "Silver",
		stats: {
			"power": 3811,
			"defense": 1989,
			"speed": 7,
		},
	};

	instance._141901 = {
		name: "G 144-25",
		distance: 32.1,
		planets: 4,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Gem",
		resource2: "Metal",
		stats: {
			"power": 2373,
			"defense": 2562,
			"speed": 8,
		},
	};

	instance._5201 = {
		name: "W 246",
		distance: 32.36,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Methane",
		resource2: "Ice",
		stats: {
			"power": 2105,
			"defense": 2952,
			"speed": 14,
		},
	};

	instance._13801 = {
		name: "A",
		distance: 32.54,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Carbon",
		resource2: "Gold",
		stats: {
			"power": 3103,
			"defense": 2163,
			"speed": 12,
		},
	};

	instance._37101 = {
		name: "Ross 41",
		distance: 32.71,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Silver",
		resource2: "Silver",
		stats: {
			"power": 3279,
			"defense": 2710,
			"speed": 10,
		},
	};

	instance._223701 = {
		name: "BD+62°1325",
		distance: 32.98,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Helium",
		resource2: "Gold",
		stats: {
			"power": 3065,
			"defense": 2290,
			"speed": 8,
		},
	};

	instance._166901 = {
		name: "V547 Cassiopeiae",
		distance: 33.03,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Gem",
		resource2: "Silver",
		stats: {
			"power": 3696,
			"defense": 1445,
			"speed": 14,
		},
	};

	instance._166903 = {
		name: "V547 Cassiopeiae",
		distance: 33.03,
		planets: 3,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Silicon",
		resource2: "Methane",
		stats: {
			"power": 3965,
			"defense": 2348,
			"speed": 7,
		},
	};

	instance._42501 = {
		name: "Alpha Mensae",
		distance: 33.1,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Gold",
		resource2: "Hydrogen",
		stats: {
			"power": 3316,
			"defense": 3166,
			"speed": 11,
		},
	};

	instance._80901 = {
		name: "CD -26°888",
		distance: 33.23,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Methane",
		resource2: "Titanium",
		stats: {
			"power": 1455,
			"defense": 3056,
			"speed": 6,
		},
	};

	instance._32101 = {
		name: "BD +52°857",
		distance: 33.24,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Silver",
		resource2: "Meteorite",
		stats: {
			"power": 2028,
			"defense": 2434,
			"speed": 11,
		},
	};

	instance._215902 = {
		name: "B",
		distance: 33.25,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Uranium",
		resource2: "Titanium",
		stats: {
			"power": 4146,
			"defense": 2027,
			"speed": 8,
		},
	};

	instance._199702 = {
		name: "B",
		distance: 33.34,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Methane",
		resource2: "Silver",
		stats: {
			"power": 4019,
			"defense": 1982,
			"speed": 12,
		},
	};

	instance._212102 = {
		name: "B",
		distance: 33.35,
		planets: 4,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Gold",
		resource2: "Ice",
		stats: {
			"power": 1144,
			"defense": 1466,
			"speed": 7,
		},
	};

	instance._21001 = {
		name: "A",
		distance: 33.63,
		planets: 4,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Methane",
		resource2: "Meteorite",
		stats: {
			"power": 2811,
			"defense": 1846,
			"speed": 7,
		},
	};

	instance._117501 = {
		name: "BD +25°317",
		distance: 33.66,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		resource1: "Silver",
		resource2: "Carbon",
		stats: {
			"power": 2373,
			"defense": 2370,
			"speed": 7,
		},
	};

	instance._62901 = {
		name: "W 250",
		distance: 33.73,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Meteorite",
		resource2: "Hydrogen",
		stats: {
			"power": 2835,
			"defense": 3390,
			"speed": 8,
		},
	};

	instance._178302 = {
		name: "Riepe's Double",
		distance: 33.73,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Methane",
		resource2: "Methane",
		stats: {
			"power": 3481,
			"defense": 1638,
			"speed": 13,
		},
	};

	instance._21601 = {
		name: "EP Eridani",
		distance: 33.86,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Oil",
		resource2: "Hydrogen",
		stats: {
			"power": 2901,
			"defense": 2952,
			"speed": 14,
		},
	};

	instance._190502 = {
		name: "Xi Ursae Majoris",
		distance: 33.98,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Silver",
		resource2: "Lunarite",
		stats: {
			"power": 3897,
			"defense": 1867,
			"speed": 6,
		},
	};

	instance._77801 = {
		name: "L 396-7",
		distance: 34.17,
		planets: 3,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Uranium",
		resource2: "Hydrogen",
		stats: {
			"power": 3402,
			"defense": 2740,
			"speed": 14,
		},
	};

	instance._63801 = {
		name: "L 140-9",
		distance: 34.2,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Ice",
		resource2: "Oil",
		stats: {
			"power": 2548,
			"defense": 2405,
			"speed": 15,
		},
	};

	instance._99701 = {
		name: "LP 271-25",
		distance: 34.33,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Ice",
		resource2: "Ice",
		stats: {
			"power": 3812,
			"defense": 2495,
			"speed": 10,
		},
	};

	instance._176802 = {
		name: "B",
		distance: 34.33,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		resource1: "Gem",
		resource2: "Titanium",
		stats: {
			"power": 4481,
			"defense": 2620,
			"speed": 13,
		},
	};

	instance._187202 = {
		name: "B",
		distance: 34.35,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		resource1: "Silicon",
		resource2: "Gem",
		stats: {
			"power": 4233,
			"defense": 2482,
			"speed": 15,
		},
	};

	instance._32201 = {
		name: "BD -11°916",
		distance: 34.7,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Silver",
		resource2: "Silver",
		stats: {
			"power": 4755,
			"defense": 2729,
			"speed": 15,
		},
	};

	instance._74801 = {
		name: "CD -23°976",
		distance: 34.86,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		resource1: "Gem",
		resource2: "Helium",
		stats: {
			"power": 2973,
			"defense": 1585,
			"speed": 9,
		},
	};

	instance._205201 = {
		name: "V645 Herculis",
		distance: 34.96,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		resource1: "Uranium",
		resource2: "Lava",
		stats: {
			"power": 2987,
			"defense": 2014,
			"speed": 13,
		},
	};

	return instance;

}());