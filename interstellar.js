Game.interstellar = (function(){

	var instance = {
		dataVersion: 1,
		machines:{
			engine: {
				count: 0,
				silicon: 500000,
				meteorite: 10000,
				hydrogen: 250000
			},
			aero: {
				count: 0,
				silver: 200000,
				ice: 300000,
				gem: 250000
			},
			shield: {
				count: 0,
				spaceMetal: 100000,
				titanium: 100000,
				metal: 100000
			},
			drive: {
				count: 0,
				silver: 163000000,
				oil: 712000000,
				meteorite: 12300000
			},
			//IRS: 0,
		},
		interRocketBuilt: false,
	};

	instance.entries = {};

	instance.initialize = function(){
		for (var id in Game.starData) {
            var data = Game.starData[id];
            this.starTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'res_' + id,
                current: 0,
                perSecond: 0,
                perClick: 1,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                hidden: false
            });

            this.entries[id].capacity = data.baseCapacity;

            console.log("Loaded " + this.starTypeCount + " Stars");
        }
	}

	instance.getEngine = function(){
		if(silicon >= this.machines.engine.silicon && meteorite >= this.machines.engine.meteorite && hydrogen >= this.machines.engine.hydrogen && this.machines.engine.count < 25){
			silicon -= this.machines.engine.silicon;
			meteorite -= this.machines.engine.meteorite;
			hydrogen -= this.machines.engine.hydrogen;
			this.machines.engine.count += 1;
			this.machines.engine.silicon = Math.floor(500000 * Math.pow(1.1,this.machines.engine.count));
			this.machines.engine.meteorite = Math.floor(10000 * Math.pow(1.1,this.machines.engine.count));
			this.machines.engine.hydrogen = Math.floor(250000 * Math.pow(1.1,this.machines.engine.count));
			this.refreshUI();
		}
	};

	instance.getAero = function(){
		if(silver >= this.machines.aero.silver && ice >= this.machines.aero.ice && gem >= this.machines.aero.gem && this.machines.aero.count < 15){
			silver -= this.machines.aero.silver;
			ice -= this.machines.aero.ice;
			gem -= this.machines.aero.gem;
			this.machines.aero.count += 1;
			this.machines.aero.silver = Math.floor(100000 * Math.pow(1.1,this.machines.aero.count));
			this.machines.aero.ice = Math.floor(100000 * Math.pow(1.1,this.machines.aero.count));
			this.machines.aero.gem = Math.floor(100000 * Math.pow(1.1,this.machines.aero.count));
			this.refreshUI();
		}
	};

	instance.getShield = function(){
		if(spaceMetal >= this.machines.shield.spaceMetal && titanium >= this.machines.shield.titanium && metal >= this.machines.shield.metal && this.machines.shield.count < 50){
			spaceMetal -= this.machines.shield.spaceMetal;
			titanium -= this.machines.shield.titanium;
			metal -= this.machines.shield.metal;
			this.machines.shield.count += 1;
			this.machines.shield.spaceMetal = Math.floor(200000 * Math.pow(1.1,this.machines.shield.count));
			this.machines.shield.titanium = Math.floor(300000 * Math.pow(1.1,this.machines.shield.count));
			this.machines.shield.metal = Math.floor(250000 * Math.pow(1.1,this.machines.shield.count));
			this.refreshUI();
		}
	};

	instance.getDrive = function(){
		if(silver >= this.machines.drive.silver && oil >= this.machines.drive.oil && meteorite >= this.machines.drive.meteorite){
			silver -= this.machines.drive.silver;
			oil -= this.machines.drive.oil;
			meteorite -= this.machines.drive.meteorite;
			this.machines.drive.count += 1;
			this.machines.drive.silver = Math.floor(163000000 * Math.pow(1.1,this.machines.drive.count));
			this.machines.drive.oil = Math.floor(712000000 * Math.pow(1.1,this.machines.drive.count));
			this.machines.drive.meteorite = Math.floor(12300000 * Math.pow(1.1,this.machines.drive.count));
			this.refreshUI();
		}
	};

	// instance.getIRS = function(){
	// 	this.machines.IRS += 1;
	// 	document.getElementById("IRS").innerHTML = this.machines.IRS;
	// };

	instance.buildRocket = function(){
		if(this.machines.shield.count === 50 && this.machines.engine.count === 25 && this.machines.aero.count === 15){
			for(var i = 0; i < document.getElementsByClassName("interRocketBuild").length; i++){
				document.getElementsByClassName("interRocketBuild")[i].className = "interRocketBuild hidden";
			}
			//document.getElementById("T1Rocket").className = "";
			this.interRocketBuilt = true;
			document.getElementById("interRocketBuilt").className = "green";
			document.getElementById("interRocketBuilt").innerHTML = "Built";
		}
	}

	instance.refreshUI = function(){
		document.getElementById("engineSiliconCost").innerHTML = Game.settings.format(this.machines.engine.silicon);
		document.getElementById("engineMeteoriteCost").innerHTML = Game.settings.format(this.machines.engine.meteorite);
		document.getElementById("engineHydrogenCost").innerHTML = Game.settings.format(this.machines.engine.hydrogen);
		document.getElementById("engine").innerHTML = this.machines.engine.count;
		document.getElementById("aeroSilverCost").innerHTML = Game.settings.format(this.machines.aero.silver);
		document.getElementById("aeroIceCost").innerHTML = Game.settings.format(this.machines.aero.ice);
		document.getElementById("aeroGemCost").innerHTML = Game.settings.format(this.machines.aero.gem);
		document.getElementById("aero").innerHTML = this.machines.aero.count;
		document.getElementById("shieldSpaceMetalCost").innerHTML = Game.settings.format(this.machines.shield.spaceMetal);
		document.getElementById("shieldTitaniumCost").innerHTML = Game.settings.format(this.machines.shield.titanium);
		document.getElementById("shieldMetalCost").innerHTML = Game.settings.format(this.machines.shield.metal);
		document.getElementById("shield").innerHTML = this.machines.shield.count;
		document.getElementById("driveSilverCost").innerHTML = Game.settings.format(this.machines.drive.silver);
		document.getElementById("driveOilCost").innerHTML = Game.settings.format(this.machines.drive.oil);
		document.getElementById("driveMeteoriteCost").innerHTML = Game.settings.format(this.machines.drive.meteorite);
		document.getElementById("drive").innerHTML = this.machines.drive.count;
	}

	instance.save = function(data){

		data.interstellar = {version: this.dataVersion, machines: {}, stars: {}};
		for(var id in this.machines){
			data.interstellar.machines[id] = this.machines[id];
		}
		for(var id in Game.starData){
			data.interstellar.stars[id] = Game.starData[id];
		}
	}

	instance.load = function(data){
		if(data.interstellar) {
            if(data.interstellar.version && data.interstellar.version === this.dataVersion) {
                for(var id in data.interstellar.machines) {
                    this.machines[id] = data.interstellar.machines[id];
                }
                var i = 0;
                for(var id in data.interstellar.stars) {
                	i += 1;
                    this.entries[i] = data.interstellar.stars[id];
                    
                }
            }
        }
        this.refreshUI();
	}

	return instance;

}());
