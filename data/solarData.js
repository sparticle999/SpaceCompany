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

Game.solarDestinationData = (function(){

	var instance = {};

	instance = {

    moon: {
		name: "The Moon",
		category: "inner",
		id: 'moon',
		icon: 'moonIcon',
		order: 1,
		htmlId: 'solar_moon',
		unlocked: false,
		explored: false
	},

	mercury: {
		name: "Mercury",
		category: "inner",
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
		id: 'venus',
		icon: 'venusIcon',
		order: 3,
		htmlId: 'solar_venus',
		unlocked: false,
		explored: false
	},

	mars: {
		name: "Mars",
		category: "inner",
		id: 'mars',
		icon: 'marsIcon',
		htmlId: 'solar_mars',
		order: 4,
		unlocked: false,
		explored: false
	},

	asteroidBelt: {
		name: "Asteroid Belt",
		category: "inner",
		id: 'asteroidBelt',
		icon: 'asteroidBeltIcon',
		htmlId: 'solar_asteroidBelt',
		order: 5,
		unlocked: false,
		explored: false
	},

	wonderStation: {
		name: "Wonder Station",
		category: "inner",
		id: 'wonderStation',
		icon: 'wonderStationIcon',
		htmlId: 'solar_wonderStation',
		order: 6,
		unlocked: false,
		explored: false
	},

	jupiter: {
		name: "Juptier",
		category: "outer",
		id: 'jupiter',
		icon: 'jupiterIcon',
		htmlId: 'solar_jupiter',
		order: 1,
		unlocked: false,
		explored: false
	},

	saturn: {
		name: "Saturn",
		category: "outer",
		id: 'saturn',
		icon: 'saturnIcon',
		htmlId: 'solar_saturn',
		order: 2,
		unlocked: false,
		explored: false
	},

	uranus: {
		name: "Uranus",
		category: "outer",
		id: 'uranus',
		icon: 'uranusIcon',
		htmlId: 'solar_uranus',
		order: 3,
		unlocked: false,
		explored: false
	},

	neptune: {
		name: "Neptune",
		category: "outer",
		id: 'neptune',
		icon: 'neptuneIcon',
		htmlId: 'solar_neptune',
		order: 4,
		unlocked: false,
		explored: false
	},

	pluto: {
		name: "Pluto",
		category: "outer",
		id: 'pluto',
		icon: 'plutoIcon',
		htmlId: 'solar_pluto',
		order: 5,
		unlocked: false,
		explored: false
	},

	kuiperBelt: {
		name: "Kuiper Belt",
		category: "outer",
		id: 'kuiperBelt',
		icon: 'kuiperBeltIcon',
		htmlId: 'solar_kuiperBelt',
		order: 6,
		unlocked: false,
		explored: false
	},

	solCenter: {
		name: "Sol Scientific Center",
		category: "outer",
		id: 'solCenter',
		icon: 'solCenterIcon',
		htmlId: 'solar_solCenter',
		order: 7,
		unlocked: false,
		explored: false
	},

	}

	return instance;
}());

