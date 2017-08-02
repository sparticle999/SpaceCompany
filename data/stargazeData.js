Game.stargazeCategoryData = (function () {

    var instance = {};

    instance.empty = {
        title: '[WIP]',
        category: 'empty'
    };

    instance.faction = {
        title: 'Factions',
        category: 'faction'
    };

    return instance;

}());

Game.stargazeData = (function(){

	var instance = {};

	instance.intro = {
		name: "Introduction",
		category: "empty",
		hidden: "",
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		category: "faction",
		hidden: "",
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		category: "faction",
		hidden: "",
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		category: "faction",
		hidden: "",
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		category: "faction",
		hidden: "",
	};

	instance.overlord = {
		name: "Overlord Cult",
		category: "faction",
		hidden: "",
	};


	return instance;

}());

Game.prestigeData = (function(){

	var instance = {};

	instance.unlockStargaze = {
		name: "Unlock Prestige Upgrades",
		desc: "",
		cost: 1,
		achieved: false
	};

	return instance;

}());