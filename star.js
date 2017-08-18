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
                displayNeedsUpdate: false,
                explored: false,
                owned: false,
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
            document.getElementById('intnav_' + data.factionId + 'NavGlyph').className = "glyphicon glyphicon-exclamation-sign";
            document.getElementById('tab_interstellarBeta_' + data.factionId + '_ne').className = "collapse_tab_interstellarBeta_faction"
        }
    };

    instance.absorbSystem = function(id){
        var data = this.entries[id];
        var faction = Game.stargaze.getStargazeData(data.factionId);
        if(faction.opinion >= 60){
            faction.opinion -= 10;
            data.owned = true;
        }
    }

    instance.getStarData = function(id) {
        return this.entries[id];
    };
    

    return instance;
}());