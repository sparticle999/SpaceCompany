Game.achievementsCategoryData = (function () {

	var instance = {};

	instance.resources = {
		title: 'Resources',
		brackets: Game.constants.achievementResourceBrackets,
		entries: [
		'resUranium', 'resLava',
		'resOil', 'resMetal', 'resGems', 'resCarbon', 'resWood', 'resSilicon',
		'resLunarite', 'resMethane', 'resTitanium', 'resGold', 'resSilver',
		'resHydrogen', 'resHelium', 'resIce', 'resMeteorite',
		'resScience', 'resRocketFuel' ]
	};

	instance.producers = {
		title: 'Producers',
		brackets: Game.constants.achievementProducerBrackets,
		entries: [
		'prodPlasmaT1', 'prodPlasmaT2',
		'prodEnergyT1', 'prodEnergyT2', 'prodEnergyT3', 'prodEnergyT4', 'prodEnergyT5', 'prodEnergyT6',
		'prodUraniumT1', 'prodUraniumT2', 'prodUraniumT3', 'prodUraniumT4',
		'prodLavaT1', 'prodLavaT2', 'prodLavaT3', 'prodLavaT4',

		'prodOilT1', 'prodOilT2', 'prodOilT3', 'prodOilT4',
		'prodMetalT1', 'prodMetalT2', 'prodMetalT3', 'prodMetalT4',
		'prodGemsT1', 'prodGemsT2', 'prodGemsT3', 'prodGemsT4',
		'prodCarbonT1', 'prodCarbonT2', 'prodCarbonT3', 'prodCarbonT4',
		'prodWoodT1', 'prodWoodT2', 'prodWoodT3', 'prodWoodT4',
		'prodSiliconT1', 'prodSiliconT2', 'prodSiliconT3', 'prodSiliconT4',

		'prodLunariteT1', 'prodLunariteT2', 'prodLunariteT3', 'prodLunariteT4',
		'prodMethaneT1', 'prodMethaneT2', 'prodMethaneT3', 'prodMethaneT4',
		'prodTitaniumT1', 'prodTitaniumT2', 'prodTitaniumT3', 'prodTitaniumT4',
		'prodGoldT1', 'prodGoldT2', 'prodGoldT3', 'prodGoldT4',
		'prodSilverT1', 'prodSilverT2', 'prodSilverT3', 'prodSilverT4',

		'prodHydrogenT1', 'prodHydrogenT2', 'prodHydrogenT3', 'prodHydrogenT4',
		'prodHeliumT1', 'prodHeliumT2', 'prodHeliumT3', 'prodHeliumT4',
		'prodIceT1', 'prodIceT2', 'prodIceT3', 'prodIceT4',
		'prodMeteoriteT1', 'prodMeteoriteT2', 'prodMeteoriteT3', 'prodMeteoriteT4',

		'prodScienceT1', 'prodScienceT2', 'prodScienceT3', 'prodScienceT4',
		'prodRocketFuelT1', 'prodRocketFuelT2', 'prodRocketFuelT3',
		'prodDysonT1', 'prodDysonT2' ]
	};

	instance.other = {
		title: 'Miscellaneous',
	}

	return instance;

}());

