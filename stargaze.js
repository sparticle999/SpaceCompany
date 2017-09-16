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
		researchUnlocked=!1,researched=[],available=[],explored=[],tabsUnlocked=[],resourcesUnlocked=[],noBorder=[],rocketLaunched=!1,buttonsHidden=[],activated=[],techUnlocked=!1,meteoriteUnlocked=!1,globalEnergyLock=!1,plasma=0,plasmaps=0,heater=0,heaterLunariteCost=75e3,heaterGemCost=68e3,heaterSiliconCost=59e3,heaterToggled=!0,plasmatic=0,plasmaticLunariteCost=81e4,plasmaticSiliconCost=72e4,plasmaticMeteoriteCost=970,plasmaticToggled=!0,energy=0,energyps=0,battery=0,batteryMetalCost=5e4,batteryGemCost=5e4,batteryLunariteCost=3e4,batteryT2=0,batteryT2MetalCost=55e4,batteryT2GemCost=55e4,batteryT2LunariteCost=33e4,batteryT3=0,batteryT3MetalCost=55e5,batteryT3GemCost=55e5,batteryT3LunariteCost=33e5,batteryT4=0,batteryT4MetalCost=55e6,batteryT4GemCost=55e6,batteryT4LunariteCost=33e6,PSU=0,PSUSilverCost=77e4,PSUGoldCost=77e4,PSUUraniumCost=55e4,PSUT2=0,PSUT2SilverCost=93e5,PSUT2GoldCost=93e5,PSUT2UraniumCost=68e5,charcoalEngine=0,charcoalEngineMetalCost=50,charcoalEngineGemCost=25,charcoalEngineOutput=2,solarPanel=0,solarPanelMetalCost=30,solarPanelGemCost=35,solarPanelOutput=1.5,methaneStation=0,methaneStationLunariteCost=110,methaneStationTitaniumCost=90,nuclearStation=0,nuclearStationLunariteCost=2e4,nuclearStationTitaniumCost=1e4,magmatic=0,magmaticLunariteCost=25e3,magmaticGemCost=2e4,magmaticSilverCost=15e3,fusionReactor=0,fusionReactorLunariteCost=3e4,fusionReactorTitaniumCost=2e4,fusionReactorSiliconCost=15e3,oil=0,oilStorage=50,oilNextStorage=100,oilps=0,pump=0,pumpMetalCost=60,pumpGemCost=20,pumpjack=0,pumpjackMetalCost=250,pumpjackGemCost=80,pumpjackOilCost=50,pumpjackOutput=5,oilField=0,oilFieldLunariteCost=2400,oilFieldTitaniumCost=2700,oilFieldSiliconCost=3900,oilRig=0,oilRigLunariteCost=19400,oilRigTitaniumCost=16800,oilRigMeteoriteCost=760,metal=0,metalStorage=50,metalNextStorage=100,metalps=0,miner=0,minerMetalCost=10,minerWoodCost=5,heavyDrill=0,heavyDrillMetalCost=160,heavyDrillGemCost=60,heavyDrillOilCost=50,heavyDrillOutput=8,gigaDrill=0,gigaDrillLunariteCost=2800,gigaDrillGemCost=3400,gigaDrillSiliconCost=4100,quantumDrill=0,quantumDrillLunariteCost=29e3,quantumDrillGoldCost=18700,quantumDrillMeteoriteCost=900,gem=0,gemStorage=50,gemNextStorage=100,gemps=0,gemMiner=0,gemMinerMetalCost=15,gemMinerGemCost=10,advancedDrill=0,advancedDrillMetalCost=120,advancedDrillGemCost=200,advancedDrillOilCost=60,advancedDrillOutput=4,diamondDrill=0,diamondDrillLunariteCost=3400,diamondDrillGemCost=8e3,diamondDrillSiliconCost=4500,carbyneDrill=0,carbyneDrillLunariteCost=21e3,carbyneDrillGemCost=27e3,carbyneDrillMeteoriteCost=800,charcoal=0,charcoalStorage=50,charcoalNextStorage=100,charcoalps=0,charcoalToggled=!0,woodburner=0,woodburnerMetalCost=10,woodburnerWoodCost=5,furnace=0,furnaceMetalCost=80,furnaceWoodCost=40,furnaceOilCost=100,furnaceWoodInput=6,furnaceOutput=4,kiln=0,kilnLunariteCost=3500,kilnGemCost=6200,kilnSiliconCost=3800,fryer=0,fryerLunariteCost=15800,fryerLavaCost=12500,fryerMeteoriteCost=560,wood=0,woodStorage=50,woodNextStorage=100,woodps=0,woodcutter=0,woodcutterMetalCost=10,woodcutterWoodCost=5,laserCutter=0,laserCutterMetalCost=50,laserCutterGemCost=90,laserCutterOilCost=40,laserCutterOutput=6,deforester=0,deforesterLunariteCost=3e3,deforesterTitaniumCost=2700,deforesterSiliconCost=2500,infuser=0,infuserLunariteCost=16e3,infuserOilCost=31200,infuserMeteoriteCost=490,lunarite=0,lunariteStorage=50,lunariteNextStorage=100,lunariteps=0,methane=0,methaneStorage=50,methaneNextStorage=100,methaneps=0,titanium=0,titaniumStorage=50,titaniumNextStorage=100,titaniumps=0,gold=0,goldStorage=50,goldNextStorage=100,goldps=0,silver=0,silverStorage=50,silverNextStorage=100,silverps=0,silicon=0,siliconStorage=50,siliconNextStorage=100,siliconps=0,moonWorker=0,moonWorkerGemCost=500,moonDrill=0,moonDrillMetalCost=1e3,moonDrillGemCost=600,moonDrillOilCost=400,moonQuarry=0,moonQuarryLunariteCost=8e3,moonQuarryGemCost=5e3,moonQuarrySiliconCost=3500,planetExcavator=0,planetExcavatorTitaniumCost=45e3,planetExcavatorIceCost=37e3,planetExcavatorMeteoriteCost=500,vacuum=0,vacuumLunariteCost=50,vacuumGemCost=500,suctionExcavator=0,suctionExcavatorLunariteCost=100,suctionExcavatorGemCost=800,suctionExcavatorOilCost=600,spaceCow=0,spaceCowLunariteCost=1e4,spaceCowTitaniumCost=9e3,spaceCowSiliconCost=4100,vent=0,ventLunariteCost=52e3,ventHeliumCost=47e3,ventMeteoriteCost=390,explorer=0,explorerGemCost=1e3,lunariteDrill=0,lunariteDrillLunariteCost=200,lunariteDrillGemCost=800,lunariteDrillOilCost=1e3,pentaDrill=0,pentaDrillLunariteCost=14e3,pentaDrillGemCost=11e3,pentaDrillSiliconCost=5600,titanDrill=0,titanDrillLunariteCost=63e3,titanDrillGoldCost=27e3,titanDrillMeteoriteCost=600,droid=0,droidLunariteCost=200,droidMethaneCost=50,destroyer=0,destroyerLunariteCost=500,destroyerGemCost=1500,destroyerOilCost=1e3,deathStar=0,deathStarLunariteCost=17e3,deathStarSilverCost=11500,deathStarSiliconCost=8200,actuator=0,actuatorLunariteCost=61e3,actuatorHeliumCost=15700,actuatorMeteoriteCost=600,scout=0,scoutLunariteCost=100,scoutTitaniumCost=20,spaceLaser=0,spaceLaserLunariteCost=350,spaceLaserGemCost=900,spaceLaserOilCost=1200,bertha=0,berthaLunariteCost=19500,berthaTitaniumCost=18200,berthaSiliconCost=11e3,cannon=0,cannonLunariteCost=85100,cannonOilCost=93800,cannonMeteoriteCost=520,blowtorch=0,blowtorchLunariteCost=150,blowtorchTitaniumCost=30,scorcher=0,scorcherLunariteCost=500,scorcherGemCost=1200,scorcherOilCost=1600,annihilator=0,annihilatorLunariteCost=3e3,annihilatorGemCost=8300,annihilatorSilverCost=2400,desert=0,desertLunariteCost=2e4,desertSiliconCost=17700,desertMeteoriteCost=400,uranium=0,uraniumStorage=50,uraniumNextStorage=100,uraniumps=0,grinder=0,grinderTitaniumCost=2e3,grinderLunariteCost=4e3,grinderGoldCost=2e3,cubic=0,cubicUraniumCost=80,cubicLunariteCost=1e4,cubicOilCost=1e4,enricher=0,enricherLunariteCost=21700,enricherTitaniumCost=23e3,enricherSiliconCost=13500,recycler=0,recyclerLunariteCost=93100,recyclerMethaneCost=47e3,recyclerMeteoriteCost=830,lava=0,lavaStorage=50,lavaNextStorage=100,lavaps=0,crucible=0,crucibleGemCost=8e3,crucibleLunariteCost=4e3,extractor=0,extractorLunariteCost=16e3,extractorTitaniumCost=12e3,extractorSiliconCost=6e3,extruder=0,extruderLunariteCost=69e3,extruderTitaniumCost=57e3,extruderSiliconCost=39e3,veluptuator=0,veluptuatorLunariteCost=298e3,veluptuatorGoldCost=121e3,veluptuatorMeteoriteCost=750,hydrogen=0,hydrogenStorage=50,hydrogenNextStorage=100,hydrogenps=0,collector=0,collectorLunariteCost=6e3,collectorTitaniumCost=4800,magnet=0,magnetLunariteCost=10800,magnetTitaniumCost=9600,magnetGoldCost=6600,eCell=0,eCellSilverCost=37200,eCellGoldCost=34200,eCellSiliconCost=25800,hindenburg=0,hindenburgLunariteCost=172e3,hindenburgMethaneCost=134e3,hindenburgMeteoriteCost=710,helium=0,heliumStorage=50,heliumNextStorage=100,heliumStorageCost=100,heliumps=0,drone=0,droneLunariteCost=8400,droneSiliconCost=6e3,tanker=0,tankerLunariteCost=12600,tankerTitaniumCost=10200,tankerSiliconCost=8400,compressor=0,compressorLunariteCost=63e3,compressorTitaniumCost=43800,compressorSiliconCost=35400,skimmer=0,skimmerLunariteCost=255e3,skimmerTitaniumCost=173e3,skimmerMeteoriteCost=770,ice=0,iceStorage=50,iceNextStorage=100,iceStorageCost=100,iceps=0,icePick=0,icePickLunariteCost=17800,icePickGemCost=19300,iceDrill=0,iceDrillLunariteCost=23900,iceDrillTitaniumCost=21200,iceDrillSiliconCost=19600,freezer=0,freezerLunariteCost=117e3,freezerTitaniumCost=86e3,freezerSiliconCost=73e3,mrFreeze=0,mrFreezeWoodCost=379e3,mrFreezeHeliumCost=14e3,mrFreezeMeteoriteCost=1500,meteorite=0,meteoriteStorage=50,meteoriteNextStorage=100,meteoriteStorageCost=100,meteoriteps=0,meteoriteToggled=!0,printer=0,printerLunariteCost=1e5,printerSiliconCost=5e4,web=0,webLunariteCost=93e4,webUraniumCost=49e4,webSiliconCost=51e4,planetNuke=0,planetNukeTitaniumCost=0,planetNukeSiliconCost=0,planetNukeIceCost=0,condensator=0,condensatorLunariteCost=0,condensatorGemCost=0,condensatorIceCost=0,fossilator=0,fossilatorUraniumCost=0,fossilatorCharcoalCost=0,fossilatorLavaCost=0,multiDrill=0,multiDrillTitaniumCost=0,multiDrillGoldCost=0,multiDrillOilCost=0,diamondChamber=0,diamondChamberUraniumCost=0,diamondChamberCharcoalCost=0,diamondChamberMeteoriteCost=0,microPollutor=0,microPollutorMetalCost=0,microPollutorWoodCost=0,microPollutorLavaCost=0,forest=0,forestMetalCost=0,forestGemCost=0,forestHydrogenCost=0,cloner=0,clonerTitaniumCost=0,clonerGoldCost=0,clonerMethaneCost=0,interCow=0,interCowLunariteCost=0,interCowGoldCost=0,interCowHydrogenCost=0,club=0,clubUraniumCost=0,clubWoodCost=0,clubHeliumCost=0,philosopher=0,philosopherMetalCost=0,philosopherSilverCost=0,philosopherMeteoriteCost=0,werewolf=0,werewolfUraniumCost=0,werewolfGemCost=0,werewolfMethaneCost=0,tardis=0,tardisTitaniumCost=0,tardisSiliconCost=0,tardisMeteoriteCost=0,harvester=0,harvesterLunariteCost=0,harvesterWoodCost=0,harvesterOilCost=0,cage=0,cageLunariteCost=0,cageSiliconCost=0,cageMeteoriteCost=0,overexchange=0,overexchangeMetalCost=0,overexchangeSilverCost=0,overexchangeHeliumCost=0,science=0,scienceps=0,lab=0,labMetalCost=20,labGemCost=15,labWoodCost=10,labT2=0,labT2MetalCost=1e3,labT2GemCost=200,labT2WoodCost=500,labT3=0,labT3MetalCost=17e3,labT3GemCost=4700,labT3WoodCost=9600,labT4=0,labT4MetalCost=61e4,labT4GemCost=37e4,labT4WoodCost=926e3,labT5=0,labT5MetalCost=124e5,labT5GemCost=73e5,labT5WoodCost=159e5,rocket=0,rocketFuel=0,rocketFuelps=0,rocketFuelToggled=!0,chemicalPlant=0,chemicalPlantMetalCost=1e3,chemicalPlantGemCost=750,chemicalPlantOilCost=500,oxidisation=0,oxidisationMetalCost=12e3,oxidisationGemCost=8300,oxidisationOilCost=6800,hydrazine=0,hydrazineTitaniumCost=14e4,hydrazineSiliconCost=96300,hydrazineGoldCost=78600,dyson=0,dysonTitaniumCost=3e5,dysonGoldCost=1e5,dysonSiliconCost=2e5,dysonMeteoriteCost=1e3,dysonIceCost=1e5,ring=0,swarm=0,sphere=0,antimatter=0,antimatterps=0,antimatterToggled=!0;
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

			this.resetVars();
			this.hideMachines();

			updateCost();
			updateDysonCost();
			updateFuelProductionCost();
			updateLabCost();

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
				data.onApply();
			}
		}
	};

	instance.getStargazeData = function(id) {
		return this.entries[id];
	};

	return instance;

}());