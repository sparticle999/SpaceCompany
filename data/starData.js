Game.starData = (function(){

	var instance = {};

	instance.alphaCenturi = {
		name: "Alpha Centauri",
		distance: 4.3,
		planets: 1,
		tier: 1,
		faction: "Hyacinite Congregation",
		desc: "The closest star to your solar system, this is the easiest to travel to. Controlled by a science loving society, they permit your exploration in pursuit of knowledge, despite being skeptical of your sincerity about 'just looking'.",
		resource1: "Ice",
		resource2: "Hydrogen",
		explored: false
	};

	instance.barnards = {
		name: "Barnard's Star",
		distance: 5.96,
		planets: 0,
		tier: 4,
		faction: "Carnelian Resistance",
		desc: "",
		resource1: "Hydrogen",
		resource2: "Helium",
		explored: false
	};

	instance.episilon = {
		name: "Epsilon Eridani",
		distance: 10.52,
		planets: 2,
		tier: 1,
		faction: "Prasnian Empire",
		desc: "",
		resource1: "Lunarite",
		resource2: "Gems",
		explored: false
	};

	instance.tauCeti = {
		name: "Tau Ceti",
		distance: 11.89,
		planets: 5,
		tier: 1,
		faction: "Kitrinos Corporation",
		desc: "",
		resource1: "Hydrogen",
		resource2: "Helium",
		explored: false
	};

	instance.gliese674 = {
		name: "Gliese 674",
		distance: 14.81,
		planets: 1,
		tier: 4,
		faction: "Moviton Syndicate",
		desc: "",
		resource1: "Hydrogen",
		resource2: "Helium",
		explored: false
	};


	return instance;

}());