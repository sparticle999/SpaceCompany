Game.interstellar = (function(){

	var instance = {
		engine: {
			count: 0,
			silicon: 500000,
			meteorite: 10000,
			hydrogen: 250000
		},
		aero: 0,
		shield: 0,
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
		this.shield += 1;
		document.getElementById("shield").innerHTML = this.shield;
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