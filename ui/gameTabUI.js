'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
Templates.uiFunctions = function() {
    // Internal storage of links between menu items & panes
    // This saves on DOM lookups
    var menuStructure = {};
    var paneToMenu = {};
    // Storage of the last nav & menu item clicked
    var lastNav = "";
    var lastItem = "";



    var instance = {};
    instance.elementRegister = {};


    /**
     * Attaches HTML strings to an element
     * @param  {string} tag  A string representing the parent ID of the HTML
     * @param  {string} HTML The HTML code that needs to be added under ID
     * @return {boolean}     True on success
     */
    instance.attachHTML = function(page, tag, HTML) {
        var node = document.getElementById(tag)
        if (!node) {
            console.log(page+" - Could not add this tag to the game: "+tag);
            return false;
        }
        // Insert the node before the end of tag
        node.insertAdjacentHTML('beforeend', HTML);
        return true;
    }

    /**
     * Expands or collapses a menu in an animated way
     * @param {nodeList} children Contains a list of nodes that are affected
     * @param {boolean} expand   Will expand if true, collapse is false
     */
    instance.AnimateToggle = function(children, expand) {
        const delay = 30; //delay in ms

        // BUG only unhide/rehide unlocked menu items

        if (expand) {
            for (var i = 0; i < children.length; i++) {
                var node = document.getElementById(children[i]);
                setTimeout((function(node) {node.style.display = ''}), i*delay, node);
                node.classList.toggle('collapsed')
                node.setAttribute('aria-expanded', expand);
            }
        } else {
            for (var i = children.length-1; i >= 0; i--) {
                var node = document.getElementById(children[i]);
                setTimeout((function(node) {node.style.display = 'none'}), (children.length-i)*delay, node);
                node.classList.toggle('collapsed')
                node.setAttribute('aria-expanded', expand);
            }
        }

    }

    // Toggles a menu (class: collapsed)
    instance.toggle = function(DOMid) {
        var node = document.getElementById(DOMid);
        // Get a list of all nodes with the class DOMid
        var children = menuStructure[DOMid];
        // Send the list to the animator.
        var expand = node.classList.contains('collapsed')
        this.AnimateToggle(children, expand)
        node.classList.toggle('collapsed')
        // Adjust aria-expanded
        node.setAttribute('aria-expanded', expand);
    }

    // shows a single item (class: hidden)
    instance.show = function(DOMid) {
        Object.keys(Game.pages).forEach(function(page) {
            var node = document.getElementById(page+'_'+DOMid);
            if (node && node.classList.contains("hidden")) {
                node.classList.remove("hidden");
            }           
        })
    }

    // Hide a single item (class: hidden)
    instance.hide = function(DOMid) {
        Object.keys(Game.pages).forEach(function(page) {
            var node = document.getElementById(page+'_'+DOMid);
            if (node && !node.classList.contains("hidden")) {
                node.classList.add("hidden");
            }           
        })
    }

// function to remove a given class from all elements containing that class


    var unlockMenu = function(id) {
        paneToMenu[id].forEach(function(htmlId) {
            var node = document.getElementById(htmlId)
            if (node) {
                node.classList.remove("hidden");
            }
        })
        document.getElementById(id).classList.remove("hidden");
    }

    // unhides the entire path leading up to DOMid
    // Setting the object entries to unlocked has to be done
    // somewhere else. (class: hidden)
    instance.unlock = function(DOMid) {
        // Loop through all pages to find this ID
        var found = false;
        var pages = Object.keys(Game.pages);
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            var topNode = document.getElementById(page+'Tab_content');
            if (!topNode) {continue;}
            var node = topNode.querySelector('#'+page+"_"+DOMid);
            if (node == null) {continue;}
            // The node is found on this page.
            found = true;
            // Loop up the DOM tree until page+'Tab_content' is reached.
            while (node != topNode) {
                node.classList.remove("hidden");
                // Is this node.id linked by the menu?
                if (node.id in paneToMenu) {unlockMenu(node.id);}
                node = node.parentNode;
            }
            topNode.classList.remove("hidden");
        }
        if (found) {
            return true;
        } else {
            console.log("Couldn't find "+DOMid+" on any of the pages.");
            console.log("Only unlock items on the content pane, the menu and nav are handled automatically.");
            return false;
        }
    }

    // hides DOMid and all of its subnodes
    // Setting the object entries to locked has to be done
    // somewhere else (class: hidden)
    instance.lock = function(DOMid) {

    }

    // Whenever the player clicks a regular menu item, this function runs.
    instance.clickItem = function(DOMid) {
        var node = document.getElementById(DOMid+'Glyph');
        if (node) {node.classList.add('hidden');}
        lastItem = DOMid;
    }

    // Whenever the player clicks a tab, this function runs
    instance.clickNav = function(DOMid) {
        var node = document.getElementById(DOMid+'Glyph');
        if (node) {node.classList.add('hidden');}
        lastNav = DOMid;
    }

    instance.registerNavigation = function(navigation) {
        if (!(navigation in menuStructure)) {menuStructure[navigation] = {};}
    }

    instance.registerMenuHeader = function(navigation, header) {
        this.registerNavigation(navigation);
        if (!(header in menuStructure[navigation])) {
            menuStructure[navigation][header] = {};
        }
    }

    instance.registerMenuItem = function(navigation, header, item) {
        // The menuStructure Object lists which items belong to a header
        this.registerMenuHeader(navigation, header);
        if (!(item in menuStructure[navigation][header])) {
            menuStructure[navigation][header][item] = "";
        }
    }

    instance.registerPane = function(navigation, header, item, pane) {
        this.registerMenuItem(navigation, header, item);
        menuStructure[navigation][header][item] = pane
        // The paneToMenu objects allows us to travel up the DOM from a pane
        if (!(pane in paneToMenu)) { paneToMenu[pane] = []; }
        paneToMenu[pane][0] = item;
        paneToMenu[pane][1] = header;
        paneToMenu[pane][2] = navigation;
    }

    instance.getPaneToMenu = function() {
        console.log(paneToMenu);
    }
    instance.getMenuStructure = function() {
        console.log(menuStructure);
    }
   
    // 
    instance.registerElement = function(htmlId, action, item) {
        if (!(action in this.elementRegister)) {
            this.elementRegister[action] = {}
        }
        this.elementRegister[action][htmlId] = {};
        this.elementRegister[action][htmlId].oldValue = -1;
        this.elementRegister[action][htmlId].item = item
        if (action == 'current') {console.log("registered current")}
    }



    instance.updateElements = function(action) {
        if (!(action in Templates.uiFunctions.elementRegister)) {return false;}

        if (action == "gain") {
            var process = function(item) {return "Gain: "+Game.resources.entries[item].gainNum;}
        } else if (action == "perSecond") {
            var process = function(item) {return Game.resources.getProduction(item);}
        } else if (action == "current") {
            var process = function(item) {return Game.resources.getResource(item);}
        } else if (action == "storage") {
            var process = function(item) {return Game.resources.getStorage(item);}
        } else if (action == "nextStorage") {
            var process = function(item) {return Game.resources.getStorage(item)*2;}
        } else if (action == "resbldCount") {
            var process = function(item) {return Game.buildings.entries[item].current;}
        } else if (action == "stoCount") {
            var process = function(item) {return Game.buildings.storageEntries[item].current;}
        } else if (action == "resbldCost") {
            var process = function(item) {return Game.buildings.entries[item].cost;}
        } else if (action == "stoCost") {
            var process = function(item) {return Game.buildings.storageEntries[item].cost;}
        } else if (action == "storageTime") {
            var process = function(item) {return "N/A";}
        } else if (action == "storageCost") {
            var process = function(item) {return Game.resources.entries[item].storUpgrades;}
        } else {return false;}
        
        Object.keys(Templates.uiFunctions.elementRegister[action]).forEach(function(id) {
            var obj = Templates.uiFunctions.elementRegister[action][id];
            var current = process(obj.item);
            if (obj.oldValue != current) {
                // TODO FORMATTING
                document.getElementById(id).innerHTML = '<span>'+current+'</span>';
                obj.oldValue = current;
            }
        })
    }




    // registers an event
    instance.linkEvents = function() {
        Object.keys(Game.pages).forEach(function(page) {
            var parentNode = document.getElementById(page+'Tab_pane');
            var nodes = parentNode.querySelectorAll('[id]');
            var match = [];
            var unmatched = [];
            var funct = "";
            var node = "";
            // Loop through all the ids of the menu and register its events
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

        // These are regex matches. (.*) matches any consecutive pattern of a-z, A-Z, 0-9
        // Don't use special characters in names (eg: [](),;:_!)

        // Match (resources)_(plasma)_Gain
        case (match = getCase(id, "^(.*)_(.*)_Gain$")).input:
            funct = new Function("addManualResource('"+match[2]+"')");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            Templates.uiFunctions.registerElement(id, 'gain', match[2]);
            break;
        // Match (resources)_resbld_(energyT1)_buy_(1)
        case (match = getCase(id, "^(.*)_resbld_(.*)_buy_(.*)$")).input:
            funct = new Function("Game.buildings.buyBuildings('"+match[2]+"', "+parseInt(match[3])+")");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;
        // Match (resources)_resbld_(energyT1)_destroy_(1)
        case (match = getCase(id, "^(.*)_resbld_(.*)_destroy_(.*)$")).input:
            funct = new Function("Game.buildings.destroyBuildings('"+match[2]+"', "+parseInt(match[3])+")");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;
        // Match (resources)_sto_(energyT1)_buy_(1)
        case (match = getCase(id, "^(.*)_sto_(.*)_buy_(.*)$")).input:
            funct = new Function("Game.buildings.buyBuildings('"+match[2]+"', "+parseInt(match[3])+")");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;
        // Match (resources)_sto_(energyT1)_destroy_(1)
        case (match = getCase(id, "^(.*)_sto_(.*)_destroy_(.*)$")).input:
            funct = new Function("Game.buildings.destroyBuildings('"+match[2]+"', "+parseInt(match[3])+")");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;
        // Match the menu headers - #resourcesTab_energy_collapse
        case (match = getCase(id, "^(.*)Tab_(.*)_collapse$")).input:
            funct = new Function("Templates.uiFunctions.toggle('"+id+"')");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;
        // Match the menu headers - #resourcesTab_energy_collapse
        case (match = getCase(id, "^resourcesTab_(.*)_ne$")).input:
            funct = new Function("Templates.uiFunctions.clickItem('"+id+"')");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;
        // Match (resources)_(plasma)_StorageUpgrade
        case (match = getCase(id, "^(.*)_(.*)_StorageUpgrade$")).input:
            funct = new Function("Game.resources.upgradeStorage('"+match[2]+"')");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            break;



        //////////////////
        // bindElements //
        //////////////////




        // Match (resources)_(energy)ps_display element and bind it
        case (match = getCase(id, "^(.*)_(.*)ps_display$")).input:
            //Game.ui.bindElement(id, new Function('return Game.resources.getDisplayProduction("'+match[1]+'");'));
            Templates.uiFunctions.registerElement(id, 'perSecond', match[2]);
            break;
        // Match the (resources)_(energy)_current element and bind it
        case (match = getCase(id, "^(.*)_(.*)_current$")).input:
            Templates.uiFunctions.registerElement(id, 'current', match[2]);
            break;
        // Match (resources)_(energy)_Storage
        case (match = getCase(id, "^(.*)_(.*)Storage$")).input:
            Templates.uiFunctions.registerElement(id, 'storage', match[2]);
            break;
        // Match (resources)_(energy)_NextStorage
        case (match = getCase(id, "^(.*)_(.*)_NextStorage$")).input:
            Templates.uiFunctions.registerElement(id, 'nextStorage', match[2]);
            break;
        // Match (resources)_resbld_(metalT1)_Count
        case (match = getCase(id, "^(.*)_resbld_(.*)_Count$")).input:
            Templates.uiFunctions.registerElement(id, 'resbldCount', match[2]);
            break;
        // Match (resources)_sto_(energyT1)_Count
        case (match = getCase(id, "^(.*)_sto_(.*)_Count$")).input:
            Templates.uiFunctions.registerElement(id, 'stoCount', match[2]);
            break;
        // Match (resources)_resbld_(metalT1)_Cost
        case (match = getCase(id, "^(.*)_resbld_(.*)_Cost$")).input:
            Templates.uiFunctions.registerElement(id, 'resbldCost', match[2]);
            break;
        // Match (resources)_sto_(energyT1)_Cost
        case (match = getCase(id, "^(.*)_sto_(.*)_Cost$")).input:
            Templates.uiFunctions.registerElement(id, 'stoCost', match[2]);
            break;
        // Match (resources)_(plasma)_SelectStorage_Time
        case (match = getCase(id, "^(.*)_(.*)_SelectStorage_Time$")).input:
            Templates.uiFunctions.registerElement(id, 'storageTime', match[2]);
            break;
        // Match (resources)_(plasma)_StorageUpgrade_Cost
        case (match = getCase(id, "^(.*)_(.*)_StorageUpgrade_Cost$")).input:
            Templates.uiFunctions.registerElement(id, 'storageCost', match[2]);
            break;




        ////////////
        // Unused //
        ////////////


        // Match (resources)Tab_nav
        case (match = getCase(id, "^(.*)Tab_nav$")).input:
            break;
        // Match (resources)_(energy)StorageBox
        case (match = getCase(id, "^(.*)_(.*)StorageBox$")).input:
            break;
        // Match (resources)Tab_content
        case (match = getCase(id, "^(.*)Tab_content$")).input:
            break;
        // Match (resources)Tab_(energy)_nec
        case (match = getCase(id, "^(.*)Tab_(.*)_nec$")).input:
            break;
        // Match (resources)Tab_(energy)_netc
        case (match = getCase(id, "^(.*)Tab_(.*)_netc$")).input:
            break;
        // Match (resources)_(sto)_(energyT1)_Container & (resources)_(resbld)_(energyT1)_Container
        case (match = getCase(id, "^(.*)_(.*)_(.*)_Container$")).input:
            break;
        // Match (resources)_(plasma)_SelectStorage_Limit
        case (match = getCase(id, "^(.*)_(.*)_SelectStorage_Limit$")).input:
            break;


        default:
            unmatched.push(id);

                }
            });
            // Match the navigation menu - solarTab
            node = document.getElementById(page+"Tab")
            funct = new Function("Templates.uiFunctions.clickNav('"+page+"Tab')");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            if (unmatched.length > 0) {
                console.log("There are unhandled ids in "+page+":")
                console.log(unmatched)
            }
        })
    }

    instance.addUIEventListener = function(target, event, callback) {
        if (!target) { return false; }
        if (target.addEventListener) {
            target.addEventListener(event, callback, false);
        } else if (target.attachEvent) {
            target.attachEvent("on"+event, callback);
        } else {
            target['on'+event] = callback;
        }
        return true;
    };

    return instance;

}();
Templates.uiFunctions.addUIEventListener(window, "load", function() {Game.start()});








