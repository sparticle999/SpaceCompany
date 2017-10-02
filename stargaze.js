Game.stargaze = (function(){

	var instance = {};

	instance.entries = {};
	instance.categoryEntries = {};
	instance.navCount = 0;

	instance.upgradeEntries = {};
	
	instance.rebirthStart = [];				// Things you start with
	instance.rebirthUnlocked = [];			// Things that start unhidden
	instance.rebirthChildUnlocked = [];		// Things that have children that start unhidden

	instance.rebirthNeedsUpdate = true;

	instance.unlocked = false;

	instance.initialise = function(){
		for (var id in Game.stargazeData) {
			var data = Game.stargazeData[id];
			
			this.navCount++;
			this.entries[id] = $.extend({}, data, {
				id: id,
				htmlId: 'stargazeNav' + id,
				displayNeedsUpdate: true
			});
		}
		console.log("Loaded " + this.navCount + " Stargaze Navs");

		for (var id in Game.prestigeData) {
			var data = Game.prestigeData[id];
			
			this.navCount++;
			this.upgradeEntries[id] = $.extend({}, {
				id: id,
				htmlId: 'stargazeUpg' + id,
				displayNeedsUpdate: true,
				onApply: null,
				rebirthUnlocked: [],
				rebirthChildUnlocked: [],
				rebirthStart: {}
			}, data);
		}
	};

	instance.resetVars = function(){
		researchUnlocked=!1,researched=[],available=[],explored=[],tabsUnlocked=[],resourcesUnlocked=[],noBorder=[],rocketLaunched=!1,buttonsHidden=[],activated=[],techUnlocked=!1,meteoriteUnlocked=!1,globalEnergyLock=!1,plasma=0,plasmaps=0,heater=0,heaterToggled=!0,plasmatic=0,plasmaticToggled=!0,energy=0,energyps=0,battery=0,batteryMetalCost=5e4,batteryGemCost=5e4,batteryLunariteCost=3e4,batteryT2=0,batteryT2MetalCost=55e4,batteryT2GemCost=55e4,batteryT2LunariteCost=33e4,batteryT3=0,batteryT3MetalCost=55e5,batteryT3GemCost=55e5,batteryT3LunariteCost=33e5,batteryT4=0,batteryT4MetalCost=55e6,batteryT4GemCost=55e6,batteryT4LunariteCost=33e6,PSU=0,PSUSilverCost=77e4,PSUGoldCost=77e4,PSUUraniumCost=55e4,PSUT2=0,PSUT2SilverCost=93e5,PSUT2GoldCost=93e5,PSUT2UraniumCost=68e5,charcoalEngine=0,solarPanel=0,methaneStation=0,nuclearStation=0,magmatic=0,fusionReactor=0,oil=0,oilStorage=50,oilNextStorage=100,oilps=0,pump=0,pumpjack=0,oilField=0,oilRig=0,metal=0,metalStorage=50,metalNextStorage=100,metalps=0,miner=0,heavyDrill=0,gigaDrill=0,quantumDrill=0,gem=0,gemStorage=50,gemNextStorage=100,gemps=0,gemMiner=0,advancedDrill=0,diamondDrill=0,carbyneDrill=0,charcoal=0,charcoalStorage=50,charcoalNextStorage=100,charcoalps=0,charcoalToggled=!0,woodburner=0,furnace=0,kiln=0,fryer=0,wood=0,woodStorage=50,woodNextStorage=100,woodps=0,woodcutter=0,laserCutter=0,deforester=0,infuser=0,lunarite=0,lunariteStorage=50,lunariteNextStorage=100,lunariteps=0,methane=0,methaneStorage=50,methaneNextStorage=100,methaneps=0,titanium=0,titaniumStorage=50,titaniumNextStorage=100,titaniumps=0,gold=0,goldStorage=50,goldNextStorage=100,goldps=0,silver=0,silverStorage=50,silverNextStorage=100,silverps=0,silicon=0,siliconStorage=50,siliconNextStorage=100,siliconps=0,moonWorker=0,moonDrill=0,moonQuarry=0,planetExcavator=0,vacuum=0,suctionExcavator=0,spaceCow=0,vent=0,explorer=0,lunariteDrill=0,pentaDrill=0,titanDrill=0,droid=0,destroyer=0,deathStar=0,actuator=0,scout=0,spaceLaser=0,bertha=0,cannon=0,blowtorch=0,scorcher=0,annihilator=0,desert=0,uranium=0,uraniumStorage=50,uraniumNextStorage=100,uraniumps=0,grinder=0,cubic=0,enricher=0,recycler=0,lava=0,lavaStorage=50,lavaNextStorage=100,lavaps=0,crucible=0,extractor=0,extruder=0,veluptuator=0,hydrogen=0,hydrogenStorage=50,hydrogenNextStorage=100,hydrogenps=0,collector=0,magnet=0,eCell=0,hindenburg=0,helium=0,heliumStorage=50,heliumNextStorage=100,heliumStorageCost=100,heliumps=0,drone=0,tanker=0,compressor=0,skimmer=0,ice=0,iceStorage=50,iceNextStorage=100,iceStorageCost=100,iceps=0,icePick=0,iceDrill=0,freezer=0,mrFreeze=0,meteorite=0,meteoriteStorage=50,meteoriteNextStorage=100,meteoriteStorageCost=100,meteoriteps=0,meteoriteToggled=!0,printer=0,web=0,smasher=0,nebulous=0,planetNuke=0,condensator=0,fossilator=0,multiDrill=0,diamondChamber=0,microPollutor=0,forest=0,cloner=0,interCow=0,club=0,philosopher=0,werewolf=0,tardis=0,harvester=0,cage=0,overexchange=0,science=0,scienceps=0,lab=0,labT2=0,labT3=0,labT4=0,labT5=0,rocket=0,rocketFuel=0,rocketFuelps=0,rocketFuelToggled=!0,chemicalPlant=0,oxidisation=0,hydrazine=0,dyson=0,dysonTitaniumCost=3e5,dysonGoldCost=1e5,dysonSiliconCost=2e5,dysonMeteoriteCost=1e3,dysonIceCost=1e5,ring=0,swarm=0,sphere=0,antimatter=0,antimatterps=0,antimatterToggled=!0;
	};

	instance.hideMachines = function(){
		document.getElementById("labTier2").className="hidden",document.getElementById("labTier3").className="hidden",document.getElementById("labTier4").className="hidden",document.getElementById("labTier5").className="hidden",document.getElementById("oilTier2").className="hidden",document.getElementById("metalTier2").className="hidden",document.getElementById("gemTier2").className="hidden",document.getElementById("charcoalTier2").className="hidden",document.getElementById("woodTier2").className="hidden";for(var i=3;i<=4;i++)document.getElementById("uraniumTier"+i).className="hidden",document.getElementById("lavaTier"+i).className="hidden",document.getElementById("oilTier"+i).className="hidden",document.getElementById("metalTier"+i).className="hidden",document.getElementById("gemTier"+i).className="hidden",document.getElementById("charcoalTier"+i).className="hidden",document.getElementById("woodTier"+i).className="hidden",document.getElementById("siliconTier"+i).className="hidden",document.getElementById("lunariteTier"+i).className="hidden",document.getElementById("methaneTier"+i).className="hidden",document.getElementById("titaniumTier"+i).className="hidden",document.getElementById("goldTier"+i).className="hidden",document.getElementById("silverTier"+i).className="hidden",document.getElementById("hydrogenTier"+i).className="hidden",document.getElementById("heliumTier"+i).className="hidden",document.getElementById("iceTier"+i).className="hidden";
	};

	instance.rebirth = function(){
		if(sphere < 1)return;
		var check = confirm("Are you sure? This is non-reversible after you reset and save.");
		if(check){
			Game.stargaze.entries.darkMatter.count += Game.stargaze.entries.darkMatter.current;
			Game.notifySuccess("Dark Matter!", "You have gained " + Game.stargaze.entries.darkMatter.current + " Dark Matter from rebirthing into your new life!");

			for(var i = 0; i < resourcesUnlocked.length; i++){
				document.getElementById(resourcesUnlocked[i]).className = "hidden";
				if(resourcesUnlocked[i].indexOf("Nav") != -1)document.getElementById(resourcesUnlocked[i]).className = "sideTab hidden";
			}
			for(var i = 0; i < buttonsHidden.length; i++){
				if(buttonsHidden[i].indexOf("Progress") != -1){
					document.getElementById(buttonsHidden[i]).className = "progress";
				} else {
					document.getElementById(buttonsHidden[i]).className = "btn btn-default";
				}
			}
			for(var i = 0; i < explored.length; i++){
				document.getElementById(explored[i]).className = "inner sideTab hidden";
				if(explored[i] != "moon", explored[i] != "venus", explored[i] != "mars", explored[i] != "asteroidBelt")document.getElementById(explored[i]).className = "outer sideTab hidden";
			}
			document.getElementById("spaceRocket").className = "sideTab";
			document.getElementById("mercury").className = "sideTab hidden";
			document.getElementById("collapseInner").className = "collapseInner sideTab hidden";
			document.getElementById("collapseOuter").className = "collapseOuter sideTab hidden";
			for(var i = 0; i < tabsUnlocked.length; i++){
				document.getElementById(tabsUnlocked[i]).className = "hidden";
			}
			for(var i = 0; i < activated.length; i++){
				$(document.getElementById(activated[i] + "Activation")).text("Dormant");
				document.getElementById(activated[i] + "Activation").className = "red";
			}
			Game.tech.reset();
			Game.interstellar.initialise();
			Game.buildings.reset();
			Game.resources.reset();

			this.resetVars();
			this.hideMachines();

			updateCost();
			updateDysonCost();

			Game.settings.entries.gainButtonsHidden = false;
			for(var i = 0; i < document.getElementsByClassName("gainButton").length; i ++){
                document.getElementsByClassName("gainButton")[i].className = "gainButton";
            }
            $('#gainButtonsHidden').prop('checked', false);

			// Refreshing Interstellar Tab
			var objects = ["comms", "rocket", "rocketParts", "antimatter", "military"];
			for(var i = 0; i < objects.length; i++){
				var object = Game.interstellar[objects[i]];
				for(var entry in object.entries){
					$('#' + object.entries[entry].htmlId + 'Count').text(object.entries[entry].count);
				}
			}
			for(var star in Game.interstellar.stars.entries){
				Game.interstellar.stars.entries[star].unlocked = false;
				Game.interstellar.stars.entries[star].explored = false;
				document.getElementById('star_' + star).className = "";
				document.getElementById('star_' + star + '_conquer').className = "hidden";
			}
			for(var achiev in Game.achievements.entries){
				var data = Game.achievements.entries[achiev]
				data.unlocked = -1;
				data.displayNeedsUpdate = true;
				document.getElementById(data.id + '_bg').style = "width: 50px; height: 40px; background: url(" + data.iconPath + data.iconName + "." + data.iconExtension + ") no-repeat center; -webkit-background-size: contain;background-size: contain; margin-left: 5px;opacity: 0.2";
			}
			Game.achievements.rank = 0;
			for(var upgrade in Game.stargaze.upgradeEntries){
				Game.stargaze.upgradeEntries[upgrade].achieved = false;
				Game.stargaze.upgradeEntries[upgrade].displayNeedsUpdate = true;
			}
			for(nav in this.entries){
				if(this.entries[nav].opinion){
					this.entries[nav].opinion = 0;
					this.entries[nav].displayNeedsUpdate = true;
				}
			}
		}
	};

	instance.upgrade = function(id){
		if(id == 'rebirth'){
			this.rebirth();
		}
		var upgradeData = this.upgradeEntries[id];
		if(!upgradeData) {
			console.log('"' + id + '" is not a recognised upgrade.');
			return;
		}
		if(upgradeData.achieved == false){
			if(this.entries.darkMatter.count >= upgradeData.cost){
				this.entries.darkMatter.count -= upgradeData.cost;
				this.applyUpgradeEffect(id);
				if(upgradeData.category != "intro" || "darkMatter")this.entries[upgradeData.category].opinion += upgradeData.opinion;
				this.entries[upgradeData.category].displayNeedsUpdate = true;
				upgradeData.achieved = true;
			}
		}
	};

	instance.applyUpgradeEffect = function(id) {
		var data = this.upgradeEntries[id];
		for(var i = 0; i < data.rebirthUnlocked.length; i++){
			this.rebirthUnlocked.push(data.rebirthUnlocked[i]);
		}
		for(var i = 0; i < data.rebirthChildUnlocked.length; i++){
			this.rebirthChildUnlocked.push(data.rebirthChildUnlocked[i]);
		}
		for(var object in data.rebirthStart){
			this.rebirthStart.push(data.rebirthStart[object]);
		}
		if(data.onApply !== null) {
			data.onApply();
		}
		this.rebirthNeedsUpdate = true;
	};

	instance.save = function(data){
		data.stargaze = {entries: {}, upgradeEntries: {}, rebirthStart: {}, rebirthUnlocked: {}, rebirthChildUnlocked: {}, unlocked: this.unlocked};
		for(var id in this.entries){
			data.stargaze.entries[id] = this.entries[id];
		}
		for(var id in this.upgradeEntries){
			data.stargaze.upgradeEntries[id] = {achiev: this.upgradeEntries[id].achieved};
		}
		for(var id in this.rebirthStart){
			data.stargaze.rebirthStart[id] = this.rebirthStart[id];
		}
		for(var id in this.rebirthUnlocked){
			data.stargaze.rebirthUnlocked[id] = this.rebirthUnlocked[id];
		}
		for(var id in this.rebirthChildUnlocked){
			data.stargaze.rebirthChildUnlocked[id] = this.rebirthChildUnlocked[id];
		}
	};

	instance.load = function(data){
		if(data.stargaze){
			if(typeof data.stargaze.entries !== 'undefined'){
                for(id in data.stargaze.entries){
                    this.entries[id] = data.stargaze.entries[id];
                    this.entries[id].displayNeedsUpdate = true;
                }
            }
            if(typeof data.stargaze.upgradeEntries !== 'undefined'){
                for(id in data.stargaze.upgradeEntries){
                    this.upgradeEntries[id].achieved = data.stargaze.upgradeEntries[id].achiev;
                    this.upgradeEntries[id].displayNeedsUpdate = true;
                }
            }
            if(typeof data.stargaze.rebirthStart !== 'undefined'){
                for(id in data.stargaze.rebirthStart){
                    this.rebirthStart[id] = data.stargaze.rebirthStart[id];
                }
            }
            if(typeof data.stargaze.rebirthUnlocked !== 'undefined'){
                for(id in data.stargaze.rebirthUnlocked){
                    this.rebirthUnlocked[id] = data.stargaze.rebirthUnlocked[id];
                }
            }
            if(typeof data.stargaze.rebirthChildUnlocked !== 'undefined'){
                for(id in data.stargaze.rebirthChildUnlocked){
                    this.rebirthChildUnlocked[id] = data.stargaze.rebirthChildUnlocked[id];
                }
            }
            this.unlocked = data.stargaze.unlocked;
		}
		for(var id in this.upgradeEntries){
			var data = this.upgradeEntries[id];
			if(data.achieved == true){
				if(data.onApply)data.onApply();
			}
		}
	};

	instance.getStargazeData = function(id) {
		return this.entries[id];
	};

	return instance;

}());