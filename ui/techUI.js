Game.techUI = (function() {
	var instance = {};


	instance.initialise = function() {

		this.tab = Game.ui.createTab({id: 'research', title: 'Research BETA', hidden: ''});

		this.labTable = $('#labTable');
		this.techTable = $('#techTable');
		
		instance.techTemplate = Handlebars.compile([
			'<tr id="{{htmlId}}" class="hidden">',
			'<td>',
			'<h3 class="default btn-link" id="{{htmlIdTitle}}">{{name}}</h3>',
			'<span>',
			'{{desc}}',
			'<br>',
			'Costs <span id="{{htmlId}}Cost"></span> Science',
			'</span>',
			'<br><br>',
			'<button id="{{htmlIdButton}}" onclick="Game.tech.buyTech(\'{{id}}\')" class="btn btn-default">',
			'{{buttonText}}',
			'</button>',
			'<br><br>',
			'</td>',
			'</tr>'
		].join('\n'));

		instance.machineTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}"><td>',
            '<h3 class="default btn-link">{{name}}: <span id="{{htmlId}}Count">0</span></h3>',
            '<span>',
                '<p>{{desc}}</p>',
                '<p id="{{htmlId}}_prod"></p>',
                '<p id="{{htmlId}}_cost"></p>',
            '</span>',
            '<div id="{{htmlId}}_buy_1" class="btn btn-default">Get 1</div>',
            '<hide class="multiBuy hidden">',
            '<div id="{{htmlId}}_buy_10" class="btn btn-default">Get 10</div>',
            '<div id="{{htmlId}}_buy_100" class="btn btn-default">Get 100</div>',
            '<div id="{{htmlId}}_buy_10000" class="btn btn-default">Get Max</div>',
            '</hide>',
            '<div style="height:5px"></div>',
            '<hide class="destroy hidden">',
            '<div id="{{htmlId}}_destroy_1" class="btn btn-default">Destroy 1</div>',
            '<hide class="multiBuy hidden">',
            '<div id="{{htmlId}}_destroy_10" class="btn btn-default">Destroy 10</div>',
            '<div id="{{htmlId}}_destroy_100" class="btn btn-default">Destroy 100</div>',
            '<div id="{{htmlId}}_destroy_10000" class="btn btn-default">Nuke All</div>',
            '</hide>',
            '</hide>',
            '</td></tr>'].join('\n'));

		// Create a list of labs and loop through it to create the HTML
		var labs = Object.keys(Game.buildings.entries).filter(
			building => Game.buildings.entries[building].resource == 'science'
		)
		labs.forEach(lab => this.createLab(lab))


		for(var id in Game.techData){
			this.createTech(id);
		}
	};

	instance.createLab = function(id) {
		var data = Game.buildings.entries[id];
		var html = this.machineTemplate(data);
		this.labTable.append(html)
	}

	instance.createTech = function(id) {
		var data = Game.tech.entries[id];
		var html = this.techTemplate(data);
		this.techTable.append(html);

		// all currently used techs cost only science
		var cost = Game.settings.format(data.cost['science']);
		$('#' + data.htmlId + 'Cost').text(cost);
	};

	instance.removeTech = function(data) {
		$('#' + data.htmlId).remove();
	};

	instance.replaceTech = function(data) {
		// remove the old row first
		this.removeTech(data);
		this.addTech(data);
	};

	return instance;
}());