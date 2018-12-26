Game.solCenter = (function(){

    function UpdateCost(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.solCenter.entries[id];
            if (new Date() - previous < 250) {return;}
            var value = Game.settings.doFormat('cost', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'cost');
            previous = new Date();
            return true;
        }
    }

    function UpdateDysonCost(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.solCenter.entries.dyson.items[id];
            if (new Date() - previous < 250) {return;}
            var costVal = Game.settings.doFormat('cost', obj);
            Templates.uiFunctions.setClassText(costVal, obj.htmlId+'cost');
            var currentVal = Game.settings.doFormat('current', obj);
            Templates.uiFunctions.setClassText(currentVal, obj.htmlId+'current');
            previous = new Date();
            return true;
        }
    }

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.tabUnlocked = false;
    instance.autoResource = null;
    instance.emcAmount = "Max";

    instance.initialise = function(){
    	for(var id in Game.solCenterData){
    		var data = Game.solCenterData[id];
    		this.entries[id] = $.extend({}, data, {
				id: id,
				htmlId: 'solCtr_' + id,
				researched: false,
                ui_cost: new UpdateCost(id),
			});
    	}
        for(var id in Game.dysonData){
            var data = Game.dysonData[id];
            this.entries.dyson.items[id] = $.extend({}, data, {
                id: id,
                htmlId: 'solCtr_' + id,
                current: 0,
                max: -1,
                ui_cost: new UpdateDysonCost(id),
            });
        }
    };

    instance.update = function(delta){
    	if(this.autoResource != null){
    		this.emcAmount = "Max";
			this.convert(this.autoResource, false);
    	}
        this.updateEMCUI();
    };

    instance.save = function(data){
    	data.solCenter = {v: this.dataVersion, e: {}}
    	for(var id in this.entries){
    		var ent = this.entries[id]
    		data.solCenter.e[id] = {};
    		data.solCenter.e[id].researched = ent.researched;
    		if(id == "nanoswarm"){
    			data.solCenter.e[id].current = ent.current;
    			data.solCenter.e[id].resource = ent.resource;
    		}
            if(id == "dyson"){
                console.log("might want to reduce redunancy");
                data.solCenter.e[id].items = {};
                for(var prop in ent.items){
                    //if(prop == "dyson")continue;
                    data.solCenter.e[id].items[prop] = ent.items[prop].current;
                }
                console.error(data.solCenter.e["dyson"])
            }
    	}
    };

    instance.load = function(data){
    	if(data.solCenter){
            console.error(data.solCenter.e["dyson"])
    		for (var id in data.solCenter.e) {
            	if (typeof this.entries[id] !== 'undefined') {
            		var ent = data.solCenter.e[id];
            		for(var prop in ent){
                        if(prop == "items"){
                            console.error(ent[prop])
                            for(var struc in ent[prop]){
                                this.entries[id][prop][struc].current = ent[prop][struc]
                            }
                        } else {
                            this.entries[id][prop] = ent.prop;
                        }
            		}
            	}
            	if(this.entries[id].researched == true){
            		this.gainTech(id);
            	}
        	}
    	}
    };

    instance.research = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data)){
    		this.gainTech(id);
    	}
    };

    instance.gainTech = function(id){
        var data = this.entries[id];
        data.researched = true;
        this.entries[id].onApply();
        Templates.uiFunctions.hide(data.id);
        data.displayNeedsUpdate = true;
    };

    instance.buyDyson = function(id, count){
        var data = this.entries.dyson.items[id];
        if(data.id != "segment"){
            var loopNum = count - data.current;
        } else {
            loopNum = count;
        }
        for(var i = 0; i < loopNum; i++){
            if(this.checkCost(data)){
                for(var resource in data.cost){
                    if(resource == "segment"){
                        if(this.entries.dyson.items[resource].current >= data.cost[resource]){
                            this.entries.dyson.items[resource].current -= data.cost[resource]
                        }
                    } else if(resource == "rocketFuel"){
                        var res = Game.resources.getResourceData(resource);
                        res.current -= data.cost[resource];
                    } else {
                        var res = Game.resources.getResourceData(resource);
                        res.current -= this.calcCost(data, resource, 1.02)
                    }
                }
                data.current += 1;
                if(data.onBuy){
                    data.onBuy();
                }
                this.updateCosts(id);
            } else {
                return false;
            }
        }
        return true;
    }

    instance.updateCosts = function(id) {
        var cost = {};
        var obj = Game.dysonData[id].cost;
        Object.keys(obj).forEach(function(c) {
            cost[c] = Math.floor(obj[c] * Math.pow(1.1, Game.solCenter.entries.dyson.items[id].current))
        })
        Game.solCenter.entries.dyson.items[id].cost = cost;
    }

    instance.calcCost = function(data, resource, power){
        return Math.floor(data.cost[resource.toString()] * Math.pow((power || 1.1),(data.current || 0)));
    };

    instance.checkCost = function(data){
        if (typeof data === 'undefined') {return false;}
        var power = 1.1;
        if(data.id == "segment"){
            power = 1.02;
        }
        var resourcePass = 0;
        for(var resource in data.cost){
            if(resource == "segment"){
                if(this.entries.dyson.items[resource].current >= data.cost[resource]){
                    resourcePass += 1;
                }
            } else if(resource == "rocketFuel"){
                var res = Game.resources.getResourceData(resource);
                if(res.current >= data.cost[resource]){
                    resourcePass += 1;
                }
            } else {
                var res = Game.resources.getResourceData(resource);
                if(res.current >= this.calcCost(data, resource, power)){
                    resourcePass += 1;
                }
            }
        }
        if(resourcePass === Object.keys(data.cost).length){
            return true;
        } else {
            return false;
        }
    };

    instance.convert = function(resource, notification){
    	var input = Game.resources.entries.energy;
    	if(resource == "meteorite"){
    		input = Game.resources.entries.plasma;
    	}

    	var data = Game.resources.entries[resource];

    	var current = data.current;
    	var capacity = data.capacity;
    	var amount;
    	if(this.emcAmount === "Max"){
    		amount = Math.floor(Math.min(Math.floor(input.current/data.emc), capacity - current));
    	}else{
    		amount = Math.floor(Math.min(this.emcAmount, capacity - current));
    	}
    	
    	var required = amount * data.emc;

    	if(amount > 0 && input.current >= required){
    		Game.resources.takeResource(RESOURCE.Energy, required);
    		Game.resources.addResource(resource, amount);
    		if(notification != false){
    			Game.notifyInfo('Energy Conversion', 'Gained ' + Game.settings.format(amount) + ' ' + Game.utils.capitaliseFirst(resource));
    		}
    	}
    	this.entries.emc.displayNeedsUpdate = true;
    };

    instance.changeEmcAmount = function(event){
        if (event.button === 2) {
            this.emcAmount /= 10;
            
            if (this.emcAmount < 1) {
                this.emcAmount = "Max";
            }
            if(this.emcAmount !== this.emcAmount){
                this.emcAmount = Math.pow(10, Math.floor(Math.log10(Game.resources.entries.energy.capacity)));
            }
            
        } else {
            this.emcAmount *= 10;
            if(this.emcAmount > Game.resources.entries.energy.capacity){
                this.emcAmount = "Max";
            }
            if(this.emcAmount !== this.emcAmount){
                this.emcAmount = 1;
            }
        }

        this.updateEMCUI(true);
        if(this.emcAmount == "Max"){
            Templates.uiFunctions.setClassText(this.emcAmount, 'emcAmountVal');
        } else {
            Templates.uiFunctions.setClassText(Game.settings.format(this.emcAmount), 'emcAmountVal');
        }
    };

    instance.autoEmc = function(){
        if(this.autoResource != null){
            this.emcAmount = "Max";
            this.convert(autoResource, false);
        }
    }

    instance.switchNano = function(resource){
    	var data = this.entries.nanoswarm;
    	data.resource = resource;
    	console.log(Game.resources.entries[resource].htmlId);
    	data.displayNeedsUpdate = true;
    };

    instance.unlock = function(id){
    	this.entries[id].unlocked = true;
        Templates.uiFunctions.unlock(id);
    	this.entries[id].displayNeedsUpdate = true;
    };

    // UI exception
    var previous = new Date();
    instance.updateEMCUI = function(override){
        if ((new Date() - previous < 1000 || Game.lastNav != "solCenterTab_solCtr_emc_ne") && !override) {return;}
        for(var id in Game.resources.entries){
            if(!checkRegResource(id) && id != "meteorite"){continue;}
            var obj = Game.resources.entries[id];
            if(this.emcAmount == "Max"){
                if(id == "meteorite"){
                    var power = Game.resources.entries.plasma.current;
                } else {
                    var power = Game.resources.entries.energy.current;
                }
                var value = Math.floor(power/obj.emc);
                var cost = Math.floor(power/obj.emc)*obj.emc;
            } else {
                var value = this.emcAmount;
                var cost = this.emcAmount*obj.emc;
            }
            var formatVal = Game.settings.format(value);
            Templates.uiFunctions.setClassText(formatVal, 'emcAmount_'+obj.id);
            var formatCost = Game.settings.format(cost);
            Templates.uiFunctions.setClassText(formatCost, 'emcCost_'+obj.id);
        }
        previous = new Date();
        return true;
    };

    return instance;
}());

// Sol Center Tab

console.log("autoemc");
$('input[type="checkbox"]').on('change', function() {
	$('input[class="autoEmc"]').not(this).prop('checked', false);
	this.autoResource = this.id.substring(0,this.id.indexOf("Auto"));
	if($(this).is(":checked") == false){
		this.autoResource = null;
	}
});