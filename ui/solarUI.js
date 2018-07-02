Game.solarUI = (function(){

	var instance = {};

	instance.entries = {};

	instance.machineEntries = {};
	instance.machineObservers = {};

	instance.tabRoot = null;
	instance.navRoot = null;

	instance.tab = null;

	instance.category = 'solar System';

	instance.initialise = function() {

		this.tab = Game.ui.createTab({id: this.category, title: Game.utils.capitaliseFirst(this.category), hidden: '',});
		this.tab.initialise();

		instance.titleTemplate = Handlebars.compile(
			['<tr><td colspan="2" style="border:none;">',
			'<h2 class="default btn-link">{{name}}</h2>',
			'<span>{{{desc}}}</span>',
			'<br><br>',
			'<hide class="gainButton">',
			'<div onclick="Game.resources.addResource(\'{{id}}\', {{gainNum}}, true)" class="btn btn-default">Gain <span id="plasmaGain">1</span></div>',
			'<br>',
			'<br>',
			'</hide>',
			'</td></tr>'].join('\n'));

		instance.navTemplate = Handlebars.compile(
			['<td style="vertical-align:middle;">',
			'<img src="Icons/{{id}}Icon.png" style="width:30px; height:auto">',
			'</td>',
			'<td style="vertical-align:middle;" colspan="1">',
			'<span>{{name}}</span>',
			'</td>',
			'<td style="vertical-align:middle; text-align:center;">',
			'<span>',
			'<span id="{{id}}ps">{{perSecond}}</span>/Sec',
			'</span>',
			'</td>',
			'<td style="vertical-align:middle; text-align:right;">',
			'<span id="{{id}}">',
			'{{current}}',
			'</span>',
			'/',
			'<span id="{{id}}Storage">{{capacity}}</span>',
			'</td>'].join('\n'));

		for(var id in Game.solarCategoryData){
			Game.solar.categoryEntries[id] = Game.solarCategoryData[id];
		}

		for(var id in Game.solar.categoryEntries) {
			this.tab.addCategory(id, Game.solar.categoryEntries[id].title);
		}

		for(var id in Game.solarData) {
			this.createDisplay(id);
		}
	};

	instance.createDisplay = function(id){

	};

	return instance;
}());