Game.achievementsData = (function(){

	var instance = {};
	
	/**************
	** Resources **
	**************/

	instance.resUranium = {
		id_v4: 'ach_0',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'uraniumIcon',
		title: 'Collect %s Uranium',
		evaluator: function(x) { return getResource(RESOURCE.Uranium) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Uranium) / x }
	};
	
	instance.resLava = {
		id_v4: 'ach_1',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'lavaIcon',
		title: 'Collect %s Lava',
		evaluator: function(x) { return getResource(RESOURCE.Lava) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Lava) / x }
	};
	
	instance.resOil = {
		id_v4: 'ach_2',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'oilIcon',
		title: 'Collect %s Oil',
		evaluator: function(x) { return getResource(RESOURCE.Oil) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Oil) / x }
	};
	
	instance.resMetal = {
		id_v4: 'ach_3',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'metalIcon',
		title: 'Collect %s Metal',
		evaluator: function(x) { return getResource(RESOURCE.Metal) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Metal) / x }
	};
	
	instance.resGems = {
		id_v4: 'ach_4',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'gemIcon',
		title: 'Collect %s Gems',
		evaluator: function(x) { return getResource(RESOURCE.Gem) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Gem) / x }
	};

	instance.resCarbon = {
		id_v4: 'ach_5',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'carbonIcon',
		title: 'Collect %s Carbon',
		evaluator: function(x) { return getResource(RESOURCE.Carbon) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Carbon) / x }
	};

	instance.resWood = {
		id_v4: 'ach_6',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'woodIcon',
		title: 'Collect %s Wood',
		evaluator: function(x) { return getResource(RESOURCE.Wood) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Wood) / x }
	};

	instance.resSilicon = {
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'siliconIcon',
		title: 'Collect %s Silicon',
		evaluator: function(x) { return getResource(RESOURCE.Silicon) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Silicon) / x }
	};

	instance.resLunarite = {
		id_v4: 'ach_7',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'lunariteIcon',
		title: 'Collect %s Lunarite',
		evaluator: function(x) { return getResource(RESOURCE.Lunarite) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Lunarite) / x }
	};
	
	instance.resMethane = {
		id_v4: 'ach_8',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'methaneIcon',
		title: 'Collect %s Methane',
		evaluator: function(x) { return getResource(RESOURCE.Methane) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Methane) / x }
	};
	
	instance.resTitanium = {
		id_v4: 'ach_9',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'titaniumIcon',
		title: 'Collect %s Titanium',
		evaluator: function(x) { return getResource(RESOURCE.Titanium) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Titanium) / x }
	};
	
	instance.resGold = {
		id_v4: 'ach_10',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'goldIcon',
		title: 'Collect %s Gold',
		evaluator: function(x) { return getResource(RESOURCE.Gold) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Gold) / x }
	};
	
	instance.resSilver = {
		id_v4: 'ach_11',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'silverIcon',
		title: 'Collect %s Silver',
		evaluator: function(x) { return getResource(RESOURCE.Silver) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Silver) / x }
	};
	
	instance.resHydrogen = {
		id_v4: 'ach_12',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'hydrogenIcon',
		title: 'Collect %s Hydrogen',
		evaluator: function(x) { return getResource(RESOURCE.Hydrogen) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Hydrogen) / x }
	};
	
	instance.resHelium = {
		id_v4: 'ach_13',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'heliumIcon',
		title: 'Collect %s Helium',
		evaluator: function(x) { return getResource(RESOURCE.Helium) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Helium) / x }
	};
	
	instance.resIce = {
		id_v4: 'ach_14',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'iceIcon',
		title: 'Collect %s Ice',
		evaluator: function(x) { return getResource(RESOURCE.Ice) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Ice) / x }
	};
	
	instance.resMeteorite = {
		id_v4: 'ach_15',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'meteoriteIcon',
		title: 'Collect %s Meteorite',
		evaluator: function(x) { return getResource(RESOURCE.Meteorite) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Meteorite) / x }
	};
	
	instance.resScience = {
		id_v4: 'ach_16',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'technologiesIcon',
		title: 'Collect %s Science',
		evaluator: function(x) { return getResource(RESOURCE.Science) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Science) / x }
	};

	instance.resRocketFuel = {
		id_v4: 'ach_17',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'rocketFuelIcon',
		title: 'Collect %s Rocket Fuel',
		evaluator: function(x) { return getResource(RESOURCE.RocketFuel) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.RocketFuel) / x }
	};
	
	/**************
	** Producers **
	**************/

	instance._prodEnergyT1 = {
		id_v4: "ach_18",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: "Own %s Carbon Engine",
		evaluator: function(x) { return Game.buildings.entries["energyT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["energyT1"].current/x }
	};

	instance._prodEnergyT2 = {
		id_v4: "ach_19",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: "Own %s Solar Panel",
		evaluator: function(x) { return Game.buildings.entries["energyT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["energyT2"].current/x }
	};

	instance._prodEnergyT3 = {
		id_v4: "ach_20",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: "Own %s Methane Power Station",
		evaluator: function(x) { return Game.buildings.entries["energyT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["energyT3"].current/x }
	};

	instance._prodEnergyT4 = {
		id_v4: "ach_21",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: "Own %s Nuclear Power Station",
		evaluator: function(x) { return Game.buildings.entries["energyT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["energyT4"].current/x }
	};

	instance._prodEnergyT5 = {
		id_v4: "ach_22",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: "Own %s Magmatic Dynamo",
		evaluator: function(x) { return Game.buildings.entries["energyT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["energyT5"].current/x }
	};

	instance._prodEnergyT6 = {
		id_v4: "ach_23",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: "Own %s Fusion Reactor",
		evaluator: function(x) { return Game.buildings.entries["energyT6"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["energyT6"].current/x }
	};

	instance._prodPlasmaT1 = {
		id_v4: "ach_24",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'plasmaIcon',
		title: "Own %s Super-Heater",
		evaluator: function(x) { return Game.buildings.entries["plasmaT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["plasmaT1"].current/x }
	};

	instance._prodPlasmaT2 = {
		id_v4: "ach_25",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'plasmaIcon',
		title: "Own %s Plasmatic Pit",
		evaluator: function(x) { return Game.buildings.entries["plasmaT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["plasmaT2"].current/x }
	};

	instance._prodPlasmaT3 = {
		id_v4: "ach_26",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'plasmaIcon',
		title: "Own %s Electron Bath",
		evaluator: function(x) { return Game.buildings.entries["plasmaT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["plasmaT3"].current/x }
	};

	instance._prodUraniumT1 = {
		id_v4: "ach_27",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: "Own %s Grinder",
		evaluator: function(x) { return Game.buildings.entries["uraniumT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["uraniumT1"].current/x }
	};

	instance._prodUraniumT2 = {
		id_v4: "ach_28",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: "Own %s Cubic Teleposer",
		evaluator: function(x) { return Game.buildings.entries["uraniumT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["uraniumT2"].current/x }
	};

	instance._prodUraniumT3 = {
		id_v4: "ach_29",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: "Own %s Uranium Enricher",
		evaluator: function(x) { return Game.buildings.entries["uraniumT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["uraniumT3"].current/x }
	};

	instance._prodUraniumT4 = {
		id_v4: "ach_30",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: "Own %s Yellowcake Recycler",
		evaluator: function(x) { return Game.buildings.entries["uraniumT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["uraniumT4"].current/x }
	};

	instance._prodUraniumT5 = {
		id_v4: "ach_31",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: "Own %s Planetary Nuclear Plant",
		evaluator: function(x) { return Game.buildings.entries["uraniumT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["uraniumT5"].current/x }
	};

	instance._prodLavaT1 = {
		id_v4: "ach_32",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: "Own %s Heat Resistant Crucible",
		evaluator: function(x) { return Game.buildings.entries["lavaT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lavaT1"].current/x }
	};

	instance._prodLavaT2 = {
		id_v4: "ach_33",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: "Own %s Lava Extractor",
		evaluator: function(x) { return Game.buildings.entries["lavaT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lavaT2"].current/x }
	};

	instance._prodLavaT3 = {
		id_v4: "ach_34",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: "Own %s Igneous Extruder",
		evaluator: function(x) { return Game.buildings.entries["lavaT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lavaT3"].current/x }
	};

	instance._prodLavaT4 = {
		id_v4: "ach_35",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: "Own %s Volcanic Veluptuator",
		evaluator: function(x) { return Game.buildings.entries["lavaT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lavaT4"].current/x }
	};

	instance._prodLavaT5 = {
		id_v4: "ach_36",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: "Own %s Jupitonian Condensator",
		evaluator: function(x) { return Game.buildings.entries["lavaT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lavaT5"].current/x }
	};

	instance._prodOilT1 = {
		id_v4: "ach_37",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: "Own %s Small Pump",
		evaluator: function(x) { return Game.buildings.entries["oilT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["oilT1"].current/x }
	};

	instance._prodOilT2 = {
		id_v4: "ach_38",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: "Own %s Pumpjack",
		evaluator: function(x) { return Game.buildings.entries["oilT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["oilT2"].current/x }
	};

	instance._prodOilT3 = {
		id_v4: "ach_39",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: "Own %s Oil Field",
		evaluator: function(x) { return Game.buildings.entries["oilT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["oilT3"].current/x }
	};

	instance._prodOilT4 = {
		id_v4: "ach_40",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: "Own %s Offshore Rig",
		evaluator: function(x) { return Game.buildings.entries["oilT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["oilT4"].current/x }
	};

	instance._prodOilT5 = {
		id_v4: "ach_41",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: "Own %s Fossilator 9000",
		evaluator: function(x) { return Game.buildings.entries["oilT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["oilT5"].current/x }
	};

	instance._prodMetalT1 = {
		id_v4: "ach_42",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: "Own %s Miner",
		evaluator: function(x) { return Game.buildings.entries["metalT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["metalT1"].current/x }
	};

	instance._prodMetalT2 = {
		id_v4: "ach_43",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: "Own %s Heavy Drill",
		evaluator: function(x) { return Game.buildings.entries["metalT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["metalT2"].current/x }
	};

	instance._prodMetalT3 = {
		id_v4: "ach_44",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: "Own %s Giga Drill",
		evaluator: function(x) { return Game.buildings.entries["metalT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["metalT3"].current/x }
	};

	instance._prodMetalT4 = {
		id_v4: "ach_45",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: "Own %s Quantum Drill",
		evaluator: function(x) { return Game.buildings.entries["metalT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["metalT4"].current/x }
	};

	instance._prodMetalT5 = {
		id_v4: "ach_46",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: "Own %s Multiverse Drill",
		evaluator: function(x) { return Game.buildings.entries["metalT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["metalT5"].current/x }
	};

	instance._prodGemT1 = {
		id_v4: "ach_47",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: "Own %s Gem Miner",
		evaluator: function(x) { return Game.buildings.entries["gemT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["gemT1"].current/x }
	};

	instance._prodGemT2 = {
		id_v4: "ach_48",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: "Own %s Advanced Drill",
		evaluator: function(x) { return Game.buildings.entries["gemT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["gemT2"].current/x }
	};

	instance._prodGemT3 = {
		id_v4: "ach_49",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: "Own %s Diamond Encrusted Drill",
		evaluator: function(x) { return Game.buildings.entries["gemT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["gemT3"].current/x }
	};

	instance._prodGemT4 = {
		id_v4: "ach_50",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: "Own %s Carbyne Drill",
		evaluator: function(x) { return Game.buildings.entries["gemT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["gemT4"].current/x }
	};

	instance._prodGemT5 = {
		id_v4: "ach_51",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: "Own %s Diamond Accretion Chamber",
		evaluator: function(x) { return Game.buildings.entries["gemT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["gemT5"].current/x }
	};

	instance._prodCarbonT1 = {
		id_v4: "ach_52",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'carbonIcon',
		title: "Own %s Woodburner",
		evaluator: function(x) { return Game.buildings.entries["carbonT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["carbonT1"].current/x }
	};

	instance._prodCarbonT2 = {
		id_v4: "ach_53",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'carbonIcon',
		title: "Own %s Furnace",
		evaluator: function(x) { return Game.buildings.entries["carbonT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["carbonT2"].current/x }
	};

	instance._prodCarbonT3 = {
		id_v4: "ach_54",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'carbonIcon',
		title: "Own %s Industrial Kiln",
		evaluator: function(x) { return Game.buildings.entries["carbonT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["carbonT3"].current/x }
	};

	instance._prodCarbonT4 = {
		id_v4: "ach_55",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'carbonIcon',
		title: "Own %s Forest Fryer",
		evaluator: function(x) { return Game.buildings.entries["carbonT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["carbonT4"].current/x }
	};

	instance._prodCarbonT5 = {
		id_v4: "ach_56",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'carbonIcon',
		title: "Own %s Microverse Pollutor",
		evaluator: function(x) { return Game.buildings.entries["carbonT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["carbonT5"].current/x }
	};

	instance._prodWoodT1 = {
		id_v4: "ach_57",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: "Own %s Woodcutter",
		evaluator: function(x) { return Game.buildings.entries["woodT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["woodT1"].current/x }
	};

	instance._prodWoodT2 = {
		id_v4: "ach_58",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: "Own %s Laser Cutter",
		evaluator: function(x) { return Game.buildings.entries["woodT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["woodT2"].current/x }
	};

	instance._prodWoodT3 = {
		id_v4: "ach_59",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: "Own %s Mass Deforester",
		evaluator: function(x) { return Game.buildings.entries["woodT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["woodT3"].current/x }
	};

	instance._prodWoodT4 = {
		id_v4: "ach_60",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: "Own %s Biomass Infuser",
		evaluator: function(x) { return Game.buildings.entries["woodT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["woodT4"].current/x }
	};

	instance._prodWoodT5 = {
		id_v4: "ach_61",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: "Own %s Russian Forest",
		evaluator: function(x) { return Game.buildings.entries["woodT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["woodT5"].current/x }
	};

	instance._prodSiliconT1 = {
		id_v4: "ach_62",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: "Own %s Empowered Blowtorch",
		evaluator: function(x) { return Game.buildings.entries["siliconT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["siliconT1"].current/x }
	};

	instance._prodSiliconT2 = {
		id_v4: "ach_63",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: "Own %s Seaside Scorcher",
		evaluator: function(x) { return Game.buildings.entries["siliconT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["siliconT2"].current/x }
	};

	instance._prodSiliconT3 = {
		id_v4: "ach_64",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: "Own %s Beach Annihilator",
		evaluator: function(x) { return Game.buildings.entries["siliconT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["siliconT3"].current/x }
	};

	instance._prodSiliconT4 = {
		id_v4: "ach_65",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: "Own %s Desert Destroyer",
		evaluator: function(x) { return Game.buildings.entries["siliconT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["siliconT4"].current/x }
	};

	instance._prodSiliconT5 = {
		id_v4: "ach_66",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: "Own %s Time And Relative Dimensions In Sand",
		evaluator: function(x) { return Game.buildings.entries["siliconT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["siliconT5"].current/x }
	};

	instance._prodLunariteT1 = {
		id_v4: "ach_67",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: "Own %s Native Moon Worker",
		evaluator: function(x) { return Game.buildings.entries["lunariteT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lunariteT1"].current/x }
	};

	instance._prodLunariteT2 = {
		id_v4: "ach_68",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: "Own %s Low-Gravity Drill",
		evaluator: function(x) { return Game.buildings.entries["lunariteT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lunariteT2"].current/x }
	};

	instance._prodLunariteT3 = {
		id_v4: "ach_69",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: "Own %s Moon Quarry",
		evaluator: function(x) { return Game.buildings.entries["lunariteT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lunariteT3"].current/x }
	};

	instance._prodLunariteT4 = {
		id_v4: "ach_70",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: "Own %s Planetary Excavator",
		evaluator: function(x) { return Game.buildings.entries["lunariteT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lunariteT4"].current/x }
	};

	instance._prodLunariteT5 = {
		id_v4: "ach_71",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: "Own %s Moon Cloner",
		evaluator: function(x) { return Game.buildings.entries["lunariteT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["lunariteT5"].current/x }
	};

	instance._prodMethaneT1 = {
		id_v4: "ach_72",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: "Own %s Vacuum Cleaner",
		evaluator: function(x) { return Game.buildings.entries["methaneT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["methaneT1"].current/x }
	};

	instance._prodMethaneT2 = {
		id_v4: "ach_73",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: "Own %s Suction Excavator",
		evaluator: function(x) { return Game.buildings.entries["methaneT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["methaneT2"].current/x }
	};

	instance._prodMethaneT3 = {
		id_v4: "ach_74",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: "Own %s Space Cow Plantation",
		evaluator: function(x) { return Game.buildings.entries["methaneT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["methaneT3"].current/x }
	};

	instance._prodMethaneT4 = {
		id_v4: "ach_75",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: "Own %s Hydrothermal Vent",
		evaluator: function(x) { return Game.buildings.entries["methaneT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["methaneT4"].current/x }
	};

	instance._prodMethaneT5 = {
		id_v4: "ach_76",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: "Own %s Interstellar Cow",
		evaluator: function(x) { return Game.buildings.entries["methaneT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["methaneT5"].current/x }
	};

	instance._prodTitaniumT1 = {
		id_v4: "ach_77",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: "Own %s Explorer",
		evaluator: function(x) { return Game.buildings.entries["titaniumT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["titaniumT1"].current/x }
	};

	instance._prodTitaniumT2 = {
		id_v4: "ach_78",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: "Own %s Lunarite Drill",
		evaluator: function(x) { return Game.buildings.entries["titaniumT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["titaniumT2"].current/x }
	};

	instance._prodTitaniumT3 = {
		id_v4: "ach_79",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: "Own %s Penta-Drill",
		evaluator: function(x) { return Game.buildings.entries["titaniumT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["titaniumT3"].current/x }
	};

	instance._prodTitaniumT4 = {
		id_v4: "ach_80",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: "Own %s Drill of Titans",
		evaluator: function(x) { return Game.buildings.entries["titaniumT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["titaniumT4"].current/x }
	};

	instance._prodTitaniumT5 = {
		id_v4: "ach_81",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: "Own %s David Guetta's Club",
		evaluator: function(x) { return Game.buildings.entries["titaniumT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["titaniumT5"].current/x }
	};

	instance._prodGoldT1 = {
		id_v4: "ach_82",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: "Own %s Rocket Droid",
		evaluator: function(x) { return Game.buildings.entries["goldT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["goldT1"].current/x }
	};

	instance._prodGoldT2 = {
		id_v4: "ach_83",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: "Own %s Asteroid Destroyer",
		evaluator: function(x) { return Game.buildings.entries["goldT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["goldT2"].current/x }
	};

	instance._prodGoldT3 = {
		id_v4: "ach_84",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: "Own %s Death Star Jr",
		evaluator: function(x) { return Game.buildings.entries["goldT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["goldT3"].current/x }
	};

	instance._prodGoldT4 = {
		id_v4: "ach_85",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: "Own %s Chronal Actuator",
		evaluator: function(x) { return Game.buildings.entries["goldT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["goldT4"].current/x }
	};

	instance._prodGoldT5 = {
		id_v4: "ach_86",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: "Own %s Philospher's stone",
		evaluator: function(x) { return Game.buildings.entries["goldT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["goldT5"].current/x }
	};

	instance._prodSilverT1 = {
		id_v4: "ach_87",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: "Own %s Scout Ship",
		evaluator: function(x) { return Game.buildings.entries["silverT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["silverT1"].current/x }
	};

	instance._prodSilverT2 = {
		id_v4: "ach_88",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: "Own %s Interplanetary Laser",
		evaluator: function(x) { return Game.buildings.entries["silverT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["silverT2"].current/x }
	};

	instance._prodSilverT3 = {
		id_v4: "ach_89",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: "Own %s Big Bertha",
		evaluator: function(x) { return Game.buildings.entries["silverT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["silverT3"].current/x }
	};

	instance._prodSilverT4 = {
		id_v4: "ach_90",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: "Own %s Atomic Cannon",
		evaluator: function(x) { return Game.buildings.entries["silverT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["silverT4"].current/x }
	};

	instance._prodSilverT5 = {
		id_v4: "ach_91",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: "Own %s Dead Werewolf Finder",
		evaluator: function(x) { return Game.buildings.entries["silverT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["silverT5"].current/x }
	};

	instance._prodHydrogenT1 = {
		id_v4: "ach_92",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: "Own %s Hydrogen Collector",
		evaluator: function(x) { return Game.buildings.entries["hydrogenT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["hydrogenT1"].current/x }
	};

	instance._prodHydrogenT2 = {
		id_v4: "ach_93",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: "Own %s Gaseous Magnet",
		evaluator: function(x) { return Game.buildings.entries["hydrogenT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["hydrogenT2"].current/x }
	};

	instance._prodHydrogenT3 = {
		id_v4: "ach_94",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: "Own %s Electrolytic Cell",
		evaluator: function(x) { return Game.buildings.entries["hydrogenT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["hydrogenT3"].current/x }
	};

	instance._prodHydrogenT4 = {
		id_v4: "ach_95",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: "Own %s Hindenburg Excavation",
		evaluator: function(x) { return Game.buildings.entries["hydrogenT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["hydrogenT4"].current/x }
	};

	instance._prodHydrogenT5 = {
		id_v4: "ach_96",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: "Own %s Star Harvester",
		evaluator: function(x) { return Game.buildings.entries["hydrogenT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["hydrogenT5"].current/x }
	};

	instance._prodHeliumT1 = {
		id_v4: "ach_97",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: "Own %s Helium Drone",
		evaluator: function(x) { return Game.buildings.entries["heliumT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["heliumT1"].current/x }
	};

	instance._prodHeliumT2 = {
		id_v4: "ach_98",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: "Own %s Helium Tanker",
		evaluator: function(x) { return Game.buildings.entries["heliumT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["heliumT2"].current/x }
	};

	instance._prodHeliumT3 = {
		id_v4: "ach_99",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: "Own %s Morphic Compressor",
		evaluator: function(x) { return Game.buildings.entries["heliumT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["heliumT3"].current/x }
	};

	instance._prodHeliumT4 = {
		id_v4: "ach_100",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: "Own %s Gas Giant Skimmer",
		evaluator: function(x) { return Game.buildings.entries["heliumT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["heliumT4"].current/x }
	};

	instance._prodHeliumT5 = {
		id_v4: "ach_101",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: "Own %s Caged Star",
		evaluator: function(x) { return Game.buildings.entries["heliumT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["heliumT5"].current/x }
	};

	instance._prodIceT1 = {
		id_v4: "ach_102",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: "Own %s Ice Pickaxe",
		evaluator: function(x) { return Game.buildings.entries["iceT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["iceT1"].current/x }
	};

	instance._prodIceT2 = {
		id_v4: "ach_103",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: "Own %s Ice Drill",
		evaluator: function(x) { return Game.buildings.entries["iceT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["iceT2"].current/x }
	};

	instance._prodIceT3 = {
		id_v4: "ach_104",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: "Own %s Ocean Freezer",
		evaluator: function(x) { return Game.buildings.entries["iceT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["iceT3"].current/x }
	};

	instance._prodIceT4 = {
		id_v4: "ach_105",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: "Own %s Mr Freeze",
		evaluator: function(x) { return Game.buildings.entries["iceT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["iceT4"].current/x }
	};

	instance._prodIceT5 = {
		id_v4: "ach_106",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: "Own %s Overexchange Condenser",
		evaluator: function(x) { return Game.buildings.entries["iceT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["iceT5"].current/x }
	};

	instance._prodMeteoriteT1 = {
		id_v4: "ach_107",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: "Own %s Meteorite Printer",
		evaluator: function(x) { return Game.buildings.entries["meteoriteT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["meteoriteT1"].current/x }
	};

	instance._prodMeteoriteT2 = {
		id_v4: "ach_108",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: "Own %s Meteorite Web",
		evaluator: function(x) { return Game.buildings.entries["meteoriteT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["meteoriteT2"].current/x }
	};

	instance._prodMeteoriteT3 = {
		id_v4: "ach_109",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: "Own %s Planet Smasher",
		evaluator: function(x) { return Game.buildings.entries["meteoriteT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["meteoriteT3"].current/x }
	};

	instance._prodMeteoriteT4 = {
		id_v4: "ach_110",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: "Own %s Nebulous Synthesizer",
		evaluator: function(x) { return Game.buildings.entries["meteoriteT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["meteoriteT4"].current/x }
	};

	instance._prodScienceT1 = {
		id_v4: "ach_111",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologiesIcon',
		title: "Own %s Home Science Kit",
		evaluator: function(x) { return Game.buildings.entries["scienceT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["scienceT1"].current/x }
	};

	instance._prodScienceT2 = {
		id_v4: "ach_112",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologiesIcon',
		title: "Own %s High School Science",
		evaluator: function(x) { return Game.buildings.entries["scienceT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["scienceT2"].current/x }
	};

	instance._prodScienceT3 = {
		id_v4: "ach_113",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologiesIcon',
		title: "Own %s University Laboratory",
		evaluator: function(x) { return Game.buildings.entries["scienceT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["scienceT3"].current/x }
	};

	instance._prodScienceT4 = {
		id_v4: "ach_114",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologiesIcon',
		title: "Own %s Scientific Observatory",
		evaluator: function(x) { return Game.buildings.entries["scienceT4"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["scienceT4"].current/x }
	};

	instance._prodScienceT5 = {
		id_v4: "ach_115",
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologiesIcon',
		title: "Own %s Space Scientific Satellite Station",
		evaluator: function(x) { return Game.buildings.entries["scienceT5"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["scienceT5"].current/x }
	};

	instance.prodRocketFuel1 = {
		id_v4: 'ach_116',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'rocketFuelIcon',
		title: 'Own %s Chemical Plants',
		evaluator: function(x) { return Game.buildings.entries["rocketFuelT1"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["rocketFuelT1"].current/x }
	};

	instance.prodRocketFuel2 = {
		id_v4: 'ach_117',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'rocketFuelIcon',
		title: 'Own %s Oxidisation Chambers',
		evaluator: function(x) { return Game.buildings.entries["rocketFuelT2"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["rocketFuelT2"].current/x }
	};

	instance.prodRocketFuel3 = {
		id_v4: 'ach_118',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'rocketFuelIcon',
		title: 'Own %s Hydrazine Catalysts',
		evaluator: function(x) { return Game.buildings.entries["rocketFuelT3"].current >= x },
		progressEvaluator: function(x) { return Game.buildings.entries["rocketFuelT3"].current/x }
	};

	instance.prodDyson1 = {
		id_v4: 'ach_119',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Dyson Rings',
		evaluator: function(x) { return Game.solCenter.entries.dyson.items.ring.current >= x },
		progressEvaluator: function(x) { return Game.solCenter.entries.dyson.items.ring.current/x }
	};

	instance.prodDyson2 = {
		id_v4: 'ach_120',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Dyson Swarms',
		evaluator: function(x) { return Game.solCenter.entries.dyson.items.swarm.current >= x },
		progressEvaluator: function(x) { return Game.solCenter.entries.dyson.items.swarm.current/x }
	};

	/*****************
	** Miscelaneous **
	*****************/

	instance.playTime = {
		id_v4: 'ach_121',
		categoryInstance: Game.achievementsCategoryData.other,
		iconName: 'keyboardIcon',
		title: 'Play for %s',
		bracketTitles:["1 day", "10 days", "1 month", "3 months", "6 months"],
		brackets: [86400, 864000, 2.628e+6, 7.884e+6, 1.577e+7],
		evaluator: function(x) { return Game.statistics.entries.timePlayed.valueAlltime >= x },
		progressEvaluator: function(x) { return Game.statistics.entries.timePlayed.valueAlltime/x }
	};

	return instance;

}());

