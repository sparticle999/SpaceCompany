Game.solarCategoryData = (function(){

	var instance = {};

    instance.inner = {
        title: 'Inner Solar System',
        category: 'inner',
        page: 'solar',
        order: 3,
        unlocked: false
    };

    instance.outer = {
    	title: 'Outer Solar System',
    	category: 'outer',
        page: 'solar',
        order: 4,
        unlocked: false
    }

	return instance;
}());

Game.solarData = (function () {

    var instance = {};

    // Rockets and rocketFuel can be found in resourceData.js
    // Rocket building can be found in buildingData.js
    // Maybe it's clearer to move them back to this js and extend their Objects from here?

    instance.moon = {
		name: "The Moon",
		desc: "The Moon is our largest satellite, revolving around the Earth once every 27 days. It contains a large quantity of Lunarite, left over from when it separated from the Earth billions of years ago. It is much stronger than regular metal and can be used to build more advanced machines.",
		category: "inner",
		order: 1,
		unlocked: false
	};

	instance.mercury = {
		name: "Mercury",
		desc: "Mercury is a lifeless rock with little to no value. It is not worth exploring on the ground as there are no valuable materials present.",
		category: "inner",
		order: 2,
		unlocked: false
	};

	instance.venus = {
		name: "Venus",
		desc: "Venus is the hottest planet in the solar system and the closest one to Earth. It is rich in greenhouse gases, contributing to its extreme heat. You can extract methane from Venus, which allows you to build up a new form of power generation.",
		category: "inner",
		order: 3,
		unlocked: false
	};

	instance.mars = {
		name: "Mars",
		desc: "Mars is the second closest planet to Earth and is covered in red iron oxide, also called rust. You can find Titanium on the surface, but it is more common inside the crust. Titanium will allow for Methane power plants and Silicon production.",
		category: "inner",
		order: 4,
		unlocked: false
	};

	instance.asteroidBelt = {
		name: "Asteroid Belt",
		desc: "The asteroid belt is a vast space with nearly 2 million asteroids. There you can harvest rare metals on Earth more easily, such as Gold and Silver.",
		category: "inner",
		order: 5,
		unlocked: false
	};

	instance.wonderStation = {
		name: "Wonder Station",
		desc: "The Wonder Station is a large, mysterious construct, orbiting inside the Asteroid Belt. What it contains isn't known exactly, but carvings on ancient artifacts depict something similar. They say that there, you will learn about an almost supernatural, extra-terrestrial overlord, commanding over the galaxy. They say that he will be able to teach you many things on your journey to inter-star and galactic exploration.",
		category: "inner",
		order: 6,
		unlocked: false
	};

	instance.jupiter = {
		name: "Juptier",
		desc: "The largest planet in the solar system, one of four gas giants, houses tons of tonnes of hydrogen in its surface atmosphere.",
		category: "outer",
		order: 1,
		unlocked: false
	};

	instance.saturn = {
		name: "Saturn",
		desc: "The second largest planet in the solar system, next to Jupiter. It is one of the few celestial bodies in our solar system to have rings and is the least dense planet in the solar system. You can find Helium here.",
		category: "outer",
		order: 2,
		unlocked: false
	};

	instance.uranus = {
		name: "Uranus",
		desc: "The planet that rotates differently from everyone else has winds up to 300 miles per hour (483kph). Its composition is much like that of the other gas giants, mainly composed of Hydrogen and Helium. Because of this, it is not worth exploring to get the same resources as in Saturn and Jupiter.",
		category: "outer",
		order: 3,
		unlocked: false
	};

	instance.neptune = {
		name: "Neptune",
		desc: "Neptune has the strangest weather in the solar system. There are huge storms and winds that are more violent than any other in the solar system. There is not much there but Methane, Hydrogen and Helium.",
		category: "outer",
		order: 4,
		unlocked: false
	};

	instance.pluto = {
		name: "Pluto",
		desc: "Pluto is the smallest of the widely known celestial bodies, being smaller than the moon. Classed as a dwarf planet, it orbits in the far reaches of the solar system. However, there may be more of interest on the surface than humans think.",
		category: "outer",
		order: 5,
		unlocked: false
	};

	instance.kuiperBelt = {
		name: "Kuiper Belt",
		desc: "In the large asteroid belt extending beyond Pluto, you see a large purple structure with a huge glass dome on one of the asteroids. This seems worth checking out. There could be something interesting there.",
		category: "outer",
		order: 6,
		unlocked: false
	};

	instance.solCenter = {
		name: "Sol Scientific Center",
		desc: "Welcome to our home. Our race is dedicated to scientific progress and interacting with others. If you wish to trade with us, we can provide you blueprints for technology that few in the galaxy have ever seen.",
		category: "outer",
		order: 7,
		unlocked: false
	};

    return instance;
}());