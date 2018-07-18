Game.solCenter = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.tabUnlocked = false;
    instance.autoResource = null;

    instance.initialise = function(){
    	for(var id in Game.solData){
    		var data = Game.solData[id];
    		this.entries[id] = $.extend({}, data, {
				id: id,
				htmlId: 'solCtr' + id,
				unlocked: false,
				researched: false,
				displayNeedsUpdate: true,
			});
    	}
    };

    instance.update = function(delta){
    	if(this.autoResource){
    		emcAmount = "Max";
			convert(autoResource, false);
    	};
    	var nanoswarm = this.entries.nanoswarm
    	if(nanoswarm.current > 0){
    		var data = Game.resources.entries[nanoswarm.resource];
            var addValue = data.perSecond * Math.pow(1.1,nanoswarm.current) * delta;
            this.addResource(nanoswarm.resource, addValue);
    	}
    };

    instance.save = function(data){
    	data.solCenter = {v: this.dataVersion, e: {}}
    	for(var id in this.entries){
    		var ent = this.entries[id]
    		data.solCenter.e[id] = {};
    		data.solCenter.e[id].unlocked = ent.unlocked;
    		data.solCenter.e[id].researched = ent.researched;
    		if(id == "nanoswarm"){
    			data.solCenter.e[id].current = ent.current;
    			data.solCenter.e[id].resource = ent.resource;
    		}
    	}
    };

    instance.load = function(data){
    	if(data.solCenter){
    		for (var id in data.solCenter.e) {
            	if (typeof this.entries[id] !== 'undefined') {
            		var ent = data.solCenter.e[id];
            		for(var prop in ent){
            			this.entries[id][prop] = ent.prop;
            			this.entries[id].displayNeedsUpdate = true;
            		}
            	}
            	if(this.entries[id].unlocked == true){
            		this.entries[id].onApply();
            	}
        	}
    	}
    };

    instance.research = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data.cost)){
    		data.researched = true;
    		this.entries[id].onApply();
    		data.displayNeedsUpdate = true;
    	}
    };

    instance.calcCost = function(data, resource, power){
        return Math.floor(data.cost[resource.toString()] * Math.pow((power || 1.1),(data.current || 0)));
    };

    instance.checkCost = function(data){
        var power = 1.1;
        if(data.id == "dyson"){
            power = 1.02;
        }
    	if (typeof data === 'undefined') {return false;}
        var resourcePass = 0;
        for(var resource in data.cost){
            var res = Game.resources.getResourceData(resource);
            if(res.current >= this.calcCost(data, resource, power)){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(data.cost).length){
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                res.current -= this.calcCost(data, resource, power);
            }
            return true;
        } else {
            return false;
        }
    };

    instance.convert = function(resource, notification){
    	var input = Game.resources.entries.energy;
    	if(resource == "meteorite"){
    		input = Game.resource.entries.plasma;
    	}

    	var data = Game.resources.entries[resource];

    	var current = data.current;
    	var capacity = data.capacity;
    	var amount;
    	if(this.entries.emc.amount === "Max"){
    		amount = Math.floor(Math.min(Math.floor(getResource(input.current)/data.emc), capacity - current));
    	}else{
    		amount = Math.floor(Math.min(emcAmount, capacity - current));
    	}
    	
    	var required = amount * data.emc;

    	if(amount > 0 && getResource(input.current) >= required){
    		Game.resources.takeResource(RESOURCE.Energy, required);
    		Game.resources.addResource(resource, amount);
    		if(notification != false){
    			Game.notifyInfo('Energy Conversion', 'Gained ' + Game.settings.format(amount) + ' ' + Game.utils.capitaliseFirst(resource));
    		}
    	}
    	this.entries.emc.displayNeedsUpdate = true;
    };

    instance.switchNano = function(resource){
    	var data = this.entries.nanoswarm;
    	data.resource = resource;
    	console.log(Game.resources.entries[resource].htmlId);
    	data.displayNeedsUpdate = true;
    };

    instance.unlock = function(id){
    	this.entries[id].unlocked = true;
    	this.entries[id].displayNeedsUpdate = true;
    };

    return instance;
}());

// Sol Center Tab

function changeEmcAmount(event){
	if (event.button === 2) {
		emcAmount /= 10;
		
		if (emcAmount < 1) {
			emcAmount = "Max";
		}
		if(emcAmount !== emcAmount){
			emcAmount = Math.pow(10, Math.floor(Math.log10(getMaxEnergy())));
		}
		
	} else {
		emcAmount *= 10;
		if(emcAmount > getMaxEnergy()){
			emcAmount = "Max";
		}
		if(emcAmount !== emcAmount){
			emcAmount = 1;
		}
		
	}

    refreshConversionDisplay();
}

function refreshConversionDisplay() {
	var maxEnergy = Game.resources.entries.energy.capacity;
	var maxPlasma = Game.resources.entries.plasma.capacity;
	for (var i = 0; i < resources.length; i++) {
		var amountElement = $('#' + resources[i] + 'EmcAmount');
		var costElement = $('#' + resources[i] + 'EmcVal');
		var storageElement = $('#' + resources[i] + 'Conv');

		// meteorites are a special case because the conversion uses plasma
		var emcCostResource;
		var emcCostMax;
		if (resources[i] === 'meteorite') {
			emcCostResource = getResource(RESOURCE.Plasma);
			emcCostMax = maxPlasma;
		} else {
			emcCostResource = getResource(RESOURCE.Energy);
			emcCostMax = maxEnergy;
		}

		var value = window[resources[i] + 'EmcVal'];
		var current = getResource(resources[i]);
		var capacity = getStorage(resources[i]);
		var emcValue;
		if (emcAmount === 'Max') {
			emcValue = Math.floor(emcCostResource / value);
			costElement.text(Game.settings.format(Math.floor(emcValue * value)));
			amountElement.text(Game.settings.format(emcValue));
		} else {
			emcValue = value * emcAmount;
			costElement.text(Game.settings.format(emcValue));
			amountElement.text(Game.settings.format(emcAmount));
		}

		storageElement.removeClass('green');
		storageElement.removeClass('red');
		if (emcAmount > capacity || current >= capacity) {
			storageElement.addClass('green');
		} else if (emcCostMax < emcValue) {
			storageElement.addClass('red');
		}
	}

	var emcAmountBtn = $('#emcButton');
	if (emcAmount === 'Max') {
		emcAmountBtn.text('Max');
	} else {
		emcAmountBtn.text(Game.settings.format(emcAmount));
	}
}

$('input[type="checkbox"]').on('change', function() {
	$('input[class="autoEmc"]').not(this).prop('checked', false);
	autoResource = this.id.substring(0,this.id.indexOf("Auto"));
	if($(this).is(":checked") == false){
		autoResource = null;
	}
});

function gainAutoEmc(){
	if(autoResource == null){
		return;
	}
}