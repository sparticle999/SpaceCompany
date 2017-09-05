Game.resourcesUI = (function(){

    var instance = {};

    instance.entries = {};
    instance.storageEntries = {};
    instance.storageObservers = {};
    instance.resourceBuildingEntries = {};
    instance.resourceBuildingObservers = {};
    instance.titleTemplate = null;
    instance.storageUpgradeTemplate = null;
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
        // Prepends tab, rather than appending
        this.tab = Game.ui.createTab({id: 'resourcesBETA', title: 'Resources (BETA)', prepend:true});
        this.tab.initialise();

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '<div class="btn btn-default" id="{{htmlId}}_gain" disabled="true">ERR</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.storageUpgradeTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"><td style="border:none;">',
                '<h3 class="default btn-link" id="{{htmlId}}_name">{{name}}</h3>',
                '<span>',
                    '<p>{{desc}}<span id="{{htmlId}}_target">100</span></p>',
                    '<p id="{{htmlId}}_cost"></p>',
                '</span>',
                '<div class="btn btn-default" id="{{htmlId}}_unlock">Unlock</div>',
                '</td></tr>'].join('\n'));

        instance.buildingTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"></tr><td>',
                '<h3 class="default btn-link">{{name}}: <span id="{{htmlId}}_current">0</span></h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p id="{{htmlId}}_prod"></p>',
                    '<p id="{{htmlId}}_use"></p>',
                    '<p id="{{htmlId}}_cost"></p>',
                '</span>',
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

        this.addResources(delta);

        for(var id in this.entries) {
            var data = Game.resources.getResourceData(this.entries[id].id);
            if(data.displayNeedsUpdate === true) {
                this.updateDisplay(data);
                // document.getElementById("resourcesBETATab_" + data.category + "_collapse").className = "hidden";
                // if(data.unlocked == true){
                //     document.getElementById("resourcesBETATab_" + data.category + "_collapse").className = "";
                //     document.getElementById("resourcesBETATab_" + data.id + "_ne").className = "collapse_resourcesBETATab_" + data.category;
                // } else {
                //     document.getElementById("resourcesBETATab_" + data.id + "_ne").className = "collapse_resourcesBETATab_" + data.category + " hidden";
                // }
            }
        }

        for(var id in this.storageEntries) {
            var data = Game.resources.storageUpgrades[id];
            if(data.displayNeedsUpdate === true) {
                this.updateStorageDisplay(data);
            }
        }

        for(var id in this.resourceBuildingEntries) {
            var data = Game.buildings.getBuildingData(id);
            if(data.displayNeedsUpdate === true) {
                this.updateBuildingDisplay(data);
            }
        }

        for(var id in Game.resources.categoryEntries) {
            if(this.tab.categoryHasUnlockedEntries(id) === true) {
                this.tab.showCategory(id);
            } else {
                this.tab.hideCategory(id);
            }
        }
    };

    instance.createResourceContentTech = function(data, storageData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var tech = this.storageUpgradeTemplate(storageData);
        tabContentRoot.append($(tech));

        var unlockButton = $('#' + storageData.htmlId + '_unlock');
        unlockButton.click({id: storageData.id}, function(args) {Game.resources.upgradeStorage(args.data.id);});

        this.storageEntries[storageData.id] = data.id;
        this.storageObservers[storageData.id] = [];
    };

    instance.createResourceContentBuilding = function(data, buildingData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var tech = this.buildingTemplate(buildingData);
        tabContentRoot.append($(tech));

        $('#' + buildingData.htmlId + '_buy').click({self: instance, id: buildingData.id}, function(args) {Game.resources.buyMachine(args.data.id, 1);});
        $('#' + buildingData.htmlId + '_buy10').click({self: instance, id: buildingData.id}, function(args) {Game.resources.buyMachine(args.data.id, 10);});
        $('#' + buildingData.htmlId + '_buy100').click({self: instance, id: buildingData.id}, function(args) {Game.resources.buyMachine(args.data.id, 100);});

        $('#' + buildingData.htmlId + '_destroy').click({self: instance, id: buildingData.id}, function(args) {Game.resources.destroyMachine(args.data.id, 1);});
        $('#' + buildingData.htmlId + '_destroy10').click({self: instance, id: buildingData.id}, function(args) {Game.resources.destroyMachine(args.data.id, 10);});
        $('#' + buildingData.htmlId + '_destroy100').click({self: instance, id: buildingData.id}, function(args) {Game.resources.destroyMachine(args.data.id, 100);});

        this.resourceBuildingEntries[buildingData.id] = data.id;
        this.resourceBuildingObservers[buildingData.id] = [];
    };

    instance.createResourceContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));

        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);
        $('#' + data.htmlId + '_gain').click({self: instance, id: data.htmlId}, instance.gainClick);

        for (var id in Game.storageData) {
            var storageData = Game.resources.storageUpgrades[id];
            if(storageData.resource && storageData.resource === data.id) {
                this.createResourceContentTech(data, storageData);
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

    instance.updateStorageDisplay = function(data) {
        var element = $('#' + data.htmlId);

        // Update the cost display
        if(data.cost) {
            var costDisplayData = this.buildCostDisplay(this.storageObservers[data.id], data);
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
            costElement.append($(costDisplayData));

            $('#' + data.htmlId + '_target').text(data.cost[data.resource]*2);
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

        $('#' + data.htmlId + '_current').text(data.current);

        // Update the cost display
        if(data.cost) {
            var costDisplayData = this.buildCostDisplay(this.resourceBuildingObservers[data.id], data);
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
            costElement.append($(costDisplayData));
        }

        var segmentsUse = [];
        var segmentsProd = [];
        for(var resource in data.resourcePerSecond){
            var segmentX = {n: Game.utils.capitaliseFirst(resource), p: data.resourcePerSecond[resource]};
            if(segmentX.p < 0){
                segmentsUse.push(segmentX);
            } else {
                segmentsProd.push(segmentX);
            }
        }
        var useHtml = "<span>Uses </span>";
        var prodHtml = "<span>Produces </span>";
        for(var i = 0; i < segmentsUse.length; i++){
            var segmentData = segmentsUse[i];
            var html = '<span id="' + segmentData.n + 'Use">' + (segmentData.p*-1) + " " + segmentData.n + '</span>';
            useHtml += html;
            if(i < segmentsUse.length - 1) {
                useHtml += '<span>, </span>';
            }
        }
        for(var i = 0; i < segmentsProd.length; i++){
            var segmentData = segmentsProd[i];
            var html = '<span id="' + segmentData.n + 'Prod">' + segmentData.p + " " + segmentData.n + '</span>';
            prodHtml += html;
            if(i < segmentsProd.length - 1) {
                prodHtml += '<span>, </span>';
            }
        }
        useHtml += '<span> per second.</span>'
        prodHtml += '<span> per second.</span>'
        if(segmentsUse[0] != undefined){
            var target = $('#' + data.htmlId + '_use');
            target.empty()
            target.append(useHtml);
        }
        var target = $('#' + data.htmlId + '_prod');
        target.empty()
        target.append(prodHtml);

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

    instance.addResources = function(delta){
        for(var id in this.entries){
            var data = Game.resources.entries[this.entries[id].id];
            data.current += data.perSecond * delta;
        }
    }

    Game.uiComponents.push(instance);

    return instance;

}());