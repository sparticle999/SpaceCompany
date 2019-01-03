Game.wonder = (function(){

    function UpdateProgress(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.wonder.entries[id];
            if (new Date() - previous < 250) {return;}
            previous = new Date();
            var value = Game.settings.doFormat('progress', obj);
            Templates.uiFunctions.setClassText(value + "%", obj.htmlId+'progress');
            Templates.uiFunctions.setClassStyle(value + "%", "width", obj.htmlId+'progress');
            obj.progress = value;
            return true;
        }
    }

    function UpdateCost(id) {
        var previous = new Date();
        var id = id;
        this.update = function() {
            var obj = Game.wonder.entries[id];
            if (new Date() - previous < 1000) {return;}
            var costObj = {cost:{}};
            for(var res in obj.cost){
                costObj.cost[res] = Game.wonder.calcCost(obj, obj.cost, res);
            }
            var value = Game.settings.doFormat('cost', costObj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'cost');
            previous = new Date();
            return true;
        }
    }

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.navCount = 0;
    instance.tabUnlocked = false;

    instance.floor1Price = 1;
    instance.floor23Price = 1;

    instance.initialise = function(){
    	for (var id in Game.wonderData) {
            var data = Game.wonderData[id];
            
            this.navCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'wonnav_' + id,
                page: 'wonder',
                progress: 0,
                activated: false,
                ui_progress: new UpdateProgress(id),
                ui_cost: new UpdateCost(id),
            });
        }
        console.debug("Loaded " + this.navCount + " Wonder Navs");
    };
    
    instance.update = function(delta){

    };

    instance.save = function(data){
        data.wonder = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.wonder.i[key] = {};
            if(typeof this.entries[key].built !== 'undefined'){
                data.wonder.i[key].built = this.entries[key].built;
            }
            data.wonder.i[key].activated = this.entries[key].activated;
            data.wonder.i[key].unlocked = this.entries[key].unlocked;
        }
    };

    instance.load = function(data){
        if(typeof data.wonder == 'undefined'){
            return;
        }
        for (var id in data.wonder.i) {
            if (typeof this.entries[id] !== 'undefined') {
                if (typeof data.wonder.i[id].built !== 'undefined') {
                    this.entries[id].built = data.wonder.i[id].built;
                    if(this.entries[id].built){
                        this.gainWonder(this.entries[id]);
                    }
                }
                this.entries[id].activated = data.wonder.i[id].activated;
                this.entries[id].unlocked = data.wonder.i[id].unlocked;
                if(this.entries[id].activated){
                    this.gainWonder(this.entries[id]);
                }
            }
        }
    };

    instance.build = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data, data.cost)){
            data.built = true;
            Game.statistics.add("wondersBuilt");
    		this.gainWonder(data);
    	}
    };

    instance.gainWonder = function(data){
        data.onApply();
        Templates.uiFunctions.hide(data.id);
    }

    instance.removeWonder = function(data){
        data.onRemove();
        Templates.uiFunctions.show(data.id);
    }

    instance.activate = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data, data.cost)){
    		data.activated = true;
            Game.statistics.add("wondersActivated");
    		this.gainWonder(data);
    	}
    };

    instance.calcCost = function(data, costData, resource){
        var multi = 1;
        if(data.category == "floor1"){
            multi = this.floor1Price;
        } else if(data.category == "floor2" || data.category == "floor3"){
            multi = this.floor23Price;
        }
        return Math.floor(costData[resource]*multi);
    };

    instance.checkCost = function(data, costData){
        if (typeof data === 'undefined') {return false;}
        var resourcePass = 0;
        for(var resource in costData){
            var res = Game.resources.getResourceData(resource);
            if(res.current >= this.calcCost(data, costData, resource)){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(costData).length){
            for(var resource in costData){
                var res = Game.resources.getResourceData(resource);
                res.current -= this.calcCost(data, costData, resource);
            }
            return true;
        } else {
            return false;
        }
    };

    instance.getProgress = function(id){
        var data = this.entries[id];
        var cost = data.cost
    	var current = 0;
    	var total = 0;
    	var res = Game.resources.entries;
        var multi = 1;
        if(data.category == "floor1"){
            multi = this.floor1Price;
        } else if(data.category == "floor2" || data.category == "floor3"){
            multi = this.floor23Price;
        }
    	for(var resource in cost){
    		current += Math.min(cost[resource]*multi, res[resource].current);
    		total += cost[resource]*multi;
    	}
      	var progress = Math.floor(1000*current/total)/10;
    	if(progress > 100) {progress = 100;}
    	return progress;
    };

    instance.unlock = function(id){
        Templates.uiFunctions.unlock(id);
    	this.entries[id].unlocked = true;
    }

    return instance;
}());