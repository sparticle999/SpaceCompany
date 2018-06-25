Game.buildings = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.updatePerSecondProduction = true;
    instance.techTypeCount = 0;

    instance.initialise = function() {
        for (var id in Game.buildingData) {
            var data = Game.buildingData[id];
            this.techTypeCount++;
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

        console.debug("Loaded " + this.techTypeCount + " Building Types");
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

    instance.buyBuildings = function(id, count){
        var data = Game.buildings.getBuildingData(id);
        for(var i = 0; i < (count || 1); i++){
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
                this.updatePerSecondProduction = true;
                data.displayNeedsUpdate = true;
            } else {
                this.constructBuildings(id, i);
                return;
            }
        }
        this.constructBuildings(id, i);
    };

    instance.calcCost = function(self, resource){
        return Math.floor(Game.buildingData[self.id].cost[resource.toString()] * Math.pow(1.1,self.current));
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
            var segmentX = {n: Game.utils.capitaliseFirst(resource), p: this.calcCost(data, resource)};
            segmentsCost.push(segmentX);
        }
        var costHtml = "<span>Costs </span>";
        for(var i = 0; i < segmentsCost.length; i++){
            var segmentData = segmentsCost[i];
            var html = '<span id="' + segmentData.n + 'Cost">' + segmentData.p + " " + segmentData.n + '</span>';
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

    instance.getBuildingData = function(id) {
        return this.entries[id];
    };

    return instance;
}());