Game.solarData = (function () {

    var instance = {};

    // Rockets and rocketFuel can be found in resourceData.js
    // Rocket building can be found in buildingData.js
    // Maybe it's clearer to move them back to this js and extend their Objects from here?

	instance = {

	    coloniseMoon: {
			name: "The Moon",
			desc: "The Moon is our largest satellite, revolving around the Earth once every 27 days. It contains a large quantity of Lunarite, left over from when it separated from the Earth billions of years ago. It is much stronger than regular metal and used to build more advanced machines.",
			resource: ["lunarite"],
			category: "inner",
			htmlId: 'col_moon',
			order: 2,
			id: 'moon',
			cost: {rocket: 1, rocketFuel: 25},
			unlocked: false,
			explored: false
		},

		coloniseMercury: {
			name: "Mercury",
			desc: "Mercury is a lifeless rock with little to no value. It is not worth exploring on the ground as there are no valuable materials present.",
			category: "inner",
			htmlId: 'col_mercury',
			order: 2,
			id: 'mercury',
			unlocked: false,
			explored: true
		},

		coloniseVenus: {
			name: "Venus",
			desc: "Venus is the hottest planet in the solar system and the closest one to Earth. It is rich in greenhouse gases, contributing to its extreme heat. You can extract methane from Venus, which allows you to build up a new form of power generation.",
			resource: ["methane"],
			category: "inner",
			htmlId: 'col_venus',
			order: 2,
			id: 'venus',
			cost: {rocket: 1, rocketFuel: 100},
			unlocked: false,
			explored: false
		},

		coloniseMars: {
			name: "Mars",
			desc: "Mars is the second closest planet to Earth and is covered in red iron oxide, also called rust. You can find Titanium on the surface, but it is more common inside the crust. Titanium will allow for Methane power plants and Silicon production.",
			resource: ["titanium", "silicon"],
			category: "inner",
			htmlId: 'col_mars',
			order: 2,
			id: 'mars',
			cost: {rocket: 1, rocketFuel: 75},
			unlocked: false,
			explored: false
		},

		coloniseAsteroidBelt: {
			name: "Asteroid Belt",
			desc: "The asteroid belt is a vast space with nearly 2 million asteroids. There you can harvest rare metals on Earth more easily, such as Gold and Silver.",
			resource: ["gold", "silver"],
			category: "inner",
			htmlId: 'col_asteroidBelt',
			order: 2,
			id: 'asteroidBelt',
			cost: {rocket: 4, rocketFuel: 400},
			unlocked: false,
			explored: false
		},

		coloniseWonderStation: {
			name: "Wonder Station",
			desc: "The Wonder Station is a large, mysterious construct. What it contains isn't known exactly, but carvings on ancient artifacts depict something similar. They say that there, you will learn about an almost supernatural, extra-terrestrial overlord, commanding over the galaxy. They say that he will be able to teach you many things on your journey to inter-star and galactic exploration.",
			category: "inner",
			htmlId: 'col_wonderStation',
			order: 2,
			id: 'wonderStation',
			cost: {rocket: 1, rocketFuel: 500},
			unlocked: false,
			explored: false
		},

		coloniseJupiter: {
			name: "Jupiter",
			desc: "An orbital station would be ideal to harvest hydrogen from Jupiter's athmosphere. Make it so!",
			resource: ["hydrogen"],
			category: "outer",
			htmlId: 'col_jupiter',
			order: 2,
			id: 'jupiter',
			cost: {rocket: 1, rocketFuel: 1000},
			unlocked: false,
			explored: false
		},

		coloniseSaturn: {
			name: "Saturn",
			desc: "We struck gold!  Figuratively at least. The second largest planet in the solar system, next to Jupiter. It is one of the few celestial bodies in our solar system to have rings and is the least dense planet in the solar system. You can find Helium here.",
			resource: ["helium"],
			category: "outer",
			htmlId: 'col_saturn',
			order: 2,
			id: 'saturn',
			cost: {rocket: 1, rocketFuel: 2000},
			unlocked: false,
			explored: false
		},

		coloniseUranus: {
			name: "Uranus",
			desc: "The planet that rotates differently from everyone else has winds up to 300 miles per hour (483kph). Its composition is much like that of the other gas giants, mainly composed of Hydrogen and Helium. Because of this, it is not worth exploring to get the same resources as in Saturn and Jupiter.",
			category: "outer",
			htmlId: 'col_uranus',
			order: 2,
			id: 'uranus',
			unlocked: false,
			explored: true
		},

		coloniseNeptune: {
			name: "Neptune",
			desc: "Neptune has the strangest weather in the solar system. There are huge storms and winds that are more violent than any other in the solar system. There is not much there but Methane, Hydrogen and Helium.",
			category: "outer",
			htmlId: 'col_neptune',
			order: 2,
			id: 'neptune',
			unlocked: false,
			explored: true
		},

		colonisePluto: {
			name: "Pluto",
			desc: "Ice, ice, baby!  With large quantities of ice being extremely expensive to create on Earth, it's actually cheaper to harvest it from Pluto!",
			resource: ["ice"],
			category: "outer",
			htmlId: 'col_pluto',
			order: 2,
			id: 'pluto',
			cost: {rocket: 1, rocketFuel: 4000},
			unlocked: false,
			explored: false
		},

		coloniseKuiperBelt: {
			name: "Kuiper Belt",
			desc: "Vast stretches of space separate lonely rocks floating in a 300 year orbit around the sun. Still, there is something of great importance to be found here.",
			category: "outer",
			htmlId: 'col_kuiperBelt',
			order: 2,
			id: 'kuiperBelt',
			unlocked: false,
			explored: true
		},

		coloniseSolCenter: {
			name: "Sol Scientific Center",
			desc: "Welcome to our home. Our race is dedicated to scientific progress and interacting with others. If you wish to trade with us, we can provide you blueprints for technology that few in the galaxy have ever seen.",
			category: "outer",
			htmlId: 'col_solCenter',
			order: 2,
			id: 'solCenter',
			cost: {rocket: 1, rocketFuel: 7000},
			unlocked: false,
			explored: false
		},
	}

    return instance;
}());