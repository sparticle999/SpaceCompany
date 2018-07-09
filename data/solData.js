Game.solData = (function () {

    var instance = {};

    instance.plasma = {
    	name: "Plasma",
    	desc: "Plasma being a state of extreme energy, it can be used as a storage of large amounts and provides the ability to use higher tier machines and transmutations.",
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
    	desc: "EMC is a technology only dreamt about back on Earth. Here, it's a reality. You can turn energy and plasma into regular resources, or, with large amounts, you can turn it into rare ones, which you are unable to find and have to make to acquire.",
    	useDesc: "This is where you can convert your energy and plasma into resources. (Right click to go back X10).<br>With Auto Emc (unlocked with rebirth), when you can automate multiple, the order will be top to bottom (always Max)."
    	cost: {
    		'energy': 75000,
    		'plasma': 100,
    	},
    	onApply: function(){
    		Game.solCenter.unlockEMC();
    	},
    };

    instance.dyson = {
    	name: "Dyson Segements",
    	desc: "This technology, unheard of previously, is now a reality, thanks to those in the Sol Scientific Center. The Sphere can provide much energy for millions of years, but at what cost?<br><br><b>NB: Dyson Sections' costs are based on the number you have, and are thus reset, when you use them all, or lowered if only partially spent.</b>",
    	cost: {
    		'energy': 100000,
    		'plasma': 10000,
    	},
    	current: 0,
    	onApply: function(){
    		Game.solCenter.unlockDyson();
    	},
    	items: {
    		"segment": {
    			name: "Construction",
    			desc: "These mega-structures cannot possibly be built in one piece. They must be created from small sections and forged together around the sun.",
    			cost: {
    				"titanium": 300000,
    				"gold": 100000,
    				"silicon": 200000,
    				"meteorite": 1000,
    				"ice": 100000,
    			},
    		},
    		"ring": {
    			name: "Ring",
    			desc: "The ring is a solar strip orbiting and circling the sun that can produce 5,000 energy per second. It requires 50,000 rocket fuel in total to put the sections in place."
    			cost: 50,
    			current: 0,
    		},
    		"swarm": {
    			name: "Swarm",
    			desc: "The swarm is an array of solar stations orbiting the sun, and once built, it can produce 25,000 energy per second. However, it requires 250,000 rocket fuel in total to put the sections in place."
    			cost: 100,
    			current: 0,
    		},
    		"sphere": {
    			name: "Sphere",
    			desc: "The entire sphere is a monolithic structure completely surrounding the sun. It will allow for enough energy to get interstellar travel and finally escape this Solar System. It will produce 1,000,000 energy per second.<br>Costs: 1.000M Rocket Fuel to assemble the pieces."
    			cost: 250,
    			current: 0,
    			max: 1,
    			onBuy: function(){
    				if(current < max){
    					Game.solCenter.build("sphere");
    				}
    			}
    		},
    	},
    };

    instance.nanoswarm = {
    	name: "Nanoswarm",
    	desc: "",
    	resource: null,
    	current: 0,
    	onApply: function(){
    		Game.solCenter.unlockNano();
    	},
    }

    return instance;
}());