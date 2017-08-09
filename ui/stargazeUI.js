Game.stargazeUI = (function(){

	var instance = {};
	
	instance.entries = {};
    instance.introEntries = {};
	instance.darkMatterEntries = {};
    instance.carnelianEntries = {};
    instance.prasnianEntries = {};
    instance.hyaciniteEntries = {};
    instance.kitrinosEntries = {};
    instance.movitonEntries = {};
    instance.overlordEntries = {};
    instance.titleTemplate = null;
    instance.navTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.categoryNames = {};

    instance.initialise = function() {
        if(sphere == 0) {
            return;
        }

        this.tab = Game.ui.createTab({id: 'stargaze', title: 'Stargaze (Indev)'});
        this.tab.initialise();

        instance.introTitleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{para1}}</span>',
                '<br><br>',
                '<span>{{para2}}</span>',
                '<br><br>',
                '<span>{{para3}}</span>',
                '<br><br>',
                '<span>{{para4}}</span>',
                '<br><br>',
                '<span>{{para5}}</span>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.dmTitleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<h4><b>Relationship: {{opinion}}</b></h4>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.navTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;" colspan="2" class="{{hidden}}">',
                    '<span>{{name}}</span>',
                '</td>',
                '<td style="vertical-align:middle; text-align:right;" colspan="1" class="{{hidden}}">',
                    '<span>{{opinion}}</span>',
                '</td>',].join('\n'));

        instance.dmNavTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;" colspan="2" class="{{hidden}}">',
                    '<span>{{name}}</span>',
                '</td>',
                '<td style="vertical-align:middle; text-align:right;" colspan="1" class="{{hidden}}">',
                    '<span>{{current}}</span>',
                '</td>',].join('\n'));

        instance.upgradeTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"></tr><td>',
                '<h3 class="default btn-link">{{name}}: <span id="{{htmlId}}Achieved">Dormant</span></h3>',
                '<span>',
                    '<p>{{desc}}</p>',
                    '<p id="{{htmlId}}_cost">Costs: {{cost}} Dark Matter</p>',,
                '</span>',
                '<div id="{{htmlId}}_buy" onclick="Game.stargaze.upgrade({{id}})" class="btn btn-default">Activate {{id}}</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

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

    instance.createUpgrade = function(data, upgradeData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var upgrade = this.upgradeTemplate(upgradeData);
        tabContentRoot.append($(upgrade));
        this[upgradeData.category + "Entries"][upgradeData.id] = upgradeData;
        //this.upgradeObservers[upgradeData.id] = [];
    };

    instance.createContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));
        if(data.id == "intro"){
            var tabTitle = this.introTitleTemplate(data);
        } else if (data.id == "darkMatter"){
            var tabTitle = this.dmTitleTemplate(data);
        }
        else{
            var tabTitle = this.titleTemplate(data);
        }
        target.append(tabTitle);

        // if(data.id == "intro"){
        //     this.createUpgrade(data, Game.prestigeData.unlockStargaze);
        // }
        for (var id in Game.prestigeData) {
            var upgradeData = Game.prestigeData[id];
            if(data.id == upgradeData.category){
                this.createUpgrade(data, upgradeData);
            }
        }
    };

    instance.createStargazeNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));
        this.createContent(data);
        if(data.id == "darkMatter"){
            var html = this.dmNavTemplate(data);
        }
        else{
            var html = this.navTemplate(data);
        }
        target.append($(html));
    };

    instance.createDisplay = function(id) {
        var data = Game.stargaze.getStargazeData(id);
        this.tab.addNavEntry(data.category, id);

        
        this.createStargazeNav(data);

        this.entries[data.htmlId] = data;
    };

    instance.updateUpgradeDisplay = function(data) {
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