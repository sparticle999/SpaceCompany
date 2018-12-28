'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
Templates.solarUI = function(cPage, cTitle, cObj) {

	// solarUI					('solar', 'Solar System', Game.pages.solar)


	// When creating or adjusting a template, make sure all ids start with'+this.page+'
	// This is to make sure they're unique regardless of the content
	// Use a class for global information like hidden info, resource counts, machine costs, etc


	this.page = cPage;
	this.title = cTitle;
	this.data = cObj;

	// Object containing the ID masks 
	var registeredEvents = {};


	/**
	 * Creates the link to the page of the top menu
	 * Attaches to tabList
	 */
	var TemplateTopMenuNav = Handlebars.compile(
        ['<li role="presentation" id="'+this.page+'Tab" class="hidden">',
           '<a href="#'+this.page+'Tab_pane" id="'+this.page+'Tab_link" class="" aria-controls="'+this.page+'" role="tab" data-toggle="tab">',
             '<div id="'+this.page+'TabGlyph" class="glyphicon glyphicon-exclamation-sign hidden"></div>',
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
		['<tr id="'+this.page+'Tab_{{category}}_collapse" class="hidden">',
		   '<td colspan="4" style="border:{{border}};"><span>{{title}}</span><span class="caret"></span></td>',
		 '</tr>',''].join('\n'));
	
	/**
	 * Formats a menu row, hides storage
	 * {{htmlId}} - energy, rocketFuel
	 * {{name}} - Energy, Rocket Fuel
	 * {{category}} - category of this item - earth, inner
	 * Merges into solarTab_nav
	 */
	var TemplateResourceMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{htmlId}}_ne" href="#'+this.page+'Tab_{{htmlId}}_nec" class="'+this.page+'Tab_{{category}}_collapse hidden" aria-controls="'+this.page+'Tab_{{htmlId}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;"><img src="Icons/{{id}}Icon.png" style="width:30px; height:auto"></td>',
		   '<td style="vertical-align:middle;" colspan="1"><span>{{name}}</span></td>',
		   '<td style="vertical-align:middle; text-align:center;"><span><span class="{{htmlId}}ps">0</span>/Sec</span></td>',
		   // If storBuildings is in data, hide the capacity - claasList.remove("hidden") from all classes 'energyCapacityHidden'
		   '{{#if storBuildings}}',
		     '<td style="vertical-align:middle; text-align:right;">',
		       '<span class="{{htmlId}}current">{{current}}</span>',
		       '<span class="{{htmlId}}CapacityHidden hidden">',
		         ',/<span class="{{htmlId}}capacity">{{capacity}}</span>',
		       '</span>',
		     '</td>',
		   '{{else}}',
		     '<td style="vertical-align:middle; text-align:right;">',
		       '<span class="{{htmlId}}current">{{current}}</span>{{#if hideCapacity}}{{else}}/<span class="{{htmlId}}capacity"></span>{{/if}}',
		     '</td>',
		   '{{/if}}',
		 '</tr>',''].join('\n'));

	/**
	 * Formats a menu row of an item that has no ps or storage
	 * {{htmlId}} - moon, rocket
	 * {{name}} - The Moon, Space Rocket
	 * Merges into solarTab_nav
	 */
	var TemplateNonResourceMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{htmlId}}_ne" href="#'+this.page+'Tab_{{htmlId}}_nec" class="'+this.page+'Tab_{{category}}_collapse hidden" aria-controls="'+this.page+'Tab_{{htmlId}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;"><img src="Icons/{{icon}}.png" style="width:30px; height:auto"></td>',
		   '<td style="vertical-align:middle;" colspan="3"><span>{{name}}</span></td>',
		 '</tr>',''].join('\n'));


	////////////////////////////
	// Content Pane Templates //
	////////////////////////////

	/**
	 * Creates the table for the content pane
	 * {{htmlId}} - helium, moon
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneHeader = Handlebars.compile(
		['<div id="'+this.page+'Tab_{{htmlId}}_nec" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
		   '<div class="container" style="max-width:800px;">',
		     '<table class="table">',
		       '<tbody id="'+this.page+'Tab_{{htmlId}}_netc">',
		       // Content comes here
		       '</tbody>',
		     '</table>',
		   '</div>',
		 '</div>',''].join('\n'));

	/**
	 * Creates a row on the content pane with the info and sometimes a gain button
	 * {{htmlId}} - helium, moon
	 * {{name}} - Helium, The Moon
	 * {{desc}} - A short text
	 * {{storUpgrades}} - contains the storage upgrade costs.
	 * Merges onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneTitle = Handlebars.compile(
		['<tr>',
		   '<td colspan="2" style="border:none;">',
		   '<h2 class="default btn-link">{{name}}</h2>',
		   '<span>{{{desc}}}</span>',
		     '{{#if toggleable}}',
		     '<div>',
		       '<button type="button" id="'+this.page+'_{{htmlId}}_toggle" class="btn btn-default">',
		         'Toggle {{name}}',
		       '</button>',
		       '<br>',
		     '</div>',
		     '{{/if}}',
		   '</td>',
		 '</tr>',''].join('\n'));



	/**
	 * Adds a storBuilding or building to the content pane
	 * {{htmlId}} 		- plasmaT1, rocketFuelT3
	 * {{unlocked}} - true / false
	 * {{name}} 	- full name of the building
	 * Attaches onto this.page+'Tab_{{htmlId}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneBuilding = Handlebars.compile(
		['<tr id="'+this.page+'_{{htmlId}}_Container" class="{{id}}_Container {{#if unlocked}}{{else}}hidden{{/if}}">',
		   '<td>',
		     '<h3 class="default btn-link">{{name}}: <span class="{{htmlId}}current">0</span></h3>',
		     '<span>',
		       '{{desc}}',
		       '<br>',
		       '<span class="{{htmlId}}cost">Please enable javascript.</span>',
		     '</span>',
		     '<br>',
			 '<button type="button" id="'+this.page+'_{{htmlId}}_buy_1" class="btn btn-default">Get 1</button>',
		   '</td>',
		 '</tr>',''].join('\n'));

	/**
	 * Adds a location to the content pane
	 * {{name}} - Full name of the item
	 * {{desc}} - Description of the item
	 * {{htmlId}} 	- moon
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneLocation = Handlebars.compile(
		['<tr id="'+this.page+'_{{htmlId}}_Container" class="{{id}}_Container {{#if unlocked}}{{else}}hidden{{/if}}">',
		   '<td>',
		   	'{{#if cost}}',
		     '<h3 class="default btn-link">Exploration</h3>',
		     '<span>',
		       '{{desc}}',
		       '<br>',
		       '<span class="{{htmlId}}cost"></span>',
		     '</span>',
			 '<button type="button" id="'+this.page+'_{{htmlId}}_explore" class="btn btn-default">Explore {{name}}</button>',
		   	'{{/if}}',
		   '</td>',
		 '</tr>',''].join('\n'));


	////////////////////////////
	// Page content functions //
	////////////////////////////

	/**
	 * Collects all the building information under a resource and creates the html
	 * @param  {Object} buildingData Resource object containing the building info
	 * @return {string}              generated html containing all buildings producing a resource.
	 */
	var buildMachineCost = function(buildingData) {
		var html = ""
		Object.keys(buildingData).forEach(function(build) {
			var data = buildingData[build];
			if(data.category == "inner" || data.category == "outer"){
				html += TemplatePaneLocation(data);
			} else {
				html += TemplatePaneBuilding(data);
			}
			// At this point we know the page, name of the object and its type.
			// This is enough information for the UI to know which object this is.
			if ('active' in data) {
				if (!Templates.uiFunctions.registerElement(data, 'active')) {
					console.warn("Called with action: 'active' from 'buildMachineCost', while looping over:");
					console.warn(buildingData)
				}
			}
			if ('current' in data) {
				if (!Templates.uiFunctions.registerElement(data, 'current')) {
					console.warn("Called with action: 'current' from 'buildMachineCost', while looping over:");
					console.warn(buildingData)
				}
			}
			if ('cost' in data) {
				if (!Templates.uiFunctions.registerElement(data, 'cost')) {
					console.warn("Called with action: 'cost' from 'buildMachineCost', while looping over:");
					console.warn(buildingData)
				}
			}
		}); return html;
	}

	/**
	 * Creates each cost item of the gain cost
	 * @param  {string} res  Resource to be added into the cost html
	 * @param  {Object} data Resource object containing gainCost data
	 */

	var createGainCostHtml = function(res, data, last){
		Templates.uiFunctions.attachHTML(cPage, cPage+'_'+data.htmlId+'_gainCost', '<span class="text-capitalize">'+data.gainCost[res]+' '+res+last);
	}

	/**
	 * Creates the content pane of a page
	 * @param  {Object} data Resource object containing building data
	 */
	var createPane = function(data) {
		// Attach the content pane table
		Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_content', TemplatePaneHeader(data));
		// Attach the title of the pane to the header
		Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.htmlId+'_netc', TemplatePaneTitle(data));
		if (data.manualgain) {
			if (!Templates.uiFunctions.registerElement(data, 'gainNum')) {
				console.warn("Called with action: 'gainNum' from 'createPane', while looping over:");
				console.warn(data)
			}
			if(data.gainCost){
				var i = 0;
				for(var res in data.gainCost){
					i += 1;
					if(i == Object.keys(data.gainCost).length){var last = "";} else {var last = ", ";}
					createGainCostHtml(res, data, last);
				}
			}
		}
		// 	-> List machines?
		if ('items' in data) {
			// Attach the buildings to the title
			Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.htmlId+'_netc', buildMachineCost(data.items));
		} else {
			console.warn("Malformed object passed to createPane:");
			console.warn(data);
			//Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.htmlId+'_netc', buildMachineCost(tempObj))
		}
	}

	var createMenuHeader = function(data) {
		var html = TemplateMenuHeader(data);
		// Stuff the UI needs to register
		return html
	}

	var createResourceMenuItem = function(data) {
		var html = TemplateResourceMenuItem(data);
		if (!Templates.uiFunctions.registerElement(data, 'perSecond')) {
			console.warn("Called with action: 'perSecond' from 'createResourceMenuItem', while looping over:");
			console.warn(data)
		}
		if (!Templates.uiFunctions.registerElement(data, 'current')) {
			console.warn("Called with action: 'current' from 'createResourceMenuItem', while looping over:");
			console.warn(data)
		}
		if (!Templates.uiFunctions.registerElement(data, 'capacity')) {
			console.warn("Called with action: 'capacity' from 'createResourceMenuItem', while looping over:");
			console.warn(data)
		}
		return html;
	}

	var createNonResourceMenuItem = function(data) {
		var html = TemplateNonResourceMenuItem(data);
		return html;
	}

	var createMenuItem = function(data) {
		// Is this item a resource?  Add the applicable template to the menu
		var html = "";
		if (data.id in Game.resources.entries && data.capacity) {
			html = createResourceMenuItem(data);
		} else {
			html = createNonResourceMenuItem(data);
		}
		return html;
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
		var categories = Object.keys(data).sort(function(a, b) {return data[a].order > data[b].order});
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
					html += createMenuItem(data[cat].items[subitem])
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
				html += createMenuItem(data[cat])
				// No subitems, treat data[cat] as the source for the content pane
				createPane(data[cat]);
			}
		})
		// return html
		return html;
	}

	///////////////////////////
	// General use functions //
	///////////////////////////

	/**
	 * Composes the page and adds it to the game
	 */
	this.initialise = function() {
		console.log("%c", "background:black;padding:5px","initialising: "+this.page);
		// Link this page to the main menu
		Templates.uiFunctions.attachHTML(this.page, 'tabList', TemplateTopMenuNav());
		// Link the page table to tabContent
		Templates.uiFunctions.attachHTML(this.page, 'tabContent', TemplateBuildPage());
		// Link the menu to '+this.page+'Tab_Nav
		Templates.uiFunctions.attachHTML(this.page, this.page+'Tab_nav', createPage(this.data));
		// The content panes are linked through createPage -> createPane
	};
};
