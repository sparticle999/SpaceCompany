(function(){

    var instance = {};

    instance.entries = {};
    instance.resourceTechEntries = {};
    instance.resourceTechObservers = {};
    instance.resourceBuildingEntries = {};
    instance.resourceBuildingObservers = {};
    instance.titleTemplate = null;
    instance.techTemplate = null;
    instance.buildingTemplate = null;
    instance.navTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.categoryNames = {
        'earth': "Earth Resources",
        'inner': "Inner Planetary Resources",
        'outer': "Outer Planetary Resources"
    };

    instance.initialise = function() {
        if(Game.constants.enableDataDrivenResources === false) {
            return;
        }

        this.tab = Game.ui.createTab({id: 'resourcesBETA', title: 'Resources (BETA)'});
        this.tab.initialise();

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '<div class="btn btn-default" id="{{htmlId}}_gain" disabled="true">ERR</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.techTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"><td style="border:none;">',
                '<h3 class="default btn-link" id="{{htmlId}}_name">{{name}}</h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p id="{{htmlId}}_cost"></p>',
                '</span>',
                '<br><br>',
                '<div class="btn btn-default" id="{{htmlId}}_unlock">Unlock</div>',
                '</td></tr>'].join('\n'));

        instance.buildingTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"></tr><td style="border:none;">',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p id="{{htmlId}}_prod"></p>',
                    '<p id="{{htmlId}}_rcost"></p>',
                    '<p id="{{htmlId}}_cost"></p>',
                '</span>',
                '<br><br>',
                '<div id="{{htmlId}}_buy" class="btn btn-default">Buy 1</div>',
                '<div id="{{htmlId}}_buy10" class="btn btn-default">Buy 10</div>',
                '<div id="{{htmlId}}_buy100" class="btn btn-default">Buy 100</div>',
                '<br>',
                '<div id="{{htmlId}}_destroy" class="btn btn-default">Destroy 1</div>',
                '<div id="{{htmlId}}_destroy10" class="btn btn-default">Destroy 10</div>',
                '<div id="{{htmlId}}_destroy100" class="btn btn-default">Destroy 100</div>',
                '</td></tr>'].join('\n'));

        instance.navTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;">',
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
                '</td>'].join('\n'));

        if(Game.constants.enableDataDrivenResources === false) {
            return;
        }

        for(var id in Game.resources.categoryEntries) {
            this.tab.addCategory(id, Game.resources.categoryEntries[id].title);
        }

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
                this.updateDisplay(data);
            }
        }

        for(var id in this.resourceTechEntries) {
            var data = Game.tech.getTechData(id);
            if(data.displayNeedsUpdate === true) {
                this.updateTechDisplay(data);
            }
        }

        for(var id in this.resourceBuildingEntries) {
            var data = Game.buildings.getBuildingData(id);
            if(data.displayNeedsUpdate === true) {
                this.updateBuildingDisplay(data);
            }
        }

        for(var id in Game.resources.categoryEntries) {
            if(this.tab.categoryHasVisibleEntries(id) === true) {
                this.tab.showCategory(id);
            } else {
                this.tab.hideCategory(id);
            }
        }
    };

    instance.createResourceContentTech = function(data, techData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var tech = this.techTemplate(techData);
        tabContentRoot.append($(tech));

        var unlockButton = $('#' + techData.htmlId + '_unlock');
        unlockButton.click({id: techData.id}, function(args) { Game.tech.buyTech(args.data.id, 1); });

        this.resourceTechEntries[techData.id] = data.id;
        this.resourceTechObservers[techData.id] = [];
    };

    instance.createResourceContentBuilding = function(data, buildingData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var tech = this.buildingTemplate(buildingData);
        tabContentRoot.append($(tech));

        this.resourceBuildingEntries[buildingData.id] = data.id;
        this.resourceBuildingObservers[buildingData.id] = [];
    };

    instance.createResourceContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));

        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);
        $('#' + data.htmlId + '_gain').click({self: instance, id: data.htmlId}, instance.gainClick);

        for (var id in Game.tech.entries) {
            var techData = Game.tech.entries[id];
            if(techData.resource && techData.resource === data.id) {
                this.createResourceContentTech(data, techData);
            }
        }

        for (var id in Game.buildings.entries) {
            var buildingData = Game.buildings.entries[id];
            if(buildingData.resource && buildingData.resource === data.id) {
                this.createResourceContentBuilding(data, buildingData);
            }
        }
    };

    instance.createResourceNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));

        var html = this.navTemplate(data);
        target.append($(html));

        // Create the resource observers, we don't care about keeping these, always active
        Game.ui.createResourceObserver({htmlId: data.htmlId + '_current', res: data.id, type: RESOURCE_OBSERVER_TYPE.CURRENT_VALUE});
        Game.ui.createResourceObserver({htmlId: data.htmlId + '_capacity', res: data.id, type: RESOURCE_OBSERVER_TYPE.CAPACITY});
        Game.ui.createResourceObserver({htmlId: data.htmlId + '_perSecond', res: data.id, type: RESOURCE_OBSERVER_TYPE.PER_SECOND});
    };

    instance.createDisplay = function(id) {
        var data = Game.resources.getResourceData(id);

        if (!Game.resourceCategoryData[data.category]) {
            return;
        }

        this.tab.addNavEntry(data.category, id);

        this.createResourceContent(data);
        this.createResourceNav(data);

        this.entries[data.htmlId] = data;
    };

    instance.updateTechDisplay = function(data) {
        var element = $('#' + data.htmlId);
        if(data.unlocked === true) {
            element.show();
        } else {
            element.hide();
        }

        // Update the title if we have a counted tech
        if (data.maxLevel === -1 || data.maxLevel > 1) {
            var titleElement = $('#' + data.htmlId + '_name');
            titleElement.text(data.name + " " + data.current);
        }

        // Update the cost display
        if(data.cost) {
            var costDisplayData = this.buildCostDisplay(this.resourceTechObservers[data.id], data);
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
            costElement.append($(costDisplayData));
        }

        data.displayNeedsUpdate = false;
    };

    instance.updateBuildingDisplay = function(data) {
        var element = $('#' + data.htmlId);
        if(data.unlocked === true) {
            element.show();
        } else {
            element.hide();
        }

        // Update the cost display
        if(data.cost) {
            var costDisplayData = this.buildCostDisplay(this.resourceBuildingObservers[data.id], data);
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
            costElement.append($(costDisplayData));
        }

        data.displayNeedsUpdate = false;
    };

    instance.buildCostDisplay = function(observerArray, data) {
        for(var i = 0; i < observerArray.length; i++) {
            observerArray[i].delete();
        }

        // Empty but keep the reference
        observerArray.length = 0;

        var segments = [];
        for(var id in data.cost) {
            var resourceData = Game.resources.getResourceData(id.toString());
            if(!data) {
                console.error("Unknown Resource in cost: " + id);
                continue;
            }

            segments.push({i: id, h: data.htmlId + '_' + id + '_c', n: resourceData.name, c: data.cost[id]});
        }

        var resultHtml = '<span>Cost: </span>';
        for(var i = 0; i < segments.length; i++) {
            var segmentData = segments[i];
            resultHtml = resultHtml + '<span id="' + segmentData.h + '">ERR</span> ';
            resultHtml = resultHtml + '<span> ' + segmentData.n + '</span>';
            if(i < segments.length - 1) {
                resultHtml = resultHtml + '<span>, </span>';
            }

            var observer = Game.ui.createResourceObserver({htmlId: segmentData.h, value: segmentData.c, res: segmentData.i, type: RESOURCE_OBSERVER_TYPE.SPECIFIC_VALUE});
            observerArray.push(observer);
        }

        return resultHtml;
    };

    instance.updateDisplay = function(data) {

        var navPanel = $('#' + this.tab.getNavElementId(data.id));
        if(data.unlocked === true && data.hidden !== true) {
            navPanel.show();
        } else {
            navPanel.hide();
        }

        var gainButton = $('#' + data.htmlId + '_gain');
        gainButton.attr("disabled", data.current >= data.capacity);
        gainButton.text('Gain ' + data.perClick);

        /*var perSecondSpan = $('#' + data.htmlId + '_perSecond');
        perSecondSpan.text(data.perSecond);
        if(data.perSecond < 0) {
            perSecondSpan.addClass('red');
        } else {
            perSecondSpan.removeClass('red');
        }

        var currentSpan = $('#' + data.htmlId + '_current');
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

        currentSpan.text(Game.settings.format(data.current));
        $('#' + data.htmlId + '_capacity').text(Game.settings.format(data.capacity));*/

        data.displayNeedsUpdate = false;
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