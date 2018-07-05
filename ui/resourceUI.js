'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
Templates.resourcesUI = function(cPage, cTitle, cObj) {

	// solarUI('solar', 'solarSystem', 'Solar System BETA', Game.pages.solar)

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
        ['<li role="presentation" id="'+this.page+'Tab" class="">',
           '<a href="#'+this.page+'Tab_pane" id="'+this.page+'Tab_link" class="-" aria-controls="'+this.page+'" role="tab" data-toggle="tab">',
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
	 * {{item}} - category: energy, rocketFuel
	 * {{itemHidden}} - hidden or null - sets the default hide class
	 * Merges into solarTab_nav
	 */
	var TemplateMenuHeader = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{item}}_collapse" class="{{itemHidden}}">',
		   '<td colspan="4" style="border:{{border}};">',
		     '<span>{{name}}</span> <span class="caret">',
			 '</span>',
		   '</td>',
		 '</tr>',''].join('\n'));
	
	/**
	 * Formats a menu row, hides storage
	 * {{item}} - energy, rocketFuel
	 * {{name}} - Energy, Rocket Fuel
	 * {{category}} - category of this item - earth, inner
	 * {{itemHidden}} - hidden or null - sets the default hide class
	 * {{Storagehidden}} - hidden or null
	 * Merges into solarTab_nav
	 */
	var TemplateResourceMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{item}}_ne" href="#'+this.page+'Tab_{{item}}_nec" class="'+this.page+'Tab_{{category}}_collapse {{itemHidden}}" aria-controls="'+this.page+'Tab_{{item}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
		   '<td style="vertical-align:middle;">',
		     '<img src="Icons/{{item}}Icon.png" style="width:30px; height:auto">',
		   '</td>',
		   '<td style="vertical-align:middle;" colspan="1">',
		     '<span>{{name}}</span>',
		   '</td>',
		   '<td style="vertical-align:middle; text-align:center;">',
			 '<span><span id="{{item}}ps_display">0</span>/Sec</span>',
		   '</td>',
		   '<td style="vertical-align:middle; text-align:right;">',
			 '<span id="{{item}}_current">0</span><span id="{{item}}StorageBox" class="{{Storagehidden}}">/<span id="{{item}}Storage">0</span></span>',
		   '</td>',
		 '</tr>',''].join('\n'));

	/**
	 * Formats a menu row of an item that has no ps or storage
	 * {{item}} - moon, rocket
	 * {{name}} - The Moon, Space Rocket
	 * {{itemHidden}} - hidden or null - sets the default hide class
	 * Merges into solarTab_nav
	 */
	var TemplateNonResourceMenuItem = Handlebars.compile(
		['<tr id="'+this.page+'Tab_{{item}}_ne" href="#'+this.page+'Tab_{{item}}_nec" class="'+this.page+'Tab_{{category}}_collapse {{itemHidden}}" aria-controls="'+this.page+'Tab_{{item}}_nec" role="tab" data-toggle="tab" style="height: 60px;" aria-expanded="true">',
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
	 * {{item}} - helium, moon
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
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
	 * Creates a row on the content pane with the info and sometimes a gain button
	 * {{item}} - helium, moon
	 * {{title}} - Helium, The Moon
	 * {{description}} - A short text
	 * {{gainButton}} - true/false - Doesn't create the gainButton if false.
	 * Merges onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneTitle = Handlebars.compile(
		['<tr>',
		   '<td colspan="2" style="border:none;">',
		   '<h2 class="default btn-link">{{name}}</h2>',
		   '<span>{{{desc}}}</span>',
		     '<br>',
		     '<br>',
		     '{{#if gainButton}}',
		     '<hide class="gainButton">',
		       '<button type="button" id="res_{{item}}_Gain" class="btn btn-default">Gain <span id="{{item}}ManualGain">1</span></button>',
		       '<br>',
		       '<br>',
		     '</hide>',
		     '{{/if}}',
		   '</td>',
		 '</tr>',
		 '{{#if storageButton}}',
		 '<tr id="store_{{item}}StorageUpgrade" class="{{displayStorageButton}}">',
		   '<td>',
		     '<h3 class="default btn-link">Storage Upgrade</h3>',
		     '<span>Upgrade your {{name}} storage size to <span id="{{item}}NextStorage"></span>.',
		     '<br>',
		     'Time remaining until <span id="{{item}}LimitType"></span> storage: <b><span id="{{item}}LimitTime"></span></b>',
		     '<br>',
		     'Cost {{{cost}}}.',
		     '<br>',
		     '<br>',
		     '<button id="{{item}}StorageUpgrade" class="btn btn-default">Upgrade Storage</button>',
		   '</td>',
		 '</tr>',
		 '{{/if}}',''].join('\n'));

	/**
	 * Adds a storBuilding or building to the content pane
	 * {{machineId}} - sto_plasmaT1, resbld_rocketFuelT3
	 * {{hidden}} - Default value of this machine being hidden
	 * {{name}} - full name of the building
	 * Attaches onto this.page+'Tab_{{item}}_netc (resourceTab_energy_netc)
	 */
	var TemplatePaneBuilding = Handlebars.compile(
		['<tr id="{{machineId}}" class="{{hidden}}">',
		   '<td>',
		     '<h3 class="default btn-link">{{name}}: <span id="{{machineId}}_Count">0</span></h3>',
		     '<span>',
		       '{{desc}}',
		       '<br>',
		       '<p id="{{machineId}}_cost"></p>',
		     '</span>',
			 '<button type="button" id="{{machineId}}_buy_1" class="btn btn-default">Get 1</button>',
			 '<hide class="multiBuy hidden">',
			   '<button type="button" id="{{machineId}}_buy_10" class="btn btn-default">Get 10</button>',
			   '<button type="button" id="{{machineId}}_buy_100" class="btn btn-default">Get 100</button>',
			   '<button type="button" id="{{machineId}}_buy_10000" class="btn btn-default">Get Max</button>',
			 '</hide>',
			 '<div style="height:5px"></div>',
			 '<hide id="{{machineId}}_destroy" class="hidden">',
			   '<button type="button" id="{{machineId}}_destroy_1" class="btn btn-default destroy">Destroy 1</button>',
			   '<hide class="multiBuy hidden">',
			     '<button type="button" id="{{machineId}}_destroy_10" class="btn btn-default destroy">Destroy 10</button>',
			     '<button type="button" id="{{machineId}}_destroy_100" class="btn btn-default destroy">Destroy 100</button>',
			     '<button type="button" id="{{machineId}}_destroy_10000" class="btn btn-default destroy">Nuke All</button>',
			   '</hide>',
			 '</hide>',
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
		['<tr>',
		   '<td style="border:none;">',
		     '<h2 class="default btn-link">{{name}}</h2>',
		     '<span>{{desc}}</span>',
		     '<br>',
		     '<br>',
		   '</td>',
		 '</tr>',
		 '<tr id="{{htmlId}}" class="">',
		   '<td>',
		     '<h3 class="default btn-link">Exploration</h3>',
		     '<span>',
		       'Exploring texts need to be added in solarData.js',
		       '<br>',
		       'Costs <span id="{{htmlId}}_rocketFuelCost">Not added in solarData.js yet</span> rocket fuel.',
		     '</span>',
		     '<br>',
		     '<br>',
		     '<button id="{{htmlId}}_buy" class="btn btn-default">Explore</button>',
		     '<br>',
		     '<br>',
		   '</td>',
		 '</tr>',''].join('\n'));


	////////////////////////////
	// Page content functions //
	////////////////////////////

	/**
	 * Builds the string describing the cost of increasing storage
	 * @param  {Object} storageData Resource object containing the storage info
	 * @return {string}             the joined string describing the cost
	 */
	var buildStorageCost = function(storageData) {
		// Create the cost list
		// <span id="heliumStorageCost"></span> Helium, 
		// <span id="heliumStorageLunariteCost"></span> Lunarite.
		var cost = storageData.cost;
		var text = [];
		Object.keys(cost).forEach(function(mat) {
			if (mat == storageData.resource) {
				mat = Game.resources.entries[mat].name;
				text.push('<span id="'+storageData.resource+'StorageCost"></span> '+mat);
			} else {
				mat = Game.resources.entries[mat].name;
				text.push('<span id="'+storageData.resource+'Storage'+mat+'Cost"></span> '+mat);
			}
		})
		return text.join(', ');
	}

	/**
	 * Collects all the building information under a resource and creates the html
	 * @param  {Object} buildingData Resource object containing the building info
	 * @param  {string} prefix       sto_ or resbld_
	 * @return {string}              generated html containing all buildings producing a resource.
	 */
	var buildMachineCost = function(buildingData, prefix) {
		var html = ""
		Object.keys(buildingData).forEach(function(build) {
			var obj = buildingData[build];
			var t  = {};
			t.name = obj.name;
			t.desc = obj.desc;
			t.id   = obj.resource;
			t.hidden = null;
			t.machineId = prefix+build;
			if (obj.unlocked) {t.hidden = 'hidden';}
			html += TemplatePaneBuilding(t);
		})
		return html;
	}

	/**
	 * Creates the content pane of a page
	 * @param  {Object} data Resource object containing building data
	 */
	var createPane = function(data) {
		var t    = {};
		t.item   = data.id;
		t.name   = data.name;
		t.desc   = data.desc;
		t.htmlId = data.htmlId;
		// Attach the content pane table
		attachHTML(cPage+'Tab_content', TemplatePaneHeader(t));
		// Is the item a resource?
		if (t.item in Game.resources.entries) {
			// 	-> List gain button?
			t.gainButton = data.manualgain;
			// 	-> List storage buy?
			t.storageButton = data.baseCapacity;
			// Create the storage cost line
			t.cost = ""
			if (t.storageButton > 0 && (t.item+'StorageUpgrade' in data)) {
				t.displayStorageButton = 'hidden';
				if (data[t.item+'StorageUpgrade'].unlocked) {t.displayStorageButton = null}
				t.cost = buildStorageCost(data[t.item+'StorageUpgrade']);
			}
			// Attach the title of the pane to the header
			attachHTML(cPage+'Tab_'+t.item+'_netc', TemplatePaneTitle(t));
			// 	-> List storBuildings?
			t.storageBuildings = ('storBuildings' in data)
			if (t.storageBuildings) {
				// Attach the storage buildings to the title
				attachHTML(cPage+'Tab_'+t.item+'_netc', buildMachineCost(data.storBuildings, 'sto_'));
			}
			// 	-> List machines
			if ('items' in data) {
				// Attach the buildings to the title
				attachHTML(cPage+'Tab_'+t.item+'_netc', buildMachineCost(data.items, 'resbld_'));
			}
		// The item is something else.  Do we need a buy button?
		} else {
			attachHTML(cPage+'Tab_'+t.item+'_netc', TemplatePaneNonMachine(t))
		}
		return "";
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
	var createPage = function(data, subcategory) {
		// Get the categories and their order
		var categories = Object.keys(data).sort(function(a, b) {return data[a].order > data[b].order})
		// Loop through the catagories
		var menuHtml = "";
		categories.forEach(function(cat) {
	
			var cStorage = null;
			var cItem = data[cat].category;
			var cCat = cItem;
			var cName = data[cat].title;
			var cItemHidden = 'hidden'; // Default to hiding everything
			if (data[cat].unlocked) {cItemHidden = null}
			var cBorder = '';
			// Append this row to the menu
			menuHtml += TemplateMenuHeader({'item': cItem, 'name': cName, 'itemHidden': cItemHidden, 'border': cBorder,});
			// Get the items and their order

			var subitems = Object.keys(data[cat][subcategory]).sort(function(a, b) {
				return data[cat].items[a].order > data[cat].items[b].order
			})
			// Loop through the items
			subitems.forEach(function(subitem) {
				cStorage = null;
				cItem = data[cat][subcategory][subitem].id;
				cName = data[cat][subcategory][subitem].name;
				cItemHidden = 'hidden';
				if (data[cat][subcategory][subitem].unlocked) {cItemHidden = null}
				// Does this item have a storage component?
				if (!(cItem+'StorageUpgrade' in data[cat][subcategory][subitem])) {cStorage = "hidden";}
				// Is this item a resource?  Add the applicable template to the menu
				if (cItem in Game.resources.entries && data[cat][subcategory][subitem].baseCapacity) {
					menuHtml += TemplateResourceMenuItem({'item': cItem, 'name': cName, 'Storagehidden': cStorage, 'itemHidden': cItemHidden, 'category': cCat});
				} else {
					menuHtml += TemplateNonResourceMenuItem({'item': cItem, 'name': cName, 'itemHidden': cItemHidden, 'category': cCat});
				}
				// Dispatch this item to the function creating the pane
				createPane(data[cat][subcategory][subitem]);
			})
		})
		// return an array of menuHtml & pageHtml to initialise
		return menuHtml;
	}


	///////////////////////////
	// General use functions //
	///////////////////////////
// 
	// registers an event
	var registerEvents = function() {
		// Loop through all the ids of the menu and register its events
		var parentNode = document.getElementById(cPage+'Tab_pane');
		var nodes = parentNode.querySelectorAll('[id]');
		var match = [];
		var unmatched = [];
		var funct = "";
		var node = "";

	    function getCase(text, key) {
	        return text.match(new RegExp(key)) || {};
	    }

	    nodes.forEach((node) => {
	        match = [];
	        var id = node.id;
	        switch (id) {


		        //////////////////
	        	// Click events //
		        //////////////////

	        	// Match res_*_Gain
	            case (match = getCase(id, "^res_(.*)_Gain$")).input:
					funct = new Function("addManualResource('"+match[1]+"')");
					Game.addEventListener(node, "click", funct);
					break;
	        	// Match resbld_ITEM_buy_AMOUNT
	            case (match = getCase(id, "^resbld_(.*)_buy_(.*)$")).input:
					funct = new Function("Game.buildings.buyBuildings('"+match[1]+"', "+parseInt(match[2])+")");
					Game.addEventListener(node, "click", funct);
					break;
				// Match resbld_ITEM_destroy_AMOUNT
	            case (match = getCase(id, "^resbld_(.*)_destroy_(.*)$")).input:
					funct = new Function("Game.buildings.destroyBuildings('"+match[1]+"', "+parseInt(match[2])+")");
					Game.addEventListener(node, "click", funct);
	                break;
	        	// Match sto_ITEM_buy_AMOUNT
	            case (match = getCase(id, "^sto_(.*)_buy_(.*)$")).input:
					funct = new Function("Game.buildings.buyBuildings('"+match[1]+"', "+parseInt(match[2])+")");
					Game.addEventListener(node, "click", funct);
					break;
				// Match sto_ITEM_destroy_AMOUNT
	            case (match = getCase(id, "^sto_(.*)_destroy_(.*)$")).input:
					funct = new Function("Game.buildings.destroyBuildings('"+match[1]+"', "+parseInt(match[2])+")");
					Game.addEventListener(node, "click", funct);
	                break;
	            // Match ITEMStorageUpgrade
	            case (match = getCase(id, "^(.*)StorageUpgrade$")).input:
					funct = new Function("Game.resources.upgradeStorage('"+match[1]+"')");
					Game.addEventListener(node, "click", funct);
					break;
	            // Match solar_PLANET_buy
	            case (match = getCase(id, "^solar_(.*)_buy$")).input:
					funct = new Function("Game.buildings.explore('"+match[1]+"')");
					Game.addEventListener(node, "click", funct);
					break;
				// Match the menu headers - #resourcesTab_energy_collapse
	            case (match = getCase(id, "^(.*)Tab_(.*)_collapse$")).input:
					funct = new Function("Templates.uiFunctions.toggle('"+id+"')");
					Game.addEventListener(node, "click", funct);
	                break;
				// Match the menu headers - #resourcesTab_energy_collapse
	            case (match = getCase(id, "^resourcesTab_(.*)_ne$")).input:
					funct = new Function("Templates.uiFunctions.clickItem('"+id+"')");
					Game.addEventListener(node, "click", funct);
	                break;


	            //////////////////
	            // bindElements //
	            //////////////////

				// Match the resbld_BUILDING_Count element and bind it
	            case (match = getCase(id, "^resbld_(.*)_Count$")).input:

	            	Game.ui.bindElement(id, new Function('return Game.settings.format(Game.buildings.entries.'+match[1]+'.current);'));
	                break;
				// Match the sto_BUILDING_Count element and bind it
	            case (match = getCase(id, "^sto_(.*)_Count$")).input:
					Game.ui.bindElement(id, new Function('return Game.settings.format(Game.buildings.storageEntries.'+match[1]+'.current);'));
	                break;
				// Match the MATERIALps_display element and bind it
	            case (match = getCase(id, "^(.*)ps_display$")).input:
					Game.ui.bindElement(id, new Function('return Game.resources.getDisplayProduction("'+match[1]+'");'));
	                break;
				// Match the MATERIAL_current element and bind it
	            case (match = getCase(id, "^(.*)_current$")).input:
					Game.ui.bindElement(id, new Function('return Game.resources.getDisplayResource("'+match[1]+'");'));
	                break;
				// Match metalStorage
	            case (match = getCase(id, "^(.*)Storage$")).input:
					Game.ui.bindElement(id, new Function('return Game.settings.format(getStorage("'+match[1]+'"));'));
	                break;
				// Match metalNextStorage
	            case (match = getCase(id, "^(.*)NextStorage$")).input:
					Game.ui.bindElement(id, new Function('return Game.settings.format(getStorage("'+match[1]+'")*2);'));
	                break;
	            // Match #resbld_metalT1Count
	            case (match = getCase(id, "^resbld_(.*)Count$")).input:
					Game.ui.bindElement(id, new Function('return Game.buildings.entries.'+match[1]+'.current'));
	                break;


	            ////////////
	            // Unused //
	            ////////////

				// Match *StorageBox
	            case (match = getCase(id, "^(.*)StorageBox$")).input:
	                break;
				// Match *Tab_nav
	            case (match = getCase(id, "^(.*)Tab_nav$")).input:
	                break;
				// Match sto_*_destroy
	            case (match = getCase(id, "^.*_(.*)destroy$")).input:
	                break;
				// Match *Tab_content
	            case (match = getCase(id, "^(.*)Tab_content$")).input:
	                break;
				// Match *Tab_*_nec
	            case (match = getCase(id, "^(.*)Tab_(.*)_nec$")).input:
	                break;
				// Match *Tab_*_netc
	            case (match = getCase(id, "^(.*)Tab_(.*)_netc$")).input:
	                break;
				// Match res_*_Gain
	            case (match = getCase(id, "^res_(.*)_Gain$")).input:
	                break;
				// Match resbld_*_cost
	            case (match = getCase(id, "^resbld_(.*)_cost$")).input:
	                break;
				// Match sto_*_cost
	            case (match = getCase(id, "^sto_(.*)_cost$")).input:
	                break;
				// *LimitType or *LimitTime or *StorageCost or *Storage*Cost or *ManualGain
	            //case (match = getCase(id, "^.*LimitType|.*LimitTime|.*StorageCost|.*Storage.*Cost|.*ManualGain$")).input:
	            //    break;
	            // Catch all remaining sto_ & resbld_ ids.  Comment this one out first when checking for new added ids to handle.
	            //case (match = getCase(id, "^sto_.*|resbld_.*$")).input:
	            //    break;


	        	default:
	        		unmatched.push(id);
	        }
	    });
	    // Match the navigation menu - solarTab
	    node = document.getElementById(cPage+"Tab")
		funct = new Function("Templates.uiFunctions.clickNav('"+cPage+"Tab')");
		Game.addEventListener(node, "click", funct);
		if (unmatched.length > 0) {
			console.log("There are unhandled ids in "+cPage+":")
			console.log(unmatched)
		}
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
			console.log(cTitle+" - Could not add this tag to the game: "+tag);
			return false;
		}
		// Insert the node before the end of tag
		node.insertAdjacentHTML('beforeend', HTML);
		return true;
	}

	/**
	 * Composes the page and adds it to the game
	 */
	this.initialise = function() {
		console.log("initialising: "+cPage)
		// Link this page to the main menu
		attachHTML('tabList', TemplateTopMenuNav());
		// Link the page table to tabContent
		attachHTML('tabContent', TemplateBuildPage());
		// Link the menu to '+this.page+'Tab_pane
		attachHTML(this.page+'Tab_nav', createPage(this.data, 'items'));
		// The content panes are linked through createPage -> createPane
		
		// All done generating the page!
		// Add the event listeners now.
		console.log("registering events for "+cPage)
		registerEvents();
		Game.ui.updateAutoDataBindings();
	};
};
