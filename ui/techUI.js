Game.techUI = (function() {
	var instance = {};

	instance.techTemplate = null;

	instance.initialise = function() {
		this.techTemplate = Handlebars.compile([
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
	};

	return instance;
}());