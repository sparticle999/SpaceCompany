(function(){

	var instance = {};
	
	instance.entries = {};
	instance.machineEntries = {};
    instance.machineObservers = {};
    instance.starEntries = {};
    instance.starObservers = {};
    instance.titleTemplate = null;
    instance.machineTemplate = null;
    instance.navTemplate = null;

    instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

    instance.categoryNames = {
        'starT1': "Tier 1 Stars",
        'starT2': "Tier 2 Stars",
        'starT3': "Tier 3 Stars",
        'starT4': "Tier 4 Stars"
    };

    instance.initialize = function() {

    	if(Game.constants.enableInterstellar === false) {
            return;
        }

        this.tab = Game.ui.createTab({id: 'interstellarBeta', title: 'Interstellar (BETA)'});
        this.tab.initialize();

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '<div class="btn btn-default" id="{{htmlId}}_gain" disabled="true">ERR</div>',
                '<br><br>',
                '</td></tr>'].join('\n'));

        instance.machineTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"></ter><td style="border:none;">',
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

	    instance.starTemplate = Handlebars.compile(
	    	['<tr id="{{htmlId}}"><td style="border:none;">',
		        '<h3 class="default btn-link" id="{{htmlId}}_name">{{name}}</h3>',
		        '<span>',
		            '<p>{{desc}}</p>',
		            '<p id="{{htmlId}}_cost"></p>',
		        '</span>',
		        '<br><br>',
		        '<div class="btn btn-default" id="{{htmlId}}_unlock">Unlock</div>',
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

	    for(var id in Game.starData) {
            this.createDisplay(id);
        }

		for (star in instance.entries) {
			var content = template(star);
			$('#target').append($(content));
		}
	}

	instance.update = function(){

	}

	instance.createStar = function(data, starData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var star = this.starTemplate(starData);
        tabContentRoot.append($(star));

        this.starEntries[starData.id] = data.id;
        this.starObservers[starData.id] = [];
    };

	instance.createResourceContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));

        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);
        $('#' + data.htmlId + '_gain').click({self: instance, id: data.htmlId}, instance.gainClick);

        for (var id in Game.interstellar.entries) {
            var starData = Game.interstellar.entries[id];
            if(starData.resource && starData.resource === data.id) {
                this.createStar(data, starData);
            }
        }
    };

	instance.createInterstellarNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));

        var html = this.navTemplate(data);
        target.append($(html));

        // Create the resource observers, we don't care about keeping these, always active
        Game.ui.createResourceObserver({htmlId: data.htmlId + '_current', res: data.id, type: RESOURCE_OBSERVER_TYPE.CURRENT_VALUE});
        Game.ui.createResourceObserver({htmlId: data.htmlId + '_capacity', res: data.id, type: RESOURCE_OBSERVER_TYPE.CAPACITY});
        Game.ui.createResourceObserver({htmlId: data.htmlId + '_perSecond', res: data.id, type: RESOURCE_OBSERVER_TYPE.PER_SECOND});
    };

	instance.createDisplay = function(id) {
        var data = Game.interstellar.getInterstellarData(id);

        if (!Game.interstellarCategoryData[data.category]) {
            return;
        }

        this.tab.addNavEntry(data.category, id);

        this.createResourceContent(data);
        this.createInterstellarNav(data);

        this.entries[data.htmlId] = data;
    };

	Game.uiComponents.push(instance);

}());