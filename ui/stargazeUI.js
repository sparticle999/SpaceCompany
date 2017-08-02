Game.stargazeUI = (function(){

	var instance = {};
	
	instance.entries = {};
	instance.prestigeEntries = {};
    instance.prestigeObservers = {};
    instance.titleTemplate = null;
    instance.navTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.categoryNames = {};

    instance.initialise = function() {
        if(Game.constants.enableStargaze === false) {
            return;
        }

        this.tab = Game.ui.createTab({id: 'stargaze', title: 'Stargaze'});
        this.tab.initialise();

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.navTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;" colspan="3" class="{{hidden}}">',
                    '<span>{{name}}</span>',
                '</td>',].join('\n'));

        for(var id in Game.stargazeCategoryData){
            Game.stargaze.categoryEntries[id] = Game.stargazeCategoryData[id];
        }

        for(var id in Game.stargaze.categoryEntries) {
            this.tab.addCategory(id, Game.stargaze.categoryEntries[id].title);
        }

        for(var id in Game.stargazeData) {
            this.createDisplay(id);
        }
    };

    instance.update = function(delta) {

        // for(var id in this.entries) {
        //     var data = Game.resources.getResourceData(this.entries[id].id);
        //     if(data.displayNeedsUpdate === true) {
        //         this.updateDisplay(data);
        //     }
        // }
        // for(var id in this.rocketEntries) {
        //     var data = Game.interstellarBETA.rocket.getRocketData(id);
        //     if(data.displayNeedsUpdate === true) {
        //         this.updateRocketDisplay(data);
        //     }
        // }

        // for(var id in this.rocketPartEntries) {
        //     var data = Game.interstellarBETA.rocketParts.getPartData(id);
        //     if(data.displayNeedsUpdate === true) {
        //         this.updatePartDisplay(data);
        //     }
        // }

        // for(var id in this.rocketPartEntries) {
        //     var data = Game.interstellarBETA.rocketParts.getPartData(id);
        //     if(data.displayNeedsUpdate === true) {
        //         this.updateRocketPartDisplay(data);
        //         console.log(true);
        //     }
        // }

        // for(var id in Game.resources.categoryEntries) {
        //     if(this.tab.categoryHasVisibleEntries(id) === true) {
        //         this.tab.showCategory(id);
        //     } else {
        //         this.tab.hideCategory(id);
        //     }
        // }
    };

    instance.createRocket = function(data, rocketData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var rocket = this.rocketTemplate(rocketData);
        tabContentRoot.append($(rocket));
        this.rocketEntries[rocketData.id] = data.id;
        this.rocketObservers[rocketData.id] = [];
    };

    instance.createRocketPart = function(data, partData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var part = this.rocketPartTemplate(partData);
        tabContentRoot.append($(part));

        this.rocketPartEntries[partData.id] = data.id;
        this.rocketPartObservers[partData.id] = [];
        Game.ui.bindElement("rocpart_" + partData.entryName + "Count", function(){ return Game.settings.format(partData.count); });
    };

    instance.createContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));

        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);

        // for (var id in Game.buildings.entries) {
        //     var buildingData = Game.buildings.entries[id];
        //     if(buildingData.resource && buildingData.resource === data.id) {
        //         this.createResourceContentBuilding(data, buildingData);
        //     }
        // }
    };

    instance.createRocketContent = function(data){
        var target = $('#' + this.tab.getContentElementId(data.id));

        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);
        for (var id in Game.interstellarBETA.rocket.entries){
            var rocketData = Game.interstellarBETA.rocket.entries[id];
            this.createRocket(data, rocketData);
        }
        for (var id in Game.interstellarBETA.rocketParts.entries){
            var partData = Game.interstellarBETA.rocketParts.entries[id];
            this.createRocketPart(data, partData);
        }
    }

    instance.createStargazeNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));
        this.createContent(data);
        var html = this.navTemplate(data);
        target.append($(html));
    };

    instance.createDisplay = function(id) {
        var data = Game.stargaze.getStargazeData(id);
        this.tab.addNavEntry(data.category, id);

        
        this.createStargazeNav(data);

        this.entries[data.htmlId] = data;
    };

    instance.updatePartDisplay = function(data) {
        var element = $('#' + data.htmlId);
        if(data.unlocked === true) {
            element.show();
        } else {
            element.hide();
        }
        // Update the cost display
        if(data.cost) {
            var costDisplayData = this.buildCostDisplay(this.rocketPartObservers[data.id], data);
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
            costElement.append($(costDisplayData));
        }

        data.displayNeedsUpdate = false;
    };

    instance.updateRocketDisplay = function(data) {
        var element = $('#' + data.htmlId);
        if(data.unlocked === true) {
            element.show();
        } else {
            element.hide();
        }
        // Update the cost display
        if(data.built == true){
            console.log(document.getElementById('roc_' + data.id + 'Built'));
            var status = document.getElementById('roc_' + data.id + 'Built');
            status.innerHTML = "Built";
            status.className = "green";
            var costElement = $('#' + data.htmlId + '_cost');
            costElement.empty();
        } else {
            if(data.cost) {
                var costDisplayData = this.buildRocketCostDisplay(this.rocketObservers[data.id], data);
                var costElement = $('#' + data.htmlId + '_cost');
                costElement.empty();
                costElement.append($(costDisplayData));
            }
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
            var resourceData = Game.resources.getResourceData(id);
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

    instance.buildRocketCostDisplay = function(observerArray, data) {
        for(var i = 0; i < observerArray.length; i++) {
            observerArray[i].delete();
        }

        // Empty but keep the reference
        observerArray.length = 0;

        var segments = [];
        for(var id in data.cost) {
            var rocketPartData = Game.interstellarBETA.rocketParts.getPartData(id);
            if(!data) {
                console.error("Unknown Part in cost: " + id);
                continue;
            }

            segments.push({i: id, h: data.htmlId + '_' + id + '_c', n: rocketPartData.name, c: data.cost[id]});
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

    Game.uiComponents.push(instance);

    return instance;

}());