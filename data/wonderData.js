Game.wonderCategoryData = (function () {

    var instance = {};

    instance.wonderStation = {
        title: 'Wonder Station',
        category: 'wonderStation',
        id: 'wonderStation',
        htmlId: 'won_wonderStation',
        page: 'wonder',
        order: 1,
        unlocked: false
    };

    instance.floor1 = {
        title: 'Floor 1',
        category: 'floor1',
        id: 'floor1',
        htmlId: 'won_floor1',
        page: 'wonder',
        order: 2,
        unlocked: false
    };

    instance.floor2 = {
        title: 'Floor 2',
        category: 'floor2',
        id: 'floor2',
        htmlId: 'won_floor2',
        page: 'wonder',
        order: 3,
        unlocked: false
    };

    instance.floor3 = {
        title: 'Floor 3',
        category: 'floor3',
        id: 'floor3',
        htmlId: 'won_floor3',
        page: 'wonder',
        order: 4,
        unlocked: false
    };

    return instance;

}());

Game.wonderNavData = (function(){

    var instance = {};

    instance.wonderStation = {
        name: 'Wonder Station',
        desc: 'As you enter the revolving pyramids, floating through space, you feel a small tug on your spacecraft as it gravitates towards an opening doorway in the side of the lowest section. Exiting your spacecraft, you experience the artificial gravity and walk to the large hallway ahead. Adorning the walls are four huge paintings of monolithic structures in the corners of the room with descriptions underneath. At the far end of the room is a giant door, closed without any indication of being able to open. You feel that there is a higher being watching over you as you walk through the room.\n<b>NB: You must activate the wonders after building them to receive their effects.</b>',
        id: 'wonderStation',
        icon: 'wonderStationIcon',
        order: 1,
        htmlId: 'won_wonderStation',
        category: 'wonderStation',
        page: 'wonder',
        unlocked: true,
    };

    instance.precious = {
        name: 'Precious Wonder',
        desc: 'The Overlord is pleased with his new riches and offers you the ability to produce satellites, which orbit the globe and can find new resources.',
        id: 'precious',
        icon: 'uraniumIcon',
        order: 2,
        htmlId: 'won_precious',
        category: 'floor1',
        page: 'wonder',
        unlocked: false,
    };

    instance.energetic = {
        name: 'Energetic Wonder',
        desc: 'Now with a pyramid of energy at his disposal, the Overlord grants you some of his technology to produce electricity.',
        id: 'energetic',
        icon: 'lavaIcon',
        order: 3,
        htmlId: 'won_energetic',
        category: 'floor1',
        page: 'wonder',
        unlocked: false,
    };

    instance.technological = {
        name: 'Technological Wonder',
        desc: 'Proud of his new monument, the Overlord teaches you the ways of computerized machines and advanced gathering of resources.',
        id: 'technological',
        icon: 'repair',
        order: 4,
        htmlId: 'won_technological',
        category: 'floor1',
        page: 'wonder',
        unlocked: false,
    };

    instance.meteorite = {
        name: 'Meteorite Wonder',
        desc: 'The Overlord, watching his newly built wonder, offers you the possibility for a new wave of machines that best any before them.',
        id: 'meteorite',
        icon: 'meteoriteIcon',
        order: 5,
        htmlId: 'won_meteorite',
        category: 'floor1',
        page: 'wonder',
        unlocked: false,
    };

    instance.comms = {
        name: 'Comms Wonder',
        desc: 'In the center of the room, you see a smouldered antenna dish, lying on the floor. A plaque next to it says "Original Comms Relay between my first two star systems". A loud voice booms again from the speakers at the far corners of the floor: \n "This is one of my most prized memorabilia, reminding me of the first message I sent between star systems. I will be elated if you repair this for me, and in return, I will help you on your mission to colonise the stars."',
        id: 'comms',
        icon: 'commsIcon',
        order: 6,
        htmlId: 'won_comms',
        category: 'floor2',
        page: 'wonder',
        unlocked: false,
    };

    instance.rocket = {
        name: 'Rocket Wonder',
        desc: 'Up on the second floor, you find a disarray of broken machines and scattered parts on the floor. You can reassemble what seems to be a rocket engine lying next to you. The booming voice of the Overlord comes over the speakers in the room:\n"Greetings, friend. As you can see, this floor has largely fallen into disorder. If you fix it for me, you will be handsomely rewarded. Your first task is to repair the wonder to your right. It used to be a rocket engine, but I\'m not sure where the pieces are. You may need additional research to build this once more, but I\'m sure you will figure it out just fine."',
        id: 'rocket',
        icon: 'rocketIcon',
        order: 7,
        htmlId: 'won_rocket',
        category: 'floor2',
        page: 'wonder',
        unlocked: false,
    };

    instance.antimatter = {
        name: 'Antimatter Wonder',
        desc: 'In the corner of the floor, you see a faintly glowing, large canister, propped up against the walls. The announcing message plays after pressing a red button next to it: \n"This was my first antimatter tank for the maiden voyage of \"The Interstellar\", on my first trip to another star system. For repairing it and bringing back the memories, I will teach you about your own antimatter production to fuel your dreams of escaping your small piece of the universe."',
        id: 'antimatter',
        icon: 'antimatterIcon',
        order: 8,
        htmlId: 'won_antimatter',
        category: 'floor2',
        page: 'wonder',
        unlocked: false,
    };

    instance.portal = {
        name: 'Portal Room',
        desc: 'An obsidian-looking giant-sized frame stands out in the room, mounted on the far wall of the floor. It\'s plaque reads: \n"This is the pathway to the third and final floor of my mystical Wonder Station. It takes many resources to activate it, but once completed, will grant you access to the Stargate Room: The only way you will find your way out of this pathetic solar system and explore the cosmos."',
        id: 'portal',
        icon: 'portalIcon',
        order: 9,
        htmlId: 'won_portal',
        category: 'floor2',
        page: 'wonder',
        unlocked: false,
    };

    instance.stargate = {
        name: 'Stargate',
        desc: 'The final floor, despite being the smallest of the three, appears to be the trophy room, displaying an imposing control panel and a large table.\n<b>NB: The Wonder Tab will disappear after completing this wonder. Make sure all others are completed first.</b>',
        id: 'stargate',
        icon: 'stargateIcon',
        order: 10,
        htmlId: 'won_stargate',
        category: 'floor3',
        page: 'wonder',
        unlocked: false,
    };

    return instance;

}());

