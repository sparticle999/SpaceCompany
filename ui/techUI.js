(function(){

    var instance = {};

    instance.entries = {};
    instance.techEntries = {};
    instance.techObservers = {};
    instance.buildingEntries = {};
    instance.buildingObservers = {};
    instance.titleTemplate = null;
    instance.techTemplate = null;
    instance.buildingTemplate = null;
    instance.navTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.initialize = function() {
        if(Game.constants.enableDataDrivenResources === false) {
            return;
        }

        this.tab = Game.ui.createTab({id: 'scienceBETA', title: 'Science (BETA)'});
        this.tab.initialize();

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
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
            ['<tr id="{{htmlId}}"></ter><td style="border:none;">',
                '<h3 class="default btn-link">{{name}}: <span id="{{htmlId}}_count"></span></h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p id="{{htmlId}}_prod"></p>',
                    '<p id="{{htmlId}}_cost"></p>',
                '</span>',
                '<br><br>',
                '<div id="{{htmlId}}_buy1" class="btn btn-default" disabled="true">Buy 1</div>',
                '<div id="{{htmlId}}_buy10" class="btn btn-default" disabled="true">Buy 10</div>',
                '<div id="{{htmlId}}_buy100" class="btn btn-default" disabled="true">Buy 100</div>',
                '<br>',
                '<div id="{{htmlId}}_destroy1" class="btn btn-default" disabled="true">Destroy 1</div>',
                '<div id="{{htmlId}}_destroy10" class="btn btn-default" disabled="true">Destroy 10</div>',
                '<div id="{{htmlId}}_destroy100" class="btn btn-default" disabled="true">Destroy 100</div>',
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

        this.tab.addCategory('research', "Research");
        this.tab.addCategory('tech', "Technologies");

        this.createScienceDisplay();

        //for(var id in Game.tech.entries) {
          //  this.createDisplay(id);
        //}
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

        for(var id in this.techEntries) {
            var data = Game.tech.getTechData(id);
            if(data.displayNeedsUpdate === true) {
                this.updateTechDisplay(data);
            }
        }

        for(var id in this.buildingEntries) {
            var data = Game.buildings.getBuildingData(id);
            if(data.displayNeedsUpdate === true) {
                this.updateBuildingDisplay(data);
            }
        }
    };

    instance.createResourceContentTech = function(data, techData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var tech = this.techTemplate(techData);
        tabContentRoot.append($(tech));

        var unlockButton = $('#' + techData.htmlId + '_unlock');
        unlockButton.click({id: techData.id}, function(args) { Game.tech.buyTech(args.data.id, 1); });

        this.techEntries[techData.id] = data.id;
        this.techObservers[techData.id] = [];
    };

    instance.createResourceContentBuilding = function(data, buildingData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var tech = this.buildingTemplate(buildingData);
        tabContentRoot.append($(tech));

        this.buildingEntries[buildingData.id] = data.id;
        this.buildingObservers[buildingData.id] = [];

        Game.ui.createBuildingObserver({htmlId: buildingData.htmlId + '_count', bld: buildingData.id, type: BUILDING_OBSERVER_TYPE.CURRENT_VALUE});
        Game.ui.createBuildingObserver({htmlId: buildingData.htmlId + '_prod', bld: buildingData.id, type: BUILDING_OBSERVER_TYPE.RESOURCE_PRODUCTION});
        Game.ui.createBuildingObserver({htmlId: buildingData.htmlId + '_cost', bld: buildingData.id, type: BUILDING_OBSERVER_TYPE.COST});

        for(var i = 1; i <= 100; i*= 10) {
            var buyButton = $('#' + buildingData.htmlId + '_buy' + i);
            buyButton.click({id: buildingData.id, count: i}, this.buildingBuyClick);

            var destroyButton = $('#' + buildingData.htmlId + '_destroy' + i);
            destroyButton.click({id: buildingData.id, count: i}, this.buildingDestroyClick);
        }
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

    instance.createScienceDisplay = function() {
        var id = 'science';
        var data = Game.resources.getResourceData(id);

        this.tab.addNavEntry('research', id);

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
            var costDisplayData = Game.ui.utils.buildCostDisplay(this.techObservers[data.id], data.htmlId, data.cost);
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

        for(var i = 1; i <= 100; i*= 10) {
            var buyButton = $('#' + data.htmlId + '_buy' + i);
            var canAfford = Game.buildings.canAfford(data.id, i);
            buyButton.attr('disabled', !canAfford);


            var destroyButton = $('#' + data.htmlId + '_destroy' + i);
            destroyButton.attr('disabled', data.current < i);
        }
    };

    instance.updateDisplay = function(data) {

        var navPanel = $('#' + this.tab.getNavElementId(data.id));
        if(data.unlocked === true && data.hidden !== true) {
            navPanel.show();
        } else {
            navPanel.hide();
        }

        data.displayNeedsUpdate = false;
    };

    instance.buildingBuyClick = function(args) {
        var id = args.data.id;
        var count = args.data.count;
        Game.buildings.constructBuildings(id, count);
    };

    instance.buildingDestroyClick = function (args) {
        var id = args.data.id;
        var count = args.data.count;
        Game.buildings.destroyBuildings(id, count);
    };

    Game.uiComponents.push(instance);

}());