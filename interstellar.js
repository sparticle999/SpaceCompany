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
			//drive: 0,
			//IRS: 0,
		},
		stars: {
			star1: {
				name: "Alpha Centuri",
				distance: 4.3,
				planets: 1
			},
			star2: {
				name: "Barnard's Star",
				distance: 5.96,
				planets: 0
			},

		},
	};

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
			this.machines.shield.spaceMetal = Math.floor(100000 * Math.pow(1.1,this.machines.shield.count));
			this.machines.shield.titanium = Math.floor(100000 * Math.pow(1.1,this.machines.shield.count));
			this.machines.shield.metal = Math.floor(100000 * Math.pow(1.1,this.machines.shield.count));
			this.refreshUI();
		}
	};

	// instance.getDrive = function(){
	// 	this.machines.drive += 1;
	// 	document.getElementById("drive").innerHTML = this.machines.drive;
	// };

	// instance.getIRS = function(){
	// 	this.machines.IRS += 1;
	// 	document.getElementById("IRS").innerHTML = this.machines.IRS;
	// };

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
	}

	instance.save = function(data){

		data.interstellar = {version: this.dataVersion, machines: {}, stars: {}};
		for(var id in this.machines){
			data.interstellar.machines[id] = this.machines[id];
		}
		for(var id in this.stars){
			data.interstellar.stars[id] = this.stars[id];
		}
	}

	instance.load = function(data){
		if(data.interstellar) {
            if(data.interstellar.version && data.interstellar.version === this.dataVersion) {
                for(var id in data.interstellar.machines) {
                    this.machines[id] = data.interstellar.machines[id];
                    console.log(this.machines[id])
                }
                for(var id in data.interstellar.stars) {
                    this.stars[id] = data.interstellar.stars[id];
                    
                }
            }
        }
        this.refreshUI();
	}

	return instance;

}());