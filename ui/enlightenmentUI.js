Game.enlightenmentUI = (function(){

	var instance = {};
	
	instance.entries = {};
    instance.introEntries = {};
	instance.ultriteEntries = {};
    instance.upgradeEntries = {};
    instance.titleTemplate = null;
    instance.navTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.categoryNames = {};

    instance.initialise = function() {

        this.tab = Game.ui.createTab({id: 'enlightenment', title: 'Enlightenment'});
        this.tab.initialise();

        if(Game.solCenter.entries.dyson.items.sphere.current == 0) {
            document.getElementById("enlightenmentTab").className = "hidden";
        }

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

        instance.ultriteTitleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{{desc}}}</span>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.navTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;" colspan="2">',
                    '<span>{{name}}</span>',
                '</td>',].join('\n'));

        instance.ultriteNavTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;" colspan="1">',
                    '<span>{{name}}</span>',
                '</td>',
                '<td style="vertical-align:middle; text-align:right;" colspan="1">',
                    '<span id="{{htmlId}}_current">{{count}}</span> (<span id="{{htmlId}}_potential">{{current}}</span>)',
                '</td>',].join('\n'));

        instance.ultriteInfoTemplate = Handlebars.compile(
            ['<tr><td>',
                '<h3 class="default btn-link">{{name}}: <span id="{{id}}_ultriteGain">0</span></h3>',
                '<p>{{desc}}</p>',
                '</td></tr>'].join('\n'));

        instance.enlightenTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"><td>',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<span>{{{desc}}}</span>',
                '<br>',
                '<div id="{{htmlId}}_buy" onclick="Game.enlightenment.upgrade(\'{{id}}\')" class="btn btn-warning">Enlighten</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.titanTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"><td>',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<span>{{{desc}}}</span>',
                '<br>',
                '<div id="{{htmlId}}_buy" onclick="Game.enlightenment.upgrade(\'{{id}}\')" class="btn btn-warning">Gain Titan</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.upgradeTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"><td>',
                '<h3 class="default btn-link">{{name}}: <span id="{{htmlId}}Achieved">Dormant</span></h3>',
                '<span>',
                    '<p>{{{desc}}}</p>',
                    '<p id="{{htmlId}}_cost">Costs: {{cost}} Ultrite</p>',
                '</span>',
                '<div id="{{htmlId}}_buy" onclick="Game.enlightenment.upgrade(\'{{id}}\')" class="btn btn-default">Activate</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        for(var id in Game.enlightenmentCategoryData){
            Game.enlightenment.categoryEntries[id] = Game.enlightenmentCategoryData[id];
        }

        for(var id in Game.enlightenment.categoryEntries) {
            this.tab.addCategory(id, Game.enlightenment.categoryEntries[id].title);
        }

        for(var id in Game.enlightenment.entries) {
            this.createDisplay(id);
        }
    };

    instance.update = function(delta) {
        $('#enl_ultrite_potential').text(Game.enlightenment.calcUltrite());
        this.updateUltrite();
        if(Game.enlightenment.rebirthNeedsUpdate == true){
            var enlightenment = Game.enlightenment;

            // Marks achieved upgrades as 'Activated'
            for(var id in Game.enlightenment.upgradeEntries){
                var data = Game.enlightenment.upgradeEntries[id];
                if(id != 'rebirth' && id != 'respec'){
                    if(data.achieved == true){
                        document.getElementById("enlUpg_" + id + 'Achieved').innerHTML = "Activated";
                        document.getElementById("enlUpg_" + id + '_buy').className = "btn btn-default disabled";
                    } else{
                        document.getElementById("enlUpg_" + id + 'Achieved').innerHTML = "Dormant";
                        document.getElementById("enlUpg_" + id + '_buy').className = "btn btn-default";
                    }
                }

                if(data.unlocked){
                    document.getElementById("enlUpg_" + id).className = "";
                } else {
                    document.getElementById("enlUpg_" + id).className = "hidden";
                }
            }
            enlightenment.rebirthNeedsUpdate = false;
        }
    };

    instance.createUltriteInfo = function(data, ultriteInfoData){
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var ultriteInfo = this.ultriteInfoTemplate(ultriteInfoData);
        tabContentRoot.append($(ultriteInfo));
    };

    instance.createUpgrade = function(data, upgradeData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        if(upgradeData.id == "enlighten"){
            var upgrade = this.enlightenTemplate(upgradeData);
        } else if(upgradeData.id == "titan"){
            var upgrade = this.titanTemplate(upgradeData);
        } else {
            var upgrade = this.upgradeTemplate(upgradeData);
        }
        tabContentRoot.append($(upgrade));
        //this.upgradeObservers[upgradeData.id] = [];
    };

    instance.createContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));
        if(data.id == "intro"){
            var tabTitle = this.introTitleTemplate(data);
        } else if (data.id == "ultrite"){
            var tabTitle = this.ultriteTitleTemplate(data);
        }
        else{
            var tabTitle = this.titleTemplate(data);
        }
        target.append(tabTitle);
        if(data.id == "ultrite"){
            for (var id in Game.ultrite) {
                var infoData = Game.ultrite[id];
                this.createUltriteInfo(data, $.extend({}, {id: id}, infoData));
            }
        }
        for (var id in Game.enlightenment.upgradeEntries) {
            var upgradeData = Game.enlightenment.upgradeEntries[id];
            if(data.id == upgradeData.category){
                this.createUpgrade(data, upgradeData);
            }
        }
    };

    instance.createEnlightenmentNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));
        this.createContent(data);
        if(data.id == "ultrite"){
            var html = this.ultriteNavTemplate(data);
        }
        else{
            var html = this.navTemplate(data);
        }
        target.append($(html));
    };

    instance.createDisplay = function(id) {
        var data = Game.enlightenment.entries[id];
        this.tab.addNavEntry(data.category, id);

        
        this.createEnlightenmentNav(data);

        this.entries[data.htmlId] = data;
    };

    instance.updateUltrite = function(){
        
    }

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
            var rocketPartData = Game.interstellar.rocketParts.getPartData(id);
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

    return instance;

}());