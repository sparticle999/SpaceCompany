Game.interstellarBETA.stars = (function(){

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.starCount = 0;
    
    instance.initialise = function() {
        for (var id in Game.starData) {
            var data = Game.starData[id];
            
            this.starCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'star_' + id,
                current: 0,
                spy: 0,
                explored: false,
                owned: false,
                displayNeedsUpdate: false,
            });
            
        }

        console.log("Loaded " + this.starCount + " Stars");

    };

    instance.save = function(data) {
        data.stars = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.stars.i[key] = this.entries[key].current;
        }
    };

    instance.exploreSystem = function(id){
        var data = this.entries[id];
        var exploreCost = data.distance * 10000;
        if(antimatter >= exploreCost){
            antimatter -= exploreCost;
            data.explored = true;
            document.getElementById('star_' + id).className = "hidden";
            document.getElementById('star_' + id + '_conquer').className = "";
            newNavUnlock('intnav_' + data.factionId);
            document.getElementById('tab_interstellarBeta_' + data.factionId + '_ne').className = "collapse_tab_interstellarBeta_faction"
        }
    };

    instance.getStarData = function(id) {
        return this.entries[id];
    };
    

    return instance;
}());