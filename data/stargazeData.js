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
		para1: '"So here we are, at what seems like the end of your journey, but what you don\'t realise... is that this is just the beginning. Gazing up at the stars, you wonder what you could do with all of your newfound wealth and your empire in the solar system.',
		para2: 'Suddenly, the Overlord reaches out to you and says: "You have come far in your time, and I feel that your life is slowing to an end after a long life of empire building. However, you have not met the expectations I thought you would."',
		para3: '"Despite disappointing me and not achieving as much greatness as I would have liked, because of your loyalty and your dedication to me, I am prepared to give you another chance at life."',
		para4: '"You will have many chances to impress me, as I will give you the ability of redemption when you feel the time has come and sacrifice is necessary. Your empire will grow even greater than before every time you rebirth, and as long as your allegiance lies with me, I will show you the way to galactic domination."',
		para5: '"You will start over, a new life, but in exchange for your soul, I will reward your next self with the knowledge you have gained during your time in this universe and one of the most valuable materials in this side of the multiverse: Dark Matter."',
		category: "general",
		unlocked: true
	};

	instance.darkMatter = {
		name: "Dark Matter",
		desc: "Here, you can see how much Dark Matter you have acquired and the earnings you will recieve upon reset (in brackets).",
		potential: 0,
		current: 0,
		category: "general",
		unlocked: true
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		desc: "A ruthless faction with a fierce anger towards the ones in power, most notable, the Prasnian Empire. They are incessant in their opposition and focus their whole force towards attacking their enemies. Because of this, what they offer comprises mostly of upgrades tending towards a more active gameplay.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.",
		category: "faction",
		opinion: 0,
		unlocked: true
	};

	instance.overlord = {
		name: "Overlord Cult",
		desc: "This faction is shrowded in mystery. While not much is known, a great sense of power overlooks the whole galaxy, seemingly above the other 5 factions and their 'petty' squables. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.",
		category: "faction",
		opinion: 0,
		unlocked: true
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
		desc: "You get Dark Matter for the floors of the Wonder Station that you complete. It is likely you will have achieved all of these in your first run before resetting. You get 4 Dark Matter for every floor completed, but 2 for the last floor (only one wonder).",
	};

	instance.sphere = {
		name: "Sphere",
		desc: "For building a sphere in your home system and thus completing it, you get 15 dark matter. For every sphere built in another system, you gain 5 dark matter."
	};

	instance.research = {
		name: "Research Efficiency",
		desc: "For every 25 Research Efficiencies in any of the repurchaseable researches, you will get 2 Dark Matter.",
	};

	instance.rank = {
		name: "Achievement Rank",
		desc: "For every achievement rank attained, you will get 2 dark matter. Due to the easy difficulty in the first few achievement ranks, this will be your primary source of dark matter early in a run.",
	};

	instance.swarm = {
		name: "Swarms",
		desc: "One of the more complex systems, your Dark Matter gained from swarms is judged on an old mathematical sequence: The triangle numbers. You will get 1 dark matter for passing each triangular number of swarms. For example: 1,3,6,10,15,21...",
	};

	return instance;

}());

