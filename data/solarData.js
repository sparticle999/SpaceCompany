Game.solarCategoryData = (function(){

	var instance = {};

	instance = {

	    inner: {
	        title: 'Inner Solar System',
	        category: 'inner',
	        id: 'inner',
	        htmlId: 'sol_inner',
	        page: 'solar',
	        order: 3,
	        unlocked: false
	    },

	    outer: {
	    	title: 'Outer Solar System',
	    	category: 'outer',
	    	id: 'outer',
	    	htmlId: 'sol_outer',
	        page: 'solar',
	        order: 4,
	        unlocked: false
	    },

	}

	return instance;
}());

Game.solarData = (function(){

	var instance = {};

	instance = {

    moon: {
		name: "The Moon",
		category: "inner",
		desc: "The Moon is our largest satellite, revolving around the Earth once every 27 days. It contains a large quantity of Lunarite, left over from when it separated from the Earth billions of years ago. It is much stronger than regular metal and used to build more advanced machines.",
		resource: ["lunarite"],
		id: 'moon',
		icon: 'moonIcon',
		order: 1,
		htmlId: 'solar_moon',
		cost: {rocketFuel: 25},
		unlocked: false,
		explored: false
	},

	mercury: {
		name: "Mercury",
		category: "inner",
		desc: "Mercury is a lifeless rock with little to no value. It is not worth exploring on the ground as there are no valuable materials present.",
		id: 'mercury',
		icon: 'mercuryIcon',
		order: 2,
		htmlId: 'solar_mercury',
		unlocked: false,
		explored: false
	},

	venus: {
		name: "Venus",
		category: "inner",
		desc: "Venus is the hottest planet in the solar system and the closest one to Earth. It is rich in greenhouse gases, contributing to its extreme heat. You can extract methane from Venus, which allows you to build up a new form of power generation.",
		resource: ["methane"],
		building: ["energyT3"],
		id: 'venus',
		icon: 'venusIcon',
		order: 3,
		htmlId: 'solar_venus',
		cost: {rocketFuel: 100},
		unlocked: false,
		explored: false
	},

	mars: {
		name: "Mars",
		category: "inner",
		desc: "Mars is the second closest planet to Earth and is covered in red iron oxide, also called rust. You can find Titanium on the surface, but it is more common inside the crust. Titanium will allow for Methane power plants and Silicon production.",
		resource: ["titanium", "silicon"],
		id: 'mars',
		icon: 'marsIcon',
		order: 4,
		htmlId: 'solar_mars',
		cost: {rocketFuel: 75},
		unlocked: false,
		explored: false
	},

	asteroidBelt: {
		name: "Asteroid Belt",
		category: "inner",
		desc: "The asteroid belt is a vast space with nearly 2 million asteroids. There you can harvest rare metals on Earth more easily, such as Gold and Silver.",
		resource: ["gold", "silver"],
		location: ["wonderStation", "jupiter", "saturn", "uranus", "neptune", "pluto"],
		id: 'asteroidBelt',
		icon: 'asteroidBeltIcon',
		htmlId: 'solar_asteroidBelt',
		order: 5,
		cost: {rocketFuel: 400},
		unlocked: false,
		explored: false
	},

	wonderStation: {
		name: "Wonder Station",
		category: "inner",
		desc: "The Wonder Station is a large, mysterious construct. What it contains isn't known exactly, but carvings on ancient artifacts depict something similar. They say that there, you will learn about an almost supernatural, extra-terrestrial overlord, commanding over the galaxy. They say that he will be able to teach you many things on your journey to inter-star and galactic exploration.",
		id: 'wonderStation',
		icon: 'wonderStationIcon',
		htmlId: 'solar_wonderStation',
		order: 6,
		cost: {rocketFuel: 500},
		unlocked: false,
		explored: false
	},

	jupiter: {
		name: "Juptier",
		category: "outer",
		desc: "An orbital station would be ideal to harvest hydrogen from Jupiter's athmosphere. Make it so!",
		resource: ["hydrogen"],
		building: ["energyT6"],
		id: 'jupiter',
		icon: 'jupiterIcon',
		htmlId: 'solar_jupiter',
		order: 7,
		cost: {rocketFuel: 1000},
		unlocked: false,
		explored: false
	},

	saturn: {
		name: "Saturn",
		category: "outer",
		desc: "We struck gold!  Figuratively at least. The second largest planet in the solar system, next to Jupiter. It is one of the few celestial bodies in our solar system to have rings and is the least dense planet in the solar system. You can find Helium here.",
		resource: ["helium"],
		id: 'saturn',
		icon: 'saturnIcon',
		htmlId: 'solar_saturn',
		order: 8,
		cost: {rocketFuel: 2000},
		unlocked: false,
		explored: false
	},

	uranus: {
		name: "Uranus",
		category: "outer",
		desc: "The planet that rotates differently from everyone else has winds up to 300 miles per hour (483kph). Its composition is much like that of the other gas giants, mainly composed of Hydrogen and Helium. Because of this, it is not worth exploring to get the same resources as in Saturn and Jupiter.",
		id: 'uranus',
		icon: 'uranusIcon',
		htmlId: 'solar_uranus',
		order: 9,
		unlocked: false,
		explored: false
	},

	neptune: {
		name: "Neptune",
		category: "outer",
		desc: "Neptune has the strangest weather in the solar system. There are huge storms and winds that are more violent than any other in the solar system. There is not much there but Methane, Hydrogen and Helium.",
		id: 'neptune',
		icon: 'neptuneIcon',
		htmlId: 'solar_neptune',
		order: 10,
		unlocked: false,
		explored: false
	},

	pluto: {
		name: "Pluto",
		category: "outer",
		desc: "Ice, ice, baby!  With large quantities of ice being extremely expensive to create on Earth, it's actually cheaper to harvest it from Pluto!",
		resource: ["ice"],
		location: ["kuiperBelt"],
		id: 'pluto',
		icon: 'plutoIcon',
		htmlId: 'solar_pluto',
		order: 11,
		cost: {rocketFuel: 4000},
		unlocked: false,
		explored: false
	},

	kuiperBelt: {
		name: "Kuiper Belt",
		category: "outer",
		desc: "Vast stretches of space separate lonely rocks floating in a 300 year orbit around the sun. Still, there is something of great importance to be found here.",
		location: ["solCenter"],
		id: 'kuiperBelt',
		icon: 'kuiperBeltIcon',
		htmlId: 'solar_kuiperBelt',
		order: 12,
		cost: {rocketFuel: 6000},
		unlocked: false,
		explored: false
	},

	solCenter: {
		name: "Sol Scientific Center",
		category: "outer",
		desc: "Welcome to our home. Our race is dedicated to scientific progress and interacting with others. If you wish to trade with us, we can provide you blueprints for technology that few in the galaxy have ever seen.",
		id: 'solCenter',
		icon: 'solCenterIcon',
		htmlId: 'solar_solCenter',
		order: 13,
		cost: {rocketFuel: 7000},
		unlocked: false,
		explored: false
	},

	}

	return instance;
}());