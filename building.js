Game.buildings = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.storageEntries = {};
    instance.updatePerSecondProduction = true;
    instance.buildingTypeCount = 0;
    instance.researchBuildingTypeCount = 0;
    instance.storageTypeCount = 0;

    instance.initialise = function() {
        for (var id in Game.buildingData) {
            var data = Game.buildingData[id];
            this.buildingTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'resbld_' + id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount,
                displayNeedsUpdate: true
            });            
        }

        for (var id in Game.storageBuildingData) {
            var data = Game.storageBuildingData[id];
            this.storageTypeCount++;
            this.storageEntries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'sto_' + id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount,
                displayNeedsUpdate: true
            });
        }

        // this can be removed if rocketfuel producers get moved to buildings
        for(var id in Game.otherBuildingsData){
            var data = Game.otherBuildingsData[id];
        }

        console.debug("Loaded " + this.buildingTypeCount + " Building Types");
        console.debug("Loaded " + this.storageTypeCount + " Storage Types");
    };

    instance.update = function(delta) {
        if (this.updatePerSecondProduction === true) {
            Game.resources.updateResourcesPerSecond();
            this.updatePerSecondProduction = false;
        }
        for(id in this.entries){
            var data = this.entries[id];
            if(data.displayNeedsUpdate)
                this.refreshBuildingCost(data);
            this.refreshUnlock(data);
        }
        for(id in this.storageEntries){
            var data = this.storageEntries[id];
            if(data.displayNeedsUpdate){
                this.refreshBuildingCost(data);
                this.refreshUnlock(data);
                Game.resources.refreshStorage(data.resource);
            }
        }
    };

    instance.save = function(data) {
        data.buildings = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.buildings.i[key] = this.entries[key].current;
        }
    };

    instance.load = function(data) {
        if(data.buildings) {
            if(data.buildings.v && data.buildings.v === this.dataVersion) {
                for(var id in data.buildings.i) {
                    if(this.entries[id]) {
                        this.constructBuildings(id, data.buildings.i[id]);
                    }
                }
            }
        }
    };

    instance.buyStorageBuilding = function(id){
        var data = this.storageEntries[id];
        var resourcePass = 0;
        for(var resource in data.cost){
            var res = Game.resources.getResourceData(resource);
            if(res.current >= this.calcCost(data, resource, "storageBuildingData")){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(data.cost).length){
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                res.current -= this.calcCost(data, resource, "storageBuildingData");
            }
            for(var resource in data.storage){
                Game.resources.entries[resource].capacity += data.storage[resource];
            }
            data.displayNeedsUpdate = true;
        }
    }

    instance.buyBuildings = function(id, count){
        var data = Game.buildings.getBuildingData(id);
        for(var i = 0; i < (count || 1); i++){
            var resourcePass = 0;
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                if(res.current >= this.calcCost(data, resource, "buildingData")){
                    resourcePass += 1;
                }
            }
            if(resourcePass === Object.keys(data.cost).length){
                for(var resource in data.cost){
                    var res = Game.resources.getResourceData(resource);

                    res.current -= this.calcCost(data, resource, "buildingData");
                }
                this.updatePerSecondProduction = true;
                data.displayNeedsUpdate = true;
            } else {
                if(data.onApply)
                    data.onApply();
                this.constructBuildings(id, i);
                return;
            }
        }
        if(data.onApply)
            data.onApply();
        this.constructBuildings(id, i);
    };

    instance.calcCost = function(self, resource, data){
        return Math.floor(Game[data][self.id].cost[resource.toString()] * Math.pow(1.1,self.current));
    };

    instance.constructBuildings = function(id, count) {
        // Add the buildings and clamp to the maximum
        if(count == 0)
            return;
        count = count || 1;
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].max);
        this.entries[id].displayNeedsUpdate = true;
        this.updatePerSecondProduction = true;
    };

    instance.destroyBuildings = function(id, count) {
        // Remove the buildings and ensure we can not go below 0
        count = count || 1;
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
        this.entries[id].displayNeedsUpdate = true;
        this.updatePerSecondProduction = true;
    };

    instance.refreshBuildingCost = function(data){
        var segmentsCost = [];
        for(var resource in data.cost){
            if(data.storage != undefined)
                var segmentX = {n: Game.utils.capitaliseFirst(resource), p: Game.settings.format(this.calcCost(data, resource, "storageBuildingData"))};
            else var segmentX = {n: Game.utils.capitaliseFirst(resource), p: Game.settings.format(this.calcCost(data, resource, "buildingData"))};
            segmentsCost.push(segmentX);
        }
        var costHtml = "<span>Costs </span>";
        for(var i = 0; i < segmentsCost.length; i++){
            var segmentData = segmentsCost[i];
            var html = '<span>' + segmentData.p + " " + segmentData.n + '</span>';
            costHtml += html;
            if(i < segmentsCost.length - 1) {
                costHtml += '<span>, </span>';
            }
        }
        var target = $('#' + data.htmlId + '_cost');
        target.empty()
        target.append(costHtml);
        data.displayNeedsUpdate = false;
    }

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.unlockStorage = function(id){
        this.storageEntries[id].unlocked = true;
        this.storageEntries[id].displayNeedsUpdate = true;
    }

    instance.refreshUnlock = function(data){
        if(data.id.indexOf("rocketFuel") == -1){
            if(data.unlocked)
                $('#' + data.htmlId)[0].className = "";
            else
                $('#' + data.htmlId)[0].className = "hidden";
        } else {
            //console.log("rocketFuel")
        }
    }

    instance.getBuildingData = function(id) {
        return this.entries[id];
    };

    return instance;
}());
