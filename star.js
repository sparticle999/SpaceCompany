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
                displayNeedsUpdate: false
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

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.getStarData = function(id) {
        return this.entries[id];
    };
    

    return instance;
}());