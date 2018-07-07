'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
Templates.machinesUI = function(cPage, cCategory, cTitle, cObj) {

	// machinesUI('machines', '', 'Machines', Game.pages.machines);

	this.page = cPage;
	this.category = cCategory;
	this.title = cTitle;
	this.data = cObj;

	var storageIDs = [];

	/**
	 * Creates the link to the page of the top menu
	 * Attaches to tabList
	 */
	var TemplateTopMenuNav = Handlebars.compile(
        ['<li role="presentation" id="'+this.page+'Tab" class="">',
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
	 * Formats a menu row of an item that has no ps or storage
	 * {{item}} - moon, rocket
	 * {{name}} - The Moon, Space Rocket
	 * {{itemHidden}} - hidden or null - sets the default hide class
	 * Merges into solarTab_nav
	 */
	var TemplateEmptyMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{item}}_ne" href="#'+this.page+'Tab_{{item}}_nec" class="collapse_'+this.page+'Tab_{{item}} {{itemHidden}}" aria-controls="'+this.page+'Tab_{{item}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;">',
		     '<img src="Icons/{{item}}Icon.png" style="width:30px; height:auto">',
		   '</td>',
		   '<td style="vertical-align:middle;" colspan="3">',
		     '<span>{{name}}</span>',
		   '</td>',
		 '</tr>',''].join('\n'));


	////////////////////////////
	// Content Pane Templates //
	////////////////////////////

	/**
	 * Creates the table for the content pane
	 * {{item}} - energy, earth
	 * Attaches onto this.page+'Tab_{{item}}_netc (machinesTab_energy_netc)
	 */
	var TemplatePaneHeader = Handlebars.compile(
		['<div id="'+this.page+'Tab_{{item}}_nec" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
		   '<div class="container" style="max-width:800px;">',
		     '<table class="table">',
		       '<tbody id="'+this.page+'Tab_{{item}}_netc">',
		       // Content comes here
		       '</tbody>',
		     '</table>',
		   '</div>',
		 '</div>',''].join('\n'));

	/**
	 * Creates a row on the content pane with the category heading
	 * {{item}} - energy, earth
	 * {{title}} - Energy Machines, Earth Machines
	 * Merges onto this.page+'Tab_{{item}}_netc (machinesTab_energy_netc)
	 */
	var TemplatePaneTitle = Handlebars.compile(
		['<tr>',
		   '<td colspan="5" style="border:none;">',
		     '<h2 class="default btn-link">{{name}}</h2>',
		   '</td>',
		   '<td colspan="1" style="border:none;">',
		     '<h2 class="default btn-link">Input/sec</h2>',
		   '</td>',
		   '<td colspan="1" style="border:none;">',
		     '<h2 class="default btn-link">Output/sec</h2>',
		   '</td>',
		 '</tr>',
		 ''].join('\n'));

	/**
	 * Creates a row on the content pane with the info and sometimes a gain button
	 * {{item}} - helium, moon
	 * {{title}} - Helium, The Moon
	 * {{description}} - A short text
	 * {{manualgain}} - true/false - Doesn't create the gainButton if false.
	 * Attaches onto this.page+'Tab_{{item}}_netc (machinesTab_energy_netc)
	 */
	var TemplateTableResource = Handlebars.compile(
		['<tr>',
			'<td colspan="2"></td>',
			'<td colspan="3">',
				'<h4 class="default btn-link">{{title}}</h4>',
			'</td>',
			'<td colspan="2"></td>',
			'<td colspan="2">',
				'<h5 class="default btn-link">',
					'Produced: <span id="{{item}}Prod">0</span>/sec',
				'</h5>',
			'</td>',
			'<td colspan="2">',
				'<h5 class="default btn-link">',
					'Used: <span id="{{item}}Use">0</span>/sec',
				'</h5>',
			'</td>',
		'</tr>',
		 ''].join('\n'));

	/**
	 * Creates a row on the content pane with the info and sometimes a gain button
	 * {{item}} - helium, moon
	 * {{title}} - Helium, The Moon
	 * {{description}} - A short text
	 * {{manualgain}} - true/false - Doesn't create the gainButton if false.
	 * Attaches onto this.page+'Tab_{{item}}_netc (machinesTab_energy_netc)
	 */
	var TemplateResourceBuilding = Handlebars.compile(
		['<tr>',
		   '<td colspan="5" style="border:none;">',
		     '<h2 class="default btn-link">{{name}}</h2>',
		   '</td>',
		   '<td colspan="1" style="border:none;">',
		     '<h2 class="default btn-link">Input/sec</h2>',
		   '</td>',
		   '<td colspan="1" style="border:none;">',
		     '<h2 class="default btn-link">Output/sec</h2>',
		   '</td>',
		 '</tr>',
		 ''].join('\n'));

	/**
	 * Creates the content pane of a page
	 * @param  {Object} data Resource object containing building data
	 */
	var createPane = function(data) {
		console.log(data);
		var t    = {};
		t.title   = data.title;
		if(t.title.indexOf(' Resources') != -1){
			t.title = t.title.substring(0, t.title.indexOf(' Resources'));
		}
		t.title += " Machines"
		// Attach the content pane table
		attachHTML(cPage+'Tab_content', TemplatePaneHeader(t));
		// Attach Table of Resources and Buildings in Category
		var items = Object.keys(data.items).sort(function(a, b) {return data.items[a].order > data.items[b].order});
		items.forEach(function(item){
			console.error(item)
			attachHTML(cPage+'Tab_'+t.item+'_netc', TemplateTableResource(t));
			var buildings = Object.keys(Game.resources.entries[item].items);
			buildings.forEach(function(building){
				console.error(building)
				attachHTML(cPage+'Tab_'+t.item+'_netc', TemplateResourceBuilding(t));
			});
		});
		
		return "";
	};

	/**
	 * Creates the entire page
	 * -> Creates the menu headers by looping through the categories
	 *   -> Creates the menu items by looping through the items under each category
	 *     -> Dispatches each item to 'createPane' which creates and links the pane content.
	 * @param  	{Object} data 			Object of the data belonging on the page
	 * @param 	{string} subcategory 	A string representing the name of the subcategory.
	 * @return 	{string}      			Returns a string containing all menu rows
	 */
	var createPage = function(data, subcategory) {
		// Get the categories and their order
		var categories = Object.keys(data).sort(function(a, b) {return data[a].order > data[b].order});
		// Loop through the categories
		var menuHtml = "";
		categories.forEach(function(cat) {
			var cStorage = null;
			var cItem = data[cat].category;
			var cName = data[cat].title;
			var cItemHidden = ''; // Solar is only hidden by the topNav
			menuHtml += TemplateEmptyMenuItem({'item': cat, 'name': cName})
			// Get the items and their order
			var subitems = Object.keys(data[cat][subcategory]).sort(function(a, b) {
				return data[cat].items[a].order > data[cat].items[b].order}
			)
			createPane(data[cat]);
			// Loop through the items
			// subitems.forEach(function(subitem) {
			// 	console.log(subitem)
			// 	cStorage = null;
			// 	cItem = data[cat][subcategory][subitem].id;
			// 	cName = data[cat][subcategory][subitem].name;
			// 	// Does this item have a storage component?
			// 	if (!(cName+'StorageUpgrade' in data[cat][subcategory][subitem])) {cStorage = "hidden";}
			// 	// Is this item a resource?  Add the applicable template to the menu
			// 	if (cItem in Game.resources.entries && data[cat][subcategory][subitem].baseCapacity) {
			// 		//menuHtml += TemplateResourceMenuItem({'item': cItem, 'name': cName, 'Storagehidden': cStorage, 'itemHidden': cItemHidden});
			// 	} else {
			// 		//menuHtml += TemplateNonResourceMenuItem({'item': cItem, 'name': cName, 'itemHidden': cItemHidden});
			// 	}
			// 	// Dispatch this item to the function creating the pane
				
			// })
		})
		// return an array of menuHtml & pageHtml to initialise
		return menuHtml;
	};

	/**
	 * Attaches HTML strings to an element
	 * @param  {string} tag  A string representing the parent ID of the HTML
	 * @param  {string} HTML The HTML code that needs to be added under ID
	 * @return {boolean}     True on success
	 */
	var attachHTML = function(tag, HTML) {
		var node = document.getElementById(tag)
		if (!node) {
			console.log(cTitle+" - Could not add this tab to the main menu: "+tag);
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
		attachHTML(this.page+'Tab_nav', createPage(this.data, 'items'));
		// The content panes are linked through createPage -> createPane

	};
};