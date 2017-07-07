(function(){

	var instance = {};

	instance.entries = {};
    instance.categoryTemplate = null;
    instance.entryTemplate = null;

    instance.categoryElements = {};
    instance.rootElement = null;

    instance.starTemplate = Handlebars.compile(
    	['<tr id="{{htmlId}}"><td style="border:none;">',
	        '<h3 class="default btn-link" id="{{htmlId}}_name">{{name}}</h3>',
	        '<span>',
	            '<p>{{desc}}</p>',
	            '<p id="{{htmlId}}_cost"></p>',
	        '</span>',
	        '<br><br>',
	        '<div class="btn btn-default" id="{{htmlId}}_unlock">Unlock</div>',
	        '</td></tr>'].join('\n'));]

	for star in stars {
		var content = template(star);
		$('#target').append($(content));
	}

}