Game.solCenterCategoryData = (function () {

    var instance = {};

    instance.alienTechnology = {
        title: 'Alien Technologies',
        category: 'alienTechnology',
        id: 'alienTechnology',
        htmlId: 'soc_alienTechnology',
        page: 'solCenter',
        order: 1,
        unlocked: false
    };

    return instance;

}());

Game.solCenterData = (function () {

    var instance = {};

    instance.plasmaTech = {
    	name: "Plasma",
    	id: "plasmaTech",
        htmlId: "solCtr_plasmaTech",
        desc: "Plasma being a state of extreme energy, it can be used as a storage of large amounts and provides the ability to use higher tier machines and transmutations.",
    	category: "alienTechnology",
        icon: "plasmaIcon",
        cost: {
    		'hydrogen': 1500,
    		'uranium': 1500,
    		'oil': 1500,
    		'wood': 1500,
    	},
    	onApply: function(){
    		Game.resources.unlock("plasma");
    	},
    };

    instance.emc = {
    	name: "Energy-Mass Conversion",
    	id: "emc",
        htmlId: "solCtr_emc",
        desc: "EMC is a technology only dreamt about back on Earth. Here, it's a reality. You can turn energy and plasma into regular resources, or, with large amounts, you can turn it into rare ones, which you are unable to find and have to make to acquire.",
    	category: "alienTechnology",
        useDesc: "This is where you can convert your energy and plasma into resources. (Right click to go back X10).<br>With Auto Emc (unlocked with rebirth), when you can automate multiple, the order will be top to bottom (always Max).",
    	icon: "energyIcon",
        cost: {
    		'energy': 75000,
    		'plasma': 100,
    	},
        amount: 1,
    	onApply: function(){
    		Game.solCenter.unlock("emc");
    	},
    };

    instance.dyson = {
    	name: "Dyson Segments",
    	id: "dyson",
        htmlId: "solCtr_dyson",
        desc: "This technology, unheard of previously, is now a reality, thanks to those in the Sol Scientific Center. The Sphere can provide much energy for millions of years, but at what cost?<br><br><b>NB: Dyson Sections' costs are based on the number you have, and are thus reset, when you use them all, or lowered if only partially spent.</b>",
    	category: "alienTechnology",
        icon: "dysonIcon",
        cost: {
    		'energy': 100000,
    		'plasma': 10000,
    	},
        items:{},
    	current: 0,
    	onApply: function(){
    		Templates.uiFunctions.unlock("segment");
            Templates.uiFunctions.unlock("ring");
            Templates.uiFunctions.unlock("swarm");
            Templates.uiFunctions.unlock("sphere");
    	},
    };

    instance.nanoswarm = {
    	name: "Nanoswarm",
    	id: "nanoswarm",
        htmlId: "solCtr_nanoswarm",
        desc: "",
    	category: "alienTechnology",
        icon: "nanoswarmIcon",
        resource: null,
    	current: 0,
    	onApply: function(){
    		Game.solCenter.unlock("nanoswarm");
    	},
    }

    return instance;
}());

Game.dysonData = (function(){

    var instance = {

        segment: {
            name: "Construction",
            id: "segment",
            htmlId: "solCtr_segment",
            desc: "These mega-structures cannot possibly be built in one piece. They must be created from small sections and forged together around the sun.",
            category: "alienTechnology",
            nav: "dyson",
            cost: {
                "titanium": 300000,
                "gold": 100000,
                "silicon": 200000,
                "meteorite": 1000,
                "ice": 100000,
            },
            order: 1,
        },
        ring: {
            name: "Ring",
            id: "ring",
            htmlId: "solCtr_ring",
            desc: "The ring is a solar strip orbiting and circling the sun that can produce 5,000 energy per second. It requires 50,000 rocket fuel in total to put the sections in place.",
            category: "alienTechnology",
            nav: "dyson",
            cost: {
                "segment": 50,
                "rocketFuel": 50000,
            },
            current: 0,
            output: 5000,
            order: 2,
        },
        swarm: {
            name: "Swarm",
            id: "swarm",
            htmlId: "solCtr_swarm",
            desc: "The swarm is an array of solar stations orbiting the sun, and once built, it can produce 25,000 energy per second. However, it requires 250,000 rocket fuel in total to put the sections in place.",
            category: "alienTechnology",
            nav: "dyson",
            cost: {
                "segment": 100,
                "rocketFuel": 250000,
            },
            current: 0,
            output: 25000,
            order: 3,
        },
        sphere: {
            name: "Sphere",
            id: "sphere",
            htmlId: "solCtr_sphere",
            desc: "The entire sphere is a monolithic structure completely surrounding the sun. It will allow for enough energy to get interstellar travel and finally escape this Solar System. It will produce 1,000,000 energy per second.<br>Costs: 1.000M Rocket Fuel to assemble the pieces.",
            category: "alienTechnology",
            nav: "dyson",
            cost: {
                "segment": 250,
                "rocketFuel": 1000000,
            },
            current: 0,
            output: 1000000,
            max: 1,
            onBuy: function(){
                if(current < max){
                    Game.solCenter.build("sphere");
                    Game.stargaze.tabUnlocked = true;
                    document.getElementById("stargazeTab").className = "";
                }
            },
            order: 4,
        },
    }

    return instance;
}());