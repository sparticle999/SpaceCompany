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
		order: 1,
		htmlId: 'solar_moon',
		unlocked: false,
		explored: false
	},

	mercury: {
		name: "Mercury",
		category: "inner",
		id: 'mercury',
		order: 2,
		htmlId: 'solar_mercury',
		unlocked: false,
		explored: false
	},

	venus: {
		name: "Venus",
		category: "inner",
		id: 'venus',
		order: 3,
		htmlId: 'solar_venus',
		unlocked: false,
		explored: false
	},

	mars: {
		name: "Mars",
		category: "inner",
		id: 'mars',
		htmlId: 'solar_mars',
		order: 4,
		unlocked: false,
		explored: false
	},

	asteroidBelt: {
		name: "Asteroid Belt",
		category: "inner",
		id: 'asteroidBelt',
		htmlId: 'solar_asteroidBelt',
		order: 5,
		unlocked: false,
		explored: false
	},

	wonderStation: {
		name: "Wonder Station",
		category: "inner",
		id: 'wonderStation',
		htmlId: 'solar_wonderStation',
		order: 6,
		unlocked: false,
		explored: false
	},

	jupiter: {
		name: "Juptier",
		category: "outer",
		id: 'jupiter',
		htmlId: 'solar_jupiter',
		order: 1,
		unlocked: false,
		explored: false
	},

	saturn: {
		name: "Saturn",
		category: "outer",
		id: 'saturn',
		htmlId: 'solar_saturn',
		order: 2,
		unlocked: false,
		explored: false
	},

	uranus: {
		name: "Uranus",
		category: "outer",
		id: 'uranus',
		htmlId: 'solar_uranus',
		order: 3,
		unlocked: false,
		explored: false
	},

	neptune: {
		name: "Neptune",
		category: "outer",
		id: 'neptune',
		htmlId: 'solar_neptune',
		order: 4,
		unlocked: false,
		explored: false
	},

	pluto: {
		name: "Pluto",
		category: "outer",
		id: 'pluto',
		htmlId: 'solar_pluto',
		order: 5,
		unlocked: false,
		explored: false
	},

	kuiperBelt: {
		name: "Kuiper Belt",
		category: "outer",
		id: 'kuiperBelt',
		htmlId: 'solar_kuiperBelt',
		order: 6,
		unlocked: false,
		explored: false
	},

	solCenter: {
		name: "Sol Scientific Center",
		category: "outer",
		id: 'solCenter',
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

	    exploreMoon: {
			name: "Explore the Moon",
			desc: "The Moon is our largest satellite, revolving around the Earth once every 27 days. Let's give it a companion",
			category: "inner",
			htmlId: 'expl_moon',
			order: 1,
			id: 'moon',
			cost: {satellite: 1, rocket: 1, rocketFuel: 5},
			unlocked: false,
			explored: false
		},

	    coloniseMoon: {
			name: "Colonise the Moon",
			desc: "Our satellite has discovered a large quantity of Lunarite, left over from when the moon separated from the Earth billions of years ago. Lunarite is much stronger than regular metal and can be used to build more advanced machines.",
			resource: ["lunarite"],
			category: "inner",
			htmlId: 'col_moon',
			order: 2,
			id: 'moon',
			cost: {rocket: 1, rocketFuel: 25},
			unlocked: false,
			explored: false
		},

		exploreMercury: {
			name: "Explore Mercury",
			desc: "A small planet very close to the sun. Our scientists theorise that it might have a solid metal core.",
			category: "inner",
			htmlId: 'expl_mercury',
			order: 1,
			id: 'mercury',
			cost: {satellite: 1, rocket: 1, rocketFuel: 10},
			unlocked: false,
			explored: false
		},

		coloniseMercury: {
			name: "Explore Mercury",
			desc: "Mercury seems to be a lifeless rock with little to no value. It is not worth colonising as the deep scan by our satellite proves that there are no valuable resources present.",
			category: "inner",
			htmlId: 'col_mercury',
			order: 2,
			id: 'mercury',
			unlocked: false,
			explored: true
		},

		exploreVenus: {
			name: "Venus",
			desc: "Venus is the hottest planet in the solar system and the closest one to Earth. Scans reveal an athmosphere of greenhouse gases.  Let's send a satellite to see if we can exploit these gases.",
			category: "inner",
			htmlId: 'expl_venus',
			order: 1,
			id: 'venus',
			cost: {satellite: 1, rocket: 1, rocketFuel: 20},
			unlocked: false,
			explored: false
		},

		coloniseVenus: {
			name: "Venus",
			desc: "We can extract methane from Venus, which allows you to build up a new form of power generation. There are even signs of lifeforms in the athmosphere, very exciting!",
			resource: ["methane"],
			category: "inner",
			htmlId: 'col_venus',
			order: 2,
			id: 'venus',
			cost: {rocket: 1, rocketFuel: 100},
			unlocked: false,
			explored: false
		},

		exploreMars: {
			name: "Mars",
			desc: "Mars is the second closest planet to Earth and is covered in red iron oxide, also called rust. Where there's rust, there's metal, right?  Let's find out!",
			category: "inner",
			htmlId: 'expl_mars',
			order: 1,
			id: 'mars',
			cost: {satellite: 1, rocket: 1, rocketFuel: 15},
			unlocked: false,
			explored: false
		},

		coloniseMars: {
			name: "Mars",
			desc: "You can find Titanium on the surface, but it is more common inside the crust. Titanium will finally allow us to build strong machines to process methane and silicon.",
			resource: ["titanium"],
			category: "inner",
			htmlId: 'col_mars',
			order: 2,
			id: 'mars',
			cost: {rocket: 1, rocketFuel: 75},
			unlocked: false,
			explored: false
		},

		exploreAsteroidBelt: {
			name: "Asteroid Belt",
			desc: "The asteroid belt is a vast space with nearly 2 million asteroids. Out scientists hope to find rare earth metals here in a more pure form.",
			category: "inner",
			htmlId: 'expl_asteroidBelt',
			order: 1,
			id: 'asteroidBelt',
			cost: {satellite: 6, rocket: 2, rocketFuel: 100},
			unlocked: false,
			explored: false
		},

		coloniseAsteroidBelt: {
			name: "Asteroid Belt",
			desc: "Our scientists were right! We have found pure veins of gold and silver. Due to how large the Asteroid Belt is, we'll need a few colonies to make any headway.",
			resource: ["gold", "silver"],
			category: "inner",
			htmlId: 'col_asteroidBelt',
			order: 2,
			id: 'asteroidBelt',
			cost: {rocket: 4, rocketFuel: 400},
			unlocked: false,
			explored: false
		},
	
		exploreWonderStation: {
			name: "Wonder Station",
			desc: "We've discovered a strange structure floating in the Asteroid Belt, it seems to be of artificial origin.  You know what to do!",
			category: "inner",
			htmlId: 'expl_wonderStation',
			order: 1,
			id: 'wonderStation',
			cost: {satellite: 3, rocket: 1, rocketFuel: 50},
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

		exploreJupiter: {
			name: "Jupiter",
			desc: "The largest planet in the solar system, one of four gas giants, houses tons of tonnes of hydrogen in its surface atmosphere.",
			category: "outer",
			htmlId: 'expl_jupiter',
			order: 1,
			id: 'jupiter',
			cost: {satellite: 3, rocket: 1, rocketFuel: 200},
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

		exploreSaturn: {
			name: "Saturn",
			desc: "The second largest planet in the solar system, next to Jupiter. It is one of the few celestial bodies in our solar system to have rings and is the least dense planet in the solar system. I wonder what riches it holds.",
			category: "outer",
			htmlId: 'expl_saturn',
			order: 1,
			id: 'saturn',
			cost: {satellite: 3, rocket: 1, rocketFuel: 400},
			unlocked: false,
			explored: false
		},

		coloniseSaturn: {
			name: "Saturn",
			desc: "We struck gold!  Figuratively at least.  We are able to harvest helium from Saturn's athmosphere.",
			resource: ["helium"],
			category: "outer",
			htmlId: 'col_saturn',
			order: 2,
			id: 'saturn',
			cost: {rocket: 1, rocketFuel: 2000},
			unlocked: false,
			explored: false
		},

		exploreUranus: {
			name: "Uranus",
			desc: "The planet that rotates differently from everyone else has winds up to 300 miles per hour (483kph). Its composition is much like that of the other gas giants. Exploring Uranus will let us find out if there are any useful resources to gain.",
			category: "outer",
			htmlId: 'expl_uranus',
			order: 1,
			id: 'uranus',
			cost: {satellite: 3, rocket: 1, rocketFuel: 300},
			unlocked: false,
			explored: false
		},

		coloniseUranus: {
			name: "Uranus",
			desc: "Uranus' athmosphere is mainly composed of Hydrogen and Helium. It is not worth colonising just to get the same resources as at Saturn and Jupiter.",
			category: "outer",
			htmlId: 'col_uranus',
			order: 2,
			id: 'uranus',
			unlocked: false,
			explored: true
		},

		exploreNeptune: {
			name: "Neptune",
			desc: "Neptune has the strangest weather in the solar system. There are huge storms and winds that are more violent than any other in the solar system. These winds smell like free energy through wind power.",
			category: "outer",
			htmlId: 'expl_neptune',
			order: 1,
			id: 'neptune',
			cost: {satellite: 6, rocket: 2, rocketFuel: 600},
			unlocked: false,
			explored: false
		},

		coloniseNeptune: {
			name: "Neptune",
			desc: "Too bad!  The only smell found on Neptune is that of rotten eggs. We already have better sources of Methane, Hydrogen and Helium.",
			category: "outer",
			htmlId: 'col_neptune',
			order: 2,
			id: 'neptune',
			unlocked: false,
			explored: true
		},

		explorePluto: {
			name: "Pluto",
			desc: "Pluto is the smallest of the widely known celestial bodies, being smaller than the moon. Classed as a dwarf planet, it orbits in the far reaches of the solar system. However, there may be more of interest on the surface than humans think.",
			category: "outer",
			htmlId: 'expl_pluto',
			order: 1,
			id: 'pluto',
			cost: {satellite: 2, rocket: 1, rocketFuel: 1000},
			unlocked: false,
			explored: false
		},

		colonisePluto: {
			name: "Pluto",
			desc: "Ice, ice, baby!  With large quantities of ice being extremely expensive to create on Earth, it's actually cheaper to harvest it from Pluto.",
			resource: ["ice"],
			category: "outer",
			htmlId: 'col_pluto',
			order: 2,
			id: 'pluto',
			cost: {rocket: 1, rocketFuel: 4000},
			unlocked: false,
			explored: false
		},

		// Maybe onlock this after the first science T3 has been built?
		exploreKuiperBelt: {
			name: "Kuiper Belt",
			desc: "If not for the strange signal our observatories are picking up, it wouldn't be worth it to explore the Kuiper Belt.",
			category: "outer",
			htmlId: 'expl_kuiperBelt',
			order: 1,
			id: 'kuiperBelt',
			cost: {satellite: 12, rocket: 4, rocketFuel: 6000},
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

		exploreSolCenter: {
			name: "Sol Scientific Center",
			desc: "In the large asteroid belt extending beyond Pluto, you see a large purple structure with a huge glass dome on one of the asteroids. This seems worth checking out. There could be something interesting there.",
			category: "outer",
			htmlId: 'expl_solCenter',
			order: 1,
			id: 'solCenter',
			cost: {satellite: 3, rocket: 1, rocketFuel: 1000},
			unlocked: false,
			explored: false
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