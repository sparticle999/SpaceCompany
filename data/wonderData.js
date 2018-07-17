Game.wonderCategoryData = (function () {

    var instance = {};

    instance.wonderStation = {
        title: 'Wonder Station',
        category: 'wonderStation'
    };

    instance.floor1 = {
        title: 'Floor 1',
        category: 'floor1',
    };

    instance.floor2 = {
        title: 'Floor 2',
        category: 'floor2',
    };

    return instance;

}());

Game.wonderData = (function(){

	var instance = {};

    instance.station = {
        name: 'Wonder Station',
        desc: '',
        category: 'wonderStation',
        unlocked: true,
    };

	instance.precious = {
		name: 'Precious Wonder',
		desc: ["The first painting depicts a large, shiny structure and the plaque reads:","<br>",
                "While I am rich beyond comparison, I still value adding precious resources to my collection. In return for your Gems, Silver, and Gold, I will teach you about something that lies inside your own planet, allowing you to find a rare resource and dangerous element previously unfound."].join('\n'),
		category: 'floor1',
        built: false,
        buildCost: {
            'gem': 10000,
            'silver': 7500,
            'gold': 5000,
        },
        activateCost: {
            'gem': 30000,
            'silver': 20000,
            'gold': 10000,
        },
        onActivate: function(){
            Game.resources.unlock("uranium");
            Game.buildings.unlock("energyT4");
        },
		unlocked: false,
	};

    instance.energetic = {
        name: 'Energetic Wonder',
        desc: '',
        category: 'floor1',
        built: false,
        buildCost: {
            'wood': 10000,
            'charcoal': 5000,
            'uranium': 200,
        },
        activateCost: {
            'wood': 30000,
            'charcoal': 15000,
            'uranium': 500,
        },
        onActivate: function(){
            Game.resources.unlock("lava");
            Game.buildings.unlock("energyT5");
        },
        unlocked: false,
    };

    instance.technological = {
        name: 'Technological Wonder',
        desc: '',
        category: 'floor1',
        built: false,
        buildCost: {
            'silicon': 30000,
            'gold': 18000,
            'gem': 40000,
        },
        activateCost: {
            'silicon': 50000,
            'gold': 30000,
            'gem': 60000,
        },
        onActivate: function(){
            for(var id in Game.resources.entries){
                Game.buildings.unlock(id + "T3");
            }
        },
        unlocked: false,
    };

    instance.meteorite = {
        name: 'Meteorite Wonder',
        desc: '',
        category: 'floor1',
        built: false,
        buildCost: {
            'meteorite': 5000,
            'ice': 600000,
            'silicon': 1200000,
        },
        activateCost: {
            'meteorite': 10000,
            'ice': 2000000,
            'silicon': 4000000,
        },
        onActivate: function(){
            Game.resources.unlock("meteorite");
            Game.wonder.unlock("comms");
            Game.wonder.unlock("rocket");
            Game.wonder.unlock("antimatter");
            Game.wonder.unlock("portal");
        },
        unlocked: false,
    };

    instance.comms = {
        name: 'Comms Wonder',
        desc: '',
        category: 'floor2',
        activateCost: {
            'gold': 6000000,
            'silicon': 10000000,
            'ice': 6000000,
        },
        onActivate: function(){
            Game.interstellar.unlock("comms");
        },
        unlocked: false,
    };

    instance.rocket = {
        name: 'Rocket Wonder',
        desc: '',
        category: 'floor2',
        activateCost: {
            'lunarite': 8000000,
            'titanium': 6000000,
            'metal': 12000000,
        },
        onActivate: function(){
            Game.interstellar.unlock("rocket");
        },
        unlocked: false,
    };

    instance.antimatter = {
        name: 'Antimatter Wonder',
        desc: '',
        category: 'floor2',
        activateCost: {
            'uranium': 6000000,
            'lava': 10000000,
            'oil': 8000000,
        },
        onActivate: function(){
            Game.interstellar.unlock("antimatter");
        },
        unlocked: false,
    };

    instance.portal = {
        name: 'Portal Room',
        desc: '',
        category: 'floor2',
        activateCost: {
            'meteorite': 500000,
            'helium': 8000000,
            'silicon': 6000000,
        },
        onActivate: function(){
            Game.wonder.unlock("stargate");
        },
        unlocked: false,
    };

    instance.stargate = {
        name: 'Stargate',
        desc: '',
        category: 'floor2',
        activateCost: {
            'plasma': 500000,
            'silicon': 920000000,
            'meteorite': 17000000,
        },
        onActivate: function(){
            Game.interstellar.unlock("travel");
            Game.interstellar.unlock("military");
        },
        unlocked: false,
    };

    return instance;

}());