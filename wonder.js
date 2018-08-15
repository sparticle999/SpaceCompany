Game.wonder = (function(){

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
                activated: false,
                displayNeedsUpdate: true
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
                }
                this.entries[id].activated = data.wonder.i[id].activated;
                this.entries[id].unlocked = data.wonder.i[id].unlocked;
                if(this.entries[id].activated){
                    this.entries[id].onActivate();
                }
            }
        }
    };

    instance.build = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data, data.buildCost)){
    		data.built = true;
    		this.unlock(data.id)
    		data.displayNeedsUpdate = true;
    	}
    };

    instance.activate = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data, data.activateCost)){
    		data.activated = true;
    		data.onActivate();
    		data.displayNeedsUpdate = true;
    	}
    };

    instance.calcCost = function(data, costData, resource){
        var multi = 1;
        if(data.category == "floor1"){
            multi = this.floor1Price;
        } else if(data.category == "floor2" || data.category == "floor3"){
            multi = this.floor23Price;
        }
        return Math.floor(data[resource.toString()]*multi);
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

    instance.getProgress = function(data){
    	var current = 0;
    	var total = 0;
    	var res = Game.resources.entries;
    	for(var resource in data){
    		current += Math.min(data[resource], res[resource].current);
    		total += data[resource];
    	}
      	var progress = Math.floor(current/total);
    	if(progress > 100) {progress = 100;}
    	return progress;
    };

    instance.unlock = function(id){
    	this.entries[id].unlocked = true;
    	this.entries[id].displayNeedsUpdate = true;
    }

    return instance;
}());

// function updateProgressBar(elementId, percentage) {
//     if(percentage <= 100){
//         document.getElementById(elementId).innerHTML = Game.settings.format(percentage,2) + "%";
//         document.getElementById(elementId).style.width = percentage + "%";
//     }
//     else{
//         document.getElementById(elementId).innerHTML = "100%";
//         document.getElementById(elementId).style.width = 100 + "%";
//     }
// }