(function(){

    var tabTemplate = Handlebars.compile(
        ['<li role="presentation" id="{{htmlId}}" class="{{active}}">',
            '<a href="#{{htmlId}}_pane" id="{{htmlId}}_link" class="{{hidden}}" aria-controls="{{id}}" role="tab" data-toggle="tab">',
            '<div id="{{id}}TabGlyph" class="glyphicon glyphicon-exclamation-sign hidden"></div>',
            '{{title}}</a></li>'].join('\n'));

    var contentTemplate = Handlebars.compile(
        ['<div role="tabpanel" class="tab-pane fade {{active}} in" id="{{htmlId}}_pane">',
            '<div class="container" style="width:380px; padding:0; float:left;">',
            '<table class="table table-hover text-primary no-select pointer" ><tbody id="{{htmlId}}_nav"></tbody></table>',
            '</div>',
            '<div class="tab-content" id="{{htmlId}}_content"></div>',
        '</div>'].join('\n'));

    var categoryTemplate = Handlebars.compile(
        ['<tr id="{{htmlId}}_{{id}}_collapse" style="border:none;">',
            '<td colspan="4" style="border:{{border}}">',
            '<span>{{title}}</span> <span class="caret"></span>',
            '</td>',
            '</tr>'].join('\n'));

    var navEntryTemplate = Handlebars.compile(
        ['<tr id="{{htmlId}}_{{id}}_ne" href="#{{htmlId}}_{{id}}_nec" class="collapse_{{htmlId}}_{{category}}" aria-controls="{{htmlId}}_{{id}}_nec" role="tab" data-toggle="tab" style="height:60px;" aria-expanded="true">',
         '</tr>'].join('\n'));

    var navEntryContentTemplate = Handlebars.compile(
        ['<div id="{{htmlId}}_{{id}}_nec" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
            '<div class="container" style="max-width:800px;">',
            '<table class="table"><tbody id="{{htmlId}}_{{id}}_netc"></tbody></table>',
            '</div>',
            '</div>'].join('\n'));

    var tabRoot = $('#tabList');
    var tabContentRoot = $('#tabContent');

    var tabRegister = {};

    function GameTab(data) {
        if (tabRegister[data.id]) {
            console.error("Duplicate Tab Registered: " + data.id);
        }

        this.categories = {};
        this.categoryEntries = {};

        this.onActivate = null;
        this.onNavActivate = null;

        this.data = data;
        this.data.htmlId = data.id + "Tab";

        tabRegister[data.id] = this;
    }

    // ---------------------------------------------------------------------------
    // basic functions
    // ---------------------------------------------------------------------------
    GameTab.prototype.initialise = function() {
        console.log("initialising:")
        var html = tabTemplate(this.data);
        if(this.data.id == "resources"){
            if(this.data.append == true){
                tabRoot.append($(html));
            } else{
                tabRoot.prepend($(html));
            }
        }
        else{
            
            if(this.data.prepend == true){
                tabRoot.prepend($(html));
            } else{
                tabRoot.append($(html));
            }
        }

        var contentHtml = contentTemplate(this.data);
        tabContentRoot.append($(contentHtml));

        var link = $('#' + this.data.htmlId + '_link');
        link.click({id: this.data.id}, function(args) { tabRegister[args.data.id].activate(); });
    };

    GameTab.prototype.show = function() {
        $('#' + this.data.htmlId).show();
    };

    GameTab.prototype.hide = function() {
        $('#' + this.data.htmlId).hide();
    };

    GameTab.prototype.showCategory = function(id) {
        $('#' + this.data.htmlId + '_' + id + '_collapse').show();
    };

    GameTab.prototype.hideCategory = function(id) {
        $('#' + this.data.htmlId + '_' + id + '_collapse').hide();
    };

    GameTab.prototype.activate = function() {
        $('#' + this.data.id + 'TabGlyph').addClass('hidden');

        if (this.onActivate !== null) {
            this.onActivate(this.data.id);
        }
    };

    GameTab.prototype.addCategory = function(id, title) {
        var border;
        if(id == "energy")
            border = "none";
        else
            border = "";
        var data = {id: id, title: title, htmlId: this.data.htmlId, border: border};
        var html = categoryTemplate(data);
        this.categories[id] = data;
        this.categoryEntries[id] = [];

        $('#' + this.data.htmlId + '_nav').append($(html));

        $('#' + this.data.htmlId + '_' + id + '_collapse').click({htmlId: this.data.htmlId, category: id}, function(args) {
            var htmlId = args.data.htmlId;
            var category = args.data.category;
            if($(this).hasClass("collapsed")){
                $('.collapse_' + htmlId + '_' + category).show();
                $(this).removeClass("collapsed");
            } else {
                $('.collapse_' + htmlId + '_' + category).hide();
                $(this).addClass("collapsed");
            }
        });
    };

    GameTab.prototype.addNavEntry = function(category, id) {
        if(!this.categories[category]) {
            console.error("addNavEntry called with invalid category: " + category);
            return;
        }

        var data = {id: id, htmlId: this.data.htmlId, category: category};
        var html = navEntryTemplate(data);
        var element = $(html);

        if(this.categoryEntries[category].length > 0) {
            var lastCategoryId = this.categoryEntries[category][this.categoryEntries[category].length - 1];
            $('#' + this.data.htmlId + '_' + lastCategoryId + '_ne').after(element);
        } else {
            $('#' + this.data.htmlId + '_' + this.categories[category].id + '_collapse').after(element);
        }

        $('#' + this.data.htmlId + '_' + id + '_ne').click({self: this, id: id, htmlId: this.data.htmlId, category: category}, function(args) {
            var self = args.data.self;
            for(var id in self.categoryEntries) {
                for(var i = 0; i < self.categoryEntries[id].length; i++) {
                    $('#' + args.data.htmlId + '_' + self.categoryEntries[id][i] + '_ne').removeClass('info');
                }
            }

            $(this).addClass('info');

            if(args.data.self.onNavActivate !== null) {
                args.data.self.onNavActivate(args.data.id);
            }
        });

        var contentHtml = navEntryContentTemplate(data);
        var contentElement = $(contentHtml);
        $('#' + this.data.htmlId + '_content').append(contentElement);

        this.categoryEntries[category].push(id);
    };

    GameTab.prototype.categoryHasEntries = function(category) {
        return this.categoryEntries[category].length;
    };

    GameTab.prototype.categoryHasUnlockedEntries = function(category) {
        for(var i = 0; i < this.categoryEntries[category].length; i++) {
            var res = Game.resources.getResourceData(this.categoryEntries[category][i]);
            if(res.unlocked) return true;
        }

        return false;
    };

    GameTab.prototype.getContentElementId = function(id) {
        return this.data.htmlId + '_' + id + '_netc';
    };

    GameTab.prototype.getNavElementId = function(id) {
        return this.data.htmlId + '_' + id + '_ne';
    };

    // ---------------------------------------------------------------------------
    // registration
    // ---------------------------------------------------------------------------
    Game.ui.createTab = function(data) {
        return new GameTab(data);
    }

}());