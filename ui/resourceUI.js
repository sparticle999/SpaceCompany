Game.resourcesUI = (function(){

	var instance = {};

	instance.entries = {};

	instance.machineEntries = {};
	instance.machineObservers = {};

	instance.tabRoot = null;
    instance.navRoot = null;

    instance.tab = null;

	instance.initialise = function() {

		this.tab = Game.ui.createTab({id: 'resources', title: 'Resources BETA', hidden: '', active: "active"});
        this.tab.initialise();

        console.log("test from start");
        console.log("storage");
        console.log("add all techData tabAlerts")
        console.log("saving")
        console.log("combine construct and destroy +/-")
        console.log("multibuy overlord")

        instance.titleTemplate = Handlebars.compile(
            ['<tr><td colspan="2" style="border:none;">',
            '<h2 class="default btn-link">{{name}}</h2>',
            '<span>{{{desc}}}</span>',
            '<br><br>',
            '<hide class="gainButton">',
				'<div onclick="Game.resources.addResource(\'{{id}}\', {{gainNum}})" class="btn btn-default">Gain <span id="plasmaGain">1</span></div>',
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

        instance.energyNavTemplate = Handlebars.compile(
            ['<td style="vertical-align:middle;" colspan="1">',
                '<span>{{name}}</span>',
            '</td>',
            '<td style="border: none; vertical-align:middle; text-align:center;">',
				'<span>',
					'<span id="{{id}}ps">{{perSecond}}</span>/Sec',
				'</span>',
			'</td>',
			'<td style="border:none; vertical-align:middle; text-align:right;">',
				'<span id="{{id}}">',
					'{{current}}',
				'</span>',
				'<span id="{{id}}StorageBox" class="hidden">',
					'/',
					'<span id="{{id}}Storage">{{capacity}}</span>',
				'</span>',
			'</td>'].join('\n'));

        instance.metalStorageUpgradeTemplate = Handlebars.compile(
        	['<tr id="{{id}}StorageUpgrade" class="hidden">',
				'<td>',
					'<h3 class="default btn-link">',
						'Storage Upgrade',
					'</h3>',
					'<span>',
						'Upgrade your {{name}} storage size to <span id="{{id}}NextStorage">100</span>.',
						'<br>',
						'Time remaining until <span id="{{id}}LimitType">full</span> storage: <b><span id="{{id}}LimitTime">N/A</span></b>',
						'<br>',
						'Costs <span id="{{id}}StorageCost">50</span> {{name}}',
					'</span>',
					'<br>',
					'<br>',
					'<button onclick="Game.resources.upgradeStorage(\'{{id}}\')" class="btn btn-default">Upgrade Storage</button>',
				'</td>',
			'</tr>'].join('\n'));

        instance.earthStorageUpgradeTemplate = Handlebars.compile(
        	['<tr id="{{id}}StorageUpgrade" class="hidden">',
				'<td>',
					'<h3 class="default btn-link">',
						'Storage Upgrade',
					'</h3>',
					'<span>',
						'Upgrade your {{name}} storage size to <span id="{{id}}NextStorage">100</span>.',
						'<br>',
						'Time remaining until <span id="{{id}}LimitType">full</span> storage: <b><span id="{{id}}LimitTime">N/A</span></b>',
						'<br>',
						'Costs <span id="{{id}}StorageCost">50</span> {{name}}, <span id="{{id}}StorageMetalCost">20</span> Metal.',
					'</span>',
					'<br>',
					'<br>',
					'<button onclick="Game.resources.upgradeStorage(\'{{id}}\')" class="btn btn-default">Upgrade Storage</button>',
				'</td>',
			'</tr>'].join('\n'));

        instance.spaceStorageUpgradeTemplate = Handlebars.compile(
        	['<tr id="{{id}}StorageUpgrade" class="hidden">',
				'<td>',
					'<h3 class="default btn-link">',
						'Storage Upgrade',
					'</h3>',
					'<span>',
						'Upgrade your {{name}} storage size to <span id="{{id}}NextStorage">100</span>.',
						'<br>',
						'Time remaining until <span id="{{id}}LimitType">full</span> storage: <b><span id="{{id}}LimitTime">N/A</span></b>',
						'<br>',
						'Costs <span id="{{id}}StorageCost">50</span> {{name}}, <span id="{{id}}StorageLunariteCost">400</span> Lunarite.',
					'</span>',
					'<br>',
					'<br>',
					'<button onclick="Game.resources.upgradeStorage(\'{{id}}\')" class="btn btn-default">Upgrade Storage</button>',
				'</td>',
			'</tr>'].join('\n'));

        instance.storageBuildingTemplate = Handlebars.compile(
        	['<tr id="{{htmlId}}" class="hidden">',
				'<td>',
					'<h3 class="default btn-link">',
						'{{name}}: <span id="{{htmlId}}Count">0</span>',
					'</h3>',
					'<span>',
						'{{desc}}',
						'<br>',
						'<p id="{{htmlId}}_cost"></p>',
					'</span>',
					'<button onclick="getBattery()" class="btn btn-default">Get Battery</button>',
				'</td>',
			'</tr>',].join('\n'));

        instance.machineTemplate = Handlebars.compile(
            ['<tr id="{{htmlId}}" class="hidden"><td>',
            '<h3 class="default btn-link">{{name}}: <span id="{{htmlId}}Count">0</span></h3>',
            '<span>',
                '<p>{{desc}}</p>',
                '<p id="{{htmlId}}_prod"></p>',
                '<p id="{{htmlId}}_use"></p>',
                '<p id="{{htmlId}}_cost"></p>',
            '</span>',
            '<div id="{{htmlId}}_buy" class="btn btn-default">Get 1</div>',
            '<hide class="multiBuy hidden">',
              '<div id="{{htmlId}}_buy_10" class="btn btn-default">Get 10</div>',
              '<div id="{{htmlId}}_buy_100" class="btn btn-default">Get 100</div>',
              '<div id="{{htmlId}}_buy_max" class="btn btn-default">Get Max</div>',
            '</hide>',
            '<div style="height:5px"></div>',
            '<hide id="{{id}}_destroy" class="hidden">',
              '<div id="{{htmlId}}_destroy" class="btn btn-default destroy">Destroy 1</div>',
              '<hide class="multiBuy hidden">',
                '<div id="{{htmlId}}_destroy_10" class="btn btn-default destroy">Destroy 10</div>',
                '<div id="{{htmlId}}_destroy_100" class="btn btn-default destroy">Destroy 100</div>',
                '<div id="{{htmlId}}_destroy_max" class="btn btn-default destroy">Nuke All</div>',
              '</hide>',
            '</hide>',
            '</td></tr>'].join('\n'));

		for(var id in Game.resourceCategoryData){
            Game.resources.categoryEntries[id] = Game.resourceCategoryData[id];
        }

        for(var id in Game.resources.categoryEntries) {
            this.tab.addCategory(id, Game.resources.categoryEntries[id].title);
        }

        for(var id in Game.resourceData) {
            this.createDisplay(id);
        }

        for (var id in RESOURCE) {
			if ($('#' + RESOURCE[id]).length > 0) {
				Game.ui.bindElement(RESOURCE[id], this.createResourceDelegate(RESOURCE[id]));
			}
			if ($('#' + RESOURCE[id] + 'ps').length > 0) {
				Game.ui.bindElement(RESOURCE[id] + 'ps', this.createProductionDelegate(RESOURCE[id]));
			}
			if ($('#' + RESOURCE[id] + 'Storage').length > 0) {
				Game.ui.bindElement(RESOURCE[id] + 'Storage', this.createStorageDelegate(RESOURCE[id]));
			}
			if ($('#' + RESOURCE[id] + 'NextStorage').length > 0) {
				Game.ui.bindElement(RESOURCE[id] + 'NextStorage', this.createNextStorageDelegate(RESOURCE[id]));
			}
		}

		for(var id in Game.buildings.storageEntries){
			var data = Game.buildings.storageEntries[id];
			Game.ui.bindElement('sto_' + id + 'Count', function(){ return Game.settings.format(Game.buildings.storageEntries[this.id.substring(4, this.id.length-5)].current)});
		}

		for(var id in Game.buildings.entries){
			var data = Game.buildings.entries[id];
			Game.ui.bindElement('resbld_' + id + 'Count', function(){ return Game.settings.format(Game.buildings.getBuildingData(this.id.substring(7, this.id.length-5)).current)});
		}

		// the auto bindings need to be updated after this is done
		Game.ui.updateAutoDataBindings();
	};

	instance.update = function(delta) {

	};

	instance.createDisplay = function(id) {
        var data = Game.resources.getResourceData(id);
        if(id != "science")
        	this.tab.addNavEntry(data.category, id);
        this.createResourceNav(data);
        this.entries[data.htmlId] = data;
    };

    instance.createResourceNav = function(data) {
        var target = $('#' + this.tab.getNavElementId(data.id));
        var html = this.navTemplate(data);
        this.createContent(data);
        target.append($(html));
    };

    instance.createContent = function(data) {
        var target = $('#' + this.tab.getContentElementId(data.id));
        var tabTitle = this.titleTemplate(data);
        target.append(tabTitle);
        if(data.id != "energy" && data.id != "plasma"){
	        var storage = this.earthStorageUpgradeTemplate(data);
	        if(data.id == "metal")
	        	storage = this.metalStorageUpgradeTemplate(data);
	        if((data.category != "earth" || data.id == "silicon" || data.id == "uranium" || data.id == "lava") && data.id != "lunarite" && data.id != "charcoal")
	        	storage = this.spaceStorageUpgradeTemplate(data);
	        target.append(storage);
	    } else {
	    	for (var id in Game.buildings.storageEntries) {
	    	    var storageData = Game.buildings.storageEntries[id];
	    	    if(data.id == storageData.resource){
	    	        this.createTierStorage(data, storageData);
	    	    }

	    	}
	    }
        for (var id in Game.buildings.entries) {
            var upgradeData = Game.buildings.entries[id];
            if(data.id == upgradeData.resource){
                this.createMachine(data, upgradeData);
            }
        }
    };

    instance.createTierStorage = function(data, storageData){
    	var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var storage = this.storageBuildingTemplate(storageData);
        tabContentRoot.append($(storage));
    }

    instance.addMachineClickEvents = function(htmlId, id) {
    	var amount = [1, 10, 100, 10000, 1, 10, 100, 10000];
    	var suff = ["_buy", "_buy_10", "_buy_100", "_buy_max",
    				"_destroy", "_destroy_10", "_destroy_100", "_destroy_max"];
    				
    	for (var i = 0; i < suff.length; i++) {
    		var node = document.getElementById(htmlId + suff[i]);
    		var funct = function () {Game.buildings.buyBuildings(id, amount[i]);}    		
    		Game.addEventListener(node, "click", funct);
    	}
    }

    instance.createMachine = function(data, machineData) {
        var tabContentRoot = $('#' + this.tab.getContentElementId(data.id));
        var machine = this.machineTemplate(machineData);
        tabContentRoot.append($(machine));

        // this.machineEntries[machineData.id] = data.id;
        // this.machineObservers[machineData.id] = [];
        // Game.ui.bindElement(machineData.resource + machineData.id + "Count", function(){ return Game.settings.format(machineData.count); });

        var segmentsUse = [];
        var segmentsProd = [];
        for(var resource in machineData.resourcePerSecond){
            var segmentX = {n: Game.utils.capitaliseFirst(resource), p: machineData.resourcePerSecond[resource]};
            if(segmentX.p < 0){
                segmentsUse.push(segmentX);
            } else {
                segmentsProd.push(segmentX);
            }
        }
        var useHtml = "<span>Uses </span>";
        var prodHtml = "<span>Produces </span>";
        for(var i = 0; i < segmentsUse.length; i++){
            var segmentData = segmentsUse[i];
            var html = '<span id="' + segmentData.n + 'Use">' + (segmentData.p*-1) + " " + segmentData.n + '</span>';
            useHtml += html;
            if(i < segmentsUse.length - 1) {
                useHtml += '<span>, </span>';
            }
        }
        for(var i = 0; i < segmentsProd.length; i++){
            var segmentData = segmentsProd[i];
            var html = '<span id="' + segmentData.n + 'Prod">' + segmentData.p + " " + segmentData.n + '</span>';
            prodHtml += html;
            if(i < segmentsProd.length - 1) {
                prodHtml += '<span>, </span>';
            }
        }
        useHtml += '<span> per second.</span>'
        prodHtml += '<span> per second.</span>'
        var target = $('#' + machineData.htmlId + '_use');
        target.empty()
        target.append(useHtml);
        var target = $('#' + machineData.htmlId + '_prod');
        target.empty()
        target.append(prodHtml);
        // Create the event handlers for this machine
        this.addMachineClickEvents(machineData.htmlId, machineData.id);
    };

	instance.createResourceDelegate = function(id) {
		var func;
		if (id === RESOURCE.Science) {
			func = (function() {
				var current = getResource(id);
				if (current < 100) {
					return Game.settings.format(current, 1);
				}
				else {
					return Game.settings.format(current);
				}
			});
		}
		else if (id === RESOURCE.RocketFuel) {
			func = (function() {
				var current = getResource(id);
				if (current < 100) {
					return Game.settings.format(current, 1);
				} else {
					return Game.settings.format(current);
				}
			});
		}
		else {
			func = (function() {
				return Game.settings.format(getResource(id));
			});
		}
		return func;
	};

	instance.createProductionDelegate = function(id) {
		var func;
		if (id === RESOURCE.Energy) {
			func = (function() {
				var production = getProduction(id);
				if (production >= 0) {
					if (production > 250) {
						return Game.settings.format(production);
					}
					else {
						return Game.settings.format(production * 2) / 2;
					}
				}
				else {
					if (production < -250) {
						return Math.round(production);
					}
					else {
						return Math.round(production * 2) / 2;
					}
				}
			});
		}
		else if (id === RESOURCE.Science) {
			func = (function() {
				return Game.settings.format(getProduction(id), 1);
			});
		}
		else if (id === RESOURCE.RocketFuel) {
			func = (function() {
				return Game.settings.format(getProduction(id), 1);
			});
		}
		else {
			func = (function() {
				return Game.settings.format(Game.resources.getResourceData(id).perSecond)
			});
		}

		return func;
	};

	instance.createStorageDelegate = function(id) {
		return (function() {
			return Game.settings.format(getStorage(id));
		});
	};

	instance.createNextStorageDelegate = function(id) {
		return (function() {
			return Game.settings.format(getStorage(id) * 2);
		});
	};

	return instance;

}());