Game.wonderData = (function(){

	var instance = {};

	instance.buildPrecious = {
		name: 'Precious Wonder',
		desc: 'The first painting depicts a large, shiny structure and the plaque reads:\n"While I am rich beyond comparison, I still value adding precious resources to my collection. In return for your Gems, Silver, and Gold, I will teach you about something that lies inside your own planet, allowing you to find a rare resource and dangerous element previously unfound."',
		nav: 'wonderStation',
        order: 2,
        htmlId: 'won_precious',
        category: 'wonderStation',
        cost: {
            'gem': 10000,
            'silver': 7500,
            'gold': 5000,
        },
        onApply: function(){
            Game.wonder.unlock("activatePrecious");
        },
        onRemove: function(){
            Templates.uiFunctions.hideId("wonderTab_won_precious_ne");
        },
        built: false,
		unlocked: false,
	};

    instance.activatePrecious = {
        name: 'Precious Wonder',
        desc: 'Activating this wonder will teach you about Uranium, how to get it and how to harness it. Learning about this rare element found deep within Earth will unlock nuclear power, a new way to create Energy.',
        nav: 'precious',
        order: 2,
        htmlId: 'won_precious',
        category: 'floor1',
        cost: {
            'gem': 30000,
            'silver': 20000,
            'gold': 10000,
        },
        onApply: function(){
            Game.resources.unlock("uranium");
            Game.statistics.add('resourcesUnlocked');
            Game.buildings.unlock("energyT4");
        },
        onRemove: function(){
            Templates.uiFunctions.hideId("resourcesTab_res_uranium_ne");
            Game.statistics.add('resourcesUnlocked', -1);
            Game.buildings.entries.uraniumT1.current = 0;
            Templates.uiFunctions.hide("energyT4");
            Game.buildings.entries.energyT4.current = 0;
        },
        unlocked: false,
    };

    instance.buildEnergetic = {
        name: 'Energetic Wonder',
        desc: 'A pulsating image depicts a huge pyramid, with sparks of lightning. What could the Overlord want now?\n"Having drained many stars of their energy, I want a structure built in honor of the energy I have taken from the galaxy with my mighty power. In return for building this, I will grant you ways to generate a form of power no man has been able to harness before."',
        nav: 'wonderStation',
        order: 3,
        htmlId: 'won_energetic',
        category: 'wonderStation',
        cost: {
            'wood': 10000,
            'carbon': 5000,
            'uranium': 200,
        },
        onApply: function(){
            Game.wonder.unlock("activateEnergetic");
        },
        onRemove: function(){
            Templates.uiFunctions.hideId("wonderTab_won_energetic_ne");
        },
        built: false,
        unlocked: false,
    };

    instance.activateEnergetic = {
        name: 'Energetic Wonder',
        desc: 'Activating this wonder will allow you to harness the power of Lava, a new method of Energy generation.',
        nav: 'energetic',
        order: 3,
        htmlId: 'won_energetic',
        category: 'floor1',
        cost: {
            'wood': 30000,
            'carbon': 15000,
            'uranium': 500,
        },
        onApply: function(){
            Game.resources.unlock("lava");
            Game.statistics.add('resourcesUnlocked');
            Game.buildings.unlock("energyT5");
        },
        onRemove: function(){
            Templates.uiFunctions.hideId("resourcesTab_res_lava_ne");
            Game.statistics.add('resourcesUnlocked', -1);
            Game.buildings.entries.lavaT1.current = 0;
            Templates.uiFunctions.hide("energyT5");
            Game.buildings.entries.energyT5.current = 0;
        },
        unlocked: false,
    };

    instance.buildTechnological = {
        name: 'Technological Wonder',
        desc: 'A green-tinted picture shows the inside of some computer system.\n"With my technological superiority over anyone in the cosmos, I want a monument dedicated to the advanced computer systems I control. As a reward, I will teach you about computerized machines and give you the ability to make more advanced resource gatherers."',
        nav: 'wonderStation',
        order: 4,
        htmlId: 'won_technological',
        category: 'wonderStation',
        cost: {
            'silicon': 30000,
            'gold': 18000,
            'gem': 40000,
        },
        onApply: function(){
            Game.wonder.unlock("activateTechnological");
        },
        onRemove: function(){
            Templates.uiFunctions.hideId("wonderTab_won_technological_ne");
        },
        built: false,
        unlocked: false,
    };

    instance.activateTechnological = {
        name: 'Technological Wonder',
        desc: 'Activating this wonder will allow you to build Tier 3 Machines, a much more effective method of collecting resources.',
        nav: 'technological',
        order: 4,
        htmlId: 'won_technological',
        category: 'floor1',
        cost: {
            'silicon': 50000,
            'gold': 30000,
            'gem': 60000,
        },
        onApply: function(){
            for(var id in Game.resources.entries){
                if(checkRegResource(id)){
                    Game.buildings.unlock(id + "T3");
                }
            }
        },
        onRemove: function(){
            for(var id in Game.resources.entries){
                if(checkRegResource(id)){
                    Game.buildings.entries[id + "T3"].unlocked = false;
                    Templates.uiFunctions.hide(id + "T3");
                }
            }
        },
        unlocked: false,
    };

    instance.buildMeteorite = {
        name: 'Meteorite Wonder',
        desc: 'A blazing red portrait depicts a futuristic set of machines.\n"You have accomplished much so far, but now you face building a great structure to last generations. For my next monument, I will gift you with a new type of machine only seen in science-fiction. Meteorite machines use the energy installed in them to convert plasma into raw power useful in extracting resources."',
        nav: 'wonderStation',
        order: 5,
        htmlId: 'won_meteorite',
        category: 'wonderStation',
        cost: {
            'meteorite': 5000,
            'ice': 600000,
            'silicon': 1200000,
        },
        onApply: function(){
            Game.wonder.unlock("activateMeteorite");
        },
        onRemove: function(){
            Templates.uiFunctions.hideId("wonderTab_won_meteorite_ne");
        },
        built: false,
        unlocked: false,
    };

    instance.activateMeteorite = {
        name: 'Meteorite Wonder',
        desc: 'Activating this wonder gives you the ability to construct 4th Tier resource gathering machines, which are better and more efficient than anything before it.',
        nav: 'meteorite',
        order: 5,
        htmlId: 'won_meteorite',
        category: 'floor1',
        cost: {
            'meteorite': 10000,
            'ice': 2000000,
            'silicon': 4000000,
        },
        onApply: function(){
            for(var id in Game.resources.entries){
                if(checkRegResource(id)){
                    Game.buildings.unlock(id + "T4");
                }
            }
            if(Game.stargaze.upgradeEntries.T5Machines.achieved){
                for(var id in Game.resources.entries){
                    if(checkRegResource(id)){
                        if (id+'T5' in Game.buildings.entries) {
                            Game.buildings.unlock(id + "T5")
                        }
                    }
                }
            }
            Game.wonder.unlock("activateComms");
            Game.wonder.unlock("activateRocket");
            Game.wonder.unlock("activateAntimatter");
            Game.wonder.unlock("activatePortal");
        },
        onRemove: function(){
            for(var id in Game.resources.entries){
                if(checkRegResource(id)){
                    Game.buildings.entries[id + "T3"].unlocked = false;
                    Templates.uiFunctions.hide(id + "T3");
                }
            }
            Templates.uiFunctions.hideId("wonderTab_won_comms_ne");
            Templates.uiFunctions.hideId("wonderTab_won_rocket_ne");
            Templates.uiFunctions.hideId("wonderTab_won_antimatter_ne");
            Templates.uiFunctions.hideId("wonderTab_won_portal_ne");
        },
        unlocked: false,
    };

    instance.activateComms = {
        name: 'Comms Wonder',
        desc: 'For rebuilding the Communication Wonder, you will be able to talk and listen to aliens in other star systems and determine whether there is sentient life outside of our solar system.',
        nav: 'comms',
        icon: 'commsIcon',
        order: 6,
        htmlId: 'won_comms',
        category: 'floor2',
        cost: {
            'gold': 6000000,
            'silicon': 10000000,
            'ice': 6000000,
        },
        onApply: function(){
            Game.interstellar.tabUnlocked = true;
            Game.interstellar.unlock("comms");
        },
        unlocked: false,
    };

    instance.activateRocket = {
        name: 'Rocket Wonder',
        desc: 'For rebuilding the Rocket Wonder, you will discover advanced technologies where you can learn how to move beyond your tiny star system.',
        nav: 'rocket',
        icon: 'rocketIcon',
        order: 7,
        htmlId: 'won_rocket',
        category: 'floor2',
        cost: {
            'lunarite': 8000000,
            'titanium': 6000000,
            'metal': 12000000,
        },
        onApply: function(){
            Game.interstellar.tabUnlocked = true;
            Game.interstellar.unlock("rocket");
        },
        unlocked: false,
    };

    instance.activateAntimatter = {
        name: 'Antimatter Wonder',
        desc: 'For rebuilding the Antimatter Wonder, you will gain access to antimatter production and storage.',
        nav: 'antimatter',
        icon: 'antimatterIcon',
        order: 8,
        htmlId: 'won_antimatter',
        category: 'floor2',
        cost: {
            'uranium': 6000000,
            'lava': 10000000,
            'oil': 8000000,
        },
        onApply: function(){
            Game.interstellar.tabUnlocked = true;
            Game.interstellar.unlock("antimatter");
        },
        unlocked: false,
    };

    instance.activatePortal = {
        name: 'Portal Room',
        desc: 'Activating the Portal will allow you to go through it to get to the Third Floor of the Wonder Station, detached from the rest of the tetrahedral monolith.',
        nav: 'portal',
        icon: 'portalIcon',
        order: 9,
        htmlId: 'won_portal',
        category: 'floor2',
        cost: {
            'meteorite': 500000,
            'helium': 8000000,
            'silicon': 6000000,
        },
        onApply: function(){
            Game.wonder.unlock("activateStargate");
        },
        unlocked: false,
    };

    instance.activateStargate = {
        name: 'Stargate',
        desc: 'For rebuilding the Stargate, you will be able to explore outer space, beyond your own solar system.',
        nav: 'stargate',
        icon: 'stargateIcon',
        order: 10,
        htmlId: 'won_stargate',
        category: 'floor3',
        cost: {
            'plasma': 500000,
            'silicon': 920000000,
            'meteorite': 17000000,
        },
        onApply: function(){
            Game.interstellar.tabUnlocked = true;
            Game.interstellar.unlock("travel");
            Game.interstellar.unlock("military");
        },
        unlocked: false,
    };

    return instance;

}());