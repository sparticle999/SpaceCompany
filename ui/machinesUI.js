'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
Templates.machinesUI = function(cPage, cTitle, cObj) {

	// machinesUI('machines', '', 'Machines', Game.pages.machines);

	this.page = cPage;
	this.title = cTitle;
	this.data = cObj;

	var storageIDs = [];

	/**
	 * Creates the link to the page of the top menu
	 * Attaches to tabList
	 */
	var TemplateTopMenuNav = Handlebars.compile(
        ['<li role="presentation" id="'+this.page+'Tab" class="hidden">',
           '<a href="#'+this.page+'Tab_pane" id="{{htmlId}}_link" class="-" aria-controls="'+this.page+'" role="tab" data-toggle="tab">',
             '<div id="'+this.page+'TabGlyph" class="glyphicon glyphicon-exclamation-sign"></div>',
               this.title,
           '</a>',
         '</li>',''].join('\n'));

	/**
	 * Combines the menu & pane content to build the page
	 * Attaches to tabContent
	 */
	var TemplateBuildPage = Handlebars.compile(
		['<div role="tabpanel" class="tab-pane fade" id="'+this.page+'Tab_pane">',
		   '<div class="container" style="width:380px; padding:0; float:left;">',
		     '<table class="table table-hover text-primary no-select pointer">',
			   '<tbody id="'+this.page+'Tab_nav">',
		       '</tbody>',
		     '</table>',
	       '</div>',
	       '<div class="tab-content" id="'+this.page+'Tab_content">',
		   '</div>',
		 '</div>',''].join('\n'));


	////////////////////
	// Menu Templates //
	////////////////////

	/**
	 * Formats a header menu row
	 * {{category}} - category: energy, rocketFuel
	 * {{title}} - Science, Energy
	 * Merges into solarTab_nav
	 */
	var TemplateMenuHeader = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{category}}_collapse" class="">',
		   '<td colspan="4" style="border:{{border}};"><span>{{title}}</span><span class="caret"></span></td>',
		 '</tr>',''].join('\n'));

	/**
	 * Formats a menu row of an item that has no ps or storage
	 * {{id}} - moon, rocket
	 * {{name}} - The Moon, Space Rocket
	 * {{itemHidden}} - hidden or null - sets the default hide class
	 * Merges into solarTab_nav
	 */
	var TemplateEmptyMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{id}}_ne" href="#'+this.page+'Tab_{{id}}_nec" class="collapse_'+this.page+'Tab_{{id}} {{idHidden}}" aria-controls="'+this.page+'Tab_{{id}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;">',
		     '<img src="Icons/{{id}}Icon.png" style="width:30px; height:auto">',
		   '</td>',
		   '<td style="vertical-align:middle;" colspan="3">',
		     '<span>{{title}}</span>',
		   '</td>',
		 '</tr>',''].join('\n'));


	////////////////////////////
	// Content Pane Templates //
	////////////////////////////

	/**
	 * Creates the table for the content pane
	 * {{id}} - energy, earth
	 * Attaches onto this.page+'Tab_{{id}}_netc (machinesTab_energy_netc)
	 */
	var TemplatePaneHeader = Handlebars.compile(
		['<div id="'+this.page+'Tab_{{id}}_nec" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
			'<div class="container" style="max-width:800px;">',
		    	'<table class="table">',
		    		'<tbody id="'+this.page+'Tab_{{id}}_netc">',
		    			'<tr>',
    					   '<td colspan="6" style="vertical-align:bottom;">',
    					     '<h3 class="default btn-link">{{title}}</h3>',
    					   '</td>',
    					   '<td colspan="1" style="vertical-align:bottom;">',
    					     '<h3 class="default btn-link">Resource Production</h3>',
    					   '</td>',
    					   '<td colspan="1" style="vertical-align:bottom;">',
    					     '<h3 class="default btn-link">Energy Use</h3>',
    					   '</td>',
    					 '</tr>',
			        	// Content comes here
			    	'</tbody>',
		    	'</table>',
			'</div>',
		 '</div>',''].join('\n'));

	/**
	 * Creates a row on the content pane with the info and sometimes a gain button
	 * {{id}} - helium, moon
	 * {{title}} - Helium, The Moon
	 * {{description}} - A short text
	 * {{manualgain}} - true/false - Doesn't create the gainButton if false.
	 * Attaches onto this.page+'Tab_{{id}}_netc (machinesTab_energy_netc)
	 */
	var TemplateTableResource = Handlebars.compile(
		['<tr>',
			'<td colspan="1">',
				'<button id="'+this.page+'_{{id}}_activate_-10000" class="btn btn-default">--</button>',
			'</td>',
			'<td colspan="1">',
				'<button id="'+this.page+'_{{id}}_activate_-1" class="btn btn-default">-</button>',
			'</td>',
			'<td colspan="1">',
				'<h4 class="default btn-link">{{name}}</h4>',
			'</td>',
			'<td colspan="1">',
				'<h5 class="default btn-link">',
				'<span class="{{htmlId}}active">{{active}}</span>/<span class="{{htmlId}}current">{{current}}</span>',
				'</h5>',
			'</td>',
			'<td colspan="1">',
				'<button id="'+this.page+'_{{id}}_activate_1" class="btn btn-default">+</button>',
			'</td>',
			'<td colspan="1">',
				'<button id="'+this.page+'_{{id}}_activate_10000" class="btn btn-default">++</button>',
			'</td>',
			'<td colspan="1">',
				'<h5 class="default btn-link">',
					'<span class="{{htmlId}}prod">0</span>/sec',
				'</h5>',
			'</td>',
			'<td colspan="1">',
				'<h5 class="default btn-link">',
					'<span class="{{htmlId}}use">0</span>/sec',
				'</h5>',
			'</td>',
		'</tr>',
		 ''].join('\n'));

	var TemplateResourceTitle = Handlebars.compile(
		['<tr>',
		   '<td colspan="6" style="vertical-align:bottom;">',
		     '<h3 class="default btn-link">{{name}}</h3>',
		   '</td>',
		   '<td colspan="1" style="vertical-align:bottom;">',
		     '<h3 class="default btn-link">',
		     	'<span class="{{htmlId}}ps">0</span>/sec',
		     '</h3>',
		   '</td>',
		   '<td colspan="1" style="vertical-align:bottom;">',
		     '<h3 class="default btn-link">',
		     	'<span class="{{htmlId}}use">0</span>/sec',
		     '</h3>',
		   '</td>',
		 '</tr>',
		 ''].join('\n'));

	/**
	 * Creates the content pane of a page
	 * @param  {Object} data Resource object containing building data
	 */
	var createPane = function(data) {
		var t    = {};
		t.title   = data.title;
		t.id = data.id;

		if(t.title.indexOf(' Resources') != -1){
			t.title = t.title.substring(0, t.title.indexOf(' Resources'));
		}
		t.title += " Machines"
		// Attach the content pane table
		attachHTML(cPage+'Tab_content', TemplatePaneHeader(t));
		// Attach Table of Resources and Buildings in Category
		var items = Object.keys(data.items).sort(function(a, b) {return data.items[a].order > data.items[b].order});
		items.forEach(function(item){
			var res = Game.resources.entries[item];
			attachHTML(cPage+'Tab_'+t.id+'_netc', TemplateResourceTitle(res));
			var buildings = Object.keys(Game.resources.entries[item].items);
			buildings.forEach(function(building){
				attachHTML(cPage+'Tab_'+t.id+'_netc', TemplateTableResource(res.items[building]));
			});
		});
		
		return "";
	};

	var createMenuHeader = function(data) {
		var html = TemplateMenuHeader(data);
		// Stuff the UI needs to register
		return html
	}

	/**
	 * Creates the entire page
	 * -> Creates the menu headers by looping through the categories
	 *   -> Creates the menu items by looping through the items under each category
	 *     -> Dispatches each item to 'createPane' which creates and links the pane content.
	 * @param  	{Object} data 			Object of the data belonging on the page
	 * @param 	{string} subcategory 	A string representing the name of the subcategory.
	 * @return 	{string}      			Returns a string containing all menu rows
	 */
	var createPage = function(data) {
		// Get the categories and their order
		var categories = Object.keys(data).sort(function(a, b) {return data[a].order > data[b].order})
		// Loop through the catagories
		var html = "";
		categories.forEach(function(cat) {
			// Append this row to the menu
			html += createMenuHeader(data[cat]);
			// Does data[cat] have .items ?
			if ('items' in data[cat]) {
				// Get the items and their order
				var subitems = Object.keys(data[cat].items).sort(function(a, b) {
					return data[cat].items[a].order > data[cat].items[b].order
				})
				// Loop through the items
				subitems.forEach(function(subitem) {
					html += TemplateEmptyMenuItem(data[cat].items[subitem])
					if ('items' in data[cat].items[subitem]) {
						// Dispatch this item to the function creating the pane
						createPane(data[cat].items[subitem]);
					// No .items in data[cat].items[subitems]
					} else {
						// create a temporary object to only pass the current subitem
						var tempObj = {}; tempObj.items = data[cat].items[subitem];
						createPane(tempObj);						
					}
				})
			// No subitems in the main structure.
			} else {
				// Create a single menu item
				html += createMenuHeader(data[cat])
				// No subitems, treat data[cat] as the source for the content pane
				createPane(data[cat]);
			}
		})
		// return html
		return html;
	}

	/**
	 * Attaches HTML strings to an element
	 * @param  {string} tag  A string representing the parent ID of the HTML
	 * @param  {string} HTML The HTML code that needs to be added under ID
	 * @return {boolean}     True on success
	 */
	var attachHTML = function(tag, HTML) {
		var node = document.getElementById(tag)
		if (!node) {
			//console.log(cTitle+" - Could not add this tab to the main menu: "+tag);
			return false;
		}
		// Insert the node before the end of tag
		node.insertAdjacentHTML('beforeend', HTML);
		return true;
	};

	/**
	 * Composes the page and adds it to the game
	 */
	this.initialise = function() {
		// Link this page to the main menu
		attachHTML('tabList', TemplateTopMenuNav());
		// Link the page table to tabContent
		attachHTML('tabContent', TemplateBuildPage());
		// Link the menu to '+this.page+'Tab_pane
		attachHTML(this.page+'Tab_nav', createPage(this.data));
		// The content panes are linked through createPage -> createPane

	};
};