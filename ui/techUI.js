Game.techUI = (function() {
	var instance = {};


	instance.initialise = function() {

		this.tab = Game.ui.createTab({id: 'research', title: 'Research BETA', hidden: 'hidden'})

		this.techTable = $('#techTable');
		instance.techTemplate = Handlebars.compile([
			'<tr id="{{htmlId}}" class="hidden">',
			'<td>',
			'<h3 class="default btn-link" id="{{htmlIdTitle}}">{{name}}</h3>',
			'<span>',
			'{{desc}}',
			'<br>',
			'Costs <span id="{{htmlIdCost}}"></span> Science',
			'</span>',
			'<br><br>',
			'<button id="{{htmlIdButton}}" onclick="purchaseTech(\'{{id}}\')" class="btn btn-default">',
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
            '<div id="{{htmlId}}_buy" onclick="Game.buildings.buyBuildings(\'{{id}}\')" class="btn btn-default">Get 1</div>',
            '<hide class="multiBuy hidden">',
            '<div id="{{htmlId}}_buy" onclick="Game.buildings.buyBuildings(\'{{id}}\', 10)" class="btn btn-default">Get 10</div>',
            '<div id="{{htmlId}}_buy" onclick="Game.buildings.buyBuildings(\'{{id}}\', 100)" class="btn btn-default">Get 100</div>',
            '<div id="{{htmlId}}_buy" onclick="Game.buildings.buyBuildings(\'{{id}}\', 10000)" class="btn btn-default">Get Max</div>',
            '</hide>',
            '<div style="height:5px"></div>',
            '<hide class="destroy hidden">',
            '<div id="{{htmlId}}_destroy" onclick="Game.buildings.destroyBuildings(\'{{id}}\')" class="btn btn-default">Destroy 1</div>',
            '<hide class="multiBuy hidden">',
            '<div id="{{htmlId}}_destroy" onclick="Game.buildings.destroyBuildings(\'{{id}}\', 10)" class="btn btn-default">Destroy 10</div>',
            '<div id="{{htmlId}}_destroy" onclick="Game.buildings.destroyBuildings(\'{{id}}\', 100)" class="btn btn-default">Destroy 100</div>',
            '<div id="{{htmlId}}_destroy" onclick="Game.buildings.destroyBuildings(\'{{id}}\', 10000)" class="btn btn-default">Nuke All</div>',
            '</hide>',
            '</hide>',
            '</td></tr>'].join('\n'));

		for(var id in Game.techData){
			this.createTech(id);
		}
	};

	instance.createTech = function(id) {
		var data = Game.tech.entries[id];
		var html = this.techTemplate(data);
		this.techTable.append(html);

		// all currently used techs cost only science
		var cost = Game.settings.format(data.cost['science']);
		data.getCostElement().text(cost);
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