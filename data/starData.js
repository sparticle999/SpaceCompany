Game.starData = (function(){

	var instance = {};

	instance.alphaCentauri = {
		name: "Alpha Centauri",
		distance: 4.3,
		planets: 1,
		tier: 1,
		faction: "Hyacinite Congregation",
		factionId: "hyacinite",
		desc: "The closest star to your solar system, this is the easiest to travel to. Controlled by a science loving society, they permit your exploration in pursuit of knowledge, despite being skeptical of your sincerity about 'just looking'.",
		resource1: "Ice",
		resource2: "Hydrogen",
	};

	instance.barnards = {
		name: "Barnard's Star",
		distance: 5.96,
		planets: 0,
		tier: 4,
		faction: "Carnelian Resistance",
		factionId: "carnelian",
		desc: "",
		resource1: "Hydrogen",
		resource2: "Helium",
	};

	instance.episilon = {
		name: "Epsilon Eridani",
		distance: 10.52,
		planets: 2,
		tier: 1,
		faction: "Prasnian Empire",
		factionId: "prasnian",
		desc: "",
		resource1: "Lunarite",
		resource2: "Gems",
	};

	instance.tauCeti = {
		name: "Tau Ceti",
		distance: 11.89,
		planets: 5,
		tier: 1,
		faction: "Kitrinos Corporation",
		factionId: "kitrinos",
		desc: "",
		resource1: "Titanium",
		resource2: "Silicon",
	};

	instance.gliese674 = {
		name: "Gliese 674",
		distance: 14.81,
		planets: 1,
		tier: 4,
		faction: "Moviton Syndicate",
		factionId: "moviton",
		desc: "",
		resource1: "Charcoal",
		resource2: "Methane",
	};


	return instance;

}());