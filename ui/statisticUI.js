(function(){

    var instance = {};

    instance.categoryTemplate = null;
    instance.entryTemplate = null;

    instance.categoryElements = {};
    instance.rootElement = null;

    instance.initialise = function() {

        this.categoryTemplate = Handlebars.compile(
            ['<table class="table" id="{{id}}">',
            '<th class="default btn-link theader" style="border:none;">{{name}}</th>',
            '<th class="default btn-link theader" style="border:none;">Current</th>',
            '<th class="default btn-link theader" style="border:none;">All Time</th>',
            '</table>'].join('\n'));

        this.entryTemplate = Handlebars.compile(
            ['<tr>',
            '<td style="width:60%">{{title}}:</td>',
            '<td><span id="{{id}}_val">0</span><br></td>',
            '<td><span id="{{id}}_valAlltime">0</span><br></td>',
            '</tr>'].join('\n'));

        this.rootElement = $('#statisticContent');

        for(var id in Game.statistics.entries) {
            this.createDisplay(id);
        }
    };

    instance.update = function(delta) {
        for(var id in Game.statistics.entries) {
            var data = Game.statistics.entries[id];

            if(data.displayNeedsUpdate === true) {
                this.updateDisplay(id);
            }
        }
        //kongregate.stats.submit("timePlayed",Game.statistics.entries.timePlayed.value);
    };

    instance.createDisplay = function(id) {
        var data = Game.statistics.entries[id];

        if (this.categoryElements[data.category] === undefined) {
            this.createCategory(data.category);
        }

        var html = this.entryTemplate(data);
        $('#' + this.categoryElements[data.category].id).append($(html));
    };

    instance.updateDisplay = function(id) {
        var data = Game.statistics.entries[id];
        if(data.displayNeedsUpdate){

            if(data.id = "tabsUnlocked"){
                Game.statistics.update();
            }

            var valueSpan = $('#' + id + "_val");
            var valueAlltimeSpan = $('#' + id + "_valAlltime");

            if(data.max > 0) {
                valueSpan.text(Game.settings.format(data.value) + " / " + Game.settings.format(data.max));
                valueAlltimeSpan.text(Game.settings.format(data.valueAlltime) + " / " + Game.settings.format(data.max));
            } else {
                if (data.type === STATISTIC_TYPE.TIME) {
                    valueSpan.text(Game.utils.getFullTimeDisplay(data.value));
                    valueAlltimeSpan.text(Game.utils.getFullTimeDisplay(data.valueAlltime));
                } else {
                    valueSpan.text(data.value);
                    valueAlltimeSpan.text(data.valueAlltime);
                }
            }

            data.displayNeedsUpdate = false;
        }
    };

    instance.createCategory = function (category) {
        var data = {id: "stat_cat_" + category, name: category};
        this.categoryElements[category] = { id: data.id };

        var html = $(this.categoryTemplate(data));
        this.rootElement.append(html);
    };

    Game.uiComponents.push(instance);

}());
