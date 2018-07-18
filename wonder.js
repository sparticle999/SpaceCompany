Game.wonder = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.navCount = 0;
    instance.tabUnlocked = false;

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
        console.debug("Loaded " + this.navCount + " Interstellar Navs");
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
    	if(this.checkCost(data.buildCost)){
    		data.built = true;
    		this.unlock(data.id)
    		data.displayNeedsUpdate = true;
    	}
    };

    instance.activate = function(id){
    	var data = this.entries[id];
    	if(this.checkCost(data.activateCost)){
    		data.activated = true;
    		data.onActivate();
    		data.displayNeedsUpdate = true;
    	}
    };

    instance.calcCost = function(data, resource){
        return Math.floor(data.cost[resource.toString()] * Math.pow(1.1,(data.current || 0)));
    };

    instance.checkCost = function(data){
        if (typeof data === 'undefined') {return false;}
        var resourcePass = 0;
        for(var resource in data.cost){
            var res = Game.resources.getResourceData(resource);
            if(res.current >= this.calcCost(data, resource)){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(data.cost).length){
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                res.current -= this.calcCost(data, resource);
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
      	var progress = current/total;
    	if(progress > 100) {progress = 100;}
    	return progress;
    };

    instance.unlock = function(id){
    	this.entries[id].unlocked = true;
    	this.entries[id].displayNeedsUpdate = true;
    }

    return instance;
}());

// function updateWonderCost(){
//     preciousGemCost = preciousGemBaseCost * floor1Price;
//     preciousSilverCost = preciousSilverBaseCost * floor1Price;
//     preciousGoldCost = preciousGoldBaseCost * floor1Price;
//     preciousActivateGemCost = preciousActivateGemBaseCost * floor1Price;
//     preciousActivateSilverCost = preciousActivateSilverBaseCost * floor1Price;
//     preciousActivateGoldCost = preciousActivateGoldBaseCost * floor1Price;
//     energeticWoodCost = energeticWoodBaseCost * floor1Price;
//     energeticCharcoalCost = energeticCharcoalBaseCost * floor1Price;
//     energeticUraniumCost = energeticUraniumBaseCost * floor1Price;
//     energeticActivateWoodCost = energeticActivateWoodBaseCost * floor1Price;
//     energeticActivateCharcoalCost = energeticActivateCharcoalBaseCost * floor1Price;
//     energeticActivateUraniumCost = energeticActivateUraniumBaseCost * floor1Price;
//     techSiliconCost = techSiliconBaseCost * floor1Price;
//     techGoldCost = techGoldBaseCost * floor1Price;
//     techGemCost = techGemBaseCost * floor1Price;
//     techActivateSiliconCost = techActivateSiliconBaseCost * floor1Price;
//     techActivateGoldCost = techActivateGoldBaseCost * floor1Price;
//     techActivateGemCost = techActivateGemBaseCost * floor1Price;
//     meteoriteMeteoriteCost = meteoriteMeteoriteBaseCost * floor1Price;
//     meteoriteIceCost = meteoriteIceBaseCost * floor1Price;
//     meteoriteSiliconCost = meteoriteSiliconBaseCost * floor1Price;
//     meteoriteActivateMeteoriteCost = meteoriteActivateMeteoriteBaseCost * floor1Price;
//     meteoriteActivateIceCost = meteoriteActivateIceBaseCost * floor1Price;
//     meteoriteActivateSiliconCost = meteoriteActivateSiliconBaseCost * floor1Price;

//     commsWonderGoldCost = commsWonderGoldBaseCost * floor23Price;
//     commsWonderSiliconCost = commsWonderSiliconBaseCost * floor23Price;
//     commsWonderIceCost = commsWonderIceBaseCost * floor23Price;
//     rocketWonderLunariteCost = rocketWonderLunariteBaseCost * floor23Price;
//     rocketWonderTitaniumCost = rocketWonderTitaniumBaseCost * floor23Price;
//     rocketWonderMetalCost = rocketWonderMetalBaseCost * floor23Price;
//     antimatterWonderUraniumCost = antimatterWonderUraniumBaseCost * floor23Price;
//     antimatterWonderLavaCost = antimatterWonderLavaBaseCost * floor23Price;
//     antimatterWonderOilCost = antimatterWonderOilBaseCost * floor23Price;
//     antimatterWonderMethaneCost = antimatterWonderMethaneBaseCost * floor23Price;
//     portalMeteoriteCost = portalMeteoriteBaseCost * floor23Price;
//     portalHeliumCost = portalHeliumBaseCost * floor23Price;
//     portalSiliconCost = portalSiliconBaseCost * floor23Price;
//     stargateWonderPlasmaCost = stargateWonderPlasmaBaseCost * floor23Price;
//     stargateWonderSiliconCost = stargateWonderSiliconBaseCost * floor23Price;
//     stargateWonderMeteoriteCost = stargateWonderMeteoriteBaseCost * floor23Price;
// }

console.log("%c", "background: green;padding: 5px", "wonderUI");
console.log("%c", "background: green;padding: 5px", "DM Discount");

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