(function(){

    var instance = {};

    instance.categoryTemplate = null;
    instance.entryTemplate = null;

    instance.categoryElements = {};
    instance.rootElement = null;

    instance.initialize = function() {
        this.categoryTemplate = Handlebars.compile(
            ['<td>',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<table class="table" id="{{id}}"></table>',
                '</td>'].join('\n'));

        this.entryTemplate = Handlebars.compile(
            ['<td id="{{id}}" class="achievementTD" style="border:none;">',
                '<div id="{{id}}_div" data-toggle="tooltip" title="{{title}}" style="width: 64px; height: 64px; border:2px solid white;">',
                '<div id="{{id}}_bg" style="width: 50px; height: 40px; background: url({{iconPath}}{{iconName}}.{{iconExtension}}) no-repeat center; -webkit-background-size: contain;background-size: contain; margin-left: 5px;opacity: 0.2"></div>',
                '<div id="{{id}}_img" style="overflow: hidden; vertical-align: bottom;"><img src="Icons/achievementStar.png" height="11px"></div>',
                '</div>',
                '</td>'].join('\n'));

        this.rootElement = $('#achievementContent');

        for(var id in Game.achievements.entries) {
            this.createDisplay(id);
        }
    };

    instance.update = function(delta) {
        for(var id in Game.achievements.entries) {
            var data = Game.achievements.entries[id];

            if(data.displayNeedsUpdate === true) {
                this.updateDisplay(id);
            }
        }
    };

    instance.createDisplay = function(id) {
        var data = Game.achievements.entries[id];

        if (this.categoryElements[data.category] === undefined) {
            this.createCategory(data.category);
        }

        var html = this.entryTemplate(data);
        this.categoryElements[data.category].colc++;
        this.categoryElements[data.category].col.append($(html));

        if(this.categoryElements[data.category].colc >= Game.constants.achievementIconsPerRow) {
            this.createCategoryRow(data.category);
        }
    };

    instance.updateDisplay = function(id) {
        var data = Game.achievements.entries[id];
        var div = $('#' + id + "_div");
        var bg = $('#' + id + "_bg");

        div.prop('title', Game.achievements.getAchievementTitle(data));

        div.css('border-color', Game.constants.achievementBracketColors[data.unlocked]);

        $('#' + id + '_img').width(12 * (data.unlocked + 1));

        if(data.unlocked >= 0){
            bg.fadeTo(2, 1);
        }

        data.displayNeedsUpdate = false;
    };

    instance.createCategory = function (category) {
        var data = {id: "ach_cat_" + category, name: category};
        this.categoryElements[category] = {colc: 0, col: null, id: data.id};

        var html = $(this.categoryTemplate(data));
        this.rootElement.append(html);

        this.createCategoryRow(category);
    };

    instance.createCategoryRow = function (category) {
        var data = this.categoryElements[category];

        data.colc = 0;
        data.col = $('<tr></tr>');
        $('#'+data.id).append(data.col);
    };

    Game.uiComponents.push(instance);

}());