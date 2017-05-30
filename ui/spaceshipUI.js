(function(){

    var instance = {};

    instance.entries = {};
    instance.titleTemplate = null;
    instance.navTemplate = null;
    instance.partObservers = {};

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.initialize = function() {
        this.tab = Game.ui.createTab({id: 'spaceship', title: 'Spaceship'});
        this.tab.initialize();

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '<p id="{{htmlId}}_cost"></p>',
                '<br>',
                '<div class="btn btn-default" id="{{htmlId}}_buy" disabled="true">Buy</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.navTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;">',
                '<img src="{{iconPath}}{{icon}}.{{iconExtension}}" style="width:30px; height:auto">',
                '</td>',
                '<td style="vertical-align:middle;">',
                '<span>{{name}}</span>',
                '</td>',
                '<td style="vertical-align:middle; text-align:center;">',
                '<span id="{{htmlId}}_current">0</span> / <span id="{{htmlId}}_maximum">0</span>',
                '</td>'].join('\n'));

        this.tab.addCategory('construction', "Construction");
        this.tab.addCategory('travel', "Travel");

        for(var id in Game.spaceship.entries) {
            this.createDisplay(id);
            this.partObservers[id] = [];
        }
    };

    instance.update = function(delta) {
        if(Game.spaceship.unlocked === true) {
            this.tab.show();
        } else {
            this.tab.hide();
            return;
        }

        for(var id in this.entries) {
            var data = Game.spaceship.getPartData(this.entries[id].id);
            if(data.displayNeedsUpdate === true) {
                this.updateDisplay(data);
            }
        }
    };

    instance.createResourceContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));

        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);
        $('#' + data.htmlId + '_buy').click({self: instance, id: data.htmlId}, instance.buyClick);
    };

    instance.createResourceNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));

        var html = this.navTemplate(data);
        target.append($(html));


    };

    instance.createDisplay = function(id) {
        var data = Game.spaceship.getPartData(id);

        this.tab.addNavEntry(data.category, id);

        this.createResourceContent(data);
        this.createResourceNav(data);

        this.entries[data.htmlId] = data;
    };

    instance.updateDisplay = function(data) {

        var navPanel = $('#' + this.tab.getNavElementId(data.id));
        if(data.hidden !== true) {
            if(data.dependsOn) {
                for(var i = 0; i < data.dependsOn.length; i++) {
                    var dependData = Game.spaceship.getPartData(data.dependsOn[i]);
                    if(!dependData) {
                        console.error("Could not find dependsOn Part: " + data.dependsOn[i]);
                        continue;
                    }

                    if(dependData.unlocked === false || dependData.isComplete === false) {
                        navPanel.hide();
                        return;
                    }
                }
            }

            navPanel.show();

        } else {
            navPanel.hide();
            return;
        }

        var gainButton = $('#' + data.htmlId + '_buy');
        gainButton.attr("disabled", data.current >= data.capacity);

        $('#' + data.htmlId + '_current').text(data.current);
        $('#' + data.htmlId + '_maximum').text(data.maxCount);

        if(data.cost) {
            var costDisplayData = Game.ui.utils.buildCostDisplay(this.partObservers[data.id], data.htmlId, data.cost);
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
            costElement.append($(costDisplayData));
        }

        data.displayNeedsUpdate = false;
    };

    instance.buyClick = function(args) {
        var self = args.data.self;
        var targetId = args.data.id;

        Game.spaceship.buyPart(self.entries[targetId].id);
    };

    Game.uiComponents.push(instance);

}());