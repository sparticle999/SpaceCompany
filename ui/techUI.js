'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
Templates.techUI = function(cPage, cTitle, cObj) {

	// solarUI('solar', 'solarSystem', 'Solar System BETA', Game.pages.solar)


	// When creating or adjusting a template, make sure all ids start with'+this.page+'
	// This is to make sure they're unique regardless of the content
	// Preferably use the format page_{{item}}_Action, page_{{item}}_CategoryContainer and page_{{item}}_value
	// For instance: page_metalT1_buy_1, page_metal_StorBuildingContainer and page_metalT1_Cost
	// Use a class for global unlockables, like in a div around a mechanic that unlocks with research (destroy buttons, upgrade storage, etc)

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
		['<tr id="'+this.page+'Tab_{{category}}_collapse" class="hidden">',
		   '<td colspan="4" style="border:{{border}};"><span>{{title}}</span> <span class="caret"></span></td>',
		 '</tr>',''].join('\n'));
	
	/**
	 * Formats a menu row, hides storage
	 * {{id}} - energy, rocketFuel
	 * {{name}} - Energy, Rocket Fuel
	 * {{category}} - category of this item - earth, inner
	 * Merges into solarTab_nav
	 */
	var TemplateResourceMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{id}}_ne" href="#'+this.page+'Tab_{{id}}_nec" class="'+this.page+'Tab_{{category}}_collapse hidden aria-controls="'+this.page+'Tab_{{id}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;"><img src="Icons/{{id}}Icon.png" style="width:30px; height:auto"></td>',
		   '<td style="vertical-align:middle;" colspan="1"><span>{{name}}</span></td>',
		   '<td style="vertical-align:middle; text-align:center;"><span><span id="'+this.page+'_{{id}}ps_display">0</span>/Sec</span></td>',
		   '<td style="vertical-align:middle; text-align:right;"><span id="'+this.page+'_{{id}}_current">0</span><span id="'+this.page+'_{{id}}StorageBox" class="{{Storagehidden}}">/<span id="'+this.page+'_{{id}}Storage">0</span></span></td>',
		 '</tr>',''].join('\n'));

	/**
	 * Formats a menu row of an item that has no ps or storage
	 * {{id}} - moon, rocket
	 * {{name}} - The Moon, Space Rocket
	 * Merges into solarTab_nav
	 */
	var TemplateNonResourceMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{id}}_ne" href="#'+this.page+'Tab_{{id}}_nec" class="'+this.page+'Tab_{{category}}_collapse hidden" aria-controls="'+this.page+'Tab_{{id}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;"><img src="Icons/{{id}}Icon.png" style="width:30px; height:auto"></td>',
		   '<td style="vertical-align:middle;" colspan="3"><span>{{name}}</span></td>',
		 '</tr>',''].join('\n'));

	////////////////////////////
	// Content Pane Templates //
	////////////////////////////

	/**
	 * Creates the table for the content pane
	 * {{id}} - helium, moon
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneHeader = Handlebars.compile(
		['<div id="'+this.page+'Tab_{{id}}_nec" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
		   '<div class="container" style="max-width:800px;">',
		     '<table class="table">',
		       '<tbody id="'+this.page+'Tab_{{id}}_netc">',
		       // Content comes here
		       '</tbody>',
		     '</table>',
		   '</div>',
		 '</div>',''].join('\n'));

	/**
	 * Creates a row on the content pane with the info and sometimes a gain button
	 * {{id}} - helium, moon
	 * {{title}} - Helium, The Moon
	 * {{desc}} - A short text
	 * {{storUpgrades}} - contains the storage upgrade costs.
	 * Merges onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneTitle = Handlebars.compile(
		['<tr>',
		   '<td colspan="2" style="border:none;">',
		   '<h2 class="default btn-link">{{title}}</h2>',
		   '<span>{{{desc}}}</span>',
		     '<br>',
		     '<br>',
		     '{{#if manualgain}}',
		     '<div class="gainButton hidden">',
		       '<button type="button" id="'+this.page+'_{{id}}_Gain" class="btn btn-default" value="Gain {{gainNum}}"></button>',
		       '<br>',
		       '<br>',
		     '</div>',
		     '{{/if}}',
		   '</td>',
		 '</tr>',
		 '{{#if storUpgrades}}',
		 '<tr class="storageUpgrade hidden">',
		   '<td>',
		     '<h3 class="default btn-link">Storage Upgrade</h3>',
		     '<span>',
		       'Upgrade your {{name}} storage size to <span id="{{id}}NextStorage">100</span>.',
		       '<br>',
		     'Time remaining until <select id="{{id}}SelectStorage_Limit"><option value="10">10%</option><option value="20">20%</option><option value="25">25%</option><option value="30">30%</option><option value="40">40%</option><option value="50">50%</option><option value="60">60%</option><option value="70">70%</option><option value="75">75%</option><option value="80">80%</option><option value="90">90%</option><option value="100" selected="selected">full</option></select>:',
 			 'storage: <b><span id="{{id}}SelectStorage_Time>N/A</span></b>',
 			 '<br>',
		     '<span id="'+this.page+'_{{id}}StorageUpgrade_Cost"></span>',
		     '<br>',
		     '<button id="'+this.page+'_{{id}}StorageUpgrade" class="btn btn-default">Upgrade Storage</button>',
		   '</td>',
		 '</tr>',
		 '{{/if}}',''].join('\n'));



	/**
	 * Adds a storBuilding or building to the content pane
	 * {{htmlId}} - sto_plasmaT1, resbld_rocketFuelT3
	 * {{unlocked}} - true / false
	 * {{name}} - full name of the building
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneBuilding = Handlebars.compile(
		['<tr id="'+this.page+'{{htmlId}}" {{#if unlocked}}class=""{{else}}class="hidden"{{/if}}>',
		   '<td>',
		     '<h3 class="default btn-link">{{name}}: <span id="'+this.page+'{{htmlId}}_Count">0</span></h3>',
		     '<span>',
		       '{{desc}}',
		       '<br>',
		       '<p id="'+this.page+'{{htmlId}}_Cost"></p>',
		     '</span>',
			 '<button type="button" id="'+this.page+'{{htmlId}}_buy_1" class="btn btn-default">Get 1</button>',
			 '<span class="multiBuy hidden">',
			   '<button type="button" id="'+this.page+'{{htmlId}}_buy_10" class="btn btn-default">Get 10</button>',
			   '<button type="button" id="'+this.page+'{{htmlId}}_buy_100" class="btn btn-default">Get 100</button>',
			   '<button type="button" id="'+this.page+'{{htmlId}}_buy_10000" class="btn btn-default">Get Max</button>',
			 '</span>',
			 '<div style="height:5px"></div>',
			 '<span id="'+this.page+'{{htmlId}}_destroy" class="hidden">',
			   '<button type="button" id="'+this.page+'{{htmlId}}_destroy_1" class="btn btn-default destroy">Destroy 1</button>',
			   '<span class="multiBuy hidden">',
			     '<button type="button" id="'+this.page+'{{htmlId}}_destroy_10" class="btn btn-default destroy">Destroy 10</button>',
			     '<button type="button" id="'+this.page+'{{htmlId}}_destroy_100" class="btn btn-default destroy">Destroy 100</button>',
			     '<button type="button" id="'+this.page+'{{htmlId}}_destroy_10000" class="btn btn-default destroy">Nuke All</button>',
			   '</span>',
			 '</span>',
		   '</td>',
		 '</tr>',''].join('\n'));

	/**
	 * Adds a non-building to the content pane
	 * {{name}} - Full name of the item
	 * {{desc}} - Description of the item
	 * {{htmlId}} - solar_moon
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneNonMachine = Handlebars.compile(
		['<tr id="'+this.page+'{{htmlId}}" {{#if unlocked}}class=""{{else}}class="hidden"{{/if}}>',
		   '<td>',
		     '<h3 id="'+this.page+'_{{htmlIdTitle}}" class="default btn-link">{{name}}: <span id="{{htmlId}}_Count">0</span></h3>',
		     '<span>',
		       '{{desc}}',
		       '<br>',
		       '<p id="'+this.page+'_{{htmlIdCost}}"></p>',
		     '</span>',
			 '<button type="button" id="'+this.page+'_{{htmlIdButton}}" class="btn btn-default">{{buttonText}}</button>',
		   '</td>',
		 '</tr>',''].join('\n'));


	////////////////////////////
	// Page content functions //
	////////////////////////////

	/**
	 * Collects all the building information under a resource and creates the html
	 * @param  {Object} buildingData Resource object containing the building info
	 * @param  {string} prefix       sto_ or resbld_
	 * @return {string}              generated html containing all buildings producing a resource.
	 */
	var buildMachineCost = function(buildingData) {
		var html = ""
		Object.keys(buildingData).forEach(function(build) {
			var data = buildingData[build];
			html += TemplatePaneBuilding(data);
			// ID of the span displaying the count
			buildingData[build].htmlIdCount = buildingData[build].htmlId+'_Count';
			// ID of the div displaying the cost
			buildingData[build].htmlIdCost = buildingData[build].htmlId+'_Cost';
			// ID of the div displaying the destroy button(s)
 			buildingData[build].htmlIdDestroy = buildingData[build].htmlId+'_Destroy';
		}); return html;
	}

	/**
	 * Collects all the building information under a resource and creates the html
	 * @param  {Object} buildingData Resource object containing the building info
	 * @param  {string} prefix       sto_ or resbld_
	 * @return {string}              generated html containing all buildings producing a resource.
	 */
	var buildNonMachineCost = function(buildingData) {
		var html = ""
		Object.keys(buildingData).forEach(function(build) {
			var data = buildingData[build];
			html += TemplatePaneNonMachine(buildingData[build]);
		}); return html;
	}

	/**
	 * Creates the content pane of a page
	 * @param  {Object} data Resource object containing building data
	 */
	var createPane = function(data, navigation, menuHeader, menuItem) {
		// Attach the content pane table
		Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_content', TemplatePaneHeader(data));
		var pane = 'Tab_'+data.id+'_nec';
		Templates.uiFunctions.registerPane(navigation, menuHeader, menuItem, pane);
		// Is the item a resource?
		// Attach the title of the pane to the header
		Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.id+'_netc', TemplatePaneTitle(data));
		if (data.id in Game.resources.entries) {
			// 	-> List storBuildings?
			if ('storBuildings' in data) {
				// Attach the storage buildings to the title
				Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.id+'_netc', buildMachineCost(data.storBuildings));
			}
			// 	-> List machines?
			if ('items' in data) {
				// Attach the buildings to the title
				Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.id+'_netc', buildMachineCost(data.items));
			}
			// ID of the button containing gainNum
			data.htmlIdGainButton = data.htmlId+'_'+data.id+'_Gain';
			// ID of the div displaying the size of the upcoming storage
			data.htmlIdNextStorage = data.htmlId+'NextStorage';
			// ID of the select to calculate the storage limit timer against
			data.htmlIdStorageLimit = data.htmlId+'SelectStorage_Limit';
			// ID of the span displaying the time until the selected level is reached
			data.htmlIdStorageTime = data.htmlId+'SelectStorage_Time';
			// ID of the span displaying the storage cost: Costs <span id="oilStorageCost">5.033B</span> Oil, <span id="oilStorageMetalCost">2.013B</span> Metal
			data.htmlIdStorageCost = data.htmlId+'_{{id}}StorageUpgrade_Cost';
		// The item is something else.
		} else {
			var parse = data;
			// Does this object contain 'items'?
			if ('items' in data) {parse = data.items}
			console.log(data.items);
			Templates.uiFunctions.attachHTML(cPage, cPage+'Tab_'+data.id+'_netc', buildNonMachineCost(parse))
		}
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
	var createPage = function(data, navigation) {
		// Get the categories and their order
		var categories = Object.keys(data).sort(function(a, b) {return data[a].order > data[b].order})
		// Loop through the catagories
		var menuHtml = "";
		categories.forEach(function(cat) {
			// Append this row to the menu
			menuHtml += TemplateMenuHeader(data[cat]);
			var menuHeader = cPage+'Tab_'+data[cat].category+'_collapse';
			Templates.uiFunctions.registerMenuHeader(navigation, menuHeader);
			// Store the general htmlId in this object
			data[cat].htmlId = "Tab_"+data[cat].category+"_collapse"
			// Get the items and their order
			var subitems = Object.keys(data[cat].items).sort(function(a, b) {
				return data[cat].items[a].order > data[cat].items[b].order
			})
			// Loop through the items
			subitems.forEach(function(subitem) {
				// Is this item a resource?  Add the applicable template to the menu
				if (data[cat].items[subitem].id in Game.resources.entries &&
				    data[cat].items[subitem].baseCapacity) {
					menuHtml += TemplateResourceMenuItem(data[cat].items[subitem]);
				} else {
					menuHtml += TemplateNonResourceMenuItem(data[cat].items[subitem]);
				}
				var menuItem = cPage+'Tab_'+data[cat].items[subitem].id+'_ne';
				Templates.uiFunctions.registerMenuItem(navigation, menuHeader, menuItem);
				// Store the general htmlId in this object
				data[cat].items[subitem].htmlId = "Tab_"+data[cat].items[subitem].id+"_ne";
				// Dispatch this item to the function creating the pane
				createPane(data[cat].items[subitem], navigation, menuHeader, menuItem);
			})
		})
		// return an array of menuHtml & pageHtml to initialise
		return menuHtml;
	}

	///////////////////////////
	// General use functions //
	///////////////////////////

	/**
	 * Composes the page and adds it to the game
	 */
	this.initialise = function() {
		console.log("initialising: "+this.page)
		// Link this page to the main menu
		Templates.uiFunctions.attachHTML(this.page, 'tabList', TemplateTopMenuNav());
		Templates.uiFunctions.registerNavigation(cPage+'Nav');
		// Link the page table to tabContent
		Templates.uiFunctions.attachHTML(this.page, 'tabContent', TemplateBuildPage());
		// Link the menu to '+this.page+'Tab_pane
		Templates.uiFunctions.attachHTML(this.page, this.page+'Tab_nav', createPage(this.data, this.page+'Tab_nav'));
		// The content panes are linked through createPage -> createPane
	};
};