Game.rebirthData = (function(){

	var instance = {};

	/************
	** General **
	************/

	instance.rebirth = {
		name: "Rebirth",
		desc: "Stepping forth into a new life is a great undertaking and not something to be done on a whim. Once certain, you may start afresh, maintaining the knowledge and experience you have gained from your previous life and renew yourself, achieving greater and faster than before. You will keep any unspent dark matter, as well as your upgrades. Taking this step is a huge leap in not just this life, but every single rebirth you ever have. Once activated, you will never feel this powerless again.<br><b>NB: You cannot rebirth without a sphere, even on second runs.<br> NB: You will keep all upgrades purchased in your previous life  </b>",
		cost: 0,
		unlocked: true,
		category: "intro",
		onApply: function(){

		},
		remove: function(){

		},
	};

	instance.respec = {
		name: "Respec",
		desc: "When you have made a mistake or want to change your upgrades, you can respec and refund every upgrade for dark matter. Unfortunately, this huge amount of power can only be unleashed a finite number of times. The Overlord graciously gives you 3 free chances at redemption, but the rest will have to be earned through rebirth (1 extra every 3 times). <br><b>NB: You will lose machines gained with these ugprades, including all T5 machines. You will also divide your storage by 128 if you have the starting storage. (6400/50 = 128).</b>",
		cost: 0,
		unlocked: true,
		category: "intro",
		onApply: function(){

		},
		remove: function(){

		},
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
		tier: "basic",
		onApply: function(){
			for(var id in Game.resources.entries){
				var data = Game.resources.entries[id];
				if(data.manualgain){
					data.gainNum = 20;
					if(data.gainCost){
						Templates.uiFunctions.setClassText("Convert " + data.gainNum, "res_"+id+"gainNum");
					} else {
						Templates.uiFunctions.setClassText("Gain " + data.gainNum, "res_"+id+"gainNum");
					}
				}
			}
		},
		remove: function(){
	    	for(var id in Game.resources.entries){
				var data = Game.resources.entries[id];
				if(data.manualgain){
					data.gainNum = 1;
					if(data.gainCost){
						Templates.uiFunctions.setClassText("Convert " + data.gainNum, "res_"+id+"gainNum");
					} else {
						Templates.uiFunctions.setClassText("Gain " + data.gainNum, "res_"+id+"gainNum");
					}
				}
			}
	    },
		unlocked: true,
		achieved: false
	};

	instance.startingStorage = {
		name: "Starting Storage",
		desc: "Start with 6,400 max-storage on all resources every rebirth. (Does not affect if already over 6,400)",
		cost: 8,
		category: "carnelian",
		opinion: 6,
		tier: "basic",
		onApply: function(){
			var newStorage = 6400;
			for(var id in Game.resources.entries){
				var data = Game.resources.entries[id];
				if(data.baseCapacity == 50){
					if(data.capacity < 6400){
						data.capacity = 6400;
					}
				}
			}
			Templates.uiFunctions.refreshElements("capacity", "all");
		},
		remove: function(){
	    	var newStorage = 50;
			for(var id in Game.resources.entries){
				var data = Game.resources.entries[id];
				if(data.baseCapacity == 50){
					data.capacity = 50;
				}
			}
			Templates.uiFunctions.refreshElements("capacity", "all");
	    },
		unlocked: true,
		achieved: false
	};

	instance.storageDiscount = {
		name: "Storage Discount",
		desc: "All Storages no longer cost 100% of the main resource, but instead, 75%.",
		cost: 21,
		category: "carnelian",
		opinion: 14,
		tier: "basic",
		onApply: function(){
			Game.resources.storagePrice -= 0.25;
			Templates.uiFunctions.refreshElements("capacity", "all");
		},
		remove: function(){
	    	Game.resources.storagePrice += 0.25;
	    	Templates.uiFunctions.refreshElements("capacity", "all");
	    },
		unlocked: true,
		achieved: false
	};

	instance.dimensionalRift = {
		name: "Dimensional Rift",
		desc: "Opens a rift in the fabric of the multiverse, allowing you to store your resources in another dimension past your default capacity, up to 10x, at a 95% decrease in production after filling up.",
		cost: 37,
		category: "carnelian",
		opinion: 26,
		tier: "advanced",
		onApply: function(){
			Game.resources.capacityExcess = 10;
		},
		remove: function(){
			Game.resources.capacityExcess = 1;
		},
		unlocked: true,
		achieved: false
	};

	instance.T6Plasma = {
		name: "Tier 6 Batteries",
		desc: "Unlock Void Batteries",
		cost: 26,
		category: "carnelian",
		opinion: 15,
		tier: "advanced",
		onApply: function(){
			Templates.uiFunctions.unlock("energyStorageT6");
		},
		remove: function(){
			Templates.uiFunctions.hide("energyStorageT6");
	    	Game.buildings.entries.plasmaT3.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	/*************
	** Prasnian **
	*************/
	
	instance.T3Plasma = {
		name: "Tier 3 Plasma",
		desc: "Unlock the Electron Bath",
		cost: 11,
		category: "prasnian",
		opinion: 4,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.unlock("plasmaT3");
		},
		remove: function(){
			Templates.uiFunctions.hide("plasmaT3");
	    	Game.buildings.entries.plasmaT3.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	instance.floor1Discount = {
		name: "Floor 1 Discount",
		desc: "All Wonders on the First Floor recieve a 15% price reduction for activation.",
		cost: 16,
		category: "prasnian",
		opinion: 10,
		tier: "basic",
		onApply: function(){
			Game.wonder.floor1Price -= 0.15;
		},
		remove: function(){
	    	Game.wonder.floor1Price += 0.15;
	    },
		unlocked: true,
		achieved: false
	};

	instance.floor23Discount = {
		name: "Floor 2 & 3 Discount",
		desc: "All Wonders on the Second and Third Floor recieve a 20% price reduction for activation.",
		cost: 19,
		category: "prasnian",
		opinion: 15,
		tier: "basic",
		onApply: function(){
			Game.wonder.floor23Price -= 0.2;
		},
		remove: function(){
	    	Game.wonder.floor23Price += 0.2;
	    },
		unlocked: true,
		achieved: false
	};

	instance.autoEmc = {
		name: "Automated EMC",
		desc: "Check a box on an EMC resource and have that resource be 'EMCed' to the max every second.",
		cost: 24,
		category: "prasnian",
		opinion: 17,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.showClass("autoEmcHide");
		},
		remove: function(){
	    	Templates.uiFunctions.hideClass("autoEmcHide");
	    },
		unlocked: true,
		achieved: false
	};

	instance.freeWonder = {
		name: "Mystery Wonder Construction",
		desc: "First floor wonders are myusteriously pre-built for you every run. They still need to be activated.",
		cost: 13,
		category: "prasnian",
		opinion: 11,
		tier: "advanced",
		onApply: function(){
			for(var id in Game.wonder.entries){
				var data = Game.wonder.entries[id];
				if(data.built == false){
					data.built = true;
					Game.wonder.gainWonder(data);
				}
			}
			Templates.uiFunctions.hideId('wonderTab');
		},
		remove: function(){
			for(var id in Game.wonder.entries){
				var data = Game.wonder.entries[id];
				if(data.built == true){
					data.built = false;
					Game.wonder.removeWonder(data);
				}
			}
	    },
		unlocked: false,
		achieved: false
	};

	instance.T4Plasma = {
		name: "Tier 4 Plasma",
		desc: "Unlock the Quasar Redirection System",
		cost: 25,
		category: "prasnian",
		opinion: 17,
		tier: "advanced",
		onApply: function(){
			Templates.uiFunctions.unlock("plasmaT4");
		},
		remove: function(){
			Templates.uiFunctions.hide("plasmaT4");
	    	Game.buildings.entries.plasmaT4.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	instance.T3PSU = {
		name: "Tier 3 Plasma Storage",
		desc: "Unlock the Localised Vacuum Caster PSU",
		cost: 15,
		category: "prasnian",
		opinion: 12,
		tier: "advanced",
		onApply: function(){
			Game.buildings.unlockStorage("plasmaStorageT3");
		},
		remove: function(){
			Templates.uiFunctions.hide("plasmaStorageT3");
	    	Game.buildings.storageEntries.plasmaStorageT3.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	/**************
	** Hyacinite **
	**************/

	instance.startingLabs = {
		name: "Starting Labs",
		desc: "Start with 20 T1 Labs on rebirth.",
		cost: 7,
		category: "hyacinite",
		opinion: 3,
		tier: "basic",
		onApply: function(){
			Game.buildings.entries.scienceT1.current += 20;
		},
		remove: function(){
	    	Game.buildings.entries.scienceT1.current -= 20;
	    },
		unlocked: true,
		achieved: false
	};

	instance.labDiscount = {
		name: "Lab Discount",
		desc: "T2+ Labs are 20% cheaper with this upgrade.",
		cost: 16,
		category: "hyacinite",
		opinion: 12,
		tier: "basic",
		onApply: function(){
			var data = Game.buildings.entries.scienceT2.cost;
			for(var res in data){
				data[res] *= 0.8;
			}
		},
		remove: function(){
            var data = Game.buildings.entries.scienceT2.cost;
			for(var res in data){
				data[res] /= 0.8;
			}
	    },
		unlocked: true,
		achieved: false
	};

	instance.T5Labs = {
		name: "Tier 5 Laboratories",
		desc: "Unlock the Space Scientific Satellite Station",
		cost: 24,
		category: "hyacinite",
		opinion: 14,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.unlock("scienceT5");
		},
		remove: function(){
	    	Templates.uiFunctions.hide("scienceT5");
	    	Game.buildings.entries.scienceT5.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	instance.energyEff = {
		name: "Energy Efficiency Cap",
		desc: "Increase Energy Efficiency research cap to 50% instead of 25%.",
		cost: 36,
		category: "hyacinite",
		opinion: 25,
		tier: "basic",
		onApply: function(){
			Game.tech.entries["energyEfficiencyResearch"].maxLevel += 25;
		},
		remove: function(){
	    	Game.tech.entries["energyEfficiencyResearch"].maxLevel -= 25;
	    },
		unlocked: true,
		achieved: false
	};


	/*************
	** Kitrinos **
	*************/

	instance.T1Discount = {
		name: "Tier 1 Machine Discount",
		desc: "All Tier 1 machines on every resource (in resources tab) are 10% cheaper.",
		cost: 8,
		category: "kitrinos",
		opinion: 4,
		tier: "basic",
		onApply: function(){
			for(var id in Game.resources.entries){
				var data = Game.resources.entries[id].items[id + "T1"].cost;
				for(var res in data){
					data[res] *= 0.9;
				}
			}
		},
		remove: function(){
	    	for(var id in Game.resources.entries){
				var data = Game.resources.entries[id].items[id + "T1"].cost;
				for(var res in data){
					data[res] /= 0.9;
				}
			}
	    },
		unlocked: true,
		achieved: false
	};

	instance.T5Batteries = {
		name: "Tier 5 Batteries",
		desc: "Unlock the fifth tier of batteries for all your energy storage needs.",
		cost: 14,
		category: "kitrinos",
		opinion: 17,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.unlock('energyStorageT5');
		},
		remove: function(){
			Templates.uiFunctions.hide('energyStorageT5');
	    	Game.storageBuildingData.energyStorageT5.current = 0;
	    	Game.storageBuildingData.energyStorageT5.displayNeedsUpdate = true;
	    },
		unlocked: true,
		achieved: false
	};

	instance.multiBuy = {
		name: "Multi-Buy",
		desc: "Unlock powers of mass destruction (and purchasing!)",
		cost: 17,
		category: "kitrinos",
		opinion: 20,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.showClass('multiBuy');
		},
		remove: function(){
			Templates.uiFunctions.hideClass('multiBuy');
	    },
		unlocked: true,
		achieved: false
	};

	instance.T5Machines = {
		name: "Tier 5 Machine Research",
		desc: "Gain access to the research for fifth tier of resource machines. These are unlocked after activating the T4 Meteorite Wonder.",
		cost: 35,
		category: "kitrinos",
		opinion: 20,
		tier: "basic",
		onApply: function(){
			if(Game.wonder.entries.activateMeteorite.activated){
				for(var id in Game.resources.entries){
					if(checkRegResource(id)){
						if (id+'T5' in Game.buildings.entries) {
							Game.buildings.unlock(id + "T5")
						}
					}
				}
			}
		},
		remove: function(){
			for(var id in Game.resources.entries){
				if(checkRegResource(id)){
					if (id+'T5' in Game.buildings.entries) {
						Game.buildings.entries[id + "T5"].unlocked = false;
						Templates.uiFunctions.hide(id + "T5");
					}
				}
			}
	    },
		unlocked: true,
		achieved: false
	};

	instance.capitalInvestment = {
		name: "Capital Investment",
		desc: "For every resource at max storage, every other resource gets a 5% production boost.",
		cost: 29,
		category: "kitrinos",
		opinion: 18,
		tier: "advanced",
		onApply: function(){},
		remove: function(){},
		unlocked: false,
		achieved: false
	};


	/************
	** Moviton **
	************/

	instance.chemicalBoost = {
		name: "Chemical Plant Boost",
		desc: "Produce 100% more rocket fuel in chemical plants (T1).",
		cost: 11,
		category: "moviton",
		opinion: 7,
		tier: "basic",
		onApply: function(){
			Game.buildings.entries.rocketFuelT1.resourcePerSecond.rocketFuel *= 2;
		},
		remove: function(){
			Game.buildings.entries.rocketFuelT1.resourcePerSecond.rocketFuel /= 2;
		},
		unlocked: true,
		achieved: false
	};

	console.error("interstellar")
	instance.rocketDiscount = {
		name: "Rocket Discount",
		desc: "Rocket Parts Cost 35% less.",
		cost: 23,
		category: "moviton",
		opinion: 28,
		tier: "basic",
		onApply: function(){
			rocketPrice -= 0.35;
		},
		remove: function(){
	    	rocketPrice += 0.35;
	    },
		unlocked: true,
		achieved: false
	};

	instance.meteoriteTier3 = {
		name: "Meteorite Tier 3",
		desc: "Unlock the Planet Smasher building.",
		cost: 37,
		category: "moviton",
		opinion: 29,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.unlock("meteoriteT3");
		},
		remove: function(){
			Templates.uiFunctions.hide("meteoriteT3");
	    	Game.buildings.entries.meteoriteT3.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	instance.meteoriteTier4 = {
		name: "Meteorite Tier 4",
		desc: "Unlock the Nebulous Synthesizer building.",
		cost: 49,
		category: "moviton",
		opinion: 36,
		tier: "basic",
		onApply: function(){
			Templates.uiFunctions.unlock("meteoriteT4");
		},
		remove: function(){
			Templates.uiFunctions.hide("meteoriteT4");
	    	Game.buildings.entries.meteoriteT4.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

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

	instance.increaseProd1 = {
		name: "Dark Matter Boost",
		desc: "This adds a 1% boost to all resources (including science) for each Dark Matter you have not spent.",
		cost: 30,
		opinion: 20,
		category: "overlord",
		tier: "basic",
		onApply: function(){
	        Game.stargaze.dmBoost += 0.01;
	    },
	    remove: function(){
	    	Game.stargaze.dmBoost -= 0.01;
	    },
		unlocked: true,
		achieved: false,
	};

	instance.bribery = {
		name: "Bribery",
		desc: "Increases All Factions' Relationship by 20",
		cost: 49,
		category: "overlord",
		opinion: 20,
		tier: "basic",
		onApply: function(){
			for(var id in Game.stargaze.entries){
				var data = Game.stargaze.entries[id];
				if(data.category == "faction" && data.id != "overlord"){
					data.opinion += 20;
					data.displayNeedsUpdate = true;
				}
			}
		},
		remove: function(){
			Templates.uiFunctions.hide("meteoriteT4");
	    	Game.buildings.entries.meteoriteT4.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	instance.nanoswarm = {
		name: "Nanoswarms",
		desc: "Imagine bedbugs, but worse. These critters amplify your production by double every ten nanoswarms! They are capable of copying other machines\' forms and taking up their role in resource production. You can select one resource to be amplified, and change it at any time. <br><b>NB: Shows up in the Sol Center when unlocked.</b>",
		cost: 32,
		category: "overlord",
		opinion: 17,
		tier: "basic",
		onApply: function(){
			if(Game.solar.entries.solCenter.explored){
				Templates.uiFunctions.unlock("nanoswarmTech");
			}
		},
		remove: function(){
			Templates.uiFunctions.hideId("solCenterTab_solCtr_nanoswarmTech_ne");
	    	Game.solCenter.entries.nanoswarmTech.items.nanoswarm.current = 0;
	    },
		unlocked: true,
		achieved: false
	};

	// instance.autoStorage = {
	// 	name: "Automate Storage Upgrades",
	// 	desc: "Storage Upgrades will automatically upgrade, according to a toggle button on the resources tab.",
	// 	cost: 28,
	// 	category: "overlord",
	// 	opinion: 19,
	// 	tier: "basic",
	// 	onApply: function(){
	// 		Game.resources.autoStorage = true;
			
	// 	},
	// 	remove: function(){
	// 		Game.resources.autoStorage = false;
	//  },
	// 	achieved: false
	// }

	// instance.recycling = {
	// 	name: "Recycling",
	// 	desc: "Instead of destroying machines, recycle them for 50% of the cost!",
	// 	cost: 29,
	// 	category: "hyacinite",
	//	achieved: false
	// };

	return instance;

}());
