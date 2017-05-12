(function(){

    var instance = {};

    instance.entries = {};
    instance.mainTemplate = null;
    instance.navTemplate = null;
    instance.upgradeTemplate = null;
    instance.buildingTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.categoryNames = {
        'earth': "Earth Resources",
        'inner': "Inner Planetary Resources",
        'outer': "Outer Planetary Resources"
    };

    instance.initialize = function() {
        if(Game.constants.enableDataDrivenResources === false) {
            return;
        }

        instance.mainTemplate = Handlebars.compile(
            ['<div id="{{htmlId}}_tab" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
                '<div class="container" style="max-width:800px;">',
                '<table class="table" id="{{htmlId}}_tabContent"></table>',
                '</div>',
                '</div>'].join('\n'));

        instance.titleTemplate = Handlebars.compile(
            ['<td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '<div class="btn btn-default" id="{{htmlId}}_gain" disabled="true">ERR</div>',
                '<br><br>',
                '</td>'].join('\n'));

        instance.upgradeTemplate = Handlebars.compile(
            ['<td style="border:none;">',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p>{{cost}}</p>',
                '</span>',
                '<br><br>',
                '<div onclick="{{func}}" class="btn btn-default">Buy</div>',
                '</td>'].join('\n'));

        instance.buildingTemplate = Handlebars.compile(
            ['<td style="border:none;">',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p>{{prod}}</p>',
                    '<p>{{runningCost}}</p>',
                    '<p>{{cost}}</p>',
                '</span>',
                '<br><br>',
                '<div onclick="{{funcBuy}}" id="{{htmlId}}_buy" class="btn btn-default">Buy 1</div>',
                '<div onclick="{{funcBuy10}}" id="{{htmlId}}_buy10" class="btn btn-default">Buy 10</div>',
                '<div onclick="{{funcBuy100}}" id="{{htmlId}}_buy100" class="btn btn-default">Buy 100</div>',
                '<br>',
                '<div onclick="{{funcDestroy}}" id="{{htmlId}}_destroy" class="btn btn-default">Destroy 1</div>',
                '<div onclick="{{funcDestroy10}}" id="{{htmlId}}_destroy10" class="btn btn-default">Destroy 10</div>',
                '<div onclick="{{funcDestroy100}}" id="{{htmlId}}_destroy100" class="btn btn-default">Destroy 100</div>',
                '</td>'].join('\n'));

        instance.navTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}_nav" class="{{category}}" href="#{{htmlId}}_tab" aria-controls="{{htmlId}}_tab" role="tab" data-toggle="tab" style="height:60px;">',
                '<td style="vertical-align:middle;">',
                    '<img src="{{iconPath}}{{icon}}.{{iconExtension}}" style="width:30px; height:auto">',
                '</td>',
                '<td style="vertical-align:middle;">',
                    '<span>{{name}}</span>',
                '</td>',
                '<td style="vertical-align:middle; text-align:center;">',
                    '<span id="{{htmlId}}_perSecond">0</span>/Sec',
                '</td>',
                '<td style="vertical-align:middle; text-align:center;">',
                    '<span id="{{htmlId}}_current">0</span> / <span id="{{htmlId}}_capacity">0</span>',
                '</td>',
                '</div>'].join('\n'));

        this.tabRoot = $('#resourceTabParent');
        this.navRoot = $('#resourceNavParent');

        for(var id in Game.resources.entries) {
            this.createDisplay(id);
        }
    };

    instance.update = function(delta) {
        if(Game.constants.enableDataDrivenResources === false) {
            return;
        }

        for(var id in this.entries) {
            var data = Game.resources.getResourceData(this.entries[id].id);

            if(data.displayNeedsUpdate === true) {
                this.updateDisplay(id, data);
            }
        }
    };

    instance.createDisplay = function(id) {
        var data = Game.resources.entries[id];

        // Build the Tab
        var tab = this.mainTemplate(data);
        var tabContent = $(tab);
        this.tabRoot.append(tabContent);

        var tabContentRoot = $('#' + data.htmlId + '_tabContent');
        var tabTitle = this.titleTemplate(data);
        tabContentRoot.append(tabTitle);
        $('#' + data.htmlId + '_gain').click({self: instance, id: data.htmlId}, instance.gainClick);

        // Build the Nav Section
        var nav = this.navTemplate(data);
        var navContent = $(nav);
        navContent.click({self: instance, id: data.htmlId}, instance.activateTab);
        this.navRoot.append(navContent);

        this.entries[data.htmlId] = {id: id};
    };

    instance.updateDisplay = function(id, data) {

        var gainButton = $('#' + id + '_gain');
        gainButton.attr("disabled", data.current >= data.capacity);
        gainButton.text('Gain ' + data.perClick);

        var perSecondSpan = $('#' + id + '_perSecond');
        perSecondSpan.text(data.perSecond);
        if(data.perSecond < 0) {
            perSecondSpan.addClass('red');
        } else {
            perSecondSpan.removeClass('red');
        }

        var currentSpan = $('#' + id + '_current');
        if(data.current >= data.capacity) {
            currentSpan.addClass('green');
        } else {
            currentSpan.removeClass('green');
        }

        if (data.current <= 0) {
            currentSpan.addClass('red');
        } else {
            currentSpan.removeClass('red');
        }

        currentSpan.text(data.current);
        $('#' + id + '_capacity').text(data.capacity);

        data.displayNeedsUpdate = false;
    };

    instance.activateTab = function(args) {
        var self = args.data.self;
        var targetId = args.data.id;

        for (var id in self.entries) {
            if(id === targetId) {
                $('#' + id + '_nav').addClass('info');
            } else {
                $('#' + id + '_nav').removeClass('info');
            }
        }
    };

    instance.gainClick = function(args) {
        var self = args.data.self;
        var targetId = args.data.id;

        var data = Game.resources.getResourceData(self.entries[targetId].id);
        var value = data.perClick;

        if(value > 0) {
            Game.statistics.add('manualResources', value);
            Game.resources.addResource(data.id, value);
        }
    };

    Game.uiComponents.push(instance);

}());