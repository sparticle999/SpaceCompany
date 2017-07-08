(function(){

	var instance = {};

	instance.entries = {};
    instance.categoryTemplate = null;
    instance.entryTemplate = null;

    instance.categoryElements = {};
    instance.rootElement = null;

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

	instance.createDisplay = function(id) {
        var data = Game.interstellar.getInterstellarData(id);

        if (!Game.interstellarCategoryData[data.category]) {
            return;
        }

        this.tab.addNavEntry(data.category, id);

        this.createResourceContent(data);
        this.createResourceNav(data);

        this.entries[data.htmlId] = data;
    };

	Game.uiComponents.push(instance);

}());