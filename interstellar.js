Game.interstellar = (function(){

	var instance = {
		engine: {
			count: 0,
			silicon: 500000,
			meteorite: 10000,
			hydrogen: 250000
		},
		aero: 0,
		shield: {
			count: 0,
			spaceMetal: 100000,
			titanium: 100000,
			metal: 100000
		},
		drive: 0,
		IRS: 0,
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
		if(silicon >= this.engine.silicon && meteorite >= this.engine.meteorite && hydrogen >= this.engine.hydrogen && this.engine.count < 25){
			silicon -= this.engine.silicon;
			meteorite -= this.engine.meteorite;
			hydrogen -= this.engine.hydrogen;
			this.engine.count += 1;
			this.engine.silicon = Math.floor(500000 * Math.pow(1.1,this.engine.count));
			this.engine.meteorite = Math.floor(10000 * Math.pow(1.1,this.engine.count));
			this.engine.hydrogen = Math.floor(250000 * Math.pow(1.1,this.engine.count));
			document.getElementById("engineSiliconCost").innerHTML = Game.settings.format(this.engine.silicon);
			document.getElementById("engineMeteoriteCost").innerHTML = Game.settings.format(this.engine.meteorite);
			document.getElementById("engineHydrogenCost").innerHTML = Game.settings.format(this.engine.hydrogen);
			document.getElementById("engine").innerHTML = this.engine.count;
		}
	};

	instance.getAero = function(){
		this.aero += 1;
		document.getElementById("aero").innerHTML = this.aero;
	};

	instance.getShield = function(){
		if(spaceMetal >= this.shield.spaceMetal && titanium >= this.shield.titanium && metal >= this.shield.metal && this.shield.count < 50){
			spaceMetal -= this.shield.spaceMetal;
			titanium -= this.shield.titanium;
			metal -= this.shield.metal;
			this.shield.count += 1;
			this.shield.spaceMetal = Math.floor(100000 * Math.pow(1.1,this.shield.count));
			this.shield.titanium = Math.floor(100000 * Math.pow(1.1,this.shield.count));
			this.shield.metal = Math.floor(100000 * Math.pow(1.1,this.shield.count));
			document.getElementById("shieldSpaceMetalCost").innerHTML = Game.settings.format(this.shield.spaceMetal);
			document.getElementById("shieldTitaniumCost").innerHTML = Game.settings.format(this.shield.titanium);
			document.getElementById("shieldMetalCost").innerHTML = Game.settings.format(this.shield.metal);
			document.getElementById("shield").innerHTML = this.shield.count;
		}
	};

	instance.getDrive = function(){
		this.drive += 1;
		document.getElementById("drive").innerHTML = this.drive;
	};

	instance.getIRS = function(){
		this.IRS += 1;
		document.getElementById("IRS").innerHTML = this.IRS;
	};

	return instance;

}());