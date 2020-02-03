Game.stargazeCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: 'General',
        category: 'general'
    };

    instance.faction = {
        title: 'Factions',
        category: 'faction',
    };

    return instance;

}());

Game.stargazeData = (function(){

	var instance = {};

	instance.intro = {
		name: "Introduction",
		para1: '"So here we are, at what seems like the end of your journey, but what you don\'t realise... is that this is just the beginning." Gazing up at the stars, you wonder what you could do with all of your newfound wealth and your empire in the Solar System.',
		para2: 'Suddenly, the Overlord reaches out to you: "You have come far in your time, and I feel that your life is slowing down after long years of empire building. However, you have not met the expectations I thought you would."',
		para3: '"Despite disapointing me and not achieving as much greatness as I would have liked, because of your loyalty and your dedication to me, I am prepared to give you another chance at Rebirth."',
		para4: '"You will have many chances to impress me, as I will give you the ability of reincarnation when you feel the time has come and sacrifice is necessary. Your empire will grow even greater than before every time you Rebirth, and as long as your alliegence lies with me, I will show you the way to galactic domination."',
		para5: '"You will start over, a new life, but in exchange for your soul, I will reward your next self with the knowledge you have gained during your time, and with some of the most valuble material this side of the multiverse: Dark Matter."',
		category: "general",
		unlocked: true
	};

	instance.darkMatter = {
		name: "Dark Matter",
		desc: "Here, you can see how much Dark Matter you have acquired and the earnings you will recieve upon Rebirth (in brackets). You can find out how Dark Matter is gained and can spend it on powerful upgrades.",
		current: 0,
		count: 0,
		category: "general",
		unlocked: true
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		desc: "A ruthless faction with a fierce hatred of those in power, particularly the Prasnian Empire. They are intransigent in their opposition and focus all their energy on attacking their enemies. Because of this, what they offer consists mostly of upgrades tending towards a more active gameplay.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most interested in maintaining the status quo. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregation is a science-loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful across the galaxy and is motivated by profits, allying with those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist faction bent on galactic conquest. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rockets and interstellar travel.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.overlord = {
		name: "Overlord Cult",
		desc: "This faction is shrouded in mystery. Not much is known except that a great power holds sway over the whole galaxy, seemingly above the other five factions and their 'petty' squabbles. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};


	return instance;

}());

Game.darkMatter = (function(){

	var instance = {};

	/************
	** DM Gain **
	************/

	instance.wonder = {
		name: "Wonders",
		desc: "You get Dark Matter for the floors of the Wonder Station that you complete. You get 4 Dark Matter for every floor completed, but 2 for the last floor (only one Wonder).",
	};

	instance.sphere = {
		name: "Sphere",
		desc: "For building a Dyson Sphere in your home system and thus completing it, you gain 15 Dark Matter. For every Sphere built in another system, you gain 5 Dark Matter."
	};

	instance.research = {
		name: "Efficiency Research",
		desc: "For every 25 levels in any of the repurchaseable researches, you get 2 Dark Matter. Levels are summed across all repurchaseable research topics before this is calculated.",
	};

	instance.rank = {
		name: "Achievement Rank",
		desc: "For every achievement rank attained, you get 2 Dark Matter. Due to the easy difficulty in the first few achievement ranks, this will be your primary source of Dark Matter early in a run.",
	};

	instance.swarm = {
		name: "Swarms",
		desc: "Dark Matter gained from Dyson Swarms is based on the running sum of the whole numbers (1, 3, 6, 10, 15, 21, ... ). You get 1 Dark Matter for reaching each number in the sequence.",
	};

	return instance;

}());

Game.prestigeData = (function(){

	var instance = {};

	/************
	** General **
	************/

	instance.rebirth = {
		name: "Rebirth",
		desc: "Stepping forth into a new life is a great undertaking and not something to be done on a whim. Once certain, you may start afresh, retaining the knowledge and experience you gave gained in your previous life, allowing you to go farther and faster than before. You will keep any unspent Dark Matter and all Dark Matter upgrades you have already purchased. <br><b>NB: You cannot Rebirth without a Dyson Sphere, even on second runs.</b>",
		cost: 0,
		category: "intro",
	};

	instance.respec = {
		name: "Respec",
		desc: "When you have made a mistake or want to change your upgrades, you can Respec, which fully refunds the Dark Matter spent on upgrades so far. Unfortunately, this huge amount of power can only be unleashed a finite number of times. The Overlord graciously gives you 3 free chances at redemption, but the rest will have to be earned through Rebirth (1 extra every 3 times). <br><b>NB: You will lose machines gained from ugprades, including all T5 machines. You will also divide your storage by 128 if you purchased the Starting Storage upgrade. (6400/50 = 128).</b>",
		cost: 0,
		category: "intro",
	};

	instance.increaseProd1 = {
		name: "Dark Matter Boost",
		desc: "This adds a 1% boost to all resources (including Science) for each Dark Matter point you have not spent.",
		cost: 30,
		category: "darkMatter",
		onApply: function(){
	        dmBoost += 0.01;
	    },
	    remove: function(){
	    	dmBoost -= 0.01;
	    },
		achieved: false,
	};

	/**************
	** Carnelian **
	**************/

	instance.empowerManualGains = {
		name: "Empower Manual Gains",
		desc: "Increase all gain buttons to 20 per click instead of 1.",
		cost: 5,
		category: "carnelian",
		opinion: 3,
		onApply: function(){
			// old
			gainNum = 20;
			for(var resource in RESOURCE){
				if(RESOURCE[resource] != "science")$('#' + RESOURCE[resource] + 'Gain').text(gainNum);
			}

			// new
			// for(var id in Game.resources.entries){
			// 	Game.resources.entries[id].perClick = 20;
			// 	Game.resources.entries[id].displayNeedsUpdate = true;
			// }
		},
		remove: function(){
	    	gainNum = 1;
			for(var resource in RESOURCE){
				if(RESOURCE[resource] != "science")$('#' + RESOURCE[resource] + 'Gain').text(gainNum);
			}
	    },
		achieved: false
	};

	instance.startingStorage = {
		name: "Starting Storage",
		desc: "Start with 6,400 storage capacity for all resources on Rebirth. (Does not affect storage upgrades over 6,400.)",
		cost: 8,
		category: "carnelian",
		opinion: 6,
		onApply: function(){
			// old
			var newStorage = 6400;
			for(var i = 0; i < resources.length; i++){
				if(window[resources[i] + "Storage"] <= 6400){
					window[resources[i] + "Storage"] = newStorage;
					window[resources[i] + "NextStorage"] = newStorage * 2;
				}
			}

			// new
		},
		remove: function(){
	    	for(var i = 0; i < resources.length; i++){
				if(window[resources[i] + "Storage"] <= 6400){
					window[resources[i] + "Storage"] = 50;
					window[resources[i] + "NextStorage"] = 50 * 2;
				} else {
					window[resources[i] + "Storage"] /= 128;
					window[resources[i] + "NextStorage"] /= 128;
				}
			}
	    },
		achieved: false
	};

	instance.storageDiscount = {
		name: "Storage Discount",
		desc: "Storage upgrade cost in both the resource being upgraded and Metal / Lunarite is reduced by 25%.",
		cost: 21,
		category: "carnelian",
		opinion: 14,
		onApply: function(){
			// old
			storagePrice -= 0.25;

			// new
		},
		remove: function(){
	    	storagePrice += 0.25;
	    },
		achieved: false
	};

	/*************
	** Prasnian **
	*************/

	instance.T3Plasma = {
		name: "Tier 3 Plasma",
		desc: "Unlock the Electron Bath building.",
		cost: 11,
		category: "prasnian",
		opinion: 4,
		onApply: function(){
			document.getElementById("plasmaTier3").className = "";
		},
		remove: function(){
	    	document.getElementById("plasmaTier3").className = "hidden";
	    	bath = 0;
	    	updateCost();
	    },
		achieved: false
	};

	instance.floor1Discount = {
		name: "Floor 1 Discount",
		desc: "All Wonders on the Wonder Station first floor recieve a 15% price reduction.",
		cost: 16,
		category: "prasnian",
		opinion: 10,
		onApply: function(){
			floor1Price -= 0.15;
            updateWonderCost();
		},
		remove: function(){
	    	floor1Price += 0.15;
            updateWonderCost();
	    },
		achieved: false
	};

	instance.floor23Discount = {
		name: "Floor 2 & 3 Discount",
		desc: "All Wonders on the second and third floors of the Wonder Station recieve a 20% price reduction.",
		cost: 19,
		category: "prasnian",
		opinion: 15,
		onApply: function(){
			floor23Price -= 0.2;
			updateWonderCost();
		},
		remove: function(){
	    	floor23Price += 0.2;
            updateWonderCost();
	    },
		achieved: false
	};

	instance.autoEmc = {
		name: "Automated EMC",
		desc: "Check a box on any one EMC resource to automatically convert the maximum available amount every second.",
		cost: 24,
		category: "prasnian",
		opinion: 17,
		onApply: function(){
			var updateList = document.getElementsByClassName("autoEmcHide");
			for(var i = updateList.length-1; i >= 0; i--){
				updateList[i].className = "autoEmcHide";
			}
		},
		remove: function(){
	    	var updateList = document.getElementsByClassName("autoEmcHide");
			for(var i = updateList.length-1; i >= 0; i--){
				updateList[i].className = "autoEmcHide hidden";
			}
	    },
		achieved: false
	}

	/**************
	** Hyacinite **
	**************/

	instance.startingLabs = {
		name: "Starting Labs",
		desc: "Start with 20 Tier 1 Labs on Rebirth.",
		cost: 7,
		category: "hyacinite",
		opinion: 3,
		rebirthStart: {lab:20},
		onApply: function(){
			lab += 20;
		},
		remove: function(){
	    	lab -= 20
	    },
		achieved: false
	};

	instance.labDiscount = {
		name: "Lab Discount",
		desc: "Tier 2 and higher Labs are 20% cheaper with this upgrade.",
		cost: 16,
		category: "hyacinite",
		opinion: 12,
		onApply: function(){
			// old
			labT2PlusMulti -= 0.2;
			updateLabCost();

			// new
		},
		remove: function(){
            labT2PlusMulti += 0.2;
			updateLabCost();
	    },
		achieved: false
	};

	instance.T5Labs = {
		name: "Tier 5 Labs",
		desc: "Unlock the Space Scientific Satellite Station.",
		cost: 24,
		category: "hyacinite",
		opinion: 14,
		onApply: function(){
			document.getElementById("labTier5").className = "";
		},
		remove: function(){
	    	document.getElementById("labTier5").className = "hidden";
	    	labT5 = 0;
	    	updateLabCost();
	    },
		achieved: false
	};

	instance.energyEff = {
		name: "Energy Efficiency Cap",
		desc: "Increase Energy Efficiency research cap to 50% instead of 25%.",
		cost: 36,
		category: "hyacinite",
		opinion: 25,
		onApply: function(){
			Game.tech.entries["energyEfficiencyResearch"].maxLevel += 25;
		},
		remove: function(){
	    	Game.tech.entries["energyEfficiencyResearch"].maxLevel = 25;
	    },
		achieved: false
	};


	/*************
	** Kitrinos **
	*************/

	instance.T1Discount = {
		name: "Tier 1 Resource Producer Discount",
		desc: "Tier 1 producers of every resource in the Resources tab are 10% cheaper.",
		cost: 8,
		category: "kitrinos",
		opinion: 4,
		onApply: function(){
			T1Price -= 0.1;
		},
		remove: function(){
	    	T1Price += 0.1;
	    },
		achieved: false
	};

	instance.T5Batteries = {
		name: "Tier 5 Batteries",
		desc: "Unlock the fifth tier of Batteries for all your Energy storage needs.",
		cost: 14,
		category: "kitrinos",
		opinion: 17,
		onApply: function(){
			document.getElementById("batteriesT5").className = "";
		},
		remove: function(){
	    	document.getElementById("batteriesT5").className = "hidden";
	    	batteryT5 = 0;
	    	updateCost();
	    },
		achieved: false
	};

	instance.T5Machines = {
		name: "Tier 5 Machines",
		desc: "Gain access to a fifth tier of machines to produce resources.",
		cost: 35,
		category: "kitrinos",
		opinion: 20,
		onApply: function(){
			unlockTier5();
		},
		remove: function(){
	    	removeTier5();
	    },
		achieved: false
	};

	// instance.recycling = {
	// 	name: "Recycling",
	// 	desc: "Instead of destroying machines, recycle them for 50% of the cost!",
	// 	cost: 29,
	// 	category: "hyacinite",
	// 	achieved: false
	// };

	/************
	** Moviton **
	************/

	instance.chemicalBoost = {
		name: "Rocket Fuel Boost",
		desc: "Doubles the output of all Rocket Fuel producers.",
		cost: 11,
		category: "moviton",
		opinion: 7,
		onApply: function(){
			chemicalBoost += 1;
		},
		remove: function(){
	    	chemicalBoost -= 1;
	    },
		achieved: false
	};

	instance.rocketDiscount = {
		name: "Rocket Ship Discount",
		desc: "Parts for the interstellar Rocket Ship cost 35% less.",
		cost: 23,
		category: "moviton",
		opinion: 28,
		onApply: function(){
			rocketPrice -= 0.35;
		},
		remove: function(){
	    	rocketPrice += 0.35;
	    },
		achieved: false
	};

	instance.meteoriteTier3 = {
		name: "Meteorite Tier 3",
		desc: "Unlock the Planet Smasher building.",
		cost: 37,
		category: "moviton",
		opinion: 29,
		onApply: function(){
			document.getElementById("meteoriteTier3").className = "";
		},
		remove: function(){
	    	document.getElementById("meteoriteTier3").className = "hidden";
	    	smasher = 0;
			updateCost();
	    },
		achieved: false
	}

	instance.meteoriteTier4 = {
		name: "Meteorite Tier 4",
		desc: "Unlock the Nebulous Synthesizer building.",
		cost: 49,
		category: "moviton",
		opinion: 36,
		onApply: function(){
			document.getElementById("meteoriteTier4").className = "";
		},
		remove: function(){
	    	document.getElementById("meteoriteTier4").className = "hidden";
	    	nebulous = 0;
			updateCost();
	    },
		achieved: false
	}

	// instance.spaceElevator = {
	// 	name: "Space Elevator",
	// 	desc: "Build a giant elevator to reduce antimatter costs by 20%",
	// 	cost: 42,
	// 	category: "moviton",
	// 	achieved: false
	// }

	/*************
	** Overlord **
	*************/

	return instance;

}());
